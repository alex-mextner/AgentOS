import type { APIRoute } from 'astro';

// Waitlist capture endpoint (on-demand — the only non-prerendered route on the site).
//
// Runtime path: browser POSTs JSON `{ email }` here from WaitlistForm.tsx. We validate
// the address, then persist it via the first configured destination:
//   1. Kit (kit.com) — set `KIT_API_KEY`; optionally `KIT_WAITLIST_TAG_ID` to tag signups.
//   2. Generic webhook — set `WAITLIST_WEBHOOK_URL` (Formspree / Basin / Zapier / etc.).
// If NEITHER is configured we do not pretend to store anything: we log the signup to the
// Vercel function log (retrievable, but not durable) and return `stored: false` so the
// honesty is machine-readable.
export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const KIT_API = 'https://api.kit.com/v4';

// This is a Node serverless route (prerender = false), so runtime env vars live in
// process.env. Do NOT read import.meta.env by a dynamic key — Vite only statically replaces
// `import.meta.env.LITERAL`, and a computed key throws under the dev module runner and
// resolves to undefined in the build.
const SUBSCRIBE_TIMEOUT_MS = 6000;
// Tagging is best-effort and runs AFTER the subscribe call. Its budget is kept small so the
// worst-case server time (subscribe + tag) stays comfortably under the client abort budget
// below — otherwise a slow tag yields a false "network error" for an email that WAS stored.
const TAG_TIMEOUT_MS = 2500;

function env(name: string): string | undefined {
  return process.env[name];
}

// Never write a full address to the platform logs — keep only what's useful for debugging.
function maskEmail(email: string): string {
  const at = email.indexOf('@');
  if (at < 1) return '***';
  return `${email[0]}***${email.slice(at)}`;
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

async function readEmail(request: Request): Promise<string | null> {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      const data = (await request.json()) as { email?: unknown };
      return typeof data.email === 'string' ? data.email : null;
    }
    const form = await request.formData();
    const value = form.get('email');
    return typeof value === 'string' ? value : null;
  } catch {
    return null;
  }
}

async function forward(webhookUrl: string, email: string, source: string): Promise<boolean> {
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({ email, source, at: new Date().toISOString() }),
      signal: AbortSignal.timeout(SUBSCRIBE_TIMEOUT_MS),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function kitHeaders(apiKey: string): Record<string, string> {
  return { 'content-type': 'application/json', accept: 'application/json', 'x-kit-api-key': apiKey };
}

// Best-effort tag; a tagging failure must not fail the signup itself.
async function tagSubscriber(apiKey: string, tagId: string, subscriberId: number): Promise<void> {
  try {
    const res = await fetch(`${KIT_API}/tags/${tagId}/subscribers/${subscriberId}`, {
      method: 'POST',
      headers: kitHeaders(apiKey),
      body: '{}', // Kit's tag-a-subscriber endpoint documents an empty JSON object body.
      signal: AbortSignal.timeout(TAG_TIMEOUT_MS),
    });
    if (!res.ok) console.warn(`[waitlist] kit tag ${tagId} failed: HTTP ${res.status}`);
  } catch (err) {
    console.warn('[waitlist] kit tag error:', err);
  }
}

// Create/refresh the subscriber in Kit, then optionally tag it. Returns true if the
// subscriber was persisted (Kit upserts by email, so a repeat signup is idempotent).
async function subscribeViaKit(apiKey: string, email: string): Promise<boolean> {
  try {
    const res = await fetch(`${KIT_API}/subscribers`, {
      method: 'POST',
      headers: kitHeaders(apiKey),
      body: JSON.stringify({ email_address: email }),
      signal: AbortSignal.timeout(SUBSCRIBE_TIMEOUT_MS),
    });
    if (!res.ok) {
      console.warn(`[waitlist] kit subscribe failed: HTTP ${res.status}`);
      return false;
    }
    const data = (await res.json().catch(() => ({}))) as {
      subscriber?: { id?: number; state?: string };
    };
    const sub = data.subscriber;
    // A 2xx alone is not proof of an active signup. Require a subscriber id and an active
    // state: Kit does NOT reactivate an existing cancelled/bounced/complained address via
    // this upsert (it returns 200 with the stale state), and a body without an id means the
    // upsert did not land the way we expect. In either case we must not report `stored`.
    if (!sub?.id || sub.state !== 'active') {
      console.warn(`[waitlist] kit did not confirm ${maskEmail(email)}: id=${sub?.id} state=${sub?.state}`);
      return false;
    }
    const tagId = env('KIT_WAITLIST_TAG_ID');
    if (tagId) await tagSubscriber(apiKey, tagId, sub.id);
    return true;
  } catch (err) {
    console.warn('[waitlist] kit error:', err);
    return false;
  }
}

export const POST: APIRoute = async ({ request }) => {
  const raw = await readEmail(request);
  const email = raw?.trim().toLowerCase() ?? '';

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return json({ ok: false, error: 'Enter a valid email address.' }, 400);
  }

  const kitApiKey = env('KIT_API_KEY');
  if (kitApiKey) {
    if (!(await subscribeViaKit(kitApiKey, email))) {
      return json({ ok: false, error: 'Could not reach the waitlist service. Try again shortly.' }, 502);
    }
    return json({ ok: true, stored: true }, 200);
  }

  const webhookUrl = env('WAITLIST_WEBHOOK_URL');
  if (webhookUrl) {
    const source = (() => {
      try {
        return new URL(request.url).host;
      } catch {
        return 'agentos-bible';
      }
    })();
    if (!(await forward(webhookUrl, email, source))) {
      return json({ ok: false, error: 'Could not reach the waitlist service. Try again shortly.' }, 502);
    }
    return json({ ok: true, stored: true }, 200);
  }

  // No capture destination configured — record to the function log and be honest about it.
  console.log(`[waitlist] signup (not persisted — set KIT_API_KEY or WAITLIST_WEBHOOK_URL): ${maskEmail(email)}`);
  return json({ ok: true, stored: false }, 200);
};

// Anything other than POST is a no-op for this route.
export const GET: APIRoute = () => json({ ok: false, error: 'POST an email to join the waitlist.' }, 405);

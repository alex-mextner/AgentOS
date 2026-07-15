import type { APIRoute } from 'astro';

// Waitlist capture endpoint (on-demand — the only non-prerendered route on the site).
//
// Runtime path: browser POSTs JSON `{ email }` here from WaitlistForm.tsx. We validate
// the address, then forward it to whatever capture destination the owner has configured
// via the `WAITLIST_WEBHOOK_URL` env var (Formspree / Basin / Zapier / any webhook that
// accepts a JSON POST). If that env var is UNSET, we do not pretend to store anything:
// we log the signup to the Vercel function log (retrievable, but not durable) and return
// `stored: false` so the honesty is machine-readable. See the PR body for the one env var
// the owner must set to actually capture emails.
export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

async function forward(webhookUrl: string, email: string): Promise<boolean> {
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({ email, source: 'agentos-bible.vercel.app', at: new Date().toISOString() }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export const POST: APIRoute = async ({ request }) => {
  const raw = await readEmail(request);
  const email = raw?.trim().toLowerCase() ?? '';

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return json({ ok: false, error: 'Enter a valid email address.' }, 400);
  }

  const webhookUrl = import.meta.env.WAITLIST_WEBHOOK_URL ?? process.env.WAITLIST_WEBHOOK_URL;

  if (webhookUrl) {
    const forwarded = await forward(webhookUrl, email);
    if (!forwarded) {
      return json({ ok: false, error: 'Could not reach the waitlist service. Try again shortly.' }, 502);
    }
    return json({ ok: true, stored: true }, 200);
  }

  // No capture destination configured — record to the function log and be honest about it.
  console.log(`[waitlist] signup (not persisted — set WAITLIST_WEBHOOK_URL): ${email}`);
  return json({ ok: true, stored: false }, 200);
};

// Anything other than POST is a no-op for this route.
export const GET: APIRoute = () => json({ ok: false, error: 'POST an email to join the waitlist.' }, 405);

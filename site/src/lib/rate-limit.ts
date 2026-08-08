// Fixed-window rate limiter for the public waitlist route.
//
// Serverless functions do not share memory, so a purely in-process counter cannot enforce a
// global limit. When Upstash Redis REST credentials are present we use them (a shared store,
// correct across instances); otherwise we fall back to a best-effort in-memory window that at
// least throttles a burst hitting the same warm instance. Either way the route stays usable.

export interface RateLimitResult {
  allowed: boolean;
  /** Seconds the caller should wait before retrying (0 when allowed). */
  retryAfterSec: number;
}

export interface RateLimitOptions {
  windowSec: number;
  max: number;
  /** Injected for tests; defaults to Date.now. */
  now?: () => number;
}

const DEFAULTS: RateLimitOptions = { windowSec: 60, max: 5 };

/** Bucket key for the current fixed window. */
function windowKey(id: string, windowSec: number, nowMs: number): string {
  return `wl:${id}:${Math.floor(nowMs / 1000 / windowSec)}`;
}

// --- in-memory fallback (per warm instance) --------------------------------------------

const memory = new Map<string, { count: number; resetAtMs: number }>();

function inMemory(id: string, opts: Required<RateLimitOptions>): RateLimitResult {
  const nowMs = opts.now();
  const key = windowKey(id, opts.windowSec, nowMs);
  const resetAtMs = (Math.floor(nowMs / 1000 / opts.windowSec) + 1) * opts.windowSec * 1000;
  const entry = memory.get(key) ?? { count: 0, resetAtMs };
  entry.count += 1;
  memory.set(key, entry);
  pruneMemory(nowMs);
  if (entry.count > opts.max) {
    return { allowed: false, retryAfterSec: Math.max(1, Math.ceil((resetAtMs - nowMs) / 1000)) };
  }
  return { allowed: true, retryAfterSec: 0 };
}

function pruneMemory(nowMs: number): void {
  for (const [key, entry] of memory) {
    if (entry.resetAtMs <= nowMs) memory.delete(key);
  }
}

// --- Upstash Redis REST (shared store) -------------------------------------------------

interface Upstash {
  url: string;
  token: string;
}

function upstashConfig(): Upstash | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

// INCR the window counter and set its TTL on first hit, in one pipelined round-trip.
// Upstash returns per-command results in an HTTP-200 body, so a permission or syntax error
// surfaces as an `error` field, NOT a non-2xx status. We must inspect every command result and
// require a real integer counter — otherwise a broken pipeline would silently allow everything.
async function upstash(
  cfg: Upstash,
  id: string,
  opts: Required<RateLimitOptions>,
): Promise<RateLimitResult> {
  const nowMs = opts.now();
  const key = windowKey(id, opts.windowSec, nowMs);
  const res = await fetch(`${cfg.url}/pipeline`, {
    method: 'POST',
    headers: { authorization: `Bearer ${cfg.token}`, 'content-type': 'application/json' },
    body: JSON.stringify([
      ['INCR', key],
      ['EXPIRE', key, String(opts.windowSec), 'NX'],
    ]),
    signal: AbortSignal.timeout(2000),
  });
  if (!res.ok) throw new Error(`upstash HTTP ${res.status}`);
  const parsed = (await res.json()) as Array<{ result?: unknown; error?: string }>;
  if (!Array.isArray(parsed) || parsed.length < 2) throw new Error('upstash: malformed pipeline response');
  for (const cmd of parsed) {
    if (cmd?.error) throw new Error(`upstash command error: ${cmd.error}`);
  }
  const count = parsed[0]?.result;
  if (typeof count !== 'number' || !Number.isFinite(count)) {
    throw new Error('upstash: INCR did not return a counter');
  }
  if (count > opts.max) {
    return { allowed: false, retryAfterSec: opts.windowSec };
  }
  return { allowed: true, retryAfterSec: 0 };
}

/**
 * Rate-limit a caller identified by `id` (typically their IP). Never throws: an Upstash
 * outage degrades to the in-memory limiter rather than failing the signup.
 */
export async function rateLimit(id: string, options?: Partial<RateLimitOptions>): Promise<RateLimitResult> {
  const opts: Required<RateLimitOptions> = {
    windowSec: options?.windowSec ?? DEFAULTS.windowSec,
    max: options?.max ?? DEFAULTS.max,
    now: options?.now ?? Date.now,
  };
  const cfg = upstashConfig();
  if (cfg) {
    try {
      return await upstash(cfg, id, opts);
    } catch (err) {
      console.warn('[waitlist] upstash rate-limit unavailable, using in-memory:', err);
    }
  }
  return inMemory(id, opts);
}

/** Best-effort client IP from the platform's forwarding headers. */
export function clientId(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0]!.trim();
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

/** Test-only: clear the in-memory window store. */
export function __resetInMemory(): void {
  memory.clear();
}

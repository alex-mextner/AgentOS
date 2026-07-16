import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { rateLimit, clientId, __resetInMemory } from '../src/lib/rate-limit';

describe('rateLimit (in-memory fallback)', () => {
  beforeEach(() => __resetInMemory());

  it('allows requests up to the limit, then blocks with a retry-after', async () => {
    const opts = { windowSec: 60, max: 3, now: () => 1_000_000 };
    const results = [];
    for (let i = 0; i < 4; i += 1) results.push(await rateLimit('ip-a', opts));
    expect(results.slice(0, 3).every((r) => r.allowed)).toBe(true);
    expect(results[3].allowed).toBe(false);
    expect(results[3].retryAfterSec).toBeGreaterThan(0);
  });

  it('scopes the counter per id', async () => {
    const opts = { windowSec: 60, max: 1, now: () => 2_000_000 };
    expect((await rateLimit('ip-x', opts)).allowed).toBe(true);
    expect((await rateLimit('ip-y', opts)).allowed).toBe(true); // different id, own window
    expect((await rateLimit('ip-x', opts)).allowed).toBe(false); // same id, over limit
  });

  it('resets in a later window', async () => {
    let t = 3_000_000;
    const opts = { windowSec: 60, max: 1, now: () => t };
    expect((await rateLimit('ip-z', opts)).allowed).toBe(true);
    expect((await rateLimit('ip-z', opts)).allowed).toBe(false);
    t += 61_000; // advance past the window
    expect((await rateLimit('ip-z', opts)).allowed).toBe(true);
  });
});

describe('rateLimit (Upstash shared store)', () => {
  beforeEach(() => {
    __resetInMemory();
    process.env.UPSTASH_REDIS_REST_URL = 'https://redis.test';
    process.env.UPSTASH_REDIS_REST_TOKEN = 'tok';
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
  });

  const opts = { windowSec: 60, max: 5, now: () => 4_000_000 };

  it('blocks when the shared counter exceeds the limit', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify([{ result: 6 }, { result: 1 }]), { status: 200 })));
    expect((await rateLimit('ip', opts)).allowed).toBe(false);
  });

  it('allows when the shared counter is under the limit', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify([{ result: 2 }, { result: 1 }]), { status: 200 })));
    expect((await rateLimit('ip', opts)).allowed).toBe(true);
  });

  it('does NOT fail open on a per-command error — degrades to in-memory instead', async () => {
    // A permission/syntax error surfaces inside a 200 body. The old code read result ?? 0 and
    // allowed everything; now it must reject the Upstash result and fall back to in-memory.
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(JSON.stringify([{ error: 'NOPERM' }, { result: 1 }]), { status: 200 })),
    );
    const first = await rateLimit('ip-err', { windowSec: 60, max: 1, now: () => 5_000_000 });
    const second = await rateLimit('ip-err', { windowSec: 60, max: 1, now: () => 5_000_000 });
    expect(first.allowed).toBe(true); // in-memory first hit
    expect(second.allowed).toBe(false); // in-memory enforces the limit — not fail-open
  });

  it('falls back to in-memory when Upstash returns a non-2xx', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response('boom', { status: 500 })));
    expect((await rateLimit('ip-5xx', opts)).allowed).toBe(true); // memory allows first hit
  });
});

describe('clientId', () => {
  it('takes the first x-forwarded-for hop', () => {
    const req = new Request('https://s.test', { headers: { 'x-forwarded-for': '9.9.9.9, 10.0.0.1' } });
    expect(clientId(req)).toBe('9.9.9.9');
  });

  it('falls back to x-real-ip then unknown', () => {
    expect(clientId(new Request('https://s.test', { headers: { 'x-real-ip': '8.8.8.8' } }))).toBe('8.8.8.8');
    expect(clientId(new Request('https://s.test'))).toBe('unknown');
  });
});

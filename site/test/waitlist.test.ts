import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { POST, GET } from '../src/pages/api/waitlist';
import { __resetInMemory } from '../src/lib/rate-limit';

// A fresh IP per test keeps the shared in-memory rate-limit window from bleeding across cases.
let ipCounter = 0;
function post(body: unknown, headers: Record<string, string> = {}): Promise<Response> {
  ipCounter += 1;
  const req = new Request('https://agentos-bible.test/api/waitlist', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-forwarded-for': `10.0.0.${ipCounter}`, ...headers },
    body: JSON.stringify(body),
  });
  return POST({ request: req } as never) as Promise<Response>;
}

function kitOk() {
  return new Response(JSON.stringify({ subscriber: { id: 1, state: 'active' } }), { status: 200 });
}

const savedEnv = { ...process.env };

beforeEach(() => {
  __resetInMemory();
  delete process.env.KIT_API_KEY;
  delete process.env.KIT_WAITLIST_TAG_ID;
  delete process.env.WAITLIST_WEBHOOK_URL;
  // Ensure endpoint tests never reach a live Redis if Upstash creds are exported.
  delete process.env.UPSTASH_REDIS_REST_URL;
  delete process.env.UPSTASH_REDIS_REST_TOKEN;
});

afterEach(() => {
  vi.unstubAllGlobals();
  process.env = { ...savedEnv };
});

describe('POST /api/waitlist — validation', () => {
  it('rejects an invalid email with 400', async () => {
    const res = await post({ email: 'not-an-email' });
    expect(res.status).toBe(400);
    expect(await res.json()).toMatchObject({ ok: false });
  });

  it('rejects an over-long email with 400', async () => {
    const res = await post({ email: `${'a'.repeat(250)}@x.com` });
    expect(res.status).toBe(400);
  });
});

describe('POST /api/waitlist — honeypot', () => {
  it('reports success but never calls any upstream when the honeypot is filled', async () => {
    process.env.KIT_API_KEY = 'kit_test';
    const fetchSpy = vi.fn();
    vi.stubGlobal('fetch', fetchSpy);
    const res = await post({ email: 'real@example.com', contact_hp: 'AcmeBot' });
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true, stored: true });
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});

describe('POST /api/waitlist — Kit path', () => {
  it('stores an active subscriber and returns stored:true', async () => {
    process.env.KIT_API_KEY = 'kit_test';
    vi.stubGlobal('fetch', vi.fn(async () => kitOk()));
    const res = await post({ email: 'new@example.com' });
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true, stored: true });
  });

  it('tags the subscriber when KIT_WAITLIST_TAG_ID is set', async () => {
    process.env.KIT_API_KEY = 'kit_test';
    process.env.KIT_WAITLIST_TAG_ID = '999';
    const calls: string[] = [];
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: string) => {
        calls.push(url);
        return kitOk();
      }),
    );
    await post({ email: 'tagme@example.com' });
    expect(calls.some((u) => u.includes('/tags/999/subscribers/1'))).toBe(true);
  });

  it('still succeeds when tagging fails (best-effort)', async () => {
    process.env.KIT_API_KEY = 'kit_test';
    process.env.KIT_WAITLIST_TAG_ID = '999';
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: string) => (url.includes('/tags/') ? new Response('nope', { status: 500 }) : kitOk())),
    );
    const res = await post({ email: 'tagfail@example.com' });
    expect(await res.json()).toEqual({ ok: true, stored: true });
  });

  it('returns 502 for a non-active existing subscriber', async () => {
    process.env.KIT_API_KEY = 'kit_test';
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(JSON.stringify({ subscriber: { id: 1, state: 'cancelled' } }), { status: 200 })),
    );
    const res = await post({ email: 'gone@example.com' });
    expect(res.status).toBe(502);
    expect(await res.json()).toMatchObject({ ok: false });
  });

  it('returns 502 for a malformed 2xx body with no subscriber id', async () => {
    process.env.KIT_API_KEY = 'kit_test';
    vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify({}), { status: 200 })));
    const res = await post({ email: 'weird@example.com' });
    expect(res.status).toBe(502);
  });

});

describe('POST /api/waitlist — webhook path & precedence', () => {
  it('uses the webhook when Kit is not configured', async () => {
    process.env.WAITLIST_WEBHOOK_URL = 'https://hook.test/x';
    const calls: string[] = [];
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: string) => {
        calls.push(url);
        return new Response('ok', { status: 200 });
      }),
    );
    const res = await post({ email: 'hook@example.com' });
    expect(await res.json()).toEqual({ ok: true, stored: true });
    expect(calls[0]).toBe('https://hook.test/x');
  });

  it('prefers Kit over the webhook when both are configured', async () => {
    process.env.KIT_API_KEY = 'kit_test';
    process.env.WAITLIST_WEBHOOK_URL = 'https://hook.test/x';
    const calls: string[] = [];
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: string) => {
        calls.push(url);
        return kitOk();
      }),
    );
    await post({ email: 'both@example.com' });
    expect(calls[0]).toContain('api.kit.com');
    expect(calls.some((u) => u.includes('hook.test'))).toBe(false);
  });
});

describe('POST /api/waitlist — no backend configured', () => {
  it('returns stored:false so the client shows no false confirmation', async () => {
    const res = await post({ email: 'nobackend@example.com' });
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true, stored: false });
  });
});

describe('POST /api/waitlist — rate limiting', () => {
  it('returns 429 with Retry-After once the per-IP window is exhausted', async () => {
    process.env.KIT_API_KEY = 'kit_test';
    vi.stubGlobal('fetch', vi.fn(async () => kitOk()));
    const ip = '203.0.113.7';
    let last: Response | undefined;
    for (let i = 0; i < 6; i += 1) {
      const req = new Request('https://agentos-bible.test/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-forwarded-for': ip },
        body: JSON.stringify({ email: `burst${i}@example.com` }),
      });
      last = (await POST({ request: req } as never)) as Response;
    }
    expect(last!.status).toBe(429);
    expect(last!.headers.get('retry-after')).toBeTruthy();
  });
});

describe('GET /api/waitlist', () => {
  it('is a 405 no-op', async () => {
    const res = (await GET({} as never)) as Response;
    expect(res.status).toBe(405);
  });
});

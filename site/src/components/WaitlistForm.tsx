import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

// Email capture. POSTs to the on-demand `/api/waitlist` endpoint, which persists the address
// via Kit (`KIT_API_KEY`) or a generic webhook (`WAITLIST_WEBHOOK_URL`) — see site/README.md.
// The form only shows success once the endpoint confirms the signup was actually stored
// (`stored: true`); a network/server error or an unconfigured backend is surfaced honestly
// instead of a fake confirmation.
export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    setStatus('submitting');
    // Don't leave the button stuck on "Joining" forever. AbortController + setTimeout works on
    // every browser in Vite's target range; AbortSignal.timeout() does not (Safari < 16).
    // 15s comfortably exceeds the server's worst-case upstream budget (~8.5s) plus cold start
    // and transit, so a stored signup is never reported as a network error.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
        signal: controller.signal,
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        stored?: boolean;
        error?: string;
      };
      // Only confirm once the server says the address was actually persisted. `stored: false`
      // means no capture destination is configured, so a success message would be a lie.
      if (!res.ok || !data.ok || !data.stored) {
        setError(data.error || 'Something went wrong. Try again shortly.');
        setStatus('idle');
        return;
      }
      setStatus('done');
    } catch {
      setError('Network error. Check your connection and try again.');
      setStatus('idle');
    } finally {
      clearTimeout(timeout);
    }
  }

  const done = status === 'done';
  const submitting = status === 'submitting';

  if (done) {
    return (
      <div className="flex items-center gap-2 rounded-md border border-signal/40 bg-signal/10 px-4 py-3 text-sm text-foreground">
        <Check size={16} className="text-signal" aria-hidden />
        You&rsquo;re on the list. We&rsquo;ll reach out as the first builds open up.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md" noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitting}
          aria-invalid={!!error}
          aria-describedby={error ? 'waitlist-error' : undefined}
          className="h-11 w-full sm:flex-1 rounded-md border border-input bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-signal px-4 text-sm font-medium text-signal-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
        >
          {submitting ? (
            <>
              Joining
              <Loader2 size={15} className="animate-spin" aria-hidden />
            </>
          ) : (
            <>
              Join the waitlist
              <ArrowRight size={15} aria-hidden />
            </>
          )}
        </button>
      </div>
      {error && (
        <p id="waitlist-error" className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
      <p className="mt-2 text-xs text-muted-foreground">
        No spam. A research programme — you&rsquo;ll hear from us when there&rsquo;s something real to try.
      </p>
    </form>
  );
}

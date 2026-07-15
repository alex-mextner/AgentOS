import { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

// Email capture. POSTs to the on-demand `/api/waitlist` endpoint, which forwards the
// address to the owner-configured capture service (WAITLIST_WEBHOOK_URL) or logs it.
// The form only shows success once the endpoint acknowledges the signup; a network or
// server error is surfaced honestly instead of a fake confirmation.
export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    setStatus('submitting');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || 'Something went wrong. Try again shortly.');
        setStatus('idle');
        return;
      }
      setStatus('done');
    } catch {
      setError('Network error. Check your connection and try again.');
      setStatus('idle');
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
          className="h-11 flex-1 rounded-md border border-input bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
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

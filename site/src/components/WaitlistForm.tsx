import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

// Email capture. No backend is wired yet — this validates and stores locally, then
// confirms. It never throws and never blocks the page. Swap the submit handler for a
// real endpoint (Formspree / a Vercel function) when one exists. See follow-ups.
export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    try {
      const list = JSON.parse(localStorage.getItem('aos-waitlist') || '[]');
      list.push({ email, at: new Date().toISOString() });
      localStorage.setItem('aos-waitlist', JSON.stringify(list));
    } catch {
      /* storage unavailable — still confirm to the user */
    }
    setDone(true);
  }

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
          aria-invalid={!!error}
          aria-describedby={error ? 'waitlist-error' : undefined}
          className="h-11 flex-1 rounded-md border border-input bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-signal px-4 text-sm font-medium text-signal-foreground transition-opacity hover:opacity-90"
        >
          Join the waitlist
          <ArrowRight size={15} aria-hidden />
        </button>
      </div>
      {error && (
        <p id="waitlist-error" className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
      <p className="mt-2 text-xs text-muted-foreground">
        No spam. A research programme, not a shipping product — you&rsquo;ll hear from us when there&rsquo;s something real to try.
      </p>
    </form>
  );
}

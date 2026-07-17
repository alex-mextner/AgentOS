import { useEffect, useMemo, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

function isActive(current: string, href: string) {
  return current === href || (href !== '/' && current.startsWith(href));
}

export default function MobileNav({ links, current }: { links: NavLink[]; current: string }) {
  const [open, setOpen] = useState(false);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const currentLink = useMemo(() => links.find((link) => isActive(current, link.href)), [links, current]);

  useEffect(() => {
    if (!open) return;
    const active = rowRef.current?.querySelector<HTMLElement>('[aria-current="page"]');
    active?.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [open]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);

  return (
    <div className="relative h-14 w-full md:hidden">
      <div
        className={
          'absolute inset-y-0 left-0 right-12 flex min-w-0 items-center gap-2 transition-opacity duration-300 ' +
          (open ? 'pointer-events-none opacity-0' : 'opacity-100')
        }
      >
        <a href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Agent OS home">
          <span className="relative h-6 w-6 overflow-hidden rounded-[.45rem] bg-gradient-to-br from-blue-400 via-violet-400 to-teal-300 shadow-[0_0_24px_rgba(139,92,246,.28)]">
            <span className="absolute inset-[5px] rounded-[.24rem] bg-background" />
          </span>
          <span className="text-sm font-semibold tracking-tight">Agent OS</span>
        </a>
        {currentLink && currentLink.href !== '/' && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="min-w-0 max-w-[9.5rem] truncate rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
          >
            {currentLink.label}
          </button>
        )}
      </div>

      <nav
        aria-label="Primary navigation"
        className={
          'absolute inset-y-0 left-0 right-0 flex items-center transition-opacity duration-300 ' +
          (open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')
        }
      >
        <div
          ref={rowRef}
          className="flex w-full snap-x items-center gap-2 overflow-x-auto pr-16 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <a
            href="/"
            aria-current={current === '/' ? 'page' : undefined}
            className={
              'snap-start shrink-0 rounded-full border px-3 py-2 text-sm font-medium transition-colors ' +
              (current === '/'
                ? 'border-signal bg-signal text-signal-foreground'
                : 'border-border bg-card text-muted-foreground')
            }
          >
            Home
          </a>
          {links.map((link) => {
            const active = isActive(current, link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={
                  'snap-start shrink-0 rounded-full border px-3 py-2 text-sm font-medium transition-colors ' +
                  (active
                    ? 'border-signal bg-signal text-signal-foreground shadow-sm shadow-signal/20'
                    : 'border-border bg-card text-muted-foreground hover:text-foreground')
                }
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background via-background/95 to-transparent"
        />
      </nav>

      <button
        type="button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="absolute right-0 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-background/95 text-muted-foreground shadow-sm backdrop-blur hover:text-foreground"
      >
        {open ? <X size={19} aria-hidden /> : <Menu size={19} aria-hidden />}
      </button>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

// Slide-down mobile navigation. Static links passed from the Astro shell.
export default function MobileNav({ links, current }: { links: NavLink[]; current: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:text-foreground"
      >
        {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-[57px] z-40 border-b border-border bg-background/95 backdrop-blur">
          <nav className="container-tight flex flex-col py-4">
            {links.map((l) => {
              const active = current === l.href || (l.href !== '/' && current.startsWith(l.href));
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={
                    'rounded-md px-3 py-2.5 text-sm transition-colors ' +
                    (active
                      ? 'bg-accent font-medium text-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground')
                  }
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}

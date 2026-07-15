import { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import indexData from '../data/bible-index.json';

// Interactive preview dialog for the two clickable citation motifs the site uses:
//   • document-id chips  (data-doc-id="AOS-ARCH-009")  → a preview of that document
//   • numbered citations (data-ref="14")               → the reference it points to
// It mounts once (in BaseLayout) and listens on the document, so it serves both rendered
// bible docs and marketing copy without per-page wiring. No navigation on click — the
// underlying <a> still works via keyboard / modified-click / "Open full document".

interface DocMeta {
  id: string;
  title: string;
  category: string;
  summary: string;
}
interface Ref {
  n: number;
  label: string;
  url: string;
}
interface Index {
  docs: DocMeta[];
  references: Record<string, Ref[]>;
}

const index = indexData as unknown as Index;
const docById = new Map(index.docs.map((d) => [d.id, d]));

type Preview =
  | { kind: 'doc'; doc: DocMeta }
  | { kind: 'ref'; ref: Ref; contextTitle: string }
  | null;

function pageReferences(contextId: string | null): Ref[] {
  const el = document.getElementById('doc-refs');
  if (el?.textContent) {
    try {
      return JSON.parse(el.textContent) as Ref[];
    } catch {
      /* fall through */
    }
  }
  return contextId ? (index.references[contextId] ?? []) : [];
}

export default function RefDialog() {
  const [preview, setPreview] = useState<Preview>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as HTMLElement;

      const docEl = target.closest<HTMLElement>('[data-doc-id]');
      if (docEl) {
        const doc = docById.get(docEl.dataset.docId!);
        if (doc) {
          e.preventDefault();
          lastFocused.current = docEl;
          setPreview({ kind: 'doc', doc });
        }
        return;
      }

      const refEl = target.closest<HTMLElement>('[data-ref]');
      if (refEl) {
        const n = Number(refEl.dataset.ref);
        const ctx = target.closest<HTMLElement>('[data-doc-context]')?.dataset.docContext ?? null;
        const ref = pageReferences(ctx).find((r) => r.n === n);
        if (ref) {
          e.preventDefault();
          lastFocused.current = refEl;
          const contextTitle = ctx ? (docById.get(ctx)?.title ?? ctx) : 'References';
          setPreview({ kind: 'ref', ref, contextTitle });
        }
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!preview) {
      lastFocused.current?.focus?.();
      return;
    }
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setPreview(null);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [preview]);

  if (!preview) return null;

  return (
    <div
      className="ref-dialog-overlay fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
      onClick={() => setPreview(null)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ref-dialog-title"
        className="ref-dialog-panel w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          {preview.kind === 'doc' ? (
            <div>
              <span className="cite">{preview.doc.id}</span>
              <h2 id="ref-dialog-title" className="mt-2.5 text-lg font-semibold leading-snug tracking-tight">
                {preview.doc.title}
              </h2>
            </div>
          ) : (
            <div>
              <span className="cite">Reference [{preview.ref.n}]</span>
              <h2 id="ref-dialog-title" className="mt-2.5 text-sm font-medium leading-snug text-muted-foreground">
                Cited in {preview.contextTitle}
              </h2>
            </div>
          )}
          <button
            ref={closeRef}
            type="button"
            aria-label="Close preview"
            onClick={() => setPreview(null)}
            className="-mr-1.5 -mt-1.5 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X size={16} aria-hidden />
          </button>
        </div>

        {preview.kind === 'doc' ? (
          <>
            {preview.doc.summary && (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{preview.doc.summary}</p>
            )}
            <a
              href={`/bible/id/${encodeURIComponent(preview.doc.id)}`}
              className="mt-5 inline-flex h-10 items-center gap-1.5 rounded-md bg-signal px-4 text-sm font-medium text-signal-foreground transition-opacity hover:opacity-90"
            >
              Open full document <ArrowUpRight size={15} aria-hidden />
            </a>
          </>
        ) : (
          <>
            <p className="mt-4 text-sm leading-relaxed text-foreground">{preview.ref.label}</p>
            {preview.ref.url && (
              <a
                href={preview.ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-10 items-center gap-1.5 rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:border-signal/50"
              >
                Visit source <ArrowUpRight size={15} aria-hidden />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

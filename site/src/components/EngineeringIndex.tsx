import { useMemo, useState } from 'react';

interface Doc {
  id: string;
  title: string;
  category: string;
  status: string;
  summary: string;
}

interface Props {
  docs: Doc[];
  labels: Record<string, string>;
}

export default function EngineeringIndex({ docs, labels }: Props) {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const doc of docs) counts.set(doc.category, (counts.get(doc.category) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => (labels[a[0]] ?? a[0]).localeCompare(labels[b[0]] ?? b[0]));
  }, [docs, labels]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return docs.filter((doc) => {
      if (category !== 'all' && doc.category !== category) return false;
      if (!q) return true;
      return [doc.id, doc.title, doc.summary, doc.status, labels[doc.category] ?? doc.category]
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [docs, category, query, labels]);

  return (
    <div>
      <div className="relative -mx-6 px-6">
        <div
          className="flex snap-x gap-2 overflow-x-auto pb-3 pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Document volume filters"
        >
          <button
            type="button"
            onClick={() => setCategory('all')}
            aria-pressed={category === 'all'}
            className={
              'snap-start shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ' +
              (category === 'all'
                ? 'border-signal bg-signal text-signal-foreground'
                : 'border-border bg-card text-muted-foreground hover:text-foreground')
            }
          >
            All <span className="ml-1 font-mono text-xs opacity-75">{docs.length}</span>
          </button>
          {categories.map(([key, count]) => (
            <button
              key={key}
              type="button"
              onClick={() => setCategory(key)}
              aria-pressed={category === key}
              className={
                'snap-start shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ' +
                (category === key
                  ? 'border-signal bg-signal text-signal-foreground'
                  : 'border-border bg-card text-muted-foreground hover:text-foreground')
              }
            >
              {labels[key] ?? key} <span className="ml-1 font-mono text-xs opacity-75">{count}</span>
            </button>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-3 right-0 top-0 w-16 bg-gradient-to-l from-background to-transparent sm:hidden" />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block flex-1">
          <span className="sr-only">Search documents</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground">
            <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="m16 16 4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title, ID, summary or status…"
            className="h-11 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-signal focus:ring-2 focus:ring-signal/20"
          />
        </label>
        <p className="shrink-0 font-mono text-xs text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? 'document' : 'documents'}
        </p>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-border">
        {filtered.length > 0 ? (
          filtered.map((doc, index) => (
            <a
              key={doc.id}
              href={`/bible/id/${encodeURIComponent(doc.id)}`}
              className={
                'group grid gap-2 bg-card px-4 py-4 transition-colors hover:bg-accent/30 sm:grid-cols-[9rem_1fr_auto] sm:items-center sm:gap-4 sm:px-5 ' +
                (index ? 'border-t border-border' : '')
              }
            >
              <span className="font-mono text-xs text-signal/90">{doc.id}</span>
              <span className="min-w-0">
                <strong className="block truncate text-sm font-medium text-foreground">{doc.title}</strong>
                {doc.summary && <span className="mt-1 block line-clamp-2 text-xs leading-relaxed text-muted-foreground">{doc.summary}</span>}
              </span>
              <span className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-md border border-border bg-background/50 px-2 py-1 font-mono">{labels[doc.category] ?? doc.category}</span>
                <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          ))
        ) : (
          <div className="bg-card px-6 py-14 text-center text-sm text-muted-foreground">
            No documents match this filter.
          </div>
        )}
      </div>
    </div>
  );
}

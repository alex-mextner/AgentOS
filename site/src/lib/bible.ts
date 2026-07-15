// In-portal engineering-bible viewer — build-time only (Node). Reads the corpus that
// scripts/sync-corpus.mjs copied INTO site/ (src/content/bible/**), renders Markdown with
// `marked`, and post-processes the HTML so document-ids and [n] citations become
// interactive (the RefDialog island wires the click behaviour on the client).
//
// Zero runtime dependency: everything here runs during `astro build`.

import { marked } from 'marked';
import indexData from '../data/bible-index.json';

// Raw markdown of the copied corpus, imported via Vite's glob so paths resolve against
// the SOURCE tree at build (fs + import.meta.url would resolve to the bundled dist chunk
// and fail). Keys look like "/src/generated/bible/research/AOS-RES-013-….md".
const rawDocs = import.meta.glob('../generated/bible/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export interface BibleDoc {
  id: string;
  title: string;
  category: string;
  status: string;
  path: string; // repo-relative markdown path, for the "Edit on GitHub" link
  summary: string;
}

interface BibleIndex {
  docs: BibleDoc[];
  aliases: Record<string, string>; // core key (no AOS- prefix) -> canonical id
  references: Record<string, { n: number; label: string; url: string }[]>;
}

const index = indexData as BibleIndex;

// Resolve a repo-relative doc path (from the index) to its raw markdown, tolerating the
// glob key prefix regardless of how Vite normalizes it.
function rawFor(repoPath: string): string | null {
  const rel = repoPath.replace(/^engineering-bible\/docs\//, '');
  const suffix = `/generated/bible/${rel}`;
  for (const [key, value] of Object.entries(rawDocs)) {
    if (key.endsWith(suffix) || key.endsWith(`bible/${rel}`)) return value;
  }
  return null;
}

export function listDocs(): BibleDoc[] {
  return index.docs;
}

export function getReferences(id: string) {
  return index.references[id] ?? [];
}

/** Canonical id for a token in any short/long form ("ARCH-022" | "AOS-ARCH-022"), or null. */
export function resolveDocId(token: string): string | null {
  const core = token.toUpperCase().replace(/^AOS-/, '');
  return index.aliases[core] ?? null;
}

export function docHref(id: string): string {
  return `/bible/id/${encodeURIComponent(id)}`;
}

export function getDoc(id: string): { meta: BibleDoc; markdown: string } | null {
  const meta = index.docs.find((d) => d.id === id);
  if (!meta) return null;
  const raw = rawFor(meta.path);
  if (raw == null) return null;
  const markdown = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
  return { meta, markdown };
}

// Matches AOS-ARCH-009, AOS-BRIEF, ARCH-022, HW-020, ADR-0007, PROD-015 …
const DOC_ID_RE =
  /\b(?:AOS-[A-Z]+(?:-\d{1,4}[A-Z]?)?|(?:ARCH|PROD|RES|HW|ADR|GOV|LEGAL|PLAN|META|VAL|VSN|VOL)-\d{1,4}[A-Z]?)\b/g;
const REF_RE = /\[(\d{1,3})\]/g;

function linkifyText(text: string): string {
  // Doc-ids first — only linkify tokens that resolve to a real document.
  let out = text.replace(DOC_ID_RE, (tok) => {
    const canon = resolveDocId(tok);
    if (!canon) return tok;
    return `<a class="cite-link" data-doc-id="${canon}" href="${docHref(canon)}">${tok}</a>`;
  });
  // Numbered citations → buttons resolved against the page's references on click.
  out = out.replace(REF_RE, (m, n) => `<button type="button" class="ref-cite" data-ref="${n}">${m}</button>`);
  return out;
}

// Walk the rendered HTML and only transform TEXT outside <a>, <code> and <pre> — so we
// never rewrite an existing link, an attribute, or a code sample.
function linkifyHtml(html: string): string {
  const parts = html.split(/(<[^>]+>)/);
  let skipDepth = 0;
  return parts
    .map((seg) => {
      if (seg.startsWith('<') && seg.endsWith('>')) {
        if (/^<(a|code|pre)[\s/>]/i.test(seg)) skipDepth++;
        else if (/^<\/(a|code|pre)>/i.test(seg)) skipDepth = Math.max(0, skipDepth - 1);
        return seg;
      }
      return skipDepth > 0 ? seg : linkifyText(seg);
    })
    .join('');
}

export function renderDoc(markdown: string): string {
  const html = marked.parse(markdown, { gfm: true, async: false }) as string;
  return linkifyHtml(html);
}

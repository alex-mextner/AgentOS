// Build-time data loading. Runs only during `astro build` (Node), never in the browser.
// Reads the engineering bible + task graph directly from the repo working tree, so the
// marketing site has ZERO runtime API dependency. Every reader degrades gracefully:
// if a file is missing or malformed, it returns a safe empty/fallback value and the
// page still renders. This is the whole point — the old portal runtime-fetched from
// GitHub and broke when the API was down.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = fileURLToPath(new URL('../..', import.meta.url));
const repoRoot = join(siteRoot, '..');
const docsDir = join(repoRoot, 'engineering-bible', 'docs');
const dataDir = join(repoRoot, 'data');

export interface DocEntry {
  id: string;
  title: string;
  category: string;
  status: string;
  path: string; // relative to repo root, for GitHub links
}

// Recognized document-id prefixes, shared by titleFromFile() and loadDocs() so a
// title and its id are derived consistently for docs that lack front matter.
// The AOS branch is deliberately non-greedy: `AOS-<AREA>` plus an optional
// `-<num>` (allowing a single leading letter like N001), so a file such as
// `AOS-RES-013-os-comparison-matrix.md` yields the id `AOS-RES-013`, not the whole slug.
const ID_PREFIX = /^(AOS-[A-Z]+(?:-[A-Z]?\d+)?|ARCH-\d+|HW-\d+|PROD-\d+|RES-\d+|ADR-\d+|GOV-\d+)-?/i;

function titleFromFile(base: string): string {
  return base
    .replace(/\.md$/, '')
    .replace(ID_PREFIX, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function walk(dir: string, acc: string[] = []): string[] {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const name of entries) {
    const full = join(dir, name);
    let s;
    try {
      s = statSync(full);
    } catch {
      continue;
    }
    if (s.isDirectory()) walk(full, acc);
    else if (name.endsWith('.md')) acc.push(full);
  }
  return acc;
}

function frontMatter(text: string): Record<string, string> {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const out: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-zA-Z_]+):\s*"?([^"]*)"?\s*$/);
    if (kv) out[kv[1]] = kv[2].trim();
  }
  return out;
}

/** All engineering-bible documents, sorted by AOS id. Empty array if the tree is absent. */
export function loadDocs(): DocEntry[] {
  const files = walk(docsDir);
  const docs: DocEntry[] = [];
  for (const full of files) {
    const relFromDocs = relative(docsDir, full);
    const base = relFromDocs.split('/').pop() ?? relFromDocs;
    let fm: Record<string, string> = {};
    try {
      fm = frontMatter(readFileSync(full, 'utf8'));
    } catch {
      /* ignore unreadable file */
    }
    const idMatch = base.match(ID_PREFIX);
    const id = fm.id || (idMatch ? idMatch[1].toUpperCase() : base.replace(/\.md$/, '').toUpperCase());
    const category = relFromDocs.includes('/') ? relFromDocs.split('/')[0] : 'general';
    docs.push({
      id,
      title: fm.title || titleFromFile(base),
      category,
      status: fm.status || 'published',
      path: `engineering-bible/docs/${relFromDocs}`,
    });
  }
  return docs.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}

export interface CategoryCount {
  category: string;
  count: number;
}

export function docCategories(docs: DocEntry[]): CategoryCount[] {
  const map = new Map<string, number>();
  for (const d of docs) map.set(d.category, (map.get(d.category) ?? 0) + 1);
  return [...map.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

export interface PhaseCount {
  phase: string;
  count: number;
}

export interface TaskGraph {
  total: number;
  phases: PhaseCount[];
}

/** Task-graph shape from data/index.json. Falls back to known totals if absent. */
export function loadTaskGraph(): TaskGraph {
  try {
    const idx = JSON.parse(readFileSync(join(dataDir, 'index.json'), 'utf8'));
    const phases: PhaseCount[] = (idx.shards ?? []).map((s: { phase: string; count: number }) => ({
      phase: s.phase,
      count: s.count,
    }));
    return { total: idx.count ?? phases.reduce((n, p) => n + p.count, 0), phases };
  } catch {
    return { total: 327, phases: [] };
  }
}

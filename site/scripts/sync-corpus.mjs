// Prebuild step: make the engineering-bible corpus SELF-CONTAINED inside site/.
//
// Why: docs live at the repo root (engineering-bible/docs/**), OUTSIDE site/. One deploy
// path uploads only site/, so reading ../engineering-bible at build time would fail there.
// This script copies the markdown INTO site/ (src/content/bible/**) and writes a compact
// index (src/data/bible-index.json) the in-portal doc viewer + reference dialog consume.
//
// It is non-fatal when the source is absent: on a site-only deploy the committed copy is
// used as-is, so `npm run build` always succeeds regardless of deploy method.

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, rmSync, cpSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(scriptDir, '..');
const repoRoot = join(siteRoot, '..');
const srcDocs = join(repoRoot, 'engineering-bible', 'docs');
const destDocs = join(siteRoot, 'src', 'generated', 'bible');
const indexOut = join(siteRoot, 'src', 'data', 'bible-index.json');

// Copy fresh from the repo tree when it's available; otherwise keep the committed copy.
function syncDocs() {
  if (!existsSync(srcDocs)) {
    console.log('[sync-corpus] repo docs not present — using committed copy in src/generated/bible.');
    return;
  }
  rmSync(destDocs, { recursive: true, force: true });
  mkdirSync(destDocs, { recursive: true });
  cpSync(srcDocs, destDocs, {
    recursive: true,
    filter: (s) => statSync(s).isDirectory() || s.endsWith('.md'),
  });
  console.log('[sync-corpus] copied engineering-bible/docs → src/generated/bible.');
}

function walk(dir, acc = []) {
  let entries;
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

const ID_PREFIX = /^(AOS-[A-Z]+(?:-[A-Z]?\d+)?|ARCH-\d+|HW-\d+|PROD-\d+|RES-\d+|ADR-\d+|GOV-\d+|LEGAL-\d+|PLAN-\d+)-?/i;

function frontMatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-zA-Z_]+):\s*"?([^"]*)"?\s*$/);
    if (kv) out[kv[1]] = kv[2].trim();
  }
  return out;
}

function titleFromFile(base) {
  return base
    .replace(/\.md$/, '')
    .replace(ID_PREFIX, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

// The canonical id from front matter (e.g. AOS-ARCH-022); short forms used across the
// site (ARCH-022) resolve to it via the alias/core-key map built below.
function canonicalId(base, fm) {
  if (fm.id) return fm.id.toUpperCase();
  const m = base.match(ID_PREFIX);
  return m ? m[1].toUpperCase() : base.replace(/\.md$/, '').toUpperCase();
}

// A tolerant lookup key: strip a leading "AOS-" so "ARCH-022" and "AOS-ARCH-022" collapse.
function coreKey(id) {
  return id.toUpperCase().replace(/^AOS-/, '');
}

function parseReferences(text) {
  const m = text.match(/\n##+\s*References\s*\n([\s\S]*?)(?:\n##+\s|\s*$)/i);
  if (!m) return [];
  const refs = [];
  for (const line of m[1].split(/\r?\n/)) {
    const item = line.match(/^\s*(\d{1,3})\.\s+(.*\S)\s*$/);
    if (!item) continue;
    const body = item[2];
    const urlMatch = body.match(/(https?:\/\/\S+)/);
    const url = urlMatch ? urlMatch[1] : '';
    const label = (url ? body.replace(url, '') : body).replace(/[\s—.-]+$/, '').trim();
    refs.push({ n: Number(item[1]), label, url });
  }
  return refs;
}

function buildIndex() {
  const files = walk(destDocs);
  const docs = [];
  const aliases = {}; // coreKey -> canonicalId
  const references = {}; // canonicalId -> [{n,label,url}]
  for (const full of files) {
    const relFromDocs = relative(destDocs, full).split('\\').join('/');
    const base = relFromDocs.split('/').pop() ?? relFromDocs;
    let raw = '';
    try {
      raw = readFileSync(full, 'utf8');
    } catch {
      continue;
    }
    const fm = frontMatter(raw);
    const id = canonicalId(base, fm);
    const category = relFromDocs.includes('/') ? relFromDocs.split('/')[0] : 'general';
    const title = fm.title || titleFromFile(base) || id;
    const summary = (fm.summary || '').slice(0, 320);
    docs.push({ id, title, category, status: fm.status || 'published', path: `engineering-bible/docs/${relFromDocs}`, summary });
    // Register aliases: canonical, its core key, and the filename-derived id's core key.
    for (const key of new Set([coreKey(id), coreKey(canonicalId(base, {}))])) {
      if (!aliases[key]) aliases[key] = id;
    }
    const refs = parseReferences(raw);
    if (refs.length) references[id] = refs;
  }
  docs.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  return { docs, aliases, references };
}

syncDocs();
mkdirSync(dirname(indexOut), { recursive: true });
const index = buildIndex();
writeFileSync(indexOut, JSON.stringify(index));
console.log(`[sync-corpus] wrote index: ${index.docs.length} docs, ${Object.keys(index.references).length} with references.`);

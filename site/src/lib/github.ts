// Build-time GitHub fetch for the "live" work items shown on the Engineering page.
// This is the ONLY network dependency in the whole site, and it degrades gracefully:
// on any failure (offline, rate-limited, 4xx/5xx) it returns an empty list plus an
// `ok:false` flag, and the page renders a calm fallback with a link to GitHub — never
// a full-page error. Rate-limit-safe: unauthenticated, short timeout, single request.

import { REPO } from './utils';

export interface Issue {
  number: number;
  title: string;
  state: string;
  url: string;
  labels: string[];
  updatedAt: string;
}

export interface IssuesResult {
  ok: boolean;
  issues: Issue[];
}

export async function loadIssues(limit = 12): Promise<IssuesResult> {
  const url = `https://api.github.com/repos/${REPO}/issues?state=all&per_page=${limit}&sort=updated`;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(url, {
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'agentos-site-build' },
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return { ok: false, issues: [] };
    const raw = (await res.json()) as unknown[];
    const issues: Issue[] = (Array.isArray(raw) ? raw : [])
      .filter((i): i is Record<string, unknown> => !!i && !('pull_request' in (i as object)))
      .map((i) => ({
        number: Number(i.number),
        title: String(i.title ?? ''),
        state: String(i.state ?? 'open'),
        url: String(i.html_url ?? ''),
        labels: Array.isArray(i.labels)
          ? (i.labels as Array<{ name?: string }>).map((l) => l.name ?? '').filter(Boolean)
          : [],
        updatedAt: String(i.updated_at ?? ''),
      }));
    return { ok: true, issues };
  } catch {
    return { ok: false, issues: [] };
  }
}

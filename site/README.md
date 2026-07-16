# Agent OS — marketing site

Static [Astro](https://astro.build) app in the shadcn/ui design language. This replaces
the old runtime-fetch vanilla portal (`../portal/`), which broke whenever the GitHub API
was down or rate-limited.

## What it is

- **Static / prerendered pages.** Every marketing page is baked at build time and renders
  with **no runtime API dependency** — the site is fully readable even if GitHub or Kit is
  offline. The one exception is the on-demand `POST /api/waitlist` route (see
  [Waitlist capture](#waitlist-capture)), which runs server-side only when a visitor submits
  the form.
- **Design language:** shadcn/ui — neutral zinc scale, Inter (self-hosted via
  `@fontsource-variable/inter`), 1px borders, `0.5rem` radius, dark-first, one restrained
  azure accent (`--signal`). Light + dark supported (dark default). Tailwind v3.
- **Interactive islands** (React): theme toggle, mobile nav, waitlist form. Everything
  else is static Astro.

## Pages

`/` home · `/how-it-works` · `/compare` · `/developers` · `/investors` · `/makers` ·
`/roadmap` · `/engineering` · `404`.

## Build-time data & graceful degradation

- `src/lib/corpus.ts` reads the engineering bible (`../engineering-bible/docs`) and the
  task graph (`../data/index.json`) directly from the repo working tree at build time.
  Missing/malformed files fall back to safe defaults — the page always renders.
- `src/lib/github.ts` fetches recent GitHub Issues at build time (the **only** network
  dependency). On any failure it returns `ok:false` and the Engineering page shows a calm
  fallback with a GitHub link — never a full-page error.
- A service worker (`public/sw.js`) adds offline / instant repeat-load (network-first for
  navigations, cache-first for assets). Pure progressive enhancement.

## Local development

```bash
npm install          # (esbuild/sharp install scripts must be approved; see package.json allowScripts)
npm run dev          # dev server
npm run build        # → dist/
npm run preview      # serve dist/
npm run check        # astro check (type check)
```

## Deploying on Vercel

This app lives in a **subdirectory** of the repo (`site/`). Configure the Vercel project:

| Setting | Value |
| --- | --- |
| **Framework Preset** | Astro |
| **Root Directory** | `site` |
| **Build Command** | `astro build` (or leave default) |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` (default) |

`site/vercel.json` sets the security headers (X-Content-Type-Options, Referrer-Policy,
Permissions-Policy, X-Frame-Options, HSTS) and cache-control. Because the Root Directory
is `site`, Vercel reads **this** `vercel.json`, not the repo-root one (which still points
at the old `portal/`).

Set `site` in `astro.config.mjs` to the production domain (currently
`https://agentos-bible.vercel.app`, matching the old portal's canonical) so canonical
URLs, Open Graph images, and the sitemap resolve correctly. Change it if this deploys to a
different domain.

## Waitlist capture

The form (`WaitlistForm.tsx`) POSTs to the on-demand `src/pages/api/waitlist.ts` route, which
persists via the first configured destination (checked in this order):

1. **Kit** (kit.com) — set `KIT_API_KEY`. Optionally set `KIT_WAITLIST_TAG_ID` to tag
   signups (so waitlist entries are filterable in Kit). The route creates the subscriber and
   only reports success when Kit returns an **active** subscriber. Kit's create endpoint does
   not reactivate a previously cancelled/bounced address, so those get an error rather than a
   false confirmation. Tagging is best-effort (a tag outage is logged but does not lose the
   captured email).
2. **Generic webhook** — set `WAITLIST_WEBHOOK_URL` (Formspree / Basin / Zapier / any JSON POST).

If neither env var is set the route logs the signup and returns `{ ok: true, stored: false }`;
the client treats `stored !== true` as a failure and does **not** show a false confirmation.
Set these in the Vercel project's Environment Variables, not in the repo.

**Known follow-ups (deferred, not blocking):** the endpoint is unauthenticated and has no
rate limiting — abuse/quota protection needs a shared store (e.g. Upstash/Vercel KV); there
is no `site/` CI check or endpoint unit tests yet. Tracked in
[#62](https://github.com/alex-mextner/AgentOS/issues/62).

## Follow-ups (not done)

- OG image is a hand-built SVG (`public/og.svg`); a per-page generated OG image would be nicer.
- Full wiki/registers migration (tasks board, gantt, doc reader) from the old portal is not
  ported — the Engineering page links out to GitHub for the live/deep content.

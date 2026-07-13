---
id: AOS-HANDOFF-002
title: "Handoff — Deploy and visually verify the Vercel portal"
status: handoff
audience: "claude code (or any agent with Vercel access + a browser)"
---

# Handoff: Deploy & verify the portal on Vercel

## Why this is a handoff
The docs/issues agent has no Vercel access and no browser. The portal **source** is already prepared
and pushed to `main`; deployment and visual QA need Vercel CLI/token and a rendering check.

## What is already done (in `portal/`)
- **Four-audience front door**: `#home` now routes to Build OS / Developers / Investors / Users
  lanes (`portal/audiences.js`), each with tailored copy and entry points, sharing a layered-map
  visual system derived from the engineering spec. Router in `portal/api.js`; nav updated in `index.html`.
- `portal/core.js` now builds the doc tree from `engineering-bible/docs/` (previously sourced from
  the now-removed knowledge/wiki tree).
- `portal/data/wiki-index.json` — generated index of the full canonical corpus (151 docs, 18 categories).
- `portal/app.js` — Wiki now renders the **entire** Engineering Bible from that index (grouped by
  category, with search), replacing the old 7 hardcoded pages. Stale Pixel-9 architecture-rule text
  and doc counts fixed.
- `vercel.json` — outputDirectory `portal`, cleanUrls.

## Deploy
```bash
cd portal && vercel --prod    # or: vercel deploy --prod
```
Canonical domain: agentos-bible.vercel.app

## Visual QA checklist (open in a browser)
- **Landing**: no "Pixel 9 evidence and bring-up" phrasing; architecture-rule mentions the archived
  Pixel-9 route + demo brick; doc count reflects the corpus.
- **Front door (`#home`)**: four audience cards (Build OS / Developers / Investors / Users), gradient title, no stale Pixel-9 framing; each card links to its lane.
- **Lanes** (`#build`,`#developers`,`#investors`,`#users`): each renders its head, tiles/layer-stack, and doc links.
- **/wiki**: shows ~151 documents grouped into Vision / Architecture / Product / Hardware / Research /
  Planning / Legal / Governance / Decisions / Validation / Meta / Glossary / Templates / Volumes;
  search filters live; each card links to the GitHub blob under `engineering-bible/`.
- **/tasks**: live Issues #25–#43 appear; filters work.
- **/gantt**: scheduled tasks render.
- Mobile + desktop + Safari/iPhone; check external images/CORS; basic accessibility.

## Follow-ups sol §7 asks for (next portal iteration, not blocking)
Per-document TOC, heading anchors, previous/next, backlinks, related specs/tasks/claims, provenance
panel, full-text search across bodies, Mermaid/PNG/SVG rendering, Edit-on-GitHub URLs pointing at
`engineering-bible/`. The current change is the corpus-completeness step; these are enrichment.

## Acceptance
agentos-bible.vercel.app shows the full corpus, landing has no stale Pixel-9 framing, and every
canonical document is findable and links to its GitHub source.

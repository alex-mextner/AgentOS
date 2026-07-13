---
id: AOS-HANDOFF-MASTER
title: "Master Handoff — Everything Not Yet Done"
status: handoff
updated: 2026-07-13
audience: "The next agent (claude code) and the founder"
supersedes_note: "This is the single source of truth for outstanding work. The topic-specific handoffs (project-v2-board, vercel-portal-deploy, fuchsia-first-build) remain as detailed runbooks; this document indexes and completes them."
---

# Master Handoff — Everything Not Yet Done

This is the complete, honest list of what remains on Agent OS after the consolidation session of
2026-07-13. It is written so the next agent can pick up any item without re-discovering context.
Nothing here is "almost done" — items are marked **BLOCKED** (needs access this agent lacks),
**TODO** (doable, not yet started), or **PARTIAL** (started, with the remainder spelled out).

## 0. Orientation (read first)

- Repo: https://github.com/alex-mextner/AgentOS — docs + monorepo. Docs live in `engineering-bible/docs/**`.
- The plan, unchanged from the start: **fork the entire Fuchsia tree** (Zircon, DFv2, FIDL, Magma,
  Scenic/Flatland, Starnix, build system) and build the Rust-first entity/agent product layer + board
  drivers on top. Any doc implying an owned-from-scratch microkernel is corruption — if you find more,
  fix it. The Pixel-9 *hardware* target is archived (ADR-0007) in favour of the demo brick; the
  Fuchsia-fork *software* approach is current.
- Canonical entry points: `engineering-bible/MANIFEST.md`, `docs/AOS-INDEX.md`, `docs/AOS-BRIEF.md`.
- Build strategy is normative in `docs/architecture/ARCH-023-build-strategy-and-devex.md`.
- Registers (CSV) in `engineering-bible/registers/`; portal in `portal/`.
- Push discipline: verify `git rev-list --count HEAD..origin/main` is 0 before pushing (fast-forward only);
  run link/validation checks after each block (a past cyrillic mis-report is why).

## 1. BLOCKED — needs access this agent does not have

### 1.1 GitHub Project v2 board population  — runbook: `HANDOFF-project-v2-board.md`
The fine-grained PAT used here has Contents + Issues but **no Projects permission**; every Project v2
GraphQL call returns FORBIDDEN, classic Projects REST is 404 (deprecated). Populate the board with
your own `gh` auth (has Projects by default):
- Add issues **#25–#43** to project https://github.com/users/alex-mextner/projects/1.
- Create fields Phase, Track, Risk, Start, Target; set Status from existing labels
  (`status:next|in-progress|backlog`), Track from `lane:*` labels; set blocked-by from the
  `Depends on` column in `docs/planning/PLAN-017-demo-brick-task-intake.md`.
- Do **not** send the founder hunting for a Projects toggle again — just run it under `gh`.

### 1.2 Vercel deploy + visual QA  — runbook: `HANDOFF-vercel-portal-deploy.md`
Portal source is ready and pushed; it needs a deploy and a human/agent set of eyes.
- Vercel should auto-deploy on push (static site, `vercel.json` → outputDirectory `portal`, no build).
  If it doesn't: in the Vercel project, set Production Branch = `main` and **Root Directory empty**
  (not `portal`, which would double-apply outputDirectory). Or `cd portal && vercel --prod`.
- QA checklist: front door shows four audiences (Build OS / Developers / Investors / Users), no stale
  Pixel-9 framing; `#wiki` lists ~153 docs grouped by category and links to `engineering-bible/…`;
  `#tasks` shows live Issues #25–#43; `#claims/#experiments/#sources/#risks/#glossary/#decisions`
  render; mobile + Safari; check external image/CORS and keyboard focus.

### 1.3 Fuchsia first build + emulator boot  — runbook: `HANDOFF-fuchsia-first-build.md`
**Verdict (verified):** the SDK/component/driver build runs **natively on the M4 Pro (macOS arm64)** via the
Bazel SDK — that's Tier 1 and most of our work. Only the **full platform tree** is Linux-only (x86-64
Debian), a CI/remote-builder job. This agent's container (1 core / 3 GB / ~10 GB) can't do either build; Scripts are in `scripts/`:
- **Tonight, minutes, no build:** `bash scripts/fuchsia-sdk-quickstart.sh` then
  `tools/ffx product download <bundle>` + `tools/ffx emu start`. Boots a prebuilt image; works on
  Apple Silicon (prefer arm64 bundle; note qemu-arm64 is "very limited").
- **Full tree:** on the **home Ubuntu laptop (i7 + RTX 3060)** — the owned platform builder, no rental — `bash scripts/fuchsia-full-build.sh`. macOS cannot build the full tree (verified); don't try to port it.
- **Record as evidence** (replaces estimates in ARCH-023): `fx set` time, first `fx build` wall time,
  no-op rebuild time, one-file-touch rebuild time, disk used, emulator boot OK. Post to WORK-TRACKER
  and ARCH-023.

### 1.4 Portal write-back (sol §11)  — no runbook yet
Making the portal able to create/edit Issues, set Project dates/fields, and open PRs for wiki edits
needs a GitHub App or OAuth with those scopes. Design a least-privilege GitHub App; until then the
portal stays read-only + "Edit on GitHub" deep links (already wired to `engineering-bible/`).

## 2. TODO — doable without special access, not yet started

### 2.1 §8 Research-grade OS comparisons  (largest remaining content block)
Two deliverables, every claim sourced:
1. **Deep iOS / Android / Agent OS matrix** across: system object model, action/intent APIs, agent
   authority model, global history, sandboxing/capabilities, update model, privacy posture, offline
   behaviour, extensibility, interop. Feeds portal `#compare`.
2. **Detailed, sourced pages** for ~20 systems, each with what we take/learn: Fuchsia/Zircon, seL4,
   Genode/Sculpt, Redox, postmarketOS, GrapheneOS, MINIX3, QNX, Haiku, Plan 9/Inferno,
   KeyKOS/EROS/CapROS, Tock, Hubris, Theseus, Barrelfish, HarmonyOS, Apple App Intents,
   Android AppFunctions, Anytype, Automerge, Loro. Feeds portal `#landscape`.
Store under `docs/research/` (e.g. `RES-013-os-comparison-matrix.md`, `RES-014-system-survey.md`);
wire portal `compare()`/`landscape()` to render them.

### 2.2 §9 Hardware / device catalogue
Per-target matrix: role, quality ceiling, docs access, boot control, GPU, camera, modem, power,
security, debug, firmware, legal route, cost, availability, replacement, go/no-go — for Pixel 9,
Fairphone, PinePhone Pro, Khadas VIM3/VIM4, i.MX 8M Plus, RK3588, a RISC-V board, custom carrier,
and the camera modules (IMX585/IMX283). Local images with provenance. Feeds portal `#devices`.
Store as `docs/hardware/HW-020-device-catalogue.md` + a machine-readable CSV in `registers/`.

### 2.3 §7 Portal completeness — remainder (PARTIAL)
Done: front door + `#claims/#experiments/#sources/#risks/#glossary/#decisions`, wiki on canonical
bible. **Remaining:** `#procurement` and `#contacts` sections; per-document TOC, heading anchors,
prev/next, backlinks, "related specs/tasks/claims" panel, provenance panel; cross-document full-text
search over bodies (not just index); Mermaid/PNG/SVG render polish; verify every "Edit on GitHub"
URL resolves under `engineering-bible/`.

### 2.4 Translate the 3 remaining Russian atlases
`docs/research/ios-vs-android-vs-agent-os.md`, `prior-art-atlas.md`, `agent-os-wider-lens.md` are
valuable but still fully Russian. Full English translations are already in progress on a separate
branch; land that branch (or redo the translation here if it doesn't land) so these are the last
files in the repo carrying non-English text. Repository policy is English-only with no standing
exception — do not keep an original-language version as the shipped file once translated.

### 2.5 §13 Final cleanup
Dedupe any legacy copies under `knowledge/` (already deprecated — decide delete vs keep as archive),
close superseded issues, refresh top-level `README.md`, add a `CHANGELOG.md`, and confirm the
source-of-truth table in `MANIFEST.md` matches reality.

## 3. Standing conventions for whoever continues

- Doc IDs are stable `AOS-*`; keep them. New docs get frontmatter (id/title/status/version/
  baseline_date/owners/audience/summary), a ToC, and a Related Documents section.
- English only, repo-wide, with no exceptions. Quoted or recovered source material in another
  language is translated to English in place, with a note flagging it as a translated
  recovered-source excerpt for traceability — never kept in the original language.
- After each change block: regenerate `engineering-bible/CHECKSUMS.sha256`, check 0 broken internal
  links, check 0 real cyrillic (Unicode U+0400–04FF, not em-dashes) in normative specs, and confirm
  the fork-Fuchsia framing wasn't reintroduced as owned-kernel.
- Registers are derived views — regenerate from `docs/**` after corpus edits; canonical statements
  live in the referenced documents.

## 4. Quick status table

| Item | Status | Where |
| --- | --- | --- |
| Corpus import, provenance, validation | DONE | engineering-bible/** |
| Fork-Fuchsia framing corrected (whole tree) | DONE | corpus-wide |
| PDF mined + actualized (RES-012, illustrations) | DONE | docs/research, diagrams/prior-art-fuchsia-spec |
| Registers (claims 34, exp 51, sources 9, risks 323) | DONE | registers/ |
| §12 License strategy | DONE | docs/legal/LEGAL-014 |
| ARCH-023 build strategy + scripts | DONE | docs/architecture, scripts/ |
| Four-audience portal + register sections | DONE | portal/ |
| Project v2 board | BLOCKED | §1.1 |
| Vercel deploy + QA | BLOCKED | §1.2 |
| Fuchsia first build + emulator | BLOCKED | §1.3 |
| Portal write-back | BLOCKED | §1.4 |
| §8 OS comparisons | TODO | §2.1 |
| §9 device catalogue | TODO | §2.2 |
| §7 portal remainder | PARTIAL | §2.3 |
| English atlas summaries | TODO | §2.4 |
| §13 final cleanup | TODO | §2.5 |

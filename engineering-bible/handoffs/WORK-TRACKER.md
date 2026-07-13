---
id: AOS-WORK-TRACKER
title: "Consolidation Work Tracker (sol handoff §1–13 + content plan)"
status: living tracker
updated: 2026-07-13
---

# Consolidation Work Tracker

Honest status of the full sol handoff (§1–13) plus the content plan. Not "almost done" — much remains.

## DONE
- §1 Full Foundation corpus imported to main (162 docs, diagrams, digests, atlases).
- §2 PDF/source provenance recorded (SHA-256, integrate-not-store; no binaries).
- §3 Stale positions fixed: name→AgentOS; **fork the entire Fuchsia tree** (corrected corruption); Linear dropped; Fuchsia/FEMU/Starnix framed as the chosen base + digest.
- §4 Single source of truth set (engineering-bible/docs/**); knowledge/ deprecated.
- §5 Validation: 158 IDs, 0 dup, 0 broken links; honest cyrillic accounting (0 in normative specs).
- §4/§5 Registers extracted to CSV: claims(34), experiments(51), sources(9), risks(323).
- Content plan: PROD-013 (offload), PROD-014 (clients), PROD-015 (voice), ARCH-021 (layered boot), ARCH-022 (capabilities), LEGAL-013 (threat model), HW-017/018/019 (demo brick), RES-011/012.
- Portal: four-audience front door (build/developers/investors/users); wiki reads canonical bible.
- Issues #25–#43 created + labeled.
- Handoffs written: Project v2 board, Vercel deploy.

## REMAINING — with owner

### Needs access I lack (HANDOFF to claude code / user)
- **§10 Project v2 board population** — token has no Projects permission. HANDOFF-project-v2-board.md.
- **§11 Portal write-back** (GitHub App/OAuth: create/edit issues, dates, PRs for wiki) — needs app credentials.
- **Vercel deploy + browser QA** — HANDOFF-vercel-portal-deploy.md.

### I CAN do (queued, in priority order)
1. **§12 License strategy** — per-component; now shaped by forking Fuchsia (inherits BSD/Apache/MIT). Verify Fuchsia licensing, write LEGAL doc. (NEXT)
2. **§7 Portal completeness** — add missing routes: /claims /experiments /sources /risks /glossary /decisions /procurement /contacts; per-doc TOC, backlinks, prev/next, provenance panel, full-text search, Mermaid/image render, Edit-on-GitHub → engineering-bible.
3. **§8 Research-grade comparisons** — deep iOS/Android/AgentOS matrix (system object model, action APIs, agent authority, history, sandboxing, updates, privacy, offline…); detailed pages for Fuchsia/Zircon, seL4, Genode, Redox, postmarketOS, GrapheneOS, MINIX3, QNX, Haiku, Plan 9/Inferno, KeyKOS/EROS/CapROS, Tock, Hubris, Theseus, Barrelfish, HarmonyOS, App Intents/AppFunctions, Anytype, Automerge, Loro. Each claim sourced.
4. **§9 Hardware/device catalogue** — per-target matrix (role, quality ceiling, docs access, boot control, GPU, camera, modem, power, security, debug, firmware, legal route, cost, availability, replacement, go/no-go); local images+provenance for Pixel 9, Fairphone, PinePhone Pro, VIM3, i.MX 8M, RK3588, RISC-V, custom carrier, camera modules.
5. **English summaries** of the 3 Russian atlases (research task).
6. **§13 Final cleanup** — dedupe old copies, close superseded issues, README refresh, changelog, migration map.

## Notes
- Every push verifies main hasn't moved (fast-forward only).
- Run validation after each block (the cyrillic mis-report taught this).

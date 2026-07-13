---
id: "AOS-PLAN-018"
title: "Demo Brick Kickoff Sequence (first 30 days)"
status: "Planning record"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Program Lead"
audience: "Engineering, program leadership"
summary: "Four parallel lanes for the first month: procurement (longest lead times first), no-hardware software, evidence bench, and documentation reconciliation."
---

# Demo Brick Kickoff Sequence (first 30 days)

Work runs in four parallel lanes so nothing waits on shipping.

## Lane 1 — Procurement (founder action, day 0–2)
Execute AOS-DEMO-001 (#26) and AOS-DEMO-015 (#40) from `data/demo-brick-bom-v1.csv`. Order by lead time, longest first: Tindie StarlightEye (single-maker stock) and sysmocom eUICC (Germany) on day 0; Waveshare and Seeed next; the AliExpress basket last. Belgrade delivery preferred per RES-011.

## Lane 2 — Software without hardware (start immediately)
- AOS-DEMO-012 (#37): island firmware contract + desktop simulator — defines wake/rail/watchdog semantics before any PCB exists.
- AOS-DEMO-013 (#38): parametric enclosure generator skeleton.
- AOS-DEMO-014 (#39): AHAP→PCM haptics toolchain and waveform asset format.
- PiSP/RP1 specification study notes toward the native camera/IO drivers (feeds AOS-DEMO-005).
- lpac integration spike against a card reader (feeds AOS-DEMO-003).
- ARCH-021 layer manifests format draft (feeds AOS-DEMO-011).

## Lane 3 — Evidence bench (as parts land)
PPK2 baseline on any available board → then the S×I grid discipline of AOS-DEMO-008 (#33). Camera mini-lab assembled and validated on the bench oracle before the StarlightEye arrives.

## Lane 4 — Documentation reconciliation
Merge review of `feat/import-engineering-bible` so stable-ID links in the demo-brick docs resolve; then re-run the link check. Portal (other agent's lane) picks up the new pages from INDEX.

## Exit of the 30 days
All orders placed and tracked; island simulator passing its contract suite; enclosure generator producing a printable first shell; haptics converter round-tripping; bible links resolved. First hardware arriving into a bench that is already instrumented.

---
id: AOS-PLAN-002
title: Roadmap and Gantt
status: foundation
---

# Roadmap and Gantt

## Implementation phases

| Phase | Objective | Exit evidence |
|---|---|---|
| 0 | Source intake and architectural decisions | source inventory, ADR set, claim ledger |
| 1 | Research and feasibility experiments | bounded experiments with positive or negative evidence |
| 2 | Portable contracts | native IDL, board boundary, device-service conformance model |
| 3 | Normative specifications | reviewed kernel, security, update, hardware, and product specifications |
| 4 | Rust engineering baseline | toolchain, unsafe policy, formatting, linting, testing, reproducible builds |
| 5 | QEMU scaffold | deterministic boot, serial evidence, memory map, CI artifacts |
| 6 | Microkernel vertical slice | isolated processes, capabilities, IPC, timers, scheduling, crash evidence |
| 7 | Physical hardware and Pixel 9 evidence | open-board bring-up plus gated Pixel feasibility results |
| 8 | Publication and community launch | public portal, contribution process, issue graph, release artifacts |

## Schedule authority

GitHub Issues are executable work records. GitHub Project date fields are the schedule authority. The portal Gantt is a derived representation and must never contain tracker-only edits.

## Dependency rules

- Parent/sub-issue relations express decomposition.
- Blocked-by relations express hard scheduling constraints.
- Related links express useful context but do not alter the critical path.
- A task cannot move to Done without linked acceptance evidence.
- Unknown feasibility creates an experiment task rather than an optimistic implementation dependency.

## Baseline

The initial baseline starts on 13 July 2026. Dates beyond the first evidence gates are planning ranges rather than commitments and must be re-baselined after QEMU, first-board, camera, and Pixel feasibility results.

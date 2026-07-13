---
id: "AOS-README"
title: "Agent OS Engineering Bible"
status: "Foundation release"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Cross-linked architecture, hardware, research, legal, planning, glossary, evidence, and import package for an owned portable microkernel system."
---
# Agent OS Engineering Bible

This repository is a research-backed foundation for an owned microkernel operating system and entity-first personal computing environment. “Agent OS” is an internal descriptive working name; stable IDs use `AOS-*`.

## Start Here

1. [[AOS-BRIEF#executive-decision|Executive briefing]]
2. [[AOS-VSN-001#product-thesis|Product vision]]
3. [[AOS-ARCH-001#system-boundary|Portable system architecture]]
4. [[AOS-HW-001#portfolio|Hardware target portfolio]]
5. [[AOS-PLAN-007#first-90-days|First 90 days]]
6. [[AOS-PLAN-002#programme-gantt|Roadmap and Gantt]]
7. [[AOS-TASKS#task-catalog|Canonical tasks]]
8. [[AOS-GLOSSARY#alphabetical-index|Glossary]]

## Non-Negotiable Model

- The project owns its Rust-first microkernel and native system contracts.
- Product and service layers are portable across board backends.
- Android and Linux are not general foundations. Their use is confined to bounded Pixel 9 evidence, extraction, recovery, or temporary adapter work with explicit replacement gates.
- QEMU and documented boards prove architecture and portability; Pixel 9 tests quality-ceiling feasibility; a future ODM/JDM device is anticipated but not assumed.
- Sources, claims, experiments, tasks, and decisions are traceable through stable IDs.

## Status

This is a foundation release: executable planning and normative direction, not a claim that the OS or hardware support already exists. Specialist review gates are explicit throughout the package.

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

<a id="repository-artifacts"></a>

### Repository Artifacts

Stable planning anchor; obligations are defined by linked tasks in `docs/planning/tasks.csv`.

<a id="start-here"></a>

### Start Here

Stable planning anchor; obligations are defined by linked tasks in `docs/planning/tasks.csv`.

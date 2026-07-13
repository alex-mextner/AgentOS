---
id: "AOS-PLAN-007"
title: "First 90 Days"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Concrete first-week, first-month, 30–60 day, and 60–90 day execution sequence and exit evidence."
---

# First 90 Days

> Concrete first-week, first-month, 30–60 day, and 60–90 day execution sequence and exit evidence.

## Table of Contents

- [Day 0–7: Establish Control](#day-zero)
- [Weeks 2–4: Reproducible Bootstrap](#weeks-two-four)
- [Weeks 5–8: Kernel Vertical Foundations](#weeks-five-eight)
- [Weeks 9–12: Integrated Proof and Re-Baseline](#weeks-nine-twelve)
- [90-Day Exit Evidence](#ninety-day-exit)
- [First Purchases and Commitments](#first-purchases)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="day-zero"></a>

## Day 0–7: Establish Control

- Confirm the neutral working designation and initiate professional trademark clearance; do not publish under “AgentOS.”
- Create private GitHub organization/repositories and Linear workspace with the structure in [the operating model](AOS-PLAN-008.md#workspace-model).
- Adopt code, documentation, contribution, provenance, and security policies.
- Establish the source, claim, experiment, risk, asset, and contact registers.
- Engage counsel for entity/IP ownership, reverse engineering, device terms, and contributor policy.
- Freeze architecture ADRs 0001–0006 as the implementation baseline.
- Approve the first procurement tranche after exact device SKU and return-path checks.

<a id="weeks-two-four"></a>

## Weeks 2–4: Reproducible Bootstrap

**Core OS**
- Create workspace, formatter/linter, target specs, cross-toolchain, emulator launcher, deterministic build metadata, and crash artifact pipeline.
- Boot the smallest kernel image in QEMU AArch64 and x86-64, print structured logs, parse boot descriptors, initialize memory, and halt cleanly.
- Write executable models/tests for capabilities, object lifecycle, rights attenuation, and IPC message validation.

**Hardware/research**
- Complete BeaglePlay, camera-board, PinePhone Pro, and Pixel 9 target dossiers.
- Capture stock baseline data and backup/recovery images before modifications.
- Instrument power, UART, USB, and automated power-cycle infrastructure.

**Product/legal/community**
- Freeze entity/action/event schema v0 drafts.
- Publish contribution and clean-room onboarding material internally.
- Prepare vendor/community outreach packages with precise asks.

<a id="weeks-five-eight"></a>

## Weeks 5–8: Kernel Vertical Foundations

- Implement early allocator, page-table abstraction, address spaces, user transition, exception handling, timer, and first user process in QEMU.
- Implement kernel object handles, capability-space prototype, synchronous IPC, wait/timeout, and process crash isolation.
- Define IDL syntax and generate Rust client/server skeletons for one logging and one storage test service.
- Build a deterministic host reference model and differential tests against the kernel behavior.
- Bring up documented-board bootloader handoff and serial output without porting product code.
- Build the product shell data model and non-rendering workflow tests on the host.
- Counsel reviews protected-device work before Pixel protocol observation begins.

<a id="weeks-nine-twelve"></a>

## Weeks 9–12: Integrated Proof and Re-Baseline

- Boot a user-space service manager, logging service, and test application through capability-routed IPC.
- Demonstrate denial, attenuation, revocation, timeout, crash restart, and bounded resource use.
- Produce a framebuffer/virtio or simple display path in QEMU and render a minimal entity inspector.
- Persist an entity, emit a semantic event, execute a reversible action, and verify its receipt/replay.
- Complete first physical-board boot spike and update the scorecard with measured facts.
- Complete Pixel stock oracle/trace architecture without introducing a portable Android dependency.
- Run legal, security, architecture, budget, and risk review; re-baseline the 24-month roadmap.

<a id="ninety-day-exit"></a>

## 90-Day Exit Evidence

The first 90 days succeed when:

- builds are reproducible enough for independent CI verification;
- QEMU boots a user process with memory isolation and structured crash evidence;
- a capability IPC vertical slice executes and denies ungranted use;
- the entity/action/event data model is exercised end-to-end;
- one documented physical target produces early serial/boot evidence;
- target dossiers, legal boundaries, purchases, sources, and claims are current;
- the team can state which assumptions were confirmed, rejected, or converted into experiments;
- the next funding tranche has a written gate packet.

<a id="first-purchases"></a>

## First Purchases and Commitments

The first order and budget controls are specified in [HW-009](AOS-HW-009.md#first-order). Purchases must include duplicates for destructive work, a stock oracle for every modified phone family, serial/power instrumentation, backup storage, and counsel. Do not purchase a premium RF/camera instrument solely because it appears on a generic lab list; tie every item to a measurement task.

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

These fine-grained anchors give the execution plan stable links into this specification. They are normative pointers: the linked canonical section remains the full requirement source.

<a id="ninety-day-plan"></a>

### Ninety Day Plan

For planning, conformance, and task cross-references, **Ninety Day Plan** denotes the part of this specification governed primarily by [Day 0–7: Establish Control](#day-zero). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.


<a id="generated-xref-anchors"></a>

## Generated Cross-Reference Anchors

<a id="first-90-days"></a>

### First 90 Days

This stable anchor is referenced by another canonical document. Its normative content is the nearest applicable section above and the linked task/claim data; future editorial refinement must preserve the anchor.

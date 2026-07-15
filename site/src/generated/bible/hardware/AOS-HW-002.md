---
id: "AOS-HW-002"
title: "Pixel 9 Quality-Hardware Track"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Hardware Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Pixel 9 Quality-Hardware Track: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Pixel 9 Quality-Hardware Track

> This specification treats hardware support as an evidence programme with explicit documentation rights, recovery paths, quality gates, and replacement strategies.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Normative Position](#normative-position)
- [Operating Model](#operating-model)
- [Requirements](#requirements)
- [Failure and Degradation](#failure-and-degradation)
- [Evidence and Acceptance](#evidence-and-acceptance)
- [Implementation Obligations](#implementation-obligations)
- [Risks and Open Questions](#risks-and-open-questions)
- [Related Documents](#related-documents)
- [Planning Reference Anchors](#planning-reference-anchors)
<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Hardware Programme.

This specification treats hardware support as an evidence programme with explicit documentation rights, recovery paths, quality gates, and replacement strategies.

This document owns the semantics implied by **Pixel 9 Quality-Hardware Track**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Pixel 9 is an evidence and quality-ceiling track, not the platform architecture.
2. Allowed Android/Linux uses are stock baselines, lawful observation, recovery, extraction, and temporary isolated bridges with end dates.
3. Every legacy cell declares inputs, outputs, taint, license, security boundary, replacement owner, and final acceptable gate.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Pixel 9 is an evidence and quality-ceiling track, not the platform architecture.
- **R02.** Allowed Android/Linux uses are stock baselines, lawful observation, recovery, extraction, and temporary isolated bridges with end dates.
- **R03.** Every legacy cell declares inputs, outputs, taint, license, security boundary, replacement owner, and final acceptable gate.
- **R04.** Specify normal, partial, denied, timeout, cancellation, restart, upgrade, and permanent-failure behavior.
- **R05.** Expose structured diagnostics without leaking secrets or vendor-specific implementation details.
- **R06.** Link material unknowns to a claim and, when testable, an experiment with an owner and gate.
- **R07.** Update affected documentation and task data when evidence changes the model.
<a id="failure-and-degradation"></a>

## Failure and Degradation

Degradation must be explicit rather than accidental. The system reports capability absence, reduced quality, unavailable provider, stale data, or unsafe condition through typed states. It must not silently fall back to broader authority, unrestricted legacy execution, unverified firmware, lossy data migration, or irreversible agent action.

Recovery defines what state is retained, reconstructed, re-enrolled, compensated, or intentionally discarded. Unsupported hardware or providers are rejected at binding time where possible.
<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- Dependency scan proving no Android/Linux types above adapters.
- SKU-specific acquisition and recovery dossier.
- Native replacement or explicit track termination at each gate.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-P9-000 | Pixel 9 Quality-Hardware Research epic | P1 | Continuous | monthly project review and gate reconciliation |
| AOS-P9-001 | Complete Pixel 9 target and legal dossier | P0 | M1 | architecture/hardware/security/legal review against official/current sources and acquired unit |
| AOS-P9-010 | Verify Pixel 9 acquisition, unlock, relock, and stock restore | P0 | M1 | EXP-030 on at least two development units with factory restore and one preserved stock oracle |
| AOS-P9-011 | Automate Pixel stock recovery and artifact inventory | P0 | M1 | recover from intentionally bad noncritical image/state and reproduce on a second unit |
| AOS-P9-020 | Build Pixel 9 stock camera/display/power quality oracle | P1 | M5 | EXP-035 repeated across two units, software versions, controlled scenes/workloads and battery states |
| AOS-P9-022 | Define temporary Pixel sidecar/proxy contracts and retirement plan | P2 | M4 | disconnect/compromise/version mismatch/replay/data minimization and native-backend swap tests |
| AOS-P9-030 | Reach lawful reproducible Agent OS early diagnostics on Pixel 9 | P0 | M7 | EXP-032 repeated from stock/recovery states on two units, malformed image and loss-of-diagnostic tests |
| AOS-P9-031 | Map Pixel boot, memory, interrupt, timer, IOMMU, and storage architecture | P1 | M7 | clean-room/source review, controlled probes, consistency with boot traces and independent reviewer |
| AOS-P9-040 | Evaluate native Pixel storage, USB, display, and touch paths | P0 | M7 | EXP-033 cold boots, I/O/display/touch/reset/driver-fault and bad-image recovery across two units |
| AOS-P9-041 | Evaluate native Pixel audio and basic device-service paths | P2 | M7 | controlled output/input/button/sensor/power transitions, failure and privacy tests where feasible |
| AOS-P9-050 | Evaluate Pixel GPU, display acceleration, power, and thermal feasibility | P0 | M7 | EXP-034 first accelerated workload or bounded blocker, power/thermal transitions and interface/provenance review |
| AOS-P9-051 | Evaluate native Pixel camera feasibility and quality gap | P1 | M7 | compare accessible native evidence to stock oracle and portable camera API; legal/security/camera review |
| AOS-P9-052 | Evaluate Pixel modem, radio, secure element, and verified-boot boundaries | P2 | M7 | official/public-source and approved black-box review with security/cellular/legal specialists |
| AOS-P9-070 | Issue Pixel 9 continue, limit, or stop gate decision | P0 | M7 | cross-functional review with comparison to documented/open/custom alternatives |
| AOS-LEGAL-007 | Approve Pixel 9 research boundary | P0 | M1 | counsel and architecture review against proposed Pixel experiments |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- A temporary bridge can become permanent through schedule pressure.
- Factory images and firmware may restrict redistribution or reverse engineering.
- Pixel SKUs, unlockability, firmware, and vendor interfaces vary.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when legal rights, recovery, debug access, safety, or the required evidence path is unavailable.
<a id="related-documents"></a>

## Related Documents

- [Product vision](AOS-VSN-001.md#product-thesis)
- [Portable system architecture](AOS-ARCH-001.md#system-boundary)
- [Portable device-service contracts](AOS-ARCH-020.md#contract-set)
- [Hardware portfolio](AOS-HW-001.md#portfolio)
- [Decision gates](AOS-PLAN-006.md#decision-gates)
- [Claim register](AOS-RES-003.md#claim-register)
<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

<a id="allowed-legacy-uses"></a>

### Allowed Legacy Uses

`AOS-LEGAL-007` — Approve Pixel 9 research boundary

<a id="camera-feasibility"></a>

### Camera Feasibility

`AOS-P9-051` — Evaluate native Pixel camera feasibility and quality gap

<a id="decision-gate"></a>

### Decision Gate

`AOS-P9-070` — Issue Pixel 9 continue, limit, or stop gate decision

<a id="device-acquisition"></a>

### Device Acquisition

`AOS-P9-010` — Verify Pixel 9 acquisition, unlock, relock, and stock restore

<a id="gpu-and-display"></a>

### Gpu And Display

`AOS-P9-050` — Evaluate Pixel GPU, display acceleration, power, and thermal feasibility; `AOS-P9-050` — Evaluate Pixel GPU, display acceleration, power, and thermal feasibility

<a id="phase-one-boot"></a>

### Phase One Boot

`AOS-P9-030` — Reach lawful reproducible Agent OS early diagnostics on Pixel 9

<a id="phase-three-essential-io"></a>

### Phase Three Essential Io

`AOS-P9-040` — Evaluate native Pixel storage, USB, display, and touch paths; `AOS-P9-041` — Evaluate native Pixel audio and basic device-service paths

<a id="phase-two-platform"></a>

### Phase Two Platform

`AOS-P9-031` — Map Pixel boot, memory, interrupt, timer, IOMMU, and storage architecture

<a id="power-and-thermal"></a>

### Power And Thermal

`AOS-P9-050` — Evaluate Pixel GPU, display acceleration, power, and thermal feasibility; `AOS-P9-050` — Evaluate Pixel GPU, display acceleration, power, and thermal feasibility

<a id="quality-oracle"></a>

### Quality Oracle

`AOS-P9-020` — Build Pixel 9 stock camera/display/power quality oracle

<a id="radio-and-security"></a>

### Radio And Security

`AOS-P9-052` — Evaluate Pixel modem, radio, secure element, and verified-boot boundaries

<a id="recovery-first"></a>

### Recovery First

`AOS-P9-011` — Automate Pixel stock recovery and artifact inventory

<a id="sidecar-and-proxy"></a>

### Sidecar And Proxy

`AOS-P9-022` — Define temporary Pixel sidecar/proxy contracts and retirement plan

<a id="target-dossier"></a>

### Target Dossier

`AOS-P9-001` — Complete Pixel 9 target and legal dossier

<a id="track-purpose"></a>

### Track Purpose

`AOS-P9-000` — Pixel 9 Quality-Hardware Research epic

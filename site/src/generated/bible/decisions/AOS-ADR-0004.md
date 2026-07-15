---
id: "AOS-ADR-0004"
title: "ADR-0004: Minimal Android/Linux Use on Pixel 9"
status: "Accepted foundation decision"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "ADR-0004: Minimal Android/Linux Use on Pixel 9: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# ADR-0004: Minimal Android/Linux Use on Pixel 9

> This record freezes a high-cost architectural decision, its rationale, consequences, reversal conditions, and required evidence.

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

**Area:** Architecture Decision.

This record freezes a high-cost architectural decision, its rationale, consequences, reversal conditions, and required evidence.

This document owns the semantics implied by **ADR-0004: Minimal Android/Linux Use on Pixel 9**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
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
| AOS-P9-015 | Enforce Pixel Android/Linux dependency containment | P0 | M7 | EXP-031 with seeded Android/Linux/Binder/POSIX/vendor types and actual Pixel components |
| AOS-P9-080 | Retire or constrain temporary Pixel adapters after gate | P1 | M9 | portable build/test without retired adapters and declared maintenance tests for retained ones |
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

<a id="consequences"></a>

### Consequences

`AOS-P9-080` — Retire or constrain temporary Pixel adapters after gate

<a id="decision"></a>

### Decision

`AOS-P9-015` — Enforce Pixel Android/Linux dependency containment

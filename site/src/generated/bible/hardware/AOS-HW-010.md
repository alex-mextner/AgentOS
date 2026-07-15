---
id: "AOS-HW-010"
title: "Hardware Candidate Scorecard"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Hardware Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Hardware Candidate Scorecard: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Hardware Candidate Scorecard

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

This document owns the semantics implied by **Hardware Candidate Scorecard**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Score candidates separately for documentation, redistributable firmware, recovery, debug, IOMMU, display, camera, modem isolation, power control, longevity, unit availability, and vendor responsiveness.
2. Run QEMU, documentation-first boards, open phone form factor, semi-open quality, Pixel 9, camera laboratory, and future custom-device tracks in parallel.
3. A candidate is purchased only after SKU and documentation gates pass.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Score candidates separately for documentation, redistributable firmware, recovery, debug, IOMMU, display, camera, modem isolation, power control, longevity, unit availability, and vendor responsiveness.
- **R02.** Run QEMU, documentation-first boards, open phone form factor, semi-open quality, Pixel 9, camera laboratory, and future custom-device tracks in parallel.
- **R03.** A candidate is purchased only after SKU and documentation gates pass.
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

- Completed target dossier.
- Reproducible recovery and first-boot evidence.
- Second-vendor portability result.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-OPEN-032 | Evaluate and bring up NXP i.MX 8M Plus target | P2 | M5 | official-source review, vendor contact, native boot/camera feasibility and scorecard update |
| AOS-OPEN-072 | Evaluate Librem 5 as modular-radio/manufacturing prior art | P3 | M5 | source/vendor review and comparison to PinePhone/custom carrier goals |
| AOS-OPEN-080 | Select maintained hardware portfolio after M6/M7 | P0 | M9 | cross-functional gate review with total cost and capacity model |
| AOS-CAM-071 | Evaluate vendor camera path against native reference | P1 | M9 | same scene/harness, failure/update, provenance/security and replacement exercises |
| AOS-ODM-011 | Freeze product-hardware architecture envelope | P1 | M9 | product/camera/cellular/power/security/regulatory/supply review and sensitivity scenarios |
| AOS-ODM-020 | Select module-versus-custom subsystem strategy | P1 | M9 | architecture/camera/cellular/security/supply review with at least two feasible configurations |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- “Open source” may cover only kernel sources, not datasheets, firmware, ISP or secure boot.
- Consumer boards can disappear or revise silently.
- A strong SoC without recovery/debug access is a weak research target.
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

<a id="candidate-scorecard"></a>

### Candidate Scorecard

`AOS-OPEN-032` — Evaluate and bring up NXP i.MX 8M Plus target; `AOS-OPEN-072` — Evaluate Librem 5 as modular-radio/manufacturing prior art; `AOS-ODM-020` — Select module-versus-custom subsystem strategy

<a id="decision-weights"></a>

### Decision Weights

`AOS-CAM-071` — Evaluate vendor camera path against native reference; `AOS-ODM-011` — Freeze product-hardware architecture envelope

<a id="evidence-updates"></a>

### Evidence Updates

`AOS-OPEN-080` — Select maintained hardware portfolio after M6/M7

---
id: "AOS-ARCH-020"
title: "Portable Device-Service Contracts"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Portable Device-Service Contracts: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Portable Device-Service Contracts

> This specification defines a native Agent OS contract. Android, Linux, Fuchsia and other systems may inform the design, but do not become ambient native ABI dependencies.

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

**Area:** System Architecture.

This specification defines a native Agent OS contract. Android, Linux, Fuchsia and other systems may inform the design, but do not become ambient native ABI dependencies.

This document owns the semantics implied by **Portable Device-Service Contracts**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Drivers execute in isolated domains with least-authority access to MMIO, IRQ, DMA windows, clocks, resets, firmware, and child devices.
2. Public services are device-class contracts; vendor primitives remain backend-private.
3. Board packages declare immutable resources and recovery metadata rather than embedding product policy.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Drivers execute in isolated domains with least-authority access to MMIO, IRQ, DMA windows, clocks, resets, firmware, and child devices.
- **R02.** Public services are device-class contracts; vendor primitives remain backend-private.
- **R03.** Board packages declare immutable resources and recovery metadata rather than embedding product policy.
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

- Crash/restart experiments.
- IOMMU and DMA fault tests.
- Two-backend contract conformance with unchanged clients.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-PLAT-100 | Specify portable device-service quality profiles | P1 | M2 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-PLAT-102 | Build deterministic service trace replay harnesses | P1 | M3 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-CAM-092 | Specify portable 3A, calibration, and capture-result contracts | P0 | M2 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Vendor firmware and undocumented power sequences can block a native port.
- DMA isolation may be absent or incomplete on low-cost hardware.
- Driver restart can corrupt device or persistent state unless recovery is idempotent.
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

<a id="contract-set"></a>

### Contract Set

`AOS-PLAT-100` — Specify portable device-service quality profiles; `AOS-PLAT-100` — Specify portable device-service quality profiles; `AOS-CAM-092` — Specify portable 3A, calibration, and capture-result contracts

<a id="mocking"></a>

### Mocking

`AOS-PLAT-102` — Build deterministic service trace replay harnesses

<a id="quality"></a>

### Quality

`AOS-PLAT-100` — Specify portable device-service quality profiles; `AOS-PLAT-100` — Specify portable device-service quality profiles

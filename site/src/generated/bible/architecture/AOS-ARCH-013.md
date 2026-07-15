---
id: "AOS-ARCH-013"
title: "Boot, Update, and Recovery"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Boot, Update, and Recovery: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Boot, Update, and Recovery

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

This document owns the semantics implied by **Boot, Update, and Recovery**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Define ROM/firmware handoff, verified stages, measurements, anti-rollback, A/B or equivalent atomic update, recovery, and user-visible failure states.
2. Separate device keys, release keys, recovery authority, and development unlock policy.
3. Updates include kernel, services, drivers, firmware metadata, schemas, and migrations as an atomic compatibility set.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Define ROM/firmware handoff, verified stages, measurements, anti-rollback, A/B or equivalent atomic update, recovery, and user-visible failure states.
- **R02.** Separate device keys, release keys, recovery authority, and development unlock policy.
- **R03.** Updates include kernel, services, drivers, firmware metadata, schemas, and migrations as an atomic compatibility set.
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

- Power-cut update tests.
- Rollback/freeze attack tests.
- Reproducible recovery from corrupted slots and migrations.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-CORE-012 | Define boot handoff and platform description contract | P0 | M1 | fuzz parser and adapt both QEMU architectures without changing kernel-neutral fields |
| AOS-CORE-015 | Enter user mode and launch initial process | P0 | M1 | launch valid/invalid images, fault user code, and inspect isolation/crash artifacts |
| AOS-PLAT-015 | Implement initial system image and bootstrap service graph | P0 | M3 | clean assembly, tamper/missing component, recovery fallback and version compatibility tests |
| AOS-PLAT-051 | Implement transactional system update pipeline | P0 | M8 | tamper, interruption at every phase, bad kernel/service/schema, rollback attack and recovery tests on QEMU/board |
| AOS-PLAT-052 | Implement recovery environment and service tools | P0 | M8 | unbootable system, corrupt metadata, failed update, lost credential and malicious recovery media scenarios |
| AOS-OPEN-056 | Validate open-phone update and recovery | P0 | M8 | interrupt every update phase, corrupt partitions/manifests and recover two devices from external instructions |
| AOS-P9-052 | Evaluate Pixel modem, radio, secure element, and verified-boot boundaries | P2 | M7 | official/public-source and approved black-box review with security/cellular/legal specialists |
| AOS-SEC-030 | Implement signed boot manifest and root-of-trust abstraction | P0 | M3 | tamper, wrong target/version/key, development-state warning, key rotation and recovery tests on QEMU/board |
| AOS-SEC-031 | Specify measured boot and attestation semantics | P2 | M8 | replay/linkability/downgrade/unknown-target/verifier-policy tests and privacy review |
| AOS-SEC-032 | Implement anti-rollback and security-version policy | P0 | M4 | downgrade, counter corruption, interrupted increment, recovery and development-mode tests |
| AOS-SEC-040 | Threat-model and red-team update/package pipeline | P0 | M8 | adversarial repository/network/signing-key/partial-state tests and independent review |
| AOS-SEC-041 | Threat-model and validate recovery environment | P0 | M8 | stolen device, malicious media, rollback, data extraction, factory reset and failed-key scenarios |
| AOS-ODM-025 | Design secure provisioning and device identity lifecycle | P0 | M10 | mock factory/stolen station/misprovision/rework/returned device/key compromise and audit reconciliation |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- A partially updated system can be unrecoverable.
- Vendor firmware rollback rules may conflict with project recovery.
- Development unlock paths can weaken production guarantees.
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

<a id="anti-rollback"></a>

### Anti Rollback

`AOS-SEC-032` — Implement anti-rollback and security-version policy; `AOS-SEC-032` — Implement anti-rollback and security-version policy

<a id="attestation"></a>

### Attestation

`AOS-SEC-031` — Specify measured boot and attestation semantics

<a id="boot-chain"></a>

### Boot Chain

`AOS-CORE-012` — Define boot handoff and platform description contract; `AOS-SEC-030` — Implement signed boot manifest and root-of-trust abstraction; `AOS-SEC-030` — Implement signed boot manifest and root-of-trust abstraction

<a id="initial-system-image"></a>

### Initial System Image

`AOS-CORE-015` — Enter user mode and launch initial process; `AOS-PLAT-015` — Implement initial system image and bootstrap service graph

<a id="recovery-environment"></a>

### Recovery Environment

`AOS-PLAT-052` — Implement recovery environment and service tools; `AOS-OPEN-056` — Validate open-phone update and recovery; `AOS-SEC-041` — Threat-model and validate recovery environment

<a id="rollback"></a>

### Rollback

`AOS-PLAT-051` — Implement transactional system update pipeline; `AOS-PLAT-051` — Implement transactional system update pipeline; `AOS-SEC-032` — Implement anti-rollback and security-version policy; `AOS-SEC-032` — Implement anti-rollback and security-version policy

<a id="root-of-trust"></a>

### Root Of Trust

`AOS-P9-052` — Evaluate Pixel modem, radio, secure element, and verified-boot boundaries; `AOS-SEC-030` — Implement signed boot manifest and root-of-trust abstraction; `AOS-SEC-030` — Implement signed boot manifest and root-of-trust abstraction; `AOS-ODM-025` — Design secure provisioning and device identity lifecycle

<a id="update-model"></a>

### Update Model

`AOS-PLAT-051` — Implement transactional system update pipeline; `AOS-PLAT-051` — Implement transactional system update pipeline; `AOS-SEC-040` — Threat-model and red-team update/package pipeline

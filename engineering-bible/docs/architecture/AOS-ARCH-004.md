---
id: "AOS-ARCH-004"
title: "Capabilities and IPC"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Capabilities and IPC: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Capabilities and IPC

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

This document owns the semantics implied by **Capabilities and IPC**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Authority is represented by unforgeable object references carrying explicit rights.
2. Delegation may attenuate but never amplify rights; revocation semantics are object-specific and documented.
3. IPC defines cancellation, timeout, back-pressure, priority interaction, handle transfer, and malformed-message behavior.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Authority is represented by unforgeable object references carrying explicit rights.
- **R02.** Delegation may attenuate but never amplify rights; revocation semantics are object-specific and documented.
- **R03.** IPC defines cancellation, timeout, back-pressure, priority interaction, handle transfer, and malformed-message behavior.
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

- State-machine model and property-based tests.
- Adversarial handle-transfer and revocation traces.
- Latency and priority-inversion measurements.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-CORE-001 | Freeze executable kernel semantics v0 | P0 | M1 | model review and property tests including invalid transitions |
| AOS-CORE-014 | Implement virtual address spaces and mappings | P0 | M1 | randomized mapping model comparison and permission/fault tests on both QEMU targets |
| AOS-CORE-017 | Implement kernel object and lifetime framework | P0 | M2 | lifetime/refcount/model properties, concurrent close/use, and leak detection |
| AOS-CORE-030 | Implement capability spaces and handle operations | P0 | M2 | model comparison, stale/forged handles, concurrency, exhaustion and enumeration-authority tests |
| AOS-CORE-031 | Implement synchronous IPC channel and message transfer | P0 | M2 | message/handle fuzzing, races, peer death, timeout, quota and model tests |
| AOS-CORE-032 | Implement rights attenuation, delegation, and revocation model | P0 | M2 | EXP-004 property/model tests under concurrent use and deep delegation |
| AOS-CORE-033 | Implement wait sets and asynchronous notification objects | P1 | M2 | lost/duplicate event, unregister race, peer death, overload and fairness tests |
| AOS-CORE-036 | Validate IPC priority propagation and deadline behavior | P1 | M2 | EXP-005 across nested calls, cancellation, overload and malicious servers |
| AOS-PLAT-021 | Implement hardware resource broker | P0 | M3 | overlap/forgery/driver-death/reset/DMA teardown tests on QEMU and first board |
| AOS-SEC-002 | Inventory trusted computing base and privilege domains | P0 | M1 | source/package/board manifest analysis and privilege-route review |
| AOS-SEC-010 | Conduct capability and IPC security design review | P0 | M2 | independent review and adversarial model/property tests |
| AOS-COMM-021 | Commission capability/microkernel architecture review | P1 | M2 | reviewer independence/qualifications and finding closure review |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Ambient namespaces reintroduce confused-deputy vulnerabilities.
- Global revocation can be unbounded without indirection or lifetime discipline.
- Synchronous IPC can create priority inversion or cyclic dependency.
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

<a id="capability-semantics"></a>

### Capability Semantics

`AOS-CORE-001` — Freeze executable kernel semantics v0; `AOS-CORE-030` — Implement capability spaces and handle operations; `AOS-CORE-030` — Implement capability spaces and handle operations

<a id="confused-deputy-defense"></a>

### Confused Deputy Defense

`AOS-SEC-010` — Conduct capability and IPC security design review; `AOS-SEC-010` — Conduct capability and IPC security design review

<a id="delegation-and-attenuation"></a>

### Delegation And Attenuation

`AOS-CORE-032` — Implement rights attenuation, delegation, and revocation model; `AOS-CORE-032` — Implement rights attenuation, delegation, and revocation model

<a id="handle-tables"></a>

### Handle Tables

`AOS-CORE-030` — Implement capability spaces and handle operations; `AOS-CORE-030` — Implement capability spaces and handle operations

<a id="ipc-model"></a>

### Ipc Model

`AOS-CORE-031` — Implement synchronous IPC channel and message transfer

<a id="ipc-scheduling"></a>

### Ipc Scheduling

`AOS-CORE-036` — Validate IPC priority propagation and deadline behavior

<a id="least-authority"></a>

### Least Authority

`AOS-SEC-002` — Inventory trusted computing base and privilege domains

<a id="memory-capabilities"></a>

### Memory Capabilities

`AOS-CORE-014` — Implement virtual address spaces and mappings

<a id="object-rights"></a>

### Object Rights

`AOS-CORE-017` — Implement kernel object and lifetime framework

<a id="resource-capabilities"></a>

### Resource Capabilities

`AOS-PLAT-021` — Implement hardware resource broker

<a id="revocation"></a>

### Revocation

`AOS-CORE-032` — Implement rights attenuation, delegation, and revocation model; `AOS-CORE-032` — Implement rights attenuation, delegation, and revocation model

<a id="security-properties"></a>

### Security Properties

`AOS-SEC-010` — Conduct capability and IPC security design review; `AOS-SEC-010` — Conduct capability and IPC security design review; `AOS-COMM-021` — Commission capability/microkernel architecture review

<a id="waiting-and-signals"></a>

### Waiting And Signals

`AOS-CORE-033` — Implement wait sets and asynchronous notification objects

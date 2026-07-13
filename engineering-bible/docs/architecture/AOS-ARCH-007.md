---
id: "AOS-ARCH-007"
title: "System Services"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "System Services: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# System Services

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

This document owns the semantics implied by **System Services**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Define the boundary, owner, inputs, outputs, failure modes, observability, security authority, lifecycle, and compatibility policy.
2. Keep implementation facts separate from desired outcomes and unverified assumptions.
3. Require a reproducible evidence bundle before downstream components depend on the result.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Define the boundary, owner, inputs, outputs, failure modes, observability, security authority, lifecycle, and compatibility policy.
- **R02.** Keep implementation facts separate from desired outcomes and unverified assumptions.
- **R03.** Require a reproducible evidence bundle before downstream components depend on the result.
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

- Reviewed specification.
- Linked tasks, claims, sources and experiments.
- Conformance or acceptance evidence.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-CORE-021 | Implement monotonic time, deadlines, and timer objects | P1 | M2 | ordering, cancellation races, overflow, suspend adjustment contract and load tests |
| AOS-CORE-033 | Implement wait sets and asynchronous notification objects | P1 | M2 | lost/duplicate event, unregister race, peer death, overload and fairness tests |
| AOS-PLAT-001 | Catalog native platform contracts | P0 | M1 | architecture/security/product/hardware review and Linux/Android type scan |
| AOS-PLAT-010 | Implement user-space service manager | P0 | M2 | start order, denied route, crash loop, dependency failure, update and resource-exhaustion scenarios |
| AOS-PLAT-013 | Implement time, entropy, and identity foundation services | P1 | M3 | clock jumps, no-network, entropy failure, identity rotation/revocation and authorization tests |
| AOS-PLAT-014 | Specify package, component, and integration manifest | P1 | M3 | validate first-party service, product integration, driver and malicious/invalid packages |
| AOS-PLAT-030 | Demonstrate driver-domain crash and restart recovery | P0 | M3 | EXP-006 for crash during idle, I/O, DMA and suspend transitions |
| AOS-PLAT-031 | Implement block-storage service and backend contract | P0 | M3 | ordering/flush/power-loss simulation, malformed request, removal and throughput tests |
| AOS-PLAT-032 | Implement durable object/filesystem service v0 | P0 | M4 | crash/power-cut model, corruption, rollback, quota, concurrent transactions and migration tests |
| AOS-PLAT-033 | Implement native network service v0 | P1 | M4 | interoperability, malformed/hostile traffic, capability isolation, link loss, suspend and throughput/latency tests |
| AOS-PLAT-036 | Implement audio service and graph contract | P1 | M4 | latency/drift/glitch, route changes, device removal, permission, suspend and crash tests |
| AOS-PLAT-050 | Implement package installation, verification, and component registry | P1 | M4 | tampered/signature/API/dependency/migration/power-loss/uninstall tests |
| AOS-OPEN-053 | Enable open-phone Wi-Fi and Bluetooth baseline | P1 | M6 | malformed/hostile inputs, reconnect, suspend, key storage, power, firmware failure and coexistence tests |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Undefined ownership and failure semantics create hidden coupling.
- Unverified source claims can become architecture accidentally.
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

<a id="audio-service"></a>

### Audio Service

`AOS-PLAT-036` — Implement audio service and graph contract

<a id="event-loop"></a>

### Event Loop

`AOS-CORE-033` — Implement wait sets and asynchronous notification objects

<a id="foundation-services"></a>

### Foundation Services

`AOS-PLAT-013` — Implement time, entropy, and identity foundation services

<a id="network-service"></a>

### Network Service

`AOS-PLAT-033` — Implement native network service v0; `AOS-OPEN-053` — Enable open-phone Wi-Fi and Bluetooth baseline

<a id="package-model"></a>

### Package Model

`AOS-PLAT-014` — Specify package, component, and integration manifest; `AOS-PLAT-050` — Implement package installation, verification, and component registry

<a id="service-catalog"></a>

### Service Catalog

`AOS-PLAT-001` — Catalog native platform contracts

<a id="service-lifecycle"></a>

### Service Lifecycle

`AOS-PLAT-010` — Implement user-space service manager; `AOS-PLAT-010` — Implement user-space service manager; `AOS-PLAT-030` — Demonstrate driver-domain crash and restart recovery

<a id="service-manager"></a>

### Service Manager

`AOS-PLAT-010` — Implement user-space service manager; `AOS-PLAT-010` — Implement user-space service manager

<a id="storage-services"></a>

### Storage Services

`AOS-PLAT-031` — Implement block-storage service and backend contract; `AOS-PLAT-032` — Implement durable object/filesystem service v0

<a id="time-service"></a>

### Time Service

`AOS-CORE-021` — Implement monotonic time, deadlines, and timer objects

---
id: "AOS-ARCH-005"
title: "IDL, API, and Versioning"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "IDL, API, and Versioning: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# IDL, API, and Versioning

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

This document owns the semantics implied by **IDL, API, and Versioning**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. IDL schemas are transport-neutral and generated into language bindings.
2. Compatibility is explicit: additive evolution, feature negotiation, deprecation windows, and semantic version tests.
3. Vendor, Linux, Android, Binder, D-Bus, ioctl, and device-node types stop at adapters.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** IDL schemas are transport-neutral and generated into language bindings.
- **R02.** Compatibility is explicit: additive evolution, feature negotiation, deprecation windows, and semantic version tests.
- **R03.** Vendor, Linux, Android, Binder, D-Bus, ioctl, and device-node types stop at adapters.
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

- Golden wire fixtures and old/new peer tests.
- Dependency lint forbidding backend types above adapters.
- Conformance suites shared by mock, QEMU, board, and Pixel adapters.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-CORE-031 | Implement synchronous IPC channel and message transfer | P0 | M2 | message/handle fuzzing, races, peer death, timeout, quota and model tests |
| AOS-PLAT-002 | Specify Agent OS IDL syntax and semantic model | P0 | M2 | parser/typechecker prototype and review against storage/display/camera/cellular/action interfaces |
| AOS-PLAT-003 | Implement IDL compiler and Rust bindings v0 | P0 | M2 | round-trip/golden/invalid/fuzz tests and two independently implemented endpoints |
| AOS-PLAT-004 | Define API-level and schema evolution tooling | P1 | M2 | seed breaking/compatible changes and multi-level client/server matrices |
| AOS-PLAT-103 | Generate backend conformance tests from Agent OS IDL | P1 | M4 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Accidental ABI leakage couples portable layers to one backend.
- Schema compatibility does not guarantee semantic compatibility.
- Long deprecation windows can preserve insecure behavior.
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

<a id="bindings"></a>

### Bindings

`AOS-PLAT-003` — Implement IDL compiler and Rust bindings v0; `AOS-PLAT-003` — Implement IDL compiler and Rust bindings v0

<a id="idl-semantics"></a>

### Idl Semantics

`AOS-PLAT-002` — Specify Agent OS IDL syntax and semantic model; `AOS-PLAT-002` — Specify Agent OS IDL syntax and semantic model

<a id="service-contract-rules"></a>

### Service Contract Rules

`AOS-PLAT-002` — Specify Agent OS IDL syntax and semantic model; `AOS-PLAT-002` — Specify Agent OS IDL syntax and semantic model

<a id="type-system"></a>

### Type System

`AOS-PLAT-103` — Generate backend conformance tests from Agent OS IDL

<a id="versioning-policy"></a>

### Versioning Policy

`AOS-PLAT-004` — Define API-level and schema evolution tooling

<a id="wire-format"></a>

### Wire Format

`AOS-CORE-031` — Implement synchronous IPC channel and message transfer; `AOS-PLAT-003` — Implement IDL compiler and Rust bindings v0; `AOS-PLAT-003` — Implement IDL compiler and Rust bindings v0

---
id: "AOS-ARCH-015"
title: "Build, Test, Evidence, and Observability"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Build, Test, Evidence, and Observability: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Build, Test, Evidence, and Observability

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

This document owns the semantics implied by **Build, Test, Evidence, and Observability**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Define claims before tests and specify evidence, target, configuration, seed, tools, expected failure, reviewer, and retention.
2. Use unit, property, model, fuzz, fault-injection, integration, conformance, performance, security, privacy, hardware, and recovery tests.
3. A negative result is a valid deliverable when bounded and reproducible.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Define claims before tests and specify evidence, target, configuration, seed, tools, expected failure, reviewer, and retention.
- **R02.** Use unit, property, model, fuzz, fault-injection, integration, conformance, performance, security, privacy, hardware, and recovery tests.
- **R03.** A negative result is a valid deliverable when bounded and reproducible.
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

- Reproducible evidence bundle.
- Two independent backend runs.
- Traceability from claim to experiment to task to decision.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-CORE-002 | Establish freestanding Rust toolchain and target definitions | P0 | M1 | clean builds on two runners with matching declared inputs and bootable images |
| AOS-CORE-010 | Boot Agent OS in QEMU AArch64 | P0 | M1 | EXP-001 across repeated clean CI runs and malformed boot descriptors |
| AOS-CORE-038 | Implement structured crash records and kernel diagnostics | P1 | M2 | panic/process/interrupt/OOM crash scenarios and redaction/bounds tests |
| AOS-CORE-039 | Fuzz and property-test kernel syscall surface | P0 | M3 | seeded defects, coverage targets, crash deduplication and reproduction from corpus |
| AOS-PLAT-011 | Implement structured logging and diagnostics service | P0 | M2 | overload, malicious logger, secure-field taint, crash/reboot persistence and export tests |
| AOS-PLAT-015 | Implement initial system image and bootstrap service graph | P0 | M3 | clean assembly, tamper/missing component, recovery fallback and version compatibility tests |
| AOS-PLAT-060 | Build unified observability and evidence export pipeline | P1 | M4 | cross-layer incident reproduction, clock-correlation, rate/size limits, redaction and offline export |
| AOS-PLAT-070 | Implement emulator hardware-service backends and fault injection | P0 | M4 | service conformance and seeded disconnect/crash/corruption/latency/power cases |
| AOS-PLAT-080 | Build cross-target platform conformance suite | P0 | M5 | EXP-021 on QEMU, first board and second SoC as they become available |
| AOS-PLAT-081 | Implement hardware trace capture and deterministic replay | P1 | M5 | record/replay lifecycle scenarios and verify no protected/personal/Android/Linux type crosses format |
| AOS-PLAT-090 | Publish developer SDK, debugger, and service test kit | P1 | M8 | fresh external-style onboarding on Linux hosts and reproducible sample component release |
| AOS-OPEN-010 | Create QEMU hardware profiles and CI target matrix | P0 | M2 | run kernel/platform/product conformance across profiles and seeded resource/device failures |
| AOS-SEC-011 | Build continuous kernel and service fuzzing program | P0 | Continuous | seeded vulnerabilities and sustained runs with reproducible crash minimization |
| AOS-SEC-061 | Establish secure software and model supply-chain process | P1 | M8 | internal audit and simulated dependency/signing/secret/model provenance incidents |
| AOS-LEGAL-012 | Implement OSS/SBOM release compliance pipeline | P1 | M2 | release a fixture with permissive, copyleft, binary and generated components |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Passing mocks can conceal backend divergence.
- Benchmarks without thermal/power/configuration metadata are not comparable.
- Verification scope can be overstated.
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

<a id="conformance"></a>

### Conformance

`AOS-PLAT-080` — Build cross-target platform conformance suite

<a id="crash-evidence"></a>

### Crash Evidence

`AOS-CORE-038` — Implement structured crash records and kernel diagnostics

<a id="developer-experience"></a>

### Developer Experience

`AOS-PLAT-090` — Publish developer SDK, debugger, and service test kit

<a id="emulation"></a>

### Emulation

`AOS-CORE-010` — Boot Agent OS in QEMU AArch64; `AOS-PLAT-070` — Implement emulator hardware-service backends and fault injection; `AOS-OPEN-010` — Create QEMU hardware profiles and CI target matrix

<a id="fuzzing"></a>

### Fuzzing

`AOS-CORE-039` — Fuzz and property-test kernel syscall surface; `AOS-SEC-011` — Build continuous kernel and service fuzzing program

<a id="observability"></a>

### Observability

`AOS-PLAT-011` — Implement structured logging and diagnostics service; `AOS-PLAT-060` — Build unified observability and evidence export pipeline

<a id="release-evidence"></a>

### Release Evidence

`AOS-PLAT-015` — Implement initial system image and bootstrap service graph; `AOS-SEC-061` — Establish secure software and model supply-chain process; `AOS-LEGAL-012` — Implement OSS/SBOM release compliance pipeline

<a id="reproducible-builds"></a>

### Reproducible Builds

`AOS-CORE-002` — Establish freestanding Rust toolchain and target definitions

<a id="trace-replay"></a>

### Trace Replay

`AOS-PLAT-081` — Implement hardware trace capture and deterministic replay

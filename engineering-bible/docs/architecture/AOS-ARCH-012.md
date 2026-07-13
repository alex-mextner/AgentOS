---
id: "AOS-ARCH-012"
title: "Security Architecture and Threat Model"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Security Architecture and Threat Model: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Security Architecture and Threat Model

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

This document owns the semantics implied by **Security Architecture and Threat Model**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Model assets, actors, trust boundaries, capabilities, update keys, hardware roots, user data classes, agents, and external providers.
2. Default-deny authority, explicit data minimization, compartmentalized parsers, and measured recovery are system properties.
3. Hardware-bound secrets are non-exportable; migration re-enrolls rather than copies them.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Model assets, actors, trust boundaries, capabilities, update keys, hardware roots, user data classes, agents, and external providers.
- **R02.** Default-deny authority, explicit data minimization, compartmentalized parsers, and measured recovery are system properties.
- **R03.** Hardware-bound secrets are non-exportable; migration re-enrolls rather than copies them.
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

- Threat-model review and abuse-case tests.
- SBOM, provenance, signing and reproducible-build evidence.
- Security, privacy and agent red-team suites.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-CORE-013 | Implement physical memory manager | P0 | M1 | property tests, exhaustion, overlap, fragmentation and malformed-map tests |
| AOS-CORE-020 | Prove user-process isolation and fault containment | P0 | M1 | EXP-003 across both QEMU architectures |
| AOS-CORE-037 | Implement IOMMU and DMA ownership primitives | P1 | M3 | invalid DMA, teardown, device reset, concurrent mapping and no-IOMMU fallback policy tests |
| AOS-CORE-038 | Implement structured crash records and kernel diagnostics | P1 | M2 | panic/process/interrupt/OOM crash scenarios and redaction/bounds tests |
| AOS-PLAT-011 | Implement structured logging and diagnostics service | P0 | M2 | overload, malicious logger, secure-field taint, crash/reboot persistence and export tests |
| AOS-PLAT-013 | Implement time, entropy, and identity foundation services | P1 | M3 | clock jumps, no-network, entropy failure, identity rotation/revocation and authorization tests |
| AOS-PLAT-033 | Implement native network service v0 | P1 | M4 | interoperability, malformed/hostile traffic, capability isolation, link loss, suspend and throughput/latency tests |
| AOS-PROD-040 | Prove semantic journal excludes secure/raw sensitive input | P0 | M4 | EXP-060 using secure fields, clipboard, voice/handwriting, crash logs and malicious providers |
| AOS-OPEN-054 | Enable open-phone sensors and GNSS baseline | P2 | M8 | known-motion/location comparisons, denied/background access, suspend/resume and calibration persistence |
| AOS-CELL-022 | Implement physical SIM access and secret boundary | P0 | M5 | wrong PIN/PUK, brute-force/rate, process crash, removal, secure-input/journal and unauthorized APDU tests |
| AOS-CELL-041 | Integrate modem-assisted GNSS where supportable | P3 | M8 | known-location/time comparison, cold/warm start, denial/background, no-network and suspend tests |
| AOS-SEC-000 | Security, Update, and Assurance epic | P1 | Continuous | monthly project review and gate reconciliation |
| AOS-SEC-001 | Publish system threat model v0 | P0 | M0 | architecture/kernel/platform/product/hardware/legal red-team workshop |
| AOS-SEC-002 | Inventory trusted computing base and privilege domains | P0 | M1 | source/package/board manifest analysis and privilege-route review |
| AOS-SEC-012 | Create formal model and assurance roadmap for kernel core | P1 | M5 | model-check key properties and compare traces to executable/kernel tests |
| AOS-SEC-020 | Select and integrate cryptographic primitives and provider API | P0 | M2 | known-answer tests, misuse/nonce/key-purpose cases, dependency/SBOM review and independent crypto review |
| AOS-SEC-021 | Implement entropy collection and DRBG service | P0 | M3 | known-answer/statistical health/failure/no-source/duplicate-VM and suspend tests |

The canonical task CSV contains 9 additional linked tasks.
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Agents increase the blast radius of confused authority.
- Supply-chain compromise can bypass runtime isolation.
- Debug and trace facilities can leak data or weaken secure boot.
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

<a id="assets-and-adversaries"></a>

### Assets And Adversaries

`AOS-SEC-001` — Publish system threat model v0; `AOS-SEC-001` — Publish system threat model v0

<a id="assurance-strategy"></a>

### Assurance Strategy

`AOS-SEC-012` — Create formal model and assurance roadmap for kernel core; `AOS-SEC-100` — Maintain system assurance case and claim language

<a id="cryptography"></a>

### Cryptography

`AOS-SEC-020` — Select and integrate cryptographic primitives and provider API

<a id="diagnostic-data"></a>

### Diagnostic Data

`AOS-CORE-038` — Implement structured crash records and kernel diagnostics; `AOS-PLAT-011` — Implement structured logging and diagnostics service; `AOS-SEC-051` — Implement log, trace, crash, and evidence redaction controls

<a id="dma-threat"></a>

### Dma Threat

`AOS-CORE-037` — Implement IOMMU and DMA ownership primitives

<a id="entropy"></a>

### Entropy

`AOS-SEC-021` — Implement entropy collection and DRBG service

<a id="identity-and-attestation"></a>

### Identity And Attestation

`AOS-SEC-031` — Specify measured boot and attestation semantics

<a id="identity-and-entropy"></a>

### Identity And Entropy

`AOS-PLAT-013` — Implement time, entropy, and identity foundation services

<a id="independent-review"></a>

### Independent Review

`AOS-SEC-080` — Commission independent kernel/platform security review

<a id="isolation-goals"></a>

### Isolation Goals

`AOS-CORE-020` — Prove user-process isolation and fault containment

<a id="key-management"></a>

### Key Management

`AOS-SEC-022` — Implement key lifecycle and data-key hierarchy

<a id="location-privacy"></a>

### Location Privacy

`AOS-OPEN-054` — Enable open-phone sensors and GNSS baseline; `AOS-CELL-041` — Integrate modem-assisted GNSS where supportable

<a id="memory-safety"></a>

### Memory Safety

`AOS-CORE-013` — Implement physical memory manager

<a id="network-policy"></a>

### Network Policy

`AOS-PLAT-033` — Implement native network service v0

<a id="sensitive-data"></a>

### Sensitive Data

`AOS-PROD-040` — Prove semantic journal excludes secure/raw sensitive input; `AOS-CELL-022` — Implement physical SIM access and secret boundary; `AOS-SEC-050` — Implement data classification and privacy policy engine; `AOS-LEGAL-008` — Create privacy, telemetry, biometrics, and user-study framework

<a id="supply-chain"></a>

### Supply Chain

`AOS-SEC-040` — Threat-model and red-team update/package pipeline; `AOS-SEC-060` — Implement package signing, SBOM, provenance, and revocation security

<a id="threat-model-scope"></a>

### Threat Model Scope

`AOS-SEC-000` — Security, Update, and Assurance epic; `AOS-SEC-001` — Publish system threat model v0; `AOS-SEC-001` — Publish system threat model v0

<a id="trusted-computing-base"></a>

### Trusted Computing Base

`AOS-SEC-002` — Inventory trusted computing base and privilege domains

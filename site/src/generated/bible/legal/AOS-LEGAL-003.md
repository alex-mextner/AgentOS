---
id: "AOS-LEGAL-003"
title: "Open Source, IP, and Provenance Policy"
status: "Counsel-review engineering framework"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Legal Programme Owner"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Open Source, IP, and Provenance Policy: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Open Source, IP, and Provenance Policy

> This document is an engineering issue map for qualified counsel and compliance specialists; it is not legal advice or a substitute for jurisdiction-specific review.

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

**Area:** Legal and Compliance.

This document is an engineering issue map for qualified counsel and compliance specialists; it is not legal advice or a substitute for jurisdiction-specific review.

This document owns the semantics implied by **Open Source, IP, and Provenance Policy**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
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
| AOS-PLAT-050 | Implement package installation, verification, and component registry | P1 | M4 | tampered/signature/API/dependency/migration/power-loss/uninstall tests |
| AOS-CAM-053 | Evaluate optional ML imaging components under bounded policy | P3 | M9 | quality and robustness tests including out-of-distribution/skin-tone/privacy/thermal cases |
| AOS-P9-060 | Audit Pixel track source, license, security, and publication readiness | P0 | M7 | independent sample/rebuild/scan and counsel sign-off on releasable scope |
| AOS-SEC-011 | Build continuous kernel and service fuzzing program | P0 | Continuous | seeded vulnerabilities and sustained runs with reproducible crash minimization |
| AOS-SEC-020 | Select and integrate cryptographic primitives and provider API | P0 | M2 | known-answer tests, misuse/nonce/key-purpose cases, dependency/SBOM review and independent crypto review |
| AOS-SEC-060 | Implement package signing, SBOM, provenance, and revocation security | P0 | M4 | tamper, dependency substitution, compromised/revoked/expired key, build mismatch and offline-update tests |
| AOS-SEC-061 | Establish secure software and model supply-chain process | P1 | M8 | internal audit and simulated dependency/signing/secret/model provenance incidents |
| AOS-LEGAL-001 | Establish entity, IP ownership, and confidentiality baseline | P0 | M0 | qualified counsel review and signed/recorded instruments |
| AOS-LEGAL-003 | Approve project licenses, DCO, and contribution terms | P0 | M0 | counsel and governance approval plus repository checks |
| AOS-LEGAL-004 | Implement source and artifact provenance controls | P0 | M0 | scan seeded fixtures and sample imported dependencies/assets |
| AOS-LEGAL-012 | Implement OSS/SBOM release compliance pipeline | P1 | M2 | release a fixture with permissive, copyleft, binary and generated components |
| AOS-LEGAL-021 | Run trademark clearance for Agent OS and naming candidates | P0 | M0 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-COMM-003 | Publish contributor onboarding, DCO, and clean-room disclosure flow | P0 | M0 | new-contributor walkthrough and seeded missing signoff/unknown source/taint cases |
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

<a id="compliance-tooling"></a>

### Compliance Tooling

`AOS-SEC-060` — Implement package signing, SBOM, provenance, and revocation security; `AOS-LEGAL-012` — Implement OSS/SBOM release compliance pipeline

<a id="contributions"></a>

### Contributions

`AOS-LEGAL-001` — Establish entity, IP ownership, and confidentiality baseline; `AOS-LEGAL-003` — Approve project licenses, DCO, and contribution terms; `AOS-LEGAL-003` — Approve project licenses, DCO, and contribution terms; `AOS-COMM-003` — Publish contributor onboarding, DCO, and clean-room disclosure flow

<a id="dependency-policy"></a>

### Dependency Policy

`AOS-SEC-020` — Select and integrate cryptographic primitives and provider API; `AOS-SEC-061` — Establish secure software and model supply-chain process

<a id="licensing-baseline"></a>

### Licensing Baseline

`AOS-LEGAL-003` — Approve project licenses, DCO, and contribution terms; `AOS-LEGAL-003` — Approve project licenses, DCO, and contribution terms

<a id="provenance-record"></a>

### Provenance Record

`AOS-CAM-053` — Evaluate optional ML imaging components under bounded policy; `AOS-SEC-011` — Build continuous kernel and service fuzzing program; `AOS-LEGAL-004` — Implement source and artifact provenance controls

<a id="release-gate"></a>

### Release Gate

`AOS-PLAT-050` — Implement package installation, verification, and component registry; `AOS-P9-060` — Audit Pixel track source, license, security, and publication readiness; `AOS-LEGAL-021` — Run trademark clearance for Agent OS and naming candidates

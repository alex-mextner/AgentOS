---
id: "AOS-LEGAL-001"
title: "Legal and Compliance Framework"
status: "Counsel-review engineering framework"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Legal Programme Owner"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Legal and Compliance Framework: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Legal and Compliance Framework

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

This document owns the semantics implied by **Legal and Compliance Framework**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Classify every artifact by origin, license, confidentiality, redistribution, patent, export, privacy, and clean-room status.
2. Obtain counsel review before restricted reverse-engineering, firmware redistribution, trademark launch, cellular certification, or vendor NDA work.
3. Record jurisdiction, device ownership, contract terms, methods, people, inputs, outputs, and access controls.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Classify every artifact by origin, license, confidentiality, redistribution, patent, export, privacy, and clean-room status.
- **R02.** Obtain counsel review before restricted reverse-engineering, firmware redistribution, trademark launch, cellular certification, or vendor NDA work.
- **R03.** Record jurisdiction, device ownership, contract terms, methods, people, inputs, outputs, and access controls.
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

- Counsel-approved protocol or opinion scope.
- Artifact provenance audit.
- Release compliance checklist, SBOM and notices.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-P9-010 | Verify Pixel 9 acquisition, unlock, relock, and stock restore | P0 | M1 | EXP-030 on at least two development units with factory restore and one preserved stock oracle |
| AOS-LEGAL-000 | Legal, IP, and Compliance epic | P1 | Continuous | monthly project review and gate reconciliation |
| AOS-LEGAL-001 | Establish entity, IP ownership, and confidentiality baseline | P0 | M0 | qualified counsel review and signed/recorded instruments |
| AOS-LEGAL-006 | Review device terms, acquisition, unlock, and firmware use | P0 | M1 | counsel review of exact SKU/source/terms and engineering procedure |
| AOS-LEGAL-008 | Create privacy, telemetry, biometrics, and user-study framework | P1 | M2 | privacy/security/product review and tabletop data-subject request |
| AOS-LEGAL-009 | Establish export, sanctions, cryptography, and bounty screening | P1 | M2 | sample release and bounty tabletop across two jurisdictions |
| AOS-LEGAL-011 | Create vendor, partner, NDA, and documentation agreement playbook | P1 | M2 | apply playbook to two mock or live vendor engagements |
| AOS-LEGAL-020 | Retain software interoperability and reverse-engineering counsel | P0 | M0 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-LEGAL-025 | Build firmware and binary redistribution rights matrix | P0 | M1 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-ODM-070 | Negotiate architecture, IP, tooling, security, quality, and lifecycle terms | P1 | Continuous | legal/technical/security/finance red-team and failure/termination scenario review |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Interoperability exceptions are conditional and jurisdiction-specific.
- A technical ability to extract or observe does not establish a right to publish or redistribute.
- Public branding before clearance can create rework and liability.
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

<a id="contract-principles"></a>

### Contract Principles

`AOS-LEGAL-011` — Create vendor, partner, NDA, and documentation agreement playbook; `AOS-ODM-070` — Negotiate architecture, IP, tooling, security, quality, and lifecycle terms

<a id="device-and-protocol-work"></a>

### Device And Protocol Work

`AOS-P9-010` — Verify Pixel 9 acquisition, unlock, relock, and stock restore; `AOS-LEGAL-006` — Review device terms, acquisition, unlock, and firmware use; `AOS-LEGAL-025` — Build firmware and binary redistribution rights matrix

<a id="jurisdiction-matrix"></a>

### Jurisdiction Matrix

`AOS-LEGAL-009` — Establish export, sanctions, cryptography, and bounty screening

<a id="legal-workstreams"></a>

### Legal Workstreams

`AOS-LEGAL-000` — Legal, IP, and Compliance epic; `AOS-LEGAL-001` — Establish entity, IP ownership, and confidentiality baseline; `AOS-LEGAL-020` — Retain software interoperability and reverse-engineering counsel

<a id="privacy-and-product-claims"></a>

### Privacy And Product Claims

`AOS-LEGAL-008` — Create privacy, telemetry, biometrics, and user-study framework

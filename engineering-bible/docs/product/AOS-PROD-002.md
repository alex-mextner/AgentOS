---
id: "AOS-PROD-002"
title: "Global History and Semantic Journaling"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Product Architecture"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Global History and Semantic Journaling: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Global History and Semantic Journaling

> This specification defines a user-facing capability in terms of entities, actions, history, consent, recovery, accessibility, and provider contracts.

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

**Area:** Product System.

This specification defines a user-facing capability in terms of entities, actions, history, consent, recovery, accessibility, and provider contracts.

This document owns the semantics implied by **Global History and Semantic Journaling**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Separate immutable semantic events, materialized state, snapshots, mergeable documents, transactional state machines, and ephemeral caches.
2. Every entity and relationship records provenance, authority, schema, retention, and synchronization policy.
3. CRDTs are selected per data type, not applied universally.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Separate immutable semantic events, materialized state, snapshots, mergeable documents, transactional state machines, and ephemeral caches.
- **R02.** Every entity and relationship records provenance, authority, schema, retention, and synchronization policy.
- **R03.** CRDTs are selected per data type, not applied universally.
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

- Crash/replay and migration tests.
- Secret-exclusion and retention red-team.
- Offline concurrent-edit experiments on selected schemas.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-PROD-012 | Implement action executor, receipts, and compensation | P0 | M4 | duplicate, timeout, crash, cancellation, partial external effect, malicious result and compensation tests |
| AOS-PROD-020 | Implement append-only semantic event log | P0 | M4 | tamper, ordering, crash, schema evolution, deletion/redaction and quota tests |
| AOS-PROD-021 | Implement materialized views, snapshots, and deterministic replay | P0 | M4 | full rebuild, snapshot+tail, reducer upgrade, corrupt event and external-effect non-replay tests |
| AOS-PROD-040 | Prove semantic journal excludes secure/raw sensitive input | P0 | M4 | EXP-060 using secure fields, clipboard, voice/handwriting, crash logs and malicious providers |
| AOS-PROD-041 | Implement history timeline, search, export, deletion, and explanations | P1 | M4 | accessibility, protected payload, remote-vs-local deletion, large history and provider removal tests |
| AOS-SEC-050 | Implement data classification and privacy policy engine | P0 | M4 | cross-provider/action/journal/sync/backup/diagnostic flows and malicious relabel/declassification tests |
| AOS-LEGAL-008 | Create privacy, telemetry, biometrics, and user-study framework | P1 | M2 | privacy/security/product review and tabletop data-subject request |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Raw input logging captures secrets.
- Global history can become a surveillance database.
- Conflict-free merging cannot preserve transactional invariants automatically.
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

<a id="capture-boundary"></a>

### Capture Boundary

`AOS-PROD-040` — Prove semantic journal excludes secure/raw sensitive input

<a id="event-envelope"></a>

### Event Envelope

`AOS-PROD-020` — Implement append-only semantic event log

<a id="privacy-controls"></a>

### Privacy Controls

`AOS-PROD-041` — Implement history timeline, search, export, deletion, and explanations; `AOS-PROD-041` — Implement history timeline, search, export, deletion, and explanations; `AOS-SEC-050` — Implement data classification and privacy policy engine; `AOS-LEGAL-008` — Create privacy, telemetry, biometrics, and user-study framework

<a id="replay-and-undo"></a>

### Replay And Undo

`AOS-PROD-012` — Implement action executor, receipts, and compensation; `AOS-PROD-021` — Implement materialized views, snapshots, and deterministic replay

<a id="timeline-and-search"></a>

### Timeline And Search

`AOS-PROD-041` — Implement history timeline, search, export, deletion, and explanations; `AOS-PROD-041` — Implement history timeline, search, export, deletion, and explanations

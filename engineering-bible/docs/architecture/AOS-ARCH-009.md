---
id: "AOS-ARCH-009"
title: "Storage, Entity Graph, History, and Sync"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Storage, Entity Graph, History, and Sync: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Storage, Entity Graph, History, and Sync

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

This document owns the semantics implied by **Storage, Entity Graph, History, and Sync**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
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
| AOS-PLAT-032 | Implement durable object/filesystem service v0 | P0 | M4 | crash/power-cut model, corruption, rollback, quota, concurrent transactions and migration tests |
| AOS-PROD-001 | Define entity and relationship schema v0 | P0 | M2 | schema review using person, document, activity, device, place, task, media and provider examples |
| AOS-PROD-002 | Implement provenance and entity-resolution model | P0 | M3 | duplicate/conflicting contacts, imported documents, provider deletion and malicious assertion scenarios |
| AOS-PROD-003 | Implement entity graph store and query service | P0 | M4 | authorization, schema migration, corruption/recovery, query bounds and performance tests |
| AOS-PROD-020 | Implement append-only semantic event log | P0 | M4 | tamper, ordering, crash, schema evolution, deletion/redaction and quota tests |
| AOS-PROD-021 | Implement materialized views, snapshots, and deterministic replay | P0 | M4 | full rebuild, snapshot+tail, reducer upgrade, corrupt event and external-effect non-replay tests |
| AOS-PROD-030 | Assign consistency model to each data family | P0 | M4 | EXP-061 with concurrent offline edits, permissions, payments/actions, deletion and provider-authoritative data |
| AOS-PROD-031 | Implement encrypted peer/cloud sync v0 | P1 | M8 | partition/reorder/duplicate/corrupt/revoked-device/quota/key-rotation and metadata-privacy tests |
| AOS-PROD-061 | Implement encrypted backup bundle and verified restore | P0 | M8 | corrupt/truncate/wrong key/unknown schema/dedup/privacy/large data and scheduled drill tests |
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

<a id="backup-classes"></a>

### Backup Classes

`AOS-PROD-061` — Implement encrypted backup bundle and verified restore

<a id="consistency-models"></a>

### Consistency Models

`AOS-PROD-030` — Assign consistency model to each data family

<a id="entity-model"></a>

### Entity Model

`AOS-PROD-001` — Define entity and relationship schema v0; `AOS-PROD-003` — Implement entity graph store and query service; `AOS-PROD-003` — Implement entity graph store and query service

<a id="event-log"></a>

### Event Log

`AOS-PROD-020` — Implement append-only semantic event log

<a id="materialized-state"></a>

### Materialized State

`AOS-PROD-021` — Implement materialized views, snapshots, and deterministic replay

<a id="provenance"></a>

### Provenance

`AOS-PROD-002` — Implement provenance and entity-resolution model

<a id="storage-engine"></a>

### Storage Engine

`AOS-PLAT-032` — Implement durable object/filesystem service v0; `AOS-PROD-003` — Implement entity graph store and query service; `AOS-PROD-003` — Implement entity graph store and query service

<a id="sync-model"></a>

### Sync Model

`AOS-PROD-031` — Implement encrypted peer/cloud sync v0

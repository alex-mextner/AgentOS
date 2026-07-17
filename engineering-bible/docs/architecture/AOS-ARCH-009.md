---
id: "AOS-ARCH-009"
title: "Storage, Entity Graph, History, Sync, and Bundle State"
status: "Normative foundation"
version: "1.1.0"
baseline_date: "2026-07-16"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Durable entities, semantic history, CRDT and transactional state, micro-app instances, encrypted sync, and delay-tolerant Agent Mesh bundle state."
---
# Storage, Entity Graph, History, Sync, and Bundle State

## Purpose and scope

This document defines how Agent OS stores durable entities, relationships, micro-app instances, semantic events, materialized views, snapshots, encrypted sync state and delay-tolerant delivery bundles.

The storage model is independent of application ownership and network availability. Local state remains valid when providers, cloud services, peers or radios are absent.

## Normative position

1. Separate immutable semantic events, materialized state, snapshots, mergeable documents, transactional state machines, encrypted delivery bundles and ephemeral caches.
2. Every entity and relationship records schema, provenance, authority, retention and synchronization policy.
3. CRDTs are selected per data family; transactional or externally authoritative state is not forced into conflict-free merging.
4. A micro-app instance is durable state attached to entities, package version, provider bindings, capabilities and surface placements — not private widget storage.
5. Agent Mesh bundles have stable identity, content hash, sender/recipient identity, expiry, custody, retry, route policy and delivery receipts.
6. Pending, committed, relay-custody, delivered, expired, rejected and compensated states remain semantically distinct.

## Data families

### Entities and relationships

People, projects, documents, tasks, events, places, messages, devices, credentials, payments, micro-apps and agent plans use typed schemas and stable IDs. Providers may contribute assertions or views but do not become the sole authority for the entity.

### Semantic events

Effectful changes append an event with actor, authority, inputs, destination, result, time and provenance. External effects store receipts rather than pretending they can be replayed as ordinary reducers.

### Materialized views and snapshots

Views are rebuildable projections over canonical entities and events. Snapshots accelerate recovery but cannot erase required provenance or history semantics.

### Micro-app instance state

A `MicroAppInstance` binds:

- immutable package hash and version;
- entity/project scope;
- provider substitutions and schema versions;
- authority grants and expiry;
- durable local or CRDT state;
- surface placements;
- update, migration and rollback history.

Secrets are capability references, not manifest or state values. Removing a provider must leave user-owned state readable and exportable.

### Agent Mesh bundle store

The bundle store persists encrypted `MeshEnvelope` objects independently of UI or radio processes. It supports:

- deduplication by stable ID and content hash;
- expiry and deletion policy;
- custody acknowledgements;
- bounded retry and encounter scheduling;
- route and transport history;
- relay quotas and storage pressure handling;
- restart, suspend and shutdown recovery;
- compact CRDT/entity operations where their schema explicitly permits it.

A relay stores opaque ciphertext and minimum routing metadata. Relay custody is not recipient delivery.

## Synchronization model

The system may synchronize through direct local links, cloud providers, Agent Mesh transports or imported/exported bundles. Every path uses the same object identity, schema and authorization semantics.

Large objects may be announced by ID, version, size and hash over a constrained path, then transferred through Wi-Fi or another high-throughput provider at a later encounter. The constrained transport never needs to embed the entire object.

Provider selection and route changes are visible. Silent fallback to a broader destination, weaker encryption or lossy merge is forbidden.

## Consistency classes

Each schema declares one of:

- immutable/content-addressed;
- append-only semantic events;
- CRDT mergeable;
- single-authority with cached replicas;
- transactional multi-object state;
- external-effect receipt;
- ephemeral/reconstructable;
- encrypted delay-tolerant bundle.

The class determines merge, deletion, retention, backup, replay and sync behavior.

## Failure and recovery

The system must expose typed states for stale data, missing provider, partial replica, unresolved conflict, corrupted snapshot, exhausted quota, delayed route, relay custody, expired bundle, revoked identity and failed migration.

Crash or power loss must not duplicate an external effect, lose an accepted durable job, convert a pending action into delivered state or combine bytes from incompatible versions.

## Security and privacy

- encryption keys are separated by data class and destination;
- metadata is minimized and retention-bound;
- secure/raw input is excluded from ordinary semantic history;
- micro-app private bindings are not included in shared packages;
- relay nodes cannot inspect payload content;
- revoked identities and devices lose future sync and bundle authority;
- export and deletion produce verifiable scope and result records.

## Implementation obligations

| Task | Obligation | Gate | Verification |
| --- | --- | --- | --- |
| AOS-PLAT-032 | Durable object/filesystem service | M4 | power-cut, corruption, quota and migration tests |
| AOS-PROD-001 | Entity and relationship schemas | M2 | cross-domain schema review |
| AOS-PROD-002 | Provenance and entity resolution | M3 | conflicting/imported/provider-deleted assertions |
| AOS-PROD-003 | Entity graph store and query service | M4 | authorization, bounds and recovery tests |
| AOS-PROD-020 | Append-only semantic event log | M4 | tamper, ordering, crash and redaction tests |
| AOS-PROD-021 | Materialized views and deterministic replay | M4 | full rebuild and reducer migration |
| AOS-PROD-030 | Consistency model per data family | M4 | concurrent offline and transactional cases |
| AOS-PROD-031 | Encrypted peer/cloud sync | M8 | partition, reorder, duplicate, revocation and metadata tests |
| AOS-MESH-003 | Encrypted bundle store, expiry and deduplication | M4 | crash, power-loss, replay and quota evidence |
| AOS-MESH-007 | Custody, routing and duplicate suppression | M5 | malicious relay, loop and flood tests |
| AOS-MICROAPP-004 | Provider binding and durable instance state | M4 | provider loss, stale state and substitution tests |
| AOS-MICROAPP-008 | Versioning, sharing and rollback | M5 | migration, revocation and private-binding exclusion |

## Acceptance evidence

- crash/replay, corruption and migration campaigns;
- concurrent offline edits over selected CRDT schemas;
- external-effect non-replay tests;
- bundle encounter simulations with duplicate, delay, expiry and malicious relays;
- provider loss and micro-app rollback tests;
- secret exclusion, metadata retention and deletion review;
- measured storage, query, sync, copy-count and recovery performance.

## Related documents

- [Product Vision](../vision/AOS-VSN-001.md)
- [Agent Runtime and Action Safety](AOS-ARCH-010.md)
- [Agent Mesh](ARCH-024-agent-mesh-connectivity.md)
- [Micro-App Runtime](ARCH-026-micro-app-runtime.md)
- [Text-to-Micro-App Builder](../product/PROD-018-text-to-micro-app-builder.md)
- [Execution Plan](../planning/PLAN-019-mesh-and-microapps.md)

<a id="backup-classes"></a>
## Backup classes anchor

Backup scope and restore behavior follow the declared data family and authority model.

<a id="consistency-models"></a>
## Consistency models anchor

Every schema declares its merge, transaction, authority and conflict behavior.

<a id="entity-model"></a>
## Entity model anchor

Entities and typed relationships are the canonical product substrate.

<a id="event-log"></a>
## Event log anchor

Semantic events and external-effect receipts remain distinct and auditable.

<a id="materialized-state"></a>
## Materialized state anchor

Materialized views are rebuildable from canonical state and events.

<a id="provenance"></a>
## Provenance anchor

Every imported, provider-supplied, generated or agent-created assertion carries source and authority.

<a id="storage-engine"></a>
## Storage engine anchor

The storage service enforces durability, isolation, quotas and recovery across all declared data families.

<a id="sync-model"></a>
## Sync model anchor

Direct, cloud, Agent Mesh and offline bundle exchange share one identity and schema model.

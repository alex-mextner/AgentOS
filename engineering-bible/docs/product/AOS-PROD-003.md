---
id: "AOS-PROD-003"
title: "Actions, Integrations, Widgets, and Micro-Apps"
status: "Normative foundation"
version: "1.1.0"
baseline_date: "2026-07-16"
owners: "Product Architecture"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Typed actions, provider integrations, declarative surfaces, and cross-surface micro-apps for the APP-LAST product model."
---
# Actions, Integrations, Widgets, and Micro-Apps

## Purpose

This specification defines how Agent OS exposes data, actions and interactive surfaces without making a monolithic application the unit of distribution or authority.

A **widget** is one possible rendering surface. A **micro-app** is the durable, versioned composition of data queries, typed actions, state, layout, triggers and policy behind that rendering. The same instance may appear in an AI response, document, project, notification, home/lock surface, wearable, vehicle, command result or focused mode.

## Normative position

1. Visible objects are stable entities with provenance, schemas, authority, actions and semantic history.
2. Providers publish typed data and actions; they do not require users to enter a private app UI for essential operations.
3. Micro-apps compose declared providers, trusted components and action contracts rather than arbitrary code or copied app state.
4. Natural-language, Shortcut-style block and declarative-source editors are equivalent views of one manifest.
5. Every installation or update exposes provider substitutions, data-flow changes and capability differences before activation.
6. AI-generated micro-apps are untrusted proposals until schema validation, static policy checks, preview and authority review succeed.

## Object model

- `DataProvider` exposes typed read/query contracts, provenance, freshness and offline behavior.
- `ActionProvider` exposes effect taxonomy, confirmation, idempotency, cancellation, receipt and compensation semantics.
- `ComponentProvider` exposes reviewed declarative UI components and accessibility behavior.
- `MicroAppPackage` contains immutable manifest, signer, dependencies, fixtures, migrations and conformance metadata.
- `MicroAppInstance` binds a package to entities, grants, durable state and surface placements.
- `SurfaceContract` describes size, modality, privacy, lifecycle, input and output constraints.

## Builder and runtime

A user may:

- describe the desired outcome in text;
- assemble inputs, queries, transforms, views, triggers and actions visually;
- edit the declarative manifest directly;
- accept or modify an agent proposal;
- preview live or fixture-backed output before installation.

The system resolves providers, shows the authority diff, obtains narrow grants and installs a content-addressed version. External effects always use typed actions and receipts.

## Surface classes

Standard surface contracts include:

- AI/chat interactive card;
- live document/project block;
- home/lock/ambient widget;
- notification and action row;
- table, timeline, map and graph embedding;
- watch, e-ink, vehicle and external-display views;
- command palette, CLI and TUI projection;
- focused full-screen instant mode.

A surface may omit detail but cannot invent different semantics. The same instance retains identity, state, provenance and history across surfaces.

## Provider and transport integration

Providers may route data or actions through local services, remote APIs, Agent Mesh or user-selected gateways. A micro-app states the outcome and policy, not a proprietary route. For example, a person card requests `message.send(recipient, content, deadline, privacy)`; provider policy may select a direct local path, a messaging service or delayed Agent Mesh delivery.

## Required failure behavior

Micro-apps must render explicit states for loading, stale data, partial data, provider unavailable, substituted provider, authority denied, offline, delayed, action pending, action failed, delivered, expired and rollback unavailable.

They must not:

- silently broaden authority;
- hide provider identity or data destination;
- keep the system awake without declared budget;
- download undeclared executable code;
- access arbitrary sockets, filesystem paths or processes;
- claim an external effect completed before receipt evidence exists;
- disappear when a provider fails if a readable stale or export state remains possible.

## Representative cases

- UV index with local skin profile, hourly chart, threshold notification and sunscreen/calendar actions.
- Project overnight brief combining tasks, commits, messages and blocked decisions.
- Medication and refill tracker with travel-time-zone handling.
- CI/release card with evidence, rerun, approval and rollback actions.
- Person communication card that routes by recipient, urgency, privacy and availability.
- Agent Mesh inbox with pending, relay-custody, delivered and expired states.
- Travel disruption card with evidence, alternatives, refund and share actions.
- Energy, camera, pet-care, procurement and meeting-follow-through micro-apps.

## Implementation obligations

| Task | Obligation | Gate | Verification |
| --- | --- | --- | --- |
| AOS-PROD-010 | Portable action schema and effect taxonomy | M2 | local, system, external, delayed and irreversible action corpus |
| AOS-PROD-011 | Provider registry and interoperability | M4 | malicious, revoked, stale, substituted and unavailable providers |
| AOS-MICROAPP-001 | Manifest, component and `SurfaceContract` schemas | M3 | valid/invalid schema corpus and compatibility tests |
| AOS-MICROAPP-002 | Text/block/source round-trip | M3 | semantic round-trip with no authority drift |
| AOS-MICROAPP-003 | Reference multi-surface renderer | M4 | visual and accessibility fixtures across standard surfaces |
| AOS-MICROAPP-005 | Preview and authority-diff flow | M4 | capability-escalation and destination-disclosure tests |
| AOS-MICROAPP-006 | Sandbox quotas and receipts | M4 | CPU, memory, network, wake and action-rate denial tests |
| AOS-MICROAPP-008 | Signing, sharing, update and rollback | M5 | provenance, migration, revocation and recipient authority diff |
| AOS-MICROAPP-009 | Twenty conformance micro-apps | M5 | reproducible source, fixtures and failure cases |
| AOS-SEC-060 | Package signing, SBOM and revocation | M4 | tamper, dependency substitution and compromised-key tests |

## Evidence and acceptance

Acceptance requires:

- round-trip equivalence among text, block and source forms;
- at least five conformant surface classes for one instance;
- accessibility tree and multimodal navigation review;
- provider loss, offline, stale, update, rollback and sharing tests;
- resource-budget and malicious-manifest tests;
- inspectable receipts for all effectful actions;
- independent reproduction of the reference case library.

## Related documents

- [Product Vision](../vision/AOS-VSN-001.md)
- [Micro-App Builder](PROD-018-text-to-micro-app-builder.md)
- [Micro-App Runtime](../architecture/ARCH-026-micro-app-runtime.md)
- [Agent Runtime and Action Safety](../architecture/AOS-ARCH-010.md)
- [Agent Mesh](../architecture/ARCH-024-agent-mesh-connectivity.md)
- [Execution Plan](../planning/PLAN-019-mesh-and-microapps.md)

<a id="action-schema"></a>
## Action schema anchor

Typed action semantics are owned jointly by this document and `AOS-PROD-010`.

<a id="provider-selection"></a>
## Provider selection anchor

Provider routing must preserve user intent, authority, privacy, destination, cost and failure semantics.

<a id="widgets"></a>
## Widgets and micro-apps anchor

Widgets are surface projections of micro-app instances; they are not the complete product model.

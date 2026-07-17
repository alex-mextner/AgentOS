---
id: "AOS-VSN-001"
title: "Product Vision"
status: "Normative foundation"
version: "1.1.0"
baseline_date: "2026-07-16"
owners: "Product and Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "APP-LAST product thesis: durable entities, shared actions, semantic history, generated micro-apps, local authority, Agent Mesh peer connectivity, and inspectable agents."
---
# Product Vision

## Product thesis

Agent OS is **APP-LAST**: people work with durable entities and outcomes rather than navigating application silos. Documents, tasks, projects, people, places, events, messages, devices, payments, credentials, micro-apps and agent plans have stable identity, typed relationships, provenance, authority, actions and history.

Applications are replaceable providers, editors, transports and views. They do not privately own the user’s conceptual world.

## The system model

### Durable entities

A project remains one object when rendered as a document, board, timeline, map, conversation, dashboard, micro-app or agent context. Transclusion preserves origin and authority instead of copying opaque app state.

### Shared typed actions

Meaningful operations use one typed contract across graphical controls, command line, scripts, automation, micro-apps and agents. Authority, confirmation, destination, cost, result and undo or compensation rules remain the same regardless of caller.

### Semantic history

The system records meaningful state transitions, sources, external effects and execution receipts. History supports search, explanation, replay, recovery and safe undo. Irreversible effects remain visibly irreversible rather than being disguised as ordinary state changes.

### Local authority

User-controlled devices hold authoritative personal state and policy. Remote services, AI models, gateways and integrations receive bounded, inspectable inputs and capabilities. Offline operation is a correctness requirement; cloud and remote compute are optional accelerators or transports.

### Text-to-micro-app composition

A user may describe a missing interface in natural language, assemble it through Shortcut-style blocks or edit declarative source. Agent OS produces an inspectable micro-app manifest over trusted components, providers and typed actions.

The same micro-app instance may render inside an AI response, document, project, notification, lock screen, widget, watch, vehicle, command result or focused full-screen mode. It is not limited to a home-screen card and does not create disconnected copies of state.

### Agent Mesh

Peer-to-peer and off-grid delivery are system capabilities. A person, group, project or device is addressed directly; the system selects local IP, Wi-Fi Direct, Bluetooth, LoRa, a gateway, the Internet or delayed store-and-forward according to privacy, region, deadline, energy, trust, cost and payload size.

LoRa is one constrained transport beneath a stable encrypted envelope and receipt model. It is not a separate messenger or identity silo.

### Inspectable agents

Agents create explicit plans, request scoped capabilities, show data and provider use, support preview/shadow/dry-run modes, respect budgets and leave receipts. Agent-generated micro-apps and route choices are untrusted proposals until validation and authority review succeed.

## Product invariants

1. **No private app truth.** A provider cannot make essential entity or action semantics available only inside its own UI.
2. **No hidden authority.** If a micro-app, agent or transport lacks a capability, it cannot perform the operation.
3. **No silent transport or provider downgrade.** Missing, stale, delayed, substituted and denied states are explicit.
4. **No interface monopoly.** Existing data and actions may be recomposed into user-controlled views under declared policy.
5. **No false completion.** Pending, relay custody, accepted, committed, delivered, expired and compensated are different states.
6. **No network dependency for correctness.** Core entity, action, history and micro-app semantics remain valid offline.
7. **No untraceable effect.** Effectful operations produce receipts and an undo or compensation path where possible.
8. **No platform leakage into portable semantics.** Hardware, radio and legacy platform details terminate in providers and adapters.

## Representative experience

A user asks:

> Show today’s UV index, account for my skin profile, warn me before risk becomes high, and place sunscreen and outdoor-time actions beside it.

Agent OS:

1. finds a weather provider and local health profile;
2. keeps the health profile local;
3. proposes a micro-app manifest and surfaces;
4. previews requested reads and reminder/calendar actions;
5. asks for any missing authority;
6. installs one versioned instance;
7. renders it as an AI card, document block, lock-screen metric or full focused view;
8. records every external effect in semantic history.

The same product model lets a project update or emergency message travel through Agent Mesh without the sender selecting a messaging brand or radio.

## Architecture direction

The product layer depends on owned entity, action, history, micro-app, agent and delivery contracts. Lower platform and hardware services are isolated behind versioned interfaces and conformance tests. Performance-sensitive data paths use shared buffers and handles rather than generic payload copying.

## Evidence and release gates

A capability is described as implemented only when:

- its specification and stable IDs exist;
- linked tasks, risks, sources, claims and experiments are reconciled;
- conformance and failure-path tests pass;
- authority, privacy, accessibility, recovery and performance evidence exists;
- target hardware, provider and version are identified;
- public wording distinguishes current implementation from target design.

## Related documents

- [Storage, entity graph, history and sync](../architecture/AOS-ARCH-009.md)
- [Agent runtime and action safety](../architecture/AOS-ARCH-010.md)
- [Agent Mesh](../architecture/ARCH-024-agent-mesh-connectivity.md)
- [Micro-App Runtime](../architecture/ARCH-026-micro-app-runtime.md)
- [Actions, Integrations, and Widgets](../product/AOS-PROD-003.md)
- [Text-to-Micro-App Builder](../product/PROD-018-text-to-micro-app-builder.md)
- [Execution plan](../planning/PLAN-019-mesh-and-microapps.md)

<a id="product-thesis"></a>
## Stable product-thesis anchor

This section and the invariants above are the normative product thesis referenced throughout the Engineering Bible.

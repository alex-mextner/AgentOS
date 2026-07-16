---
id: "AOS-PLAN-019"
title: "Agent Mesh and Micro-App Execution Plan"
status: "Normative planning baseline"
version: "0.1.0"
baseline_date: "2026-07-16"
owners: "Programme, Connectivity, Product Runtime, Security, Hardware, and Legal"
summary: "Task, dependency, evidence, and gate plan for Agent Mesh and the text-to-micro-app platform."
---
# Agent Mesh and Micro-App Execution Plan

## Programme structure

The two programmes share identity, typed actions, semantic history, package provenance, background execution, accessibility and provider contracts. They are developed as separate vertical slices with shared conformance infrastructure.

## Agent Mesh work items

| ID | Work item | Depends on | Exit evidence |
| --- | --- | --- | --- |
| AOS-MESH-001 | Define `MeshEnvelope`, receipt and delivery-policy schemas | AOS-ARCH-024 | IDL/spec fixtures and invalid corpus |
| AOS-MESH-002 | Define asynchronous identity, group keys and invitation flow | MESH-001 | threat review, key-loss and revocation tests |
| AOS-MESH-003 | Implement encrypted bundle store, expiry and deduplication | MESH-001, MESH-002 | crash/power-loss/replay evidence |
| AOS-MESH-004 | Implement transport-neutral simulator and encounter replay | MESH-001 | deterministic topology/partition test suite |
| AOS-MESH-005 | Implement Meshtastic-compatible BLE/USB provider | MESH-001, MESH-004 | field-compatible short-message evidence |
| AOS-MESH-006 | Prototype SX1262 accessory provider and low-power handoff | MESH-003, AOS-HW-021 | current draw, wake, recovery and provenance dossier |
| AOS-MESH-007 | Implement routing, custody, quotas and duplicate suppression | MESH-003, MESH-004 | malicious relay/flood/loop tests |
| AOS-MESH-008 | Implement emergency profile and abuse controls | MESH-002, MESH-007, AOS-LEGAL-015 | controlled drills and wording review |
| AOS-MESH-009 | Run urban, indoor, rural and mobile field campaign | MESH-005, MESH-006, MESH-007 | reproducible range/power/delivery dataset |
| AOS-MESH-010 | Decide native constrained-link protocol and integrated-device gate | MESH-009, AOS-RES-017 | decision record with retain/replace evidence |

## Micro-app work items

| ID | Work item | Depends on | Exit evidence |
| --- | --- | --- | --- |
| AOS-MICROAPP-001 | Define manifest, component and `SurfaceContract` schemas | AOS-ARCH-026 | schema, examples and invalid corpus |
| AOS-MICROAPP-002 | Define text, block and declarative-source round-trip model | MICROAPP-001 | semantic round-trip suite |
| AOS-MICROAPP-003 | Build reference renderer for compact/card/expanded/ambient | MICROAPP-001 | visual and accessibility fixtures |
| AOS-MICROAPP-004 | Build provider binding, substitution and stale-state runtime | MICROAPP-001 | offline/provider-loss/mismatch tests |
| AOS-MICROAPP-005 | Implement authority diff, preview and confirmation UI | MICROAPP-001, AOS-PROD-010 | adversarial capability-escalation tests |
| AOS-MICROAPP-006 | Implement sandbox quotas and execution receipts | MICROAPP-003, MICROAPP-004 | CPU/memory/network/wake denial evidence |
| AOS-MICROAPP-007 | Implement text-to-micro-app planner and explanation | MICROAPP-002, MICROAPP-005 | prompt-injection and unsafe-plan tests |
| AOS-MICROAPP-008 | Implement sharing, signing, versioning and rollback | MICROAPP-004, AOS-SEC-060 | provenance, migration and revocation tests |
| AOS-MICROAPP-009 | Produce twenty representative micro-app conformance examples | MICROAPP-003 through 008 | reproducible case library |
| AOS-MICROAPP-010 | Run cross-surface usability/accessibility evaluation | MICROAPP-009 | independent review across five surfaces |

## First vertical slices

### Mesh slice

Two phones exchange a signed short message and task update through local IP, a Meshtastic-compatible node, and simulated delayed relay. The same message entity shows route, custody, expiry and receipts.

### Micro-app slice

The UV micro-app is generated from text, edited as blocks and YAML, previewed, installed, and rendered as an AI response card, document block, notification and lock-screen metric. It works offline with stale weather data and cannot expose the local skin profile to the network provider.

## Shared gates

1. Stable IDs and schemas exist before implementation.
2. No provider receives ambient network, filesystem, identity or action authority.
3. Background work survives restart and obeys power budgets.
4. External effects produce receipts and compensation/undo where possible.
5. All public product claims point to reproducible evidence.
6. Radio and data-market compliance is approved before field/public release.

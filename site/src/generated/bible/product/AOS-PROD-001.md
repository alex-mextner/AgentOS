---
id: "AOS-PROD-001"
title: "Entity-First Shell and Surfaces"
status: "Normative foundation"
version: "1.1.0"
baseline_date: "2026-07-15"
owners: "Product Architecture"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Entity-first shell, project context, named workspaces, surfaces, actions, history, consent, recovery, and provider contracts."
---

# Entity-First Shell and Surfaces

> This specification defines a user-facing capability in terms of entities, projects, actions, history, consent, recovery, accessibility, and provider contracts.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Normative Position](#normative-position)
- [Why App-First Fails for Parallel Work](#app-first-parallel-work)
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

This specification defines a user-facing capability in terms of entities, projects, actions, history, consent, recovery, accessibility, and provider contracts.

This document owns the semantics implied by **Entity-First Shell and Surfaces**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.

<a id="normative-position"></a>

## Normative Position

1. Model visible objects as stable entities with typed relationships, provenance, authority, schemas, views, actions, and history.
2. Providers publish typed actions and declarative surfaces; users and agents receive the same semantic operations with different authority and confirmation policy.
3. Composition and transclusion preserve origin and permission rather than copying opaque app state.
4. Projects, folders, workspaces, and named activity contexts are first-class system objects rather than optional organizational features hidden inside individual applications.
5. A user must be able to keep multiple independent contexts of the same provider open, name them, color-code them, pin them, and distinguish them at a glance.

<a id="app-first-parallel-work"></a>

## Why App-First Fails for Parallel Work

Conventional mobile systems assume that the application is the primary unit of navigation. That assumption breaks down as soon as a user performs several pieces of work in parallel.

Most phone applications, and many desktop applications, cannot be launched as several independently identifiable instances. Where tabs, profiles, folders, spaces, projects, or windows exist, they are implemented inconsistently and remain subordinate to the application. This does not repair the app-first model; it exposes its contradiction. The user's durable concern is the project or activity, while the operating system keeps presenting provider containers.

AI chat products illustrate the problem clearly. A service may offer folders or project groupings, yet a user handling several unrelated jobs still opens one application and repeatedly switches between internal conversations or folders. The same job then requires further switching into Files, Photos, a browser, a messenger, and other applications. The project is fragmented across several unrelated navigation hierarchies even though the user experiences it as one coherent activity.

The same fragmentation appears in common media and communication tools:

- photo applications often default to a single chronological photostream that becomes an undifferentiated storage heap unless the user continuously curates albums;
- browsers add tab groups, windows, profiles, and workspaces to compensate for the absence of a system-level project context;
- messengers add folders, topics, spaces, accounts, and pinned groups for the same reason;
- file managers expose folders, but those folders do not automatically bind the related conversations, browser state, media selections, tasks, notes, and running actions.

Even where an application supports several windows or instances, those instances are commonly anonymous and visually interchangeable. The user cannot reliably assign a durable name, color, icon, project identity, retention policy, or cross-application membership to each one. A task switcher full of identical application thumbnails therefore encodes implementation ownership rather than human meaning.

Agent OS treats this as a system-design defect, not an application-feature gap. A project context may contain documents, chats, browser sessions, media selections, files, people, tasks, actions, and provider surfaces from many sources. Opening the project restores that complete working set. Multiple contexts backed by the same provider remain independently named and visually identifiable. Applications and providers supply capabilities; they do not own the top-level information architecture.

<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).

The shell restores activity by project identity, not merely by reopening the last application processes. A context manifest records its name, color, icon, member entities, provider surfaces, open views, navigation state, queued actions, and restoration policy. One provider may appear simultaneously in many projects without forcing those projects into a shared internal provider hierarchy.

<a id="requirements"></a>

## Requirements

- **R01.** Model visible objects as stable entities with typed relationships, provenance, authority, schemas, views, actions, and history.
- **R02.** Providers publish typed actions and declarative surfaces; users and agents receive the same semantic operations with different authority and confirmation policy.
- **R03.** Composition and transclusion preserve origin and permission rather than copying opaque app state.
- **R04.** Specify normal, partial, denied, timeout, cancellation, restart, upgrade, and permanent-failure behavior.
- **R05.** Expose structured diagnostics without leaking secrets or vendor-specific implementation details.
- **R06.** Link material unknowns to a claim and, when testable, an experiment with an owner and gate.
- **R07.** Update affected documentation and task data when evidence changes the model.
- **R08.** Provide first-class named project and activity contexts that can contain entities and surfaces from multiple providers.
- **R09.** Permit several simultaneous contexts backed by the same provider without requiring the provider to implement its own project system.
- **R10.** Allow each context to have a user-controlled name, color, icon, ordering, pin state, and restoration policy.
- **R11.** Restore a project's cross-provider working set, including views, navigation state, selected entities, and durable background actions, subject to capability and privacy policy.
- **R12.** Do not present anonymous identical application instances as the only mechanism for parallel work.
- **R13.** Preserve provider-specific folders, profiles, tab groups, and projects when useful, but expose them as subordinate or linked structures rather than the system's top-level navigation model.

<a id="failure-and-degradation"></a>

## Failure and Degradation

Degradation must be explicit rather than accidental. The system reports capability absence, reduced quality, unavailable provider, stale data, or unsafe condition through typed states. It must not silently fall back to broader authority, unrestricted legacy execution, unverified firmware, lossy data migration, or irreversible agent action.

Recovery defines what state is retained, reconstructed, re-enrolled, compensated, or intentionally discarded. Unsupported hardware or providers are rejected at binding time where possible.

If a provider cannot expose multiple simultaneous surfaces, Agent OS preserves separate project contexts and rebinds the provider serially when the user activates them. The limitation is shown as a provider constraint; contexts must not be silently merged. If restoration is partial, unavailable members remain visible with typed unavailable or stale states rather than disappearing from the project.

<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- Vertical slices across at least three domains.
- Usability and action-coverage studies.
- Migration, permission and provenance tests.
- A benchmark workflow demonstrates at least three simultaneous projects that each combine AI chat, files, photos, browser state, messages, and tasks without requiring the user to reconstruct context from application histories.
- Users can identify and switch between several same-provider contexts by project name and visual identity without opening the provider first.
- Restoration tests cover provider restart, unavailable provider, account change, stale remote state, and partial context recovery.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.

<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-PROD-000 | Product Runtime epic | P1 | Continuous | monthly project review and gate reconciliation |
| AOS-PROD-001 | Define entity and relationship schema v0 | P0 | M2 | schema review using person, document, activity, device, place, task, media and provider examples |
| AOS-PROD-002 | Implement provenance and entity-resolution model | P0 | M3 | duplicate/conflicting contacts, imported documents, provider deletion and malicious assertion scenarios |
| AOS-PROD-050 | Implement entity-first shell skeleton | P0 | M4 | QEMU and first-board workflows, keyboard/switch/screen-reader, provider failure and large graph tests |
| AOS-PROD-051 | Implement IntentBox draft and confirmation flow | P1 | M8 | ambiguous recipient/account/amount/destination and inaccessible/offline provider tests |
| AOS-PROD-053 | Implement notification, structured clipboard, and share services | P1 | M8 | sensitive clipboard, spoofing, expiry, background access, multi-format coercion and accessibility tests |
| AOS-PROD-080 | Benchmark entity-first shell against task baselines | P1 | M8 | EXP-070 with pilot then appropriately sized study and accessibility representation |
| AOS-PROD-090 | Evaluate IntentBox interpretation and confirmation safety | P0 | M8 | EXP-071 including time pressure, accessibility needs and adversarial provider labels |

<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- A universal entity model can become vague or over-normalized.
- Third-party providers may expose incomplete or misleading actions.
- Malleability can conflict with consistency, accessibility and support.
- Providers that permit only one active session may impose serial rebinding latency across project contexts.
- Excessive visual customization can reduce consistency; naming and color must remain accessible and not rely on color alone.
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

<a id="activity-and-stories"></a>

### Activity And Stories

`AOS-PROD-053` — Implement notification, structured clipboard, and share services

<a id="entity-surfaces"></a>

### Entity Surfaces

`AOS-PROD-001` — Define entity and relationship schema v0; `AOS-PROD-002` — Implement provenance and entity-resolution model; `AOS-PROD-050` — Implement entity-first shell skeleton

<a id="intent-box"></a>

### Intent Box

`AOS-PROD-051` — Implement IntentBox draft and confirmation flow; `AOS-PROD-090` — Evaluate IntentBox interpretation and confirmation safety

<a id="product-contract"></a>

### Product Contract

`AOS-PROD-000` — Product Runtime epic; `AOS-PROD-080` — Benchmark entity-first shell against task baselines

<a id="project-contexts"></a>

### Project Contexts

`AOS-PROD-050` — Implement entity-first shell skeleton; `AOS-PROD-080` — Benchmark entity-first shell against task baselines

---
id: "AOS-ARCH-026"
title: "Micro-App Runtime and Declarative Surface Contracts"
status: "Normative planning baseline"
version: "0.1.0"
baseline_date: "2026-07-16"
owners: "Runtime, Product Architecture, Security, Accessibility, and Developer Platform"
summary: "Runtime, manifest, component, action, state, sandbox, lifecycle, and multi-surface conformance model for Agent OS micro-apps."
---
# Micro-App Runtime and Declarative Surface Contracts

## Scope

The micro-app runtime executes small declarative capability compositions across Agent OS surfaces. It is not a WebView container, a second unrestricted application model, or a mechanism for agents to run arbitrary generated code.

## Runtime objects

- `MicroAppPackage`: content hash, signer, manifest, component schema, provider dependencies, test fixtures and migration rules.
- `MicroAppInstance`: bound entities, user/project scope, current version, capabilities, durable state and surface placements.
- `SurfaceContract`: size class, interaction class, available input/output modalities, privacy context and lifecycle.
- `ProviderBinding`: selected data/action provider, version constraints, provenance and substitution policy.
- `AuthorityGrant`: exact readable fields, invocable actions, destinations, budgets, expiry and confirmation requirements.
- `ExecutionReceipt`: trigger, input snapshot references, provider calls, effects, failures, resource use and compensation result.

## Execution model

1. Parse and validate the manifest without running provider code.
2. Resolve schemas and providers against the local registry.
3. Produce an authority and substitution diff.
4. Render a data-only preview using fixtures or bounded live reads.
5. Request missing grants at the narrowest field/action scope.
6. Install a content-addressed package and create an instance.
7. Execute triggers in an isolated component domain with quotas.
8. Commit durable state and external effects through typed actions and semantic-history receipts.

## Component system

The base component vocabulary includes metric, text, image, chart, table, list, form, checklist, timeline, map, media, progress, alert, action row and container primitives. Components declare:

- typed properties and data bindings;
- compact, card, expanded, ambient, voice and text fallbacks;
- keyboard, switch, touch, pointer and voice semantics;
- accessibility name, role, state and reading order;
- empty, stale, denied, loading, partial and error states;
- update cadence and animation budget;
- privacy class and screenshot/recording policy.

Custom components require a signed package, deterministic layout/input contract and independent accessibility/security review. They cannot bypass the action model.

## Multi-surface adaptation

The runtime selects a declared view by `SurfaceContract`; it does not scale a desktop rectangle blindly. An AI response card may expand inline, a lock surface may show one metric and one safe action, a watch may show glanceable state, and a full-screen mode may expose the complete workflow. All share one instance and history.

## State and data

Ephemeral UI state is disposable. Durable state is either a typed entity field, micro-app-owned local state with migration, or shared CRDT state with explicit merge semantics. Secret values are referenced by capabilities and never embedded in manifests or share bundles.

Network access is not ambient. Data arrives through declared providers. Direct sockets, arbitrary DOM access, unrestricted filesystem paths, process spawning, hidden analytics and undeclared dynamic code download are forbidden in the portable runtime.

## Agent generation boundary

An agent may generate or edit declarative manifests, fixtures and explanations. Generated output is treated as untrusted input until schema validation, static policy checks, preview and authority review pass. An agent cannot introduce a component or provider that is absent from the trusted registry without a separate installation flow.

## Resource governance

Each instance receives CPU time, memory, storage, render, sensor, network, background wake and action-rate budgets. The scheduler may suspend, simplify or move rendering to a stale snapshot. A micro-app cannot keep the system awake merely because it has a frequent trigger.

## Versioning and recovery

Packages are immutable by hash. Updates declare schema and state migrations, provider changes and capability differences. The user can inspect and roll back compatible versions. If migration fails, the old instance remains readable and exportable. Removing a provider does not erase instance data.

## Conformance

A reference suite renders every base component across all standard surfaces, checks accessibility trees, denies undeclared actions/data, fuzzes manifests and migrations, measures resource ceilings, simulates provider failure/offline/stale states, and confirms receipts and rollback.

## Related documents

- [Text-to-Micro-App Builder](../product/PROD-018-text-to-micro-app-builder.md)
- [Actions, integrations and widgets](../product/AOS-PROD-003.md)
- [IDL, API and versioning](AOS-ARCH-005.md)
- [Agent runtime and action safety](AOS-ARCH-010.md)
- [Graphics and UI runtime](AOS-ARCH-008.md)
- [Package and supply-chain security](AOS-ARCH-012.md)

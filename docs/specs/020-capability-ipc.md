# HyperOS Capability IPC Spec

## Status

Active follow-up spec for the authority and messaging model. IPC code and
service contracts must refine this spec rather than inventing ad hoc authority
paths.

## Purpose

HyperOS uses explicit capability handles for authority transfer. IPC is the
mechanism that lets privileged services cooperate without giving every component
ambient global access.

## MVP Scope

The MVP IPC model includes:

- Typed messages with a fixed envelope: sender, target endpoint, payload type,
  payload bytes or structured fields, and transferred handles.
- Capability handles with rights such as read, write, duplicate, transfer,
  signal, and map where applicable.
- Endpoint objects owned by services or tasks.
- Explicit transfer rules: handles move or duplicate only when rights permit.
- Deterministic denial behavior: bad target, missing right, revoked handle, and
  malformed message produce typed failures.

The MVP service set must use IPC for:

- Process lifecycle requests.
- App launch requests.
- Display/surface registration.
- First-shell input or command routing where needed.

## MVP Endpoint Lifecycle

Endpoints are kernel objects represented by handles. For MVP, initial authority
is bootstrapped by passing endpoint handles at process launch:

- The process lifecycle service receives the authority to create launched tasks.
- A launched app receives only the service endpoint handles granted to it.
- Display/surface registration starts from an endpoint handle granted by the app
  launch path.
- Additional endpoint discovery remains out of MVP unless the owning service
  explicitly passes a handle.

Structured payloads must use explicit Rust data contracts plus an explicit wire
encoding before the first cross-boundary message implementation lands. Native
Rust memory layout is not a wire contract. MVP cross-boundary message types in
`crates/ipc` are treated as stable once merged: breaking a message shape requires
an accompanying spec update and migration note. Until a richer IDL is chosen,
every structured message shape in code must be documented with its fields,
encoding, compatibility expectations, and denial behavior.

## Full Maximum Plan

The maximum IPC plan adds:

- Async message waits and event-driven service loops.
- Capability namespaces for launched apps.
- Protocol versioning and schema compatibility.
- Audit traces for transferred authority.
- Service discovery through a controlled namespace service.
- Resource quotas for message size, outstanding handles, and endpoint pressure.

## Security Invariants

- No service receives authority through a mutable global registry.
- A transferred handle carries only the rights granted at transfer time.
- Denial paths must be observable in tests and simulator evidence.
- IPC protocol convenience helpers must not skip kernel handle checks.

## Acceptance Evidence

This spec is satisfied for MVP when:

- At least one positive capability transfer test passes.
- At least one denied transfer/access test proves a missing or insufficient right
  stays denied.
- App launch and display registration use IPC/capability paths instead of direct
  in-process calls across ownership boundaries.

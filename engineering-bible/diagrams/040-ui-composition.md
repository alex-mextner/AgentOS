# AgentOS UI Composition Contract Spec

## Status

Active follow-up spec for the first visible user-space experience and the shared
UI contracts used by apps and display services. UI implementation must remain
small until kernel, IPC, and simulator contracts are in place.

## Purpose

The UI contract proves that AgentOS can launch, display, and route input to a
user-space experience through explicit services rather than direct simulator
shortcuts.

## MVP Scope

The MVP UI model includes:

- A surface object representing a drawable app or shell target.
- A minimal compositor service that accepts surface registration over IPC.
- App lifecycle states for created, launched, visible, hidden, and stopped.
- Input routing from the simulator to the focused surface.
- One minimal shell or app that visibly renders and responds to one input path.

The first UI does not need a full widget toolkit. A simple shell surface is
enough if it proves launch, composition, display, and input routing end to end.
The MVP may include minimal client helpers for the first shell/app, but a
complete SDK is outside MVP.

## MVP App/Surface Contract

The compositor/display service implementation belongs to `crates/services`.
Shared surface types, input event types, lifecycle event types, and first
shell/app client helpers belong to `crates/ui`.

MVP rendering should use a `DisplayBuffer` capability handle backed by a memory
object or equivalent explicit surface buffer granted to the app, then signaled to
the compositor service for presentation. The buffer abstraction is the contract;
the memory-object backing is the MVP implementation choice so future graphics
hardware or buffer queues can preserve the same grant-and-signal interaction.
Lifecycle events are delivered as IPC messages from the app lifecycle service to
the launched app. Focus is initially simulator/service-owned: the launched first
surface receives focus by default, and app-requested focus is deferred to the
full maximum plan unless admitted by a later spec.

## Full Maximum Plan

The maximum UI plan adds:

- Multi-surface composition and z-ordering.
- Window/app focus management.
- Declarative app lifecycle contracts.
- Accessibility hooks for semantic labels and input alternatives.
- Theme, density, and safe-area handling.
- A small app SDK once IPC and service boundaries are stable.

## Cross-Boundary Contract

- Apps do not draw directly into simulator internals.
- The compositor receives authority through IPC handles.
- The simulator supplies input and frame capture, but the UI layer owns surface
  data contracts while the compositor/display service owns composition
  semantics.
- Display service failures must be visible to the app lifecycle path and to
  simulator evidence.

## Acceptance Evidence

This spec is satisfied for MVP when:

- One user-space shell or app launches through the app/service path.
- The compositor displays that surface in the Pixel 9 simulator.
- At least one input event reaches the focused surface.
- A screenshot or equivalent simulator artifact proves the visible result.

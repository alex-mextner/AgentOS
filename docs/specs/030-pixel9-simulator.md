# HyperOS Pixel 9 Simulator Spec

## Status

Active follow-up spec for the simulator harness and device model. The simulator
is part of the product scope, not a disposable test helper.

## Purpose

The Pixel 9 form-factor simulator provides the observable runtime target for the
HyperOS MVP. It owns boot orchestration, display dimensions, input routing,
timing assumptions, and evidence capture.

## MVP Scope

The MVP simulator includes:

- A Pixel 9 shaped display surface with stable logical dimensions and safe-area
  metadata.
- A boot entry point that starts the kernel and core services, invokes the
  app-launch/display registration path, and observes the first UI surface.
- Basic input events for touch/click and a minimal text/key path if the first
  shell needs it.
- Frame capture or screenshot evidence for the first displayed surface.
- Structured smoke-test output for boot success, first app launch, and IPC denial
  evidence.

The MVP simulator may be host-only and deterministic. It does not need Android
emulation, GPU acceleration, cellular behavior, camera, sensors, or hardware boot
support.

Real hardware work is intentionally out of this spec. `050-real-device-operation.md`
owns the later path from simulator evidence to hardware abstraction and device
bring-up.

## Full Maximum Plan

The maximum simulator plan adds:

- Multiple device profiles with Pixel 9 as the default acceptance target.
- Deterministic frame timing plus optional real-time rendering mode.
- Input replay for regression tests.
- Screenshot and trace artifact bundles for CI and agent review.
- Simulated power, suspend/resume, rotation, and display-density behavior.
- Optional sensor and network stubs once owned by later specs.

## Evidence Contract

Simulator evidence must be understandable without reading logs line by line:

- Boot result: pass/fail plus failure phase.
- Runtime milestones: kernel start, services ready, first app launched, first
  frame displayed.
- Security evidence: denied IPC/handle operation with expected reason.
- Visual evidence: screenshot or frame artifact for the first UI surface.

## Input Event Contract

MVP input events delivered from the simulator to the OS input path must be
structured records with:

- Timestamp.
- Event type.
- Logical display coordinates for pointer/touch input, with origin at the
  top-left of the Pixel 9 logical display surface.
- Key code and modifiers for key/text input when enabled.
- Target display profile metadata when needed for safe-area or density mapping.

Physical pixels and density-scaled values are metadata, not the primary
coordinate space, so future density changes do not alter the OS input contract.

## Simulator Control And Observation API Contract

The simulator is the external driver for MVP evidence. Its public control and
observation surface must include:

- A boot command or programmatic entry point that selects the Pixel 9 profile.
- Structured boot milestones for kernel start, core services ready, first app
  launch requested, first surface registered, and first frame observed.
- Structured failure phases for boot, app launch, display registration, input
  routing, and capability denial checks.
- A frame/screenshot artifact path for visual evidence.
- A narrow observation interface for kernel/service state needed by smoke tests;
  observation must not be required for product correctness.

## Acceptance Evidence

This spec is satisfied for MVP when:

- A simulator boot command is documented.
- A smoke run records boot and first-surface milestones.
- A frame/screenshot artifact shows the first shell or app.
- The simulator can surface at least one IPC/capability denial result.

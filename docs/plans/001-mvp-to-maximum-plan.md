# HyperOS MVP To Maximum Plan

## Purpose

This plan gives a single product-level view of HyperOS from the first MVP to the
maximum intended prototype. It complements `docs/specs/000-system-overview.md`
and the subsystem specs in `docs/specs/`.

## MVP Product Definition

The MVP is a simulator-visible, single-machine mobile OS prototype. It is
complete only when a Pixel 9 form-factor simulator can boot the system, launch a
minimal user-space shell or app, display it, route at least one input event, and
prove one capability/IPC denial path.

MVP deliverables:

- Rust workspace and documented cheap-check policy.
- Kernel primitives for tasks, memory objects, scheduling assumptions, and
  handle tables.
- Capability IPC with typed messages, explicit handle transfer, rights checks,
  and deterministic denial behavior.
- Core user-space services for process lifecycle, app launch, and display
  surface registration.
- Pixel 9 simulator boot path with structured evidence and screenshot/frame
  capture.
- One minimal visible shell or app that proves launch, display, and input
  routing end to end.
- Minimal client helpers for that first shell/app when needed to exercise the UI
  and IPC contracts.

MVP non-goals:

- Hardware boot.
- Android compatibility.
- Cellular, camera, sensor, or package-manager support.
- Production security certification.
- A complete app SDK or widget toolkit.

## Maximum Prototype Definition

The maximum plan keeps the same architecture but expands the prototype into a
richer mobile OS research platform. The maximum prototype is not a promise of
production readiness; it is the broadest coherent plan still aligned with the
Fuchsia-inspired capability architecture.

Maximum deliverables:

- Toolchain profiles for simulator, host tests, and future hardware bring-up
  experiments.
- Preemptive scheduling, richer job/process hierarchy, page-level memory
  accounting, and structured fault reporting.
- Async IPC, capability namespaces, protocol versioning, service discovery,
  authority audit traces, and resource quotas.
- Multi-device simulator profiles with Pixel 9 as the default acceptance target,
  input replay, CI artifact bundles, suspend/resume, rotation, and optional
  simulated sensors/network stubs.
- Multi-surface UI composition, focus management, declarative app lifecycle,
  accessibility hooks, safe-area/density handling, theming, and a small app SDK.

## Roadmap

1. Close the spec set: keep `000` plus `001`, `010`, `020`, `030`, and `040`
   current before implementation.
2. Add the Rust workspace only after `001-bootstrap-toolchain.md` is accepted as
   the build policy.
3. Implement kernel primitives and denial tests from `010-kernel-primitives.md`.
4. Implement capability IPC and service boundaries from `020-capability-ipc.md`.
5. Implement the Pixel 9 simulator boot path and evidence capture from
   `030-pixel9-simulator.md`.
6. Implement the first shell/app and compositor path from
   `040-ui-composition.md`.
7. Promote simulator smoke evidence into CI once cheap local checks are stable.
8. Expand toward maximum-plan items only after the MVP evidence is reproducible.

## Decision Gates

- Do not add code for a subsystem before its owning spec exists.
- Do not run heavy build/test commands without checking current machine load and
  build status.
- Do not expand toward maximum-plan features until the MVP path has boot,
  capability denial, display, and input evidence.
- Treat every new cross-boundary interface as a spec change before it becomes
  implementation.

## Acceptance Evidence

This plan is useful when a reader can answer:

- What must ship for the MVP?
- What is deliberately outside the MVP?
- What does the maximum prototype add later?
- Which spec owns each major workstream?
- Which evidence proves the project moved from written scope to running system?

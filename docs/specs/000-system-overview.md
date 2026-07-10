# HyperOS System Overview Spec

## Status

Active bootstrap spec. This document is the first authoritative product and
architecture scope for HyperOS. More specific subsystem specs must refine this
document rather than silently diverge from it.

## Observable System Change

HyperOS exists to produce a working mobile OS prototype whose MVP boots inside a
Pixel 9 form-factor simulator and whose maximum plan reaches real mobile device
operation. The simulator MVP demonstrates three observable behaviors:

- Isolated user-space components cannot directly mutate each other's memory or
  resources.
- Privileged services exchange authority through explicit capability handles,
  not ambient global access.
- A simulator-visible UI surface can launch and display at least one composable
  user-space experience.

## Target Device And Runtime

The target device is a simulator model shaped around the Pixel 9 form factor. The
simulator is part of the product, not a disposable test harness: it owns the
device frame, input model, display timing assumptions, and boot/runtime evidence.

The simulator is the first acceptance target, not the final product boundary.
`050-real-device-operation.md` owns the staged plan from simulator evidence to
hardware abstraction, developer-device boot, agent-first OS behavior, and a
daily-driver device candidate.

The prototype is written in Rust unless a later spec explicitly permits another
language in a bounded path. Code under `crates/` and `sim/` must stay Rust-first.

## MVP Scope

The initial MVP is a single-machine prototype with these components:

- A small kernel crate that defines task, memory, scheduling, and handle
  primitives at the level needed by the simulator.
- A capability-passing IPC model with typed handles and explicit transfer rules.
- Core user-space services for process lifecycle, app launch, and display
  composition.
- A Pixel 9 simulator harness that can boot the prototype and collect evidence
  for smoke tests.
- One minimal interactive app or shell surface to prove end-to-end launch,
  display, and input routing.

## Non-Goals

The bootstrap MVP does not claim hardware boot support, Android compatibility,
cellular stack support, production security certification, or a general package
manager. Hardware boot and device-quality work are part of the maximum plan only
after the simulator MVP and hardware-abstraction contracts are stable.

## Architecture Boundaries

HyperOS follows a Fuchsia-inspired split:

- Kernel: owns primitives, isolation boundaries, and handle mechanics.
- Drivers/device model: simulates Pixel 9 hardware surfaces used by higher
  layers.
- Services: run in user space and expose capabilities over IPC.
- App/runtime layer: launches user experiences and binds them to services.
- Simulator: controls the host-side device frame, input, display, and evidence
  capture.

Subsystem specs must state which boundary they touch and which interfaces cross
that boundary.

## Follow-Up Specs

The next specs should be written before code that depends on them:

1. `005-opencode-source-assignment.md`: recovered original opencode assignment,
   correction, and HyperOS source-document excerpt.
2. `001-bootstrap-toolchain.md`: Rust workspace layout, build status policy, and
   cheap checks allowed before full builds.
3. `010-kernel-primitives.md`: tasks, memory objects, scheduler assumptions, and
   handle table invariants.
4. `020-capability-ipc.md`: message shapes, handle transfer rules, rights, and
   denial behavior.
5. `030-pixel9-simulator.md`: device frame, display, input, timing, and evidence
   capture.
6. `040-ui-composition.md`: surface model, app lifecycle, compositor contract,
   and first shell/app acceptance criteria.
7. `050-real-device-operation.md`: full path from simulator MVP to hardware
   abstraction, real-device boot, agent-first OS behavior, and daily-driver
   readiness.

## Acceptance Evidence

A future implementation satisfies this overview only when it has:

- A documented build command and a cheap status command.
- A source trace tying the HyperOS vision to the recovered opencode session.
- A simulator boot smoke test.
- At least one IPC/capability transfer test that proves denied access stays
  denied.
- A screenshot or equivalent simulator artifact showing the first UI surface.

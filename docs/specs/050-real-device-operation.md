# HyperOS Real Device Operation Roadmap Spec

## Status

Active maximum-plan spec. This document extends the simulator MVP into a staged
path toward real device operation. It does not make hardware boot a bootstrap
MVP promise.

## Source Relationship

`005-opencode-source-assignment.md` records the recovered product vision:
agent-first OS, widgets/data sources/integrations, auto installation,
local/remote data and logic management, global OS history, strong hardware
priorities, ecosystem sharing, and open-source development.

The opencode source does not contain a Pixel 9, Fuchsia, or board-support plan.
Those are current HyperOS planning decisions captured by this spec set.

## Purpose

HyperOS must not stop at a host simulator. The full product path reaches a real
mobile device that can boot, display UI, route input, install and update
software, preserve data, communicate with nearby systems, and survive daily
device conditions with measured evidence.

## Phase 0: Spec And Toolchain Grounding

Before implementation expands, the project must preserve:

- Source trace from the opencode session.
- Rust-first workspace policy and cheap verification commands.
- Kernel, IPC, simulator, UI, and device-roadmap specs as authoritative inputs.
- Clear separation between MVP evidence and maximum-plan claims.

Exit evidence:

- `docs/specs/` contains the source trace and all subsystem specs.
- Archive and review checks prove documentation packages contain specs only.

## Phase 1: Pixel 9 Form-Factor Simulator MVP

The simulator remains the first acceptance target because it gives repeatable
evidence without blocked hardware work.

MVP scope:

- Boot kernel primitives, core services, and first UI surface.
- Prove task/memory isolation and denied capability access.
- Route input to one visible user-space app or shell.
- Capture screenshots or frame artifacts for review.
- Emit structured smoke-test milestones.

Exit evidence:

- A documented simulator boot command.
- A screenshot or frame artifact from the first shell/app.
- At least one passing denied-access test.
- A smoke report with boot, service, app-launch, and first-frame milestones.

## Phase 2: Hardware Abstraction Readiness

After the simulator MVP is stable, hardware work starts by isolating the device
surface behind explicit contracts rather than binding services to simulator
internals.

Required workstreams:

- Board support boundary: boot parameters, memory map, interrupt model, timers,
  clocks, and device tree or equivalent hardware description.
- Driver model: display, touch, storage, USB, Wi-Fi, Bluetooth, audio, camera,
  sensors, battery, charging, and thermal management as replaceable components.
- Power model: suspend, resume, wake sources, background work limits, and
  battery accounting.
- Recovery model: diagnostics, safe mode, factory reset path, and image rollback
  hooks.
- Evidence adapter: simulator evidence and device evidence must share milestone
  names where possible.

Exit evidence:

- A hardware-abstraction crate or module boundary exists.
- Simulator code uses the same boundary as future board support where practical.
- Driver stubs can be tested without real hardware.

## Phase 3: Developer Hardware Bring-Up

The first real-device target must be an explicitly unlocked, legally usable
developer device or board. The project must not depend on bypassing a locked
consumer boot chain.

Required workstreams:

- Boot chain: bootloader handoff, kernel image format, init process, recovery
  image, and serial or equivalent early diagnostics.
- Display and input: render the first frame on device and route touch input to
  the focused surface.
- Persistent storage: mount user data, protect system partitions, survive reboot,
  and expose recovery rollback.
- Connectivity: bring up USB networking first if needed, then Wi-Fi and
  Bluetooth.
- Time and entropy: monotonic clocks, wall-clock sync, random source, and boot
  identity.
- Crash capture: preserve kernel panic and service crash evidence across reboot.

Exit evidence:

- Device boots from power-on or bootloader into a HyperOS shell.
- Display, touch, storage persistence, and one network path work.
- A crash or failed service produces recoverable diagnostics.
- The same app launch path works on simulator and device.

## Phase 4: Agent-First OS Preview

Once basic device operation works, the product moves from bring-up to the source
vision.

Required workstreams:

- Project, task, document, people, local data, and agent identities as system
  concepts rather than app-only conventions.
- Widgets backed by explicit data-source and integration capabilities.
- Auto installation that can install or configure apps/integrations from user
  intent with reviewable permissions.
- Local/remote data and logic placement so work can move between device, local
  machines, and remote services without hiding authority changes.
- Global history for OS navigation, documents, app actions, and agent activity,
  with search and rollback where safe.
- Shared clipboard with macOS and Ubuntu through open protocols or explicitly
  approved platform integrations.
- AirPlay/AirDrop-class interoperability only after protocol, legal, and user
  consent requirements are specified.

Exit evidence:

- At least one widget reads from a real integration through capabilities.
- App/integration installation shows requested authority before activation.
- Global history records and searches cross-app actions.
- Clipboard sharing works with at least one desktop OS.

## Phase 5: Daily-Driver Device Candidate

The final maximum-plan target is a device that can be carried for normal work,
subject to hardware and certification constraints.

Required workstreams:

- Camera pipeline: preview, capture, permissions, storage, and power impact.
- Battery and thermal quality: measured day-long use targets, charging behavior,
  thermal throttling, and background limits.
- Waterproof and industrial-design goals: captured as hardware-program
  requirements, not software-only claims.
- Security hardening: verified boot, update signing, app sandboxing, encrypted
  user data, key storage, permission review, and remote wipe policy.
- OTA updates: A/B or rollback-capable update flow, recovery, staged rollout,
  and failed-update evidence.
- Accessibility and localization baseline for system UI.
- Regulatory and carrier constraints before any production-phone claim.

Exit evidence:

- A device runs through a day-long reliability script with suspend/resume,
  network, app launch, storage, and update checks.
- OTA update and rollback work on device.
- Camera, battery, thermal, audio, Wi-Fi, Bluetooth, and sensors have smoke
  evidence.
- Security review blocks production language until verified boot, encryption,
  sandboxing, and update signing are implemented.

## Non-Goals For Bootstrap

- The simulator MVP does not claim real hardware boot.
- HyperOS will not bypass locked bootloaders or platform protections.
- Android app compatibility is not assumed.
- Proprietary Apple ecosystem compatibility is not claimed until a later spec
  defines legal protocol choices and user-consent behavior.

## Acceptance Evidence For This Spec

This roadmap is satisfied as documentation when:

- It is referenced by `000-system-overview.md`.
- It covers simulator MVP, hardware abstraction, real-device bring-up,
  agent-first OS behavior, and daily-driver criteria.
- It separates recovered source requirements from derived implementation plans.

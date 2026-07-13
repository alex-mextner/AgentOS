# Agent OS

Agent OS is a Rust-first mobile operating-system programme built on a fork of Fuchsia/Zircon, with capability-secured IPC, portable device-service contracts, and agent-oriented system layers on top.

## Status

Foundation engineering, public documentation, task infrastructure, and early kernel planning are in progress. Do not present unimplemented kernel, driver, camera, modem, or Pixel 9 support as complete.

## Repository layout

- `crates/` — Rust crates for kernel, architecture packages, drivers, services, and user-space components.
- `sim/` — QEMU and deterministic simulation harnesses.
- `engineering-bible/` — canonical public specifications, research, claims, experiments, glossary, and planning records.
- `portal/` — Vercel-hosted public Wiki, task, Gantt, and API projection.
- `docs/` — contributor and operational documentation.
- `assets/` — static assets, test fixtures, and redistributable evidence.

## Architectural boundaries

- The project forks the entire Fuchsia tree (Zircon + userspace + build) and adds board drivers and the Rust-first product layer on top.
- Portable layers must not expose Linux, Android, Binder, POSIX, or vendor ABI types.
- Android/Linux use is restricted to the isolated Pixel 9 evidence and bring-up track.
- Device-service adapters must not add avoidable hot-path copies or hidden format conversion.
- Bulk data paths should use shared memory, DMA-capable buffers, descriptor rings, queues, and fences.
- A later ODM/JDM/OEM device is supported by the architecture, but current milestones must not depend on a future vendor contract.

## How agents work in this repository

- Read the relevant `engineering-bible/` specifications before modifying architecture or implementation.
- Rust is the primary systems language.
- Prefer LSP and code-intelligence tooling for navigation and refactors.
- Use one logical change per commit and conventional commit messages.
- Keep normative and agent-facing documentation in English.
- Record unknowns as claims or experiments rather than turning them into implementation assumptions.
- Link changes to stable `AOS-*` document or task identifiers.
- Do not commit proprietary firmware, copyrighted source archives, private traces, personal data, or material with unclear redistribution rights.
- Check current CI and machine load before starting expensive builds or test suites.

## Build and test

The complete toolchain is not yet frozen. Every new executable component must document its build command, test command, supported targets, expected resource cost, and produced evidence.

# Agent OS

Agent OS is an original Rust-first mobile operating-system programme centred on an owned microkernel, capability-secured IPC, portable device-service contracts, and agent-oriented system layers.

**Public engineering portal:** https://agent-os-portal-eight.vercel.app

## Architecture boundary

The native architecture does not depend on Android, Linux, POSIX, Binder, or Android HAL contracts. Android and Linux are permitted only inside the isolated Pixel 9 evidence and bring-up track as stock-device oracles, trace sources, recovery mechanisms, and explicitly temporary bridges with replacement criteria.

## Public engineering environment

- `knowledge/` — canonical Markdown Wiki and research records;
- GitHub Issues — executable work and public discussion;
- GitHub Projects — portfolio fields, schedule, roadmap, and board views;
- `portal/` — responsive Wiki, task, Gantt, and API frontend deployed on Vercel;
- `.github/workflows/` — validation, task bootstrap, and derived-data automation;
- `docs/MOBILE-EDITING.md` — iPhone and Markdown editing workflow.

## Hardware strategy

Current milestones must be deliverable on QEMU and available research hardware. The architecture is prepared to support a later contract-manufactured device without rewriting portable system or product layers. This is a compatibility requirement, not an assumption that an ODM, JDM, or OEM agreement, budget, volume, or delivery date already exists.

## Performance boundary

Portable device-service contracts do not imply generic runtime translation or payload copying. Control-plane bindings are statically typed. Performance-sensitive camera, display, audio, network, and storage paths use shared memory, DMA-capable buffers, descriptor rings, queues, and synchronization fences. Hot-path adapters must meet explicit copy-count, latency, CPU, and allocation budgets.

## Current status

Foundation publication is live. The first release establishes architecture boundaries, hardware tracks, public documentation, phase tasks, validation rules, and the portal. It does **not** claim that the microkernel or native Pixel 9 support is already implemented.

## Start here

- [Public portal](https://agent-os-portal-eight.vercel.app)
- [Executive briefing](knowledge/BRIEFING.md)
- [Documentation index](knowledge/docs/INDEX.md)
- [Portable architecture](knowledge/docs/architecture/ARCH-001-portable-system-architecture.md)
- [Microkernel specification](knowledge/docs/architecture/ARCH-002-microkernel.md)
- [Hardware target portfolio](knowledge/docs/hardware/HW-001-target-portfolio.md)
- [Roadmap and Gantt authority](knowledge/docs/planning/PLAN-002-roadmap-and-gantt.md)
- [Mobile editing](docs/MOBILE-EDITING.md)

## Contribution model

Specifications and code change through pull requests. Tasks live in Issues. Claims must link evidence and uncertainty. Large design changes require an ADR or RFC before implementation.

# Agent OS

Agent OS is an open, local-first, document/task/project-first mobile operating system that treats people, projects, documents, tasks, events, places, messages, devices, and agents as first-class system entities rather than data trapped inside applications. Shared entity and action contracts, semantic history, malleable views, transclusion, and capability-secured agents make the whole system searchable, scriptable, inspectable, reversible, and portable across hardware. The native implementation is Rust-first and built around an owned microkernel.

**Public engineering portal:** https://agentos-bible.vercel.app

## Core ideas

- **Document / task / project first** — users navigate durable work and life objects, not application silos.
- **Entity-first system model** — people, projects, events, places, devices, messages, and agents have shared identity, links, authority, and history.
- **Shared action contracts** — meaningful operations are typed and available consistently to UI, CLI, scripts, integrations, and agents.
- **Semantic history** — the system records provenance, state transitions, external effects, and undo or compensation paths.
- **Malleable views and transclusion** — the same entity can appear as a document block, table, card, timeline, map, graph, or agent context without copying opaque app state.
- **Agents with inspectable plans** — agents use scoped capabilities, dry-run or shadow modes, explicit confirmation, budgets, and execution receipts.
- **Local and private by default** — data and computation remain user-controlled; remote providers receive bounded, inspectable inputs.
- **Portable native stack** — product and system layers use owned contracts above architecture ports, board packages, and replaceable device-service providers.

## Architecture boundary

The native architecture does not depend on Android, Linux, POSIX, Binder, or Android HAL contracts. Android and Linux are permitted only inside the isolated Pixel 9 evidence and bring-up track as stock-device oracles, trace sources, recovery mechanisms, and explicitly temporary bridges with replacement criteria.

## Public engineering environment

- `knowledge/` — canonical Markdown Wiki, specifications, research, claims, experiments, and glossary;
- `data/` — validated public projections used by the portal;
- GitHub Issues — executable work and public discussion;
- GitHub Projects — portfolio fields, schedule, roadmap, and board views;
- `portal/` — Wiki, comparison, task explorer, Gantt, traceability, and API frontend;
- `.github/workflows/` — validation, task bootstrap, and derived-data automation;
- `docs/MOBILE-EDITING.md` — iPhone and Markdown editing workflow.

## Hardware strategy

Current milestones must be deliverable on QEMU and available research hardware. The architecture is prepared to support a later contract-manufactured device without rewriting portable system or product layers. This is a compatibility requirement, not an assumption that an ODM, JDM, or OEM agreement, budget, volume, or delivery date already exists.

## Performance boundary

Portable device-service contracts do not imply generic runtime translation or payload copying. Control-plane bindings are statically typed. Performance-sensitive camera, display, audio, network, and storage paths use shared memory, DMA-capable buffers, descriptor rings, queues, and synchronization fences. Hot-path providers must meet explicit copy-count, latency, CPU, allocation, and scheduling-hop budgets.

## Current status

Foundation publication is live. The project currently provides the product vision, architecture boundaries, hardware tracks, public Wiki, task catalog, validation rules, and engineering portal. It does **not** claim that the microkernel or native Pixel 9 support is already implemented.

## Licensing

The current repository policy uses Apache-2.0 for original software and automation, and CC BY 4.0 for original documentation and research records. This remains subject to the explicit licensing-strategy review before the first stable ecosystem release. Third-party and restricted materials are excluded unless separately identified. See [LICENSES.md](LICENSES.md).

## Start here

- [Public portal](https://agentos-bible.vercel.app)
- [Executive briefing](knowledge/BRIEFING.md)
- [Documentation index](knowledge/docs/INDEX.md)
- [Product vision](knowledge/normalized/product-vision.md)
- [Portable architecture](knowledge/docs/architecture/ARCH-001-portable-system-architecture.md)
- [Microkernel specification](knowledge/docs/architecture/ARCH-002-microkernel.md)
- [Hardware target portfolio](knowledge/docs/hardware/HW-001-target-portfolio.md)
- [Roadmap and Gantt authority](knowledge/docs/planning/PLAN-002-roadmap-and-gantt.md)
- [Mobile editing](docs/MOBILE-EDITING.md)

## Contribution model

Specifications and code change through pull requests. Tasks live in Issues. Claims must link evidence and uncertainty. Large design changes require an ADR or RFC before implementation.

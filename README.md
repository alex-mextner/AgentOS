# Agent OS

Agent OS is an open, local-first, document/task/project-first mobile operating system that treats people, projects, documents, tasks, events, places, messages, devices, and agents as first-class system entities rather than data trapped inside applications. Shared entity and action contracts, semantic history, malleable views, transclusion, and capability-secured agents make the whole system searchable, scriptable, inspectable, reversible, and portable across hardware. The native implementation is Rust-first and built on a **fork of the entire Fuchsia tree** (Zircon, DFv2, FIDL, Magma, Scenic/Flatland, Starnix taken as-is) — not an owned-from-scratch microkernel.

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

## Kernel approach

Agent OS forks the entire Fuchsia tree — Zircon, the DFv2 driver framework, FIDL, Magma, Scenic/Flatland, and Starnix are taken as-is — and adds board drivers plus the Rust-first entity/agent product layer on top. No document should imply Agent OS authors its own kernel from scratch; if you find such framing, it is a regression to fix (see `scripts/check-framing.sh`).

## Architecture boundary

The native architecture does not depend on Android, Linux, POSIX, Binder, or Android HAL contracts. Android and Linux are permitted only inside the isolated Pixel 9 evidence and bring-up track as stock-device oracles, trace sources, recovery mechanisms, and explicitly temporary bridges with replacement criteria.

## Documentation: engineering bible is the source of truth

Canonical documentation lives in **`engineering-bible/`**. Everything else is a projection of it:

- `engineering-bible/` — the authoritative, cross-linked, `AOS-*`-identified corpus: architecture, hardware, product, research, legal, planning, glossary, registers, sources, and validation. Start at [`engineering-bible/README.md`](engineering-bible/README.md).
- `portal/` — the public Vercel site rendered from the engineering bible: a four-audience front door plus Wiki, task explorer, Gantt, registers, and API views.
- `crates/`, `sim/` — Rust crates and simulation harnesses (early bootstrap).
- `data/` — validated public projections used by the portal.
- `.github/workflows/` — validation, task bootstrap, and derived-data automation.
- `scripts/` — Fuchsia SDK/build helpers and the documentation validation gate (`validate-all.sh`, `check-cyrillic.sh`, `check-links.sh`, `gen-checksums.sh`, `check-framing.sh`).

## Four-audience portal

The public portal front door routes readers into four lanes, each with tailored copy sharing one visual system derived from the engineering spec's layered map:

- **Build OS** — contributors building the operating system itself.
- **Developers** — third-party developers targeting the platform.
- **Investors** — the thesis, roadmap, and programme risk.
- **Users** — early users of the entity-first product.

## Hardware strategy

Current milestones must be deliverable on QEMU and available research hardware. The architecture is prepared to support a later contract-manufactured device without rewriting portable system or product layers. This is a compatibility requirement, not an assumption that an ODM, JDM, or OEM agreement, budget, volume, or delivery date already exists. The Pixel 9 hardware target is archived (ADR-0007) in favour of a demo-brick bring-up track; the Fuchsia-fork software approach is current.

## Performance boundary

Portable device-service contracts do not imply generic runtime translation or payload copying. Control-plane bindings are statically typed. Performance-sensitive camera, display, audio, network, and storage paths use shared memory, DMA-capable buffers, descriptor rings, queues, and synchronization fences. Hot-path providers must meet explicit copy-count, latency, CPU, allocation, and scheduling-hop budgets.

## Current status

Foundation publication is live. The project currently provides the product vision, architecture boundaries, hardware tracks, public Wiki, task catalog, validation rules, and engineering portal. It does **not** claim that the kernel or native Pixel 9 support is already implemented.

## Documentation validation

Run the doc-integrity gate before proposing documentation changes:

```sh
scripts/validate-all.sh        # Cyrillic, internal links, framing (non-zero exit on failure)
scripts/gen-checksums.sh       # regenerate engineering-bible checksum manifests
```

## Licensing

The current repository policy uses Apache-2.0 for original software and automation, and CC BY 4.0 for original documentation and research records. This remains subject to the explicit licensing-strategy review before the first stable ecosystem release. Third-party and restricted materials are excluded unless separately identified. See [LICENSES.md](LICENSES.md).

## Start here

- [Public portal](https://agentos-bible.vercel.app)
- [Engineering bible](engineering-bible/README.md)
- [Executive briefing](engineering-bible/BRIEFING.md)
- [Documentation index](engineering-bible/docs/AOS-INDEX.md)
- [Release manifest](engineering-bible/MANIFEST.md)
- [Product vision](engineering-bible/docs/vision/AOS-VSN-001.md)
- [Portable system architecture](engineering-bible/docs/architecture/AOS-ARCH-001.md)
- [Kernel base — Fuchsia/Zircon fork](engineering-bible/docs/architecture/AOS-ARCH-002.md)
- [Hardware target portfolio](engineering-bible/docs/hardware/AOS-HW-001.md)
- [Roadmap and Gantt authority](engineering-bible/docs/planning/AOS-PLAN-002.md)
- [Mobile editing](docs/MOBILE-EDITING.md)

## Contribution model

Specifications and code change through pull requests. Tasks live in Issues. Claims must link evidence and uncertainty. Large design changes require an ADR or RFC before implementation.

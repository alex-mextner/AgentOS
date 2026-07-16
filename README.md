# Agent OS

Agent OS is an open, **APP-LAST**, local-first and agent-native mobile operating system. It treats people, projects, documents, tasks, events, places, messages, devices, micro-apps and agent plans as durable system entities rather than data trapped inside applications. Shared entity and action contracts, semantic history, text-to-micro-app composition, transport-neutral peer connectivity and capability-secured agents make the whole system searchable, scriptable, inspectable, reversible and portable across hardware.

The platform currently uses a fork of the Fuchsia tree — Zircon, DFv2, FIDL, Magma, Scenic/Flatland and Starnix — with Agent OS product, entity, micro-app, connectivity and agent layers built above explicit contracts.

**Public engineering portal:** https://agentos-bible.vercel.app

## Core ideas

- **APP-LAST** — durable work and life objects are primary; applications become replaceable providers, editors, transports and views.
- **Entity-first system model** — people, projects, events, places, devices, messages, micro-apps and agents have shared identity, links, authority and history.
- **Text-to-micro-app composition** — describe a missing interface in natural language, edit it as Shortcut-style blocks or declarative source, preview its authority, and render one instance across AI responses, documents, notifications, widgets, wearables and focused modes.
- **Shared action contracts** — meaningful operations are typed and available consistently to UI, CLI, scripts, integrations, micro-apps and agents.
- **Semantic history** — the system records provenance, state transitions, external effects, delivery state, and undo or compensation paths.
- **Agent Mesh** — one encrypted envelope and receipt model can use local IP, Wi-Fi Direct, Bluetooth, LoRa, gateways or delayed store-and-forward without creating a transport-specific identity silo.
- **Malleable views and transclusion** — the same entity can appear as a document block, table, card, timeline, map, graph, AI card or agent context without copying opaque app state.
- **Agents with inspectable plans** — agents use scoped capabilities, preview/shadow/dry-run modes, explicit confirmation, budgets and execution receipts.
- **Local authority by default** — data and computation remain user-controlled; remote models, services and gateways receive bounded, inspectable inputs.

## Kernel approach

Agent OS forks the Fuchsia tree and builds its product model above Zircon, DFv2, FIDL, Magma, Scenic/Flatland and Starnix. No document should imply that the current implementation authors a kernel from scratch; `scripts/check-framing.sh` guards this project decision.

## Architecture boundary

Portable Agent OS product semantics do not expose Android, Linux, POSIX, Binder, radio-chip or vendor-HAL types. Platform, legacy and hardware details terminate in adapters and providers. Android/Linux use remains bounded by explicit compatibility or evidence policies.

## Documentation: Engineering Bible is the source of truth

Canonical documentation lives in **`engineering-bible/`**. The public site and machine-readable data are projections of it:

- `engineering-bible/` — authoritative cross-linked `AOS-*` corpus: vision, architecture, product, hardware, research, legal, planning, glossary, registers, sources and validation;
- `site/` — Astro portal rendered from the Engineering Bible, including the in-portal document viewer, product pages and comparison atlas;
- `crates/`, `sim/` — Rust crates and simulation harnesses;
- `data/` — validated public task and portal projections;
- `.github/workflows/` — validation, task bootstrap, site builds and derived-data automation;
- `scripts/` — build and documentation validation tooling.

## Flagship product programmes

### Text-to-Micro-App platform

A micro-app is a small declarative composition of data queries, typed actions, state, layout, triggers and policy — not a miniature monolithic application. The same instance can render inside an AI answer, document, project, notification, lock screen, widget, watch, car surface, CLI or full-screen focused mode.

- [Product specification](engineering-bible/docs/product/PROD-018-text-to-micro-app-builder.md)
- [Runtime specification](engineering-bible/docs/architecture/ARCH-026-micro-app-runtime.md)
- [GitHub epic #64](https://github.com/alex-mextner/AgentOS/issues/64)
- [Portal page](https://agentos-bible.vercel.app/micro-apps)

### Agent Mesh

Agent Mesh provides transport-neutral direct, peer-to-peer and delay-tolerant delivery. LoRa is one constrained transport below a stable signed envelope, identity, policy and receipt model; it is not a separate messenger.

- [Architecture specification](engineering-bible/docs/architecture/ARCH-024-agent-mesh-connectivity.md)
- [LoRa hardware track](engineering-bible/docs/hardware/HW-021-lora-mesh-hardware.md)
- [GitHub epic #63](https://github.com/alex-mextner/AgentOS/issues/63)
- [Portal page](https://agentos-bible.vercel.app/mesh)

## Hardware strategy

Current product and architecture milestones must be demonstrable in emulation and on available research hardware. Real-device work proceeds through documented boards, phone-form-factor targets, staged radio accessories and explicit evidence gates. A later contract-manufactured device remains an architectural compatibility target, not an assumed vendor contract or schedule.

Agent Mesh begins with an external documented compatibility node, then a recoverable SX1262-class accessory and fixed relays. Integrated radio hardware is gated by antenna, coexistence, power, firmware, certification and supply-chain evidence.

## Performance boundary

Portable contracts do not imply generic runtime translation or payload copying. Control-plane bindings are statically typed. Performance-sensitive camera, display, audio, network and storage paths use shared memory, DMA-capable buffers, descriptor rings, queues and synchronization fences. Hot-path providers must meet explicit copy-count, latency, CPU, allocation and scheduling-hop budgets.

## Current status

The Engineering Bible, portal, task model and flagship programme specifications are live. APP-LAST, the micro-app platform and Agent Mesh are designed target capabilities with owned epics and acceptance gates; they are not claimed as completed implementations.

## Documentation validation

```sh
scripts/validate-all.sh        # framing, Cyrillic and internal-link checks
scripts/gen-checksums.sh       # regenerate Engineering Bible checksum manifests
cd site && npm ci && npm run check && npm run build
```

## Licensing

The current repository policy uses Apache-2.0 for original software and automation, and CC BY 4.0 for original documentation and research records. This remains subject to the explicit licensing-strategy review before the first stable ecosystem release. Third-party and restricted materials are excluded unless separately identified. See [LICENSES.md](LICENSES.md).

## Start here

- [Public portal](https://agentos-bible.vercel.app)
- [How Agent OS works](https://agentos-bible.vercel.app/how-it-works)
- [Micro-app builder](https://agentos-bible.vercel.app/micro-apps)
- [Agent Mesh](https://agentos-bible.vercel.app/mesh)
- [Engineering Bible](engineering-bible/README.md)
- [Product Vision](engineering-bible/docs/vision/AOS-VSN-001.md)
- [Entity graph, history, sync and bundles](engineering-bible/docs/architecture/AOS-ARCH-009.md)
- [Agent runtime and action safety](engineering-bible/docs/architecture/AOS-ARCH-010.md)
- [Roadmap and execution plan](engineering-bible/docs/planning/PLAN-019-mesh-and-microapps.md)

## Contribution model

Specifications and code change through pull requests. Tasks live in Issues. Claims must link evidence and uncertainty. Large design changes require an ADR or RFC before implementation.

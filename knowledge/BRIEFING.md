---
id: AOS-BRIEFING
title: Agent OS Engineering Briefing
status: foundation
---

# Agent OS Engineering Briefing

## Mission

Build a Rust-first mobile operating system on a fork of Fuchsia/Zircon, with capability-secured IPC, portable device-service contracts, and agent-oriented product layers on top.

## Architectural boundary

The native stack must not depend on Android, Linux, POSIX, Binder, or Android HAL contracts. Android and Linux may be used only inside the isolated Pixel 9 evidence and bring-up track as stock-device oracles, recovery mechanisms, trace sources, and explicitly temporary bridges with replacement criteria.

## Hardware programme

The programme runs parallel tracks:

1. deterministic QEMU kernel and CI baseline;
2. documented or open physical boards for clean native bring-up;
3. open phone-form-factor research;
4. camera and computational-photography laboratory;
5. Pixel 9 as the quality ceiling and feasibility target;
6. readiness for a later contract-manufactured device.

The sixth track is an architectural constraint, not a dependency or procurement assumption. All current milestones must remain achievable without an ODM, JDM, or OEM agreement.

## Adapter performance rule

Portable contracts define semantics, ownership, synchronization, and capability boundaries. They do not require copying bulk payloads into generic Agent OS structures. Control-plane bindings are generated and statically typed; camera, display, audio, network, and storage data planes use shared buffers, DMA-capable memory, rings, descriptors, and fences. Any hot-path adapter must prove that it adds no avoidable payload copy and stays within an explicit latency and CPU budget.

## Public operating model

- GitHub Markdown is the source of truth for specifications.
- GitHub Issues are the source of truth for executable work.
- GitHub Projects stores schedule fields and portfolio views.
- The Vercel portal provides Wiki, task, Gantt, traceability, and API projections.
- Pull requests are the review and publication mechanism.
- Claims and experiments must cite evidence and explicit uncertainty.

## Immediate release objective

Publish the Foundation corpus, import the first task hierarchy, establish CI validation, and expose the read-only portal before expanding the kernel implementation backlog.

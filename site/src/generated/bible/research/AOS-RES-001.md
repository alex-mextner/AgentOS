---
id: "AOS-RES-001"
title: "Prior Art and Literature Atlas"
status: "Normative planning baseline"
version: "2.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Annotated atlas of operating systems, capability security, Rust OS work, mobile hardware, camera, cellular, and supply-chain prior art."
---

# Prior Art and Literature Atlas

> Annotated atlas of operating systems, capability security, Rust OS work, mobile hardware, camera, cellular, and supply-chain prior art.

## Table of Contents

- [Research Method](#research-method)
- [Microkernel and Capability Systems](#microkernel-capability)
- [Rust and Research Operating Systems](#rust-and-research-os)
- [Mobile and Hardware Ecosystems](#mobile-and-hardware)
- [Camera, Graphics, and Cellular](#camera-cellular)
- [Secure Development and Supply Chain](#secure-development)
- [Annotated Atlas](#annotated-atlas)
- [Recommended Reading Sequence](#reading-sequence)

<a id="research-method"></a>

## Research Method

Prior art informs requirements and experiments; it does not become an undocumented dependency. Every entry states what to learn, what not to assume, source IDs from [the source register](AOS-RES-002.md#source-register), and the Agent OS contract it affects. Code reuse additionally follows [the dependency policy](AOS-LEGAL-003.md#dependency-policy) and the clean-room protocol.

<a id="microkernel-capability"></a>

## Microkernel and Capability Systems

The central lineage is capability security plus a minimal mechanism kernel: KeyKOS/EROS/CapROS for explicit authority and persistence; seL4 for kernel-object discipline and assurance; Zircon for production handles/rights/objects; Genode for capability-oriented composition; MINIX 3 and QNX for user-space services, recovery and performance. Agent OS synthesizes principles but specifies its own object, IPC, scheduling and lifecycle semantics.

<a id="rust-and-research-os"></a>

## Rust and Research Operating Systems

Tock, Hubris, Theseus and Redox demonstrate distinct Rust operating-system trade-offs: static embedded tasks, operational fault handling, language-level modularity and general-purpose user-space services. Barrelfish and CHERI broaden the architecture lens to heterogeneous multicore and hardware capabilities. Agent OS uses them to test assumptions, not to import a single project’s deployment model.

<a id="mobile-and-hardware"></a>

## Mobile and Hardware Ecosystems

Android/AOSP provides mature decomposition and public behavior references for boot security, camera, telephony and compatibility; postmarketOS and open-phone communities provide practical cross-device bring-up evidence; Fairphone, Sony Open Devices, PINE64 and Purism represent different documentation/quality/partner trade-offs. Only the Pixel 9 track may contain temporary Android/Linux execution dependencies, and those remain isolated.

<a id="camera-cellular"></a>

## Camera, Graphics, and Cellular

libcamera, published computational-photography research, DNG, Mesa/Panfrost, ModemManager, libqmi/libmbim, 3GPP and GSMA sources provide architecture, protocol and test ideas. They do not prove a production-quality implementation on a chosen SoC. Agent OS requires independent native service contracts, lawful artifacts, controlled measurements, and domain-specific partner plans.

<a id="secure-development"></a>

## Secure Development and Supply Chain

NIST SSDF, SLSA, SPDX, OpenChain, REUSE, DCO and established license texts define repeatable provenance and release controls. Agent OS applies them from the first public contribution so later hardware/firmware/product artifacts do not become an untraceable exception.

<a id="annotated-atlas"></a>

## Annotated Atlas

| System / body | Primary contribution | Adopt or test | Avoid or bound | Sources | Related Agent OS sections |
| --- | --- | --- | --- | --- | --- |
| seL4 | Capability microkernel and formal verification | Study minimal kernel objects, explicit authority, scheduling-context trade-offs, proof-oriented API discipline, and machine-checked assurance boundaries. | Do not copy its exact API or assume proofs transfer to a new implementation; define an Agent OS refinement and verification plan. | SRC-001;SRC-002 | AOS-ARCH-002#assurance-boundary;AOS-ARCH-004#capability-semantics |
| Zircon/Fuchsia | Production object kernel, rights-bearing handles, typed IDL, component capability routing | Adopt inspectable kernel objects, explicit handle rights, versioned interfaces, user-space services, diagnostics, and component-level capability routing ideas. | Do not turn Fuchsia compatibility into a product requirement or re-create APIs without need. | SRC-003;SRC-004;SRC-005 | AOS-ARCH-002#kernel-objects;AOS-ARCH-005#versioning-policy |
| KeyKOS / EROS / CapROS | Pure capability authority, persistence, confinement | Use as the conceptual baseline for least authority, delegation, attenuation, sealing, and avoiding ambient namespaces. | Persistent object identity and recovery semantics require careful modern threat and distributed-state analysis. | SRC-007;SRC-008;SRC-018 | AOS-ARCH-004#delegation-and-attenuation;AOS-ARCH-009#entity-model |
| Genode | Capability-oriented system composition over multiple kernels | Study session interfaces, resource donation, component isolation, and portable service implementation. | Avoid treating multi-kernel portability as a substitute for one precise native Agent OS contract. | SRC-006 | AOS-ARCH-001#portability-boundaries;AOS-ARCH-007#service-manager |
| MINIX 3 | User-space drivers and service recovery | Adopt fault-domain isolation, restartable drivers, and failure-injection expectations. | Restart does not repair corrupted external device or persistent state without idempotent recovery protocols. | SRC-009 | AOS-ARCH-006#driver-domains;AOS-ARCH-015#fault-injection |
| QNX Neutrino | Commercial microkernel IPC and real-time practice | Study message-passing performance, priority propagation, resource managers, tracing, and production diagnostics. | Vendor APIs are prior art, not an interoperability target. | SRC-010 | AOS-ARCH-003#priority-inversion;AOS-ARCH-015#observability |
| Tock | Memory-safe embedded kernel components and process grants | Study Rust isolation patterns, static kernel components, asynchronous syscalls, and process-owned kernel memory. | Mobile Agent OS workloads require MMU, richer scheduling, DMA/GPU, and dynamic services beyond microcontroller assumptions. | SRC-011 | AOS-ARCH-002#implementation-language;AOS-ARCH-003#memory-model |
| Hubris | Statically configured Rust tasks and operational failure handling | Adopt explicit task manifests, bounded resources, restart policies, structured dumps, and hardware-oriented testing. | Static topology is not sufficient for a dynamic mobile package ecosystem; keep dynamic policy in user space. | SRC-012 | AOS-ARCH-007#service-lifecycle;AOS-ARCH-015#crash-evidence |
| Theseus | Language-level modularity and live evolution | Study dependency-aware components and safe replacement ideas for development builds. | Avoid putting package/runtime complexity in the minimal kernel TCB. | SRC-013 | AOS-ARCH-002#kernel-non-goals;AOS-ARCH-013#update-model |
| Redox | Rust-first general-purpose OS and user-space schemes | Learn from practical Rust toolchain, filesystem/service, graphics, and community experience. | POSIX-like compatibility and scheme semantics are not the Agent OS native contract. | SRC-014 | AOS-ARCH-001#native-contract;AOS-ARCH-011#compatibility-policy |
| Barrelfish | Multikernel and heterogeneous systems as distributed systems | Use message-passing and explicit topology concepts when scaling across cores, accelerators, and isolated processors. | Avoid premature distributed-kernel complexity before a symmetric-multiprocessing baseline is measured. | SRC-015 | AOS-ARCH-003#aos-model;AOS-ARCH-006#accelerators |
| CHERI | Hardware-enforced capabilities and memory safety | Design object and pointer abstractions so a future CHERI port can strengthen compartment boundaries and reduce unsafe code assumptions. | Do not require unavailable CHERI mobile silicon for the first implementation. | SRC-016 | AOS-ARCH-012#hardware-security-evolution;AOS-HW-008#architecture-envelope |
| Android/AOSP | Mature mobile subsystem contracts, compatibility testing, update, camera and telephony decomposition | Use documentation as prior art and Pixel-only observations as bounded evidence; copy neither framework assumptions nor vendor HALs into native Agent OS APIs. | Binder, Android HAL, Linux device model, and framework types are prohibited above Pixel adapters. | SRC-019;SRC-022;SRC-023;SRC-024;SRC-025 | AOS-ARCH-011#pixel-legacy-boundary;AOS-HW-002#allowed-legacy-uses |
| postmarketOS / mobile Linux communities | Cross-device bring-up, device matrices, phone UI and hardware limitations | Learn target-dossier practice, community port maintenance, modem separation, and honest maturity labels. | Linux driver availability is evidence, not a native Agent OS driver implementation. | SRC-032 | AOS-HW-001#target-dossier;AOS-GOV-002#hardware-maintainers |
| libcamera | Userspace camera pipeline handlers, controls and isolated algorithms | Adopt separable sensor/capture/ISP/3A contracts, metadata discipline, tuning assets, and pipeline-specific backends. | Do not expose Linux media APIs as Agent OS native contracts; licensing and IPA isolation must be reviewed. | SRC-040 | AOS-HW-006#portable-camera-stack;AOS-ARCH-006#camera-contract |
| HDR+ research | Burst alignment and denoising concepts | Use published algorithms and datasets to define measurable computational-photography experiments. | A paper is not production Pixel source, tuning, ISP firmware, or a transferable quality guarantee. | SRC-043 | AOS-HW-006#computational-pipeline;AOS-RES-003#camera-claims |
| Panfrost/Mesa | Open Mali command-stream and userspace driver knowledge | Use as protocol/architecture prior art and a source of test concepts where licensing and clean-room boundaries permit. | Mali GPU knowledge does not include the SoC display controller, power integration, firmware, IOMMU, or a drop-in Agent OS driver. | SRC-041;SRC-042 | AOS-HW-002#gpu-and-display;AOS-ARCH-006#gpu-contract |
| ModemManager/libqmi/libmbim | Modem state machines and public cellular control protocols | Use documented protocol behavior, test fixtures, and state decomposition for a native cellular service. | Do not embed D-Bus, Linux networking, plugin ABI, or assume data support implies IMS voice. | SRC-045;SRC-046;SRC-047 | AOS-HW-007#native-cellular-stack;AOS-ARCH-011#linux-reference-code |
| Local-first software and CRDT literature | Offline-first collaboration, causal histories, mergeable data types | Use CRDTs only for schemas that need concurrent offline editing; preserve event provenance and explicit conflict semantics. | Do not apply CRDTs to payments, permissions, package installation, telephony, or every object by default. | SRC-017 | AOS-ARCH-009#consistency-models;AOS-PROD-002#replay-and-undo |
| NIST SSDF / SLSA / SPDX / OpenChain / REUSE | Secure development and supply-chain provenance | Make provenance, SBOM, build evidence, per-file licensing, and review repeatable from the first commit. | Compliance badges are not a substitute for threat-specific engineering or legal advice. | SRC-058;SRC-059;SRC-060;SRC-061;SRC-062 | AOS-LEGAL-003#compliance-tooling;AOS-ARCH-015#release-evidence |

<a id="reading-sequence"></a>

## Recommended Reading Sequence

1. Saltzer and Schroeder plus the Confused Deputy.
2. KeyKOS/EROS/CapROS capability lineage.
3. seL4 manual and assurance model.
4. Zircon kernel objects, FIDL, and component routing.
5. Genode, MINIX 3, QNX, Hubris, Tock and Rust OS case studies.
6. CHERI and heterogeneous-system research.
7. Android boot/camera/IMS only for decomposition and Pixel boundary work.
8. libcamera, camera research and DNG for image pipeline design.
9. modem protocols/standards and certification sources.
10. secure-development, licensing, provenance and regulatory sources.

---
id: "AOS-RES-014"
title: "System Survey: What Agent OS Takes From Twenty-One Prior Operating Systems and Data Substrates"
status: "Research-backed evidence map"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Research Lead / Architecture Programme"
audience: "Engineering, product, security, and program leadership"
summary: "A sourced, one-section-each survey of the operating systems, verified kernels, embedded runtimes, action frameworks, and CRDT substrates that most shape Agent OS. Each system states what it is, the one to three ideas that matter to us, and an explicit takeaway for the Fuchsia-fork product line: what to adopt, what to study, and where our APP-LAST, local-first, agent-native model deliberately diverges."
---

# System Survey: What Agent OS Takes From Twenty-One Prior Operating Systems and Data Substrates

> Agent OS is a fork of Fuchsia carrying a new product model on top of an existing capability kernel. This document surveys the systems whose mechanisms we borrow or study, keeps each entry to the one to three ideas that matter to us, and ends every entry with a concrete takeaway. It is a landscape reference, not a monograph; deeper treatments live in AOS-RES-001 and the architecture set.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [How to Read an Entry](#how-to-read)
- [Kernel and capability lineage](#kernel-lineage)
  - [Fuchsia and Zircon](#fuchsia)
  - [seL4](#sel4)
  - [Genode and Sculpt](#genode)
  - [Redox](#redox)
  - [MINIX 3](#minix3)
  - [QNX Neutrino](#qnx)
  - [KeyKOS, EROS, and CapROS](#keykos)
  - [Barrelfish](#barrelfish)
- [Rust-native and language-enforced systems](#rust-native)
  - [Tock](#tock)
  - [Hubris](#hubris)
  - [Theseus](#theseus)
- [Mobile platforms and coherent native systems](#mobile-native)
  - [postmarketOS](#postmarketos)
  - [GrapheneOS](#grapheneos)
  - [Haiku](#haiku)
  - [Plan 9 and Inferno](#plan9)
  - [HarmonyOS NEXT](#harmonyos)
- [Action catalogs and agent surfaces](#action-catalogs)
  - [Apple App Intents](#app-intents)
  - [Android AppFunctions](#appfunctions)
- [Local-first entity and CRDT substrates](#crdt-substrates)
  - [Anytype](#anytype)
  - [Automerge](#automerge)
  - [Loro](#loro)
- [Machine-Readable Landscape List](#machine-list)
- [Portal Wiring Note](#portal-wiring)
- [References](#references)
- [Related Documents](#related)

<a id="purpose-and-scope"></a>

## Purpose and Scope

This survey covers twenty-one systems (grouped as on the roadmap: some entries fold a lineage, such as KeyKOS/EROS/CapROS or Plan 9/Inferno). It exists to make our borrowing explicit and defensible: for each system we name what we take, what we merely study, and where the Agent OS product model — durable entities instead of app silos, local system authority, one typed action catalog, inspectable agents — parts ways with the source.

Two framing constraints hold throughout. First, Agent OS does **not** own a microkernel; it forks Fuchsia and inherits Zircon. Every "capabilities" or "microkernel" lesson below is read as *how a fork should use the mechanism it already has*, not as a mandate to write a kernel. Second, the survey is deliberately shallow per entry. Deeper prior-art analysis of the capability and CRDT literature is in [AOS-RES-001](AOS-RES-001.md); the Fuchsia-specific lessons are in [RES-012](RES-012-fuchsia-spec-lessons.md); the source register is in [AOS-RES-002](AOS-RES-002.md).

<a id="how-to-read"></a>

## How to Read an Entry

Each entry has three parts: **what it is** (one or two sentences), **what matters to us** (the one to three transferable ideas), and a bold **Takeaway for Agent OS** line. Non-obvious factual claims carry a bracketed reference number resolving to the [References](#references) section; every reference was fetched on the baseline date. Where a system already appears elsewhere in the corpus, the entry cross-links the relevant AOS document.

<a id="kernel-lineage"></a>

## Kernel and capability lineage

<a id="fuchsia"></a>

### Fuchsia and Zircon

**What it is.** Fuchsia is Google's capability-based operating system built on the Zircon microkernel, with a component framework, the FIDL interface definition language, driver framework, and an update architecture. It is the tree Agent OS forks.

**What matters to us.** Components interact only through *capabilities* — a resource plus a set of rights — and capabilities are routed explicitly from a provider's outgoing directory into a consumer's namespace by the component framework [1]. FIDL is the typed IPC contract: it transports data and handles over Zircon channels, and handles carry a required object type and minimum rights set that the runtime validates [2]. This is exactly the substrate our product model wants: typed contracts, least authority, and no ambient access.

**Takeaway for Agent OS.** Fuchsia is not a system we "learn from" at arm's length — it is our base. We take Zircon, components, FIDL, and driver framework AS-IS and build the entity/action/agent product on top; the divergence is entirely above the kernel, in the product model, not in the mechanism. See [RES-012](RES-012-fuchsia-spec-lessons.md) and [AOS-ARCH-002](../architecture/AOS-ARCH-002.md).

<a id="sel4"></a>

### seL4

**What it is.** seL4 is a third-generation L4-family microkernel (about 8,700 lines of C plus assembler) whose functional correctness, from an abstract specification down to the C implementation, has been machine-checked in Isabelle/HOL — the first such proof for a general-purpose OS kernel [3][4].

**What matters to us.** Two ideas. First, capabilities as the sole authorization primitive, proven sufficient to reason about isolation. Second, and more useful to a fork that will never re-verify a kernel: seL4 shows what an *assurance argument* looks like — refinement from spec to code, and later information-flow proofs — which is the shape our formal-models roadmap should imitate at the contract boundary rather than the whole kernel.

**Takeaway for Agent OS.** We do not adopt seL4 as our kernel (we are on Zircon), but we adopt its discipline: treat the security-relevant contracts (capability routing, action safety) as objects with an explicit assurance argument. seL4 is the benchmark our [AOS-ARCH-019](../architecture/AOS-ARCH-019.md) assurance roadmap measures ambition against. Prior treatment in [AOS-RES-001](AOS-RES-001.md).

<a id="genode"></a>

### Genode and Sculpt

**What it is.** Genode is an open-source framework for building component-based operating systems on a choice of microkernels (including seL4), organized around capability-based security, least authority, and sandboxing; Sculpt is the general-purpose OS the Genode developers build with it and use daily [5][6].

**What matters to us.** Genode's central idea is a strict *recursive* component tree: every component gets exactly the resources its parent grants, and trust flows down that tree. Sculpt proves this is livable as a real interactive desktop, not just a lab kernel — a working existence proof that heavily sandboxed, capability-routed userlands can be a daily driver.

**Takeaway for Agent OS.** Genode is the closest existing model for how our userland *above* Zircon should be structured: a routed component tree with explicit resource budgets, and a UI that surfaces those grants. Sculpt is our proof that "everything sandboxed and capability-routed" does not have to feel like a research toy. Study, don't fork. See [RES-012](RES-012-fuchsia-spec-lessons.md).

<a id="redox"></a>

### Redox

**What it is.** Redox is a Unix-like, microkernel-based operating system written in Rust, with a userspace of daemons and drivers; its unifying abstraction is the *scheme*, a URL-like namespace where the kernel translates `open`/`read`/`write` on user-space schemes into packets delivered to a daemon over a socket [7].

**What matters to us.** Two things: a mature Rust-native kernel-and-userspace ecosystem (crates, toolchain experience, incremental hardware support), and the scheme abstraction as a clean way to expose *anything* as a namespaced resource implemented by an isolated user-space provider.

**Takeaway for Agent OS.** Redox is our reference for Rust-in-the-OS ergonomics and for the "provider behind a namespace" pattern that maps onto our typed provider catalog. We stay on Zircon/FIDL rather than adopting schemes, but Redox informs how our own providers and device-service contracts feel to write. Covered in [AOS-RES-001](AOS-RES-001.md) and [AOS-ARCH-020](../architecture/AOS-ARCH-020.md).

<a id="minix3"></a>

### MINIX 3

**What it is.** MINIX 3 is a microkernel OS (kernel under ~4,000 lines) built for reliability: device drivers and system servers run as isolated user-mode processes, and a *reincarnation server* monitors them and automatically restarts any that crash, hang, or exit [10].

**What matters to us.** The single idea worth stealing is self-healing at the service layer: a supervisory process detects a dead driver by heartbeat or exit and restarts it without taking down the system, because message-passing isolation stops the fault from propagating [10].

**Takeaway for Agent OS.** Isolated user-space drivers plus a restart-on-fault supervisor is exactly the resilience posture we want for our driver and service layer on Zircon (which already supports out-of-process drivers). MINIX 3 is the canonical citation for why that architecture pays off in uptime. See [AOS-ARCH-007](../architecture/AOS-ARCH-007.md) and [AOS-RES-001](AOS-RES-001.md).

<a id="qnx"></a>

### QNX Neutrino

**What it is.** QNX Neutrino is a commercial real-time microkernel OS widely deployed in automotive and embedded systems, running only scheduling, IPC, and interrupt handling in the kernel while file systems and drivers live in user space [11].

**What matters to us.** QNX is the industrial proof that synchronous message-passing microkernels meet hard real-time latency: the kernel is fully preemptible even mid message-pass and holds off preemption only for sub-microsecond intervals [11]. It shows the microkernel tax is survivable at production scale over decades.

**Takeaway for Agent OS.** QNX is evidence, not architecture we import: it answers the "won't a microkernel be too slow / too fragile for a real product" objection with a shipping counterexample in safety-critical markets. We cite it to defend the fork's mechanism choices. Prior coverage in [AOS-RES-001](AOS-RES-001.md).

<a id="keykos"></a>

### KeyKOS, EROS, and CapROS

**What it is.** A lineage of pure capability systems with *orthogonal persistence*: KeyKOS (originally GNOSIS, mid-1970s, for IBM S/370) [14a]; EROS, its 1990s university successor [14b]; and CapROS, the current EROS descendant — a small, secure, real-time, pure-capability OS whose data and processes persist automatically across reboots [14c].

**What matters to us.** Two ideas ahead of their time: (1) authority is *only* capabilities, no ambient rights, and (2) transparent persistence — the entire system state, including running processes, is periodically checkpointed so a reboot resumes rather than restarts. The second idea reframes "storage" as continuous system state rather than a filesystem apps write to.

**Takeaway for Agent OS.** The pure-capability stance validates our least-authority contract model. More interesting is orthogonal persistence as a lens on our entity graph and history: durable objects and a semantic event log are, in effect, a product-level restatement of "the system's state is the durable thing, not app files." Study for the persistence model in [AOS-ARCH-009](../architecture/AOS-ARCH-009.md); prior mention in [AOS-RES-001](AOS-RES-001.md).

<a id="barrelfish"></a>

### Barrelfish

**What it is.** Barrelfish is a research OS from ETH Zurich and Microsoft Research introducing the *multikernel* model: each core runs its own kernel, cores share no memory, and OS state is replicated and kept consistent by explicit message passing rather than shared-memory locking [18].

**What matters to us.** The transferable idea is architectural, not literal: designing the OS as a *distributed system of replicas that agree by messages* scales better across heterogeneous, many-core hardware and decouples the OS from a specific memory architecture [18]. It is the same instinct as CRDT-based sync, applied to cores instead of devices.

**Takeaway for Agent OS.** We are not building a multikernel, but Barrelfish's "treat internal state as replicated and reconcile by messages" mindset is the conceptual sibling of our device-to-device CRDT sync. Cite it as prior art for why message-passing replication is a first-class design stance, not a fallback. See [AOS-RES-001](AOS-RES-001.md).

<a id="rust-native"></a>

## Rust-native and language-enforced systems

<a id="tock"></a>

### Tock

**What it is.** Tock is an embedded OS for microcontrollers, written in Rust, that isolates untrusted third-party apps on Cortex-M and RISC-V. Inside the kernel it uses *capsules* — safe-Rust components that cannot use `unsafe`, giving language-enforced isolation with no runtime cost; in user space it uses hardware-protected processes plus *grants*, memory the kernel borrows from a process's own address space to hold per-process kernel state [15].

**What matters to us.** Two mechanisms: language-level isolation for trusted-but-untrusted-in-effect kernel extensions (capsules), and the grant pattern that charges dynamic kernel state to the requesting process's memory instead of a shared pool — bounding one client's demands so it cannot exhaust the kernel.

**Takeaway for Agent OS.** Capsules validate "compiler-enforced isolation instead of a process boundary" for our safe-Rust extension points; grants are a clean resource-accounting idea for any place we hold per-client state on behalf of agents or providers. Reference architecture in [AOS-RES-001](AOS-RES-001.md).

<a id="hubris"></a>

### Hubris

**What it is.** Hubris is Oxide Computer's memory-protected, message-passing RTOS for deeply embedded microcontrollers, written in Rust. Its defining constraints: a fixed set of tasks defined entirely at build time, zero dynamic allocation and no runtime task creation, and a tiny (~2,000-line) kernel; a separate *supervisor* task, not the kernel, restarts faulted tasks. Its companion debugger Humility inspects a live system or a captured dump [16].

**What matters to us.** Three ideas: determinism by construction (everything allocated at build time), fault recovery pushed *out* of the kernel into a supervisor policy (echoing MINIX's reincarnation server but as an ordinary task), and first-class introspection — the debugger is designed alongside the OS so a running system is inspectable.

**Takeaway for Agent OS.** The supervisor-as-task pattern and the "inspectability is a product feature, not an afterthought" stance map directly onto our agent-runtime goals: inspectable plans, execution receipts, and recoverable failures. Hubris is the modern Rust proof point for out-of-kernel recovery. See [AOS-ARCH-010](../architecture/AOS-ARCH-010.md).

<a id="theseus"></a>

### Theseus

**What it is.** Theseus is a research OS (OSDI 2020) built on an *intralingual* design: it runs all code — including safe-Rust user applications — at a single privilege level in a single address space, and leans on the Rust compiler to enforce OS invariants and take over resource bookkeeping, thereby minimizing "state spill" between components [17].

**What matters to us.** The core insight is that pushing resource management into the language/compiler reduces the state the OS itself must track, which strengthens isolation and makes components cheaply replaceable at runtime. It is the most aggressive statement of "let the type system be the kernel's enforcement mechanism."

**Takeaway for Agent OS.** Theseus is a research lens, not a shippable base (single-address-space, single-privilege is incompatible with a phone product on Zircon). But its intralingual argument sharpens where *we* should let Rust's type system carry safety guarantees in our services rather than duplicating checks at runtime. Study only; noted in [AOS-RES-001](AOS-RES-001.md).

<a id="mobile-native"></a>

## Mobile platforms and coherent native systems

<a id="postmarketos"></a>

### postmarketOS

**What it is.** postmarketOS is a real Linux distribution for phones (based on Alpine) whose central goal is to run as many devices as possible on the *mainline* upstream Linux kernel instead of vendor Android forks, aiming at a ten-year device lifecycle; it supported on the order of 700+ device models by early 2026 [8].

**What matters to us.** Not the substrate (it keeps Linux/POSIX, which our native targets do not) but the *device-porting knowledge and community hardware evidence*: which phones have documented, mainline-supportable hardware, and the practical playbook for bring-up on donor devices.

**Takeaway for Agent OS.** postmarketOS is our best public map of portable, well-documented mobile hardware and the bring-up effort each device demands — directly feeding the demo-brick and donor-device sourcing work. See the hardware survey [AOS-RES-011](RES-011-interim-hardware-market-survey.md), which already leans on it.

<a id="grapheneos"></a>

### GrapheneOS

**What it is.** GrapheneOS is a hardened, de-Googled Android distribution for Pixel hardware. Its notable engineering: `hardened_malloc`, a security-focused allocator that segregates allocation classes into separate arenas and uses guard pages and canaries (and Memory Tagging Extension where available) so an overflow cannot corrupt adjacent state; and full verified boot with a locked bootloader on a custom OS, backed by the Pixel secure element [9].

**What matters to us.** Two things: concrete, shippable exploit-mitigation engineering (the allocator, MTE usage, attack-surface reduction), and the operational reality that strong mobile security depends on hardware that permits re-locking verified boot on a custom OS with a long firmware-update window — which is precisely why Pixel is the platform.

**Takeaway for Agent OS.** GrapheneOS is our security-engineering reference and our argument for why platform choice is a security decision, not a convenience one. It remains Android-based and app-first, so we diverge on the product model; we take the mitigations and the hardware-requirements discipline. Discussed in the wider-lens survey (`agent-os-wider-lens.md`) and [AOS-ARCH-012](../architecture/AOS-ARCH-012.md).

<a id="haiku"></a>

### Haiku

**What it is.** Haiku is an open-source, community-built successor to BeOS, binary-compatible with it, whose API is organized into coherent "kits." Notably, it inherits BeOS *replicants*: widgets that are live parts of one application which the user can drag out onto the desktop and keep running as standalone surfaces [12].

**What matters to us.** Two lessons: the value of a *coherent, consistent native API* and long-lived system identity (a system that feels designed as one thing), and the replicant idea — application functionality that detaches from its host and lives as a reusable surface elsewhere.

**Takeaway for Agent OS.** Replicants are an early, concrete instance of our "malleable views / transclusion / reusable interaction contracts" goal — UI that is not trapped inside its owning app. Haiku is the citation for both the coherence argument and the detachable-surface pattern. Study; see the landscape framing in `agent-os-wider-lens.md`.

<a id="plan9"></a>

### Plan 9 and Inferno

**What it is.** Plan 9 from Bell Labs is the successor to Unix that took "everything is a file" to its conclusion: windows, network connections, processes, graphics, and authentication are all files under per-process *namespaces*, and every service speaks one protocol, *9P*, so there are almost no custom APIs [13]. Inferno is its descendant, sharing the namespace model and the Styx/9P protocol.

**What matters to us.** Three ideas: per-process namespaces (each process sees its own composed view of resources), one uniform protocol instead of a proliferation of bespoke interfaces, and resources-as-composable-files. Together they are the cleanest historical statement of "system-wide conceptual consistency."

**Takeaway for Agent OS.** Plan 9 is the philosophical ancestor of our "one typed action/provider catalog shared by UI, CLI, scripts, and agents": the payoff of a single uniform interface over many custom APIs. We express it with typed FIDL contracts and providers rather than 9P files, but the conceptual-consistency goal is the same. Study; noted in `agent-os-wider-lens.md`.

<a id="harmonyos"></a>

### HarmonyOS NEXT

**What it is.** HarmonyOS NEXT is Huawei's from-scratch distributed OS (dropping the Android runtime) built on a microkernel, with the ArkTS language (a TypeScript superset), ArkUI, and *atomic services* — installable-free, task-sized app units meant to move across a user's devices [19].

**What matters to us.** Two ideas: the distributed-by-default stance (one logical experience spanning phone, watch, tablet, PC) and *atomic services* as sub-app, task-granular units — a step away from the monolithic-app boundary toward smaller, composable capabilities, which rhymes with our entity/action model.

**Takeaway for Agent OS.** HarmonyOS is the largest current commercial bet against the app-silo model and for distributed, task-granular software. We watch it as a market and product signal — especially atomic services as a mainstream attempt to shrink the app boundary — while noting its ecosystem is closed and vertically Huawei. Study; see `agent-os-wider-lens.md`.

<a id="action-catalogs"></a>

## Action catalogs and agent surfaces

<a id="app-intents"></a>

### Apple App Intents

**What it is.** App Intents is Apple's framework for exposing an app's core actions and data types to the system — Siri, Spotlight, Shortcuts, widgets, and Apple Intelligence. Apps declare *App Intents* (actions) and *App Entities* (typed, queryable domain objects with an ID and a query interface) so the system can discover, reason about, and invoke them [20].

**What matters to us.** This is the closest mainstream analog to our central move: making actions and entities *first-class, typed, system-visible declarations* rather than buried inside app UI. The AppEntity/query design — entities the assistant can enumerate, match, and reference by ID — is exactly the entity-catalog shape we want.

**Takeaway for Agent OS.** App Intents validates the typed-action-catalog direction and gives us a concrete, well-designed API to learn from — but it is opt-in, per-app, and layered onto an app-first OS. Agent OS makes the catalog the *system's* native surface (APP-LAST), not an add-on each app must remember to populate. Cross-referenced in `prior-art-atlas.md` and the landscape data (`portal/landscape.js`). See [AOS-ARCH-010](../architecture/AOS-ARCH-010.md).

<a id="appfunctions"></a>

### Android AppFunctions

**What it is.** AppFunctions is Android's (Jetpack + platform, Android 16+) mechanism for apps to expose functions as tools for agents and assistants such as Gemini — effectively turning each app into an on-device tool provider. Callers discover and invoke indexed functions via `AppFunctionManager`, gated by an `EXECUTE_APP_FUNCTIONS` permission; as of mid-2026 the Gemini integration was still in private preview [21].

**What matters to us.** The explicit framing of apps as *on-device tool/MCP-style servers* for agents, with a permission gate on execution, is the Android-side statement of the same idea as App Intents, aimed squarely at agent invocation.

**Takeaway for Agent OS.** AppFunctions confirms the industry is converging on "typed, discoverable, permission-gated app actions for agents" — but bolted onto a fragmented, app-first platform and arriving late/preview. It is validation of our thesis and a warning: retrofitting an action catalog onto an app-silo OS is slow and partial, which is the gap Agent OS exists to close by making it native. Cross-referenced in `prior-art-atlas.md`; see [AOS-ARCH-010](../architecture/AOS-ARCH-010.md).

<a id="crdt-substrates"></a>

## Local-first entity and CRDT substrates

The three substrates below all descend from the same 2019 "local-first software" argument by Kleppmann et al. at Ink & Switch: treat the user's local copy as primary, and use CRDTs so devices can edit concurrently and merge without a central server [25]. That essay is the conceptual root for our entity-graph, history, and sync layer.

<a id="anytype"></a>

### Anytype

**What it is.** Anytype is a local-first, privacy-focused knowledge workspace where *everything is a typed object* (note, task, person, book) with relations, forming a personal graph, synced peer-to-peer via its own CRDT-based `any-sync` protocol with client-side end-to-end encryption so no coordination node holds plaintext [22].

**What matters to us.** Two ideas central to our product: (1) the object/entity-first data model — typed objects with relations instead of app-owned documents, enabling relational queries across a personal graph — and (2) CRDT peer-to-peer sync with zero-knowledge encryption, i.e. multi-device sync where the sync server never sees content.

**Takeaway for Agent OS.** Anytype is the closest shipping product to our entity-graph vision at the application layer, and a proof that typed-object-first plus encrypted CRDT sync is buildable and usable today. We take the model as validation for [AOS-ARCH-009](../architecture/AOS-ARCH-009.md) (entity graph, history, sync) while building it at the *system* level rather than as one app. See `agent-os-wider-lens.md`.

<a id="automerge"></a>

### Automerge

**What it is.** Automerge is a mature CRDT library providing JSON-like documents that merge concurrent edits automatically without a central server, plus a compact binary storage format that can retain full editing history and a transport-agnostic sync protocol. It has JavaScript and Rust (WASM/C-API) implementations and was built explicitly to support local-first applications [23].

**What matters to us.** Automerge is the reference implementation of "a database for local-first apps": automatic merge, offline edits, full-history storage, and a per-document sync protocol you can run over any transport. Its Rust core with a C API makes it embeddable outside a JS runtime — relevant to a native OS.

**Takeaway for Agent OS.** Automerge is a primary candidate/reference for our sync-and-history engine: it demonstrates that retaining complete history (needed for our semantic event log with undo/compensation) is feasible, and its Rust core suits a native stack. Evaluate as build-or-borrow input for [AOS-ARCH-009](../architecture/AOS-ARCH-009.md). Noted in [AOS-RES-002](AOS-RES-002.md).

<a id="loro"></a>

### Loro

**What it is.** Loro is a newer high-performance CRDT library (Rust, with JS/WASM and Swift bindings) optimized for memory, CPU, and load time. It offers a rich set of containers — `MovableList`, LWW `Map`, `MovableTree`, and rich `Text` using the Fugue algorithm to reduce interleaving anomalies — plus time-travel through document history and columnar encoding for fast loading [24].

**What matters to us.** Two things beyond Automerge's baseline: (1) a *movable tree* CRDT, which is the right primitive for a hierarchical entity graph where objects get re-parented concurrently, and (2) a serious focus on performance and fast document loading, which matters on a phone.

**Takeaway for Agent OS.** Loro is the performance-and-data-structure-forward alternative to Automerge for our sync layer; its movable-tree and rich-text containers map more directly onto a re-parentable entity graph, and its Rust core fits the native target. Evaluate head-to-head with Automerge for [AOS-ARCH-009](../architecture/AOS-ARCH-009.md). Noted in [AOS-RES-002](AOS-RES-002.md).

<a id="machine-list"></a>

## Machine-Readable Landscape List

A compact list for downstream tooling (e.g. future portal wiring). Fields: `key | name | category | primary takeaway | relation`. `relation` is one of `fork-base`, `adopt`, `study`, `evaluate`, `evidence`.

```
fuchsia      | Fuchsia / Zircon        | capability-kernel   | our fork base: capabilities, components, FIDL | fork-base
sel4         | seL4                    | verified-kernel     | assurance-argument discipline at contracts   | study
genode       | Genode / Sculpt         | capability-userland | routed component tree as a daily driver      | study
redox        | Redox                   | rust-os             | Rust-native OS ergonomics; provider namespaces | study
minix3       | MINIX 3                 | reliable-microkernel| restart-on-fault driver supervision          | adopt
qnx          | QNX Neutrino            | rt-microkernel      | microkernel proven at production real-time    | evidence
keykos       | KeyKOS / EROS / CapROS  | capability-persist  | pure capabilities; orthogonal persistence     | study
barrelfish   | Barrelfish              | multikernel         | replicate-state-and-reconcile-by-messages     | study
tock         | Tock                    | rust-embedded       | capsules; grant memory accounting             | study
hubris       | Hubris                  | rust-embedded       | out-of-kernel supervisor; inspectability      | adopt
theseus      | Theseus                 | intralingual-os     | compiler-enforced OS invariants               | study
postmarketos | postmarketOS            | mobile-linux        | device-porting and hardware evidence          | evidence
grapheneos   | GrapheneOS              | hardened-android    | exploit mitigations; hardware security reqs   | adopt
haiku        | Haiku                   | coherent-desktop    | API coherence; detachable replicant surfaces  | study
plan9        | Plan 9 / Inferno        | uniform-resources   | one uniform interface over bespoke APIs       | study
harmonyos    | HarmonyOS NEXT          | distributed-os      | atomic services; distributed-by-default       | study
appintents   | Apple App Intents       | action-catalog      | typed system-visible actions and entities     | adopt
appfunctions | Android AppFunctions    | action-catalog      | apps as permission-gated agent tools          | adopt
anytype      | Anytype                 | local-first-app     | typed-object graph; encrypted CRDT sync       | evaluate
automerge    | Automerge               | crdt-lib            | full-history local-first sync engine          | evaluate
loro         | Loro                    | crdt-lib            | movable-tree CRDT; performance-first          | evaluate
```

<a id="portal-wiring"></a>

## Portal Wiring Note

The public portal renders the `#landscape` view from a **hardcoded** `OS_LANDSCAPE` array in `portal/landscape.js` (and a hand-placed scatter of `<i style="--x;--y">` points in the `landscape()` function). It currently lists only eight systems (Fuchsia, seL4, Redox, Genode, postmarketOS, GrapheneOS, Haiku, Plan 9 / Inferno) plus the Agent OS anchor point. This document does **not** edit the portal.

To surface this fuller survey in the portal, a follow-up task would:

1. Extend the `OS_LANDSCAPE` array in `portal/landscape.js` with the remaining systems (MINIX 3, QNX, KeyKOS/EROS/CapROS, Barrelfish, Tock, Hubris, Theseus, HarmonyOS, App Intents, AppFunctions, Anytype, Automerge, Loro), reusing the existing `[eyebrow, title, description, pill]` tuple shape. The [Machine-Readable Landscape List](#machine-list) above is pre-shaped to seed those tuples.
2. Add corresponding scatter-plot points (`--x`/`--y`) in the `landscape()` map markup, placing action-catalog and CRDT systems toward the "New native model / Product system" quadrant.
3. Optionally add a deep-link from the landscape view to this document (portal has no per-system detail page today; that would be new UI, not a data edit).

No portal change is in scope here; this note is the handoff for whoever wires it.

<a id="references"></a>

## References

All URLs accessed 2026-07-13.

1. Fuchsia — Introduction to Fuchsia components. https://fuchsia.dev/fuchsia-src/concepts/components/v2/introduction
2. Fuchsia — FIDL language specification. https://fuchsia.dev/fuchsia-src/reference/fidl/language/language
3. Klein et al. — Comprehensive Formal Verification of an OS Microkernel (seL4). https://sel4.systems/Research/pdfs/comprehensive-formal-verification-os-microkernel.pdf
4. Klein et al. — seL4: Formal Verification of an OS Kernel (SOSP 2009). https://www.sigops.org/s/conferences/sosp/2009/papers/klein-sosp09.pdf
5. Genode OS Framework — project site and Foundations documentation. https://genode.org/
6. Sculpt OS on seL4 — seL4 Summit 2025 slides. https://sel4.org/Summit/2025/slides/sculpt-os.pdf ; Genode overview — https://en.wikipedia.org/wiki/Genode
7. The Redox Operating System — book (architecture, schemes). https://doc.redox-os.org/book/
8. postmarketOS — project site and mainline-kernel goal. https://postmarketos.org/ ; https://en.wikipedia.org/wiki/PostmarketOS
9. GrapheneOS — Features overview. https://grapheneos.org/features ; hardened_malloc — https://github.com/GrapheneOS/hardened_malloc
10. Herder et al. — A Lightweight Method for Building Reliable Operating Systems (MINIX 3). http://www.minix3.org/doc/reliable-os.pdf ; https://en.wikipedia.org/wiki/Minix_3
11. QNX — A small microkernel and message passing (Neutrino getting-started docs). https://www.qnx.com/developers/docs/7.1//com.qnx.doc.neutrino.getting_started/topic/s1_msg_Microkernel_and_messages.html
12. Haiku Project — Replicants: More application than an application. https://www.haiku-os.org/documents/dev/replicants_more_application_than_an_application/ ; https://en.wikipedia.org/wiki/Haiku_(operating_system)
13. Plan 9 from Bell Labs — Overview. https://9p.io/plan9/about.html ; 9P protocol — https://en.wikipedia.org/wiki/9P_(protocol)
14. Capability-persistence lineage: (a) KeyKOS — https://en.wikipedia.org/wiki/KeyKOS ; (b) EROS (microkernel) — https://en.wikipedia.org/wiki/EROS_(microkernel) ; (c) CapROS — https://github.com/capros-os/capros
15. Tock Embedded Operating System — Design (capsules, grants). https://www.tockos.org/documentation/design/ ; The Tock Book — https://book.tockos.org/doc/overview
16. Oxide Computer — Hubris and Humility. https://oxide.computer/blog/hubris-and-humility ; Hubris reference — https://hubris.oxide.computer/
17. Boos et al. — Theseus: an Experiment in Operating System Structure and State Management (OSDI 2020). https://www.usenix.org/system/files/osdi20-boos.pdf ; Safe-language OS principles — https://www.theseus-os.com/Theseus/book/design/idea.html
18. Baumann et al. — The Multikernel: A New OS Architecture for Scalable Multicore Systems (Barrelfish, SOSP 2009). https://people.inf.ethz.ch/troscoe/pubs/sosp09-barrelfish.pdf
19. HarmonyOS NEXT (HarmonyOS 5) — overview and ArkTS. https://en.wikipedia.org/wiki/HarmonyOS_NEXT ; https://en.wikipedia.org/wiki/HarmonyOS
20. Apple — App Intents framework documentation; AppEntity. https://developer.apple.com/documentation/appintents ; https://developer.apple.com/documentation/appintents/appentity
21. Android Developers — Overview of AppFunctions. https://developer.android.com/ai/appfunctions
22. Anytype — any-sync: open-source local-first, peer-to-peer, end-to-end-encrypted CRDT protocol. https://github.com/anyproto/any-sync
23. Automerge — project site and repository (CRDT, local-first, sync protocol). https://automerge.org/ ; https://github.com/automerge/automerge
24. Loro — CRDT library for local-first and collaboration (MovableTree, rich text, columnar encoding). https://loro.dev/ ; https://github.com/loro-dev/loro
25. Kleppmann, Wiggins, van Hardenberg, McGranaghan — Local-first software: you own your data, in spite of the cloud (Ink & Switch, 2019). https://www.inkandswitch.com/essay/local-first/

<a id="related"></a>

## Related Documents

- [Prior Art and Literature Atlas](AOS-RES-001.md)
- [Hardware Evidence and Source Register](AOS-RES-002.md)
- [Interim Hardware Market Survey and Demo BOM Sourcing](RES-011-interim-hardware-market-survey.md)
- [Fuchsia spec lessons](RES-012-fuchsia-spec-lessons.md)
- Wider-lens landscape survey — `agent-os-wider-lens.md` (same directory)
- Prior-art atlas (product patterns) — `prior-art-atlas.md` (same directory)
- [Microkernel Specification](../architecture/AOS-ARCH-002.md)
- [Capabilities and IPC](../architecture/AOS-ARCH-004.md)
- [System Services](../architecture/AOS-ARCH-007.md)
- [Storage, Entity Graph, History, and Sync](../architecture/AOS-ARCH-009.md)
- [Agent Runtime and Action Safety](../architecture/AOS-ARCH-010.md)
- [Security Architecture and Threat Model](../architecture/AOS-ARCH-012.md)
- [Formal Models and Assurance Roadmap](../architecture/AOS-ARCH-019.md)
- [Portable Device-Service Contracts](../architecture/AOS-ARCH-020.md)
- Portal landscape data (for future wiring) — `portal/landscape.js`

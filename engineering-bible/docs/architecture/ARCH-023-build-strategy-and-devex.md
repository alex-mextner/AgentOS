---
id: "AOS-ARCH-023"
title: "Build Strategy and Developer Experience for the Fuchsia Fork"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Architecture Council / Build & Infra"
audience: "Engineering"
summary: "How we neutralize the heavy Fuchsia full-tree build: a two-tier model where day-to-day product work uses the Bazel SDK against prebuilt platform artifacts (no platform build at all), and only kernel/driver deltas require the full GN/ninja tree; incremental ninja + ccache make the full tree a first-build-only cost; Apple Silicon guidance and prebuilt-bundle emulator path included."
---

# Build Strategy and Developer Experience for the Fuchsia Fork

> The scary sentence — "the Fuchsia build is heavy, you need a dedicated Linux box" — is true only for the **full platform tree**, and only for the **first** build. Most of our engineering (the entire product layer) never needs a platform build at all: it compiles in seconds-to-minutes against prebuilt platform artifacts via the SDK. This document makes that split normative.

## Table of Contents

- [Problem Statement](#problem)
- [Facts (verified)](#facts)
- [Two-Tier Build Model (normative)](#two-tier)
- [Tier 1: SDK-First Product Development](#tier1)
- [Tier 2: Full-Tree Platform Work](#tier2)
- [Incremental Builds and Caching](#incremental)
- [Apple Silicon (M-series) Guidance](#apple)
- [Try-It-Tonight Path (no build)](#tonight)
- [Requirements](#requirements)
- [Risks and Open Questions](#risks)
- [Related Documents](#related)

<a id="problem"></a>

## Problem Statement

The full Fuchsia tree builds through GN/ninja/fx, officially on x86-64 Linux (Debian-based), and the first build needs serious disk (~200 GB working set), RAM, and cores. Taken naively, that means every engineer needs a build server and every iteration costs a platform build. That would be a real velocity killer. This document exists because the naive reading is wrong: the platform build is a **rare, cacheable, CI-owned cost**, not the daily loop.

<a id="facts"></a>

## Facts (verified against fuchsia.dev)

- **Full-tree** host support: **x86-64 Linux (Debian-based)** only; Windows unsupported; macOS is not a supported full-tree build host (any CPU).
- **SDK** host support is broader: the Bazel-based SDK builds components/drivers **natively on macOS arm64** (`darwin_arm64` Bazel config, confirmed in the Pigweed Fuchsia SDK workflow); `ffx` and SDK core are published for macOS via CIPD. This is the key fact that makes an Apple-Silicon workstation viable.
- **ccache** is officially supported for the full tree ("enabled automatically if CCACHE_DIR refers to an existing directory") and caches C/C++ artifacts across builds.
- GN/ninja is **incremental by design**: after the first build, `fx build` recompiles only changed targets.
- The **Fuchsia SDK (Bazel-based)** exists precisely so components, drivers, and even product assembly happen **out-of-tree against prebuilt platform artifacts** — the IDK/SDK "can be used to develop Fuchsia components without checking out Fuchsia's source code or using Fuchsia's own build system," and Fuchsia itself converged on Bazel+SDK as the well-lit path (RFC-0139, RFC-0186).
- **Prebuilt product bundles** are downloadable (`ffx product download`) and boot directly in the emulator — trying Fuchsia in FEMU requires **no build at all**.
- FEMU supports ARM64 hosts including Apple Silicon; the **qemu-arm64 target is documented as "very limited and not recommended"**, so arm64-target work carries friction; x64 remains the well-lit target.

<a id="two-tier"></a>

## Two-Tier Build Model (normative)

| Tier | Who | What builds | Where | Cost |
| --- | --- | --- | --- | --- |
| **Tier 1 — Product (default)** | Product-layer engineers (entity/agent, shell, services, apps) | Only our components, via Bazel SDK against prebuilt platform | Any decent laptop | Seconds–minutes |
| **Tier 2 — Platform (exception)** | Kernel/driver/platform-delta engineers + CI | The forked Fuchsia tree via fx/GN/ninja | Dedicated x86-64 Linux builder + CI | First build: hours; incremental: minutes |

Rules:
1. Product-layer code MUST build with the SDK workflow and MUST NOT require a platform checkout.
2. The fork pins an upstream revision; CI produces and publishes platform artifacts (IDK/SDK + product bundles) for Tier 1 to consume.
3. Only changes below the platform contract (kernel deltas, board drivers, platform patches) touch Tier 2.
4. CI is the canonical Tier-2 builder; local Tier-2 builds are for platform engineers only.

This is the same decoupling as substrate/platform/shell, applied to the build: the contract line is the SDK.

<a id="tier1"></a>

## Tier 1: SDK-First Product Development

Bootstrap (per sdk-samples/getting-started):

```bash
git clone https://fuchsia.googlesource.com/sdk-samples/getting-started fuchsia-getting-started --recurse-submodules
cd fuchsia-getting-started
scripts/bootstrap.sh          # fetches the Bazel-based SDK toolchain
tools/ffx sdk version         # verify
tools/ffx product download <bundle>   # prebuilt platform image
tools/ffx emu start           # boot the emulator from prebuilts
bazel build //src/...         # build only OUR components
```

Iteration on a component is a normal Bazel build: seconds-to-minutes, cached, hermetic. Our repo will vendor the same Bazel SDK rules and point them at OUR CI-published platform artifacts once the fork exists; until then, upstream bundles are the substrate for product-layer development — which is exactly the Track-A plan.

<a id="tier2"></a>

## Tier 2: Full-Tree Platform Work

```bash
curl -s "https://fuchsia.googlesource.com/fuchsia/+/HEAD/scripts/bootstrap?format=TEXT" | base64 --decode | bash
cd fuchsia
export CCACHE_DIR=$HOME/.ccache   # enables ccache automatically
fx set minimal.x64 --release       # or workbench_eng.x64 / our product.board
fx build                           # FIRST build: heavy. After: incremental.
fx ffx emu start --headless        # boot what you built
```

Sizing the builder: ≥16 modern cores, 64 GB RAM, ≥250 GB NVMe free. On such a box the first `minimal.x64` build is on the order of **1–3 hours**; a beefier CI machine (32–96 cores) brings it to tens of minutes. These are estimates from community experience, not vendor promises; our own CI will record real numbers as evidence.

<a id="incremental"></a>

## Incremental Builds and Caching

- **ninja incrementality**: `fx build` after a small change rebuilds only affected targets — typically **seconds to a few minutes**, not hours. The "heavy build" is a first-build/clean-build property.
- **ccache**: caches C/C++ compilation across builds and checkouts; officially supported.
- **Pinned upstream**: the fork pins a revision, so the expensive graph doesn't churn under us; controlled rebases are scheduled, and CI pre-warms caches after each rebase.
- **CI-published artifacts**: Tier 1 never pays the platform cost because CI publishes the IDK/SDK and product bundles per pinned revision.

<a id="apple"></a>

## Apple Silicon (M-series) Guidance — Verdict

**Short answer: yes, the daily build works natively on an M4 Pro. Only the full platform tree does not.** The two questions were conflated; here they are separated with verified facts.

### What works natively on macOS arm64 (this is 90% of our work)
The Fuchsia **SDK is build-system-agnostic and Bazel-native on Apple Silicon**. Bazel auto-detects the host and produces a `darwin_arm64` configuration (`darwin_arm64-fastbuild` for host builds, `darwin_arm64-opt-exec` for build tools) — confirmed in the Pigweed/Sapphire Fuchsia SDK workflow, which runs on macOS arm64 hosts. The SDK core is published for macOS via CIPD (`fuchsia/sdk/core/mac-*`), and `ffx` host tools run on macOS. So on the M4 Pro, natively and fast:

- Build our components, drivers, and packages against the prebuilt platform (Bazel `--config=fuchsia`).
- Run `ffx`, assemble packages, push to a target, stream logs, debug with `zxdb`.
- Boot the emulator from prebuilt product bundles.

This is Tier 1, and it is the entire product-layer effort (entity/agent, shell, services, apps) plus driver work against the SDK. It needs no Linux box.

### What does NOT work natively on macOS (the sentence in the source)
The **full GN/ninja platform build** (`fx set` / `fx build` of the whole tree) is supported only on x86-64 Debian-based Linux. The historical macOS SDK-core CIPD path is `mac-amd64` (Intel); Apple Silicon runs host tools via Rosetta or native where published, but the **platform tree itself is not a supported macOS build** on any CPU. So "compile the forked Zircon + full image" is a Linux-only job.

### The resolution
Because we split Tier 1 (SDK, native on the Mac) from Tier 2 (full tree, Linux), the M4 Pro is a **fully capable primary workstation**: all product and SDK-level driver work is native and fast there. The only thing it can't do is produce the platform image — and that is a CI/remote-builder job by design, run once per pinned revision, not per iteration.

Concretely for the M4 Pro:

1. **Primary (native, recommended):** SDK + Bazel + emulator on macOS arm64. Fast, no VM.
2. **Platform image (when needed):** a remote x86-64 Linux builder (cloud/Hetzner) or CI produces the fork's image and publishes artifacts the Mac consumes. This is the "dedicated build machine" the source assumed — needed only for platform deltas.
3. **Local Linux VM (optional, for platform hacking on the go):** x86-64 Debian VM under UTM/Parallels can run `fx build`; slower and heavier (rosetta/emulated x86-64 on arm64), first build in hours. Use only if you must build the tree offline; otherwise the remote builder is better.

Estimated M4 Pro numbers to validate by experiment (record as evidence, replace these): native SDK component build — seconds to low minutes; emulator boot from prebuilts — 1–3 min; **full tree** is not run on the Mac (Linux builder: first build ~1–3 h on 16+ cores, incremental minutes).

<a id="tonight"></a>

## Try-It-Tonight Path (no build)

Booting Fuchsia in the emulator **tonight** does not require building anything: fetch the SDK tools, `ffx product download` a prebuilt bundle, `ffx emu start`. On Apple Silicon prefer the arm64 bundle if offered, x64 otherwise (slower under emulation). The full-tree first build is what runs overnight — on a Linux builder, via the script in `scripts/fuchsia-full-build.sh`.

<a id="requirements"></a>

## Requirements

- **R01.** Product-layer code builds via the SDK workflow with no platform checkout (Tier 1).
- **R02.** CI owns the Tier-2 full-tree build on a pinned revision and publishes IDK/SDK + product bundles.
- **R03.** ccache is enabled on all Tier-2 builders; incremental build health (time-to-rebuild after a 1-file change) is a tracked CI metric.
- **R04.** First-build, incremental-build, and emulator-boot times are recorded as evidence per builder class (CI box, M4 Pro VM) — estimates in this document are replaced by measurements.
- **R05.** Apple Silicon engineers default to Tier 1; Tier-2 access is via the remote builder.

<a id="risks"></a>

## Risks and Open Questions

- The SDK is a moving target (Bazel migration ongoing per RFC-0186); pinning SDK versions alongside the platform revision is mandatory.
- arm64-host/arm64-target support may lag x64; if VM builds on Apple Silicon prove painful, the remote x86-64 builder is the fallback (budgeted).
- Out-of-tree product **assembly** had gaps historically; verify current assembly-out-of-tree status when we vendor the SDK rules.
- **Open-question rule:** unanswered high-impact questions become claims/experiments.

<a id="related"></a>

## Related Documents

- [Fuchsia-fork spec digest (build section)](../research/RES-012-fuchsia-spec-lessons.md)
- [ADR-0001: Fork Fuchsia/Zircon](../decisions/AOS-ADR-0001.md)
- [Kickoff sequence and lanes](../planning/PLAN-018-kickoff-sequence.md)

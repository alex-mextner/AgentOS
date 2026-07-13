---
id: "AOS-RES-WIDER-LENS-SUMMARY-EN"
title: "Agent OS Wider Lens — English Summary"
status: "Normative English distillation of a non-normative Russian source"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "English distillation of the Russian wider-lens survey: who is already digging the same tunnels (platform agent layers, local-first components, malleable software, itemized OS, global history products), which components are ready to reuse, the gaps our notes miss, and the concrete spec edits that follow."
---

# Agent OS Wider Lens — English Summary

> Faithful English distillation of `agent-os-wider-lens.md` (Russian, non-normative, revision 2026-07-10). Method: take our idea lists, generalize each to a thesis, show who is already doing something similar, what to take from them, and what it changes for Agent OS. Everything is search-verified in the original.

## Table of Contents

- [Platforms Are Building the Agent Layer — From Above, Opt-In](#platform-agent-layer)
- [Local-First: The Bricks Are Already Cast](#local-first)
- [Malleable Software: Our "Modularity" Has a Manifesto](#malleable-software)
- [Itemized OS: Obenauer Has Lived In Our OS For Three Years](#itemized-os)
- [Global History Already Ships — And Already Got Burned](#global-history)
- [Neighbors: Alt-OSes, Kernels, Science](#neighbors)
- [Track B: The Hardware Situation Shifted](#track-b)
- [Input, Messengers, Identity](#input-identity)
- [Gaps Entirely Missing From Our Lists](#gaps)
- [Synthesis: Spec Edits](#synthesis)
- [Related Documents](#related-documents)

<a id="platform-agent-layer"></a>

## Platforms Are Building the Agent Layer — From Above, Opt-In

The thesis "AI assistants are forever shallow because of app baggage" is half obsolete: both platforms are now building app-function registries for agents.

- **Android AppFunctions:** apps behave as on-device MCP servers — self-describing functions register in an in-OS registry, and agents (Gemini) discover and call them. Private preview with Gemini since May 2026 (Galaxy S26, Pixel 10); Android 17 extends it. Tellingly, every predecessor (App Actions, Slices, Direct Actions, Assist API) died — rigid intent libraries did not survive contact with dynamic intelligence.
- **Apple App Intents:** the same contract for Apple Intelligence/Siri/Spotlight/Shortcuts, extended at WWDC26 with RelevantEntities, SyncableEntity, and union types. Developers already call it "the structured-tool-use API of Apple's whole AI fabric."
- **MCP** (open standard since late 2024) became the de facto agent↔tool protocol; the industry literally describes AppFunctions as "mobile MCP."

**What it changes.** The answer to "why a new OS if Gemini already calls app functions" belongs in the spec, and it exists but is not stated: platform coverage is **opt-in per-app** — the agent sees only what a developer chose to annotate, and is forever catching up. Agent OS coverage is **100% by construction**: every action and every byte passes through the entity/capability layer, with nothing to annotate. That is the pitch.

**Practical corollary:** the Agent OS entity/action registry must export outward as an MCP server — then the entire external agentic world works with Agent OS on launch day, for free. **FIDL inside, MCP outside.** The agentic paradigm is being built a floor above the OS (agentic browsers, apps-inside-assistants) precisely because no one can replace the OS — which is exactly why the OS level is the defensible bet.

<a id="local-first"></a>

## Local-First: The Bricks Are Already Cast

- **Ink & Switch** (the lab that coined "local-first"): **Automerge** (production CRDT, Rust core), **Patchwork** (malleable infrastructure over Automerge), **Keyhive** (local-first, capability-based access control with e2e encryption — literally our sync access layer), **Cambria** (lenses for schema evolution — ready research for our "auto API/data migration protocol").
- **Loro:** a Rust CRDT library, a candidate alongside Automerge for our Rust-first stack.
- **Anytype / any-sync:** the closest live product to FluidSpace + entity model — typed objects with relations, local-first, e2e, p2p sync, an open any-sync protocol, mobile clients, a public local API, and a ready MCP server. Study any-sync as a reference (or component) for sync before writing our own.

The spec's "we take CRDT libraries as-is" can now name concrete libraries and a concrete access-control layer.

<a id="malleable-software"></a>

## Malleable Software: Our "Modularity" Has a Manifesto

Ink & Switch, June 2025: **"Malleable Software: Restoring user agency in a world of locked-down apps"** (Litt, Horowitz, van Hardenberg). Near-verbatim overlap with our notes: "apps are avocado slicers" (tools, not applications), a gentle slope from user to creator, communal tool creation. Their key inoculation against over-optimism: **AI code generation alone does not deliver malleability** — you need an environment where tools compose over shared data. "Bringing AI coding into today's ecosystem is like bringing a talented sous-chef to a food court." Our entity store is precisely the answer to their open question.

- **Geoffrey Litt** built an academic career on our "micro-apps"; the Malleable Systems Collective is the prior-art catalog.
- **Vibe coding / software-on-demand** (artifacts, generating apps from chat) partially realizes our "auto installation," but in cloud silos without shared data — confirms the demand, does not solve the problem.

<a id="itemized-os"></a>

## Itemized OS: Obenauer Has Lived In Our OS For Three Years

**Alexander Obenauer (WonderOS/OLLOS)** has built and lived in an itemized environment since 2021 — items instead of apps, everything in one local graph. Two ideas we lack:

1. **Timeline as shell.** For us, global history is a log and navigation aid. For him the timeline is the primary organizing interface: "when time is the organizing principle, your things organize themselves." Consider the timeline as a default story, not only substrate.
2. **OS-level spaced review:** open tasks, unanswered mail, and deferred links resurface on a spaced-repetition schedule — a cheap, powerful feature over the entity store.

He also co-authored Embark (Ink & Switch) — dynamic documents where entities (places, dates) are recognized inline in a trip plan and grow formulas and maps. That is SideMemo + FluidSpace, implemented and written up with conclusions.

<a id="global-history"></a>

## Global History Already Ships — And Already Got Burned

- **Microsoft Recall:** our "global history" in production (screenshots + semantic search). It went through the loudest privacy scandal of 2024 and relaunched only after encryption, strict opt-in, Windows Hello on access, and private-content filters. Lesson: demand confirmed, **privacy is risk #1** for the whole feature.
- **Screenpipe:** open source, **in Rust** — 24/7 local screen+audio, OCR/Whisper, accessibility-tree capture, "pipes" (automation agents over history), an MCP server, window exclusion, and PII redaction. A ready reference implementation of our input registry, down to the language.
- **Limitless (formerly Rewind):** moved to a cloud pendant; the audience that loved local Rewind was abandoned — that audience is ours.

**Spec consequence:** the threat model for global history and the input registry is a spec section (A4), not a footnote — local, encrypted, exclusions, per-agent capabilities on history reads. The capability model already exists; point it explicitly at history.

<a id="neighbors"></a>

## Neighbors: Alt-OSes, Kernels, Science

- **postmarketOS 26.06:** 65 devices official, 600+ experimental, targeting "10 years of smartphone life." These are the people at our "decent, retro" camera ceiling, sharing component suppliers with us (libcamera, ModemManager/ofono, which we wrap via Starnix).
- **Linux mobile hardware as a business:** FuriPhone FLX1, Liberux NEXX, Volla X23, Jolla — a small but paying niche.
- **GrapheneOS × Motorola (March 2026):** a vendor officially partners with an alternative OS for future devices for the first time — a precedent for the "hardware with the vendor's knowledge" path over blind reverse-engineering.
- **HarmonyOS NEXT:** an existence proof that a non-Android mobile OS can reach production with enough will and resources; Huawei also has an intent framework and distributed soft bus.
- **Microkernel/capability kin:** Redox (Rust), Genode/seL4, Asterinas (Rust + Linux ABI). **Spritely Goblins/OCapN** — object capabilities for distributed systems: our capability model stretched across devices and people (sharing, others' agents).
- **Orthogonal persistence** — the scientific name for our "backup including memory state": Phantom OS, the KeyKOS/EROS line. Today's engineering reality is **CRIU** (checkpoint/restore of Linux processes, potentially reachable through Starnix), which turns a wishlist item into something with a bibliography.

<a id="track-b"></a>

## Track B: The Hardware Situation Shifted

Bad: **Google removed Pixel device trees and driver binaries from AOSP** (since Android 16, June 2025), collapsed the kernel commit history, and moved Android development into a private branch (March 2025); the reference target is now the virtual Cuttlefish. For LineageOS, building for Pixel is "painful, blind guess and reverse engineer."

For us: the Pixel 9 lost its "reference hardware for custom OSes" status — the main argument for choosing it. Starting from a supported board rather than a blind flagship becomes almost the only option. Revised candidates: an ARM board with Fuchsia support (as the spec advises), Fairphone (officially supported by pmOS/UT), or a GrapheneOS×Motorola-style vendor partnership.

Good: Track A is untouched — which reaffirms that decoupling the tracks was correct.

<a id="input-identity"></a>

## Input, Messengers, Identity

- **Keyboards/input:** on-device ASR went mainstream; dictation is growing into a primary input, which matches our "voice + keep originals" item. An open trainable-keyboard reference is FUTO Keyboard. Our pain — layout switching / multilingual input — is solved by none of the surveyed systems; for a Russian-speaking audience that is a differentiator, not a detail.
- **Messenger aggregation:** the "Anton on Element, parents on Viber" problem is already solved at the application layer by Beeper on Matrix bridges. For our messenger widget, Matrix bridges are a ready transport layer — no need to build from scratch.
- **User as API:** Solid (Berners-Lee, pods — data stays with the person, vendors request access) is the conceptual ancestor; AT Protocol handles identity portability. Regulatory tailwind: the DMA + EU Data Act (in force since September 2025) legally require portability and interop — "your personal data lives with you, not the vendor" is no longer a fringe idea.
- **Module economics:** the honest open question "lost brand & identity" now has a precedent at scale — Telegram Mini Apps: micro-apps with in-messenger payments at hundreds of millions of users. "The platform pays for scenario coverage" stopped being theory.

<a id="gaps"></a>

## Gaps Entirely Missing From Our Lists

1. **Threat model for history and agents.** Recall's lesson: the feature is killed not by lack of demand but by one security researcher's tweet. Design privacy as feature #1.
2. **Accessibility = agent API.** The semantic UI tree is one channel for both screen readers and agents (agents on both platforms already live over the accessibility tree; Screenpipe too). Raise a11y from the max-plan backlog: it is not "accessibility later," it is our own agent channel, designed once.
3. **Data schema evolution.** The entity store will outlive years of migrations; Cambria lenses are a ready direction, without which "schema versioned" stays a declaration.
4. **Timeline-as-shell and spaced review (Obenauer)** — cheap, strong features over what is already planned.
5. **Community as a channel.** Ink & Switch, Litt, Obenauer, Malleable Systems, and the local-first crowd are a ready audience that has waited twenty years for exactly this OS. Publish specs and demos there, not into a vacuum.

<a id="synthesis"></a>

## Synthesis: Spec Edits

1. In 000/005: state the positioning against AppFunctions/App Intents — "coverage by construction vs opt-in annotation."
2. In 020: MCP as the external contour (exporting the entity/action registry); FIDL as the internal one.
3. In A4 / the history spec: threat model (local, e2e, exclusions, per-agent caps), with Recall as the "how not to" and Screenpipe as the "how to" (also Rust).
4. In 040/A2: timeline as a default story; spaced review as a system mechanism.
5. In 050/Track B: revisit target hardware after the Pixel-AOSP sunset; board → Fairphone-class → vendor partnership.
6. In A4: do not write the CRDT layer blind — evaluate Automerge/Loro/any-sync + Keyhive (access control) + Cambria (migrations).

<a id="related-documents"></a>

## Related Documents

- [Agent OS Wider Lens — Russian source](agent-os-wider-lens.md) — the non-normative original this document distills.
- [Prior Art and Literature Atlas](AOS-RES-001.md) — the normative English prior-art register.
- [Prior Art Atlas — English Summary](prior-art-atlas.summary.en.md) — sibling summary (historical precedents by concept).
- [iOS vs Android vs Agent OS — English Summary](ios-vs-android-vs-agent-os.summary.en.md) — sibling summary (the grievance register that motivates Agent OS).
- [Source register](AOS-RES-002.md#source-register)

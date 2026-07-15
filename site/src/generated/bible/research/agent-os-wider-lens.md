> **English research doc (translated from the original Russian atlas).** Wider-lens survey of adjacent efforts. Non-normative — normative requirements are defined by the linked architecture, product, hardware, legal, and planning documents.

# Widening the Lens: who's already digging our tunnels

> Revision: 2026-07-10. A map of the terrain around the ideas in "Own Mobile OS" and UX RESEARCHES. Method: take our lists, generalize to a thesis, show who's already doing something similar, what to take from them, and what it changes for Agent OS. Everything checked by search, links included.

---

## 1. The main thing missing from our notes: the platforms are building an agentic layer. From above, and opt-in.

The thesis "AI assistants will always be shallow because of app baggage" is now half-outdated — both platforms are right now building registries of app functions for agents:

- **Android AppFunctions** — apps behave "like on-device MCP servers": self-describing functions register in an in-OS registry, agents (Gemini) discover and call them. Private preview with Gemini since May 2026 (Galaxy S26, Pixel 10), Android 17 will expand it. Telling detail: every predecessor (App Actions, Slices, Direct Actions, Assist API) died — rigid intent libraries didn't survive contact with dynamic intelligence. https://developer.android.com/ai/appfunctions
- **Apple App Intents** — the same contract for Apple Intelligence/Siri/Spotlight/Shortcuts; at WWDC26 they added RelevantEntities, SyncableEntity, union types. Developers already describe "App Intents as the structured-tool-use API for Apple's entire AI fabric." https://developer.apple.com/documentation/appintents
- **MCP** (an open standard since late 2024) has become the de-facto agent↔tool protocol; the industry literally describes AppFunctions as "mobile MCP."

**What this changes.** The answer to "why build a new OS if Gemini can already poke app functions" needs to be in the spec, and it exists but isn't spelled out: platform coverage is **opt-in per-app** — the agent only sees what a developer bothered to annotate, and it's permanently playing catch-up. In Agent OS, coverage is **100% by construction**: every action and every byte passes through the entity/capability layer, there's nothing to annotate. That's the pitch.

**Practical consequence:** Agent OS's entity/action registry should be exportable externally as an MCP server — then the entire external agentic world can work with Agent OS on day one, for free. FIDL internally, MCP externally.

Related: the agentic paradigm is currently being built a floor above the OS — agentic browsers, apps-inside-assistants — precisely because nobody can replace the OS. Our bet is exactly that the defensible position is at the OS level.

## 2. Local-first: the bricks are already cast, the people are already known

- **Ink & Switch** — the lab that coined the term "local-first" itself. Their stack: **Automerge** (CRDT, production-grade, Rust core), **Patchwork** (malleable infrastructure on top of Automerge), **Keyhive** — local-first access control on capabilities with e2e encryption (literally our access layer for sync), **Cambria** — lenses for schema evolution (a ready-made study of our "Auto API/data migration protocol"). https://www.inkandswitch.com/
- **Loro** — a CRDT library in Rust, a candidate on par with Automerge for our Rust-first stack.
- **Anytype / any-sync** — the closest living product to our FluidSpace + entity model combo: typed objects with relations, local-first, e2e, p2p sync, an open protocol (any-sync), mobile clients, a public local API, and an already-built MCP server. Study any-sync as a reference (or component) for A4 sync before writing our own. https://anytype.io/ https://github.com/anyproto

The spec says "take CRDT libraries as-is" — now we can plug in concrete names and a concrete access-control layer.

## 3. Malleable software: our "ecosystem modularity" got a manifesto

Ink & Switch, June 2025: **"Malleable Software: Restoring user agency in a world of locked-down apps"** (Litt, Horowitz, van Hardenberg). The overlap with our notes is almost verbatim: "apps are avocado slicers" (tools, not apps), a gentle slope from user to creator, communal tool-making. Their key finding is a vaccine against excess optimism: **AI code generation alone doesn't produce malleability** — you need an environment where tools compose over shared data. "Bringing AI coding into today's ecosystem is like bringing a talented sous-chef to a food court." Our entity store is exactly the answer to their open question. https://www.inkandswitch.com/essay/malleable-software/

- **Geoffrey Litt** — a researcher whose entire career is built on our "micro-apps." Their prior-art catalog is the Malleable Systems Collective.
- Vibe coding / software-on-demand (artifacts, generating apps from chat) — a partial implementation of our "auto installation," but in cloud silos without shared data. Confirms demand, doesn't solve the problem.

## 4. Itemized OS: Obenauer has already lived in our OS for three years

**Alexander Obenauer, WonderOS/OLLOS** — an independent researcher who, since 2021, has built and lived in an "itemized" environment: item instead of app, everything in one local graph. Two ideas we don't have:

1. **Timeline as shell.** For us, Global History is a log and a navigation aid. For him, the timeline is the main organizing interface: things self-organize by time, "when time is the organizing principle, your things organize themselves." Consider timeline as one of the default stories, not just a substrate. https://alexanderobenauer.com/ollos/
2. **OS-level spaced review** — unclosed tasks, unanswered emails, deferred links surface via spaced repetition. A cheap, powerful feature on top of the entity store.

He's also a co-author of Embark (Ink & Switch) — dynamic documents where entities (places, dates) are recognized right in the text of a trip plan and grow formulas and maps. This is SideMemo + FluidSpace, built and written up with conclusions. https://www.inkandswitch.com/embark/

## 5. Global history is already being sold — and has already been punched in the face

- **Microsoft Recall** — our "Global History" in production: screenshots + semantic search. Went through the loudest privacy scandal of 2024, relaunched only after adding encryption, strict opt-in, Windows Hello to unlock, and private-content filters. Lesson: demand is confirmed, and privacy is risk #1 of the entire feature.
- **Screenpipe** — open source, **in Rust**: 24/7 local screen+audio capture, OCR/Whisper, accessibility-tree capture, "pipes" (agentic automations on top of history), an MCP server, window exclusion, and PII redaction. A ready-made reference implementation of our input registry, right down to the language. https://github.com/mediar-ai/screenpipe
- Limitless (formerly Rewind) — pivoted to a cloud pendant; the audience that loved local Rewind was left stranded — that's our audience.

**Consequence for the spec:** the threat model for global history and the input registry isn't a footnote, it's a section of spec A4: local, encrypted, exclusions, per-agent read capabilities on history. We already have a capability model — it needs to be explicitly pointed at history.

## 6. Neighbors in the trade: alt-OSes, kernels, research

- **postmarketOS 26.06** — 65 officially supported devices, 600+ experimental, goal "10-year smartphone lifespan." These are the people at our modest "decent, retro-style" ceiling, and we share component suppliers (libcamera, ModemManager/ofono — which we wrap via Starnix). https://postmarketos.org/
- Hardware for Linux mobile exists as a business: FuriPhone FLX1, Liberux NEXX, Volla X23, Jolla. A small niche, but a paying one.
- **GrapheneOS × Motorola** (March 2026) — a vendor officially partnering with an alternative OS for future devices, for the first time. A precedent for the "hardware with the vendor's knowledge" path instead of blind reverse-engineering.
- **HarmonyOS NEXT** — an existence proof: a non-Android mobile OS shipped to production given enough willpower and resources; Huawei also has an intent framework and a distributed soft bus. The effort level is a reference point, not an inspiration.
- Microkernel/capability relatives: Redox (Rust), Genode/seL4, Asterinas (Rust + Linux ABI). **Spritely Goblins/OCapN** — object capabilities for distributed systems: our capability model, stretched across devices and people (sharing, other people's agents).
- **Orthogonal persistence** — the scientific name for our "backup including in-memory state": Phantom OS, the KeyKOS/EROS lineage. Today's engineering reality — **CRIU** (checkpoint/restore of processes on Linux, potentially reachable via Starnix). A wishlist item stops being fantasy and gets a bibliography.

## 7. Track B: the hardware situation has shifted in both directions

Bad: **Google stripped Pixel device trees and driver binaries out of AOSP** (as of Android 16, June 2025), collapsed the kernel commit history, and Android development moved into a private branch (March 2025); the reference target is now the virtual Cuttlefish. LineageOS: building for Pixel is now "painful, blind guess and reverse engineer." https://www.androidauthority.com/google-not-killing-aosp-3566882/

For us this means: Pixel 9 has lost its status as "reference hardware for custom OSes" — the main argument for its choice in the spec (§1.4). OQ6 ("start from a supported board, not a blind flagship") goes from a recommendation to nearly mandatory. Candidates for reconsideration: an ARM board with Fuchsia support (as the spec already recommends), Fairphone (officially supported by pmOS/UT), a vendor partnership along the lines of GrapheneOS×Motorola.

Good: Track A is entirely unaffected by this — which further confirms the correctness of splitting the tracks.

## 8. Input, messengers, identity — targeted hits on our pain points

- **Keyboards/input:** on-device ASR has gone mainstream, dictation is growing into a primary input method — our "voice + storing originals" point is on trend. An open reference implementation of a trainable keyboard is FUTO Keyboard. Our pain point "switching layouts / multilingual input" isn't solved by any of the systems surveyed — for a Russian-speaking audience that's a differentiator, not a triviality.
- **Messenger aggregation:** the "Anton on Element, parents on Viber" point is already being solved at the application layer — Beeper on Matrix bridges (Automattic). For our messenger widget, Matrix bridges are a ready-made transport layer, no need to build from scratch.
- **User as API:** Solid (Berners-Lee, pods — data lives with the person, vendors request access) — a conceptual ancestor; AT Protocol — identity portability. Regulatory tailwind: the DMA + EU Data Act (in effect since September 2025) legally require portability and interop — "PII lives with you, not with vendors" is no longer a fringe idea.
- **Module economics:** our honest open question "lost brand & identity" now has a precedent at scale: Telegram Mini Apps — micro-apps with payments inside a messenger, hundreds of millions of users. The model "the platform pays for scenario coverage" is no longer theoretical.

## 9. What's completely missing from our lists (gaps found)

1. **Threat model for history and agents** — the Recall lessons showed: a feature isn't killed by lack of demand, but by one security researcher's tweet. Design privacy as feature #1.
2. **Accessibility = agent API.** The semantic UI tree is the same channel for screen readers and for agents (agents on both platforms already live on top of the accessibility tree, so does Screenpipe). We've pushed a11y into the "maximum plan" — it needs to move up: this isn't "accessibility, later," it's our own agentic channel, designed once.
3. **Data schema evolution** — the entity store will live through years of migrations; Cambria lenses are a ready-made direction, without which "schema versioned" in the spec stays a mere declaration.
4. **Timeline-as-shell and spaced review** (Obenauer) — cheap, strong features on top of what's already planned.
5. **Community as a channel.** Ink & Switch, Litt, Obenauer, Malleable Systems, the local-first crowd — a ready-made audience that's been waiting twenty years for exactly this OS and knows how to judge it. Publish specs and demos there, not into a vacuum.

## 10. Synthesis: edits to specs/notes

1. In 000/005: articulate the positioning against AppFunctions/App Intents — "coverage by construction vs. opt-in annotation."
2. In 020: MCP as the external boundary (exporting the entity/action registry), FIDL as the internal one.
3. In the A4/history spec: threat model (local, e2e, exclusions, per-agent caps), references to Recall (how not to) and Screenpipe (how to, also in Rust).
4. In 040/A2: timeline as a default story; spaced review as a system mechanism.
5. In 050/Track B: reconsider target hardware after the Pixel-AOSP sunset; board → Fairphone-class → vendor partnership.
6. In A4: don't write CRDT plumbing blind — evaluate Automerge/Loro/any-sync + Keyhive (access control) + Cambria (migrations) first.

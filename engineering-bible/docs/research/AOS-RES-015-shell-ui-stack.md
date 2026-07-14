---
id: "AOS-RES-015"
title: "AgentOS Shell UI Stack — Options, Feasibility, Recommendation"
status: "Research-backed evidence map"
version: "1.0.0"
baseline_date: "2026-07-14"
owners: "Research Lead / Shell & UI Working Group"
audience: "Engineering, product, and design leadership"
summary: "A decision-oriented, sourced report on how to build the AgentOS shell and UI stack on a Fuchsia-fork base. It surveys the native Fuchsia UI options (Flatland, Carnelian, abandoned Flutter-on-Fuchsia, Chromium/WebEngine, Starnix), evaluates a Swift/SwiftUI-style path and a React/flexbox path, assesses the Flutter fork (Flock) and the 2026 state of Dart/Flutter, and lands a recommendation. Every external claim is cited inline with a confidence marker, two comparison tables summarise the trade-offs, and items that are unverified or actively refuted are flagged so no one cites them as fact. Verdict: Rust/Carnelian-on-Flatland is the recommended base, with a thin declarative layer plus Yoga (via yoga-rs) for real flexbox, and Swift only as an optional later app-tier."
---

# AgentOS Shell UI Stack — Options, Feasibility, Recommendation

> A research-grade evaluation of shell/UI-stack options for the AgentOS Fuchsia
> fork. Each major claim carries a confidence marker (HIGH / MEDIUM / LOW) and an
> inline citation to an external source (numbered references at the bottom,
> accessed 2026-07-14) or an internal AOS-* document. This document consolidates
> three independent research rounds. Where a position rests on judgement rather
> than a source, the prose says so and marks it LOW confidence. Two categories are
> called out explicitly: **REFUTED** claims that failed verification and must not
> be cited, and **load-bearing UNVERIFIED** items that the recommendation depends
> on and that still need first-hand confirmation.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [How to Read This Document](#how-to-read-this-document)
- [1. Fuchsia UI Stack and Shell-Building Options](#1-fuchsia-ui-stack-and-shell-building-options)
- [2. How UI Is Described](#2-how-ui-is-described)
- [3. Design System Approach](#3-design-system-approach)
- [4. Swift / SwiftUI Feasibility](#4-swift--swiftui-feasibility)
- [5. Flexbox for SwiftUI](#5-flexbox-for-swiftui)
- [6. React and Flexbox-on-Flutter](#6-react-and-flexbox-on-flutter)
- [7. Flock (Flutter Fork)](#7-flock-flutter-fork)
- [8. Dart and Flutter State (2026)](#8-dart-and-flutter-state-2026)
- [9. Synthesis, Comparison Tables, Verdict](#9-synthesis-comparison-tables-verdict)
- [Explicitly Refuted Claims](#explicitly-refuted-claims)
- [Load-Bearing Unverified Items](#load-bearing-unverified-items)
- [References](#references)
- [Related Documents](#related-documents)

## Purpose and Scope

AgentOS ships on a Fuchsia/Zircon fork ([AOS-RES-012](RES-012-fuchsia-spec-lessons.md)).
The shell — the system UI a user actually touches — and the UI stack that
third-party and first-party clients render with are still open. This document
states, with citations, what UI infrastructure the Fuchsia base actually offers,
which cross-ecosystem UI paths are viable, which are dead ends, and what the
highest-leverage next spike is.

It is a decision report, not an implementation plan: it exists so the choice of
UI foundation is made against evidence rather than familiarity. The core tension
it resolves is between *native fit* (what runs on Fuchsia with upstream support
and no runtime to port) and *declarative ergonomics* (the developer experience of
SwiftUI/React/Flutter-style DSLs that the native Fuchsia path lacks out of the
box).

## How to Read This Document

- **Confidence markers** on each major claim: **HIGH** (multiple primary sources
  or an authoritative vendor/project statement), **MEDIUM** (single source, or an
  inference from documented behaviour), **LOW** (judgement / estimate, explicitly
  unsourced).
- **Inline citations** are bracketed reference numbers `[n]` resolving to the
  [References](#references) section, or internal `AOS-*` document IDs.
- A claim of *absence* (e.g. "no Fuchsia-specific design-system tooling exists")
  is an analytical inference from the surveyed sources, not a vendor statement of
  non-existence, and is flagged as such.
- **REFUTED** and **UNVERIFIED** call-outs are collected in their own sections near
  the end and must be read before quoting any momentum or maturity claim.

---

## 1. Fuchsia UI Stack and Shell-Building Options

This section surveys every plausible base for building the AgentOS shell on the
Fuchsia fork and marks which are live paths versus dead ends.

### Flatland — the composition substrate (HIGH)

Flatland is Scenic's current retained-mode but **imperative** 2D scene-graph and
composition API. It officially replaces the deprecated GFX 3D API; all graphics
clients are migrating to it, and the direction is formalised in RFC-0162 [1][2]
(HIGH). The load-bearing consequence for a shell: Flatland is imperative — a
client enqueues scene-mutation commands and calls `Present()`. Any declarative
widget layer AgentOS builds must translate **down** to imperative Flatland scene
mutations; Flatland itself will not give us a declarative surface [1] (HIGH).

### Carnelian — Fuchsia's native Rust UI framework (HIGH)

Carnelian is Fuchsia's native Rust UI framework. Its own README self-labels it a
"prototype framework for writing interactive Fuchsia components in Rust" [3][4]
(HIGH) — the project itself signals it is not a finished, batteries-included UI
toolkit. It renders either via Flatland ("hosted") or directly to the display
coordinator ("direct"), with an "auto" default that picks between them [3] (HIGH),
and it already powers shipped surfaces — the Fuchsia Terminal and Virtcon
(RFC-0094) [3] (HIGH). Architecturally it sits **below** a declarative DSL: it
gives Rust rendering and input primitives, not a widget/design-system stack.

Carnelian sits **outside** the mainstream cross-platform Rust GUI ecosystem. The
2025 boringcactus survey of 43 Rust GUI libraries mentions no Fuchsia or Carnelian
target at all, and GPUI (Zed's framework) targets only macOS, Windows, and Linux
[5][6] (MEDIUM). Practically, this means we cannot expect to lift an existing Rust
GUI toolkit onto Fuchsia for free; the ecosystem has not been pointed at this
platform.

### Flutter-on-Fuchsia — abandoned (HIGH)

Flutter-on-Fuchsia is a dead path. Google's Flutter team transferred ownership of
the integration back to the Fuchsia team, and the first-party 2021 Fuchsia roadmap
describes the integration as "languishing under technical debt" [7] (HIGH).
Crucially, upstream Flutter then **deleted** its Fuchsia tooling in release 3.27.0
(PR #154880) [8] (HIGH); what remains is only an experimental, out-of-tree custom
embedder [9] (HIGH). Fuchsia's historical Armadillo system UI was Flutter/Dart,
but that lineage is not a maintained path forward.

### Chromium / WebEngine — not a browser, poor shell base (HIGH)

Chromium on Fuchsia ships as **WebEngine** — a headless, WebView-like service —
plus Runners, not as a browser [10] (HIGH). It is maintained in a
security/stability posture for smart displays, and the effort to bring the full
Chrome browser to Fuchsia was ended in December 2023 [11] (HIGH). A headless web
engine in maintenance mode is a poor base for a rich, custom, agent-native shell.

### Starnix — Linux-ABI escape hatch, not a shell path (HIGH)

Starnix runs unmodified Linux programs via a Linux-ABI compatibility layer [12]
(HIGH). It is an escape hatch for third-party Linux GUI binaries, not a native
shell-building path — it lets foreign apps run, but you would not author the system
UI through it. This aligns with the AgentOS legacy-containment stance: foreign
runtimes are quarantined, not core ([AOS-RES-013](AOS-RES-013-os-comparison-matrix.md)).

## 2. How UI Is Described

The mechanical fact that shapes every option: Flatland is an **imperative command
model** — the client enqueues commands and calls `Present()`. It is retained-mode
(the scene persists frame to frame) but **not declarative** [1] (HIGH). Carnelian
gives Rust primitives, not a batteries-included declarative widget or
design-system stack [3][4] (HIGH). Therefore a declarative layer plus a design
system must be **built** atop Carnelian; neither the composition substrate nor the
native framework hands us declarative UI. This is the central cost of the native
path, and Section 9 addresses how to pay it in Rust.

## 3. Design System Approach

No Fuchsia-specific design-system tooling exists (MEDIUM; inference — no Fuchsia
design-system source was found across three research rounds). The recommendation
is therefore to build a two-layer token architecture — global raw tokens feeding
semantic/alias tokens — supporting light, dark, and high-contrast themes, modelled
on the established token systems: Microsoft's Fluent 2 design tokens and Google's
Material 3, and conformant to the W3C Design Tokens specification, which reached
its first stable version in October 2025 [13][14] (MEDIUM). The maturity of the
W3C spec means a token pipeline built now can be standards-based rather than
bespoke. This is an inference-driven recommendation, not a sourced Fuchsia
practice: there is no prior Fuchsia design system to copy.

## 4. Swift / SwiftUI Feasibility

The question here is not "is a SwiftUI-style DSL nice" (it is) but "can AgentOS
afford to own a Swift-on-Fuchsia toolchain and runtime". The evidence says no as a
primary path.

### Toolchain and runtime history (HIGH)

Google once maintained a Swift-toolchain fork with a Fuchsia/Zircon target and a
demo app, but it has been **dormant since 2019** — the latest tag is
`swift-DEVELOPMENT-SNAPSHOT-2019-04-10`, with `google-old`/`google-bak` archival
branches [15][16] (HIGH). Fuchsia is **not** on Swift's official platform-support
matrix [17] (HIGH). A full port would need an LLVM target/triple plus the
ARC/metadata/dynamic-cast runtime with OS memory and threading plumbing, plus
libdispatch, plus swift-corelibs-foundation, plus the standard library
(HIGH/MEDIUM). That is a large, sustained systems effort.

### Embedded Swift is the wrong shape (HIGH)

Embedded Swift does not rescue this. It is a minimal/zero-runtime dialect aimed at
bare-metal MCUs; it **drops** reflection, existentials/`any`, dynamic casting,
Objective-C interop, and most String/Unicode support, and it has no custom-OS-port
discussion [18][19] (HIGH). It solves a different problem than "a rich shell UI on
a custom OS".

### Interop maturity (HIGH)

Swift↔C++ interop is new (Swift 5.9), subset-only, and framed as an adoption
bridge, not a general FFI [20] (HIGH). Swift↔C interop is mature — that is the
practical FIDL/Zircon glue AgentOS would own [20] (HIGH). So the C-glue is
tractable; the C++ surface is not something to lean on yet.

### SwiftUI-style DSLs (not Apple's SwiftUI) (HIGH on statuses)

Apple's SwiftUI itself is proprietary and will not run on Fuchsia. The relevant
question is the open SwiftUI-*style* DSLs:

- **Tokamak** — **ARCHIVED 2026-01-28**, web/WASM-only, dead [21] (HIGH).
- **swift-cross-ui** (stackotter) — **ACTIVE** (v0.8.0, 2026-07-02), with a
  pluggable `BaseAppBackend` and shipped Gtk/AppKit/UIKit/WinUI/Qt/Android
  backends that prove new backends are routinely added [22] (HIGH). A
  `CarnelianBackend`/`FlatlandBackend` is the natural fit here. Rough sizing for a
  core plus roughly a dozen controls is **~1–2 engineer-quarters** (LOW; judgement,
  unsourced).
- **SkipUI** — transpiles to Compose/Android; wrong architecture for a Fuchsia
  native shell [23] (HIGH).

### Verdict on Swift (judgement)

Not viable as a primary path. The DSL is the easy part; the liability is owning a
Swift-on-Fuchsia toolchain + runtime + Foundation port that Apple will not help
with and that Google already abandoned — a bus-factor-1 dependency — plus a
dual-language runtime tax. At most, Swift is an **optional app-tier** later (a
`swift-cross-ui` CarnelianBackend), never the core, and only if the runtime port
is separately funded and sustained.

## 5. Flexbox for SwiftUI

If Swift were on the table, its layout model is a further mismatch for
flexbox-style UI, which matters because flexbox is what most designers reach for.

SwiftUI has **no CSS flexbox**. It uses a three-step proposal protocol: the parent
proposes a size, the child chooses, the parent places [24] (HIGH). `HStack`/
`VStack` are single-axis; `Spacer` is a rough approximation of grow/justify;
`.layoutPriority` is coarse; `.frame` proposes a size [25][26] (HIGH). iOS 16+'s
`Layout` protocol lets you hand-roll custom containers — which is exactly where you
would have to *rebuild* wrapping and flex behaviour yourself [26] (HIGH). (Apple's
own layout documentation was not JS-fetchable during research; these claims rest on
corroborating primary tutorials [24][25][26], HIGH.)

A repository literally named "FlexboxSwiftUI" does **not** exist (GitHub search
returns total_count 0) (HIGH). The real Yoga→SwiftUI binding is
`tiepvuvan/Yoga-SwiftUI`, but it is **dormant** (~30 stars, last push 2023-06-12)
[27] (HIGH). Mature Yoga-in-Swift (`layoutBox/FlexLayout`) is UIKit, not SwiftUI
[28] (HIGH). There is no `flex-wrap` in SwiftUI stacks at all (HIGH). Net: a
Swift/SwiftUI path would not even give us true flexbox for free.

## 6. React and Flexbox-on-Flutter

The React angle is worth checking because React's layout engine, not React itself,
turns out to be the reusable asset.

### No React/React-Native path to Fuchsia (HIGH / MEDIUM)

There is no React or React-Native path to Fuchsia — only a 2018 bot-closed
React-Native request (#20522), and Fuchsia's historical Armadillo system UI was
Flutter/Dart, never React [29] (HIGH that there is no official port; MEDIUM that
there is none anywhere).

### Yoga — the reusable flexbox engine (HIGH)

React Native's layout engine is **Yoga**, an embeddable C++ flexbox engine
described as "a subset of CSS, mostly Flexbox" [30][31] (HIGH). A community **Rust
wrapper, `bschwind/yoga-rs`**, exists and is directly interesting for a Rust-first
OS [31] (HIGH that Yoga exists and is embeddable; MEDIUM/UNVERIFIED on `yoga-rs`
freshness). This is the key finding of the React round: the valuable artifact is
Yoga, not React.

### React→Flutter bridges are toy-grade (HIGH)

React→Flutter bridges are toy-grade — e.g. `flutterjsx`, self-labelled Beta,
~54 stars [32] (HIGH). Flutter's official story remains "rewrite in Dart".

### Flutter's flex is its own model (HIGH)

Flutter's flex is its **own** constraint-based model — flexbox-*inspired*, not
CSS-conformant: `Row`/`Column`/`Flex`, `Expanded` (tight) / `Flexible` (loose), a
separate `Wrap` widget, and `MainAxis`/`CrossAxisAlignment` [33][34] (HIGH). The
divergences are concrete: `flex` is an **int** (not a float `flex-grow`), there is
**no** `flex-basis`, no direct `flex-shrink`, and **no** `flex-wrap` in the flex
widgets; the engine is not separable from Flutter [33][34] (HIGH).

### Takeaway

For a Rust-first OS that wants **true flexbox semantics**, embedding **Yoga via
`yoga-rs`/its C API** is a more natural building block than grafting React onto
Flutter or adopting Flutter's non-conformant flex. This feeds directly into the
Section 9 verdict.

## 7. Flock (Flutter Fork)

Flock is a community Flutter fork ("Flutter+"), driven by two named people (Matt
Carroll and Jesse Ezell), with no disclosed funding or organisation and no
Google/Foundation endorsement — the Flutter Foundation made them drop "foundation"
from the name, moving them to getflocked.dev (2024-11-06) [35][36][37][38] (HIGH).
Its changes are process promises, not shipped features: "for now, Flock is just a
direct copy of Flutter" [36] (HIGH). Traction is weak/stalled (~377 stars,
~22 forks, no visible refresh since Oct–Nov 2024) [35] (HIGH).

**Verdict:** early-stage and risky — do not depend on it. Treat Flock as prior art
(evidence that even Flutter's community feels the governance strain), not as
infrastructure.

## 8. Dart and Flutter State (2026)

Even setting Fuchsia aside, is the Flutter/Dart platform a safe long-term bet? The
picture is "managed, single-vendor-dependent, thin but not dying".

- **Dart cadence and features (HIGH release; MEDIUM sub-details):** Dart 3.12
  shipped 2026-05-20 on a roughly quarterly cadence, with experimental primary
  constructors and AI tooling (Genkit Dart, MCP/agentic hot reload) [39].
- **Dart macros CANCELLED (HIGH):** On 2025-01-29 Google announced "we've made the
  difficult decision to stop our work on macros… will not be shipping macros in the
  foreseeable future" [40] — killing a multi-year flagship over compile-performance
  regressions. A clear signal that Google cuts ambitious bets.
- **WASM (HIGH):** dart2wasm/WasmGC is on the **stable** channel with a JS
  fallback, but requires the new static interop (`package:web` / `dart:js_interop`)
  [41][42].
- **Dart beyond Flutter (HIGH):** server frameworks (shelf / Dart Frog / Serverpod)
  remain niche, but **Jaspr** (a Dart-native web framework) got a notable push —
  Google rebuilt dart.dev/flutter.dev/docs on Jaspr and published a 2026-04-15
  OSS-blog endorsement [43][44]. Dart is broadening but still Flutter-gravity-bound
  and niche.
- **Flutter 2026 roadmap (HIGH):** finish Impeller (remove Skia on Android 10+),
  WASM-as-default web, GenUI/A2UI AI features, desktop via Canonical, and a minimum
  of four stable releases; Impeller is mature on iOS and stabilising on Android
  [45][46].
- **Governance (HIGH on layoffs; the headcount figure is UNVERIFIED):** the 2024
  Google layoffs hit the Flutter/Dart teams [47][48]. The commonly cited
  ~50-person team figure is approximate and **unverified**; non-Google contributors
  now reportedly outnumber Google staff. Bottom line: Flutter is a managed,
  single-vendor-dependent risk — not dying, but thin.

## 9. Synthesis, Comparison Tables, Verdict

### Table 1 — Fuchsia UI base options (viability)

| Option | Status on Fuchsia | Verdict |
| --- | --- | --- |
| Flatland (Scenic composition) | Live, official; imperative retained-mode; replaces GFX (RFC-0162) [1][2] | Substrate we render *onto*; not a UI layer by itself (HIGH) |
| Carnelian (native Rust) | Live; self-labelled "prototype"; renders via Flatland or direct; ships Terminal/Virtcon [3][4] | Recommended base; needs a declarative + design layer built on top (HIGH) |
| Flutter-on-Fuchsia | Abandoned; tooling deleted upstream in 3.27.0; out-of-tree embedder only [7][8][9] | Dead path (HIGH) |
| Chromium / WebEngine | Headless WebView-service, maintenance mode; full browser ended Dec 2023 [10][11] | Poor base for a rich shell (HIGH) |
| Starnix | Live Linux-ABI compat layer [12] | Escape hatch for foreign GUI binaries, not a shell path (HIGH) |

### Table 2 — Shell/UI stack contenders (trade-offs)

| Axis | Rust / Carnelian-on-Flatland | Swift-DSL on Fuchsia (swift-cross-ui + Carnelian backend) | Flutter / Flock |
| --- | --- | --- | --- |
| Native fit to Fuchsia | Highest — native Rust, renders via Flatland [3] | Low — no Fuchsia in Swift platform matrix; runtime port required [17] | Abandoned upstream; fork adds no Fuchsia support [8][35] |
| Toolchain burden | Low — uses the Fuchsia Rust toolchain as-is | Very high — own a Swift toolchain + ARC/Foundation/libdispatch port Google dropped [15][16] | High — Dart+Flutter toolchain, no Fuchsia target [8] |
| Maturity risk | Medium — Carnelian is "prototype"-labelled [4] | High — dormant-since-2019 fork, bus-factor 1 [15] | High — single-vendor Flutter risk [47]; Flock stalled [35] |
| Declarative ergonomics | Weak today — must build the declarative layer [3] | Strong DSL, but only if the runtime exists [22] | Strong (Flutter's model) [33] |
| Flexbox-style layout | Build it — embed Yoga via `yoga-rs`/C API [30][31] | None native; SwiftUI has no flexbox, no `flex-wrap` [24][27] | Non-conformant int-based flex; no `flex-wrap` [33][34] |
| Long-term stewardship | Upstream Fuchsia + Rust ecosystem | Bus-factor 1; Apple won't help, Google left [15][17] | Managed, single-vendor-dependent; thin [47][48] |

### Verdict

**Rust/Carnelian-on-Flatland is the recommended base.** It is the only option with
native Fuchsia fit, upstream stewardship, and **no runtime to port** [1][3][4]
(HIGH). Two honest caveats define the work:

1. **Close Carnelian's weak spots in Rust.** Its real gaps are declarative
   ergonomics and flexbox. Build a thin declarative layer over Carnelian, and embed
   **Yoga via `yoga-rs`/its C API** for real CSS-flexbox semantics [30][31]. This
   Yoga-in-Rust spike is the **highest-leverage next step** — it buys true flexbox
   without adopting a foreign UI runtime.
2. **Swift is an optional later app-tier only.** A `swift-cross-ui` CarnelianBackend
   [22] is a plausible *app-tier* addition — never the core — and only if the
   Swift-on-Fuchsia runtime port is separately funded and sustained [15][17]. Do
   not stake the shell on it.

This keeps the shell Rust-first and Fuchsia-native (consistent with the AgentOS
no-inherited-legacy-runtime stance, [AOS-RES-013](AOS-RES-013-os-comparison-matrix.md)),
pays the declarative-ergonomics cost deliberately and in Rust, and treats every
foreign-language DSL as an optional guest rather than a foundation.

## Explicitly Refuted Claims

Do **not** cite these as fact — they failed verification across the research
rounds:

- **"Full Chrome on Fuchsia is entirely abandoned."** Overstated. The WebEngine
  embedder still runs (e.g. on Nest Hub); what ended in December 2023 was the *full
  Chrome browser* effort, not all Chromium-on-Fuchsia [11]. Cite the narrow,
  accurate version.
- **"Flutter shipped 8 stable releases in 2025 / has been the #1 cross-platform
  framework for 4 years."** This momentum claim **FAILED verification** — do not
  repeat it as fact.

## Load-Bearing Unverified Items

These underpin parts of the recommendation and still need first-hand confirmation
before they are treated as settled:

- **Carnelian's current maturity** for a full shell — performance, accessibility,
  input, and text-shaping — beyond the "prototype" self-label [4].
- **`yoga-rs` current maintenance/freshness** — the Yoga-in-Rust plan in the verdict
  depends on it [31].
- **The modern, post-topaz Fuchsia system-UI stack** — what Google actually runs as
  system UI today.
- **Exact Flutter team headcount and all market-share percentages** — the ~50-person
  figure is approximate [47][48].
- **Whether the Flutter runner still builds in the current SDK** at all, given the
  3.27.0 tooling deletion [8].
- **The ~1–2 engineer-quarter estimate** for a swift-cross-ui Carnelian backend is
  LOW-confidence judgement, not a measured figure.

## References

External sources accessed 2026-07-14. Project/vendor documentation and source
repositories are treated as primary; named analyses and community repos are used
where they are the clearest available description.

1. Fuchsia — Flatland (Scenic). https://fuchsia.dev/fuchsia-src/concepts/ui/scenic/flatland
2. Fuchsia — Scenic (system compositor overview). https://fuchsia.dev/fuchsia-src/concepts/ui/scenic
3. Fuchsia — Carnelian README (source). https://fuchsia.googlesource.com/fuchsia/+/refs/heads/main/src/lib/ui/carnelian/README.md
4. Fuchsia — Carnelian (source tree). https://fuchsia.googlesource.com/fuchsia/+/master/src/lib/ui/carnelian
5. boringcactus — 2025 Survey of Rust GUI Libraries. https://www.boringcactus.com/2025/04/13/2025-survey-of-rust-gui-libraries.html
6. Zed Industries — awesome-gpui. https://github.com/zed-industries/awesome-gpui
7. Fuchsia — 2021 Roadmap: Flutter on Fuchsia velocity. https://fuchsia.dev/fuchsia-src/contribute/roadmap/2021/flutter_on_fuchsia_velocity
8. Flutter — Release notes 3.27.0. https://docs.flutter.dev/release/release-notes/release-notes-3.27.0
9. Fuchsia — flutter-embedder (out-of-tree). https://fuchsia.googlesource.com/flutter-embedder/
10. Chromium — fuchsia_web README. https://chromium.googlesource.com/chromium/src/+/HEAD/fuchsia_web/README.md
11. 9to5Google — Google is no longer bringing the full Chrome browser to Fuchsia (Jan 2024). https://9to5google.com/2024/01/15/google-is-no-longer-bringing-the-full-chrome-browser-to-fuchsia/
12. Fuchsia — Starnix. https://fuchsia.dev/fuchsia-src/concepts/starnix
13. Microsoft — Fluent 2 design tokens. https://fluent2.microsoft.design/design-tokens
14. W3C — Design Tokens specification reaches first stable version (Oct 2025). https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/
15. 9to5Google — Google Fuchsia OS Apple Swift support. https://9to5google.com/2017/11/20/google-fuchsia-os-apple-swift-support/
16. Fuchsia — third_party/swift (fork). https://fuchsia.googlesource.com/third_party/swift/
17. Swift — Platform support matrix. https://www.swift.org/platform-support/
18. Swift — Get started with Embedded Swift. https://www.swift.org/get-started/embedded/
19. Swift Evolution — Embedded Swift vision. https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md
20. Swift — C++ interoperability documentation. https://www.swift.org/documentation/cxx-interop/
21. TokamakUI — Tokamak (archived). https://github.com/TokamakUI/Tokamak
22. stackotter — swift-cross-ui. https://github.com/stackotter/swift-cross-ui
23. skiptools — skip-ui (SkipUI). https://github.com/skiptools/skip-ui
24. kean.blog — The SwiftUI layout system. https://kean.blog/post/swiftui-layout-system
25. SwiftUI Field Guide — HStack (layout). https://www.swiftuifieldguide.com/layout/hstack/
26. Swift with Majid — Building custom layout in SwiftUI (basics). https://swiftwithmajid.com/2022/11/16/building-custom-layout-in-swiftui-basics/
27. tiepvuvan — Yoga-SwiftUI (dormant). https://github.com/tiepvuvan/Yoga-SwiftUI
28. layoutBox — FlexLayout (UIKit Yoga binding). https://github.com/layoutBox/FlexLayout
29. facebook/react-native — Issue #20522 (Fuchsia support request, bot-closed). https://github.com/facebook/react-native/issues/20522
30. Yoga — About Yoga. https://www.yogalayout.dev/docs/about-yoga
31. facebook/yoga. https://github.com/facebook/yoga
32. danialdezfouli — flutterjsx. https://github.com/danialdezfouli/flutterjsx
33. Flutter API — Flex class. https://api.flutter.dev/flutter/widgets/Flex-class.html
34. Flutter API — Expanded class. https://api.flutter.dev/flutter/widgets/Expanded-class.html
35. join-the-flock — flock. https://github.com/join-the-flock/flock
36. getflocked.dev — We are forking Flutter. This is why. https://getflocked.dev/blog/posts/we-are-forking-flutter-this-is-why/
37. getflocked.dev — The Flock is migrating to a new domain. https://getflocked.dev/blog/posts/the-flock-is-migrating-to-a-new-domain/
38. InfoWorld — Google's Flutter framework has been forked. https://www.infoworld.com/article/3595687/googles-flutter-framework-has-been-forked.html
39. Dart — Announcing Dart 3.12. https://dart.dev/blog/announcing-dart-3-12
40. Dart — An update on Dart macros & data serialization. https://dart.dev/blog/an-update-on-dart-macros-data-serialization
41. Flutter — Web/WASM support. https://docs.flutter.dev/platform-integration/web/wasm
42. Dart — WebAssembly (dart2wasm). https://dart.dev/web/wasm
43. Google Open Source Blog — Jaspr: why web development in Dart might just be a good idea (Apr 2026). https://opensource.googleblog.com/2026/04/jaspr-why-web-development-in-dart-might-just-be-a-good-idea.html
44. Flutter Blog — We rebuilt Flutter's websites with Dart and Jaspr. https://blog.flutter.dev/we-rebuilt-flutters-websites-with-dart-and-jaspr-317c00e8b400
45. flutter/flutter — Roadmap. https://github.com/flutter/flutter/blob/master/docs/roadmap/Roadmap.md
46. Flutter Blog — Flutter & Dart's 2026 roadmap. https://blog.flutter.dev/flutter-darts-2026-roadmap-89378f17ebbd
47. TechCrunch — Google lays off staff from Flutter, Dart, Python (May 2024). https://techcrunch.com/2024/05/01/google-lays-off-staff-from-flutter-dart-python/
48. The Register — Google Python, Flutter layoffs. https://www.theregister.com/2024/04/29/google_python_flutter_layoffs/

## Related Documents

- [AOS-RES-013: OS Comparison Matrix — iOS vs Android vs Agent OS](AOS-RES-013-os-comparison-matrix.md)
- [AOS-RES-014: System Survey — What Agent OS Takes From Twenty-One Prior Operating Systems](AOS-RES-014-system-survey.md)
- [AOS-RES-012: Fuchsia/Zircon-Fork Specification — Engineering Digest](RES-012-fuchsia-spec-lessons.md)

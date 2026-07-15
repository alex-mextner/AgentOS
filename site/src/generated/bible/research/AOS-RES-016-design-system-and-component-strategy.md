---
id: "AOS-RES-016"
title: "AgentOS Design System & Component Strategy"
status: "Research-backed evidence map"
version: "1.0.0"
baseline_date: "2026-07-14"
owners: "Research Lead / Shell & UI Working Group"
audience: "Engineering, product, and design leadership"
summary: "A decision-oriented, sourced report on the design-system, component-library, and Rust-GUI-framework decision for the AgentOS shell, synthesising three independent research rounds. It separates two independent decisions: the visual design LANGUAGE (DECIDED by the owner: shadcn/ui, MIT — Radix-primitive semantics plus a Tailwind neutral aesthetic, adopted as a token/aesthetic language and reimplemented natively, since shadcn's React code does not run on Fuchsia) and the GUI ENGINE that renders it (recommendation: Carnelian + taffy, independent of the design-language choice). It surveys the licensing of every candidate design system and component library across the React, Flutter, and Rust ecosystems, filters them by a permissive-licensing test, and explains why MUI, shadcn, and Flutter are design REFERENCES rather than runtime dependencies on Fuchsia. It corrects a maturity claim in AOS-RES-015 (the Fuchsia flutter-embedder is dead, not maintained), analyses the decision-critical Slint license, and maps the anti-correlation between Rust-GUI component maturity and Fuchsia fit. Every external claim carries a confidence marker and an inline citation; recorded decisions, remaining open decisions, and load-bearing unverified items are called out so no one cites them as settled."
---

# AgentOS Design System & Component Strategy

> A research-grade evaluation of the design-system, component-library, and
> Rust-GUI-framework decision for the AgentOS shell. Each major claim carries a
> confidence marker (HIGH / MEDIUM / LOW) and an inline citation to an external
> source (numbered references at the bottom, accessed 2026-07-14) or an internal
> AOS-* document. This document consolidates three independent research rounds and
> **builds directly on [AOS-RES-015](AOS-RES-015-shell-ui-stack.md)**, which
> selected Rust/Carnelian-on-Flatland as the shell base. It carries one explicit
> correction to AOS-RES-015 (the Fuchsia `flutter-embedder`; see Section 3). Where
> a position rests on judgement or interpretation rather than a source, the prose
> says so and marks it LOW confidence. Three categories are called out explicitly:
> the **DECISION** the owner has recorded (design language = shadcn/ui), the
> **OPEN DECISIONS** that remain the owner's to make, and the **load-bearing
> UNVERIFIED** items that the recommendation depends on and that still need
> first-hand confirmation.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [How to Read This Document](#how-to-read-this-document)
- [Two Independent Decisions](#two-independent-decisions)
- [1. Design System as the Base Spec](#1-design-system-as-the-base-spec)
- [2. Component Libraries by Ecosystem and License](#2-component-libraries-by-ecosystem-and-license)
- [3. The Portability Reality — References, Not Runtime Deps](#3-the-portability-reality--references-not-runtime-deps)
- [4. Rust GUI Frameworks — Maturity vs Fuchsia Fit](#4-rust-gui-frameworks--maturity-vs-fuchsia-fit)
- [5. Decision and Recommended Architecture](#5-decision-and-recommended-architecture)
- [Recorded Decisions](#recorded-decisions)
- [Open Decisions](#open-decisions)
- [Load-Bearing Unverified Items](#load-bearing-unverified-items)
- [References](#references)
- [Related Documents](#related-documents)

## Purpose and Scope

AgentOS ships on a Fuchsia/Zircon fork ([AOS-RES-012](RES-012-fuchsia-spec-lessons.md)),
and [AOS-RES-015](AOS-RES-015-shell-ui-stack.md) landed the base-layer verdict:
Rust/Carnelian-on-Flatland, with a thin declarative layer built on top. This
document takes the next question in sequence — *what goes on top of that base*: the
design system that specifies the look, the component set that realises it, and the
Rust GUI framework (if any) that supplies mature widgets.

It is a decision report, not an implementation plan. Its job is to keep two
decisions from being fused into one accidental default. The **design language** (what
AgentOS looks like) and the **GUI engine** (what renders it) are independent choices
with independent constraints: the engine decision is driven by Fuchsia portability
and licensing, the design-language decision by product identity and owner
preference. This document makes a firm engine recommendation (Carnelian + taffy)
and records the owner's design-language decision (**shadcn/ui**, MIT); the two
were chosen against different constraints and neither dictates the other.

## How to Read This Document

- **Confidence markers** on each major claim: **HIGH** (multiple primary sources or
  an authoritative vendor/project statement), **MEDIUM** (single source, or an
  inference from documented behaviour), **LOW** (judgement / estimate / conservative
  interpretation, explicitly flagged).
- **Inline citations** are bracketed reference numbers `[n]` resolving to the
  [References](#references) section, or internal `AOS-*` document IDs.
- A **license classification** (permissive vs copyleft) is a reading of the named
  LICENSE file and, for design guidelines, of the site's own stated terms; where a
  site states no explicit license, that absence is reported as such, not as a
  permissive grant.
- **OPEN DECISIONS** and **UNVERIFIED** call-outs are collected in their own sections
  near the end and must be read before quoting any recommendation as settled.

---

## Two Independent Decisions

The single most important framing in this document: the AgentOS shell involves two
orthogonal decisions that must not collapse into one.

1. **The visual design language** — **DECIDED by the owner: shadcn/ui** (MIT), a
   Radix-primitive + Tailwind aesthetic (see [Recorded Decisions](#recorded-decisions)
   and Section 1). The licensing survey below documents the alternatives that were
   weighed; the choice is made.
2. **The GUI engine** — what actually rasterises pixels and handles input on
   Fuchsia. This document **does** make a recommendation (Carnelian + taffy,
   Section 5), and that recommendation is **design-system-agnostic**: it holds
   whichever visual language is chosen, because the engine renders tokens and
   widgets regardless of their styling.

Keeping these separate matters because the ecosystems tempt you to fuse them
("we chose shadcn/ui, therefore use React and a DOM"). On Fuchsia that chain
breaks at the engine (Section 3): a design language is portable, its reference
implementation usually is not. shadcn/ui's React/Radix/Tailwind code does not run
on Fuchsia; what AgentOS adopts is its *aesthetic and token language*, rendered by
the native engine.

## 1. Design System as the Base Spec

**DECISION (owner): the AgentOS design language is shadcn/ui.** shadcn/ui is MIT —
a collection of components built on Radix UI primitives (accessible, unstyled
behaviour) with a Tailwind-based neutral aesthetic [25][8] (HIGH on the MIT status).
The owner selected it for its clean neutral scale, excellent dark-mode defaults, and
low visual "template" signature. What AgentOS adopts is shadcn/ui's **aesthetic and
token language** — the neutral colour scale, Inter type, subtle 1px borders,
`rounded-md` corner radius, and a dark-first palette — **reimplemented in the native
Rust/Carnelian stack**. shadcn/ui's React + Radix + Tailwind implementation does
**not** run on Fuchsia (Section 3); it is a design REFERENCE, not a runtime
dependency. This design-language decision is **independent of** the GUI-engine
decision (Section 5): Carnelian + taffy render the shadcn aesthetic natively.

The rest of this section records the **alternatives that were weighed** before the
shadcn decision — kept as licensing evidence, not as live contenders.

**Material Design 3 (M3) was the most permissively-licensed of the design-*system*
specs.** M3 is the only surveyed system that explicitly and permissively licenses
its *guidelines and content*: dual **Apache-2.0 OR CC BY 4.0**, atop Apache-2.0
reference code and Apache-2.0 system icons [1][2][3] (HIGH). That makes the
*specification itself* (token taxonomy, component semantics, theming model) legally
safe to adopt and reimplement. It was the strongest Material-family option and
remains a useful cross-reference for token taxonomy even though shadcn/ui was chosen.

**Fluent 2's licensing was weaker for "adopt the spec".** Fluent's reference code
(`microsoft/fluentui`) and its system icons are MIT [4][5] (HIGH), so the *assets*
are reusable — but the Fluent 2 design **guidelines** site states no explicit open
license for its content [6] (MEDIUM; the guidelines-content license is UNVERIFIED as
permissive — treat it as all-rights-reserved until Microsoft says otherwise). An
unlicensed-guidelines site is a materially worse starting point than M3's dual grant.

**A bespoke original AgentOS design language** carried no third-party licensing
constraint at all — its cost was design effort and the loss of an off-the-shelf
token taxonomy to crib from. It was on the table and was not chosen.

### Table 1 — Design-language options weighed (licensing view; shadcn/ui chosen)

| Candidate | Content/guidelines license | Reference code | Icons | Status |
| --- | --- | --- | --- | --- |
| **shadcn/ui** (Radix + Tailwind) | MIT [25] | MIT [25][8] | Lucide (ISC, via shadcn) | **CHOSEN — adopted as aesthetic/token language, reimplemented natively** |
| Material Design 3 (M3) | Apache-2.0 OR CC BY 4.0 (dual) [1] | Apache-2.0 [3] | Apache-2.0 [2] | Cleanest design-*system* spec; not chosen (HIGH) |
| Fluent 2 | No explicit open license stated [6] | MIT [4] | MIT [5] | Assets reusable; guidelines license unclear (MEDIUM) |
| Bespoke AgentOS system | N/A (owned) | N/A | N/A | No license constraint; higher design cost; not chosen (HIGH) |

shadcn/ui's permissive MIT terms mean its component patterns and token conventions
can be adopted and reimplemented in a proprietary OS with no copyleft exposure — the
same permissive property M3 offered, with the aesthetic the owner preferred.

## 2. Component Libraries by Ecosystem and License

Independent of which design language wins, it is worth knowing which existing
component libraries are permissively licensed — because they are candidate
*references* for the token/component inventory (Section 3 explains why "reference"
and not "dependency"). The filter applied here is a **permissive-licensing test**:
MIT / BSD / Apache-2.0 for code, plus CC-BY for content, are safe to ship inside a
proprietary OS; **MPL-2.0 / LGPL / GPL / AGPL are copyleft and are avoided in the
product** [14] (HIGH).

### React

The React ecosystem is almost uniformly permissive. **MUI Core (`@mui/material`) is
fully MIT** and complete enough to model an entire shell; every paid gate lives in
**MUI X** (Data Grid, Date/Time Pickers, Charts — the Pro/Premium tiers), none of
which a phone shell needs [7] (HIGH). **Radix, shadcn/ui, Chakra, Mantine, Ant
Design, Base UI, and Headless UI are all MIT** [8][9][10] (HIGH). For pure
reference value — component inventory, prop shapes, accessibility patterns — the
React ecosystem is unencumbered.

### Flutter

Flutter's **built-in Material and Cupertino widget sets are BSD-3-Clause**
(permissive, verified) and M3 has been the Flutter default since 3.16 [11][12]
(HIGH). This is the most mature cross-platform Material widget set in existence and
the best single reference for "what a complete M3 component inventory looks like in
practice". The community layer is also permissive: **forui (MIT, 0.x), shadcn_flutter
(BSD-3, early), GetWidget (MIT, oldest), fluent_ui (BSD-3), macos_ui (MIT)** [13]
(HIGH) — useful as secondary references, though most are early-stage.

### Rust

No Rust GUI library is simultaneously permissively-licensed, Fuchsia-viable, **and**
mature. That anti-correlation is the subject of Section 4 and its table.

### Table 2 — Component-library licensing by ecosystem (reference candidates)

| Ecosystem | Library | License | Notes |
| --- | --- | --- | --- |
| React | MUI Core (`@mui/material`) | MIT [7] | Complete for a shell; paid gates only in MUI X |
| React | Radix / shadcn/ui / Chakra / Mantine / Ant Design / Base UI / Headless UI | MIT [8][9][10] | All permissive |
| Flutter | Built-in Material / Cupertino | BSD-3-Clause [11] | M3 default since 3.16 [12]; most mature widget set |
| Flutter | forui / GetWidget / macos_ui | MIT [13] | Community; early-to-mature |
| Flutter | shadcn_flutter / fluent_ui | BSD-3-Clause [13] | Community; early |
| Rust | (see Section 4) | mixed | None permissive + Fuchsia-viable + mature at once |

## 3. The Portability Reality — References, Not Runtime Deps

The reason Sections 1–2 speak of *references* rather than *dependencies* is that the
mature ecosystems do not run on Fuchsia.

**React-based libraries — including shadcn/ui and MUI — are web/DOM and do not run
on Fuchsia/Carnelian.** Only the *design language* (tokens, component semantics,
aesthetic) is portable; the React implementation is not — there is no DOM, no
browser runtime, and no React reconciler target on Carnelian [15] (HIGH). The chosen
shadcn/ui and the surveyed MUI Core are therefore design references (token taxonomy,
component set, theming model), not shippable runtime layers. The shadcn aesthetic is
adopted; its Radix/Tailwind/React code is not shipped.

**Flutter-on-Fuchsia is a trap, and this corrects [AOS-RES-015](AOS-RES-015-shell-ui-stack.md).**
AOS-RES-015 Section 1 stated that what remains of Flutter-on-Fuchsia is "an
experimental, out-of-tree custom embedder" and left the impression it is a
maintained path. That is too generous. Two facts sharpen it:

- Upstream Flutter **deleted its in-tree Fuchsia tooling** in release 3.27.0 (PR
  #154880) [16][17] (HIGH).
- The out-of-tree `flutter-embedder` repository shows **no commits in roughly three
  years** (since about early 2023) [18] (HIGH) — it is effectively **dead**, not
  "maintained by the Fuchsia team".

> **Correction to AOS-RES-015.** AOS-RES-015 should not be read as implying the
> Fuchsia `flutter-embedder` is a live, maintained path. It is abandoned. Running
> Flutter UI on Fuchsia today means owning a **dead custom C++ embedder plus the
> entire Dart runtime forever, with zero upstream CI** — a standing liability, not a
> shortcut. Where AOS-RES-015 and this document differ on the embedder's status,
> **this document (RES-016) is authoritative.**

**Conclusion.** Treat MUI Core and Flutter's Material library as **design
references** — for the token taxonomy, the component inventory, and the M3 theming
model — and **not** as runtime dependencies on Fuchsia (HIGH). Whatever ships on the
device is rendered by a Fuchsia-native engine (Section 4).

## 4. Rust GUI Frameworks — Maturity vs Fuchsia Fit

Since the runtime must be native, the natural question is whether an existing Rust
GUI framework can supply mature widgets on Fuchsia. The finding is that component
maturity and Fuchsia fit are **anti-correlated**: the mature, batteries-included
frameworks all reach the screen through a windowing/GPU stack that has no Fuchsia
backend, while the one framework that could sit on Fuchsia's framebuffer carries a
license landmine.

**The shared dead end is `winit`.** Slint, Dioxus, Iced, egui, Xilem, Vizia, Floem,
and Freya all reach the screen through `winit`, which has **no Fuchsia backend** in
its documented platform-feature matrix [19] (HIGH). They therefore share the same
Fuchsia windowing/composition dead end regardless of their individual maturity.

**`wgpu` is unproven greenfield on Fuchsia.** `wgpu` could in principle target
Fuchsia's Magma/Vulkan, but there is **no Fuchsia surface/swapchain glue and no
prior art** [20] (MEDIUM) — a greenfield spike, not a supported path.

**Slint is the license-critical case.** Slint is tri-licensed: **GPL-3.0-only**, OR a
royalty-free tier for proprietary **desktop/mobile/web apps** (embedded **excluded**),
OR a paid **per-device** tier for embedded (roughly $1/device) [21][22] (HIGH). A
device OS is "embedded", so the free proprietary tier **likely does not cover
AgentOS**, leaving GPLv3 (viral, unacceptable in the product) or pay-per-device.
This embedded classification is a conservative **interpretation**, not a Slint
statement — flag it (LOW on the classification; HIGH on the license terms
themselves). **Get a written ruling from Slint before building on it.** Slint's
unique technical draw is that it ships a **software renderer** (framebuffer, no
`winit`) — the one mature DSL that could sit directly on Carnelian's
display-coordinator buffer with weeks-to-months of glue.

**`taffy` is the layout building block.** `taffy` (MIT, pure-Rust CSS Block +
Flexbox + Grid; from DioxusLabs; the spiritual Rust successor to Yoga via the
`stretch` fork) is the layout engine for a hand-built Rust component layer [23]
(HIGH). It strictly dominates a `yoga-rs`-style binding: same CSS layout semantics,
no C++ FFI. (This supersedes the AOS-RES-015 verdict's "embed Yoga via `yoga-rs`"
building block — `taffy` is the pure-Rust replacement for exactly that role.)

**Carnelian is the only Fuchsia-native option.** Carnelian renders via Flatland or
directly to the display coordinator, but it has **no component/design-system layer**
— it is a prototype rendering/input framework, not a widget set [24] (HIGH). The
component layer must be built.

### Table 3 — Rust GUI frameworks: component maturity vs Fuchsia fit

| Framework | License | Component maturity | Declarative model | Rendering backend | Fuchsia portability |
| --- | --- | --- | --- | --- | --- |
| Slint | GPL-3.0 / royalty-free (apps) / paid per-device (embedded) [21][22] | High (mature DSL, LSP, live preview) | `.slint` markup DSL | Own renderer (incl. **software/framebuffer**) or `winit`+GPU | **Best** — software renderer can target Carnelian framebuffer; license is the blocker |
| Dioxus | MIT/Apache-2.0 | Medium-high | RSX (React-like) | `winit` + wgpu/WebView | Dead end via `winit` [19] |
| Freya | MIT | Low-medium | RSX (Dioxus core) | `winit` + Skia | Dead end via `winit` [19] |
| egui | MIT/Apache-2.0 | Medium (immediate-mode) | Immediate-mode | `winit` + wgpu/glow | Dead end via `winit` [19] |
| Iced | MIT | Medium | Elm-like (TEA) | `winit` + wgpu | Dead end via `winit` [19] |
| Xilem | Apache-2.0 | Low (experimental) | Reactive (Rust) | `winit` + Vello/wgpu | Dead end via `winit` today [19]; cleanest future stack |
| GPUI | Apache-2.0 | Medium-high (Zed) | Rust reactive | Bespoke platform layer | No Fuchsia backend (macOS/Win/Linux only) |
| Makepad | MIT/Apache-2.0 | Medium | Live DSL | Bespoke platform layer | No Fuchsia backend |
| Vizia | MIT | Low-medium | Reactive (lens) | `winit` + wgpu | Dead end via `winit` [19] |
| Floem | MIT/Apache-2.0 | Low-medium | Reactive (fine-grained) | `winit` + wgpu | Dead end via `winit` [19] |
| Carnelian | BSD-3-Clause (Fuchsia) | None (prototype; no widgets) [24] | None (imperative primitives) | Flatland / display coordinator | **Native** — the only first-class Fuchsia option |
| `taffy` (layout only) | MIT [23] | N/A (layout engine, not widgets) | N/A | N/A (no rendering) | Portable pure Rust — the layout building block |

The pattern is unmistakable: every framework with mature components fails on Fuchsia
windowing, and the only Fuchsia-native option has no components. Slint is the single
partial exception (software renderer), and it is gated on a license question.

## 5. Decision and Recommended Architecture

**No single framework gives mature permissively-licensed components AND a Fuchsia
path** — the two axes are anti-correlated (Section 4). The engine decision therefore
cannot be "adopt framework X"; it is "build on the native base and pay for the
component layer deliberately". Two points frame the recommendation up front:

- The **engine recommendation below is design-system-agnostic.** It renders the
  chosen shadcn/ui aesthetic natively, and would equally render Material or Fluent —
  the engine renders tokens and widgets independent of their styling. The engine
  choice and the design-language choice are **independent decisions** (see
  [Two Independent Decisions](#two-independent-decisions)).
- The **design language is decided** — shadcn/ui (MIT), adopted as an aesthetic/token
  language and reimplemented natively (Section 1, [Recorded Decisions](#recorded-decisions)).

### Recommended (safe default): Carnelian + a hand-rolled component layer on `taffy`

Build the AgentOS shell on **Carnelian**, with a **hand-rolled component layer using
`taffy` (MIT) for flexbox/grid layout** [23][24], implementing the chosen shadcn/ui
aesthetic as a token/component set on top. This is the clean-license,
native-Fuchsia-fit option. The cost is high — AgentOS owns the widget set, text/IME,
theming, and a declarative description layer — but it carries **no license or
portability landmine**, which is exactly the property a device OS foundation needs.
This continues the AOS-RES-015 verdict (Carnelian base + a thin declarative layer),
replacing that document's Yoga/`yoga-rs` layout building block with the pure-Rust
`taffy`.

### Parallel fast-track to evaluate: Slint's software renderer over Carnelian

In parallel, evaluate **Slint's software renderer over Carnelian's framebuffer** —
the fastest route to a mature declarative DSL (Material/Fluent styling, LSP, live
preview) with weeks-to-months of glue rather than owning a widget set from scratch
[21][22]. **Do not build on Slint without a written license ruling** clearing the
device-OS/embedded classification (or an accepted per-device fee). This track is
promising precisely because Slint is the only mature DSL that does not depend on
`winit`.

### Watch (not now): Xilem / Vello

**Xilem + Vello (Apache-2.0)** is the cleanest *future* pure-Rust stack, but it is
experimental and not production-ready in 2026 (Section 4). Track it; do not commit
the shell to it yet.

### Reject

- **`winit`-based frameworks expecting a Fuchsia path** (Dioxus, Iced, egui, Freya,
  Vizia, Floem, and Xilem *as a near-term Fuchsia target*) — the shared `winit` dead
  end [19].
- **GPUI and Makepad** — bespoke platform layers with no Fuchsia backend.
- **Flutter and SwiftUI as runtimes** — dead/absent on Fuchsia ([Section 3](#3-the-portability-reality--references-not-runtime-deps),
  and AOS-RES-015 Sections 1 and 4).

### Design tokens

Implement the shadcn/ui aesthetic as a **two-layer token system** (global raw tokens
→ semantic/alias tokens, with light/dark variants), consistent with the W3C
design-token model carried forward from [AOS-RES-015](AOS-RES-015-shell-ui-stack.md)
Section 3. Concretely, the global layer encodes shadcn's neutral colour scale, Inter
type ramp, border widths, and the `rounded-md` radius; the semantic layer maps them
to roles (background, foreground, muted, border, primary, destructive) with a
dark-first default. The two-layer architecture is engine-neutral: the same tokens
feed the native Carnelian component layer.

## Recorded Decisions

The owner has made these calls; this document records them as settled:

- **Visual design language = shadcn/ui (MIT).** A Radix-primitive + Tailwind neutral
  aesthetic [25][8], chosen for its clean neutral scale, strong dark-mode defaults,
  and low template signature. Adopted as an **aesthetic and token language** (neutral
  scale, Inter, subtle borders, `rounded-md`, dark-first) and **reimplemented in the
  native Rust/Carnelian stack** — shadcn's React/Radix/Tailwind code does not run on
  Fuchsia and is not shipped (Sections 1 and 3). This decision is **independent of**
  the GUI-engine recommendation.
- **GUI engine = Carnelian + `taffy`** (safe-default recommendation, Section 5),
  independent of the design language above.

## Open Decisions

These remain the owner's to make and are **not** resolved by this document:

- **Whether to run the Slint fast-track at all**, which is gated on the owner's
  appetite for the license-ruling / per-device-fee path (Section 5).

## Load-Bearing Unverified Items

These underpin parts of the recommendation and still need first-hand confirmation
before they are treated as settled:

- **Slint's device-OS license classification.** The "embedded, therefore not covered
  by the free proprietary tier" reading is a conservative interpretation, not a
  Slint statement — **get a written ruling** before building on Slint [21][22].
- **Whether `wgpu` has ever run on Fuchsia Magma/Vulkan.** No prior art was found;
  the surface/swapchain glue is unproven greenfield [20].
- **`yoga-rs` wrapper license.** Moot for the recommendation — `taffy` dominates it
  and removes the C++ FFI question entirely [23] — but noted for completeness.
- **Carnelian's current accessibility, IME, and text-shaping maturity** for a full
  shell, beyond its prototype self-label [24]. (Tracked jointly with the AOS-RES-015
  Carnelian-maturity unknown.)

## References

External sources accessed 2026-07-14. Project/vendor documentation, license files,
and source repositories are treated as primary.

1. Material Design 3 (M3). https://m3.material.io/
2. google/material-design-icons — LICENSE (Apache-2.0 icons). https://github.com/google/material-design-icons/blob/master/LICENSE
3. google/material-design-lite — LICENSE (Apache-2.0 reference code). https://github.com/google/material-design-lite/blob/mdl-1.x/LICENSE
4. microsoft/fluentui (MIT reference code). https://github.com/microsoft/fluentui/
5. microsoft/fluentui-system-icons — LICENSE (MIT icons). https://github.com/microsoft/fluentui-system-icons/blob/main/LICENSE
6. Microsoft — Fluent 2 design guidelines. https://fluent2.microsoft.design/
7. MUI — X licensing (MIT Core vs paid MUI X). https://mui.com/x/introduction/licensing/
8. mui/base-ui — LICENSE (MIT). https://github.com/mui/base-ui/blob/master/LICENSE
9. chakra-ui/chakra-ui — LICENSE (MIT). https://github.com/chakra-ui/chakra-ui/blob/main/LICENSE
10. ant-design/ant-design — LICENSE (MIT). https://github.com/ant-design/ant-design/blob/master/LICENSE
11. flutter/flutter — LICENSE (BSD-3-Clause). https://github.com/flutter/flutter/blob/master/LICENSE
12. Flutter — Material 3 default (since 3.16). https://docs.flutter.dev/release/breaking-changes/material-3-default
13. pub.dev — forui (community Flutter widgets, MIT). https://pub.dev/packages/forui
14. Apache Software Foundation — third-party license policy (permissive vs copyleft categories). https://www.apache.org/legal/resolved.html
15. Fuchsia — Carnelian (source tree). https://fuchsia.googlesource.com/fuchsia/+/master/src/lib/ui/carnelian
16. Flutter — Release notes 3.27.0 (Fuchsia tooling removed). https://docs.flutter.dev/release/release-notes/release-notes-3.27.0
17. flutter/flutter — PR #154880 (delete in-tree Fuchsia tooling). https://github.com/flutter/flutter/pull/154880
18. Fuchsia — flutter-embedder commit log (no commits in ~3 years). https://fuchsia.googlesource.com/flutter-embedder/+log
19. rust-windowing/winit — FEATURES.md (platform support; no Fuchsia backend). https://github.com/rust-windowing/winit/blob/master/FEATURES.md
20. gfx-rs/wgpu. https://github.com/gfx-rs/wgpu
21. slint-ui/slint — LICENSE.md (tri-license). https://github.com/slint-ui/slint/blob/master/LICENSE.md
22. Slint — pricing (royalty-free apps vs per-device embedded). https://slint.dev/pricing
23. DioxusLabs/taffy (MIT; pure-Rust CSS Block/Flexbox/Grid). https://github.com/DioxusLabs/taffy
24. Fuchsia — Carnelian README (prototype; no design-system layer). https://fuchsia.googlesource.com/fuchsia/+/refs/heads/main/src/lib/ui/carnelian/README.md
25. shadcn-ui/ui — shadcn/ui (MIT; Radix primitives + Tailwind). https://github.com/shadcn-ui/ui

## Related Documents

- [AOS-RES-013: OS Comparison Matrix — iOS vs Android vs Agent OS](AOS-RES-013-os-comparison-matrix.md)
- [AOS-RES-014: System Survey — What Agent OS Takes From Twenty-One Prior Operating Systems](AOS-RES-014-system-survey.md)
- [AOS-RES-015: Shell UI Stack — Options, Feasibility, Recommendation](AOS-RES-015-shell-ui-stack.md)

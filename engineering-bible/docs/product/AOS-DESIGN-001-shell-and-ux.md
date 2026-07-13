---
id: "AOS-DESIGN-001"
title: "Shell and UX Design"
status: "Proposal — awaiting sign-off"
version: "0.1.0-proposal"
baseline_date: "2026-07-13"
owners: "Product Architecture"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Shell and UX Design: the concrete surface, interaction model, information architecture, and visual direction for the Agent OS shell, traced to the UX research corpus and to the normative product specifications."
---
# Shell and UX Design

> This document proposes the user-facing shell for Agent OS: what the user sees, how
> entities and agents are presented, and the visual and interaction language that
> carries the product thesis. It is a design proposal for sign-off, not a normative
> baseline. On approval it becomes the design authority for `AOS-PROD-050`
> (entity-first shell skeleton), `AOS-PROD-051` (IntentBox), and the surfaces in
> `AOS-PROD-001`, `AOS-PROD-002`, and `AOS-PROD-007`.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Research Basis](#research-basis)
- [Design Principles](#design-principles)
- [Information Architecture](#information-architecture)
- [Core Surfaces](#core-surfaces)
- [Interaction Model](#interaction-model)
- [Visual Direction](#visual-direction)
- [Accessibility and Degradation](#accessibility-and-degradation)
- [Evidence and Acceptance](#evidence-and-acceptance)
- [Open Questions for Sign-off](#open-questions-for-sign-off)
- [Traceability](#traceability)
- [Related Documents](#related-documents)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Product design.

This document owns the visual and interaction design of the Agent OS shell — the
home surface, entity surfaces, the agent activity and global-history surfaces, the
capture and command surfaces, and search. It defines the design language that makes
the entity/agent model legible on a Pixel-9-class handset.

It does not define storage, sync, kernel, or provider internals; those are owned by
the architecture and product specifications it references. It does not assert the
shell is implemented. It defines the target surface and the evidence needed to trust
that an implementation carries the thesis.

<a id="research-basis"></a>

## Research Basis

The design is grounded in the owner's UX research corpus at
`thsm.notion.site/ux-researches` ("UX RESEARCHES"). The hub's stated posture is not
to catalogue individual bugs but to find the *classes and systemic causes* of poor
UX and to move toward "automatic formation of user experience." It positions itself
after Jef Raskin (zoomable UI, no desktop, no filesystem, micro-applications), Bret
Victor, and Edward Tufte, and treats the 2023 AI turn as the enabling condition:
"not software and endless updates, but integrations, automations, and plugins" —
"programs are neurons; the connections between them require all of humanity."

The following corpus pages were read in full and drive the design. Citations below
use these names.

- **IdeaOS** — a new digital environment past the Xerox desktop. "Making a person
  think about applications is an undesirable techno-centric approach." New file model:
  tags, no single root (a *space* instead), no forced hierarchy. Decouple providers /
  documents / UI-widgets, joined by glue and automatic discovery, install, run.
  Local-first *and* document-first: universal formats with extensions layered on top
  preserving base compatibility. Combine the best of web (a URL for any document and
  any of its parts, history navigation, copy, zoom, sandboxing), cloud (collaboration,
  thin clients, decentralization), and native (files, tags, 60/120 fps, gestures).
  Personal data stays with the user (GDPR-friendly), with global auth, global storage,
  and per-vendor access control. Orthogonal system-wide concepts: payments, login,
  hotkeys, interface contracts.
- **FlexLight (ru)** — "Spotlight everywhere," an advanced palette and terminal-for-
  everyone that integrates not only with every system setting and object but with the
  *domain model of every application*. A "window into the digital space": switch,
  search, convert, compute, run commands, snippets, an infinite clipboard. Built-in
  mini-apps that *flow through* into the full application without breaking the flow (the
  research's "flow-throughs"). A single system palette that knows the focused app and its whole
  domain model. Voice is one entry point, not the only one.
- **IntentBox (ru)** — a box where the user writes a task/intent and receives a
  concrete proposed solution, or the intent is recorded and the steps toward it are
  analysed. Hides ML, heuristics, and human-authored hints behind contextual "what you
  likely need next" suggestions. It exists to avoid overloaded interfaces and the
  impossibility of designing every non-primary scenario — those scenarios are
  effectively infinite and cannot live in a fixed static interface. The user can
  preview the result and apply it. Prior art it names: Google Fuchsia's Maxwell AI.
- **SideMemo** — continuous detection and display of *implicit relations*, rendered as
  "footnotes in the right margin." As the user types plain text, the system proposes
  links to entities it already knows — people, tasks, places, files, notes — and
  detects commands and dates in the prose ("do this after that," "in 20 minutes").
  Cross-references are offered automatically and on copy.
- **Proactive UI** (aka Intelligent UI) — the "perceptive" interface: suggest rotate/
  archive/OCR (Google Photos), open Maps for an address in the clipboard (Apple),
  silence notifications the user never reads (Windows) — but done natively and as a
  first-class layer, not as scattered vendor tricks.
- **Domain model in UI** — trace domain objects, properties,
  collections, and actions to concrete UI components. This lets the system highlight
  controls, auto-optimize layout, animate and preview proposed changes, and gate
  available actions and data. A "dynamic semantic web." Action model is CRUD+RPC; the
  visual basis is definition-list / list / table plus semantic markup.
- **Global history / Pattern detection** — if a person
  does all work through one system, it can automate most routine tasks because it
  "understands" the link between inputs and outputs. Separate the rarely-changing,
  confirm-only UI from the changeable smart parts (IntentBox, InlineIntent). Detect
  operation chains and confusion (dead-ends, undo loops); a copy-and-edit-in-two-places
  action becomes a "make this an alias (transclusion)" suggestion.
- **Grumpy chronicles: editing everywhere, tasks first, new clippy** — three owner
  theses: (1) *editing everywhere* — the frustration of not being able to annotate an
  arbitrary object with formatted text, photos, and links, and of not being able to
  cross-reference any entity with any other; (2) *tasks first / document-first* —
  people switch between web services and programs their projects are chaotically split
  across, producing duplication, manual transfer, and thousands of tabs; the fix is an
  OS that understands both local and cloud; (3) *new clippy* — a helpful agent that
  appears when the user is visibly struggling.
- **ZUI (zoomable UI)** — navigate nested objects by zooming their icons, as on a map.
  Snapping zoom to standard distances; "every feature can have an explanation built
  into it" (Raskin); semantic zoom.
- **Continuous Real Preview** — always show the realistic end result alongside the
  work, in every relevant aspect, rather than only a draft preview at the end.
- **TagFS / Tag systems** — tags with aliases, descriptions, and local vs. global
  scope; assisted tagging with linting and auto-fill; showing hierarchy only when the
  user is engaged enough not to be confused by it.

<a id="design-principles"></a>

## Design Principles

Seven principles. Each is traced to the research and to the product specs it must
satisfy.

1. **Entities, not files and apps.** The home surface is a graph of typed entities
   the user recognizes — people, projects, tasks, documents, events, messages,
   devices — not an app grid or a file tree. *Source:* IdeaOS ("making a person think
   about applications is undesirable"), Grumpy chronicles ("tasks first"), and
   `AOS-PROD-001` R01.
2. **The margin is the interface.** The agent lives in the right margin as annotations
   tied to what the user is reading or writing — SideMemo made literal. Boldness is
   spent here; everything else stays quiet. *Source:* SideMemo, Proactive UI.
3. **Propose, preview, apply — never act silently.** Every agent effect is a proposal
   the user can preview against the real result and apply or dismiss; authority climbs
   through explicit trust tiers. *Source:* IntentBox (preview then apply), Continuous
   Real Preview, and `AOS-PROD-009` R01–R03 (typed action providers, trust tiers,
   recorded effects).
4. **One box for intent.** A single command surface (FlexLight) spans the whole system
   and every provider's domain model — search, run, convert, and state an intent — so
   infinite secondary scenarios need not be drawn as fixed screens. *Source:* FlexLight,
   IntentBox, and `AOS-PROD-007`.
5. **History is a first-class surface.** Every entity carries a legible timeline of
   semantic events with provenance and authority; the global journal is browsable and
   reversible. *Source:* Pattern detection, and `AOS-PROD-002` R01–R02 (immutable
   semantic events, per-entity provenance/authority).
6. **Type is structure; structure is visible.** Entity kind, provenance, and edge
   labels are shown, not hidden — they are the schema made visible, which is what lets
   the agent and the user share the same vocabulary. *Source:* Domain model in UI,
   TagFS, and `AOS-PROD-001` R01.
7. **Calm and dense.** Tufte density with Raskin calm: high information per screen,
   quiet chrome, motion only where it explains (a suggested link drawing to its target,
   a semantic zoom). *Source:* the hub's stated lineage (Raskin, Tufte), ZUI.

<a id="information-architecture"></a>

## Information Architecture

**No apps, no files, no home-screen grid.** The unit of navigation is the *entity*.
Entities have a *kind* (person, project, task, document, event, message, device,
place, media), typed *attributes*, typed *edges* to other entities, *provenance* and
*authority*, and a *history* of semantic events. This is the `AOS-PROD-001` model
rendered directly.

- **Spaces** replace the single filesystem root. A space is a saved cluster of the
  graph (a project, a person, a topic) — the "no single root, a space instead" model
  from IdeaOS and TagFS. The user's own person-entity is the default home space.
- **Tags** are the cross-cutting classifier, local or global, assisted and lint-guided
  (TagFS). Tags never require the user to see the full hierarchy.
- **Edges are the content.** A message linked to a task linked to a project linked to a
  person is not four apps' worth of copies — it is one graph with typed edges, which is
  the answer to the "thousands of tabs / manual transfer" pain (Grumpy chronicles).
- **Providers** publish entities, typed actions, and declarative surfaces; the shell
  renders them uniformly (`AOS-PROD-001` R02, `AOS-PROD-011`). The user never learns a
  provider's app; they act on the entity.

<a id="core-surfaces"></a>

## Core Surfaces

Six surfaces. The first three are the hero screens carried in the sign-off mockup.

### 1. Home — the entity graph and spaces

The default surface is the user's person-entity at the center of a small, legible
graph: the projects, people, tasks, events, and messages currently in play, drawn as
typed nodes with labelled edges. A proactive banner at the top surfaces the single
most relevant agent suggestion for right now (Proactive UI). A space switcher lets the
user pivot the graph to a project or a person. Semantic zoom (ZUI) moves between the
whole space and a single entity; zooming in on a node reveals its attributes and
history without a context switch.

### 2. Entity detail — record, edges, history, and the agent margin

Opening an entity shows a typed record: attributes in a definition list, linked
entities as edge-chips grouped by relation, and the entity's **global-history
timeline** of semantic events (created, edited, linked, shared, agent-acted), each with
provenance and authority (`AOS-PROD-002`). The **right margin is the SideMemo agent
rail**: as the user reads or writes, the agent proposes implicit links ("this mentions
*Mira* — link to the person?"), detects dates and commands, and offers pattern-derived
shortcuts ("you tagged the last three the same way — auto-tag?"). Each proposal shows a
preview and an Apply/Dismiss control (IntentBox, trust tiers).

### 3. FlexLight — the intent and command surface

A single palette, summoned anywhere, that spans the system and every provider's domain
model. It is search, launcher, converter, calculator, infinite clipboard, and
IntentBox in one. The user types a query or an intent in plain language; results are
typed and grouped (entities, actions, computations), and an intent produces a *proposed
plan* with a preview before anything runs (Continuous Real Preview). Built-in
mini-results flow through into the full entity surface without breaking the flow
("flow-throughs"). Voice is an alternate entry point, not the only one.

### 4. Capture / Inbox

A frictionless capture surface (text, voice, photo, share-in) that lands raw material
as an untyped entity; SideMemo then proposes its kind, edges, and tags for
confirmation. This is "editing everywhere" and "tell Siri on the run, edit later" made
concrete (Grumpy chronicles). Backed by `AOS-PROD-053` (structured clipboard and share).

### 5. Agent activity / Global journal

A browsable, reversible journal of every agent effect and user action across the
graph, recording planner, model, inputs, authority, cost, destination, result, and
compensation (`AOS-PROD-009` R03). This is where trust is inspected and autonomy is
tuned.

### 6. Search

Typed, full-graph search over entities, attributes, edges, tags, and history — the
same result model as FlexLight, presented as a standing surface for exploration rather
than a transient palette.

<a id="interaction-model"></a>

## Interaction Model

- **SideMemo rail.** Implicit-relation suggestions appear as marginalia connected to
  their trigger by a thin leader line. Suggestions are ranked; a rejected suggestion
  lowers that pattern's weight and yields the slot to the next (Pattern detection).
- **IntentBox proposal lifecycle.** *Observe → Propose → Preview → Apply → Recorded.*
  A proposal never mutates state; Apply runs it as a typed action and writes a
  reversible entry to the journal. This is the visible form of the `AOS-PROD-009`
  trust tiers (observation, proposal, reversible execution, confirmed sensitive
  execution, bounded autonomy).
- **Trust tiers are visible.** Each proposal is badged with the authority it needs.
  Reversible actions apply with one tap; sensitive actions require explicit
  confirmation; bounded-autonomy actions announce what they did and how to undo it.
- **Continuous Real Preview.** Any proposed change shows the realistic result in place
  before Apply — hover/focus preview on the suggestion, a diff on the entity.
- **Semantic zoom (ZUI).** One gesture scale moves space → entity → attribute; zoom is
  navigation, not a separate mode. Snapping to standard levels; explanations can live
  at deep zoom ("every feature can have an explanation built in").
- **Domain-model-driven controls.** Because entities are typed, the shell derives
  controls from the schema: the same record renders as list, table, or definition-list
  with loading and error states handled locally (Domain model in UI). Providers style
  within the system's defaults, not against them.

<a id="visual-direction"></a>

## Visual Direction

The direction is **"typed ink"**: a calm, dense, information-first shell where the
*type system is the visual system*. It deliberately avoids the current generic looks
(cream-and-serif, single-acid-accent-on-black, broadsheet hairlines); its accent
system is not one color but the categorical entity palette, which is intrinsic to the
product rather than decorative.

- **Color — entity kind is the palette.** Each entity kind carries a fixed hue used as
  a small dot, chip, edge label, and node ring: person (amber), project (indigo), task
  (green), document (slate-blue), event (rose), message (cyan), device (bronze). The
  palette is chosen for categorical distinctness and is validated to hold contrast in
  both light and dark. The base is neutral ink — a cool near-black (`#0E1116`) in dark,
  a cool paper (`#F3F5F4`) in light — so the typed hues carry all the meaning. One
  restrained system accent (a signal blue) marks agent proposals only, so "the agent is
  suggesting something" always reads the same way.
- **Typography — a humanist UI voice and a monospace schema voice.** Body and UI use a
  humanist system sans (native to the OS form factor). All *structural* text — entity
  IDs, kinds, edge labels, timestamps, provenance — is set in a monospace face. The
  tension between the two is the point: prose is human, schema is typed, and the eye
  learns the difference. A tight display scale with negative tracking on large
  headings; generous line height in prose; mono set slightly smaller with wider
  tracking so it reads as metadata.
- **Density and structure.** Tufte-dense: many entities and history events per screen,
  hairline dividers only where they encode an edge or a time boundary, near-zero
  decorative chrome. Numbering and eyebrows are used only where the content is truly
  sequential (the proposal lifecycle, the history timeline).
- **The signature: the agent margin.** The right-hand SideMemo rail with leader lines
  to its triggers is the one memorable device. It is the product thesis made visible —
  the agent as marginalia on your own graph — and everything else is kept quiet to let
  it carry the page.
- **Motion.** Minimal and explanatory: a leader line draws when a suggestion appears; a
  semantic zoom eases between levels; the palette rises on summon. All motion respects
  `prefers-reduced-motion`.

<a id="accessibility-and-degradation"></a>

## Accessibility and Degradation

- Entity kind is never encoded by color alone; every chip carries a mono kind-label and
  an icon (`AOS-PROD-005`). The categorical palette is contrast-checked in both themes.
- Full keyboard and switch operation; the SideMemo rail is reachable and dismissible
  without a pointer; focus is always visible.
- When the agent is unavailable, offline, or low-confidence, the shell degrades to the
  plain typed graph with no proposals — never a silent fabricated link (`AOS-PROD-001`
  failure model; `AOS-PROD-009` R01). Absent providers and stale data are shown as
  typed states, not blanks.

<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- A clickable static mockup of the three hero surfaces (Home graph, Entity detail with
  history and SideMemo, FlexLight) for design sign-off. Delivered at
  `design-mockup/agentos-shell.html`.
- After sign-off: an interactive shell skeleton benchmarked against task baselines
  (`AOS-PROD-080`, EXP-070) with accessibility representation.
- IntentBox interpretation and confirmation safety evaluated under time pressure and
  adversarial provider labels (`AOS-PROD-090`, EXP-071).
- Acceptance requires the referenced tasks to meet their own criteria; an approved
  mockup is design authority, not implementation completion.

<a id="open-questions-for-sign-off"></a>

## Open Questions for Sign-off

- **Home = graph vs. list.** The hero proposes a spatial entity graph. A ranked
  entity *list* (an inbox of what matters now) may be faster on a phone and easier to
  make accessible. Should the graph be the default, or a zoom-out view over a
  list-first home?
- **SideMemo density on a handset.** A literal right margin is narrow on a phone.
  Should marginalia collapse into an inline underline-and-tap affordance on small
  screens, expanding to a true rail only on tablet/desktop?
- **Default autonomy tier.** Where should the out-of-box trust tier sit — pure
  observe/propose, or reversible-auto-apply for a safelist of low-risk actions
  (auto-tag, auto-link) with one-tap undo?
- **Palette scope.** Should FlexLight and Search be one surface in two modes, or two
  distinct surfaces? The research treats FlexLight as the universal entry; a separate
  standing Search may be redundant.

<a id="traceability"></a>

## Traceability

| Surface / mechanism | Research source | Product spec |
| --- | --- | --- |
| Entity-graph home, no apps | IdeaOS, Grumpy chronicles | `AOS-PROD-001` |
| Spaces, tags | IdeaOS, TagFS | `AOS-PROD-001`, `AOS-PROD-008` |
| Global-history timeline | Pattern detection | `AOS-PROD-002` |
| SideMemo agent margin | SideMemo, Proactive UI | `AOS-PROD-001`, `AOS-PROD-010` |
| IntentBox proposals, preview/apply | IntentBox, Continuous Real Preview | `AOS-PROD-007`, `AOS-PROD-051` |
| FlexLight command/intent surface | FlexLight | `AOS-PROD-007` |
| Trust tiers, recorded effects | Pattern detection | `AOS-PROD-009` |
| Domain-model-driven controls | Domain model in UI | `AOS-PROD-003`, `AOS-PROD-008` |
| Capture / inbox | Grumpy chronicles | `AOS-PROD-053` |
| Semantic zoom | ZUI | `AOS-PROD-001` |

<a id="related-documents"></a>

## Related Documents

- [Entity-First Shell and Surfaces](AOS-PROD-001.md#normative-position)
- [Global History and Semantic Journaling](AOS-PROD-002.md#normative-position)
- [Actions, Integrations, and Widgets](AOS-PROD-003.md#normative-position)
- [IntentBox and FlexLight](AOS-PROD-007.md#normative-position)
- [Personal Data Authority and Agent Access](AOS-PROD-009.md#normative-position)
- [Transclusion, SideMemo, and Contextual Linking](AOS-PROD-010.md#normative-position)
- [Product Vision](AOS-VSN-001.md#product-thesis)

# Own Mobile OS (Agent OS)

> Revision: 2026-07-10. Source — raw wishlist (kept below as an appendix). This version is
> reconciled with custom-os-fuchsia-spec.pdf (60pp), the repository specs (codename Agent OS,
> ex-AgentOS) (docs/specs/000–050), and the state of the market as of July 2026. Motivation — in
> the "iOS vs Android vs Agent OS" note.

---

## One-line thesis

An open mobile OS where the primary unit is not the app but the entity (person / project / task /
document / event), with capability-scoped agents having access to 100% of actions and data. A fork
of Fuchsia (Zircon/DFv2/Starnix), with the product layer on Rust.

## Why this is even possible (and why now)

- **Fuchsia is alive, but Google isn't aiming it at phones.** After the 2023 cuts (~20% of 400
  people) the team was reduced and smart-speaker plans folded; today Fuchsia runs on the Nest Hub
  (supported through 2026) and as microfuchsia — a guest VM inside Android (AVF/pKVM). For us that
  means: upstream is open and keeps updating, there's no competition for "the Fuchsia phone," but
  no help either. Pin the upstream revision (risk R8, OQ5 — the Starnix ABI moves, Google controls
  it).
- **Platforms have converged and stopped differentiating** (see the adjacent note): feature-based
  differentiation is exhausted; paradigm-based differentiation is wide open.
- **Interop is being reverse-engineered and it sticks.** Google reverse-engineered AirDrop, has
  been shipping it in production since November 2025, Apple hasn't blocked it, and since June 2026
  it's on flagships across the whole ecosystem zoo. That precedent directly de-risks our "Universal
  sharing" item: OpenDrop/uxplay/KDE Connect via Starnix is a working strategy, not a fantasy.
- Value is shifting from the model to **access to data and actions** — exactly what app-centric
  systems can't provide and exactly what we build into the architecture from day zero.

## The vision core — 6 pillars

1. **Entity-first instead of app-centric.** A typed graph: Person, Project/Task, Document,
   Event/Place, Message, Device as nodes; typed edges carrying source and timestamp/confidence. UI
   surfaces ("stories") are assembled around the current entity/task, not an icon grid.
2. **Global history + input registry (Memex).** Like browser history, but for the whole OS:
   navigation, documents, app actions, agent activity. No byte of input is ever lost. Search and
   rollback where safe.
3. **Local-first + CRDT + 100% backup.** Data lives on the device, sync uses off-the-shelf CRDT
   libraries, the cloud is transport/backup. Backup includes secrets and state: a new phone picks
   up exactly where you left off, including an unsaved document.
4. **Agentic layer on a capability model.** Background agents extract entities from sources,
   dedupe, link, keep history, and propose actions. Every agent gets strictly its own handles — no
   ambient authority (the Zircon model). This is simultaneously a feature and the security model.
5. **Interop out of the box.** AirDrop (OpenDrop), AirPlay (uxplay/shairport-sync), Quick Share, a
   shared clipboard with macOS/Ubuntu (KDE Connect/GSConnect) — wrapped via Starnix, not rewritten.
6. **Open source + 100% mirroring of Config ↔ CLI/TUI ↔ API ↔ Settings ↔ GUI.** Anything doable
   with a mouse is doable from a config file or a script. Every menu is editable.

## Architecture (from the spec, by layer)

```
L6 Shell/UI, Entity/Agent, History/Sync, Integrations — FROM SCRATCH (Rust)
L5 Starnix (Linux ABI over Zircon)                     — AS-IS
L4 Camera stack (libcamera, hdr-plus)                  — REVERSE/WRAP
L3 Telephony (Exynos 5400, SIPC, libsamsung-ipc)       — PORT/REVERSE
L2 GPU/Magma (Mali-G715, Panfrost/PanVK knowledge)     — AS-IS + PORT
L1 Bring-up Tensor G4                                  — REVERSE (all of it)
L0 Zircon/DFv2                                         — AS-IS (fork)
```

All contracts between layers are FIDL. That's what makes Track A (the emulator with a mock
substrate) and Track B (real hardware) interchangeable above the contract boundary.

## Two tracks — the main strategic decision

- **Track A (product).** All of L6 in the emulator, mock camera/modem/sensors behind the same FIDL
  contracts. Zero hardware blockers. Milestones: A1 fork+FEMU → A2 shell/compositor
  (Scenic/Flatland) → A3 Entity Store + first agents → A4 history + local-first + CRDT → A5
  integrations + Apple interop.
- **Track B (hardware).** Multi-year, "harder than Asahi." Device choice is under review (see
  Risks and "Widening the Lens": Google dropped the Pixel device trees from AOSP). **Voice/data/SMS
  over the modem is a must-have.** A failed path is grounds for the next one; failure of all paths
  is not planned for: (1) native stack — reverse-engineer SIPC + the audio-DSP path (BaseMirror,
  libsamsung-ipc); (2) userspace IMS/VoLTE — modern voice is SIP/RTP over the data plane, so if
  data works, voice becomes an application-layer task (a SIP stack + audio routing + carrier
  IMS-registration quirks) rather than a hardware reverse-engineering task; (3) a fallback — a
  number from a VoIP/eSIM provider routed to the device: ugly, but the phone rings from day one.
  **Camera is a top-tier goal, not "retro."** (1) the computational stack (hdr-plus and its
  descendants) is OS-agnostic and taken as-is — that's half of "the Pixel magic"; (2) sensor tuning
  (CCM, black level, AWB, noise profiles) is turned from manual craft into an automated pipeline: a
  lab rig with targets + parameter optimization as an ML task with a measurable metric (an internal
  benchmark against Pixel/iPhone on reference scenes); (3) the bottleneck isn't science, it's
  expertise — the plan should budget for bringing on one strong ISP/tuning engineer. A separate
  milestone with its own budget and metric instead of an assumed ceiling.
- They converge at B6: the product (A) on top of the real substrate (B).

**Repository state (July 2026):** specs 000–050 are written and authoritative; the first acceptance
target is a lightweight host simulator of the Pixel 9 form factor (Rust, low-load evidence: task
isolation, capability denial, first surface, screenshot); FEMU is the next milestone on Track A,
not cancelled. Rust-first under `crates/` and `sim/` is a hard rule. Source trace: session
937d083b, appendix under docs/specs/.

## Open questions (from Appendix D of the spec)

| # | Question | What it blocks |
|---|--------|---------------|
| OQ1 | Is a Zircon boot path on Pixel 9 feasible without the "unreleased bootloader" referenced in Pixel 10 patches? | Track B, B1 |
| OQ2 | Does BaseMirror cover the Exynos 5400 command set? | Track B, B4 |
| OQ3 | Voice calls without a proprietary audio HAL | Track B only, deferrable |
| OQ4 | How much sensor tuning is needed for acceptable photo quality | Track B only, deferrable |
| OQ5 | Starnix ABI stability over the project horizon | Indirectly Track A — pin the revision |
| OQ6 | Start bring-up on a supported ARM board instead of a "blind" flagship | Strategic, before B1. The spec recommends a board |

Track A is blocked by nothing.

## Product surface (from the wishlist, by tier)

**Tier 0 — the platform (this is MVP-A):** entity store, agents, history, CRDT sync, capability
model, shell/stories, IntentBox, Flexlight (AI actions, smart search, inline widgets, voice mode).

**Tier 1 — essential system widgets:** files (tag-based, "folder is a document," everything copies
as structured text), keyboard (learns from input: personal autocorrections, long-context
continuation, auto-snippets), notifications (urgent surfaces immediately, the rest goes to a tray
with no buzz), a multi-clipboard with source tracking and structured formats, settings, phone,
browser, camera (+ OCR of everything), messenger+email+SMS+video (one people graph, transports are
plugins), calendar+todo, clock, calculator+calc-notebook, notes/rich text (FluidSpace),
photo/video, passwords, terminal, translator, maps+find-my.

**Tier 2 — the extended stack:** spreadsheets, code editor, drawing (vector+bitmap), media player,
health hub (a full local r/w API), wallet+banking+crypto (any cards and documents), smart home,
VPN/proxy, tasks (Linear-like), weather, stocks, contacts, compass, measure+level, remote, book/PDF
reader, a store for widgets and data providers, marketplace (Avito-like), food delivery, Vibeflow
(shortcuts-like), generic CRUD.

**Tier 3 — because we can:** Chess, Snake, Doom, HoMM3, Fallout Shelter, Mario.

Cross-cutting principles across all tiers: global transclusion, SideMemo (auto-linking documents on
mention), UX patterns as a shared contract (not just design tokens), a ds/ux linter, widget classes
(contracts), automatic management of long-running processes (a hybrid of iOS/Android approaches,
both of which suck), Pencil + handwriting recognition with generated personal-font rendering, voice
input with original recordings retained.

## Idea provenance: UX RESEARCHES (Notion)

Hub: https://thsm.notion.site/95302a962f5c426e98d48271b13cc73a — also holds prior art (Jef Raskin:
zoomable UI, dropping the desktop and file system, micro-apps; Bret Victor; MercuryOS).

Glossary of wishlist terms, linked to research:

- **IdeaOS** — the direct predecessor of Agent OS: "not just an OS but a new digital environment
  that accounts for everything that's changed since Xerox PARC." Elements: abandoning app-centric
  thinking, TagFS, decoupling vendors/documents/widgets + glue + auto-discovery/installation, User
  as API (global authorization, personal data held by the person, control over vendor access),
  cross-cutting orthogonal concepts (payments, login, hotkeys, interface contracts), combining the
  best properties of the web (a URL for everything, history, sandboxes), the cloud (collaboration),
  and native (FS, speed, gestures). → https://thsm.notion.site/8cc4eb3aec66479aa361081230364ce8
- **FlexLight** — "Spotlight maxed out": a single palette/terminal across the whole system with
  cross-cutting access to app domain models, settings, windows, tabs; built-in mini-apps with
  "morphing" — a smooth transformation of the palette field into a simplified, then fully-featured
  interface without breaking flow; voice and the palette are one entry point. Prior art: Raycast,
  Alfred, ⇧⇧ in JetBrains, the omnibox. → https://thsm.notion.site/9a89e470769c438f838cab1d3db2d8b0
- **IntentBox** — an intent-suggestion area: contextual actions, undo strategies, a preview of the
  result before applying it. Removes the need to design endless secondary flows into a static UI.
  Prior art — literally Maxwell AI from early Fuchsia. →
  https://thsm.notion.site/00a4025f7f4d4749a20ba22e87410bc9
- **SideMemo** — continuous surfacing of implicit connections, margin notes: entities (people,
  tasks, places, files) extracted from typed text, command detection in text ("do this in 20
  minutes"), automatic cross-references. →
  https://thsm.notion.site/1f48f52dcf80418eb26d5ce9de96c32b
- **FluidSpace** — an Ultra Rich Text & Media space (Notion+Miro+Dropbox++), "one content space" in
  the Raskin sense: the same data is visible as files, as documents, and as a database at once;
  business-connected tables with pattern analysis and error-correction feedback. →
  https://thsm.notion.site/ea663b02a1b54717bf981468a8135215
- **TagFS** — a tag hierarchy, aliases, micro/macro tags, local vs global. The key problem
  ("people can't tag correctly") is solved with auto-tagging plus a feedback loop through search (a
  tag's weight drops if it's never clicked). → https://thsm.notion.site/e31f6989a2134d6bbc16567245b1e10f
- **Micro-apps / ecosystem modularity** — an "app" = formats + detachable widgets + protocols +
  glue, from different vendors; auto contextual opt-in module pull-in instead of an app store (a QR
  code in a park → an AR elephant appears immediately, not "download our app"; App Clip was moving
  that direction). Honestly logged problems: loss of vendor branding, phishing (answer: local-first
  + e2e sync), a combinatorial-testing nightmare (answer: Apple-style constraints + telemetry +
  auto-fixes). → https://thsm.notion.site/1b44786460d44d918d4643335dce99b4

**Important for positioning:** early Fuchsia (2017–2019) is literally our model: components instead
of apps, two kinds — agents (resident) and modules (GUI, named as nouns with verb actions), stories,
entities ("any uniquely identifiable person, place, thing, event or concept…"), Maxwell AI as a
proactive suggestion engine. Google cut all of that (Armadillo UI, stories, Maxwell) and kept only
the substrate — Zircon, Starnix, Scenic. Agent OS implements the original Fuchsia vision on top of
the surviving Fuchsia substrate. This isn't "inspired by," it's completion. →
https://thsm.notion.site/03eec810560e415cb219dcd40cadf1fe

## Risks (condensed register)

R1 bootloader closed (start with an ARM board) · R2 SoC bring-up drags on for years (Track A is
decoupled — accept it) · R3 GPU driver stuck (software rendering) · R4 voice never works (live on
data/SMS) · R6 camera ceiling (accept postmarketOS-level quality) · R7/R8 Google moves
Starnix/APIs (pin + abstractions) · R9 scope underestimated and burnout (decouple tracks, MVP
configs, cut without mercy).

---

## Appendix: the original wishlist (translated to English, for the record)

> Kept verbatim except where the source was Russian: the title and the final "process id" item were
> translated to English; everything else was already English in the original.

# Own mobile OS
Fuchsia like

- Project/Task/Document/People/Local/Agent/private first 
	- agentic: every action and data peace is accessible 
- Widgets/Data sources/Integrations
- Global User input cache registry. Don't lost any bite 
- Memex 
- Auto installation 
- Local/remote data/logic auto management 
- Global history (like browser history but for whole os)
- hardware: Best camera, battery, water proof 
- Universal sharing. Works w/ AirPlay, AirDrop and popular Android solutions 
- Shared clipboard with macOS/ubuntu 
- open source 
- urgent / other notifications separation. Others go to tray w/o vibro/sound
- Pencil + handwritten text and drawings recognition + user script learning (generating user script font) for editing handwritten texts. Voice recognition w/ storing original voice memos too. 
- file system
	- Tag based 
	- Folder is a document (notion-like). No zip/folder/file separation. Every file can work simultaneously as application, document(-s set), or archive. No need to unpack archives ever. Versioning first class citizen  
	- Everything can be copied as structured text.  E.g. any list, cards, almost any ui
	- Outlines, mappings, 
- Software Architecture 
	- Auto api/data migration protocol 
- SideMemo: auto-linking of related documents when mentioned in text  
- global Transclusion 
- 100% automatic backup, all data, secrets, state 
- Texts are copyable everywhere by default (ui, photos, videos, any pdfs)
- 100% mapping Config<->CLI/TUI<->Api<->Settings<->GUI
- clipboard 
	- Multi clipboard 
	- Source tracking 
	- Structured data sharing 
	- Multiple data formats sharing 
- UX patterns sharing. Not only design system 
- ds/ux linter/enforser
- all menus are editable 
- Widget classes(contracts)
- automatic long process management. Intellectual battery-saving multitasking. Mix of Android and iOS ways that are both suxx. 
- **stock widgets** 
  - drawing: vector+bitmap+canva-like
  - notes, rich text editor (word, notion, g.docs like)
	  - FluidSpace
  - spreadsheets 
  - code editor
  - audio/video/podcast player
  - social network 
  - messenger+email+sms+video-calls
  - calendar+todo+reminders
  - calculator+calc-notebook (Jupiter like)+converters; history
  - photo+video viewer 
  - camera (+qr, text, phone, email,,, ocr; +Blackmagic like)
  - Measure+level
  - bank client + crypto exchange and wallet + (Apple like)wallet + pocket for all kinds of cards and legal documents 
  - time+alarms+timer+countdown
  - browser 
  - terminal 
  - smart home 
  - passwords 
  - vpn, proxy 
  - tasks (linear like)
  - weather 
  - stocks 
  - files
  - contacts 
  - compass 
  - translator 
  - maps+transport+taxi+(apple like)find-my
  - food delivery 
  - phone
  - settings: WiFi, cellular, storage, 
  - Remote (tv, Remote Desktop )
  - Keyboard
  - book reader+pdf reader 
  - Widgets, data-providers, integrations store 
  - marketplace+resell-classifier (avito/ebay like)
  - Health hub. W/ full r/w data access local api
  - Vibeflow+(apple like)shortcuts
  - Intent box
  - Flexlight: ai actions/questions/settings/agents; smart local/web search; quick inline widgets (calc, converter, calendar, terminal, ssh, chat, new document, new note,,,); Voice mode; urls
  - Generic crud
  - Games
	  - Chess
	  - Snake
	  - Doom
	  - Heroes of might and magic 3
	  - Fallout shelter 
	  - Mario
- process id (pid) is not exposed as a number. Mnemonic only. Same everywhere. Numbers can only exist for optimization in implementation details but are never exposed to the user or programmer, and are only ever interesting to a maintainer chasing a specific bug
- 

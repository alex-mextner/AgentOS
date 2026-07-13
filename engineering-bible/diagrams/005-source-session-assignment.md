# AgentOS Source Session Assignment Trace

> Translated recovered-source excerpt. The original user brief below was written in Russian; it is
> translated here in place for traceability while keeping repository docs English-only.

## Status

Primary-source trace for the AgentOS assignment recovered from the Claude
session that actually contains the initial project brief, referenced source
documents, and early execution plan. This document exists so later AgentOS specs
can distinguish recovered source material from derived planning.

## Source Session

- Claude session id: `937d083b-4513-4dc4-84f3-578242ea1a46`
- Session file:
  `/Users/ultra/.claude/projects/-Users-ultra-xp-hyperos/937d083b-4513-4dc4-84f3-578242ea1a46.jsonl`
- Source message uuid: `976cf141-87f1-47a2-9676-1017a43c3220`
- Source message timestamp: `2026-06-29T00:00:04.471Z`
- Recovered appendix:
  `docs/specs/source-session-claude-937d083b-4513-4dc4-84f3-578242ea1a46/`

The raw JSONL is not part of the documentation archive because it contains tool
traffic, local paths, and unrelated execution context. The appendix carries only
the extracted AgentOS-relevant assignment text, source-document excerpts, copied
source documents, task plan, and provenance notes.

## Original User Brief

```text
git remote add origin git@github.com:alex-mextner/AgentOS.git
git branch -M main

Break the work down and grind through it with swarms of hundreds of subagents
Use the full power of the review cli and report back via the tg cli
Go easy on compilation for now, the machine is under load from other processes
Monitor it for now

For the stack, ideally I'd like Rust. Find, install, and apply skills for working with Rust and its
ecosystem. Also use LSP tooling for refactors, error analysis, navigation, and search
Work autonomously
/goal a working prototype in a real-Pixel-9 simulator with a Fuchsia fork and the core product ideas
Use dynamic workflow

There's also a review-qa and a research CLI, but they're experimental. Try them and report back on
how they are. Report all problems with them to those projects' issue trackers too (mine as well)

Work through specs
Use sverklo, serena, haft, and every other available tool
Fill in agents.md, make CLAUDE.md a symlink to it
~/.moshi/uploads/Fuchsia OS Guide RU.pdf
~/.moshi/uploads/Own Mobile OS.txt
~/.moshi/uploads/custom-os-fuchsia-spec.pdf
```

## Source Documents

The source session explicitly referenced these AgentOS inputs:

- `/Users/ultra/.moshi/uploads/custom-os-fuchsia-spec.pdf`
- `/Users/ultra/.moshi/uploads/Fuchsia OS Guide RU.pdf` (original filename on disk used Cyrillic:
  "Fuchsia OS Rukovodstvo RU.pdf")
- `/Users/ultra/.moshi/uploads/Own Mobile OS.txt` (original filename on disk used Cyrillic: "Svoya
  mobilnaya OS.txt")

The appendix includes copied, documentation-only versions under
`originals/`, plus extracted Markdown summaries where the session contained
recoverable text.

## Recovered Product Vision

`Own Mobile OS.txt` (source file "Svoya mobilnaya OS.txt") defines the product direction:

- Project, task, document, people, local data, and agents are first-class system
  concepts.
- Widgets, data sources, and integrations are part of the OS composition model.
- The system needs auto installation, local/remote data and logic management,
  a global OS history, shared clipboard, and open-source development.
- The stock-widget horizon includes notes, spreadsheets, code editor, media,
  messenger, calendar, terminal, browser, maps, files, contacts, health,
  automation, Flexlight, games, and other everyday device experiences.

The recovered product-architecture digest from `custom-os-fuchsia-spec.pdf`
adds the execution split:

- Track A: product layer in FEMU first.
- Track B: real Pixel 9 bring-up later.
- MVP-A: L6 product layer, shell, entity/agent/history/sync/integrations, and
  mock substrate.
- Hardware work is deliberately not a bootstrap MVP promise.

## FEMU Source Target Versus Current Bootstrap Target

The recovered digest says the source-spec MVP-A target is FEMU and explicitly
not a custom UI window simulator. The current repository intentionally keeps a
lighter Pixel 9 form-factor host simulator as the first bootstrap acceptance
target because it gives immediate, low-load evidence for the Rust product layer,
IPC denial, display, and input contracts.

This is a staged implementation decision, not a replacement for the recovered
FEMU requirement. `030-pixel9-simulator.md` owns the host simulator MVP.
Fuchsia/FEMU work remains the source-faithful Track A target once the workspace,
machine capacity, and Fuchsia checkout/build constraints are ready.

## Interpretation For This Repository

- The source material asks for a Rust-first AgentOS prototype, Fuchsia fork
  path, Pixel 9 simulator target, spec-driven workflow, review/tg reporting,
  LSP/code-intelligence usage, and careful compilation under load.
- The current top-level specs translate that source into a staged plan: fast
  simulator MVP first, then FEMU/Fuchsia bring-up where machine and platform
  constraints allow, then real-device operation.
- The simulator is the MVP proving ground. Full device operation is specified in
  `050-real-device-operation.md`.
- Proprietary ecosystem features such as AirPlay and AirDrop require later legal
  and protocol design before implementation claims.

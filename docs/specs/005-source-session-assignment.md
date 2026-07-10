# HyperOS Source Session Assignment Trace

## Status

Primary-source trace for the HyperOS assignment recovered from the Claude
session that actually contains the initial project brief, referenced source
documents, and early execution plan. This document exists so later HyperOS specs
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
the extracted HyperOS-relevant assignment text, source-document excerpts, copied
source documents, task plan, and provenance notes.

## Original User Brief

```text
git remote add origin git@github.com:alex-mextner/HyperOS.git
git branch -M main

Раскидай задачи и пили роями из сотен субагентов
Исползьуй все мощь review cli и отчитывайся через tg cli
С компиляцией пока осторожно, компьютер под давлением других процессов
Мониторь пока

По стеку в идеале хотелось бы rust. Найди и установи и примени скиллы для работы с о растом и егл экосистемой. Используй так же lsp тулинг для рефакторингов, анализа ошибок и навигации и поиска
Делай автономно
/goal рабочий прототип в симуляторе настоящего pixel 9 с форком фуксии и основными продуктовыми идеями
Используй dynamic workflow

Так же есть review qa и research cli, но они экспериментальные. Пробуй и расскажи как они. Все проблемы с ними репорт и в issues этих проектов (мои тоже)

Работай через спеки
Иаозозуй sverklo, serena, haft и весь остальной доступный тулинг
Заполни agents md, Claude md сделай сислинкой на него
~/.moshi/uploads/Fuchsia OS Rukovodstvo RU.pdf
~/.moshi/uploads/Своя мобильная ОС.txt
~/.moshi/uploads/custom-os-fuchsia-spec.pdf
```

## Source Documents

The source session explicitly referenced these HyperOS inputs:

- `/Users/ultra/.moshi/uploads/custom-os-fuchsia-spec.pdf`
- `/Users/ultra/.moshi/uploads/Fuchsia OS Rukovodstvo RU.pdf`
- `/Users/ultra/.moshi/uploads/Своя мобильная ОС.txt`

The appendix includes copied, documentation-only versions under
`originals/`, plus extracted Markdown summaries where the session contained
recoverable text.

## Recovered Product Vision

`Своя мобильная ОС.txt` defines the product direction:

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

- The source material asks for a Rust-first HyperOS prototype, Fuchsia fork
  path, Pixel 9 simulator target, spec-driven workflow, review/tg reporting,
  LSP/code-intelligence usage, and careful compilation under load.
- The current top-level specs translate that source into a staged plan: fast
  simulator MVP first, then FEMU/Fuchsia bring-up where machine and platform
  constraints allow, then real-device operation.
- The simulator is the MVP proving ground. Full device operation is specified in
  `050-real-device-operation.md`.
- Proprietary ecosystem features such as AirPlay and AirDrop require later legal
  and protocol design before implementation claims.

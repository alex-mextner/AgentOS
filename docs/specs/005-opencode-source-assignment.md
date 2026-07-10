# HyperOS Opencode Source Assignment Trace

## Status

Primary-source trace for the HyperOS idea recovered from the opencode session
that originally mixed HyperGit and HyperOS. This document exists so later
HyperOS specs can distinguish recovered source material from derived planning.

## Source Session

- Opencode session id: `ses_0f5b08028ffeqacZmxccad2Mx9`
- Session title: `HyperGit — альтернатива GitHub и своя мобильная ОС`
- Session directory: `/Users/ultra/xp/gitapp`
- Export used for recovery: `/tmp/opencode-ses_0f5b08028ffeqacZmxccad2Mx9.json`
- Main source message: `msg_f0a4f7fe6001Cdby0825i0fk7P`,
  `2026-06-27 20:20:10 +0200`
- Correction message: `msg_f0b870eae001jUneEt5xrX4yg7`,
  `2026-06-28 02:00:28 +0200`

The raw export is not part of the documentation archive because it includes
tool output and local configuration data. The archive carries only the extracted
assignment text and recovered document content below.

## Original User Brief

```text
# Замена гитхабу
- git bare repo
- ci/cd. gh actions clone. Templates. Easy multi stages
- static/ssg hosting (gh docs clone)
- snippets (gist clone) + gh gist cli + linking w/ repos/orgs
- gh cli shim
- issues (tasks)
- work logs (ai agents attached their jsonl logs to commits)
- readme + wiki like notion
- Возможность отображения кто где и что редактирует прямо в IDE а также на уровне агентских хуков
  - в том числе показывать агентов
- graphql api, webhooks
- PRs
- fast smart Blame
- UNL like mappings
- mobile app local first
  - semantic diffs
  - ai: questions
  - files: tree, gotos
  - smart search: fuzzy, index, ai, symbols
  - GitHub support
- изучить open собственные альтернативы. Gitea? Gogs? Чтото ещё?

- что не делаем:
  - Другие системы версий. git only
  - Projects -> linear
  - own Code-server -> hyperide

# Своя мобильная ОС
- Project/Task/Document/People/Local/Agent first
- Widgets/Data sources/Integrations
- Auto installation
- Local/remote data/logic auto management
- Global history (like browser history but for whole os)
- Best camera, battery, water proof
- Works w/ AirPlay, AirDrop
- Shared clipboard with macOS/ubuntu
- open source начнем с моб приложения, пусть будет на swift ui, подтяни скилл для свифт и свифт ui. пока пусть работает с гитхабом по апи и умеет выкачивать код и пры чтобы смотреть все локально и linear тикеты все пусть выкачивает тоже. все что пишу записывай в мастерспеку docs/SPEC.md задачи веди в github issues  repo настрой git@github.com:hyperide/HyperGit.git
```

## Correction In Same Source Session

The same opencode session later corrected the HyperGit scope:

```text
Про HyperOS убери. Я случайно это сюда написал
```

This means HyperOS must not remain an authoritative HyperGit feature. It does
not erase the separate HyperOS product idea. In this repository, the recovered
HyperOS material is preserved as the origin for an independent HyperOS spec set.

## Recovered Initial `docs/SPEC.md` HyperOS Section

The first `docs/SPEC.md` written in the opencode session included this HyperOS
section before the later HyperGit correction:

```text
## 3. HyperOS — долгосрочная визия собственной мобильной ОС

> Долгий горизонт. Не ближний объём работ, но фиксируем направление.

- Project / Task / Document / People / Local / Agent first — ОС, где эти сущности первоклассны на уровне системы, а не приложений.
- Widgets / Data sources / Integrations — композиционный UI: виджеты тянут данные из любых источников.
- Auto installation — приложения/интеграции ставятся и настраиваются сами по контексту/намерению.
- Local/remote data & logic auto-management — прозрачное перемещение данных/вычислений между устройством и облаком/репо.
- Global history — история всей ОС (как browser history, но для любых действий/документов/навигации), с поиском и откатом.
- Best camera, battery, water-proof — аппаратные приоритеты целевого устройства.
- AirPlay, AirDrop — нативная интеграция в экосистему Apple.
- Shared clipboard с macOS/Ubuntu — бесшовный буфер обмена между устройствами.
- Open source — начинаем с мобильного приложения (§2); ОС — по мере зрелости платформы HyperGit.
```

The same recovered document placed HyperOS in the final roadmap phase:

```text
### Фаза 4 — HyperOS
- Долгосрочная эволюция mobile → ОС (по мере зрелости).
```

## Interpretation For This Repository

- The source material is a product vision, not a hardware bring-up spec.
- The Pixel 9 simulator target, Rust-first workspace, capability IPC, and
  Fuchsia-inspired architecture are derived planning choices in this repository.
- The simulator is the MVP proving ground. Full device operation is specified
  separately in `050-real-device-operation.md`.
- Proprietary ecosystem features such as AirPlay and AirDrop require later legal
  and protocol design before implementation claims.

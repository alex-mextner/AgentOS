<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

# HyperGit

[![mobile CI](https://github.com/hyperide/HyperGit/actions/workflows/mobile.yml/badge.svg)](https://github.com/hyperide/HyperGit/actions/workflows/mobile.yml)
[![issues](https://img.shields.io/github/issues/hyperide/HyperGit?color=blue)](https://github.com/hyperide/HyperGit/issues)

**Открытая замена GitHub** (git-сервер, CI/CD, статик-хостинг, snippets, issues,
агентские work-логи, live-presence, GraphQL, PR, умный blame) **+ local-first
мобильное приложение** на SwiftUI (офлайн-просмотрщик GitHub/Linear → эволюция в
агенто-центричную мобильную ОС).

> Статус: ранняя разработка (Phase 1 — mobile MVP). Спека авторитетна:
> `docs/SPEC.md`.

---

## Что это

HyperGit — два связанных продукта в одном монорепо:

1. **Платформа** (замена GitHub) — git-хостинг поверх настоящих bare-репозиториев,
   CI/CD совместимый с GitHub Actions, статик/SSG-хостинг, snippets (gist), `gh`-CLI
   shim, issues, work-логи агентов на коммитах, Notion-подобный wiki, live-presence
   («кто где и что редактирует» в IDE + на уровне агентских хуков), GraphQL + webhooks,
   PR, быстрый smart blame, smart search (fuzzy + индекс + символы + AI). См.
   SPEC §1 (`docs/SPEC.md#1-hypergit--замена-github`).
2. **Mobile (SwiftUI, local-first)** — офлайн-доступ к репозиториям, файлам, PR, issues,
   коммитам (GitHub) и тикетам (Linear); semantic diff, AI-вопросы, smart search/blame.
   См. SPEC §2 (`docs/SPEC.md#2-hypergit-mobile--swiftui-local-first-ближайший-конкретный-объём`).

**Non-goals:** другие VCS (только git), свой projects-менеджер (→ Linear), свой
browser-IDE (→ hyperide). См. SPEC §4 (`docs/SPEC.md#4-non-goals-что-не-делаем`).

## Структура репозитория

```
docs/SPEC.md     # мастерспека — источник правды
server/          # бэкенд платформы (git-сервер, API, CI, hosting) — планируется
mobile/          # SwiftUI iOS-приложение + ядро HyperGitCore (Phase 1)
ci/              # rig-managed CI gate-скрипты
.github/         # workflows, PR-шаблон (rig-managed)
rig.yaml         # декларативные guardrails репозитория
AGENTS.md        # конвенции для агентов (и людей)
```

## Mobile — быстрый старт

```sh
cd mobile

# Ядро + тесты (работает без Xcode, на macOS-хосте)
swift build
swift test --parallel

# iOS-приложение (нужен Xcode — локально или в CI)
brew install xcodegen
xcodegen generate
xcodebuild -scheme HyperGit -destination 'generic/platform=iOS Simulator' build
# или открыть HyperGit.xcodeproj в Xcode и запустить на симуляторе
```

Приложение: открой **Settings**, вставь GitHub PAT (`repo`) и/или Linear API-ключ,
потом — Repos / Tickets с pull-to-refresh. Всё скачанное кешируется и доступно офлайн.

Архитектура (`mobile/`): `Views → AppStore (@Observable, @MainActor) →
RepositorySource / TicketSource (протоколы) → GitHubClient / LinearClient → CacheStore`.
Бэкенд за протоколом, чтобы GitHub позже заменить на собственный HyperGit без
переписывания UI. Подробности — в `mobile/README.md`.

## Roadmap

- **Phase 0–1** ✅ — bootstrap, спека, конвенции, каркас мобилы, GitHub-клиент
  ([#1](https://github.com/hyperide/HyperGit/issues/1),
  [#2](https://github.com/hyperide/HyperGit/issues/2)).
- **Phase 1 (в работе)** — Linear-клиент [#3](https://github.com/hyperide/HyperGit/issues/3),
  SwiftData-кеш [#4](https://github.com/hyperide/HyperGit/issues/4),
  UI-экраны [#5](https://github.com/hyperide/HyperGit/issues/5).
- **Phase 2** — semantic diff, AI-вопросы, smart search/blame [#7](https://github.com/hyperide/HyperGit/issues/7).
- **Phase 3** — бэкенд платформы (решение по Forgejo/Gitea-форку) [#6](https://github.com/hyperide/HyperGit/issues/6).

Полная картина — SPEC §7 (`docs/SPEC.md#7-roadmap-фазы`).

## Конвенции

- **Коммиты:** Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`), атомарные, часто.
- **Ветви:** feature-ветка → PR (squash-merge). `main` всегда зелёный; CI-gates не
  байпасятся.
- **Спека:** любое изменение поведения обновляет `docs/SPEC.md` в том же PR.
- **Задачи:** GitHub Issues (через `task` CLI).
- **Агенты — first-class:** API/хуки/UI рассчитаны на машины тоже.

Подробнее — `AGENTS.md`.

## Лицензия

Open source. Конкретная лицензия уточняется (см.
SPEC §6 (`docs/SPEC.md#6-исследование-open-source-альтернатив`) — рассматривается форк
Forgejo/Gitea, MIT).

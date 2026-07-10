<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

# HyperGit — Master Spec

> **Статус:** Authoritative. Спека — источник правды. Если код расходится со спекой, расхождение = баг (либо код, либо устаревшая спека — обнови в том же PR).
> **Repo:** `git@github.com:hyperide/HyperGit.git` · **Org:** `hyperide`
> **Последнее обновление:** 2026-06-27

HyperGit — это, в конечном счёте, **два связанных продукта** в одном монорепо:

1. **HyperGit (сервер/платформа)** — открытая замена GitHub: git-хостинг, CI/CD, статик-хостинг, snippets, issues, work-логи агентов, live-presence, GraphQL, PR, умный blame, мобильный клиент.
2. **HyperOS / HyperGit Mobile** — local-first мобильное приложение (SwiftUI), которое начинается как офлайн-просмотрщик GitHub + Linear, а в долгосрочной перспективе эволюционирует в собственную агенто-центричную мобильную ОС.

Оба продукта растут из одного корня: **git как универсальный слой данных**, **агенты как первоклассные пользователи**, **local-first** мобильный доступ.

---

## 0. Принципы

- **Git — единственная система версий.** Других VCS не делаем (см. Non-goals).
- **Агенты — первоклассные пользователи.** Все API, логи, хуки и UI рассчитаны на то, что их читает/пишет не только человек.
- **Local-first на мобиле.** Данные/код/PR/тикеты выкачиваются и доступны офлайн; синхронизация — фоновая.
- **Open source.** Изучаем существующие альтернативы и переиспользуем, а не строим с нуля там, где разумно (см. §6).
- **Спека авторитетна.** Любое изменение поведения идёт через изменение спеки.

---

## 1. HyperGit — замена GitHub

### 1.1 Git-хостинг
- **git bare repo** как нативное хранилище. Сервер работает поверх настоящих bare-репозиториев (не изобретает свой формат объектного хранилища).
- Push/pull/fetch/clone через стандартный git-протокол (SSH + HTTPS smart HTTP).
- Импорт существующих репозиториев из GitHub/GitLab.

### 1.2 CI/CD (клон GitHub Actions)
- Совместимый с GitHub Actions формат workflow-файла (`*.yml`), поддержка `gh actions` clone — миграция одним копированием.
- **Templates** — библиотека переиспользуемых шаблонов.
- **Easy multi-stages** — декларативные пайплайны с явными stage-границами, артефактами между стадиями и fan-out/fan-in.
- Раннеры: self-hosted first (контейнерные), с возможностью burst в облако.
- Reuse: изучить [act](https://github.com/nektos/act) / Gitea Actions для совместимости раннера.

### 1.3 Static / SSG hosting (клон GitHub Pages)
- Публикация статических сайтов и SSG (билд → артефакт → раздача).
- Привязка к ветке/папке/тегу, кастомные домены, HTTPS (Let's Encrypt).
- `gh docs` clone — совместимый UX.

### 1.4 Snippets (клон Gist)
- Snippets с версионированием, fork, комментариями.
- **`gh gist` CLI** совместимость + собственный CLI-шейм.
- **Linking с репо/оргами** — сниппет может ссылаться на репо/файл/строку и обратно.

### 1.5 `gh` CLI shim
- Drop-in обёртка над `gh`, перенаправляющая на HyperGit-бэкенд с тем же UX (`gh repo`, `gh pr`, `gh issue`, `gh gist`, `gh run`).
- Деградация: если команда не реализована — прозрачно проксирует в настоящий GitHub.

### 1.6 Issues (tasks)
- Тикеты как first-class git-объекты (или закреплённое хранилище, синхронизированное с git).
- **Интеграция с Linear** — двусторонняя синхронизация (см. Non-goals: Projects → Linear).

### 1.7 Work logs (агентские JSONL-логи на коммитах)
- Агенты крепят свои лог-сессии (JSONL) к коммитам/PR как trailer-метаданные или отдельный ref.
- Логи таймлайн-привязаны к коммиту: что агент читал, что менял, какие tool-вызовы делал, сколько времени ушло.
- UI: просмотр «истории работы» над файлом/коммитом/PR.

### 1.8 README + Wiki (Notion-подобный)
- Редактор документов с блоками (заголовки, код, таблицы, embed, формулы, диаграммы) — Notion-like.
- Wiki на репо/орг, двусторонняя связь с кодом (ссылки на символы/строки), live-превью.
- Версионирование документов как git.

### 1.9 Live presence — «кто где и что редактирует»
- **В IDE** — индикация в реальном времени, кто (и какой агент) сейчас редактирует файл/строку/символ.
- **На уровне агентских хуков** — агент регистрирует свою активность через хуки; присутствие видно всем.
- **Показывать агентов** наравне с людьми: аватар агента, статус (thinking/editing/idle), текущая задача.
- Аналог: CRDT/Operational Transform для совместного присутствия + pub/sub.

### 1.10 GraphQL API + Webhooks
- **GraphQL API** — основной программный интерфейс (как у GitHub).
- **Webhooks** — события на все сущности с ретраями и dead-letter.

### 1.11 Pull Requests
- Полноценные PR: diff, review, comments, approvals, checks, merge-стратегии.
- Семантический diff (см. Mobile §2.2).

### 1.12 Smart Blame
- **Быстрый и умный blame**: индекс поверх git-истории, мгновенный ответ на больших репо.
- «Умный» — группировка, игнор форматирований/рефакторингов (semantic blame через tree-sitter), attribution к реальному изменению логики.

### 1.13 URL-маппинги
- Стабильные, человекочитаемые URL: `/org/repo/blob/sha/path#L12`, `/org/repo/-/tree/...`, permalinks на символ, deep-links в мобильное приложение.
- Совместимость с привычными GitHub-маппингами + расширенные.

### 1.14 Smart search
- **Fuzzy** + **инвертированный индекс** + **семантический (AI)** + **по символам** (LSP/tree-sitter).
- Единый поиск по коду, тикетам, документам, PR, коммитам.

### 1.15 Mobile-клиент (см. §2)
Local-first приложение — первоклассный способ работы с платформой с телефона.

---

## 2. HyperGit Mobile — SwiftUI, local-first (ближайший конкретный объём)

> Это **MVP, который строим сейчас**. Остальное — долгосрочная визия (§3).

### 2.1 Цель MVP
iOS-приложение на **SwiftUI**, которое работает поверх **GitHub API** (и позже — поверх собственного HyperGit API) и **Linear**, и позволяет **локально офлайн** смотреть:
- репозитории, файловое дерево, содержимое файлов (с подсветкой);
- pull requests (список, детали, diff, дискуссии, checks);
- issues/tickets (из GitHub Issues и Linear);
- коммиты, blame, историю.

Всё скачанное кешируется локально (local-first), синхронизация — фоновая/по запросу.

### 2.2 Фичи mobile
- **Semantic diffs** — diff не по строкам, а по AST (добавленная/изменённая/перемещённая функция).
- **AI: вопросы** — «объясни этот PR», «зачем этот код», «что поменялось между тегами» (LLM поверх локального контекста).
- **Files: tree + gotos** — навигация по дереву, переход к символу, quick-open.
- **Smart search** — fuzzy + индекс + AI + по символам (см. §1.14).
- **GitHub support** — первоисточник №1 на MVP.
- **Linear support** — выгрузка и офлайн-просмотр тикетов.

### 2.3 Архитектура mobile (MVP)
- SwiftUI + `async/await`, `@Observable` (Swift 6 concurrency, strict concurrency).
- Слои: `App (Views)` → `ViewModels/Store` → `Services` → `Clients (GitHub/Linear REST+GraphQL)` → `Persistence (SwiftData/SQLite local cache)`.
- Зависимости через протоколы (тестируемость, возможность подмены бэкенда GitHub→HyperGit).
- Минимум сторонних зависимостей; предпочтение нативным фреймворкам.

### 2.4 Поддержка нескольких бэкендов
Абстракция `SourceRepository` позволяет читать из GitHub, позже — из собственного HyperGit, без переделки UI.

---

## 3. HyperOS — долгосрочная визия собственной мобильной ОС

> Долгий горизонт. Не ближний объём работ, но фиксируем направление.

- **Project / Task / Document / People / Local / Agent first** — ОС, где эти сущности первоклассны на уровне системы, а не приложений.
- **Widgets / Data sources / Integrations** — композиционный UI: виджеты тянут данные из любых источников.
- **Auto installation** — приложения/интеграции ставятся и настраиваются сами по контексту/намерению.
- **Local/remote data & logic auto-management** — прозрачное перемещение данных/вычислений между устройством и облаком/репо.
- **Global history** — история всей ОС (как browser history, но для любых действий/документов/навигации), с поиском и откатом.
- **Best camera, battery, water-proof** — аппаратные приоритеты целевого устройства.
- **AirPlay, AirDrop** — нативная интеграция в экосистему Apple.
- **Shared clipboard с macOS/Ubuntu** — бесшовный буфер обмена между устройствами.
- **Open source** — начинаем с мобильного приложения (§2); ОС — по мере зрелости платформы HyperGit.

---

## 4. Non-goals (что НЕ делаем)

- **Другие системы версий.** Только git. Mercurial/SVN/и т.п. — нет.
- **Projects/доски.** Не строим свой project-management — используем **Linear**.
- **Собственный code-server/IDE в браузере.** Это зона **hyperide** (отдельный продукт). HyperGit фокусируется на платформе git/CI/хостинг/UI-присутствия.

---

## 5. Архитектура и структура репозитория (монорепо)

```
HyperGit/
├── docs/
│   └── SPEC.md                 # этот файл — мастерспека (authoritative)
├── server/                     # git-сервер, API, CI, hosting, issues (бэкенд платформы)
├── mobile/                     # SwiftUI iOS-приложение (MVP)
├── ci/                         # gate-скрипты (rig-managed)
├── .github/workflows/          # CI (rig-managed)
├── rig.yaml                    # декларативная настройка репо (guardrails)
└── AGENTS.md                   # конвенции для агентов
```

Стек (предварительно):
- **Backend**: язык/рантайм TBD (кандидаты при исследовании §6). REST + GraphQL.
- **Mobile**: Swift 6 / SwiftUI / SwiftData. Минимум внешних зависимостей.
- **Хранение git**: нативные bare-репозитории; индексы (blame/search) — поверх.

---

## 6. Исследование open-source альтернатив

Прежде чем строить бэкенд с нуля — изучить и по возможности форкнуть/переиспользовать.

| Проект | Что это | Релевантность | Заметки |
|---|---|---|---|
| **Gitea** | лёгкий self-hosted git-сервер (Go), issues, PR, Actions | Высокая | Зрелый, Actions-совместим, активный. Кандидат №1 на заимствование/форк. |
| **Forgejo** | community fork of Gitea (soft-fork), NON-profit | Высокая | Форк Gitea под независимым управлением; совместимость. |
| **Gogs** | прародитель Gitea (Go), проще/легче | Средняя | Менее активен; Gitea/Forgejo предпочтительнее. |
| **Codeberg** (хостинг на Forgejo) | референс-инстанс | Низкая | Не код, а пример эксплуатации Forgejo. |
| **GitLab CE** | тяжёлый all-in-one (Ruby/Go) | Низкая | Слишком тяжёл, не вписывается в принципы. |
| **radicle** | p2p git (без центрального сервера) | Средняя (идеи) | Интересна local-first/p2p-философия; модель differs. |
| **OneDev** | git-сервер + CI (Java) | Средняя | Встроенный CI, но стек Java. |
| **sourcehut** | набор простых git-сервисов (Go) | Средняя (идеи) | «Простота» близка нашим принципам; нет монолита. |
| **act** | локальный запуск GitHub Actions | Высокая (CI) | Раннер-совместимость Actions. |
| **tree-sitter** | парсинг для semantic diff/blame/search | Высокая (smart-фичи) | Основа semantic diff, smart blame, symbol search. |

**Решение (предварительное):** бэкенд — форк/переиспользование **Forgejo/Gitea** (Go, Actions-совместимость, зрелость) + надстройки HyperGit (work-logs, live-presence, smart search/blame, mobile API). Финализируется отдельным issue-исследованием.

---

## 7. Roadmap (фазы)

### Фаза 0 — Bootstrap (текущая)
- [x] Репо `hyperide/HyperGit` создан.
- [x] Мастерспека `docs/SPEC.md`.
- [ ] AGENTS.md конвенции.
- [ ] CI/guardrails активны (rig).
- [ ] Задачи в GitHub Issues.

### Фаза 1 — Mobile MVP (следующая, конкретный объём)
- [ ] SwiftUI-каркас приложения.
- [ ] GitHub API клиент (auth, репо, дерево, файлы, PR, issues, коммиты).
- [ ] Linear клиент (тикеты).
- [ ] Local-first кеш (офлайн-доступ).
- [ ] UI: репо-список, файловое дерево, просмотр файла, PR-список/детали/дифф, тикеты.
- [ ] Билдится и запускается на симуляторе.

### Фаза 2 — Smart-фичи mobile
- [ ] Semantic diff (tree-sitter).
- [ ] AI-вопросы (LLM).
- [ ] Smart search (fuzzy + индекс + символы).
- [ ] Smart blame.

### Фаза 3 — Платформа HyperGit (бэкенд)
- [ ] Решение по бэкенду (Forgejo/Gitea fork vs своё).
- [ ] GraphQL API + webhooks.
- [ ] CI/CD (Actions-совместимый).
- [ ] Static hosting, snippets, gist-shim, gh-shim.
- [ ] Work-logs агентов.
- [ ] Live-presence (IDE + хуки).

### Фаза 4 — HyperOS
- Долгосрочная эволюция mobile → ОС (по мере зрелости).

---

## 8. Конвенции

- **Коммиты:** Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`), атомарные, часто.
- **Ветви:** feature-ветки → PR (squash-merge). `main` — всегда зелёный.
- **Спека:** обновляется в том же PR, что меняет поведение.
- **Задачи:** GitHub Issues в этом репо (через `task` CLI).
- **Агенты:** читают `AGENTS.md`; крепят work-логи к коммитам (когда механизм готов).

---

## 9. Открытые вопросы

- Язык/стек бэкенда и степень заимствования из Forgejo/Gitea (issue-исследование).
- Модель хранения agent work-logs (git ref vs объект vs отдельное хранилище).
- Протокол live-presence (CRDT vs OT vs простой pub/sub) и интеграция с IDE.
- Linear: двусторонняя синхронизация vs read-only на MVP.
- Линзинг лицензий при форке open-source (Forgejo: MIT).

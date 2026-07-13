# Своя мобильная ОС (Agent OS)

> Ревизия: 10.07.2026. Исходник — сырой список желаний (сохранён внизу как приложение). Эта версия сведена с custom-os-fuchsia-spec.pdf (60 стр.), спеками репозитория (кодовое имя Agent OS, экс-AgentOS) (docs/specs/000–050) и состоянием рынка на июль 2026. Мотивация — в заметке «iOS vs Android vs Agent OS».

---

## Тезис в одну строку

Открытая мобильная ОС, где первичны не приложения, а сущности (человек / проект / задача / документ / событие) и агенты с capability-доступом ко 100% действий и данных. Форк Fuchsia (Zircon/DFv2/Starnix), продуктовый слой на Rust.

## Почему это вообще возможно (и почему сейчас)

- **Fuchsia жива, но Google не целится ей в телефоны.** После сокращений 2023 (~20% из 400 человек) команда урезана, планы на смарт-колонки свёрнуты; сейчас Fuchsia крутится на Nest Hub (поддержка до 2026) и в виде microfuchsia — гостевой VM внутри Android (AVF/pKVM). Для нас это значит: апстрим открытый и обновляется, конкуренции за «Fuchsia-телефон» нет, но и помощи не будет. Ревизию апстрима пиновать (риск R8, OQ5 — Starnix ABI движется, контролирует Google).
- **Платформы сошлись и перестали отличаться** (см. соседнюю заметку): дифференциация через фичи закончилась, через парадигму — свободна.
- **Интероп реверсится и живёт.** Google реверснул AirDrop, катает в проде с ноября 2025, Apple не заблокировала, с июня 2026 — на флагманах всего экосистемного зоопарка. Прецедент напрямую снижает риск нашего пункта «Universal sharing»: OpenDrop/uxplay/KDE Connect через Starnix — рабочая стратегия, а не фантазия.
- Ценность смещается из модели в **доступ к данным и действиям** — а это ровно то, что app-centric системы дать не могут и что у нас заложено в архитектуру нулевого дня.

## Ядро видения — 6 столпов

1. **Entity-first вместо app-centric.** Типизированный граф: Person, Project/Task, Document, Event/Place, Message, Device — узлы; рёбра с типом, источником, timestamp, confidence. Поверхности UI («stories») собираются вокруг текущей сущности/задачи, а не сетки иконок.
2. **Глобальная история + input registry (Memex).** Как история браузера, но для всей ОС: навигация, документы, действия приложений, активность агентов. Ни один байт ввода не теряется. Поиск и rollback где безопасно.
3. **Local-first + CRDT + 100% бекап.** Данные живут на устройстве, синк — готовые CRDT-библиотеки, облако — транспорт/бекап. Бекап включает секреты и состояние: новый телефон = продолжил с того же места, включая несохранённый документ.
4. **Agentic layer на capability-модели.** Фоновые агенты извлекают сущности из источников, дедуплицируют, линкуют, ведут историю, предлагают действия. Каждый агент получает строго свои handles — никакой ambient authority (модель Zircon). Это одновременно и фича, и модель безопасности.
5. **Interop из коробки.** AirDrop (OpenDrop), AirPlay (uxplay/shairport-sync), Quick Share, общий буфер с macOS/Ubuntu (KDE Connect/GSConnect) — обёрнуто через Starnix, не переписывается.
6. **Open source + 100% зеркалирование Config ↔ CLI/TUI ↔ API ↔ Settings ↔ GUI.** Всё, что можно сделать мышкой, можно сделать из конфига и скрипта. Все меню редактируемы.

## Архитектура (из спеки, слоями)

```
L6 Shell/UI, Entity/Agent, History/Sync, Integrations — С НУЛЯ (Rust)
L5 Starnix (Linux ABI поверх Zircon)                  — КАК ЕСТЬ
L4 Camera stack (libcamera, hdr-plus)                 — РЕВЕРС/ОБЕРНУТЬ
L3 Telephony (Exynos 5400, SIPC, libsamsung-ipc)      — ПОРТ/РЕВЕРС
L2 GPU/Magma (Mali-G715, знания Panfrost/PanVK)       — КАК ЕСТЬ + ПОРТ
L1 Bring-up Tensor G4                                 — РЕВЕРС (весь)
L0 Zircon/DFv2                                        — КАК ЕСТЬ (форк)
```

Все контракты между слоями — FIDL. Это то, что делает трек А (эмулятор с mock-подложкой) и трек Б (реальное железо) взаимозаменяемыми выше границы контракта.

## Два трека — главное стратегическое решение

- **Трек А (продукт).** Весь L6 в эмуляторе, mock-камера/модем/сенсоры за теми же FIDL-контрактами. Аппаратных блокеров — ноль. Milestones: A1 форк+FEMU → A2 shell/композитор (Scenic/Flatland) → A3 Entity Store + первые агенты → A4 история + local-first + CRDT → A5 интеграции + Apple-интероп.
- **Трек Б (железо).** Многолетний, «сложнее Asahi». Выбор устройства — на пересмотре (см. риски и «Расширение угла зрения»: Google выпилил Pixel device trees из AOSP). **Голос/data/sms по модему — must-have**. Провал одного пути — повод для следующего, провал всех путей не предусмотрен: (1) нативный стек — реверс SIPC + аудио-DSP путь (BaseMirror, libsamsung-ipc); (2) IMS/VoLTE в userspace — современный голос это SIP/RTP поверх data-plane, т.е. если данные работают, голос становится прикладной задачей (SIP-стек + аудио-роутинг + капризы IMS-регистрации операторов), а не реверсом железа; (3) страховочный — номер у VoIP/eSIM-провайдера с маршрутизацией на устройство: некрасиво, но телефон звонит с первого дня. **Камера — цель топ, не «ретро»**. (1) вычислительный стек (hdr-plus и наследники) OS-agnostic и берётся как есть — это половина «магии Pixel»; (2) sensor tuning (CCM, black level, AWB, шумовые профили) превращаем из ручного искусства в автоматизированный пайплайн: лабораторный стенд с мишенями + оптимизация параметров как ML-задача с измеримой метрикой (внутренний бенчмарк против Pixel/iPhone на эталонных сценах); (3) узкое место — не наука, а экспертиза: заложить в план привлечение одного сильного ISP/tuning-инженера. Отдельный milestone с бюджетом и метрикой вместо заранее принятого потолка.
- Сходятся в B6: продукт (А) поверх реальной подложки (Б).

**Состояние репозитория (июль 2026):** спеки 000–050 написаны и авторитетны; первый acceptance-таргет — лёгкий host-симулятор форм-фактора Pixel 9 (Rust, low-load evidence: изоляция задач, capability-denial, первый surface, скриншот), FEMU — следующий milestone трека А, не отменён. Rust-first под `crates/` и `sim/` — жёсткое правило. Source trace: сессия 937d083b, appendix в docs/specs/.

## Открытые вопросы (из Appendix D спеки)

| # | Вопрос | Что блокирует |
|---|--------|---------------|
| OQ1 | Реален ли boot-path Zircon на Pixel 9 без «невыпущенного бутлоадера» из патчей Pixel 10 | Трек Б, B1 |
| OQ2 | Покрывает ли BaseMirror командный набор Exynos 5400 | Трек Б, B4 |
| OQ3 | Голосовые звонки без проприетарного audio-HAL | Только Б, можно отложить |
| OQ4 | Объём sensor tuning для приемлемого фото | Только Б, можно отложить |
| OQ5 | Стабильность Starnix ABI на горизонте проекта | Косвенно А — пин ревизии |
| OQ6 | Начинать bring-up с поддерживаемой ARM-платы вместо «слепого» флагмана | Стратегическое, до B1. Спека рекомендует плату |

Трек А не блокирует ничто.

## Продуктовая поверхность (из wishlist, по ярусам)

**Ярус 0 — платформа (это и есть MVP-A):** entity store, агенты, история, CRDT-синк, capability-модель, shell/stories, IntentBox, Flexlight (ai actions, smart search, inline-виджеты, voice mode).

**Ярус 1 — системные виджеты первой необходимости:** файлы (tag-based, «папка = документ», всё копируется как структурированный текст), клавиатура (учится на вводе: персональные автозамены, продолжение по длинному контексту, автосниппеты), нотификации (срочное всплывает, остальное в трей без вибро), мультибуфер с source tracking и структурированными форматами, settings, phone, browser, camera (+OCR всего), messenger+email+sms+видео (один граф людей, транспорты — плагины), calendar+todo, часы, калькулятор+calc-notebook, заметки/rich text (FluidSpace), фото/видео, passwords, terminal, translator, maps+find-my.

**Ярус 2 — расширенный сток:** spreadsheets, code editor, drawing (vector+bitmap), медиаплеер, health hub (полный локальный r/w API), wallet+банк+крипта (любые карточки и документы), smart home, vpn/proxy, tasks (linear-like), weather, stocks, contacts, compass, measure+level, remote, book/pdf reader, стор виджетов и data-providers, marketplace (avito-like), food delivery, Vibeflow (shortcuts-like), generic CRUD.

**Ярус 3 — потому что можем:** Chess, Snake, Doom, HoMM3, Fallout Shelter, Mario.

Сквозные принципы поверх всех ярусов: global transclusion, SideMemo (автолинковка документов при упоминании), UX-паттерны как разделяемый контракт (не только дизайн-токены), ds/ux-линтер, widget classes (контракты), авто-менеджмент долгих процессов (гибрид iOS/Android подходов, оба suxx), Pencil + распознавание рукописи с генерацией пользовательского шрифта, голос с хранением оригиналов.

## Провенанс идей: UX RESEARCHES (Notion)

Хаб: https://thsm.notion.site/95302a962f5c426e98d48271b13cc73a — там же prior art (Джеф Раскин: zoomable UI, отказ от рабочего стола и файловой системы, микро-приложения; Bret Victor; MercuryOS).

Глоссарий терминов из wishlist, со ссылками на исследования:

- **IdeaOS** — прямой предшественник Agent OS: «не просто ОС, а новая цифровая среда, учитывающая все изменения со времён Xerox PARC». Elements: отказ от мышления приложениями, TagFS, decoupling вендоров/документов/виджетов + клей + авто-discovery/installation, User as API (глобальная авторизация, ПД хранятся у человека, контроль доступов вендоров), сквозные ортогональные концепции (платежи, логин, хоткеи, контракты на интерфейсы), объединение лучших свойств веба (URL у всего, история, песочницы), клауда (коллаборация) и натива (FS, скорость, жесты). → https://thsm.notion.site/8cc4eb3aec66479aa361081230364ce8
- **FlexLight** — «Spotlight на максималках»: единая палитра/терминал на всю систему со сквозным доступом к доменным моделям приложений, настройкам, окнам, табам; встроенные mini-apps с «перетеканиями» — плавной трансформацией поля палитры в упрощённый, а затем полнофункциональный интерфейс без разрыва флоу; голос и палитра — один вход. Prior art: Raycast, Alfred, ⇧⇧ в JetBrains, omnibox. → https://thsm.notion.site/9a89e470769c438f838cab1d3db2d8b0
- **IntentBox** — область саджеста намерений: контекстные действия, undo-стратегии, предпросмотр результата перед применением. Снимает необходимость проектировать бесконечные неосновные сценарии в статичном UI. Prior art — буквально Maxwell AI из ранней Fuchsia. → https://thsm.notion.site/00a4025f7f4d4749a20ba22e87410bc9
- **SideMemo** — непрерывное выявление неявных связей, сноски на полях: сущности (люди, задачи, места, файлы) из вводимого текста, обнаружение команд в тексте («сделать через 20 минут»), автоматические перекрёстные ссылки. → https://thsm.notion.site/1f48f52dcf80418eb26d5ce9de96c32b
- **FluidSpace** — Ultra Rich Text & Media пространство (Notion+Miro+Dropbox++), «one content space» по Раскину: одни и те же данные видны и как файлы, и как документы, и как база; business-connected таблицы с pattern analysis и error-correction feedback. → https://thsm.notion.site/ea663b02a1b54717bf981468a8135215
- **TagFS** — иерархия тегов, алиасы, микро/макро-теги, локальные vs глобальные. Ключевая проблема «человек не может правильно проставлять теги» решается авто-тегированием + петлёй обратной связи через поиск (тег понижается в весе, если по нему не кликают). → https://thsm.notion.site/e31f6989a2134d6bbc16567245b1e10f
- **Микро-приложения / Модульность экосистемы** — приложение = форматы + отчуждаемые виджеты + протоколы + клей, от разных вендоров; auto contextual opt-in подтягивание модулей вместо апстора (QR в парке → AR-слон сразу, а не «скачайте наше приложение»; App Clip двигался туда). Честно зафиксированы проблемы: потеря бренда вендора, фишинг (ответ — local-first + e2e-синк), адская комбинаторика тестирования (ответ — ограничения по-эппловски + телеметрия + авто-фиксы). → https://thsm.notion.site/1b44786460d44d918d4643335dce99b4

**Важное для позиционирования:** ранняя Fuchsia (2017–2019) — это буквально наша модель: компоненты вместо приложений, два типа — агенты (резидентные) и модули (GUI, именуются существительными с действиями-глаголами), stories, entities («any uniquely identifiable person, place, thing, event or concept…»), Maxwell AI как проактивный саджест. Google всё это выпилил (Armadillo UI, stories, Maxwell) и оставил только подложку — Zircon, Starnix, Scenic. Agent OS реализует изначальное видение Fuchsia на выжившей подложке Fuchsia. Это не «вдохновлялись», это достройка. → https://thsm.notion.site/03eec810560e415cb219dcd40cadf1fe

## Риски (сжатый регистр)

R1 бутлоадер закрыт (старт с ARM-платы) · R2 bring-up SoC тянется годами (трек А развязан — принять) · R3 GPU-драйвер застрял (software rendering) · R4 голос не заведётся (жить на data/SMS) · R6 потолок камеры (принять уровень postmarketOS) · R7/R8 Google двигает Starnix/API (пин + абстракции) · R9 недооценка объёма и выгорание (развязка треков, MVP-конфиги, резать без жалости).

---

## Приложение: исходный wishlist (без изменений, для истории)

# Своя мобильная ОС
Fuchsia like

- Project/Task/Document/People/Local/Agent/private first 
	- agentic: every action and data peace is accessible 
- Widgets/Data sources/Integrations
- Global User input cache registry. Don’t lost any bite 
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
- SideMemo: автолинковка связанных документов при упоминании в тексте  
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
- process id (pid) не доступен в виде числа. Только мнемоника. И так везде. Числа могут быть только для оптимизации в деталях реализации но никогда не доступны пользователю и программисту и могут бывать интересны только мейнтейнеру при специфичных багах
- 

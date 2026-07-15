> **English research doc (translated from the original Russian atlas).** Prior-art atlas: who tried similar ideas before. Non-normative — normative requirements are defined by the linked architecture, product, hardware, legal, and planning documents.

# Prior Art Atlas: who, when, and how it's already been tried

> Revision: 2026-07-10. Every idea from "Own Mobile OS" and UX RESEARCHES is matched against historical attempts (what worked, what killed it) and the current agentic front. Format: concept → precedents → lesson for Agent OS.

---

## 1. Entity/item-first instead of apps

- **Apple Newton OS (1993) — data soup.** A single object store: all "apps" read and write shared objects, data isn't locked into silos. Plus Assist: highlight "lunch with Bob Tuesday" and the system creates a meeting (a proto-SideMemo/IntentBox thirty years early). Died with the Newton, but data soup is still cited as the most correct data model for a mobile OS.
- **Lotus Agenda (1988, Mitch Kapor).** Item-centric PIM: free text is automatically categorized by meaning — a proto-auto-tagging precursor to the TagFS note. Cult classic, commercially dead.
- **Chandler / OSAF (2002–2008, Kapor again).** Item-centric PIM where a note/email/task are mutually interchangeable. Failed so instructively that a book was written about it — "Dreaming in Code" (Scott Rosenberg). Lessons: scope creep, sync is harder than the model itself, architectural perfectionism without early users. Required reading before A3.
- **MIT Haystack (Karger, ~2003).** A unified store of items plus user-defined views on top. Academic ancestor of the itemized OS.
- **Microsoft WinFS (2003–2006).** Entities (Contact, Document, Event) across the whole system, relational queries against the filesystem. Killed by performance and complexity — the main trump card of entity-store skeptics. 2026 counterargument: WinFS dragged SQL Server on top of NTFS on 2004-era hardware; embedded DBs, full-text indexes, and CRDTs have since become cheap. But the lesson "the semantic layer has to be cheap and incremental" is eternal.
- **KDE Nepomuk / Semantic Desktop (2006–2013).** An RDF graph of everything on the desktop. Died from weight: indexing ate the machine, users turned it off. The same lesson from a different angle.
- **BeOS BFS (1997).** Attributes + indexes + live queries in the filesystem — a TagFS that actually worked and that people loved. Its existence proves: a queryable filesystem isn't a fantasy.
- **Palm webOS Synergy (2009).** Merging contacts/calendars/conversations from every service into unified entities — the "meta-contacts" from the FluidSpace note were in production at Palm in 2009. The account migration and dedup mechanics are a ready-made reference.
- **Windows Phone People Hub (2010).** The person as a first-class citizen: all correspondence, social feeds, photos of a person in one card. Person-first, in production at Microsoft. Died with the platform (see the app-gap lesson below).

## 2. Cards/widgets instead of apps

- **Palm webOS (2009).** Cards and stacks of cards as the multitasking model; a gesture model the industry lifted wholesale (iPhone X swipes are its direct descendants). **Just Type** — universal input, "type whatever you want, the system figures it out" = FlexLight in production in 2010. Still alive in LG TVs. Lesson: the best UX doesn't save you without an app ecosystem and competitive hardware.
- **BlackBerry 10 (2013).** Hub — a unified feed of all communications (adjacent to our "notification → tray with classification"), Peek/Flow gestures. Same cause of death: app gap.
- **Firefox OS (2013–2016).** Web apps instead of native + **adaptive app search (Everything.me): type "pizza" and the system assembles ephemeral apps around the intent**. This is the "auto installation" from our wishlist, implemented in 2013. Died: weak hardware, carrier-centric distribution, the web platform wasn't ready. A fork lives on as KaiOS on hundreds of millions of feature phones.
- **Ubuntu Touch Scopes (2013) + Unity HUD (2012).** Scopes — content lenses instead of apps (music/news/local content aggregated into one screen). HUD — keyboard-driven search across an app's menu: a piece of FlexLight in production at Canonical in 2012.
- **Google Glass (2013).** A Timeline of cards as the sole interface + voice. A precedent for "feed as shell" on a constrained form factor.
- **Google Now (2012).** Proactive contextual cards for billions of users — Proactive UI in production. Degraded into the Discover ad feed. Lesson: proactivity dies when the platform's incentive is engagement rather than usefulness; the only cure is a platform that doesn't live off ads.
- **OLPC Sugar (2007).** Journal instead of a filesystem: an activity diary as the primary interface, activity-centric. A living precedent (still in schools today) for timeline-as-shell.
- **OpenDoc / CyberDog (Apple, 1996).** Compound documents: a document assembled from components made by different vendors instead of monolithic apps — "ecosystem modularity," verbatim. Killed in 1997. The key lesson is economic: nobody wanted to sell "a part," everybody wanted to sell "the whole." Our "lost brand & identity" question is the same problem; without a built-in monetization model, a component ecosystem doesn't take off (see §5).

## 3. Agents and proactivity — deep history

- **General Magic / Magic Cap + Telescript (1994).** Mobile agents that travel across the network and take actions on the user's behalf — an agentic OS 30 years ahead of the trend. Died: no network yet, a closed consortium, phones won over communicators. The documentary "General Magic" (2018) — therapeutic viewing for anyone building an OS ahead of its time.
- **Apple Knowledge Navigator (1987).** A concept video of a conversational agent in a tablet — a frame the industry is still aiming at.
- **Remembrance Agent (Bradley Rhodes, MIT, 1996).** "Applications that watch over the user's shoulder and suggest information relevant to the current situation" — a quote already sitting in our IntentBox note. The academic lineage of SideMemo.
- **Open Sesame! (1993, Mac).** A utility that detected recurring action patterns and suggested automation — "detecting action patterns" (and our abandoned patent) in 1993-era software.
- **Apple Data Detectors (1997, Bonnie Nardi et al.).** Entity recognition (addresses, dates) in any system text → contextual actions. A direct ancestor of SideMemo, survives to this day as "detectors" in iOS.
- **Clippy / Office Assistant (1997).** The canonical anti-pattern for proactivity: interrupts instead of helping; doesn't learn; can't be turned off. Our "new Clippy" note gets the framing right: proactivity has to be quiet (an IntentBox chip, not a character).
- **Fuchsia Maxwell (2017–2019).** Already in our notes; agentic suggest in the OS, cut by Google.

## 4. Global history and universal search

- **GNOME Zeitgeist (2009).** A system event log + Activity Journal — global history in open source, in 2009. Quietly died: a log without search, agents, and shell integration is nobody's darling.
- **Windows 10 Timeline (2018–2021).** A history of tasks/documents synced between machines, right in Task View. Killed for low usage. The same lesson, from Microsoft's budget: **history is a substrate for agents and search, not a standalone feature.** Ours treats it as a substrate — correctly.
- **Quicksilver (2003) → Alfred → Raycast.** The palette's evolution is already in the FlexLight note; add Quicksilver as the genre's starting point.
- **Microsoft Recall / Screenpipe / Rewind** — see "Widening the Lens" §5.

## 5. Lessons from failures, distilled into rules

1. **App gap kills paradigms.** webOS, BB10, Windows Phone, Firefox OS — all died not from bad ideas but from a lack of apps. Agent OS's answer is already in the architecture (Starnix + web + micro-widgets day one), but the lesson needs to stay in the spec as a first-class constraint, not a footnote.
2. **The semantic layer has to be cheap.** WinFS, Nepomuk: if entity extraction visibly eats battery/disk, the user will turn it off and the vendor will cut it. Incremental, lazy, on the NPU.
3. **Component economics — an unsolved problem since 1996.** OpenDoc died from it; our "lost brand" is the same issue. Fresh precedents showing it's solvable: Telegram Mini Apps (micro-apps with payments, hundreds of millions of users), the OpenAI Apps SDK with a marketplace and rev-share. Built-in, zero-friction billing isn't a feature — it's a precondition for a modular ecosystem to exist at all.
4. **Proactivity without incentive alignment degrades into advertising** (Google Now → Discover). Open source + locality aren't ideology, they're a defense of the mechanics.
5. **History nobody consumes is useless** (Zeitgeist, Timeline). History needs agents, search, and a timeline-shell from day one.
6. **Too early is also death** (General Magic, Newton). The difference in 2026: networks, NPUs, LLMs, and the local-first stack all exist. For the first time, every dependency of the vision is available at once.

## 6. The current agentic front (2025–2026)

**Above (a layer over the OS):**
- **OpenAI is officially building "an OS on top"**: Apps SDK + AgentKit (DevDay, Oct 2025) — apps live inside ChatGPT, a marketplace with review and rev-share; analysts describe the strategy in literal OS terms: models = kernel, chat = shell, Apps SDK = userland. Next up: a merger of ChatGPT + Codex + Atlas into one super-app (meanwhile the Atlas browser is being shut down on 2026-08-09, its agentic capabilities pulled inward), ChatGPT Work (2026-07-09) — an agent that "finishes the work itself" using the company's tools. Notably: **Apple blocks super-apps on iOS (guideline 4.7)** — OpenAI is squeezed one floor above the OS, which confirms our thesis about the OS level being the defensible position. The io device (Jony Ive, acquired 2025) hasn't been shown yet — OpenAI's visible strategy today is software-first.
- **Agentic browsers** as proto-agentic-OSes: the same pattern of "can't replace the OS — wrap it instead."
- **Anthropic MCP** — became the agent↔tool standard; see "Widening the Lens" §1. UPDATE: but there's now a rollback underway, a shift toward plain CLI tools and skills.

**Inside the platforms:** Android AppFunctions ("apps as on-device MCP servers," Gemini preview since May 2026), Apple App Intents — covered in "Widening the Lens" §1. Plus Apple Foundation Models: Apple's own models, distilled from borrowed Gemini (important caveat: "Siri ≠ Gemini").

**Agentic hardware and vendor OSes:**
- **Rabbit R1 (2024)** — promised a LAM ("the agent does everything"), shipped a wrapper; lesson: agentic promises without a substrate = a scandal.
- **Humane AI Pin (2024–2025)** — died, sold off to HP; lesson: a new form factor doesn't substitute for usefulness.
- **Deutsche Telekom AI Phone (2025, Perplexity)** — a carrier putting an assistant in place of the launcher: demand for "agent instead of apps" has reached the carriers.
- **Jolla Mind2** — a local AI hub, privacy as the product; our crowd.
- Android vendors (Honor, Samsung/Galaxy AI, Xiaomi HyperAI) are racing to bolt agents onto their firmware — all on top of app-centric baggage, all hitting the ceiling of opt-in coverage.

**Academia:** AIOS (Rutgers) — "LLM Agent Operating System": agent planning, memory, tools as OS services; Microsoft UFO/UFO² — "Desktop AgentOS" on top of the Windows GUI. Useful as vocabulary and benchmarks; both are a layer on top of existing OSes.

## 7. Additional ideas that fell out of history (wishlist candidates)

1. **FlexLight's Just Type mode**: empty keyboard/voice input anywhere in the system, already an intent, no need to invoke a palette (webOS proved viability).
2. **Synergy-style migration**: onboarding a new user = merging all their accounts into an entity graph (contacts, correspondence, calendars) — the product's first "wow," webOS's mechanics + modern bridges (Matrix/Beeper).
3. **Ephemeral intent surfaces** (Everything.me): intent → temporary widget assembly → permanence based on actual usage. Sharpens our "auto installation": you're not installing an app, you're installing a surface.
4. **Newton's Assist gesture**: select any text anywhere → a system menu of actions over recognized entities (call, create a task, measure, translate) — cheap to build on top of the entity store + SideMemo.
5. **Journal-first onboarding** (Sugar): for new users, the timeline is the sole interface, stories open up gradually (our "Tool perspective / gradual system learning" gets a concrete form).
6. **Day-one economics**: billing/donations/rev-share built into the platform core (the OpenDoc lesson + the Telegram Mini Apps precedent), otherwise micro-widgets stay a hobby.
7. **Anti-Clippy contract** for IntentBox: written proactivity rules in the spec (never interrupts focus, always explains "why this was suggested," degrades to full silence, learnable per-user).

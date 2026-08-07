---
id: "AOS-RES-PRIOR-ART-ATLAS-SUMMARY-EN"
title: "Prior Art Atlas — English Summary"
status: "Normative English distillation of a non-normative Russian source"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "English distillation of the Russian prior-art atlas: for each Agent OS concept (entity-first data, cards/widgets over apps, agents, global history), the historical precedents that tried it, why they died, and the surviving lesson — condensed into six failure rules and a modern (2025–2026) agentic-front scan."
---

# Prior Art Atlas — English Summary

> Faithful English distillation of `prior-art-atlas.md` (Russian, non-normative, revision 2026-07-10). Each Agent OS idea is mapped to historical attempts (what worked, what killed them) and to the modern agentic front. Format: concept → precedents → lesson for Agent OS.

## Table of Contents

- [Scope and Method](#scope-and-method)
- [Entity/Item-First Instead of Apps](#entity-first)
- [Cards and Widgets Instead of Apps](#cards-widgets)
- [Agents and Proactivity: A Deep History](#agents-proactivity)
- [Global History and Universal Search](#global-history)
- [Failure Lessons Condensed Into Rules](#failure-rules)
- [The Modern Agentic Front (2025–2026)](#agentic-front)
- [Extra Ideas Recovered From History](#recovered-ideas)
- [Related Documents](#related-documents)

<a id="scope-and-method"></a>

## Scope and Method

The atlas cross-references every idea from the "own mobile OS" and UX research notes against historical attempts and the current agentic landscape. Prior art informs requirements; it does not become an undocumented dependency. The value is the pattern of repeated failure — where good ideas died for structural (not conceptual) reasons that Agent OS must design around.

<a id="entity-first"></a>

## Entity/Item-First Instead of Apps

A thirty-year lineage of systems that made data — not applications — the primary object:

- **Apple Newton OS (1993), "data soup":** one shared object store all apps read and write; nothing siloed. Its Assist feature turned selected text ("lunch with Bob Tuesday") into a calendar event — a proto-IntentBox thirty years early. Died with Newton, but the data-soup model is still cited as the correct mobile data architecture.
- **Lotus Agenda (1988) and Chandler/OSAF (2002–2008), both by Mitch Kapor:** item-centric PIMs where notes, mail, and tasks are interchangeable and free text auto-categorizes by meaning (proto-auto-tagging). Chandler failed so instructively it produced a book, *Dreaming in Code* — required reading on scope creep, sync being harder than the model itself, and architectural perfectionism without early users.
- **MIT Haystack (~2003):** unified item store with user-defined views on top — the academic ancestor of the itemized OS.
- **Microsoft WinFS (2003–2006):** entities (Contact, Document, Event) system-wide, relational queries over the filesystem. Killed by performance and complexity — the skeptics' trump card. The 2026 counter-argument: WinFS hauled SQL Server over NTFS on 2004 hardware; embedded databases, full-text indexes, and CRDTs are now cheap. The permanent lesson survives: **the semantic layer must be cheap and incremental.**
- **KDE Nepomuk / Semantic Desktop (2006–2013):** an RDF graph of everything; died of its own weight (indexing consumed the machine, users disabled it) — the same lesson from the other side.
- **BeOS BFS (1997):** attributes + indexes + live queries in the filesystem — a queryable FS that actually worked and was loved. Proof the concept is not fantasy.
- **Palm webOS Synergy (2009):** merged contacts, calendars, and conversations from every service into unified "meta-contacts" — shipped in 2009. A ready reference for account migration and deduplication.
- **Windows Phone People Hub (2010):** the person as a first-class object (all of someone's messaging, social, and photos in one card). Person-first, shipped by Microsoft; died with the platform (see the app-gap rule).

<a id="cards-widgets"></a>

## Cards and Widgets Instead of Apps

- **Palm webOS (2009):** cards and card stacks as the multitasking model; a gesture system the industry later strip-mined (iPhone X swipes are direct descendants). **Just Type** — universal "type whatever, the system figures it out" input — shipped in 2010. Lives on in LG TVs. Lesson: the best UX does not survive without an app ecosystem and competitive hardware.
- **BlackBerry 10 (2013):** the Hub as a single unified communications feed (adjacent to "notification → classified tray"), Peek/Flow gestures. Same cause of death: app gap.
- **Firefox OS (2013–2016):** web apps instead of native, plus adaptive app search (Everything.me): type "pizza" and the system assembles ephemeral apps for the intent — the "auto installation" wishlist item, shipped in 2013. Died of weak hardware and carrier-centric distribution; its fork lives on as KaiOS on hundreds of millions of feature phones.
- **Ubuntu Touch Scopes (2013) + Unity HUD (2012):** content lenses instead of apps, and keyboard search over an app's menus — a slice of the command-palette idea shipped by Canonical in 2012.
- **Google Glass (2013):** a card timeline as the only interface plus voice — a "feed as shell" precedent on a constrained form factor.
- **Google Now (2012):** proactive contextual cards for billions of users — proactive UI in production. Degraded into the ad-driven Discover feed. Lesson: **proactivity dies when the platform's incentive is engagement, not usefulness**; only a platform that does not live on advertising is immune.
- **OLPC Sugar (2007):** a Journal instead of a filesystem — an activity diary as the primary, activity-centric interface (a live timeline-as-shell precedent, still in schools).
- **OpenDoc / CyberDog (Apple, 1996):** compound documents assembled from multi-vendor components instead of monolithic apps — the "ecosystem modularity" idea verbatim. Killed in 1997 for an economic reason: nobody wanted to sell a "part," everyone wanted to sell the "whole." The unresolved "lost brand & identity" question is this same problem: without a built-in earning model, a component ecosystem never ignites.

<a id="agents-proactivity"></a>

## Agents and Proactivity: A Deep History

- **General Magic / Magic Cap + Telescript (1994):** mobile agents that travel the network and act on the user's behalf — an agentic OS thirty years before the trend. Died because the network did not exist and the consortium was closed. The 2018 *General Magic* documentary is therapy for anyone building an OS ahead of its time.
- **Apple Knowledge Navigator (1987):** the concept video of a conversational tablet agent — the frame the industry still aims at.
- **Remembrance Agent (MIT, 1996):** "applications that watch over the user's shoulder and suggest information relevant to the current situation" — the academic ancestry of SideMemo.
- **Open Sesame! (1993, Mac):** detected repeated action patterns and offered automation.
- **Apple Data Detectors (1997):** recognized entities (addresses, dates) in any system text and offered contextual actions — the direct ancestor of today's iOS detectors and of SideMemo.
- **Clippy / Office Assistant (1997):** the canonical anti-pattern — interrupts instead of helping, does not learn, cannot be turned off. The correct frame: proactivity must be quiet (an IntentBox chip, not a character).
- **Fuchsia Maxwell (2017–2019):** in-OS agent suggestions, removed by Google.

<a id="global-history"></a>

## Global History and Universal Search

- **GNOME Zeitgeist (2009):** a system event journal + Activity Journal — global history in open source. Died quietly: a log without search, agents, or shell integration is useless.
- **Windows 10 Timeline (2018–2021):** task/document history synced across machines, killed for low usage. Same lesson with Microsoft's budget: **history is substrate for agents and search, not a standalone feature.** Agent OS treats it as substrate — correctly.
- **Quicksilver (2003) → Alfred → Raycast:** the command-palette lineage; Quicksilver is the genre's origin point.

<a id="failure-rules"></a>

## Failure Lessons Condensed Into Rules

1. **App gap kills paradigms.** webOS, BB10, Windows Phone, and Firefox OS all died from an absence of apps, not bad ideas. Agent OS answers this in the architecture (Starnix + web + micro-widgets on day one), but the constraint must stay first-class in the spec, not a footnote.
2. **The semantic layer must be cheap.** WinFS and Nepomuk: if entity extraction visibly drains battery or disk, users disable it and vendors remove it. Incremental, lazy, on the NPU.
3. **Component economics is unsolved since 1996.** OpenDoc died of it; "lost brand" is it. Fresh proof it is solvable: Telegram Mini Apps (micro-apps with in-platform payments at hundreds-of-millions scale) and the OpenAI Apps SDK marketplace with rev-share. **Built-in, zero-friction billing is not a feature but a precondition** of a modular ecosystem.
4. **Proactivity without incentive alignment degrades into advertising** (Google Now → Discover). Open source plus locality is mechanical protection, not ideology.
5. **History without consumers of history is useless** (Zeitgeist, Timeline). History needs agents, search, and a timeline shell from day one.
6. **Too early is also death** (General Magic, Newton). What is different in 2026: networks, NPUs, LLMs, and a local-first stack all exist — for the first time every dependency of the vision is available at once.

<a id="agentic-front"></a>

## The Modern Agentic Front (2025–2026)

**Above the OS (a layer on top):**

- **OpenAI is explicitly building "an OS from above":** Apps SDK + AgentKit (DevDay, Oct 2025) — apps live inside ChatGPT, a reviewed marketplace with rev-share. Analysts describe the strategy in OS terms: models = kernel, chat = shell, Apps SDK = userland. The roadmap merges ChatGPT + Codex + Atlas into one super-app (the Atlas browser shuts down 2026-08-09, its agentic capabilities pulled inward); ChatGPT Work (2026-07-09) is an agent that "finishes the work itself" over a company's tools. Notably, **Apple blocks super-apps on iOS (guideline 4.7)** — OpenAI is confined to the floor above the OS, which validates the thesis that the OS level is a defensible position.
- **Agentic browsers** as proto-agentic-OSes: the same "can't replace the OS, so wrap it" pattern.
- **Anthropic MCP** became the de facto agent↔tool standard — though there is now a partial swing back toward simple CLI utilities and skills.

**Inside the platforms:** Android AppFunctions ("apps as on-device MCP servers," Gemini preview since May 2026) and Apple App Intents. Plus Apple Foundation Models: Apple's own models distilled from borrowed Gemini ("Siri ≠ Gemini").

**Agentic hardware and vendor OSes:** Rabbit R1 (promised a Large Action Model, shipped a wrapper — agentic promises without substrate become a scandal); Humane AI Pin (dead, sold to HP — a new form factor does not replace usefulness); Deutsche Telekom AI Phone (2025, Perplexity — carriers now ship an assistant instead of a launcher); Jolla Mind2 (local AI hub, privacy as product). Android vendors (Honor, Samsung Galaxy AI, Xiaomi HyperAI) race to glue agents onto app-centric firmware and all hit opt-in coverage limits.

**Academia:** AIOS (Rutgers, "LLM Agent Operating System") and Microsoft UFO/UFO² ("Desktop AgentOS" over the Windows GUI) — useful as vocabulary and benchmarks, both layers over existing OSes.

<a id="recovered-ideas"></a>

## Extra Ideas Recovered From History (Wishlist Candidates)

1. **Just-Type mode:** empty keyboard/voice input anywhere in the system is already an intent, no palette invocation (webOS proved viability).
2. **Synergy migration:** onboarding = merging all a user's accounts (contacts, conversations, calendars) into the entity graph — the product's first "wow," webOS mechanics plus modern bridges (Matrix/Beeper).
3. **Ephemeral intent surfaces (Everything.me):** intent → temporary widget assembly → permanence only on actual use. Refines "auto installation": a surface is installed, not an app.
4. **Newton Assist gesture:** select any text anywhere → a system action menu over recognized entities (call, create task, convert, translate) — cheap over an entity store plus SideMemo.
5. **Journal-first onboarding (Sugar):** for new users the timeline is the only interface; stories unlock gradually.
6. **Economy on day one:** billing/donations/rev-share in the platform core (OpenDoc's lesson plus the Telegram Mini Apps precedent), or micro-widgets stay a hobby.
7. **Anti-Clippy contract for IntentBox:** written proactivity rules in the spec — never interrupts focus, always explains "why suggested," degrades to full silence, learns per user.

<a id="related-documents"></a>

## Related Documents

- [Prior Art Atlas — Russian source](prior-art-atlas.md) — the non-normative original this document distills.
- [Prior Art and Literature Atlas](AOS-RES-001.md) — the normative English prior-art register.
- [iOS vs Android vs Agent OS — English Summary](ios-vs-android-vs-agent-os.summary.en.md) — sibling summary (the grievance register that motivates Agent OS).
- [Agent OS Wider Lens — English Summary](agent-os-wider-lens.summary.en.md) — sibling summary (adjacent efforts and buildable components).
- [Source register](AOS-RES-002.md#source-register)

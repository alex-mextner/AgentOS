> **English research doc (translated from the original Russian atlas).** iOS/Android critique and Agent OS motivation. Non-normative — normative requirements are defined by the linked architecture, product, hardware, legal, and planning documents.

# iOS vs Android vs Agent OS

> Revision: 2026-07-10. This is a register of grievances and facts that the Agent OS motivation grows out of. Grievances against both systems → "Why both are exhausted" section → which is itself the Agent OS product thesis (see the "Own Mobile OS" note).

---

## Why Android is still worse than iOS

1. **No auto-brightness that actually works.** Everyone turns it off.
2. **No proper split of the shade** into notifications and controls.
     UPDATE: One UI 7+, AgentOS, Android 16 QPR — now exists.
3. **No** unified system for sharing files over WiFi/Bluetooth (**AirDrop**). There is some quickshare.google that allegedly works with both iOS and Windows.
     Find Hub (formerly Find My Device) — a crowdsourced network since April 2024, Chipolo/Pebblebee/Moto Tag tags, UWB. Network density is still worse than Apple's, but the system exists. Also a dubious shelf item.
4. **No** unified, broad, well-working, universal cross-platform system for finding things (**AirTag**).
     Google reverse-engineered the AirDrop protocol without Apple's involvement: Pixel 10 (November 2025), and with the June 2026 Feature Drop — Samsung, Xiaomi, OPPO, vivo, Honor, OnePlus flagships. Works directly with iPhone/iPad/Mac, p2p, no internet needed. Limitation: only "Everyone for 10 minutes" mode, no "Contacts Only" yet. Bottom line: Android now shares with the iPhone better than Apple shares with Android. (https://www.androidauthority.com/google-android-airdrop-expansion-3638222/) Though we tested it ourselves: 1) doesn't work without internet 2) Pixel 5 couldn't connect to an iPhone 17 Pro Max and, as usual, gave no explanation.
5. Material UI is visually worse than Apple's HIG — colors, animations, philosophy, icons, pattern polish, etc.
     Material 3 Expressive (2025) — a big redesign. It's livelier now; better/worse is taste.
6. No proper spotlight: system-wide search (files, apps, photos...), calculator, dictionary, converter...
7. **"No Dynamic Island / proper status bar."** Pixel has one now.
      — partly outdated. Android 16 added Live Updates (progress notifications in the status bar), Xiaomi made HyperIsland — a literal copy of Dynamic Island.
8. App icons get stuck at the top of the screen for no reason. Fine on Pixel.
9. You constantly have to close everything or you run out of memory and the battery drains.
10. Few **good** apps.
11. Google can't do product UX: Maps/Drive/Docs/Gmail/Translator — nonfunctional, ugly, unpolished, lots of bugs, offline translation and maps don't work, the list goes on. Yandex has equivalent services made much better but with the KGB built in. That said, Apple is often even worse across that same set of services. Though Pages/Numbers are nicer but less functional in terms of API and automation.
12. Hardware fragmentation.
13. Google steals and sells user data — that's the business model. Apple — privacy first.
14. Camera software is always worse. But there can be all sorts of poorly made or niche gimmicks. The latest Pixels are allegedly on par.
15. Worse emoji design. Pixel seems to use Apple's, which is fine.
16. Lower-quality apps due to laxer review.
17. No proper backup like iOS's (in the ideal case you just keep using the phone as if you never switched devices, usually you only need to log into third-party apps). Needs clarifying.
18. ~~No proper night mode, automatic do-not-disturb~~
      Android 15 Modes (schedules, bedtime). Google Pixel also has had something serviceable for a while now.
19. No silent-mode button.
19. **No** **continuity** ecosystem (a shared clipboard, camera viewfinder on watch/Mac, notification handoff between devices, OTP straight into the input field, SMS, order status, etc.). There are shared passwords and Chrome history+bookmarks.
20. New notifications pop up at the top in batches for no reason, plus old ones for no reason. A mess. Nobody even tries to read them in that state anyway.
21. You can't temporarily mute notifications from a single app, a single chat/group.
      Android 15+ has notification cooldown (throttles spam from a single app). Defaults are still noisy — the complaint about defaults stands.
21. **Battery.** No charge limiter or adaptive charging. Poor or absent screen-on-time, discharge stats, detailed battery health analysis.
      Pixel has an 80% limit and adaptive charging since 2024.
22. Usually no proper system gestures (the good ones are the ones Apple stole from BlackBerry, with the bottom handle). Instead, antiquated 3 buttons at the bottom.
23. Lots of restrictions for developers, violating which makes it impossible to use Google Play.
24. Google Play — what kind of name is that? Is it a player? Idiots.
25. Not a single usable Android tablet exists. They should all just be burned and banned.
      It's gotten better (Android 16 desktop windowing, Google's large-screen requirements), but the tablet app ecosystem still isn't iPad-level.
26. No way to opt out of individual permission requests during app install. Needs clarifying.
27. No proper secure face recognition (Face ID). Apple's works in the dark and is more secure.
      TrueDepth: IR dot projector + IR camera (structured light). Most Androids do camera-only face recognition, no depth hardware; exception — Pixel 8+ (Class 3, good enough for payments).
28. The devices themselves are usually much worse-built. Comparable quality costs more. Reinforced glass, water resistance, metal, build quality.
29. System updates, when they arrive at all, usually come once.
      Outdated for flagships: Pixel 8+ and Galaxy S24+ — 7 years of OS updates. Still true for cheap Androids.
30. The traditional race for megabytes and megapixels instead of polishing UX and vertical integration.
31. No Taptic Engine or unified haptic feedback system; sound notifications are usually also made much worse, e.g. message sounds are often excessively long.
32. WiFi and SIM are lumped into a single section, at least on Pixel. Too many taps.
33. ~~The camera often can't read QR codes.~~
      Outdated by about five years, they all read them now.
34. Siri can do simple things without internet.
35. Always-on display. Sometimes on Samsung.
36. Can't tap the top of the screen to scroll to the top of a document.
37. iOS has a convenient text navigator via press-and-hold on the space bar.
38. iOS/iPhone has emergency satellite connectivity, and there's movement toward using it as an SMS fallback too.
39. For historical reasons the Android file manager shows a dump of system and user files mixed together. And working with an SD card isn't implemented very conveniently.
40. On iOS, for a long time now, most actions can be done in a single gesture even if it requires entering a submenu. Long press, a context menu opens, without lifting your finger you drag and release on the item you want. Works across multiple levels too. Unfortunately not done declaratively or universally, and it's often broken in third-party apps.
41. iOS has offline dictionaries — definitions and translations into various languages, plus a few others. Ideally you could have a local mini-Wikipedia if the device has 1TB+.


### Fable summary

- Hardware and app-quality fragmentation; weak store review.
- Collecting user data as a business model.
- Haptics: Taptic Engine and a unified feedback system — still Apple-only; Android notification sounds are excessive.
- Backup/migration still isn't "kept using it like nothing changed."
- Most vendors' camera software is worse (Pixel is the exception).


## Where it's not all bad

1. Google Pixel doesn't have some of these problems.
2. Xiaomi and other manufacturers are now trying to copy iOS.


## Where Android is still, for some reason, better (Apple, damn it!)

1. You can share received WiFi (dual band).
2. You can show a QR code for WiFi.
2. ~~You could go into WiFi settings by long-pressing the icon in the shade~~ — better late than never, Apple finally added it.
3. Apple Maps are still worse than Google's. And you'd think that was already rock bottom.
     Apple Maps: noticeably improved (in 2026), but mostly fair for Silicon Valley and a bit for the rest of the US.
4. Apple has no idea how to do web services — Pages/Numbers/Photos can't be properly viewed on other systems.
5. ~~In caps mode the keyboard characters don't turn uppercase~~ — fixed a while ago.
6. ~~Copied text doesn't show up in suggestions~~ — finally fixed in iOS 27. But Pixel even has a multi-item clipboard. And on iOS it works maybe half the time. More often it doesn't than it does.
7. Unified back gesture. Debatable — on iOS it's more of a pattern. All well-behaved apps support it. But a universal one is usually better.
8. The iPhone loses a huge chunk of value every time a new fall model comes out, which makes it economically questionable to keep proclaiming it a device that can last 5 years and stay relevant (assuming you replace the battery).
9. Despite very optimized system software, the battery size is usually so much smaller and the technology so much more conservative that you constantly have to carry a power bank for the iPhone and hunt for an outlet.
10. **Even the iPad has no full-fledged, or even any real, multitasking. On the iPad you can show at least 2 windows, but even that is a stretch. The iPhone keeps a second app in memory for a few seconds. After locking, it dumps everything from memory and there's essentially no way to run things resident. The best apps require you to keep them open to finish downloading/updating/complete a watchdog process.**
      iPadOS 26 (2025) brought a real windowing system: freely resizable windows, a menu bar. On iPad the issue is partly closed, but you still can't open more than a few apps, and a long-running process requires sitting in front of the device and tapping the screen every 30 seconds.
11. With Apple, it's usually closed and only works with Apple. Though the AirTag protocol was made open, same with Swift and HomeKit (needs clarifying).
12. Most people don't need such an expensive device. That said, the second-to-last iPhone is always better than any latest Android in build quality, software, longevity, and price. The main loss is usually just the battery. But you can get the second-to-last Pro Max and it'll be quite good.
13. Charging another phone from yours, reversing the direction. Via cable or QR.
14. AI is usually better on Androids.
15. Androids still come with a microSD card sometimes. That can still be very useful.
16. ~~"Lens" AI camera~~. Arrived with iOS 27.
17. Siri is dumb as a brick.
      Siri AI (WWDC 2026) runs on Apple Foundation Models — these are Apple's own models, trained with distillation from "borrowed" Gemini models (a deal worth ~$1B/year, announced 2026-01-12; Apple has full access to Gemini in its own data centers for distillation). Three-tier routing: simple queries — on-device AFM (~3–4B, fine-tuned on Gemini data), medium — AFM on Private Cloud Compute, the heaviest — a custom 1.2T Gemini on Google Cloud (Nvidia, PCC-certified). I.e. not "Siri = Gemini," but "Apple couldn't grow the brains itself and distills someone else's." The "AI is better on Androids" point closes with the formulation "so much better that Apple trains its own models on Google's." (https://appleinsider.com/articles/26/06/08/apples-new-foundation-models-dont-contain-a-drop-of-gemini-as-we-said-they-wouldnt)
18. App Store takes a 30% cut from developers on all payments. $100 for an account.
      Softened: 15% for small business, in the EU under the DMA — alternative stores and third-party payments, in the US after the Epic ruling (2025) — external payment links.
19. On Android it's usually convenient to switch languages by swiping on the space bar.
20. ~~iOS had no filesystem access at all~~. The Files app arrived a fair while ago. But you still can't fully set default apps for formats. On the plus side, it's not a dumping ground like Android.
21. Android's built-in Photos photo editor is far more functional than Apple's. Meanwhile the same Google Photos on iOS is stripped down. And there's no good free or cheap photo retoucher on iOS.
22. Apple deliberately blocks third-party payment systems via NFC, in-app, and third-party app stores.

### Updates

**iOS 27 (WWDC, June 2026)** — a year of fixes: +30% app launch speed, +80% AirDrop speed, a Liquid Glass transparency slider (an admission that the redesign didn't land), separate alarm volume, Markdown in Notes, one number across two iPhones, support down to iPhone 11. In the iOS 27 beta, `foldState`/`angleDegrees` were found — a foldable iPhone is close. Tim Cook is leaving 2026-08-31, John Ternus next. (https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/)




## For whom there's no difference

1. For idle normies who only use the phone for memes, reels, TikToks, porn, dumb shows, and casual games. Don't care about them. Fine, sorry, I'm just only interested in people like me — people who create and change things, fix and study things, learn and teach, tell and help others.



## Why both Android and iOS are garbage

1. The app-centric approach has long since exhausted itself. What's needed is a project/task/document/person-first system.
	1. Manually searching for and installing apps rips you right out of your flow.
	2. There's no unified history the way there is in a browser, but across every kind of task performed.
	3. They constantly kill businesses by cloning paid apps that already existed in the app store.
	4. They take 30% from developers.
	5. Nobody needs yet another app for a coffee shop, but there's no other way to build contact with the customer in this paradigm.
	6. It shouldn't be the case that you talk to Anton on Element, to everyone on Telegram, to your parents on Viber, to foreigners on WhatsApp, to Masha specifically on Insta, to your nerd friends on Discord, to coworkers on Slack, on Zoom for video calls, and yet another set of apps for Russia/Dubai.
	7. Refunding a purchased app is usually impossible.
	8. You can't add a note to yourself anywhere within any app.
	9. If an app is missing a couple of necessary features, you either have to live with it or switch to another one that may be missing something else.
	10. If something in the app works locally/remotely, that's the only way it will ever work.
	11. Marketplaces (App Store) don't actually help promote apps.
2. Search across settings and the system is still very shallow.
3. AI assistants are still very shallow and always will be because of the app baggage. Every action should register 100% of actions and data through a special end-to-end visibility system for AI, both for spotlight and for an IntentBox (an AI action-suggest system).
4. Vendor lock-in to an (inconvenient) ecosystem.
5. Things don't work together properly.
6. There's no full end-to-end local-first approach.
7. Closed system software (no, Android isn't open).
8. **Keyboard and input.** Other than Yandex's, there isn't a single well-thought-out keyboard. But Yandex is the NKVD/Z/death/coffin/graveyard.
	1. No keyboard properly learns from user input to create automatic typo corrections typical for that user.
	2. And they don't adequately adapt the keys' action boxes.
	3. And they don't do continuation based on long context instead of just the last word, factoring in history too (automatic snippets and prepared messages without manually creating them, including contact details and auto-replies).
	4. iOS constantly flags even common English words as typos.
	5. iOS has no user dictionary — if a typo is underlined, there's nothing you can do about it.
	6. Android has no snap-to-word-boundary. On iOS you can neither disable it nor work around it.
9. Notification settings and defaults still aren't enough to reduce excess noise. By default everything should go to a tray and be classified the way good mail clients do. Only urgent and important things have the right to pop up.
10. System backup, even on iOS, still isn't 100%. Even in-memory state should be carried over, so you can keep editing an unsaved document at the exact moment your phone, say, blows up and you buy a new one. Not to mention having to re-login everywhere and, in many cases, lose part of your data and settings — that's simply unacceptable in the 21st century.
11. Bluetooth is a mess, and instead of fixing it Apple built its own closed AirDrop-like system. It manages audio sources reasonably well. Rather than always auto-connecting to the first device found. Apple keyboards and trackpads, for example, need to be forgotten on one computer and rebooted to connect to another, and there's no KVM-like system.
12. There's no 100% ban on custom design systems, either at the token/component level or at the philosophy/approach level.
13. HealthKits are closed even to personal automations and local AI.
14. PDF readers are terrible (no page navigation, no bookmarks, text search doesn't work if the text isn't tagged, the page number overlaps content exactly where your eyes normally read, no quick notes, no auto-fit zoom to crop extra margins — you have to double-tap yourself, and it sometimes resets when paging or changing orientation, and doesn't lock horizontal scroll either; when flipping the phone the scroll position resets; no automatic night mode; no cross-reference recognition if there's no markup; copying is often glitchy with poor markup; in landscape mode there's no book-style spread and you can't turn it on; iOS has a slightly more convenient Books app, but importing a PDF into it only works with internet; when trying to select a word the page can jump far down and select almost all the text, etc.)
15. You can't add arbitrary cards and documents to Wallet.
16. Lots of audio restrictions. Can't have parallel audio sources and sinks. Usually can't play music and record video simultaneously. Can't adjust per-app volume. Can't be on a call and play music. Lots of audio/Bluetooth bugs, loud mode forgets to switch back.
17. captive.apple.com and everything related to WiFi connections requiring some data entry, at least on iOS, is done very poorly. Some modal pops up, and if you swipe it away wrong, WiFi disconnects, and copying some code or phone number, etc. doesn't work. If you close it properly without disconnecting from WiFi, you then have to find a non-https site — such as this captive page — but it's not even saved in browser history, and overall it's not an obvious UX and few people would figure out how to do it. And if there's no SIM and texts arrive over internet, you can't get the code at all. WiFi often gets caught specifically because there's no SIM, and with a SIM it's often unnecessary anyway. A solution could be a built-in free system eSIM, limited to topping up balances and receiving OTP codes by SMS/email — because often mobile carriers don't even let you top up your balance without internet — that's already one use case.
18. No way to configure Bluetooth to not auto-connect.
19. AirDrop, even after many years of improvements, is still slow, buggy garbage.
20. By default you can't select and copy text in apps. Idea: on a long press, select the object/card/post if there is one, plus the text. Handle a long press on buttons comprehensively. 1) if there's a predefined action, execute it immediately — it should be an on-screen action that doesn't make any data changes 2) unobtrusively offer to copy the text if, say, right after the long-press a popup closes (wrong action detection) and then an AI chat opens (FlexLight).
21. No multi-item clipboard. On Pixel, at least, you can apparently scroll through clipboard suggestions in the keyboard.
22. App settings are usually scattered across 3 places: the app itself, the system, the web. And app settings within the system aren't found through settings search or system search. Built-in iOS apps usually store all their settings in the system, separate from the app itself, which is fine for them, but going from the app into its settings is very roundabout and slow, and there's no quick shortcut like Cmd+, on macOS. Meanwhile all third-party apps have their own separate login, so it makes sense for their settings to live there too. Built-in apps don't need that because they share a common login — Apple ID/Google account. Instead, a unified approach is needed for both built-in and third-party. And overall, built-in apps' privileged status should be lowered.
23. Input focus zooms the page too aggressively, which is ugly, inconvenient, and usually excessive.
24. Mobile systems don't account for Esc and Ctrl/Cmd at all, so even with an external keyboard it's still not very convenient to work fully with them.
25. Almost nowhere — except (in a limited way) some Linux distros — is there an end-to-end keymap. And a global action search doesn't exist anywhere at all. On macOS, Cmd+? works in a limited way for actions in the active app's menu, but it's buggy, very limited, and usually covers only a small fraction of actions.
26. It's not common practice to move heavy, rarely-used modules into dynamically loaded-on-demand libraries. And when it is done, it's often not done well. For example, the AI photo-editing module in iOS Photos was initially available immediately, then later moved into an add-on module, but wasn't preloaded during idle time even though usage statistics could have been collected to justify it.
27. Automatic nightly updates most often fail to complete for no clear reason.
28. There's no concept of a temporary setting. All settings are either one-time or permanent until changed again. Only rarely is it specifically designed with usage in mind. For example, usually if you enable silent mode there's no option to set it until morning/end of a meeting/etc. Though this specific case is probably already handled in a number of mobile OSes and apps. But those are half-measures. This should be a cross-cutting system concept, without which no setting anywhere should be creatable.
29. The network stack of all mainstream OSes is baked into the kernel. Which is why it's become popular to use UDP and then implement everything yourself, because you can't influence system updates from apps.
30. There's no (simple/any) way to manage packet routing across different internet uplinks, VPNs, and proxies. For link redundancy, speedup via parallel streams, and getting around illegal blocking by dubious states.
31. Despite devices having a front camera, and iOS even an IR scanner, the device can't track attention and dim the screen accordingly. Some OSes have implemented something like this at various times, not always successfully, and it's absent from mainstream OSes. Especially annoying on iOS when working with the Notification Center.
32.




### Summary: Why both are exhausted (= the Agent OS thesis)

The 2025–2026 trend confirms the diagnosis: the platforms are converging on the same point. Google reverse-engineers AirDrop, Apple buys brains from Google, Xiaomi copies Dynamic Island, Apple copies windowing. Differentiation at the "feature" level is over — both have hit the same ceiling: the **app-centric paradigm**.

1. **App-centric has exhausted itself.** What's needed is a project/task/document/person-first system. Manually installing apps rips you out of your flow; there's no unified history (like a browser, but across all task types); talking to Anton on Element, to everyone on Telegram, to your parents on Viber — that's not "choice of messenger," that's the system's refusal to have a concept of "a person."
2. **AI assistants will always be shallow on this baggage.** The app is a black box; the assistant sees pixels and Intents. Until every action and every byte of data is registered in an end-to-end system visible to AI (spotlight, IntentBox, suggest) — the assistant will remain an answering machine. Siri AI on Gemini doesn't fix this: the model is smart, but there's no access to the data.
3. **Backup isn't 100%.** Even iOS doesn't carry over in-memory state. Phone blows up → you buy a new one → you keep editing the unsaved document — that's the bar.
4. **Nobody has local-first.** Where data and logic live is decided by the app, not the system/user.
5. **Keyboards don't learn** from user input (personal auto-corrections, long-context continuation, auto-snippets).
6. **Notifications**: by default everything goes to a tray with classification like good mail clients; only urgent things pop up. Nobody does this.
7. **Health/Wallet/audio** — closed verticals: HealthKit has no local r/w API for your own automations, Wallet won't accept an arbitrary document, parallel audio sources are forbidden.
8. **Bluetooth** is broken everywhere; instead of fixing it, Apple built a closed add-on.



## What's actually good in modern mobile OSes and hardware

1. Computational photography.
2. On-device TTS/ASR.
3. Lots of software and large developer communities.
4. Connectivity and sensor drivers.
5. Performance and battery optimizations.
6. Predictive keyboards. Though not very convenient and haven't developed in a long time.
7. OTP/passkey, biometrics, secure chip.
8. Early signs of pulling OTP out of SMS/email.
9. Recognition and highlighting of basic entities in text (phone number, email, OTP). An early form of SideMemo. (The so-called "detectors" in iOS.)

---

→ An answer to every point is in "[Own Mobile OS](../../AgentOS.md)" (`engineering-bible/AgentOS.md`; still Russian — a separate, not-yet-scheduled translation): an entity/agent model instead of apps, global history, local-first + CRDT, a capability model for agents, 100% backup including state, open source. The conceptual foundation for each solution is in [UX RESEARCHES](https://thsm.notion.site/95302a962f5c426e98d48271b13cc73a): item 1 → IdeaOS and "micro-apps," item 2 → FlexLight/IntentBox, item 5 → SideMemo, tag-based FS → TagFS.

<!-- Note: a trailing Notion-export annotation/provenance block (author highlight byte-offset ranges keyed to the original Russian text) was dropped here on translation — those offsets no longer map onto the English text and would be misleading if kept. -->

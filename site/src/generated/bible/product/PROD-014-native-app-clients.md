---
id: "AOS-PROD-014"
title: "Native App Clients and Service Integration"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Product / Legal / Architecture Council"
audience: "Product, engineering, legal, and program leadership"
summary: "How popular apps and banking services reach Agent OS: a compatibility layer as the floor and first-class native ports as the goal, with a strict legality ladder — official/public APIs and licensed programs first, clean-room reverse engineering where lawful, and a hard line against anything unlawful (no anti-tamper/pinning defeat on others' apps, no ToS-breaking scraping of protected data)."
---

# Native App Clients and Service Integration

> Two promises: every popular app *works* (via the compatibility layer), and the important ones become *native Agent OS clients* with full system features. Every integration is placed on a legality ladder, and nothing below the legal line ships — ever.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Founder Intent](#founder-intent)
- [The Two-Floor Model](#two-floor)
- [Integration Method Ladder](#method-ladder)
- [Legality Ladder (hard rules)](#legality)
- [Banking and Finance](#banking)
- [The SSL-Pinning Question, Answered Lawfully](#pinning)
- [Native Client Tiers](#native-tiers)
- [Prioritization](#prioritization)
- [Requirements](#requirements)
- [Risks and Open Questions](#risks-and-open-questions)
- [Related Documents](#related-documents)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Product / Legal / System Architecture.

This document owns how third-party services and apps are made available on Agent OS: the relationship between the Android/Linux compatibility layer and true native clients, the methods used to build native clients, and the legal boundaries that constrain them. It is normative on the boundaries and directional on the roadmap.

<a id="founder-intent"></a>

## Founder Intent (recorded 2026-07-13)

Popular apps must not merely run through an Android/Linux compatibility layer — the important ones should also exist as full native Agent OS clients with all system features. Reverse engineering is used to the maximum extent that is lawful; nothing unlawful is done. Where a web or public API exists, that path is preferred. The recurring obstacle is SSL/certificate pinning; the project must have a lawful strategy for it.

<a id="two-floor"></a>

## The Two-Floor Model

- **Floor 1 — Compatibility layer (breadth).** The Android/Linux compatibility environment runs unmodified third-party apps so the platform is never empty. This is the safety net, not the destination; apps here do not get native system features and run as guests.
- **Floor 2 — Native clients (depth).** First-class Agent OS clients for high-value services: entity-native data, IntentBox actions, history/receipts, capability-scoped permissions, instant-mode participation, offline-first, and agent access. This is where the product's differentiation lives.

The two floors coexist permanently: breadth keeps users, depth wins them.

<a id="method-ladder"></a>

## Integration Method Ladder

For each native client, choose the highest-standing method available, in this order:

1. **Official public/web API** — documented developer APIs, OAuth, official SDKs. Preferred always; stable, lawful, supported.
2. **Regulated access program** — where law compels an interface (open banking, see below). Lawful by design.
3. **Published web app / REST behind the web client** — where a service has a web app, its network calls are an available interface; using your own account against a public web endpoint is ordinary client behavior.
4. **Documented data export / interop standards** — iCal, CalDAV, ActivityPub, Matrix, RSS, OPML, standard file formats.
5. **Clean-room reverse engineering of interoperable interfaces** — only where lawful in the relevant jurisdiction and only for interoperability, documenting an interface for our own client, following the dependency and clean-room protocol.

If none of 1–5 is lawfully available, the service stays on Floor 1 (compatibility layer) and does not get a native client. There is no rung below 5.

<a id="legality"></a>

## Legality Ladder (hard rules)

These are non-negotiable boundaries, reviewed by counsel per service:

- **Never defeat security controls on someone else's app or service.** No bypassing SSL/certificate pinning, root/anti-tamper detection, integrity attestation, or DRM on third-party binaries to extract or spoof their traffic. Certificate pinning exists to protect a channel; defeating it on another party's app to intercept its API is out of scope regardless of technical ease.
- **Never break a service's terms to take protected data.** No scraping behind authentication in violation of ToS, no automated access a service prohibits, no circumventing rate limits or access controls.
- **Only the user's own data, only with the user's credentials and consent,** and only through interfaces the user is entitled to use.
- **Clean-room discipline** for any reverse engineering: interface documentation and implementation separated, provenance recorded, counsel sign-off before a client ships, per the dependency policy.
- **Jurisdiction matters.** Interoperability RE that is lawful in one country may not be in another; the legal record is per-jurisdiction.

The project's stance: maximum lawful interoperability, zero unlawful access. When in doubt, the service stays on the compatibility layer.

<a id="banking"></a>

## Banking and Finance

Banking is where the lawful path is strongest, not weakest, because regulation mandates open interfaces:

- **Open banking (EU PSD2, moving to PSD3/PSR; UK OBIE; US FDX/Section 1033; Brazil, India AA, Australia CDR).** Banks are legally required to expose account-information (AIS) and payment-initiation (PIS) APIs. Standards: Berlin Group NextGenPSD2 (~75% of EU banks), UK OBIE, FDX. This is the intended banking integration path.
- **The licensing reality.** Direct AIS/PIS access requires being a regulated third-party provider (AISP/PISP), licensed by a national authority (BaFin, FCA, etc.) with an eIDAS/QWAC certificate — a serious, multi-month, capital-and-insurance undertaking. Two lawful routes: (a) partner with a licensed aggregator (Tink, TrueLayer, Yapily, GoCardless/Nordigen, Salt Edge, Plaid) that already holds the license and exposes a clean API; (b) pursue our own AISP license later if the product warrants it.
- **Consequence for clients.** A native "all your accounts" client is built on the aggregator/open-banking API with the user's explicit, revocable consent and SCA in the bank's own flow — never by reverse-engineering a bank's private mobile-app API or defeating its pinning. That path is both unlawful-adjacent and unnecessary given the regulated interface.
- **Payments** use PIS or official rails; never by replaying a bank app's internal calls.

<a id="pinning"></a>

## The SSL-Pinning Question, Answered Lawfully

Pinning is the common blocker because a service's mobile app pins its certificate so its private API can't be observed. The lawful resolution is to route *around* the need to observe it, not to defeat it:

1. **Prefer the web/public API** — web clients are not pinned the way mobile apps are; if the service has a web app or documented API, use that surface with the user's own session. This is the founder's stated default and the correct one.
2. **Prefer the regulated/official interface** where one exists (banking above, platform APIs elsewhere).
3. **Prefer interop standards** (CalDAV, ActivityPub, Matrix, RSS) that need no private API at all.
4. **If a service exposes *only* a pinned private mobile API and no lawful alternative**, it stays on the compatibility layer. We do not strip pinning from its app to build a native client. This is a firm line, not a temporary limitation.

In short: pinning is a reason to find the lawful front door, never a puzzle to pick the lock.

<a id="native-tiers"></a>

## Native Client Tiers

| Tier | What the native client gets | Example service classes |
| --- | --- | --- |
| T3 Deep-native | entity model, IntentBox actions, agent access, offline, receipts | messaging (Matrix/XMPP-open), email (IMAP/JMAP), calendar (CalDAV), notes, RSS/read-later, fediverse |
| T2 API-native | native UI over official API, most system features | services with good public APIs (many SaaS, weather, transit, maps-data, music with APIs) |
| T1 Bridged-native | native shell around a web view / web API, partial features | web-app-only services without full APIs |
| T0 Compatibility | runs in the Android/Linux layer as a guest | everything else, including pinned-only apps |

The engineering rule: push each service as high as its *lawful* interface allows, and no higher.

<a id="prioritization"></a>

## Prioritization

First native clients target open-protocol services (fastest, safest, most aligned): email, calendar, contacts, messaging over open standards, fediverse, RSS/read-later, notes/files (WebDAV/S3). These need no reverse engineering at all and showcase the native experience. Banking follows via an aggregator partnership. Closed high-value apps with official APIs come next; pinned-only apps remain on the compatibility layer indefinitely.

<a id="requirements"></a>

## Requirements

- **R01.** Ship the compatibility layer as the breadth floor; never present a compatibility-layer app as a native client.
- **R02.** For each native client, select the highest lawful method on the ladder; record the method and its legal basis.
- **R03.** Enforce the legality hard rules; a service with no lawful native interface stays on the compatibility layer.
- **R04.** For banking, integrate via regulated open-banking interfaces (directly licensed or via a licensed aggregator) with user consent and bank-side SCA; never via private-app RE or pinning defeat.
- **R05.** Apply clean-room discipline and counsel sign-off to any reverse-engineering-based client before it ships.
- **R06.** Record per-jurisdiction legality; do not assume a method lawful in one country is lawful everywhere.
- **R07.** Give native clients the full system-feature set (entities, IntentBox, history, capabilities, instant modes, offline, agents) or they are not "native".

<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Services may change web APIs; bridged-native clients need maintenance and honest breakage states.
- Aggregator dependency for banking adds a third party and cost; self-licensing is the long-term hedge.
- The line against pinning defeat will frustrate users who "just want app X natively"; the compatibility layer is the honest answer and must be good.
- Some jurisdictions restrict even interoperability RE; the legal record must be maintained, not assumed.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when a lawful path is unavailable.

<a id="related-documents"></a>

## Related Documents

- [Compute subscription and offload](PROD-013-compute-subscription-and-offload.md)
- [Dependency and clean-room policy](../legal/AOS-LEGAL-003.md)
- [Prototype travel and borders](../legal/LEGAL-012-prototype-travel-and-borders.md)

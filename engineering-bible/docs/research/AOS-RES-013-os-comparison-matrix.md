---
id: "AOS-RES-013"
title: "OS Comparison Matrix — iOS vs Android vs Agent OS"
status: "Research-backed evidence map"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Research Lead / Architecture Council"
audience: "Engineering, product, security, and programme leadership"
summary: "Sourced, dimension-by-dimension comparison of iOS, Android, and Agent OS across system object model, action/intent APIs, agent authority, global history, sandboxing/capabilities, update model, privacy, offline behaviour, extensibility, interop, identity, and developer distribution. Every iOS/Android cell is backed by a citation to a vendor developer/security document or a credible primary analysis; every Agent OS cell cites an internal AOS-* specification. Feeds the portal #compare view."
---

# OS Comparison Matrix — iOS vs Android vs Agent OS

> A research-grade comparison of the two incumbent mobile platforms against the Agent OS design. Each dimension carries a three-column table plus prose analysis. iOS/Android claims cite Apple, Google/AOSP, or credible primary sources (numbered references at the bottom, accessed 2026-07-13). Agent OS claims cite the internal AOS-* specification that states the position. Where a cell rests on an inference from documented behaviour rather than an explicit vendor statement, the prose says so.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [How to Read the Tables](#how-to-read-the-tables)
- [1. System Object Model](#1-system-object-model)
- [2. Action / Intent APIs](#2-action--intent-apis)
- [3. Agent Authority Model](#3-agent-authority-model)
- [4. Global History, Provenance, and Undo](#4-global-history-provenance-and-undo)
- [5. Sandboxing and Capabilities](#5-sandboxing-and-capabilities)
- [6. Update Model](#6-update-model)
- [7. Privacy Posture](#7-privacy-posture)
- [8. Offline Behaviour](#8-offline-behaviour)
- [9. Extensibility](#9-extensibility)
- [10. Interop and Cross-Device](#10-interop-and-cross-device)
- [11. Identity and Accounts](#11-identity-and-accounts)
- [12. Developer Distribution](#12-developer-distribution)
- [What Agent OS Takes / Does Differently](#what-agent-os-takes--does-differently)
- [Machine-Readable Summary](#machine-readable-summary)
- [References](#references)
- [Related Documents](#related-documents)

## Purpose and Scope

This document exists to state, with citations, where the two incumbent mobile
platforms actually stand on the axes Agent OS is designed around, and how the
Agent OS design differs. It is an evidence map, not a marketing comparison: the
goal is that every iOS/Android claim can be checked against a vendor document or
credible primary analysis, and every Agent OS claim can be checked against an
internal specification.

Agent OS is a Fuchsia/Zircon **fork** — Zircon, DFv2, FIDL, Magma, and Starnix
are consumed as-is — with a Rust-first entity/agent product layer written from
scratch on top of a pure capability model ([AOS-RES-012](RES-012-fuchsia-spec-lessons.md);
[AOS-ARCH-004](../architecture/AOS-ARCH-004.md)). It is not an owned microkernel
and this document does not frame it as one. Several Agent OS cells rest on the
same two enforcement primitives — the kernel capability model
([AOS-ARCH-004](../architecture/AOS-ARCH-004.md)) surfaced as declarative,
IDL-backed layer/mode manifests ([ARCH-022](../architecture/ARCH-022-layer-manifest-and-capabilities.md)) —
so those documents are cited repeatedly.

Two limits on the Agent OS column. First, it reflects **intended design** from
the current specification set, not shipped behaviour; Agent OS is at bootstrap.
Second, some dimensions (identity, developer distribution) are only partially
specified today; the prose marks exactly what is and is not defined rather than
inventing a position.

## How to Read the Tables

- **iOS** and **Android** cells describe current, documented behaviour of the
  shipping platforms (2025–2026 releases) with a bracketed reference number.
- **Agent OS** cells describe the specified design with a bracketed internal
  document ID.
- A claim of *absence* (e.g. "no system-wide semantic history API") is an
  analytical inference from the documented per-app model, not a vendor statement,
  and is flagged as such in the prose. No source is fabricated to back an absence.

---

## 1. System Object Model

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| Primary model | App-siloed data; system-visible objects only where an app exposes them as **App Entities** (`AppEntity`) via App Intents [1][2] | App-siloed data; structured cross-app data shared through **ContentProviders** over URI + permission protocol [15]; typed app data surfaced to the system via App Actions / AppFunctions [16] | First-class, system-wide **entity graph** (persons, documents, activities, devices, places, tasks, media, providers) with a dedicated graph store and query service [AOS-ARCH-009] |
| Cross-app object identity | None by default; entities live inside the owning app's domain [1] | None by default; each ContentProvider is a per-app authority [15] | Entities are shared system state; each records "provenance, authority, schema, retention, and synchronization policy" [AOS-ARCH-009] |
| Storage shape | Per-app containers; documents via UIDocument/Files, no unified semantic store [4] | Per-app storage (scoped storage) + per-provider schemas [15] | Deliberately plural: immutable semantic events, materialized state, snapshots, mergeable documents, transactional state machines, ephemeral caches [AOS-ARCH-009] |

Both incumbents are app-first: the unit of data ownership is the app, and the
system only sees an object when an app chooses to project it outward — as an
`AppEntity` on iOS [1][2] or through a ContentProvider / App Actions surface on
Android [15][16]. There is no shared, queryable object graph that spans apps;
cross-app data flows are point-to-point and mediated by the owning app.

Agent OS inverts this. The entity graph is the system's own model of the world,
and apps/providers contribute to it rather than hiding it, with each entity and
relationship carrying provenance, authority, schema, retention, and sync policy
[AOS-ARCH-009]. The storage layer refuses a single representation: semantic
events are append-only and immutable, while materialized views, mergeable
documents (CRDTs), and transactional state machines each get the model that fits
[AOS-ARCH-009]. The agent layer treats these entities as "the actual system
state" it operates on, explicitly contrasted with app silos [AOS-PROD-015].

## 2. Action / Intent APIs

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| Action declaration | **App Intents**: an intent is a Swift type conforming to `AppIntent`, with typed parameters and return values, surfaced to Siri/Shortcuts/Spotlight [1][2][3] | **Intents** (implicit/explicit messaging objects) [14]; higher-level **App Actions / AppFunctions** expose app capabilities as tools [16] | Typed actions declared via a "portable action schema and effect taxonomy," invoked through typed action **providers** [AOS-ARCH-010]; schemas expressed in a transport-neutral IDL [AOS-ARCH-005] |
| Invocation path | System routes to app intent; app performs the effect [1] | Intent resolution routes to a component; AppFunctions callers need `EXECUTE_APP_FUNCTIONS` permission [16] | Every effect runs through an action **executor** that emits receipts + compensation; "no private backdoor to state" [AOS-ARCH-010] |
| Ambiguity / confirmation | Handled per-intent (parameter resolution, disambiguation dialogs) [1] | Handled per-intent / per-assistant | System-level **IntentBox** draft/confirm flow surfacing provider, effect, data flow, confidence, cost, reversibility [AOS-ARCH-010][AOS-PROD-015] |

The incumbents converged on the same shape: a typed, declarative action that an
app registers with the system. Apple's App Intents makes each action a first-class
Swift type with typed parameters and outputs, reachable from Siri, Shortcuts,
Spotlight, and widgets [1][2][3]. Android's stack is layered — low-level Intents
for inter-component messaging [14], and App Actions / AppFunctions to expose an
app's capabilities as orchestratable "tools" callers can discover and execute,
gated by the `EXECUTE_APP_FUNCTIONS` permission [16]. In both, the app remains the
executor and the confirmation UX is per-intent.

Agent OS specifies the same idea but pushes two things into the platform. First,
the action contract is universal: every client, including the voice agent, uses
the same typed action providers, with "no private backdoor to state," and every
effect flows through an executor that emits a receipt and a compensation path
[AOS-ARCH-010]. Second, confirmation is a system service, not per-app: the
IntentBox draft/confirm flow surfaces provider, effect, data flow, confidence,
cost, and reversibility before an ambiguous or sensitive action runs
[AOS-ARCH-010][AOS-PROD-015].

## 3. Agent Authority Model

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| How an assistant acts | Through registered App Intents; Apple Intelligence orchestrates on-device, escalating to Private Cloud Compute for larger models [8][7] | Gemini acts through AppFunctions/App Actions exposed as tools; the OS mediates discovery/execution [16][17] | Agents "operate through typed action providers and explicit capability grants, never ambient UI control" [AOS-ARCH-010] |
| Authority gradation | Per-intent; no explicit staged-autonomy ladder in the public API [1] | Per-permission + per-tool; the "intelligent OS" framing keeps the OS as mediator [17] | Five-rung trust ladder: observation → proposal → reversible execution → confirmed sensitive execution → bounded autonomy [AOS-ARCH-010] |
| What the agent holds | App-granted intent access; system entitlements/TCC for sensitive data [5] | `EXECUTE_APP_FUNCTIONS` + runtime permissions [16][20] | Only the `agent.plan` / `action.invoke:<action>` capabilities explicitly granted; nothing implicit [ARCH-022] |
| Auditability | Per-app; no unified agent action ledger in the public model | Per-app; OS mediates but no unified public action ledger | Every action inspectable ("why"): utterance, interpretation, confidence, rejected alternatives, capabilities used, data touched, receipt — "no unlogged action" [AOS-PROD-015] |

This is the axis Agent OS is named for. Both incumbents route their assistants
through the same typed-action surfaces described in §2 and keep the OS as a
mediator — Apple Intelligence orchestrating App Intents on-device with escalation
to Private Cloud Compute [7][8], and Gemini calling AppFunctions the OS exposes,
which Google explicitly frames as "the intelligent OS" mediating agent access
[16][17]. Notably, both models are moving *away* from screen-scraping /
accessibility-driven automation toward declared tool contracts. What they do not
publish is an explicit staged-autonomy ladder or a unified, inspectable ledger of
every agent action; authority is expressed as per-intent access plus runtime
permissions [1][16][20].

Agent OS makes staged authority and full auditability load-bearing. Agents never
get ambient UI control; they hold only the capabilities they were explicitly
granted [AOS-ARCH-010][ARCH-022], and authority climbs a five-rung ladder from
observation to bounded autonomy, with budgets, approval, receipts, and shadow
mode [AOS-ARCH-010]. Every action is inspectable after the fact — utterance,
chosen interpretation, confidence, rejected alternatives, capabilities used, data
touched, and a receipt — under a "no unlogged action" rule [AOS-PROD-015].

## 4. Global History, Provenance, and Undo

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| System-wide history | No system-wide semantic history API; per-app undo + Recents (analytical inference from the per-app model [4]) | No system-wide semantic history API; per-app + Recents (analytical inference from the per-app model [15]) | System-wide history on an "append-only semantic event log" + materialized views, snapshots, deterministic replay [AOS-ARCH-009] |
| Undo of actions | Per-app; no cross-app undo of effects | Per-app; no cross-app undo of effects | Every effectful action lands as a receipt with an undo path; irreversible actions require explicit confirmation [AOS-PROD-015][AOS-ARCH-010] |
| Provenance | Privacy labels + on-device processing claims [8]; no per-object provenance ledger | Per-object where a provider exposes it; no universal provenance ledger | Provenance pervasive; offloaded results "carry provenance (backend identity, versions) exactly like device evidence" [AOS-PROD-013] |

Neither incumbent exposes a system-wide, semantic history of *what happened to my
data across apps*. History on iOS and Android is per-app (each app keeps its own
undo stack and state) plus the OS-level Recents/task switcher — a claim of absence
that is an inference from the documented per-app data model [4][15], not a vendor
statement of "there is no global history." (Time Machine, the closest OS-level
history primitive in Apple's ecosystem, is macOS, not iOS.)

Agent OS treats history as a first-class system service: an append-only semantic
event log with materialized views, snapshots, and deterministic replay
[AOS-ARCH-009], where every effectful action is a receipt with an undo path and
irreversible actions demand explicit confirmation [AOS-PROD-015][AOS-ARCH-010].
Provenance is pervasive and extends across the network boundary — offloaded
results carry backend identity and versions "exactly like device evidence, so
remote execution never becomes an unauditable black box" [AOS-PROD-013]. The spec
also names the failure mode directly: a global history "can become a surveillance
database," so it mandates proving the semantic journal excludes secure/raw
sensitive input [AOS-ARCH-009][AOS-ARCH-012].

## 5. Sandboxing and Capabilities

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| Isolation primitive | App Sandbox: each app in its own container, unique randomized home dir; access via declared, signed **entitlements** [4][5] | App sandbox per-UID + SELinux MAC; runtime permissions; scoped storage [20][21] | Pure capability model: "authority is represented by unforgeable object references carrying explicit rights" [AOS-ARCH-004] |
| Permission grant | TCC consent prompts gate sensitive resources; entitlement is prerequisite [5] | Install-time + runtime permissions the user can revoke [20] | Capabilities delegated but "may attenuate but never amplify"; object-specific revocation [AOS-ARCH-004] |
| Ambient authority | Reduced but present (some system services broadly reachable) | Reduced but present (UID/permission model) | "No ambient authority… there is no global 'root'"; unlisted authority "is absent, not merely disabled" [ARCH-022] |
| Least privilege | By entitlement declaration [5] | By permission declaration [20][21] | Enforced by absence: a radio-less mode holds no radio capabilities, so "no radios" is a fact of the capability graph, not a toggle [ARCH-022] |

All three are sandboxed, but the mechanism differs in kind. iOS combines a
per-app sandbox container with signed entitlements (immutable, cryptographically
bound) and TCC consent prompts for sensitive resources [4][5]. Android uses
per-UID process isolation, SELinux mandatory access control, and revocable
runtime permissions — a model documented at length in the Android Platform
Security Model [20][21]. Both are permission/entitlement systems layered over a
POSIX-style process model, and both retain some ambient authority.

Agent OS uses object-capability security as the base layer rather than a layer on
top. Authority is an unforgeable object reference carrying explicit rights;
delegation can attenuate but never amplify; there is no global root and no ambient
authority [AOS-ARCH-004]. Crucially, least privilege is enforced by *absence*: a
mode that lists no radio capability cannot touch a radio, because the capability
simply is not in its manifest — "absent, not merely disabled" [ARCH-022]. The
security posture is "default-deny authority, explicit data minimization,
compartmentalized parsers," with hardware-bound, non-exportable secrets
[AOS-ARCH-012].

## 6. Update Model

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| Integrity mechanism | **Signed System Volume** (SSV): Merkle-tree seal over the entire system volume; bootloader verifies the seal is intact and Apple-signed before boot [6] | dm-verity over the system image; verified boot [18][21] | Verified/measured boot chain with anti-rollback; "verified stages, measurements… A/B or equivalent atomic update, recovery" [AOS-ARCH-013] |
| Update strategy | Monolithic signed OS image; SSV recomputed on update [6] | **A/B (seamless)** dual-slot updates with automatic fallback; `update_engine` streams to the unused slot [18] | Single atomic compatibility set — kernel, services, drivers, firmware metadata, schemas, migrations — via a transactional update pipeline [AOS-ARCH-013] |
| Modular component updates | Some components via App Store; core OS is monolithic | **Project Mainline**: 30+ core modules updatable via Google Play (APEX/APK), decoupled from full OTA [19] | Compatibility set is atomic; degradation rule forbids partially-updated state [AOS-ARCH-013] |
| Recovery | Restore via signed image | A/B fallback to prior slot [18] | Dedicated recovery environment; never "silently fall back to unverified firmware" [AOS-ARCH-013] |

Apple and Google take different architectural bets. iOS ships a monolithic,
cryptographically sealed system volume: the Signed System Volume protects every
byte with a Merkle-tree seal that the bootloader verifies against an Apple-signed
value before the kernel starts [6]. Android leans on modularity and resilience:
A/B seamless updates write to an idle slot with automatic fallback if the new
image fails to boot [18], and Project Mainline pushes 30-plus core system modules
through Google Play, decoupled from the vendor OTA cycle [19].

Agent OS specifies a verified/measured boot chain with anti-rollback and an A/B-or-
equivalent atomic update [AOS-ARCH-013] — closer to Android's slot resilience and
Apple's cryptographic sealing combined — but adds a distinctive constraint: an
update is a *single atomic compatibility set* spanning kernel, services, drivers,
firmware metadata, schemas, and data migrations, shipped transactionally with a
dedicated recovery environment [AOS-ARCH-013]. The degradation rule is explicit:
the system must never silently fall back to unverified firmware or a
partially-updated state [AOS-ARCH-013].

## 7. Privacy Posture

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| On-device-first AI | Apple Intelligence runs on-device by default; escalates to **Private Cloud Compute** (ephemeral, non-stored, verifiable) [7][8] | On-device via **Private Compute Core** (isolated, no `INTERNET` permission for PCC features since Android 12) [22] | Local-first + "default-deny authority, explicit data minimization"; some classes "local-only by construction / never offload" [AOS-PROD-013][AOS-ARCH-012] |
| Consent surface | TCC prompts + App Tracking Transparency + privacy labels [5][8] | Runtime permissions + Privacy Dashboard (24h access timeline) [20][22] | Per-class explicit consent for any egress; end-to-end encryption of personal corpora [AOS-PROD-013] |
| Hardest guarantee | PCC: data "used only to fulfill your request… never stored," independently verifiable [7] | PCC features have no direct network access; egress only via a small vetted API set [22] | Semantic journal must *provably* exclude secure/raw sensitive input; hardware mute cuts mic power "by physics, not policy" [AOS-ARCH-012][AOS-PROD-015] |

The incumbents have converged on "process sensitive AI locally, and when you must
go to the cloud, make the cloud constrained and inspectable." Apple's Private
Cloud Compute runs on Apple-silicon servers with Secure Enclave, uses data only to
fulfill the request, never stores it, and is designed for independent verification
[7][8]. Google's Private Compute Core isolates ambient/AI features from the rest
of the OS and, since Android 12, strips the `INTERNET` permission from PCC
features so their (non-)egress is externally verifiable, routing only through a
small vetted API set [22]. Both expose consent surfaces — TCC/ATT and the Privacy
Dashboard [5][8][20].

Agent OS shares the local-first, minimization stance but hard-codes stronger
proof obligations. Some data classes (secure-element key ops, biometric matching,
raw mic/camera) are "local-only by construction" and never offload
[AOS-PROD-013], and any egress of personal corpora requires per-class consent with
end-to-end encryption [AOS-PROD-013]. Two obligations go beyond the incumbents'
public posture: a *provable* guarantee that the system-wide semantic journal
excludes secure/raw sensitive input [AOS-ARCH-012], and a hardware mute switch
that cuts microphone power upstream so the agent "cannot hear, by physics, not
policy" [AOS-PROD-015].

## 8. Offline Behaviour

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| Offline as a design goal | Per-app; the OS provides no universal offline-completeness guarantee (inference [4]) | Per-app; no universal offline-completeness guarantee (inference [15]) | Invariant: "the device is complete offline" — entities, actions, history, capture, instant modes work with zero connectivity [AOS-PROD-013] |
| Cloud dependency | Feature-dependent; PCC escalation needs network [7] | Feature-dependent; PCC features are local, most cloud AI needs network | Compute offload is an accelerator, "never a dependency"; server unavailability equals offline "in correctness… only latency and battery differ" [AOS-PROD-013] |
| Sync | iCloud (per-app / system) | Per-app + Google account sync | Encrypted peer/cloud sync with CRDTs "selected per data type, not applied universally"; per-family consistency [AOS-ARCH-009] |

On both incumbents, offline behaviour is an app-by-app property: the OS does not
promise that the whole device remains fully functional without connectivity, and
each app decides how it degrades — an inference from the per-app data model
[4][15]. Cloud-dependent features (notably larger AI models) need the network on
both platforms [7].

Agent OS makes offline-completeness a system invariant: entities, actions,
history, capture, and instant modes all work with zero connectivity, and the
absence of offload is "a typed performance state, not a broken feature"
[AOS-PROD-013]. Compute offload is explicitly an accelerator, never a
dependency — placement is deterministic and reversible, migration is surfaced (via
IntentBox + a history receipt) rather than silent, and a self-host tier proves
"offload is a protocol, not a trap" [AOS-PROD-013]. The design goal is that
"server unavailability is indistinguishable in correctness from being offline —
only latency and battery differ" [AOS-PROD-013]. Sync uses CRDTs chosen per data
type with per-family consistency, not one universal model [AOS-ARCH-009].

## 9. Extensibility

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| Third-party extension | App Extensions + App Intents; sanctioned extension points, no core-service replacement [1][3] | Intents/ContentProviders/App Actions/AppFunctions; richer inter-app surface, incl. accessibility services [14][15][16] | Contract-first via transport-neutral **IDL** generating Rust bindings [AOS-ARCH-005]; capability-scoped layers + instant modes described by declarative manifests [ARCH-022] |
| Compatibility evolution | Versioned frameworks; Apple-controlled | Versioned APIs + Mainline module cadence [19] | "Additive evolution, feature negotiation, deprecation windows, and semantic version tests" [AOS-ARCH-005] |
| Boundary discipline | Private APIs walled off | Some system-integration via privileged/system apps | Vendor/Linux/Android/Binder/D-Bus/ioctl types "stop at adapters" and may never leak into portable layers, enforced by dependency lint [AOS-ARCH-005] |
| Dev build model | Xcode SDK against Apple frameworks | Android SDK/NDK | Two-tier: product-layer via **Bazel SDK against prebuilt platform artifacts** (no full-tree build); only kernel/driver deltas touch the forked GN/ninja tree [AOS-ARCH-023] |

Android is the more openly extensible of the incumbents at runtime: implicit
Intents, ContentProviders, App Actions/AppFunctions, and accessibility services
give third parties broad hooks into inter-app flows [14][15][16]. iOS is
narrower — sanctioned App Extension points and App Intents, with private APIs
walled off [1][3]. Neither lets a third party replace or redefine a core system
service.

Agent OS makes extension contract-first: capabilities and actions are declared in
a transport-neutral IDL that generates Rust bindings, with explicit compatibility
rules — additive evolution, feature negotiation, deprecation windows, semantic
version tests [AOS-ARCH-005]. Composition happens as capability-scoped layers and
instant modes described by declarative, IDL-backed manifests [ARCH-022]. A hard
boundary rule keeps foreign types (Linux/Android/Binder/D-Bus/ioctl) at adapters
so they never leak into portable layers, enforced by dependency lint
[AOS-ARCH-005]. The developer build model draws the extension line at the SDK:
product-layer developers build with a Bazel SDK against prebuilt platform
artifacts, and only kernel/driver deltas require the forked full tree
[AOS-ARCH-023].

## 10. Interop and Cross-Device

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| Native app contract | Objective-C/Swift on Apple frameworks; closed | Java/Kotlin on Android runtime; open source base | No requirement to expose Linux/Android/POSIX/Binder/Java/glibc as the native contract [AOS-ARCH-011][AOS-ARCH-018] |
| Legacy / foreign apps | None (single runtime) | Single runtime | Contained: foreign apps only later as "isolated user-space cells" / a bounded non-native runtime "in an unprivileged process" that "cannot define the core service architecture" [AOS-ARCH-011] |
| Third-party app strategy | App Store apps | Play/sideloaded apps | Two-floor: Floor 1 runs unmodified third-party apps "as guests" (breadth); Floor 2 is first-class native clients with entity/IntentBox/history/capabilities/offline (depth) [AOS-PROD-014] |
| Cross-device transfer | AirDrop + Handoff + Universal Clipboard/Control (BLE + P2P Wi-Fi) [9][27] | **Quick Share** (BLE discovery + P2P Wi-Fi; interoperates with AirDrop on supported devices) [26] | Encrypted sync + cross-device search over synced corpora [AOS-ARCH-009][AOS-PROD-013] |

Interop splits into two questions: what runs natively, and how devices talk to
each other. Natively, both incumbents are single-runtime worlds — Apple's closed
Cocoa/Swift stack, Android's open-source Java/Kotlin runtime. For device-to-device,
Apple's Continuity suite (AirDrop, Handoff, Universal Clipboard/Control) uses BLE
plus peer-to-peer Wi-Fi across its own devices [9][27], and Google's Quick Share
does the same across Android/ChromeOS/Windows and now interoperates with AirDrop on
supported devices [26].

Agent OS deliberately refuses to inherit a legacy application contract: it "has no
requirement to expose Linux, Android, POSIX, Binder, Java, or glibc as its native
application contract," and any such compatibility is quarantined — permitted only
later as isolated user-space cells or a bounded non-native runtime in an
unprivileged process that "cannot define the core service architecture"
[AOS-ARCH-011][AOS-ARCH-018]. Product strategy for apps is a two-floor model: a
compatibility floor runs unmodified third-party apps "as guests" for breadth, and
a native floor delivers first-class clients wired into the entity graph,
IntentBox, history, capabilities, and offline for depth, chosen via a legality
ladder that never defeats SSL pinning or anti-tamper [AOS-PROD-014]. Cross-device
shows up as encrypted sync and cross-device search over synced corpora
[AOS-ARCH-009][AOS-PROD-013].

## 11. Identity and Accounts

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| First-party account | Apple ID; Sign in with Apple via Authentication Services [11] | Google account; Credential Manager as the unified credential API [24] | Not specified as a user-facing account system in the current doc set [AOS-ARCH-012] |
| Credentials / passkeys | iCloud Keychain, end-to-end encrypted passkeys (FIDO/W3C) [10][11] | Credential Manager + passkeys (FIDO/W3C), Android 9+ [24][25] | Device/platform identity: "time, entropy, and identity foundation services" with rotation/revocation; hardware-bound secrets migration "re-enrolls rather than copies" [AOS-ARCH-012] |
| Third-party service identity | Sign in with Apple; app-managed | Credential Manager brokers provider credentials [24] | Delegated: "only the user's own data, only with the user's credentials and consent," via OAuth/open-banking SCA in the provider's own flow [AOS-PROD-014] |

The incumbents ship mature identity stacks. Apple centers Apple ID, Sign in with
Apple (Authentication Services), and end-to-end-encrypted passkeys in iCloud
Keychain [10][11]. Google centers the Google account and the Credential Manager
API, the unified broker for passwords, passkeys, and federated sign-in [24][25].
Both are FIDO/W3C passkey providers.

Agent OS **does not yet define a first-party user account system** in the current
specification set — this is a genuine gap, stated plainly rather than papered
over. What exists is lower-level: device/platform identity foundation services
(time, entropy, identity) with rotation and revocation, measured-boot/attestation,
and hardware-bound non-exportable secrets that migration re-enrolls rather than
copies [AOS-ARCH-012][AOS-ARCH-013]. For third-party services, identity is
delegated — "only the user's own data, only with the user's credentials and
consent," through the provider's own OAuth/SCA flow [AOS-PROD-014]. A first-party
user identity/account model is a to-be-specified item.

## 12. Developer Distribution

| | iOS | Android | Agent OS |
| --- | --- | --- | --- |
| Primary channel | App Store review + notarization; in the EU, alternative marketplaces are permitted under the DMA, all apps still Apple-**notarized** [12][13] | Google Play; sideloading and alternative stores permitted | Not specified — no app-store / third-party distribution model in the current doc set [AOS-PROD-014] |
| Openness trajectory | Opening only under regulation (EU DMA), with notarization + Core Technology Fee retained [12][13] | **Tightening**: from 2026, all apps on certified devices must come from **verified developers**, including sideloaded/third-party-store apps [23] | Native clients shipped by the project itself under a legality ladder [AOS-PROD-014] |
| Packaging integrity | Signed, notarized | Signed; Play Protect + developer verification [23] | Security concern only so far: "package signing, SBOM, provenance, and revocation" [AOS-ARCH-012][AOS-ARCH-013] |

The two incumbents are moving in opposite directions under regulatory and security
pressure. Apple is opening *just enough*: EU users can install from alternative
marketplaces under the DMA, but every app remains Apple-notarized and marketplace
developers accept alternative business terms including a Core Technology Fee
[12][13]. Android, historically the open one, is *tightening*: from 2026, apps on
certified devices must come from verified developers — a mandate that reaches
sideloaded apps and third-party stores, not just Play [23].

Agent OS **does not specify an end-user app distribution model** in the current
doc set — another honest gap. The nearest content is developer *consumption* (the
Bazel SDK / IDK path of §9 and [AOS-ARCH-023]) and packaging treated as a security
concern: package signing, SBOM, provenance, and revocation, with a red-teamed
update/package pipeline [AOS-ARCH-012][AOS-ARCH-013]. Native clients are shipped by
the project itself under the legality ladder [AOS-PROD-014]. How independent
third-party developers would publish and distribute to end users is to-be-defined.

## What Agent OS Takes / Does Differently

**What it takes from the incumbents (converged good ideas):**

- **Typed, declared action contracts over screen-scraping.** App Intents [1] and
  AppFunctions [16] both moved the industry toward declared, typed tool surfaces
  for assistants; Agent OS adopts the same shape and makes it universal
  [AOS-ARCH-010].
- **On-device-first AI with a constrained, verifiable cloud.** PCC [7] and Private
  Compute Core [22] are the reference points; Agent OS's local-first + never-offload
  classes generalize them [AOS-PROD-013].
- **Boot/update integrity + resilient rollback.** SSV's cryptographic sealing [6]
  and Android's A/B fallback [18] both inform the verified, atomic, recoverable
  update model [AOS-ARCH-013].
- **Standards-based passkeys and delegated third-party identity** [10][24] — the
  direction Agent OS points for service identity [AOS-PROD-014].

**What it does differently (the wagers):**

1. **A system-wide entity graph instead of app silos** — data ownership moves from
   the app to a shared, provenance-carrying graph [AOS-ARCH-009]. Neither incumbent
   has this.
2. **Object-capabilities as the base layer, not a permission overlay** — least
   privilege "enforced by absence," no ambient authority, no root
   [AOS-ARCH-004][ARCH-022].
3. **Staged agent autonomy + total auditability** — a five-rung trust ladder and a
   "no unlogged action" ledger [AOS-ARCH-010][AOS-PROD-015], which the incumbents'
   per-intent models do not provide.
4. **A first-class global history with undo and cross-boundary provenance**
   [AOS-ARCH-009][AOS-PROD-013] — where iOS/Android have only per-app history.
5. **Offline-completeness as an invariant and offload as a reversible protocol**
   [AOS-PROD-013] — a stronger promise than the incumbents' per-app, feature-gated
   offline behaviour.
6. **Contract-first extensibility with a hard foreign-type boundary and no inherited
   legacy runtime** [AOS-ARCH-005][AOS-ARCH-011][AOS-ARCH-018].

**Where the incumbents are ahead (honest gaps):** first-party identity/accounts and
end-user developer distribution are mature on iOS/Android [11][12][23][24] and
**not yet specified** for Agent OS. These are to-be-defined, not designed-and-omitted.

## Machine-Readable Summary

The block below mirrors the tables in a compact form so the portal `#compare` view
can be wired to this document instead of hardcoded data in `portal/landscape.js`.
It is intentionally terse (portal cell text, not full prose). Keep it in sync with
the tables above if either changes.

```json
{
  "doc": "AOS-RES-013",
  "baseline_date": "2026-07-13",
  "columns": ["ios", "android", "agentos"],
  "dimensions": [
    {"key": "object-model", "label": "System object model",
     "ios": "App-siloed; system-visible only as App Entities [1]",
     "android": "App-siloed; ContentProviders + App Actions [15][16]",
     "agentos": "System-wide entity graph with provenance [AOS-ARCH-009]"},
    {"key": "action-apis", "label": "Action / intent APIs",
     "ios": "App Intents (typed Swift intents) [1]",
     "android": "Intents + App Actions / AppFunctions [14][16]",
     "agentos": "Typed action providers + executor + IntentBox [AOS-ARCH-010]"},
    {"key": "agent-authority", "label": "Agent authority model",
     "ios": "Apple Intelligence via App Intents; per-intent [7][8]",
     "android": "Gemini via AppFunctions; OS-mediated [16][17]",
     "agentos": "5-rung trust ladder; capability grants; no ambient control [AOS-ARCH-010]"},
    {"key": "global-history", "label": "Global history / provenance",
     "ios": "Per-app only; no system-wide history (inference) [4]",
     "android": "Per-app only; no system-wide history (inference) [15]",
     "agentos": "Append-only semantic event log + undo receipts [AOS-ARCH-009]"},
    {"key": "sandbox-caps", "label": "Sandboxing / capabilities",
     "ios": "App Sandbox + signed entitlements + TCC [4][5]",
     "android": "Per-UID + SELinux + runtime permissions [20][21]",
     "agentos": "Object-capabilities; no ambient authority; least-priv by absence [AOS-ARCH-004][ARCH-022]"},
    {"key": "update-model", "label": "Update model",
     "ios": "Signed System Volume; monolithic sealed image [6]",
     "android": "A/B seamless updates + Project Mainline modules [18][19]",
     "agentos": "Atomic compatibility set; verified boot + recovery [AOS-ARCH-013]"},
    {"key": "privacy", "label": "Privacy posture",
     "ios": "On-device + Private Cloud Compute; TCC/ATT [7][8]",
     "android": "Private Compute Core (no INTERNET) + Privacy Dashboard [22]",
     "agentos": "Local-first; never-offload classes; provable journal exclusion [AOS-PROD-013][AOS-ARCH-012]"},
    {"key": "offline", "label": "Offline behaviour",
     "ios": "Per-app; feature-gated cloud dependency [4][7]",
     "android": "Per-app; feature-gated cloud dependency [15]",
     "agentos": "Offline-complete invariant; offload is reversible accelerator [AOS-PROD-013]"},
    {"key": "extensibility", "label": "Extensibility",
     "ios": "App Extensions + App Intents; no core replacement [1][3]",
     "android": "Intents/Providers/App Actions; accessibility hooks [14][15][16]",
     "agentos": "Contract-first IDL + capability-scoped layers; foreign types at adapters [AOS-ARCH-005][ARCH-022]"},
    {"key": "interop", "label": "Interop / cross-device",
     "ios": "Closed native runtime; Continuity/AirDrop [9][27]",
     "android": "Open runtime; Quick Share [26]",
     "agentos": "No inherited legacy runtime; two-floor app model; encrypted sync [AOS-ARCH-011][AOS-PROD-014]"},
    {"key": "identity", "label": "Identity / accounts",
     "ios": "Apple ID + Sign in with Apple + iCloud passkeys [10][11]",
     "android": "Google account + Credential Manager + passkeys [24][25]",
     "agentos": "No first-party account model yet; delegated service identity [AOS-PROD-014] (gap)"},
    {"key": "distribution", "label": "Developer distribution",
     "ios": "App Store + notarization; EU alt-marketplaces under DMA [12][13]",
     "android": "Play + sideload; 2026 developer verification mandate [23]",
     "agentos": "No end-user distribution model specified yet [AOS-PROD-014] (gap)"}
  ]
}
```

## References

External sources accessed 2026-07-13. Apple and Google/AOSP developer/security
documentation are treated as primary; arXiv papers and named analyses are used
where they are the clearest primary description.

1. Apple — App Intents (framework overview). https://developer.apple.com/documentation/appintents/app-intents
2. Apple — AppIntent protocol / App Entity. https://developer.apple.com/documentation/appintents/appintent
3. Apple — Adopting App Intents to support system experiences. https://developer.apple.com/documentation/appintents/adopting-app-intents-to-support-system-experiences
4. Apple — Protecting user data with App Sandbox. https://developer.apple.com/documentation/security/protecting-user-data-with-app-sandbox
5. Apple — Security of runtime process in iOS, iPadOS, and visionOS (sandbox, entitlements). https://support.apple.com/guide/security/security-of-runtime-process-sec15bfe098e/web
6. Apple — Signed system volume security. https://support.apple.com/guide/security/signed-system-volume-security-secd698747c9/web
7. Apple Security Research — Private Cloud Compute: A new frontier for AI privacy in the cloud. https://security.apple.com/blog/private-cloud-compute/
8. Apple — Apple Intelligence and privacy on iPhone. https://support.apple.com/guide/iphone/apple-intelligence-and-privacy-iphe3f499e0e/ios
9. Apple — Continuity features and requirements for Apple devices. https://support.apple.com/en-us/108046
10. Apple — Passkeys (developer overview). https://developer.apple.com/passkeys/
11. Apple — Authentication Services (Sign in with Apple, passkeys). https://developer.apple.com/documentation/AuthenticationServices
12. Apple — Update on apps distributed in the European Union (DMA). https://developer.apple.com/support/dma-and-apps-in-the-eu/
13. Apple — Getting started as an alternative app marketplace in the European Union. https://developer.apple.com/support/alternative-app-marketplace-in-the-eu/
14. Android — Intents and intent filters. https://developer.android.com/guide/components/intents-filters
15. Android — Content provider basics. https://developer.android.com/guide/topics/providers/content-provider-basics
16. Android — Overview of AppFunctions. https://developer.android.com/ai/appfunctions
17. Android Developers Blog — The Intelligent OS: Making AI agents more helpful for Android apps (Feb 2026). https://android-developers.googleblog.com/2026/02/the-intelligent-os-making-ai-agents.html
18. AOSP — A/B (seamless) system updates. https://source.android.com/docs/core/ota/ab
19. AOSP — Mainline (modular system components / Google Play system updates). https://source.android.com/docs/core/ota/modular-system
20. AOSP — Android permissions. https://source.android.com/docs/core/permissions
21. Mayrhofer, Stoep, Brubaker, Kralevich — The Android Platform Security Model (arXiv). https://arxiv.org/html/1904.05572v3
22. Google — Android Private Compute Core Architecture (arXiv). https://arxiv.org/pdf/2209.10317
23. Google — Understanding Android developer verification (Play Console Help). https://support.google.com/android-developer-console/answer/16561738
24. Android — About Credential Manager. https://developer.android.com/identity/credential-manager
25. Android — About passkeys. https://developer.android.com/identity/passkeys
26. Google — Quick Share (Android file sharing across devices). https://www.android.com/quick-share/
27. Apple — Use Handoff to continue tasks on your other Apple devices. https://support.apple.com/en-us/102426

## Related Documents

- [AOS-RES-012: Fuchsia/Zircon-Fork Specification — Engineering Digest](RES-012-fuchsia-spec-lessons.md)
- [AOS-RES-011: Interim Hardware Market Survey](RES-011-interim-hardware-market-survey.md)
- [Capabilities and IPC](../architecture/AOS-ARCH-004.md)
- [IDL, API, and Versioning](../architecture/AOS-ARCH-005.md)
- [Storage, Entity Graph, History, and Sync](../architecture/AOS-ARCH-009.md)
- [Agent Runtime and Action Safety](../architecture/AOS-ARCH-010.md)
- [Compatibility and Pixel 9 Legacy Policy](../architecture/AOS-ARCH-011.md)
- [Security Architecture and Threat Model](../architecture/AOS-ARCH-012.md)
- [Boot, Update, and Recovery](../architecture/AOS-ARCH-013.md)
- [Legacy Containment and Replacement](../architecture/AOS-ARCH-018.md)
- [Layer Manifest Format and Capability Model](../architecture/ARCH-022-layer-manifest-and-capabilities.md)
- [Build Strategy and Developer Experience for the Fuchsia Fork](../architecture/ARCH-023-build-strategy-and-devex.md)
- [Compute Subscription and Offload](../product/PROD-013-compute-subscription-and-offload.md)
- [Native App Clients](../product/PROD-014-native-app-clients.md)
- [Voice Agent](../product/PROD-015-voice-agent.md)

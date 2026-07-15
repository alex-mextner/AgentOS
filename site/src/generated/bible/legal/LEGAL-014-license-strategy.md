---
id: "AOS-LEGAL-014"
title: "Per-Component License Strategy"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Legal / Governance Council"
audience: "Legal, engineering, product, partner, community"
summary: "Component-by-component licensing decision for Agent OS, shaped by the fact that we fork the entire Fuchsia tree (Zircon MIT-style; userspace BSD/Apache-2.0 with a patent grant). Because Fuchsia is fully permissive, our own code may be licensed freely; this document chooses per component by business and community model rather than by default."
---

# Per-Component License Strategy

> We fork a fully permissive base (Fuchsia: Zircon MIT-style, userspace BSD/Apache-2.0). Permissive upstream imposes no copyleft on us, so every license choice below is a real decision about adoption, OEM-friendliness, patent protection, and reciprocity — not a constraint inherited from the base.

## Table of Contents

- [Purpose and Scope](#purpose)
- [The Fuchsia License Baseline](#baseline)
- [Decision Criteria](#criteria)
- [Per-Component Decisions](#decisions)
- [Trademark and Contributions](#trademark)
- [Consequences and Guardrails](#guardrails)
- [Requirements](#requirements)
- [Open Questions](#open)
- [Related Documents](#related)

<a id="purpose"></a>

## Purpose and Scope

**Area:** Legal / Governance.

This document owns the licensing decision for each Agent OS component and the reasoning behind it. It is normative on the chosen licenses and the contribution/trademark model; it is not legal advice and is subject to counsel review before any public release tag.

<a id="baseline"></a>

## The Fuchsia License Baseline

Forking the entire Fuchsia tree means inheriting its licenses on the upstream parts we take as-is:

- **Zircon kernel** — MIT-style license.
- **Fuchsia userspace** (DFv2, FIDL, Magma, Scenic/Flatland, Starnix, libraries) — BSD-style or Apache-2.0; BSD-licensed portions carry an additional patent grant.
- All of these are **permissive**: they allow combining, modifying, and redistributing under many licenses, including for proprietary derivatives, provided notices are retained.

Practical consequences: (1) we must retain upstream license texts and notices on the forked tree; (2) permissive upstream places **no copyleft obligation** on our own code, so we are free to choose; (3) we should preserve and extend the patent-grant posture, because permissive-without-patent-grant (bare MIT/BSD) leaves patent risk that Apache-2.0 addresses explicitly.

<a id="criteria"></a>

## Decision Criteria

Each component is weighed against: community adoption, OEM/partner friendliness, explicit patent grant, tolerance for proprietary forks, reciprocity (do we want changes returned), driver-contribution incentives, commercial-services room, certified-build control, dual-licensing option, and trademark enforceability.

<a id="decisions"></a>

## Per-Component Decisions

| Component | License | Why |
| --- | --- | --- |
| Forked Fuchsia tree (upstream parts) | Preserve upstream (MIT / BSD / Apache-2.0) + notices | Legal obligation; we keep upstream terms on unmodified/derived upstream files |
| Our microkernel changes (Zircon fork deltas) | **Apache-2.0** | Permissive to match upstream spirit, but with an explicit patent grant the bare MIT kernel lacks — important for a security-sensitive core |
| Board drivers / HAL (our code) | **Apache-2.0** | Patent grant matters for hardware; permissive maximizes OEM/driver contribution and reuse |
| System services (our code) | **Apache-2.0** | Consistent permissive + patent grant across the native stack |
| SDK / IDL / bindings | **Apache-2.0** | Standard for developer-facing SDKs; encourages third-party adoption without friction |
| Product layer / apps (entity/agent, shell, history) | **Apache-2.0**, with **MPL-2.0 considered** for parts where we want file-level reciprocity | Apache-2.0 for reach; MPL-2.0 only if we want improvements to specific product files returned while still allowing larger proprietary combinations |
| Portal (this site) | **Apache-2.0** | Simple, permissive, matches the docs-as-code posture |
| Documentation (the bible) | **CC BY 4.0** | Encourage reuse/quotation with attribution; CC BY-SA only if share-alike on docs is later desired |
| Hardware designs (demo brick, carriers) | **CERN-OHL-S or -W** | Open-hardware reciprocity; -S (strong) if we want derivatives kept open, -W (weak) if we want permissive reuse in mixed products |
| Trademarks ("Agent OS" and marks) | **Separate trademark policy**, not an open-source license | Names/marks are controlled even when code is open — the GrapheneOS/Firefox pattern: fork freely, but a certified build carries the mark only by policy |

Default across our own code is **Apache-2.0**: permissive enough for adoption and OEM deals, but with the patent grant that bare MIT/BSD omit. Copyleft (GPL) is deliberately **not** chosen for the core, because it would block the proprietary-combination flexibility partners need; MPL-2.0 is held in reserve for narrow file-level reciprocity where we want specific improvements returned.

<a id="trademark"></a>

## Trademark and Contributions

- **Contributions:** require a **DCO** (Developer Certificate of Origin) sign-off as the low-friction default; a **CLA** is held in reserve only if a future dual-licensing or relicensing need appears (a CLA is heavier and can deter contributors, so it is not the default).
- **Trademark:** the code is open, the name is not a free-for-all. A trademark policy governs use of "Agent OS" and logos, so anyone may fork the code but only policy-compliant builds may use the marks. This lets us keep a trustworthy "certified build" identity without making the code proprietary.

<a id="guardrails"></a>

## Consequences and Guardrails

- **Notice hygiene:** the forked tree must retain all upstream LICENSE/COPYRIGHT/PATENTS files; a license-scan gate runs in CI before releases.
- **No accidental copyleft intake:** any external dependency under GPL/AGPL/LGPL is reviewed before inclusion; strong-copyleft in the shipped image is avoided unless explicitly decided, because it would change our permissive posture.
- **Patent posture:** prefer Apache-2.0 (explicit grant) for our code; where we must stay MIT/BSD to match a file's upstream, note the weaker patent posture.
- **Dual-licensing option preserved:** by keeping our own code Apache-2.0 with DCO, we retain the *option* to offer commercial/dual licenses later without rewriting history.

<a id="requirements"></a>

## Requirements

- **R01.** License every Agent-OS-authored component per the table; default Apache-2.0 for code, CC BY 4.0 for docs, CERN-OHL for hardware.
- **R02.** Preserve all upstream Fuchsia license texts and notices on the forked tree; enforce a CI license-scan gate.
- **R03.** Govern marks by a separate trademark policy; open code does not grant mark rights.
- **R04.** Require DCO sign-off on contributions; do not adopt a CLA without an explicit dual-licensing decision.
- **R05.** Review any copyleft dependency before inclusion; keep the shipped image permissive unless a documented decision says otherwise.
- **R06.** Obtain counsel review before any public release tag; this document is a plan, not legal advice.

<a id="open"></a>

## Open Questions

- Whether any product-layer files warrant MPL-2.0 file-level reciprocity (decide when the first external contributions arrive).
- Whether CERN-OHL-S (strong) or -W (weak) fits the hardware business model — tied to whether we want a permissive hardware ecosystem or reciprocal one.
- Whether a future commercial offering wants dual-licensing (would motivate a CLA); deferred until there is a business reason.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record.

<a id="related"></a>

## Related Documents

- [Dependency and clean-room policy](AOS-LEGAL-003.md)
- [Threat model and security](LEGAL-013-threat-model-and-security.md)
- [Native app clients (legality)](../product/PROD-014-native-app-clients.md)
- [Fuchsia-fork spec digest](../research/RES-012-fuchsia-spec-lessons.md)

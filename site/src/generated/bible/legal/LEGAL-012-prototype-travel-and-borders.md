---
id: "AOS-LEGAL-012"
title: "Prototype Travel and Border Considerations"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Legal Programme / Hardware Programme"
audience: "Engineering, program leadership, anyone traveling with prototype hardware"
summary: "Practical and regulatory considerations for carrying the demo brick across borders: security screening, radio and encryption regimes, IMEI registration, data-at-border hygiene, and the travel kit protocol. Not legal advice."
---

# Prototype Travel and Border Considerations

> A hand-built device with a battery, antennas, and visible wiring in a printed enclosure triggers both security-screening heuristics and several regulatory regimes. This note records the operating protocol. It is engineering guidance, not legal advice; route-specific questions go to counsel per the legal programme's escalation rules.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Security Screening Reality](#screening)
- [Travel Kit Protocol](#travel-kit)
- [Radio and Certification Posture](#radio-posture)
- [Encryption Import/Export Regimes](#crypto-regimes)
- [IMEI Registration Regimes](#imei-regimes)
- [Data at the Border](#data-at-border)
- [Stop Rules](#stop-rules)
- [Related Documents](#related-documents)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Legal Programme.

The demo brick ([AOS-HW-017](../hardware/HW-017-interim-demo-device.md), [AOS-HW-018](../hardware/HW-018-demo-brick-v1-configuration.md)) is meant to be carried and shown, including internationally (current operating cities include Moscow and Belgrade). This document owns the travel protocol: what to expect at screening, what to carry, and which regulatory regimes can attach to a hand-built cellular device. It does not assert legal conclusions for any specific border.

<a id="screening"></a>

## Security Screening Reality

Expect secondary inspection. A dense printed brick containing a lithium pack, RF modules, antennas, and hand wiring matches screening archetypes and will draw swabs and questions at many airports. Rules:

- The device travels in **carry-on only** (lithium batteries must not be checked; a hand-built pack in checked luggage is both prohibited and alarming on X-ray).
- The device must be able to **power on to a working screen** on request; a dead prototype is the worst possible screening outcome.
- No loose cells, no taped battery bundles, no detached wiring in the same bag. Spare cells travel terminal-protected in original-style packaging.
- Demeanor and framing: it is an "electronics development prototype / personal dev kit". It is never called a bomb-anything, never argued about, and never described as a certified phone.

<a id="travel-kit"></a>

## Travel Kit Protocol

Each traveling unit is accompanied by a printed and digital dossier:

- One-page description in English (and the destination language when feasible): what the device is, that it is a one-off engineering prototype for personal software development, not for sale.
- The BOM with prices and links ([AOS-HW-018-BOM](../hardware/HW-018A-demo-brick-bom.md)) — demonstrates it is assembled from consumer modules.
- Photos of the open device and of assembly stages.
- Contact details and, when available, a company letter.
- A stock phone is always carried alongside (also required by the emergency-calling disclaimer in AOS-HW-017).

<a id="radio-posture"></a>

## Radio and Certification Posture

Every radio inside is a pre-certified module operating in its approved configuration ([AOS-HW-017#certification-and-legal](../hardware/HW-017-interim-demo-device.md#certification-and-legal)), but the assembled device as a whole is **not** a certified piece of RF equipment. Posture: personal-use engineering prototype, single unit, not offered for sale, operating as an ordinary subscriber on public networks. Some jurisdictions formally regulate even personal-use uncertified transmitters; for high-risk destinations the modem can travel with radios disabled or the modem module removed, with data demos over Wi-Fi/hotspot.

<a id="crypto-regimes"></a>

## Encryption Import/Export Regimes

The device contains disk and transport encryption, which several regimes formally regulate:

- **Russia/EAEU:** import of "encryption (cryptographic) means" is formally subject to the EAEU notification regime; mass-market consumer devices are covered by existing manufacturer notifications, but a hand-built device has no notification of its own. Personal-use practice is routinely lenient, and the formal gap is recorded as a risk, not assumed away.
- **Broadly:** most Wassenaar-aligned jurisdictions exempt personal-use consumer cryptography, but a prototype does not neatly fit "consumer product" categories.
- Rule: for any border where this materially matters, the question goes to counsel before travel; the fallback demo configuration is "encryption keys not present on the device" (fresh image, demo data only).

<a id="imei-regimes"></a>

## IMEI Registration Regimes

Several countries operate IMEI allow-list regimes (Turkey and India are long-standing examples; regimes change). The module's own IMEI ([glossary](AOS-GLOSSARY.md#term-imei-and-tac)) may be unregistered or unregistrable there, meaning cellular service may be blocked after a grace period, and in strict regimes an unregistered device can raise questions. Check the destination's regime before travel; the Wi-Fi/hotspot fallback keeps demos alive regardless.

<a id="data-at-border"></a>

## Data at the Border

Border agents in several jurisdictions may lawfully inspect devices. Protocol:

- Traveling demo units carry **demo data only** — a curated dataset, no personal archives, no credentials of value; eSIM profiles that matter are removable in software beforehand.
- The device crosses borders powered off, with full-disk encryption, and the traveler carries the honest ability to demonstrate it working.
- Refusing inspection has different consequences per jurisdiction (denial of entry for visitors, device seizure); the demo-data-only rule makes the question low-stakes by design.

<a id="stop-rules"></a>

## Stop Rules

- If a border or regime would require misrepresenting the device, the device does not travel that route.
- If counsel flags a route as requiring notification/registration that cannot be obtained, the device travels without the modem or does not travel.
- Incidents (seizure, formal questioning) are recorded as evidence and escalated per the legal programme.

<a id="related-documents"></a>

## Related Documents

- [Interim demo device](../hardware/HW-017-interim-demo-device.md)
- [Demo brick V1 configuration](../hardware/HW-018-demo-brick-v1-configuration.md)
- [Cellular legal path](AOS-LEGAL-004.md#cellular-path)
- [Claim register](AOS-RES-003.md#claim-register)

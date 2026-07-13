---
id: "AOS-RES-003"
title: "Claim Verification Register"
status: "Generated evidence view"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Claims are classified as decisions, supported findings, hypotheses, bounded inferences, contradictions, or unresolved questions."
---

# Claim Verification Register

## Table of Contents

- [Purpose](#purpose)
- [Claim States](#claim-states)
- [Camera Claims](#camera-claims)
- [Register](#claim-register)
- [Operating Rule](#operating-rule)

<a id="purpose"></a>

## Purpose

Claims are classified as decisions, supported findings, hypotheses, bounded inferences, contradictions, or unresolved questions.

<a id="claim-states"></a>

## Claim States

Each claim state distinguishes normative decisions, supported findings, hypotheses, bounded inferences, contradictions, and unresolved questions. State changes require evidence and downstream review.

<a id="camera-claims"></a>

## Camera Claims

Camera claims must name the target, optics, sensor, firmware, controls, capture conditions, metrics, reference, uncertainty, and acceptance gate; brand or sensor identity alone is not evidence of image quality.

<a id="claim-register"></a>

## Register

| claim_id | claim | state | finding | normative_ref | experiment | gate |
| --- | --- | --- | --- | --- | --- | --- |
| CLM-001 | Own microkernel is the product foundation | Normative decision | Confirmed by program decision; implementation evidence pending | AOS-ADR-0001#decision | N/A | G1/G2 |
| CLM-002 | Portable service/product layers can span unrelated SoCs | Hypothesis | Requires two native ports and conformance evidence | AOS-ARCH-001#portability-test | EXP-014;EXP-021 | G3/G4 |
| CLM-003 | POSIX is unnecessary as a native platform contract | Bounded design claim | Core workloads must be demonstrated through native APIs; compatibility remains optional | AOS-ARCH-001#native-contract | EXP-011 | G4 |
| CLM-004 | Android/Linux can remain isolated to Pixel 9 | Hypothesis | Dependency lint and two non-Pixel backends must prove absence above adapters | AOS-ARCH-011#pixel-legacy-boundary | EXP-031 | G7 |
| CLM-005 | Pixel 9 bootloader unlock is available | Unknown by purchased SKU | Official Android documentation describes unlock behavior; exact Pixel SKU/operator must be verified before purchase | AOS-HW-002#device-acquisition | EXP-030 | G0/G7 |
| CLM-006 | Pixel 9 is an economical native target | Unknown/high risk | Requires boot/debug/display/storage/power/camera dossier and legal rights | AOS-HW-002#feasibility-phases | EXP-032;EXP-033;EXP-034 | G7 |
| CLM-007 | Panfrost knowledge substantially solves Pixel 9 graphics | Contradicted as stated | Open Mali userspace knowledge does not solve SoC display, power, firmware, IOMMU, or Agent OS driver integration | AOS-HW-002#gpu-and-display | EXP-034 | G7 |
| CLM-008 | Linux userspace cellular software can be wrapped unchanged | Contradicted as architecture claim | Native hardware/service contracts and kernel-facing work remain necessary; reference behavior may be reused lawfully | AOS-HW-007#native-cellular-stack | EXP-041 | G6 |
| CLM-009 | Cellular data implies voice/IMS feasibility | Contradicted | Data, SMS, SIM/eSIM, emergency, voice and IMS are separate layers and certification paths | AOS-HW-007#separate-capability-gates | EXP-043;EXP-044 | G6/G9 |
| CLM-010 | Open phone-form-factor hardware can host native Agent OS | Hypothesis | PinePhone Pro dossier and staged display/touch/audio/power/modem bring-up required | AOS-HW-003#pinephone-pro-role | EXP-020;EXP-022;EXP-023 | G6 |
| CLM-011 | A documented-board track lowers architectural risk | Strong hypothesis | Official schematics/reference material and independent recovery/debug make first ports more controllable | AOS-HW-004#selection-rationale | EXP-014;EXP-015 | G3 |
| CLM-012 | A camera-capable documented SoC can reach good image quality | Hypothesis | Depends on sensor/module, ISP/control access, calibration, tuning and computational pipeline | AOS-HW-006#quality-definition | EXP-050;EXP-051;EXP-052 | G5 |
| CLM-013 | Published HDR+ research can be used as-is for Pixel quality | Contradicted | Research concepts are usable; production Pixel pipeline, tuning and vendor integration are not published as a portable stack | AOS-HW-006#computational-pipeline | EXP-053 | G5/G9 |
| CLM-014 | A proprietary camera component can coexist with portable Agent OS | Bounded hypothesis | Acceptable only behind documented contracts with legal deployment/update/replacement rights | AOS-HW-006#controlled-proprietary-option | EXP-055 | G9 |
| CLM-015 | All user secrets can be backed up and migrated | Contradicted | Hardware-bound and non-exportable secrets must be regenerated or re-enrolled | AOS-PROD-004#data-classes | EXP-062 | G8 |
| CLM-016 | No user input byte should ever be lost | Rejected as privacy requirement | Use semantic journaling and explicit secure/transient exclusions, not global raw-input capture | AOS-PROD-002#capture-boundary | EXP-060 | G4/G8 |
| CLM-017 | An entity-first shell improves common workflows | Product hypothesis | Requires task-time, error, comprehension and retention studies against alternatives | AOS-PROD-001#product-contract | EXP-070;EXP-071 | G4/G8 |
| CLM-018 | Agent autonomy is safe with capability mediation alone | Contradicted | Capabilities must combine with proposal review, effect classes, receipts, budgets, policy, evaluation and compensation | AOS-ARCH-010#defense-in-depth | EXP-073;EXP-074 | G4/G8 |
| CLM-019 | CRDTs are the universal storage model | Rejected | Use event logs, transactions, snapshots and CRDTs by data semantics | AOS-ARCH-009#consistency-models | EXP-061 | G4 |
| CLM-020 | A future ODM device can be deferred without architectural cost | Bounded | Manufacturing test, provisioning, board packages and hardware service boundaries must be designed now | AOS-HW-008#design-now | EXP-080 | G9/G10 |
| CLM-021 | Community support can materially expand hardware coverage | Hypothesis | Requires reproducible kits, maintainer ownership, documentation, bounties and honest support levels | AOS-GOV-002#hardware-maintainers | EXP-090 | G8/M10 |
| CLM-022 | Fairphone or Sony can provide a quality bridge target | Unknown | Requires exact-device documentation, boot control, redistribution, camera/power dependencies and vendor response | AOS-HW-005#dossier-requirements | EXP-024;EXP-025 | G9 |
| CLM-023 | Two native SoC ports are enough to prove portability | Bounded proxy | They expose major leakage but not every future architecture; conformance and a third architecture remain desirable | AOS-ARCH-001#portability-test | EXP-014;EXP-015;EXP-021 | G3/G9 |
| CLM-024 | A custom carrier board reduces product risk | Hypothesis | Works only after module/documentation/supply/manufacturing-test contracts are stable | AOS-HW-008#carrier-board-stage | EXP-081 | G9/G10 |
| CLM-025 | Entity-first navigation improves cross-domain task completion | Product hypothesis | Requires comparative usability studies against application-first baselines | AOS-VSN-003#product-evidence | EXP-101 | G5 |
| CLM-026 | A provider-published action catalog can cover high-value workflows without unrestricted UI automation | Product hypothesis | Measure coverage and failure behavior across first-party and partner providers | AOS-PROD-011#coverage-model | EXP-102 | G5 |
| CLM-027 | Semantic journaling can preserve useful recovery without recording raw secrets | Security/product hypothesis | Requires redaction, field classification, opt-out, and attack testing | AOS-PROD-002#privacy-boundary | EXP-103 | G5 |
| CLM-028 | A portable camera service can separate application APIs from sensor/ISP backends | Architecture hypothesis | Prove on UVC/libcamera-like open backend and one quality-hardware backend | AOS-ARCH-020#camera-contract | EXP-104 | G4/G7 |
| CLM-029 | Open ISP documentation can materially reduce camera bring-up risk | Hardware hypothesis | Benchmark PiSP or documented ISP path against black-box Pixel evidence | AOS-HW-012#documented-isp-path | EXP-105 | G4 |
| CLM-030 | A future ODM device can adopt the same service contracts without product-layer fork | Programme hypothesis | Requires contract package, reference BSP and second-vendor portability review | AOS-HW-008#contract-readiness | EXP-106 | G8 |
| CLM-031 | Clean-room separation can produce legally reviewable interoperability specifications | Legal/process hypothesis | Counsel must approve jurisdiction, inputs, roles, records and outputs | AOS-LEGAL-002#clean-room-protocol | EXP-107 | G0/G7 |
| CLM-032 | Agent autonomy can be bounded by capabilities, budgets, confirmation tiers and receipts | Security hypothesis | Adversarial tests must show no privilege amplification or silent irreversible effect | AOS-ARCH-010#trust-tiers | EXP-108 | G5 |
| CLM-033 | Community participation can lower hardware-documentation and driver cost | Programme hypothesis | Track accepted evidence, maintainers, vendor responses and reproducible ports | AOS-GOV-005#community-evidence | EXP-109 | G4/G8 |
| CLM-034 | The project can avoid public brand collision while retaining stable technical identifiers | Governance claim | AOS identifiers are neutral; public name still requires professional clearance | AOS-ADR-0006#decision | N/A | G0 |

<a id="operating-rule"></a>

## Operating Rule

Every material use must preserve the record ID and link the claim, experiment, task, or normative specification that depends on it. Generated Markdown is a reviewable view; the CSV is the canonical machine-readable register.

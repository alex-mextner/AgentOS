---
id: "AOS-LEGAL-005"
title: "Contact and Partnership Map"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Prioritized counsel, silicon, phone, camera, modem, lab, assurance, funding, and ODM contact plan with precise asks."
---

# Contact and Partnership Map

> Prioritized counsel, silicon, phone, camera, modem, lab, assurance, funding, and ODM contact plan with precise asks.

## Table of Contents

- [Contact Strategy](#contact-strategy)
- [Priority Contact Map](#priority-contacts)
- [Contact Dossier](#contact-dossier)
- [Contractual and Technical Asks](#contract-asks)
- [First 120-Day Contact Sequence](#contact-sequence)
- [Relationship Record](#relationship-record)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="contact-strategy"></a>

## Contact Strategy

Every contact has a specific technical/legal ask, evidence package, desired agreement, owner, follow-up date, and fallback. Do not begin with a broad request to “support our OS.” Use the target dossiers in [HW-001](AOS-HW-001.md#target-dossier) and the outreach template in [the contact template](AOS-TPL-CONTACT.md#context).

<a id="priority-contacts"></a>

## Priority Contact Map

| Category | Example organizations/programs | First ask | Desired result |
| --- | --- | --- | --- |
| Legal counsel | software/IP, anti-circumvention, telecom/regulatory, privacy, trademark specialists | scoped risk review and written engineering boundaries | approved policies, jurisdiction matrix, contract templates |
| Microkernel/capability experts | seL4 Foundation, Genode Labs, academic capability/OS groups | architecture review of capability, IPC and assurance plan | paid review, research collaboration, contributor referrals |
| Documented-board ecosystem | BeagleBoard.org, Texas Instruments, NXP, board design partners | public-document map, boot/recovery/debug, display/camera/power support | named technical contact, sample access, clarification channel |
| Open phone community | PINE64, postmarketOS maintainers, Purism | board revisions, schematics, modem/power/camera limitations, community coordination | maintained target dossier and shared test knowledge |
| Semi-open phone vendors | Fairphone, Sony Open Devices | supported SKU, boot/recovery, redistribution, lifecycle, camera/power dependency boundaries | evaluation units, technical/business contact, written rights |
| Pixel/Android ecosystem | Google Pixel/AOSP/security contacts where available | restoration/unlock terms, public interface/document pointers, responsible disclosure | clarified public boundary; no expectation of private Pixel support |
| Camera | Sony Semiconductor Solutions, onsemi/OmniVision where accessible, Arducam, e-con Systems, Vision Components, module/ISP vendors | sensor/module docs, RAW/controls, calibration, supply, licensing and tuning support | evaluation kit, NDA reviewed by counsel, support quote, replacement path |
| Cellular modules | Quectel, Telit Cinterion, Semtech/Sierra Wireless, u-blox and regional integrators | documented MBIM/QMI/AT path, firmware/update policy, certification, Linux-independent support | module shortlist, SDK/docs agreement, FAE contact, lifecycle commitment |
| Certification labs | UL Solutions, TÜV, SGS, Bureau Veritas, Sporton and authorized PTCRB/GCF labs | architecture consultation and staged test budget | test plan, inheritance assumptions, lead times and evidence requirements |
| ODM/JDM/EMS | mobile/embedded design manufacturers selected through RFI | documentation/IP/boot/update/camera/modem/certification/manufacturing terms | non-binding feasibility, NRE/MOQ and responsibility matrix |
| Security/assurance | NCC Group, Trail of Bits, academia/formal-methods consultants or equivalent | scoped kernel/capability/update review | independent findings, proof roadmap, retest commitment |
| Funding/community | NLnet, Sovereign Tech Fund and relevant regional research/open-source grants; foundations and sponsors | public-good deliverable proposal | grant/sponsorship without architectural control |

<a id="contact-dossier"></a>

## Contact Dossier

Send only what the recipient needs: one-page mission; architecture boundary diagram; target/device and exact revision; current evidence; precise unknowns; requested documentation or support; planned public/private treatment; commercial/volume horizon; legal entity and NDA contact; security handling; and response deadline. Separate technical and commercial questions.

<a id="contract-asks"></a>

## Contractual and Technical Asks

Prioritize: boot and recovery documentation; register/protocol/interface specifications; firmware and redistribution rights; errata; reference schematics/layout; power/thermal sequences; security/update support; diagnostic tooling; calibration/tuning ownership; long-term supply/change notification; sample pricing; FAE hours; permitted publication of conformance tests; successor-part path; source escrow or interface escrow for critical components; and rights after support termination.

<a id="contact-sequence"></a>

## First 120-Day Contact Sequence

1. Counsel and trademark professionals.
2. BeagleBoard/TI and camera-capable board/silicon contacts.
3. PINE64/postmarketOS and selected open-phone maintainers.
4. Camera module/integration vendors and cellular-module FAEs.
5. Fairphone and Sony Open Devices after a complete dossier shows the precise gap.
6. Security/capability reviewers after kernel semantics are executable.
7. Certification laboratory for architecture consultation before custom carrier-board freeze.
8. ODM/JDM contacts only after interface, market, volume, IP and support requirements are written.

<a id="relationship-record"></a>

## Relationship Record

The private contact register stores person, role, organization, public source, consent/contact basis, NDA status, jurisdiction, asks, received artifacts, restrictions, commitments, next action, and owner. Public specifications link only the organization/program and releasable outcome. No personal email or NDA detail enters the public wiki without permission.

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

These fine-grained anchors give the execution plan stable links into this specification. They are normative pointers: the linked canonical section remains the full requirement source.

<a id="contractual-and-technical-asks"></a>

### Contractual And Technical Asks

For planning, conformance, and task cross-references, **Contractual And Technical Asks** denotes the part of this specification governed primarily by [Contractual and Technical Asks](#contract-asks). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

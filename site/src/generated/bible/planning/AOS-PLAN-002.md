---
id: "AOS-PLAN-002"
title: "Roadmap and Gantt Baseline"
status: "Normative planning baseline"
version: "2.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "A multi-year, parallel, evidence-gated roadmap with Mermaid Gantt and milestone exit evidence."
---

# Roadmap and Gantt Baseline

> A multi-year, parallel, evidence-gated roadmap with Mermaid Gantt and milestone exit evidence.

## Table of Contents

- [Planning Baseline](#planning-baseline)
- [Program Gantt](#gantt)
- [Milestone Baseline](#milestones)
- [Critical Dependencies](#critical-dependencies)
- [Schedule Policy](#schedule-policy)

<a id="planning-baseline"></a>

## Planning Baseline

The baseline starts **2026-07-13** and uses dependency-driven ranges rather than promised shipment dates. The authoritative issue data is [the canonical task CSV](AOS-PLAN-009.md#canonical-schema); this document provides the executive view. Dates must be re-baselined after the first 90-day evidence review.

<a id="gantt"></a>

## Program Gantt

```mermaid
gantt
    title Agent OS evidence-driven program baseline
    dateFormat  YYYY-MM-DD
    axisFormat  %Y-%m

    section Program and legal
    Repository, governance, trademark, clean-room      :a1, 2026-07-13, 16w
    Vendor/community contact campaign                  :a2, 2026-08-10, 40w
    Regulatory and ODM readiness                       :a3, 2027-04-05, 144w

    section Kernel core
    Architecture contracts and QEMU bootstrap          :k1, 2026-07-13, 16w
    Capability IPC vertical slice                      :k2, after k1, 13w
    SMP, isolation, synchronization, timing            :k3, 2026-10-05, 34w
    Security, performance, and assurance hardening     :k4, 2027-01-04, 78w

    section Portable platform
    IDL, board package, driver domain, core services   :p1, 2026-08-10, 38w
    Graphics, storage, networking, package/update      :p2, 2026-11-02, 52w
    Conformance, trace replay, observability           :p3, 2026-09-07, 82w

    section Product runtime
    Entities, actions, history, shell alpha            :u1, 2026-09-07, 42w
    Backup, accessibility, integrations, agent shadow  :u2, 2027-01-04, 52w
    Connected-device and developer preview             :u3, 2027-07-05, 82w

    section Documented/open hardware
    BeaglePlay and second-SoC bring-up                  :h1, 2026-10-05, 43w
    Camera-capable boards and PiSP bench                :h2, 2026-10-05, 56w
    PinePhone Pro native integration                    :h3, 2027-02-01, 65w
    Community hardware kit                             :h4, 2028-07-31, 52w

    section Pixel 9 quality track
    Dossier, stock oracle, legal and trace tooling      :x1, 2026-08-10, 30w
    Boot/display/storage feasibility                    :x2, 2027-02-01, 52w
    Camera/power/native feasibility decision            :x3, 2027-07-03, 30w

    section Camera and cellular
    Portable capture and 3A reference                   :c1, 2026-10-05, 56w
    Calibration and computational pipeline              :c2, 2027-05-03, 78w
    Modem transport, data and SMS                       :m1, 2027-01-04, 56w
    Voice/IMS evidence and partner path                  :m2, 2027-10-04, 104w

    section Product hardware
    Custom carrier-board architecture                   :o1, 2028-01-03, 82w
    EVT-style developer device                          :o2, 2028-10-02, 78w
    ODM RFI and partner selection                       :o3, 2029-07-02, 82w
```

<a id="milestones"></a>

## Milestone Baseline

| Milestone | Target | Exit evidence |
| --- | --- | --- |
| M0 Program ready | 2026-08-07 | repositories, governance, assets, source/claim/task registers validated |
| M1 QEMU boots user space | 2026-10-30 | repeatable CI boot, console, memory protection, crash evidence |
| M2 Capability IPC vertical slice | 2027-01-29 | capability transfer/revocation, driver domain, storage/UI demo |
| M3 Documented-board first frame | 2027-04-30 | native AArch64 boot, storage/network, display frame, recovery |
| M4 Product shell alpha | 2027-06-25 | entities/actions/history/receipts on QEMU and one board |
| M5 Camera reference pipeline | 2027-10-29 | RAW capture, 3A baseline, calibrated image-quality evidence |
| M6 Open-phone data prototype | 2028-01-28 | display/touch/audio/power plus cellular data/SMS evidence |
| M7 Pixel feasibility decision | 2028-01-28 | written continue/limit/stop decision across boot/display/power/camera risks |
| M8 Developer-device preview | 2028-07-28 | recovery/update, daily interaction, published limitations, community kit plan |
| M9 Quality-device route decision | 2029-01-26 | semi-open/custom/Pixel path selected with cost and legal dossier |
| M10 Community hardware kit | 2029-07-27 | reproducible kit, docs, tests, maintainer coverage |
| M11 ODM RFI | 2030-01-25 | requirements, IP clauses, certification responsibilities, shortlisted partners |

<a id="critical-dependencies"></a>

## Critical Dependencies

- M2 depends on stable capability-object and IDL semantics, not on a physical phone.
- M3 depends on debug/recovery and board documentation, not camera or cellular.
- M4 depends on storage, graphics, identity, package, and receipt contracts.
- M5 depends on measurable RAW access, calibration assets, controlled scenes, and repeatable pipelines.
- M6 does not imply native carrier voice; cellular data/SMS and voice/IMS are separate gates.
- M7 is a decision milestone, not a promise to complete Pixel 9 support.
- M11 begins only after portable board contracts and manufacturing test interfaces are stable.

<a id="schedule-policy"></a>

## Schedule Policy

A milestone moves when a dependency changes or evidence disproves the estimate. It never remains nominally “green” by reducing acceptance criteria. The task CSV stores start week, duration, target date, dependencies, risks, and evidence so Linear, GitHub, or another planner can render alternative scenarios.


<a id="generated-xref-anchors"></a>

## Generated Cross-Reference Anchors

<a id="programme-gantt"></a>

### Programme Gantt

This stable anchor is referenced by another canonical document. Its normative content is the nearest applicable section above and the linked task/claim data; future editorial refinement must preserve the anchor.

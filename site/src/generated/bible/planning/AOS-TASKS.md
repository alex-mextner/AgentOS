---
id: "AOS-TASKS"
title: "Canonical Task Catalog"
status: "Generated planning view"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Human-readable projection of the canonical task CSV, including descriptions, acceptance criteria, dependencies, evidence, and traceability."
---

# Canonical Task Catalog

## Table of Contents

- [Catalog Rules](#catalog-rules)
- [Track Index](#track-index)
- [Task Catalog](#task-catalog)

<a id="catalog-rules"></a>

## Catalog Rules

`docs/planning/tasks.csv` is canonical. This Markdown view is generated from it. Dependencies use task IDs; specifications use stable `AOS-*#anchor` references; source, claim, and experiment IDs resolve through their registers.

<a id="track-index"></a>

## Track Index

- [AOS-CAM](#track-aos-cam) — 29 tasks
- [AOS-CELL](#track-aos-cell) — 19 tasks
- [AOS-COMM](#track-aos-comm) — 22 tasks
- [AOS-CORE](#track-aos-core) — 27 tasks
- [AOS-DOCS](#track-aos-docs) — 30 tasks
- [AOS-LEGAL](#track-aos-legal) — 21 tasks
- [AOS-ODM](#track-aos-odm) — 22 tasks
- [AOS-OPEN](#track-aos-open) — 33 tasks
- [AOS-P9](#track-aos-p9) — 25 tasks
- [AOS-PLAT](#track-aos-plat) — 41 tasks
- [AOS-PROD](#track-aos-prod) — 32 tasks
- [AOS-SEC](#track-aos-sec) — 26 tasks

<a id="task-catalog"></a>

## Task Catalog

<a id="track-aos-cam"></a>

### AOS-CAM

<a id="task-aos-cam-000"></a>

#### AOS-CAM-000 — Camera Quality Program epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Camera Lead · Program
**Schedule:** 2026-09-07 → 2029-07-08 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Build a portable measurable camera stack and quality path.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-HW-006#quality-definition; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-001"></a>

#### AOS-CAM-001 — Define camera quality metrics and acceptance scenes

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Camera Lead · Camera Quality
**Schedule:** 2026-09-07 → 2026-11-01 · 12 estimated days · M3
**Parent:** AOS-CAM-000
**Dependencies:** AOS-DOCS-004
**Related tasks:** none

**Outcome.** Turn “good camera” into measurable capture, 3A, color, texture, noise, dynamic range, motion, latency, video, stabilization, power and consistency targets.

**Scope.** Produce and integrate: metric catalog; controlled/natural scene set; reference devices; target ranges; human-review protocol; evidence schema. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Each quality claim names a metric or structured review, capture conditions, reference, uncertainty and minimum acceptable outcome
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** metric catalog; controlled/natural scene set; reference devices; target ranges; human-review protocol; evidence schema
**Verification:** camera/vision/product review and pilot captures on stock/reference hardware
**Evidence:** quality plan; scene inventory; pilot metrics; known measurement limits
**Traceability:** specs: AOS-HW-006#quality-definition;AOS-RES-003#camera-claims; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-002"></a>

#### AOS-CAM-002 — Commission camera calibration and measurement lab

**Type / priority / status:** Purchase · P1 · Backlog
**Owner / workstream:** Camera Lab Engineer · Camera Lab
**Schedule:** 2026-09-21 → 2026-11-29 · 12 estimated days · M3
**Parent:** AOS-CAM-000
**Dependencies:** AOS-OPEN-002;AOS-OPEN-003
**Related tasks:** AOS-CAM-001

**Outcome.** Build controlled lighting, targets, fixtures, motion/flicker, reference capture, lux/color and data-management capability tied to quality experiments.

**Scope.** Produce and integrate: lab fixtures/targets/lights/meters; calibration records; scene procedures; asset/source rights; capture automation. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Lab variance is characterized, every target/light/instrument is identified, and raw/reference assets have lawful provenance
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** lab fixtures/targets/lights/meters; calibration records; scene procedures; asset/source rights; capture automation
**Verification:** repeat reference captures across days/operators and quantify variance
**Evidence:** commissioning report; calibration certificates/status; repeatability statistics
**Traceability:** specs: AOS-HW-009#camera-lab;AOS-RES-004#evidence-integrity; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-010"></a>

#### AOS-CAM-010 — Freeze portable camera service API level 0

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** Camera Architect · Camera Architecture
**Schedule:** 2027-03-22 → 2027-04-18 · 8 estimated days · M4
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-001
**Related tasks:** AOS-PLAT-039

**Outcome.** Approve stream/control/result, frame ownership, timestamps, calibration, 3A, processing, privacy, power, lifecycle and extension semantics.

**Scope.** Produce and integrate: camera API-level manifest; conformance cases; backend extension rules; unresolved-feature list. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- API supports metadata-rich RAW/processed/video flows without encoding Linux media, Android Camera HAL, or one ISP’s control vocabulary
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** camera API-level manifest; conformance cases; backend extension rules; unresolved-feature list
**Verification:** map virtual, Pi/reference, AM62A/i.MX and vendor-module paths and security review
**Evidence:** API gate record; mapping report; conformance fixtures
**Traceability:** specs: AOS-HW-006#portable-camera-stack; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-011"></a>

#### AOS-CAM-011 — Define sensor, lens, calibration, and metadata model

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Camera Systems Engineer · Camera Architecture
**Schedule:** 2027-04-05 → 2027-05-30 · 12 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-002
**Related tasks:** AOS-PLAT-039;AOS-CAM-010

**Outcome.** Represent sensor modes, exposure/gain/timing, CFA, black/white levels, lens/AF/OIS, temperature, defects, color/shading and per-module calibration provenance.

**Scope.** Produce and integrate: metadata/calibration schemas; module identity; control ranges; DNG mapping; validation fixtures. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every captured frame can be traced to exact mode/control/calibration/module and unknown calibration is explicit
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** metadata/calibration schemas; module identity; control ranges; DNG mapping; validation fixtures
**Verification:** encode two sensors/modules and reject missing/inconsistent timing/color/calibration data
**Evidence:** schema tests; module dossiers; DNG validation
**Traceability:** specs: AOS-HW-006#sensor-and-module; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-012"></a>

#### AOS-CAM-012 — Implement camera pipeline backend framework

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Camera Platform Engineer · Camera Platform
**Schedule:** 2027-04-05 → 2027-06-27 · 20 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** AOS-PLAT-024
**Related tasks:** AOS-CAM-010;AOS-PLAT-023

**Outcome.** Compose sensor, receiver, capture, ISP, 3A, lens, stabilization, encoder and computational stages as replaceable isolated backends.

**Scope.** Produce and integrate: pipeline graph; backend interfaces; buffer/metadata synchronization; lifecycle/reset; software/reference backend; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Backends can be replaced without product API changes and frame/control/result ownership remains synchronized under failure
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** pipeline graph; backend interfaces; buffer/metadata synchronization; lifecycle/reset; software/reference backend; tests
**Verification:** virtual and reference pipeline, stage crash/restart, buffer pressure, control/result timing and privacy indicator tests
**Evidence:** pipeline conformance; timing diagrams; fault/recovery traces
**Traceability:** specs: AOS-HW-006#portable-camera-stack;AOS-ARCH-006#camera-contract; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-020"></a>

#### AOS-CAM-020 — Capture stable RAW frames on a documented camera platform

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Camera Bring-up Engineer · Capture
**Schedule:** 2027-05-03 → 2027-08-22 · 25 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** none
**Related tasks:** AOS-CAM-011;AOS-CAM-012;AOS-OPEN-031

**Outcome.** Acquire repeatable full-resolution RAW frames with complete exposure/gain/timing/lens/calibration metadata through native Agent OS services.

**Scope.** Produce and integrate: sensor/CSI/capture backends; RAW buffer path; metadata; controlled corpus; error/restart handling. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Frames have stable dimensions/stride/timestamps, no silent corruption/drop, and controls/results match measured capture timing
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** sensor/CSI/capture backends; RAW buffer path; metadata; controlled corpus; error/restart handling
**Verification:** EXP-050 across modes, exposures, frame rates, temperature, dropped/corrupt frames and repeated boots
**Evidence:** RAW/DNG corpus; metadata validator; bandwidth/drop metrics; EXP-050 record
**Traceability:** specs: AOS-HW-006#documented-camera-bench;AOS-HW-006#capture-path; sources: none; claims: CLM-012; experiments: EXP-050
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-021"></a>

#### AOS-CAM-021 — Implement DNG/portable RAW export and provenance

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Imaging Format Engineer · Capture
**Schedule:** 2027-06-14 → 2027-08-01 · 10 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-011
**Related tasks:** AOS-CAM-020

**Outcome.** Export captured RAW, calibration, metadata, thumbnails and processing history in a documented interoperable format.

**Scope.** Produce and integrate: DNG writer/validator; metadata mapping; provenance/signature fields; sample assets; compatibility tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Export preserves raw sample values and essential calibration/control metadata without private vendor dependencies
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** DNG writer/validator; metadata mapping; provenance/signature fields; sample assets; compatibility tests
**Verification:** validate with independent readers and compare decoded raw/metadata round trip
**Evidence:** DNG validation report; sample files; field coverage/gap list
**Traceability:** specs: AOS-HW-006#raw-and-dng;AOS-PROD-004#backup-bundle; sources: SRC-044; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-022"></a>

#### AOS-CAM-022 — Validate camera timestamp and sensor synchronization

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Camera Timing Engineer · Capture
**Schedule:** 2027-06-14 → 2027-08-15 · 14 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** AOS-PLAT-013
**Related tasks:** AOS-PLAT-013;AOS-CAM-020;AOS-OPEN-054

**Outcome.** Align sensor exposure/readout, frame delivery, IMU/gyro, flash/flicker, audio and system time for motion, stabilization and video.

**Scope.** Produce and integrate: timestamp model; calibration procedure; synchronization service integration; flicker/motion tests; uncertainty fields. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Consumers receive exposure interval and uncertainty, and synchronization drift remains within declared requirements
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** timestamp model; calibration procedure; synchronization service integration; flicker/motion tests; uncertainty fields
**Verification:** LED/flicker/motion rig and cross-sensor/IMU/audio comparisons under load
**Evidence:** timestamp offset/jitter report; calibration assets; failure cases
**Traceability:** specs: AOS-HW-006#timing-and-motion; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-030"></a>

#### AOS-CAM-030 — Implement reference 3A controller framework

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** 3A Lead · 3A
**Schedule:** 2027-06-14 → 2027-10-17 · 30 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-001
**Related tasks:** AOS-CAM-012;AOS-CAM-020

**Outcome.** Run isolated replaceable auto-exposure, auto-white-balance and autofocus algorithms with deterministic metadata, convergence, lock and scene-change behavior.

**Scope.** Produce and integrate: 3A host/runtime; statistics interface; AE/AWB/AF controllers; tuning/config; simulator/replay; metadata/diagnostics. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- 3A decisions are reproducible from approved inputs, convergence/oscillation are measured, and algorithm failure does not deadlock capture
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** 3A host/runtime; statistics interface; AE/AWB/AF controllers; tuning/config; simulator/replay; metadata/diagnostics
**Verification:** EXP-051 controlled brightness/color/depth/motion transitions, lock/unlock and failure behavior
**Evidence:** convergence/stability plots; tuning files; traces; EXP-051 record
**Traceability:** specs: AOS-HW-006#three-a; sources: SRC-040; claims: none; experiments: EXP-051
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-031"></a>

#### AOS-CAM-031 — Implement autofocus and lens/OIS control path

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Autofocus Engineer · 3A
**Schedule:** 2027-07-12 → 2027-10-24 · 22 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-011
**Related tasks:** AOS-CAM-011;AOS-CAM-030

**Outcome.** Control focus actuators and optional stabilization with calibration, limits, feedback, failure detection and contrast/phase metrics where accessible.

**Scope.** Produce and integrate: lens/OIS driver contract; calibration; AF algorithms; focus metrics; safety limits; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Actuators remain within safe limits, focus state/confidence is exposed, and failed hardware cannot hang the pipeline
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** lens/OIS driver contract; calibration; AF algorithms; focus metrics; safety limits; tests
**Verification:** near/far/low-light/low-texture/motion scenes, actuator limits/stall, restart and temperature variation
**Evidence:** focus success/time/accuracy report; actuator traces; calibration data
**Traceability:** specs: AOS-HW-006#three-a; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-032"></a>

#### AOS-CAM-032 — Tune auto-exposure and auto-white-balance baseline

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Imaging/3A Engineer · 3A
**Schedule:** 2027-07-26 → 2027-11-14 · 24 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-002
**Related tasks:** AOS-CAM-001;AOS-CAM-030

**Outcome.** Achieve stable exposure and neutral/intentional color behavior across dynamic range, mixed light, skin tones, flicker and scene transitions.

**Scope.** Produce and integrate: AE/AWB algorithms and tuning; flicker handling; scene statistics; test corpus; diagnostics. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- AE/AWB meet declared convergence/stability/color targets and failure/uncertainty is visible in metadata
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** AE/AWB algorithms and tuning; flicker handling; scene statistics; test corpus; diagnostics
**Verification:** controlled lux/CCT/mixed light/HDR/flicker/skin scenes and temporal transition analysis
**Evidence:** exposure/color error and stability report; tuning revisions; visual review
**Traceability:** specs: AOS-HW-006#three-a; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-040"></a>

#### AOS-CAM-040 — Build per-module calibration and image pipeline baseline

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Image Quality Engineer · Calibration
**Schedule:** 2027-07-12 → 2027-11-14 · 28 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-002
**Related tasks:** AOS-CAM-011;AOS-CAM-020;AOS-CAM-032

**Outcome.** Measure and apply black level, bad pixels, lens shading, geometric distortion, color matrix, noise, sharpness and tone behavior with traceable calibration.

**Scope.** Produce and integrate: calibration procedures/tools; per-module bundles; baseline demosaic/color/noise/tone pipeline; versioning/provenance. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Calibration is tied to module identity/version, improves declared metrics, and invalid/missing data fails visibly rather than applying unsafe defaults
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** calibration procedures/tools; per-module bundles; baseline demosaic/color/noise/tone pipeline; versioning/provenance
**Verification:** EXP-052 across multiple modules, temperatures, illuminants and repeat calibrations
**Evidence:** calibration bundles; metric report; before/after corpus; EXP-052 record
**Traceability:** specs: AOS-HW-006#calibration; sources: none; claims: none; experiments: EXP-052
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-041"></a>

#### AOS-CAM-041 — Implement repeatable image-quality comparison harness

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Camera QA Lead · Quality Evaluation
**Schedule:** 2027-08-09 → 2027-11-14 · 18 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-001;AOS-CAM-002;AOS-P9-020
**Related tasks:** AOS-CAM-040

**Outcome.** Run objective metrics, blinded expert/user review, metadata validation and stock/reference comparison with controlled processing and versioning.

**Scope.** Produce and integrate: capture orchestration; scene database; metric pipeline; blinded review tool; report generator; versioned baselines. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every quality result can be reproduced from raw inputs/configuration and distinguishes objective metrics from subjective preference
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** capture orchestration; scene database; metric pipeline; blinded review tool; report generator; versioned baselines
**Verification:** repeat one device/pipeline across days then compare two devices without leaking labels to reviewers
**Evidence:** repeatability and comparison reports; scripts; dataset manifests
**Traceability:** specs: AOS-HW-006#quality-definition;AOS-RES-004#evidence-integrity; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-042"></a>

#### AOS-CAM-042 — Implement video and stabilization reference path

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Video Imaging Engineer · Video
**Schedule:** 2027-09-06 → 2028-01-23 · 30 estimated days · M8
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-022;AOS-PLAT-036
**Related tasks:** AOS-PLAT-036;AOS-CAM-031;AOS-CAM-032

**Outcome.** Capture synchronized audio/video with exposure/focus continuity, frame pacing, rolling-shutter metadata, EIS/OIS hooks, encoding, thermal and storage behavior.

**Scope.** Produce and integrate: video capture graph; A/V sync; encoder interface; EIS reference; metadata; thermal/storage controls; test clips. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Video reports dropped/duplicated frames and thermal degradation explicitly, maintains declared A/V sync, and safely stops on resource exhaustion
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** video capture graph; A/V sync; encoder interface; EIS reference; metadata; thermal/storage controls; test clips
**Verification:** motion/rolling-shutter, low light, long duration, storage pressure, thermal throttle, route changes and restart tests
**Evidence:** A/V sync/frame-drop/stabilization/thermal report; clips; traces
**Traceability:** specs: AOS-HW-006#video-and-stabilization; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-050"></a>

#### AOS-CAM-050 — Implement published-prior-art burst fusion pipeline

**Type / priority / status:** Experiment · P1 · Backlog
**Owner / workstream:** Computational Photography Lead · Computational Photography
**Schedule:** 2027-09-06 → 2028-02-20 · 35 estimated days · M8
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-022;AOS-LEGAL-004
**Related tasks:** AOS-CAM-040;AOS-CAM-041

**Outcome.** Build an original, documented burst alignment, rejection, merge and tone pipeline using lawful publications/data and native Agent OS captures.

**Scope.** Produce and integrate: algorithm spec; alignment/merge implementation; motion rejection; tuning; CPU/accelerator backends; A/B dataset. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Improvements are measured against single-frame baseline, motion artifacts are bounded, and no private Pixel implementation is used or implied
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** algorithm spec; alignment/merge implementation; motion rejection; tuning; CPU/accelerator backends; A/B dataset
**Verification:** EXP-053 controlled HDR/low-light/motion scenes, artifacts, performance/power and blinded review
**Evidence:** A/B metrics/corpus; algorithm provenance; performance/power report; EXP-053 record
**Traceability:** specs: AOS-HW-006#computational-pipeline;AOS-RES-001#camera-cellular; sources: SRC-043; claims: CLM-013; experiments: EXP-053
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-051"></a>

#### AOS-CAM-051 — Optimize low-light noise, detail, color, and motion behavior

**Type / priority / status:** Task · P2 · Backlog
**Owner / workstream:** Computational Photography Engineer · Computational Photography
**Schedule:** 2027-11-29 → 2028-04-02 · 28 estimated days · M8
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-032
**Related tasks:** AOS-CAM-001;AOS-CAM-050

**Outcome.** Improve low-light output through sensor-aware denoise, temporal fusion, color/tone and capture policy while controlling ghosting and latency.

**Scope.** Produce and integrate: noise model; temporal/spatial denoise; capture policy; tuning; artifact detector; benchmark set. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Low-light gains do not hide unacceptable motion/texture/color regressions and fallback is deterministic when fusion confidence is low
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** noise model; temporal/spatial denoise; capture policy; tuning; artifact detector; benchmark set
**Verification:** lux/motion/skin/texture/color scenes, handheld sequences, power/latency and failure-to-single-frame fallback
**Evidence:** quality/latency/power report; artifact examples; tuning data
**Traceability:** specs: AOS-HW-006#computational-pipeline; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-052"></a>

#### AOS-CAM-052 — Optimize HDR and local tone mapping

**Type / priority / status:** Task · P2 · Backlog
**Owner / workstream:** Computational Photography Engineer · Computational Photography
**Schedule:** 2027-12-13 → 2028-04-02 · 24 estimated days · M8
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-041
**Related tasks:** AOS-CAM-001;AOS-CAM-050

**Outcome.** Extend usable dynamic range while preserving color, local contrast, natural highlights, faces and temporal stability.

**Scope.** Produce and integrate: exposure selection; merge/tone algorithms; face/highlight policies; temporal/preview strategy; benchmarks. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- HDR improves declared highlight/shadow metrics without systematic halos, color shifts or unsafe capture latency
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** exposure selection; merge/tone algorithms; face/highlight policies; temporal/preview strategy; benchmarks
**Verification:** backlit, specular, sky/interior, skin and motion scenes with halo/ghost/color/temporal metrics
**Evidence:** HDR comparison report; artifact corpus; performance/power measurements
**Traceability:** specs: AOS-HW-006#computational-pipeline; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-053"></a>

#### AOS-CAM-053 — Evaluate optional ML imaging components under bounded policy

**Type / priority / status:** Spike · P3 · Backlog
**Owner / workstream:** ML Imaging Engineer · Computational Photography
**Schedule:** 2028-01-24 → 2028-04-30 · 18 estimated days · M9
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-041;AOS-SEC-061
**Related tasks:** none

**Outcome.** Assess whether segmentation, denoise, super-resolution, scene understanding or auto-edit models add measurable value with acceptable provenance, privacy, size, power and fallback.

**Scope.** Produce and integrate: candidate/model/data/license dossier; offline benchmark; privacy/energy analysis; deterministic fallback; decision. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No model ships without rights, data provenance, measured value, bias/robustness analysis, budget compliance and non-ML fallback
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** candidate/model/data/license dossier; offline benchmark; privacy/energy analysis; deterministic fallback; decision
**Verification:** quality and robustness tests including out-of-distribution/skin-tone/privacy/thermal cases
**Evidence:** model card; provenance/SBOM; benchmark; decision record
**Traceability:** specs: AOS-HW-006#ml-policy;AOS-LEGAL-003#provenance-record; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-060"></a>

#### AOS-CAM-060 — Prove camera API portability across two pipelines

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Camera Architect · Camera Portability
**Schedule:** 2027-11-15 → 2028-02-20 · 18 estimated days · M9
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-020;AOS-CAM-040;AOS-OPEN-032
**Related tasks:** none

**Outcome.** Run the same capture application and conformance suite over two materially different sensor/ISP/software backends.

**Scope.** Produce and integrate: second backend; API conformance; optional-capability map; leakage report; migration/performance comparison. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Client code is unchanged, backend-specific features are versioned optional capabilities, and common semantics match
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** second backend; API conformance; optional-capability map; leakage report; migration/performance comparison
**Verification:** EXP-054 identical client workflows, metadata validation, failure/lifecycle and quality-harness execution
**Evidence:** cross-backend matrix; source diff; EXP-054 record
**Traceability:** specs: AOS-ARCH-001#portability-test;AOS-HW-006#portable-camera-stack; sources: none; claims: CLM-002;CLM-014; experiments: EXP-054
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-061"></a>

#### AOS-CAM-061 — Characterize and budget camera power, memory, bandwidth, and thermal cost

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Camera Performance Engineer · Camera Performance
**Schedule:** 2027-11-29 → 2028-03-05 · 18 estimated days · M9
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-041;AOS-PLAT-041
**Related tasks:** AOS-CAM-042;AOS-CAM-050

**Outcome.** Measure preview/capture/video/computational workloads and enforce quality degradation strategies compatible with mobile thermal and battery limits.

**Scope.** Produce and integrate: resource budgets; measurements; quality/latency/power modes; thermal throttling/fallback policy; telemetry. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Camera remains within declared safety/resource limits and quality changes are explicit rather than causing crashes or silent frame loss
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** resource budgets; measurements; quality/latency/power modes; thermal throttling/fallback policy; telemetry
**Verification:** long-run and burst workloads at controlled ambient/battery states on reference/open hardware
**Evidence:** power/thermal/bandwidth/memory report; degradation traces
**Traceability:** specs: AOS-HW-006#power-and-performance;AOS-ARCH-014#energy-budgets; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-070"></a>

#### AOS-CAM-070 — Issue controlled proprietary camera-module/ISP RFI

**Type / priority / status:** Contact · P1 · Backlog
**Owner / workstream:** Camera Partnerships Lead · Camera Partnerships
**Schedule:** 2027-11-29 → 2028-04-02 · 12 estimated days · M9
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-010;AOS-CAM-001;AOS-LEGAL-011
**Related tasks:** AOS-ODM-011

**Outcome.** Test whether a vendor can supply quality hardware and documentation/support under replaceable portable contracts without unacceptable cost or lock-in.

**Scope.** Produce and integrate: RFI; interface/quality/support/rights questionnaire; candidate list; NDA/legal flow; scorecard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Response is actionable only if implementation/deployment/update/calibration/testing/replacement rights and support lifecycle are explicit
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** RFI; interface/quality/support/rights questionnaire; candidate list; NDA/legal flow; scorecard
**Verification:** EXP-055 with at least three credible vendors/integrators or documented market failure
**Evidence:** responses; rights/quality/cost comparison; EXP-055 record
**Traceability:** specs: AOS-HW-006#controlled-proprietary-option;AOS-LEGAL-005#contractual-and-technical-asks; sources: none; claims: CLM-014; experiments: EXP-055
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-071"></a>

#### AOS-CAM-071 — Evaluate vendor camera path against native reference

**Type / priority / status:** Experiment · P1 · Backlog
**Owner / workstream:** Camera Lead · Camera Partnerships
**Schedule:** 2028-04-17 → 2028-08-20 · 20 estimated days · M9
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-070;AOS-CAM-041;AOS-CAM-061;AOS-LEGAL-011
**Related tasks:** none

**Outcome.** Compare selected vendor module/ISP/backend quality, power, latency, control, security, rights, support and replacement cost to native documented pipelines.

**Scope.** Produce and integrate: evaluation integration; conformance wrapper; quality/resource comparison; legal/support score; exit plan. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Selection cannot be based on stock marketing quality alone and must preserve replaceable Agent OS API, updates, calibration and long-term support
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** evaluation integration; conformance wrapper; quality/resource comparison; legal/support score; exit plan
**Verification:** same scene/harness, failure/update, provenance/security and replacement exercises
**Evidence:** comparison report; conformance results; contract gap list; recommendation
**Traceability:** specs: AOS-HW-006#quality-decision;AOS-HW-010#decision-weights; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-080"></a>

#### AOS-CAM-080 — Select camera route for quality-device track

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** Architecture Council / Product Lead · Camera Strategy
**Schedule:** 2028-09-04 → 2028-09-24 · 6 estimated days · M9
**Parent:** AOS-CAM-000
**Dependencies:** AOS-CAM-060;AOS-CAM-061;AOS-CAM-071;AOS-P9-020
**Related tasks:** none

**Outcome.** Choose documented native, controlled proprietary, hybrid or deferred camera route based on measured quality, resources, rights, cost and lifecycle.

**Scope.** Produce and integrate: camera gate packet; selected route; residual gaps; budget/team/partner plan; fallback/replacement triggers. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Implement against the portable camera contracts; reference implementations and vendor material are used only under approved provenance and legal boundaries.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Decision names measurable target, implementation ownership, contractual rights, power/thermal budget, support term and stop/replacement criteria
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** camera gate packet; selected route; residual gaps; budget/team/partner plan; fallback/replacement triggers
**Verification:** architecture, camera, product, security, legal and program review
**Evidence:** signed decision; quality evidence references; cost/rights matrix
**Traceability:** specs: AOS-HW-006#quality-decision;AOS-PLAN-006#camera-stop-criteria; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-090"></a>

#### AOS-CAM-090 — Build a lawful Pixel-class camera quality oracle corpus

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Camera Quality Lead · Quality Oracle
**Schedule:** 2026-09-07 → 2026-11-01 · 20 estimated days · M1
**Parent:** AOS-CAM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Build a lawful Pixel-class camera quality oracle corpus.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-012#pixel-oracle, AOS-HW-014#camera. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Build a lawful Pixel-class camera quality oracle corpus; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-012#tracks;AOS-HW-014#experiments; sources: SRC-021;SRC-022; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-091"></a>

#### AOS-CAM-091 — Bring up a documented i.MX 8M Plus RAW and metadata bench

**Type / priority / status:** Experiment · P0 · Planned
**Owner / workstream:** Camera Platform Engineer · Documented ISP
**Schedule:** 2027-06-28 → 2027-10-17 · 40 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Bring up a documented i.MX 8M Plus RAW and metadata bench.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-012#documented-isp, AOS-VAL-004#matrix. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Bring up a documented i.MX 8M Plus RAW and metadata bench; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-012#tracks;AOS-VAL-004#matrix; sources: SRC-089;SRC-090; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cam-092"></a>

#### AOS-CAM-092 — Specify portable 3A, calibration, and capture-result contracts

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Camera Architect · Camera Contracts
**Schedule:** 2026-10-05 → 2026-12-13 · 25 estimated days · M2
**Parent:** AOS-CAM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Specify portable 3A, calibration, and capture-result contracts.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-012#portable-contract, AOS-ARCH-020#contract-set. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Specify portable 3A, calibration, and capture-result contracts; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-012#portable-pipeline;AOS-ARCH-020#contract-set; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-cam-093"></a>

#### AOS-CAM-093 — Establish a calibrated camera quality measurement laboratory

**Type / priority / status:** Purchase · P1 · Planned
**Owner / workstream:** Camera Quality Lead · Camera Laboratory
**Schedule:** 2027-05-17 → 2027-07-25 · 25 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Establish a calibrated camera quality measurement laboratory.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-015#camera, AOS-HW-012#quality-program. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Establish a calibrated camera quality measurement laboratory; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-015#recommended;AOS-HW-012#quality-model; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 07
**Specialist review:** none

<a id="task-aos-cam-094"></a>

#### AOS-CAM-094 — Evaluate industrial and UVC camera modules as compromise reducers

**Type / priority / status:** Experiment · P1 · Planned
**Owner / workstream:** Camera Systems Engineer · Alternative Capture
**Schedule:** 2027-07-12 → 2027-09-19 · 25 estimated days · M5
**Parent:** AOS-CAM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Evaluate industrial and UVC camera modules as compromise reducers.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-012#external-modules, AOS-HW-013#camera. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Evaluate industrial and UVC camera modules as compromise reducers; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-012#tracks;AOS-HW-013#categories; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="track-aos-cell"></a>

### AOS-CELL

<a id="task-aos-cell-000"></a>

#### AOS-CELL-000 — Cellular and Telephony Program epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Cellular Lead · Program
**Schedule:** 2026-10-05 → 2030-01-20 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Implement native cellular services and establish partner/certification routes.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-HW-007#separate-capability-gates; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-001"></a>

#### AOS-CELL-001 — Define cellular capability decomposition and product claims

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Cellular Lead · Cellular Architecture
**Schedule:** 2026-10-05 → 2026-11-29 · 10 estimated days · M3
**Parent:** AOS-CELL-000
**Dependencies:** AOS-DOCS-005;AOS-PLAT-001
**Related tasks:** AOS-PLAT-040

**Outcome.** Separate transport, control, registration, packet data, SMS, SIM/eSIM, GNSS, voice, IMS, emergency, carrier and certification states.

**Scope.** Produce and integrate: capability/state matrix; claim language; service ownership; threat/data/power map; gate dependencies. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No roadmap or UI can infer voice/emergency/eSIM/certification from packet data or SMS
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** capability/state matrix; claim language; service ownership; threat/data/power map; gate dependencies
**Verification:** review against 3GPP/GSMA/Android decomposition and open module cases without importing their APIs
**Evidence:** architecture matrix; contradicted-assumption list; review record
**Traceability:** specs: AOS-HW-007#separate-capability-gates; sources: SRC-023;SRC-048;SRC-049; claims: CLM-009; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-002"></a>

#### AOS-CELL-002 — Shortlist documented cellular modules and evaluation kits

**Type / priority / status:** Purchase · P0 · Backlog
**Owner / workstream:** Cellular Hardware Lead · Module Selection
**Schedule:** 2026-10-19 → 2026-12-27 · 10 estimated days · M3
**Parent:** AOS-CELL-000
**Dependencies:** AOS-OPEN-003
**Related tasks:** AOS-CELL-001;AOS-LEGAL-011

**Outcome.** Identify modules with usable MBIM/QMI/AT documentation, firmware/update support, USB/PCIe, regional bands, certification, lifecycle and vendor FAE access.

**Scope.** Produce and integrate: module scorecard; vendor questions; evaluation kits; rights/firmware/certification/lifecycle dossier; recommendation. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Shortlist contains at least two vendors or explicit sole-source risk and distinguishes public protocol support from vendor/carrier features
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** module scorecard; vendor questions; evaluation kits; rights/firmware/certification/lifecycle dossier; recommendation
**Verification:** official-source/vendor-response review and sample availability/pricing check
**Evidence:** scorecard; vendor replies; purchase records; unsupported-feature list
**Traceability:** specs: AOS-HW-007#module-selection;AOS-LEGAL-005#priority-contacts; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-003"></a>

#### AOS-CELL-003 — Commission lawful cellular test environment

**Type / priority / status:** Purchase · P1 · Backlog
**Owner / workstream:** Cellular Lab Lead · Cellular Lab
**Schedule:** 2026-12-28 → 2027-04-04 · 10 estimated days · M4
**Parent:** AOS-CELL-000
**Dependencies:** AOS-CELL-002;AOS-OPEN-002
**Related tasks:** AOS-LEGAL-010

**Outcome.** Provide shielded/controlled or operator-approved test options, SIMs/accounts, traffic capture, emergency-call safeguards, RF/power tools and data-handling rules.

**Scope.** Produce and integrate: test plans/accounts/SIMs; network/traffic/power capture; emergency-call lockout; RF/legal safety procedures; asset register. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Testing cannot accidentally place emergency calls or violate network terms, and sensitive subscriber data has scoped retention/access
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** test plans/accounts/SIMs; network/traffic/power capture; emergency-call lockout; RF/legal safety procedures; asset register
**Verification:** controlled registration/data/SMS test and emergency-path tabletop with counsel/lab guidance
**Evidence:** lab commissioning; approvals; sample traces; safety checklist
**Traceability:** specs: AOS-HW-007#test-environment;AOS-LEGAL-004#cellular-path; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-010"></a>

#### AOS-CELL-010 — Implement native USB/serial/AT modem transport

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Cellular Protocol Engineer · Modem Transport
**Schedule:** 2027-02-22 → 2027-05-16 · 20 estimated days · M5
**Parent:** AOS-CELL-000
**Dependencies:** AOS-CELL-002
**Related tasks:** AOS-PLAT-034;AOS-PLAT-024

**Outcome.** Communicate with documented module control/data endpoints through native USB/serial services with framing, timeouts, reset and diagnostics.

**Scope.** Produce and integrate: transport service; AT/framing engine; endpoint discovery; reset/power hooks; simulator/fuzzer; trace sanitizer. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Parser is bounded/fuzzed, secrets are redacted, module reset recovers, and no Linux serial/network API leaks above backend
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** transport service; AT/framing engine; endpoint discovery; reset/power hooks; simulator/fuzzer; trace sanitizer
**Verification:** malformed/partial/unsolicited/timeout/reset/replug/driver-crash and command-injection tests
**Evidence:** transport conformance; fuzz report; module traces; dependency scan
**Traceability:** specs: AOS-HW-007#native-cellular-stack;AOS-ARCH-006#cellular-contract; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-020"></a>

#### AOS-CELL-020 — Implement native MBIM/QMI transport and control proof

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Cellular Protocol Engineer · Modem Protocols
**Schedule:** 2027-04-19 → 2027-08-22 · 30 estimated days · M5
**Parent:** AOS-CELL-000
**Dependencies:** AOS-LEGAL-005
**Related tasks:** AOS-PLAT-040;AOS-CELL-010

**Outcome.** Control at least one documented modem protocol and expose portable registration/session operations without a Linux runtime dependency.

**Scope.** Produce and integrate: MBIM or QMI codec/state engine; capability service adapter; simulator/traces; module integration; provenance review. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Agent OS performs protocol operations natively, malformed module responses are contained, and Linux D-Bus/libqmi/libmbim APIs are not native dependencies
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** MBIM or QMI codec/state engine; capability service adapter; simulator/traces; module integration; provenance review
**Verification:** EXP-041 connect/register/session/status/reset/invalid-message scenarios and forbidden-dependency scan
**Evidence:** protocol traces; state tests; EXP-041 record; clean-room/provenance sign-off
**Traceability:** specs: AOS-HW-007#native-cellular-stack; sources: SRC-045;SRC-046;SRC-047; claims: CLM-008; experiments: EXP-041
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-021"></a>

#### AOS-CELL-021 — Implement modem registration and lifecycle state machine

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Cellular Service Engineer · Cellular Service
**Schedule:** 2027-05-31 → 2027-09-05 · 22 estimated days · M6
**Parent:** AOS-CELL-000
**Dependencies:** none
**Related tasks:** AOS-PLAT-024;AOS-CELL-020;AOS-CELL-022;AOS-PLAT-041

**Outcome.** Manage power, initialization, SIM state, network scan/selection, registration, roaming, loss, retry, reset, firmware status and diagnostics explicitly.

**Scope.** Produce and integrate: registration/lifecycle service; retry/backoff; policy hooks; status/errors; simulator; persistence rules. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- User/product sees truthful state and reason, retries are bounded, and modem failure cannot create hidden infinite power/network loops
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** registration/lifecycle service; retry/backoff; policy hooks; status/errors; simulator; persistence rules
**Verification:** SIM absent/locked, denied/roaming, coverage loss, modem crash/reset, suspend, firmware mismatch and rapid toggling
**Evidence:** state transition coverage; power/retry traces; user-status examples
**Traceability:** specs: AOS-HW-007#modem-state-machine; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-022"></a>

#### AOS-CELL-022 — Implement physical SIM access and secret boundary

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** SIM/Security Engineer · SIM
**Schedule:** 2027-04-19 → 2027-07-11 · 18 estimated days · M5
**Parent:** AOS-CELL-000
**Dependencies:** none
**Related tasks:** AOS-CELL-010;AOS-SEC-022

**Outcome.** Expose SIM presence, PIN/PUK, subscriber/application state and approved operations without leaking credentials or raw APDU authority to ordinary clients.

**Scope.** Produce and integrate: SIM service; PIN/PUK trusted UI; application/status model; APDU broker policy; redaction/audit; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- PIN/PUK never enters general history/logs, retry counters are accurate, and arbitrary APDU access requires separate privileged grant
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** SIM service; PIN/PUK trusted UI; application/status model; APDU broker policy; redaction/audit; tests
**Verification:** wrong PIN/PUK, brute-force/rate, process crash, removal, secure-input/journal and unauthorized APDU tests
**Evidence:** SIM security review; state tests; redaction scan; user flows
**Traceability:** specs: AOS-HW-007#sim-and-esim;AOS-ARCH-012#sensitive-data; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-030"></a>

#### AOS-CELL-030 — Deliver native cellular data and SMS prototype

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Cellular Service Engineer · Data and SMS
**Schedule:** 2027-07-26 → 2027-11-14 · 25 estimated days · M6
**Parent:** AOS-CELL-000
**Dependencies:** AOS-PROD-012;AOS-CELL-003
**Related tasks:** AOS-CELL-021;AOS-PLAT-033

**Outcome.** Register a module, establish packet data, route network service, send/receive SMS, persist receipts, and recover from loss/reset.

**Scope.** Produce and integrate: data session backend; IP/DNS integration; SMS encode/store/action provider; usage/roaming policy; UI/status; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Data and SMS work natively on supported module, duplicates/loss are handled visibly, and no voice/IMS claim is made
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** data session backend; IP/DNS integration; SMS encode/store/action provider; usage/roaming policy; UI/status; tests
**Verification:** EXP-042 registration/data/DNS/large transfer/SMS send-receive/duplicate/loss/reset/roaming policy cases
**Evidence:** network traces; SMS receipts; usage/power logs; EXP-042 record
**Traceability:** specs: AOS-HW-007#data-and-sms;AOS-PROD-006#tier-two; sources: none; claims: none; experiments: EXP-042
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-031"></a>

#### AOS-CELL-031 — Harden cellular recovery, suspend, roaming, and power behavior

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Cellular Reliability Engineer · Data and SMS
**Schedule:** 2027-09-20 → 2027-12-26 · 20 estimated days · M8
**Parent:** AOS-CELL-000
**Dependencies:** AOS-CELL-021;AOS-PLAT-041
**Related tasks:** AOS-CELL-030

**Outcome.** Make connectivity resilient and bounded across coverage changes, modem resets, SIM changes, suspend/wake, roaming policy and data limits.

**Scope.** Produce and integrate: recovery/backoff policy; suspend integration; usage budgets; roaming/user controls; long-run tests; diagnostics. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No uncontrolled reconnect/power loop occurs, user policy is respected, and session/SMS state reconciles after reset
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** recovery/backoff policy; suspend integration; usage budgets; roaming/user controls; long-run tests; diagnostics
**Verification:** hours-long coverage/modem/suspend/roaming/data-limit fault campaign with power measurement
**Evidence:** reliability/power report; failure traces; policy UX review
**Traceability:** specs: AOS-HW-007#reliability-and-power;AOS-ARCH-014#background-policy; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-040"></a>

#### AOS-CELL-040 — Model and evaluate eSIM lifecycle and partner requirements

**Type / priority / status:** Experiment · P1 · Backlog
**Owner / workstream:** eSIM Product/Security Lead · eSIM
**Schedule:** 2027-08-23 → 2027-12-12 · 18 estimated days · M9
**Parent:** AOS-CELL-000
**Dependencies:** AOS-CELL-001;AOS-CELL-022;AOS-LEGAL-010;AOS-LEGAL-011
**Related tasks:** none

**Outcome.** Define eUICC discovery, profile download/enable/disable/delete, credentials, user consent, recovery, device migration and GSMA/vendor/operator dependencies.

**Scope.** Produce and integrate: lifecycle/state/threat model; UI/confirmation; data-class/recovery plan; vendor/operator/GSMA gap analysis; partner asks. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Plan identifies which functions require certified components/agreements and never treats profile secrets as portable backup data
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** lifecycle/state/threat model; UI/confirmation; data-class/recovery plan; vendor/operator/GSMA gap analysis; partner asks
**Verification:** EXP-043 tabletop and available evaluation path; lost device, transfer, rollback and malicious profile scenarios
**Evidence:** eSIM gap report; partner responses; EXP-043 record
**Traceability:** specs: AOS-HW-007#sim-and-esim;AOS-PROD-004#data-classes; sources: SRC-049; claims: none; experiments: EXP-043
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-041"></a>

#### AOS-CELL-041 — Integrate modem-assisted GNSS where supportable

**Type / priority / status:** Task · P3 · Backlog
**Owner / workstream:** GNSS Engineer · GNSS
**Schedule:** 2027-10-04 → 2027-12-26 · 14 estimated days · M8
**Parent:** AOS-CELL-000
**Dependencies:** AOS-CELL-020;AOS-PLAT-013
**Related tasks:** AOS-OPEN-054

**Outcome.** Expose location/time observations from a supported modem or separate GNSS path with permissions, accuracy, assistance-data, offline and power semantics.

**Scope.** Produce and integrate: GNSS backend; assistance-data policy; location/time metadata; power modes; privacy tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Consumers receive accuracy/freshness/source, assistance data destinations are disclosed, and background location is separately authorized
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** GNSS backend; assistance-data policy; location/time metadata; power modes; privacy tests
**Verification:** known-location/time comparison, cold/warm start, denial/background, no-network and suspend tests
**Evidence:** accuracy/TTFF/power report; privacy review; conformance
**Traceability:** specs: AOS-HW-007#gnss;AOS-ARCH-012#location-privacy; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-042"></a>

#### AOS-CELL-042 — Define emergency-calling safety boundary before voice work

**Type / priority / status:** Review · P0 · Backlog
**Owner / workstream:** Telephony Safety Lead · Voice and Emergency
**Schedule:** 2027-08-23 → 2027-11-14 · 12 estimated days · M9
**Parent:** AOS-CELL-000
**Dependencies:** AOS-CELL-001;AOS-LEGAL-010;AOS-CELL-003
**Related tasks:** none

**Outcome.** Prevent misleading or accidental emergency behavior and specify requirements, test methods, UI, fallback, location and regulatory/operator dependencies.

**Scope.** Produce and integrate: emergency requirements; test-network/lab procedure; UI/support language; disable/guard controls; partner/certification checklist. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No build advertises phone/emergency readiness before a lawful tested route passes its separate gate
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** emergency requirements; test-network/lab procedure; UI/support language; disable/guard controls; partner/certification checklist
**Verification:** tabletop and accredited/operator consultation without live unauthorized emergency calls
**Evidence:** safety review; lab/operator guidance; blocked release language
**Traceability:** specs: AOS-HW-007#emergency-calling;AOS-LEGAL-004#cellular-path; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-050"></a>

#### AOS-CELL-050 — Establish native voice and IMS feasibility

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** IMS/Telephony Lead · Voice and IMS
**Schedule:** 2027-11-29 → 2028-06-11 · 30 estimated days · M9
**Parent:** AOS-CELL-000
**Dependencies:** AOS-CELL-042;AOS-LEGAL-010;AOS-LEGAL-011;AOS-CELL-060
**Related tasks:** AOS-CELL-040

**Outcome.** Determine whether vendor/carrier-supported voice, IMS registration, audio routing, SMS over IMS, provisioning, handover and emergency behavior can be implemented and maintained.

**Scope.** Produce and integrate: vendor/carrier architecture; interface/support/rights matrix; call-flow/provisioning model; test plan; cost/schedule; continue/stop recommendation. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A positive result requires named supported modem/vendor/carrier path, emergency/audio/provisioning coverage and lifecycle commitment—not SIP theory alone
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** vendor/carrier architecture; interface/support/rights matrix; call-flow/provisioning model; test plan; cost/schedule; continue/stop recommendation
**Verification:** EXP-044 with written partner evidence and lawful lab/test-network demonstration where available
**Evidence:** partner responses; call-flow traces; gap/certification report; EXP-044 record
**Traceability:** specs: AOS-HW-007#voice-and-ims;AOS-PLAN-006#cellular-and-voice-criteria; sources: SRC-023;SRC-048; claims: CLM-009; experiments: EXP-044
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-051"></a>

#### AOS-CELL-051 — Implement telephony audio-routing contract and test path

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Telephony Audio Engineer · Voice and IMS
**Schedule:** 2028-03-20 → 2028-07-23 · 22 estimated days · M9
**Parent:** AOS-CELL-000
**Dependencies:** AOS-PLAT-036
**Related tasks:** AOS-PLAT-036;AOS-CELL-050

**Outcome.** Route microphone, speaker/earpiece, Bluetooth/USB, modem/IMS streams, tones, mute, volume and privacy through native audio policy.

**Scope.** Produce and integrate: telephony audio endpoints; route/policy state; timing/echo/noise hooks; privacy UI; loopback/test-call fixtures. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Call audio cannot be captured/routed by ungranted clients, route state is visible, and failures never leave microphone active silently
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** telephony audio endpoints; route/policy state; timing/echo/noise hooks; privacy UI; loopback/test-call fixtures
**Verification:** route changes, mute/privacy, echo/latency, device loss, suspend, call interruption and failure tests
**Evidence:** audio route matrix; latency/quality metrics; privacy review
**Traceability:** specs: AOS-HW-007#audio-routing; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-052"></a>

#### AOS-CELL-052 — Build cellular certification and carrier engagement plan

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Cellular Certification Lead · Certification
**Schedule:** 2028-04-03 → 2028-08-06 · 15 estimated days · M9
**Parent:** AOS-CELL-000
**Dependencies:** AOS-CELL-002;AOS-LEGAL-010
**Related tasks:** AOS-CELL-050

**Outcome.** Map module/final-device approvals, PTCRB/GCF, operator acceptance, IMS profiles, emergency, RF/SAR, OTA, variants, updates and regression responsibility.

**Scope.** Produce and integrate: certification matrix; operator/lab contact plan; test builds/data; budget/lead time; change-control and support obligations. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Plan states which approvals are inherited, invalidated or repeated and who owns failures/updates through product lifetime
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** certification matrix; operator/lab contact plan; test builds/data; budget/lead time; change-control and support obligations
**Verification:** authorized lab and module vendor review; compare at least two market routes
**Evidence:** review notes; budget/schedule; responsibility matrix; open blockers
**Traceability:** specs: AOS-LEGAL-004#cellular-and-carrier-path;AOS-HW-007#certification-consequences; sources: SRC-050;SRC-051; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-060"></a>

#### AOS-CELL-060 — Secure cellular module vendor and FAE relationships

**Type / priority / status:** Contact · P1 · Backlog
**Owner / workstream:** Cellular Partnerships Lead · Partnerships
**Schedule:** 2026-12-14 → 2027-05-30 · 10 estimated days · M5
**Parent:** AOS-CELL-000
**Dependencies:** AOS-LEGAL-011
**Related tasks:** AOS-CELL-002

**Outcome.** Obtain documentation, firmware/update policy, samples, support, certification data and a route for Linux-independent native integration.

**Scope.** Produce and integrate: outreach dossiers; meetings; NDA/legal review; sample/support quotes; lifecycle/rights responses; contact register. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Selected module path has a named support contact or a documented self-support/public-spec rationale and replacement candidate
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** outreach dossiers; meetings; NDA/legal review; sample/support quotes; lifecycle/rights responses; contact register
**Verification:** at least three qualified vendors/integrators contacted and responses scored
**Evidence:** public-safe contact outcomes; response scorecard; agreements/limitations
**Traceability:** specs: AOS-LEGAL-005#priority-contacts;AOS-HW-007#module-selection; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-070"></a>

#### AOS-CELL-070 — Integrate cellular data/SMS into open-phone product experience

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Connected Product Lead · Connected Product
**Schedule:** 2027-10-04 → 2028-01-09 · 20 estimated days · M6
**Parent:** AOS-CELL-000
**Dependencies:** AOS-PROD-012;AOS-PROD-050
**Related tasks:** AOS-CELL-030;AOS-OPEN-057

**Outcome.** Expose honest signal/registration/data/SMS/SIM/roaming/usage state and actions in the entity shell with recovery and migration behavior.

**Scope.** Produce and integrate: connectivity/SIM/message entities; actions/receipts; status/errors; usage/roaming controls; backup/migration rules; limitations UI. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- UI distinguishes data/SMS from voice/IMS, exposes provider/network state, and never hides billing/roaming or unsupported emergency status
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** connectivity/SIM/message entities; actions/receipts; status/errors; usage/roaming controls; backup/migration rules; limitations UI
**Verification:** normal/loss/reset/SIM change/duplicate SMS/denied action/restore and accessibility workflows
**Evidence:** product demo; action receipts; support matrix; user comprehension review
**Traceability:** specs: AOS-PROD-006#tier-two;AOS-HW-003#modem-role; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-cell-080"></a>

#### AOS-CELL-080 — Decide connected-device versus full-phone product route

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** Program Lead / Product Lead · Cellular Strategy
**Schedule:** 2028-09-04 → 2028-09-24 · 6 estimated days · M9
**Parent:** AOS-CELL-000
**Dependencies:** AOS-CELL-031;AOS-CELL-040;AOS-CELL-050;AOS-CELL-052;AOS-LEGAL-013
**Related tasks:** none

**Outcome.** Select supported cellular claims and investment based on module, data/SMS, eSIM, voice/IMS, emergency, certification, cost and partner evidence.

**Scope.** Produce and integrate: cellular gate packet; supported claim level; partner/certification budget; unsupported/fallback behavior; stop/revisit criteria. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep Linux reference APIs and vendor protocols behind native Agent OS cellular services; data, SMS, eSIM, voice, IMS, and emergency support remain separate claims.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Decision never labels VoIP as native carrier telephony and names emergency/certification limitations explicitly
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** cellular gate packet; supported claim level; partner/certification budget; unsupported/fallback behavior; stop/revisit criteria
**Verification:** product, cellular, legal, regulatory, security and program review
**Evidence:** signed decision; evidence links; public wording; updated roadmap
**Traceability:** specs: AOS-PLAN-006#cellular-and-voice-criteria;AOS-HW-007#product-claim-levels; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="track-aos-comm"></a>

### AOS-COMM

<a id="task-aos-comm-000"></a>

#### AOS-COMM-000 — Community and Ecosystem epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Community Lead · Program
**Schedule:** 2026-07-13 → 2030-01-20 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Build contributor governance, partnerships, funding, and reproducible community hardware support.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-GOV-002#community-principles; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-001"></a>

#### AOS-COMM-001 — Ratify governance and specification lifecycle

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** Community/Governance Lead · Governance
**Schedule:** 2026-07-13 → 2026-08-09 · 8 estimated days · M0
**Parent:** AOS-COMM-000
**Dependencies:** none
**Related tasks:** AOS-LEGAL-001;AOS-DOCS-012

**Outcome.** Establish decision authority, maintainer roles, change states, review requirements, conflicts, succession and public transparency.

**Scope.** Produce and integrate: governance charter; steering/maintainer scopes; decision/appeal/conflict rules; lifecycle policy. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Decision authority and succession are explicit and no single actor can silently change license, trust roots or accepted architecture
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** governance charter; steering/maintainer scopes; decision/appeal/conflict rules; lifecycle policy
**Verification:** founder/core-team/legal review and two simulated architecture/community disputes
**Evidence:** ratified charter; role registry; exercise findings
**Traceability:** specs: AOS-GOV-001#document-states;AOS-GOV-002#maintainer-model; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-002"></a>

#### AOS-COMM-002 — Adopt code of conduct and moderation process

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Community Lead · Governance
**Schedule:** 2026-07-13 → 2026-08-02 · 5 estimated days · M0
**Parent:** AOS-COMM-000
**Dependencies:** none
**Related tasks:** AOS-COMM-001;AOS-LEGAL-001

**Outcome.** Create enforceable participation, reporting, moderation, appeal, privacy and conflict-of-interest rules for technical and community spaces.

**Scope.** Produce and integrate: code of conduct; reporting channels; response roles; moderation/appeal/confidentiality process. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Reports have confidential intake, accountable response, appeal path and separation from technical gate authority
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** code of conduct; reporting channels; response roles; moderation/appeal/confidentiality process
**Verification:** scenario review including harassment, unsafe instructions, provenance evasion and vendor conflict
**Evidence:** approved policy; moderator roster/training; exercise notes
**Traceability:** specs: AOS-GOV-002#decision-and-conduct; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-003"></a>

#### AOS-COMM-003 — Publish contributor onboarding, DCO, and clean-room disclosure flow

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Developer Relations Lead · Contributors
**Schedule:** 2026-07-20 → 2026-08-23 · 10 estimated days · M0
**Parent:** AOS-COMM-000
**Dependencies:** none
**Related tasks:** AOS-COMM-001;AOS-LEGAL-003;AOS-LEGAL-005;AOS-DOCS-011

**Outcome.** Enable lawful, secure, architecture-aligned contributions with explicit source provenance and proprietary-exposure handling.

**Scope.** Produce and integrate: CONTRIBUTING; DCO check; source/proprietary exposure form; clean-room routing; issue/PR templates; reviewer map. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A contributor can determine permitted sources/tasks and disallowed/uncertain contributions are blocked before merge
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** CONTRIBUTING; DCO check; source/proprietary exposure form; clean-room routing; issue/PR templates; reviewer map
**Verification:** new-contributor walkthrough and seeded missing signoff/unknown source/taint cases
**Evidence:** onboarding report; CI results; routed scenario records
**Traceability:** specs: AOS-GOV-002#contribution-path;AOS-LEGAL-002#contributor-onboarding;AOS-LEGAL-003#contributions; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-004"></a>

#### AOS-COMM-004 — Publish evidence-based public roadmap and support labels

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Community Lead · Communications
**Schedule:** 2026-08-03 → 2026-09-06 · 6 estimated days · M1
**Parent:** AOS-COMM-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-012;AOS-COMM-001

**Outcome.** Expose funded/owned work, hypotheses, gates, target support, limitations and stop decisions without promising unsupported phone features.

**Scope.** Produce and integrate: public roadmap view; support-level definitions; limitations dashboard; claim/experiment links; update cadence. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every public target/feature is labelled Reference/Maintained/Community/Experimental/Retired and ties to evidence or explicit hypothesis
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** public roadmap view; support-level definitions; limitations dashboard; claim/experiment links; update cadence
**Verification:** architecture/product/legal review and reader comprehension sample
**Evidence:** published preview; review record; corrected ambiguity list
**Traceability:** specs: AOS-GOV-002#community-principles;AOS-PLAN-006#release-language; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-010"></a>

#### AOS-COMM-010 — Build documentation site and Wiki publication pipeline

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Documentation/Web Lead · Documentation
**Schedule:** 2026-08-10 → 2026-10-18 · 15 estimated days · M2
**Parent:** AOS-COMM-000
**Dependencies:** AOS-DOCS-011
**Related tasks:** AOS-COMM-003;AOS-LEGAL-002

**Outcome.** Publish searchable linked specifications, glossary, prior art, tasks, evidence and onboarding while keeping Git source authoritative.

**Scope.** Produce and integrate: site/wiki generator; navigation/search; version selector; xref/link validation; generated notices; deployment/release process. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Public pages preserve canonical IDs/anchors and clearly identify generated status/version and non-final working name
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** site/wiki generator; navigation/search; version selector; xref/link validation; generated notices; deployment/release process
**Verification:** build from clean source, crawl links, test mobile/accessibility/search/versioned anchors
**Evidence:** site build; link/accessibility report; deployment manifest
**Traceability:** specs: AOS-META-001#publishing-flow;AOS-META-004#generated-artifacts; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-011"></a>

#### AOS-COMM-011 — Create contributor starter tasks and learning paths

**Type / priority / status:** Task · P2 · Backlog
**Owner / workstream:** Developer Relations Lead · Contributors
**Schedule:** 2027-03-22 → 2027-06-13 · 12 estimated days · M8
**Parent:** AOS-COMM-000
**Dependencies:** AOS-COMM-003;AOS-DOCS-006
**Related tasks:** AOS-PLAT-090

**Outcome.** Turn architecture, docs, tests, emulation and hardware evidence into safe bounded entry points by skill level.

**Scope.** Produce and integrate: starter issue set; kernel/platform/product/docs/hardware learning paths; mentor/reviewer assignment; expected evidence. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Starter tasks do not require private artifacts, have tests/acceptance, and leave an owned maintainable result
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** starter issue set; kernel/platform/product/docs/hardware learning paths; mentor/reviewer assignment; expected evidence
**Verification:** three external-style contributors complete different paths with measured friction
**Evidence:** onboarding timings; issue outcomes; documentation fixes; mentor capacity report
**Traceability:** specs: AOS-GOV-002#community-infrastructure;AOS-PLAN-003#completion-rules; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-020"></a>

#### AOS-COMM-020 — Run prioritized technical and vendor outreach campaign

**Type / priority / status:** Contact · P1 · Backlog
**Owner / workstream:** Partnerships Lead · Partnerships
**Schedule:** 2026-08-10 → 2027-04-18 · 15 estimated days · M5
**Parent:** AOS-COMM-000
**Dependencies:** AOS-DOCS-010;AOS-OPEN-001
**Related tasks:** AOS-LEGAL-011

**Outcome.** Contact capability experts, board/silicon vendors, open-phone communities, camera/modem vendors, labs and funding programs with precise asks.

**Scope.** Produce and integrate: contact dossiers; private contact register; outreach/follow-up; response/commitment matrix; fallback tasks. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every outreach has one owner, precise ask, desired artifact/agreement, deadline and fallback
- no personal/NDA data enters public docs
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** contact dossiers; private contact register; outreach/follow-up; response/commitment matrix; fallback tasks
**Verification:** monthly review of response quality, commitments, artifacts/restrictions and next actions
**Evidence:** public-safe outcome log; partner response score; agreements/tasks created
**Traceability:** specs: AOS-LEGAL-005#priority-contacts;AOS-LEGAL-005#contact-sequence; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-021"></a>

#### AOS-COMM-021 — Commission capability/microkernel architecture review

**Type / priority / status:** Contact · P1 · Backlog
**Owner / workstream:** Architecture Council · Expert Review
**Schedule:** 2026-11-30 → 2027-02-21 · 8 estimated days · M2
**Parent:** AOS-COMM-000
**Dependencies:** none
**Related tasks:** AOS-CORE-032;AOS-SEC-010;AOS-COMM-020

**Outcome.** Obtain expert feedback on object, capability, IPC, revocation, scheduling, resource and assurance semantics before public API stabilization.

**Scope.** Produce and integrate: review brief; model/code/evidence access; written findings; response/ADR changes; ongoing relationship proposal. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Critical semantics are reviewed outside the implementation team and disagreements become tests/ADRs rather than informal opinion
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** review brief; model/code/evidence access; written findings; response/ADR changes; ongoing relationship proposal
**Verification:** reviewer independence/qualifications and finding closure review
**Evidence:** review report; disposition matrix; API changes; public summary where allowed
**Traceability:** specs: AOS-ARCH-002#assurance-boundary;AOS-ARCH-004#security-properties; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-030"></a>

#### AOS-COMM-030 — Create grant and sponsor pipeline

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Funding Lead · Funding
**Schedule:** 2026-08-24 → 2027-01-10 · 10 estimated days · M3
**Parent:** AOS-COMM-000
**Dependencies:** AOS-COMM-001;AOS-DOCS-009
**Related tasks:** AOS-LEGAL-009

**Outcome.** Identify aligned public-interest, research, hardware and commercial funding with transparent scope, IP/governance and reporting cost.

**Scope.** Produce and integrate: funder database; eligibility/calendar; reusable proposal materials; conflict/IP checklist; application priorities. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No funding term controls license/trust/architecture secretly and every promised deliverable maps to owned tasks/gates
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** funder database; eligibility/calendar; reusable proposal materials; conflict/IP checklist; application priorities
**Verification:** review at least ten candidates and submit only evidence-backed scoped proposals
**Evidence:** pipeline; submissions/results; reporting burden and conflict assessments
**Traceability:** specs: AOS-GOV-003#funding-sources;AOS-GOV-003#transparency; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-031"></a>

#### AOS-COMM-031 — Adopt sponsorship and commercial-conflict policy

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Governance/Legal Lead · Funding
**Schedule:** 2026-08-24 → 2026-10-18 · 6 estimated days · M3
**Parent:** AOS-COMM-000
**Dependencies:** AOS-COMM-001;AOS-LEGAL-001
**Related tasks:** none

**Outcome.** Define disclosure, recusal, technical independence, branding, data, exclusivity and public-reporting rules for sponsors and partners.

**Scope.** Produce and integrate: sponsor policy; agreement checklist; disclosure/recusal register; prohibited control terms; public acknowledgement rules. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A sponsor cannot suppress evidence, alter support claims, obtain hidden roadmap priority or control security disclosure
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** sponsor policy; agreement checklist; disclosure/recusal register; prohibited control terms; public acknowledgement rules
**Verification:** tabletop vendor-funded target and security finding scenarios
**Evidence:** approved policy; exercise findings; disclosure template
**Traceability:** specs: AOS-GOV-003#funding-principles;AOS-GOV-003#transparency; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-040"></a>

#### AOS-COMM-040 — Launch bounded bounty program after review capacity exists

**Type / priority / status:** Task · P2 · Backlog
**Owner / workstream:** Community Funding Lead · Bounties
**Schedule:** 2027-08-09 → 2027-11-28 · 10 estimated days · M8
**Parent:** AOS-COMM-000
**Dependencies:** AOS-COMM-011;AOS-COMM-031;AOS-LEGAL-009
**Related tasks:** AOS-SEC-090

**Outcome.** Fund well-specified tests, drivers, tooling, documentation and experiments without incentivizing unsafe or legally uncertain work.

**Scope.** Produce and integrate: bounty policy/templates; review/payment/tax/sanctions flow; initial bounded bounties; maintainer assignments; dispute path. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Bounties have tests/evidence/legal source class and a maintainer
- Pixel/IMS/security-critical unknowns are excluded unless specifically reviewed
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** bounty policy/templates; review/payment/tax/sanctions flow; initial bounded bounties; maintainer assignments; dispute path
**Verification:** pilot two low-risk bounties through acceptance/payment/maintenance handoff
**Evidence:** pilot records; review hours; quality/maintenance outcomes; policy changes
**Traceability:** specs: AOS-GOV-003#bounty-policy;AOS-LEGAL-002#source-classes; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-050"></a>

#### AOS-COMM-050 — Establish hardware maintainer and CI specimen program

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Community Hardware Lead · Hardware Community
**Schedule:** 2027-06-14 → 2027-10-03 · 12 estimated days · M8
**Parent:** AOS-COMM-000
**Dependencies:** AOS-OPEN-001;AOS-COMM-001
**Related tasks:** AOS-PLAT-080

**Outcome.** Assign target owners, support levels, specimens, revisions, lab access, release tests, security/update responsibility and succession.

**Scope.** Produce and integrate: maintainer charter; target owner/revision/specimen registry; CI/lab schedule; support/deprecation process; access/safety training. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No target is Maintained without owner, tested specimen/revision, recovery, release tests, update path and successor/deprecation plan
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** maintainer charter; target owner/revision/specimen registry; CI/lab schedule; support/deprecation process; access/safety training
**Verification:** audit each maintained target and simulate maintainer departure/revision change/security update
**Evidence:** target ownership matrix; succession drill; support status dashboard
**Traceability:** specs: AOS-GOV-002#hardware-maintainers;AOS-HW-001#support-levels; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-060"></a>

#### AOS-COMM-060 — Run external community hardware-kit reproduction pilot

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Community Hardware Lead · Hardware Community
**Schedule:** 2029-01-22 → 2029-06-10 · 15 estimated days · M10
**Parent:** AOS-COMM-000
**Dependencies:** AOS-OPEN-060;AOS-COMM-050;AOS-PLAT-090;AOS-COMM-010
**Related tasks:** none

**Outcome.** Have independent maintainers build, flash, boot, test, update and recover the selected kit from public documentation and tools.

**Scope.** Produce and integrate: pilot cohort; kits or purchase guidance; onboarding support; issue/reproduction metrics; maintainer sign-off; revised docs. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- External participants reproduce supported outcomes without private help/artifacts and resulting maintenance ownership is explicit
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** pilot cohort; kits or purchase guidance; onboarding support; issue/reproduction metrics; maintainer sign-off; revised docs
**Verification:** EXP-090 by multiple independent environments and at least one non-core maintainer
**Evidence:** onboarding/test/recovery logs; issue statistics; EXP-090 record
**Traceability:** specs: AOS-GOV-002#hardware-maintainers;AOS-HW-008#community-reference-kit; sources: none; claims: CLM-021; experiments: EXP-090
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-070"></a>

#### AOS-COMM-070 — Establish translation and accessibility contribution workflow

**Type / priority / status:** Task · P2 · Backlog
**Owner / workstream:** Localization/Accessibility Community Lead · Inclusive Community
**Schedule:** 2027-08-09 → 2027-12-12 · 10 estimated days · M8
**Parent:** AOS-COMM-000
**Dependencies:** AOS-PROD-070;AOS-COMM-003
**Related tasks:** AOS-PROD-071

**Outcome.** Enable reviewed translations, terminology, pseudolocalization fixes, accessibility audits and assistive-technology contributions with safe release ownership.

**Scope.** Produce and integrate: translation platform/process; glossary/term memory; review roles; accessibility issue templates; locale release gates. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Safety/recovery/legal language has qualified review and no locale is marked supported solely from machine translation
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** translation platform/process; glossary/term memory; review roles; accessibility issue templates; locale release gates
**Verification:** pilot two non-English locales and one assistive-technology contribution through release
**Evidence:** translation quality/review report; accessibility fix; contributor feedback
**Traceability:** specs: AOS-PROD-005#localization;AOS-PROD-005#acceptance-requirements; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-080"></a>

#### AOS-COMM-080 — Publish security contact, safe-harbor, and researcher workflow

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Security Community Manager · Security Community
**Schedule:** 2026-09-07 → 2026-10-18 · 6 estimated days · M2
**Parent:** AOS-COMM-000
**Dependencies:** AOS-LEGAL-001
**Related tasks:** AOS-SEC-090;AOS-COMM-010

**Outcome.** Give researchers a clear private reporting and authorized-testing path aligned with incident response and legal constraints.

**Scope.** Produce and integrate: security.txt; contact/key; supported-scope page; safe-harbor policy; acknowledgement/coordination templates. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Researchers can report privately, know authorized scope/response expectations, and reports reach accountable technical/security owners
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** security.txt; contact/key; supported-scope page; safe-harbor policy; acknowledgement/coordination templates
**Verification:** seed report from public page through triage and coordinated response
**Evidence:** exercise metrics; policy/legal approval; public page/archive
**Traceability:** specs: AOS-GOV-004#reporting-vulnerabilities;AOS-GOV-004#researcher-safe-harbor; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 04
**Specialist review:** none

<a id="task-aos-comm-090"></a>

#### AOS-COMM-090 — Prepare evidence-backed public project launch

**Type / priority / status:** Decision · P1 · Backlog
**Owner / workstream:** Program/Community Lead · Launch
**Schedule:** 2026-10-05 → 2026-12-13 · 12 estimated days · M2
**Parent:** AOS-COMM-000
**Dependencies:** AOS-LEGAL-002;AOS-COMM-003;AOS-COMM-004;AOS-CORE-010
**Related tasks:** AOS-COMM-010;AOS-COMM-080

**Outcome.** Publish the cleared brand, mission, architecture, limitations, governance, licenses, security contact, roadmap, starter paths and reproducible first artifact.

**Scope.** Produce and integrate: launch checklist/site/repositories; first reproducible image/test; press/FAQ; trademark/no-endorsement notices; limitations/support. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Publish only releasable evidence and distinguish funded ownership, maintained support, community support, and experiments.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Launch makes no phone/daily-driver/Pixel/carrier/security claim beyond evidence and contributors can reproduce the announced artifact
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** launch checklist/site/repositories; first reproducible image/test; press/FAQ; trademark/no-endorsement notices; limitations/support
**Verification:** legal/security/architecture/product/community launch review and external fresh-clone test
**Evidence:** signed launch decision; reproducibility result; claim audit; issue response plan
**Traceability:** specs: AOS-LEGAL-006#communications-standard;AOS-README#repository-artifacts; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-100"></a>

#### AOS-COMM-100 — Build the prioritized partner and specialist contact graph

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Partnerships Lead · Contact Acquisition
**Schedule:** 2026-08-10 → 2026-09-20 · 15 estimated days · M1
**Parent:** AOS-COMM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Build the prioritized partner and specialist contact graph.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-GOV-006#categories, AOS-LEGAL-005#contact-groups. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Build the prioritized partner and specialist contact graph; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-GOV-006#categories;AOS-LEGAL-005#priority-contacts; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-101"></a>

#### AOS-COMM-101 — Prepare role-specific outreach packets and evidence briefs

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Partnerships Lead · Outreach
**Schedule:** 2026-08-24 → 2026-10-04 · 15 estimated days · M1
**Parent:** AOS-COMM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Prepare role-specific outreach packets and evidence briefs.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-GOV-006#packet, AOS-PLAN-015#briefing. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Prepare role-specific outreach packets and evidence briefs; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-GOV-006#outreach;AOS-PLAN-015#briefing; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-102"></a>

#### AOS-COMM-102 — Recruit initial kernel, camera, hardware, legal, and documentation advisers

**Type / priority / status:** Contact · P0 · Planned
**Owner / workstream:** Project Lead · Adviser Network
**Schedule:** 2026-09-07 → 2026-11-15 · 25 estimated days · M2
**Parent:** AOS-COMM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Recruit initial kernel, camera, hardware, legal, and documentation advisers.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-GOV-006#prioritization, AOS-GOV-005#maintainers. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Recruit initial kernel, camera, hardware, legal, and documentation advisers; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-GOV-006#qualification;AOS-GOV-005#maintainers; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-103"></a>

#### AOS-COMM-103 — Publish an honest public roadmap and contribution boundary

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Community Lead · Community Launch
**Schedule:** 2027-10-18 → 2027-12-12 · 20 estimated days · M8
**Parent:** AOS-COMM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Publish an honest public roadmap and contribution boundary.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-GOV-005#launch-gates, AOS-GOV-005#roadmap. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Publish an honest public roadmap and contribution boundary; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-GOV-005#launch-gate;AOS-GOV-005#narrative; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="task-aos-comm-104"></a>

#### AOS-COMM-104 — Create university and research-lab collaboration proposals

**Type / priority / status:** Contact · P2 · Planned
**Owner / workstream:** Research Lead · Research Partnerships
**Schedule:** 2027-11-15 → 2028-02-06 · 30 estimated days · M10
**Parent:** AOS-COMM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Create university and research-lab collaboration proposals.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-GOV-006#categories, AOS-RES-009#reproduction. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Create university and research-lab collaboration proposals; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-GOV-006#categories;AOS-RES-009#reproduction; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 08
**Specialist review:** none

<a id="track-aos-core"></a>

### AOS-CORE

<a id="task-aos-core-000"></a>

#### AOS-CORE-000 — Microkernel Core epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Kernel Lead · Program
**Schedule:** 2026-07-13 → 2028-07-09 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Implement and assure the native Agent OS microkernel and architecture ports.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-ARCH-002#kernel-scope; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-001"></a>

#### AOS-CORE-001 — Freeze executable kernel semantics v0

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Lead · Kernel Semantics
**Schedule:** 2026-07-20 → 2026-08-16 · 12 estimated days · M1
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-012

**Outcome.** Translate kernel object, authority, lifecycle, error, concurrency, and resource rules into executable reference models and tests.

**Scope.** Produce and integrate: reference model; object/state diagrams; syscall draft; property catalog; unsafe invariants. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Objects, rights, lifetime, cancellation, errors, and resource ownership are unambiguous before implementation expands
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** reference model; object/state diagrams; syscall draft; property catalog; unsafe invariants
**Verification:** model review and property tests including invalid transitions
**Evidence:** model test report; approved semantics record
**Traceability:** specs: AOS-ARCH-002#kernel-objects;AOS-ARCH-004#capability-semantics;AOS-ADR-0001#decision; sources: SRC-001;SRC-002;SRC-003;SRC-007;SRC-008; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-002"></a>

#### AOS-CORE-002 — Establish freestanding Rust toolchain and target definitions

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Build Engineer · Build
**Schedule:** 2026-07-13 → 2026-08-02 · 8 estimated days · M1
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-001;AOS-LEGAL-012

**Outcome.** Produce reproducible no_std builds for AArch64 and x86-64 with controlled compiler/linker/runtime inputs.

**Scope.** Produce and integrate: toolchain manifest; target JSON; linker scripts; runtime stubs; container/runner; symbol artifacts. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A contributor can build both targets from a documented fresh environment without host libraries leaking into images
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** toolchain manifest; target JSON; linker scripts; runtime stubs; container/runner; symbol artifacts
**Verification:** clean builds on two runners with matching declared inputs and bootable images
**Evidence:** build manifests; hashes; compiler/linker versions; CI logs
**Traceability:** specs: AOS-ARCH-002#implementation-language;AOS-ARCH-015#reproducible-builds; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 4 · Volume 02
**Specialist review:** none

<a id="task-aos-core-010"></a>

#### AOS-CORE-010 — Boot Agent OS in QEMU AArch64

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** AArch64 Kernel Engineer · AArch64
**Schedule:** 2026-07-20 → 2026-08-23 · 12 estimated days · M1
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-002;AOS-CORE-001

**Outcome.** Reach deterministic structured early console, boot-info parsing, memory discovery, and controlled halt on the primary emulated architecture.

**Scope.** Produce and integrate: QEMU virt boot path; early console; boot manifest parser; panic/halt path; CI launcher. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- AArch64 image boots in CI, emits machine-parseable stages, rejects invalid descriptors, and halts without undefined reset loops
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** QEMU virt boot path; early console; boot manifest parser; panic/halt path; CI launcher
**Verification:** EXP-001 across repeated clean CI runs and malformed boot descriptors
**Evidence:** UART logs; build manifests; reproducibility comparison; EXP-001 record
**Traceability:** specs: AOS-ARCH-002#boot-and-architecture;AOS-ARCH-015#emulation; sources: none; claims: CLM-001; experiments: EXP-001
**Phase / volume:** Phase 5 · Volume 02
**Specialist review:** none

<a id="task-aos-core-011"></a>

#### AOS-CORE-011 — Boot Agent OS in QEMU x86-64

**Type / priority / status:** Experiment · P1 · Backlog
**Owner / workstream:** x86-64 Kernel Engineer · x86-64
**Schedule:** 2026-08-03 → 2026-09-13 · 12 estimated days · M1
**Parent:** AOS-CORE-000
**Dependencies:** AOS-CORE-002
**Related tasks:** AOS-CORE-010

**Outcome.** Prove architecture separation with a second ISA and the same kernel object/service semantics.

**Scope.** Produce and integrate: x86-64 boot/console/interrupt skeleton; shared architecture traits; conformance harness. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Both ISAs execute the same architecture-independent kernel tests and target-specific code remains under declared modules
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** x86-64 boot/console/interrupt skeleton; shared architecture traits; conformance harness
**Verification:** EXP-002 and source-dependency comparison against AArch64
**Evidence:** boot logs; architecture boundary report; EXP-002 record
**Traceability:** specs: AOS-ARCH-002#boot-and-architecture;AOS-ARCH-001#portability-test; sources: none; claims: CLM-002; experiments: EXP-002
**Phase / volume:** Phase 5 · Volume 02
**Specialist review:** none

<a id="task-aos-core-012"></a>

#### AOS-CORE-012 — Define boot handoff and platform description contract

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Architect · Boot
**Schedule:** 2026-07-27 → 2026-08-23 · 7 estimated days · M1
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-010

**Outcome.** Specify the trusted data passed from loader/firmware into the kernel without binding to one firmware or device tree representation.

**Scope.** Produce and integrate: boot handoff schema; memory/CPU/device seed records; integrity/version rules; parser tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- UEFI, device tree, board loader, or future secure loader can normalize into one versioned bounded handoff
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** boot handoff schema; memory/CPU/device seed records; integrity/version rules; parser tests
**Verification:** fuzz parser and adapt both QEMU architectures without changing kernel-neutral fields
**Evidence:** schema; fuzz report; compatibility test
**Traceability:** specs: AOS-ARCH-002#boot-and-architecture;AOS-ARCH-013#boot-chain; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-core-013"></a>

#### AOS-CORE-013 — Implement physical memory manager

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Memory Engineer · Memory
**Schedule:** 2026-08-03 → 2026-09-13 · 12 estimated days · M1
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-012

**Outcome.** Track usable, reserved, device, firmware, secure, persistent, and crash memory with bounded allocation behavior.

**Scope.** Produce and integrate: frame allocator; region database; reservation API; poisoning/debug modes; statistics. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No frame is simultaneously owned, reserved frames are never allocated, exhaustion is explicit, and statistics reconcile
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** frame allocator; region database; reservation API; poisoning/debug modes; statistics
**Verification:** property tests, exhaustion, overlap, fragmentation and malformed-map tests
**Evidence:** allocation invariant report; stress logs; memory map artifacts
**Traceability:** specs: AOS-ARCH-003#physical-memory;AOS-ARCH-012#memory-safety; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-014"></a>

#### AOS-CORE-014 — Implement virtual address spaces and mappings

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Memory Engineer · Memory
**Schedule:** 2026-08-10 → 2026-10-04 · 16 estimated days · M1
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-013

**Outcome.** Create architecture-independent address-space objects with explicit mapping rights, ownership, invalidation, and teardown.

**Scope.** Produce and integrate: address-space object; page-table backends; map/unmap/protect; shootdown hooks; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Mappings cannot exceed memory-object rights, stale translations are invalidated, and teardown returns every owned resource
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** address-space object; page-table backends; map/unmap/protect; shootdown hooks; tests
**Verification:** randomized mapping model comparison and permission/fault tests on both QEMU targets
**Evidence:** differential test report; fault traces; leak accounting
**Traceability:** specs: AOS-ARCH-003#address-spaces;AOS-ARCH-004#memory-capabilities; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-015"></a>

#### AOS-CORE-015 — Enter user mode and launch initial process

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Runtime Engineer · Processes
**Schedule:** 2026-08-24 → 2026-10-04 · 12 estimated days · M1
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-014;AOS-CORE-016

**Outcome.** Load a signed/test user image, create its address space and handles, enter user mode, and receive syscalls/exceptions safely.

**Scope.** Produce and integrate: image loader subset; initial process creation; user entry/exit; syscall ABI; startup handle table. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- User code cannot execute with kernel privilege, malformed images fail before execution, and startup authority is explicit
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** image loader subset; initial process creation; user entry/exit; syscall ABI; startup handle table
**Verification:** launch valid/invalid images, fault user code, and inspect isolation/crash artifacts
**Evidence:** user boot trace; invalid-image results; syscall conformance log
**Traceability:** specs: AOS-ARCH-003#process-model;AOS-ARCH-013#initial-system-image; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-016"></a>

#### AOS-CORE-016 — Implement exceptions, interrupts, timers, and CPU-local state

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Architecture Engineer · Architecture
**Schedule:** 2026-08-03 → 2026-09-20 · 15 estimated days · M1
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-010;AOS-CORE-011

**Outcome.** Handle synchronous faults, interrupts, timers, inter-processor hooks, and per-CPU state through bounded architecture backends.

**Scope.** Produce and integrate: vector/IDT code; exception frames; interrupt controller abstraction; monotonic timer; CPU-local storage. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Fault origin and recovery policy are explicit, timer is monotonic within contract, and unhandled interrupts cannot livelock silently
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** vector/IDT code; exception frames; interrupt controller abstraction; monotonic timer; CPU-local storage
**Verification:** inject each exception/IRQ class, timer wrap/bounds, nested/disabled states and malformed returns
**Evidence:** interrupt/fault matrix; latency samples; architecture review
**Traceability:** specs: AOS-ARCH-003#exceptions-and-interrupts;AOS-ARCH-003#time; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-core-017"></a>

#### AOS-CORE-017 — Implement kernel object and lifetime framework

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Runtime Engineer · Kernel Objects
**Schedule:** 2026-08-17 → 2026-09-27 · 12 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** AOS-CORE-001
**Related tasks:** AOS-CORE-013

**Outcome.** Provide typed reference-counted kernel objects with stable IDs, rights checks, wait signals, destruction, and diagnostic state.

**Scope.** Produce and integrate: object base; type registry; lifecycle hooks; signals; object stats; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Object destruction is deterministic under the contract, stale handles fail, and object resources reconcile after stress
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** object base; type registry; lifecycle hooks; signals; object stats; tests
**Verification:** lifetime/refcount/model properties, concurrent close/use, and leak detection
**Evidence:** object lifecycle report; sanitizer/model logs; object inventory
**Traceability:** specs: AOS-ARCH-002#kernel-objects;AOS-ARCH-004#object-rights; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-018"></a>

#### AOS-CORE-018 — Implement process and thread lifecycle

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Runtime Engineer · Processes
**Schedule:** 2026-08-31 → 2026-10-18 · 15 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-015;AOS-CORE-017

**Outcome.** Create, start, stop, kill, wait, inspect, and reap processes/threads with bounded authority and resources.

**Scope.** Produce and integrate: process/thread objects; lifecycle syscalls; exit reasons; parent/job ownership; reaper. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every lifecycle transition has one outcome, waiters observe consistent exit state, and terminated work cannot retain authority
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** process/thread objects; lifecycle syscalls; exit reasons; parent/job ownership; reaper
**Verification:** state-machine tests, concurrent kill/wait, crash storms, orphan/reaping and quota tests
**Evidence:** lifecycle trace; stress report; resource reconciliation
**Traceability:** specs: AOS-ARCH-003#process-model;AOS-ARCH-003#thread-model; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-020"></a>

#### AOS-CORE-020 — Prove user-process isolation and fault containment

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Kernel Security Engineer · Isolation
**Schedule:** 2026-09-14 → 2026-10-11 · 8 estimated days · M1
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-014;AOS-CORE-018

**Outcome.** Demonstrate that memory, illegal instruction, syscall, resource, and crash faults remain within defined process/job boundaries.

**Scope.** Produce and integrate: fault injector; adversarial user programs; kernel-integrity checks; crash evidence. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Faulting process terminates or receives a defined exception without reading/writing another address space or destabilizing kernel progress
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** fault injector; adversarial user programs; kernel-integrity checks; crash evidence
**Verification:** EXP-003 across both QEMU architectures
**Evidence:** fault traces; kernel/state integrity report; EXP-003 record
**Traceability:** specs: AOS-ARCH-003#fault-containment;AOS-ARCH-012#isolation-goals; sources: none; claims: CLM-001; experiments: EXP-003
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-021"></a>

#### AOS-CORE-021 — Implement monotonic time, deadlines, and timer objects

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Kernel Runtime Engineer · Time
**Schedule:** 2026-09-07 → 2026-10-11 · 9 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-016;AOS-CORE-017

**Outcome.** Expose monotonic clocks, bounded deadlines, cancellation, timer objects, and time-source quality to user space.

**Scope.** Produce and integrate: clock API; timer object; deadline queue; cancellation; calibration/quality fields. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Deadlines use one documented monotonic domain, cancellation has a defined race outcome, and timer resources are quota-accounted
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** clock API; timer object; deadline queue; cancellation; calibration/quality fields
**Verification:** ordering, cancellation races, overflow, suspend adjustment contract and load tests
**Evidence:** timer conformance; latency/error histograms; race test logs
**Traceability:** specs: AOS-ARCH-003#time;AOS-ARCH-007#time-service; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-022"></a>

#### AOS-CORE-022 — Implement baseline scheduler

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Scheduling Engineer · Scheduling
**Schedule:** 2026-09-21 → 2026-11-22 · 18 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-018;AOS-CORE-021

**Outcome.** Schedule runnable threads with bounded classes, fairness, affinity, accounting, preemption, and idle behavior.

**Scope.** Produce and integrate: run queues; priority/weight classes; preemption; affinity; CPU-time accounting; idle hooks. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Runnable work makes progress under policy, CPU accounting reconciles, and class/priority behavior is documented rather than accidental
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** run queues; priority/weight classes; preemption; affinity; CPU-time accounting; idle hooks
**Verification:** deterministic model tests plus fairness, starvation, latency and overload workloads
**Evidence:** scheduler traces; latency/fairness report; accounting reconciliation
**Traceability:** specs: AOS-ARCH-003#scheduler;AOS-ARCH-014#scheduler-energy-contract; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-023"></a>

#### AOS-CORE-023 — Implement synchronization primitives and futex-like wait

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Concurrency Engineer · Synchronization
**Schedule:** 2026-10-05 → 2026-11-22 · 14 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-021;AOS-CORE-022

**Outcome.** Provide minimal kernel-assisted blocking for user-space mutexes/conditions with cancellation and priority policy.

**Scope.** Produce and integrate: wait-on-word primitive; wake/requeue; robust cancellation; ownership metadata; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No lost wakeup under specified memory ordering, wait is tied to mapped ownership, and cancellation/exit cannot strand kernel resources
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** wait-on-word primitive; wake/requeue; robust cancellation; ownership metadata; tests
**Verification:** race model, lost-wakeup, ABA/address reuse, timeout, process exit and contention tests
**Evidence:** concurrency test report; scheduler traces; invariant notes
**Traceability:** specs: AOS-ARCH-003#synchronization;AOS-ARCH-003#priority-inversion; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-030"></a>

#### AOS-CORE-030 — Implement capability spaces and handle operations

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Capability Engineer · Capabilities
**Schedule:** 2026-09-14 → 2026-11-01 · 15 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-017;AOS-CORE-018

**Outcome.** Represent explicit per-process authority with typed handles, rights, duplication, transfer preparation, close, and introspection.

**Scope.** Produce and integrate: capability space; handle encoding; rights/type checks; duplicate/close; audit hooks; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Handles cannot be forged or widened, type/rights checks precede use, and table exhaustion/failure is bounded
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** capability space; handle encoding; rights/type checks; duplicate/close; audit hooks; tests
**Verification:** model comparison, stale/forged handles, concurrency, exhaustion and enumeration-authority tests
**Evidence:** capability conformance report; fuzz corpus; audit sample
**Traceability:** specs: AOS-ARCH-004#capability-semantics;AOS-ARCH-004#handle-tables; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-031"></a>

#### AOS-CORE-031 — Implement synchronous IPC channel and message transfer

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel IPC Engineer · IPC
**Schedule:** 2026-10-05 → 2026-11-29 · 18 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-030;AOS-CORE-023

**Outcome.** Transfer bounded typed bytes and capabilities between endpoints with clear ownership, cancellation, timeout, and peer-close behavior.

**Scope.** Produce and integrate: channel endpoint object; send/call/reply; handle transfer; buffers; cancellation; peer signals. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A handle has one defined owner after transfer, malformed messages cannot mutate authority, and blocked calls terminate under timeout/peer death
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** channel endpoint object; send/call/reply; handle transfer; buffers; cancellation; peer signals
**Verification:** message/handle fuzzing, races, peer death, timeout, quota and model tests
**Evidence:** IPC conformance; throughput/latency baseline; fault traces
**Traceability:** specs: AOS-ARCH-004#ipc-model;AOS-ARCH-005#wire-format; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-032"></a>

#### AOS-CORE-032 — Implement rights attenuation, delegation, and revocation model

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Kernel Capability Engineer · Capabilities
**Schedule:** 2026-10-26 → 2026-12-20 · 15 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** none
**Related tasks:** AOS-CORE-030;AOS-CORE-031

**Outcome.** Make delegated authority monotonically narrower and revoke future use according to an explicit scalable model.

**Scope.** Produce and integrate: attenuation rules; derivation/revocation objects; IPC integration; revocation cost/latency tests; policy docs. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No derivation gains rights, revocation has documented in-flight semantics, and completion/resource costs are bounded or explicitly limited
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** attenuation rules; derivation/revocation objects; IPC integration; revocation cost/latency tests; policy docs
**Verification:** EXP-004 property/model tests under concurrent use and deep delegation
**Evidence:** revocation trace; complexity/latency report; EXP-004 record
**Traceability:** specs: AOS-ARCH-004#delegation-and-attenuation;AOS-ARCH-004#revocation; sources: SRC-001;SRC-002;SRC-007;SRC-008; claims: none; experiments: EXP-004
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-core-033"></a>

#### AOS-CORE-033 — Implement wait sets and asynchronous notification objects

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Kernel IPC Engineer · IPC
**Schedule:** 2026-11-02 → 2026-12-20 · 12 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** AOS-CORE-021
**Related tasks:** AOS-CORE-031

**Outcome.** Allow services to wait on bounded sets of signals, interrupts, channels, timers, and lifecycle events without polling.

**Scope.** Produce and integrate: wait set/port object; registration tokens; edge/level policy; cancellation; batching; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Services can multiplex events without busy waiting and event delivery/cancellation semantics are deterministic
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** wait set/port object; registration tokens; edge/level policy; cancellation; batching; tests
**Verification:** lost/duplicate event, unregister race, peer death, overload and fairness tests
**Evidence:** event conformance report; stress traces; memory/accounting report
**Traceability:** specs: AOS-ARCH-004#waiting-and-signals;AOS-ARCH-007#event-loop; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-034"></a>

#### AOS-CORE-034 — Implement jobs, quotas, and resource accounting

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Runtime Engineer · Resources
**Schedule:** 2026-11-02 → 2026-12-20 · 14 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** AOS-CORE-018;AOS-CORE-030
**Related tasks:** AOS-CORE-022

**Outcome.** Bound processes and services by memory, handles, threads, IPC, CPU time and kernel-resource budgets.

**Scope.** Produce and integrate: job/resource domain; quota counters; inheritance; denial reasons; metrics; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every scarce kernel object is charged, denial is explicit, and termination/revocation returns charges without underflow/overflow
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** job/resource domain; quota counters; inheritance; denial reasons; metrics; tests
**Verification:** exhaust each resource, nested domains, concurrent charge/release, process death and accounting reconciliation
**Evidence:** quota test matrix; denial logs; leak report
**Traceability:** specs: AOS-ARCH-003#resource-accounting;AOS-ARCH-010#agent-budgets; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-035"></a>

#### AOS-CORE-035 — Enable symmetric multiprocessing and cross-CPU coordination

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Kernel Architecture Engineer · Symmetric Multiprocessing
**Schedule:** 2026-12-14 → 2027-03-21 · 25 estimated days · M3
**Parent:** AOS-CORE-000
**Dependencies:** AOS-CORE-022;AOS-CORE-023
**Related tasks:** AOS-CORE-034

**Outcome.** Run processes across multiple CPUs with correct interrupt routing, scheduling, TLB invalidation, object synchronization, and hot/offline policy.

**Scope.** Produce and integrate: CPU discovery/start; per-CPU queues; IPIs; shootdowns; lock strategy; stress tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No single-core assumptions remain in portable kernel code and multicore results preserve isolation/accounting invariants
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** CPU discovery/start; per-CPU queues; IPIs; shootdowns; lock strategy; stress tests
**Verification:** multicore stress, randomized scheduling, TLB/mapping races, CPU offline/failure injection
**Evidence:** Agent OS correctness report; race traces; scaling baseline
**Traceability:** specs: AOS-ARCH-003#aos-model;AOS-ARCH-003#address-spaces; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-036"></a>

#### AOS-CORE-036 — Validate IPC priority propagation and deadline behavior

**Type / priority / status:** Experiment · P1 · Backlog
**Owner / workstream:** Kernel Scheduling Engineer · Performance
**Schedule:** 2026-11-30 → 2027-01-17 · 12 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** AOS-CORE-022;AOS-CORE-031
**Related tasks:** AOS-CORE-033

**Outcome.** Prevent unbounded priority inversion and characterize IPC/scheduler latency under adversarial service graphs.

**Scope.** Produce and integrate: priority/deadline policy; adversarial workload generator; trace analysis; limits. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- The design bounds or explicitly rejects problematic call chains and reports violated deadlines/accounting accurately
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** priority/deadline policy; adversarial workload generator; trace analysis; limits
**Verification:** EXP-005 across nested calls, cancellation, overload and malicious servers
**Evidence:** latency histograms; dependency-chain traces; EXP-005 record
**Traceability:** specs: AOS-ARCH-003#priority-inversion;AOS-ARCH-004#ipc-scheduling; sources: SRC-010; claims: none; experiments: EXP-005
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-037"></a>

#### AOS-CORE-037 — Implement IOMMU and DMA ownership primitives

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Kernel I/O Engineer · I/O Security
**Schedule:** 2027-01-25 → 2027-04-18 · 20 estimated days · M3
**Parent:** AOS-CORE-000
**Dependencies:** AOS-CORE-014;AOS-CORE-030
**Related tasks:** AOS-CORE-035

**Outcome.** Give user-space driver domains safe, bounded DMA mappings and interrupt resources without general physical-memory authority.

**Scope.** Produce and integrate: DMA domain object; pinned memory; IOVA allocator; IOMMU backend hooks; cache/coherency contract; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A driver can DMA only to granted mappings and device/domain teardown revokes access before memory reuse
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** DMA domain object; pinned memory; IOVA allocator; IOMMU backend hooks; cache/coherency contract; tests
**Verification:** invalid DMA, teardown, device reset, concurrent mapping and no-IOMMU fallback policy tests
**Evidence:** DMA isolation report; IOMMU traces; residual-risk record
**Traceability:** specs: AOS-ARCH-006#dma-and-iommu;AOS-ARCH-012#dma-threat; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-038"></a>

#### AOS-CORE-038 — Implement structured crash records and kernel diagnostics

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Kernel Diagnostics Engineer · Diagnostics
**Schedule:** 2026-09-21 → 2026-11-01 · 10 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** AOS-CORE-016
**Related tasks:** AOS-CORE-018;AOS-CORE-034

**Outcome.** Produce bounded, privacy-aware crash evidence sufficient for remote debugging without requiring a live debugger.

**Scope.** Produce and integrate: crash record format; stack/symbol IDs; object/process summaries; persistent ring buffer; extraction tool. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Crash evidence identifies build/target/failure context, is bounded and extractable after reboot, and excludes unapproved payloads
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** crash record format; stack/symbol IDs; object/process summaries; persistent ring buffer; extraction tool
**Verification:** panic/process/interrupt/OOM crash scenarios and redaction/bounds tests
**Evidence:** sample crash bundles; size/overhead metrics; privacy review
**Traceability:** specs: AOS-ARCH-015#crash-evidence;AOS-ARCH-012#diagnostic-data; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-039"></a>

#### AOS-CORE-039 — Fuzz and property-test kernel syscall surface

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Kernel Verification Engineer · Assurance
**Schedule:** 2026-11-30 → 2027-04-18 · 20 estimated days · M3
**Parent:** AOS-CORE-000
**Dependencies:** AOS-CORE-020;AOS-CORE-038
**Related tasks:** AOS-CORE-032;AOS-CORE-034

**Outcome.** Continuously exercise syscall decoding, object lifecycle, IPC, memory mappings, handles, cancellation and quotas against executable models.

**Scope.** Produce and integrate: host/model fuzzers; in-VM syscall fuzzer; corpus; differential oracle; minimizer; CI tiers. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- All public syscalls have negative/fuzz coverage and every unique crash produces a minimized reproducible artifact
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** host/model fuzzers; in-VM syscall fuzzer; corpus; differential oracle; minimizer; CI tiers
**Verification:** seeded defects, coverage targets, crash deduplication and reproduction from corpus
**Evidence:** coverage/trend report; discovered/fixed defects; corpus manifest
**Traceability:** specs: AOS-ARCH-015#fuzzing;AOS-ARCH-002#assurance-boundary; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-core-040"></a>

#### AOS-CORE-040 — Freeze kernel API level 0 at capability vertical-slice gate

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** Architecture Council · API Governance
**Schedule:** 2027-01-18 → 2027-01-31 · 5 estimated days · M2
**Parent:** AOS-CORE-000
**Dependencies:** AOS-CORE-032;AOS-CORE-033;AOS-CORE-034;AOS-CORE-036
**Related tasks:** AOS-CORE-039;AOS-PLAT-012

**Outcome.** Approve the first coherent experimental kernel ABI only after object, IPC, resource, failure, and versioning semantics pass G2.

**Scope.** Produce and integrate: G2 packet; API-level manifest; compatibility/deprecation policy; residual risks; next-level proposal. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep policy, drivers, compatibility, filesystems, networking, graphics, and product behavior outside the minimal kernel boundary.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No ambient privilege, unbounded resource path, unresolved message-ownership ambiguity, or undocumented ABI enters API level 0
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** G2 packet; API-level manifest; compatibility/deprecation policy; residual risks; next-level proposal
**Verification:** architecture/security/platform review of evidence and independent rebuild
**Evidence:** signed gate decision; conformance bundle; rejected/deferred item list
**Traceability:** specs: AOS-GOV-001#api-levels;AOS-PLAN-006#technical-gates; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="track-aos-docs"></a>

### AOS-DOCS

<a id="task-aos-docs-000"></a>

#### AOS-DOCS-000 — Program Operations and Specifications epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Program Lead · Program
**Schedule:** 2026-07-13 → 2030-07-07 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Maintain normative specifications, evidence, task data, budgets, risks, gates, and publication.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-META-002#document-contract; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-001"></a>

#### AOS-DOCS-001 — Create repository and document topology

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Program Operations Lead · Documentation
**Schedule:** 2026-07-13 → 2026-07-19 · 3 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Create the authoritative repository layout, document IDs, templates, and ownership boundaries.

**Scope.** Produce and integrate: repository directories; CODEOWNERS; templates; README; document registry. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A fresh clone exposes every canonical area and no authoritative artifact exists only in a private tracker
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** repository directories; CODEOWNERS; templates; README; document registry
**Verification:** fresh-clone structure and ownership review
**Evidence:** tree listing; review record; validation log
**Traceability:** specs: AOS-META-004#target-layout;AOS-META-002#document-contract; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-002"></a>

#### AOS-DOCS-002 — Implement cross-reference and Wiki publishing convention

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Documentation Engineer · Documentation
**Schedule:** 2026-07-13 → 2026-07-26 · 5 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-001

**Outcome.** Make document and task links stable in Git repositories and transformable for GitHub Wiki publication.

**Scope.** Produce and integrate: xref syntax; link map; renderer; redirect rules; test fixtures. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Repository-relative links and machine xrefs resolve to the same target and explicit anchor
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** xref syntax; link map; renderer; redirect rules; test fixtures
**Verification:** render repository docs into flat Wiki preview and crawl links
**Evidence:** renderer log; broken-link count zero; sample redirects
**Traceability:** specs: AOS-META-001#xref-syntax;AOS-META-001#publishing-flow; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-003"></a>

#### AOS-DOCS-003 — Normalize source archive into normative specifications

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Lead Technical Writer · Documentation
**Schedule:** 2026-07-13 → 2026-08-02 · 10 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-001

**Outcome.** Extract valid requirements and evidence from the supplied archive without retaining contradictory historical narrative.

**Scope.** Produce and integrate: normalized specs; provenance note; supersession map; unresolved-claim list. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every retained requirement has a destination and every materially changed claim is represented normatively or in the claim register
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** normalized specs; provenance note; supersession map; unresolved-claim list
**Verification:** architecture and product reviewers sample every source family
**Evidence:** review checklist; mapping table; rejected/retained claim list
**Traceability:** specs: AOS-META-003#claim-discipline;AOS-GOV-001#change-types; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-004"></a>

#### AOS-DOCS-004 — Establish source and literature register

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Research Lead · Research
**Schedule:** 2026-07-13 → 2026-08-02 · 8 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-001

**Outcome.** Create a maintainable official-source register for architecture, hardware, legal, standards, tooling, and prior art.

**Scope.** Produce and integrate: source-register.yaml; annotated source table; freshness policy. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every time-sensitive or non-obvious planning fact cites an identified source with authority and scope limitation
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** source-register.yaml; annotated source table; freshness policy
**Verification:** URL/schema validation and authority/source-scope review
**Evidence:** source validation report; review comments
**Traceability:** specs: AOS-RES-002#source-register;AOS-META-003#source-record; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 04
**Specialist review:** none

<a id="task-aos-docs-005"></a>

#### AOS-DOCS-005 — Establish claim verification register

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Evidence Lead · Research
**Schedule:** 2026-07-20 → 2026-08-02 · 7 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-003;AOS-DOCS-004

**Outcome.** Convert assumptions and absolute statements into bounded, testable, state-controlled claims.

**Scope.** Produce and integrate: claim register; owner/gate mappings; change procedure. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every hypothesis has an experiment or decision task and every contradicted claim is absent from normative promises
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** claim register; owner/gate mappings; change procedure
**Verification:** review all hardware, camera, cellular, backup, agent, and portability claims
**Evidence:** claim coverage report; unowned-claim list zero
**Traceability:** specs: AOS-RES-003#claim-states;AOS-META-003#claim-discipline; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 04
**Specialist review:** none

<a id="task-aos-docs-006"></a>

#### AOS-DOCS-006 — Generate canonical task and import datasets

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Program Operations Lead · Planning
**Schedule:** 2026-07-20 → 2026-08-02 · 8 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** AOS-DOCS-001
**Related tasks:** AOS-DOCS-003

**Outcome.** Create tracker-neutral work data with detailed scope, acceptance, dependencies, dates, milestones, and specification links.

**Scope.** Produce and integrate: tasks.csv; Linear/GitHub imports; projects/milestones/dependencies CSVs; task catalog. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- All IDs are unique, all dependencies resolve without cycles, and each non-epic has detailed acceptance/evidence fields
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** tasks.csv; Linear/GitHub imports; projects/milestones/dependencies CSVs; task catalog
**Verification:** schema/dependency/date/xref validator and sample import reconciliation
**Evidence:** validation log; row counts; reconciliation sample
**Traceability:** specs: AOS-PLAN-009#canonical-schema;AOS-PLAN-008#import-flow; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-007"></a>

#### AOS-DOCS-007 — Implement document and task validators

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Build/Documentation Engineer · Tooling
**Schedule:** 2026-07-20 → 2026-08-02 · 6 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-002;AOS-DOCS-006

**Outcome.** Fail CI on broken cross-references, anchors, task edges, schema drift, weak required fields, and generated-artifact mismatch.

**Scope.** Produce and integrate: validate_docs.py; validate_tasks.py; CI workflow example; fixtures. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Validator detects unknown documents/anchors/tasks, cycles, duplicate IDs, invalid dates and missing acceptance evidence
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** validate_docs.py; validate_tasks.py; CI workflow example; fixtures
**Verification:** positive and intentionally broken fixture runs
**Evidence:** CI logs proving expected pass/fail cases
**Traceability:** specs: AOS-META-001#validation;AOS-PLAN-009#validation; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-008"></a>

#### AOS-DOCS-008 — Baseline roadmap, Gantt, milestones, and dependency model

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Program Lead · Planning
**Schedule:** 2026-07-20 → 2026-08-02 · 5 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-006

**Outcome.** Publish a dependency-driven multi-track schedule that can be rendered in Markdown and Linear.

**Scope.** Produce and integrate: Mermaid Gantt; milestone table; project date ranges; dependency view. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Milestones have dated exit evidence and no hardware target is the sole dependency for core/product progress
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** Mermaid Gantt; milestone table; project date ranges; dependency view
**Verification:** schedule consistency and critical-dependency review
**Evidence:** baseline schedule export; review decision
**Traceability:** specs: AOS-PLAN-002#gantt;AOS-PLAN-008#gantt-in-linear; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-009"></a>

#### AOS-DOCS-009 — Baseline budget, procurement, risk, and gate registers

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Program Lead · Program Controls
**Schedule:** 2026-07-20 → 2026-08-09 · 6 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-005;AOS-DOCS-008

**Outcome.** Tie money, equipment, risks, stop criteria, and funding tranches to evidence-producing work.

**Scope.** Produce and integrate: budget ranges; first order; risk register; gate packets; approval thresholds. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every first purchase and Critical/High risk maps to a task, owner, experiment/gate, and contingency
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** budget ranges; first order; risk register; gate packets; approval thresholds
**Verification:** finance/procurement/technical/legal review
**Evidence:** approved tranche; risk owner list; gate checklist
**Traceability:** specs: AOS-HW-009#budget-scenarios;AOS-PLAN-005#top-risks;AOS-PLAN-006#technical-gates; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 07
**Specialist review:** none

<a id="task-aos-docs-010"></a>

#### AOS-DOCS-010 — Publish executive briefing and onboarding path

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Program Lead · Documentation
**Schedule:** 2026-07-27 → 2026-08-02 · 3 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-003;AOS-DOCS-008;AOS-DOCS-009

**Outcome.** Provide a decision-ready summary and reading path for engineers, partners, counsel, funders, and contributors.

**Scope.** Produce and integrate: BRIEFING.md; README reading path; audience-specific links. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A reader can identify the decision, constraints, hardware tracks, first 90 days, budget range, legal boundary, and next gate without oral context
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** BRIEFING.md; README reading path; audience-specific links
**Verification:** review by architecture, product, hardware, security, legal, and community leads
**Evidence:** sign-off list; unresolved questions
**Traceability:** specs: AOS-BRIEF#executive-decision;AOS-README#start-here; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-011"></a>

#### AOS-DOCS-011 — Generate and review Wiki publication preview

**Type / priority / status:** Task · P2 · Backlog
**Owner / workstream:** Documentation Engineer · Publication
**Schedule:** 2026-07-27 → 2026-08-02 · 4 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** AOS-DOCS-002
**Related tasks:** AOS-DOCS-007;AOS-DOCS-010

**Outcome.** Create a flat GitHub-Wiki-compatible preview while preserving source IDs, anchors, links, and provenance.

**Scope.** Produce and integrate: wiki directory; Home page; sidebar/index; redirect map; publication report. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Generated Wiki has no broken internal link and contains a visible generated/non-authoritative notice
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** wiki directory; Home page; sidebar/index; redirect map; publication report
**Verification:** crawl all generated pages and compare xref targets to source
**Evidence:** publication report; link graph; file hash list
**Traceability:** specs: AOS-META-001#publishing-flow;AOS-META-004#generated-artifacts; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 10
**Specialist review:** none

<a id="task-aos-docs-012"></a>

#### AOS-DOCS-012 — Tag documentation baseline release

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** Program Lead · Publication
**Schedule:** 2026-08-03 → 2026-08-09 · 2 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** AOS-DOCS-004;AOS-DOCS-005;AOS-DOCS-006;AOS-DOCS-007;AOS-DOCS-011
**Related tasks:** none

**Outcome.** Bind the normative document set, task data, source/claim/experiment registers, and validation results to a release.

**Scope.** Produce and integrate: versioned archive; manifest; checksums; signed/tagged release plan. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- The archive rebuilds deterministically enough to reproduce all generated documents and CSV row counts
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** versioned archive; manifest; checksums; signed/tagged release plan
**Verification:** clean rebuild and validation from packaged source
**Evidence:** release manifest; checksums; validator outputs
**Traceability:** specs: AOS-GOV-001#release-baseline;AOS-MANIFEST#validation-status; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 10
**Specialist review:** none

<a id="task-aos-docs-013"></a>

#### AOS-DOCS-013 — Operate monthly documentation and tracker reconciliation

**Type / priority / status:** Review · P2 · Backlog
**Owner / workstream:** Program Operations Lead · Program Controls
**Schedule:** 2026-08-10 → 2030-07-07 · 2 estimated days · Continuous
**Parent:** AOS-DOCS-000
**Dependencies:** AOS-DOCS-012
**Related tasks:** none

**Outcome.** Detect drift among specifications, canonical CSV, GitHub, Linear, milestones, evidence, risks, and budgets.

**Scope.** Produce and integrate: monthly drift report; proposed source updates; orphaned/overdue relationship list. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Treat specifications and canonical data as generated/reviewed source artifacts with stable IDs, validation, and no undocumented tracker-only truth.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No P0/P1 issue, gate, risk, or accepted specification remains inconsistent across systems for more than one review cycle
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** monthly drift report; proposed source updates; orphaned/overdue relationship list
**Verification:** compare IDs, states, dates, dependencies and links across systems
**Evidence:** dated reconciliation report and approved changes
**Traceability:** specs: AOS-PLAN-008#agent-rules;AOS-GOV-001#release-baseline; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-020"></a>

#### AOS-DOCS-020 — Freeze and checksum the complete AgentOS/Agent OS source corpus

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Documentation Lead · Source Corpus
**Schedule:** 2026-07-13 → 2026-07-26 · 5 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Freeze and checksum the complete AgentOS/Agent OS source corpus.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-SRC-README#immutability, AOS-RES-005#authority. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Freeze and checksum the complete AgentOS/Agent OS source corpus; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-SRC-README#immutability;AOS-RES-005#authority; sources: AOS-SRC-NINDEX; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 01
**Specialist review:** none

<a id="task-aos-docs-021"></a>

#### AOS-DOCS-021 — Normalize the product vision into English source digests

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Product Research Lead · Source Normalization
**Schedule:** 2026-07-13 → 2026-08-02 · 8 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-020

**Outcome.** Normalize the product vision into English source digests.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-SRC-N001#product-thesis, AOS-SRC-N002#implications. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Normalize the product vision into English source digests; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-SRC-N001#thesis;AOS-SRC-N002#downstream; sources: AOS-SRC-N001;AOS-SRC-N002; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 01
**Specialist review:** none

<a id="task-aos-docs-022"></a>

#### AOS-DOCS-022 — Publish the source authority and conflict map

**Type / priority / status:** Review · P0 · Planned
**Owner / workstream:** Architecture Lead · Source Governance
**Schedule:** 2026-07-20 → 2026-08-09 · 8 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-020;AOS-DOCS-021

**Outcome.** Publish the source authority and conflict map.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-RES-005#authority, AOS-RES-005#conflicts. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Publish the source authority and conflict map; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-RES-005#authority;AOS-RES-005#conflicts; sources: AOS-SRC-NINDEX; claims: CLM-001; experiments: none
**Phase / volume:** Phase 0 · Volume 04
**Specialist review:** architecture;product

<a id="task-aos-docs-023"></a>

#### AOS-DOCS-023 — Define canonical cross-reference and anchor syntax

**Type / priority / status:** Decision · P0 · Planned
**Owner / workstream:** Documentation Lead · Documentation System
**Schedule:** 2026-07-13 → 2026-07-26 · 5 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-002

**Outcome.** Define canonical cross-reference and anchor syntax.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-META-001#xref-syntax, AOS-VAL-003#checks. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Define canonical cross-reference and anchor syntax; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-META-001#xref-syntax;AOS-VAL-003#checks; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 01
**Specialist review:** none

<a id="task-aos-docs-024"></a>

#### AOS-DOCS-024 — Build the ten-volume coverage and ownership matrix

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Program Lead · Documentation Program
**Schedule:** 2026-07-20 → 2026-08-09 · 8 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-022

**Outcome.** Build the ten-volume coverage and ownership matrix.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-PLAN-011#volumes, AOS-PLAN-011#completion. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Build the ten-volume coverage and ownership matrix; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-PLAN-011#volumes;AOS-PLAN-011#definition-of-done; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-025"></a>

#### AOS-DOCS-025 — Build the Phase 0–8 execution and gate matrix

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Program Lead · Program Model
**Schedule:** 2026-07-20 → 2026-08-09 · 8 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-024

**Outcome.** Build the Phase 0–8 execution and gate matrix.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-PLAN-010#phase-table, AOS-PLAN-010#gates. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Build the Phase 0–8 execution and gate matrix; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-PLAN-010#phase-table;AOS-PLAN-010#gates; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-026"></a>

#### AOS-DOCS-026 — Create the specialist review responsibility matrix

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Program Lead · Review Governance
**Schedule:** 2026-07-27 → 2026-08-16 · 8 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-024

**Outcome.** Create the specialist review responsibility matrix.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-PLAN-015#reviews, AOS-VAL-003#review-status. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Create the specialist review responsibility matrix; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-PLAN-015#weekly;AOS-VAL-003#review-status; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-027"></a>

#### AOS-DOCS-027 — Validate glossary definitions and exact usage references

**Type / priority / status:** Review · P1 · Planned
**Owner / workstream:** Technical Editor · Knowledge Base
**Schedule:** 2026-07-27 → 2026-08-23 · 10 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-023

**Outcome.** Validate glossary definitions and exact usage references.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-GLOSSARY#how-to-use, AOS-VAL-003#checks. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Validate glossary definitions and exact usage references; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-GLOSSARY#how-to-use;AOS-VAL-003#checks; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 09
**Specialist review:** none

<a id="task-aos-docs-028"></a>

#### AOS-DOCS-028 — Generate and verify GitHub Wiki publication views

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Documentation Lead · Publishing
**Schedule:** 2027-10-04 → 2027-11-07 · 12 estimated days · M8
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-023

**Outcome.** Generate and verify GitHub Wiki publication views.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-META-001#publishing-flow, AOS-VAL-003#publication. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Generate and verify GitHub Wiki publication views; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-META-001#publishing-flow;AOS-VAL-003#publication; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 10
**Specialist review:** none

<a id="task-aos-docs-029"></a>

#### AOS-DOCS-029 — Implement canonical task-to-spec-to-claim traceability

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Program Data Lead · Traceability
**Schedule:** 2026-07-27 → 2026-08-23 · 10 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-025

**Outcome.** Implement canonical task-to-spec-to-claim traceability.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-PLAN-009#canonical-schema, AOS-VAL-003#checks, AOS-RES-010#matrix. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Implement canonical task-to-spec-to-claim traceability; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-PLAN-009#canonical-schema;AOS-VAL-003#checks;AOS-RES-010#matrix; sources: none; claims: none; experiments: EXP-109
**Phase / volume:** Phase 0 · Volume 10
**Specialist review:** program-data

<a id="task-aos-docs-030"></a>

#### AOS-DOCS-030 — Define public, internal, restricted, and counsel evidence bundles

**Type / priority / status:** Decision · P0 · Planned
**Owner / workstream:** Security and Legal Leads · Evidence Governance
**Schedule:** 2026-07-20 → 2026-08-16 · 10 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-020

**Outcome.** Define public, internal, restricted, and counsel evidence bundles.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-VAL-002#integrity, AOS-ARCH-018#taint. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Define public, internal, restricted, and counsel evidence bundles; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-VAL-002#integrity;AOS-ARCH-018#taint; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 10
**Specialist review:** security;legal

<a id="task-aos-docs-031"></a>

#### AOS-DOCS-031 — Package the Foundation release with reproducible validation

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Release Engineer · Release Packaging
**Schedule:** 2026-08-03 → 2026-08-16 · 5 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-023;AOS-DOCS-029;AOS-DOCS-030

**Outcome.** Package the Foundation release with reproducible validation.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-VAL-003#publication, AOS-PLAN-016#operation. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Package the Foundation release with reproducible validation; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-VAL-003#publication;AOS-PLAN-016#workflow; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 10
**Specialist review:** none

<a id="task-aos-docs-032"></a>

#### AOS-DOCS-032 — Reconcile Linear and GitHub imports against canonical task IDs

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Program Automation Engineer · Tracker Automation
**Schedule:** 2026-08-03 → 2026-08-23 · 8 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-029

**Outcome.** Reconcile Linear and GitHub imports against canonical task IDs.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-PLAN-014#reconciliation, AOS-PLAN-009#validation. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Reconcile Linear and GitHub imports against canonical task IDs; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-PLAN-014#reconciliation;AOS-PLAN-009#validation; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 06
**Specialist review:** none

<a id="task-aos-docs-033"></a>

#### AOS-DOCS-033 — Create paragraph-level source citations for normalized digests

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Research Librarian · Source Traceability
**Schedule:** 2026-08-03 → 2026-09-06 · 12 estimated days · M1
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-021;AOS-DOCS-023

**Outcome.** Create paragraph-level source citations for normalized digests.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-SRC-NINDEX#normalized-source-digests, AOS-RES-002#source-register. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Create paragraph-level source citations for normalized digests; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-SRC-NINDEX#digests;AOS-RES-002#source-register; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 04
**Specialist review:** none

<a id="task-aos-docs-034"></a>

#### AOS-DOCS-034 — Audit normative documents for transient narrative and unsupported absolutes

**Type / priority / status:** Review · P0 · Planned
**Owner / workstream:** Technical Editor · Editorial Assurance
**Schedule:** 2026-08-03 → 2026-08-30 · 10 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-022

**Outcome.** Audit normative documents for transient narrative and unsupported absolutes.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-VAL-003#editorial, AOS-META-002#document-contract. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Audit normative documents for transient narrative and unsupported absolutes; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-VAL-003#editorial;AOS-META-002#document-contract; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 10
**Specialist review:** none

<a id="task-aos-docs-035"></a>

#### AOS-DOCS-035 — Publish the project briefing, first steps, budget, and purchase gates

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Program Lead · Briefing
**Schedule:** 2026-07-27 → 2026-08-16 · 8 estimated days · M0
**Parent:** AOS-DOCS-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-025

**Outcome.** Publish the project briefing, first steps, budget, and purchase gates.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-BRIEF#executive-decision, AOS-PLAN-013#first-thirty-days. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Publish the project briefing, first steps, budget, and purchase gates; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-BRIEF#executive-decision;AOS-PLAN-013#first-30; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 01
**Specialist review:** none

<a id="track-aos-legal"></a>

### AOS-LEGAL

<a id="task-aos-legal-000"></a>

#### AOS-LEGAL-000 — Legal, IP, and Compliance epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Legal/Compliance Lead · Program
**Schedule:** 2026-07-13 → 2030-01-20 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Establish lawful research, provenance, contracts, branding, and certification paths.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-LEGAL-001#legal-workstreams; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-001"></a>

#### AOS-LEGAL-001 — Establish entity, IP ownership, and confidentiality baseline

**Type / priority / status:** Review · P0 · Backlog
**Owner / workstream:** Legal/Compliance Lead · IP Foundation
**Schedule:** 2026-07-13 → 2026-08-02 · 5 estimated days · M0
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-001

**Outcome.** Ensure founders, employees, contractors, repositories, domains, and project assets have clear ownership and authority.

**Scope.** Produce and integrate: entity/ownership checklist; assignment templates; contractor terms; confidentiality and asset authority map. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every person and entity able to contribute or contract has an explicit IP/confidentiality path before material work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** entity/ownership checklist; assignment templates; contractor terms; confidentiality and asset authority map
**Verification:** qualified counsel review and signed/recorded instruments
**Evidence:** privileged legal completion record; public-safe policy summary
**Traceability:** specs: AOS-LEGAL-001#legal-workstreams;AOS-LEGAL-003#contributions; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-002"></a>

#### AOS-LEGAL-002 — Conduct trademark and naming clearance

**Type / priority / status:** Review · P0 · Backlog
**Owner / workstream:** Trademark Counsel · Brand
**Schedule:** 2026-07-13 → 2026-08-23 · 4 estimated days · M0
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** AOS-LEGAL-001

**Outcome.** Clear a final or fallback project mark and prevent public use of AgentOS or another conflicting designation.

**Scope.** Produce and integrate: knockout search; professional search scope; mark shortlist; namespace/domain plan; usage restrictions. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Public identity uses an approved mark or explicitly remains private/working, and prohibited names are removed from publication artifacts
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** knockout search; professional search scope; mark shortlist; namespace/domain plan; usage restrictions
**Verification:** counsel opinion and program decision
**Evidence:** privileged opinion reference; approved public naming record
**Traceability:** specs: AOS-LEGAL-006#clearance-process;AOS-ADR-0006#decision; sources: SRC-021; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-003"></a>

#### AOS-LEGAL-003 — Approve project licenses, DCO, and contribution terms

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** Open Source Counsel · Open Source
**Schedule:** 2026-07-13 → 2026-08-09 · 5 estimated days · M0
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** AOS-LEGAL-001

**Outcome.** Select compatible licenses and contributor certification before accepting public code, specifications, hardware files, or data.

**Scope.** Produce and integrate: license ADR; DCO policy; contribution guide clauses; hardware/docs license matrix. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every canonical artifact class has a declared license/provenance rule and contribution route
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** license ADR; DCO policy; contribution guide clauses; hardware/docs license matrix
**Verification:** counsel and governance approval plus repository checks
**Evidence:** decision record; license files; DCO test
**Traceability:** specs: AOS-LEGAL-003#licensing-baseline;AOS-LEGAL-003#contributions; sources: SRC-060;SRC-063;SRC-064;SRC-066;SRC-067;SRC-068; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-004"></a>

#### AOS-LEGAL-004 — Implement source and artifact provenance controls

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Open Source Program Manager · Open Source
**Schedule:** 2026-07-20 → 2026-08-16 · 8 estimated days · M0
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** AOS-LEGAL-003;AOS-DOCS-004

**Outcome.** Prevent unknown, leaked, unlicensed, or non-redistributable material from contaminating public implementation and releases.

**Scope.** Produce and integrate: source classes; artifact inventory; REUSE/SPDX rules; binary/firmware record; quarantine procedure. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Unknown-provenance and disallowed artifacts fail merge/release and have a controlled escalation path
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** source classes; artifact inventory; REUSE/SPDX rules; binary/firmware record; quarantine procedure
**Verification:** scan seeded fixtures and sample imported dependencies/assets
**Evidence:** provenance audit; quarantine exercise; CI report
**Traceability:** specs: AOS-LEGAL-003#provenance-record;AOS-META-003#source-record; sources: SRC-060;SRC-061;SRC-062; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-005"></a>

#### AOS-LEGAL-005 — Approve clean-room interoperability protocol

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** IP/Interoperability Counsel · Reverse Engineering
**Schedule:** 2026-07-20 → 2026-08-23 · 8 estimated days · M0
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** AOS-LEGAL-001;AOS-LEGAL-004

**Outcome.** Create role-separated lawful methods for undocumented protocol and hardware behavior work.

**Scope.** Produce and integrate: clean-room policy; role/eligibility forms; observation/specification templates; artifact controls; stop rules. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No protected-protocol task can begin without source class, method, roles, publication rule, and counsel/accountable approval
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** clean-room policy; role/eligibility forms; observation/specification templates; artifact controls; stop rules
**Verification:** tabletop exercise using a fictional protocol and contributor-taint scenario
**Evidence:** counsel approval; exercise findings; public-safe protocol
**Traceability:** specs: AOS-LEGAL-002#workflow;AOS-LEGAL-002#source-classes; sources: SRC-052;SRC-053; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-006"></a>

#### AOS-LEGAL-006 — Review device terms, acquisition, unlock, and firmware use

**Type / priority / status:** Review · P0 · Backlog
**Owner / workstream:** Technology Transactions Counsel · Device Research
**Schedule:** 2026-07-27 → 2026-09-20 · 7 estimated days · M1
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** AOS-LEGAL-005;AOS-OPEN-003

**Outcome.** Define permissible purchase, unlock, restoration, firmware, warranty, redistribution, and publication behavior for every phone track.

**Scope.** Produce and integrate: per-device terms matrix; approved methods; firmware/artifact handling; resale/return/warranty guidance. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every acquired phone has an approved research and artifact-handling path before modification
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** per-device terms matrix; approved methods; firmware/artifact handling; resale/return/warranty guidance
**Verification:** counsel review of exact SKU/source/terms and engineering procedure
**Evidence:** public-safe device boundary record; privileged legal references
**Traceability:** specs: AOS-LEGAL-001#device-and-protocol-work;AOS-HW-001#target-dossier; sources: SRC-019;SRC-020;SRC-027;SRC-028;SRC-029;SRC-031; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 04
**Specialist review:** none

<a id="task-aos-legal-007"></a>

#### AOS-LEGAL-007 — Approve Pixel 9 research boundary

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** IP/Interoperability Counsel · Pixel Legal
**Schedule:** 2026-08-03 → 2026-09-27 · 6 estimated days · M1
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** AOS-LEGAL-006;AOS-P9-001

**Outcome.** Authorize only the minimum Android/Linux stock-oracle, trace, sidecar, recovery, and feasibility uses that can be lawfully supported.

**Scope.** Produce and integrate: method matrix; source classes; team separation decision; publication/trace rules; adapter retirement obligations. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Each Pixel task identifies allowed inputs, implementer eligibility, output restrictions, and stop condition before execution
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** method matrix; source classes; team separation decision; publication/trace rules; adapter retirement obligations
**Verification:** counsel and architecture review against proposed Pixel experiments
**Evidence:** approved boundary record; blocked-method list
**Traceability:** specs: AOS-LEGAL-002#pixel-application;AOS-HW-002#allowed-legacy-uses; sources: SRC-019;SRC-020;SRC-021;SRC-052;SRC-053; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 04
**Specialist review:** none

<a id="task-aos-legal-008"></a>

#### AOS-LEGAL-008 — Create privacy, telemetry, biometrics, and user-study framework

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Privacy Counsel / DPO · Privacy
**Schedule:** 2026-09-07 → 2026-11-29 · 10 estimated days · M2
**Parent:** AOS-LEGAL-000
**Dependencies:** AOS-LEGAL-001
**Related tasks:** AOS-SEC-050

**Outcome.** Define lawful and privacy-preserving handling of semantic history, diagnostics, agent evaluation, biometrics, and research participants.

**Scope.** Produce and integrate: data map; retention/deletion policy; consent/notice templates; DPIA triggers; processor/transfer controls; user-study protocol. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No user study or diagnostic sync begins without data purpose, minimization, retention, access, deletion, and incident ownership
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** data map; retention/deletion policy; consent/notice templates; DPIA triggers; processor/transfer controls; user-study protocol
**Verification:** privacy/security/product review and tabletop data-subject request
**Evidence:** data inventory; review record; deletion/export test result
**Traceability:** specs: AOS-LEGAL-001#privacy-and-product-claims;AOS-PROD-002#privacy-controls;AOS-ARCH-012#sensitive-data; sources: SRC-057; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-009"></a>

#### AOS-LEGAL-009 — Establish export, sanctions, cryptography, and bounty screening

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Trade Compliance Counsel · Trade Compliance
**Schedule:** 2026-09-07 → 2026-11-15 · 6 estimated days · M2
**Parent:** AOS-LEGAL-000
**Dependencies:** AOS-LEGAL-001
**Related tasks:** AOS-COMM-030

**Outcome.** Control code/device/cryptography exports, restricted parties, contractor access, grants, and payments.

**Scope.** Produce and integrate: jurisdiction/party screening workflow; release checklist; encryption classification record; payment controls. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Releases and paid contributions have documented destination, party, encryption, and escalation checks
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** jurisdiction/party screening workflow; release checklist; encryption classification record; payment controls
**Verification:** sample release and bounty tabletop across two jurisdictions
**Evidence:** screening logs; exception/escalation procedure
**Traceability:** specs: AOS-LEGAL-001#jurisdiction-matrix;AOS-GOV-003#funding-sources; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-010"></a>

#### AOS-LEGAL-010 — Build regulatory and certification market matrix

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Regulatory Lead · Regulatory
**Schedule:** 2026-12-28 → 2027-04-18 · 12 estimated days · M3
**Parent:** AOS-LEGAL-000
**Dependencies:** AOS-LEGAL-001;AOS-CELL-001
**Related tasks:** AOS-ODM-011

**Outcome.** Map radio, safety, environmental, privacy, cybersecurity, accessibility, carrier, battery, and consumer obligations by product stage and market.

**Scope.** Produce and integrate: US/EU initial matrix; stage checklist; variant/change-control rules; evidence-file skeleton. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Each intended device stage and market has an accountable requirement owner and no radio/cellular claim relies on module certification alone
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** US/EU initial matrix; stage checklist; variant/change-control rules; evidence-file skeleton
**Verification:** regulatory counsel and accredited-lab consultation
**Evidence:** reviewed matrix; assumptions/open questions; lab notes
**Traceability:** specs: AOS-LEGAL-004#market-matrix;AOS-LEGAL-004#development-stages; sources: SRC-050;SRC-051;SRC-054;SRC-055;SRC-056;SRC-057; claims: none; experiments: none
**Phase / volume:** Phase 3 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-011"></a>

#### AOS-LEGAL-011 — Create vendor, partner, NDA, and documentation agreement playbook

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Technology Transactions Counsel · Contracts
**Schedule:** 2026-08-10 → 2026-11-01 · 8 estimated days · M2
**Parent:** AOS-LEGAL-000
**Dependencies:** AOS-LEGAL-001
**Related tasks:** AOS-LEGAL-004

**Outcome.** Standardize technical asks and contract terms for silicon, board, camera, modem, lab, security, and manufacturing partners.

**Scope.** Produce and integrate: NDA review checklist; evaluation agreement; documentation/firmware/support clauses; artifact intake workflow. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Critical vendor dependencies have explicit rights for implementation, deployment, updates, publication, replacement, and termination assistance
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** NDA review checklist; evaluation agreement; documentation/firmware/support clauses; artifact intake workflow
**Verification:** apply playbook to two mock or live vendor engagements
**Evidence:** redline checklist; issue log; approved clause library
**Traceability:** specs: AOS-LEGAL-001#contract-principles;AOS-LEGAL-005#contract-asks; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-012"></a>

#### AOS-LEGAL-012 — Implement OSS/SBOM release compliance pipeline

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Open Source Program Manager · Open Source
**Schedule:** 2026-10-05 → 2026-12-27 · 10 estimated days · M2
**Parent:** AOS-LEGAL-000
**Dependencies:** AOS-LEGAL-003;AOS-LEGAL-004
**Related tasks:** AOS-SEC-060

**Outcome.** Automate per-file licensing, dependency review, SBOM, notices, source offers, provenance, and release approval.

**Scope.** Produce and integrate: CI policy; SPDX SBOM; notices/source-offer generator; exception workflow; audit dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A release cannot be produced with unknown license/provenance or missing required notices/source offers
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** CI policy; SPDX SBOM; notices/source-offer generator; exception workflow; audit dashboard
**Verification:** release a fixture with permissive, copyleft, binary and generated components
**Evidence:** SBOM; notices; policy pass/fail logs; exception record
**Traceability:** specs: AOS-LEGAL-003#compliance-tooling;AOS-ARCH-015#release-evidence; sources: SRC-059;SRC-060;SRC-061;SRC-062; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-013"></a>

#### AOS-LEGAL-013 — Obtain certification laboratory architecture consultation

**Type / priority / status:** Contact · P1 · Backlog
**Owner / workstream:** Regulatory Lead · Regulatory
**Schedule:** 2027-12-27 → 2028-03-19 · 5 estimated days · M9
**Parent:** AOS-LEGAL-000
**Dependencies:** AOS-LEGAL-010;AOS-CELL-002
**Related tasks:** AOS-ODM-021

**Outcome.** Validate the proposed module, antenna, battery, enclosure, software-update, and market assumptions before custom hardware freeze.

**Scope.** Produce and integrate: lab briefing; staged test plan; inheritance assumptions; budget/lead times; evidence requirements. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Product-hardware plan records which certifications can be inherited and which are invalidated by board/antenna/enclosure/software changes
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** lab briefing; staged test plan; inheritance assumptions; budget/lead times; evidence requirements
**Verification:** written lab response reviewed by hardware, cellular, security and legal leads
**Evidence:** consultation report; architecture changes; certification budget
**Traceability:** specs: AOS-LEGAL-004#evidence-package;AOS-HW-008#certification-readiness; sources: SRC-050;SRC-051;SRC-054;SRC-055; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-014"></a>

#### AOS-LEGAL-014 — Prepare ODM/JDM/EMS contract and IP responsibility matrix

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Commercial/Technology Counsel · ODM Contracts
**Schedule:** 2029-05-28 → 2029-11-11 · 12 estimated days · M11
**Parent:** AOS-LEGAL-000
**Dependencies:** AOS-LEGAL-011;AOS-LEGAL-010
**Related tasks:** AOS-ODM-060

**Outcome.** Define ownership, documentation, firmware, tooling, certification, quality, supply, security, and exit terms before an RFI.

**Scope.** Produce and integrate: RFI legal schedule; IP/tooling matrix; warranty/quality clauses; security/update obligations; termination/escrow options. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record jurisdiction, source class, privilege/publication boundary, and counsel or accountable review; do not infer legal permission from technical access.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- RFI can compare vendors on rights and lifecycle obligations without conceding portable interfaces or update control
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** RFI legal schedule; IP/tooling matrix; warranty/quality clauses; security/update obligations; termination/escrow options
**Verification:** cross-functional review and red-team of vendor-failure scenarios
**Evidence:** approved RFI attachments; risk acceptance record
**Traceability:** specs: AOS-HW-008#contract-requirements;AOS-LEGAL-005#contractual-and-technical-asks; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-020"></a>

#### AOS-LEGAL-020 — Retain software interoperability and reverse-engineering counsel

**Type / priority / status:** Contact · P0 · Planned
**Owner / workstream:** Legal Lead · Counsel
**Schedule:** 2026-07-20 → 2026-08-23 · 12 estimated days · M0
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Retain software interoperability and reverse-engineering counsel.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-LEGAL-008#counsel-questions, AOS-LEGAL-001#legal-workstreams. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Retain software interoperability and reverse-engineering counsel; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-LEGAL-008#matrix;AOS-LEGAL-001#legal-workstreams; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-021"></a>

#### AOS-LEGAL-021 — Run trademark clearance for Agent OS and naming candidates

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Trademark Counsel · Trademark
**Schedule:** 2026-07-20 → 2026-08-30 · 15 estimated days · M0
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Run trademark clearance for Agent OS and naming candidates.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-LEGAL-003#clearance-process, AOS-SRC-N005#decision. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Run trademark clearance for Agent OS and naming candidates; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-LEGAL-003#release-gate;AOS-SRC-N005#codename; sources: SRC-098;SRC-099; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-022"></a>

#### AOS-LEGAL-022 — Implement clean-room roles, repositories, and taint labels

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Legal and Security Leads · Clean Room
**Schedule:** 2026-07-27 → 2026-08-30 · 12 estimated days · M0
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Implement clean-room roles, repositories, and taint labels.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-LEGAL-002#roles, AOS-ARCH-018#taint. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Implement clean-room roles, repositories, and taint labels; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-LEGAL-002#roles;AOS-ARCH-018#taint; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 0 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-023"></a>

#### AOS-LEGAL-023 — Prepare vendor NDA, evaluation, source, firmware, and escrow checklist

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Commercial Counsel · Vendor Contracts
**Schedule:** 2026-08-10 → 2026-09-20 · 15 estimated days · M1
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Prepare vendor NDA, evaluation, source, firmware, and escrow checklist.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-LEGAL-007#checklist, AOS-HW-016#access-ladder. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Prepare vendor NDA, evaluation, source, firmware, and escrow checklist; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-LEGAL-007#nda;AOS-HW-016#information; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-024"></a>

#### AOS-LEGAL-024 — Map EU CRA, privacy, update, and vulnerability obligations

**Type / priority / status:** Review · P0 · Planned
**Owner / workstream:** Product Compliance Counsel · Product Compliance
**Schedule:** 2026-08-17 → 2026-10-04 · 18 estimated days · M1
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Map EU CRA, privacy, update, and vulnerability obligations.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-LEGAL-010#controls, AOS-LEGAL-004#cra. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Map EU CRA, privacy, update, and vulnerability obligations; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-LEGAL-010#review;AOS-LEGAL-004#eu-path; sources: SRC-097; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 05
**Specialist review:** none

<a id="task-aos-legal-025"></a>

#### AOS-LEGAL-025 — Build firmware and binary redistribution rights matrix

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Open Source and Commercial Counsel · Artifact Rights
**Schedule:** 2026-08-17 → 2026-10-11 · 20 estimated days · M1
**Parent:** AOS-LEGAL-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Build firmware and binary redistribution rights matrix.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-LEGAL-001#artifact-rights, AOS-HW-016#rights. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Build firmware and binary redistribution rights matrix; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-LEGAL-001#device-and-protocol-work;AOS-HW-016#contract; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 05
**Specialist review:** none

<a id="track-aos-odm"></a>

### AOS-ODM

<a id="task-aos-odm-000"></a>

#### AOS-ODM-000 — Custom Device and ODM Readiness epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Product Hardware Lead · Program
**Schedule:** 2027-07-12 → 2030-07-07 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Preserve manufacturing interfaces and prepare a later custom/ODM device route.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-HW-008#design-now; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-010"></a>

#### AOS-ODM-010 — Define manufacturing, provisioning, calibration, and test service contracts

**Type / priority / status:** Experiment · P1 · Backlog
**Owner / workstream:** Product Hardware Architect · Manufacturing Architecture
**Schedule:** 2027-07-12 → 2027-10-17 · 18 estimated days · M9
**Parent:** AOS-ODM-000
**Dependencies:** AOS-PLAT-020;AOS-SEC-022;AOS-PLAT-060;AOS-LEGAL-004
**Related tasks:** none

**Outcome.** Ensure board packages and platform services expose factory-test, identity, key injection, calibration, diagnostics, traceability, repair and decommission operations from the start.

**Scope.** Produce and integrate: manufacturing/test/provisioning IDLs; role/capability model; station simulator; audit/traceability; data ownership/retention. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Factory authority is distinct from user/device authority, secrets are never exposed to generic stations, and operations are portable across vendors
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** manufacturing/test/provisioning IDLs; role/capability model; station simulator; audit/traceability; data ownership/retention
**Verification:** EXP-080 mock factory flow for blank board through provision/calibrate/test/repair/decommission
**Evidence:** interface review; mock flow/audit records; EXP-080 record
**Traceability:** specs: AOS-HW-008#design-now;AOS-ARCH-006#manufacturing-interfaces; sources: none; claims: CLM-020; experiments: EXP-080
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-011"></a>

#### AOS-ODM-011 — Freeze product-hardware architecture envelope

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Product Hardware Architect · Product Requirements
**Schedule:** 2027-09-06 → 2027-12-26 · 15 estimated days · M9
**Parent:** AOS-ODM-000
**Dependencies:** AOS-LEGAL-010
**Related tasks:** none

**Outcome.** Define target quality, dimensions, display, camera, compute/memory/storage, radios, sensors, battery/runtime, thermal, security, repair, markets, lifecycle and cost ranges without selecting a vendor.

**Scope.** Produce and integrate: hardware requirements document; must/target/optional ranges; variant/market assumptions; interface and evidence requirements; exclusions. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Requirements are measurable and prioritize user quality, portability/documentation and lifecycle rather than copying one phone’s parts list
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** hardware requirements document; must/target/optional ranges; variant/market assumptions; interface and evidence requirements; exclusions
**Verification:** product/camera/cellular/power/security/regulatory/supply review and sensitivity scenarios
**Evidence:** approved envelope; unresolved trade-offs; claim/certification impacts
**Traceability:** specs: AOS-HW-010#decision-weights;AOS-PROD-006#tier-three;AOS-HW-008#architecture-envelope;AOS-PLAN-006#quality-device-route-decision; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-012"></a>

#### AOS-ODM-012 — Build preliminary product BOM and cost model

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Hardware Program/Finance Lead · Cost and Supply
**Schedule:** 2027-11-29 → 2028-03-05 · 12 estimated days · M9
**Parent:** AOS-ODM-000
**Dependencies:** AOS-CELL-002
**Related tasks:** AOS-ODM-011;AOS-CAM-070

**Outcome.** Estimate modules/components, NRE, tooling, certification, assembly/test, yield, logistics, warranty, support and volume sensitivity for candidate architectures.

**Scope.** Produce and integrate: preliminary BOM; NRE/tooling/certification model; volume/MOQ scenarios; supply/lifecycle risk; target cost gaps. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Model distinguishes component BOM from landed/support cost and exposes sole-source, obsolete, minimum-volume and yield assumptions
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** preliminary BOM; NRE/tooling/certification model; volume/MOQ scenarios; supply/lifecycle risk; target cost gaps
**Verification:** quote sanity checks from multiple distributors/vendors/partners and sensitivity analysis
**Evidence:** cost workbook/CSV; quote references; assumptions and ranges; gap actions
**Traceability:** specs: AOS-HW-008#commercial-readiness;AOS-PLAN-004#cost-model; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-020"></a>

#### AOS-ODM-020 — Select module-versus-custom subsystem strategy

**Type / priority / status:** Decision · P1 · Backlog
**Owner / workstream:** Product Hardware Architect · System Architecture
**Schedule:** 2027-12-27 → 2028-03-05 · 10 estimated days · M9
**Parent:** AOS-ODM-000
**Dependencies:** AOS-ODM-011;AOS-CELL-002
**Related tasks:** AOS-CAM-070

**Outcome.** Choose which early developer-device functions use documented modules versus custom silicon/board integration to control quality, openness, cost and schedule.

**Scope.** Produce and integrate: subsystem make/buy/module/custom matrix; interface/rights/lifecycle requirements; replacement plan; performance/power/cost impacts. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Any proprietary subsystem is replaceable at a declared boundary and its documentation/update/deployment rights are contract requirements
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** subsystem make/buy/module/custom matrix; interface/rights/lifecycle requirements; replacement plan; performance/power/cost impacts
**Verification:** architecture/camera/cellular/security/supply review with at least two feasible configurations
**Evidence:** decision record; interface contracts; cost/risk comparison
**Traceability:** specs: AOS-HW-010#candidate-scorecard;AOS-HW-008#carrier-board-stage;AOS-HW-008#replaceability; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-021"></a>

#### AOS-ODM-021 — Design custom carrier-board reference architecture

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Lead Hardware Engineer · Carrier Board
**Schedule:** 2028-03-06 → 2028-08-06 · 30 estimated days · M9
**Parent:** AOS-ODM-000
**Dependencies:** AOS-ODM-020;AOS-OPEN-030;AOS-PLAT-041;AOS-CAM-060;AOS-CELL-030
**Related tasks:** none

**Outcome.** Create a module-based developer-device architecture connecting compute, memory/storage, display/touch, camera, audio, cellular, Wi-Fi/Bluetooth, sensors, battery/power, debug and security.

**Scope.** Produce and integrate: block diagrams; interface/power/reset/clock/debug architecture; preliminary schematics; board-package plan; risk/bring-up/test plan. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every subsystem has documented electrical/logical contract, debug/recovery, power state, replacement path and assigned owner
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** block diagrams; interface/power/reset/clock/debug architecture; preliminary schematics; board-package plan; risk/bring-up/test plan
**Verification:** independent schematic/architecture review, interface budgets and module-vendor feedback
**Evidence:** design review; interface/power budgets; risk register; revision plan
**Traceability:** specs: AOS-HW-008#carrier-board-stage;AOS-ARCH-006#board-package; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-022"></a>

#### AOS-ODM-022 — Define display, enclosure, battery, charging, thermal, and repair architecture

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Mechanical/Power Lead · Mechanical and Power
**Schedule:** 2028-04-03 → 2028-08-20 · 24 estimated days · M9
**Parent:** AOS-ODM-000
**Dependencies:** AOS-ODM-011;AOS-PLAT-041;AOS-LEGAL-010
**Related tasks:** AOS-ODM-021

**Outcome.** Translate product quality into safe mechanical/electrical/thermal design with serviceability, user protection, regulatory and supply constraints.

**Scope.** Produce and integrate: display/touch shortlist; battery/charger architecture; thermal model; enclosure/service strategy; safety/certification requirements; test plan. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Design has safe charge/thermal limits, measurable serviceability, known hazardous-energy controls and no unqualified battery/enclosure certification assumption
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** display/touch shortlist; battery/charger architecture; thermal model; enclosure/service strategy; safety/certification requirements; test plan
**Verification:** supplier data, thermal/power simulation or prototype, safety/regulatory consultation and repair workflow review
**Evidence:** mechanical/power dossier; thermal model; supplier/rights responses; risk updates
**Traceability:** specs: AOS-HW-008#mechanical-and-power;AOS-LEGAL-004#development-stages; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-023"></a>

#### AOS-ODM-023 — Define production camera module and calibration architecture

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Camera Hardware Lead · Camera Hardware
**Schedule:** 2028-10-02 → 2029-02-04 · 20 estimated days · M10
**Parent:** AOS-ODM-000
**Dependencies:** AOS-CAM-080;AOS-ODM-021;AOS-ODM-010
**Related tasks:** none

**Outcome.** Select sensor/lens/OIS/ISP/module options, physical interfaces, calibration stations/data ownership, tuning/support and replacement strategy.

**Scope.** Produce and integrate: camera module shortlist; optical/mechanical/interface design; calibration/test flow; tuning/rights/lifecycle plan; fallback module. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Selected path meets measured quality and grants calibration/tuning/update/deployment/repair rights or has explicit replacement trigger
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** camera module shortlist; optical/mechanical/interface design; calibration/test flow; tuning/rights/lifecycle plan; fallback module
**Verification:** vendor/module evaluation, quality harness, calibration mock and manufacturing/repair review
**Evidence:** camera hardware decision; quality/rights/cost data; calibration station spec
**Traceability:** specs: AOS-HW-006#controlled-proprietary-option;AOS-HW-008#camera-manufacturing; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-024"></a>

#### AOS-ODM-024 — Define production cellular/RF module and antenna architecture

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** RF/Cellular Hardware Lead · RF and Cellular
**Schedule:** 2028-10-02 → 2029-02-18 · 22 estimated days · M10
**Parent:** AOS-ODM-000
**Dependencies:** AOS-CELL-080;AOS-ODM-021;AOS-LEGAL-013
**Related tasks:** none

**Outcome.** Select module, bands/variants, SIM/eSIM, antennas/coexistence, firmware/support, certification inheritance and test interfaces.

**Scope.** Produce and integrate: module/antenna/variant architecture; certification matrix; RF test/connector plan; firmware/support agreement needs; fallback. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Final-device certification responsibilities and antenna/enclosure/module constraints are explicit
- voice/eSIM support matches product decision
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** module/antenna/variant architecture; certification matrix; RF test/connector plan; firmware/support agreement needs; fallback
**Verification:** module vendor and accredited-lab review, preliminary RF/coexistence/thermal/power analysis
**Evidence:** RF architecture review; certification impact; partner responses; cost/risk model
**Traceability:** specs: AOS-HW-007#module-selection;AOS-LEGAL-004#cellular-path; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-025"></a>

#### AOS-ODM-025 — Design secure provisioning and device identity lifecycle

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Hardware Security Lead · Provisioning
**Schedule:** 2028-05-15 → 2028-09-17 · 24 estimated days · M10
**Parent:** AOS-ODM-000
**Dependencies:** AOS-ODM-010;AOS-SEC-022;AOS-SEC-030;AOS-SEC-031
**Related tasks:** AOS-ODM-010

**Outcome.** Provision boot/update/device/attestation/service identities, certificates and revocation through least-authority audited factory stations and field recovery.

**Scope.** Produce and integrate: key ceremony; provisioning service/station roles; HSM/secure element options; audit/traceability; revocation/rework/decommission; contract requirements. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No universal device key exists in ordinary tooling, station compromise is containable/revocable, and rework/decommission preserve user security
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** key ceremony; provisioning service/station roles; HSM/secure element options; audit/traceability; revocation/rework/decommission; contract requirements
**Verification:** mock factory/stolen station/misprovision/rework/returned device/key compromise and audit reconciliation
**Evidence:** provisioning threat model; ceremony/drill logs; identity inventory; partner requirements
**Traceability:** specs: AOS-ARCH-013#root-of-trust; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-026"></a>

#### AOS-ODM-026 — Design manufacturing and field diagnostic test suite

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Manufacturing Test Lead · Manufacturing Test
**Schedule:** 2028-05-29 → 2028-10-15 · 24 estimated days · M10
**Parent:** AOS-ODM-000
**Dependencies:** AOS-ODM-010;AOS-PLAT-080;AOS-PLAT-060
**Related tasks:** AOS-ODM-010;AOS-ODM-021

**Outcome.** Create deterministic board/subsystem/calibration/end-of-line/burn-in/repair tests with traceability, limits, privacy and release compatibility.

**Scope.** Produce and integrate: test manifest/protocol; fixtures/station software; limits/calibration; serial traceability; rework/repair flows; data retention/export. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Tests detect declared faults with controlled false results, preserve traceability, and cannot access user data or production keys beyond scope
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** test manifest/protocol; fixtures/station software; limits/calibration; serial traceability; rework/repair flows; data retention/export
**Verification:** simulate good/seeded-bad boards and repeat across station instances/software versions
**Evidence:** coverage/yield simulation; station audit; seeded defect detection; version compatibility report
**Traceability:** specs: AOS-HW-008#manufacturing-test; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-030"></a>

#### AOS-ODM-030 — Complete custom carrier-board feasibility study

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Product Hardware Lead · Feasibility
**Schedule:** 2028-11-13 → 2029-03-04 · 20 estimated days · M10
**Parent:** AOS-ODM-000
**Dependencies:** AOS-ODM-012;AOS-ODM-021;AOS-ODM-022;AOS-ODM-025;AOS-ODM-026
**Related tasks:** AOS-ODM-023;AOS-ODM-024

**Outcome.** Determine whether the module-based architecture meets product interfaces, camera, cellular, power, thermal, size, cost, supply, documentation and NRE goals.

**Scope.** Produce and integrate: integrated architecture; preliminary BOM/NRE/MOQ; supplier/partner feedback; compliance/rights/schedule risks; build/no-build recommendation. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Recommendation quantifies unresolved critical paths and may stop the build
- positive result has partner/documentation/supply path
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** integrated architecture; preliminary BOM/NRE/MOQ; supplier/partner feedback; compliance/rights/schedule risks; build/no-build recommendation
**Verification:** EXP-081 independent cross-functional design review and at least two vendor/manufacturer feasibility inputs
**Evidence:** feasibility report; updated diagrams/BOM/risk; EXP-081 record
**Traceability:** specs: AOS-HW-008#carrier-board-stage;AOS-PLAN-006#quality-device-route-decision; sources: none; claims: CLM-024; experiments: EXP-081
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-040"></a>

#### AOS-ODM-040 — Perform DFM, DFT, reliability, and serviceability review

**Type / priority / status:** Review · P1 · Backlog
**Owner / workstream:** Manufacturing Engineering Lead · Manufacturing Readiness
**Schedule:** 2029-02-19 → 2029-06-10 · 20 estimated days · M10
**Parent:** AOS-ODM-000
**Dependencies:** AOS-ODM-026
**Related tasks:** AOS-ODM-030

**Outcome.** Adapt selected design for fabrication, assembly, test coverage, yield, component variance, thermal/mechanical reliability, repair and lifecycle.

**Scope.** Produce and integrate: DFM/DFT review; tolerance/stack/yield assumptions; reliability/repair plan; test points/fixtures; component alternate rules. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Critical nets/subsystems are testable, component substitutions are controlled, and repair/service operations do not defeat security/calibration
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** DFM/DFT review; tolerance/stack/yield assumptions; reliability/repair plan; test points/fixtures; component alternate rules
**Verification:** EMS/ODM and independent hardware review with seeded manufacturing/repair scenarios
**Evidence:** review findings/closure; revised design; yield/reliability risk model
**Traceability:** specs: AOS-HW-008#manufacturing-readiness;AOS-LEGAL-004#development-stages; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-041"></a>

#### AOS-ODM-041 — Prepare EVT developer-device build plan

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Product Hardware Lead · EVT Planning
**Schedule:** 2029-05-14 → 2029-08-19 · 15 estimated days · M10
**Parent:** AOS-ODM-000
**Dependencies:** AOS-ODM-030;AOS-LEGAL-013
**Related tasks:** AOS-ODM-040

**Outcome.** Define objectives, units, revisions, fixtures, firmware/software, bring-up, tests, issue triage, safety, data and disposal for the first custom hardware build.

**Scope.** Produce and integrate: EVT build matrix; unit allocation; bring-up/test/calibration schedule; acceptance/stop limits; safety/compliance pre-scan; budget. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Build does not begin without frozen revision, recoverable software, safety controls, test coverage, owners and failure budget
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** EVT build matrix; unit allocation; bring-up/test/calibration schedule; acceptance/stop limits; safety/compliance pre-scan; budget
**Verification:** cross-functional build-readiness review and dry-run of issue/traceability workflow
**Evidence:** approved EVT plan; unit/test ownership; spend authorization; open blockers
**Traceability:** specs: AOS-HW-008#evt-dvt-pvt;AOS-HW-009#procurement-controls; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-050"></a>

#### AOS-ODM-050 — Run product-hardware certification pre-scan

**Type / priority / status:** Review · P1 · Backlog
**Owner / workstream:** Regulatory/Hardware Lead · Certification
**Schedule:** 2029-06-25 → 2029-09-30 · 15 estimated days · M10
**Parent:** AOS-ODM-000
**Dependencies:** AOS-LEGAL-013;AOS-ODM-022;AOS-ODM-024
**Related tasks:** AOS-ODM-041

**Outcome.** Identify EMC/RF/SAR/safety/thermal/battery/cybersecurity/update and market failures before design freeze and expensive formal testing.

**Scope.** Produce and integrate: pre-scan samples/config; lab plan/results; failure remediation; variant/change-control impacts; formal test budget/schedule. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Known failures are corrected or gate-blocking before DVT/formal submission and tested hardware/software configuration is traceable
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** pre-scan samples/config; lab plan/results; failure remediation; variant/change-control impacts; formal test budget/schedule
**Verification:** accredited/qualified lab pre-scan and cross-functional result review
**Evidence:** pre-scan reports; design changes; residual risk; certification plan
**Traceability:** specs: AOS-LEGAL-004#development-stages;AOS-LEGAL-004#evidence-package; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-060"></a>

#### AOS-ODM-060 — Prepare and issue ODM/JDM/EMS request for information

**Type / priority / status:** Contact · P1 · Backlog
**Owner / workstream:** Product Hardware/Commercial Lead · ODM Engagement
**Schedule:** 2029-07-09 → 2029-11-25 · 18 estimated days · M11
**Parent:** AOS-ODM-000
**Dependencies:** AOS-ODM-011;AOS-ODM-012;AOS-ODM-030;AOS-LEGAL-010
**Related tasks:** AOS-LEGAL-014

**Outcome.** Test market capability for a later quality device using measurable requirements, portable interfaces, IP/documentation/security/certification and support obligations.

**Scope.** Produce and integrate: RFI package; technical/commercial/legal/security schedules; volume/market assumptions; response template; vendor longlist; confidentiality process. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- RFI requests rights and evidence needed for Agent OS portability/update/support and does not promise volume, certification or feature readiness unsupported by program data
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** RFI package; technical/commercial/legal/security schedules; volume/market assumptions; response template; vendor longlist; confidentiality process
**Verification:** cross-functional/legal review and issue to qualified vendors with controlled Q&A
**Evidence:** issued RFI; recipient/response log; clarification record; no-go list
**Traceability:** specs: AOS-HW-008#odm-rfi;AOS-LEGAL-005#contact-dossier; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-061"></a>

#### AOS-ODM-061 — Evaluate ODM/JDM/EMS responses and capability

**Type / priority / status:** Review · P1 · Backlog
**Owner / workstream:** Product Hardware Sourcing Committee · ODM Engagement
**Schedule:** 2029-10-29 → 2030-03-17 · 20 estimated days · M11
**Parent:** AOS-ODM-000
**Dependencies:** none
**Related tasks:** AOS-ODM-060;AOS-LEGAL-014

**Outcome.** Score technical architecture, documentation, camera/radio/power quality, software rights, security, certification, manufacturing, supply, NRE/MOQ, support and exit risk.

**Scope.** Produce and integrate: response normalization; scorecard; technical/reference checks; site/audit plan; shortlist; clarification/red-flag log. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Lowest price cannot override missing documentation, update/control, certification, quality or exit rights, and confidence is stated per answer
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** response normalization; scorecard; technical/reference checks; site/audit plan; shortlist; clarification/red-flag log
**Verification:** independent functional scoring, reference checks and scenario analysis for schedule slip/vendor exit/security issue
**Evidence:** scorecard; shortlist decision; assumptions/risks; due-diligence tasks
**Traceability:** specs: AOS-HW-008#partner-scorecard;AOS-LEGAL-005#contractual-and-technical-asks; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-070"></a>

#### AOS-ODM-070 — Negotiate architecture, IP, tooling, security, quality, and lifecycle terms

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Commercial/Technology Counsel · ODM Engagement
**Schedule:** 2030-01-21 → 2030-07-07 · 25 estimated days · Continuous
**Parent:** AOS-ODM-000
**Dependencies:** AOS-LEGAL-014;AOS-SEC-061
**Related tasks:** AOS-LEGAL-014;AOS-ODM-061

**Outcome.** Convert shortlisted feasibility into enforceable ownership, interface, documentation, firmware, update, tooling, quality, certification, supply and termination obligations.

**Scope.** Produce and integrate: term sheet/contracts/SOW; IP/tooling/data matrix; security/update/SLA; quality/certification/supply responsibilities; escrow/exit where justified. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No deal makes Agent OS dependent on undocumented unmaintainable interfaces or leaves update keys, tooling, certification and post-termination support ambiguous
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** term sheet/contracts/SOW; IP/tooling/data matrix; security/update/SLA; quality/certification/supply responsibilities; escrow/exit where justified
**Verification:** legal/technical/security/finance red-team and failure/termination scenario review
**Evidence:** approved negotiation positions; residual exceptions; signed agreement or no-deal decision
**Traceability:** specs: AOS-LEGAL-001#contract-principles; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-080"></a>

#### AOS-ODM-080 — Approve product hardware NRE, MOQ, and lifecycle business case

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** Program/Finance/Product Leadership · Business Case
**Schedule:** 2030-04-15 → 2030-06-09 · 10 estimated days · Continuous
**Parent:** AOS-ODM-000
**Dependencies:** AOS-ODM-012;AOS-ODM-050;AOS-ODM-061
**Related tasks:** AOS-ODM-070

**Outcome.** Decide whether expected demand, unit economics, support, certification, warranty, supply and strategic value justify product-hardware investment.

**Scope.** Produce and integrate: NRE/MOQ/cash/volume scenarios; landed/support/warranty costs; risk-adjusted options; funding/partner commitments; go/no-go. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Go decision funds full lifecycle and downside reserves rather than only prototypes, and no-go preserves portable platform/community path
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** NRE/MOQ/cash/volume scenarios; landed/support/warranty costs; risk-adjusted options; funding/partner commitments; go/no-go
**Verification:** independent finance/operations/legal/product review and downside/stress scenarios
**Evidence:** business-case model; decision record; funding conditions; stop thresholds
**Traceability:** specs: AOS-PLAN-004#funding-tranches;AOS-HW-008#commercial-readiness; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-090"></a>

#### AOS-ODM-090 — Issue production-device program gate

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** Program Board · Program Gate
**Schedule:** 2030-06-10 → 2030-06-30 · 6 estimated days · Continuous
**Parent:** AOS-ODM-000
**Dependencies:** AOS-ODM-080;AOS-PROD-110;AOS-CAM-080;AOS-CELL-080
**Related tasks:** AOS-SEC-100

**Outcome.** Authorize, defer, partner, or stop a contract-manufactured device based on product demand, quality, architecture, rights, certification, funding and support evidence.

**Scope.** Produce and integrate: production gate packet; selected route/partner; scope/markets/claims; funding and lifecycle commitments; fallback/termination plan. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Preserve vendor replaceability, manufacturing/test interfaces, documentation rights, provisioning security, and certification responsibility.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Production is approved only with sustainable update/security/support/certification and replaceable portable architecture
- stopping remains an acceptable result
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** production gate packet; selected route/partner; scope/markets/claims; funding and lifecycle commitments; fallback/termination plan
**Verification:** program-board review of all G0–G10 evidence and independent legal/security/finance inputs
**Evidence:** signed decision; updated roadmap/budget/risk/public claims; contractual next steps
**Traceability:** specs: AOS-PLAN-006#technical-gates;AOS-HW-008#odm-rfi; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-100"></a>

#### AOS-ODM-100 — Freeze future custom-device interface and provisioning requirements

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Product Hardware Lead · Future Device Contract
**Schedule:** 2027-12-27 → 2028-03-19 · 30 estimated days · M9
**Parent:** AOS-ODM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Freeze future custom-device interface and provisioning requirements.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-008#design-now, AOS-HW-013#future-device. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Freeze future custom-device interface and provisioning requirements; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-008#design-now;AOS-HW-013#quality-ceiling; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-odm-101"></a>

#### AOS-ODM-101 — Prepare the future ODM/JDM RFI data-room schema

**Type / priority / status:** Task · P2 · Planned
**Owner / workstream:** ODM Program Lead · ODM Preparation
**Schedule:** 2028-05-15 → 2028-08-06 · 30 estimated days · M11
**Parent:** AOS-ODM-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Prepare the future ODM/JDM RFI data-room schema.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-LEGAL-007#future-device, AOS-HW-008#partner-selection. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Prepare the future ODM/JDM RFI data-room schema; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-LEGAL-007#device;AOS-HW-008#partner-scorecard; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 05
**Specialist review:** none

<a id="track-aos-open"></a>

### AOS-OPEN

<a id="task-aos-open-000"></a>

#### AOS-OPEN-000 — Documented and Open Hardware epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Open Hardware Lead · Program
**Schedule:** 2026-07-20 → 2029-07-22 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Prove native portability on documented boards and phone-form-factor hardware.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-HW-001#portfolio-policy; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-001"></a>

#### AOS-OPEN-001 — Implement hardware evidence and asset-control system

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Hardware Program Lead · Hardware Operations
**Schedule:** 2026-07-13 → 2026-08-02 · 8 estimated days · M0
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-004;AOS-LEGAL-004

**Outcome.** Track exact devices/boards/modules, revisions, firmware, rights, recovery, measurements, experiments, failures, and owners.

**Scope.** Produce and integrate: asset register; target dossier template; serial aliases; firmware/source/rights fields; evidence storage map. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No modified hardware lacks exact revision, owner, recovery path, approved artifact status and experiment linkage
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** asset register; target dossier template; serial aliases; firmware/source/rights fields; evidence storage map
**Verification:** register representative board, phone, camera, modem and instrument and perform audit
**Evidence:** asset inventory; missing-field report; access-control review
**Traceability:** specs: AOS-HW-001#target-dossier;AOS-TPL-EVIDENCE#identity; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-002"></a>

#### AOS-OPEN-002 — Build safe automated bring-up laboratory baseline

**Type / priority / status:** Purchase · P0 · Backlog
**Owner / workstream:** Hardware Lab Engineer · Laboratory
**Schedule:** 2026-07-20 → 2026-08-30 · 12 estimated days · M1
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** AOS-OPEN-001;AOS-DOCS-009

**Outcome.** Provide controlled power, UART, USB, relay, logic, thermal, network and evidence capture for repeatable destructive hardware work.

**Scope.** Produce and integrate: bench layout; ESD/fire/power controls; programmable power cycle; UART/USB capture; instrument inventory/calibration; scripts. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Power and device identity are logged, destructive operations have interlocks/recovery, and instruments have known calibration/status
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** bench layout; ESD/fire/power controls; programmable power cycle; UART/USB capture; instrument inventory/calibration; scripts
**Verification:** repeat automated boot/failure capture and emergency shutdown on a sacrificial target
**Evidence:** lab commissioning checklist; safety review; sample evidence bundle
**Traceability:** specs: AOS-HW-009#laboratory-equipment;AOS-RES-004#evidence-integrity; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-003"></a>

#### AOS-OPEN-003 — Procure first hardware tranche with revision controls

**Type / priority / status:** Purchase · P0 · Backlog
**Owner / workstream:** Hardware Program Lead · Procurement
**Schedule:** 2026-07-20 → 2026-09-13 · 5 estimated days · M1
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** AOS-OPEN-001;AOS-DOCS-009;AOS-LEGAL-006

**Outcome.** Acquire duplicate documented boards, camera benches, open phones, Pixel units only after SKU review, storage, and debug/power equipment tied to tasks.

**Scope.** Produce and integrate: approved purchase orders; revision/SKU verification; return/warranty plan; spares; intake/stock backups. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Each purchase has a task/experiment, duplicate or fallback where destructive, and no Pixel SKU is bought as unlockable without verification
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** approved purchase orders; revision/SKU verification; return/warranty plan; spares; intake/stock backups
**Verification:** receipt/intake against task, revision, serial, firmware, condition and recovery checklist
**Evidence:** procurement ledger; intake photos/hashes; variance report
**Traceability:** specs: AOS-HW-009#first-order;AOS-HW-009#procurement-controls; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-010"></a>

#### AOS-OPEN-010 — Create QEMU hardware profiles and CI target matrix

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Simulation Engineer · Emulation
**Schedule:** 2026-09-21 → 2026-11-29 · 15 estimated days · M2
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-CORE-010;AOS-CORE-011
**Related tasks:** AOS-PLAT-070

**Outcome.** Model CPU/memory/interrupt/storage/network/display/input/device-fault variants so kernel/platform/product tests do not rely on one emulated configuration.

**Scope.** Produce and integrate: minimal/standard/stress profiles; architecture matrix; fault profiles; CI schedule; support metadata. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A passing result identifies architecture/profile and no critical test is run only on the most permissive configuration
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** minimal/standard/stress profiles; architecture matrix; fault profiles; CI schedule; support metadata
**Verification:** run kernel/platform/product conformance across profiles and seeded resource/device failures
**Evidence:** matrix dashboard; timing/resource metrics; failure coverage
**Traceability:** specs: AOS-HW-001#qemu-track;AOS-ARCH-015#emulation; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 5 · Volume 03
**Specialist review:** none

<a id="task-aos-open-020"></a>

#### AOS-OPEN-020 — Bring up Agent OS on BeaglePlay/AM625

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** AM62x Bring-up Engineer · AM62x
**Schedule:** 2026-10-19 → 2027-03-07 · 30 estimated days · M3
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-OPEN-002;AOS-OPEN-003;AOS-CORE-012
**Related tasks:** AOS-PLAT-020

**Outcome.** Reach repeatable native early boot, console, memory, interrupts/timer, multicore policy, storage/USB/network seeds and recovery on documented AArch64 hardware.

**Scope.** Produce and integrate: board package; loader/boot path; UART; memory/IRQ/timer; recovery; exact-revision dossier; CI/lab scripts. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Two specimens boot repeatably from documented steps, recover from bad image, and architecture-neutral kernel sources remain unchanged
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** board package; loader/boot path; UART; memory/IRQ/timer; recovery; exact-revision dossier; CI/lab scripts
**Verification:** EXP-014 on two specimens from power-off and after failed images
**Evidence:** UART/boot logs; board manifest; recovery recording; EXP-014 record
**Traceability:** specs: AOS-HW-004#beagleplay-track;AOS-HW-004#porting-sequence; sources: SRC-033;SRC-035; claims: CLM-011; experiments: EXP-014
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-021"></a>

#### AOS-OPEN-021 — Enable BeaglePlay storage, USB, and network services

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** AM62x Platform Engineer · AM62x
**Schedule:** 2027-01-25 → 2027-05-02 · 25 estimated days · M3
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** AOS-OPEN-020;AOS-PLAT-031;AOS-PLAT-033;AOS-PLAT-034

**Outcome.** Run native block/storage, USB and Ethernet/network services through the portable driver and service contracts.

**Scope.** Produce and integrate: board drivers/backends; persistent system image; Ethernet/IP; USB debug/HID/storage; fault/restart tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Portable clients require no BeaglePlay types and driver faults cannot corrupt unrelated services or storage
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** board drivers/backends; persistent system image; Ethernet/IP; USB debug/HID/storage; fault/restart tests
**Verification:** cold boot, I/O stress, cable/device loss, driver crash, update/recovery and cross-target conformance
**Evidence:** service conformance matrix; throughput/error logs; restart/recovery evidence
**Traceability:** specs: AOS-HW-004#beagleplay-track;AOS-ARCH-006#driver-domains; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-022"></a>

#### AOS-OPEN-022 — Deliver first frame and input on documented board

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Display/Input Bring-up Engineer · AM62x
**Schedule:** 2027-02-08 → 2027-05-16 · 25 estimated days · M3
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** AOS-OPEN-020;AOS-PLAT-037;AOS-PLAT-035;AOS-PROD-050

**Outcome.** Drive display output and touch/USB input through portable display, buffer, compositor and input services.

**Scope.** Produce and integrate: display backend; mode/timing; framebuffer/buffer path; input backend; shell first frame; capture evidence. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- First frame is produced by native services, input reaches semantic shell, and the path recovers from display/driver restart
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** display backend; mode/timing; framebuffer/buffer path; input backend; shell first frame; capture evidence
**Verification:** boot-to-frame, mode/error/restart, input latency/focus, repeated cold boots and two displays where practical
**Evidence:** first-frame image/video; frame timing; input trace; M3 gate packet
**Traceability:** specs: AOS-HW-004#display-path;AOS-ARCH-008#display-contract; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-023"></a>

#### AOS-OPEN-023 — Characterize documented-board power and thermal behavior

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Power Engineer · Power
**Schedule:** 2027-02-22 → 2027-05-16 · 18 estimated days · M4
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-OPEN-002
**Related tasks:** AOS-OPEN-020;AOS-PLAT-041

**Outcome.** Measure boot, idle, load, peripheral, thermal, suspend-candidate and wake behavior and implement initial power backends.

**Scope.** Produce and integrate: power/thermal backend; rail/system measurements; thermal zones; performance states; wake matrix; baseline report. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Measurements are repeatable with uncertainty stated and unsafe/unknown states are surfaced rather than hidden
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** power/thermal backend; rail/system measurements; thermal zones; performance states; wake matrix; baseline report
**Verification:** controlled workloads, repeated ambient conditions, peripheral on/off, failed suspend participant and thermal trip tests
**Evidence:** power traces; thermal images; calibration/environment record; recommendations
**Traceability:** specs: AOS-ARCH-014#measurement;AOS-HW-004#power-and-thermal; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-030"></a>

#### AOS-OPEN-030 — Port Agent OS to a second documented SoC family

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Second-SoC Bring-up Lead · Portability
**Schedule:** 2027-03-08 → 2027-09-05 · 40 estimated days · M5
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-OPEN-020
**Related tasks:** AOS-PLAT-080

**Outcome.** Prove portable kernel/service/product contracts on an unrelated SoC using public or contractually usable documentation.

**Scope.** Produce and integrate: target dossier; architecture/board package; boot/recovery; storage/network/display/input; conformance/leakage report. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Portable services and product compile/run without source forks and all differences are board/backend declarations
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** target dossier; architecture/board package; boot/recovery; storage/network/display/input; conformance/leakage report
**Verification:** EXP-015 and source/config comparison with QEMU/AM625
**Evidence:** port diff; conformance matrix; leakage fixes; EXP-015 record
**Traceability:** specs: AOS-HW-004#second-soc-track;AOS-ARCH-001#portability-test; sources: none; claims: CLM-002;CLM-023; experiments: EXP-015
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-031"></a>

#### AOS-OPEN-031 — Evaluate and bring up BeagleY-AI/AM67A vision target

**Type / priority / status:** Spike · P1 · Backlog
**Owner / workstream:** Vision Board Engineer · Vision Boards
**Schedule:** 2027-02-08 → 2027-07-11 · 30 estimated days · M5
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-OPEN-003;AOS-PLAT-020;AOS-CAM-001
**Related tasks:** AOS-OPEN-020

**Outcome.** Use an open-design camera/vision-capable board to validate richer I/O, accelerator, camera and power contracts.

**Scope.** Produce and integrate: dossier; boot/recovery; camera/display/accelerator resource map; board package; feasibility report. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Target earns a maintained role only if camera/accelerator access adds unique evidence with sustainable documentation
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** dossier; boot/recovery; camera/display/accelerator resource map; board package; feasibility report
**Verification:** repeat boot, public-source/document audit, camera-path experiment and cross-target service tests
**Evidence:** board evidence bundle; first capture/frame; gap/rights report
**Traceability:** specs: AOS-HW-004#camera-capable-boards;AOS-HW-006#documented-camera-bench; sources: SRC-034;SRC-036; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-032"></a>

#### AOS-OPEN-032 — Evaluate and bring up NXP i.MX 8M Plus target

**Type / priority / status:** Spike · P2 · Backlog
**Owner / workstream:** NXP Bring-up Engineer · Vision Boards
**Schedule:** 2027-04-05 → 2027-09-19 · 30 estimated days · M5
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-OPEN-003;AOS-OPEN-020;AOS-CAM-001
**Related tasks:** none

**Outcome.** Test a second product-oriented camera SoC ecosystem, documentation/support path and portable camera/display/power backends.

**Scope.** Produce and integrate: board/vendor dossier; boot/recovery; ISP/camera/doc/rights map; board package prototype; cost/benefit comparison. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Continue only if it supplies documentation, camera, power or productization evidence not duplicated by AM62x path
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** board/vendor dossier; boot/recovery; ISP/camera/doc/rights map; board package prototype; cost/benefit comparison
**Verification:** official-source review, vendor contact, native boot/camera feasibility and scorecard update
**Evidence:** dossier; vendor response; experiment logs; decision record
**Traceability:** specs: AOS-HW-004#camera-capable-boards;AOS-HW-010#candidate-scorecard; sources: SRC-037; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-040"></a>

#### AOS-OPEN-040 — Build Raspberry Pi PiSP camera reference bench

**Type / priority / status:** Purchase · P1 · Backlog
**Owner / workstream:** Camera Lab Engineer · Camera Bench
**Schedule:** 2026-10-05 → 2026-12-13 · 12 estimated days · M3
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-OPEN-003
**Related tasks:** AOS-CAM-001;AOS-CAM-002

**Outcome.** Create an inexpensive repeatable RAW/tuning/computational-photography bench independent of phone bring-up and AOS-native ISP availability.

**Scope.** Produce and integrate: Pi board/camera modules; controlled capture image; scene/lighting fixtures; metadata/export pipeline; stock/reference dataset. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Bench produces repeatable RAW/metadata and processed reference captures with controlled configuration and no claim of native Agent OS support
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** Pi board/camera modules; controlled capture image; scene/lighting fixtures; metadata/export pipeline; stock/reference dataset
**Verification:** repeat RAW/processed captures across fixed scenes/exposure/temperature and hash/calibration checks
**Evidence:** bench dossier; sample dataset; repeatability metrics; asset records
**Traceability:** specs: AOS-HW-006#reference-benches;AOS-HW-009#camera-lab; sources: SRC-038;SRC-039; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-050"></a>

#### AOS-OPEN-050 — Reach native early boot on PinePhone Pro

**Type / priority / status:** Experiment · P1 · Backlog
**Owner / workstream:** Open Phone Bring-up Lead · PinePhone Pro
**Schedule:** 2027-01-25 → 2027-07-11 · 35 estimated days · M6
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-OPEN-002;AOS-OPEN-003;AOS-CORE-012;AOS-PLAT-020;AOS-LEGAL-006
**Related tasks:** none

**Outcome.** Boot Agent OS to structured console on phone-form hardware with exact revision, reversible flashing, power safety and documented recovery.

**Scope.** Produce and integrate: target dossier; boot/recovery; UART/USB logs; board package; memory/IRQ/timer/CPU baseline; safety notes. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Two devices recover and boot repeatably without relying on Linux at runtime, and phone charging safety limitations are documented
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** target dossier; boot/recovery; UART/USB logs; board package; memory/IRQ/timer/CPU baseline; safety notes
**Verification:** EXP-020 on two devices, failed image recovery, charger/battery boundaries and cold boots
**Evidence:** boot/recovery recordings; manifests; power traces; EXP-020 record
**Traceability:** specs: AOS-HW-003#pinephone-pro-role;AOS-HW-003#bring-up-sequence; sources: SRC-029;SRC-030; claims: CLM-010; experiments: EXP-020
**Phase / volume:** Phase 5 · Volume 03
**Specialist review:** none

<a id="task-aos-open-051"></a>

#### AOS-OPEN-051 — Implement PinePhone Pro board and peripheral services

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Open Phone Platform Lead · PinePhone Pro
**Schedule:** 2027-05-17 → 2027-12-26 · 45 estimated days · M6
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-PLAT-021;AOS-PLAT-024
**Related tasks:** AOS-OPEN-050

**Outcome.** Bring up storage, USB, display/touch, audio, network, sensors, power and modem transport in isolated native backends.

**Scope.** Produce and integrate: board package; subsystem drivers/services; lifecycle/power integration; target conformance; support limitations. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Each subsystem is independently stateful/restartable, portable clients remain unchanged, and unsupported functions are explicit
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** board package; subsystem drivers/services; lifecycle/power integration; target conformance; support limitations
**Verification:** subsystem-by-subsystem fault/restart/suspend/recovery and cross-target tests
**Evidence:** target matrix; logs/traces; unresolved subsystem dossier; power/safety review
**Traceability:** specs: AOS-HW-003#bring-up-sequence;AOS-ARCH-006#board-package; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-052"></a>

#### AOS-OPEN-052 — Validate open-phone display, touch, and audio experience

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Open Phone UX Engineer · PinePhone Pro
**Schedule:** 2027-08-09 → 2027-10-31 · 18 estimated days · M6
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-PLAT-036;AOS-PLAT-037;AOS-PROD-050
**Related tasks:** AOS-OPEN-051

**Outcome.** Run the entity shell with measured frame/input/audio behavior and recoverable driver failures on PinePhone Pro.

**Scope.** Produce and integrate: display/touch/audio backends; shell profile; latency/frame/audio metrics; restart/rebind flows. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Core UI is usable at declared performance, input/audio paths are privacy-correct, and driver restart does not require device reboot
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** display/touch/audio backends; shell profile; latency/frame/audio metrics; restart/rebind flows
**Verification:** EXP-022 common workflows, rotation/mode, touch/audio routing, driver crash and accessibility
**Evidence:** video; traces/metrics; conformance; EXP-022 record
**Traceability:** specs: AOS-HW-003#display-input-audio;AOS-PROD-006#tier-two; sources: none; claims: none; experiments: EXP-022
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-053"></a>

#### AOS-OPEN-053 — Enable open-phone Wi-Fi and Bluetooth baseline

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Wireless Engineer · PinePhone Pro
**Schedule:** 2027-07-26 → 2027-12-12 · 30 estimated days · M6
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-PLAT-041
**Related tasks:** AOS-OPEN-051;AOS-PLAT-033

**Outcome.** Provide native connectivity or a clearly bounded documented module/backend route with secure pairing, lifecycle, power and update behavior.

**Scope.** Produce and integrate: radio dossier; native/module backend; Wi-Fi association/IP; Bluetooth discovery/pairing baseline; firmware/update record. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Radio firmware/protocol rights are known, credentials are protected, and connectivity cannot imply unsupported profiles/features
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** radio dossier; native/module backend; Wi-Fi association/IP; Bluetooth discovery/pairing baseline; firmware/update record
**Verification:** malformed/hostile inputs, reconnect, suspend, key storage, power, firmware failure and coexistence tests
**Evidence:** wireless matrix; security review; power traces; firmware provenance
**Traceability:** specs: AOS-HW-003#connectivity;AOS-ARCH-007#network-service; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-054"></a>

#### AOS-OPEN-054 — Enable open-phone sensors and GNSS baseline

**Type / priority / status:** Task · P2 · Backlog
**Owner / workstream:** Sensor/GNSS Engineer · PinePhone Pro
**Schedule:** 2027-08-09 → 2027-11-14 · 20 estimated days · M8
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-PLAT-013
**Related tasks:** AOS-OPEN-051

**Outcome.** Expose motion, orientation, proximity, ambient, location and time observations through permissioned portable services with calibration and privacy.

**Scope.** Produce and integrate: sensor/GNSS backends; calibration; permissions; timestamps/accuracy; power modes; fake/replay data. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Consumers receive accuracy/freshness/provenance and location/sensor access follows explicit foreground/background policy
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** sensor/GNSS backends; calibration; permissions; timestamps/accuracy; power modes; fake/replay data
**Verification:** known-motion/location comparisons, denied/background access, suspend/resume and calibration persistence
**Evidence:** accuracy/power report; privacy tests; sensor conformance
**Traceability:** specs: AOS-ARCH-006#sensor-contract;AOS-ARCH-012#location-privacy; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-055"></a>

#### AOS-OPEN-055 — Measure and improve open-phone idle, suspend, wake, charging, and thermal behavior

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Mobile Power Engineer · PinePhone Pro
**Schedule:** 2027-08-09 → 2027-12-26 · 28 estimated days · M6
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-PLAT-041;AOS-OPEN-002
**Related tasks:** AOS-OPEN-051

**Outcome.** Establish safe phone power operation and quantify whether hardware can support a connected-device preview.

**Scope.** Produce and integrate: battery/charger backend; wake-source matrix; suspend states; idle/load/thermal profiles; safety limits; remediation backlog. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Unsafe charging/thermal behavior is blocked, wake causes are attributable, and preview claim includes measured idle/runtime limitations
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** battery/charger backend; wake-source matrix; suspend states; idle/load/thermal profiles; safety limits; remediation backlog
**Verification:** EXP-023 repeated cycles, network/modem/display states, charger variants, low battery, wake storms and thermal limits
**Evidence:** power traces; thermal report; battery cycle data; EXP-023 record
**Traceability:** specs: AOS-HW-003#power-path;AOS-ARCH-014#measurement; sources: none; claims: none; experiments: EXP-023
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-056"></a>

#### AOS-OPEN-056 — Validate open-phone update and recovery

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Open Phone Release Engineer · PinePhone Pro
**Schedule:** 2027-10-04 → 2027-12-26 · 16 estimated days · M8
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-OPEN-050;AOS-PLAT-052;AOS-SEC-041
**Related tasks:** AOS-PLAT-051

**Outcome.** Prove failed updates, corrupt state, lost user-space service, and bad board package can return to a trusted bootable state.

**Scope.** Produce and integrate: target update layout; signed recovery path; rollback/repair tooling; user-facing limitations; drill scripts. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A published supported build cannot permanently brick from a single failed update under declared hardware assumptions
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** target update layout; signed recovery path; rollback/repair tooling; user-facing limitations; drill scripts
**Verification:** interrupt every update phase, corrupt partitions/manifests and recover two devices from external instructions
**Evidence:** recovery drill; update traces; boot-state inventory; support decision
**Traceability:** specs: AOS-ARCH-013#recovery-environment;AOS-HW-003#support-definition; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-057"></a>

#### AOS-OPEN-057 — Integrate open-phone modem hardware with native cellular service

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Cellular/Open Phone Engineer · PinePhone Pro
**Schedule:** 2027-08-09 → 2027-12-12 · 25 estimated days · M6
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-PLAT-040
**Related tasks:** AOS-OPEN-051;AOS-CELL-020

**Outcome.** Connect the physically separate modem transport, control, power/reset and SIM paths without importing Linux runtime APIs.

**Scope.** Produce and integrate: modem hardware backend; power/reset; USB/serial transport; SIM routing; diagnostics; cellular-service binding. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Modem is treated as an untrusted peripheral, Linux D-Bus/network/plugin ABIs are absent, and failures do not destabilize core services
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** modem hardware backend; power/reset; USB/serial transport; SIM routing; diagnostics; cellular-service binding
**Verification:** registration/data/SMS tasks, modem crash/replug/reset, suspend and capability isolation
**Evidence:** modem traces; power/lifecycle tests; dependency scan; support matrix
**Traceability:** specs: AOS-HW-003#modem-role;AOS-HW-007#native-cellular-stack; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-060"></a>

#### AOS-OPEN-060 — Design reproducible community hardware kit

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Community Hardware Lead · Community Hardware
**Schedule:** 2028-07-10 → 2028-12-24 · 20 estimated days · M10
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-OPEN-030;AOS-PLAT-090;AOS-COMM-050
**Related tasks:** none

**Outcome.** Select a documented board, peripherals, camera/display/input/power setup and recovery method that external contributors can obtain and reproduce.

**Scope.** Produce and integrate: kit BOM/revisions; assembly/flash/recovery guide; test image; conformance checklist; support/lifecycle/alternatives. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Kit has at least two supply sources or successor plan, exact revisions, non-destructive recovery, and tests that identify unsupported substitutions
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** kit BOM/revisions; assembly/flash/recovery guide; test image; conformance checklist; support/lifecycle/alternatives
**Verification:** internal clean-room-style reproduction before external pilot
**Evidence:** kit build records; availability/pricing check; issue list; maintainer commitment
**Traceability:** specs: AOS-GOV-002#hardware-maintainers;AOS-HW-008#community-reference-kit; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-070"></a>

#### AOS-OPEN-070 — Complete current Fairphone feasibility dossier

**Type / priority / status:** Experiment · P2 · Backlog
**Owner / workstream:** Partner Hardware Researcher · Semi-Open Hardware
**Schedule:** 2026-10-05 → 2027-01-24 · 10 estimated days · M5
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-LEGAL-006;AOS-OPEN-001;AOS-OPEN-003
**Related tasks:** none

**Outcome.** Determine whether a current Fairphone offers a useful quality/documentation/boot/supply partnership route without making Android a native dependency.

**Scope.** Produce and integrate: exact-SKU dossier; source/docs/firmware/boot/camera/power/radio/rights/supply analysis; vendor outreach; scorecard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Recommendation states unique evidence, native blockers, rights, cost, partner ask and stop condition rather than equating source release with openness
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** exact-SKU dossier; source/docs/firmware/boot/camera/power/radio/rights/supply analysis; vendor outreach; scorecard
**Verification:** EXP-024 and counsel/architecture/hardware review
**Evidence:** dossier; vendor response; score changes; EXP-024 record
**Traceability:** specs: AOS-HW-005#fairphone-track;AOS-HW-005#dossier-requirements; sources: SRC-026;SRC-027; claims: CLM-022; experiments: EXP-024
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-open-071"></a>

#### AOS-OPEN-071 — Complete Sony Open Devices feasibility dossier

**Type / priority / status:** Experiment · P2 · Backlog
**Owner / workstream:** Partner Hardware Researcher · Semi-Open Hardware
**Schedule:** 2026-10-05 → 2027-01-24 · 10 estimated days · M5
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-LEGAL-006;AOS-OPEN-001
**Related tasks:** none

**Outcome.** Determine whether a current supported Xperia program provides a useful quality/reference/partner route for native Agent OS work.

**Scope.** Produce and integrate: supported-device dossier; AOSP binary/source/boot/camera/power/radio/rights/lifecycle analysis; outreach; scorecard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Recommendation distinguishes AOSP support from native hardware documentation and identifies any contract needed for Agent OS
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** supported-device dossier; AOSP binary/source/boot/camera/power/radio/rights/lifecycle analysis; outreach; scorecard
**Verification:** EXP-025 and review against public program terms/current device support
**Evidence:** dossier; vendor response; score changes; EXP-025 record
**Traceability:** specs: AOS-HW-005#sony-track;AOS-HW-005#dossier-requirements; sources: SRC-028; claims: CLM-022; experiments: EXP-025
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-open-072"></a>

#### AOS-OPEN-072 — Evaluate Librem 5 as modular-radio/manufacturing prior art

**Type / priority / status:** Spike · P3 · Backlog
**Owner / workstream:** Open Hardware Researcher · Open Phone Research
**Schedule:** 2026-11-02 → 2027-01-10 · 6 estimated days · M5
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-OPEN-001;AOS-LEGAL-006
**Related tasks:** none

**Outcome.** Assess whether its hardware documentation, replaceable modem/Wi-Fi, kill switches and supply/manufacturing experience justify acquisition or collaboration.

**Scope.** Produce and integrate: public-source dossier; modularity/power/performance/cost analysis; contact decision; scorecard update. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Purchase occurs only if expected modular/certification/manufacturing evidence exceeds cost and duplicates
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** public-source dossier; modularity/power/performance/cost analysis; contact decision; scorecard update
**Verification:** source/vendor review and comparison to PinePhone/custom carrier goals
**Evidence:** dossier; buy/no-buy decision; related architecture findings
**Traceability:** specs: AOS-HW-003#librem-role;AOS-HW-010#candidate-scorecard; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-open-080"></a>

#### AOS-OPEN-080 — Select maintained hardware portfolio after M6/M7

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** Architecture Council / Program Lead · Portfolio
**Schedule:** 2028-01-24 → 2028-02-13 · 6 estimated days · M9
**Parent:** AOS-OPEN-000
**Dependencies:** AOS-OPEN-030;AOS-OPEN-055;AOS-OPEN-070;AOS-OPEN-071
**Related tasks:** AOS-P9-070

**Outcome.** Re-score QEMU, documented boards, open phones, Pixel, semi-open candidates and custom path from measured evidence and owner capacity.

**Scope.** Produce and integrate: updated scorecard; maintained/experimental/retired assignments; budgets/owners; route hypotheses; public support language. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Record exact board/device revision and recovery path; hardware-specific behavior terminates in board packages and service backends.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No target remains maintained without unique value, owner, specimens, recovery, test scope and lifecycle budget
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** updated scorecard; maintained/experimental/retired assignments; budgets/owners; route hypotheses; public support language
**Verification:** cross-functional gate review with total cost and capacity model
**Evidence:** signed portfolio decision; retired-target migration plan; risk/budget updates
**Traceability:** specs: AOS-HW-010#evidence-updates;AOS-PLAN-006#technical-gates; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-open-090"></a>

#### AOS-OPEN-090 — Produce the BeagleY-AI and AM67A target dossier

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Open Hardware Lead · Target Dossier
**Schedule:** 2026-08-10 → 2026-09-20 · 15 estimated days · M1
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Produce the BeagleY-AI and AM67A target dossier.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-011#candidate-table, AOS-HW-004#target-dossier. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Produce the BeagleY-AI and AM67A target dossier; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-011#candidates;AOS-HW-004#documentation-audit; sources: SRC-087;SRC-088; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-open-091"></a>

#### AOS-OPEN-091 — Produce the NXP i.MX 8M Plus target and camera dossier

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Open Hardware Lead · Target Dossier
**Schedule:** 2026-08-10 → 2026-09-27 · 18 estimated days · M1
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Produce the NXP i.MX 8M Plus target and camera dossier.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-011#candidate-table, AOS-HW-012#documented-isp. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Produce the NXP i.MX 8M Plus target and camera dossier; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-011#candidates;AOS-HW-012#tracks; sources: SRC-089;SRC-090;SRC-091; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-open-092"></a>

#### AOS-OPEN-092 — Produce the RK3588 performance-target dossier

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Open Hardware Lead · Target Dossier
**Schedule:** 2026-08-17 → 2026-10-04 · 18 estimated days · M1
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Produce the RK3588 performance-target dossier.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-011#candidate-table, AOS-HW-013#performance. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Produce the RK3588 performance-target dossier; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-011#candidates;AOS-HW-013#categories; sources: SRC-092;SRC-093; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-open-093"></a>

#### AOS-OPEN-093 — Produce the VIM3/A311D reference dossier

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Open Hardware Lead · Target Dossier
**Schedule:** 2026-08-17 → 2026-09-27 · 15 estimated days · M1
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Produce the VIM3/A311D reference dossier.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-011#candidate-table, AOS-RES-007#systems. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Produce the VIM3/A311D reference dossier; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-011#candidates;AOS-RES-007#dimensions; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-open-094"></a>

#### AOS-OPEN-094 — Refresh the PinePhone Pro native phone-form dossier

**Type / priority / status:** Review · P1 · Planned
**Owner / workstream:** Open Phone Lead · Open Phone
**Schedule:** 2026-08-17 → 2026-09-27 · 15 estimated days · M1
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Refresh the PinePhone Pro native phone-form dossier.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-003#pinephone-pro-role, AOS-HW-011#candidate-table. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Refresh the PinePhone Pro native phone-form dossier; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-003#pinephone-pro-role;AOS-HW-011#candidates; sources: SRC-085;SRC-086; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-open-095"></a>

#### AOS-OPEN-095 — Compare Fairphone and Sony as semi-open quality bridges

**Type / priority / status:** Review · P1 · Planned
**Owner / workstream:** Quality Hardware Lead · Quality Bridge
**Schedule:** 2026-08-24 → 2026-10-11 · 18 estimated days · M1
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Compare Fairphone and Sony as semi-open quality bridges.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-005#dossier-requirements, AOS-HW-011#candidate-table. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Compare Fairphone and Sony as semi-open quality bridges; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-005#dossier-requirements;AOS-HW-011#candidates; sources: SRC-083;SRC-084; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-open-096"></a>

#### AOS-OPEN-096 — Select two unrelated documented SoC families for native ports

**Type / priority / status:** Decision · P0 · Planned
**Owner / workstream:** Architecture and Hardware Leads · Target Selection
**Schedule:** 2026-09-21 → 2026-10-11 · 8 estimated days · M1
**Parent:** AOS-OPEN-000
**Dependencies:** none
**Related tasks:** AOS-OPEN-090;AOS-OPEN-091;AOS-OPEN-092;AOS-OPEN-093

**Outcome.** Select two unrelated documented SoC families for native ports.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-011#selection, AOS-ARCH-016#portability-proof. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Select two unrelated documented SoC families for native ports; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-011#selection;AOS-ARCH-016#conformance; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="track-aos-p9"></a>

### AOS-P9

<a id="task-aos-p9-000"></a>

#### AOS-P9-000 — Pixel 9 Quality-Hardware Research epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Pixel Track Lead · Program
**Schedule:** 2026-07-27 → 2028-02-06 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Use Pixel 9 minimally as a quality oracle and bounded native feasibility target.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-HW-002#track-purpose; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-001"></a>

#### AOS-P9-001 — Complete Pixel 9 target and legal dossier

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Pixel Track Lead · Pixel Dossier
**Schedule:** 2026-07-27 → 2026-09-20 · 15 estimated days · M1
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** AOS-OPEN-001;AOS-DOCS-004;AOS-LEGAL-005

**Outcome.** Record exact SKU, SoC/subsystems, boot/recovery, public sources, factory artifacts, terms, firmware, debug, camera, power, radio, security and unknowns before native work.

**Scope.** Produce and integrate: target dossier; subsystem/source/rights map; exact-SKU matrix; experiment/stop plan; artifact controls. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No native Pixel implementation task begins with an unspecified SKU, source class, recovery path, artifact right or stop condition
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** target dossier; subsystem/source/rights map; exact-SKU matrix; experiment/stop plan; artifact controls
**Verification:** architecture/hardware/security/legal review against official/current sources and acquired unit
**Evidence:** dossier; approved/blocked method list; unresolved-source matrix
**Traceability:** specs: AOS-HW-002#target-dossier;AOS-LEGAL-002#pixel-application; sources: SRC-019;SRC-020;SRC-021; claims: none; experiments: none
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-010"></a>

#### AOS-P9-010 — Verify Pixel 9 acquisition, unlock, relock, and stock restore

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Pixel Lab Engineer · Pixel Lab
**Schedule:** 2026-08-10 → 2026-10-04 · 7 estimated days · M1
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** AOS-P9-001;AOS-OPEN-003;AOS-LEGAL-006

**Outcome.** Acquire appropriate non-carrier-restricted development units and prove a reversible documented unlock/recovery path before destructive research.

**Scope.** Produce and integrate: SKU/seller records; stock backups; unlock/relock/restore procedure; data-wipe/user-warning record; spare/stock oracle allocation. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Exact acquired SKU is demonstrably unlockable/restorable under approved terms and no irreplaceable user data/credentials are used
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** SKU/seller records; stock backups; unlock/relock/restore procedure; data-wipe/user-warning record; spare/stock oracle allocation
**Verification:** EXP-030 on at least two development units with factory restore and one preserved stock oracle
**Evidence:** unlock/restore logs; purchase/firmware hashes; EXP-030 record
**Traceability:** specs: AOS-HW-002#device-acquisition;AOS-LEGAL-001#device-and-protocol-work; sources: SRC-019;SRC-020; claims: CLM-005; experiments: EXP-030
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-011"></a>

#### AOS-P9-011 — Automate Pixel stock recovery and artifact inventory

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Pixel Lab Engineer · Pixel Lab
**Schedule:** 2026-08-24 → 2026-10-18 · 10 estimated days · M1
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** AOS-P9-010;AOS-P9-001

**Outcome.** Create safe repeatable stock-image restoration, build/firmware identification, partition inventory, boot-state capture and device reset procedures.

**Scope.** Produce and integrate: recovery scripts/runbook; artifact/hash/license inventory; boot-state capture; destructive-operation interlocks; audit log. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every experiment can return the unit to a known stock state and no unapproved artifact is redistributed or committed
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** recovery scripts/runbook; artifact/hash/license inventory; boot-state capture; destructive-operation interlocks; audit log
**Verification:** recover from intentionally bad noncritical image/state and reproduce on a second unit
**Evidence:** recovery drill; artifact manifest; safety review; time-to-recover metrics
**Traceability:** specs: AOS-HW-002#recovery-first;AOS-LEGAL-002#artifact-controls; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-015"></a>

#### AOS-P9-015 — Enforce Pixel Android/Linux dependency containment

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Architecture/Build Engineer · Containment
**Schedule:** 2026-08-24 → 2028-02-06 · 10 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** AOS-DOCS-007
**Related tasks:** AOS-P9-001;AOS-PLAT-001

**Outcome.** Continuously prove that Pixel-only stock, sidecar, trace, firmware and bring-up aids do not enter native portable code, IDL, schemas or product state.

**Scope.** Produce and integrate: forbidden dependency/type rules; source/binary graph scanner; adapter inventory; retirement ledger; CI gate. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Seeded leakage fails CI, every temporary dependency has owner/expiry/alternative, and portable packages build without Pixel artifacts
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** forbidden dependency/type rules; source/binary graph scanner; adapter inventory; retirement ledger; CI gate
**Verification:** EXP-031 with seeded Android/Linux/Binder/POSIX/vendor types and actual Pixel components
**Evidence:** dependency reports; adapter/retirement dashboard; EXP-031 records
**Traceability:** specs: AOS-ARCH-011#pixel-legacy-boundary;AOS-ADR-0004#decision; sources: none; claims: CLM-004; experiments: EXP-031
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-020"></a>

#### AOS-P9-020 — Build Pixel 9 stock camera/display/power quality oracle

**Type / priority / status:** Experiment · P1 · Backlog
**Owner / workstream:** Pixel Quality Engineer · Quality Oracle
**Schedule:** 2026-09-21 → 2027-01-10 · 18 estimated days · M5
**Parent:** AOS-P9-000
**Dependencies:** AOS-OPEN-002
**Related tasks:** AOS-P9-010;AOS-CAM-001;AOS-LEGAL-008

**Outcome.** Capture repeatable stock baselines and test procedures for image/video, display/frame/input, battery/thermal/suspend and common workflows.

**Scope.** Produce and integrate: stock test image/config; camera RAW/processed/video corpus where accessible; display/power traces; workflow baselines; metadata/provenance. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Baseline identifies stock build/settings/unit/conditions, can be repeated, and is used only as comparison—not evidence of native feasibility
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** stock test image/config; camera RAW/processed/video corpus where accessible; display/power traces; workflow baselines; metadata/provenance
**Verification:** EXP-035 repeated across two units, software versions, controlled scenes/workloads and battery states
**Evidence:** oracle dataset; repeatability/variance report; EXP-035 record
**Traceability:** specs: AOS-HW-002#quality-oracle;AOS-HW-006#quality-definition; sources: SRC-021; claims: none; experiments: EXP-035
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-021"></a>

#### AOS-P9-021 — Implement approved Pixel trace and observation tooling

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Pixel Evidence Engineer · Trace and Observation
**Schedule:** 2026-10-05 → 2027-01-24 · 18 estimated days · M3
**Parent:** AOS-P9-000
**Dependencies:** AOS-LEGAL-007
**Related tasks:** AOS-PLAT-081;AOS-P9-011

**Outcome.** Collect sanitized black-box and stock-system observations needed for native contract tests without copying protected implementation or personal data.

**Scope.** Produce and integrate: observation scripts; portable trace adapters; sanitizer; source/provenance/retention manifest; black-box test fixtures. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Only approved functional observations leave quarantine, traces contain no Android/Linux ABI or protected/personal payload, and version is explicit
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** observation scripts; portable trace adapters; sanitizer; source/provenance/retention manifest; black-box test fixtures
**Verification:** legal/source review, sensitive/proprietary scan, deterministic replay and version-change test
**Evidence:** approved trace corpus; sanitation report; observation protocol; hashes
**Traceability:** specs: AOS-LEGAL-002#workflow; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-022"></a>

#### AOS-P9-022 — Define temporary Pixel sidecar/proxy contracts and retirement plan

**Type / priority / status:** Task · P2 · Backlog
**Owner / workstream:** Pixel Adapter Architect · Sidecar
**Schedule:** 2026-11-30 → 2027-02-21 · 15 estimated days · M4
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** AOS-P9-015;AOS-P9-021;AOS-PLAT-039;AOS-PLAT-040

**Outcome.** Allow selected stock-OS device capabilities to feed experiments through explicit portable proxy services while preserving native replacement boundaries.

**Scope.** Produce and integrate: proxy threat model; portable message schemas; authentication/encryption; mock/native backends; dependency and retirement tasks; visible labeling. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Proxy cannot grant broader device/Android authority, product code cannot distinguish it except declared capability quality, and it has a removal/limit gate
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** proxy threat model; portable message schemas; authentication/encryption; mock/native backends; dependency and retirement tasks; visible labeling
**Verification:** disconnect/compromise/version mismatch/replay/data minimization and native-backend swap tests
**Evidence:** adapter conformance; threat review; dependency graph; user-facing labels
**Traceability:** specs: AOS-HW-002#sidecar-and-proxy;AOS-ARCH-011#compatibility-cells; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-030"></a>

#### AOS-P9-030 — Reach lawful reproducible Agent OS early diagnostics on Pixel 9

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Pixel Boot Engineer · Native Bring-up
**Schedule:** 2027-01-25 → 2027-06-13 · 30 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** AOS-P9-010;AOS-P9-011;AOS-LEGAL-007;AOS-CORE-012
**Related tasks:** none

**Outcome.** Determine whether the Pixel boot chain can load Agent OS far enough to produce independent early diagnostics without undocumented portable dependencies.

**Scope.** Produce and integrate: boot-chain map; loader/image path; early console/trace channel; CPU/memory seed; recovery-safe automation; provenance dossier. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Positive result is reproducible and lawfully documentable
- negative result triggers stop/limit rather than hidden use of Android/Linux runtime
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** boot-chain map; loader/image path; early console/trace channel; CPU/memory seed; recovery-safe automation; provenance dossier
**Verification:** EXP-032 repeated from stock/recovery states on two units, malformed image and loss-of-diagnostic tests
**Evidence:** boot logs/traces; artifact/source manifest; time/cost log; EXP-032 record
**Traceability:** specs: AOS-HW-002#phase-one-boot;AOS-PLAN-006#pixel-stop-criteria; sources: none; claims: CLM-006; experiments: EXP-032
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-031"></a>

#### AOS-P9-031 — Map Pixel boot, memory, interrupt, timer, IOMMU, and storage architecture

**Type / priority / status:** Spike · P1 · Backlog
**Owner / workstream:** Pixel Platform Architect · Native Bring-up
**Schedule:** 2027-04-19 → 2027-09-05 · 30 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** AOS-CORE-037;AOS-PLAT-020
**Related tasks:** AOS-P9-030

**Outcome.** Produce an approved functional specification and native board-package plan for essential SoC/board primitives after early diagnostics.

**Scope.** Produce and integrate: functional specs; board resource manifest; memory/IOMMU/storage maps; test plan; unknown/proprietary dependency and cost report. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Continue implementation only for subsystems with sufficient lawful specification and safe recovery
- unknowns remain explicit
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** functional specs; board resource manifest; memory/IOMMU/storage maps; test plan; unknown/proprietary dependency and cost report
**Verification:** clean-room/source review, controlled probes, consistency with boot traces and independent reviewer
**Evidence:** approved specifications; experiment logs; residual-risk/cost matrix
**Traceability:** specs: AOS-HW-002#phase-two-platform;AOS-LEGAL-002#workflow; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 5 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-040"></a>

#### AOS-P9-040 — Evaluate native Pixel storage, USB, display, and touch paths

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Pixel I/O Lead · Native Bring-up
**Schedule:** 2027-05-31 → 2027-11-28 · 45 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** AOS-PLAT-031
**Related tasks:** AOS-P9-031;AOS-PLAT-034;AOS-PLAT-037;AOS-PLAT-035

**Outcome.** Prove or bound the route to persistent storage, USB debug/recovery, first frame and touch without leaking vendor interfaces into portable services.

**Scope.** Produce and integrate: native/functional-spec backends or bounded blockers; first-frame/storage/USB/touch evidence; interface leakage and recovery report. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A positive path uses native portable service contracts and a negative path names exact unavailable dependency, legal constraint, cost and fallback
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** native/functional-spec backends or bounded blockers; first-frame/storage/USB/touch evidence; interface leakage and recovery report
**Verification:** EXP-033 cold boots, I/O/display/touch/reset/driver-fault and bad-image recovery across two units
**Evidence:** first frame/logs; storage/USB tests; interface diff; EXP-033 record
**Traceability:** specs: AOS-HW-002#phase-three-essential-io;AOS-ARCH-006#board-package; sources: none; claims: CLM-006; experiments: EXP-033
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-041"></a>

#### AOS-P9-041 — Evaluate native Pixel audio and basic device-service paths

**Type / priority / status:** Spike · P2 · Backlog
**Owner / workstream:** Pixel Device Services Engineer · Native Bring-up
**Schedule:** 2027-06-28 → 2027-11-28 · 30 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** AOS-P9-031;AOS-PLAT-036;AOS-PLAT-041

**Outcome.** Bound speaker/microphone, buttons/haptics, sensors and basic power-state integrations without asserting modem/camera readiness.

**Scope.** Produce and integrate: subsystem specs/backends or blockers; audio/privacy/power tests; board-package updates; cost/rights report. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Each subsystem has separate evidence and no combined “phone works” claim is made from partial device I/O
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** subsystem specs/backends or blockers; audio/privacy/power tests; board-package updates; cost/rights report
**Verification:** controlled output/input/button/sensor/power transitions, failure and privacy tests where feasible
**Evidence:** subsystem matrix; traces; source/rights review; residual risk
**Traceability:** specs: AOS-HW-002#phase-three-essential-io;AOS-ARCH-006#device-lifecycle; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-050"></a>

#### AOS-P9-050 — Evaluate Pixel GPU, display acceleration, power, and thermal feasibility

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Pixel GPU/Power Lead · Native Feasibility
**Schedule:** 2027-07-26 → 2028-01-09 · 40 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** AOS-PLAT-041;AOS-LEGAL-007
**Related tasks:** AOS-P9-040;AOS-PLAT-038

**Outcome.** Determine whether a bounded lawful native GPU/display acceleration and safe power/thermal route exists at acceptable effort.

**Scope.** Produce and integrate: GPU/display/power functional dossiers; minimal native experiments where allowed; command/firmware/power dependencies; performance/safety/cost forecast. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Panfrost/Mesa knowledge is treated only as prior art
- continue requires SoC display, firmware, IOMMU, power and security route—not GPU brand similarity
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** GPU/display/power functional dossiers; minimal native experiments where allowed; command/firmware/power dependencies; performance/safety/cost forecast
**Verification:** EXP-034 first accelerated workload or bounded blocker, power/thermal transitions and interface/provenance review
**Evidence:** protocol/source dossier; traces; power/thermal metrics; EXP-034 record
**Traceability:** specs: AOS-HW-002#gpu-and-display;AOS-HW-002#power-and-thermal; sources: SRC-041;SRC-042; claims: CLM-007; experiments: EXP-034
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-051"></a>

#### AOS-P9-051 — Evaluate native Pixel camera feasibility and quality gap

**Type / priority / status:** Spike · P1 · Backlog
**Owner / workstream:** Pixel Camera Lead · Native Feasibility
**Schedule:** 2027-08-09 → 2028-01-23 · 35 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** AOS-P9-020;AOS-CAM-010;AOS-LEGAL-007
**Related tasks:** AOS-P9-031;AOS-CAM-041

**Outcome.** Map sensors, CSI, ISP, lens/OIS, metadata, calibration, firmware, tuning, power and legal rights to determine a native or controlled-adapter route.

**Scope.** Produce and integrate: camera subsystem/source/rights/calibration/tuning map; native capture spike if lawful; quality/resource gap; partner/stop recommendation. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No published paper, Linux driver or stock quality is treated as transferable production stack
- every missing element is itemized
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** camera subsystem/source/rights/calibration/tuning map; native capture spike if lawful; quality/resource gap; partner/stop recommendation
**Verification:** compare accessible native evidence to stock oracle and portable camera API; legal/security/camera review
**Evidence:** camera feasibility dossier; sample captures if any; rights/cost gap; decision input
**Traceability:** specs: AOS-HW-002#camera-feasibility;AOS-HW-006#controlled-proprietary-option; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-052"></a>

#### AOS-P9-052 — Evaluate Pixel modem, radio, secure element, and verified-boot boundaries

**Type / priority / status:** Spike · P2 · Backlog
**Owner / workstream:** Pixel Security/Radio Lead · Native Feasibility
**Schedule:** 2027-08-23 → 2028-01-23 · 30 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** AOS-CELL-001;AOS-SEC-030;AOS-LEGAL-007;AOS-LEGAL-010
**Related tasks:** AOS-P9-031

**Outcome.** Identify lawful native control, firmware, provisioning, key, attestation, cellular and certification dependencies without attempting unsafe or unsupported claims.

**Scope.** Produce and integrate: boundary/source/rights map; secure boot/key/attestation possibilities; modem/IMS/eSIM/certification blockers; safe experiment plan; recommendation. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Result does not claim Titan/Android verified boot, carrier voice, eSIM or emergency support “as-is” and states root-of-trust ownership
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** boundary/source/rights map; secure boot/key/attestation possibilities; modem/IMS/eSIM/certification blockers; safe experiment plan; recommendation
**Verification:** official/public-source and approved black-box review with security/cellular/legal specialists
**Evidence:** boundary dossier; prohibited/unknown list; partner requirements; risk update
**Traceability:** specs: AOS-HW-002#radio-and-security;AOS-ARCH-013#root-of-trust; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 5 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-060"></a>

#### AOS-P9-060 — Audit Pixel track source, license, security, and publication readiness

**Type / priority / status:** Review · P0 · Backlog
**Owner / workstream:** Legal/Security/Architecture Review Team · Gate Review
**Schedule:** 2027-12-13 → 2028-02-06 · 12 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** AOS-P9-021;AOS-P9-030;AOS-P9-040
**Related tasks:** AOS-P9-015;AOS-P9-050;AOS-P9-051;AOS-P9-052

**Outcome.** Review every Pixel artifact, specification, trace, adapter, code contribution, dependency and public claim before gate decision or release.

**Scope.** Produce and integrate: artifact/provenance/license audit; clean-room attestations; dependency scan; public redaction; security/claim review; remediation list. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No unknown/red artifact, protected data, unapproved firmware, undocumented Android/Linux dependency or overstated claim enters public release
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** artifact/provenance/license audit; clean-room attestations; dependency scan; public redaction; security/claim review; remediation list
**Verification:** independent sample/rebuild/scan and counsel sign-off on releasable scope
**Evidence:** audit report; quarantined/remediated list; release boundary; approval record
**Traceability:** specs: AOS-LEGAL-002#artifact-controls;AOS-LEGAL-003#release-gate;AOS-ARCH-011#pixel-legacy-boundary; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-070"></a>

#### AOS-P9-070 — Issue Pixel 9 continue, limit, or stop gate decision

**Type / priority / status:** Decision · P0 · Backlog
**Owner / workstream:** Program Lead / Architecture Council · Gate Review
**Schedule:** 2028-01-24 → 2028-02-13 · 6 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** AOS-P9-050;AOS-P9-051;AOS-P9-052;AOS-OPEN-030
**Related tasks:** AOS-P9-060

**Outcome.** Decide whether native Pixel work continues, remains a quality/sidecar target, or stops based on evidence, legal rights, effort, opportunity cost and portable architecture impact.

**Scope.** Produce and integrate: G7 packet; subsystem outcomes; total-cost forecast; selected role; adapter retirement/maintenance; public wording; budget decision. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Decision is allowed to stop
- continuation requires a bounded route for essential I/O, safe power and unique value exceeding opportunity cost
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** G7 packet; subsystem outcomes; total-cost forecast; selected role; adapter retirement/maintenance; public wording; budget decision
**Verification:** cross-functional review with comparison to documented/open/custom alternatives
**Evidence:** signed gate decision; scorecard/risk/task updates; stop/continue rationale
**Traceability:** specs: AOS-PLAN-006#pixel-stop-criteria;AOS-HW-002#decision-gate; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-080"></a>

#### AOS-P9-080 — Retire or constrain temporary Pixel adapters after gate

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Pixel Adapter Architect · Retirement
**Schedule:** 2028-02-07 → 2028-06-25 · 20 estimated days · M9
**Parent:** AOS-P9-000
**Dependencies:** AOS-P9-015
**Related tasks:** AOS-P9-070

**Outcome.** Remove, freeze, or explicitly maintain each stock/sidecar/trace dependency according to G7 and native replacement evidence.

**Scope.** Produce and integrate: adapter disposition list; native replacements; frozen compatibility versions; user labels; deletion/quarantine of unnecessary artifacts; support tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Keep every Android/Linux artifact inside the Pixel adapter, stock-oracle, trace, or recovery boundary; do not alter portable Agent OS contracts to match a vendor ABI.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No temporary adapter survives without an approved maintained purpose, owner, version/security policy and visible product distinction
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** adapter disposition list; native replacements; frozen compatibility versions; user labels; deletion/quarantine of unnecessary artifacts; support tests
**Verification:** portable build/test without retired adapters and declared maintenance tests for retained ones
**Evidence:** dependency delta; retirement report; support matrix; artifact disposition
**Traceability:** specs: AOS-ARCH-011#retirement-requirement;AOS-ADR-0004#consequences; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** none

<a id="task-aos-p9-090"></a>

#### AOS-P9-090 — Establish Pixel 9 stock baseline, SKU, unlock, and recovery evidence

**Type / priority / status:** Experiment · P0 · Planned
**Owner / workstream:** Pixel Track Lead · Acquisition and Recovery
**Schedule:** 2026-08-03 → 2026-09-13 · 15 estimated days · M1
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Establish Pixel 9 stock baseline, SKU, unlock, and recovery evidence.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-014#entry-gates, AOS-HW-014#experiments. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Establish Pixel 9 stock baseline, SKU, unlock, and recovery evidence; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-014#role;AOS-HW-014#experiments; sources: SRC-020;SRC-081; claims: CLM-005; experiments: EXP-030
**Phase / volume:** Phase 1 · Volume 03
**Specialist review:** legal;hardware

<a id="task-aos-p9-091"></a>

#### AOS-P9-091 — Produce Pixel 9 boot-chain and early-diagnostics dossier

**Type / priority / status:** Experiment · P0 · Planned
**Owner / workstream:** Pixel Boot Engineer · Boot Feasibility
**Schedule:** 2027-02-22 → 2027-05-16 · 30 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Produce Pixel 9 boot-chain and early-diagnostics dossier.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-014#experiments, AOS-ARCH-017#pixel-gates. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Produce Pixel 9 boot-chain and early-diagnostics dossier; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-014#experiments;AOS-ARCH-017#pixel; sources: none; claims: CLM-006; experiments: EXP-032
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** reverse-engineering-legal;kernel

<a id="task-aos-p9-092"></a>

#### AOS-P9-092 — Test Pixel 9 USB, storage, display, and touch feasibility

**Type / priority / status:** Experiment · P0 · Planned
**Owner / workstream:** Pixel Platform Engineer · Essential Hardware
**Schedule:** 2027-05-17 → 2027-09-05 · 40 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Test Pixel 9 USB, storage, display, and touch feasibility.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-014#experiments, AOS-HW-014#stop. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Test Pixel 9 USB, storage, display, and touch feasibility; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-014#experiments;AOS-HW-014#stop; sources: none; claims: CLM-006; experiments: EXP-033
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** hardware

<a id="task-aos-p9-093"></a>

#### AOS-P9-093 — Test Pixel 9 GPU, IOMMU, firmware, and power feasibility

**Type / priority / status:** Experiment · P0 · Planned
**Owner / workstream:** GPU and Power Engineers · GPU and Power
**Schedule:** 2027-07-12 → 2027-11-14 · 45 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Test Pixel 9 GPU, IOMMU, firmware, and power feasibility.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-014#gpu, AOS-HW-014#power. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Test Pixel 9 GPU, IOMMU, firmware, and power feasibility; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-014#experiments;AOS-HW-014#experiments; sources: none; claims: CLM-007; experiments: EXP-034
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** gpu;legal

<a id="task-aos-p9-094"></a>

#### AOS-P9-094 — Test Pixel 9 camera control and quality replacement feasibility

**Type / priority / status:** Experiment · P0 · Planned
**Owner / workstream:** Camera and Pixel Leads · Camera Feasibility
**Schedule:** 2027-09-06 → 2028-01-09 · 45 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Test Pixel 9 camera control and quality replacement feasibility.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-014#camera, AOS-HW-012#pixel-oracle. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Test Pixel 9 camera control and quality replacement feasibility; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-014#experiments;AOS-HW-012#tracks; sources: none; claims: CLM-013; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** camera;legal

<a id="task-aos-p9-095"></a>

#### AOS-P9-095 — Test Pixel 9 modem isolation and native service boundary feasibility

**Type / priority / status:** Experiment · P1 · Planned
**Owner / workstream:** Cellular and Pixel Leads · Cellular Feasibility
**Schedule:** 2027-10-18 → 2028-02-20 · 45 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Test Pixel 9 modem isolation and native service boundary feasibility.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-014#modem, AOS-HW-007#separate-capability-gates. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Test Pixel 9 modem isolation and native service boundary feasibility; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-014#experiments;AOS-HW-007#separate-capability-gates; sources: none; claims: CLM-008;CLM-009; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** cellular;legal

<a id="task-aos-p9-096"></a>

#### AOS-P9-096 — Issue the Pixel 9 continue, limit, partner, or stop decision

**Type / priority / status:** Decision · P0 · Planned
**Owner / workstream:** Architecture Council · Track Gate
**Schedule:** 2028-01-10 → 2028-02-06 · 10 estimated days · M7
**Parent:** AOS-P9-000
**Dependencies:** none
**Related tasks:** AOS-P9-091;AOS-P9-092;AOS-P9-093;AOS-P9-094;AOS-P9-095

**Outcome.** Issue the Pixel 9 continue, limit, partner, or stop decision.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-HW-014#decision, AOS-PLAN-012#convergence-gates. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Issue the Pixel 9 continue, limit, partner, or stop decision; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-HW-014#stop;AOS-PLAN-012#convergence; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** architecture;legal;hardware

<a id="track-aos-plat"></a>

### AOS-PLAT

<a id="task-aos-plat-000"></a>

#### AOS-PLAT-000 — Portable Platform epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Platform Lead · Program
**Schedule:** 2026-07-27 → 2029-01-07 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Deliver IDL, board packages, user-space drivers, services, SDK, and conformance.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-ARCH-001#portability-boundaries; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-001"></a>

#### AOS-PLAT-001 — Catalog native platform contracts

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Platform Architect · Architecture
**Schedule:** 2026-07-27 → 2026-08-30 · 10 estimated days · M1
**Parent:** AOS-PLAT-000
**Dependencies:** none
**Related tasks:** AOS-CORE-001;AOS-DOCS-012

**Outcome.** Define the minimal typed service families needed by kernel, system services, product runtime, hardware backends, diagnostics, update, and testing.

**Scope.** Produce and integrate: service catalog; ownership/dependency graph; authority/data/lifecycle fields; target variance model. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every service has an owner, capability boundary, failure/lifecycle model, versioning plan, and at least one emulated backend
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** service catalog; ownership/dependency graph; authority/data/lifecycle fields; target variance model
**Verification:** architecture/security/product/hardware review and Linux/Android type scan
**Evidence:** approved catalog; dependency graph; rejected leakage list
**Traceability:** specs: AOS-ARCH-001#native-contract;AOS-ARCH-007#service-catalog; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-002"></a>

#### AOS-PLAT-002 — Specify Agent OS IDL syntax and semantic model

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** IDL Architect · IDL
**Schedule:** 2026-09-07 → 2026-10-18 · 12 estimated days · M2
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-001
**Related tasks:** AOS-CORE-031

**Outcome.** Define types, methods, events, errors, handles, ownership, optionality, evolution, resource limits, and documentation needed for native service interfaces.

**Scope.** Produce and integrate: IDL grammar; semantic rules; wire ownership model; examples; invalid corpus. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- IDL can express capability-bearing asynchronous services without POSIX/vendor types and rejects ambiguous ownership/evolution
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** IDL grammar; semantic rules; wire ownership model; examples; invalid corpus
**Verification:** parser/typechecker prototype and review against storage/display/camera/cellular/action interfaces
**Evidence:** language spec; conformance examples; review findings
**Traceability:** specs: AOS-ARCH-005#idl-semantics;AOS-ARCH-005#service-contract-rules; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-003"></a>

#### AOS-PLAT-003 — Implement IDL compiler and Rust bindings v0

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** IDL Tooling Engineer · IDL
**Schedule:** 2026-10-05 → 2026-12-13 · 20 estimated days · M2
**Parent:** AOS-PLAT-000
**Dependencies:** none
**Related tasks:** AOS-PLAT-002;AOS-CORE-031

**Outcome.** Generate deterministic client/server bindings, codecs, validation, capability transfer and test fixtures from Agent OS IDL.

**Scope.** Produce and integrate: parser/typechecker; code generator; Rust runtime; golden files; fuzz hooks; docs. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Generated endpoints validate bounds/handles before dispatch, preserve unknown compatible fields, and produce deterministic source
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** parser/typechecker; code generator; Rust runtime; golden files; fuzz hooks; docs
**Verification:** round-trip/golden/invalid/fuzz tests and two independently implemented endpoints
**Evidence:** binding conformance report; generated diff stability; fuzz results
**Traceability:** specs: AOS-ARCH-005#bindings;AOS-ARCH-005#wire-format; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-004"></a>

#### AOS-PLAT-004 — Define API-level and schema evolution tooling

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** API Governance Engineer · API Governance
**Schedule:** 2026-10-19 → 2026-12-06 · 10 estimated days · M2
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-002;AOS-DOCS-007
**Related tasks:** none

**Outcome.** Track interface levels, compatibility ranges, deprecation, migration, unknown fields, feature discovery, and target support.

**Scope.** Produce and integrate: API manifest format; compatibility checker; change classifier; deprecation/migration templates; CI rule. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A breaking wire/semantic change fails CI unless it declares a new level and migration/rollback impact
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** API manifest format; compatibility checker; change classifier; deprecation/migration templates; CI rule
**Verification:** seed breaking/compatible changes and multi-level client/server matrices
**Evidence:** compatibility report; fixture outcomes; policy review
**Traceability:** specs: AOS-ARCH-005#versioning-policy;AOS-GOV-001#api-levels; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-010"></a>

#### AOS-PLAT-010 — Implement user-space service manager

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Platform Runtime Engineer · Runtime
**Schedule:** 2026-11-02 → 2027-01-10 · 20 estimated days · M2
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-CORE-018
**Related tasks:** AOS-CORE-031;AOS-CORE-034;AOS-PLAT-003

**Outcome.** Start, stop, restart, monitor, route capabilities to, and update isolated services from a declarative manifest.

**Scope.** Produce and integrate: service manifest; launcher; capability router; health/restart policy; dependency graph; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No service receives undeclared authority, failures remain isolated, and crash loops are bounded with diagnosable state
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** service manifest; launcher; capability router; health/restart policy; dependency graph; tests
**Verification:** start order, denied route, crash loop, dependency failure, update and resource-exhaustion scenarios
**Evidence:** service lifecycle traces; capability route audit; restart report
**Traceability:** specs: AOS-ARCH-007#service-manager;AOS-ARCH-007#service-lifecycle; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-011"></a>

#### AOS-PLAT-011 — Implement structured logging and diagnostics service

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Observability Engineer · Observability
**Schedule:** 2026-11-16 → 2027-01-03 · 12 estimated days · M2
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-CORE-038
**Related tasks:** AOS-PLAT-010

**Outcome.** Collect bounded structured logs, metrics, traces, crash references, target identity, and privacy classes through explicit capabilities.

**Scope.** Produce and integrate: log/metric/trace IDL; collectors; ring buffers; query/export; redaction/rate limits. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Diagnostics are bounded by producer and class, cannot grant authority, and preserve build/target/provenance required for experiments
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** log/metric/trace IDL; collectors; ring buffers; query/export; redaction/rate limits
**Verification:** overload, malicious logger, secure-field taint, crash/reboot persistence and export tests
**Evidence:** overhead/retention report; redaction test; sample evidence bundle
**Traceability:** specs: AOS-ARCH-015#observability;AOS-ARCH-012#diagnostic-data; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-012"></a>

#### AOS-PLAT-012 — Demonstrate a native API application slice without POSIX

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Platform Lead · Vertical Slice
**Schedule:** 2026-12-14 → 2027-01-24 · 12 estimated days · M2
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-003
**Related tasks:** AOS-PLAT-010;AOS-PLAT-011;AOS-CORE-032

**Outcome.** Run a small user-space shell, storage object, timer, logging, and message workflow using only Agent OS syscalls/IDL/capabilities.

**Scope.** Produce and integrate: native demo components; forbidden-dependency lint; conformance scenario; developer walkthrough. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- The slice builds and runs with no POSIX, Binder, Android HAL, Linux ABI, libc, or target-vendor type above declared adapters
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** native demo components; forbidden-dependency lint; conformance scenario; developer walkthrough
**Verification:** EXP-011 source/binary dependency scan and end-to-end failure tests
**Evidence:** demo trace; scan report; EXP-011 record
**Traceability:** specs: AOS-ARCH-001#native-contract;AOS-ARCH-011#compatibility-policy; sources: none; claims: CLM-003;CLM-004; experiments: EXP-011
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-013"></a>

#### AOS-PLAT-013 — Implement time, entropy, and identity foundation services

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Platform Security Engineer · Foundation Services
**Schedule:** 2026-12-28 → 2027-02-28 · 15 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-CORE-021
**Related tasks:** AOS-PLAT-010;AOS-SEC-021

**Outcome.** Expose wall-time synchronization, monotonic mapping, entropy, device/user/service identity references, and trust quality through separate services.

**Scope.** Produce and integrate: time service; entropy broker; identity directory; quality/status APIs; test backends. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Consumers can distinguish monotonic/wall/uncertain time and never receive silent weak entropy or ambient identity authority
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** time service; entropy broker; identity directory; quality/status APIs; test backends
**Verification:** clock jumps, no-network, entropy failure, identity rotation/revocation and authorization tests
**Evidence:** foundation conformance; failure matrix; entropy review
**Traceability:** specs: AOS-ARCH-007#foundation-services;AOS-ARCH-012#identity-and-entropy; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-014"></a>

#### AOS-PLAT-014 — Specify package, component, and integration manifest

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Package System Architect · Packages
**Schedule:** 2026-12-14 → 2027-02-07 · 12 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-004
**Related tasks:** AOS-PLAT-010;AOS-LEGAL-012

**Outcome.** Describe executable components, dependencies, capabilities, data domains, resources, updates, migrations, SBOM, signatures and target compatibility.

**Scope.** Produce and integrate: manifest schema; signature/provenance fields; resource/capability declarations; migration/rollback hooks; examples. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Package install cannot imply undeclared authority and all executable/artifact dependencies are versioned and attributable
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** manifest schema; signature/provenance fields; resource/capability declarations; migration/rollback hooks; examples
**Verification:** validate first-party service, product integration, driver and malicious/invalid packages
**Evidence:** schema conformance; security/legal review; invalid fixture results
**Traceability:** specs: AOS-ARCH-007#package-model;AOS-PROD-003#integration-package; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-015"></a>

#### AOS-PLAT-015 — Implement initial system image and bootstrap service graph

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Release/Platform Engineer · Boot Image
**Schedule:** 2027-01-25 → 2027-04-04 · 18 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-010
**Related tasks:** AOS-PLAT-013;AOS-PLAT-014;AOS-SEC-030

**Outcome.** Assemble kernel, initial process, service manager, essential services, target board package, trust material, and recovery metadata reproducibly.

**Scope.** Produce and integrate: image assembly tool; signed manifest; service graph; target overlays; reproducibility metadata; emulator images. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A target image names every component, capability route, version and trust input, and fails closed on integrity/dependency mismatch
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** image assembly tool; signed manifest; service graph; target overlays; reproducibility metadata; emulator images
**Verification:** clean assembly, tamper/missing component, recovery fallback and version compatibility tests
**Evidence:** image manifest/SBOM; boot traces; failure results
**Traceability:** specs: AOS-ARCH-013#initial-system-image;AOS-ARCH-015#release-evidence; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 5 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-020"></a>

#### AOS-PLAT-020 — Specify board package and hardware resource contract

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Hardware Platform Architect · Board Packages
**Schedule:** 2026-11-16 → 2027-01-17 · 15 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-001;AOS-CORE-012
**Related tasks:** AOS-CORE-037

**Outcome.** Normalize firmware/board facts into versioned CPU, memory, MMIO, IRQ, clock, reset, power, pin, bus, DMA and device descriptors.

**Scope.** Produce and integrate: board manifest schema; resource capabilities; discovery/overlay rules; QEMU/AM625 examples; validation. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Kernel and product code do not parse target-native device descriptions, and resources can be delegated only through explicit capabilities
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** board manifest schema; resource capabilities; discovery/overlay rules; QEMU/AM625 examples; validation
**Verification:** represent two unrelated targets and reject conflicting/overlapping resources
**Evidence:** schema review; target diff; invalid manifest tests
**Traceability:** specs: AOS-ARCH-006#board-package;AOS-HW-004#porting-sequence; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-021"></a>

#### AOS-PLAT-021 — Implement hardware resource broker

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Driver Framework Engineer · Driver Framework
**Schedule:** 2026-12-28 → 2027-03-07 · 18 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** none
**Related tasks:** AOS-PLAT-020;AOS-PLAT-010;AOS-CORE-037

**Outcome.** Grant scoped MMIO, interrupt, DMA, clock/reset/power and bus resources to isolated driver domains from board packages.

**Scope.** Produce and integrate: resource broker service; capability types; conflict checks; lifecycle/revocation; audit records. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A driver receives only declared resources, conflicting grants fail, and driver death revokes DMA/interrupt access before reuse
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** resource broker service; capability types; conflict checks; lifecycle/revocation; audit records
**Verification:** overlap/forgery/driver-death/reset/DMA teardown tests on QEMU and first board
**Evidence:** resource route audit; isolation tests; leak report
**Traceability:** specs: AOS-ARCH-006#resource-broker;AOS-ARCH-004#resource-capabilities; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-022"></a>

#### AOS-PLAT-022 — Implement bus discovery and device binding framework

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Driver Framework Engineer · Driver Framework
**Schedule:** 2027-01-25 → 2027-04-04 · 18 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-020
**Related tasks:** AOS-PLAT-021

**Outcome.** Discover/bind platform, PCI, USB and simple serial-bus devices without embedding one OS device model in native contracts.

**Scope.** Produce and integrate: device descriptors; match/bind rules; bus managers; hotplug events; driver manifest integration. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Binding is deterministic/auditable, target identifiers stay in board/driver packages, and no driver gains undeclared sibling resources
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** device descriptors; match/bind rules; bus managers; hotplug events; driver manifest integration
**Verification:** multiple/missing/ambiguous driver, hotplug, device reset and malicious descriptor tests
**Evidence:** binding traces; conformance matrix; failure report
**Traceability:** specs: AOS-ARCH-006#device-discovery;AOS-ARCH-006#driver-binding; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-023"></a>

#### AOS-PLAT-023 — Implement interrupt and DMA broker integration

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Driver Framework Engineer · Driver Framework
**Schedule:** 2027-02-08 → 2027-04-11 · 16 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-CORE-033
**Related tasks:** AOS-PLAT-021;AOS-CORE-037

**Outcome.** Connect user-space driver event loops to kernel interrupt/DMA primitives with safe buffer ownership and backpressure.

**Scope.** Produce and integrate: interrupt endpoint; DMA buffer/queue APIs; cache sync; cancellation/reset; performance counters. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Buffer ownership transitions are explicit, stale DMA is impossible after revoke under supported IOMMU, and overload is bounded
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** interrupt endpoint; DMA buffer/queue APIs; cache sync; cancellation/reset; performance counters
**Verification:** device-emulator workloads, driver crash/restart, queue overflow, stale buffer and teardown tests
**Evidence:** DMA/interrupt traces; performance baseline; isolation result
**Traceability:** specs: AOS-ARCH-006#dma-and-iommu;AOS-ARCH-006#interrupt-contract; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-024"></a>

#### AOS-PLAT-024 — Specify device lifecycle, reset, suspend, and hotplug state machine

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Platform Architect · Driver Framework
**Schedule:** 2027-02-08 → 2027-03-28 · 10 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** none
**Related tasks:** AOS-PLAT-022;AOS-PLAT-023

**Outcome.** Give all hardware services consistent discovery, initialization, readiness, degradation, reset, suspend, resume, removal, and failure semantics.

**Scope.** Produce and integrate: state machine; IDL base types; timeout/error rules; dependency ordering; conformance tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every hardware backend reports state/failure consistently and no suspended/removed device retains active buffers or waits indefinitely
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** state machine; IDL base types; timeout/error rules; dependency ordering; conformance tests
**Verification:** model-check lifecycle sequences and run reset/suspend/removal fault injection
**Evidence:** state model; transition coverage; unresolved device classes
**Traceability:** specs: AOS-ARCH-006#device-lifecycle;AOS-ARCH-014#suspend-resume; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-030"></a>

#### AOS-PLAT-030 — Demonstrate driver-domain crash and restart recovery

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Driver Framework Engineer · Reliability
**Schedule:** 2027-03-08 → 2027-04-18 · 10 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-021;AOS-PLAT-010
**Related tasks:** AOS-PLAT-024

**Outcome.** Restart an isolated device driver and rebind clients without restarting kernel or corrupting canonical state.

**Scope.** Produce and integrate: fault injection; restart/rebind manager; client error/retry policy; state reconciliation demo. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Kernel and unrelated services remain live, device authority is revoked/recreated, and clients receive bounded errors or successful rebind
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** fault injection; restart/rebind manager; client error/retry policy; state reconciliation demo
**Verification:** EXP-006 for crash during idle, I/O, DMA and suspend transitions
**Evidence:** restart traces; client consistency report; EXP-006 record
**Traceability:** specs: AOS-ARCH-006#driver-domains;AOS-ARCH-007#service-lifecycle; sources: SRC-009;SRC-012; claims: none; experiments: EXP-006
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-031"></a>

#### AOS-PLAT-031 — Implement block-storage service and backend contract

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Storage Engineer · Storage
**Schedule:** 2027-03-08 → 2027-05-16 · 18 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** none
**Related tasks:** AOS-PLAT-023;AOS-PLAT-024

**Outcome.** Expose asynchronous block devices, queues, flush/discard, integrity/error, hot removal, encryption hooks and diagnostics through native services.

**Scope.** Produce and integrate: block IDL; RAM/virtio backend; partition service; queue/backpressure; fault injector. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Clients can reason about completion/durability/error and cannot access blocks outside granted ranges
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** block IDL; RAM/virtio backend; partition service; queue/backpressure; fault injector
**Verification:** ordering/flush/power-loss simulation, malformed request, removal and throughput tests
**Evidence:** storage conformance; durability experiments; performance baseline
**Traceability:** specs: AOS-ARCH-007#storage-services;AOS-ARCH-006#storage-contract; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-032"></a>

#### AOS-PLAT-032 — Implement durable object/filesystem service v0

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Storage Engineer · Storage
**Schedule:** 2027-04-05 → 2027-07-25 · 30 estimated days · M4
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-013
**Related tasks:** AOS-PLAT-031

**Outcome.** Provide transactional namespaces, objects/files, metadata, quotas, snapshots, integrity checks and recovery for system/product storage.

**Scope.** Produce and integrate: storage engine; namespace/capability API; journal/snapshots; fsck/recovery; quota/encryption integration. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Committed transactions survive declared failures, corrupt data is detected, recovery is bounded, and namespaces cannot escape grants
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** storage engine; namespace/capability API; journal/snapshots; fsck/recovery; quota/encryption integration
**Verification:** crash/power-cut model, corruption, rollback, quota, concurrent transactions and migration tests
**Evidence:** durability report; recovery corpus; performance/storage overhead
**Traceability:** specs: AOS-ARCH-009#storage-engine;AOS-ARCH-007#storage-services; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-033"></a>

#### AOS-PLAT-033 — Implement native network service v0

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Network Engineer · Networking
**Schedule:** 2027-04-05 → 2027-08-08 · 30 estimated days · M4
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-010;AOS-PLAT-013
**Related tasks:** AOS-PLAT-023

**Outcome.** Provide interface/link/IP/transport/DNS/connectivity contracts with per-component network capabilities, accounting, and test backends.

**Scope.** Produce and integrate: network IDL; virtio/Ethernet backend; IP/UDP/TCP baseline; DNS; policy/accounting; packet test lab. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Components receive scoped endpoints rather than ambient sockets, network loss/rebind is explicit, and parser exposure is fuzzed
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** network IDL; virtio/Ethernet backend; IP/UDP/TCP baseline; DNS; policy/accounting; packet test lab
**Verification:** interoperability, malformed/hostile traffic, capability isolation, link loss, suspend and throughput/latency tests
**Evidence:** network conformance; packet traces; security review; performance baseline
**Traceability:** specs: AOS-ARCH-007#network-service;AOS-ARCH-012#network-policy; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-034"></a>

#### AOS-PLAT-034 — Implement USB host/device service baseline

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** USB Engineer · USB
**Schedule:** 2027-04-05 → 2027-07-11 · 24 estimated days · M4
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-022;AOS-PLAT-024
**Related tasks:** AOS-PLAT-023

**Outcome.** Enumerate USB, isolate class/function drivers, transfer buffers safely, handle hotplug/reset, and support debug/recovery needs.

**Scope.** Produce and integrate: USB controller backend; core service; descriptor parser; HID/storage/debug class paths; fuzz corpus. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Untrusted devices cannot escape assigned domains, descriptor lengths are bounded, and removal completes all transfers with defined errors
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** USB controller backend; core service; descriptor parser; HID/storage/debug class paths; fuzz corpus
**Verification:** malformed descriptors, hotplug storms, reset, driver crash, DMA ownership and real devices on documented board
**Evidence:** USB conformance; fuzz findings; device matrix
**Traceability:** specs: AOS-ARCH-006#usb-contract;AOS-HW-004#usb-first; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-035"></a>

#### AOS-PLAT-035 — Implement input service and semantic event contract

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Input/Accessibility Engineer · Input
**Schedule:** 2027-04-19 → 2027-06-27 · 16 estimated days · M4
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-013;AOS-PLAT-024
**Related tasks:** AOS-PLAT-034

**Outcome.** Normalize touch, pointer, keyboard, switch, stylus and sensors into secure timestamped input streams and semantic focus actions.

**Scope.** Produce and integrate: input IDL; HID/virtio backends; seat/focus routing; secure-input mode; replay fixtures. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Input is delivered only to authorized focus paths, secure mode excludes journals/observers, and replay is explicit/diagnostic-only
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** input IDL; HID/virtio backends; seat/focus routing; secure-input mode; replay fixtures
**Verification:** multi-device, hotplug, timestamp/order, focus isolation, secure-field and accessibility tests
**Evidence:** input conformance; secure-field taint results; latency metrics
**Traceability:** specs: AOS-ARCH-008#input-service;AOS-PROD-005#input-modalities; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-036"></a>

#### AOS-PLAT-036 — Implement audio service and graph contract

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Audio Engineer · Audio
**Schedule:** 2027-05-03 → 2027-08-08 · 24 estimated days · M4
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-023;AOS-PLAT-024;AOS-PLAT-013
**Related tasks:** none

**Outcome.** Route capture/playback streams, devices, volume/policy, timing, privacy indicators, low-latency paths and telephony endpoints through native services.

**Scope.** Produce and integrate: audio IDL; graph/mixer; USB/virtual backend; clock/latency model; capture privacy; loopback tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Capture requires explicit authority/indicator, timing is measurable, and backend changes do not alter product audio semantics
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** audio IDL; graph/mixer; USB/virtual backend; clock/latency model; capture privacy; loopback tests
**Verification:** latency/drift/glitch, route changes, device removal, permission, suspend and crash tests
**Evidence:** audio metrics; route matrix; privacy review; conformance logs
**Traceability:** specs: AOS-ARCH-007#audio-service;AOS-HW-007#audio-routing; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-037"></a>

#### AOS-PLAT-037 — Implement display, buffer, and compositor backend contract

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Graphics Platform Engineer · Graphics
**Schedule:** 2027-03-22 → 2027-07-11 · 28 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** none
**Related tasks:** AOS-PLAT-023;AOS-PLAT-024;AOS-CORE-037

**Outcome.** Provide displays, modes, surfaces, buffer collections, synchronization, presentation timing, capture policy and fallback through native services.

**Scope.** Produce and integrate: display/buffer IDL; software/virtio backend; compositor integration; synchronization/timing; capture permissions. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Client buffers cannot be reused before release, presentation outcomes are timestamped, and secure surfaces cannot be captured without grant
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** display/buffer IDL; software/virtio backend; compositor integration; synchronization/timing; capture permissions
**Verification:** first-frame, mode change, buffer lifetime, missed deadline, driver restart, secure surface and load tests
**Evidence:** first-frame artifact; frame timing; buffer lifecycle trace; conformance
**Traceability:** specs: AOS-ARCH-008#display-contract;AOS-ARCH-008#scene-and-semantics; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-038"></a>

#### AOS-PLAT-038 — Specify GPU acceleration and command-submission contract

**Type / priority / status:** Spike · P2 · Backlog
**Owner / workstream:** GPU Architect · Graphics
**Schedule:** 2027-05-17 → 2027-08-22 · 18 estimated days · M5
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-CORE-037
**Related tasks:** AOS-PLAT-037

**Outcome.** Separate portable graphics APIs, GPU memory/context/queue services, compiler/runtime backends, and device-specific command streams.

**Scope.** Produce and integrate: GPU service contract; memory/context/isolation model; software reference; backend requirements; fault/reset policy. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No vendor command stream enters product/compositor API and GPU reset/fault/memory isolation are explicit before hardware implementation
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** GPU service contract; memory/context/isolation model; software reference; backend requirements; fault/reset policy
**Verification:** architecture/security review and two candidate backend mapping exercises
**Evidence:** contract draft; gap analysis; threat/performance model
**Traceability:** specs: AOS-ARCH-006#gpu-contract;AOS-ARCH-008#gpu-acceleration; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-039"></a>

#### AOS-PLAT-039 — Specify portable camera service contract

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Camera Architect · Camera Platform
**Schedule:** 2027-02-22 → 2027-05-02 · 15 estimated days · M4
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-002
**Related tasks:** AOS-PLAT-024;AOS-PLAT-035

**Outcome.** Represent sensors, streams, controls, metadata, frames, calibration, 3A, processing stages, privacy, timing and power independent of one ISP.

**Scope.** Produce and integrate: camera IDL; stream/control/result model; buffer/timestamp ownership; privacy/lifecycle; conformance fixtures. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Capture metadata can reproduce exposure/lens/timing context and ISP/vendor-specific controls remain extensible but bounded
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** camera IDL; stream/control/result model; buffer/timestamp ownership; privacy/lifecycle; conformance fixtures
**Verification:** map virtual, documented-board and hypothetical proprietary pipeline without API forks
**Evidence:** mapping report; schema tests; security/camera review
**Traceability:** specs: AOS-ARCH-006#camera-contract;AOS-HW-006#portable-camera-stack; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-040"></a>

#### AOS-PLAT-040 — Specify portable cellular and telephony service contracts

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Cellular Architect · Cellular Platform
**Schedule:** 2027-04-05 → 2027-06-27 · 18 estimated days · M5
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-002;AOS-PLAT-024
**Related tasks:** AOS-PLAT-033;AOS-PLAT-036

**Outcome.** Separate modem transport, registration, packet data, SMS, SIM/eSIM, GNSS, voice, IMS, emergency and policy into native capability services.

**Scope.** Produce and integrate: cellular/telephony IDL set; state machines; error/provisioning/security/power fields; fake backends. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Data support cannot imply voice/IMS, emergency state is explicit, and SIM/eSIM secrets stay behind scoped services
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** cellular/telephony IDL set; state machines; error/provisioning/security/power fields; fake backends
**Verification:** map MBIM/QMI/module/data/SMS and unresolved IMS paths without claiming unsupported functions
**Evidence:** contract review; state-model tests; gap register
**Traceability:** specs: AOS-ARCH-006#cellular-contract;AOS-HW-007#separate-capability-gates; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-041"></a>

#### AOS-PLAT-041 — Implement power, thermal, battery, charging, and suspend service contracts

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Power Platform Engineer · Power
**Schedule:** 2027-03-22 → 2027-07-11 · 24 estimated days · M4
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-013;AOS-CORE-022
**Related tasks:** AOS-PLAT-024

**Outcome.** Coordinate device power states, wake sources, thermal zones, performance hints, battery/charger safety, energy budgets and suspend transactions.

**Scope.** Produce and integrate: power/thermal IDL; dependency graph; suspend coordinator; battery/charger model; telemetry; fake backend. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Unsafe or unknown battery/thermal states fail safe, suspend has bounded rollback, and consumers receive no direct board regulator access
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** power/thermal IDL; dependency graph; suspend coordinator; battery/charger model; telemetry; fake backend
**Verification:** failed suspend participant, wake storm, thermal trip, charger removal, low battery and budget-enforcement tests
**Evidence:** state traces; power/thermal safety review; energy accounting report
**Traceability:** specs: AOS-ARCH-014#power-service;AOS-ARCH-014#suspend-resume;AOS-HW-003#power-path; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-050"></a>

#### AOS-PLAT-050 — Implement package installation, verification, and component registry

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Package System Engineer · Packages
**Schedule:** 2027-05-17 → 2027-08-29 · 24 estimated days · M4
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-014;AOS-SEC-060
**Related tasks:** AOS-PLAT-032

**Outcome.** Install signed packages transactionally, verify provenance/API/capabilities/resources, register components/integrations, and support rollback/uninstall.

**Scope.** Produce and integrate: package format; verifier; registry; transactional installer; rollback/uninstall; policy UI API. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No executable package runs before integrity, compatibility and capability review
- failed install leaves prior state bootable
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** package format; verifier; registry; transactional installer; rollback/uninstall; policy UI API
**Verification:** tampered/signature/API/dependency/migration/power-loss/uninstall tests
**Evidence:** package conformance; attack/failure results; provenance/SBOM sample
**Traceability:** specs: AOS-ARCH-007#package-model;AOS-PROD-003#integration-package;AOS-LEGAL-003#release-gate; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-051"></a>

#### AOS-PLAT-051 — Implement transactional system update pipeline

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Update Engineer · Update
**Schedule:** 2027-06-14 → 2027-10-17 · 30 estimated days · M8
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-015;AOS-SEC-030
**Related tasks:** AOS-PLAT-050;AOS-SEC-032

**Outcome.** Assemble, stage, verify, activate, monitor, roll back, and report kernel/platform/product updates across supported targets.

**Scope.** Produce and integrate: update manifest; downloader/stager; slot/snapshot activation; health check; rollback; status/receipt. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- An interrupted or unhealthy update preserves/reaches a bootable trusted state and anti-rollback policy is explicit
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** update manifest; downloader/stager; slot/snapshot activation; health check; rollback; status/receipt
**Verification:** tamper, interruption at every phase, bad kernel/service/schema, rollback attack and recovery tests on QEMU/board
**Evidence:** update fault matrix; signed manifests; rollback/recovery traces
**Traceability:** specs: AOS-ARCH-013#update-model;AOS-ARCH-013#rollback; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-052"></a>

#### AOS-PLAT-052 — Implement recovery environment and service tools

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Recovery Engineer · Recovery
**Schedule:** 2027-06-14 → 2027-10-03 · 24 estimated days · M8
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-015;AOS-PLAT-031
**Related tasks:** AOS-SEC-041

**Outcome.** Provide independent verified diagnostics, storage inspection, update repair, backup restore, key/revocation flow and target reflash without normal system services.

**Scope.** Produce and integrate: recovery image; console/UI; target transport; storage/update/backup tools; audit/export; destructive confirmations. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Recovery has an independent trust path, clearly distinguishes destructive actions, and does not expose protected data without authentication policy
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** recovery image; console/UI; target transport; storage/update/backup tools; audit/export; destructive confirmations
**Verification:** unbootable system, corrupt metadata, failed update, lost credential and malicious recovery media scenarios
**Evidence:** recovery drill reports; signed image manifest; threat review
**Traceability:** specs: AOS-ARCH-013#recovery-environment;AOS-PROD-004#failure-and-rollback; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-060"></a>

#### AOS-PLAT-060 — Build unified observability and evidence export pipeline

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Observability Engineer · Observability
**Schedule:** 2027-03-08 → 2027-06-13 · 20 estimated days · M4
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-011;AOS-PLAT-013
**Related tasks:** AOS-PLAT-041

**Outcome.** Join logs, traces, metrics, power, frame, storage, network, crash and experiment metadata into reproducible bounded evidence bundles.

**Scope.** Produce and integrate: trace schema; correlation IDs; capture profiles; export/redaction; analysis notebooks/scripts; dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A gate experiment can identify exact build/target/time/configuration and correlate events without collecting unapproved content
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** trace schema; correlation IDs; capture profiles; export/redaction; analysis notebooks/scripts; dashboard
**Verification:** cross-layer incident reproduction, clock-correlation, rate/size limits, redaction and offline export
**Evidence:** sample integrated evidence bundle; overhead analysis; privacy approval
**Traceability:** specs: AOS-ARCH-015#observability;AOS-RES-004#evidence-integrity; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-070"></a>

#### AOS-PLAT-070 — Implement emulator hardware-service backends and fault injection

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Simulation Engineer · Simulation
**Schedule:** 2026-12-14 → 2027-04-18 · 25 estimated days · M4
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-003
**Related tasks:** AOS-PLAT-020;AOS-PLAT-024

**Outcome.** Provide deterministic display/input/storage/network/audio/camera/cellular/power fakes that exercise portable services before hardware availability.

**Scope.** Produce and integrate: fake device framework; scripted state/fault language; golden traces; CI scenarios; visual/control harness. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every portable hardware service has a CI backend capable of success, denial, timeout, reset, removal and malformed-data cases
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** fake device framework; scripted state/fault language; golden traces; CI scenarios; visual/control harness
**Verification:** service conformance and seeded disconnect/crash/corruption/latency/power cases
**Evidence:** scenario catalog; deterministic replay results; coverage matrix
**Traceability:** specs: AOS-ARCH-015#emulation;AOS-HW-001#qemu-track; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-080"></a>

#### AOS-PLAT-080 — Build cross-target platform conformance suite

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Platform QA Lead · Conformance
**Schedule:** 2027-04-05 → 2027-10-31 · 25 estimated days · M5
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-OPEN-020
**Related tasks:** AOS-PLAT-070;AOS-PLAT-030

**Outcome.** Prove that QEMU and native targets implement the same capability, lifecycle, error, update, recovery, power and service semantics.

**Scope.** Produce and integrate: conformance protocol; target adapters; result schema; CI/lab runner; waiver policy; dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Differences are declared optional capabilities or tracked defects—never silent target forks in portable clients
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** conformance protocol; target adapters; result schema; CI/lab runner; waiver policy; dashboard
**Verification:** EXP-021 on QEMU, first board and second SoC as they become available
**Evidence:** cross-target matrix; adapter leakage findings; EXP-021 records
**Traceability:** specs: AOS-ARCH-001#portability-test;AOS-ARCH-015#conformance; sources: none; claims: CLM-002;CLM-023; experiments: EXP-021
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-081"></a>

#### AOS-PLAT-081 — Implement hardware trace capture and deterministic replay

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Simulation/Evidence Engineer · Simulation
**Schedule:** 2027-03-22 → 2027-07-11 · 20 estimated days · M5
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-LEGAL-005
**Related tasks:** AOS-PLAT-060;AOS-PLAT-070

**Outcome.** Record public-safe service-level traces from stock/reference/native systems and replay them against Agent OS backends without importing their OS ABI.

**Scope.** Produce and integrate: trace format; sanitizers; recorder adapters; replay engine; golden trace corpus; provenance manifest. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Trace schema contains only approved portable observations, preserves timing/state needed for tests, and is versioned/provenanced
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** trace format; sanitizers; recorder adapters; replay engine; golden trace corpus; provenance manifest
**Verification:** record/replay lifecycle scenarios and verify no protected/personal/Android/Linux type crosses format
**Evidence:** trace corpus; sanitation/legal review; replay determinism report
**Traceability:** specs: AOS-ARCH-015#trace-replay;AOS-LEGAL-002#artifact-controls; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-090"></a>

#### AOS-PLAT-090 — Publish developer SDK, debugger, and service test kit

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Developer Experience Lead · Developer Experience
**Schedule:** 2027-05-17 → 2027-10-31 · 30 estimated days · M8
**Parent:** AOS-PLAT-000
**Dependencies:** AOS-PLAT-003;AOS-PLAT-014;AOS-PLAT-070;AOS-CORE-038
**Related tasks:** none

**Outcome.** Let contributors build native components, generate bindings, run emulator tests, inspect capabilities/traces, package, and validate without full source tree expertise.

**Scope.** Produce and integrate: SDK/sysroot; IDL tools; emulator; debugger protocol/client; package tool; examples; conformance runner; docs. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use Agent OS IDL and capabilities as the native contract; target, POSIX, Android, Linux, and vendor types must terminate in adapters.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A new contributor can build/test/debug/package a least-authority service using only documented public tools and no private target artifacts
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** SDK/sysroot; IDL tools; emulator; debugger protocol/client; package tool; examples; conformance runner; docs
**Verification:** fresh external-style onboarding on Linux hosts and reproducible sample component release
**Evidence:** onboarding timings; issue log; SDK manifest; sample artifacts
**Traceability:** specs: AOS-ARCH-015#developer-experience;AOS-GOV-002#community-infrastructure; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-100"></a>

#### AOS-PLAT-100 — Specify portable device-service quality profiles

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Platform Architect · Device Contracts
**Schedule:** 2026-09-07 → 2026-10-18 · 15 estimated days · M2
**Parent:** AOS-PLAT-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Specify portable device-service quality profiles.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-ARCH-020#contract-set, AOS-ARCH-020#quality. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Specify portable device-service quality profiles; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-ARCH-020#contract-set;AOS-ARCH-020#quality; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 02
**Specialist review:** none

<a id="task-aos-plat-101"></a>

#### AOS-PLAT-101 — Implement the legacy-contamination interface linter

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Platform Tooling Engineer · Compatibility Boundaries
**Schedule:** 2026-11-09 → 2027-01-03 · 20 estimated days · M2
**Parent:** AOS-PLAT-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Implement the legacy-contamination interface linter.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-ARCH-018#audit, AOS-ARCH-016#acceptance. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Implement the legacy-contamination interface linter; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-ARCH-018#audit;AOS-ARCH-016#acceptance; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 4 · Volume 10
**Specialist review:** none

<a id="task-aos-plat-102"></a>

#### AOS-PLAT-102 — Build deterministic service trace replay harnesses

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Platform Test Engineer · Trace Replay
**Schedule:** 2027-01-11 → 2027-03-21 · 25 estimated days · M3
**Parent:** AOS-PLAT-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Build deterministic service trace replay harnesses.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-ARCH-020#mocking, AOS-VAL-002#artifact. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Build deterministic service trace replay harnesses; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-ARCH-020#mocking;AOS-VAL-002#artifact; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 5 · Volume 10
**Specialist review:** none

<a id="task-aos-plat-103"></a>

#### AOS-PLAT-103 — Generate backend conformance tests from Agent OS IDL

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** IDL and Test Engineer · Conformance
**Schedule:** 2027-04-19 → 2027-07-11 · 30 estimated days · M4
**Parent:** AOS-PLAT-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Generate backend conformance tests from Agent OS IDL.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-VAL-001#portable, AOS-ARCH-005#type-system. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Generate backend conformance tests from Agent OS IDL; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-VAL-001#portable;AOS-ARCH-005#type-system; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-plat-104"></a>

#### AOS-PLAT-104 — Prove two backend implementations expose identical product semantics

**Type / priority / status:** Experiment · P0 · Planned
**Owner / workstream:** Platform Lead · Portability Proof
**Schedule:** 2027-09-06 → 2027-12-26 · 40 estimated days · M6
**Parent:** AOS-PLAT-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Prove two backend implementations expose identical product semantics.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-ARCH-016#portability-proof, AOS-VAL-001#portable. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Prove two backend implementations expose identical product semantics; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-ARCH-016#conformance;AOS-VAL-001#portable; sources: none; claims: CLM-002;CLM-023; experiments: EXP-021
**Phase / volume:** Phase 7 · Volume 03
**Specialist review:** platform;hardware

<a id="track-aos-prod"></a>

### AOS-PROD

<a id="task-aos-prod-000"></a>

#### AOS-PROD-000 — Product Runtime epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Product Lead · Program
**Schedule:** 2026-08-10 → 2029-07-08 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Build entities, actions, history, agents, shell, accessibility, backup, and stock experiences.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-PROD-001#product-contract; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-001"></a>

#### AOS-PROD-001 — Define entity and relationship schema v0

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Product Data Architect · Entity Model
**Schedule:** 2026-08-10 → 2026-10-04 · 15 estimated days · M2
**Parent:** AOS-PROD-000
**Dependencies:** AOS-DOCS-012
**Related tasks:** AOS-PLAT-002

**Outcome.** Specify stable identity, types, relationships, fields, provenance, trust, lifecycle, merge, deletion, and extension rules for first-party entities.

**Scope.** Produce and integrate: entity/relationship schemas; type registry; identity/provenance rules; sample graph; invalid fixtures. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Identity and provenance survive provider removal/migration, and extensions cannot overwrite canonical fields silently
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** entity/relationship schemas; type registry; identity/provenance rules; sample graph; invalid fixtures
**Verification:** schema review using person, document, activity, device, place, task, media and provider examples
**Evidence:** schema conformance; ambiguity/extension review; sample bundle
**Traceability:** specs: AOS-ARCH-009#entity-model;AOS-PROD-001#entity-surfaces; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-002"></a>

#### AOS-PROD-002 — Implement provenance and entity-resolution model

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Product Data Engineer · Entity Model
**Schedule:** 2026-09-07 → 2026-11-01 · 15 estimated days · M3
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** AOS-PROD-001;AOS-PLAT-013

**Outcome.** Track source assertions, confidence, conflicts, aliases, merges, splits, user overrides, and audit history without erasing origin.

**Scope.** Produce and integrate: provenance records; resolution engine; merge/split UI contract; conflict policy; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A user can inspect and undo merge decisions, and no low-trust assertion silently replaces higher-authority data
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** provenance records; resolution engine; merge/split UI contract; conflict policy; tests
**Verification:** duplicate/conflicting contacts, imported documents, provider deletion and malicious assertion scenarios
**Evidence:** resolution test report; user-decision audit; performance baseline
**Traceability:** specs: AOS-ARCH-009#provenance;AOS-PROD-001#entity-surfaces; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-003"></a>

#### AOS-PROD-003 — Implement entity graph store and query service

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Product Data Engineer · Entity Store
**Schedule:** 2026-11-16 → 2027-03-07 · 28 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-001
**Related tasks:** AOS-PLAT-032;AOS-CORE-034

**Outcome.** Persist, index, query, authorize, migrate, snapshot, and export entity/relationship data through scoped projections.

**Scope.** Produce and integrate: graph/query IDL; storage layout; indexes; projection capabilities; migrations; backup/export hooks. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Queries expose only granted fields/relationships, indexes can be rebuilt, and schema migration is transactional/recoverable
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** graph/query IDL; storage layout; indexes; projection capabilities; migrations; backup/export hooks
**Verification:** authorization, schema migration, corruption/recovery, query bounds and performance tests
**Evidence:** entity conformance; migration corpus; query/size metrics
**Traceability:** specs: AOS-ARCH-009#storage-engine;AOS-ARCH-009#entity-model; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-010"></a>

#### AOS-PROD-010 — Define portable action schema and effect taxonomy

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Action Platform Architect · Actions
**Schedule:** 2026-09-07 → 2026-11-01 · 15 estimated days · M2
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** AOS-PROD-001;AOS-PLAT-002;AOS-CORE-032

**Outcome.** Specify typed inputs/outputs, effect classes, confirmation, idempotency, capabilities, estimates, reversibility, compensation, audit and provider behavior.

**Scope.** Produce and integrate: action schema; effect taxonomy; state machine; sample actions; invalid fixtures; safety review. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every action declares effects/data destinations/required grants and external effects cannot be represented as silent local mutations
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** action schema; effect taxonomy; state machine; sample actions; invalid fixtures; safety review
**Verification:** model ten local/external/system actions and adversarial/missing-provider cases
**Evidence:** schema conformance; security/product review; coverage table
**Traceability:** specs: AOS-PROD-003#action-schema;AOS-ARCH-010#action-lifecycle; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-011"></a>

#### AOS-PROD-011 — Implement integration and provider registry

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Integration Platform Engineer · Integrations
**Schedule:** 2027-02-08 → 2027-05-02 · 20 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-010;AOS-PLAT-014
**Related tasks:** AOS-PLAT-050

**Outcome.** Register signed entity/action/view/widget providers, their compatibility, capabilities, endpoints, data policies, quality evidence, revocation and lifecycle.

**Scope.** Produce and integrate: registry service; manifest validation; publisher/trust records; update/revoke/uninstall; query UI API. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Registry metadata cannot grant undeclared authority, revoked code cannot launch, and portable entities survive uninstall
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** registry service; manifest validation; publisher/trust records; update/revoke/uninstall; query UI API
**Verification:** valid/malicious/expired/revoked providers, package update, API mismatch and uninstall-preservation tests
**Evidence:** registry conformance; attack/failure results; sample integration catalog
**Traceability:** specs: AOS-PROD-003#integration-package;AOS-PROD-003#conformance; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-012"></a>

#### AOS-PROD-012 — Implement action executor, receipts, and compensation

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Action Runtime Engineer · Actions
**Schedule:** 2026-12-28 → 2027-04-04 · 24 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-010
**Related tasks:** AOS-PLAT-010;AOS-PROD-020

**Outcome.** Execute approved actions through providers with policy checks, idempotency, progress, cancellation, result validation, receipts and inverse/compensating actions.

**Scope.** Produce and integrate: executor service; receipt format; idempotency store; compensation coordinator; fake/external provider tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No effect occurs before policy/confirmation, retries cannot duplicate declared idempotent effects, and every outcome is auditable
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** executor service; receipt format; idempotency store; compensation coordinator; fake/external provider tests
**Verification:** duplicate, timeout, crash, cancellation, partial external effect, malicious result and compensation tests
**Evidence:** action traces; receipt corpus; failure/compensation matrix
**Traceability:** specs: AOS-ARCH-010#action-lifecycle;AOS-PROD-002#replay-and-undo; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-013"></a>

#### AOS-PROD-013 — Implement provider selection and routing policy

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Product Platform Engineer · Actions
**Schedule:** 2027-03-22 → 2027-05-23 · 14 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** AOS-PROD-011;AOS-PROD-012

**Outcome.** Select providers by user defaults, context, privacy, cost, locality, quality, trust, availability and capability fit while exposing sensitive choices.

**Scope.** Produce and integrate: routing policy service; preference model; explanation API; fallback rules; test providers. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Sensitive provider/account changes are never silent and a user can inspect/override the selected route before effect
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** routing policy service; preference model; explanation API; fallback rules; test providers
**Verification:** account/recipient/destination/cost/privacy ambiguity, outage and malicious-ranking tests
**Evidence:** routing test matrix; explanation examples; product/security review
**Traceability:** specs: AOS-PROD-003#provider-selection;AOS-ARCH-010#policy-engine; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-020"></a>

#### AOS-PROD-020 — Implement append-only semantic event log

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** History/Storage Engineer · History
**Schedule:** 2026-11-16 → 2027-02-21 · 24 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-001
**Related tasks:** AOS-PLAT-032;AOS-SEC-022

**Outcome.** Persist versioned semantic events with causal links, provenance, sensitivity, retention, integrity, payload encryption and bounded indexing.

**Scope.** Produce and integrate: event schema; append API; causal/integrity metadata; encrypted payloads; retention/tombstone rules; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Committed events are immutable under the model, protected payloads require scoped keys, and retention/deletion semantics are explicit
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** event schema; append API; causal/integrity metadata; encrypted payloads; retention/tombstone rules; tests
**Verification:** tamper, ordering, crash, schema evolution, deletion/redaction and quota tests
**Evidence:** event-log conformance; recovery/tamper report; storage overhead
**Traceability:** specs: AOS-ARCH-009#event-log;AOS-PROD-002#event-envelope; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-021"></a>

#### AOS-PROD-021 — Implement materialized views, snapshots, and deterministic replay

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** History/Storage Engineer · History
**Schedule:** 2027-01-11 → 2027-04-04 · 22 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** AOS-PROD-020;AOS-PROD-003

**Outcome.** Derive current entity/activity state from trusted events and snapshots without repeating external effects.

**Scope.** Produce and integrate: projection framework; snapshot format; replay engine; versioned reducers; corruption/rebuild tools. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Identical trusted inputs yield identical state, external actions are represented by receipts not re-executed, and projections can be rebuilt
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** projection framework; snapshot format; replay engine; versioned reducers; corruption/rebuild tools
**Verification:** full rebuild, snapshot+tail, reducer upgrade, corrupt event and external-effect non-replay tests
**Evidence:** replay determinism report; rebuild metrics; failure corpus
**Traceability:** specs: AOS-ARCH-009#materialized-state;AOS-PROD-002#replay-and-undo; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-030"></a>

#### AOS-PROD-030 — Assign consistency model to each data family

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Distributed Data Architect · Data Consistency
**Schedule:** 2027-01-25 → 2027-04-04 · 15 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-001
**Related tasks:** AOS-PROD-020;AOS-PROD-021

**Outcome.** Choose transaction, event log, CRDT, authoritative provider, snapshot, or ephemeral semantics based on failure and collaboration requirements.

**Scope.** Produce and integrate: data-family matrix; conflict/partition models; merge/transaction rules; simulations; migration constraints. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No data family defaults to CRDT without merge semantics, and irreversible/security state uses transactional/authoritative rules
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** data-family matrix; conflict/partition models; merge/transaction rules; simulations; migration constraints
**Verification:** EXP-061 with concurrent offline edits, permissions, payments/actions, deletion and provider-authoritative data
**Evidence:** model selection report; simulation traces; EXP-061 record
**Traceability:** specs: AOS-ARCH-009#consistency-models;AOS-ADR-0005#decision; sources: none; claims: CLM-019; experiments: EXP-061
**Phase / volume:** Phase 2 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-031"></a>

#### AOS-PROD-031 — Implement encrypted peer/cloud sync v0

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Sync Engineer · Sync
**Schedule:** 2027-04-19 → 2027-08-22 · 30 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-030
**Related tasks:** AOS-SEC-022;AOS-PLAT-033

**Outcome.** Synchronize eligible events/objects across devices or user-controlled relays with identity, causal progress, conflicts, revocation, quotas and offline recovery.

**Scope.** Produce and integrate: sync protocol; device membership; encrypted chunks; causal checkpoints; conflict handling; relay/reference backend. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- A revoked device cannot receive future protected content, corrupt peers cannot silently rewrite history, and offline progress converges per chosen models
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** sync protocol; device membership; encrypted chunks; causal checkpoints; conflict handling; relay/reference backend
**Verification:** partition/reorder/duplicate/corrupt/revoked-device/quota/key-rotation and metadata-privacy tests
**Evidence:** sync conformance; threat review; bandwidth/storage metrics; conflict corpus
**Traceability:** specs: AOS-ARCH-009#sync-model;AOS-PROD-004#backup-bundle; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-040"></a>

#### AOS-PROD-040 — Prove semantic journal excludes secure/raw sensitive input

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Privacy/Security Engineer · History Privacy
**Schedule:** 2027-02-22 → 2027-04-18 · 12 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-020
**Related tasks:** AOS-PLAT-035;AOS-SEC-051

**Outcome.** Verify that passwords, one-time codes, biometric material, private-key operations, protected views and diagnostic raw input do not enter durable/synced history by default.

**Scope.** Produce and integrate: taint labels; secure-input integration; storage/sync inspectors; diagnostic consent/TTL; attack fixtures. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No protected test token appears in event, log, crash, backup or sync payload
- diagnostic capture is visibly scoped and expires
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** taint labels; secure-input integration; storage/sync inspectors; diagnostic consent/TTL; attack fixtures
**Verification:** EXP-060 using secure fields, clipboard, voice/handwriting, crash logs and malicious providers
**Evidence:** taint report; storage/sync scans; EXP-060 record; privacy approval
**Traceability:** specs: AOS-PROD-002#capture-boundary;AOS-ARCH-012#sensitive-data; sources: none; claims: CLM-016; experiments: EXP-060
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-041"></a>

#### AOS-PROD-041 — Implement history timeline, search, export, deletion, and explanations

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** History Product Engineer · History UX
**Schedule:** 2027-04-05 → 2027-06-27 · 20 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-020;AOS-PROD-021
**Related tasks:** AOS-PROD-040

**Outcome.** Let users inspect events by entity/activity/provider/capability/device/time, understand provenance, and apply honest retention/deletion/export actions.

**Scope.** Produce and integrate: timeline/search API and UI; provenance/explanation view; export bundle; deletion modes; retention controls. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- UI never implies remote erasure without provider evidence and every visible event exposes source and retention class
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** timeline/search API and UI; provenance/explanation view; export bundle; deletion modes; retention controls
**Verification:** accessibility, protected payload, remote-vs-local deletion, large history and provider removal tests
**Evidence:** UX test report; export sample; deletion audit; performance metrics
**Traceability:** specs: AOS-PROD-002#timeline-and-search;AOS-PROD-002#privacy-controls; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-050"></a>

#### AOS-PROD-050 — Implement entity-first shell skeleton

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Shell Lead · Shell
**Schedule:** 2027-02-08 → 2027-06-13 · 30 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** AOS-PLAT-037;AOS-PLAT-035;AOS-PROD-003;AOS-PROD-012;AOS-PROD-021

**Outcome.** Render entity identity/state/activity/actions/views and workspace navigation through portable scene, input, accessibility, storage, and provider contracts.

**Scope.** Produce and integrate: home/workspace/entity surfaces; semantic focus tree; action/receipt UI; software renderer path; themes/layout primitives. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Same shell source runs on two backends, all actions use portable schemas, and custom views expose complete semantics
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** home/workspace/entity surfaces; semantic focus tree; action/receipt UI; software renderer path; themes/layout primitives
**Verification:** QEMU and first-board workflows, keyboard/switch/screen-reader, provider failure and large graph tests
**Evidence:** demo recording; accessibility tree dumps; frame/input metrics; support matrix
**Traceability:** specs: AOS-PROD-001#entity-surfaces;AOS-ARCH-008#scene-and-semantics; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-051"></a>

#### AOS-PROD-051 — Implement IntentBox draft and confirmation flow

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Intent/Product Engineer · Intent
**Schedule:** 2027-04-19 → 2027-08-08 · 24 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-010
**Related tasks:** AOS-PROD-013;AOS-PROD-050;AOS-PROD-071

**Outcome.** Parse multimodal user input into editable intent drafts with entities, constraints, providers, grants, estimates, ambiguity and effect preview.

**Scope.** Produce and integrate: intent draft schema; parser interfaces; entity/constraint editor; confirmation UI; test grammar/providers. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Input never directly produces a sensitive external effect and users can see/correct interpretation, provider and destination
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** intent draft schema; parser interfaces; entity/constraint editor; confirmation UI; test grammar/providers
**Verification:** ambiguous recipient/account/amount/destination and inaccessible/offline provider tests
**Evidence:** intent safety dataset; confirmation/error metrics; UX/security review
**Traceability:** specs: AOS-PROD-001#intent-box;AOS-ARCH-010#proposal-and-confirmation; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-052"></a>

#### AOS-PROD-052 — Implement widget and view sandbox contracts

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** UI Runtime Engineer · Widgets
**Schedule:** 2027-05-03 → 2027-08-08 · 24 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-011;AOS-CORE-034
**Related tasks:** AOS-PROD-050;AOS-PLAT-041

**Outcome.** Render declarative or sandboxed provider views with scoped entity projections, action handles, accessibility, energy/network budgets and failure fallback.

**Scope.** Produce and integrate: view/widget manifest; sandbox runtime; data projection; action bridge; resource enforcement; fallback UI. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Visible widgets cannot execute effects directly, access undeclared data, evade budgets, or break shell recovery
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** view/widget manifest; sandbox runtime; data projection; action bridge; resource enforcement; fallback UI
**Verification:** malicious widget, overdraw/CPU/network, provider crash/update, accessibility and action-denial tests
**Evidence:** sandbox test report; energy/resource metrics; conformance catalog
**Traceability:** specs: AOS-PROD-003#widgets;AOS-ARCH-008#sandboxed-views; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-053"></a>

#### AOS-PROD-053 — Implement notification, structured clipboard, and share services

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Product Platform Engineer · Shell Services
**Schedule:** 2027-05-03 → 2027-07-25 · 20 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-010;AOS-PROD-020
**Related tasks:** AOS-PROD-050;AOS-PLAT-035

**Outcome.** Provide typed, provenance-aware, permissioned notifications, clipboard history, selections and share actions across providers.

**Scope.** Produce and integrate: notification/clipboard/share schemas; secure expiry; UI surfaces; provider/action routing; migration rules. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Sensitive clipboard entries expire and remain scoped, notifications expose publisher/provenance, and share destinations are confirmed
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** notification/clipboard/share schemas; secure expiry; UI surfaces; provider/action routing; migration rules
**Verification:** sensitive clipboard, spoofing, expiry, background access, multi-format coercion and accessibility tests
**Evidence:** privacy/security report; action receipts; UX conformance
**Traceability:** specs: AOS-PROD-005#clipboard-and-selection;AOS-PROD-001#activity-and-stories; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-060"></a>

#### AOS-PROD-060 — Run full device migration and restore drill

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Recovery/Product Engineer · Migration
**Schedule:** 2027-10-04 → 2027-12-12 · 15 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-031;AOS-PROD-061;AOS-PLAT-052;AOS-SEC-022
**Related tasks:** none

**Outcome.** Restore portable state, rehydrate accounts, regenerate device-bound identity, report omissions, and revoke/retain old-device trust deliberately.

**Scope.** Produce and integrate: source/target inventory; migration protocol; re-enrollment flows; omission report; old-device decision; drill automation. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- All portable test data restores, non-exportable keys are absent/regenerated, failures are explicit, and unrelated namespaces recover
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** source/target inventory; migration protocol; re-enrollment flows; omission report; old-device decision; drill automation
**Verification:** EXP-062 clean target, partial provider failure, unknown schema, corrupt bundle and lost source scenarios
**Evidence:** restore logs; key inventory; omission report; EXP-062 record
**Traceability:** specs: AOS-PROD-004#migration-flow;AOS-ADR-0005#decision; sources: none; claims: CLM-015; experiments: EXP-062
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-061"></a>

#### AOS-PROD-061 — Implement encrypted backup bundle and verified restore

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Backup Engineer · Backup
**Schedule:** 2027-05-17 → 2027-09-05 · 26 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-020;AOS-PROD-003;AOS-SEC-022
**Related tasks:** AOS-PLAT-032

**Outcome.** Create chunked self-describing encrypted backups with integrity, compatibility, omission, key-wrapping, destination and restore verification.

**Scope.** Produce and integrate: bundle format; chunk/integrity engine; local/peer/vault destinations; verifier; restore planner; omission report. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- “Backup complete” requires verified decrypt/integrity/schema inventory and never contains non-exportable test keys
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** bundle format; chunk/integrity engine; local/peer/vault destinations; verifier; restore planner; omission report
**Verification:** corrupt/truncate/wrong key/unknown schema/dedup/privacy/large data and scheduled drill tests
**Evidence:** backup/restore conformance; sampled decrypt result; omission report; storage metrics
**Traceability:** specs: AOS-PROD-004#backup-bundle;AOS-ARCH-009#backup-classes; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-070"></a>

#### AOS-PROD-070 — Implement accessibility semantics and assistive-service baseline

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Accessibility Lead · Accessibility
**Schedule:** 2027-03-22 → 2027-07-25 · 25 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** AOS-PROD-050;AOS-PLAT-035

**Outcome.** Make core shell, settings, history, actions, recovery and stock workflows operable through semantic trees, keyboard, switch, screen reader and magnification.

**Scope.** Produce and integrate: semantic API/runtime; screen reader baseline; focus/navigation tests; audit tooling; accessible recovery/action flows. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Core workflows complete without precise touch/vision and accessibility regressions block release
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** semantic API/runtime; screen reader baseline; focus/navigation tests; audit tooling; accessible recovery/action flows
**Verification:** keyboard-only, switch-only, screen-reader and custom-view conformance with disabled/limited sensory scenarios
**Evidence:** accessibility audit; semantic tree coverage; user test findings
**Traceability:** specs: AOS-ARCH-008#scene-and-semantics;AOS-PROD-005#semantic-tree;AOS-PROD-005#assistive-services; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-071"></a>

#### AOS-PROD-071 — Implement localization and multimodal input framework

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Internationalization/Input Lead · Localization
**Schedule:** 2027-04-19 → 2027-08-22 · 24 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** AOS-PLAT-035;AOS-PROD-070

**Outcome.** Support Unicode, bidi, locale-aware presentation, pseudolocalization, keyboards, voice/handwriting adapters and retention of originals by policy.

**Scope.** Produce and integrate: localization runtime; message format; bidi/layout hooks; IME contract; voice/handwriting adapters; CI locales. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Persisted values remain locale-independent, core UI passes RTL/expansion, and uncertain recognition stays editable
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** localization runtime; message format; bidi/layout hooks; IME contract; voice/handwriting adapters; CI locales
**Verification:** RTL, CJK/Indic/Thai, mixed scripts, expansion, plural/case, time zones and original-retention tests
**Evidence:** localization matrix; visual diffs; input/privacy results
**Traceability:** specs: AOS-PROD-005#localization;AOS-PROD-005#input-modalities; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-080"></a>

#### AOS-PROD-080 — Benchmark entity-first shell against task baselines

**Type / priority / status:** Experiment · P1 · Backlog
**Owner / workstream:** Product Research Lead · Product Research
**Schedule:** 2027-06-28 → 2027-09-05 · 15 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-050;AOS-PROD-041;AOS-LEGAL-008
**Related tasks:** none

**Outcome.** Measure workflow time, errors, comprehension, resumption, trust and discoverability for entity-first versus conventional app/launcher approaches.

**Scope.** Produce and integrate: study protocol; representative workflows; comparator; instrumentation; anonymized results; design decisions. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Results quantify benefits and regressions, disclose limitations, and update product priorities rather than merely validating the concept
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** study protocol; representative workflows; comparator; instrumentation; anonymized results; design decisions
**Verification:** EXP-070 with pilot then appropriately sized study and accessibility representation
**Evidence:** study report; raw/processed data under policy; EXP-070 record
**Traceability:** specs: AOS-PROD-001#product-contract;AOS-VSN-003#product-evidence; sources: none; claims: CLM-017; experiments: EXP-070
**Phase / volume:** Phase 6 · Volume 04
**Specialist review:** none

<a id="task-aos-prod-090"></a>

#### AOS-PROD-090 — Evaluate IntentBox interpretation and confirmation safety

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Product Safety Researcher · Product Research
**Schedule:** 2027-08-23 → 2027-10-31 · 15 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-051;AOS-LEGAL-008
**Related tasks:** none

**Outcome.** Measure whether users detect and correct ambiguous entities, accounts, recipients, amounts, providers, destinations and irreversible effects.

**Scope.** Produce and integrate: ambiguity/effect test set; study UI; error/confirmation metrics; mitigation recommendations. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- High-impact ambiguities have explicit mitigation and no tested sensitive action can bypass review through input modality
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** ambiguity/effect test set; study UI; error/confirmation metrics; mitigation recommendations
**Verification:** EXP-071 including time pressure, accessibility needs and adversarial provider labels
**Evidence:** study report; error taxonomy; EXP-071 record; design changes
**Traceability:** specs: AOS-PROD-001#intent-box;AOS-ARCH-010#proposal-and-confirmation; sources: none; claims: none; experiments: EXP-071
**Phase / volume:** Phase 6 · Volume 04
**Specialist review:** none

<a id="task-aos-prod-100"></a>

#### AOS-PROD-100 — Implement and evaluate agent shadow mode

**Type / priority / status:** Experiment · P1 · Backlog
**Owner / workstream:** Agent Runtime Lead · Agents
**Schedule:** 2027-07-26 → 2027-11-28 · 28 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-010;AOS-PROD-020;AOS-LEGAL-008
**Related tasks:** AOS-PROD-051;AOS-SEC-070

**Outcome.** Let agents propose ranked action plans and explanations without execution, then measure usefulness, errors, unsupported assumptions and user corrections.

**Scope.** Produce and integrate: agent sandbox; plan schema; shadow recorder; explanation/provenance; evaluation set; review UI. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Shadow mode has no effect authority, every proposal cites inputs/providers/capabilities, and evaluation thresholds gate further autonomy
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** agent sandbox; plan schema; shadow recorder; explanation/provenance; evaluation set; review UI
**Verification:** EXP-073 across local/external/sensitive workflows and withheld adversarial cases
**Evidence:** precision/usefulness/error results; capability-use traces; EXP-073 record
**Traceability:** specs: AOS-ARCH-010#trust-ladder;AOS-ARCH-010#evaluation; sources: none; claims: CLM-018; experiments: EXP-073
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-101"></a>

#### AOS-PROD-101 — Implement agent budgets, approval, receipts, and bounded autonomy

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Agent Runtime Lead · Agents
**Schedule:** 2027-11-29 → 2028-04-16 · 30 estimated days · M9
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-100;AOS-PROD-012;AOS-CORE-034;AOS-PLAT-041;AOS-SEC-070
**Related tasks:** none

**Outcome.** Enforce per-agent data, network, cost, energy, rate, time, scope and effect policies for reversible/confirmed execution.

**Scope.** Produce and integrate: budget/policy engine integration; user grant UI; action execution bridge; receipts; kill/revoke; audit/explanation. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No agent exceeds grants/budgets, sensitive effects require declared confirmation, and revocation stops future work with visible residual effects
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** budget/policy engine integration; user grant UI; action execution bridge; receipts; kill/revoke; audit/explanation
**Verification:** malicious/looping/costly/data-exfiltrating agent, revocation, offline and provider-compromise tests
**Evidence:** containment report; budget accounting; user-study findings; receipts
**Traceability:** specs: AOS-ARCH-010#defense-in-depth;AOS-ARCH-010#resource-budgets; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-110"></a>

#### AOS-PROD-110 — Deliver Tier 0/1 stock experience alpha

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Product Lead · Stock Experiences
**Schedule:** 2027-07-12 → 2028-02-06 · 45 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** AOS-PROD-050
**Related tasks:** AOS-PROD-053;AOS-PROD-061;AOS-PROD-070;AOS-PLAT-090

**Outcome.** Integrate settings, system status, files/editor, contacts, calendar, tasks, notes, photos, browser/provider, search, backup and developer tools into coherent portable experiences.

**Scope.** Produce and integrate: first-party provider packages; coherent navigation/settings; support/limitations matrix; update/migration data; demo workflows. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** Use portable entity, action, event, view, and provider contracts; no device-specific type may enter product state or UI semantics.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Experiences use shared entity/action/history contracts, survive restart/update/migration, and publish unsupported hardware/service functions honestly
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** first-party provider packages; coherent navigation/settings; support/limitations matrix; update/migration data; demo workflows
**Verification:** daily-use dogfood, accessibility, crash/recovery, provider uninstall/update and cross-target conformance
**Evidence:** alpha release bundle; dogfood findings; workflow coverage; known limitations
**Traceability:** specs: AOS-PROD-006#tier-zero;AOS-PROD-006#tier-one; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-120"></a>

#### AOS-PROD-120 — Prototype IntentBox and FlexLight with inspectable action plans

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Product Interaction Lead · Interaction Runtime
**Schedule:** 2027-05-17 → 2027-08-08 · 30 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Prototype IntentBox and FlexLight with inspectable action plans.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-PROD-007#intentbox, AOS-PROD-007#planning. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Prototype IntentBox and FlexLight with inspectable action plans; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-PROD-007#intentbox;AOS-PROD-007#planning; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-121"></a>

#### AOS-PROD-121 — Specify action-provider manifests and adapter contracts

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Product Platform Lead · Provider Interoperability
**Schedule:** 2026-09-21 → 2026-11-15 · 20 estimated days · M2
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Specify action-provider manifests and adapter contracts.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-PROD-011#native-manifest, AOS-PROD-011#adapter-model. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Specify action-provider manifests and adapter contracts; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-PROD-011#native-first;AOS-PROD-011#degradation; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-122"></a>

#### AOS-PROD-122 — Implement semantic transclusion and SideMemo prototype

**Type / priority / status:** Task · P1 · Planned
**Owner / workstream:** Product Engineer · Context and Linking
**Schedule:** 2027-06-28 → 2027-09-19 · 30 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Implement semantic transclusion and SideMemo prototype.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-PROD-010#transclusion, AOS-PROD-010#sidememo. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Implement semantic transclusion and SideMemo prototype; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-PROD-010#transclusion;AOS-PROD-010#sidememo; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-123"></a>

#### AOS-PROD-123 — Implement personal data authority and purpose-bound views

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Privacy Product Engineer · Data Authority
**Schedule:** 2027-06-14 → 2027-09-19 · 35 estimated days · M4
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Implement personal data authority and purpose-bound views.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-PROD-009#authority, AOS-PROD-009#purpose-views. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Implement personal data authority and purpose-bound views; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-PROD-009#ownership;AOS-PROD-009#agent-view; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** none

<a id="task-aos-prod-124"></a>

#### AOS-PROD-124 — Evaluate malleable itemized software against conventional apps

**Type / priority / status:** Experiment · P1 · Planned
**Owner / workstream:** Product Research Lead · Malleable Software
**Schedule:** 2027-08-09 → 2027-10-31 · 30 estimated days · M8
**Parent:** AOS-PROD-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Evaluate malleable itemized software against conventional apps.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-PROD-008#model, AOS-PROD-008#evaluation. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Evaluate malleable itemized software against conventional apps; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-PROD-008#item-model;AOS-PROD-008#prior-art; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 09
**Specialist review:** product;ux

<a id="track-aos-sec"></a>

### AOS-SEC

<a id="task-aos-sec-000"></a>

#### AOS-SEC-000 — Security, Update, and Assurance epic

**Type / priority / status:** Epic · P1 · Backlog
**Owner / workstream:** Security Lead · Program
**Schedule:** 2026-07-13 → 2030-01-20 · 3 estimated days · Continuous
**Parent:** none
**Dependencies:** none
**Related tasks:** none

**Outcome.** Define, test, and independently review the security and update model.

**Scope.** Produce and integrate: project charter; milestone map; owned backlog; status/evidence dashboard. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Project has one accountable lead, an approved scope, milestone links, and no orphaned P0/P1 work
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** project charter; milestone map; owned backlog; status/evidence dashboard
**Verification:** monthly project review and gate reconciliation
**Evidence:** project update; dependency report; risk and budget delta
**Traceability:** specs: AOS-ARCH-012#threat-model-scope; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-001"></a>

#### AOS-SEC-001 — Publish system threat model v0

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Security Lead · Threat Modeling
**Schedule:** 2026-07-13 → 2026-08-16 · 12 estimated days · M0
**Parent:** AOS-SEC-000
**Dependencies:** none
**Related tasks:** AOS-DOCS-012;AOS-LEGAL-001

**Outcome.** Define assets, actors, trust boundaries, physical/network/supply-chain/device/agent threats, assumptions, out-of-scope cases and security objectives.

**Scope.** Produce and integrate: data-flow/trust diagrams; threat catalog; objectives; residual-risk vocabulary; review cadence. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every major service/hardware/agent/update boundary has an owner, assets, attacker/failure model and linked controls
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** data-flow/trust diagrams; threat catalog; objectives; residual-risk vocabulary; review cadence
**Verification:** architecture/kernel/platform/product/hardware/legal red-team workshop
**Evidence:** threat-model review; unresolved Critical/High threats; mitigation task links
**Traceability:** specs: AOS-ARCH-012#threat-model-scope;AOS-ARCH-012#assets-and-adversaries; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-002"></a>

#### AOS-SEC-002 — Inventory trusted computing base and privilege domains

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Security Architect · Architecture Security
**Schedule:** 2026-07-27 → 2026-09-06 · 10 estimated days · M1
**Parent:** AOS-SEC-000
**Dependencies:** none
**Related tasks:** AOS-SEC-001;AOS-PLAT-001;AOS-CORE-001

**Outcome.** Enumerate kernel, loader, recovery, key, update, identity, driver, firmware, secure hardware and privileged service components and minimize their authority.

**Scope.** Produce and integrate: TCB inventory; privilege/capability graph; firmware trust list; reduction plan; target-specific exceptions. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every privileged component has a justified minimal role and firmware/target trust is distinguishable from native Agent OS assurance
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** TCB inventory; privilege/capability graph; firmware trust list; reduction plan; target-specific exceptions
**Verification:** source/package/board manifest analysis and privilege-route review
**Evidence:** TCB size/composition baseline; authority graph; exception tasks
**Traceability:** specs: AOS-ARCH-012#trusted-computing-base;AOS-ARCH-004#least-authority; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-010"></a>

#### AOS-SEC-010 — Conduct capability and IPC security design review

**Type / priority / status:** Review · P0 · Backlog
**Owner / workstream:** Capability Security Reviewer · Kernel Security
**Schedule:** 2026-11-30 → 2027-01-24 · 12 estimated days · M2
**Parent:** AOS-SEC-000
**Dependencies:** AOS-SEC-001
**Related tasks:** AOS-CORE-032;AOS-CORE-036

**Outcome.** Find authority amplification, confused-deputy, delegation, revocation, TOCTOU, message-validation, denial-of-service and audit weaknesses before API freeze.

**Scope.** Produce and integrate: review model; abuse cases; findings; required changes/tests; residual assumptions. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No unresolved Critical/High authority-amplification or message-ownership finding enters kernel API level 0
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** review model; abuse cases; findings; required changes/tests; residual assumptions
**Verification:** independent review and adversarial model/property tests
**Evidence:** security report; finding closure links; API gate recommendation
**Traceability:** specs: AOS-ARCH-004#security-properties;AOS-ARCH-004#confused-deputy-defense; sources: SRC-017;SRC-018;SRC-001;SRC-002; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-011"></a>

#### AOS-SEC-011 — Build continuous kernel and service fuzzing program

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Security Testing Lead · Fuzzing
**Schedule:** 2026-12-14 → 2028-06-25 · 25 estimated days · Continuous
**Parent:** AOS-SEC-000
**Dependencies:** AOS-PLAT-003
**Related tasks:** AOS-CORE-039;AOS-PLAT-014

**Outcome.** Fuzz syscall, IDL, package, storage, network, USB, camera, cellular, update and backup parsers with minimized reproducible corpora.

**Scope.** Produce and integrate: fuzz infrastructure; target inventory; corpora; coverage/crash dashboard; triage SLA; regression fixtures. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Every untrusted binary/protocol parser has an owner and active fuzz target or explicit risk acceptance
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** fuzz infrastructure; target inventory; corpora; coverage/crash dashboard; triage SLA; regression fixtures
**Verification:** seeded vulnerabilities and sustained runs with reproducible crash minimization
**Evidence:** coverage trends; findings/fixes; corpus provenance; SLA report
**Traceability:** specs: AOS-ARCH-015#fuzzing;AOS-LEGAL-003#provenance-record; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-012"></a>

#### AOS-SEC-012 — Create formal model and assurance roadmap for kernel core

**Type / priority / status:** Spike · P1 · Backlog
**Owner / workstream:** Formal Methods Lead · Formal Assurance
**Schedule:** 2026-12-28 → 2027-06-13 · 30 estimated days · M5
**Parent:** AOS-SEC-000
**Dependencies:** AOS-CORE-001;AOS-CORE-032
**Related tasks:** AOS-SEC-010

**Outcome.** Model selected capability, IPC, lifecycle, scheduling/resource and memory invariants and choose feasible proof/refinement targets.

**Scope.** Produce and integrate: formal model; invariant catalog; code/model relation; tooling evaluation; staged proof plan; external-review proposal. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Assurance claims state exact model/code/version and no “verified kernel” claim is made without completed refinement evidence
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** formal model; invariant catalog; code/model relation; tooling evaluation; staged proof plan; external-review proposal
**Verification:** model-check key properties and compare traces to executable/kernel tests
**Evidence:** model repository; checked properties; gap report; budget/staffing recommendation
**Traceability:** specs: AOS-ARCH-002#assurance-boundary;AOS-ARCH-012#assurance-strategy; sources: SRC-001;SRC-002; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-020"></a>

#### AOS-SEC-020 — Select and integrate cryptographic primitives and provider API

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Cryptography Engineer · Cryptography
**Schedule:** 2026-10-05 → 2026-12-13 · 15 estimated days · M2
**Parent:** AOS-SEC-000
**Dependencies:** AOS-SEC-001;AOS-LEGAL-004
**Related tasks:** none

**Outcome.** Use reviewed cryptographic libraries/primitives through a narrow provider interface with algorithm agility, key separation, misuse resistance and test vectors.

**Scope.** Produce and integrate: crypto provider contract; algorithm/profile choices; library/provenance review; key-purpose API; vector/negative tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Callers cannot request raw universal keys or unsafe defaults, and algorithm/version/key purpose are recorded for migration
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** crypto provider contract; algorithm/profile choices; library/provenance review; key-purpose API; vector/negative tests
**Verification:** known-answer tests, misuse/nonce/key-purpose cases, dependency/SBOM review and independent crypto review
**Evidence:** crypto design/review; vector results; dependency provenance; migration plan
**Traceability:** specs: AOS-ARCH-012#cryptography;AOS-LEGAL-003#dependency-policy; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-021"></a>

#### AOS-SEC-021 — Implement entropy collection and DRBG service

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Cryptography Engineer · Cryptography
**Schedule:** 2026-11-30 → 2027-02-21 · 16 estimated days · M3
**Parent:** AOS-SEC-000
**Dependencies:** AOS-CORE-010
**Related tasks:** AOS-PLAT-013;AOS-SEC-020;AOS-OPEN-020

**Outcome.** Collect, health-test, condition and distribute entropy with explicit startup/failure/target quality and no silent weak fallback.

**Scope.** Produce and integrate: entropy source interfaces; health tests; DRBG; reseed/fork behavior; quality/status API; target backends. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Security operations block/fail explicitly before sufficient entropy and cloned/emulated instances do not silently share state
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** entropy source interfaces; health tests; DRBG; reseed/fork behavior; quality/status API; target backends
**Verification:** known-answer/statistical health/failure/no-source/duplicate-VM and suspend tests
**Evidence:** entropy design review; health/failure logs; target source inventory
**Traceability:** specs: AOS-ARCH-012#entropy; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-022"></a>

#### AOS-SEC-022 — Implement key lifecycle and data-key hierarchy

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Key Management Engineer · Key Management
**Schedule:** 2027-01-25 → 2027-05-16 · 24 estimated days · M4
**Parent:** AOS-SEC-000
**Dependencies:** AOS-SEC-020;AOS-PROD-001
**Related tasks:** AOS-SEC-021

**Outcome.** Generate, wrap, store, rotate, revoke, destroy, recover and migrate keys according to portable/rehydratable/non-exportable data classes.

**Scope.** Produce and integrate: key service; purpose-scoped handles; hierarchy/wrapping; rotation/revocation; hardware-provider abstraction; recovery metadata; audit. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Raw private keys never enter ordinary clients, non-exportable keys cannot be backed up, and rotation/revocation has bounded recoverable semantics
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** key service; purpose-scoped handles; hierarchy/wrapping; rotation/revocation; hardware-provider abstraction; recovery metadata; audit
**Verification:** lost/corrupt key, rotation, revoked device, backup/restore, process compromise and no-hardware-provider scenarios
**Evidence:** key inventory; lifecycle traces; backup omission test; independent review
**Traceability:** specs: AOS-ARCH-012#key-management;AOS-ADR-0005#decision; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-030"></a>

#### AOS-SEC-030 — Implement signed boot manifest and root-of-trust abstraction

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Boot Security Engineer · Boot Security
**Schedule:** 2026-12-28 → 2027-04-18 · 24 estimated days · M3
**Parent:** AOS-SEC-000
**Dependencies:** AOS-SEC-020;AOS-CORE-012
**Related tasks:** AOS-PLAT-015

**Outcome.** Verify kernel/initial image/configuration, bind target/security version, expose boot state, and allow replaceable hardware/software roots of trust.

**Scope.** Produce and integrate: signed manifest; verifier; key/trust-root abstraction; verified boot-state record; development/production modes; recovery policy. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Untrusted image/configuration does not execute as trusted, boot state is inspectable, and target secure hardware is an adapter—not assumed “as-is”
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** signed manifest; verifier; key/trust-root abstraction; verified boot-state record; development/production modes; recovery policy
**Verification:** tamper, wrong target/version/key, development-state warning, key rotation and recovery tests on QEMU/board
**Evidence:** boot verification traces; key/manifest test corpus; threat review
**Traceability:** specs: AOS-ARCH-013#boot-chain;AOS-ARCH-013#root-of-trust; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 4 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-031"></a>

#### AOS-SEC-031 — Specify measured boot and attestation semantics

**Type / priority / status:** Task · P2 · Backlog
**Owner / workstream:** Security Architect · Attestation
**Schedule:** 2027-04-19 → 2027-07-11 · 14 estimated days · M8
**Parent:** AOS-SEC-000
**Dependencies:** AOS-SEC-030;AOS-LEGAL-008
**Related tasks:** AOS-SEC-022

**Outcome.** Define what is measured, who can attest, privacy/linkability, freshness, claims, key custody, verifier policy and unsupported hardware behavior.

**Scope.** Produce and integrate: measurement log format; attestation token/claim model; privacy policy; software reference; hardware-provider requirements. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Attestation cannot become ambient cross-service tracking and claims identify exact measured scope and trust anchor
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** measurement log format; attestation token/claim model; privacy policy; software reference; hardware-provider requirements
**Verification:** replay/linkability/downgrade/unknown-target/verifier-policy tests and privacy review
**Evidence:** attestation design; test tokens; residual privacy/compatibility risks
**Traceability:** specs: AOS-ARCH-013#attestation;AOS-ARCH-012#identity-and-attestation; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 5 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-032"></a>

#### AOS-SEC-032 — Implement anti-rollback and security-version policy

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Boot/Update Security Engineer · Boot Security
**Schedule:** 2027-04-05 → 2027-06-27 · 16 estimated days · M4
**Parent:** AOS-SEC-000
**Dependencies:** AOS-PLAT-004
**Related tasks:** AOS-SEC-030;AOS-SEC-022

**Outcome.** Prevent unauthorized downgrade of boot, update, schema, keys and security-critical services while preserving explicit recovery and development paths.

**Scope.** Produce and integrate: security-version counters/metadata; authorization policy; recovery/dev exceptions; key rotation; test vectors. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Security downgrade is rejected or explicitly user-authorized in a visible non-production state and counter failure remains recoverable
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** security-version counters/metadata; authorization policy; recovery/dev exceptions; key rotation; test vectors
**Verification:** downgrade, counter corruption, interrupted increment, recovery and development-mode tests
**Evidence:** anti-rollback matrix; fault traces; policy review
**Traceability:** specs: AOS-ARCH-013#anti-rollback;AOS-ARCH-013#rollback; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 5 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-040"></a>

#### AOS-SEC-040 — Threat-model and red-team update/package pipeline

**Type / priority / status:** Review · P0 · Backlog
**Owner / workstream:** Update Security Reviewer · Update Security
**Schedule:** 2027-07-26 → 2027-10-17 · 15 estimated days · M8
**Parent:** AOS-SEC-000
**Dependencies:** AOS-SEC-032;AOS-LEGAL-012
**Related tasks:** AOS-PLAT-050;AOS-PLAT-051

**Outcome.** Find signing, metadata, mirror, replay, freeze, mix-and-match, dependency, rollback, partial-install and recovery attacks.

**Scope.** Produce and integrate: threat model; attack fixtures; findings; metadata/key/threshold policy; incident/compromise recovery plan. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No unresolved Critical/High update attack remains before developer preview and signing-key compromise has a recovery plan
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** threat model; attack fixtures; findings; metadata/key/threshold policy; incident/compromise recovery plan
**Verification:** adversarial repository/network/signing-key/partial-state tests and independent review
**Evidence:** red-team report; finding closure; key-compromise drill; release recommendation
**Traceability:** specs: AOS-ARCH-013#update-model;AOS-ARCH-012#supply-chain; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-041"></a>

#### AOS-SEC-041 — Threat-model and validate recovery environment

**Type / priority / status:** Review · P0 · Backlog
**Owner / workstream:** Recovery Security Reviewer · Recovery Security
**Schedule:** 2027-07-12 → 2027-09-19 · 12 estimated days · M8
**Parent:** AOS-SEC-000
**Dependencies:** AOS-SEC-030;AOS-SEC-022
**Related tasks:** AOS-PLAT-052

**Outcome.** Ensure recovery authentication, data access, destructive operations, trust roots, media, physical access and factory/owner reset preserve declared security.

**Scope.** Produce and integrate: recovery threat model; authentication/data/destructive policy; attack fixtures; audit/indicator requirements; findings. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Recovery cannot silently bypass device-data policy, destructive actions are unmistakable, and trust state after recovery is explicit
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** recovery threat model; authentication/data/destructive policy; attack fixtures; audit/indicator requirements; findings
**Verification:** stolen device, malicious media, rollback, data extraction, factory reset and failed-key scenarios
**Evidence:** security report; drill traces; finding closure; user-warning review
**Traceability:** specs: AOS-ARCH-013#recovery-environment;AOS-PROD-004#failure-and-rollback; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-050"></a>

#### AOS-SEC-050 — Implement data classification and privacy policy engine

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Privacy Engineering Lead · Privacy Engineering
**Schedule:** 2026-11-02 → 2027-02-07 · 22 estimated days · M4
**Parent:** AOS-SEC-000
**Dependencies:** AOS-SEC-001;AOS-PROD-001;AOS-PROD-010
**Related tasks:** AOS-LEGAL-008

**Outcome.** Classify entity/event/action/diagnostic/sensor/location/biometric/credential data and enforce read/use/destination/retention/sync/export policy.

**Scope.** Produce and integrate: classification vocabulary; labels/taint; policy evaluator; destination/retention rules; UI/explanation API; tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Data cannot be silently downgraded or sent to undeclared destinations and policy decisions are inspectable
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** classification vocabulary; labels/taint; policy evaluator; destination/retention rules; UI/explanation API; tests
**Verification:** cross-provider/action/journal/sync/backup/diagnostic flows and malicious relabel/declassification tests
**Evidence:** policy conformance; data-flow audit; denied/explained examples; performance overhead
**Traceability:** specs: AOS-ARCH-012#sensitive-data;AOS-PROD-002#privacy-controls; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-051"></a>

#### AOS-SEC-051 — Implement log, trace, crash, and evidence redaction controls

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Security Observability Engineer · Privacy Engineering
**Schedule:** 2026-12-14 → 2027-03-07 · 16 estimated days · M4
**Parent:** AOS-SEC-000
**Dependencies:** AOS-LEGAL-004
**Related tasks:** AOS-PLAT-011;AOS-SEC-050

**Outcome.** Prevent secrets, personal data, protected protocol content and hardware identifiers from leaking through observability or public experiment bundles.

**Scope.** Produce and integrate: structured field classes; redaction/tokenization; serial aliases; capture profiles; public/private export; scanners/taint tests. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Seeded secrets never appear in normal/public evidence and redaction preserves diagnostic correlation through approved aliases
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** structured field classes; redaction/tokenization; serial aliases; capture profiles; public/private export; scanners/taint tests
**Verification:** seed credentials/tokens/personal/proprietary fields through logs/crashes/traces and inspect raw/exported artifacts
**Evidence:** redaction scan; taint coverage; false-positive/negative review; public bundle sample
**Traceability:** specs: AOS-ARCH-012#diagnostic-data;AOS-RES-004#evidence-integrity; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-060"></a>

#### AOS-SEC-060 — Implement package signing, SBOM, provenance, and revocation security

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Supply Chain Security Engineer · Supply Chain
**Schedule:** 2026-12-28 → 2027-04-04 · 20 estimated days · M4
**Parent:** AOS-SEC-000
**Dependencies:** AOS-SEC-020;AOS-LEGAL-012
**Related tasks:** AOS-PLAT-014

**Outcome.** Bind packages/components/firmware/models/data to publishers, builds, dependencies, licenses and revocation while supporting key rotation and compromise recovery.

**Scope.** Produce and integrate: signature/provenance verification; trust/revocation metadata; SBOM binding; key rotation; transparency/audit option; test repository. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Executable/artifact identity is bound to approved build/provenance and revoked/unknown publishers cannot run without explicit development policy
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** signature/provenance verification; trust/revocation metadata; SBOM binding; key rotation; transparency/audit option; test repository
**Verification:** tamper, dependency substitution, compromised/revoked/expired key, build mismatch and offline-update tests
**Evidence:** supply-chain conformance; signed sample/SBOM; key-compromise drill
**Traceability:** specs: AOS-PROD-003#integration-package;AOS-LEGAL-003#compliance-tooling;AOS-ARCH-012#supply-chain; sources: SRC-058;SRC-059;SRC-060; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-061"></a>

#### AOS-SEC-061 — Establish secure software and model supply-chain process

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Product Security Lead · Supply Chain
**Schedule:** 2027-02-08 → 2027-06-27 · 18 estimated days · M8
**Parent:** AOS-SEC-000
**Dependencies:** AOS-DOCS-001
**Related tasks:** AOS-SEC-060

**Outcome.** Apply secure development, review, build provenance, dependency/model/data intake, secrets, release and vulnerability controls across repositories.

**Scope.** Produce and integrate: SSDF-aligned practice map; SLSA roadmap; branch/review/secret/dependency policies; model/data cards; release checklist; training. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Critical repositories/releases have required review/provenance, secrets and vulnerable dependencies are detected, and model/data rights are recorded
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** SSDF-aligned practice map; SLSA roadmap; branch/review/secret/dependency policies; model/data cards; release checklist; training
**Verification:** internal audit and simulated dependency/signing/secret/model provenance incidents
**Evidence:** control audit; training completion; incident exercise; improvement backlog
**Traceability:** specs: AOS-GOV-004#response-process;AOS-LEGAL-003#dependency-policy;AOS-ARCH-015#release-evidence; sources: SRC-058;SRC-059;SRC-060;SRC-061; claims: none; experiments: none
**Phase / volume:** Phase 2 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-070"></a>

#### AOS-SEC-070 — Red-team agent capability, data, budget, and effect containment

**Type / priority / status:** Experiment · P0 · Backlog
**Owner / workstream:** Agent Security Lead · Agent Security
**Schedule:** 2027-06-28 → 2027-10-31 · 20 estimated days · M8
**Parent:** AOS-SEC-000
**Dependencies:** AOS-PROD-010;AOS-SEC-050;AOS-CORE-034
**Related tasks:** AOS-PROD-100

**Outcome.** Prove malicious or erroneous agents cannot exceed grants, budgets, destinations, confirmation, effect class or receipt/compensation rules.

**Scope.** Produce and integrate: adversarial agents/prompts/providers; exfiltration/cost/loop/confused-deputy tests; policy findings; kill/revoke drills. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No test agent exceeds capabilities/budgets or performs sensitive effect without confirmation
- any escape blocks autonomy release
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** adversarial agents/prompts/providers; exfiltration/cost/loop/confused-deputy tests; policy findings; kill/revoke drills
**Verification:** EXP-074 with hidden cases and compromised provider/agent scenarios
**Evidence:** red-team report; denied/escaped action traces; EXP-074 record; remediation
**Traceability:** specs: AOS-ARCH-010#defense-in-depth;AOS-ARCH-010#resource-budgets; sources: none; claims: CLM-018; experiments: EXP-074
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-080"></a>

#### AOS-SEC-080 — Commission independent kernel/platform security review

**Type / priority / status:** Review · P0 · Backlog
**Owner / workstream:** Security Lead · Independent Assurance
**Schedule:** 2027-11-01 → 2028-03-19 · 15 estimated days · M8
**Parent:** AOS-SEC-000
**Dependencies:** AOS-CORE-040;AOS-SEC-010;AOS-SEC-040;AOS-SEC-041;AOS-PLAT-080
**Related tasks:** none

**Outcome.** Obtain an external architecture/code/test review of kernel, capabilities, IPC, memory, update, recovery and selected driver/service boundaries.

**Scope.** Produce and integrate: review scope/RFP; evidence/code access; external report; remediation/retest plan; public summary. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Developer preview has no unresolved externally identified Critical issue and all High issues have fix or explicit gate-blocking decision
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** review scope/RFP; evidence/code access; external report; remediation/retest plan; public summary
**Verification:** qualified reviewer selection, finding triage/closure and retest
**Evidence:** independent report; closure matrix; residual risk acceptance; public summary
**Traceability:** specs: AOS-ARCH-012#independent-review;AOS-PLAN-006#technical-gates; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-090"></a>

#### AOS-SEC-090 — Operate vulnerability disclosure and incident response

**Type / priority / status:** Task · P0 · Backlog
**Owner / workstream:** Product Security Incident Lead · Security Operations
**Schedule:** 2026-09-07 → 2030-07-07 · 5 estimated days · Continuous
**Parent:** AOS-SEC-000
**Dependencies:** none
**Related tasks:** AOS-PLAT-051;AOS-SEC-061

**Outcome.** Provide continuous private intake, triage, embargo coordination, fixes, signed updates, advisories, safe harbor and lessons learned.

**Scope.** Produce and integrate: security contact/key; triage system; severity/SLA; incident roles; advisory/update workflow; exercises; metrics. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- Reports are acknowledged/owned, supported targets can receive fixes, and incidents preserve evidence while protecting reporters/users
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** security contact/key; triage system; severity/SLA; incident roles; advisory/update workflow; exercises; metrics
**Verification:** quarterly tabletop plus seeded report from intake through patched release
**Evidence:** exercise logs; response metrics; advisories/postmortems as applicable
**Traceability:** specs: AOS-GOV-004#reporting-vulnerabilities;AOS-GOV-004#response-process; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-100"></a>

#### AOS-SEC-100 — Maintain system assurance case and claim language

**Type / priority / status:** Task · P1 · Backlog
**Owner / workstream:** Security Assurance Lead · Assurance
**Schedule:** 2028-01-24 → 2030-07-07 · 15 estimated days · Continuous
**Parent:** AOS-SEC-000
**Dependencies:** AOS-SEC-012
**Related tasks:** AOS-SEC-080;AOS-DOCS-013

**Outcome.** Link security objectives to design controls, implementation, tests, reviews, residual assumptions, supported targets and update lifecycle.

**Scope.** Produce and integrate: assurance argument/evidence map; target-specific claims; residual risks; release deltas; public wording. The work includes negative and failure-path behavior, documentation, ownership, and downstream interface impact.

**Boundary.** State the threat scope and residual risk; security claims require tests, evidence, update/recovery implications, and independent review where indicated.

**Downstream trust.** Consumers may depend on the result only after the stated verification passes and the evidence artifact is linked. Unknowns become claim or experiment records rather than implicit promises.

**Acceptance criteria**

- No public security/privacy assurance exceeds implementation, target, threat or update evidence and stale claims are removed promptly
- Named deliverables are committed or stored under stable IDs with owner and reviewer
- The stated verification passes on the declared target or the task records a bounded negative result
- Affected specifications, claims, risks, dependencies, and follow-up tasks are updated

**Deliverables:** assurance argument/evidence map; target-specific claims; residual risks; release deltas; public wording
**Verification:** release/gate audits trace every security claim to current evidence and supported scope
**Evidence:** assurance case versions; orphaned/weak claim report; approvals
**Traceability:** specs: AOS-ARCH-012#assurance-strategy;AOS-RES-003#claim-states; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 6 · Volume 04
**Specialist review:** none

<a id="task-aos-sec-110"></a>

#### AOS-SEC-110 — Implement source-taint and restricted-evidence policy checks

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Security Tooling Engineer · Source Assurance
**Schedule:** 2026-11-16 → 2027-01-10 · 20 estimated days · M2
**Parent:** AOS-SEC-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Implement source-taint and restricted-evidence policy checks.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-ARCH-018#taint, AOS-VAL-002#integrity. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Implement source-taint and restricted-evidence policy checks; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-ARCH-018#taint;AOS-VAL-002#integrity; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 4 · Volume 10
**Specialist review:** none

<a id="task-aos-sec-111"></a>

#### AOS-SEC-111 — Build the capability and IPC executable assurance models

**Type / priority / status:** Task · P0 · Planned
**Owner / workstream:** Formal Methods Engineer · Formal Modeling
**Schedule:** 2026-10-19 → 2027-01-10 · 30 estimated days · M2
**Parent:** AOS-SEC-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Build the capability and IPC executable assurance models.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-ARCH-019#initial-models, AOS-VAL-005#methods. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Build the capability and IPC executable assurance models; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-ARCH-019#initial-models;AOS-VAL-005#methods; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 3 · Volume 02
**Specialist review:** none

<a id="task-aos-sec-112"></a>

#### AOS-SEC-112 — Evaluate agent shadow mode and dangerous false-action rates

**Type / priority / status:** Experiment · P0 · Planned
**Owner / workstream:** Agent Safety Lead · Agent Assurance
**Schedule:** 2027-08-23 → 2027-11-28 · 35 estimated days · M8
**Parent:** AOS-SEC-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Evaluate agent shadow mode and dangerous false-action rates.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-VAL-005#agents, AOS-ARCH-010#trust-model. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Evaluate agent shadow mode and dangerous false-action rates; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-VAL-005#agents;AOS-ARCH-010#trust-ladder; sources: none; claims: CLM-018; experiments: EXP-073;EXP-074
**Phase / volume:** Phase 6 · Volume 10
**Specialist review:** security;product

<a id="task-aos-sec-113"></a>

#### AOS-SEC-113 — Publish a scoped release assurance case and residual-risk register

**Type / priority / status:** Review · P0 · Planned
**Owner / workstream:** Security Lead · Assurance Case
**Schedule:** 2027-11-29 → 2028-02-06 · 25 estimated days · M8
**Parent:** AOS-SEC-000
**Dependencies:** none
**Related tasks:** none

**Outcome.** Publish a scoped release assurance case and residual-risk register.

**Scope.** Produce the normative artifact, executable evidence, decision record, and follow-up work required by AOS-VAL-005#assurance-case, AOS-ARCH-019#assurance-levels. Preserve the native Agent OS boundary: Android/Linux behavior may inform Pixel 9 experiments but must not become a portable API or runtime dependency.

**Method.** Start from the immutable source corpus and primary references; identify assumptions and legal constraints; perform the bounded analysis or experiment; record raw evidence and uncertainty; update claims, risks, tasks, and cross-linked specifications.

**Acceptance criteria**

- The deliverable is linked to every listed specification and uses stable document/task/source identifiers.
- The result distinguishes verified evidence, reasoned inference, unresolved assumptions, and rejected claims.
- Acceptance evidence is reproducible from a clean environment or includes exact target, procedure, artifacts, and limitations.
- Android, Linux, vendor, confidential, and reverse-engineered details remain behind the approved boundary with provenance and retirement metadata where applicable.

**Deliverables:** Normative report or implementation for Publish a scoped release assurance case and residual-risk register; machine-readable metadata; updated claim/risk/task records; review notes and follow-up issue links.
**Verification:** Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria.
**Evidence:** Versioned report, raw logs/data or source diff, checksums, reviewer identity/status, and links to the exact specification anchors.
**Traceability:** specs: AOS-VAL-005#assurance-case;AOS-ARCH-019#assurance-levels; sources: none; claims: none; experiments: none
**Phase / volume:** Phase 8 · Volume 10
**Specialist review:** independent-security

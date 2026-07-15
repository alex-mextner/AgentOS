---
id: "AOS-RES-004"
title: "Experiment and Evidence Catalog"
status: "Generated evidence view"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Experiments turn material uncertainty into bounded, reproducible evidence and explicit decision gates."
---

# Experiment and Evidence Catalog

## Table of Contents

- [Purpose](#purpose)
- [Evidence Integrity](#evidence-integrity)
- [Register](#experiment-catalog)
- [Operating Rule](#operating-rule)

<a id="purpose"></a>

## Purpose

Experiments turn material uncertainty into bounded, reproducible evidence and explicit decision gates.

<a id="evidence-integrity"></a>

## Evidence Integrity

An evidence bundle identifies target and revision, firmware, source commit, toolchain, configuration, seed, time, procedure, expected and actual results, raw artifacts, checksums, access class, and reviewer. Redaction must preserve correlation without leaking protected content.

<a id="experiment-catalog"></a>

## Register

| experiment_id | title | hypothesis | owner_task | evidence | gate |
| --- | --- | --- | --- | --- | --- |
| EXP-001 | QEMU AArch64 deterministic boot | A minimal Agent OS image reaches structured console and halt identically across clean CI runs. | AOS-CORE-010 | boot logs; build manifest; hash comparison | G1 |
| EXP-002 | QEMU x86-64 architecture bootstrap | The architecture abstraction supports a second ISA without forking kernel semantics. | AOS-CORE-011 | boot logs; architecture diff; conformance output | G1 |
| EXP-003 | User-mode isolation and fault containment | A faulting process is terminated without corrupting kernel or another process. | AOS-CORE-020 | fault-injection trace; memory checks | G1 |
| EXP-004 | Capability attenuation and revocation | Delegated rights can only narrow and revocation prevents future use under the defined model. | AOS-CORE-032 | property tests; kernel trace; model comparison | G2 |
| EXP-005 | IPC priority and timeout behavior | IPC remains bounded and avoids unmitigated priority inversion under adversarial load. | AOS-CORE-036 | latency histograms; scheduler trace | G2 |
| EXP-006 | Driver-domain crash recovery | A user-space driver domain can restart and re-establish a device contract without kernel restart. | AOS-PLAT-030 | fault log; restart trace; state reconciliation | G3 |
| EXP-011 | Native API application slice | A shell/storage/network slice can be implemented without POSIX types or syscalls. | AOS-PLAT-012 | dependency scan; API conformance report | G4 |
| EXP-014 | BeaglePlay native first boot | The same kernel/service contracts boot on physical AM625 hardware. | AOS-OPEN-020 | UART logs; recovery steps; board manifest | G3 |
| EXP-015 | Second documented SoC port | A second SoC reuses portable services without source forks. | AOS-OPEN-030 | port diff; service test results; leakage report | G3 |
| EXP-020 | PinePhone Pro early native boot | Native Agent OS reaches console on phone-form hardware with repeatable recovery. | AOS-OPEN-050 | UART/USB evidence; recovery record | G6 |
| EXP-021 | Cross-target conformance suite | QEMU and two SoCs satisfy the same service and capability tests. | AOS-PLAT-080 | matrix report; failures by adapter | G3/G4 |
| EXP-022 | Open-phone display/touch/audio | Display, touch and audio services operate through portable contracts. | AOS-OPEN-052 | video; input traces; audio loopback metrics | G6 |
| EXP-023 | Open-phone idle/suspend power | The device enters measured low-power states and wakes reliably. | AOS-OPEN-055 | power traces; wake matrix; thermal report | G6 |
| EXP-024 | Fairphone feasibility dossier | A current Fairphone provides a legally and technically useful quality bridge. | AOS-OPEN-070 | dossier; vendor response; rights matrix | G9 |
| EXP-025 | Sony Open Devices feasibility dossier | A supported Xperia provides a legally and technically useful quality bridge. | AOS-OPEN-071 | dossier; vendor response; rights matrix | G9 |
| EXP-030 | Pixel 9 SKU and unlock verification | Purchased development SKU can be restored and unlocked under documented conditions. | AOS-P9-010 | purchase record; unlock/relock/recovery evidence | G0/G7 |
| EXP-031 | Pixel dependency containment scan | No Android/Linux ABI or code dependency crosses the Pixel adapter boundary. | AOS-P9-015 | source graph; forbidden-symbol report | G7 |
| EXP-032 | Pixel early boot diagnostic spike | A lawful reproducible path reaches Agent OS early diagnostics. | AOS-P9-030 | boot chain map; logs; artifact provenance | G7 |
| EXP-033 | Pixel storage/USB/display feasibility | Essential device paths can be controlled without contaminating portable APIs. | AOS-P9-040 | first-frame/storage/USB evidence; interface diff | G7 |
| EXP-034 | Pixel GPU and power feasibility | GPU/display/power integration has a bounded lawful implementation route. | AOS-P9-050 | protocol dossier; power traces; cost estimate | G7 |
| EXP-035 | Pixel stock quality oracle | Stock device produces repeatable camera/display/power baselines for comparison. | AOS-P9-020 | baseline dataset; test protocol; hashes | G7/G9 |
| EXP-041 | Native MBIM/QMI transport proof | Agent OS controls a documented modem transport without Linux runtime dependency. | AOS-CELL-020 | protocol traces; state-machine tests | G6 |
| EXP-042 | Cellular data and SMS proof | A module registers and provides data/SMS through native services. | AOS-CELL-030 | network traces; SMS receipts; recovery tests | G6 |
| EXP-043 | SIM/eSIM lifecycle study | The team can state supported and unsupported provisioning paths and partner requirements. | AOS-CELL-040 | state model; vendor/GSMA gap analysis | G9 |
| EXP-044 | Voice/IMS feasibility | A vendor/carrier-supported route exists for voice and emergency behavior. | AOS-CELL-050 | partner evidence; call-flow trace; legal/regulatory review | G9 |
| EXP-050 | RAW sensor capture on documented board | Agent OS captures stable RAW frames with complete timing/control metadata. | AOS-CAM-020 | DNG/RAW corpus; metadata validation | G5 |
| EXP-051 | Reference 3A pipeline | AE/AWB/AF converge under controlled scenes with measurable stability. | AOS-CAM-030 | scene metrics; convergence plots; tuning files | G5 |
| EXP-052 | Calibration and image-quality baseline | Lens shading, color, noise, sharpness and distortion are measured and corrected reproducibly. | AOS-CAM-040 | calibration bundle; metric report | G5 |
| EXP-053 | Burst computational pipeline | Published burst concepts improve measured low-light/HDR outcomes without relying on private Pixel code. | AOS-CAM-050 | A/B dataset; metric and blinded review | G5 |
| EXP-054 | Camera portability across two pipelines | The same camera service/API supports two sensor/ISP backends. | AOS-CAM-060 | conformance report; backend diff | G9 |
| EXP-055 | Controlled proprietary camera module RFI | At least one vendor can contractually satisfy quality, update, deployment and replacement requirements. | AOS-CAM-070 | RFI responses; legal/technical scorecard | G9 |
| EXP-060 | Semantic journal privacy test | Secure fields and raw sensitive input never enter durable or synced history. | AOS-PROD-040 | taint test; storage inspection; sync inspection | G4/G8 |
| EXP-061 | Data-model consistency selection | Each data family has justified transaction/event/CRDT semantics and failure tests. | AOS-PROD-030 | model matrix; partition/conflict tests | G4 |
| EXP-062 | Full migration drill | Portable state restores and non-exportable state is transparently re-enrolled or reported. | AOS-PROD-060 | restore log; omission report; key inventory | G8 |
| EXP-070 | Entity-first usability benchmark | Target workflows improve or reveal measurable trade-offs against launcher/app baselines. | AOS-PROD-080 | task time; errors; comprehension; interviews | G4/G8 |
| EXP-071 | IntentBox interpretation safety | Users can detect/correct ambiguous intent before sensitive effects. | AOS-PROD-090 | study protocol; error/confirmation results | G8 |
| EXP-073 | Agent shadow-mode evaluation | Proposed actions achieve acceptable usefulness and false-positive rates without execution. | AOS-PROD-100 | evaluation set; precision/recall; user review | G8 |
| EXP-074 | Agent effect-containment test | Malicious/erroneous agent cannot exceed grants, budgets or confirmation policy. | AOS-SEC-070 | red-team report; receipts; denied attempts | G8 |
| EXP-080 | Manufacturing-interface architecture review | Board packages expose provisioning, test, calibration and identity operations without product-layer forks. | AOS-ODM-010 | interface review; mock factory flow | G9 |
| EXP-081 | Custom carrier-board feasibility | A module-based board can meet interface, power, camera, radio and manufacturing goals within NRE constraints. | AOS-ODM-030 | architecture; preliminary BOM; partner feedback | G10 |
| EXP-090 | Community hardware-kit pilot | External maintainers independently reproduce build, flash, test and recovery on a supported kit. | AOS-COMM-060 | onboarding logs; issue rate; maintainer sign-off | M10 |
| EXP-101 | Entity-first comparative usability study | Entity-first surfaces reduce navigation and context-switching cost for selected multi-service workflows. | AOS-PROD-120 | study protocol; recordings; completion time; error and trust scores | G5 |
| EXP-102 | Action-provider coverage benchmark | Typed provider actions cover at least the agreed P0 workflow catalog without screen scraping. | AOS-PROD-132 | catalog report; provider manifests; failure taxonomy | G5 |
| EXP-103 | Semantic journal privacy red-team | Structured journaling preserves recovery while secrets and excluded fields never enter portable history. | AOS-DATA-041 | red-team transcript; storage scan; policy traces | G5 |
| EXP-104 | Portable camera-service dual backend | One application surface operates unchanged against an open camera backend and a Pixel evidence adapter. | AOS-CAM-032 | API traces; image metadata; dependency scan | G4/G7 |
| EXP-105 | Documented ISP quality baseline | A documented ISP/tuning stack reaches measurable quality targets and exposes remaining computational-photography gap. | AOS-CAM-024 | lab scenes; RAWs; objective metrics; expert review | G4 |
| EXP-106 | ODM contract dry run | A vendor can answer the hardware/firmware/documentation matrix without changing portable service contracts. | AOS-ODM-012 | RFI response; gap map; contract redlines | G8 |
| EXP-107 | Clean-room protocol tabletop | Separated observation and implementation teams can produce an auditable interface specification without restricted code transfer. | AOS-LEGAL-024 | counsel-reviewed protocol; role log; artifact audit | G0/G7 |
| EXP-108 | Agent authority adversarial suite | Agents cannot exceed delegated rights, budgets, destinations, time windows, or confirmation requirements. | AOS-AGENT-035 | property tests; red-team traces; receipts | G5 |
| EXP-109 | Community evidence intake pilot | External contributors can submit reproducible hardware evidence that passes provenance and review checks. | AOS-COMM-021 | public template; two accepted submissions; review log | G4 |
| EXP-110 | Second-vendor board portability | A second SoC family boots and passes core service conformance without product-layer changes. | AOS-OPEN-050 | boot bundle; diff; conformance report | G4 |

<a id="operating-rule"></a>

## Operating Rule

Every material use must preserve the record ID and link the claim, experiment, task, or normative specification that depends on it. Generated Markdown is a reviewable view; the CSV is the canonical machine-readable register.

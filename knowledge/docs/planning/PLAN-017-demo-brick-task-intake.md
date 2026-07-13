---
id: "AOS-PLAN-017"
title: "Demo Brick Task Intake (AOS-DEMO family)"
status: "Task intake record"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Program Lead"
audience: "Engineering, program leadership"
summary: "Formal intake of the AOS-DEMO task family into the catalog: IDs, priorities, dependencies, and verification for the interim demo brick programme (HW-017/018/019, ARCH-021)."
---

# Demo Brick Task Intake (AOS-DEMO family)

> Intake means: a task exists only once it is in the catalog with an ID, owner, schedule, acceptance criteria, and verification. This record performs that intake for the demo-brick programme; owners and dates are assigned at the next planning pass.

## Intake List

| ID | Task | Priority | Depends on | Verification |
| --- | --- | --- | --- | --- |
| AOS-DEMO-000 | Apply Archived status to the AOS-P9 family; annotate portfolio docs per ADR-0007 | P1 | — | Register diff; doc annotations reviewed against ADR-0007 |
| AOS-DEMO-001 | Freeze V1 BOM (HW-018A): exact SKUs, two quotes per row, screenshots to evidence; place orders 1–5 | P1 | — | Frozen BOM committed; order confirmations archived |
| AOS-DEMO-002 | Bring up compute + display + touch + battery in printed enclosure, both units | P1 | 001 | Cold boot on battery; suspend/wake; documented recovery by a second person |
| AOS-DEMO-003 | Cellular data + SMS via native service; eSIM (eUICC + lpac) on two operators | P1 | 002 | Registration/data/SMS matrix; profile download/switch; crash/replug degradation |
| AOS-DEMO-004 | Best-effort voice via modem PCM into the audio graph; A/B EG25-G vs SIM7600 | P2 | 003 | Per-operator pass/fail with traces; typed unsupported states |
| AOS-DEMO-005 | Camera path C1: StarlightEye on CM5 gate, then native capture with versioned tuning assets | P1 | 002 | CM5 bring-up experiment; fixed-scene corpus vs bench oracle |
| AOS-DEMO-006 | Demo script, claim-limit card, field-recovery kit, travel dossier (LEGAL-012) | P2 | 002 | Dry-run by non-builder; fallback modes rehearsed |
| AOS-DEMO-007 | Power island bring-up: both island tracks (nRF5340, ESP32-C6), rail map per HW-019, watchdog/reset | P1 | 001 | Rail gating on seeded loads; wedged-island recovery; sequencing rule R6 enforced |
| AOS-DEMO-008 | Power track matrix evidence: measure S0–S4 × I0–I2 grid on P-A1/P-A2 (PPK2 + INA monitors); publish standby-days table | P1 | 007 | Measured grid per hardware revision; competitor comparison from measurements only |
| AOS-DEMO-009 | Camera path economics validation: quotes for C2 (NXP/VeriSilicon tuning access, mini-lab) and C3 (IDH engagement); update RES-011 | P2 | — | Two quotes per line; RES-011 classes replaced by figures |
| AOS-DEMO-010 | SurfaceVolume v1.5: flex electrode + trackpad controller through the printed cover | P2 | 002 | <5% false-positive in pocket/grip tests per HW-018 gate |
| AOS-DEMO-011 | Instant-mode vertical slice: cold boot to typewriter <3 s; ascent without reboot (ARCH-021) | P1 | 002, 007 | Measured boot budget; crash-injection leaves L2 alive |

## Bench Equipment Intake (small purchases, evidence-critical)

- Nordic PPK2 power profiler (~$100) — the S/I grid measurement tool.
- INA3221 monitor boards, USB-C PD tester/meter.
- Camera mini-lab starter: ColorChecker-class chart, stable light source, tripod/fixture (~$150–400) — serves C1 evidence now and C2 tuning later.

## Rules

Tasks inherit the boundary, downstream-trust, and evidence rules of the task catalog conventions; hardware-specific behavior terminates in board packages and service backends. Unknowns become claim/experiment records, not implicit promises.

## Related Documents

- [Interim demo device](../hardware/HW-017-interim-demo-device.md)
- [V1 configuration](../hardware/HW-018-demo-brick-v1-configuration.md)
- [Power architecture](../hardware/HW-019-power-architecture-standby.md)
- [Layered boot and instant modes](../architecture/ARCH-021-layered-boot-and-instant-modes.md)
- [ADR-0007](../decisions/ADR-0007-archive-pixel-9-route.md)

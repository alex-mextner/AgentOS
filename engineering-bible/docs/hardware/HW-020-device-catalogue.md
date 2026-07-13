---
id: "AOS-HW-020"
title: "Device Catalogue and Per-Target Matrix"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Hardware Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Per-target device catalogue: role, quality ceiling, documentation access, boot control, GPU, camera, modem, power, security, debug, firmware, legal route, cost, availability, replacement, and go/no-go for every candidate the programme tracks, aligned with ADR-0007 (Pixel 9 hardware archived, demo brick current) and the hardware portfolio."
---
# Device Catalogue and Per-Target Matrix

> One catalogue row per hardware target and camera sensor, scored on the same sixteen dimensions, so a reader can see at a glance what each candidate proves, what it costs, and whether it is go, hold, or archived under the current strategy.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Strategy Alignment](#strategy-alignment)
- [How to Read the Matrix](#how-to-read-the-matrix)
- [Matrix A — Role and Verdict](#matrix-a)
- [Matrix B — Openness and Control](#matrix-b)
- [Matrix C — Capabilities](#matrix-c)
- [Matrix D — Programme Economics](#matrix-d)
- [Per-Target Notes](#per-target-notes)
- [Machine-Readable Register](#machine-readable-register)
- [Images and Provenance](#images-and-provenance)
- [Portal Wiring](#portal-wiring)
- [Failure and Degradation](#failure-and-degradation)
- [Risks and Open Questions](#risks-and-open-questions)
- [Provenance and References](#provenance-and-references)
- [Related Documents](#related-documents)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Hardware Programme.

This document is the consolidated, per-target catalogue behind the hardware portfolio in [AOS-HW-001](AOS-HW-001.md#portfolio) and the open-hardware scoring in [AOS-HW-011](AOS-HW-011.md#candidates). It records, for every candidate device and every catalogued camera sensor, sixteen decision dimensions in one place: role, quality ceiling, documentation access, boot control, GPU, camera, modem, power, security, debug, firmware, legal route, cost, availability, replacement, and a go/no-go verdict.

Emulator targets (QEMU x86_64/AArch64) are tracked in [AOS-HW-001](AOS-HW-001.md#target-classes) and are excluded here; this catalogue covers physical hardware targets and camera sensors only.

It does not replace the per-target dossiers required at [track admission](AOS-HW-001.md#target-dossier); it is the index across them. Hard specifications (SoC, GPU, sensor geometry, price, availability) carry numbered citations in [Provenance and References](#provenance-and-references); every cell without a citation or marked `TBD/unverified` is an unconfirmed programme estimate, not a measured or vendor-stated fact. Prices are observations dated 2026-07 for planning only, never commitments; a target's own dossier and BOM-freeze task re-verify each line before purchase.

<a id="strategy-alignment"></a>

## Strategy Alignment

The catalogue reflects the current programme strategy, not a wish list:

1. **Pixel 9 is an archived hardware target.** [ADR-0007](../decisions/ADR-0007-archive-pixel-9-route.md#decision) moved the Pixel 9 native-feasibility route to Archived: no active engineering, budget, or schedule is attached to it. Pixel 9 remains available only as a read-only stock-quality oracle for camera, latency, and battery baselines, and its adapters stay quarantined per [ADR-0004](../decisions/AOS-ADR-0004.md#decision). Its go/no-go cell reads **Archived (oracle only)**, never "in progress".
2. **The demo brick and documented boards are the current path.** The carriable-device role is served by the interim demo brick ([AOS-HW-017](HW-017-interim-demo-device.md), [AOS-HW-018](HW-018-demo-brick-v1-configuration.md)) built on a documented compute core plus a custom carrier board, with documented SoC boards (i.MX 8M Plus, RK3588, Khadas VIM3 — VIM4 held) as the native bring-up targets. These carry the active verdicts.
3. **Camera quality is sourced from documented sensors, not a flagship blob stack.** The Sony IMX585 and IMX283 rows exist because the demo camera showcase and the documented-ISP native-port track need sensors whose geometry and register interface are published, unlike the Pixel 9 imaging pipeline.

The classes below map onto the portfolio [target classes](AOS-HW-001.md#target-classes): Emulator, Documented board, Performance board, Open phone, Quality phone, and Future contract device.

<a id="how-to-read-the-matrix"></a>

## How to Read the Matrix

The sixteen dimensions are split across four matrices sharing the same row order (one row per target). Read a target across all four to assemble its full record; the derived CSV in [`registers/devices.csv`](../../registers/devices.csv) carries all sixteen dimensions (plus identity columns) on a single line per target. Citations are per-cell, not per-row: the absence of a reference in a later matrix for a row that carried one earlier is intentional, not an omission.

Verdict vocabulary: **Go** (active track), **Hold** (catalogued, not yet admitted), **Spares-only** (frozen for spares because the unit is discontinued or irreplaceable), **Archived** (frozen by decision record), **Design option** (not a purchasable unit), **Component** (a sensor, not a bootable target).

<a id="matrix-a"></a>

## Matrix A — Role and Verdict

| Target | Portfolio class | Role | Quality ceiling | Go / No-go |
| --- | --- | --- | --- | --- |
| Pixel 9 [1][2] | Quality phone | Stock-quality oracle for camera/latency/battery baselines | Flagship (imaging, display, power, industrial design) | **Archived** — oracle only, per ADR-0007; no native work |
| Fairphone 6 (Gen. 6) [3][4] | Quality phone (semi-open) | Repairable semi-open quality and vendor-cooperation comparator | Upper-mid (Snapdragon 7s Gen 3, Sony LYT-700C 50 MP) | **Hold** — comparator; blob wall via Android BSP |
| PinePhone Pro [5][6] | Open phone | Phone-form-factor Linux laboratory (power, touch, sensors, isolated modem) | Low (RK3399S, 13 MP IMX258, weak power) | **Spares-only** — reported discontinued 2025; laboratory use |
| Khadas VIM3 [7][8] | Documented board | Documented A311D bring-up target with accessible boot/debug | Development-grade (Mali-G52 MP4, 5 TOPS NPU) | **Go** — documented native bring-up |
| Khadas VIM4 [9][10] | Documented / performance board | A311D2 bring-up with stronger GPU and HDMI-in | Development-grade (Mali-G52 MP8, 3.2 TOPS NPU) | **Hold** — behind VIM3; thinner mainline support |
| NXP i.MX 8M Plus [11][12] | Documented board | First documentation-first native target and camera-ISP track | Industrial (dual ISP, 2.3 TOPS NPU, GC7000UL) | **Go** — primary documented board / camera-ISP |
| Rockchip RK3588 (Radxa ROCK 5B) [13] | Performance board | Native graphics, media, multicore, high-bandwidth I/O scaling | High compute (8-core, Mali-G610, 6 TOPS, 8K) | **Go** — performance track |
| StarFive VisionFive 2 (JH7110) [14][15] | Documented board (RISC-V) | Second-ISA credibility target (RISC-V portability evidence) | Low-mid (SiFive U74 quad, IMG BXE-4-32) | **Hold** — ISA-portability spike, not on critical path |
| Custom carrier board (CM5-class) [16] | Future contract device | Design option: interim carrier for the demo brick, then custom PCB | Depends on chosen compute + sensors | **Design option** — see AOS-HW-018 |
| Sony IMX585 (sensor) [17][18] | Component | Demo showcase / documented-ISP low-light 4K sensor | 1/1.2" STARVIS 2, 8.29 MP, 2.9 µm | **Component** — camera-lab candidate |
| Sony IMX283 (sensor) [19][20] | Component | High-resolution documented 1" sensor for bench/showcase | Type 1 (1"), 20.3 MP, 2.4 µm | **Component** — camera-lab candidate |

<a id="matrix-b"></a>

## Matrix B — Openness and Control

| Target | Docs access | Boot control | Debug | Firmware |
| --- | --- | --- | --- | --- |
| Pixel 9 | Closed SoC/modem/ISP; no public TRM | Unlockable bootloader; closed boot ROM/AVB | ADB/fastboot; no public JTAG | Signed vendor blobs; not redistributable |
| Fairphone 6 | Partial (repair docs, Android BSP); no SoC TRM | Unlockable bootloader (OEM); no eFuse detail | ADB/fastboot; test points undocumented | Qualcomm blobs; limited redistribution |
| PinePhone Pro | Good (schematics, RK3399 TRM community-held) | Full — open U-Boot, SPI/eMMC/SD boot select | UART on headphone/pogo; test points published | Mostly open; RK blobs minimal |
| Khadas VIM3 | Good (Amlogic datasheet under terms; Khadas docs) | Full — documented boot modes, maskrom recovery | UART header, USB burning, published test points | U-Boot + Amlogic BL blobs; redistributable BSP |
| Khadas VIM4 | Partial (A311D2 doc thinner; Khadas docs) | Full — maskrom recovery, documented boot | UART header, USB burning | U-Boot + Amlogic blobs; BSP heavier |
| NXP i.MX 8M Plus | Excellent — public RM, datasheet, EVK design files | Full — documented boot fuses, serial download (UUU) | JTAG + UART on EVK; full test-point map | Redistributable NXP firmware; signed-boot documented |
| Rockchip RK3588 | Good (TRM available; Radxa open schematics) | Full — maskrom, SPI/eMMC/SD, documented | UART, maskrom over USB; open board files | U-Boot; RK DDR/BL blobs; ISP partly closed |
| StarFive VisionFive 2 | Good (JH7110 TRM public; open board files) | Full — open U-Boot/OpenSBI, documented flash | UART header; open bring-up | Open OpenSBI/U-Boot; IMG GPU blob |
| Custom carrier board | By design — we own schematics/BOM/DT | By design — chosen SoC's documented chain | By design — JTAG/UART broken out on carrier | Inherits chosen compute module's firmware |
| Sony IMX585 | Register interface via NDA/module vendors; flyer public | N/A (sensor) | N/A | Sensor register init tables (module BSP) |
| Sony IMX283 | Datasheet via distributors; module docs public | N/A (sensor) | N/A | Sensor register init tables (module BSP) |

<a id="matrix-c"></a>

## Matrix C — Capabilities

| Target | GPU | Camera | Modem | Power |
| --- | --- | --- | --- | --- |
| Pixel 9 [1][2] | Mali-G715 MC7 (~940 MHz) | 50 MP Samsung GNK (1/1.31") + 48 MP UW | Integrated Exynos 5G modem (closed) | Integrated PMIC + 4700 mAh; flagship suspend |
| Fairphone 6 [3][4] | Adreno (Snapdragon 7s Gen 3) | 50 MP Sony LYT-700C + 13 MP UW; 32 MP front | Snapdragon X-series 5G (integrated) | 4415 mAh, 30 W, removable battery |
| PinePhone Pro [5] | Mali-T860 MP4 | 13 MP Sony IMX258 rear; 8 MP OV8858 front | Quectel EG25-G, USB, galvanically isolated | Removable 3000 mAh; immature suspend |
| Khadas VIM3 [7][8] | Mali-G52 MP4 (~800 MHz) | Dual MIPI-CSI (external modules) | None onboard; M.2 LTE option | DC/USB-C; no battery subsystem |
| Khadas VIM4 [9][10] | Mali-G52 MP8 (~800 MHz) | MIPI-CSI + 4K HDMI-in | None onboard; M.2 option | DC/USB-C; no battery subsystem |
| NXP i.MX 8M Plus [11][12] | GC7000UL (OpenGL ES 3.1, Vulkan) | Dual ISP, two MIPI-CSI (up to 4K) | None onboard; external modem | PMIC per board; documented low-power modes |
| Rockchip RK3588 [13] | Mali-G610 MP4 | Multi-lane MIPI-CSI; strong ISP throughput | None onboard; M.2/USB modem | DC/USB-C PD; no battery subsystem |
| StarFive VisionFive 2 [14][15] | IMG BXE-4-32 MC1 (OpenCL 3.0, Vulkan 1.2) | 1× MIPI-CSI (basic) | None onboard; USB/M.2 modem | DC; no battery subsystem |
| Custom carrier board [16] | Inherits compute module (e.g. CM5 VideoCore VII) | 2× MIPI-CSI broken out (IMX585/IMX283/CM3) | M.2/mini-PCIe for Quectel/SIMCom + eUICC | Li-ion + BMS/UPS, USB-C PD (AOS-HW-019) |
| Sony IMX585 [17][18] | N/A | 1/1.2", 3840×2160, 8.29 MP, 2.9 µm, STARVIS 2, up to 90 fps | N/A | 3.3 V analog / 1.1 V digital / 1.8 V IF |
| Sony IMX283 [19][20] | N/A | Type 1 (1"), 5496×3672, 20.3 MP, 2.4 µm, up to 60 fps full | N/A | 2.9 V analog / 1.2 V digital / 1.8 V IF |

<a id="matrix-d"></a>

## Matrix D — Programme Economics

| Target | Security | Legal route | Cost (2026-07) | Availability | Replacement |
| --- | --- | --- | --- | --- | --- |
| Pixel 9 [1] | Titan M2 SE, Tensor security core, Trusty TEE (closed) | Retail purchase; no source/firmware rights; archived route | ~$799 [1] | In production, retail | Two units kept, one preserved stock |
| Fairphone 6 [3] | Qualcomm SecureBoot/QSEE (closed); no hardware kill switches | Retail; repair rights strong, silicon rights none | €599 / $899 [3][4] | In production; long support pledge | Modular OEM spares (strong) |
| PinePhone Pro [5][6] | No secure element; open, minimal secure boot | Community hardware; fully publishable | ~$399 (Explorer) [6] | Reported discontinued 2025 (TBD/unverified EOL source) | Spare mainboard held; scarce |
| Khadas VIM3 [7] | No mobile SE; standard ARM TrustZone | Retail; publishable; datasheet under terms | from ~$169 [7] | In production, retail | Second unit; readily re-orderable |
| Khadas VIM4 [9] | Standard TrustZone; thinner secure-boot docs | Retail; publishable | ~$200+ (class) [9][10] | In production, retail | Re-orderable |
| NXP i.MX 8M Plus [11] | HAB secure boot, CAAM crypto, documented | Industrial retail; full source/firmware rights | ~$400 EVK (TBD exact SKU) [11] | Production to ≥2036 (industrial) | SoM/board second sources (Variscite, Toradex) |
| Rockchip RK3588 (ROCK 5B) [13] | ARM TrustZone; RK secure boot (partial docs) | Retail; open board files; publishable | $79–$139 [13] | In production, wide retail | Multiple vendors (Radxa, others) |
| StarFive VisionFive 2 [14][15] | RISC-V PMP; secure element optional/absent | Retail; fully open; publishable | ~$46–$100 by RAM [15] | In production, retail | Re-orderable; Milk-V alt exists |
| Custom carrier board [16] | Inherits compute + external SE (e.g. PN7150/eUICC) | We own design; NRE + fab; contract path per AOS-HW-016 | Board NRE + BOM (AOS-HW-018A) | Build-to-order | We hold gerbers/BOM; refab at will |
| Sony IMX585 [17][18] | N/A (sensor) | Module purchase; NDA for full register set | Module ~$50–$150 (class, TBD) | Framos/e-con/module vendors, in production | Interchangeable module vendors |
| Sony IMX283 [19][20] | N/A (sensor) | Module purchase; datasheet via distributors | Module ~$60–$200 (class, TBD) | Framos/Kurokesu/module vendors, in production | Interchangeable module vendors |

<a id="per-target-notes"></a>

## Per-Target Notes

### Pixel 9 (archived hardware target)
Flagship quality ceiling — 50 MP Samsung GNK main sensor at 1/1.31", Mali-G715 MC7, Titan M2 secure element, integrated Exynos 5G modem [1][2]. Every high-value subsystem (ISP, modem, secure element) is closed with no redistributable firmware, which is precisely why [ADR-0007](../decisions/ADR-0007-archive-pixel-9-route.md#decision) archived the native route. Retained strictly as a stock oracle: measure the ceiling, never port. Adapters remain quarantined per [ADR-0004](../decisions/AOS-ADR-0004.md#decision). Portfolio annotation obligation flows from ADR-0007 [Consequences](../decisions/ADR-0007-archive-pixel-9-route.md#consequences-section).

### Fairphone 6 (semi-open comparator)
Snapdragon 7s Gen 3, 6.31" OLED 120 Hz, 50 MP Sony LYT-700C main + 13 MP ultrawide, 4415 mAh removable battery, 8 years of updates, €599 (US $899 via Murena) [3][4]. Best-in-class repairability and a plausible vendor-cooperation partner, but it still rides Android vendor blobs — the same wall as Pixel for low-level control. Value is as the repairable-quality comparator of [AOS-OPEN-095](AOS-HW-011.md#candidates), not a native target.

### PinePhone Pro (open phone laboratory)
RK3399S (2×A72 + 4×A53), 4 GB LPDDR4, 13 MP IMX258 rear, 8 MP OV8858 front, open U-Boot, published schematics, galvanically isolated Quectel EG25-G modem, removable battery [5]. Reported **discontinued in 2025** (exact EOL notice `TBD/unverified`; not stated on the cited spec page [5]), so it is a spares-only laboratory: excellent for phone-form-factor power/suspend/modem/audio evidence, useless as a camera or performance showcase, and it cannot sit on the critical path with one irreplaceable unit ([AOS-HW-001 minimum portfolio](AOS-HW-001.md#minimum-portfolio)).

### Khadas VIM3 (documented bring-up — Go)
Amlogic A311D (4×A73 @ 2.2 GHz + 2×A53), Mali-G52 MP4, 5 TOPS NPU, from ~$169, accessible maskrom recovery, UART header, USB burning, dual MIPI-CSI [7][8]. Aligns with [AOS-OPEN-093](AOS-HW-011.md#candidates). The documented boot flow and recoverability make it a clean early native target; matches the portal `#devices` "documented board" lane.

### Khadas VIM4 (held behind VIM3)
Amlogic A311D2 (4×A73 @ 2.2 GHz + 4×A53), Mali-G52 MP8 @ 800 MHz, 3.2 TOPS NPU, 4K HDMI-in, Wi-Fi 6 [9][10]. Stronger GPU than VIM3 but the A311D2 has thinner public documentation and mainline support; held as an upgrade path once VIM3 bring-up is proven.

### NXP i.MX 8M Plus (primary documented board — Go)
Quad Cortex-A53 up to 1.8 GHz + Cortex-M7, GC7000UL GPU (OpenGL ES 3.1, Vulkan, OpenCL 1.2), 2.3 TOPS NPU, **dual ISP with two MIPI-CSI inputs**, HAB secure boot, CAAM crypto, 14 nm, industrial production horizon [11][12]. The strongest documentation-and-rights story in the catalogue and the reason it is the first documentation-first native target ([AOS-OPEN-091](AOS-HW-011.md#candidates)) and the anchor of the documented-ISP camera track. EVK price is a class estimate (~$400), exact SKU `TBD/unverified`.

### Rockchip RK3588 / Radxa ROCK 5B (performance track — Go)
Octa-core (4×A76 + 4×A55), Mali-G610 MP4, 6 TOPS NPU, 8K encode/decode, up to 32 GB LPDDR4x/5, $79–$139 by RAM, open Radxa board files, maskrom recovery [13]. Serves [AOS-OPEN-092](AOS-HW-011.md#candidates): native graphics, media, and high-bandwidth I/O scaling. RK ISP and DDR/BL blobs are only partly documented — acceptable for performance evidence, tracked as a compromise for any portable claim.

### StarFive VisionFive 2 / JH7110 (RISC-V ISA spike)
Quad SiFive U74 @ 1.5 GHz, IMG BXE-4-32 MC1 (OpenCL 3.0, Vulkan 1.2), 2–8 GB LPDDR4, TSMC 28 nm, open OpenSBI/U-Boot, published TRM, ~$46–$100 [14][15]. Credible RISC-V candidate (Milk-V Mars/Jupiter are alternates on the same JH7110). Held as a second-ISA portability spike to prove the kernel is not silently AArch64-bound; not on the critical path. Camera and modem support are minimal — this row is a compute/ISA target, not an imaging one.

### Custom carrier board (design option)
Not a purchasable unit: the design option where the programme owns schematics, BOM, and device tree. The interim demo brick already uses a CM5-class compute module on a carrier that breaks out two MIPI-CSI lanes, an M.2/mini-PCIe modem slot with an internal eUICC, and a Li-ion/BMS power path ([AOS-HW-017](HW-017-interim-demo-device.md), [AOS-HW-018](HW-018-demo-brick-v1-configuration.md), [AOS-HW-018A BOM](HW-018A-demo-brick-bom.md), power in [AOS-HW-019](HW-019-power-architecture-standby.md)). It inherits its compute module's firmware and boot chain; the eventual custom PCB is the bridge toward the [future contract device](AOS-HW-016.md#contract) governed by [AOS-HW-016](AOS-HW-016.md). Compute-core selection (CM5 vs i.MX 8M Plus SoM) is recorded in [RES-011](../research/RES-011-interim-hardware-market-survey.md#recommended-configuration).

### Sony IMX585 (camera-lab component)
1/1.2" STARVIS 2 back-illuminated CMOS, 3840×2160 (8.29 MP effective), 2.9 µm pixels, up to 90 fps 10-bit / 60 fps 12-bit, triple 3.3 V/1.1 V/1.8 V supply, color (AAQJ1) and mono (AAMJ1) variants [17][18]. Low-light 4K showcase sensor whose geometry and register interface are documented through module vendors — the deliberate opposite of the Pixel imaging blob. Camera-lab candidate for the demo showcase and the documented-ISP native track (feeds the i.MX 8M Plus dual-ISP path).

### Sony IMX283 (camera-lab component)
Type 1 (1") CMOS, 5496×3672 (20.3 MP), 2.4 µm pixels, up to 60 fps full-res / 4K60 differential, 12-bit output, rolling shutter with global reset [19][20]. High-resolution bench/showcase sensor common in machine-vision modules (Framos, Kurokesu). Documented, interchangeable across module vendors; camera-lab candidate for high-resolution capture where the larger 1" area beats phone-class sensors.

<a id="machine-readable-register"></a>

## Machine-Readable Register

The derived register [`engineering-bible/registers/devices.csv`](../../registers/devices.csv) carries one row per target with all sixteen matrix columns plus the target name, portfolio class, and internal reference. It is a derived view of this document — this catalogue is the source of truth. Regenerate the CSV whenever a row here changes, consistent with the [registers README](../../registers/README.md).

<a id="images-and-provenance"></a>

## Images and Provenance

Device reference images are desirable for the catalogue and the portal but are intentionally left as placeholders in this revision; no binaries are committed here. When added, each image must be stored with a provenance record (source URL, licence/ownership, accessed date) under `engineering-bible/data/` or the portal asset path, mirroring the portal's existing "external reference images used for identification; names and images remain the property of their respective owners" disclaimer.

- Pixel 9 — placeholder (external reference image, provenance TBD)
- Fairphone 6 — placeholder
- PinePhone Pro — placeholder
- Khadas VIM3 / VIM4 — placeholder
- NXP i.MX 8M Plus EVK — placeholder
- Radxa ROCK 5B (RK3588) — placeholder
- StarFive VisionFive 2 — placeholder
- Custom carrier board — render/photo of demo brick carrier (own asset, produce under AOS-HW-018)
- Sony IMX585 / IMX283 modules — placeholder (module-vendor image, provenance TBD)

<a id="portal-wiring"></a>

## Portal Wiring

This document feeds the portal `#devices` section, whose card and decision-matrix data currently live **hardcoded** in `portal/devices.js` as the `DEVICE_TRACKS` array (not generated from this catalogue or the CSV). Wiring is required and is out of scope for this document (which creates only the doc and CSV):

- `portal/devices.js` `DEVICE_TRACKS` presently lists six entries (Pixel 9, PinePhone Pro, Khadas VIM3, Fairphone-class, QEMU AArch64, Contract-manufactured device) and does not yet reflect this catalogue's eleven rows, the archived Pixel 9 verdict, or the camera sensors.
- To wire: either generate `DEVICE_TRACKS` (and the decision-matrix rows) from `registers/devices.csv`, or manually reconcile the array with this catalogue — adding VIM4, i.MX 8M Plus, RK3588, the RISC-V board, the custom carrier, and the IMX585/IMX283 components, and marking Pixel 9 as archived (oracle only).
- The portal already renders an "external reference images" disclaimer; keep it, and back any new card images with the provenance rule above.

<a id="failure-and-degradation"></a>

## Failure and Degradation

Degradation must be explicit rather than accidental. A target whose documentation, recovery, firmware rights, or debug access proves worse than catalogued here is downgraded in its own dossier and this catalogue is corrected — the system must not silently treat a `TBD/unverified` cell as confirmed, nor promote an archived route to active without a new decision record. Any drift of Pixel artifacts back into active work without a reactivating decision is a containment failure escalated to the Architecture Council, per [ADR-0007](../decisions/ADR-0007-archive-pixel-9-route.md#failure-and-degradation).

<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Consumer SBCs and phones can be revised or discontinued silently; the PinePhone Pro discontinuation [5] is the worked example, and every single-unit target is barred from the critical path.
- Vendor-stated NPU TOPS, GPU clocks, and sensor frame rates are marketing-adjacent until measured on our own bench; treat Matrix C cells as candidates for [AOS-HW-010 scoring](AOS-HW-010.md#candidate-scorecard), not results.
- Camera-sensor register access (IMX585/IMX283) may require an NDA that limits publication; confirm redistribution rights before committing either to a portable claim, per [AOS-HW-016](AOS-HW-016.md#contract).
- Exact EVK/module prices marked `TBD/unverified` must be re-quoted (two sources per row) at each target's dossier or BOM-freeze step.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when legal rights, recovery, debug access, safety, or the required evidence path is unavailable.

<a id="provenance-and-references"></a>

## Provenance and References

External hard-spec sources, accessed 2026-07-13:

1. Google Pixel 9 Tech Specs — Google Store — https://store.google.com/product/pixel_9_specs
2. "Google Tensor G4 explained" (GPU, Titan M2, camera silicon) — Android Authority — https://www.androidauthority.com/google-tensor-g4-explained-everything-you-need-to-know-about-the-pixel-9-processor-3466184/
3. Fairphone 6 — full phone specifications — GSMArena — https://www.gsmarena.com/fairphone_6-13955.php
4. "Fairphone (Gen. 6) ... Snapdragon 7s Gen 3 SoC" — CNX Software — https://www.cnx-software.com/2025/06/26/fairphone-gen-6-sustainable-repairable-6-31-inch-android-15-smartphone-with-snapdragon-7s-gen-3-soc/
5. PinePhone Pro — Specifications — PINE64 — https://pine64.org/documentation/PinePhone_Pro/Further_information/Specifications/
6. "PinePhone Pro Explorer Edition launches for US$399 with the Rockchip RK3399S" — NotebookCheck — https://www.notebookcheck.net/PinePhone-Pro-Explorer-Edition-Linux-based-smartphone-launches-for-US-399-with-the-Rockchip-RK3399S.592584.0.html
7. VIM3 product page (A311D, Mali-G52 MP4, 5 TOPS, price) — Khadas — https://www.khadas.com/product-page/vim3
8. "Khadas VIM3 SBC Launched with Amlogic A311D Processor, 5 TOPS NPU" — CNX Software — https://www.cnx-software.com/2019/06/25/khadas-vim3-amlogic-a311d-sbc/
9. VIM4 product page (A311D2, Mali-G52 MP8, HDMI-in) — Khadas — https://www.khadas.com/vim4
10. "Khadas VIM4 Amlogic A311D2 SBC gets 3.2 TOPS NPU" — CNX Software — https://www.cnx-software.com/2023/06/02/khadas-vim4-amlogic-a311d2-sbc-gets-3-2-tops-npu/
11. i.MX 8M Plus product page (Cortex-A53/M7, GC7000UL, 2.3 TOPS, dual ISP) — NXP — https://www.nxp.com/products/i.MX8MPLUS
12. "NXP i.MX 8M Plus Processor Targets AI Applications with a 2.3 TOPS NPU" — CNX Software — https://www.cnx-software.com/2020/01/07/nxp-i-mx-8m-plus-processor-ai-applications-2-3-tops-npu/
13. Radxa ROCK 5B (RK3588, Mali-G610, 6 TOPS, price) — Radxa — https://radxa.com/products/rock5/5b/
14. "StarFive Announced JH7110 SoC and VisionFive 2 SBC" (U74 quad, BXE-4-32) — RISC-V International — https://riscv.org/blog/starfive-announced-2-high-performance-risc-v-products-jh7110-soc-and-visionfive-2-sbc-starfive/
15. "StarFive VisionFive 2 quad-core RISC-V SBC launched for $46 and up" — CNX Software — https://www.cnx-software.com/2022/08/23/starfive-visionfive-2-quad-core-risc-v-sbc-linux/
16. Interim Hardware Market Survey and Demo BOM (CM5 compute core, carrier pattern) — internal AOS-RES-011 — ../research/RES-011-interim-hardware-market-survey.md
17. IMX585-AAQJ1 flyer (Type 1/1.2, 3840×2160, STARVIS 2) — Sony Semiconductor Solutions — https://www.sony-semicon.com/files/62/flyer_security/IMX585-AAQJ1_Flyer.pdf
18. Sony STARVIS 2 IMX585 — 8.29 MP RGB CMOS (2.9 µm, up to 90 fps) — FRAMOS — https://framos.com/products/sensors/area-sensors/sony-starvis-2-imx585aaqj1-c-25437/
19. Sony IMX283CQJ-C — 1" CMOS image sensor (5496×3672, 2.4 µm) — FRAMOS — https://framos.com/products/sensors/area-sensors/imx283cqj-c-21902/
20. "20M IMX283 1″ CSI-2 Camera Module" (20.3 MP, 60 fps full, 4K60) — Kurokesu — https://www.kurokesu.com/blog/20m-imx283-1-csi-2-camera-module

<a id="related-documents"></a>

## Related Documents

- [Hardware target portfolio](AOS-HW-001.md#portfolio)
- [Open, documented, and reversible hardware catalog](AOS-HW-011.md#candidates)
- [Camera architecture](AOS-HW-006.md)
- [Hardware scorecard and scoring method](AOS-HW-010.md#candidate-scorecard)
- [Vendor documentation and support acquisition](AOS-HW-016.md#contract)
- [Interim demo device](HW-017-interim-demo-device.md)
- [Demo brick V1 configuration baseline](HW-018-demo-brick-v1-configuration.md)
- [Demo brick bill of materials](HW-018A-demo-brick-bom.md)
- [Power architecture and standby](HW-019-power-architecture-standby.md)
- [ADR-0007: Archive the Pixel 9 native route](../decisions/ADR-0007-archive-pixel-9-route.md#decision)
- [ADR-0004: Minimal Android/Linux use on Pixel 9](../decisions/AOS-ADR-0004.md#decision)
- [Interim hardware market survey and demo BOM](../research/RES-011-interim-hardware-market-survey.md#recommended-configuration)
</content>
</invoke>

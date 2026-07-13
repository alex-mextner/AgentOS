---
id: "AOS-RES-011"
title: "Interim Hardware Market Survey and Demo BOM Sourcing"
status: "Research-backed evidence map"
version: "1.3.0"
baseline_date: "2026-07-13"
owners: "Research Lead / Hardware Programme"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Survey of DIY/open phone prior art (ZeroPhone, WiPhone, CM4/CM5 handhelds, OnePlus donors, postmarketOS, FLX1), the recommended demo-brick configuration, and a sourced bill of materials with Moscow and Serbia/EU purchase channels and observed prices."
---

# Interim Hardware Market Survey and Demo BOM Sourcing

> What the DIY and open-phone market teaches the demo-brick programme, which configuration to build first, and where to buy every part in Moscow and in Serbia/EU, with observed July 2026 prices.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Terminology: CM4 and CM5](#terminology-cm)
- [Prior-Art Survey](#prior-art-survey)
- [Recommended Demo Configuration](#recommended-configuration)
- [Sourced Bill of Materials](#sourced-bom)
- [Moscow Purchase Channels](#moscow-channels)
- [Serbia and EU Purchase Channels](#serbia-channels)
- [Budget Summary](#budget-summary)
- [Price Volatility and Verification Rules](#verification-rules)
- [Risks and Open Questions](#risks-and-open-questions)
- [Related Documents](#related-documents)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Research and Evidence / Hardware Programme.

This note supports [AOS-HW-017](../hardware/HW-017-interim-demo-device.md) with market evidence: lessons from comparable projects, a concrete recommended configuration for the first demo brick, and verified purchase channels with observed prices in two operating locations (Moscow, Russia and Belgrade, Serbia). Prices are observations dated 2026-07, not commitments; the BOM-freeze task (AOS-DEMO-001) re-verifies every line before purchase.

<a id="terminology-cm"></a>

## Terminology: CM4 and CM5

**CM4 = Raspberry Pi Compute Module 4; CM5 = Raspberry Pi Compute Module 5.** A Compute Module is the "computer core" of a Raspberry Pi — SoC, RAM, eMMC storage, and optional Wi-Fi/Bluetooth — on a small connector-less board that plugs into a separate carrier board via two 100-pin high-density connectors. The carrier board supplies whatever ports and peripherals the product needs, which is exactly the demo-brick pattern: buy the certified compute core, design only the simple interconnect. CM5 carries the Raspberry Pi 5 silicon (quad Cortex-A76 @ 2.4 GHz, BCM2712), exposes two MIPI DSI/CSI-2 interfaces and PCIe, and is guaranteed in production until at least January 2036. There is no "CM6" as of this baseline.

<a id="prior-art-survey"></a>

## Prior-Art Survey

| Project | What it is | Cost/effort | Lesson for Agent OS | Usable as a base? |
| --- | --- | --- | --- | --- |
| ZeroPhone (~2017–2019) | DIY handset: Raspberry Pi Zero + 2G SIM800 modem + small screen; ~$50 BOM; fully open build logs | Effectively free to study; project inactive | One person can assemble a phone from modules, but a cheap 2G modem is a dead end (networks retired) and a single-maintainer project dies with its maintainer | No — historical reference only |
| WiPhone (2019–present) | ESP32 VoIP handset, ~$89 at launch, still sold; Wi-Fi/SIP calls and SMS, deliberately no cellular radio; open Arduino/MicroPython firmware; swappable back panel as daughterboard bus | Low; hardware and firmware fully open | Their stated reason for omitting cellular — basebands are inaccessible at low volume — is the argument for pre-certified Quectel/SIMCom modules; the pogo-pin back-panel expansion pattern is worth copying | No as compute; yes as form-factor and expansion-bus prior art |
| CM4/CM5 handhelds (uConsole, Hackaday builds) | ClockworkPi uConsole (~$140–250): CM4-based handheld with enclosure, display, battery, and an optional 4G LTE extension module; plus many one-off CM4 smartphone builds (~$200–300 in parts) | Purchasable or replicable in weeks | The Raspberry Pi ecosystem supplies the only open *and production-tuned* camera stack (libcamera + tuning files) plus off-the-shelf power/display boards — months of savings | Yes — CM5 is the recommended demo compute core |
| OnePlus 6/6T donors | SDM845 phones with freely unlockable bootloaders; best mainline-kernel support among Android donors; community-tier in postmarketOS; used units ~$50–100 | Very cheap; porting effort significant but well-documented | Ideal expendable targets for a future native port to a real phone SoC (display/touch/power/modem); mainline camera support is weak, so not the camera showcase | Partially — native-port research target, not the demo camera vehicle |
| postmarketOS | Alpine-based mobile Linux; ~723 supported device models (Feb 2026); moving to a single generic mainline kernel with device-tree overlays; ~40 community-tier devices | Free; knowledge base | Adopt its methodology: device tiers (mirrors AOS-HW-001 admission/retirement), pmbootstrap-style reproducible ports, hardware CI; consult its modem/device wikis as prior art | No as OS (Linux distribution vs. native microkernel); yes as methodology and data |
| FLX1s (Furi Labs) | $550 ($499 in bundle) Linux phone: Dimensity 900, 8/128 GB, dual-SIM 5G, three hardware kill switches, Debian-based FuriOS (oFono2MM + GNOME Calls) | One unit purchase; shipping from Hong Kong | Caveat: uses Halium/libhybris — Linux over Android vendor drivers, i.e. the same blob wall as Pixel with weaker hardware; valuable as a study of how a small company packaged and sold a Linux phone | No as a native base; yes as a $550 competitive-reference unit |

<a id="recommended-configuration"></a>

## Recommended Demo Configuration

**Decision (proposed): build the first demo brick on Raspberry Pi CM5, not i.MX 8M Plus.**

Rationale against the alternatives for *this* device (the native-port camera target of AOS-OPEN-091 is unchanged):

1. **Camera quality now.** The user-facing requirement is an *excellent* camera in the demo. Camera Module 3 (Sony IMX708, 12 MP, phase-detect autofocus, HDR) plus the HQ Camera (Sony IMX477, 12.3 MP, interchangeable C/CS lenses) run on the only open, documented, production-tuned pipeline available (libcamera with Raspberry Pi tuning files). No other purchasable platform delivers comparable out-of-the-box image quality without vendor blobs.
2. **Cellular with voice hardware included.** The Waveshare SIM7600G-H 4G HAT explicitly supports dial-up data, telephone calls, SMS, and carries an onboard audio jack and audio decoder for calls — the entire demo cellular stack (data + SMS first-class, voice best-effort per AOS-HW-017 claim limits) on one $58 board.
3. **Buyable in both operating cities.** Every component is in stock in Moscow retail and in Serbian/EU retail (tables below). The i.MX 8M Plus SoM path requires industrial distributors and is slower and costlier in both locations.
4. **Longevity.** CM5 production is guaranteed until at least January 2036.

Recorded compromise (goes to the AOS-HW-013 ledger): the Raspberry Pi ISP (PiSP) is only partially documented at register level and the boot ROM is closed; acceptable for the demo vehicle, unacceptable as the final native-port claim, which remains with the documented-ISP track.

**Configuration v1 (superseded in detail by [AOS-HW-018](../hardware/HW-018-demo-brick-v1-configuration.md#v1-configuration), which records the founder-decided baseline: portless exterior, internal eUICC, SurfaceVolume gestures, agent-grade audio):**

- Compute: CM5, 16 GB RAM / 64 GB eMMC / Wi-Fi variant (founder decision 2026-07-13)
- Carrier: Waveshare CM5-NANO-A (or equivalent compact CM5 base board) as the interim carrier
- Camera (daily): Raspberry Pi Camera Module 3 (IMX708, autofocus, HDR)
- Camera (showcase, optional): Raspberry Pi HQ Camera (IMX477) + 6 mm CS lens — bench/calibration use; Arducam 64 MP (OV64B) is the in-enclosure showcase option
- Cellular: A/B choice resolved at AOS-DEMO-003/004 — Quectel EG25-G on M.2 (richer community voice/ALSA prior art) vs Waveshare SIM7600G-H 4G HAT (calls/SMS/data plus onboard audio codec on one $58 board)
- Display: Waveshare 6.25" MIPI-DSI, 720×1560, capacitive multitouch (phone aspect); 5"–5.5" DSI panels as fallback class
- Audio: 4-mic MEMS array on XMOS XVF3800 + 2× TAS2563 smart amplifiers with printed acoustic chambers, per [AOS-HW-018#audio-subsystem](../hardware/HW-018-demo-brick-v1-configuration.md#audio-subsystem)
- Power: Li-ion pack + UPS/BMS HAT with USB-C charging (PiSugar 3 Plus class or Waveshare UPS HAT)
- Enclosure: 3D-printed PETG/ABS/PC (PLA prohibited), per AOS-HW-017 antenna keep-out rules
- Two identical units plus one spare modem and one spare camera

<a id="sourced-bom"></a>

## Sourced Bill of Materials (Full V1)

Observed prices, 2026-07, per single unit. RUB prices include Russian retail markup (no official Raspberry Pi channel in Russia); EUR/USD/GBP prices are Western retail excl. shipping. Indicative FX assumption for planning only: 1 USD ≈ 90–100 RUB. Rows marked *(class)* are indicative category prices pending exact SKU selection at BOM freeze; all other rows are observed listings.

**Core compute, display, camera, cellular**

| # | Item | Moscow (observed) | Serbia/EU/global (observed) | Reference |
| --- | --- | --- | --- | --- |
| 1 | Raspberry Pi CM5, 16 GB/64 GB/Wi-Fi | [22 990 ₽ — onpad.ru](https://onpad.ru/catalog/cubie/raspberrypi/raspberrypimodule/3881.html) | [CM5 range from €73.90 — welectron.com](https://www.welectron.com/Raspberry-Pi-CM5-Compute-Module_1); [Botland CM5 range](https://botland.store/1716-raspberry-pi-cm5) | ~$95–105 list class |
| 2 | CM5 carrier: bench mule — [Waveshare CM5-ETH-RS485-4G-BASE, $55.99](https://www.waveshare.com/product/raspberry-pi/boards-kits/cm5.htm) ([$59.39 AliExpress](https://www.cnx-software.com/2026/04/10/raspberry-pi-cm5-carrier-board-dual-ethernet-quad-rs485-4g-lte-5g/)): M.2 B-Key modem + nano-SIM, M.2 M-Key NVMe, 2× MIPI DSI/CSI; pocket build — [CM5-PoE-BASE-A from $15.99](https://www.waveshare.com/cm5-poe-base-a.htm): M.2 M-Key + dual MIPI | [CM5-NANO-A 1 990 ₽ — onpad.ru](https://onpad.ru/catalog/cubie/raspberrypi/raspberrypimodule/3906.html) (no M.2 — pocket alt only) | Waveshare direct/AliExpress ship to both cities | $16–60 |
| 2a | Modem in M.2 format: SIM7600G-H-M2 (drops into the B-Key slot of row 2) | AliExpress *(class)* | Waveshare/AliExpress | $55–70 |
| 3 | NVMe SSD M.2 2230, 256 GB–1 TB | ≈2 500–8 000 ₽ (Ozon/DNS) *(class)* | ≈€25–90 *(class)* | $25–90 |
| 4 | Camera Module 3 (Sony IMX708, AF, HDR) | [6 190 ₽ — onpad.ru](https://onpad.ru/catalog/cubie/raspberrypi/cameras/3456.html); [amperka.ru](https://amperka.ru/product/raspberry-pi-camera-module-3) | ~€30–40 EU retail | $25 list |
| 5 | HQ Camera IMX477 + CS lens (bench only) | [amperka.ru](https://amperka.ru/product/raspberry-pi-high-quality-camera) | ~€55–80 with lens | $50 + lens |
| 6 | Cellular A/B: Waveshare SIM7600G-H 4G HAT (calls/SMS/data + audio codec) | [$57.99 — AliExpress](https://www.aliexpress.com/item/1005003033234299.html) | [€76.90–79.90 — welectron.com](https://www.welectron.com/Waveshare-17372-SIM7600G-H-4G-HAT_1) | $58 |
| 7 | Cellular A/B alt: Quectel EG25-G mPCIe/M.2 + USB adapter + 2× LTE and 1× GNSS antenna | ≈3 000–5 500 ₽ AliExpress *(class)* | ≈€35–60 *(class)* | $25–45 module |
| 8 | Display: Waveshare 6.25" DSI 720×1560 capacitive touch | ≈5 000–7 500 ₽ Ozon/AliExpress *(class)* | ≈€50–70 Waveshare EU *(class)* | $55–65 |

**Cellular identity (true eSIM, no tray)**

| # | Item | Source | Price |
| --- | --- | --- | --- |
| 9 | sysmoEUICC1-C2G — consumer SGP.22 eUICC, GSMA certs, triple-cut card (V1: seated in the modem's internal socket) | [shop.sysmocom.de](https://shop.sysmocom.de/SIM/Cards/) | €35.70 class |
| 10 | sysmoEUICC1-CMG — same eUICC, solder MFF2, 10-pack (V2 custom carrier) | [shop.sysmocom.de](https://shop.sysmocom.de/sysmoEUICC1-eUICC-for-consumer-eSIM-RSP-in-MFF2-10-pack/sysmoEUICC1-CMG-10p) | sample-qty pack; per-chip tens of € |
| 11 | LPA software: lpac (open source) | github.com/estkme-group/lpac | $0 |

sysmocom ships from Germany: straightforward to Serbia, likely via forwarder to Russia.

**Audio and haptics**

| # | Item | Source | Price |
| --- | --- | --- | --- |
| 12 | ReSpeaker XMOS XVF3800 4-mic array (AEC, beamforming, DoA; USB/I2S) | [$49.99 — Seeed](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html); [£48 — The Pi Hut](https://thepihut.com/products/respeaker-xmos-xvf3800-ai-powered-4-mic-array-for-clear-voice-even-in-noise); ~$56 AliExpress | $50 |
| 13 | 2× I2S class-D amp: MAX98357A breakouts (V1) → TAS2563 on custom PCB (V2) | Adafruit #3006 / AliExpress clones | $4–6 each |
| 14 | 2× micro-speakers (phone/tablet spare-part drivers) + printed acoustic chambers | AliExpress *(class)* | $3–8 each |
| 15 | Haptic actuator: genuine iPhone Taptic Engine spare part (wideband voice-coil) | AliExpress spare-parts sellers *(class)* | $5–20 |
| 16 | Haptic drive: dedicated class-D channel (same MAX98357A class); alt: DRV2624-class closed-loop driver (DRV2605L breakout, Adafruit #2305, for bring-up) | Adafruit/AliExpress | $4–8 |

**Sensors, input, power, enclosure**

| # | Item | Source | Price |
| --- | --- | --- | --- |
| 17 | IMU LSM6DSV16X (or LSM6DSOX breakout for bring-up) | Adafruit/Mouser/AliExpress *(class)* | $8–15 |
| 18 | ALS+proximity VCNL4040 breakout | Adafruit #4161 class | $5–7 |
| 19 | Barometer BMP390 breakout | Adafruit #4816 class | $10–12 |
| 20 | NFC PN7150 breakout/module | Mouser/AliExpress *(class)* | $10–20 |
| 21 | SurfaceVolume v1.5: capacitive trackpad controller (Azoteq IQS550/IQS7211 eval or module) + custom flex electrode sheet | Azoteq distributors; flex PCB service *(class)* | $15–40 + flex NRE |
| 22 | Battery 1S Li-Po ≈5000 mAh + protected BMS + USB-C PD charger (BQ25792-class board or UPS HAT) + MAX17048 fuel gauge | Ozon/AliExpress / EU retail *(class)* | $30–50 total |
| 23 | Buttons (lock, hardware mute with mic-power cut), wiring, FPC cables, fasteners, coin cell (RTC) | local/AliExpress *(class)* | $15–30 |
| 24 | Enclosure prints (PETG/ABS/PC, several iterations) + aluminum midframe plate | local print services *(class)* | $25–50 |

<a id="bom-note-linux-free"></a>

All software line items (native OS, lpac, waveform assets) are $0 in BOM terms; Linux/libcamera appear only as a free bench oracle per [AOS-HW-018#os-independence](../hardware/HW-018-demo-brick-v1-configuration.md#os-independence).

<a id="moscow-channels"></a>

## Moscow Purchase Channels

No official Raspberry Pi distributor operates in Russia; retail relies on parallel import with roughly 30–50 % markup over EU list.

- **onpad.ru** — CM5 in stock across RAM/eMMC variants (e.g. [CM5 4 GB/32 GB Wi-Fi, 17 990 ₽](https://onpad.ru/catalog/cubie/raspberrypi/raspberrypimodule/3854.html); [CM5 16 GB/64 GB, 22 990 ₽](https://onpad.ru/catalog/cubie/raspberrypi/raspberrypimodule/3881.html)); [CM5-NANO-A carrier, 1 990 ₽](https://onpad.ru/catalog/cubie/raspberrypi/raspberrypimodule/3906.html); [Camera Module 3, 6 190 ₽](https://onpad.ru/catalog/cubie/raspberrypi/cameras/3456.html); full [camera catalog including HQ/IMX477 and IMX500](https://onpad.ru/shop/cubie/raspberrypi/cameras/).
- **amperka.ru** — official-style catalog with CDEK delivery: [Camera Module 3](https://amperka.ru/product/raspberry-pi-camera-module-3), [HQ Camera IMX477](https://amperka.ru/product/raspberry-pi-high-quality-camera), FPC cables for CM5/Pi 5 22-pin CSI.
- **AliExpress (works in RU)** — [Waveshare SIM7600G-H 4G HAT, $57.99 listing](https://www.aliexpress.com/item/1005003033234299.html); also DSI displays, UPS HATs, Quectel EG25-G modules ($25–45 class).
- **Ozon / Yandex Market** — reseller stock for Waveshare HATs, displays, batteries; useful for next-day availability, verify seller reputation.
- **Avito** — used OnePlus 6/6T donor phones (globally ~$50–100 class) and second-hand Raspberry Pi hardware.

<a id="serbia-channels"></a>

## Serbia and EU Purchase Channels

Serbia has an official import channel and full EU retail reach; overall the cheaper and simpler purchasing base of the two cities.

- **MikroPrinc (Belgrade)** — self-described leading Raspberry Pi importer in Serbia; [Raspberry Pi category](https://www.mikroprinc.com/sr/proizvodi/raspberrypi) covers boards and components; cash-on-delivery logistics nationwide.
- **Elektroleum (Belgrade)** — [Raspberry Pi 5 category](https://elektroleum.rs/product-category/elektronske-komponente-moduli-i-ucila/raspberry-pi-mini-pc-racunar/raspberry-pi5/) and [camera modules](https://elektroleum.rs/product/raspberry-pi-kamera-pribor-delovi-programiranje-beograd-srbija/).
- **Electronic Center** — [Raspberry Pi 5/4/Pico, cases, UPS modules, touchscreens](https://www.electronic-center.rs/catalog/raspberry-pi-488).
- **RS Components (rsdelivers, RS/HR portal serving Serbia)** — [official Raspberry Pi catalog priced in RSD](https://hr.rsdelivers.com/rs/productlist/search?query=raspberry+pi) (e.g. Pi 5 PSU 3 223 RSD excl. VAT), incl. Debug Probe and accessories.
- **EU mail-order into Serbia** — [welectron.com: CM5 from €73.90](https://www.welectron.com/Raspberry-Pi-CM5-Compute-Module_1), [SIM7600G-H 4G HAT €76.90–79.90](https://www.welectron.com/Waveshare-17372-SIM7600G-H-4G-HAT_1); [Botland: full CM5 range 2–16 GB with eMMC variants](https://botland.store/1716-raspberry-pi-cm5).
- **sysmocom (Germany)** — the consumer SGP.22 eUICC source ([webshop](https://shop.sysmocom.de/)); ships to Serbia directly, to Russia likely via forwarder.
- **Seeed Studio / The Pi Hut** — [ReSpeaker XVF3800 $49.99](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html) / [£48 UK stock](https://thepihut.com/products/respeaker-xmos-xvf3800-ai-powered-4-mic-array-for-clear-voice-even-in-noise); AliExpress carries the board (~$56) for the Moscow route.
- **KupujemProdajem** — [used Raspberry Pi hardware](https://www.kupujemprodajem.com/pretraga?keywords=raspberry+pi&so=1) and used OnePlus donor phones.
- **furilabs.com** — [FLX1s reference unit, $550 / $499 bundle, ships from Hong Kong](https://furilabs.com/shop/flx1s-bundle/); delivery to Serbia expected straightforward, delivery to Russia likely via freight forwarder.

<a id="budget-summary"></a>

## Budget Summary

| Scope | Moscow estimate | Serbia/EU estimate |
| --- | --- | --- |
| One full V1 unit (rows 1–4, 6 or 7, 8–9, 12–24) | ≈ 55 000–75 000 ₽ (≈ $580–780) | ≈ €430–580 |
| Optional HQ camera + lens (bench) | + ≈ 7 000–10 000 ₽ | + ≈ €55–80 |
| Programme (2 units + spare modem/camera/actuator + MFF2 eUICC pack + SIM/eSIM profiles on 2 operators) | ≈ 130 000–170 000 ₽ (≈ $1 400–1 800) | ≈ €950–1 300 |
| Optional FLX1s reference unit | +$550 + forwarding | +$499–550 + shipping |
| Optional 2–3 used OnePlus 6/6T donors | ≈ 15 000–30 000 ₽ (Avito) | ≈ €120–250 (KupujemProdajem/eBay) |

Belgrade is the recommended purchasing base: official import channels, EU retail reach, lower markup, and unproblematic international shipping (including FLX1s from Hong Kong).

<a id="verification-rules"></a>

## Price Volatility and Verification Rules

- Every price above is an observation dated 2026-07 from the linked listing; listings and FX move. AOS-DEMO-001 re-quotes every row (two sources per row where possible) before purchase and records screenshots/quotes in the evidence repository.
- Moscow rows depend on parallel-import stock that can vanish or reprice without notice; keep an AliExpress fallback for every row.
- Serbian local shops must be verified for exact CM5/Camera-3 SKUs and stock before relying on them; the EU mail-order rows are the guaranteed fallback.

<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- SIM7600G-H voice quality and operator compatibility (RU and RS operators) are unmeasured until AOS-DEMO-004; the Quectel EG25-G remains the fallback voice module.
- The PiSP/closed-boot-ROM compromise must not leak into portable claims; it is a demo-vehicle compromise only.
- Sanctions-related logistics for Moscow purchases can change abruptly; the Belgrade channel is the resilience plan.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when legal rights, recovery, debug access, safety, or the required evidence path is unavailable.

<a id="related-documents"></a>

## Related Documents

- [Interim demo device](../hardware/HW-017-interim-demo-device.md)
- [Demo brick V1 configuration baseline](../hardware/HW-018-demo-brick-v1-configuration.md)
- [ADR-0007: Archive the Pixel 9 native route](../decisions/ADR-0007-archive-pixel-9-route.md)
- [Hardware portfolio](../hardware/HW-001-target-portfolio.md#portfolio)
- [Open, documented, and reversible hardware catalog](AOS-HW-011.md#candidates)
- [Camera architecture](AOS-HW-006.md)
- [Native cellular stack](AOS-HW-007.md)
- [Source register](AOS-RES-002.md#source-register)

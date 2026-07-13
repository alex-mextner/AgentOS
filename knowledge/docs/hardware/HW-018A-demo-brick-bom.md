---
id: "AOS-HW-018-BOM"
title: "Demo Brick V1 — Bill of Materials (Appendix A to AOS-HW-018)"
status: "Working purchase list (pre-freeze)"
version: "1.3.0"
baseline_date: "2026-07-13"
owners: "Hardware Programme"
audience: "Purchasing, engineering"
summary: "Store-grouped shopping list for one Demo Brick V1 unit: five stores cover everything. Observed prices and direct links (2026-07); frozen SKUs recorded by AOS-DEMO-001."
---

# Demo Brick V1 — Bill of Materials (by store)

Grouped to minimize the number of shops: **five orders cover the whole build** (RPi distributor, Waveshare, Seeed, AliExpress, sysmocom). *(class)* = category price, exact SKU at BOM freeze. One unit unless noted.

## Order 1 — Raspberry Pi distributor
Moscow: **onpad.ru / amperka.ru** · Serbia/EU: **welectron.com / botland.store**

1. CM5, 16 GB/64 GB/Wi-Fi — 22 990 ₽ https://onpad.ru/catalog/cubie/raspberrypi/raspberrypimodule/3881.html · EU from €73.90 https://www.welectron.com/Raspberry-Pi-CM5-Compute-Module_1 · https://botland.store/1716-raspberry-pi-cm5 — ~$95–105 list
2. Camera, second (front/wide, AF): Camera Module 3 (Sony IMX708) — 6 190 ₽ https://onpad.ru/catalog/cubie/raspberrypi/cameras/3456.html · https://amperka.ru/product/raspberry-pi-camera-module-3 — $25 list
3. HQ Camera IMX477 + CS lens (bench/calibration only) — https://amperka.ru/product/raspberry-pi-high-quality-camera — ~$50 + lens
4. Official CM5 cooler/heatsink (bench) — $5–10 *(class)*

## Order 1a — Tindie: Will Whang's Electronics (main camera, unique source)
Founder decision: computational-photography-first, camera budget ≤$300.

4a. **MAIN CAMERA: StarlightEye — Sony IMX585 (Starvis 2, 1/1.2", 4K, switchable IR filter)** — https://www.tindie.com/products/will123321/starlighteye/ — price on listing, ~$130–180 class *(verify at freeze; stock fluctuates — sign up for restock notice)*. Open hardware (KiCad) + open driver + tuning — https://github.com/will127534/StarlightEye . 4-lane MIPI, specified for Pi 5 / CM4 pinout; CM5 bring-up is experiment-gated. Manual M12/CS focus — no AF (recorded trade-off; AF lives on Camera Module 3)
4b. Quality M12 lens for IMX585 (low-distortion, F1.6–2.0 class) — $25–60 *(class)*, same order or AliExpress
4c. Big-sensor alternate: **OneInchEye — Sony IMX283 (1", 20 MP)** — same Tindie store — ~$150–200 class *(only if resolution becomes the binding constraint)*

Camera budget check: IMX585 (~$160) + M12 lens (~$40) + CM3 (~$25–35) ≈ **$225–235 ≤ $300** ✔

## Order 2 — Waveshare (store or official AliExpress shop)
Catalog: https://www.waveshare.com/product/raspberry-pi/boards-kits/cm5.htm

5. **Carrier, bench mule: CM5-ETH-RS485-4G-BASE** — $55.99 (M.2 B-Key modem + nano-SIM, M.2 M-Key NVMe, 2× MIPI DSI/CSI)
6. **Carrier, pocket build: CM5-PoE-BASE-A** — from $15.99 (M.2 M-Key 2230–2280, dual MIPI) — https://www.waveshare.com/cm5-poe-base-a.htm
7. **Modem: SIM7600G-H-M2** (drops into B-Key slot; LTE Cat-4 calls/SMS/data) — $55–70 *(class)*; HAT alt: SIM7600G-H 4G HAT $57.99 https://www.aliexpress.com/item/1005003033234299.html / €76.90 https://www.welectron.com/Waveshare-17372-SIM7600G-H-4G-HAT_1
8. **Display: 6.25" DSI LCD 720×1560 capacitive touch** — $55–65 *(class)*
9. UPS/BMS HAT (Li-ion + USB-C charge path, V1 power) — $25–40 *(class)*
10. FFC/FPC cable set: 22-pin 0.5 mm DSI/CSI, several lengths — $8–15 *(class)*
11. Blower fan CM5-FAN-3007-5V ("demo turbo" option) — $6.31

## Order 3 — Seeed Studio (or The Pi Hut UK)
12. **ReSpeaker XMOS XVF3800 4-mic array** — $49.99 https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html · £48 https://thepihut.com/products/respeaker-xmos-xvf3800-ai-powered-4-mic-array-for-clear-voice-even-in-noise
13. Tier-2 sensors (optional, same basket): 24 GHz mmWave LD2410/LD2450 ~$5–12 (open UART protocol, ESPHome/Home Assistant integrations); BME688 breakout ~$20; VL53L5CX ToF ~$15–25; MLX90640 thermal ~$60–75 *(class)*
13a. UWB for Find-My-style precision finding: Qorvo DWM3000-class module/EVB — $20–45 *(class)* (Mouser/AliExpress; software: Qorvo DW3000 SDK, ranging demos)
13b. Gesture-radar research option: TI IWR6843ISK evaluation module — ~$135 (TI store; software: TI mmWave SDK + OpenRadar)

## Order 4 — AliExpress (one combined basket)
14. **NVMe SSD M.2 2230 bare board, 1 TB quality tier** — WD SN740 / SN770M, Corsair MP600 Mini, Kioxia BG5 class — $70–110 *(class)*; note: CM5 PCIe x1 caps speed, pick for efficiency/sustained writes, not benchmarks
15. **Haptics: genuine iPhone Taptic Engine spare part** — $5–20 *(class)* (search "Taptic Engine replacement")
16. 3× I2S class-D amp MAX98357A boards (2× speakers + 1× haptic channel) — $3–5 each
17. 2× micro-speakers (phone/tablet spare drivers) — $3–8 each *(class)*
18. Cellular alt B: Quectel EG25-G mPCIe/M.2 + USB adapter — $25–45 *(class)*
19. Antennas: 2× LTE FPC/rod + 1× GNSS + U.FL/IPEX4 pigtails — $8–15 *(class)*
20. IR blaster parts: 940 nm IR LEDs + NPN/MOSFET drivers + TSOP38238 receivers — $3–6 *(class)*
21. Sensor breakouts: LSM6DSV16X/LSM6DSOX IMU $6–12; VCNL4040 $3–6; BMP390 $4–8; PN7150 NFC $10–18 *(class)* (Adafruit originals optional quality tier)
22. SurfaceVolume v1.5: Azoteq IQS550/IQS7211 module — $15–30 *(class)*; custom flex electrode sheet — flex-PCB service (JLC/PCBWay), $30–60 NRE
23. Battery, option A: quality 1S Li-Po pouch 5000–8000 mAh with protection — $12–25; option B: 2× 21700 high-density cells (Samsung 50S/Molicel class, ~$6–10 each) + 1S BMS + holder — ~$20–30 for ≈10 Ah; BQ25792-class charger board $8–15; MAX17048 fuel-gauge board $3–6
24. Buttons/switches (lock; mute with mic-power cut), CR2032 + holder (RTC) — $5–10
25. DRV2605L haptic driver board (bring-up alt) — $4–8
25a. **Fingerprint: R503 / R503-Pro capacitive sensor, match-on-module, round, panel-mount** — $18–28 *(class)* (search "R503 fingerprint")
25b. Secure element alternates: NXP SE050 or ATECC608B breakout — $5–20 *(class)*; SPI TPM 2.0 SLB9670 module — $12–20 *(class)*

### Auxiliary / consumables (same AliExpress basket or local hardware store)
26. M2/M2.5 screw assortment + brass heat-set inserts kit — $8–14
27. Thermal pads 0.5/1/2 mm + thermal paste + thermal adhesive (midframe bonding) — $10–18
28. Kapton tape, VHB double-sided tape, heat-shrink, 30 AWG silicone wire, JST-SH/PH connector kit — $12–20
29. Silicone O-ring cord 1.5–2 mm + neutral-cure silicone sealant (gasket groove) — $6–12
30. Acrylic conformal coating spray (Plastik-70 class) for board splash protection — $8–14
31. Nylon standoffs, mesh fabric for speaker/mic ports, IR-transparent window plastic — $5–10

## Order 5 — sysmocom (Germany; unavoidable unique item)
32. **sysmoEUICC1-C2G** consumer SGP.22 eUICC, GSMA certs, triple-cut card (V1, hidden internal socket) — €35.70 class — https://shop.sysmocom.de/SIM/Cards/
33. sysmoEUICC1-CMG MFF2 solder 10-pack (V2 custom carrier) — per-chip tens of € — https://shop.sysmocom.de/sysmoEUICC1-eUICC-for-consumer-eSIM-RSP-in-MFF2-10-pack/sysmoEUICC1-CMG-10p
34. lpac open-source LPA — $0 — github.com/estkme-group/lpac

## Order 5a — Zymbit (secure element, primary)
34a. **Zymkey 4i — Raspberry Pi HSM: key storage, tamper detect, battery-backed RTC** — ~$45–50 — zymbit.com *(ships US/EU; AliExpress row 25b is the fallback to avoid the extra store)*

## Enclosure
35. Prints: PETG/ABS/PC shells, several iterations — $25–50 *(local print service)*; aluminum midframe plate (laser-cut service or hand-cut) — $10–25
36. CAD: parametric generator (OpenSCAD/CadQuery) per AOS-HW-018#enclosure-cad — $0 software. **No ready-made phone case with speaker chambers/antenna windows exists**; open CAD prior art to study: MNT Pocket Reform (full open mechanical CAD — mntre.com), ClockworkPi uConsole shell (github.com/clockworkpi), Beepy (beepy.sqfmi.com)

## Totals (one unit, all orders + enclosure, without Tier-2 options)
- Moscow route: ≈ 80 000–108 000 ₽ (≈ $840–1 130) — Tindie/Zymbit lines via forwarder
- Serbia/EU route: ≈ €620–840
- Camera subsystem alone (IMX585 + lens + CM3): ≈ $225–235 (budget ≤$300 ✔)
- Authentication (R503 + Zymkey 4i): ≈ $65–80
- Tier-2 sensor bay (all six): + $110–150
- Programme (2 units + spares + eUICC pack + 2 operators): ≈ $1 900–2 500 / €1 350–1 800

## Reference purchases (not part of the unit)
- FLX1s — $550 / $499 bundle — https://furilabs.com/shop/flx1s-bundle/
- 2–3 used OnePlus 6/6T donors — $50–100 each — Avito / KupujemProdajem
- ClockworkPi uConsole (assembled CM4 comparison + open case CAD) — ~$140–250 — clockworkpi.com

Store-count note: the build now needs six-seven orders; Tindie (main camera) and sysmocom (eUICC) are unavoidable unique sources; Zymbit can be folded into AliExpress alternates (row 25b) to save one store. Quality-tier substitutions (Adafruit/Mouser originals) add another order but improve reliability — founder's call at freeze. Channels, volatility and verification rules: AOS-RES-011.

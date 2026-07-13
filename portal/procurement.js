// Procurement view — buying/sourcing guidance for the hardware targets.
// Content derived from engineering-bible/docs/hardware (AOS-HW-001/009/011/016, the
// AOS-HW-020 per-target device catalogue, and the HW-018A Demo Brick V1 bill of
// materials). Figures are provisional planning envelopes (USD, 2026-07), not quotes.
const PROC_WAVES=[
  ['W0 · Build & debug','Days 0–14','Build workstation or CI runner, serial adapters, USB hubs, basic logic analyzer, power meter, cables, storage','$8k–18k'],
  ['W1 · Core targets','Days 0–30','Two documented boards, two RK3588 boards, displays/touch, eMMC/NVMe, two PinePhone Pro-class, one Fairphone-class comparator (Pixel 9 route archived — see ADR-0007)','$6k–14k'],
  ['W2 · Power/camera lab','Days 15–60','Programmable supply, source-measure/power analyzer, oscilloscope, thermal camera, lighting, UVC and raw camera modules, mics/speakers','$8k–22k'],
  ['W3 · Automation','Days 45–90','Controllable relays, USB switching, fixture boards, remote serial, network isolation, storage duplicators, safety equipment','$3k–8k'],
  ['W4 · Legal & specialists','Days 0–90','Trademark/search counsel, reverse-engineering/open-source counsel, initial camera/telephony consultations','$15k–30k'],
  ['Contingency','Whole period','Replacements, imports, second revisions, unexpected adapters','$5k–12k'],
];
const PROC_TARGETS=[
  ['Emulator','x86_64/AArch64 QEMU','Kernel and service semantics; reproducible builds','—'],
  ['Documented board','NXP i.MX 8M Plus EVK, TI AM62A/AM67A, BeagleY-AI','Clean port from public manuals and board data','$100–300 each'],
  ['Performance board','RK3588 (Radxa ROCK 5B/5B+)','Native graphics, media, multicore, high-bandwidth I/O','$150–400 each'],
  ['Open phone','PinePhone Pro; Librem 5 when obtainable','Phone-form power, touch, sensors, audio, separate modem','$150–400 each'],
  ['Quality phone','Fairphone Gen. 6; Sony Open Devices (Pixel 9 archived — stock oracle only)','Premium components understood and progressively controlled','$500–1000 each'],
  ['Future contract device','Vendor/ODM under NDA and source agreement','Manufacturable, certifiable, supportable product','ODM-gated'],
];
const PROC_STORES=[
  ['Raspberry Pi distributor','CM5 16GB compute module, Camera Module 3 (IMX708), HQ Camera IMX477, CM5 cooler','onpad.ru / amperka.ru · welectron.com / botland.store'],
  ['Tindie — Will Whang','Main camera: StarlightEye (Sony IMX585, Starvis 2, 4K); OneInchEye (IMX283) alternate','tindie.com (unique source; stock fluctuates)'],
  ['Waveshare','Carrier boards (CM5-ETH-RS485-4G-BASE, CM5-PoE-BASE-A), SIM7600G-H modem, 6.25" DSI touch LCD, UPS/BMS HAT','waveshare.com / official AliExpress shop'],
  ['Seeed Studio','ReSpeaker XMOS XVF3800 4-mic array; Tier-2 sensors (mmWave, BME688, ToF, thermal)','seeedstudio.com / thepihut.com (UK)'],
  ['AliExpress','NVMe 2230, haptics, I2S amps, speakers, cellular alt, antennas, IMU/NFC/ToF breakouts, battery, fingerprint, secure element','one combined basket'],
  ['sysmocom','sysmoEUICC1 consumer eUICC (SGP.22, GSMA certs); lpac open LPA','shop.sysmocom.de (Germany, unique item)'],
];
function procMetrics(){return `<div class="landscape-grid" style="margin-top:8px">
  ${metric('Demo Brick V1 · one unit (EU route)','€620–840')}
  ${metric('Demo Brick V1 · one unit (Moscow route)','$840–1,130')}
  ${metric('Camera subsystem (IMX585 + lens + CM3)','~$225 (≤$300 budget)')}
  ${metric('Programme · 2 units + spares + operators','$1.9k–2.5k')}</div>`}
function procWavesTable(){return `<div class="table-wrap"><table class="task-table"><thead><tr><th>Wave</th><th>Timing</th><th>Contents</th><th>Planning range</th></tr></thead><tbody>${PROC_WAVES.map(w=>`<tr><td class="mono tiny">${esc(w[0])}</td><td>${esc(w[1])}</td><td>${esc(w[2])}</td><td>${esc(w[3])}</td></tr>`).join('')}</tbody></table></div>`}
function procTargetsGrid(){return `<div class="landscape-grid">${PROC_TARGETS.map(t=>`<article><div class="eyebrow">${esc(t[0])}</div><h2>${esc(t[1])}</h2><p>${esc(t[2])}</p><span class="pill">${esc(t[3])}</span></article>`).join('')}</div>`}
function procStoresGrid(){return `<div class="landscape-grid">${PROC_STORES.map(s=>`<article><div class="eyebrow">${esc(s[2])}</div><h2>${esc(s[0])}</h2><p>${esc(s[1])}</p></article>`).join('')}</div>`}
function procurement(){nav('procurement');app.innerHTML=`${workspaceHead('Buying & sourcing','Procurement','Hardware is bought in waves tied to evidence gates. Ranges are planning envelopes in USD before tax, shipping, duties and regional availability. Derived from AOS-HW-009 and the Demo Brick V1 bill of materials.',`<a class="btn" href="${gh('/tree/main/engineering-bible/docs/hardware')}">Hardware docs ↗</a>`)}
<p class="status">Provisional data. Derived from AOS-HW-001 (target portfolio), AOS-HW-009 (lab & budget), AOS-HW-011 (open catalog), AOS-HW-016 (vendor acquisition), the AOS-HW-020 device catalogue and the HW-018A BOM. Verify exact SKUs and prices at purchase freeze.</p>
<p class="status">The Pixel 9 native route is <strong>researched and archived</strong> (<a href="${gh('/blob/main/engineering-bible/docs/decisions/ADR-0007-archive-pixel-9-route.md')}">ADR-0007 ↗</a>): no active budget or schedule. Pixel 9 is retained only as a read-only stock-quality oracle for measurement baselines. The carriable showcase is the interim <a href="${gh('/blob/main/engineering-bible/docs/hardware/HW-017-interim-demo-device.md')}">demo brick ↗</a>, whose bill of materials drives the sourcing below.</p>
<section class="section"><div class="section-head"><div class="eyebrow">Purchase principles</div><h2>Buy in waves, duplicate cheap critical targets, verify SKU before premium.</h2><p>Keep one known-good unit per target for comparison; confirm exact unlockable SKU before any premium-phone purchase; avoid specialized camera, RF or JTAG instruments until a concrete experiment requires them. AOS-HW-009 records lean and full estimates plus per-row purchase gates.</p></div>${procMetrics()}</section>
<section class="section"><div class="section-head"><div class="eyebrow">Purchase waves</div><h2>Budget envelopes by wave</h2><p><a href="#wiki/AOS-HW-009">AOS-HW-009 · Lab, Procurement and Initial Budget →</a></p></div>${procWavesTable()}</section>
<section class="section"><div class="section-head"><div class="eyebrow">What to buy first</div><h2>Hardware target classes and access cost</h2><p><a href="#wiki/AOS-HW-001">AOS-HW-001 · Hardware Target Portfolio →</a></p></div>${procTargetsGrid()}</section>
<section class="section"><div class="section-head"><div class="eyebrow">Demo Brick V1 · where to order</div><h2>Five to seven orders cover the whole build</h2><p>Tindie (main camera) and sysmocom (eUICC) are unavoidable unique sources. Quality-tier substitutions add an order but improve reliability. See <a href="${gh('/blob/main/engineering-bible/docs/hardware/HW-018A-demo-brick-bom.md')}">the bill of materials ↗</a> for line items and links.</p></div>${procStoresGrid()}</section>
<section class="section"><div class="section-head"><div class="eyebrow">Safety, inventory & vendor access</div><h2>Every asset is tracked; instruments are calibrated; vendor docs are acquired deliberately.</h2><p>The lab requires ESD protection, current-limited supplies, battery-safe enclosures and calibrated meters. Every asset carries an ID, revision, serial, source, cost, custodian and firmware state; research devices hold no personal accounts. Vendor documentation and support are acquired per <a href="#wiki/AOS-HW-016">AOS-HW-016</a>.</p></div></section>`}

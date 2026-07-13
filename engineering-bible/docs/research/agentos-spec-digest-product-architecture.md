
> **Superseded prior-art (2026-07-13).** This digest analyzes an earlier Fuchsia/FEMU/Starnix-oriented spec. Those are NOT the current implementation choices: AgentOS is a Rust-first owned microkernel; Fuchsia/FEMU/Starnix appear only as studied prior art. Retained for provenance of the design reasoning.

# AgentOS Spec Digest Product Architecture

> Archive notice: recovered from Claude session 937d083b-4513-4dc4-84f3-578242ea1a46. This digest was produced from source documents and is historical evidence only; current authoritative requirements are the top-level specs in docs/specs.

- Source message uuid: `e083e1dd-6e2c-4704-946e-ae8819e22ca4`
- Source document cited by session: `custom-os-fuchsia-spec.pdf`

# AgentOS Spec Digest — Product Architecture
Generated: 2026-06-29
Source: custom-os-fuchsia-spec.pdf (60pp), ideas.pdf (3D-cli, irrelevant), cto-decisions-pending.pdf (HyperIDE, not AgentOS), Своя мобильная ОС.txt

---

## PROTOTYPE SCOPE

**Verdict: (b) — Rust/product shell layer running in FEMU (x86 emulator), NOT a real Pixel 9 and NOT a Pixel 9 skin/simulator.**

The spec defines two parallel tracks and is explicit that the first prototype is Track A — product-only in FEMU, zero hardware:

> §1.1: "Продуктовый слой (оболочка, модель сущностей/агентов, история, синхронизация) полностью OS-независим и может разрабатываться и запускаться в эмуляторе FEMU уже сейчас, без единого аппаратного блокера."

> §2.1: "Трек А (продукт) строится в эмуляторе и поставляет основную ценность видения без аппаратных блокеров. Трек Б (железо) — длинный, рискованный bring-up Pixel 9."

> §1.6 (principles): "Сначала ценность без железа: всё, что можно сделать в эмуляторе, делается первым."

Track B (real Pixel 9) is a separate multi-year effort, described as "сложнее Asahi". The two tracks converge only at the end when B6 milestone integrates product (A) on top of real substrate (B).

The minimum viable configuration for the first prototype (§11.7):
```
MVP-A (продукт в FEMU): весь L6 + Starnix-интероп в эмуляторе | отброшено: всё железо
```

---

## TARGET / SIMULATOR

**"Simulator of a real Pixel 9" in this project = FEMU (Fuchsia Emulator, based on QEMU/AEMU) running on x86 Linux/Mac with a mock-substrate layer.**

This is NOT:
- An Android emulator with Pixel 9 skin
- FEMU pretending to be Pixel 9 hardware
- Any custom window/UI simulator

What it IS (§4.8):
> "FEMU — эмулятор Fuchsia (на базе QEMU/AEMU) для разработки на x86. Ключ всей стратегии: продуктовый слой (Трек А) разрабатывается, отлаживается и демонстрируется в FEMU без какого-либо железа. Рабочий цикл: правка → fx build → запуск в FEMU → отладка Zircon через ffx/GDB."

The "Pixel 9 form factor" only matters for Track B (real hardware bring-up). In FEMU, the substrate (camera/modem/sensors) is replaced by mock-services that implement the same FIDL contracts as real drivers (§14.4):
> "mock-камера отдаёт тестовые кадры/бурсты, mock-модем имитирует события телефонии, mock-сенсоры — синтетические данные."

Pixel 9 (SoC Tensor G4) was chosen because (§1.4): unlockable bootloader, ARM Mali-G715 GPU with the most mature open driver ecosystem (Panfrost/Panthor/PanVK), reference status for custom OSes.

---

## MVP FEATURE SET (Track A, FEMU only)

Track A milestones define the ordered MVP sequence (§11.2):

| Priority | Milestone | What it delivers |
|----------|-----------|-----------------|
| 1 | A1 | Fork Fuchsia, build, run in FEMU, component skeleton |
| 2 | A2 | Shell + compositor on Scenic/Flatland; basic "stories"/surfaces |
| 3 | A3 | Entity Store + first agents; entity/agent model (person/project/task/doc/event/message) |
| 4 | A4 | Global history + local-first data + CRDT sync |
| 5 | A5 | Integrations/datasources/widgets + Apple interop via Starnix (AirDrop/AirPlay/shared clipboard) |

From the product vision (§9) and Своя мобильная ОС.txt, distilled to what's in MVP-A scope:

1. **Entity/agent model** — typed graph: person, project, task, document, event, message, device as nodes with typed edges. Core abstraction replacing files+apps.
2. **Shell + compositor** — Scenic/Flatland-based, "stories"/surfaces organized around current entity/task, not icon grid.
3. **Global history** — system-wide event log (§9.4: "как история браузера, но для всей ОС"). Navigation + agent substrate.
4. **Local-first data + CRDT sync** — data lives on device, sync via CRDT libraries taken as-is, cloud is transport/backup only.
5. **Background agents** — extract entities from sources, dedup+link, maintain history, propose actions. Each agent gets strictly scoped capabilities.
6. **Integrations + datasources** — pluggable via agent+capability model.
7. **Adaptive widgets/surfaces** — assembled around current entity/task.
8. **Apple/Linux interop** — OpenDrop (AirDrop), uxplay/shairport-sync (AirPlay), KDE Connect/GSConnect (shared clipboard), all wrapped via Starnix.

**Not in MVP-A** (deliberately deferred): modem/telephony, camera, GPU acceleration (software rendering is acceptable until B3), fingerprint/face unlock, NFC/GNSS.

---

## ARCHITECTURE DECISIONS / CONSTRAINTS

### Kernel & Microkernel
- **Zircon** (Fuchsia microkernel, ~170 syscalls, object-capability model with handles, no ambient authority).
- **No Linux kernel** — this is the core constraint. Linux drivers do NOT transfer. Everything is against DFv2/Magma.

### Driver Model
- **DFv2** (Driver Framework v2): drivers are components bound to devices via bind rules, communicate via FIDL. Hardware drivers for SoC, display, GPU, modem-transport, sensors — all DFv2.
- Driver crash does NOT crash the kernel (process isolation).

### Graphics
- **Magma** (Fuchsia graphics subsystem, analogue of DRM/Mesa boundary).
- Mali-G715 driver written to Magma (PORT status, using Panfrost/Panthor/PanVK RE knowledge).
- Until GPU driver reaches Stage 2 (basic render/composition), software rendering is used in Track A.
- Compositor: **Scenic/Flatland** (taken as-is).

### Linux Compatibility
- **Starnix** (Linux ABI/UAPI runtime over Zircon, no VM): runs glibc/bionic binaries. Key multiplier — wraps libsamsung-ipc, ModemManager/ofono, libcamera, hdr-plus, KDE Connect without rewriting to Zircon. Starnix does NOT help with kernel-level drivers (that is DFv2 territory).

### Interface Layer
- **FIDL** (Fuchsia Interface Definition Language): all contracts between substrate↔platform↔shell are FIDL. This is what makes Track A (FEMU mock-substrate) and Track B (real hardware) interchangeable above the contract boundary.

### 3-Layer Architecture
```
L6 Shell/UI          — С НУЛЯ (from scratch)
L6 Entity/Agent      — С НУЛЯ
L6 History/Sync      — С НУЛЯ
L6 Integrations      — С НУЛЯ / ОБЕРНУТЬ
L5 Starnix           — КАК ЕСТЬ
L4 Camera stack      — РЕВЕРС/ОБЕРНУТЬ
L3 Telephony         — ПОРТ/РЕВЕРС/ОБЕРНУТЬ
L2 GPU/Magma         — КАК ЕСТЬ + ПОРТ driver
L1 Bring-up Tensor   — РЕВЕРС (all of it)
L0 Zircon/DFv2       — КАК ЕСТЬ (forked)
```

### Data Model
- Entity graph (typed nodes + typed edges) as the central abstraction.
- Node types: Person, Project/Task, Document, Event/Place, Message, Device.
- Edge carries: type, from, to, timestamp, source, confidence.
- Schema versioned; supports migration without data loss.
- Storage: local-first, embedded store + fulltext index.
- Sync: **CRDT** libraries taken as-is, schema/integration written from scratch.
- No "global filesystem" in the traditional sense — per-component namespaces (Fuchsia model).

### Build System
- **GN/ninja/fx** (Fuchsia's build toolchain). Heavy: requires dedicated build machine.
- Our fork adds own product/board under the same tree.
- CI runs unit+integration tests in FEMU on every commit; hardware-dependent tests on separate Pixel 9 stencil (Track B only).

### Security
- Capability model: no ambient authority, component isolation, no global FS.
- Agents get minimum capabilities (only their source handle).
- Hardware: MTE (memory tagging, Tensor G4 ARM feature), Titan M2 verified boot (used as-is).

### Telephony (Track B, FEMU mock in Track A)
- Exynos Modem 5400 — external proprietary modem, SIPC protocol (shared-memory), custom command set.
- Stack: firmware blob (КАК ЕСТЬ) → boot sequence (РЕВЕРС) → SIPC link transport DFv2 (ПОРТ) → libsamsung-ipc (ПОРТ) → Exynos 5400 commands (РЕВЕРС via BaseMirror) → ModemManager/ofono wrapped via Starnix.
- Voice call = separate high-risk milestone (audio DSP path), may fail entirely.
- Data/SMS achievable; voice is a stretch.

### Camera (Track B)
- ISP capture driver: РЕВЕРС.
- libcamera wrapped via Starnix (ОБЕРНУТЬ).
- HDR+/hdr-plus pipeline: КАК ЕСТЬ (OS-agnostic).
- Sensor tuning (CCM, black level, AWB, noise profile): С НУЛЯ per sensor — this is the actual quality ceiling.
- Ceiling: postmarketOS-level ("достойно, по-ретро"), NOT Pixel-on-Android.

---

## PENDING CTO DECISIONS

### Open Questions from the Spec itself (§20.4 Appendix D)

These are the AgentOS-relevant open questions that function as pending decisions:

| # | Open Question | Blocks prototype? |
|---|--------------|-------------------|
| OQ1 | Is Zircon boot path on Pixel 9 feasible without the "unreleased bootloader" referenced in Pixel 10 patches? | BLOCKS Track B (B1 milestone) |
| OQ2 | How well does BaseMirror actually cover Exynos 5400 command set (vs older Exynos it was validated on)? | BLOCKS Track B B4 (modem) |
| OQ3 | Is voice calling achievable without proprietary audio-HAL — or is this the hard ceiling of telephony? | Track B only, can defer |
| OQ4 | How much sensor tuning is needed for acceptable photo quality, and does tuning transfer across Pixel 9 sensor revisions? | Track B only, can defer |
| OQ5 | Starnix ABI stability over the project horizon (Google controls this, it's a moving target) | Affects Track A indirectly |
| OQ6 | Should an intermediate ARM board with existing Fuchsia support be used for substrate bring-up INSTEAD of jumping straight to Pixel 9? | BLOCKS Track B start — strategic decision |

### Blocking vs Deferrable

**BLOCK Track A start (prototype in FEMU): NONE.** The spec is explicit that Track A has zero hardware blockers.

**BLOCK Track B start:**
- OQ6 (ARM board vs Pixel 9 directly) — needs decision before B1 bring-up work begins. Spec recommends starting with a supported Fuchsia ARM board first (§19.6: "Начинай bring-up с раннего UART и, по возможности, с поддерживаемой платы, не со «слепого» флагмана").
- OQ1 (bootloader path) — must be confirmed before B1.

**Can defer to later Track B milestones:**
- OQ2 (BaseMirror coverage) — only blocks B4.
- OQ3 (voice) — only blocks B4 voice sub-milestone, which is already marked as may-fail.
- OQ4 (sensor tuning scope) — only blocks B5.
- OQ5 (Starnix ABI) — managed by pinning upstream revision.

---

## RISK REGISTER SUMMARY (from §2.5 and §20.2)

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|-----------|
| R1: Bootloader path closed | Critical for Track B | Medium | Start with supported ARM Fuchsia board; early UART |
| R2: SoC bring-up drags years | High | High | Track A decouples; accept it |
| R3: GPU driver stuck | High (no HW UI accel) | Medium | Software rendering until then |
| R4: Modem voice doesn't work | High (no calls) | High | Live on data/SMS; voice = separate milestone allowed to fail |
| R5: Exynos 5400 commands incomplete | Medium | High | BaseMirror + observation; iterative |
| R6: ISP/sensor tuning ceiling | Medium | High | Accept postmarketOS-level quality |
| R7: Starnix ABI breaks | Medium | High | Pin revision; compatibility tests |
| R8: Google changes Fuchsia APIs | Medium | High | Pin + abstractions over unstable APIs |
| R9: Scope underestimated / burnout | High | High | Track decoupling; MVP configs; accept cuts |

---

## NOTES ON AgentOS.md

Raw product ideation list. The spec absorbs the key ideas into its L6 architecture:
- "Project/Task/Document/People/Local/Agent" → entity/agent model ✓
- "Global history (like browser history but for whole OS)" → §9.4 ✓
- "Local/remote data/logic auto management" → CRDT sync §9.5 ✓
- "Universal sharing / AirDrop / AirPlay / shared clipboard" → §9.7 (OpenDrop/uxplay/KDE Connect) ✓
- "File system: tag-based, folder is a document" → entity graph model (implicit) ✓
- "Stock widgets" list (notes, spreadsheets, messenger, browser, etc.) → NOT in MVP-A; these are post-MVP product features built atop the entity/agent platform.
- Games (Chess, Snake, Doom, etc.) → clearly post-MVP, not in spec scope at all.

The .txt wishlist is aspirational. The spec cuts it to what's achievable in Track A (FEMU) for the prototype: shell + entity/agent + history + sync + integrations.

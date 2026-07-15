---
id: "AOS-RES-002"
title: "Hardware Evidence and Source Register"
status: "Generated evidence view"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Primary and project sources used to support architecture, hardware, legal, product, and programme decisions."
---

# Hardware Evidence and Source Register

## Table of Contents

- [Purpose](#purpose)
- [Register](#source-register)
- [Operating Rule](#operating-rule)

<a id="purpose"></a>

## Purpose

Primary and project sources used to support architecture, hardware, legal, product, and programme decisions.

<a id="source-register"></a>

## Register

| id | title | authority | domain | url |
| --- | --- | --- | --- | --- |
| SRC-001 | seL4 — About and Verified Microkernel | Primary project | Microkernel | https://sel4.systems/About/ |
| SRC-002 | seL4 Reference Manual | Primary specification | Microkernel | https://sel4.systems/Info/Docs/seL4-manual-latest.pdf |
| SRC-003 | Fuchsia Kernel Concepts | Official documentation | Microkernel | https://fuchsia.dev/fuchsia-src/concepts/kernel |
| SRC-004 | Fuchsia Interface Definition Language | Official documentation | IDL | https://fuchsia.dev/fuchsia-src/development/languages/fidl |
| SRC-005 | Fuchsia Component Framework | Official documentation | Components | https://fuchsia.dev/fuchsia-src/concepts/components/v2/introduction |
| SRC-006 | Genode Foundations and Architecture | Primary project | Capability OS | https://genode.org/documentation/general-overview/index |
| SRC-007 | KeyKOS — A Secure, High-Performance Environment | Historical primary archive | Capability OS | https://www.cis.upenn.edu/~KeyKOS/ |
| SRC-008 | CapROS Project | Primary project | Capability OS | https://www.capros.org/ |
| SRC-009 | MINIX 3 Architecture | Primary project | Microkernel | https://wiki.minix3.org/doku.php?id=www:documentation:start |
| SRC-010 | QNX Neutrino System Architecture | Vendor documentation | Microkernel | https://www.qnx.com/developers/docs/8.0/com.qnx.doc.neutrino.sys_arch/topic/about.html |
| SRC-011 | Tock OS Design | Primary project | Embedded OS | https://tockos.org/documentation/design |
| SRC-012 | Hubris Reference | Primary project | Embedded OS | https://hubris.oxide.computer/ |
| SRC-013 | Theseus OS Book | Primary project | Research OS | https://www.theseus-os.com/Theseus/book/ |
| SRC-014 | Redox OS Book | Primary project | Rust OS | https://doc.redox-os.org/book/ |
| SRC-015 | Barrelfish — The Multikernel | Primary research project | Research OS | https://www.barrelfish.org/ |
| SRC-016 | CHERI Project | Primary research project | Hardware capability | https://www.cl.cam.ac.uk/research/security/ctsrd/cheri/ |
| SRC-017 | The Protection of Information in Computer Systems | Foundational paper | Security principles | https://www.cs.virginia.edu/~evans/cs551/saltzer/ |
| SRC-018 | The Confused Deputy | Foundational paper | Capabilities | https://www.cis.upenn.edu/~KeyKOS/ConfusedDeputy.html |
| SRC-019 | Android Bootloader Locking and Unlocking | Official documentation | Android/Pixel | https://source.android.com/docs/core/architecture/bootloader/locking_unlocking |
| SRC-020 | Google Pixel Factory Images | Official documentation | Pixel | https://developers.google.com/android/images |
| SRC-021 | Pixel 9 Technical Specifications | Official product page | Pixel | https://store.google.com/product/pixel_9_specs |
| SRC-022 | Android Camera HAL3 Requests | Official documentation | Camera | https://source.android.com/docs/core/camera/camera3_requests_hal |
| SRC-023 | Android IMS Service | Official documentation | Telephony | https://source.android.com/docs/core/connect/ims |
| SRC-024 | Android Verified Boot | Official documentation | Boot security | https://source.android.com/docs/security/features/verifiedboot |
| SRC-025 | Android Keystore System | Official documentation | Key security | https://developer.android.com/privacy-and-security/keystore |
| SRC-026 | Fairphone Open Source | Official vendor documentation | Semi-open phone | https://support.fairphone.com/hc/en-us/articles/9979180437393-Fairphone-Open-Source |
| SRC-027 | Fairphone Bootloader Unlocking | Official vendor documentation | Semi-open phone | https://support.fairphone.com/hc/en-us/articles/10492476238865-Manage-the-bootloader |
| SRC-028 | Sony Open Devices Program | Official vendor program | Semi-open phone | https://developer.sony.com/open-source/aosp-on-xperia-open-devices |
| SRC-029 | PinePhone Pro Product and Specifications | Official vendor/project | Open phone | https://pine64.org/devices/pinephone_pro/ |
| SRC-030 | PinePhone Pro Documentation | Official project documentation | Open phone | https://pine64.org/documentation/PinePhone_Pro/ |
| SRC-031 | Librem 5 Hardware Specifications | Official vendor | Open phone | https://puri.sm/products/librem-5/ |
| SRC-032 | postmarketOS Devices and Porting | Primary community project | Mobile Linux prior art | https://wiki.postmarketos.org/wiki/Devices |
| SRC-033 | BeaglePlay Documentation | Official board documentation | Documented board | https://docs.beagleboard.org/latest/boards/beagleplay/ |
| SRC-034 | BeagleY-AI Documentation | Official board documentation | Documented board | https://docs.beagleboard.org/latest/boards/beagley/ai/ |
| SRC-035 | TI AM625 Product Page and Technical Documents | Official silicon vendor | SoC | https://www.ti.com/product/AM625 |
| SRC-036 | TI AM62A Product Page and Technical Documents | Official silicon vendor | Camera SoC | https://www.ti.com/product/AM62A7 |
| SRC-037 | NXP i.MX 8M Plus Applications Processor | Official silicon vendor | Camera SoC | https://www.nxp.com/products/processors-and-microcontrollers/arm-processors/i-mx-applications-processors/i-mx-8-applications-processors/i-mx-8m-plus-arm-cortex-a53-machine-learning-vision-multimedia-and-industrial-iot:IMX8MPLUS |
| SRC-038 | Raspberry Pi Camera Software | Official platform documentation | Camera | https://www.raspberrypi.com/documentation/computers/camera_software.html |
| SRC-039 | Raspberry Pi Camera Module 3 | Official product page | Camera module | https://www.raspberrypi.com/products/camera-module-3/ |
| SRC-040 | libcamera Architecture | Primary project | Camera | https://libcamera.org/introduction.html |
| SRC-041 | Panfrost Driver Documentation | Primary project documentation | GPU | https://docs.mesa3d.org/drivers/panfrost.html |
| SRC-042 | Linux DRM GPU Driver Developer Guide | Primary kernel documentation | Graphics prior art | https://docs.kernel.org/gpu/drm-internals.html |
| SRC-043 | HDR+ Burst Photography Paper | Primary research publication | Computational photography | https://research.google/pubs/burst-photography-for-high-dynamic-range-and-low-light-imaging-on-mobile-cameras/ |
| SRC-044 | Adobe DNG Specification | Format owner | Camera format | https://helpx.adobe.com/camera-raw/digital-negative.html |
| SRC-045 | ModemManager Documentation | Primary project | Cellular prior art | https://modemmanager.org/docs/modemmanager/ |
| SRC-046 | libqmi Documentation | Primary project | Cellular prior art | https://www.freedesktop.org/wiki/Software/libqmi/ |
| SRC-047 | libmbim Documentation | Primary project | Cellular prior art | https://www.freedesktop.org/wiki/Software/libmbim/ |
| SRC-048 | 3GPP Specifications Portal | Standards body | Cellular standards | https://www.3gpp.org/specifications-technologies/specifications-by-series |
| SRC-049 | GSMA eSIM | Industry association | eSIM | https://www.gsma.com/solutions-and-impact/technologies/esim/ |
| SRC-050 | PTCRB Certification Program | Certification body | Cellular certification | https://www.ptcrb.com/certification-program/ |
| SRC-051 | Global Certification Forum | Certification body | Cellular certification | https://www.globalcertificationforum.org/ |
| SRC-052 | EU Software Directive 2009/24/EC | Official law | Interoperability law | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009L0024 |
| SRC-053 | US Copyright Office 2024 Section 1201 Rulemaking | Official government source | Anti-circumvention | https://www.copyright.gov/1201/2024/ |
| SRC-054 | FCC Equipment Authorization | Official regulator | Radio regulation | https://www.fcc.gov/oet/ea |
| SRC-055 | EU Radio Equipment Directive | Official EU source | Radio regulation | https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en |
| SRC-056 | EU Cyber Resilience Act | Official EU source | Product cybersecurity | https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act |
| SRC-057 | EU General Data Protection Regulation | Official law | Privacy | https://eur-lex.europa.eu/eli/reg/2016/679/oj |
| SRC-058 | NIST Secure Software Development Framework | Official standard guidance | Secure development | https://csrc.nist.gov/Projects/ssdf |
| SRC-059 | SLSA Specification | Primary project/specification | Supply-chain security | https://slsa.dev/spec/ |
| SRC-060 | SPDX Specifications | Standards project | Licensing/SBOM | https://spdx.dev/specifications/ |
| SRC-061 | OpenChain ISO/IEC 5230 | Standards project | OSS compliance | https://www.openchainproject.org/license-compliance |
| SRC-062 | REUSE Specification | Primary project | License provenance | https://reuse.software/spec/ |
| SRC-063 | Developer Certificate of Origin | Canonical text | Contributions | https://developercertificate.org/ |
| SRC-064 | CERN Open Hardware Licence | License steward | Hardware licensing | https://ohwr.org/cern_ohl_s_v2.pdf |
| SRC-065 | Open Source Hardware Association Certification | Program owner | Open hardware | https://certification.oshwa.org/ |
| SRC-066 | Apache License 2.0 | License steward | Software licensing | https://www.apache.org/licenses/LICENSE-2.0 |
| SRC-067 | MIT License | OSI | Software licensing | https://opensource.org/license/mit |
| SRC-068 | Creative Commons Attribution 4.0 | License steward | Documentation licensing | https://creativecommons.org/licenses/by/4.0/ |
| SRC-069 | GitHub Documentation — About CODEOWNERS | Official product documentation | Repository governance | https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners |
| SRC-070 | Linear Documentation — Project Timeline | Official product documentation | Planning tooling | https://linear.app/docs/project-timeline |
| SRC-071 | Linear Documentation — Project Milestones | Official product documentation | Planning tooling | https://linear.app/docs/project-milestones |
| SRC-072 | Linear Documentation — Project Dependencies | Official product documentation | Planning tooling | https://linear.app/docs/project-dependencies |
| SRC-073 | Linear Documentation — Importers | Official product documentation | Planning tooling | https://linear.app/docs/importers |
| SRC-074 | Mermaid Gantt Syntax | Primary project documentation | Documentation tooling | https://mermaid.js.org/syntax/gantt.html |
| SRC-075 | Android AppFunctions | Official documentation | Agent actions | https://developer.android.com/ai/appfunctions |
| SRC-076 | Apple App Intents | Official documentation | Agent actions | https://developer.apple.com/documentation/appintents |
| SRC-077 | Model Context Protocol Specification | Primary specification | Agent protocols | https://modelcontextprotocol.io/specification/2025-11-25 |
| SRC-078 | Automerge Documentation | Primary project | Local-first data | https://automerge.org/docs/hello/ |
| SRC-079 | Keyhive Notebook | Primary research project | Authorization | https://www.inkandswitch.com/keyhive/notebook/ |
| SRC-080 | Loro Documentation | Primary project | Local-first data | https://loro.dev/docs |
| SRC-081 | Malleable Software Essay | Primary research essay | Product model | https://www.inkandswitch.com/essay/malleable-software/ |
| SRC-082 | Android Build Pixel Kernels | Official documentation | Pixel | https://source.android.com/docs/setup/build/building-pixel-kernels |
| SRC-083 | libcamera Architecture | Primary project documentation | Camera | https://docs.libcamera.org/master/ |
| SRC-084 | Raspberry Pi PiSP Specification | Official specification | ISP | https://datasheets.raspberrypi.com/camera/raspberry-pi-image-signal-processor-specification.pdf |
| SRC-085 | TI AM67A Product Page | Official vendor documentation | Hardware | https://www.ti.com/product/AM67A |
| SRC-086 | NXP i.MX 8M Plus Product Page | Official vendor documentation | Hardware | https://www.nxp.com/products/i.MX8MPLUS |
| SRC-087 | BeagleY-AI Documentation | Official board documentation | Hardware | https://docs.beagleboard.org/boards/beagley/ai/ |
| SRC-088 | Radxa ROCK 5B Documentation | Official board documentation | Hardware | https://docs.radxa.com/en/rock5/rock5b |
| SRC-089 | PINE64 PinePhone Pro | Official vendor documentation | Open phone | https://pine64.org/devices/pinephone_pro/ |
| SRC-090 | postmarketOS Devices | Primary project documentation | Open phone | https://wiki.postmarketos.org/wiki/Devices |
| SRC-091 | Sony Open Devices | Official vendor programme | Semi-open phone | https://developer.sony.com/open-source/aosp-on-xperia-open-devices |
| SRC-092 | Fairphone Bootloader Unlock | Official vendor documentation | Semi-open phone | https://support.fairphone.com/hc/en-us/articles/10492476238865-Manage-the-bootloader |
| SRC-093 | Fairphone Open Source Code | Official vendor documentation | Semi-open phone | https://support.fairphone.com/hc/en-us/articles/9979180437393-Open-source-code |
| SRC-094 | US Copyright Office 2024 Section 1201 Recommendation | Official government publication | Legal | https://www.copyright.gov/1201/2024/2024_Section_1201_Registers_Recommendation.pdf |
| SRC-095 | Bluetooth Qualification Process | Standards body | Regulatory | https://www.bluetooth.com/develop-with-bluetooth/qualification-listing/ |
| SRC-096 | Wi-Fi Alliance Certification | Industry alliance | Regulatory | https://www.wi-fi.org/certification |
| SRC-097 | GSMA eSIM Specifications | Industry standards body | Telephony | https://www.gsma.com/solutions-and-impact/technologies/esim/gsma-esim-specifications/ |
| SRC-098 | 3GPP Specifications Portal | Standards body | Telephony | https://www.3gpp.org/specifications |
| SRC-099 | Mesa Panfrost Documentation | Primary project documentation | GPU | https://docs.mesa3d.org/drivers/panfrost.html |
| AOS-SRC-N001 | Normalized Digest: Agent OS Product Vision | Project normalized source | Source corpus | sources/normalized/N001-agent-os-product-vision.md |
| AOS-SRC-N002 | Normalized Digest: Wider Lens Research | Project normalized source | Source corpus | sources/normalized/N002-wider-lens.md |
| AOS-SRC-N003 | Normalized Digest: iOS, Android, and Agent OS Comparison | Project normalized source | Source corpus | sources/normalized/N003-mobile-os-comparison.md |
| AOS-SRC-N004 | Normalized Digest: Product Prior Art Atlas | Project normalized source | Source corpus | sources/normalized/N004-prior-art-atlas.md |
| AOS-SRC-N005 | Normalized Digest: Naming Decision | Project normalized source | Source corpus | sources/normalized/N005-naming-decision.md |
| AOS-SRC-N006 | Normalized Digest: Custom Fuchsia-Based Mobile OS Specification | Project normalized source | Source corpus | sources/normalized/N006-custom-os-pdf-digest.md |
| AOS-SRC-N007 | Normalized Digest: Fuchsia Developer Guide | Project normalized source | Source corpus | sources/normalized/N007-fuchsia-guide-digest.md |
| AOS-SRC-N008 | Normalized Digest: Existing Implementation Specs 000–050 | Project normalized source | Source corpus | sources/normalized/N008-implementation-specs-digest.md |
| AOS-SRC-N009 | Normalized Digest: Nine-Phase Source Session Plan | Project normalized source | Source corpus | sources/normalized/N009-session-plan-digest.md |
| AOS-SRC-NINDEX | Normalized Source Digest Index | Project normalized source | Source corpus | sources/normalized/INDEX.md |

<a id="operating-rule"></a>

## Operating Rule

Every material use must preserve the record ID and link the claim, experiment, task, or normative specification that depends on it. Generated Markdown is a reviewable view; the CSV is the canonical machine-readable register.

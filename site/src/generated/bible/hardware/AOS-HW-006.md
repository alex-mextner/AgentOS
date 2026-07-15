---
id: "AOS-HW-006"
title: "Camera Quality Program"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Multi-path program for achieving good camera quality without coupling product architecture to a proprietary smartphone ISP."
---

# Camera Quality Program

> Multi-path program for achieving good camera quality without coupling product architecture to a proprietary smartphone ISP.

## Table of Contents

- [Camera Quality Thesis](#quality-thesis)
- [Quality Ladder](#quality-ladder)
- [Parallel Camera Paths](#parallel-camera-paths)
- [Portable Imaging Pipeline](#portable-pipeline)
- [Calibration and Evaluation Lab](#calibration-lab)
- [Metrics](#metrics)
- [Expertise and Partners](#expertise-and-partners)
- [Pixel-Specific Limit](#pixel-limit)
- [Acceptance Evidence](#acceptance)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="quality-thesis"></a>

## Camera Quality Thesis

A good camera is a complete imaging system: optics, sensor, actuator, synchronization, CSI receiver, ISP, control algorithms, calibration, computational photography, storage, display color, power, and thermal policy. Sensor megapixels or an open driver are insufficient. Agent OS therefore runs camera quality as a measured program with portable stages defined by [hardware-service contracts](AOS-ARCH-006.md#service-contract-template).

<a id="quality-ladder"></a>

## Quality Ladder

| Level | Evidence |
| --- | --- |
| C0 | Test pattern or synthetic frames through the camera service |
| C1 | Stable UVC/smart-camera preview and capture with metadata |
| C2 | Native sensor control and raw Bayer capture on a documented board |
| C3 | Native ISP or software pipeline with auto-exposure, auto-white-balance, autofocus, color correction, and noise model |
| C4 | Calibrated still/video quality competitive with strong mid-range phones in controlled scenes |
| C5 | Premium computational photography: multi-frame HDR/night, motion handling, stabilization, portrait/depth, low latency, energy/thermal limits |
| C6 | Product camera validation across production modules, temperature, aging, and manufacturing variation |

<a id="parallel-camera-paths"></a>

## Parallel Camera Paths

1. **Portable smart-camera path:** UVC or a module with integrated ISP produces usable images quickly and validates UI, storage, privacy, and applications without SoC ISP dependence.
2. **Documented raw path:** i.MX 8M Plus, TI vision hardware, Raspberry Pi PiSP where usable, or another documented CSI platform provides sensor control, raw capture, calibration, and algorithm development.
3. **Performance path:** RK3588 or a documented accelerator validates throughput, GPU/NPU post-processing, and high-resolution video.
4. **Pixel quality path:** stock Pixel captures create a legally acquired benchmark and trace oracle; native Pixel camera work begins only after boot/power gates.
5. **Custom-module path:** a camera module vendor supplies optics, sensor, calibration, and ISP/tuning support for a future prototype or ODM device.

<a id="portable-pipeline"></a>

## Portable Imaging Pipeline

The pipeline separates sensor timing, raw unpacking, lens shading, black-level correction, defective-pixel correction, demosaic, color correction, white balance, tone mapping, denoise, sharpening, geometric correction, stabilization, HDR fusion, depth/segmentation, encoding, and metadata. Hardware providers may fuse stages, but a declared graph and metadata contract allow software fallback and quality comparison.

<a id="calibration-lab"></a>

## Calibration and Evaluation Lab

The minimum lab includes controlled dimmable high-CRI lighting, neutral and color targets, resolution/focus charts, gray cards, calibrated illuminance and color-temperature measurement, rigid mounts, motion target, dark enclosure, thermal measurement, reference devices, and a reproducible scene catalog. Optional commercial image-quality software may supplement open metrics; raw images and scripts remain archived.

<a id="metrics"></a>

## Metrics

Measure exposure accuracy and convergence, white-balance error, color difference, texture/noise trade-off, dynamic range, spatial resolution, autofocus success/time, shutter lag, inter-frame latency, dropped frames, rolling-shutter artifacts, stabilization, HDR ghosting, low-light motion, skin tones, video A/V sync, memory bandwidth, power per capture, sustained thermal behavior, and crash/recovery rate.

<a id="expertise-and-partners"></a>

## Expertise and Partners

Required specialist roles include camera/ISP architect, image-quality/tuning engineer, optics/module partner, driver engineer, computational-photography engineer, and validation engineer. Candidate vendors include sensor/module suppliers, e-con Systems, FRAMOS, Basler, Arducam, onsemi, Sony Semiconductor Solutions, OmniVision, and SoC-vendor camera teams. Engagement seeks documented controls, calibration data format, tuning rights, and sample-module supply rather than marketing specifications.

<a id="pixel-limit"></a>

## Pixel-Specific Limit

Pixel’s public Android material does not constitute a portable open camera stack. Proprietary camera HALs, ISP firmware, tuning databases, secure services, sensor calibration, and Google computational pipelines may remain unavailable. Native Pixel camera work is a research gate; the product’s camera architecture is proven first on documented or smart-camera paths.

<a id="acceptance"></a>

## Acceptance Evidence

- The same camera client runs against fake, UVC, documented raw, and Pixel proxy providers.
- Raw frames include reproducible sensor metadata and calibration provenance.
- Image-quality comparisons use fixed scenes, reference devices, and versioned algorithms.
- Tuning changes are parameterized, reviewed, and reversible.
- Power and thermal results accompany quality results.
- A vendor path exists for production module calibration and variation control.

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

These fine-grained anchors give the execution plan stable links into this specification. They are normative pointers: the linked canonical section remains the full requirement source.

<a id="calibration"></a>

### Calibration

For planning, conformance, and task cross-references, **Calibration** denotes the part of this specification governed primarily by [Calibration and Evaluation Lab](#calibration-lab). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="capture-path"></a>

### Capture Path

For planning, conformance, and task cross-references, **Capture Path** denotes the part of this specification governed primarily by [Portable Imaging Pipeline](#portable-pipeline). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="computational-pipeline"></a>

### Computational Pipeline

For planning, conformance, and task cross-references, **Computational Pipeline** denotes the part of this specification governed primarily by [Portable Imaging Pipeline](#portable-pipeline). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="controlled-proprietary-option"></a>

### Controlled Proprietary Option

For planning, conformance, and task cross-references, **Controlled Proprietary Option** denotes the part of this specification governed primarily by [Expertise and Partners](#expertise-and-partners). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="documented-camera-bench"></a>

### Documented Camera Bench

For planning, conformance, and task cross-references, **Documented Camera Bench** denotes the part of this specification governed primarily by [Parallel Camera Paths](#parallel-camera-paths). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="ml-policy"></a>

### ML Policy

For planning, conformance, and task cross-references, **ML Policy** denotes the part of this specification governed primarily by [Portable Imaging Pipeline](#portable-pipeline). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="portable-camera-stack"></a>

### Portable Camera Stack

For planning, conformance, and task cross-references, **Portable Camera Stack** denotes the part of this specification governed primarily by [Portable Imaging Pipeline](#portable-pipeline). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="power-and-performance"></a>

### Power And Performance

For planning, conformance, and task cross-references, **Power And Performance** denotes the part of this specification governed primarily by [Metrics](#metrics). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="quality-decision"></a>

### Quality Decision

For planning, conformance, and task cross-references, **Quality Decision** denotes the part of this specification governed primarily by [Quality Ladder](#quality-ladder). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="quality-definition"></a>

### Quality Definition

For planning, conformance, and task cross-references, **Quality Definition** denotes the part of this specification governed primarily by [Camera Quality Thesis](#quality-thesis). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="raw-and-dng"></a>

### Raw And Dng

For planning, conformance, and task cross-references, **Raw And Dng** denotes the part of this specification governed primarily by [Portable Imaging Pipeline](#portable-pipeline). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="reference-benches"></a>

### Reference Benches

For planning, conformance, and task cross-references, **Reference Benches** denotes the part of this specification governed primarily by [Parallel Camera Paths](#parallel-camera-paths). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="sensor-and-module"></a>

### Sensor And Module

For planning, conformance, and task cross-references, **Sensor And Module** denotes the part of this specification governed primarily by [Expertise and Partners](#expertise-and-partners). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="three-a"></a>

### Three A

For planning, conformance, and task cross-references, **Three A** denotes the part of this specification governed primarily by [Portable Imaging Pipeline](#portable-pipeline). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="timing-and-motion"></a>

### Timing And Motion

For planning, conformance, and task cross-references, **Timing And Motion** denotes the part of this specification governed primarily by [Portable Imaging Pipeline](#portable-pipeline). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="video-and-stabilization"></a>

### Video And Stabilization

For planning, conformance, and task cross-references, **Video And Stabilization** denotes the part of this specification governed primarily by [Portable Imaging Pipeline](#portable-pipeline). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

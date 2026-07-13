---
id: "AOS-SRC-N008"
title: "Normalized Digest: Existing Implementation Specs 000–050"
status: "Normalized source digest"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Research and Architecture"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "English disposition of implementation/*.md."
---
# Normalized Digest: Existing Implementation Specs 000–050

## Table of Contents

- [Source](#source)
- [Digest](#digest)
- [Current Disposition](#current-disposition)
- [Traceability](#traceability)

<a id="source"></a>

## Source

`implementation/*.md` under `sources/original/AgentOS-expanded-tree/`.

<a id="digest"></a>

## Digest

The existing specifications define a system overview, bootstrap toolchain, source-session assignment, kernel primitives, capability IPC, Pixel-shaped simulator, UI composition, and real-device operation. They are coherent as an early implementation scaffold but mix a host reference runtime, Fuchsia assumptions, and product goals.

The normative rewrite separates: (1) architecture-independent contracts; (2) the forked Fuchsia/Zircon microkernel; (3) user-space services; (4) board and device backends; (5) Pixel-only evidence/legacy adapters; and (6) product surfaces. The old documents remain immutable source material and must not be mistaken for current requirements.

<a id="current-disposition"></a>

## Current Disposition

This digest is interpretive. Normative requirements are defined by the linked architecture, product, hardware, legal, and planning documents. Unverified statements become claim or experiment records rather than implementation assumptions.

<a id="traceability"></a>

## Traceability

See [source authority](AOS-RES-005.md#source-authority), [claim verification](AOS-RES-003.md#claim-register), and [citation rules](AOS-META-003.md#citation-rules).

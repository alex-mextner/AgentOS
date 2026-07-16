---
id: "AOS-HW-018"
title: "LoRa and Low-Power Mesh Hardware Track"
status: "Normative planning baseline"
version: "0.1.0"
baseline_date: "2026-07-16"
owners: "Hardware, Connectivity, Power, and Regulatory"
summary: "External, accessory, fixed-relay, and future integrated radio options for Agent Mesh."
---
# LoRa and Low-Power Mesh Hardware Track

## Goal

Prove infrastructure-independent Agent Mesh communication without coupling the product model to one radio chipset or requiring an unlicensed internal phone redesign during early development.

## Hardware stages

### Stage 1 — external compatibility node

Use a documented Meshtastic-compatible device connected by BLE or USB. This proves envelope mapping, identity, receipts, emergency UX, routing policy and field testing before native radio work.

### Stage 2 — Agent OS accessory

Prototype a USB-C or case-mounted module with:

- SX1262-class sub-GHz radio;
- low-power controller such as nRF52/ESP32-class silicon selected by measured power and documentation;
- region-selectable certified front-end and antenna variants;
- hardware timestamping and wake signal;
- optional GNSS and emergency button;
- signed firmware, recoverable update and serial provenance;
- isolated power domain so the application processor may sleep or shut down.

### Stage 3 — fixed relay and gateway

Create solar, roof, vehicle and indoor nodes. Fixed nodes may bridge raw LoRa, local IP, Internet, satellite or LoRaWAN providers while treating Agent Mesh payloads as opaque encrypted bundles.

### Stage 4 — future integrated device

An ODM/JDM device may integrate the radio only after antenna, coexistence, thermal, battery, firmware, certification and supply-chain gates pass. No current milestone assumes this integration exists.

## Device-service boundary

The radio provider exposes packet send/receive, channel profile, link metrics, wake, duty-cycle budget, timestamp and diagnostics. It does not expose arbitrary registers or allow applications to select illegal frequency, power or airtime settings.

Bulk payloads remain outside LoRa. The provider accepts bounded envelopes or fragments and reports exact airtime, retry and power costs.

## Power model

- the low-power controller may retain queued work while the main SoC sleeps;
- wake the main SoC only for policy, user interaction, key access or payload processing that cannot remain isolated;
- measure idle, receive, transmit, scan, BLE bridge and relay duty;
- enforce per-project and emergency energy budgets;
- expose battery impact before enabling continuous relay mode.

## Candidate configurations

| Role | Initial configuration | Purpose |
| --- | --- | --- |
| Compatibility | Meshtastic-certified/documented node | Fast protocol and UX evidence |
| Phone accessory | MCU + SX1262 over USB-C/BLE | Native Agent Mesh provider prototype |
| Fixed relay | Weatherproof MCU + radio + solar/battery | Store-and-forward field network |
| Gateway | Radio + Ethernet/Wi-Fi/satellite uplink | Optional infrastructure bridge |
| Integrated future device | Separate low-power connectivity island | Always-available mesh without waking main SoC |

## Evidence programme

Field tests cover dense urban streets, reinforced-concrete indoor paths, suburban movement, open rural terrain, moving vehicles, body obstruction, antenna orientation, interference and region-compliant settings. Record hardware revision, antenna, enclosure, firmware, frequency plan, power, airtime, weather, route, delivery ratio and battery consumption.

## Stop conditions

Stop or change configuration when certification scope is unclear, antenna performance requires unsafe transmit settings, firmware provenance is unavailable, the controller cannot be recovered, relay power is incompatible with the product budget, or a radio provider requires ambient system authority.

## Related documents

- [Agent Mesh architecture](../architecture/ARCH-024-agent-mesh-connectivity.md)
- [Power and background execution](../architecture/AOS-ARCH-014.md)
- [Hardware target portfolio](AOS-HW-001.md)
- [Regional radio compliance](../legal/LEGAL-015-regional-radio-compliance.md)

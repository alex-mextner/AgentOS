---
id: "AOS-LEGAL-015"
title: "Regional Radio and Mesh Compliance"
status: "Normative planning baseline"
version: "0.1.0"
baseline_date: "2026-07-16"
owners: "Regulatory, Hardware, Security, and Product"
summary: "Region, certification, transmit, duty-cycle, emergency, privacy, and product-claim controls for Agent Mesh radios."
---
# Regional Radio and Mesh Compliance

## Scope

Agent Mesh may use licence-exempt sub-GHz radios, BLE, Wi-Fi, UWB, cellular, satellite and gateway services. Legal availability, power, duty cycle, channel plan, antenna, certification and emergency claims differ by device, country and deployment.

This document is a compliance engineering baseline, not legal advice.

## Mandatory controls

1. `RegionPolicy` is a signed system record derived from device certification, current jurisdiction, user confirmation where required and deployer policy.
2. Applications and micro-apps never receive raw frequency or transmit-power authority.
3. A radio provider rejects settings outside its certified hardware/region profile.
4. Duty-cycle, dwell-time, channel-access and airtime budgets are enforced below user space.
5. Firmware, front-end, antenna and enclosure revisions are part of the certified configuration identity.
6. Emergency wording must not imply public-safety, distress, carrier, satellite or rescue integration without verified contracts and testing.
7. Export, sanctions, encryption, privacy, location and interception rules are assessed for every target market.

## Modes

- **Development mode:** shielded or otherwise lawful lab use, explicit test profile, no public-product claim.
- **Community mesh mode:** licence-exempt operation within certified regional limits and documented relay policy.
- **Gateway mode:** additional network, telecom, privacy and service-provider obligations may apply.
- **Commercial integrated device:** radio, EMC, safety, battery, SAR/exposure, environmental, cybersecurity and update evidence are gated before sale.

## Data and privacy

Radio identifiers, neighbour observations, location, route metadata and emergency beacons are personal or sensitive data where they can identify or track people. Retention, export, relay logs and public map publication require explicit policy. Payload encryption does not eliminate metadata risk.

## Release gate

Every shippable hardware/profile pair requires a market matrix containing bands, maximum radiated power, channel-access rule, antenna limits, certification path, lab evidence, firmware identity, labelling, user instructions, emergency-language limits and responsible owner.

## Stop conditions

Disable transmit or remove a market/profile when region cannot be established safely, certification scope does not cover the configured antenna/enclosure, firmware can bypass limits, required lab evidence is missing, or the product claim exceeds the verified service.

## Related documents

- [Agent Mesh architecture](../architecture/ARCH-024-agent-mesh-connectivity.md)
- [LoRa hardware track](../hardware/HW-021-lora-mesh-hardware.md)
- [Regulatory certification](LEGAL-004.md)
- [Data, AI and privacy](LEGAL-010.md)

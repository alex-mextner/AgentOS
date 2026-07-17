---
id: "AOS-RES-017"
title: "Mesh, DTN, and Off-Grid Communication Prior Art"
status: "Research baseline"
version: "0.1.0"
baseline_date: "2026-07-16"
owners: "Connectivity Research"
summary: "Prior-art map for Meshtastic, Reticulum, MeshCore, Briar, DTN Bundle Protocol, Wi-Fi Aware, BLE mesh, LoRaWAN, and opportunistic networking."
---
# Mesh, DTN, and Off-Grid Communication Prior Art

## Research question

Which existing protocols, implementations and operational lessons can accelerate Agent Mesh without importing an app-centric object model, central network authority, unsafe radio controls, or undocumented metadata behavior?

## Systems to evaluate

| System | Useful evidence | Boundary for Agent OS |
| --- | --- | --- |
| Meshtastic | Commodity LoRa nodes, encrypted short messaging, hop-limited relay, field community | Compatibility provider and field baseline; not the system object/action model |
| Reticulum | Transport-independent addressing, opportunistic paths, constrained links | Study identity, propagation and path behavior; verify metadata and resource model |
| MeshCore | Compact low-power LoRa mesh implementations | Compare airtime, routing simplicity and hardware constraints |
| Briar | Delay-tolerant private messaging over multiple transports | Study contact model, threat assumptions and offline UX |
| IETF DTN Bundle Protocol | Store-and-forward, custody, expiry, disruption tolerance | Use concepts selectively; avoid unnecessary protocol weight for constrained radios |
| Wi-Fi Aware / NAN | Direct discovery and high-throughput nearby paths | Provider under Agent Mesh policy; platform/hardware availability varies |
| BLE Mesh / advertisements | Low-power discovery and small data | Useful for rendezvous and sensors; ordinary phone background limits must be measured |
| LoRaWAN | Regional ecosystem, gateways, device classes, operational regulation | Infrastructure provider only; ordinary star-of-stars model is not native P2P |
| Delay-tolerant CRDT replication | Compact semantic updates across intermittent contact | Define bounded operations and object-specific merge policy rather than sending databases |

## Evaluation axes

- payload and metadata confidentiality;
- identity and key lifecycle;
- maximum useful payload and fragmentation behavior;
- airtime and congestion control;
- routing and loop prevention;
- replay, deduplication and expiry;
- relay incentives and abuse resistance;
- power use and background operation;
- implementation and firmware provenance;
- regional radio compliance;
- bridge and gateway trust;
- compatibility with semantic history and typed delivery receipts.

## Adopt, adapt, avoid

**Adopt:** proven radio drivers, documented hardware, test tools, field methodologies, compact packet layouts and compatible external nodes.

**Adapt:** routing, store-and-forward, identity and acknowledgements behind Agent Mesh contracts.

**Avoid:** hidden central services, group secrets with unsafe blast radius, app-owned identity, undocumented fallback, unbounded flooding, misleading delivery states and direct application access to radio settings.

## Required experiments

1. Compare Meshtastic-compatible, Reticulum-compatible and minimal native envelopes on identical hardware.
2. Measure urban, indoor, rural and mobile delivery with controlled airtime and power.
3. Test malicious relay, replay, duplicate, expiry and metadata observation cases.
4. Compare direct LoRa, BLE rendezvous plus Wi-Fi transfer, fixed gateway and physical-carry paths.
5. Quantify the smallest useful CRDT/task/entity operations for constrained links.

## Decision outcome

The initial product path is a Meshtastic compatibility provider plus an Agent Mesh simulator. A native constrained-link protocol is justified only when measurements show a concrete semantic, privacy, power or reliability gap that cannot be fixed through a provider.

## Related documents

- [Agent Mesh architecture](../architecture/ARCH-024-agent-mesh-connectivity.md)
- [LoRa hardware track](../hardware/HW-021-lora-mesh-hardware.md)
- [Off-grid experience](../product/PROD-017-off-grid-peer-experience.md)

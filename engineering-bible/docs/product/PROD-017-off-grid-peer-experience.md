---
id: "AOS-PROD-017"
title: "Off-Grid Peer-to-Peer Experience"
status: "Normative planning baseline"
version: "0.1.0"
baseline_date: "2026-07-16"
owners: "Product, Connectivity, and Agent Safety"
summary: "User-facing Agent Mesh behavior for direct, delayed, relayed, emergency, and offline delivery."
---
# Off-Grid Peer-to-Peer Experience

## Principle

The user addresses a person, group, project, device, or task — never a radio network. Agent OS chooses direct local IP, Wi-Fi Direct, BLE, LoRa, a trusted gateway, the Internet, or delayed physical carriage according to policy.

## Core experiences

### Direct nearby exchange

Share a contact, task, note, credential invitation, photo manifest, or micro-app with a nearby person without cloud accounts. Large payloads use Wi-Fi; BLE or LoRa may carry discovery, identity proof, consent, hashes, and rendezvous metadata.

### Delayed delivery

A message may remain safely pending for hours or days. The UI shows why it is pending, expiry, transports attempted, energy cost, and whether relays may carry it. “Sent” is not shown until the selected receipt condition is met.

### Store-and-forward

A phone can carry encrypted envelopes between disconnected groups. Relay participation is opt-in or policy-controlled, quota-bound, revocable, and invisible to payload content. Relays earn no authority over the message.

### Emergency mode

An emergency bundle may contain a short message, coordinates, medical card pointer, battery state, expiry, and return channel. It may duplicate across permitted transports and ask nearby devices or fixed nodes to relay it. Emergency priority does not bypass encryption, region rules, or abuse limits.

### Project and agent handoff

A project update, compact CRDT operation, task status, or agent plan can travel through Agent Mesh. Agents may propose relay or transport changes, but external transmission still uses explicit capability and policy.

## Status vocabulary

`draft`, `queued`, `seeking-peer`, `direct-link`, `accepted-by-relay`, `partially-delivered`, `delivered`, `expired`, `rejected`, and `cancelled` are distinct states. Every state exposes timestamp, reason, current custody, and next retry policy.

## User controls

- allow or deny relaying by data class, contact group, battery state, network and region;
- maximum storage, airtime, power and mobile-data budget;
- direct-only, trusted-relay, community-relay or infrastructure routes;
- expiry and deletion after delivery;
- metadata minimisation level;
- emergency profile and test mode;
- per-project offline replication rules.

## Representative cases

1. Hiking group exchanges coordinates and short messages beyond cellular coverage.
2. Protest, disaster, blackout, roaming failure, or censorship disrupts infrastructure.
3. A farm, construction site, festival, vessel, campus or village uses fixed solar relays.
4. A phone announces a large document by hash over LoRa and transfers it by Wi-Fi at the next encounter.
5. A home gateway bridges local mesh, Internet, LoRaWAN, or satellite service without becoming the authority for identities or content.
6. Two devices synchronise task changes and semantic-history receipts after days apart.

## Accessibility and honesty

Status must not rely on colour alone. Delivery uncertainty is written plainly. Estimated range is never presented as guaranteed. The UI distinguishes payload delivery, relay custody, peer discovery, and infrastructure availability.

## Acceptance

Usability tests must demonstrate that ordinary users can predict whether a message is delivered, pending, relayable, expired or unsafe without understanding LoRa terminology. Field evidence must cover urban, indoor, rural and mobile encounters.

## Related documents

- [Agent Mesh architecture](../architecture/ARCH-024-agent-mesh-connectivity.md)
- [LoRa hardware track](../hardware/HW-018-lora-mesh-hardware.md)
- [Personal data authority](AOS-PROD-009.md)
- [Global history](AOS-PROD-002.md)

---
id: "AOS-ARCH-007"
title: "System Services"
status: "Normative foundation"
version: "1.1.0"
baseline_date: "2026-07-15"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "System services, including first-class routing, tethering, VPN gateway, policy, failure, evidence, and traceability for the Agent OS programme."
---

# System Services

> This specification defines a native Agent OS contract. Android, Linux, Fuchsia and other systems may inform the design, but do not become ambient native ABI dependencies.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Normative Position](#normative-position)
- [Operating Model](#operating-model)
- [First-Class Router and Gateway](#first-class-router-and-gateway)
- [Requirements](#requirements)
- [Failure and Degradation](#failure-and-degradation)
- [Evidence and Acceptance](#evidence-and-acceptance)
- [Implementation Obligations](#implementation-obligations)
- [Risks and Open Questions](#risks-and-open-questions)
- [Related Documents](#related-documents)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** System Architecture.

This specification defines a native Agent OS contract. Android, Linux, Fuchsia and other systems may inform the design, but do not become ambient native ABI dependencies.

This document owns the semantics implied by **System Services**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.

<a id="normative-position"></a>

## Normative Position

1. Define the boundary, owner, inputs, outputs, failure modes, observability, security authority, lifecycle, and compatibility policy.
2. Keep implementation facts separate from desired outcomes and unverified assumptions.
3. Require a reproducible evidence bundle before downstream components depend on the result.
4. Treat routing, tethering, forwarding, firewalling, DNS, DHCP, VPN tunnelling, and upstream selection as one composable system capability rather than unrelated application and hotspot features.
5. A phone-class Agent OS device must be capable of acting as a deliberate, inspectable network gateway for other devices, not merely as a carrier-controlled cellular hotspot.

<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).

<a id="first-class-router-and-gateway"></a>

## First-Class Router and Gateway

Current consumer phones expose useful hotspot features but generally do not expose the phone as a complete, user-programmable router. Apple documents Personal Hotspot as a temporary network that shares the iPhone or iPad's **cellular data connection**. The consumer surface does not offer arbitrary upstream selection, policy routing, firewall rules, DNS policy, per-client routes, or a supported control for forwarding hotspot clients through a device VPN. Android exposes tethering and application VPNs as separate facilities: the public `VpnService` model routes installed application traffic and can allow or deny packages, while tethering is managed by a separate service. Consequently, stock Android builds do not provide a portable guarantee that hotspot, USB-tethered, or Bluetooth-tethered client traffic follows the phone's active application VPN. OEM extensions, enterprise configurations, privileged system components, root-based tools, proxies, and custom ROMs may behave differently; those exceptions do not make the baseline consumer contract a full router.

Agent OS must close this gap. A phone, tablet, development device, or Shark-class product can expose a **Gateway** entity whose configuration and live state are first-class system data. The gateway is not owned by a VPN app, hotspot screen, carrier bundle, or foreground process.

The gateway model includes:

- **Downstream interfaces:** Wi-Fi access point, USB tethering, Bluetooth PAN, Ethernet or dock interfaces, and future local links admitted by the device-service contract.
- **Upstream interfaces:** cellular, Wi-Fi client, Ethernet, satellite where available, a VPN or overlay tunnel, a chained proxy where semantically valid, and multiple simultaneous upstreams.
- **Explicit forwarding graph:** the user can see and choose which downstream, client, project, identity, or traffic class exits through which upstream or tunnel.
- **VPN sharing:** a selected VPN or overlay route can be the egress for tethered clients. The system must not silently bypass the tunnel; unsupported combinations fail visibly before clients are told they are protected.
- **Policy routing:** routing can be expressed per client, device entity, destination, protocol, project context, security zone, cost class, metered state, or trust policy.
- **Router services:** IPv4 and IPv6 forwarding, NAT where required, DHCP, router advertisements, DNS forwarding and policy, local service discovery boundaries, firewalling, connection tracking, captive-portal handling, and auditable port-forwarding where enabled.
- **Resilience:** upstream failover, optional bonding or multipath when supported, resumable sessions where protocols permit, and a declared kill-switch policy for traffic that must never leave outside a tunnel.
- **Observability:** connected clients, assigned addresses, routes, active flows at privacy-appropriate granularity, bytes, latency, loss, upstream health, tunnel state, policy decisions, failures, and energy cost are visible through a system surface and typed diagnostics.
- **Authority:** enabling gateway mode, exposing local services, changing firewall rules, forwarding inbound ports, sharing credentials, or using paid/metered networks requires explicit capability and policy checks.

Gateway configurations are durable, nameable, duplicable, exportable, and attachable to a project or mode. Examples include **Work through Tailscale**, **Travel VPN hotspot**, **Camera field network**, **No-VPN local lab**, and **Emergency low-data gateway**. Switching configurations must be transactional: routes, DNS, firewall, and tunnel state move together or remain on the last known-safe configuration.

The design must distinguish a router from a proxy. A proxy-backed compatibility path can help selected clients or protocols without root access, but it is not represented as universal IP forwarding and must clearly identify unsupported protocols, DNS leakage risks, application configuration requirements, and failure behavior.

<a id="requirements"></a>

## Requirements

- **R01.** Define the boundary, owner, inputs, outputs, failure modes, observability, security authority, lifecycle, and compatibility policy.
- **R02.** Keep implementation facts separate from desired outcomes and unverified assumptions.
- **R03.** Require a reproducible evidence bundle before downstream components depend on the result.
- **R04.** Specify normal, partial, denied, timeout, cancellation, restart, upgrade, and permanent-failure behavior.
- **R05.** Expose structured diagnostics without leaking secrets or vendor-specific implementation details.
- **R06.** Link material unknowns to a claim and, when testable, an experiment with an owner and gate.
- **R07.** Update affected documentation and task data when evidence changes the model.
- **R08.** Implement routing and tethering as a system-owned gateway graph with explicit downstream, upstream, tunnel, DNS, firewall, and policy bindings.
- **R09.** Permit an admitted VPN or overlay tunnel to serve as the egress for tethered clients over Wi-Fi, USB, Bluetooth, or Ethernet when the backend passes conformance.
- **R10.** Never claim VPN protection for a downstream client unless forwarding, DNS, IPv4, IPv6, and failure-path tests prove that the client's applicable traffic follows the declared tunnel policy.
- **R11.** Support per-client and per-context routing policy without requiring each downstream device to install or configure the phone's VPN software.
- **R12.** Provide typed kill-switch behavior: fail closed, fail open with warning, pause clients, or switch to an explicitly approved alternate upstream.
- **R13.** Make gateway configurations durable, nameable, inspectable, reversible, and recoverable across process restart, suspend, reboot, and link changes.
- **R14.** Treat proxy-only compatibility as a narrower capability than IP routing and surface all protocol and leakage limitations.
- **R15.** Enforce carrier, regulatory, radio, safety, metering, and enterprise constraints explicitly without letting them silently rewrite the user's routing or privacy policy.

<a id="failure-and-degradation"></a>

## Failure and Degradation

Degradation must be explicit rather than accidental. The system reports capability absence, reduced quality, unavailable provider, stale data, unsafe condition, tunnel loss, DNS-policy failure, upstream exhaustion, client isolation, or forwarding denial through typed states. It must not silently fall back to broader authority, unrestricted legacy execution, unverified firmware, lossy data migration, irreversible agent action, or an unprotected upstream when a fail-closed policy applies.

Recovery defines what state is retained, reconstructed, re-enrolled, compensated, or intentionally discarded. Unsupported hardware or providers are rejected at binding time where possible. A partially applied gateway configuration must roll back to the last known-safe routing, DNS, firewall, and tunnel graph; it must not leave split state where the UI says VPN while some client classes bypass it.

If a VPN backend cannot carry tethered traffic, the system may offer direct internet, a narrower proxy mode, or no connectivity according to explicit user policy. It must not describe proxy mode as a full-device VPN gateway.

<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- Reviewed specification.
- Linked tasks, claims, sources and experiments.
- Conformance or acceptance evidence.
- Interoperability tests across Wi-Fi hotspot, USB, Bluetooth PAN, and Ethernet downstreams where hardware supports them.
- Packet-capture evidence that tethered IPv4, IPv6, DNS, and representative UDP/TCP/ICMP traffic follows the selected direct or VPN upstream.
- Tunnel-loss and DNS-failure tests proving each configured kill-switch behavior and absence of silent bypass.
- Multi-client policy tests with different routes, metering rules, firewall zones, and project contexts.
- Suspend, reboot, radio handover, upstream failover, captive portal, low-battery, thermal, and process-crash recovery tests.
- Security tests for client isolation, spoofing, rogue DHCP/RA, DNS manipulation, inbound exposure, capability escalation, and malicious configuration imports.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.

<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-CORE-021 | Implement monotonic time, deadlines, and timer objects | P1 | M2 | ordering, cancellation races, overflow, suspend adjustment contract and load tests |
| AOS-CORE-033 | Implement wait sets and asynchronous notification objects | P1 | M2 | lost/duplicate event, unregister race, peer death, overload and fairness tests |
| AOS-PLAT-001 | Catalog native platform contracts | P0 | M1 | architecture/security/product/hardware review and Linux/Android type scan |
| AOS-PLAT-010 | Implement user-space service manager | P0 | M2 | start order, denied route, crash loop, dependency failure, update and resource-exhaustion scenarios |
| AOS-PLAT-013 | Implement time, entropy, and identity foundation services | P1 | M3 | clock jumps, no-network, entropy failure, identity rotation/revocation and authorization tests |
| AOS-PLAT-014 | Specify package, component, and integration manifest | P1 | M3 | validate first-party service, product integration, driver and malicious/invalid packages |
| AOS-PLAT-030 | Demonstrate driver-domain crash and restart recovery | P0 | M3 | EXP-006 for crash during idle, I/O, DMA and suspend transitions |
| AOS-PLAT-031 | Implement block-storage service and backend contract | P0 | M3 | ordering/flush/power-loss simulation, malformed request, removal and throughput tests |
| AOS-PLAT-032 | Implement durable object/filesystem service v0 | P0 | M4 | crash/power-cut model, corruption, rollback, quota, concurrent transactions and migration tests |
| AOS-PLAT-033 | Implement native network and first-class gateway service v0 | P1 | M4 | hostile traffic, capability isolation, hotspot/USB/Bluetooth/Ethernet forwarding, direct and VPN upstreams, DNS, IPv4/IPv6, kill switch, link loss, suspend and throughput/latency tests |
| AOS-PLAT-036 | Implement audio service and graph contract | P1 | M4 | latency/drift/glitch, route changes, device removal, permission, suspend and crash tests |
| AOS-PLAT-050 | Implement package installation, verification, and component registry | P1 | M4 | tampered/signature/API/dependency/migration/power-loss/uninstall tests |
| AOS-OPEN-053 | Enable open-phone Wi-Fi and Bluetooth baseline | P1 | M6 | malformed/hostile inputs, reconnect, suspend, key storage, power, firmware failure and coexistence tests |

<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Undefined ownership and failure semantics create hidden coupling.
- Unverified source claims can become architecture accidentally.
- Carrier firmware or entitlement checks may limit tethering independently of the operating-system design.
- VPN sharing can create false confidence if IPv6, DNS, QUIC/UDP, captive-portal, or tunnel-failure paths bypass policy.
- A general router surface increases attack surface through DHCP, DNS, firewall, local discovery, packet parsing, and inbound forwarding.
- Continuous hotspot, multi-radio, encryption, and forwarding workloads can exceed phone thermal and battery budgets.
- Per-client observability can become surveillance; default telemetry must be aggregate and privacy-preserving, with deeper inspection explicitly enabled and audited.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when legal rights, recovery, debug access, safety, or the required evidence path is unavailable.

<a id="related-documents"></a>

## Related Documents

- [Product vision](../vision/AOS-VSN-001.md#product-thesis)
- [Portable system architecture](AOS-ARCH-001.md#system-boundary)
- [Portable device-service contracts](AOS-ARCH-020.md#contract-set)
- [Power, thermal, and background execution](AOS-ARCH-014.md)
- [Cellular and telephony programme](../hardware/AOS-HW-007.md)
- [Hardware portfolio](../hardware/AOS-HW-001.md#portfolio)
- [OS comparison matrix](../research/AOS-RES-013-os-comparison-matrix.md)
- [Decision gates](../planning/AOS-PLAN-006.md#decision-gates)
- [Claim register](../research/AOS-RES-003.md#claim-register)

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

<a id="audio-service"></a>

### Audio Service

`AOS-PLAT-036` — Implement audio service and graph contract

<a id="event-loop"></a>

### Event Loop

`AOS-CORE-033` — Implement wait sets and asynchronous notification objects

<a id="foundation-services"></a>

### Foundation Services

`AOS-PLAT-013` — Implement time, entropy, and identity foundation services

<a id="network-service"></a>

### Network Service

`AOS-PLAT-033` — Implement native network and first-class gateway service v0; `AOS-OPEN-053` — Enable open-phone Wi-Fi and Bluetooth baseline

<a id="router-gateway"></a>

### Router Gateway

Agent OS treats downstream interfaces, upstreams, VPN tunnels, routing, DNS, firewall, tethering, client policy, and observability as one system-owned gateway graph. A selected VPN can be shared with downstream clients only after conformance proves there is no silent traffic or DNS bypass.

<a id="package-model"></a>

### Package Model

`AOS-PLAT-014` — Specify package, component, and integration manifest; `AOS-PLAT-050` — Implement package installation, verification, and component registry

<a id="service-catalog"></a>

### Service Catalog

`AOS-PLAT-001` — Catalog native platform contracts

<a id="service-lifecycle"></a>

### Service Lifecycle

`AOS-PLAT-010` — Implement user-space service manager; `AOS-PLAT-030` — Demonstrate driver-domain crash and restart recovery

<a id="service-manager"></a>

### Service Manager

`AOS-PLAT-010` — Implement user-space service manager

<a id="storage-services"></a>

### Storage Services

`AOS-PLAT-031` — Implement block-storage service and backend contract; `AOS-PLAT-032` — Implement durable object/filesystem service v0

<a id="time-service"></a>

### Time Service

`AOS-CORE-021` — Implement monotonic time, deadlines, and timer objects

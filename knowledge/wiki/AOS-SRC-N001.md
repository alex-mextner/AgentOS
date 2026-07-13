---
id: AOS-SRC-N001
title: Agent OS Product Vision
status: foundation
category: Product
---

# Agent OS Product Vision

## APP-LAST

Agent OS is built around the durable things people are trying to accomplish, not around the applications that happen to implement them.

Documents, tasks, projects, people, places, events, messages, devices and agent plans are first-class system entities. They have stable identity, links, authority, history, actions and multiple views. Applications become replaceable providers, editors, transports and renderers.

## Local authority

The user controls the authoritative state, policy and provenance of their work. Remote services, models and integrations receive explicit, bounded inputs rather than ambient access to unrelated data.

## Shared actions

Meaningful operations are typed system contracts. The same action may be invoked from a graphical control, command line, script, automation or agent while using the same capability checks, confirmation policy and execution receipt.

## Semantic history

Agent OS records meaningful state transitions, sources, authority and external effects. History supports search, replay, recovery, undo where possible and compensating actions where true reversal is impossible.

## Malleable views and transclusion

A system entity is not tied to one application window. The same project, document or person may appear as a document block, card, table, timeline, map, story, command result or agent context without copying opaque application state.

## Inspectable agents

Agents produce explicit plans, request scoped capabilities, support preview, shadow and dry-run modes, expose expected cost and side effects and leave execution receipts. Agent access is not equivalent to unlimited ambient authority.

## Native portable system

The implementation target is an Fuchsia/Zircon fork with a Rust-first product layer, capability-secured IPC, native portable system services and versioned device-service contracts. Android and Linux are restricted to isolated Pixel 9 evidence, recovery and temporary bring-up work rather than used as the product substrate.

## Evidence-driven development

Claims, experiments, specifications, tasks, risks and acceptance gates remain linked. Hardware support and product capabilities are described according to reproducible evidence rather than roadmap aspiration.

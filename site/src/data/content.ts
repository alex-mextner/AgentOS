// Central content model for the Agent OS site.

export const brand = {
  name: 'Agent OS',
  positioning: 'Your work is the interface — not a grid of apps.',
  descriptor: 'App-last. Local-first. Agent-native.',
  lede:
    'Agent OS treats documents, tasks, projects, people, places and events as durable system objects. Apps become replaceable providers and views. Text-to-micro-app composition creates the missing interface, Agent Mesh carries the same objects across direct and off-grid paths, and capability-secured agents connect the whole system without ambient authority.',
  substrate:
    'A capability-oriented system stack with a Rust-first entity, agent, micro-app and connectivity product layer above explicit platform and hardware contracts.',
};

export interface Pillar {
  n: string;
  title: string;
  body: string;
  cite: string;
}

export const pillars: Pillar[] = [
  {
    n: '01',
    title: 'Entity-first, not app-centric',
    body: 'A typed graph of people, projects, tasks, documents, events and devices — typed edges carry source and confidence. UI is assembled around current work, not an icon grid.',
    cite: 'AOS-ARCH-009',
  },
  {
    n: '02',
    title: 'Interfaces are generated and malleable',
    body: 'Text, Shortcut-style blocks and declarative source produce safe micro-apps that render across AI answers, documents, notifications, widgets, wearables and focused modes.',
    cite: 'AOS-PROD-018',
  },
  {
    n: '03',
    title: 'Global history with undo',
    body: 'An append-only semantic event log records navigation, documents, actions, agents, delivery and external effects. Search, replay, undo and compensate where safe.',
    cite: 'AOS-ARCH-009',
  },
  {
    n: '04',
    title: 'Local-first and peer-capable',
    body: 'Data remains authoritative on user-controlled devices. Agent Mesh adds direct, off-grid and delay-tolerant paths without changing entity or action semantics.',
    cite: 'AOS-ARCH-024',
  },
  {
    n: '05',
    title: 'Agents on a capability model',
    body: 'Agents extract, link, propose interfaces and invoke typed actions only through explicit grants, previews, budgets and receipts.',
    cite: 'AOS-ARCH-010',
  },
  {
    n: '06',
    title: 'Config ↔ GUI ↔ API mirroring',
    body: 'Anything exposed graphically is represented through inspectable schemas and actions so CLI, TUI, scripts, settings, micro-apps and agents stay aligned.',
    cite: 'ARCH-022',
  },
];

export interface Differentiator {
  title: string;
  body: string;
  cite: string;
}

export const differentiators: Differentiator[] = [
  {
    title: 'A system-wide entity graph, not app silos',
    body: 'Data ownership moves from the app to a shared, provenance-carrying graph the whole system can query. Views and providers are replaceable.',
    cite: 'AOS-ARCH-009',
  },
  {
    title: 'Text-to-micro-apps instead of fixed feature gates',
    body: 'When data and typed actions exist, the user can compose the missing safe interface rather than waiting for a platform vendor to expose one widget shape.',
    cite: 'AOS-PROD-018',
  },
  {
    title: 'Peer delivery is a system capability',
    body: 'One signed envelope can move over direct IP, Bluetooth, LoRa, gateways or delayed relays while retaining one identity, receipt and policy model.',
    cite: 'AOS-ARCH-024',
  },
  {
    title: 'A five-rung agent trust ladder with no unlogged action',
    body: 'Authority climbs from observation to bounded autonomy. Every effect records interpretation, capabilities, data, destination, cost and result.',
    cite: 'AOS-ARCH-010',
  },
  {
    title: 'Object-capabilities as the base layer',
    body: 'Authority is absent unless granted. A radio-less mode has no radio capability; a micro-app cannot silently acquire sockets or private health data.',
    cite: 'AOS-ARCH-004',
  },
  {
    title: 'Offline-completeness as an invariant',
    body: 'Entities, actions, history, micro-apps and capture remain correct with zero connectivity. Remote compute and gateways are optional accelerators or transports.',
    cite: 'AOS-PROD-013',
  },
];

export interface Audience {
  n: string;
  role: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}

export const audiences: Audience[] = [
  {
    n: '01',
    role: 'Build the OS',
    title: 'Engineers on Agent OS',
    body: 'Kernel and platform work, entity services, micro-app runtime, Agent Mesh, capability security, hardware tracks and an evidence-gated engineering bible.',
    cta: 'How it works',
    href: '/how-it-works',
  },
  {
    n: '02',
    role: 'Build on it',
    title: 'Third-party developers',
    body: 'Publish typed data, actions, components and transport providers that the system can compose contextually instead of shipping another opaque monolith.',
    cta: 'Read the platform',
    href: '/developers',
  },
  {
    n: '03',
    role: 'Back the thesis',
    title: 'Investors',
    body: 'A differentiated product model, open ecosystem, staged hardware strategy and explicit evidence gates across software, connectivity and devices.',
    cta: 'See the case',
    href: '/investors',
  },
  {
    n: '04',
    role: 'Use it first',
    title: 'Makers & early users',
    body: 'Inspectable agents, generated single-purpose interfaces, durable work, direct peer exchange, off-grid communication and privacy you can verify.',
    cta: 'What you get',
    href: '/makers',
  },
];

export interface ProofPoint {
  stat: string;
  label: string;
  body: string;
}

export const proofPoints: ProofPoint[] = [
  {
    stat: 'APP-LAST',
    label: 'system object model',
    body: 'Durable work and life entities remain primary while applications become replaceable providers and views.',
  },
  {
    stat: 'ONE',
    label: 'typed action model',
    body: 'UI, CLI, scripts, agents and micro-apps invoke the same operations with the same capability and receipt rules.',
  },
  {
    stat: 'MESH',
    label: 'transport-neutral delivery',
    body: 'Direct, off-grid, gateway and delayed paths share one envelope, identity and policy model.',
  },
  {
    stat: 'LOCAL',
    label: 'authority by default',
    body: 'User-controlled state remains primary; remote providers receive bounded and inspectable inputs.',
  },
];

export interface Track {
  id: string;
  name: string;
  tagline: string;
  body: string;
  milestones: string[];
  blocked: string;
}

export const tracks: Track[] = [
  {
    id: 'A',
    name: 'Track A — Product and platform',
    tagline: 'Buildable in simulation before custom hardware.',
    body: 'Entity services, action providers, history, micro-app runtime, agent safety, Agent Mesh simulation and mock hardware providers can progress independently of a production phone.',
    milestones: [
      'A1 · Platform bootstrap and isolated components',
      'A2 · Entity Store, actions and history',
      'A3 · Micro-app reference runtime',
      'A4 · Agent Mesh simulator and providers',
      'A5 · Integrations, conformance and ecosystem',
    ],
    blocked: 'No production hardware dependency for the reference model.',
  },
  {
    id: 'B',
    name: 'Track B — Hardware',
    tagline: 'Measured through documented targets and staged accessories.',
    body: 'Real-device bring-up, graphics, telephony, camera, power, low-power radio accessories and later integrated hardware proceed through explicit evidence gates.',
    milestones: [
      'B1 · Documented-board bring-up',
      'B2 · Display, input, storage and networking',
      'B3 · Telephony and camera evidence',
      'B4 · Agent Mesh accessory and fixed relays',
      'B5 · Future integrated device gate',
    ],
    blocked: 'Documentation, boot control, firmware provenance, certification and supply continuity.',
  },
];

export const statusRows = [
  { item: 'Engineering bible and in-portal document viewer', state: 'today' },
  { item: 'Task graph and evidence registers', state: 'today' },
  { item: 'APP-LAST product and capability model', state: 'designed' },
  { item: 'Text-to-Micro-App builder and runtime', state: 'designed' },
  { item: 'Agent Mesh, LoRa accessory and DTN programme', state: 'designed' },
  { item: 'Reference platform and first isolated process', state: 'next' },
  { item: 'Entity Store, actions, history and first agents', state: 'planned' },
  { item: 'Real-device and integrated-radio bring-up', state: 'planned' },
] as const;

// Kept for components that consume the legacy content export. Header uses data/navigation.ts.
export const navLinks = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Micro-apps', href: '/micro-apps' },
  { label: 'Agent Mesh', href: '/mesh' },
  { label: 'Compare', href: '/compare' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Engineering bible', href: '/engineering' },
];

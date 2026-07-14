// Central content model for the Agent OS site. Grounded in the engineering bible:
// AgentOS.md (six pillars, two tracks), AOS-RES-013 (differentiators), AOS-BRIEF.md,
// and the existing portal copy drafts (landing.js / audiences.js).
// Name spelling is "Agent OS" everywhere. Positioning sentence is fixed below.

export const brand = {
  name: 'Agent OS',
  positioning: 'Your work is the interface — not a grid of apps.',
  descriptor: 'App-last. Local-first. Agent-native.',
  lede:
    'Agent OS treats documents, tasks, projects, people, places and events as durable system objects. Apps become replaceable providers and views. One typed action model, a global semantic history, and capability-secured agents connect the whole system — without trapping you inside application silos.',
  substrate:
    'A fork of Fuchsia / Zircon — Zircon, DFv2, FIDL, Magma and Starnix consumed as-is — with a Rust-first entity-and-agent product layer written on top.',
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
    body: 'A typed graph of people, projects, tasks, documents, events and devices — typed edges carry source and confidence. UI is assembled around your current work, not an icon grid.',
    cite: 'AOS-ARCH-009',
  },
  {
    n: '02',
    title: 'Global history with undo',
    body: 'Browser history for the whole OS: an append-only semantic event log of navigation, documents, actions and agent activity. Search, replay, and roll back where it is safe.',
    cite: 'AOS-ARCH-009',
  },
  {
    n: '03',
    title: 'Local-first, CRDT, 100% backup',
    body: 'Data lives on the device; sync uses off-the-shelf CRDTs; the cloud is transport and backup. A new phone resumes exactly where you left off — including an unsaved document.',
    cite: 'AOS-ARCH-009',
  },
  {
    n: '04',
    title: 'Agents on a capability model',
    body: 'Background agents extract entities, dedupe, link and propose actions. Every agent holds only the handles it was granted — no ambient authority. The feature and the security model are one.',
    cite: 'AOS-ARCH-010',
  },
  {
    n: '05',
    title: 'Object-capability security',
    body: 'Authority is an unforgeable object reference carrying explicit rights. Delegation may attenuate but never amplify. No global root; least privilege enforced by absence, not a toggle.',
    cite: 'AOS-ARCH-004',
  },
  {
    n: '06',
    title: '100% mirroring, config ↔ GUI',
    body: 'Anything you can do with a mouse you can do from a config file or a script — Config ↔ CLI/TUI ↔ API ↔ Settings ↔ GUI stay in lock-step. Every menu is editable.',
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
    body: 'Data ownership moves from the app to a shared, provenance-carrying graph the whole system can query. Neither iOS nor Android has this — their objects live inside the owning app.',
    cite: 'AOS-ARCH-009',
  },
  {
    title: 'A 5-rung agent trust ladder + no unlogged action',
    body: 'Authority climbs from observation → proposal → reversible execution → confirmed sensitive execution → bounded autonomy. Every action is inspectable after the fact: utterance, interpretation, capabilities used, data touched, receipt.',
    cite: 'AOS-ARCH-010',
  },
  {
    title: 'Object-capabilities as the base layer',
    body: 'Not a permission overlay on POSIX. A radio-less mode holds no radio capability, so "no radios" is a fact of the capability graph — absent, not merely disabled.',
    cite: 'ARCH-022',
  },
  {
    title: 'First-class global history with undo',
    body: 'Every effectful action lands as a receipt with an undo path; irreversible actions demand explicit confirmation. iOS and Android have only per-app history and per-app undo.',
    cite: 'AOS-PROD-015',
  },
  {
    title: 'Offline-completeness as an invariant',
    body: 'Entities, actions, history and capture all work with zero connectivity. Compute offload is a reversible accelerator, never a dependency: server-down is indistinguishable from offline in correctness — only latency and battery differ.',
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
    body: 'The kernel fork, driver framework, layer manifests, the capability model, the demo-brick hardware, and a 157-document engineering bible with evidence gates.',
    cta: 'How it works',
    href: '/how-it-works',
  },
  {
    n: '02',
    role: 'Build on it',
    title: 'Third-party developers',
    body: 'The entity/action contract, capability-scoped agents, typed actions with receipts, and how native clients reach services lawfully — the surface you build against.',
    cta: 'Read the platform',
    href: '/developers',
  },
  {
    n: '03',
    role: 'Back the thesis',
    title: 'Investors',
    body: 'The wedge, the two-track strategy that de-risks hardware, the subscription-compute model, honest ceilings, and what evidence exists today versus what is planned.',
    cta: 'See the case',
    href: '/investors',
  },
  {
    n: '04',
    role: 'Use it first',
    title: 'Makers & early users',
    body: 'What the phone actually does: a voice agent you can inspect, instant single-purpose modes, days of standby, and privacy you can verify — not a slogan.',
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
    stat: '157',
    label: 'engineering documents',
    body: 'Architecture, product, research, hardware, legal and planning — cross-linked, versioned, with stable AOS-* identifiers.',
  },
  {
    stat: '327',
    label: 'planned work items',
    body: 'A task graph across nine phases with acceptance criteria, dependencies and linked specifications — not a wishlist.',
  },
  {
    stat: '12',
    label: 'cited comparison axes',
    body: 'Every iOS/Android claim cites a vendor security/developer document; every Agent OS claim cites an internal spec.',
  },
  {
    stat: '2',
    label: 'de-risking tracks',
    body: 'The product runs in emulation today; a pre-certified "demo brick" carries the OS on real radios years before a custom device.',
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
    name: 'Track A — Product',
    tagline: 'In emulation now. Blocked by nothing.',
    body: 'All of the product layer (L6) runs in the emulator, with mock camera / modem / sensors behind the same FIDL contracts as real hardware. Zero hardware blockers.',
    milestones: [
      'A1 · Fork + FEMU bootstrap',
      'A2 · Shell / compositor (Scenic / Flatland)',
      'A3 · Entity Store + first agents',
      'A4 · History + local-first + CRDT',
      'A5 · Integrations + interop',
    ],
    blocked: 'Nothing.',
  },
  {
    id: 'B',
    name: 'Track B — Hardware',
    tagline: 'Multi-year. Harder than Asahi.',
    body: 'Real-device bring-up: board drivers, GPU/Magma, telephony over the modem, camera pipeline. A failed path is grounds for the next; failure of every path is not planned for. Voice/data/SMS is a must-have.',
    milestones: [
      'B1 · Board bring-up + boot',
      'B2 · GPU / Magma',
      'B3 · Display / touch / audio / power',
      'B4 · Telephony (data → SMS → voice/IMS)',
      'B5 · Camera pipeline + tuning',
    ],
    blocked: 'Bootloader, SoC docs, modem command set — de-risked by starting on a documented board.',
  },
];

// Honest "works today vs planned" framing.
export const statusRows = [
  { item: 'Fuchsia/Zircon fork decision + ADRs', state: 'decided' },
  { item: 'Engineering bible (157 docs, evidence-gated)', state: 'today' },
  { item: 'Task graph (327 items across 9 phases)', state: 'today' },
  { item: 'Host simulator — Pixel 9 form factor (Rust)', state: 'today' },
  { item: 'FEMU bootstrap + first isolated process', state: 'next' },
  { item: 'Entity Store + first agents + history', state: 'planned' },
  { item: 'Real-device bring-up (Track B)', state: 'planned' },
  { item: 'First-party identity / accounts', state: 'gap' },
  { item: 'End-user developer distribution', state: 'gap' },
] as const;

export const navLinks = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Compare', href: '/compare' },
  { label: 'Developers', href: '/developers' },
  { label: 'Investors', href: '/investors' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Engineering bible', href: '/engineering' },
];

// Cited comparison projection. iOS/Android references map to AOS-RES-013;
// Agent OS targets map to canonical engineering specifications.

export interface CompareDimension {
  key: string;
  label: string;
  ios: string;
  android: string;
  agentos: string;
}

export const compareBaseline = '2026-07-16';
export const compareSource = 'AOS-RES-013';

export const compareDimensions: CompareDimension[] = [
  {
    key: 'object-model',
    label: 'System object model',
    ios: 'App-siloed; system-visible through selected App Entities [1]',
    android: 'App-siloed; ContentProviders, Intents and App Actions [15][16]',
    agentos: 'System-wide durable entity graph with provenance and shared identity [AOS-ARCH-009]',
  },
  {
    key: 'action-apis',
    label: 'Action / intent APIs',
    ios: 'App Intents expose developer-selected typed operations [1]',
    android: 'Intents + App Actions / AppFunctions expose developer-selected operations [14][16]',
    agentos: 'Typed action providers, common executor, receipts and compensation across every caller [AOS-ARCH-010]',
  },
  {
    key: 'interface-composition',
    label: 'User-composed interfaces',
    ios: 'Widgets, Shortcuts and App Intents remain bounded by app-exposed surfaces and actions [1][3]',
    android: 'Widgets, shortcuts, intents and AppFunctions remain bounded by app-provided contracts [14][16]',
    agentos: 'Text/block/source builder composes signed micro-apps across AI, documents, notifications, widgets and focused modes [AOS-PROD-018][AOS-ARCH-026]',
  },
  {
    key: 'agent-authority',
    label: 'Agent authority model',
    ios: 'Apple Intelligence reaches app functions through App Intents; per-intent authority [7][8]',
    android: 'Gemini reaches app functions through AppFunctions; OS-mediated [16][17]',
    agentos: 'Five-rung trust ladder, explicit capabilities, budgets, previews and effect receipts [AOS-ARCH-010]',
  },
  {
    key: 'global-history',
    label: 'Global history / provenance',
    ios: 'Per-app history; no documented system-wide semantic effect log (inference) [4]',
    android: 'Per-app history; no documented system-wide semantic effect log (inference) [15]',
    agentos: 'Append-only semantic event log with provider, agent, delivery and compensation receipts [AOS-ARCH-009]',
  },
  {
    key: 'sandbox-caps',
    label: 'Sandboxing / capabilities',
    ios: 'App Sandbox, signed entitlements and TCC [4][5]',
    android: 'Per-UID sandbox, SELinux and runtime permissions [20][21]',
    agentos: 'Object-capabilities; authority absent unless granted; micro-app and agent quotas [AOS-ARCH-004][AOS-ARCH-026]',
  },
  {
    key: 'peer-connectivity',
    label: 'Peer / off-grid connectivity',
    ios: 'AirDrop and peer features exist inside Apple-defined workflows; no general DTN object layer [9][27]',
    android: 'Quick Share and nearby APIs exist; no general system object/receipt layer across constrained transports [26]',
    agentos: 'One encrypted envelope and receipt model over local IP, Wi-Fi Direct, BLE, LoRa, gateways and delayed relay [AOS-ARCH-024]',
  },
  {
    key: 'update-model',
    label: 'Update model',
    ios: 'Signed System Volume and sealed platform image [6]',
    android: 'A/B seamless updates and Project Mainline modules [18][19]',
    agentos: 'Verified compatibility set with package provenance, rollback and recovery [AOS-ARCH-013]',
  },
  {
    key: 'privacy',
    label: 'Privacy posture',
    ios: 'On-device processing, Private Cloud Compute and TCC/ATT [7][8]',
    android: 'Private Compute Core and Privacy Dashboard [22]',
    agentos: 'Local authority, field-level capability grants, declared destinations and journal exclusion [AOS-PROD-013][AOS-ARCH-012]',
  },
  {
    key: 'offline',
    label: 'Offline behaviour',
    ios: 'Per-app; cloud-dependent capabilities vary by feature [4][7]',
    android: 'Per-app; cloud-dependent capabilities vary by feature [15]',
    agentos: 'Offline correctness for entities, actions, history and micro-apps; Mesh adds delayed peer paths [AOS-ARCH-009][AOS-ARCH-024]',
  },
  {
    key: 'extensibility',
    label: 'Extensibility',
    ios: 'App Extensions and App Intents; core semantics remain platform-controlled [1][3]',
    android: 'Intents, providers, App Actions and services; app package remains primary unit [14][15][16]',
    agentos: 'Providers publish data, actions, components and transports; portable semantics remain provider-independent [AOS-PROD-003][AOS-ARCH-005]',
  },
  {
    key: 'interop',
    label: 'Interop / cross-device',
    ios: 'Closed native runtime with Continuity and AirDrop [9][27]',
    android: 'Open runtime with Quick Share and vendor ecosystems [26]',
    agentos: 'Encrypted sync, shareable micro-app manifests and transport-neutral peer bundles [AOS-ARCH-009][AOS-ARCH-024]',
  },
  {
    key: 'identity',
    label: 'Identity / accounts',
    ios: 'Apple Account, Sign in with Apple, iCloud and passkeys [10][11]',
    android: 'Google Account, Credential Manager and passkeys [24][25]',
    agentos: 'Global Account with local-first user authority and opaque per-provider identities [AOS-PROD-014]',
  },
  {
    key: 'distribution',
    label: 'Developer distribution',
    ios: 'App Store and notarization; EU alternative marketplaces under DMA [12][13]',
    android: 'Play, sideloading and developer verification requirements [23]',
    agentos: 'Signed providers and micro-app packages discovered by capability and context, not a mandatory monolithic-app funnel [AOS-PROD-003][AOS-ARCH-026]',
  },
];

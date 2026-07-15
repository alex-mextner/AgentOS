// Source of truth: engineering-bible/docs/research/AOS-RES-013-os-comparison-matrix.md
// (the #compare machine-readable block). Baseline 2026-07-13. Terse portal cell text.
// Citations in brackets map to that document's numbered references / internal AOS-* docs.

export interface CompareDimension {
  key: string;
  label: string;
  ios: string;
  android: string;
  agentos: string;
}

export const compareBaseline = '2026-07-13';
export const compareSource = 'AOS-RES-013';

export const compareDimensions: CompareDimension[] = [
  {
    key: 'object-model',
    label: 'System object model',
    ios: 'App-siloed; system-visible only as App Entities [1]',
    android: 'App-siloed; ContentProviders + App Actions [15][16]',
    agentos: 'System-wide entity graph with provenance [AOS-ARCH-009]',
  },
  {
    key: 'action-apis',
    label: 'Action / intent APIs',
    ios: 'App Intents (typed Swift intents) [1]',
    android: 'Intents + App Actions / AppFunctions [14][16]',
    agentos: 'Typed action providers + executor + IntentBox [AOS-ARCH-010]',
  },
  {
    key: 'agent-authority',
    label: 'Agent authority model',
    ios: 'Apple Intelligence via App Intents; per-intent [7][8]',
    android: 'Gemini via AppFunctions; OS-mediated [16][17]',
    agentos: '5-rung trust ladder; capability grants; no ambient control [AOS-ARCH-010]',
  },
  {
    key: 'global-history',
    label: 'Global history / provenance',
    ios: 'Per-app only; no system-wide history (inference) [4]',
    android: 'Per-app only; no system-wide history (inference) [15]',
    agentos: 'Append-only semantic event log + undo receipts [AOS-ARCH-009]',
  },
  {
    key: 'sandbox-caps',
    label: 'Sandboxing / capabilities',
    ios: 'App Sandbox + signed entitlements + TCC [4][5]',
    android: 'Per-UID + SELinux + runtime permissions [20][21]',
    agentos: 'Object-capabilities; no ambient authority; least-priv by absence [AOS-ARCH-004][ARCH-022]',
  },
  {
    key: 'update-model',
    label: 'Update model',
    ios: 'Signed System Volume; monolithic sealed image [6]',
    android: 'A/B seamless updates + Project Mainline modules [18][19]',
    agentos: 'Atomic compatibility set; verified boot + recovery [AOS-ARCH-013]',
  },
  {
    key: 'privacy',
    label: 'Privacy posture',
    ios: 'On-device + Private Cloud Compute; TCC/ATT [7][8]',
    android: 'Private Compute Core (no INTERNET) + Privacy Dashboard [22]',
    agentos: 'Local-first; never-offload classes; provable journal exclusion [AOS-PROD-013][AOS-ARCH-012]',
  },
  {
    key: 'offline',
    label: 'Offline behaviour',
    ios: 'Per-app; feature-gated cloud dependency [4][7]',
    android: 'Per-app; feature-gated cloud dependency [15]',
    agentos: 'Offline-complete invariant; offload is reversible accelerator [AOS-PROD-013]',
  },
  {
    key: 'extensibility',
    label: 'Extensibility',
    ios: 'App Extensions + App Intents; no core replacement [1][3]',
    android: 'Intents/Providers/App Actions; accessibility hooks [14][15][16]',
    agentos: 'Contract-first IDL + capability-scoped layers; foreign types at adapters [AOS-ARCH-005][ARCH-022]',
  },
  {
    key: 'interop',
    label: 'Interop / cross-device',
    ios: 'Closed native runtime; Continuity/AirDrop [9][27]',
    android: 'Open runtime; Quick Share [26]',
    agentos: 'No inherited legacy runtime; two-floor app model; encrypted sync [AOS-ARCH-011][AOS-PROD-014]',
  },
  {
    key: 'identity',
    label: 'Identity / accounts',
    ios: 'Apple ID + Sign in with Apple + iCloud passkeys [10][11]',
    android: 'Google account + Credential Manager + passkeys [24][25]',
    agentos: 'Global Account: one system-wide identity across web + native; local-first data, opaque per-vendor UUID, built-in payments [AOS-PROD-014]',
  },
  {
    key: 'distribution',
    label: 'Developer distribution',
    ios: 'App Store + notarization; EU alt-marketplaces under DMA [12][13]',
    android: 'Play + sideload; 2026 developer verification mandate [23]',
    agentos: 'No App Store: context-composed micro-apps; tree-shaken capabilities; no API lock-in [AOS-ARCH-011][AOS-PROD-014]',
  },
];

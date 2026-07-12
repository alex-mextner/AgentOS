# Contributing

## Workflow

1. Search existing Issues and specifications.
2. Create or select a bounded task with explicit acceptance evidence.
3. Make changes on a feature branch.
4. Open a pull request linking the task and normative documents.
5. Resolve validation, review, licensing, and evidence requirements before merge.

## Design changes

Changes to kernel boundaries, native IDL, security policy, hardware strategy, compatibility policy, update architecture, or data ownership require an ADR or RFC before implementation.

## Documentation

Use English for normative and agent-facing documents. Give every canonical record a stable `AOS-*` identifier and durable anchors. Distinguish verified facts, engineering inferences, hypotheses, and open questions.

## Code

Rust is the primary systems language. Unsafe Rust requires a local safety justification and focused tests. Platform-specific code must remain behind architecture, board, or device-service interfaces.

## Provenance

Do not commit proprietary firmware, confidential specifications, extracted vendor code, copyrighted publications, personal data, or artifacts with unclear redistribution rights. Link lawful public sources or record restricted evidence without redistributing it.

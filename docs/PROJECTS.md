# GitHub Projects operating model

GitHub Issues are canonical work records. GitHub Projects provides portfolio fields and views; the Vercel Gantt is a projection of those fields.

## Required fields

- Status
- Priority
- Type
- Phase
- Volume
- Hardware Track
- Start Date
- Target Date
- Estimate
- Risk
- Evidence Status
- Review Required
- Specification ID

## Views

- Current work — board grouped by Status
- Programme roadmap — roadmap grouped by Phase
- Hardware tracks — table grouped by Hardware Track
- Evidence gaps — filtered where Evidence Status is missing or rejected
- Critical work — critical priority or dependency blockers
- Documentation volumes — table grouped by Volume

## Automation boundary

Repository Actions may add Issues, normalize labels, validate metadata, and export derived JSON. Project mutations requiring organization-level permissions should use a dedicated GitHub App rather than broad personal tokens.

<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

## What
A native `async/await` client to the Linear GraphQL API: list tickets (mine/teams/projects), details, statuses, labels. Behind a protocol, read-only for the MVP (two-way sync is an open question, SPEC §8).

## Acceptance
- Auth from `~/.config/linear/credentials.toml` or entered in Settings
- List tickets by team/project, filter by status
- Ticket details (description, status, assignee, labels)
- Data cached locally for offline
- Unit tests with mocks

## Why
SPEC §2.2: Linear support — download/offline-view tickets.

## Impact
Tickets visible offline next to code; a unified inbox.

## If not done
The Linear part of the MVP is missing; tickets are only online in the Linear app.

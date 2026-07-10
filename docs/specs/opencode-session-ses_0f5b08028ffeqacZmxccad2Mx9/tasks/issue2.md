<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

## What
Implement a native `async/await` client to GitHub REST+GraphQL in `mobile/`: OAuth/token auth, repo list, file tree, file contents, PRs (list/details/diff/files), issues, commits. Behind the `RepositorySource` protocol, testable with mocks.

## Acceptance
- Auth: PAT/OAuth token stored in Keychain
- List user/org repositories (paginated)
- File tree + reading file contents by sha
- PR: list, details, changed files, diff
- Issues (list/details) and commits (history)
- Client covered by unit tests with mocks

## Why
SPEC §2.2/§2.4: GitHub is source #1 for the MVP; backend-swappable abstraction.

## Impact
Provides data to the entire mobile UI; basis for offline viewing.

## If not done
UI has no data source; viewing code/PRs is impossible.

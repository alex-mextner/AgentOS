<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

# TestFlight pipeline

The `<session-dir>/.github/workflows/testflight.yml` workflow builds a signed iOS
`.ipa` and uploads it to App Store Connect (TestFlight) on tag pushes (`v*`) and via
manual dispatch.

Unlike the **Simulator `.app`** (unsigned, no Apple account needed — see the `release`
workflow), TestFlight requires real code signing and an Apple Developer account. That
material can only be provisioned by a human, so the job is **gated** on the repo variable
`ENABLE_TESTFLIGHT == 'true'` — it stays skipped until you add the secrets, so the repo
stays green.

## One-time Apple setup

1. **Apple Developer Program** — a paid membership ($99/yr), `<apple-developer-account-email>`.
2. **Bundle ID** — register `ai.hypergit.mobile` (App IDs) with App Store / Push
   capabilities as needed.
3. **App Store Connect app** — create an App under “My Apps” with bundle ID
   `ai.hypergit.mobile`.
4. **Distribution certificate** — App Store distribution (not Development) `.cer`; export
   the private key + cert as a `.p12` with a password.
5. **Provisioning profile** — an **App Store** distribution profile for
   `ai.hypergit.mobile` bound to the distribution certificate. Note its **UUID** and its
   **Name**.
6. **App Store Connect API key** — Users and Access → Keys → “App Manager” or “Admin”;
   download the `.p8`. Note **Key ID** and **Issuer ID**.

## Repository secrets to add (Settings → Secrets and variables → Actions → New secret)

| Secret | Value |
|---|---|
| `APPLE_TEAM_ID` | Your Apple Developer Team ID (e.g. `ABCDE12345`) |
| `BUILD_CERTIFICATE_BASE64` | Base64 of the distribution `.p12` (`base64 -i dist.p12`) |
| `BUILD_CERTIFICATE_P12_PASSWORD` | Password of the `.p12` |
| `PROVISIONING_PROFILE_BASE64` | Base64 of the `.mobileprovision` |
| `PROVISIONING_PROFILE_UUID` | The profile UUID (used as the install filename) |
| `PROVISIONING_PROFILE_NAME` | The profile Name (used in `ExportOptions.plist`) |
| `ASC_API_KEY_ID` | App Store Connect API Key ID |
| `ASC_API_KEY_ISSUER_ID` | App Store Connect Issuer ID |
| `ASC_API_KEY_PRIVATE_KEY` | Contents of the `AuthKey_<KEY_ID>.p8` file |

```sh
# macOS base64 helpers:
base64 -i dist.p12 | pbcopy            # BUILD_CERTIFICATE_BASE64
base64 -i HyperGit.mobileprovision | pbcopy   # PROVISIONING_PROFILE_BASE64
cat AuthKey_ABC1234567.p8 | pbcopy     # ASC_API_KEY_PRIVATE_KEY
```

## Enable the pipeline

Add a **repository variable** (Settings → Secrets and variables → Actions → *Variables*):

```
ENABLE_TESTFLIGHT = true
```

The job runs only while this is `true`. Remove it to disable uploads without deleting the
workflow.

## How it uploads

`xcrun altool --upload-app` (bundled with Xcode) with the App Store Connect API key — no
Ruby/fastlane dependency. Beta test details and “what to test” notes are configured in App
Store Connect (not via `altool`). Each tag push ships a new build number bump to
TestFlight.

> Build/version bumping: the workflow builds whatever `MARKETING_VERSION` /
> `CURRENT_PROJECT_VERSION` are in `mobile/project.yml`. Bump them per release so
> TestFlight accepts the new build.

## Notes / caveats

- `altool` is deprecated by Apple but remains the standard non-Ruby upload path on CI. If
  it is removed, switch the upload step to the App Store Connect API directly.
- Manual signing specifics (profile name resolution, keychain partition list) sometimes
  need a one-time tweak per account; the recipe above is the common, working baseline.

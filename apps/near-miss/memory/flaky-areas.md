# Flaky Areas: Near-Miss (NMMS)

## Current Status
Initial observations from 2026-03-21 exploration. Most flaky areas sourced from Slack -- need to verify via repeated testing.

## Observed Flaky Behavior

### Branding Inconsistency (Confirmed 2026-03-21)
- **Where**: /new-report (Report Incident page)
- **Behavior**: Outer app shows "ACME" branding but embedded chat iframe shows "INDORAMA" branding
- **Severity**: Low (cosmetic)
- **Reproduction**: Navigate to Report Incident page, observe header vs chat branding

### /reports?status=closed URL Redirect (Confirmed 2026-03-21)
- **Where**: /reports?status=closed
- **Behavior**: Navigating to /reports?status=closed redirects to /reports?status=active instead of showing "Done" reports
- **Severity**: Medium (broken deep link)
- **Reproduction**: Navigate directly to /reports?status=closed

### Investigations Page Shows Reports Data (Confirmed 2026-03-21)
- **Where**: /investigations
- **Behavior**: /investigations shows the same table and data as /reports?status=active
- **Severity**: Medium (unclear if this is by design or a routing issue)
- **Reproduction**: Navigate to /investigations as Admin

## Suspected Flaky Areas (From Slack, Unverified)

| Area | Issue | Reported By | Linear ID | Status |
|------|-------|-------------|-----------|--------|
| Login | 500 error during password setting | Slack | — | Unverified |
| Chat | AI chatbot not following question flow | Slack | NMS-71 | Unverified |
| Chat | Chat buttons sticking after click | Slack | — | Unverified |
| Reports | Status count mismatch across tabs | Slack | NMS-47 | Unverified |
| Reports | Report appearing in wrong department | Slack | — | Unverified |
| PDF | PDF generation fails or has formatting issues | Slack | — | Unverified |
| Mobile | App crashes on certain Android versions | Slack | — | Unverified |

## Update Rule
Add flaky observations with date and reproduction steps. Mark as "confirmed" when reproduced, "resolved" when fixed.

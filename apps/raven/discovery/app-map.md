# App Map

## Current Status
Populated from first live exploration on 2026-03-21. All primary navigation sections confirmed.

## User-Provided Truth
- The first high-priority workflows are authentication, Plant Knowledge Hub, Isolation Planning, and review or approval flows.
- Raven brochure material also references Incident Investigation as a product area.
- Environment: https://ifz.startraven.com
- Test account: SURYANSH-04

## Observed Application Structure

### Platform Identity
- Product: **Raven AI** by Indorama
- Branding: "INDORAMA" logo with "Powered by Raven" footer
- Tech stack: React SPA with Material-UI (MUI) component library
- Single-page application with client-side routing

### Top-Level Architecture
The application is **domain-scoped** — a mandatory domain selection modal appears after login. All content (search, P&IDs, documents) is filtered to the selected domain.

### Available Domains (IFZ Plant)
| Category | Domains |
|----------|---------|
| Standalone | HSEF, PHD |
| Ammonia | Train-1, Train-2 |
| FCU | Line-1F, Line-2F |
| Urea | Urea-1, Urea-2 |

### Primary Sections (Confirmed)
| Section | URL | Category | Status |
|---------|-----|----------|--------|
| Search (Knowledge Hub) | `/search` | AI Agent | Active, fully functional |
| P&ID | `/pid?tabId=<uuid>` | AI Agent | Active, domain-dependent data |
| Data Explorer | `/data/data-explorer` | Document Management | Active |
| Account Settings | `/account` | Settings | Active |
| Workplace Dashboard | `/workplace/dashboard` | Admin Analytics | Active |
| Saved Answers | `/saved` | User Feature | Active (empty state observed) |
| Answer Feedback | `/feedback` | Quality Management | Active (empty state observed) |
| All Sessions | `/search/all-sessions` (approx) | History | Active |

### NOT Found (As Separate Sections)
- Incident Investigation — not visible in navigation
- Review/Approval queue — no dedicated section; review happens inline on AI answers
- Admin panel — no separate admin area; Workplace Settings serves this role
- Notifications center — no dedicated notifications page
- Help/Support — link in Workplace Settings redirects to Search

## Assumptions Validated
- ~~Authentication and account access~~ — confirmed (two-step Employee ID + password)
- ~~Plant Knowledge Hub~~ — confirmed as "Search" (AI Agent)
- ~~Isolation Planning~~ — partially confirmed as "P&ID" (AI Agent), requires domain with P&ID files
- Incident Investigation — NOT found in current version
- ~~Review and approval flows~~ — no dedicated section; inline feedback on AI answers only

## Questions Answered
- **Post-login landing page**: `/search` with domain selection modal overlay
- **Global navigation structure**: Left sidebar with domain selector, AI Agents section, utility section
- **Route naming**: `/search`, `/pid`, `/data/data-explorer`, `/account`, `/workplace/dashboard`, `/saved`, `/feedback`
- **Deep-link behavior**: SPA routes all return 200; unrecognized routes redirect to app shell
- **Review and approval**: Not standalone pages — inline on AI answers (thumbs up/down, share, bookmark)

## Update Rule
Only move items from unknown to known after direct observation in the application.

# Discovery Map: App Map (Near-Miss)

## Current Status
Partially validated via automated exploration on 2026-03-21. All screens accessed via SELECT ROLE on staging.

## User-Provided Truth
- Production URL: https://nmms.startraven.com
- Staging URL: https://nmms.staging.startraven.com
- Mobile app available on Google Play Store (com.startraven.com)
- React SPA (web) + React Native (mobile)
- Backend: Python

## Observed Behavior (Confirmed 2026-03-21)

### Application Layout
- **Header**: Hamburger menu icon (top-left) + "ACME" logo (staging branding)
- **Side Navigation**: Always visible on left side, ~160px wide
- **Main Content**: Right of side nav, full remaining width
- **Footer in sidebar**: "Powered by [Raven logo]"
- **User section**: Bottom of sidebar, avatar initials + name + dropdown chevron

### Confirmed Application Sections

| Section | URL | Page Title | Description |
|---------|-----|-----------|-------------|
| Login | /login | NMMS Dashboard | Single input field for email/ID, NEXT button, SELECT ROLE link |
| Select Role | /select-role | NMMS Dashboard | 7 role options (staging only) |
| Report Incident | /new-report | Create Incident | Dark-themed chat iframe for AI incident reporting |
| Reports | /reports?status=active | Incident Reports | Table of all reports with status tabs and filters |
| Reports (Done) | /reports?status=active (redirects) | Incident Reports | Same page, "Done" tab selected |
| Reports (Rejected) | /reports?status=rejected&facet=all_reports | Incident Reports | Filtered to rejected reports |
| Investigations | /investigations | Investigations | DISTINCT page: NM/UC-UA tabs, In Progress/Released/Closed/All status, Classification column |
| Recommendations | /recommendations | Recommendations | Grouped by incident, with NM and UC/UA tabs |
| Analysis | /analysis | Analysis | Dashboard with summary cards, trend charts, filters |
| Profile | /profile | My Profile | User profile form (name, ID, email, dept, unit, gender) |
| Report Detail | /reports/:uuid?tab=incident | Varies | Full report detail with 5 numbered sections + right sidebar with status tracker |
| Recommendation Detail | /reports/:uuid?tab=recommendations | Varies | Incident details + CA implementation tracking + CLOSE REPORT button |
| Help and Support | TBD | TBD | Listed in sidebar but no dedicated URL found |
| Settings | Dropdown menu (not page) | — | Profile, Change Password, Switch to Dark Mode, Manage Users (ext), Sign Out |

### Data Volumes (Staging, 2026-03-21)
- Reports: Active (338), Done (223), Rejected (27), Draft (227), Total (821)
- Recommendations: Active (158), Done (60), Total (218)
- Analysis: 231 incidents reported, 121 closed (34% closure rate)

## Assumptions To Validate
- ~~Navigation structure matches what's described in Slack~~ **Confirmed** -- matches closely
- ~~Analysis is placed under Incidents menu~~ **Confirmed**
- HSEF Procedure Chatbot is integrated as second main menu item -- **Not found** in staging
- Admin portal is separate from user portal -- **Not found** in staging (no /admin URL)
- ~~Side navigation has expand/collapse behavior with hamburger icon~~ **Partially confirmed** -- hamburger icon exists but nav appears always expanded

## Questions To Answer During Exploration
- ~~What is the exact URL structure for each section?~~ **Answered above**
- ~~How does the side navigation behave (expanded vs collapsed)?~~ Always expanded in current observation
- Is the HSEF Procedure Chatbot accessible from the main app? -- **Not visible**
- What does the admin portal look like vs the user portal? -- **No admin portal observed**
- ~~Are there breadcrumbs, and do they work correctly?~~ No breadcrumbs observed in main navigation

## Related Workflows
- incident-reporting
- investigation
- recommendations
- analysis-dashboard
- authentication

## Update Rule
Keep this file focused on shared discovery context. Move workflow-specific findings into `apps/near-miss/learnings/` and selector-level details into `apps/near-miss/memory/selectors.md`.

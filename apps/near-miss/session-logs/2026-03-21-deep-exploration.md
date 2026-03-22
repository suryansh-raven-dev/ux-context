# Session Log: 2026-03-21 — NMMS Deep Exploration

## Objective
Deep-dive into individual report details, chat flow, filter/export menus, settings, investigations, and recommendation details across multiple roles. Goal: document every screen, button, and field to enable thorough testing.

## Environment
- URL: https://nmms.staging.startraven.com
- Login method: SELECT ROLE (staging bypass)
- Date: 2026-03-21
- Tool: Playwright headless Chromium (3 scripts run sequentially)

## Scripts Run
1. `explore_nmms.py` — Initial exploration: login, all nav pages, 7 roles
2. `deep_explore_nmms.py` — Filter/export, recommendations detail, analysis tabs, settings, chat
3. `explore_report_details.py` — Report detail pages, draft reports, investigations per role

## Major Discoveries

### 1. Report Detail Page — Role-Based Actions (Critical)
The report detail page (`/reports/:uuid?tab=incident`) is the most role-differentiated screen:

- **Safety Manager** gets **editable fields** (Short Description as textarea, Immediate Action as textarea, Department as dropdown) and **REJECT REPORT / SUBMIT** action buttons
- **Admin/Operator on Draft** get **DELETE REPORT / SUBMIT REPORT** buttons
- **All other roles** see read-only detail page with no action buttons

This confirms the workflow: Operator creates → Safety Manager reviews/edits/approves/rejects → HoD approves.

### 2. Investigations Page — Distinct from Reports
The Investigations page (`/investigations`) is a completely separate page, NOT a copy of Reports (correcting earlier observation):
- Has its own tabs: NEAR MISS INVESTIGATIONS | UC/UA INVESTIGATIONS
- Its own status tabs: In Progress (48) | Released (37) | Closed (8) | All (93)
- Different table columns: adds Classification column
- Different incident ID format: UNIT-1/2026/NM/XXXX or IPL/2026/NM/XXXX

### 3. Chat Interface — Two Variants Observed
The Report Incident page shows two different UIs across sessions:
- **Variant A**: Clean native page with heading "Report New Incident", chat input "Please tell us what happened...", attachment icon, microphone icon
- **Variant B**: Dark iframe with "Indorama Incident Reporting System" branding, ID input field, NEXT button

### 4. Settings Menu — Not a Page, It's a Dropdown
Settings is a dropdown menu from the sidebar (not a separate page):
- Profile
- Change Password
- Switch to Dark Mode
- Manage Users (external link)
- Sign Out

### 5. Filter Options Confirmed
Reports page FILTER dropdown shows 6 filter categories:
- Incident ID, Reported By, Reporter Type, Department, Status, Reported On

### 6. Export Options Confirmed
Analysis page EXPORT shows:
- Export as CSV (working)
- Export as PDF (Coming Soon — disabled)
- Export as Excel (Coming Soon — disabled)

### 7. Department List Confirmed (from Analysis filter)
10 departments: All Departments, Administration (typo: "Adminstration"), Ammonia 1, Ammonia 2, FCU, HSEF, Logistics, PE, PHD, PP

### 8. Recommendation Detail — Rich Page
Clicking VIEW ALL RECOMMENDATIONS navigates to the report page with recommendations tab:
- Shows Incident Details (ID, Date, Department, Location, Description)
- Shows Recommendation Implementation Details with individual CAs
- Each CA: ID, Status (Done/Pending), Assignee, Target Date, Completed Date, "View Details" link
- Right sidebar has Report/Investigation/Recommendations accordion
- CLOSE REPORT button at bottom

### 9. Status Tracker (Right Sidebar)
Every report detail page shows a status tracker in the right sidebar:
**Draft → Reported → Approved by Safety → Approved by Dept**
Current status is highlighted with a filled icon.

## New Issues Found
- CI-005: Investigations page is distinct (retraction of CI-003)
- CI-006: PDF/Excel export "Coming Soon" on Analysis
- CI-007: Report Incident page shows two different UIs
- CI-008: Typo "Adminstration" in department filter

## Files Updated
| File | Changes |
|------|---------|
| `product-summary.md` | Major rewrite with all confirmed screens, role-specific actions, report detail layout |
| `memory/selectors.md` | Added 40+ new selectors for report detail, investigations, settings, filters |
| `memory/known-issues.md` | Added CI-005 through CI-008, retracted CI-003 |
| `discovery/app-map.md` | Updated with confirmed investigation page distinction |
| `discovery/navigation-map.md` | Updated with investigations tabs |
| `discovery/role-map.md` | Updated with report detail role-based actions |

## Evidence
- Screenshots: `screenshots/deep-exploration/` (60+ files)
- Screenshots: `screenshots/report-details/` (70+ files)
- JSON reports: `screenshots/deep-exploration/deep_exploration_report.json`, `screenshots/report-details/report_details_report.json`

## Remaining Gaps
1. **Done report detail**: Could not click into "Done" tab reports (tab click worked but table row click failed) — needs manual verification
2. **Chat conversation flow**: Only captured initial chat screen, didn't complete a full incident reporting conversation
3. **Manage Users page**: External link — need to follow and document
4. **Change Password flow**: Need to test
5. **Dark Mode**: Need to test visual changes
6. **Individual recommendation "View Details"**: Need to click through to the CA detail page
7. **Investigation detail**: Need to click into a specific investigation from the Investigations list
8. **Rejected report detail**: Need to verify what actions are available on rejected reports

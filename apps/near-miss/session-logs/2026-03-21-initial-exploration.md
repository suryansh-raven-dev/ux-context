# Session Log: 2026-03-21 — NMMS Initial Exploration

## Objective
Systematically explore the NMMS staging application (nmms.staging.startraven.com) across all 7 available roles, documenting every screen, navigation item, UI element, and role-based difference.

## Environment
- URL: https://nmms.staging.startraven.com
- Login method: SELECT ROLE (staging-only bypass)
- Date: 2026-03-21
- Tool: Playwright headless Chromium (automated exploration script)

## Roles Explored

| # | Role | User Name | Department | Screens Found |
|---|------|-----------|------------|---------------|
| 1 | Admin | Manikandan | IFZ | 13 |
| 2 | Operator - PP | Asaimani chandrasekaran | PP | 12 |
| 3 | Safety Manager | Ravi Gupta | — | 13 |
| 4 | Head of Department - PP | P C Sharma | PP | 13 |
| 5 | Head of Department - PE | Mahendra Jain | PE | 13 |
| 6 | Head of Section - PP | Pradeep Pawar | PP | 13 |
| 7 | HSEF Ambassador - PP | Vikas Manker | PP | 13 |

## Key Findings

### Login Page (Confirmed)
- **URL**: /login
- **Branding**: "ACME" logo (staging uses ACME branding, not Indorama)
- **Title**: "Acme Incident Reporting System"
- **Input field**: "Email or Employee ID or Contractor ID" (single field, placeholder: "Enter your email or Employee ID or Contractor ID")
- **Buttons**: NEXT (disabled when field is empty), SELECT ROLE (link to /select-role)
- **No password field on initial screen** -- two-step flow (enter ID first, then password)
- **No "Forgot Password" link visible** on login page

### Select Role Page (Staging Only)
- **URL**: /select-role
- **Shows**: "Select Role" header with 7 clickable role options
- **Each option shows**: Role name + Department (e.g., "Operator - PP", "Head of Department - PE")
- **Role switching**: Available via profile menu at bottom-left of sidebar (SWITCH ROLE section)

### Application Layout (Confirmed)
- **Header**: Hamburger menu (top-left), "ACME" logo
- **Side Navigation** (left, always expanded):
  - `+ Report Incident` (link to /new-report)
  - `Incidents` (section header)
    - `Reports` (link to /reports)
    - `Investigations` (link to /investigations)
    - `Recommendations` (link to /recommendations)
    - `Analysis` (link to /analysis)
  - `Help and Support` (bottom section)
  - `Settings` (bottom section)
  - User avatar + name + dropdown (very bottom)
  - "Powered by [Raven logo]" (footer)

### Navigation Differences by Role

| Screen | Admin | Operator | Safety Mgr | HoD | HoS | HSEF |
|--------|-------|----------|------------|-----|-----|------|
| Report Incident | Yes | Yes | Yes | Yes | Yes | Yes |
| Reports | Yes | Yes | Yes | Yes | Yes | Yes |
| Investigations | Yes | **No** | Yes | Yes | Yes | Yes |
| Recommendations | Yes | Yes | Yes | Yes | Yes | Yes |
| Analysis | Yes | Yes* | Yes | Yes | Yes | Yes |
| Help and Support | Yes | Yes | Yes | Yes | Yes | Yes |
| Settings | Yes | Yes | Yes | Yes | Yes | Yes |

*Operator can access /analysis via direct URL but it's not in their side nav

**Key observation**: Operator role does NOT have "Investigations" in navigation. All other roles have the full navigation.

### Screen: Reports (/reports)
- **Page title**: "Incident Reports"
- **Status tabs**: Active (338), Done (223), Rejected (27), Draft (227), All (821)
- **Table columns**: Incident ID, Reported On, Summary, Department, Reported By, Status
- **Actions**: FILTER button, EXPORT button, Search Incident ID input
- **Pagination**: Rows per page dropdown (default 25), page navigation
- **Row click**: Navigates to individual report (right chevron `>`)
- **Report ID format**: REF/2026/XXXX
- **Statuses observed**: Reported, Approved by Safety, Done, Rejected

**Role differences in report counts**:
- Admin sees: Active (338), Done (223), Rejected (27), Draft (227), All (821)
- Operator sees: Active (235), Done (210), Rejected (18), Draft (154), All (623) — fewer reports (department-scoped)

### Screen: Report Incident (/new-report)
- **Page title**: "Create Incident"
- **Content**: Shows a dark-themed chat interface embedded in an iframe
- **Branding in chat**: Shows "INDORAMA" logo and "Indorama Incident Reporting System" (branding mismatch -- outer app shows ACME but chat shows Indorama)
- **Chat input**: "Email or Employee ID or Contractor ID" with NEXT button
- **No visible chatbot messages** initially -- appears to require authentication within the chat iframe

### Screen: Investigations (/investigations)
- **Appears to show the same Reports table** (same data as /reports?status=active)
- **Not a separate list** -- URL redirects or shares the reports view
- This needs deeper exploration by clicking into a specific report

### Screen: Recommendations (/recommendations)
- **Page title**: "Recommendations"
- **Top tabs**: NEAR MISS RECOMMENDATIONS | UC/UA RECOMMENDATIONS
- **Status tabs**: Active (158), Done (60), All (218)
- **Actions**: FILTER button, EXPORT button
- **Table structure**: Grouped by Incident ID, each showing:
  - Incident ID (e.g., UNIT-1/2026/NM/0001)
  - Incident summary
  - "VIEW ALL RECOMMENDATIONS (N) >" link
  - Sub-table: Recommendation ID (CA-XXX), Plant, Recommendation text, Target Date, Status
- **Statuses observed**: Pending
- **UC/UA tab**: Shows UC/UA-specific recommendations (same layout)

### Screen: Analysis (/analysis)
- **Page title**: "Analysis"
- **Top tabs**: ALL INCIDENTS | NEAR MISS | UNSAFE CONDITIONS | UNSAFE ACTS
- **Filters**: Department dropdown ("All Departments"), Date range ("Year to Date" with calendar icon)
- **Export**: EXPORT button with dropdown
- **Report Summary section** (3 cards):
  - INCIDENTS: 231 Reported, 121 Closed, 34% Closure Rate, 6 Depts, Top: PP (208), -78% vs Feb
  - INVESTIGATIONS: 103 Reported, 23 Closed, 18% Closure Rate, 3 Depts, Top: PP (85), -81% vs Feb
  - RECOMMENDATIONS: 86 Open, 21 Closed, 20% Closure Rate, 3 Depts, Top: PP (73), -67% vs Feb
- **Incident Analysis section**:
  - Incident Trend chart (line chart: Reported vs Closed, Jan-Mar 2026)
  - Resolution Rate chart (line chart: Monthly resolution rate %, Jan-Mar 2026)

### Screen: Profile (/profile)
- **Page title**: "My Profile"
- **Form fields**: Name*, Employee ID, Email, Employee Type, Unit* (dropdown), Departments* (dropdown), Gender* (dropdown)
- **Buttons**: CANCEL, SAVE PROFILE
- **Admin profile**: Manikandan, ADMIN123, manikandan@indorama.com, IFZ, PP, Male
- **Refresh button**: Top-right corner

### Screen: Help and Support
- Not captured as a separate URL -- appears to be a link/modal

### Screen: Settings
- Not captured as a separate URL -- appears to be a link/modal

### Profile Menu / Role Switch
- **Location**: Bottom-left of sidebar, shows user avatar + name + dropdown chevron
- **On click**: Shows "SWITCH ROLE" section with all 7 role options
- **Each option**: Avatar initials + Full name + Role title
- **This is staging-only** role-switching capability

## Observations & Issues Found

### Confirmed Issues
1. **Branding mismatch**: Outer app shows "ACME" branding but the Report Incident chat iframe shows "INDORAMA" logo and "Indorama Incident Reporting System"
2. **Investigations page shows same data as Reports**: Navigating to /investigations shows the same Reports table rather than a dedicated investigations list
3. **Reports /reports?status=closed redirects to /reports?status=active**: Clicking "Done" tab may not produce a unique URL

### Observations
1. The Report Incident page embeds a dark-themed chat interface that appears to require separate authentication
2. All roles see essentially the same UI except Operator, which lacks the Investigations nav item
3. Report counts differ by role, confirming department-scoping is working
4. The SWITCH ROLE feature in staging allows quick role changes without logout
5. Analysis dashboard has meaningful data with trend charts

## Evidence
- Screenshots: `apps/near-miss/screenshots/exploration/`
- JSON report: `apps/near-miss/screenshots/exploration/exploration_report.json`
- Script: `apps/near-miss/scripts/explore_nmms.py`

## Next Steps
1. Explore individual report detail pages (click into a specific report)
2. Test the Report Incident chat flow end-to-end
3. Verify the admin portal and user management (may need /admin URL)
4. Test the FILTER and EXPORT functionality on each page
5. Test Settings and Help and Support pages
6. Explore the Recommendations detail view (click VIEW ALL RECOMMENDATIONS)
7. Test with production credentials (raven-admin) for admin-specific features

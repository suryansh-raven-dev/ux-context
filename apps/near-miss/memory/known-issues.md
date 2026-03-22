# Known Issues: Near-Miss (NMMS)

## Current Status
Consolidated from Slack channel analysis and 2026-03-21 automated exploration. Issues from Slack are marked "Slack-sourced" until independently verified.

---

## Confirmed Issues (Observed 2026-03-21)

### CI-001: Branding mismatch between app shell and chat iframe
- **Severity**: Low
- **Category**: UI
- **Where**: /new-report
- **Description**: Outer application shows "ACME" branding (staging), but the embedded Report Incident chat shows "INDORAMA" logo and "Indorama Incident Reporting System"
- **Expected**: Consistent branding throughout
- **Status**: Open
- **Confirmed**: 2026-03-21

### CI-002: /reports?status=closed redirects to active reports
- **Severity**: Medium
- **Category**: Routing
- **Where**: /reports?status=closed
- **Description**: Navigating to /reports?status=closed redirects to /reports?status=active instead of showing the "Done" tab
- **Expected**: Should show Done/Closed reports
- **Status**: Open
- **Confirmed**: 2026-03-21

### CI-003: /investigations shows same data as /reports
- **Severity**: Medium
- **Category**: Routing / Feature
- **Where**: /investigations
- **Description**: The Investigations page displays the same table as the Reports page (Incident Reports, Active tab) instead of a distinct investigations view
- **Expected**: Should show investigation-specific data or at least filter to reports with active investigations
- **Status**: Open / Needs clarification (may be by design)
- **Confirmed**: 2026-03-21

### CI-004: Operator can access /analysis via direct URL despite nav item being hidden
- **Severity**: Low
- **Category**: Authorization
- **Where**: /analysis (Operator role)
- **Description**: Analysis is hidden from Operator navigation but the page loads when accessed via direct URL
- **Expected**: If hidden from nav, should also be access-restricted
- **Status**: Open
- **Confirmed**: 2026-03-21

---

## Slack-Sourced Issues (Unverified)

### SI-001: Chat buttons sticking after click
- **Severity**: Medium
- **Category**: UI / Chat
- **Where**: Report Incident chat
- **Description**: After clicking a chat button option, the button remains visually "stuck" or selected
- **Linear ID**: —
- **Reporter**: Slack
- **Status**: Unverified

### SI-002: AI chatbot not following expected question flow
- **Severity**: High
- **Category**: AI / Chat
- **Where**: Report Incident chat
- **Description**: The AI chatbot skips questions or asks out-of-order questions during incident reporting
- **Linear ID**: NMS-71
- **Reporter**: Slack
- **Status**: Unverified

### SI-003: 500 error during password setting
- **Severity**: High
- **Category**: Authentication
- **Where**: Login / Registration
- **Description**: Users encounter HTTP 500 errors when attempting to set their password
- **Linear ID**: —
- **Reporter**: Slack
- **Status**: Unverified

### SI-004: Incorrect incident counts on status tabs
- **Severity**: Medium
- **Category**: Data
- **Where**: Reports page
- **Description**: The counts shown on Active/Done/Rejected/Draft tabs don't add up to the All tab count
- **Linear ID**: NMS-47
- **Reporter**: Slack
- **Status**: Partially verified -- Admin: 338+223+27+227=815 vs All=821 (6 discrepancy)

### SI-005: Anyone with @indorama.com email can register without admin approval
- **Severity**: High
- **Category**: Security / Auth
- **Where**: Registration flow
- **Description**: No admin approval required for new user registration if email domain is @indorama.com
- **Linear ID**: —
- **Reporter**: Slack
- **Status**: Unverified

### SI-006: Report appearing in wrong department
- **Severity**: High
- **Category**: Data / Routing
- **Where**: Reports
- **Description**: Incidents are sometimes assigned to incorrect departments
- **Linear ID**: —
- **Reporter**: Slack
- **Status**: Unverified

### SI-007: PDF generation fails or has formatting issues
- **Severity**: Medium
- **Category**: Export
- **Where**: Report detail page
- **Description**: PDF export of incident reports fails or produces incorrectly formatted documents
- **Linear ID**: —
- **Reporter**: Slack
- **Status**: Unverified

### SI-008: Mobile app crashes on certain Android versions
- **Severity**: High
- **Category**: Mobile
- **Where**: Android app
- **Description**: The NMMS mobile app crashes on specific Android versions
- **Linear ID**: —
- **Reporter**: Slack
- **Status**: Unverified

### SI-009: DB vs Stytch user record inconsistencies
- **Severity**: High
- **Category**: Authentication / Data
- **Where**: User management
- **Description**: User records in the application database are inconsistent with records in Stytch authentication system
- **Linear ID**: —
- **Reporter**: Slack
- **Status**: Unverified

### SI-010: No "Forgot Password" link on login page
- **Severity**: Medium
- **Category**: UX / Auth
- **Where**: /login
- **Description**: Login page doesn't show a "Forgot Password" option for users who need to reset their password
- **Linear ID**: —
- **Reporter**: Slack
- **Status**: **Confirmed** 2026-03-21 (no forgot password link visible)

---

### CI-005: Investigations page is distinct from Reports (correction of CI-003)
- **Severity**: Info (retraction)
- **Category**: Navigation
- **Where**: /investigations
- **Description**: Earlier CI-003 reported that /investigations shows same data as /reports. This was caused by the automated nav link not navigating correctly. When accessed properly, /investigations shows a DISTINCT page with its own tabs (NEAR MISS INVESTIGATIONS | UC/UA INVESTIGATIONS), status tabs (In Progress | Released | Closed | All), and different table columns (adds Classification). The Incident ID format differs too (UNIT-1/2026/NM/XXXX vs REF/YYYY/XXXX).
- **Status**: CI-003 retracted — /investigations works correctly
- **Confirmed**: 2026-03-21

### CI-006: Export as PDF and Excel are "Coming Soon" on Analysis
- **Severity**: Low
- **Category**: Feature Gap
- **Where**: /analysis → EXPORT dropdown
- **Description**: The Analysis EXPORT dropdown shows "Export as CSV" (working), but "Export as PDF (Coming Soon)" and "Export as Excel (Coming Soon)" are grayed out / disabled.
- **Status**: Open (feature not yet implemented)
- **Confirmed**: 2026-03-21

### CI-007: Report Incident page shows two different UIs (branding inconsistency)
- **Severity**: Medium
- **Category**: UI / Branding
- **Where**: /new-report
- **Description**: The Report Incident page shows two different versions depending on session/timing: (1) A native "Report New Incident" page with clean chat input and no branding mismatch, OR (2) An iframe-based dark-themed view showing "Indorama Incident Reporting System" branding. This inconsistency suggests either A/B testing, a race condition in component loading, or cached vs fresh sessions.
- **Status**: Open
- **Confirmed**: 2026-03-21

### CI-008: Typo in Department filter — "Adminstration" instead of "Administration"
- **Severity**: Low
- **Category**: UI / Typo
- **Where**: /analysis → Department dropdown
- **Description**: Department filter option shows "Adminstration" (missing 'i') instead of "Administration"
- **Status**: Open
- **Confirmed**: 2026-03-21

---

### CI-009: Manage Users opens Vercel login (not NMMS admin panel)
- **Severity**: Medium
- **Category**: Architecture / UX
- **Where**: Settings → Manage Users
- **Description**: Clicking "Manage Users" in Settings opens a new tab pointing to admin.staging.startraven.com, which redirects to Vercel SSO login. This means user management requires separate Vercel credentials and is not accessible from within the NMMS application.
- **Expected**: Either a built-in user management screen or clear documentation that Vercel access is required
- **Status**: Open (by design, but UX concern)
- **Confirmed**: 2026-03-21

### CI-010: Table uses MUI DataGrid (not standard HTML table)
- **Severity**: Info
- **Category**: Technical
- **Where**: All list pages (Reports, Investigations, Recommendations)
- **Description**: All data tables use MUI DataGrid (`div[role="grid"]` with `.MuiDataGrid-row`) instead of standard HTML `<table>` elements. This affects test automation — standard `table tbody tr` selectors will NOT work.
- **Status**: By design
- **Confirmed**: 2026-03-21

---

## Issue Count Summary

| Status | Count |
|--------|-------|
| Confirmed | 10 (CI-001, CI-002, CI-004 through CI-010, SI-010) |
| Retracted | 1 (CI-003 → CI-005) |
| Unverified | 8 |
| Total | 19 |

## Update Rule
Add confirmed issues with date and evidence. Change status from "Unverified" to "Confirmed" when reproduced. Add Linear ID when available.

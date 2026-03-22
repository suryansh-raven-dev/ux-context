# NMMS Consolidated Exploration Report

**Date**: 2026-03-21  
**Environment**: Staging (nmms.staging.startraven.com)  
**Method**: Automated Playwright exploration across all 7 roles  
**Total screenshots captured**: 100+  
**Total screens documented**: 13 per role (91 total screen captures)

---

## Executive Summary

The NMMS (Near-Miss Management System) staging application was systematically explored across all 7 available roles. The application is an AI-powered incident reporting platform for industrial safety, built with React and deployed for Indorama's IFZ plant. The staging environment uses "ACME" branding as a test configuration.

**Key findings**:
- 6 distinct application screens confirmed (Reports, Report Incident, Investigations, Recommendations, Analysis, Profile)
- Only the Operator role has meaningfully different navigation (lacks Investigations)
- Only the Operator role sees department-scoped data (623 vs 821 reports)
- All other roles (Safety Manager, HoD, HoS, HSEF, Admin) see identical navigation and full data
- 5 confirmed issues found during exploration
- The Report Incident chat interface requires deeper testing (embedded iframe)

---

## 1. Login Flow

### Login Page (/login)

| Element | Details |
|---------|---------|
| Logo | "ACME" (red, italic) |
| Title | "Acme Incident Reporting System" |
| Input | Single text field — "Email or Employee ID or Contractor ID" |
| NEXT button | Disabled when empty, enabled with input |
| SELECT ROLE | Link to /select-role (staging only) |
| Missing | No "Forgot Password", no "Register", no password field initially |

**Login mechanism (staging)**: Click SELECT ROLE → choose role from list → immediate redirect to /reports?status=active

### Select Role Page (/select-role)

7 roles available:

| # | Role | User | Department |
|---|------|------|------------|
| 1 | Operator - PP | Asaimani chandrasekaran | PP |
| 2 | Safety Manager | Ravi Gupta | — |
| 3 | Head of Department - PP | P C Sharma | PP |
| 4 | Head of Department - PE | Mahendra Jain | PE |
| 5 | Head of Section - PP | Pradeep Pawar | PP |
| 6 | HSEF Ambassador - PP | Vikas Manker | PP |
| 7 | Admin | Manikandan | PP/IFZ |

---

## 2. Application Layout

```
┌──────────────────────────────────────────────────────────┐
│ ☰  ACME                                                  │
├───────────────┬──────────────────────────────────────────┤
│               │                                          │
│ + Report      │                                          │
│   Incident    │     Main Content Area                    │
│               │                                          │
│ ⚠ Incidents   │     (Tables, Forms, Charts, Chat)        │
│   ├ Reports   │                                          │
│   ├ Investig. │                                          │
│   ├ Recomm.   │                                          │
│   └ Analysis  │                                          │
│               │                                          │
│ ? Help        │                                          │
│ ⚙ Settings    │                                          │
│               │                                          │
│ [MA] Mani… ▾  │                                          │
│ Powered by 🐦 │                                          │
└───────────────┴──────────────────────────────────────────┘
```

---

## 3. Screen-by-Screen Documentation

### 3.1 Reports (/reports?status=active)

The landing page after login. Central to the entire application.

**Layout**:
- Page heading: "Incident Reports"
- Status tabs bar: Active | Done | Rejected | Draft | All (each with count)
- Search bar: "Search Incident ID"
- Action buttons: FILTER, EXPORT
- Data table with 6 columns
- Pagination: Rows per page selector + page navigation

**Table Columns**:

| Column | Type | Notes |
|--------|------|-------|
| Incident ID | Text | Format: REF/YYYY/XXXX |
| Reported On | Date | Format: DD MMM YYYY |
| Summary | Text | May be truncated with tooltip |
| Department | Text | e.g., PP, PE, Logistics |
| Reported By | Text | Reporter name/ID |
| Status | Badge | Color-coded: green (Reported), blue (Approved by Safety) |

**Row interaction**: Clicking the right chevron (`>`) navigates to report detail page.

**Status tab counts by role**:

| Tab | Admin | Operator | Other Roles |
|-----|-------|----------|-------------|
| Active | 338 | 235 | 338 |
| Done | 223 | 210 | 223 |
| Rejected | 27 | 18 | 27 |
| Draft | 227 | 154 | 227 |
| All | 821 | 623 | 821 |

**Math check**: Admin: 338+223+27+227 = 815 ≠ 821 (6 discrepancy — possible issue)

### 3.2 Report Incident (/new-report)

**Layout**:
- Full-width dark background (#1a1a2e or similar)
- Centered card with embedded iframe
- Shows "INDORAMA" logo (different from outer "ACME" branding)
- Title: "Indorama Incident Reporting System"
- Input: "Email or Employee ID or Contractor ID" with NEXT button
- The chat appears to require separate authentication within the iframe

**Observed behavior**: The chat interface loads but does not pre-authenticate with the current session. The user must enter their ID again.

**Items requiring deeper testing**:
- Complete chat conversation flow
- AI question sequence and response quality
- Incident type selection (Near Miss, Unsafe Condition, Unsafe Act)
- Report creation and linkage back to Reports page
- Draft saving during chat

### 3.3 Investigations (/investigations)

**Current behavior**: Shows the exact same view as Reports (/reports?status=active) — same table, same data, same columns.

**Expected behavior** (from product understanding): Should show investigation-specific data, possibly filtered to reports that have active investigations.

**Possible explanations**:
1. Investigations are accessed by clicking into individual reports (not a separate list)
2. The page is a filter view of reports with investigation status
3. This is a routing bug

**Not visible to**: Operator role

### 3.4 Recommendations (/recommendations)

**Layout**:
- Two top-level tabs: **NEAR MISS RECOMMENDATIONS** | **UC/UA RECOMMENDATIONS**
- Status tabs: Active (158) | Done (60) | All (218)
- FILTER and EXPORT buttons
- Grouped card layout (not a flat table)

**Card structure**:
```
Incident ID: UNIT-1/2026/NM/0001
Forklift speeding near pedestrian walkways...     VIEW ALL RECOMMENDATIONS (2) >
┌─────────────────┬───────┬──────────────────────────┬────────────┬─────────┐
│ Recommendation ID│ Plant │ Recommendation           │ Target Date│ Status  │
├─────────────────┼───────┼──────────────────────────┼────────────┼─────────┤
│ CA-552          │ PP    │ Implement equipment auth.│ 06 Mar 2026│ Pending │
│ CA-551          │ PP    │ Install proper machine...│ 06 Mar 2026│ Pending │
└─────────────────┴───────┴──────────────────────────┴────────────┴─────────┘
```

**Recommendation ID format**: CA-XXX (corrective action)

**Incident ID format**: IPL/YYYY/NM/XXXX or UNIT-N/YYYY/NM/XXXX

### 3.5 Analysis (/analysis)

**Layout**:
- Page heading: "Analysis"
- EXPORT button (top-right)
- Category tabs: ALL INCIDENTS | NEAR MISS | UNSAFE CONDITIONS | UNSAFE ACTS
- Department filter dropdown: "All Departments"
- Date range picker: "Year to Date" with calendar icon

**Report Summary section** (3 metric cards):

| Card | Reported | Closed | Closure Rate | Depts | Top Dept | MoM Change |
|------|----------|--------|-------------|-------|----------|------------|
| INCIDENTS | 231 | 121 | 34% | 6 | PP (208) | -78% vs Feb |
| INVESTIGATIONS | 103 | 23 | 18% | 3 | PP (85) | -81% vs Feb |
| RECOMMENDATIONS | 86 | 21 | 20% | 3 | PP (73) | -67% vs Feb |

**Charts**:
1. **Incident Trend** (line chart): Reported vs Closed, Jan–Mar 2026
   - Reported line (orange/yellow): starts ~95, peaks ~105, drops to ~30
   - Closed line (green): starts ~90, drops to ~20, then ~30
2. **Resolution Rate** (line chart): Monthly resolution rate %, Jan–Mar 2026
   - Starts ~48%, drops to ~15%, slight uptick at end

### 3.6 Profile (/profile)

**Form fields**:

| Field | Type | Required | Admin Value |
|-------|------|----------|-------------|
| Name | Text input | Yes (*) | Manikandan |
| Employee ID | Text input | No | ADMIN123 |
| Email | Text input | No | manikandan@indorama.com |
| Employee Type | Text input | No | (empty) |
| Unit | Dropdown | Yes (*) | IFZ |
| Departments | Dropdown | Yes (*) | PP |
| Gender | Dropdown | Yes (*) | Male |

**Buttons**: CANCEL, SAVE PROFILE  
**Refresh icon**: Top-right corner

### 3.7 Help and Support
- Listed in sidebar navigation
- No dedicated URL found during exploration
- Likely opens a modal or external link

### 3.8 Settings
- Listed in sidebar navigation
- No dedicated URL found during exploration
- Likely opens a modal or sub-page

---

## 4. Role-Based Differences

### Navigation Visibility Matrix

| Nav Item | Operator | Safety Mgr | HoD-PP | HoD-PE | HoS-PP | HSEF | Admin |
|----------|----------|------------|--------|--------|--------|------|-------|
| Report Incident | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Reports | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Investigations | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Recommendations | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Analysis | ⚠️* | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Help and Support | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Settings | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

*⚠️ Operator: Analysis not in nav but accessible via direct URL

### Data Scope

| Role | Total Reports | Scope |
|------|---------------|-------|
| Admin | 821 | All departments |
| Operator | 623 | Department-filtered |
| Safety Manager | 821 | All departments |
| HoD (PP & PE) | 821 | All departments |
| HoS | 821 | All departments |
| HSEF Ambassador | 821 | All departments |

### Profile Menu (SWITCH ROLE)

All roles show the same SWITCH ROLE dropdown at the bottom of the sidebar with all 7 role options. This is a **staging-only feature** for quick role switching.

---

## 5. Confirmed Issues

| # | Issue | Severity | Page |
|---|-------|----------|------|
| 1 | Branding mismatch: "ACME" outer app vs "INDORAMA" chat iframe | Low | /new-report |
| 2 | /reports?status=closed redirects to active reports | Medium | /reports |
| 3 | /investigations shows same data as /reports | Medium | /investigations |
| 4 | Operator can access /analysis via direct URL despite hidden nav | Low | /analysis |
| 5 | No "Forgot Password" link on login page | Medium | /login |
| 6 | Report count math: 338+223+27+227=815 ≠ 821 All count | Medium | /reports |

---

## 6. Areas Requiring Deeper Exploration

| Area | Priority | What To Test |
|------|----------|--------------|
| Report Incident chat | **P0** | Full AI conversation flow, incident creation, draft saving |
| Individual report details | **P0** | Click into a report, see detail page, action buttons per role |
| Investigation workflow | **P1** | How investigations are created and managed within reports |
| FILTER functionality | **P1** | What filter options are available on Reports and Recommendations |
| EXPORT functionality | **P1** | Does export produce correct CSV/PDF output |
| Settings page | **P2** | What settings are configurable |
| Help and Support | **P2** | What this section contains |
| Admin portal/user management | **P2** | Whether an admin panel exists for user CRUD |
| Mobile app parity | **P3** | Compare web vs mobile features |

---

## 7. Files Updated in This Session

| File | What Changed |
|------|-------------|
| `apps/near-miss/product-summary.md` | Rewritten with confirmed observations |
| `apps/near-miss/discovery/app-map.md` | Updated with confirmed screens and URLs |
| `apps/near-miss/discovery/navigation-map.md` | Updated with confirmed nav structure |
| `apps/near-miss/discovery/role-map.md` | Updated with confirmed role differences |
| `apps/near-miss/discovery/auth-map.md` | Updated with confirmed login page details |
| `apps/near-miss/memory/selectors.md` | Updated with confirmed UI selectors |
| `apps/near-miss/memory/known-issues.md` | Updated with 5 confirmed + 9 unverified issues |
| `apps/near-miss/memory/test-oracles.md` | Updated with page-load and role-based oracles |
| `apps/near-miss/memory/flaky-areas.md` | Updated with 3 confirmed + 7 suspected areas |
| `apps/near-miss/session-logs/2026-03-21-initial-exploration.md` | New session log |
| `apps/near-miss/consolidated-exploration-report.md` | This document |

---

## 8. Evidence

- **Screenshots**: `apps/near-miss/screenshots/exploration/` (100+ screenshots across all roles)
- **JSON Report**: `apps/near-miss/screenshots/exploration/exploration_report.json`
- **Exploration Script**: `apps/near-miss/scripts/explore_nmms.py`

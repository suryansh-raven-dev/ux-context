# Test Oracles: Near-Miss (NMMS)

## Current Status
Initial oracles defined based on 2026-03-21 exploration observations and Slack-sourced requirements.

## Page Load Oracles

### Login Page (/login)
- **Pass**: Page displays "Acme Incident Reporting System" title
- **Pass**: Single input field with placeholder "Enter your email or Employee ID or Contractor ID"
- **Pass**: NEXT button is disabled when input is empty
- **Pass**: SELECT ROLE link is visible (staging only)

### Reports Page (/reports)
- **Pass**: Page title shows "Incident Reports"
- **Pass**: Status tabs show counts: Active (N), Done (N), Rejected (N), Draft (N), All (N)
- **Pass**: All tab count = Active + Done + Rejected + Draft
- **Pass**: Table shows columns: Incident ID, Reported On, Summary, Department, Reported By, Status
- **Pass**: Pagination shows "1–25 of N" with Rows per page selector
- **Pass**: Admin sees full count (821+), Operator sees reduced count (~623)

### Recommendations Page (/recommendations)
- **Pass**: Two top-level tabs: NEAR MISS RECOMMENDATIONS, UC/UA RECOMMENDATIONS
- **Pass**: Status tabs show: Active (N), Done (N), All (N)
- **Pass**: Recommendations grouped by Incident ID
- **Pass**: Each recommendation shows: ID (CA-XXX), Plant, Recommendation text, Target Date, Status

### Analysis Page (/analysis)
- **Pass**: Category tabs: ALL INCIDENTS, NEAR MISS, UNSAFE CONDITIONS, UNSAFE ACTS
- **Pass**: Report Summary shows 3 cards: INCIDENTS, INVESTIGATIONS, RECOMMENDATIONS
- **Pass**: Each card shows: Reported count, Closed count, Closure Rate %, Dept count, Top dept, Month-over-month change
- **Pass**: Incident Trend chart shows data (not empty/broken)
- **Pass**: Resolution Rate chart shows data (not empty/broken)

### Profile Page (/profile)
- **Pass**: Form shows Name, Employee ID, Email, Employee Type, Unit, Departments, Gender
- **Pass**: Required fields marked with asterisk (*)
- **Pass**: SAVE PROFILE and CANCEL buttons present

## Role-Based Oracles

| Oracle | Expected |
|--------|----------|
| Operator navigation | Missing: Investigations |
| Safety Manager navigation | Full: Reports, Investigations, Recommendations, Analysis |
| HoD navigation | Full: Reports, Investigations, Recommendations, Analysis |
| HoS navigation | Full: Reports, Investigations, Recommendations, Analysis |
| HSEF navigation | Full: Reports, Investigations, Recommendations, Analysis |
| Admin navigation | Full: Reports, Investigations, Recommendations, Analysis |
| Operator report count | Less than Admin (department-scoped) |
| Non-operator report count | Same as Admin (full visibility) |

## Workflow Oracles (To Be Verified)

### Incident Reporting
- Operator can create new incident via chat
- Chat asks questions and generates structured report
- Report appears in Reports table with status "Reported"
- Report ID follows format REF/YYYY/XXXX

### Investigation
- Safety Manager can accept classification
- HoD can approve investigation
- Investigation generates AI-powered analysis

### Recommendations
- Recommendations are generated per-incident
- Each has a target date and status (Pending/Done)
- Can be exported

## Update Rule
Add confirmed oracles with the date they were verified. Mark oracles as stale if behavior changes.

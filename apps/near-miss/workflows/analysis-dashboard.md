# Workflow: Analysis Dashboard

## Goal
Admin or authorized user views analytics across all incidents, verifying counts, charts, filters, and export functionality on the Analysis Dashboard.

## Persona / Role
Admin

## Entry Point
https://nmms.staging.startraven.com/analysis

## End State
Dashboard displays accurate incident counts, category breakdowns, department-wise reporting, and supports CSV/Excel export.

## General Steps
1. Log in as admin.
2. Navigate to Analysis tab (under Incidents).
3. Review total counts for Near Miss, UC, UA incidents.
4. Verify category breakdowns match actual report counts.
5. Apply filters (by department, date range, status).
6. Attempt CSV export.
7. Verify department-wise reporting and ISO/IMA targets.

## Known Branches
- Filter combinations returning zero results
- Export with large data sets
- Reported vs closed counts by month (reporting date vs closing date)
- Department-wise vs location-wise reporting
- Empty state when no data matches filters

## Important Validations
- Total incident counts must match actual database (known issue: 44 vs 43)
- UC/UA tabs must show UC/UA counts, not NM counts
- Drafts and non-final states should not be counted
- Category/ID mismatches should not occur (NM showing as UC, etc.)
- Download CSV must work
- Download Report button should not stick at footer
- Month-based reporting uses reporting date, not closing date
- "Incident reported" vs "incident approved/closed" logic must be clear

## Discovery Scope
`standard`

## In Scope
- Count accuracy across all incident types
- Filter behavior and persistence
- CSV/Excel export
- Chart rendering
- Department-wise reporting

## Out Of Scope
- Incident reporting flow
- Investigation and recommendations
- User management

## Test Accounts / Roles
- raven-admin / RavenTesting@123 (production)
- NM-admin-001 / RavenTesting@123 (staging)

## Environment
Staging: https://nmms.staging.startraven.com
Production: https://nmms.startraven.com

## Evidence To Capture
- Screenshots of dashboard with counts
- Screenshots comparing dashboard counts to actual data
- Downloaded CSV/Excel file
- Screenshots of filtered views
- Any error messages during export

## Notes
- Known issue: Download Report button sticking at footer
- Known issue: UC/UA tabs showing NM investigation/recommendation counts
- Known issue: investigation count mismatch (44 total vs 43 on dashboard)
- Known issue: Download CSV not working (reported Jan 29, 2026)
- Analysis was recently moved under Incidents in navigation hierarchy

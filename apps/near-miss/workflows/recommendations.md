# Workflow: Recommendations

## Goal
After investigation is released, AI-generated recommendations are assigned to responsible persons, who submit corrective actions. HoD/HoS/HSEF verifies each recommendation, and once all are closed, the report is closed.

## Persona / Role
HoD (assigns), Recommendation Assignee (submits action), HoD/HoS/HSEF Ambassador (verifies)

## Entry Point
https://nmms.staging.startraven.com/reports (select a released report, go to Recommendations tab)

## End State
All recommendations verified and closed, investigation report marked as completed, PDF report generated and emailed.

## General Steps
1. Log in as HoD.
2. Open a released investigation report.
3. Navigate to Recommendations tab.
4. Review AI-generated recommendations.
5. Delete unwanted recommendations (no reason required).
6. Assign recommendations to responsible persons with target dates.
7. Assignees log in and fill "Action Taken" (mandatory) and upload attachments (optional).
8. Assignees click "Submit for Review".
9. HoD/HoS/HSEF verifies each recommendation.
10. Once all recommendations are closed, close the report.
11. PDF report is generated and available for download.

## Known Branches
- Deleting AI-suggested recommendations
- Multiple recommendations per incident (CA-360, CA-361, etc.)
- Assignee delegation (changing the assigned person)
- Partial recommendation closure (some closed, some open)
- Close report button behavior (only active when all recs closed)
- Download PDF after report closure

## Important Validations
- "Action Taken" is mandatory for submission
- "Submit for Review" label (not "Close")
- Only HoD/HoS/HSEF Ambassadors can close reports
- Close report button activates only when ALL recommendations are closed
- Status per recommendation: Open / In Progress / Submitted / Closed
- Email notifications sent when recommendations are assigned
- PDF download enabled after closure
- Download report button should not be the main CTA on investigation page

## Discovery Scope
`standard`

## In Scope
- AI recommendation quality
- Assignment and delegation flow
- Action submission and verification
- Report closure logic
- PDF generation and download
- Email notifications

## Out Of Scope
- Incident reporting
- Investigation generation
- Analysis dashboard

## Test Accounts / Roles
- NM-hod-001 / RavenTesting@123 (staging, HoD)
- NM-hsef-001 / RavenTesting@123 (staging, HSEF Ambassador)
- NM-operator-001 / RavenTesting@123 (staging, as assignee)

## Environment
Staging: https://nmms.staging.startraven.com

## Evidence To Capture
- Screenshots of recommendation list with statuses
- Screenshot of action submission form
- Screenshot of verification flow
- Screenshot of report closure
- Downloaded PDF report
- Email notification content

## Notes
- Known issue: recommendation status only partially updates (requires page refresh)
- Known issue: "Submit for Review" button text should be uppercase
- Known issue: empty Report Closure container shown when not applicable
- Labels: "Add Comment" renamed to "Action Taken", "Attach Images" renamed to "Attachments"

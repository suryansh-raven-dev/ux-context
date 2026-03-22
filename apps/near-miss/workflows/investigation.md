# Workflow: Investigation

## Goal
After an incident report is approved by HoD/HoS/HSEF Ambassador, an AI-generated investigation is created with root cause analysis, and the HoD reviews, edits, and releases the investigation.

## Persona / Role
HoD (Head of Department), HoS (Head of Safety), HSEF Ambassador

## Entry Point
https://nmms.staging.startraven.com/reports (select an approved Near Miss report)

## End State
Investigation is completed with root cause analysis (system, human, physical factors), approved by HoD, and released for recommendation assignment.

## General Steps
1. Log in as HoD.
2. Navigate to an approved Near Miss report.
3. Open the Investigation tab.
4. Review AI-generated investigation (root cause analysis, contributing factors).
5. Edit investigation details if needed (factors, descriptions).
6. Set assignees and target dates for recommendations.
7. Click "Approve and Release" to release the investigation.
8. Investigation status changes to "Released".

## Known Branches
- AI misses relevant factors; investigator manually adds them
- Investigation form sections don't match template references (Table 5/6 vs Section 5)
- HoD cannot release without setting assignees and target date
- Edit mode vs read-only mode behavior
- UC/UA reports: investigation tab should NOT appear

## Important Validations
- AI reasoning visible in UI but excluded from final PDF
- System, human, and physical factors should all be evaluated
- Approve and Release button requires assignees and target dates
- Investigation form should match Indorama's approved template structure
- UC/UA reports must not show investigation section
- Status terminology: "Released" = investigation done, recommendations pending

## Discovery Scope
`standard`

## In Scope
- AI investigation quality and completeness
- Investigation form field accuracy
- Edit vs read-only mode behavior
- Release flow and validation
- Status transitions

## Out Of Scope
- Initial reporting (separate workflow)
- Recommendation tracking (separate workflow)
- Analysis dashboard

## Test Accounts / Roles
- NM-hod-001 / RavenTesting@123 (staging, select-role)
- NM-hos-001 / RavenTesting@123 (staging, select-role)
- NM-hsef-001 / RavenTesting@123 (staging, select-role)

## Environment
Staging: https://nmms.staging.startraven.com

## Evidence To Capture
- Screenshots of AI-generated investigation
- Screenshots of investigation form sections
- Screenshot of release confirmation
- Status change confirmation
- Any errors during release

## Notes
- Known issue: HoD must click Edit before being able to assign and release
- Known issue: after AI agent finishes execution, it should auto-switch to edit mode
- Report closure requires ALL recommendations to be closed first

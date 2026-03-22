# Workflow: Incident Reporting

## Goal
An operator reports a near-miss, unsafe condition, or unsafe act via the AI chatbot, which collects details conversationally, classifies the event, and creates a structured incident report.

## Persona / Role
Operator (employee or contractor)

## Entry Point
- Web: https://nmms.staging.startraven.com (click "Report Incident")
- Mobile: NMMS app from Play Store

## End State
An incident report is created with AI classification (NM/UC/UA/Incident), all mandatory fields populated, and the report is routed to the Safety Manager for review.

## General Steps
1. Log in as an operator.
2. Navigate to or open the Report Incident page.
3. Interact with the AI chatbot to describe the incident.
4. AI asks follow-up questions (~5-7) to collect: what happened, plant, department, location, date/time, immediate actions.
5. AI classifies the incident and populates the structured form.
6. Operator reviews the pre-filled form and submits.
7. Report appears in the Safety Manager's queue.

## Known Branches
- Reporting on behalf of someone else (contractor or another employee)
- Contractor reporting without full registration
- Common/shared login detection ("Who is actually reporting?")
- Equipment tag number provided vs missing
- AI classification as "Not NM/UC/UA" (Incident/Accident)
- Offline reporting (queued locally, submitted when online)
- Voice input for incident description

## Important Validations
- Mandatory fields: Plant, Department, Location, Date/Time, Immediate Actions
- Incident date/time must be before reporting time
- AI should ask for and validate department (not silently assume)
- AI should ask for immediate actions
- Submit button disabled when classification is "Not NM/UC/UA" until user selects a category
- Equipment tag/description should be prompted if incident mentions equipment
- Report ID generated in format: IPL/2026/NM/#### (or UC/UA)

## Discovery Scope
`standard`

## In Scope
- AI chatbot conversation flow and quality
- Form pre-fill accuracy from AI extraction
- Classification accuracy (NM vs UC vs UA vs Incident)
- Mandatory field validation
- On-behalf-of reporting flow
- Mobile vs web parity

## Out Of Scope
- Safety Manager review (separate workflow)
- Investigation and recommendations
- Admin user management

## Test Accounts / Roles
- NM-operator-001 / RavenTesting@123 (staging, select-role)
- near-miss-operator@startraven.com / RavenTesting@123 (staging)

## Environment
Staging: https://nmms.staging.startraven.com

## Evidence To Capture
- Screenshots of AI chat conversation
- Screenshot of pre-filled form before submission
- Screenshot of classification result and reasoning
- Report ID after submission
- Any error messages or validation failures

## Notes
- AI reasoning is visible in staging but can be hidden via localStorage flag: `localStorage.setItem('nmms:showReasoning', 'false')`
- The prompt is defined in near-miss-backend repo: `src/prompts/near_miss_form_prompt.txt`
- UC/UA workflow excludes investigation findings section entirely

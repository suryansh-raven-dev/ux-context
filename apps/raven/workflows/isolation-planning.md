# Workflow: Isolation Planning

## Goal
Allow a user to open an interactive P&ID or equivalent planning view, select equipment or area context, review the suggested isolation boundary, inspect the generated checklist, and route the output into review or approval.

## Persona / Role
Permit coordinator, shift supervisor, operations lead, maintenance planner, or reviewer involved in isolation planning.

## Entry Point
Authenticated Raven experience with access to the isolation-planning workflow or interactive P&ID area.

## End State
The user reaches a reviewable isolation-planning result with visible planning context, checklist content, and a path toward approval.

## General Steps
1. Open the isolation-planning experience.
2. Select the equipment or section to isolate.
3. Review the marked boundary or planning suggestion.
4. Inspect the generated checklist and supporting references.
5. Submit or route the plan into review if available.

## Known Branches
- Start from an interactive P&ID
- Select different equipment or area scopes
- Inspect suggested boundary details
- Review generated checklist content
- Route the draft into approval or save state

## Important Validations
- The planning interaction produces a visible downstream result.
- Checklist content is reviewable and tied to relevant precautions or references.
- Users can distinguish between draft, review, and final states if present.
- The UI remains understandable despite visual complexity.

## Discovery Scope
`standard`

## In Scope
- P&ID or planning canvas
- Equipment selection
- Generated planning result
- Review or submit actions directly attached to the workflow

## Out Of Scope
- Exhaustive engineering correctness validation of the isolation boundary
- Full permit-system integration outside Raven's visible workflow
- Non-visible backend processing assumptions

## Test Accounts / Roles
- Employee ID: `SURYANSH-04` — confirmed access to P&ID page as of 2026-03-21.

## Environment
- URL: `https://ifz.startraven.com/pid`
- HSEF domain: "No files found" — no P&ID data available.
- Try domains: Ammonia Train-1, FCU Line-1F, or Urea-1 which may have P&ID files.
- System reports 3 P&ID files and 146 file tags across all domains.

## Evidence To Capture
- Initial planning screen screenshot
- Equipment selection or marked boundary screenshot
- Generated checklist screenshot
- Review or approval action screenshot
- Notes on any difficult-to-automate visual interactions

## Notes
This workflow is expected to stay computer-use-first longer than simpler form-based flows.

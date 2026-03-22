# Workflow: Plant Knowledge Hub Question Answering

## Goal
Allow a user to ask a plant question or start from equipment context, receive a cited answer, inspect the cited evidence, and identify any visible discrepancies or review notes.

## Persona / Role
Operator, shift supervisor, maintenance planner, safety officer, or training-oriented user.

## Entry Point
Authenticated Raven experience with access to the Plant Knowledge Hub or equivalent knowledge-search entry point.

## End State
The user can view a useful answer tied to visible source context and understand whether any review note or discrepancy is present.

## General Steps
1. Open the knowledge-search or question-answer area.
2. Ask a plant question or start from equipment context.
3. Review the generated answer.
4. Inspect the cited sources or supporting context.
5. Check for visible discrepancy or review signals.

## Known Branches
- Start from a free-text question
- Start from equipment or tag context
- View sources and supporting passages
- Observe discrepancy or review notes if present

## Important Validations
- Answer content is accompanied by usable citation context.
- Source details are inspectable without guesswork.
- Review or discrepancy signals are visible when relevant.
- The answer remains usable as a reviewable output, not just a chat response.

## Discovery Scope
`standard`

## In Scope
- Search or prompt entry points
- Generated answer view
- Source or citation detail views
- Equipment-context entry if present

## Out Of Scope
- Deep source-document correctness auditing
- Data ingestion admin features
- Bulk document management outside the user workflow

## Test Accounts / Roles
- Employee ID: `SURYANSH-04` — confirmed access to Search (Knowledge Hub) as of 2026-03-21.

## Environment
- URL: `https://ifz.startraven.com/search`
- Domains with data: HSEF confirmed with document-backed answers.
- 1,854 total files across 8 categories available in the system.

## Evidence To Capture
- Question-entry screenshot
- Generated answer screenshot
- Citation/source detail screenshot
- Any visible discrepancy or review indicator
- Final notes on which evidence fields are shown in the UI

## Notes
Favor questions whose expected answer can be roughly checked by a human during early validation.

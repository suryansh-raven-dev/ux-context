# Workflow: Review And Approval Of Generated Outputs

## Goal
Allow a user to inspect a generated Raven output, make or review adjustments if permitted, and complete the visible review or approval step with a clear final state.

## Persona / Role
Reviewer, shift supervisor, approver, or any role responsible for validating generated work before use.

## Entry Point
A generated Raven output that is awaiting review or approval, or a queue/list view that leads to such an item.

## End State
The output reaches a clear reviewed or approved state with visible traceability.

## General Steps
1. Open a generated output awaiting review.
2. Inspect the content and its supporting context.
3. Make or confirm any required adjustments.
4. Complete the visible review or approval action.
5. Confirm the final workflow state.

## Known Branches
- Open from a queue, notification, or linked workflow
- Review-only versus editable states
- Approve, reject, or request changes if available
- Re-open or re-check final status after action

## Important Validations
- The review state is visible and understandable.
- Reviewer actions produce a clear status change.
- Supporting evidence remains visible through the review process.
- Final state is distinguishable from in-progress draft state.

## Discovery Scope
`standard`

## In Scope
- Queue or list entry points if visible
- Review detail screen
- Approval or rejection controls
- Final-state confirmation

## Out Of Scope
- Notification infrastructure outside the visible app
- Back-office configuration of approval rules
- External system-of-record propagation unless it is directly visible

## Test Accounts / Roles
- Employee ID: `SURYANSH-04` — confirmed access to feedback controls on AI answers as of 2026-03-21.
- No dedicated reviewer role observed. "Total Roles: 0" in Workplace Dashboard.

## Environment
- URL: No dedicated review/approval URL. Review happens inline on AI answers in `/search`.
- Feedback page: `https://ifz.startraven.com/feedback`
- Saved Answers: `https://ifz.startraven.com/saved`

## Evidence To Capture
- Review queue or entry point screenshot
- Review detail screenshot
- Action-state screenshot before and after approval
- Notes on visible status labels and audit cues

## Notes
This workflow may be entered from other workflows rather than from a standalone navigation area.

# Discovery Map: Role Map (Near-Miss)

## Current Status
Partially validated via automated exploration on 2026-03-21. Navigation and report-count differences confirmed. Detailed permission matrix requires deeper per-report testing.

## Confirmed Roles and Users (Staging, 2026-03-21)

| Role | User Name | Employee ID | Email | Unit | Department |
|------|-----------|-------------|-------|------|------------|
| Admin | Manikandan | ADMIN123 | manikandan@indorama.com | IFZ | PP |
| Operator - PP | Asaimani chandrasekaran | — | — | — | PP |
| Safety Manager | Ravi Gupta | — | — | — | — |
| Head of Department - PP | P C Sharma | — | — | — | PP |
| Head of Department - PE | Mahendra Jain | — | — | — | PE |
| Head of Section - PP | Pradeep Pawar | — | — | — | PP |
| HSEF Ambassador - PP | Vikas Manker | — | — | — | PP |

## Observed Report Counts by Role (Confirmed 2026-03-21)

| Status | Admin | Operator | Safety Mgr | HoD-PP | HoD-PE | HoS-PP | HSEF |
|--------|-------|----------|------------|--------|--------|--------|------|
| Active | 338 | 235 | 338 | 338 | 338 | 338 | 338 |
| Done | 223 | 210 | 223 | 223 | 223 | 223 | 223 |
| Rejected | 27 | 18 | 27 | 27 | 27 | 27 | 27 |
| Draft | 227 | 154 | 227 | 227 | 227 | 227 | 227 |
| Total | 821 | 623 | 821 | 821 | 821 | 821 | 821 |

**Key finding**: Only the Operator sees reduced counts (623 vs 821). All other roles see the same total count. This suggests:
- Operator is scoped to their own reports or department
- Safety Manager, HoD, HoS, HSEF, and Admin all see the full report set

## Navigation Differences (Confirmed)

| Difference | Roles Affected |
|-----------|---------------|
| Investigations nav item hidden | Operator only |
| Analysis nav item hidden but accessible via URL | Operator only |

## Report Detail Actions by Role (Confirmed 2026-03-21)

| Role | View Mode | Action Buttons | Editable Fields |
|------|-----------|---------------|-----------------|
| Admin | Read-only | Draft: DELETE REPORT + SUBMIT REPORT | None |
| Operator | Read-only | Draft: DELETE REPORT + SUBMIT REPORT | None |
| Safety Manager | **Editable** | **REJECT REPORT + SUBMIT** | Short Description (textarea), Immediate Action (textarea), Department (dropdown) |
| HoD | Read-only | None visible on "Reported" status | None |
| HoS | Read-only | None visible on "Reported" status | None |
| HSEF | Read-only | None visible on "Reported" status | None |

## Assumptions To Validate
- ~~Each role sees only their department's incidents~~ **Partially disproved**: only Operator sees reduced set
- ~~Operator can only see their own reports~~ **Plausible**: Operator sees 623 vs 821
- ~~Safety Manager cannot approve/reject (only classify)~~ **Disproved**: Safety Manager has REJECT REPORT and SUBMIT buttons plus editable fields
- HoD, HoS, HSEF Ambassador have equivalent approval authority — **Partially confirmed**: all see identical read-only view, but need to check actions on "Approved by Safety" status reports
- ~~Admin role is separate from all workflow roles~~ **Confirmed**: Admin has same nav as HoD/HoS/HSEF

## Questions Remaining
- Can an operator see reports from other operators in the same department?
- What actions do HoD/HoS see on reports with "Approved by Safety" status?
- ~~What actions are available on individual report pages per role?~~ **Answered above**
- ~~Does the Safety Manager have a unique "Accept Classification" action?~~ **Yes, confirmed: SUBMIT button**
- What does the report detail look like at "Done" and "Rejected" statuses?
- What actions appear when clicking the Investigation accordion on a report detail?

## Related Workflows
- incident-reporting (Operator)
- investigation (HoD, HoS, HSEF Ambassador)
- recommendations (HoD, Assignees, HSEF Ambassador)
- analysis-dashboard (Admin)
- authentication (All roles)

## Update Rule
Keep this file focused on shared discovery context. Move workflow-specific findings into `apps/near-miss/learnings/` and selector-level details into `apps/near-miss/memory/selectors.md`.

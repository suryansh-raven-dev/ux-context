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

## Report Detail Actions by Role and Status (Confirmed 2026-03-21)

### On "Reported" Status Reports
| Role | View Mode | Action Buttons | Editable Fields |
|------|-----------|---------------|-----------------|
| Admin | Read-only | None | None |
| Operator | Read-only | None | None |
| Safety Manager | **Editable** | **REJECT REPORT + SUBMIT** | Short Description, Immediate Action, Department |
| HoD | Read-only | None | None |

### On "Approved by Safety" Status Reports (Confirmed 2026-03-21)
| Role | View Mode | Action Buttons | Editable Fields |
|------|-----------|---------------|-----------------|
| Admin | Read-only | None | None |
| Operator | Read-only | None | None |
| Safety Manager | Read-only? | APPROVE REPORT | TBD |
| HoD | **Editable** | **RETURN REPORT + APPROVE REPORT** | Short Description, Immediate Action, Department |

### On "Draft" Status Reports
| Role | View Mode | Action Buttons | Editable Fields |
|------|-----------|---------------|-----------------|
| Admin | Read-only | DELETE REPORT + SUBMIT REPORT | None |
| Operator | Read-only | DELETE REPORT + SUBMIT REPORT | None |

### On "Done" / "Rejected" Status Reports
All roles see read-only view with no action buttons.

### Complete Workflow
```
Draft → (Operator: SUBMIT REPORT) → Reported
  → (Safety Manager: SUBMIT) → Approved by Safety
    → (HoD: APPROVE REPORT) → Approved by Dept → Done
    → (HoD: RETURN REPORT) → back to Safety Manager
  → (Safety Manager: REJECT REPORT) → Rejected
  → (HoD: Reject) → Rejected by Dept
```

## Assumptions To Validate
- ~~Each role sees only their department's incidents~~ **Partially disproved**: only Operator sees reduced set
- ~~Operator can only see their own reports~~ **Plausible**: Operator sees 623 vs 821
- ~~Safety Manager cannot approve/reject (only classify)~~ **Disproved**: SM has REJECT REPORT and SUBMIT buttons plus editable fields
- ~~HoD has no actions~~ **Disproved**: HoD has RETURN REPORT + APPROVE REPORT on "Approved by Safety" reports
- ~~Admin role is separate from all workflow roles~~ **Confirmed**: Admin has same nav as HoD/HoS/HSEF but no workflow actions

## Questions Remaining
- Can an operator see reports from other operators in the same department?
- ~~What actions do HoD/HoS see on reports with "Approved by Safety" status?~~ **Answered: RETURN REPORT + APPROVE REPORT**
- ~~What does the report detail look like at "Done" and "Rejected" statuses?~~ **Answered: Read-only, no actions**
- ~~What actions appear when clicking the Investigation accordion?~~ **Answered: Shows "Run Agentic AI Investigation" page**
- What does HoS and HSEF see on "Approved by Safety" reports? (assumed same as HoD)
- What happens after clicking RETURN REPORT? Does it go back to "Reported" status?

## Related Workflows
- incident-reporting (Operator)
- investigation (HoD, HoS, HSEF Ambassador)
- recommendations (HoD, Assignees, HSEF Ambassador)
- analysis-dashboard (Admin)
- authentication (All roles)

## Update Rule
Keep this file focused on shared discovery context. Move workflow-specific findings into `apps/near-miss/learnings/` and selector-level details into `apps/near-miss/memory/selectors.md`.

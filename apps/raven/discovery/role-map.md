# Role Map

## Current Status
Partially populated from live exploration on 2026-03-21. Only one account tested so far.

## User-Provided Truth
- The testing effort will use various Raven accounts and roles over time.
- Brochure language references roles such as operator, shift supervisor, permit coordinator, safety officer, maintenance planner, and reviewer or approver.

## Observed Behavior

### Tested Account
| Field | Value |
|-------|-------|
| Name | Suryansh Srivastava |
| Employee ID | SURYANSH-04 |
| Unit | IFZ |
| Departments | PHD, FCU Line 1, Urea 2, Urea 1, Ammonia 2, Ammonia 1, Technical Services, HSEF, FCU Line 2 |

### Access Observations for SURYANSH-04
- Can access all sidebar navigation items (Search, P&ID, Data Explorer)
- Can access all Settings popup options (Account, Workplace, Saved Answers, Feedback)
- Can access Workplace Dashboard with analytics (suggests admin or elevated role)
- Can see all 8 domains in domain selection
- Can see all 264 users in the Workplace Dashboard user count
- Users page in Workplace Settings has an external link icon — may require different access
- No explicit "role" label visible anywhere in the UI for this account
- Total Roles in Workplace Dashboard shows: 0 (0% WoW) — suggests roles may not be configured

### Role System Status
- The Workplace Dashboard shows "Total Roles: 0" — the role system may not be actively used in this environment.
- All navigation items were accessible to the test account, suggesting either:
  - This is an admin/superuser account, or
  - Role-based access control is not enforced in this environment

## Assumptions Still To Validate
- Operator — not tested (no alternate account)
- Shift supervisor — not tested
- Permit coordinator — not tested
- Safety officer — not tested
- Maintenance planner — not tested
- Reviewer or approver — not tested

## Behaviors To Compare By Role
- Navigation visibility — all items visible for SURYANSH-04
- Accessible workflows — all accessible for SURYANSH-04
- Approval permissions — no approval workflow found
- Editable versus read-only states — not differentiated in current observations
- Notification responsibilities — no notification system observed

## Questions Still Open
- Exact role names used in Raven — no roles configured ("Total Roles: 0")
- Whether one account can switch roles — unknown
- Which roles can approve final workflow outputs — unknown (no approval workflow found)
- Whether different accounts see different navigation items — untested

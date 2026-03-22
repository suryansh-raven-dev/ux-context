# Discovery Map: Navigation Map (Near-Miss)

## Current Status
Partially validated via automated exploration on 2026-03-21.

## Observed Navigation Structure (Confirmed 2026-03-21)

```
Side Navigation (always expanded, ~160px, left side)
├── + Report Incident        → /new-report
├── ⚠ Incidents (section header, not clickable)
│   ├── 📊 Reports           → /reports?status=active
│   ├── 🔍 Investigations    → /investigations    (not visible to Operator)
│   ├── ⚙ Recommendations    → /recommendations
│   └── 📈 Analysis          → /analysis
├── ❓ Help and Support       → TBD (no separate URL found)
├── ⚙ Settings               → TBD (no separate URL found)
└── [Avatar] User Name ▾     → SWITCH ROLE dropdown (staging only)
    └── SWITCH ROLE section:
        ├── Asaimani chandrasekaran (Operator - PP)
        ├── Ravi Gupta (Safety Manager)
        ├── P C Sharma (Head of Department - PP)
        ├── Mahendra Jain (Head of Department - PE)
        ├── Pradeep Pawar (Head of Section - PP)
        ├── Vikas Manker (HSEF Ambassador - PP)
        └── Manikandan (Admin)
```

### Navigation Visibility by Role (Confirmed)

| Nav Item | Operator | Safety Mgr | HoD | HoS | HSEF | Admin |
|----------|----------|------------|-----|-----|------|-------|
| Report Incident | Yes | Yes | Yes | Yes | Yes | Yes |
| Reports | Yes | Yes | Yes | Yes | Yes | Yes |
| Investigations | **No** | Yes | Yes | Yes | Yes | Yes |
| Recommendations | Yes | Yes | Yes | Yes | Yes | Yes |
| Analysis | Hidden* | Yes | Yes | Yes | Yes | Yes |
| Help and Support | Yes | Yes | Yes | Yes | Yes | Yes |
| Settings | Yes | Yes | Yes | Yes | Yes | Yes |

*Operator: Analysis not in nav but accessible via direct URL

### Page-Level Sub-Navigation

**Reports page (/reports)**:
- Status tabs: Active | Done | Rejected | Draft | All
- Each tab shows count in parentheses
- FILTER dropdown: Incident ID, Reported By, Reporter Type, Department, Status, Reported On
- EXPORT button

**Report Detail page (/reports/:uuid)**:
- Breadcrumb: ← Reports > REF/YYYY/XXXX • [Status]
- Conversation History button (top-right)
- Right sidebar: Report | Investigation | Recommendations (accordion)
- Action buttons vary by role (Safety Manager: REJECT/SUBMIT; Draft: DELETE/SUBMIT)

**Investigations page (/investigations)**:
- Type tabs: NEAR MISS INVESTIGATIONS | UC/UA INVESTIGATIONS
- Status tabs: In Progress | Released | Closed | All
- Table columns: Incident ID, Reported On, Summary, Reported By, Status, Classification

**Recommendations page (/recommendations)**:
- Type tabs: NEAR MISS RECOMMENDATIONS | UC/UA RECOMMENDATIONS
- Status tabs: Active | Done | All

**Analysis page (/analysis)**:
- Category tabs: ALL INCIDENTS | NEAR MISS | UNSAFE CONDITIONS | UNSAFE ACTS
- Filters: Department dropdown (10 departments), Date range picker
- EXPORT: CSV (active), PDF/Excel (Coming Soon)

## Known Navigation Issues (from Slack, status unverified in this pass)
- Breadcrumbs lose URL when navigating back (not tested -- no breadcrumbs visible)
- Side navigation tab positions were unstable -- **not observed** in current state
- HSEF Procedure Chatbot expected as second main menu item -- **not present**

## Header Elements
- **Top-left**: Hamburger icon (☰) + "ACME" logo text
- **No top navigation bar** -- all navigation is in the side panel
- **No notifications icon** observed
- **No search in header**

## Footer
- "Powered by [Raven logo]" -- visible at bottom of sidebar

## Related Workflows
- All workflows (navigation is cross-cutting)

## Update Rule
Keep this file focused on shared discovery context. Move workflow-specific findings into `apps/near-miss/learnings/` and selector-level details into `apps/near-miss/memory/selectors.md`.

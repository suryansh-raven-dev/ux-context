# Selectors: Near-Miss (NMMS)

## Current Status
Updated with deep exploration findings on 2026-03-21.

## Login Page (/login)

| Element | Selector | Confirmed |
|---------|----------|-----------|
| Email/ID input | `input[type="text"][placeholder*="email or Employee ID"]` | 2026-03-21 |
| NEXT button | `button:has-text("NEXT")` | 2026-03-21 |
| SELECT ROLE link | `a[href="/select-role"], button:has-text("SELECT ROLE")` | 2026-03-21 |

## Select Role Page (/select-role)

| Element | Selector | Confirmed |
|---------|----------|-----------|
| Role option (by text) | `text="Admin"`, `text="Operator - PP"`, etc. | 2026-03-21 |

## Side Navigation

| Element | Selector | Confirmed |
|---------|----------|-----------|
| Report Incident link | `a[href="/new-report"]:has-text("Report Incident")` | 2026-03-21 |
| Reports link | `a[href="/reports"]:has-text("Reports")` | 2026-03-21 |
| Investigations link | `a[href="/investigations"]:has-text("Investigations")` | 2026-03-21 |
| Recommendations link | `a[href="/recommendations"]:has-text("Recommendations")` | 2026-03-21 |
| Analysis link | `a[href="/analysis"]:has-text("Analysis")` | 2026-03-21 |
| Hamburger menu | top-left icon button | 2026-03-21 |
| Help and Support | `text="Help and Support"` | 2026-03-21 |
| Settings | `text="Settings"` | 2026-03-21 |
| User avatar/dropdown | bottom-left, user name + chevron | 2026-03-21 |

## Reports Page (/reports)

| Element | Selector | Confirmed |
|---------|----------|-----------|
| Active tab | `div:has-text("Active")` (contains count) | 2026-03-21 |
| Done tab | `div:has-text("Done")` (contains count) | 2026-03-21 |
| Rejected tab | `div:has-text("Rejected")` (contains count) | 2026-03-21 |
| Draft tab | `div:has-text("Draft")` (contains count) | 2026-03-21 |
| All tab | `div:has-text("All")` (contains count) | 2026-03-21 |
| FILTER button | `button:has-text("FILTER")` | 2026-03-21 |
| EXPORT button | `button:has-text("EXPORT")` | 2026-03-21 |
| Search input | `input[placeholder="Search Incident ID"]` | 2026-03-21 |
| Report table | `table` with headers: Incident ID, Reported On, Summary, Department, Reported By, Status | 2026-03-21 |
| Table row | `table tbody tr` | 2026-03-21 |
| Rows per page | `input[value="25"]` | 2026-03-21 |

## Filter Dropdown (/reports — FILTER button)

| Element | Selector | Confirmed |
|---------|----------|-----------|
| Incident ID filter | menu item `text="Incident ID"` with chevron | 2026-03-21 |
| Reported By filter | menu item `text="Reported By"` with chevron | 2026-03-21 |
| Reporter Type filter | menu item `text="Reporter Type"` with chevron | 2026-03-21 |
| Department filter | menu item `text="Department"` with chevron | 2026-03-21 |
| Status filter | menu item `text="Status"` with chevron | 2026-03-21 |
| Reported On filter | menu item `text="Reported On"` with chevron | 2026-03-21 |

## Report Detail Page (/reports/:uuid?tab=incident)

| Element | Selector | Confirmed |
|---------|----------|-----------|
| Back arrow | `← Reports` breadcrumb link | 2026-03-21 |
| Incident ID in breadcrumb | text after `>` in breadcrumb | 2026-03-21 |
| Status badge | colored badge next to ID in breadcrumb | 2026-03-21 |
| Conversation History button | `button:has-text("Conversation History")` (green) | 2026-03-21 |
| Section 1: Report Info | heading "Report Info" | 2026-03-21 |
| Section 2: Location Information | heading "Location Information" | 2026-03-21 |
| Section 3: Short Description | heading "Short Description" | 2026-03-21 |
| Section 4: Immediate Action | heading "Immediate Action Taken / Correction" | 2026-03-21 |
| Section 5: Reporter Information | heading "Reporter Information" | 2026-03-21 |
| Right sidebar: Report accordion | `text="Report"` in sidebar | 2026-03-21 |
| Right sidebar: Investigation accordion | `text="Investigation"` in sidebar | 2026-03-21 |
| Right sidebar: Recommendations accordion | `text="Recommendations"` in sidebar | 2026-03-21 |
| Status tracker: Draft | sidebar status step "Draft" | 2026-03-21 |
| Status tracker: Reported | sidebar status step "Reported" | 2026-03-21 |
| Status tracker: Approved by Safety | sidebar status step "Approved by Safety" | 2026-03-21 |
| Status tracker: Approved by Dept | sidebar status step "Approved by Dept" | 2026-03-21 |

### Safety Manager Role-Specific

| Element | Selector | Confirmed |
|---------|----------|-----------|
| Editable Short Description | `textarea` in section 3 | 2026-03-21 |
| Editable Immediate Action | `textarea` in section 4 | 2026-03-21 |
| Editable Department dropdown | `select` or `.MuiSelect-root` in section 2 | 2026-03-21 |
| REJECT REPORT button | `button:has-text("REJECT REPORT")` (red outline) | 2026-03-21 |
| SUBMIT button | `button:has-text("SUBMIT")` (purple filled, checkmark) | 2026-03-21 |

### Draft Report-Specific

| Element | Selector | Confirmed |
|---------|----------|-----------|
| DELETE REPORT button | `button:has-text("DELETE REPORT")` (red outline) | 2026-03-21 |
| SUBMIT REPORT button | `button:has-text("SUBMIT REPORT")` (purple filled) | 2026-03-21 |

## Investigations Page (/investigations)

| Element | Selector | Confirmed |
|---------|----------|-----------|
| NM Investigations tab | tab "NEAR MISS INVESTIGATIONS" | 2026-03-21 |
| UC/UA Investigations tab | tab "UC/UA INVESTIGATIONS" | 2026-03-21 |
| In Progress tab | `text="In Progress"` with count | 2026-03-21 |
| Released tab | `text="Released"` with count | 2026-03-21 |
| Closed tab | `text="Closed"` with count | 2026-03-21 |
| All tab | `text="All"` with count | 2026-03-21 |
| Table headers | Incident ID, Reported On, Summary, Reported By, Status, Classification | 2026-03-21 |
| Search input | `input[placeholder="Search Incident ID"]` | 2026-03-21 |

## Recommendation Detail Page

| Element | Selector | Confirmed |
|---------|----------|-----------|
| Section 1: Incident Details | heading "Incident Details" | 2026-03-21 |
| Section 2: Implementation Details | heading "Recommendation Implementation Details" | 2026-03-21 |
| CA ID | text "CA-XXX" | 2026-03-21 |
| CA Status badge | Done (green) / Pending (yellow) | 2026-03-21 |
| View Details link | `text="View Details"` with external link icon | 2026-03-21 |
| CLOSE REPORT button | `button:has-text("CLOSE REPORT")` | 2026-03-21 |
| Right sidebar: VIEW RECOMMENDATIONS | `button:has-text("VIEW RECOMMENDATIONS")` | 2026-03-21 |

## Report Incident Page (/new-report)

| Element | Selector | Confirmed |
|---------|----------|-----------|
| Page heading | "Report New Incident" | 2026-03-21 |
| Prompt text | "Report Near Miss, Unsafe Act, or Unsafe Condition" | 2026-03-21 |
| Chat input | placeholder "Please tell us what happened with as much detail as possible." | 2026-03-21 |
| Attachment icon | link/clip icon in chat input | 2026-03-21 |
| Microphone icon | mic icon in chat input | 2026-03-21 |

## Recommendations Page (/recommendations)

| Element | Selector | Confirmed |
|---------|----------|-----------|
| NM Recommendations tab | tab "NEAR MISS RECOMMENDATIONS" | 2026-03-21 |
| UC/UA Recommendations tab | tab "UC/UA RECOMMENDATIONS" | 2026-03-21 |
| Active tab | contains "Active" with count | 2026-03-21 |
| Done tab | contains "Done" with count | 2026-03-21 |
| VIEW ALL RECOMMENDATIONS link | `a:has-text("VIEW ALL RECOMMENDATIONS")` | 2026-03-21 |
| FILTER button | `button:has-text("FILTER")` | 2026-03-21 |
| EXPORT button | `button:has-text("EXPORT")` | 2026-03-21 |

## Analysis Page (/analysis)

| Element | Selector | Confirmed |
|---------|----------|-----------|
| ALL INCIDENTS tab | tab "ALL INCIDENTS" | 2026-03-21 |
| NEAR MISS tab | tab "NEAR MISS" | 2026-03-21 |
| UNSAFE CONDITIONS tab | tab "UNSAFE CONDITIONS" | 2026-03-21 |
| UNSAFE ACTS tab | tab "UNSAFE ACTS" | 2026-03-21 |
| Department dropdown | "All Departments" select | 2026-03-21 |
| Date range picker | "Year to Date" with calendar icon | 2026-03-21 |
| EXPORT button + dropdown | `button:has-text("EXPORT")` | 2026-03-21 |
| Export as CSV | menu item "Export as CSV" | 2026-03-21 |
| Export as PDF (Coming Soon) | menu item, disabled | 2026-03-21 |
| Export as Excel (Coming Soon) | menu item, disabled | 2026-03-21 |

## Department Filter Options (Analysis page)

All Departments, Administration, Ammonia 1, Ammonia 2, FCU, HSEF, Logistics, PE, PHD, PP

## Settings Menu (sidebar)

| Element | Selector | Confirmed |
|---------|----------|-----------|
| Profile | menu item "Profile" | 2026-03-21 |
| Change Password | menu item "Change Password" | 2026-03-21 |
| Switch to Dark Mode | menu item "Switch to Dark Mode" | 2026-03-21 |
| Manage Users | menu item "Manage Users" (external link icon) | 2026-03-21 |
| Sign Out | menu item "Sign Out" (red text) | 2026-03-21 |

## Profile Page (/profile)

| Element | Selector | Confirmed |
|---------|----------|-----------|
| Name input | `input` with label "Name*" | 2026-03-21 |
| Employee ID input | `input` with label "Employee ID" | 2026-03-21 |
| Email input | `input` with label "Email" | 2026-03-21 |
| Employee Type input | `input` with label "Employee Type" | 2026-03-21 |
| Unit dropdown | `select` with label "Unit*" | 2026-03-21 |
| Departments dropdown | `select` with label "Departments*" | 2026-03-21 |
| Gender dropdown | `select` with label "Gender*" | 2026-03-21 |
| SAVE PROFILE button | `button:has-text("SAVE PROFILE")` | 2026-03-21 |
| CANCEL button | `button:has-text("CANCEL")` | 2026-03-21 |

## Update Rule
Add confirmed selectors with the date they were verified. Mark selectors as stale if UI changes are observed.

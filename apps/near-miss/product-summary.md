# Product Summary: Near-Miss Incident Reporting System (NMMS)

## Product Positioning
AI-powered incident reporting and safety management platform for industrial facilities. Enables operators to report near-miss incidents, unsafe conditions, and unsafe acts through a conversational AI chatbot interface, with multi-level review and approval workflows.

## Client
Indorama (IPL/IFL/IFZ plants) — industrial manufacturing

## Platform Details

| Property | Value |
|----------|-------|
| Web URL (Production) | https://nmms.startraven.com |
| Web URL (Staging) | https://nmms.staging.startraven.com |
| Web Framework | React SPA |
| Mobile App | React Native (Android: com.startraven.com) |
| Backend | Python |
| Authentication | Stytch (email/password + magic link) + SELECT ROLE (staging bypass) |
| Page Title | "NMMS Dashboard" (login) / "Incident Reports" (main) |
| Branding (Staging) | "ACME" / "Acme Incident Reporting System" |
| Branding (Production) | "INDORAMA" / "Indorama Incident Reporting System" |
| Footer | "Powered by Raven" |

---

## Confirmed Application Screens (Updated 2026-03-21)

### 1. Login (/login)
- Single input: "Email or Employee ID or Contractor ID"
- Two-step flow: enter ID → NEXT → password screen
- SELECT ROLE bypass (staging only)
- No "Forgot Password" or "Register" links visible

### 2. Report Incident (/new-report)
- **Page heading**: "Report New Incident"
- AI-powered chat interface (native, not iframe — confirmed on Admin view)
- Prompt text: "Report Near Miss, Unsafe Act, or Unsafe Condition"
- Chat input: "Please tell us what happened with as much detail as possible."
- Has attachment icon (link/image) and microphone icon for voice input
- **Note**: On some sessions, an iframe version with "Indorama Incident Reporting System" branding appears instead (ACME/INDORAMA branding mismatch)

### 3. Reports (/reports)
- **Status tabs**: Active | Done | Rejected | Draft | All (with counts)
- **Table columns**: Incident ID, Reported On, Summary, Department, Reported By, Status
- **Controls**: Search by Incident ID, FILTER, EXPORT, Rows per page (default 25)
- **Report ID format**: REF/YYYY/XXXX
- **Observed statuses**: Draft, Reported, Approved by Safety, Approved by Dept, Done, Rejected
- **FILTER dropdown options**: Incident ID, Reported By, Reporter Type, Department, Status, Reported On (each with sub-options via chevron >)
- **Data volumes** (staging, 2026-03-21): 821 total reports

### 4. Report Detail (/reports/:uuid?tab=incident)
**The most important screen — varies significantly by role.**

**Layout (all roles)**:
- **Breadcrumb**: ← Reports > REF/YYYY/XXXX • [Status Badge]
- **Conversation History button** (top-right, green)
- **Numbered sections** in main content:
  1. **Report Info** — Incident ID, Date & Time
  2. **Location Information** — Department, Exact Location
  3. **Short Description** — incident description
  4. **Immediate Action Taken / Correction** — action text
  5. **Reporter Information** — Name, ID, Department, Employee Type, Gender, Reported On
- **Right Sidebar** — Incident ID, collapsible accordion:
  - **Report** (expanded by default): Status tracker showing Draft → Reported → Approved by Safety → Approved by Dept, plus Incident ID, Plant/Dept, Description, Classification
  - **Investigation** (collapsed)
  - **Recommendations** (collapsed)

**Role-specific behavior on Report Detail**:

| Feature | Admin | Operator | Safety Manager | HoD |
|---------|-------|----------|---------------|-----|
| View fields | Read-only | Read-only | **Editable** | Read-only |
| Short Description | Read-only text | Read-only text | **Text area (editable)** | Read-only text |
| Immediate Action | Read-only text | Read-only text | **Text area (editable)** | Read-only text |
| Department | Read-only text | Read-only text | **Dropdown (editable)** | Read-only text |
| REJECT REPORT button | No | No | **Yes** (red outline) | No |
| SUBMIT button | No | No | **Yes** (purple filled) | No |
| DELETE REPORT button | Only on Draft | Only on Draft | No | Only on Draft |
| SUBMIT REPORT button | Only on Draft | Only on Draft | No | Only on Draft |

**Draft Report Detail** (Admin/Operator):
- Same layout but shows "• Draft" badge
- Classification shows "No classification"
- Bottom actions: **DELETE REPORT** (red outline) + **SUBMIT REPORT** (purple filled)

### 5. Investigations (/investigations)
**Now confirmed as a DISTINCT page from Reports** (earlier observation was incorrect — it was loading Reports because the nav link wasn't navigating correctly).

- **Page heading**: "Investigations"
- **Type tabs**: NEAR MISS INVESTIGATIONS | UC/UA INVESTIGATIONS
- **Status tabs**: In Progress (48) | Released (37) | Closed (8) | All (93)
- **Table columns**: Incident ID, Reported On, Summary, Reported By, Status, Classification
- **Incident ID format** (different from Reports): UNIT-1/2026/NM/XXXX or IPL/2026/NM/XXXX
- **Statuses**: In-Progress (blue badge)
- **Classifications observed**: Workplace Safety Near Miss, Process Safety Near Miss
- **Controls**: Search Incident ID, FILTER, EXPORT
- **Pagination**: 1–25 of 48
- **Not visible to**: Operator role

### 6. Recommendations (/recommendations)
**List View**:
- **Type tabs**: NEAR MISS RECOMMENDATIONS | UC/UA RECOMMENDATIONS
- **Status tabs**: Active (158) | Done (60) | All (218)
- Grouped by Incident ID, each showing recommendation table
- FILTER and EXPORT buttons

**Detail View** (clicking VIEW ALL RECOMMENDATIONS):
- **URL**: /reports/:uuid?status=active&tab=recommendations
- **Sections**:
  1. Incident Details — ID, Date, Department, Exact Location, Brief Description
  2. Recommendation Implementation Details — individual CAs (corrective actions)
- **Each CA shows**: ID (CA-XXX), Status badge (Done/Pending), Recommendation text, Assignee, Target Date, Completed Date, "View Details" link
- **Right sidebar**: Report / Investigation / Recommendations accordion with VIEW RECOMMENDATIONS button
- **CLOSE REPORT** button at bottom (when all recommendations are done)

### 7. Analysis (/analysis)
- **Category tabs**: ALL INCIDENTS | NEAR MISS | UNSAFE CONDITIONS | UNSAFE ACTS
- **Filters**: Department dropdown, Date range ("Year to Date")
- **Report Summary** (3 cards per tab):

**ALL INCIDENTS tab**:

| Card | Reported | Closed | Rate | Depts | Top | MoM |
|------|----------|--------|------|-------|-----|-----|
| INCIDENTS | 231 | 121 | 34% | 6 | PP (208) | -78% vs Feb |
| INVESTIGATIONS | 103 | 23 | 18% | 3 | PP (85) | -81% vs Feb |
| RECOMMENDATIONS | 86 | 21 | 20% | 3 | PP (73) | -67% vs Feb |

**UNSAFE ACTS tab**:

| Card | Reported | Closed | Rate | Depts | Top | MoM |
|------|----------|--------|------|-------|-----|-----|
| UA INCIDENTS | 7 | 3 | 30% | 2 | PP (6) | -100% vs Feb |
| UA INVESTIGATIONS | 7 | 3 | 30% | 2 | PP (6) | -100% vs Feb |
| UA RECOMMENDATIONS | 86 | 21 | 20% | 3 | PP (73) | -67% vs Feb |

- **Charts**: Incident Trend (Reported vs Closed line chart), Resolution Rate (monthly % line chart)
- **EXPORT dropdown**: Export as CSV (active), Export as PDF (Coming Soon), Export as Excel (Coming Soon)
- **Department filter options**: All Departments, Administration, Ammonia 1, Ammonia 2, FCU, HSEF, Logistics, PE, PHD, PP

### 8. Profile (/profile)
- Fields: Name*, Employee ID, Email, Employee Type, Unit* (dropdown), Departments* (dropdown), Gender* (dropdown)
- SAVE PROFILE and CANCEL buttons

### 9. Settings (sidebar dropdown)
Settings is a dropdown menu (not a separate page) that appears when clicking the gear icon:
- **Profile** — links to /profile
- **Change Password** — password change flow
- **Switch to Dark Mode** — theme toggle
- **Manage Users** — external link (opens new tab) for user management
- **Sign Out** — logout

---

## Roles and Permissions (Confirmed 2026-03-21)

| Role | Reports | Report Detail Actions | Investigations | Recommendations | Analysis | Report Scope |
|------|---------|----------------------|----------------|-----------------|----------|-------------|
| Admin | Yes | Draft: Delete/Submit | Yes | Yes | Yes | All (821) |
| Operator | Yes | Draft: Delete/Submit | **No** | Yes | URL only | Dept (623) |
| Safety Mgr | Yes | **Edit fields + Reject/Submit** | Yes | Yes | Yes | All (821) |
| HoD-PP | Yes | Read-only | Yes | Yes | Yes | All (821) |
| HoD-PE | Yes | Read-only | Yes | Yes | Yes | All (821) |
| HoS-PP | Yes | Read-only | Yes | Yes | Yes | All (821) |
| HSEF | Yes | Read-only | Yes | Yes | Yes | All (821) |

## Incident Lifecycle (Confirmed from UI)

```
Draft ──→ Reported ──→ Approved by Safety ──→ Approved by Dept ──→ Done
  │                          │
  └─ DELETE REPORT           └─ REJECT REPORT (Safety Manager)
     (Admin/Operator)
```

Status tracker in right sidebar shows 4 stages: **Draft → Reported → Approved by Safety → Approved by Dept**

## Departments (Confirmed from Analysis filter)
Administration, Ammonia 1, Ammonia 2, FCU, HSEF, Logistics, PE, PHD, PP

## Incident Classifications (Confirmed from Investigations)
- Workplace Safety Near Miss
- Process Safety Near Miss
- Unsafe Condition
- Unsafe Act

## Test Accounts (Staging — SELECT ROLE)

| Role | Display Name | Employee ID | Email | Unit | Dept |
|------|-------------|-------------|-------|------|------|
| Admin | Manikandan | ADMIN123 | manikandan@indorama.com | IFZ | PP |
| Operator - PP | Asaimani chandrasekaran | IR5547 | — | — | PP,PE,Logistics |
| Safety Manager | Ravi Gupta | — | — | — | — |
| HoD - PP | P C Sharma | — | — | — | PP |
| HoD - PE | Mahendra Jain | — | — | — | PE |
| HoS - PP | Pradeep Pawar | — | — | — | PP |
| HSEF Ambassador - PP | Vikas Manker | — | — | — | PP |

## Known Issues
5 confirmed from initial pass + several new from deep exploration. See `apps/near-miss/memory/known-issues.md` for full list.

## High-Value Workflows for Testing
1. **Incident Reporting** (Operator → AI Chat → Report created) — chat flow documented
2. **Safety Manager Review** (Edit fields, Reject/Submit actions on report detail)
3. **Investigation Workflow** (Investigations page → individual investigation detail)
4. **Recommendations Tracking** (Recommendations → CA detail → View Details → Close Report)
5. **Analysis Dashboard** (Metrics, charts, filters, export — CSV works, PDF/Excel coming soon)
6. **Authentication** (Login flows, password, role switching)
7. **Settings** (Profile, Change Password, Dark Mode, Manage Users, Sign Out)

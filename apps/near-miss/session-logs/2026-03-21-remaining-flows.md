# Session Log: 2026-03-21 — NMMS Remaining Flows

## Objective
Complete the 6 remaining exploration gaps: AI chat flow, HoD actions on Approved by Safety, Change Password, Dark Mode, Investigation details, Manage Users, Done/Rejected report details.

## Environment
- URL: https://nmms.staging.startraven.com
- Date: 2026-03-21
- Tool: Playwright headless Chromium

## Flow Results

### Flow 1: AI Chat — Report New Incident
- **Page**: /new-report, title "Report New Incident"
- **Chat prompt**: "Report Near Miss, Unsafe Act, or Unsafe Condition"
- **Input**: "Please tell us what happened with as much detail as possible."
- **Icons**: Attachment (clip icon), Microphone (voice input)
- **Behavior**: The chat interface is embedded. On some sessions an iframe with "Indorama" branding loads instead.
- **Note**: Full AI conversation not captured in headless mode (requires real-time interaction).

### Flow 2: HoD on "Approved by Safety" Reports (CRITICAL FINDING)
**HoD (P C Sharma) viewing an "Approved by Safety" report**:
- Status badge: "• Approved by Safety" (blue)
- Sidebar status tracker: Draft ✓ → Reported ✓ → Approved by Safety ✓ → Approved by Dept ○
- **Fields are EDITABLE**: Short Description (textarea), Immediate Action (textarea), Department (dropdown with Exact Location)
- **Action buttons**: **RETURN REPORT** (red outline, left) + **APPROVE REPORT** (purple filled, right)
- **Classification shown**: "Unsafe Condition" (set by Safety Manager)

**Safety Manager viewing same "Approved by Safety" report**:
- Same report shows APPROVE REPORT button
- This suggests Safety Manager and HoD share the approval capability on this status

**Complete Workflow Map**:
| Report Status | Safety Manager Actions | HoD Actions | Admin/Operator |
|--------------|----------------------|-------------|---------------|
| Draft | — | — | DELETE REPORT, SUBMIT REPORT |
| Reported | REJECT REPORT, SUBMIT (edit fields) | — | Read-only |
| Approved by Safety | APPROVE REPORT | **RETURN REPORT, APPROVE REPORT** (edit fields) | Read-only |
| Approved by Dept | — | — | Read-only |
| Done | — | — | Read-only |
| Rejected by Dept | — | — | Read-only |

### Flow 3: Change Password
- **Type**: Modal dialog (not separate page)
- **Fields**: Current Password*, New Password*, Confirm New Password* (each with show/hide eye icon)
- **Password requirements**: "At least 8 characters", "Passwords match"
- **Buttons**: CANCEL, CHANGE PASSWORD (purple filled)
- **Appears over**: Current page (e.g., Analysis)

### Flow 3: Dark Mode
- **Toggle**: Settings → "Switch to Dark Mode"
- **Effect**: Full dark theme applied to entire application
  - Dark background (#1a1a2e), light text
  - Sidebar darkened
  - Tables with dark rows
  - Charts remain readable with adjusted colors
  - Status badges and tabs maintain color contrast
- **Toggle back**: Settings → "Switch to Light Mode"
- **Persistence**: Appears to persist across page navigation within session

### Flow 4: Investigation Detail (CRITICAL FINDING)
- **URL pattern**: /reports/:uuid?tab=investigation&redirect_path=%2Finvestigations
- **Breadcrumb**: ← Investigations > UNIT-1/2026/NM/0006 • In-Progress
- **Page heading**: "Run Agentic AI Investigation"
- **Primary CTA**: **RUN INVESTIGATION** button (purple, large, with search icon)
- **Empty state**: "No Investigation Run Yet" / "The investigation details will appear here after you run the Agentic AI investigation."
- **Right sidebar**:
  - Report (collapsed accordion)
  - **Investigation** (expanded): Status tracker: In-Progress ✓ → Released ○ → Closed ○
  - Investigation ID: UNIT-1/2026/NM/0006 (REF/2026/0260)
- **History icon**: Top-right (clock/history icon)

**This confirms investigations use AI-generated analysis ("Agentic AI Investigation") and must be triggered manually by clicking RUN INVESTIGATION.**

### Flow 5: Manage Users
- **Link type**: External, opens new tab
- **Target URL**: admin.staging.startraven.com/auth (through Vercel SSO)
- **Lands on**: Vercel login page ("Log in to Vercel")
- **Login options**: Email, Google, GitHub, Apple, SAML SSO, Passkey
- **Conclusion**: User management is a separate admin panel hosted on Vercel, requiring separate Vercel account access. Not accessible from NMMS credentials alone.

### Flow 6: Done Report Detail
- **Status badge**: "• Approved by Dept" (blue)
- **Sidebar status**: All 4 stages completed: Draft ✓ → Reported ✓ → Approved by Safety ✓ → Approved by Dept ✓
- **Incident ID format**: UNIT-1/2026/NM/0007 (REF/2026/0373)
- **All fields read-only**
- **No action buttons** — report is finalized
- **Sample data**: Department PE, Location "Unit 4", Description "Raj Oberoi slipped", Action "D 510 was immediately depressurised and a report was given to the shift in charge"

### Flow 6: Rejected Report Detail
- **Status badge**: "• Rejected by Dept" (red)
- **Sidebar status**: Draft ✓ → Reported ✓ → Approved by Safety ✓ → **Rejected by Dept** ✗ (red)
- **All fields read-only**
- **No action buttons** — report is finalized (rejected)
- **Note**: Status shows "Rejected by Dept" not just "Rejected" — indicates HoD can reject even after Safety Manager approval

## Key Insights
1. The approval workflow has TWO approval stages: Safety Manager THEN HoD
2. HoD can RETURN a report (send back to Safety Manager) or APPROVE it
3. Both Safety Manager and HoD have editable fields on their respective action stages
4. Investigations are AI-powered ("Agentic AI") and triggered manually
5. Once a report reaches Done or Rejected, no further actions are available
6. Manage Users is an external Vercel-hosted admin panel

## Evidence
- Screenshots: `screenshots/remaining-flows/` (25+ files)
- JSON reports: `screenshots/remaining-flows/remaining_flows_report.json`, `final_fix_report.json`

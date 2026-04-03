# Known Issues

## Current Status
52 issues recorded across 5 sources: 3 from first exploration (2026-03-21), 13 from Slack Mar 17 thread, 7 from Mar 19, 17 from Mar 20, 15 from Mar 21.

## Logging Format
For each issue, capture:
- title
- workflow
- severity
- environment
- reproduction notes
- evidence location
- current status

---

### KI-001: Settings Page Blank When Navigated Directly
- **Workflow**: Settings / Navigation
- **Severity**: Low (cosmetic/UX)
- **Environment**: ifz.startraven.com
- **Description**: Navigating directly to `/settings` renders a blank content area. The Settings functionality is only accessible via the popup menu triggered by clicking "Settings" in the sidebar. Direct URL navigation does not show the popup.
- **Reproduction**: Login → navigate to `https://ifz.startraven.com/settings` → observe blank content area.
- **Evidence**: `screenshots/deep/08_settings_page.png`
- **Status**: Open — unclear if this is intentional (Settings is a popup, not a page) or a missing redirect.

### KI-002: Help & Support Redirects to Search
- **Workflow**: Settings / Workplace Settings
- **Severity**: Low
- **Environment**: ifz.startraven.com
- **Description**: Clicking "Help & Support" in the Workplace Settings sidebar navigates to `/search` (the main search page) instead of a help/support page. The link `href` is set to `/`.
- **Reproduction**: Settings popup → Workplace Settings → click "Help & Support" in left sidebar.
- **Evidence**: `screenshots/settings/37_workplace_help_support.png`
- **Status**: Open — likely not implemented yet.

### KI-003: Domain Switcher Backdrop Intercepts Clicks
- **Workflow**: Navigation / Domain Selection
- **Severity**: Medium (automation-blocking)
- **Environment**: ifz.startraven.com
- **Description**: When opening the domain dropdown in the sidebar, a MUI backdrop element (`MuiBackdrop-root`) appears and intercepts pointer events on other elements. This prevents automated clicking of domain options via Playwright without first dismissing or bypassing the backdrop.
- **Reproduction**: Open domain dropdown → attempt to click a domain option programmatically → backdrop intercepts the click.
- **Evidence**: Error log from exploration script showing `MuiBackdrop-root MuiBackdrop-invisible MuiModal-backdrop` intercepting clicks.
- **Status**: Open — workaround: use JavaScript click or force-click to bypass backdrop.

---

## Issues From Slack #product Thread — 2026-03-17
Source: [Mar 17 thread](https://raven-platform.slack.com/archives/C03EQUH3S9F/p1773728510747019)
Environment: `copilot.startraven.com` (Block Imaging)
Test account: `ben.rolff@blockimaging.com` / `BlockImaging@123`

### KI-004: Feedback Recording Fails
- **Workflow**: Search / Plant Knowledge Hub — Feedback
- **Severity**: High (core feedback loop broken)
- **Environment**: copilot.startraven.com
- **Description**: Clicking thumbs up/down on AI answers shows error "Failed to record your feedback." Feedback mechanism is non-functional on Block Imaging deployment.
- **Reproduction**: Login as Block Imaging user → ask a question → click thumbs up or thumbs down on the AI answer.
- **Evidence**: Slack attachment `image.png` on issue #1, Mar 17 thread.
- **Status**: Open — marked with checkmark reaction but no fix confirmation in thread.

### KI-005: Sources Missing In Multiple Queries
- **Workflow**: Search / Plant Knowledge Hub — Source Citations
- **Severity**: High (violates traceability oracle)
- **Environment**: copilot.startraven.com
- **Description**: Multiple queries return AI answers without any source citations. The SOURCES tab either shows 0 sources or source references are absent from the answer text.
- **Reproduction**: Login as Block Imaging user → ask various plant-related questions → observe missing source references.
- **Evidence**: Slack attachment `image.png` on issue #2, Mar 17 thread.
- **Status**: Open.

### KI-006: Answer Loading Failure
- **Workflow**: Search / Plant Knowledge Hub — Answer Generation
- **Severity**: Critical (complete workflow failure)
- **Environment**: copilot.startraven.com
- **Description**: Some queries result in "Failed to load Answer" error instead of an AI-generated response. The core Q&A workflow completely fails.
- **Reproduction**: Login as Block Imaging user → submit a query → observe "Failed to load Answer" error.
- **Evidence**: Slack attachment `image.png` on issue #3, Mar 17 thread.
- **Status**: Open.

### KI-007: Answer Formatting Broken — Raw Commands Leaking
- **Workflow**: Search / Plant Knowledge Hub — Answer Rendering
- **Severity**: Medium (usability)
- **Environment**: copilot.startraven.com
- **Description**: AI answer text output is weirdly formatted with raw commands or markup leaking into the rendered response. The text styling does not match expected clean output (compared to reference styling in attached screenshot).
- **Reproduction**: Login as Block Imaging user → ask a question that triggers a structured response → observe formatting artifacts.
- **Evidence**: Slack attachments `Screenshot 2026-03-17 at 11.59.26 AM.png` (reference) and `image.png` (actual) on issue #4.
- **Status**: Open.

### KI-008: Single-Option Dropdown In Data Management
- **Workflow**: Navigation / Data Management
- **Severity**: Low (UX anti-pattern)
- **Environment**: copilot.startraven.com
- **Description**: The Data Management section shows a dropdown menu with only a single option. A dropdown with one item is pointless UX — the page should be directly accessible from the sidebar navigation.
- **Reproduction**: Navigate to Data Management → observe single-option dropdown.
- **Evidence**: Slack attachment `image.png` on issue #5, Mar 17 thread.
- **Status**: Open.

### KI-009: Button Elevation Removed And Icon Styling Inconsistent
- **Workflow**: UI Consistency / Global
- **Severity**: Low (cosmetic)
- **Environment**: copilot.startraven.com
- **Description**: Button elevation (shadow) is being masked out or removed. Icon styling is inconsistent across the app — some icons use rounded styling while others do not. All icons should use the same rounded styling.
- **Reproduction**: Navigate through the app → compare button elevations and icon shapes across pages.
- **Evidence**: Slack attachment `Screenshot 2026-03-17 at 12.31.00 PM.png` on issue #6.
- **Status**: Open.

### KI-010: Empty Department Dropdown
- **Workflow**: Settings / Account — Profile
- **Severity**: Medium (confusing UX)
- **Environment**: copilot.startraven.com
- **Description**: The Dept. dropdown in user profile or registration is shown empty — no options available. Should either not display the field at all or populate it with valid department options.
- **Reproduction**: Navigate to profile or registration → observe empty Dept dropdown.
- **Evidence**: Slack attachment `Screenshot 2026-03-17 at 12.34.03 PM.png` on issue #7.
- **Status**: Open.

### KI-011: ADD TAG Feature Missing From File Actions
- **Workflow**: Data Explorer — File Management
- **Severity**: Medium (feature gap)
- **Environment**: copilot.startraven.com
- **Description**: The file action menu lacks an "ADD TAG" option for uploaded files. Additionally, the menu text is repetitive ("Download File", "Rename File", etc.) — the word "File" is redundant and should be shortened to "Download, Rename, Add/Edit Tag, Delete File."
- **Reproduction**: Open Data Explorer → click three-dot action menu on a file → observe no tag option.
- **Evidence**: Slack attachment `image.png` on issue #8, Mar 17 thread.
- **Status**: Open.

### KI-012: File Preview Header Not Adaptive
- **Workflow**: Data Explorer — File Preview
- **Severity**: Medium (usability)
- **Environment**: copilot.startraven.com
- **Description**: The header bar in the file preview is not responsive/adaptive. Options and controls get cropped or overflow outside the visible area at certain viewport widths.
- **Reproduction**: Open Data Explorer → click to preview a file → observe header cropping.
- **Evidence**: Slack attachment `image.png` on issue #9, Mar 17 thread.
- **Status**: Open.

### KI-013: File Tags Not Auto-Allotted
- **Workflow**: Data Explorer — File Tagging
- **Severity**: Medium (appears as a bug)
- **Environment**: copilot.startraven.com
- **Description**: Files do not have tags automatically assigned after upload. The Tags column appears empty for files, which looks like a bug — files should be auto-tagged based on content or category.
- **Reproduction**: Open Data Explorer → observe files with empty Tags column.
- **Evidence**: Slack attachment `Screenshot 2026-03-17 at 12.48.04 PM.png` on issue #10.
- **Status**: Open.

### KI-014: P&ID "Coming Soon" Shown When No Data Exists
- **Workflow**: P&ID / Navigation
- **Severity**: Low (misleading UX)
- **Environment**: copilot.startraven.com
- **Description**: The P&ID "coming soon" option is visible to users even when their data has no P&ID files. This should be hidden entirely if no P&ID data is available for the customer.
- **Reproduction**: Login as Block Imaging user → observe P&ID "coming soon" in navigation.
- **Evidence**: Slack attachment `Screenshot 2026-03-17 at 2.15.02 PM.png` on issue #11.
- **Status**: Open. Same pattern observed on IFZ ("No files found").

### KI-015: Responsiveness And Empty State Styling Issues
- **Workflow**: UI Consistency / Global
- **Severity**: Low (cosmetic/UX)
- **Environment**: copilot.startraven.com
- **Description**: Page responsiveness is broken in places. Empty state components are poorly displayed. Internal card backgrounds use grey instead of white, which looks incorrect.
- **Reproduction**: Navigate to pages with empty states → observe grey background fill on inner cards and broken responsive layout.
- **Evidence**: Slack attachment `Screenshot 2026-03-17 at 2.18.31 PM.png` on issue #12.
- **Status**: Open.

### KI-016: Tag Management Tab Missing
- **Workflow**: Data Explorer — File Tagging
- **Severity**: Medium (feature gap)
- **Environment**: copilot.startraven.com
- **Description**: There is no centralized "Tag Management" tab or page where users can view, edit, add, or delete file tags. This is requested as a feature — a dedicated tab displaying all file tags with CRUD operations.
- **Reproduction**: Navigate through Data Explorer and Settings → no tag management page exists.
- **Evidence**: Slack attachment `Screenshot 2026-03-17 at 2.34.35 PM.png` on issue #13.
- **Status**: Open — feature request.

---

## Issues From Slack #product Thread — 2026-03-19
Source: [Mar 19 thread](https://raven-platform.slack.com/archives/C03EQUH3S9F/p1773906343863239)
Environment: Not specified (likely ifz.startraven.com based on context)

### KI-017: Navigation Tab Corner Radii Wrong (4px Instead Of 8px)
- **Workflow**: UI Consistency / Navigation
- **Severity**: Low (cosmetic)
- **Description**: Navigation tabs use 4px corner radius instead of the specified 8px.
- **Evidence**: `Screenshot 2026-03-19 at 1.14.06 PM.png`
- **Status**: Acknowledged (checkmark).

### KI-018: Outlined Icons Instead Of Rounded — Selected State Missing Rounded
- **Workflow**: UI Consistency / Navigation
- **Severity**: Low (cosmetic)
- **Description**: Side navigation uses outlined icons instead of rounded. Selected (active) tab icons must use rounded style.
- **Status**: Acknowledged (checkmark). Recurring theme — also raised as KI-009 on Mar 17.

### KI-019: P&ID Tab Shown When No Files Exist
- **Workflow**: P&ID / Navigation
- **Severity**: Low (misleading UX)
- **Description**: P&ID tab visible in navigation even when no P&ID files are available.
- **Evidence**: `image.png` on issue #3.
- **Status**: Open. **RECURRENCE** — same as KI-014 (Mar 17) and re-raised Mar 21 (#10). Unfixed across 3 threads.

### KI-020: Settings Tab Missing Selected State Indicator
- **Workflow**: UI Consistency / Navigation
- **Severity**: Low (cosmetic)
- **Description**: Settings tab in navigation lacks a visual "selected" state when active.
- **Evidence**: `image.png` on issue #4.
- **Status**: Acknowledged (checkmark).

### KI-021: "DATA" Sub-Header Text Unnecessary In Sidebar
- **Workflow**: UI Consistency / Navigation
- **Severity**: Low (cosmetic)
- **Description**: The "DATA" sub-header label in the sidebar adds noise and should be removed.
- **Evidence**: `image.png` on issue #5.
- **Status**: Acknowledged (checkmark).

### KI-022: Click Not Working On Dashboard Element
- **Workflow**: Settings / Workplace Dashboard
- **Severity**: Medium (functional)
- **Description**: A clickable element on the Workplace Dashboard is non-responsive.
- **Evidence**: `Screenshot 2026-03-19 at 1.36.57 PM.png`
- **Status**: Acknowledged (checkmark).

### KI-023: Dashboard Legend Colors Don't Match Graph Colors
- **Workflow**: Settings / Workplace Dashboard
- **Severity**: Medium (misleading data viz)
- **Description**: The legend dot colors (e.g., Manual marker) do not match the corresponding colors in the graph. This makes the chart misleading.
- **Evidence**: `Screenshot 2026-03-20 at 12.10.28 PM.png`
- **Status**: Acknowledged (checkmark).

---

## Issues From Slack #product Thread — 2026-03-20
Source: [Mar 20 thread](https://raven-platform.slack.com/archives/C03EQUH3S9F/p1773916442974119)
Environment: `ifz.startraven.com` and `ipl.startraven.com`
Admin accounts: IFZ `copilot-admin-001`, IPL `copilot-admin-ipl`, Password `RavenTesting@123`

### KI-024: Users Tab Not Clickable In Workplace Settings (IFZ)
- **Workflow**: Settings / Workplace Settings — User Management
- **Severity**: High (admin workflow blocked)
- **Environment**: ifz.startraven.com
- **Description**: Workplace Settings > Users tab is non-responsive / not clickable. Admin cannot access user management.
- **Evidence**: `Screenshot 2026-03-20 at 2.22.12 PM.png`
- **Status**: Fixed by Abhishek (same day). **Re-broken** on Mar 21 (issue #7).

### KI-025: Role Access Tab White Screen
- **Workflow**: Settings / Workplace Settings — Roles
- **Severity**: High (admin workflow blocked)
- **Environment**: ifz.startraven.com
- **Description**: Clicking Role Access tab renders a white/blank screen.
- **Evidence**: `Screenshot 2026-03-20 at 2.36.52 PM.png`
- **Status**: Acknowledged (checkmark).

### KI-026: ALL TIME Filter Text Wrapping To 2 Lines
- **Workflow**: Settings / Workplace Dashboard
- **Severity**: Low (cosmetic)
- **Environment**: ifz.startraven.com
- **Description**: The "All Time" filter dropdown text wraps to two lines instead of fitting on one.
- **Evidence**: `Screenshot 2026-03-20 at 2.37.42 PM.png`
- **Status**: Acknowledged (checkmark).

### KI-027: IFZ Admin Portal App Link Not Working
- **Workflow**: Admin Portal / Navigation
- **Severity**: High (admin workflow blocked)
- **Environment**: admin.ifz.startraven.com
- **Description**: Clicking the Indorama Chatbot (IFZ) application link in `admin.ifz.startraven.com` does nothing. Root cause: admin frontend URL missing from account config.
- **Evidence**: `Screenshot 2026-03-20 at 2.34.14 PM.png`, `Screenshot 2026-03-20 at 2.34.32 PM.png`
- **Status**: Fixed by Abhishek (same day, issues 1 and 4 together).

### KI-028: Registration Error After Admin Password Clear (Stytch Redirect URI)
- **Workflow**: Authentication — Registration
- **Severity**: Critical (blocks user onboarding)
- **Environment**: ifz.startraven.com
- **Description**: After admin clears a user's password and user tries to register, registration succeeds but login fails because the Stytch redirect URI wasn't updated when the domain changed from `ifl.startraven.com` to `ifz.startraven.com`. Second attempt shows "user already exists" error.
- **Root Cause**: Stytch redirect URI config mismatch after domain rename.
- **Evidence**: `image.png` on issue #5.
- **Status**: Fixed by Abhishek (Stytch config corrected).

### KI-029: Login Failure After Successful Registration
- **Workflow**: Authentication — Login
- **Severity**: Critical (blocks user access)
- **Environment**: ifz.startraven.com
- **Description**: User cannot login even though account was created successfully in the registration step.
- **Evidence**: `Screenshot 2026-03-20 at 3.31.28 PM.png`
- **Status**: Fixed (related to KI-028).

### KI-030: Indorama Logo Scale Too Large On Login Screen
- **Workflow**: Authentication / UI
- **Severity**: Low (cosmetic)
- **Environment**: ifz.startraven.com
- **Description**: Indorama logo on the login/registration screen is disproportionately large.
- **Evidence**: `image.png` on issue #7.
- **Status**: Acknowledged (checkmark).

### KI-031: Password Login Fails Despite Verified Email And Successful Registration
- **Workflow**: Authentication — Password Login
- **Severity**: High
- **Environment**: ifz.startraven.com
- **Description**: Email is verified, registration was successful, but password login still fails. Root cause: Stytch account locked (429) due to too many failed auth attempts.
- **Evidence**: `image.png`, `Screenshot 2026-03-20 at 4.49.49 PM.png`
- **Status**: Explained — Stytch rate-limiting. Use employee ID login path for testing.

### KI-032: Unit Field Should Not Show Inside Domain-Specific View
- **Workflow**: Settings / Account — Registration
- **Severity**: Medium
- **Environment**: ifz.startraven.com
- **Description**: Unit/Domain field appears during registration inside a domain-specific deployment (IFZ). User is already inside the domain, so this field is redundant. Caused by admin setting unit to "both" during invitation.
- **Evidence**: `Screenshot 2026-03-20 at 4.58.34 PM.png`, `Screenshot 2026-03-20 at 4.58.55 PM.png`
- **Status**: Acknowledged. Priyansh confirmed: "In admin console both shouldn't be an option. Since it's domain based."

### KI-033: Dept Dropdown Shows Only One Option During Registration
- **Workflow**: Authentication — Registration
- **Severity**: Medium
- **Environment**: ifz.startraven.com
- **Description**: During registration, Dept dropdown shows only one option (HSEF) instead of the department the admin assigned. Should show admin-assigned department as prefilled.
- **Evidence**: `Screenshot 2026-03-20 at 5.03.10 PM.png`, `Screenshot 2026-03-20 at 5.03.37 PM.png`
- **Status**: Open. May be related to KI-032 ("both" unit state).

### KI-034: Generic Sub-Header Not Relevant To Customer
- **Workflow**: Authentication / UI Branding
- **Severity**: Low (branding)
- **Environment**: ifz.startraven.com
- **Description**: Sub-header text "The AI platform for process industries" is generic Raven branding, not relevant to Indorama's context. Should be configurable per customer or removed.
- **Evidence**: `Screenshot 2026-03-20 at 5.09.11 PM.png`
- **Status**: Acknowledged (checkmark).

### KI-035: Magic Link "Failed to Authenticate" After Password Clear
- **Workflow**: Authentication — Magic Link
- **Severity**: Critical
- **Environment**: ifz.startraven.com
- **Description**: After admin clears password and user re-registers, magic link from email shows "Failed to Authenticate." Root cause: Stytch account locked (429 rate limit).
- **Evidence**: `Screenshot 2026-03-20 at 5.13.47 PM.png`
- **Status**: Fixed (magic link issue). Account still locked from rate limiting.

### KI-036: Unverified Users Can Access Search And Documents
- **Workflow**: Authentication / Authorization
- **Severity**: Critical (security)
- **Environment**: ifz.startraven.com
- **Description**: Users marked as "unverified" on the admin portal can still access search and documents. The verification status is not enforced as a gate.
- **Status**: Under investigation — need to verify if issue is in admin portal or raven-chatbot.

### KI-037: Magic Link Loading Indefinitely
- **Workflow**: Authentication — Magic Link
- **Severity**: High
- **Environment**: ifz.startraven.com
- **Description**: After clicking magic link from email, the application screen shows an infinite loading state. User cannot proceed.
- **Evidence**: `Screen Recording 2026-03-20 at 6.33.23 PM.mov`
- **Status**: Open. Likely related to Stytch lockout.

### KI-038: Unable To Login With Employee ID
- **Workflow**: Authentication — Employee ID Login
- **Severity**: High
- **Environment**: ifz.startraven.com
- **Description**: Unable to login using Employee ID "SURYANSH" on IFZ.
- **Evidence**: `image.png` on issue #15.
- **Status**: Open. May be related to account lockout state.

### KI-039: Users Tab Not Clickable In Workplace Settings (IPL)
- **Workflow**: Settings / Workplace Settings — User Management
- **Severity**: High (admin workflow blocked)
- **Environment**: ipl.startraven.com
- **Description**: Same as KI-024 but on IPL deployment. Users tab is non-responsive.
- **Evidence**: `Screenshot 2026-03-20 at 7.18.11 PM.png`
- **Status**: Acknowledged (checkmark). **Cross-environment recurrence** of KI-024.

### KI-040: Feedback Not Displayed Despite API Returning Data
- **Workflow**: Settings / Feedback — Dashboard
- **Severity**: High (data pipeline)
- **Environment**: ipl.startraven.com
- **Description**: The feedback section on the dashboard shows no data even though the feedback API returns results. Frontend not consuming API response correctly.
- **Evidence**: `Screenshot 2026-03-20 at 7.50.11 PM.png`
- **Status**: Open. Assigned to Rohith.

---

## Issues From Slack #product Thread — 2026-03-21
Source: [Mar 21 thread](https://raven-platform.slack.com/archives/C03EQUH3S9F/p1774077808122129)
Environment: `ifz.startraven.com`, `ipl.startraven.com`, `admin.startraven.com`, `copilot.startraven.com`

### KI-041: IFZ Admin Portal Link Still Not Fixed (Regression From Mar 20)
- **Workflow**: Admin Portal / Navigation
- **Severity**: High (regression)
- **Environment**: admin.ifz.startraven.com
- **Description**: Issue #4 from Mar 20 (KI-027) reported as still not fixed. Verifying a previous fix revealed it didn't hold.
- **Status**: Fixed by Abhishek (issues 1-4 resolved together). New approach: show "not authenticated" screen instead of redirect.

### KI-042: IPL Admin Can Access IFZ (Cross-Tenant Access)
- **Workflow**: Authorization / Multi-Tenant
- **Severity**: Critical (security — tenant isolation)
- **Environment**: admin portals
- **Description**: The admin URL is for IPL, but users can also access IFZ data/admin. Tenant isolation is broken.
- **Evidence**: `Screenshot 2026-03-21 at 12.54.45 PM.png`
- **Status**: Fixed (issues 1-4 together).

### KI-043: Admin Portal Accessible Without Authentication
- **Workflow**: Authentication / Authorization
- **Severity**: Critical (security)
- **Environment**: admin.startraven.com
- **Description**: Both `admin.startraven.com/users` and `admin.startraven.com/` are publicly accessible without any authentication. Sensitive admin pages exposed.
- **Evidence**: `image.png` on issues #3 and #4.
- **Status**: Fixed by Abhishek. New: shows "not authenticated" screen.

### KI-044: Registration Error On IPL
- **Workflow**: Authentication — Registration
- **Severity**: High
- **Environment**: ipl.startraven.com
- **Description**: Error shown during registration flow on IPL. However, root cause is Stytch account lockout (from Mar 20 testing).
- **Evidence**: `Screen Recording 2026-03-21 at 1.17.59 PM.mov`
- **Status**: Works with Employee ID method. Email-based auth blocked by Stytch lockout.

### KI-045: Conflicting Sources In AI Answers (XLSX Files)
- **Workflow**: Search / Plant Knowledge Hub — Source Quality
- **Severity**: High (data integrity)
- **Environment**: ipl.startraven.com
- **Description**: AI answers contain conflicting information from different sources. Primarily occurring with XLSX-based source documents. Discrepancies are not flagged or highlighted.
- **Evidence**: `Screenshot 2026-03-21 at 1.30.52 PM.png`, `Screenshot 2026-03-21 at 1.34.48 PM.png`
- **Status**: Escalated to Sriyansh by Rohith. Validates our untested oracle: "discrepancy handling when sources conflict."

### KI-046: Admin Unable To Access Users (IFZ, Recurring)
- **Workflow**: Settings / Workplace Settings — User Management
- **Severity**: High
- **Environment**: ifz.startraven.com
- **Description**: Admin cannot access Users from Workplace Settings. Same issue as KI-024 (Mar 20). Either unfixed or regressed.
- **Evidence**: `Screen Recording 2026-03-21 at 1.40.45 PM.mov`
- **Status**: Acknowledged (checkmark). **3rd occurrence** across threads.

### KI-047: Date Period Filter Shows Wrong Selection State
- **Workflow**: Settings / Workplace Dashboard
- **Severity**: Medium (misleading UI state)
- **Environment**: ifz.startraven.com
- **Description**: Dashboard shows "ALL TIME" as selected, but opening the dropdown shows "WoW" as the active option. Manually selecting ALL TIME doesn't update the display.
- **Evidence**: `Screen Recording 2026-03-21 at 2.04.31 PM.mov`
- **Status**: Acknowledged (checkmark).

### KI-048: Dashboard Queries Not Reflected From Search
- **Workflow**: Settings / Workplace Dashboard — Metrics
- **Severity**: High (data pipeline)
- **Environment**: ifz.startraven.com
- **Description**: Queries executed in the Search section are not reflected in the Workplace Dashboard metrics. Dashboard data is stale or not syncing.
- **Evidence**: `Screen Recording 2026-03-21 at 2.11.33 PM.mov`
- **Status**: Acknowledged (checkmark).

### KI-049: P&ID Tab Visible With No Files (All Plants)
- **Workflow**: P&ID / Navigation
- **Severity**: Low
- **Environment**: ifz.startraven.com
- **Description**: P&ID tab shows "No files found" across all plants. Tab should be hidden entirely.
- **Evidence**: `Screen Recording 2026-03-21 at 3.19.39 PM.mov`
- **Status**: Open. **4th recurrence** across Mar 17, 19, 21.

### KI-050: AI Answer Stops When User Switches Browser Tab
- **Workflow**: Search / Plant Knowledge Hub — Answer Generation
- **Severity**: High (usability)
- **Environment**: ifz.startraven.com or ipl.startraven.com
- **Description**: AI answer generation immediately stops when user switches to another browser tab or window. Unlike Gemini/ChatGPT which continue generating in background.
- **Evidence**: `image.png` on issue #11.
- **Status**: Acknowledged (checkmark). Likely a frontend streaming implementation issue.

### KI-051: Answer Not Coming Up (IPL)
- **Workflow**: Search / Plant Knowledge Hub — Answer Generation
- **Severity**: Critical (workflow failure)
- **Environment**: ipl.startraven.com
- **Description**: Answer fails to load for a specific search session.
- **Evidence**: `image.png` on issue #12. URL: `ipl.startraven.com/search/ed79c26a-...`
- **Status**: Open.

### KI-052: "Powered By Raven" Styling Looks Odd In Copilot
- **Workflow**: UI Consistency / Branding
- **Severity**: Low (cosmetic)
- **Description**: The "Powered by Raven" badge dimensions/placement look odd compared to the Near Miss App reference.
- **Evidence**: `image.png` on issue #13.
- **Status**: Acknowledged (2 checkmarks).

### KI-053: Unit, Org Name, Role Not Visible In Profile
- **Workflow**: Settings / Account — Profile
- **Severity**: Medium
- **Environment**: copilot.startraven.com (Block Imaging)
- **Description**: Profile page doesn't show Unit, Org Name, or Role details for Block Imaging users. Abhishek noted: "unit is Indorama-specific; other orgs haven't shared role details. Can add org name as read-only."
- **Evidence**: `image.png` on issue #14.
- **Status**: Open. Multi-tenant profile field gap.

### KI-054: "Selected Plant" Should Be "Selected Domain"
- **Workflow**: UI Consistency / Terminology
- **Severity**: Low (terminology)
- **Description**: UI label says "Selected Plant" but should use the more generic "Selected Domain" since not all customers have plant-based hierarchies.
- **Evidence**: `Screenshot 2026-03-21 at 5.58.52 PM.png`
- **Status**: Acknowledged (checkmark).

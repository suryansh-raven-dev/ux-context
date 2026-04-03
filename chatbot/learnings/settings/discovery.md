# Learned Context: Settings And Account Management

## Discovery Status
`explored`

## User-Provided Truth
- Settings is accessible from the sidebar navigation.
- It opens a popup menu, not a page.

## Observed Behavior

### Settings Popup Menu
- Clicking "Settings" in the sidebar opens a MUI Popover/Menu popup.
- The popup contains 6 menu items, each with an icon:
  1. **Account Settings** — user icon
  2. **Workplace Settings** — building/workplace icon
  3. **Saved Answers** — bookmark/save icon
  4. **Feedback** — feedback icon
  5. **Switch to Dark Mode** / **Switch to Light Mode** — moon/sun icon (toggles)
  6. **Sign Out** — exit icon, styled in red

### 1. Account Settings (`/account`)
- Page title: "Account Settings"
- Profile form with four fields:
  - **Name**: "Suryansh Srivastava" (editable text input)
  - **Employee ID**: "SURYANSH-04" (editable text input)
  - **Unit**: "IFZ" (editable text input)
  - **Departments**: Multi-select dropdown showing "PHD, FCU Line 1, Urea 2, Urea 1, Ammonia 2, Ammonia 1, Technical Services, HSEF, FCU Line 2"
- Buttons: CANCEL, SAVE PROFILE
- Refresh icon in top-right corner

### 2. Workplace Settings (`/workplace/dashboard`)
- Full admin analytics dashboard with its own sub-navigation.
- **Left sidebar** (within Workplace Settings):
  - WORKPLACE section: Dashboard (active)
  - MANAGEMENT section: Users (with external link icon), Help & Support
- **Plant filter bar** at top: All Plants (8), HSEF, PHD, Ammonia Train-1, Ammonia Train-2, FCU Line-1F, FCU Line-2F, Urea Urea-1, Urea Urea-2
- **Time range dropdown**: "All Time"

#### Dashboard Metrics
- **Usage section**:
  - Total queries/week: 60 (100% WoW)
  - Avg queries/user/week: 9 (100% WoW)
  - Active users this week: 7 (100% WoW)
- **Feedbacks section**:
  - Feedbacks this week: 13 (100% WoW)
  - Positive Feedbacks: 7
  - Negative Feedbacks: 6 (Doc Update: 0, AI Fix: 6)
- **Files section**:
  - Total Files: 1,854 (100% WoW)
  - File Tags: 146 (with detailed breakdown e.g. PUMP: 37, STEAM TURBINE: 1, BLOWERS: 5)
  - File Categories: 8 (Checklists: 345, Datasheet: 558, HSEF Format: 6, HSEF Procedure: 44, Operational Manual: 9, P&ID: 3, SOP: 776, Tabular: 13)
  - "View All 146 Tags" button
- **Users section**:
  - Total Users: 264 (100% WoW)
  - Total Roles: 0 (0% WoW)

#### Workplace Sub-Pages
- **Users**: Has an external link icon. Clicking stayed on Dashboard — may open in new tab or require different permissions.
- **Help & Support**: Redirected to the Search page (`/search`) — may not be implemented or may be behind a feature flag.

### 3. Saved Answers (`/saved`)
- Page title: "Saved Answers"
- Empty state: "No saved messages yet! All your saved messages will appear here."
- This is where bookmarked AI answers (via bookmark icon on responses) are collected.
- No additional filters or organization controls visible in empty state.

### 4. Answer Feedback (`/feedback`)
- Page title: "Answer Feedback"
- **Two tabs**:
  - "FEEDBACK ON YOUR DOCUMENTS" (default, active)
  - "FEEDBACK FOR RAVEN"
- **Filter chips**: All | Positive | Negative
- **Search bar**: "Search across feedbacks"
- **Sort dropdown**: Sort By Date
- **Table columns**: FeedbackID, Query, Feedback, Comment, Date, Status
- Empty state: "You don't have any data yet." (0-0 of 0)
- Pagination at bottom

### 5. Dark Mode Toggle
- Clicking "Switch to Dark Mode" immediately toggles the entire app to dark theme.
- Dark theme uses: navy/charcoal background, teal/cyan accent (replaces purple), white text.
- All UI elements properly themed (sidebar, search input, icons, text).
- The menu option text changes to "Switch to Light Mode" when dark mode is active.
- Persists across navigation within the session.

### 6. Sign Out
- Styled in red text to distinguish from other options.
- Not functionally tested (to preserve the session).

## Confirmed Paths
- Settings popup opens on sidebar click — confirmed
- Account Settings profile form — confirmed
- Workplace Dashboard with analytics — confirmed
- Saved Answers empty state — confirmed
- Feedback page with two tabs — confirmed
- Dark/Light mode toggle — confirmed
- Sign Out option available — confirmed

## UI Targets
- Settings trigger: `li:has-text('Settings')` in sidebar
- Account Settings: `li:has-text('Account Settings')` or `a:has-text('Account Settings')` in popup
- Workplace Settings: `li:has-text('Workplace Settings')` in popup
- Saved Answers: `li:has-text('Saved Answers')` in popup
- Feedback: `li:has-text('Feedback')` in popup
- Dark Mode: `li:has-text('Dark Mode')` in popup
- Sign Out: `li:has-text('Sign Out')` in popup
- Popup container: `.MuiPopover-root.MuiMenu-root`
- Account Settings URL: `/account`
- Workplace Dashboard URL: `/workplace/dashboard`
- Saved Answers URL: `/saved`
- Feedback URL: `/feedback`

## Evidence Captured
- Screenshot: `screenshots/settings/01_after_settings_click.png` — Settings popup with 6 options
- Screenshot: `screenshots/settings/10_account_settings.png` — Account Settings form
- Screenshot: `screenshots/settings/12_workplace_settings.png` — Workplace Dashboard (top)
- Screenshot: `screenshots/settings/13_workplace_settings_scrolled.png` — Workplace Dashboard (full)
- Screenshot: `screenshots/settings/14_saved_answers.png` — Saved Answers empty state
- Screenshot: `screenshots/settings/15_feedback.png` — Answer Feedback page
- Screenshot: `screenshots/settings/16_dark_mode.png` — Dark mode applied
- Screenshot: `screenshots/settings/18_settings_in_dark_mode.png` — Settings popup in dark mode

## Cross-Environment Issues (From Slack #product, 2026-03-17 through 2026-03-21)

### Empty Department Dropdown
- Dept dropdown shows no options on the Block Imaging deployment (`copilot.startraven.com`). Should either be hidden entirely or populated with valid department values.
- On IFZ, Dept dropdown shows only one option (HSEF) during registration instead of admin-assigned department.
- This is a configuration issue — varies by deployment.

### Sub-header Branding
- "The AI platform for process industries" sub-header on login/landing is not relevant for all customers (e.g., Indorama). Should be configurable per customer or removed.
- Source: Slack #product, 2026-03-20 issue #11.

### Workplace Settings — Users Tab (Fix-Regress Cycle)
- Users tab in Workplace Settings is non-clickable. Raised 3 times across Mar 20-21 on both IFZ and IPL.
- Fixed by Abhishek on Mar 20, re-broken on Mar 21 (regression).
- Root cause: admin frontend URL missing from account config (identified by Rohith).
- Source: KI-024, KI-039, KI-046.

### Workplace Settings — Role Access Tab
- Role Access tab shows white/blank screen on IFZ.
- Source: Slack #product, 2026-03-20 issue #2.

### Dashboard Data Integrity Issues
- **Date filter mismatch**: Shows "ALL TIME" selected but WoW is actually active. Selecting ALL TIME doesn't update the display.
- **Queries not reflected**: Search queries not appearing in Workplace Dashboard metrics.
- **Feedback not displayed**: API returns feedback data but frontend doesn't render it.
- **Legend color mismatch**: Dashboard chart legend dots don't match graph colors.
- Source: Mar 19 issue #7, Mar 20 issue #17, Mar 21 issues #8 and #9.

## Risks / Unknowns
- Users page in Workplace Settings may require admin role or opens externally.
- Help & Support redirects to Search — likely not implemented yet.
- Feedback table behavior with actual data not tested.
- Saved Answers behavior with bookmarked items not tested.
- Account settings SAVE PROFILE functionality not tested.
- Dark mode persistence across sessions unknown.
- Sign Out redirect and session clearing behavior not tested.
- **NEW**: Dept dropdown can be empty on some deployments (copilot.startraven.com).
- **NEW**: Customer-facing branding text may not be configurable per deployment.

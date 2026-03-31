# Session Log: Onboarding Help Documentation
**Date**: 2026-03-23
**App**: Raven (IFZ)
**Environment**: Production (https://ifz.startraven.com)
**Test Account**: Employee ID `SURYANSH-04`

## Objective
Create a detailed user onboarding help document for Raven Copilot with annotated screenshots covering login, registration, magic link, admin verification, domain selection, and account page flows.

## What Was Done

### Browser Exploration (Playwright)
1. Navigated through the complete Employee ID login flow (login → password → domain selection → main app → account page → sign out)
2. Tested email login with non-company domain (`user@example.com`) — got domain validation error
3. Tested email login with company domain (`test@indorama.com`) — discovered registration form
4. Tested email login with another email (`suryansh@startraven.com`) — also showed registration form (not registered on IFZ)
5. Checked admin portal (`admin.ifz.startraven.com`) — shows "Not Authenticated" page

### Screenshots Captured
Total: 20 raw screenshots + 11 annotated versions with arrows and labels

| Screenshot | Description |
|-----------|-------------|
| 01_login_page_initial | Login page in initial state |
| 02_login_employee_id_entered | Employee ID SURYANSH-04 typed in |
| 03_login_password_step | Password step after CONTINUE |
| 04_login_password_filled | Password entered, LOGIN enabled |
| 05_domain_selection_modal | "Select a domain" modal with 8 domains |
| 06_main_app_after_domain | Main Search page after selecting HSEF |
| 07_settings_menu_open | Settings popup menu |
| 08_account_page | Account Settings with profile fields |
| 09_after_signout | Login page after sign out |
| 10_email_login_entered | Non-company email with validation error |
| 15_email_company_entered | Company email entered |
| 16_after_company_email_continue | Registration form for new users |
| 20_admin_portal | Admin portal "Not Authenticated" screen |

### Help Documentation Created
- `chatbot/user-onboarding-guide.md` — comprehensive 10-section guide covering all onboarding flows
- Includes flow diagrams, annotated screenshots, troubleshooting section

## New Findings

### Confirmed
1. **Email domain validation**: Non-company emails rejected with "Email domain is not allowed" error, CONTINUE button disabled
2. **Self-registration flow**: Unregistered company email → "Create your account" form with Name*, Employee ID*, Email (pre-filled), Password*, Confirm Password*, Unit (auto-filled), Department
3. **8 plant domains available**: HSEF, PHD, Train-1, Train-2, Line-1F, Line-2F, Urea-1, Urea-2 (grouped by Ammonia, FCU, Urea)
4. **Domain selection info text**: "You can change the domain later from the dropdown in the left sidebar"
5. **No verification banner for SURYANSH-04**: Account is already verified, so no pending verification message appears
6. **Admin portal locked**: admin.ifz.startraven.com shows "Not Authenticated" with lock icon

### Admin Portal Discovery (Session 2)
7. **Admin Workplace Settings**: Admin users have a "Workplace Settings" option in Settings menu, containing a Dashboard (usage stats, feedback, file count) and a Users management link
8. **Admin User Management Portal**: `admin.ifz.startraven.com/users` shows full user management with 286 users, columns: Name, Employee ID, Email, Unit, Department, Roles, Status, Actions
9. **User Status**: Each user shows "Verified" status in green text. Status filter dropdown with "All" as default suggests "Unverified" is another option
10. **Admin Actions**: ADD USER button, EXPORT CSV, IMPORT USERS available. Each user row has a three-dot action menu
11. **Admin Auth**: Admin portal requires authentication through the main app first; direct access shows "Not Authenticated" screen

### Not Observed / Could Not Test
- Magic link login UI (no separate "Send Magic Link" button visible — magic link appears to be triggered during registration or admin-initiated password reset, not as a login page option)
- Verification status banner for unverified accounts (SURYANSH-04 is already verified)
- Password setup screen after magic link click (requires actual magic link email)
- Clicking three-dot action menu on admin users page (authentication session didn't carry over to admin portal)

## Files Updated
- `chatbot/learnings/authentication/discovery.md` — added new confirmed behaviors
- `chatbot/user-onboarding-guide.md` — comprehensive help document with 10 sections
- `chatbot/screenshots/` — 20+ raw screenshots
- `chatbot/screenshots/annotated/` — 14 annotated screenshots with arrows and labels

### Final Verification Round (Session 3)
12. **Password step has NO magic link option**: Only LOGIN and BACK buttons visible. Help doc Section 4 corrected to clarify magic links are sent by the system (during registration or admin reset), not chosen on the login page.
13. **Status filter dropdown confirmed**: All / Verified / Unverified options verified by clicking through.
14. **1 unverified user found**: ALOK KUMAR KUSHWAHA (IR5505, Technical Services) shown with "Unverified" in orange text when Status filter set to "Unverified". Manage Users count changes from (286) to (1).
15. **Admin portal opens from Workplace**: Clicking Users in Workplace Settings opens admin.ifz.startraven.com in new tab with active session.
16. **Account page has no email field**: SURYANSH-04 account only shows Name, Employee ID, Unit, Departments.
17. **All tested email addresses show registration form**: suryansh@startraven.com, suryansh.srivastava@startraven.com, manikandan@indorama.com, ravi@indorama.com — all show "Create your account" form. Most IFZ users appear registered via Employee ID only (no email).
18. **CLEAR FILTERS button appears when filters are active**: Confirmed on admin users page.

### Still Not Testable
- Registered email → password step (no registered email found to test; most users use Employee ID only)
- Verification banner on user's own account page (SURYANSH-04 is verified; would need to test with an unverified account like IR5505)
- Three-dot action menu on a user row (didn't click to avoid changing user state)
- Registration form submission (didn't submit to avoid creating real accounts)
- Magic link email content (would need email inbox access)

### Annotation Fix (Session 4)
19. **All screenshot annotations were misaligned**: Labels and highlight rectangles were drawn in the center-left of images, far from the actual UI elements on the right side. Root cause: hardcoded coordinates in the annotation script were approximately 260px too far left of the actual element positions.
20. **Initial pixel-level detection attempted**: Wrote scripts to scan pixel colors and find exact element boundaries. Produced partial improvements but annotations still off.
21. **Settings menu popup was at y=570-800, not y=400-560**: The popup menu items in screenshot 07 were rendered much lower than initially estimated. Account Settings at y≈575, Sign Out at y≈790.

### Annotation Fix Round 2 (Session 5)
24. **Grid overlay approach**: Created `grid_overlay.py` to draw 50px/100px coordinate grids on all raw screenshots. This revealed that reading coordinates from displayed (scaled-down) grid images was unreliable.
25. **Programmatic pixel scanning**: Used targeted row-by-row pixel color scanning across all 15 source screenshots to find the exact (x,y) positions of every UI element:
    - Login/registration card: white area starts at x=720, input fields span x=920-1240
    - Previous scripts had fields at x=660-875 — **260px too far left**
    - Search input box on main app: x=449-1223, y=450-530
    - Settings popup: x=4-225, y=565-810
    - Account page form: x=410-1262
    - Admin page content: x=257+
    - Verification banner (1024px img): x=159-922, y=95-120
26. **Final annotation script**: `annotate_final.py` — generates all 15 annotated screenshots with pixel-verified coordinates. Every annotation confirmed via visual inspection.
27. **All 15 screenshots verified correct**:
    - 01_login_page.png — input field & CONTINUE button correctly highlighted
    - 02_employee_id_entered.png — SURYANSH-04 field & button correctly boxed
    - 03_password_step.png — Employee ID (read-only), Password, LOGIN button all correct
    - 04_password_filled.png — Password & enabled LOGIN button correct
    - 05_domain_selection.png — Modal card, domain groups, info message correct
    - 06_main_app.png — Domain selector, Search agent, search box correct
    - 07_settings_menu.png — Account Settings & Sign Out menu items correct
    - 08_account_page.png — All 4 form field callouts correct
    - 09_email_validation_error.png — Error field & disabled button correct
    - 10_registration_form.png — All 5 field callouts + Unit/Dept + Register correct
    - 11_company_email_login.png — Company email & CONTINUE correct
    - 12_admin_users.png — Search bar & ADD USER button correct
    - 15_status_filter_dropdown.png — Status dropdown with options correct
    - 16_unverified_users.png — Filtered status & user row correct
    - 17_verification_banner.png — Blue banner correctly highlighted

## Next Steps
- Test with an unverified account (e.g., IR5505 ALOK KUMAR KUSHWAHA) to capture the verification banner on account page
- Get email inbox access to test magic link flow end-to-end
- Click three-dot action menu on admin portal to document verification actions

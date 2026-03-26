# Learned Context: Authentication And Account Access

## Discovery Status
`active` — extensive new findings from Slack Mar 20-21 testing threads

## User-Provided Truth
- Authentication is the first pilot workflow for this testing workspace.
- Credentials: Employee ID `SURYANSH-04`, Password `RavenTesting@123`.
- Environment: https://ifz.startraven.com

## Observed Behavior
- Login is a two-step flow: first enter Email or Employee ID, then after clicking "CONTINUE", a second form appears for password entry.
- The login page is branded "INDORAMA / Welcome to Raven" with a split layout (branding on left, form card on right).
- After clicking CONTINUE with an Employee ID, the form switches to show the Employee ID (read-only) and a password field with a visibility toggle (eye icon).
- The LOGIN button appears greyed/disabled until a password is entered.
- A "BACK" link allows returning to the Employee ID step.
- Successful login redirects to `/search` and immediately shows a "Select a domain" modal.
- No MFA, SSO, or social login options were observed.
- No "Forgot Password" link was visible on the login form.
- **NEW (2026-03-23)**: Email domain validation — non-company emails (e.g., `user@example.com`) show red error: "Email domain is not allowed. Please use your company email." and CONTINUE button stays disabled.
- **NEW (2026-03-23)**: Unregistered company email (e.g., `test@indorama.com`) → clicking CONTINUE redirects to a full "Create your account" registration form with fields: Name*, Employee ID*, Email (pre-filled), Password*, Confirm Password*, Unit (auto-filled to IFZ), Department (dropdown).
- **NEW (2026-03-23)**: Registration form has REGISTER button and BACK TO SIGN IN link.
- **NEW (2026-03-23)**: Domain selection modal shows 8 domains grouped by plant area: HSEF, PHD, Ammonia (Train-1, Train-2), FCU (Line-1F, Line-2F), Urea (Urea-1, Urea-2). Each domain has a colored dot.
- **NEW (2026-03-23)**: Domain selection modal includes info text: "You can change the domain later from the dropdown in the left sidebar."
- **NEW (2026-03-23)**: Account Settings page (/account) shows Name, Employee ID, Unit, Departments fields with SAVE PROFILE and CANCEL buttons. No verification status banner observed for verified user (SURYANSH-04).
- **NEW (2026-03-23)**: **Verification banner confirmed** — Unverified accounts show a blue info banner at the top of Account Settings: "Please wait for your account to be verified by an admin before you can access the application." Banner disappears after admin verification. Screenshot provided by user from IPL deployment.
- **NEW (2026-03-23)**: Registration can happen via **Employee ID** (not just email). Organization name and domain are pre-approved in Raven portal, allowing employees to self-register using their Employee ID.
- **NEW (2026-03-23)**: Admin portal (admin.ifz.startraven.com) shows "Not Authenticated" page with lock icon — requires login through application portal.

## Confirmed Paths
- Employee ID + password login (happy path) — confirmed working.
- Two-step login flow (ID first, then password) — confirmed.
- Post-login domain selection modal — confirmed, required before using the app.
- **NEW (2026-03-23)**: Email domain validation for non-company emails — confirmed.
- **NEW (2026-03-23)**: Unregistered company email → Registration form flow — confirmed.
- **NEW (2026-03-23)**: Registration form with auto-filled email and unit — confirmed.
- **NEW (2026-03-23)**: 8 domains available in selection modal — confirmed.

## Hypothesized Branches
- ~~Password login happy path~~ (confirmed)
- Invalid password handling — not tested
- Empty-field validation — not tested
- ~~Forgot password request flow~~ — no link observed
- Reset-password completion flow — not applicable (no forgot password link)
- ~~Visible SSO or social login path~~ — none observed
- Logout and protected-route redirect — not tested

## UI Targets
- Login page URL: `https://ifz.startraven.com/login`
- Employee ID input: `input` (first input on page)
- Continue button: `button:has-text('Continue')`
- Password input: `input[type='password']`
- Login button: `button:has-text('Login')`
- Back link: `text=BACK`
- Domain modal heading: `h2:has-text('Select a domain')`

## Success Signals
- Page title changes from "Login" to "New Session" after login
- URL changes to `/search`
- Domain selection modal appears with plant domains
- Sidebar becomes visible with navigation items

## Failure Signals
- Stays on `/login` URL
- No domain modal appears

## Evidence Captured
- Screenshot: `screenshots/01_login_page.png` — initial login form
- Screenshot: `screenshots/03_after_continue.png` — password step with Employee ID filled
- Screenshot: `screenshots/05_after_login.png` — post-login domain selection modal

## Sign Out
- Sign Out is accessible via Settings > Sign Out (red text, bottom of the popup menu).
- The Settings popup is opened by clicking "Settings" in the sidebar.
- Sign Out text is styled in red to distinguish it from other options.
- Sign Out was not functionally tested (to avoid breaking the session).

## Authentication Provider: Stytch
Stytch is the auth backend (discovered from Slack thread debugging, Mar 20).

### Stytch Behaviors Observed
- **Rate limiting (429)**: Stytch locks accounts after too many failed login attempts. Error: "The user has been locked out due to too many failed authentication attempts."
- **Redirect URI sensitivity**: Domain renames (e.g., `ifl.startraven.com` → `ifz.startraven.com`) require updating Stytch redirect URIs. Failure to do so causes registration to succeed but login to fail.
- **Magic link auth**: Supported alongside password auth. Magic link works via email.
- **Account lockout cascades**: A lockout on one deployment (IFZ) also affects the same email on other deployments (IPL) since Stytch treats them as the same user.

### Login Methods Confirmed
1. **Employee ID + password** — primary path, confirmed working on IFZ and IPL.
2. **Email + magic link** — confirmed working (when account not locked).
3. **Email + password** — confirmed working (when account not locked).

### Registration Flow (New — From Mar 20)
- Admin creates a user and can "clear password" from admin console.
- User then goes to login page, which redirects to registration (set password).
- After setting password and clicking Register, a magic link is sent.
- If redirect URI is wrong, registration succeeds but login fails silently.
- On retry, "user already exists" error appears.

### Multi-Tenant Auth Issues (From Mar 21)
- **Cross-tenant access**: IPL admin URL allows accessing IFZ data. Tenant isolation was broken.
- **Admin portal publicly accessible**: `admin.startraven.com` and `admin.startraven.com/users` were accessible without authentication.
- **Unverified user access**: Users marked "unverified" on admin portal can still access search/documents. Verification status not enforced as a gate.
- **Fix applied**: Admin portal now shows "not authenticated" screen instead of redirecting.

### Admin Portal User Management (New — From Mar 23)
- **URL**: `admin.ifz.startraven.com/users` — full user management interface
- **Access**: Requires authentication through the main app (Workplace Settings → Users)
- **User count**: 286 total users on IFZ
- **Columns**: Name, Employee ID, E-mail, Unit, Department, Roles, Status, Actions
- **Status values**: "Verified" (green text). Filter dropdown defaults to "All" — implies "Unverified" filter exists
- **Actions**: Three-dot menu per user row (likely: verify, edit, deactivate)
- **Bulk tools**: EXPORT CSV, IMPORT USERS, ADD USER buttons
- **Search**: Search by name, email, or employee ID
- **Sidebar nav**: Users, Departments, Raven Chatbot, Settings
- **Brand**: "raven" logo + "Copilot Admin" user label

### Self-Registration Form (New — From Mar 23)
- Triggered when entering an unregistered company email on login page
- Fields: Name*, Employee ID*, Email (pre-filled, read-only), Password*, Confirm Password*, Unit (auto-filled to deployment), Department (dropdown)
- Unit auto-fills to "IFZ" for ifz.startraven.com
- REGISTER button + BACK TO SIGN IN link
- Non-company emails rejected with "Email domain is not allowed. Please use your company email."

### Additional Auth Environments
- `ifz.startraven.com/login` — Indorama IFZ
- `ipl.startraven.com/login` — Indorama IPL
- `copilot.startraven.com` — Block Imaging
- `admin.startraven.com` — Global admin
- `admin.ifz.startraven.com` — IFZ-specific admin (user management)

### Additional Test Accounts (From Mar 20)
- Admin IFZ: Employee ID `copilot-admin-001`, Password `RavenTesting@123`
- Admin IPL: Employee ID `copilot-admin-ipl`, Password `RavenTesting@123`
- Block Imaging: `suryansh@blockimaging.com`, Password `RavenTesting@123` on `copilot.startraven.com`

## Confirmed Paths (Updated)
- Employee ID + password login (happy path) — confirmed working.
- Two-step login flow (ID first, then password) — confirmed.
- Post-login domain selection modal — confirmed, required before using the app.
- Magic link login — confirmed working (when account not locked).
- Registration after admin password clear — confirmed working (after Stytch fix).
- Employee ID login works even when email is locked — confirmed.

## Hypothesized Branches (Updated)
- ~~Password login happy path~~ (confirmed)
- ~~Invalid password handling~~ — Stytch locks account after too many attempts (429)
- Empty-field validation — not tested
- ~~Forgot password request flow~~ — no link observed; admin clears password instead
- ~~Reset-password completion flow~~ — admin-initiated, user re-registers
- ~~Visible SSO or social login path~~ — none observed
- ~~Logout and protected-route redirect~~ — not fully tested
- ~~Magic link login~~ — confirmed working
- ~~Registration flow~~ — confirmed, has edge cases with redirect URIs
- Cross-tenant access control — **VIOLATED**, now fixed
- Admin portal auth enforcement — **VIOLATED**, now fixed
- Unverified user gating — **VIOLATED**, under investigation

## Risks / Unknowns (Updated)
- ~~No forgot password mechanism observed~~ — handled via admin password clear + re-registration.
- ~~Invalid credential behavior not yet tested~~ — Stytch locks account after too many failures (429).
- Session timeout/expiry behavior unknown.
- ~~Logout mechanism not yet located~~ — found under Settings popup as "Sign Out".
- Sign Out functional behavior (redirect, session clearing) not yet tested.
- **NEW**: Stytch lockout duration unknown — how long until auto-unlock?
- **NEW**: Cross-deployment account sharing — same email locked across IFZ+IPL simultaneously.
- **NEW**: Unverified user access not enforced — security gap under investigation.
- **NEW**: Domain rename can silently break auth if Stytch config not updated.
- **NEW**: Magic link loading can hang indefinitely (observed Mar 20).
- **NEW**: Employee ID "SURYANSH" failed on IFZ (may be different from "SURYANSH-04").

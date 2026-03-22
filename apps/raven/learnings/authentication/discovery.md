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

## Confirmed Paths
- Employee ID + password login (happy path) — confirmed working.
- Two-step login flow (ID first, then password) — confirmed.
- Post-login domain selection modal — confirmed, required before using the app.

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

### Additional Auth Environments
- `ifz.startraven.com/login` — Indorama IFZ
- `ipl.startraven.com/login` — Indorama IPL
- `copilot.startraven.com` — Block Imaging
- `admin.startraven.com` — Global admin
- `admin.ifz.startraven.com` — IFZ-specific admin

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

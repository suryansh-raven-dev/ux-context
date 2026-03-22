# Authentication Map

## Current Status
Confirmed from live exploration on 2026-03-21. Two-step Employee ID + password login flow observed and tested.

## User-Provided Truth
- Authentication is the first pilot workflow for this workspace.
- Test account: Employee ID `SURYANSH-04`, Password `RavenTesting@123`
- Environment: https://ifz.startraven.com

## Observed Behavior

### Login Flow
1. Navigate to `https://ifz.startraven.com` → redirects to `/login`
2. **Step 1**: Enter Email or Employee ID → click CONTINUE
3. **Step 2**: Employee ID shown read-only, enter Password → click LOGIN
4. Successful login → redirect to `/search` with domain selection modal overlay
5. Select domain → enter app

### Login Page Details
- Branding: "INDORAMA / Welcome to Raven" (split layout)
- Password field has visibility toggle (eye icon)
- LOGIN button is disabled until password is entered
- BACK link returns to Step 1
- No "Forgot Password" link visible
- No SSO, social login, or MFA options

### Sign Out
- Located in: Settings popup menu > Sign Out (red text)
- Not functionally tested

### Session Behavior
- Session persists across page navigation within the SPA
- Session timeout/expiry behavior: unknown

## Confirmed Auth Methods
- Employee ID + password login — **confirmed working**

## Auth Methods NOT Present
- SSO / social login — not observed
- MFA / two-factor — not observed
- Forgot Password — no link visible
- Email-based login — input accepts it but not tested

## Success Signals Validated
- ~~Redirect to the intended landing page~~ — confirmed (redirects to `/search`)
- ~~Correct account or role visible in the UI~~ — partial (account name visible in Account Settings, not on main pages)
- Session persists after navigation — confirmed within SPA

## Questions Answered
- **Is MFA present?** No, not for the tested account
- **Are auth methods environment-specific?** Unknown — only one environment tested
- **Does reset-password happen in-app?** No forgot-password link was found

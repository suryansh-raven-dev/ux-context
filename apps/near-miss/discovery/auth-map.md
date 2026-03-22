# Discovery Map: Auth Map (Near-Miss)

## Current Status
Partially validated via automated exploration on 2026-03-21. Login page confirmed. Full login flows (password, magic link) not yet tested.

## Observed Behavior (Confirmed 2026-03-21)

### Login Page (/login)
- **URL**: https://nmms.staging.startraven.com/login
- **Page title**: "NMMS Dashboard"
- **Branding**: "ACME" logo (staging), title "Acme Incident Reporting System"
- **Single input field**: placeholder "Enter your email or Employee ID or Contractor ID"
- **NEXT button**: Disabled when field is empty, enabled when text is entered
- **SELECT ROLE link**: Points to /select-role (staging-only bypass)
- **No password field on initial screen** -- two-step login flow
- **No "Forgot Password" link** visible on login page
- **No "Register" or "Sign Up" link** visible

### Select Role Page (/select-role, Staging Only)
- Shows list of 7 predefined test roles
- Clicking a role immediately logs in and redirects to /reports?status=active
- Includes role switching via profile dropdown (bottom-left of sidebar)

### Login Flows (from Slack, not yet tested)
| Flow | Description | Tested |
|------|-------------|--------|
| Employee ID + Password | Enter ID -> NEXT -> password screen | No |
| Email + Magic Link | Enter email -> sends magic link to email | No |
| Email + Password | For users who have set a password | No |
| Select Role | Staging-only, bypasses auth | **Yes (2026-03-21)** |

### Post-Login Redirect
- All roles redirect to: `/reports?status=active`
- Page title changes to: "Incident Reports"

### Known Auth Issues (from Slack, not yet verified)
- Anyone with @indorama.com can register without admin approval
- 500 errors during password setting
- No "Forgot Password" flow visible
- DB vs Stytch user record inconsistencies

## Assumptions To Validate
- Magic link flow works end-to-end
- Password can be set after first magic link login
- Same credentials work on web and mobile
- ~~Select-role login is only on staging, not production~~ **Assumed** (need to verify)
- User deactivation actually prevents login

## Questions To Answer
- ~~What does the login page look like?~~ **Answered**
- What happens when an unregistered @indorama.com email is entered?
- Can a deactivated user still log in?
- Is there a visible "Forgot Password" link on the password step?
- Does the registration form enforce department as mandatory?
- What happens after entering an Employee ID and clicking NEXT?

## Related Workflows
- authentication

## Update Rule
Keep this file focused on shared discovery context.

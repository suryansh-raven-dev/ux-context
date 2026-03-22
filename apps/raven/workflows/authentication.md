# Workflow: Authentication And Account Access

## Goal
Allow a user to authenticate into Raven, reach the correct post-login landing page, and recover access when credentials fail or a password reset is needed.

## Persona / Role
Any Raven user with valid credentials. Start with standard operator and reviewer-capable accounts when available.

## Entry Point
Login page or any protected route that redirects unauthenticated users to login.

## End State
The user reaches the correct authenticated landing page for the selected account and can later sign out cleanly.

## General Steps
1. Open the Raven login experience.
2. Sign in using an allowed login method.
3. Confirm the user lands in the authenticated experience.
4. Exercise nearby recovery and failure paths within scope.
5. Sign out or confirm session behavior as needed.

## Known Branches
- Password login
- Any visible SSO or social login option
- Forgot password request
- Reset password completion
- Logout and protected-route redirect

## Important Validations
- Successful login reaches the correct landing page.
- The active account or role is visible somewhere reliable.
- Invalid credentials produce a clear error state.
- Password recovery entry points are visible and understandable.
- Logout removes access to protected views.

## Discovery Scope
`standard`

## In Scope
- Login form and nearby auth UI
- Post-login landing page
- Visible recovery paths
- Session persistence and logout

## Out Of Scope
- MFA or security features that are not visibly present
- Admin-only auth features unless explicitly provided
- Email inbox verification beyond what is visible in-app

## Test Accounts / Roles
- Employee ID: `SURYANSH-04`, Password: `RavenTesting@123` — confirmed working as of 2026-03-21.
- Account name: Suryansh Srivastava, Unit: IFZ, Departments: all 9 departments assigned.

## Environment
- URL: `https://ifz.startraven.com`
- Login page: `https://ifz.startraven.com/login`
- Post-login landing: `/search` with domain selection modal.

## Evidence To Capture
- Login page screenshot
- Successful landing page screenshot
- Error-state screenshot for invalid credentials
- Final URL and visible account marker
- Notes on which auth methods are actually present

## Notes
Expand only the branches that are visibly available in the environment under test.

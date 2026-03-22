# Workflow: Authentication

## Goal
Verify all login, registration, and password management flows across web and mobile platforms for different user types.

## Persona / Role
All roles (Operator, Safety Manager, HoD, HoS, HSEF Ambassador, Admin, Contractor)

## Entry Point
- Web: https://nmms.staging.startraven.com (login page)
- Mobile: NMMS app

## End State
User is authenticated and sees the appropriate landing page for their role.

## General Steps
1. Navigate to the login page.
2. Enter credentials (email/employee ID + password, or email for magic link).
3. Complete authentication.
4. Verify correct role-based landing page.
5. Test password management (set, change, reset, forgot).

## Known Branches
- Employee ID + password login
- Email + magic link login (first-time)
- Email + password login (subsequent)
- New user registration with @indorama.com email
- Contractor login via common/shared login
- First-time password setup after magic link
- Forgot password flow
- Role selection via "Select Role" on staging
- Mobile app login with same credentials as web

## Important Validations
- Same credentials must work on both web and mobile
- @indorama.com users should require verification before access (security gap reported)
- First-time email verification required before account is usable
- Forgot password flow should allow self-reset
- User deactivation/deletion should prevent ex-employee access
- Registration should capture: name, employee ID, unit/plant, department, email (optional)
- Department must be mandatory during registration
- No 500 errors during password setting

## Discovery Scope
`standard`

## In Scope
- Password login flow
- Magic link flow
- Registration flow
- Password change/reset
- Role-based redirect after login
- Mobile app login
- Select-role login (staging)

## Out Of Scope
- SSO integration (not yet implemented)
- Admin user creation (separate workflow)

## Test Accounts / Roles
- NM-operator-001 / RavenTesting@123 (staging, select-role)
- near-miss-operator@startraven.com / RavenTesting@123 (staging)
- raven-admin / RavenTesting@123 (production)

## Environment
Staging: https://nmms.staging.startraven.com
Production: https://nmms.startraven.com

## Evidence To Capture
- Screenshots of login page
- Screenshots of registration form
- Screenshots of password set/change dialogs
- Screenshots of role-based landing pages
- Any error messages (especially 500 errors)

## Notes
- Auth provider is Stytch
- Known security issue: anyone with @indorama.com can register directly without admin approval
- Known issue: 500 error during password setting (observed in demo)
- Known issue: inconsistency between DB and Stytch user records (386 total, 315 match)
- Login flow doc: https://docs.google.com/document/d/1XIp9sPC0hFQNFg3Rq-0qBS3Ak0wJ2qIa2vtaffJFdbI/edit

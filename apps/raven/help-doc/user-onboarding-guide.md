# Raven Copilot — User Onboarding Guide

## 1. Overview

Raven Copilot is an AI-powered assistant for industrial plants. Search documentation, explore P&ID diagrams, and manage plant data — scoped to your specific domain.

### Quick Reference — Onboarding Flow Summary

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                  USER ONBOARDING FLOW                                    │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│  ┌──────────┐   ┌──────────────┐   ┌───────────┐  YES  ┌──────────────┐  ┌────────────┐  │
│  │ Sign In  ├──►│ Employee ID  ├──►│ Existing  ├──────►│ Login via:   ├─►│ Select     │  │
│  │ Page     │   │ or Company   │   │ user?     │       │ • Password   │  │ Plant /    │  │
│  └──────────┘   │ Email        │   └─────┬─────┘       │ • Magic Link │  │ Domain     │  │
│                 └─► CONTINUE───┘         │             └──────▲───────┘  └──────┬─────┘  │
│                                          │ NO                 │                 │        │
│                                          ▼                    │                 ▼        │
│                                ┌──────────────────┐           │         ┌─────────────┐  │
│                                │ Registration     │           │         │ Raven       │  │
│                                │ • Name  • Pwd    │           │         │ Copilot     │  │
│                                │ • EmpID • Unit   │           │         │ Search      │  │
│                                │ • Email • Dept   │           │         │ Dashboard   │  │
│                                └────────┬─────────┘           │         │             │  │
│                                     REGISTER                  │         │ Ready to    │  │
│                                         │                     │         │ use!        │  │
│                             ┌───────────┤                     │         └─────────────┘  │
│                       (if email)        │                     │                          │
│                             ▼           ▼                     │                          │
│                      ┌───────────┐ ┌──────────────┐           │                          │
│                      │Magic Link ├►│ Admin Verify ├───────────┘                          │
│                      │ (Email    │ │ Wait         │  once verified,                      │
│                      │  Verify)  │ │ (pending)    │  log in as existing user             │
│                      └───────────┘ └──────────────┘                                      │
│                                                                                          │
└─────────────────────────────────────────────────────────────────────────────────────────-┘
```

Before you can start using Raven Copilot, you need to:

1. Sign in or Register using your Employee ID or company Email
2. Get verified by your organization's Admin
3. Select a Plant / Domain relevant to your work

This guide walks you through each of these steps.

---

## 2. Getting Started — Sign In

### Option A: Sign in with Employee ID

If your organization has assigned you an Employee ID, use it to sign in.

**Step 1:** Enter your Employee ID and click **CONTINUE**. The button activates once a valid ID format is detected.

> **Example:** If your Employee ID is `SURYANSH-04`, type it exactly as provided.

**Step 2:** Enter your password and click **LOGIN**. (Your Employee ID is pre-filled and read-only.)

### Option B: Sign in with Email ID

You can also sign in using your company email address. Enter your email in the input field.

> **Important:** Only company-approved email domains are accepted. If you enter a personal email (e.g., `user@example.com`), you will see an error: *"Email domain is not allowed. Please use your company email."*

- Enter your company email and click **CONTINUE**.
  - Existing user → Password screen (same as Employee ID flow)
  - New user → Taken to Registration (Section 3)

---

## 3. New User Registration

If you enter an Employee ID or company email that has not been registered before, clicking **CONTINUE** will redirect you to the **Create your account** registration form. Since your organization's domain is pre-approved in the Raven portal, any employee with a valid Employee ID can self-register.


| #   | Field            | Required    | Description                                                                 |
| --- | ---------------- | ----------- | --------------------------------------------------------------------------- |
| 1   | Name             | Yes         | Your full name                                                              |
| 2   | Employee ID      | Yes         | Your organization-assigned Employee ID                                      |
| 3   | Email            | Pre-filled  | Auto-populated from the email you entered on the Sign In page               |
| 4   | Password         | Yes         | Choose a strong password                                                    |
| 5   | Confirm Password | Yes         | Re-enter the same password                                                  |
| —   | Unit             | Auto-filled | Your organizational unit (e.g., IFZ) — auto-detected from your email domain |
| —   | Department       | Recommended | Select your department from the dropdown                                    |


After filling in all required fields:

Click **REGISTER**. Your account is created in a pending state and you are taken to Account Settings. An admin must verify you before full access is granted (see Section 5).

> **Already registered?** Click **BACK TO SIGN IN**.

> **Received a magic link?** Clicking it takes you through the same password setup flow.

---

## 4. Login with Magic Link

1. Magic links are sent automatically — you cannot request one. They are triggered by:
  1. email verification after registration, or
  2. admin password reset.
2. Click the link in your email → you are taken to the app. If no password is set yet, you'll be prompted to create one → then use Employee ID + password for all future logins.

> **Note:** Links are single-use and expire in 1 hour. Your account may still show a pending banner until admin verifies you (see Section 6).

> **Password Requirements:** Choose a strong password. Passwords must meet the minimum length requirement set by your organization.

---

## 5. Admin Verification

After registration, your account is pending until an admin verifies it.

**Check your status:** Settings → Account Settings. A blue banner reading *"Please wait for admin verification..."* means you're still pending. Once verified, the banner disappears and full access is granted. (Search, P&ID, Data Explorer, etc.).

### How does the Admin verify users?

Admins manage user verification through the Workplace Settings panel. Here's what the admin sees:

**Step 1:** The admin navigates to **Settings → Workplace Settings** from the sidebar.

#### Workplace Settings

The Workplace Settings page shows a dashboard with usage statistics, feedback metrics, and file counts. Under the **MANAGEMENT** section in the left sidebar, there is a **Users** link.

**Step 2:** Click **Users** under MANAGEMENT — this opens the admin portal (`admin.startraven.com`) in a new tab.

#### Admin Users Page

The admin portal shows a complete user management interface:


| #   | Feature          | Description                                                        |
| --- | ---------------- | ------------------------------------------------------------------ |
| 1   | Search           | Search users by name, email, or Employee ID                        |
| 2   | Filter by Roles  | Filter the user list by assigned roles                             |
| 3   | Filter by Status | Filter by verification status (All / Verified / Unverified)        |
| —   | ADD USER         | Admin can manually add new users                                   |
| —   | Status column    | Shows whether each user is Verified (green) or Unverified (orange) |
| —   | Actions          | Three-dot menu for each user (verify, edit, deactivate, etc.)      |


**Step 3:** To find users who need verification, the admin uses the **Status** filter dropdown and selects **Unverified**.

#### Status Filter Dropdown

The status filter offers three options:

- **All** — Shows all users (286 total)
- **Verified** — Shows only verified users
- **Unverified** — Shows only users pending verification

**Step 4:** The filtered view shows only unverified users. The admin can then click the **Actions** menu (three dots) on a user's row to verify them.

#### Unverified Users

In the example above, one user (ALOK KUMAR KUSHWAHA, Employee ID IR5505) is shown with Unverified status in orange. The admin can:

- Click the **three-dot menu** under Actions to verify, edit, or manage the user
- Use **CLEAR FILTERS** to return to the full user list
- Click **ADD USER** to manually create and verify accounts for new employees

### What can I do while waiting for verification?

- You may be able to log in and access limited functionality
- Full access to search, P&ID, and data features is granted only after admin verification

### How to contact my admin?

Reach out to your plant's Raven administrator or IT department to request verification. They can verify your account through the admin portal (Workplace Settings → Users).

---

## 6. Choosing a Plant / Domain

After a successful login, Raven Copilot presents a **"Select a domain"** modal. This is a required step before you can start using the application.

#### Domain Selection

### Why do I need to select a domain?

Each domain contains its own set of documents, P&IDs, and datasets. Selecting one scopes Raven's AI responses to that plant area.

### Available domains

Domains are organized by plant area. For example:


| Category   | Domains          |
| ---------- | ---------------- |
| Individual | HSEF, PHD        |
| Ammonia    | Train-1, Train-2 |
| FCU        | Line-1F, Line-2F |
| Urea       | Urea-1, Urea-2   |


Each domain is marked with a colored dot for easy identification.

### How to select a domain

1. Click on the domain name that corresponds to your work area
2. The modal closes and you are taken to the main **Search** page
3. The selected domain is shown in the sidebar under **"SELECTED DOMAIN"**

#### Main App After Domain

### Changing your domain later

You do not need to log out and log back in to switch domains. As noted in the modal:

> *"You can change the domain later from the dropdown in the left sidebar."*

Simply click the domain dropdown in the sidebar to switch to a different plant area at any time.

---

## 7. Your Account Page

Go to **Settings → Account Settings** to view and manage your profile. The screenshot shows the menu path clearly.

#### Account Settings page

The Account Settings page displays your profile information:

#### Account Page


| #   | Field       | Description                            |
| --- | ----------- | -------------------------------------- |
| 1   | Name        | Your full name                         |
| 2   | Employee ID | Your organization-assigned Employee ID |
| 3   | Unit        | Your organizational unit (e.g., IFZ)   |
| 4   | Departments | The departments you belong to          |


- Click **SAVE PROFILE** to save any changes
- Click **CANCEL** to discard changes

> **Verification Status:** If your account has not yet been verified by an admin, a blue banner reading *"Please wait for your account to be verified by an admin before you can access the application"* appears at the top of this page. Once your admin verifies your account, this banner disappears and you will have full access. See Section 6 for details.

---

## 8. Signing Out

To sign out of Raven Copilot:

1. Click **Settings** in the bottom-left of the sidebar
2. Click **Sign Out** (displayed in red at the bottom of the menu)
3. You will be redirected to the Sign In page

#### Settings Menu — Sign Out

---

## 9. Troubleshooting

### "Email domain is not allowed" error

Use your company email (e.g., `yourname@indorama.com`). Personal emails are not accepted.

### CONTINUE button is disabled

CONTINUE stays disabled if the field is empty or an unapproved email domain is used. Enter a valid Employee ID or company email.

### LOGIN button is greyed out

The LOGIN button is disabled until you enter a password. Type your password in the field, and the button will turn purple and become clickable.

### "Account is pending verification"

Your account has been created but has not yet been verified by an admin. Contact your plant's Raven administrator to request verification.

### Magic link not received

- Check your spam/junk folder
- Ensure the email address you registered with is correct
- Contact your administrator to resend the magic link
- If the issue persists, ask your admin to clear your password and re-trigger the invitation

### Account locked out

Wait a few minutes and try again. If locked, contact your admin to unlock your account.

### Cannot find my domain in the selection

If your plant domain is not listed in the domain selection modal, contact your administrator. They may need to assign your account to the appropriate domain.
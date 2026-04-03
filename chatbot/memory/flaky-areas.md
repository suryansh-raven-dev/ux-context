# Flaky Areas

## Current Status
9 flaky areas recorded. 3 from exploration (2026-03-21), 3 from Slack Mar 17, 3 from Slack Mar 19-21.

## How To Use This File
When a UI area proves unstable, record:
- workflow
- environment
- symptom
- likely trigger
- current workaround

---

### FA-001: AI Answer Generation Timing
- **Workflow**: Search / Plant Knowledge Hub
- **Environment**: ifz.startraven.com
- **Symptom**: AI answer processing shows "Thinking..." / "Pulling the right info together" for >15 seconds. The answer may not be fully rendered when screenshots are taken.
- **Likely Trigger**: Complex queries or large document corpus; depends on backend AI processing time.
- **Workaround**: Wait at least 15-20 seconds after submitting a query before asserting on answer content. Poll for the disappearance of "Thinking..." text.

### FA-002: MUI Backdrop / Overlay Click Interception
- **Workflow**: Domain selection, Settings popup
- **Environment**: ifz.startraven.com
- **Symptom**: MUI Popover/Menu backdrop elements intercept Playwright click events, causing timeouts. The DOM element `MuiBackdrop-root MuiBackdrop-invisible` sits over the content area.
- **Likely Trigger**: Opening any MUI dropdown/popover creates an invisible backdrop that captures clicks.
- **Workaround**: Use `page.keyboard.press("Escape")` to dismiss the backdrop first, or use `element.evaluate("el => el.click()")` for JavaScript-level clicks that bypass pointer event interception.

### FA-003: Domain Selection Modal on Direct Navigation
- **Workflow**: Navigation / Any page
- **Environment**: ifz.startraven.com
- **Symptom**: When navigating directly to routes after login, the domain selection modal may re-appear, covering the intended page content.
- **Likely Trigger**: First navigation to any page after login when no domain has been selected yet, or navigating to `/workplace/dashboard` which re-triggers it.
- **Workaround**: Always select a domain immediately after login before navigating to other routes.

### FA-004: Feedback Recording Failures
- **Workflow**: Search / Plant Knowledge Hub — Feedback
- **Environment**: copilot.startraven.com (Block Imaging)
- **Symptom**: "Failed to record your feedback" error when clicking thumbs up/down on AI answers.
- **Likely Trigger**: Environment-specific backend issue; may also occur on IFZ/IPL — feedback API may be unreliable across deployments.
- **Workaround**: None known. Verify feedback API response before asserting success.
- **Source**: Slack #product thread, 2026-03-17 issue #1.

### FA-005: Answer Loading Failures
- **Workflow**: Search / Plant Knowledge Hub — Answer Generation
- **Environment**: copilot.startraven.com (Block Imaging)
- **Symptom**: "Failed to load Answer" error instead of AI response. Complete workflow failure.
- **Likely Trigger**: Backend processing error or timeout; may be query-dependent or corpus-dependent.
- **Workaround**: Retry the query. May need to switch to a different domain or simplify the question.
- **Source**: Slack #product thread, 2026-03-17 issue #3.

### FA-006: Sources Intermittently Missing From Answers
- **Workflow**: Search / Plant Knowledge Hub — Source Citations
- **Environment**: copilot.startraven.com (Block Imaging)
- **Symptom**: AI answers return without source citations across multiple queries.
- **Likely Trigger**: Document retrieval pipeline may fail silently, or certain query types do not match indexed documents.
- **Workaround**: Check SOURCES tab count before asserting on citation presence.
- **Source**: Slack #product thread, 2026-03-17 issue #2.

### FA-007: Users Tab In Workplace Settings (Fix-Regress Cycle)
- **Workflow**: Settings / Workplace Settings — User Management
- **Environment**: ifz.startraven.com, ipl.startraven.com
- **Symptom**: Users tab becomes non-clickable. Fixed on Mar 20 by Abhishek, re-broken on Mar 21. Observed on both IFZ and IPL.
- **Likely Trigger**: Deployment or config changes that break the admin frontend URL mapping.
- **Workaround**: None known. Must wait for backend fix.
- **Source**: Slack #product, KI-024/KI-039/KI-046 — 3 occurrences in 2 days.

### FA-008: Stytch Account Lockout Cascade
- **Workflow**: Authentication — All Paths
- **Environment**: All deployments sharing the same Stytch account
- **Symptom**: After too many login attempts on one deployment, the account is locked across ALL deployments. Affects email + password AND magic link auth. Employee ID path still works.
- **Likely Trigger**: Repeated login testing with invalid or changing credentials.
- **Workaround**: Use Employee ID + password auth path for testing. Avoid email-based auth when account may be rate-limited.
- **Source**: Slack #product, Mar 20-21.

### FA-009: AI Answer Stops On Tab Switch
- **Workflow**: Search / Plant Knowledge Hub — Answer Generation
- **Environment**: ifz/ipl.startraven.com
- **Symptom**: AI answer generation immediately halts when user switches to another browser tab or window.
- **Likely Trigger**: Frontend streaming implementation likely pauses/cancels fetch when page loses visibility.
- **Workaround**: Keep the browser tab focused during answer generation.
- **Source**: Slack #product, Mar 21 issue #11.

## Candidate Risk Areas (From Brochure, Not Yet Observed)
- Interactive P&ID drawings or canvas-based controls — not yet tested with actual P&ID data
- Notification-driven approval transitions — no notification system observed

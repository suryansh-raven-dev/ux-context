# Testing Patterns — Learned From Slack #product Threads

Extracted from 4 daily testing threads (Mar 17, 19, 20, 21) totaling 52+ issues.
These patterns describe how Suryansh tests and what recurring behaviors the product exhibits.

---

## Part 1: Your Testing Style Patterns

### P1: Environment Ladder
You consistently test in a progression across environments:
1. Start on one environment (e.g., `ifz.startraven.com`)
2. Cross-check the same feature on a second environment (`ipl.startraven.com`)
3. Validate on a different customer deployment (`copilot.startraven.com`)
4. Check admin portals (`admin.startraven.com`, `admin.ifz.startraven.com`)

**Actionable**: Always include at least 2 environments per testing session. Issues that appear on one deployment frequently appear on others (e.g., Users tab broken on both IFZ and IPL).

### P2: Regression Verification First
You open each day's thread by re-checking fixes from the previous day. Mar 21 thread opens with "This is not fixed" referencing a Mar 20 issue.

**Actionable**: First 2-3 issues in each daily thread should be re-verification of previous day's fixes. Track fix-verify pairs explicitly.

### P3: Numbered Sequential Thread Format
You use a consistent format: numbered issues in a single thread, each with:
- Issue number
- Description (1-2 sentences)
- Screenshot or screen recording attached
- Tags for relevant devs (@Abhishek, @Rohith)

**Actionable**: Maintain this format. It enables traceability and easy reference across threads.

### P4: Static vs Dynamic Evidence Selection
- Screenshots (PNG) for: static UI issues, layout bugs, missing elements, wrong states
- Screen recordings (MOV) for: click failures, loading issues, workflow sequences, timing bugs

**Actionable**: Use the same heuristic going forward. Screen recordings are essential for issues where the *sequence* matters (auth flows, loading states, tab switching).

### P5: Scope Broadening Within Sessions
You start with one workflow area, then organically expand into adjacent areas as you explore:
- Mar 20: Started with Workplace Settings → moved to Auth → Registration → Profile → Admin portal
- Mar 21: Started with regression check → Admin security → Search quality → P&ID → Profile → Branding

**Actionable**: This exploratory style is effective for discovery. When formalizing, structure sessions as: (1) regressions, (2) target workflow, (3) adjacent discovery.

---

## Part 2: Product Behavior Patterns

### B1: Fix-Regress Cycle (Most Critical Pattern)
Issues get fixed and then regress within 1-2 days. Observed:
- **Users tab**: Fixed Mar 20, broken again Mar 21 (3 occurrences across IFZ + IPL)
- **Admin portal link**: Fixed Mar 20, reported as unfixed Mar 21
- **Auth issues**: Fixed Stytch config Mar 20, new auth problems Mar 21

**Testing Rule**: Any issue marked as "fixed" must be re-verified the next day AND on a different environment. Create a "regression watchlist" of issues that have regressed at least once.

### B2: Cross-Tenant Contamination
Problems in one deployment leak into others:
- Stytch lockout on IFZ blocks login on IPL (same email, shared auth provider)
- IPL admin URL can access IFZ data
- Image format changes (webp → png) stored in localStorage cause issues across sessions

**Testing Rule**: Always test auth flows with isolated test accounts per deployment. Never share the same email across IFZ/IPL/copilot for active testing.

### B3: Config Drift After Domain/URL Changes
When infrastructure changes happen (domain renames, URL changes), configuration doesn't follow:
- `ifl.startraven.com` → `ifz.startraven.com` broke Stytch redirect URIs
- Admin frontend URL missing from account config after setup
- Image URLs stored in localStorage become stale after format changes

**Testing Rule**: After any domain/URL change, systematically check: (1) auth redirect URIs, (2) admin portal links, (3) cross-references between portals, (4) cached data in localStorage.

### B4: UI Consistency Decay Across Deployments
The same UI component renders differently or breaks differently across customer deployments:
- Dept dropdown: populated on IFZ, empty on copilot
- P&ID tab: "No files found" on IFZ, "coming soon" on copilot
- Profile fields: Unit/Org/Role present on IFZ, missing on copilot
- Branding: generic "AI platform" sub-header doesn't fit all customers

**Testing Rule**: Every UI element check should be done on at least 2 different customer deployments. Customer-specific configuration is a major bug source.

### B5: Dashboard Data Pipeline Disconnects
The Workplace Dashboard frequently shows stale or incorrect data:
- Queries not reflected from Search (Mar 21)
- Feedback data not displayed despite API returning it (Mar 20)
- Date filter state mismatch (ALL TIME vs WoW, Mar 21)
- Legend colors don't match graph colors (Mar 19)

**Testing Rule**: Dashboard testing requires: (1) perform an action in the app, (2) check dashboard reflects it, (3) verify filter states match displayed data.

### B6: Recurring P&ID Visibility Issue
The P&ID tab/section is shown even when no data exists. Raised 4 times across 3 threads (Mar 17, 19, 21) and never fully resolved.

**Testing Rule**: Track issues that recur across 3+ threads separately as "systemic issues." They likely indicate a deeper architectural decision that hasn't been made.

### B7: Auth Path Fragility
Authentication has the most failure modes of any workflow:
- Employee ID login works when email login is locked
- Magic link can hang indefinitely
- Registration can succeed but login can fail (Stytch config)
- Password clear + re-register flow is fragile
- Unverified users bypass access controls

**Testing Rule**: Always test at least 2 auth paths per session. Employee ID is the most reliable path. Email-based auth is fragile and should be tested with dedicated accounts not used for other testing.

---

## Part 3: Test Prioritization Heuristics

Based on issue severity distribution across all threads:

### Severity Tiers
| Tier | Category | Count | Examples |
|------|----------|-------|---------|
| Critical | Security / Auth / Workflow Failure | 10 | Admin portal without auth, cross-tenant access, unverified user access, answer failures |
| High | Admin Blocked / Data Integrity | 14 | Users tab broken, conflicting sources, feedback pipeline, Stytch lockout |
| Medium | Usability / Feature Gaps | 12 | Profile fields, dept dropdown, tag management, file preview |
| Low | Cosmetic / Branding | 16 | Icon styling, corner radii, logo size, sub-headers, legend colors |

### Priority Testing Order For Future Sessions
1. **Security gates**: Auth required? Tenant isolation? Unverified access blocked?
2. **Regression watchlist**: Re-verify yesterday's fixes
3. **Core workflow**: Does Search → Answer → Sources work end-to-end?
4. **Admin workflow**: Do Settings → Users → Dashboard all function?
5. **Cross-environment**: Same test on 2nd deployment
6. **UI polish**: Consistency, responsiveness, branding

---

## Part 4: Issue Category Distribution

| Category | Mar 17 | Mar 19 | Mar 20 | Mar 21 | Total |
|----------|--------|--------|--------|--------|-------|
| Auth / Security | 0 | 0 | 8 | 5 | 13 |
| Search / AI Answers | 4 | 0 | 0 | 4 | 8 |
| Settings / Dashboard | 0 | 3 | 4 | 4 | 11 |
| UI Consistency | 3 | 4 | 2 | 3 | 12 |
| Data Explorer / Files | 4 | 0 | 0 | 0 | 4 |
| P&ID | 1 | 1 | 0 | 1 | 3 |
| Branding / Terminology | 1 | 0 | 1 | 2 | 4 |
| **Total** | **13** | **7** | **17** | **15** | **52** |

**Key insight**: Auth/Security issues are concentrated on Mar 20-21 (when admin portals were first tested). Search/AI issues are concentrated on Mar 17 and Mar 21 (when Q&A quality was the focus). This suggests your testing naturally finds category clusters when you focus on an area.

---

## Part 5: Recurring Issue Tracker

Issues that appear in 2+ threads, suggesting systemic unfixed problems:

| Issue | Threads | Status |
|-------|---------|--------|
| P&ID tab visible when no data | Mar 17, 19, 21 (3x) | Unfixed |
| Icon styling inconsistent (rounded vs outlined) | Mar 17, 19 (2x) | Unfixed |
| Users tab not clickable (Workplace Settings) | Mar 20, 21 (3 occurrences) | Fix-regress |
| Admin portal auth issues | Mar 20, 21 (2x) | Fixed (Mar 21) |
| Dept/Unit dropdown issues | Mar 17, 20 (2x) | Unfixed |
| Feedback mechanism broken/stale | Mar 17, 20 (2x) | Unfixed |

---

## Update Rule
After each testing session, update this file with:
- Any new patterns observed
- Changes to recurring issue counts
- Shifts in category distribution

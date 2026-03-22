# Raven Test Oracles

These are seeded from the brochure material and refined with real product behavior observed on 2026-03-21.

## Cross-Workflow Oracles
- A workflow is not successful just because navigation changed; the user-visible result and the business outcome must both be correct.
- Generated outputs should be reviewable before finalization.
- Evidence and traceability matter as much as raw generation speed.
- **Confirmed**: AI answers include source citations ([1], [2], [3]) for traceability.
- **Confirmed**: Session history preserves all interactions with timestamps for auditability.
- **Confirmed**: Thumbs up/down, share, and bookmark provide user feedback and save mechanisms.

## Citation And Knowledge Oracles
- Cited answers should expose enough source detail for a user to verify the claim.
- When sources disagree, the discrepancy should be visible rather than silently resolved.
- Current-document awareness should be visible where revision context matters.
- **Confirmed**: SOURCES tab shows source count next to AI ANSWER tab.
- **Confirmed**: AI Thoughts section transparently shows Document Search queries and keywords used.
- **Confirmed**: Inline numbered references ([1], [2], [3]) link to source documents.
- **VIOLATED (copilot.startraven.com)**: Sources missing in multiple queries — AI answers returned without any source citations (Slack #product, 2026-03-17 issue #2).
- **VIOLATED (copilot.startraven.com)**: "Failed to load Answer" — complete answer generation failure (issue #3).
- **VIOLATED (copilot.startraven.com)**: Answer formatting broken — raw commands/markup leaking into rendered text (issue #4).
- **VIOLATED (ipl.startraven.com)**: Conflicting sources in AI answers — especially from XLSX files. Discrepancies not flagged (Mar 21 issue #6).
- **VIOLATED (ipl.startraven.com)**: Answer stops generating when user switches browser tab (Mar 21 issue #11).
- **VIOLATED (ipl.startraven.com)**: Answer fails to load for specific session (Mar 21 issue #12).
- **Untested**: Source drill-down (clicking citation numbers) behavior.
- **PARTIALLY CONFIRMED**: Discrepancy handling when sources conflict — discrepancies exist but are NOT surfaced to the user (Mar 21).

## Isolation Planning Oracles
- Selecting equipment on a P&ID should lead to a concrete marked boundary or equivalent planning state.
- Generated checklist content should remain tied to visible plant references and precautions.
- Reviewers should be able to inspect and adjust the generated plan before approval.
- **Partially confirmed**: P&ID page exists with search by P&ID number or Equipment tag.
- **Partially confirmed**: Multi-tab P&ID viewing interface is present.
- **Blocked**: HSEF domain has no P&ID files ("No files found") — need to test with other domains.

## Review / Approval Oracles
- Draft, review, and approval states should be distinguishable.
- Reviewer actions should preserve the workflow history and final outcome.
- Final approval should leave a clear user-visible completion state.
- **Observation**: No dedicated review/approval workflow found in the current version.
- **Observation**: Feedback (thumbs up/down) serves as a lightweight review mechanism on AI answers.
- **VIOLATED (copilot.startraven.com)**: Feedback recording fails with "Failed to record your feedback" error — the lightweight review mechanism is broken (Slack #product, 2026-03-17 issue #1).
- **Observation**: Saved Answers (`/saved`) may serve as a "marked for review" feature.

## Data Management Oracles (New — Observed)
- Uploaded files should be browsable with accurate metadata (name, status, date, category, tags).
- File upload should accept stated formats and show clear progress/completion.
- File filtering and search should narrow results as expected.
- File actions should include tag management (add/edit tags).
- File preview header should remain usable at any viewport width.
- Tags should be auto-allotted to files where possible.
- **Confirmed**: File table shows Name, Status, Date Modified, Category, Tags, Actions.
- **Confirmed**: Upload dialog lists supported formats clearly.
- **Confirmed**: Filter dropdown offers four filter dimensions.
- **VIOLATED (copilot.startraven.com)**: ADD TAG feature missing from file action menu (issue #8).
- **VIOLATED (copilot.startraven.com)**: File preview header not adaptive — options crop/overflow (issue #9).
- **VIOLATED (copilot.startraven.com)**: Files lack auto-assigned tags, Tags column empty (issue #10).
- **Gap**: No centralized Tag Management page exists for CRUD on file tags (issue #13).

## Settings / Admin Oracles (New — Observed)
- Workplace Dashboard metrics should reflect actual usage data.
- Account settings should persist after save.
- Dark/light mode toggle should apply consistently across all pages.
- Department dropdown should show valid options or be hidden entirely.
- Users tab in Workplace Settings must be functional for admin users.
- Dashboard legend colors must match graph colors.
- Date filter must correctly reflect the selected state.
- **Confirmed**: Dashboard shows real usage metrics (60 queries/week, 7 active users, 1854 files).
- **Untested**: Account settings save behavior.
- **Confirmed**: Dark mode applies consistently to all UI elements.
- **VIOLATED (copilot.startraven.com)**: Empty Dept dropdown — shows no options (issue #7).
- **VIOLATED (ifz, ipl)**: Users tab not clickable — raised Mar 20, fixed, regressed Mar 21, raised again. 3 occurrences across 2 environments.
- **VIOLATED (ifz)**: Role Access tab shows white screen (Mar 20).
- **VIOLATED (ifz)**: Dashboard legend colors don't match graph (Mar 19 issue #7).
- **VIOLATED (ifz)**: Date Period filter shows wrong selection state — ALL TIME selected but WoW shown (Mar 21 issue #8).
- **VIOLATED (ifz)**: Dashboard queries not syncing from Search section (Mar 21 issue #9).
- **VIOLATED (ipl)**: Feedback data not displayed despite API returning it (Mar 20 issue #17).

## Authentication / Authorization Oracles (New — From Slack Mar 20-21)
- Admin portals must require authentication before showing any content.
- Tenant isolation must be enforced — IPL admin must not access IFZ data.
- Unverified users must not be able to access search or documents.
- Registration flow must handle domain renames gracefully (redirect URIs).
- Account lockout on one deployment must not silently cascade to other deployments.
- **VIOLATED**: Admin portal publicly accessible without auth (Mar 21 issues #3, #4). Fixed.
- **VIOLATED**: IPL admin could access IFZ (Mar 21 issue #2). Fixed.
- **VIOLATED**: Unverified users can access search/documents (Mar 20 issue #13). Under investigation.
- **VIOLATED**: Stytch redirect URI mismatch after domain rename broke registration (Mar 20 issues #5, #6). Fixed.

## UI Consistency Oracles (New — From Slack Mar 17)
- Button elevation (shadow) should be consistent across the app — not masked or removed.
- Icon styling should use the same shape (rounded) consistently.
- Single-option dropdowns should not exist — navigate directly instead.
- Empty states should have proper styling (white background, not grey).
- Responsive layouts should not crop or overflow controls.
- P&ID navigation items should be hidden when no P&ID data exists for the customer.
- **VIOLATED (copilot.startraven.com)**: Button elevation removed, icon styling mixed (issue #6).
- **VIOLATED (copilot.startraven.com)**: Single-option dropdown in Data Management (issue #5).
- **VIOLATED (copilot.startraven.com)**: Grey card backgrounds and broken responsiveness (issue #12).
- **VIOLATED (copilot.startraven.com, ifz.startraven.com)**: P&ID "coming soon" / "No files found" visible when no data (issues #11, #14).

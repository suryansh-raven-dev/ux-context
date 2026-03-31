# Session Log: 2026-03-21 — Initial Application Exploration

## Session Goal
First live exploration of Raven AI at ifz.startraven.com. Login, navigate all screens, and produce a consolidated application report.

## Account Used
- Employee ID: `SURYANSH-04`
- Name: Suryansh Srivastava
- Unit: IFZ
- Departments: PHD, FCU Line 1, Urea 2, Urea 1, Ammonia 2, Ammonia 1, Technical Services, HSEF, FCU Line 2

## Environment
- URL: https://ifz.startraven.com
- Domain tested primarily: HSEF

## Method
Automated exploration using Playwright (headless Chromium) via three progressive scripts:
1. `explore_raven.py` — initial login and broad URL discovery
2. `explore_raven_deep.py` — domain selection, Search, P&ID, Data Explorer, Settings
3. `explore_raven_final.py` — AI answer wait, session history, Data Explorer drill-down, upload dialog, filters
4. `explore_settings.py` — Settings popup discovery
5. `explore_settings_deep.py` — All 6 settings options explored
6. `explore_workplace.py` — Workplace Dashboard deep dive

## Key Discoveries

### Application Identity
- **Raven AI** by Indorama — AI copilot for process plants
- React SPA with Material-UI, domain-scoped architecture
- 8 plant domains, 264 users, 1,854 documents

### Login Flow
- Two-step: Employee ID → CONTINUE → Password → LOGIN
- Post-login: mandatory domain selection modal
- No MFA, SSO, forgot-password observed

### Main Sections Discovered
1. **Search (AI Knowledge Hub)** — `/search` — Core feature, AI Q&A with citations
2. **P&ID Viewer** — `/pid` — Multi-tab diagram viewer, empty for HSEF
3. **Data Explorer** — `/data/data-explorer` — File management with upload, filter, sort
4. **Settings Popup** — 6 options: Account, Workplace, Saved Answers, Feedback, Dark Mode, Sign Out
5. **Workplace Dashboard** — `/workplace/dashboard` — Admin analytics (usage, feedbacks, files, users)
6. **Account Settings** — `/account` — Profile management form
7. **Saved Answers** — `/saved` — Bookmarked AI answers (empty state)
8. **Answer Feedback** — `/feedback` — Feedback management with two tabs

### AI Search Capabilities Confirmed
- Free-text question answering scoped to selected domain
- Structured answers with section headers, numbered lists, bold text
- Source citations as clickable [1], [2], [3] references
- AI Thoughts transparency (Document Search queries, keywords)
- Multi-turn conversations with follow-up input
- Session history with auto-generated titles
- Thumbs up/down, share, bookmark interaction buttons
- NEW SESSION button for fresh conversations
- Refine Search and microphone (voice input) buttons present

### Known Issues Found
1. `/settings` URL renders blank (Settings is a popup, not a page)
2. Help & Support in Workplace Settings redirects to Search
3. MUI backdrop intercepts automated clicks on domain dropdown

### Flaky Areas Identified
1. AI answer generation takes >15 seconds
2. MUI backdrop/overlay click interception in automated testing
3. Domain selection modal re-appears on some direct navigations

## Files Updated
- `chatbot/learnings/authentication/discovery.md` — status: completed
- `chatbot/learnings/plant-knowledge-hub/discovery.md` — status: explored
- `chatbot/learnings/isolation-planning/discovery.md` — status: partial
- `chatbot/learnings/review-approval/discovery.md` — status: partial
- `chatbot/learnings/data-explorer/discovery.md` — NEW, status: explored
- `chatbot/learnings/settings/discovery.md` — NEW, status: explored
- `chatbot/discovery/app-map.md` — fully populated
- `chatbot/discovery/navigation-map.md` — fully populated
- `chatbot/discovery/auth-map.md` — fully populated
- `chatbot/discovery/role-map.md` — partially populated
- `chatbot/memory/selectors.md` — 30+ stable selectors recorded
- `chatbot/memory/known-issues.md` — 3 issues logged
- `chatbot/memory/flaky-areas.md` — 3 flaky areas logged
- `chatbot/memory/test-oracles.md` — updated with confirmed/unconfirmed status
- `chatbot/product-summary.md` — updated with live observations
- `chatbot/workflows/` — workflow seeds updated with account/environment details

## Screenshots Captured
- `screenshots/` — 28 screenshots from initial exploration
- `screenshots/deep/` — 9 screenshots from deep exploration
- `screenshots/final/` — 9 screenshots from final exploration
- `screenshots/settings/` — 19 screenshots from settings exploration
- **Total: 65 screenshots**

## Next Steps
1. Test P&ID with a domain that has data (Ammonia Train-1, FCU, Urea)
2. Test citation drill-down behavior
3. Test Refine Search feature
4. Test bookmark → Saved Answers flow end-to-end
5. Test feedback submission → Feedback page visibility
6. Explore with different user accounts for role-based access mapping
7. Test invalid login credentials and error handling
8. Test Sign Out functionality

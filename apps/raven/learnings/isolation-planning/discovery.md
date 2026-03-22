# Learned Context: Isolation Planning

## Discovery Status
`partial`

## User-Provided Truth
- Isolation Planning is a top-priority Raven workflow.
- Brochure material emphasizes interactive P&IDs, marked boundaries, cited checklist generation, and reviewability.

## Observed Behavior
- P&ID is accessible via the sidebar navigation under "AI AGENTS" section.
- URL pattern: `/pid?tabId=<uuid>`
- The P&ID page opens with a "New Tab" (browser-tab-like interface) with a "+" button to add more tabs.
- A search input is present: "Search by P&ID no or Equipment tag..."
- Under the HSEF domain, the P&ID page shows "No files found" — indicating this domain may not have P&ID documents uploaded.
- The P&ID viewer appears to be a document/diagram viewer that loads P&ID files associated with the selected domain.
- No canvas or SVG-based interactive diagram was rendered for HSEF domain.
- The tab-based interface suggests multiple P&IDs can be opened simultaneously.

## Confirmed Paths
- P&ID navigation from sidebar — confirmed
- Search by P&ID number or Equipment tag — confirmed (search input present)
- Multi-tab P&ID viewing — confirmed (tab UI with "New Tab" and "+" visible)
- Domain-scoped P&ID files — confirmed (different domains may have different files)

## Hypothesized Branches
- Open planning from P&ID or unit context — partially confirmed (P&ID page exists but no files for HSEF)
- Select one equipment or area and inspect generated boundary — not tested (no P&ID files available in HSEF domain)
- Review generated checklist details — not observed
- Adjust, save, submit, or route for approval if available — not observed
- Interactive P&ID with clickable equipment — not observed yet (may need domain with data)

## UI Targets
- P&ID page URL: `/pid?tabId=<uuid>`
- P&ID search: `input[placeholder='Search by P&ID no or Equipment tag...']`
- New Tab: tab labeled "New Tab"
- Add tab button: "+" button next to tabs
- Sidebar link: `a[href='/pid']` or `a:has-text('P&ID')`

## Success Signals
- P&ID diagram/file loads and is interactive
- Equipment tags are clickable
- Search returns matching P&IDs or equipment

## Failure Signals
- "No files found" message (observed for HSEF domain)
- No interactive elements on P&ID canvas

## Evidence Captured
- Screenshot: `screenshots/deep/06_pid_page.png` — P&ID page with "No files found" for HSEF domain

## Cross-Environment Issues (From Slack #product, 2026-03-17)
Environment: `copilot.startraven.com` (Block Imaging)

### P&ID Visibility When No Data
- P&ID "coming soon" option is visible to Block Imaging users even though no P&ID data exists for their account.
- This matches the "No files found" behavior observed on IFZ/HSEF domain.
- Recommendation: Hide the P&ID navigation item entirely when no P&ID files exist for the customer.

### Stabilization Phase
- Team paused new P&ID and chatbot features for 1 week (as of Mar 17) to stabilize backend pipelines and infra.
- This suggests P&ID functionality may be partially deployed but not production-ready.

## Risks / Unknowns
- HSEF domain has no P&ID files — need to test with Ammonia/Train-1, FCU, or Urea domains
- Interactive P&ID behavior (clicking equipment, marking boundaries) not yet observed
- Isolation planning workflow may require specific domain data
- The tab-based interface needs exploration with actual P&ID files loaded
- **NEW**: P&ID nav item shown even to customers with no P&ID data (copilot.startraven.com)
- **NEW**: Backend pipelines for P&ID/chatbot are in stabilization mode as of Mar 17

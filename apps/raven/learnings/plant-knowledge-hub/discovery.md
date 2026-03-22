# Learned Context: Plant Knowledge Hub Question Answering

## Discovery Status
`explored`

## User-Provided Truth
- Plant Knowledge Hub is one of the first high-value Raven workflows.
- Brochure material emphasizes cited answers, source visibility, and discrepancy checks.

## Observed Behavior
- The "Search" section (labeled as AI Agent) serves as the Plant Knowledge Hub / Q&A interface.
- URL: `/search` — the default landing page after login and domain selection.
- The interface presents a chat-like Q&A experience: "Ask me anything about [DOMAIN]".
- Input is a textarea with placeholder "Search, or ask anything..." and includes a "Refine Search" button and a microphone icon.
- After submitting a question, the system shows:
  - The question with a timestamp (e.g., "Today · 7:24 PM")
  - An "AI ANSWER" tab (primary) and a "SOURCES" tab showing source count
  - "AI Thoughts" expandable section showing the system's reasoning process (Document Search queries, keywords used)
  - "Thinking..." / "Pulling the right info together" status indicators during processing
- AI answers are structured, formatted text with numbered lists, bold text, and section headers.
- Source citations appear as clickable numbered references (e.g., [1], [2], [3]) inline with the answer text.
- Answer interaction buttons: thumbs up, thumbs down, share, bookmark — visible below each answer.
- Follow-up questions can be asked via "Ask a follow-up..." input at the bottom.
- "NEW SESSION" button (top-right, purple) starts a fresh conversation.
- Session history appears in the sidebar with auto-generated descriptive titles (e.g., "Electrical Energy Source Isolation: De-Energizing, Re-Energizing Procedures and LOTO Permit Retention Policy").
- "View All" link in sidebar expands to show all sessions page (`/search/all-sessions`) with search, timestamps, and count (e.g., "7 sessions").
- Domain-scoped: answers are scoped to the selected domain (e.g., HSEF).
- The system searches uploaded documents within the domain to generate answers.

## Confirmed Paths
- Free-text question submission — confirmed working
- AI answer generation with citations — confirmed
- Source tab showing source count — confirmed
- Session history with auto-titles — confirmed
- Follow-up question input — confirmed present
- View All sessions page — confirmed
- Refine Search feature — confirmed present (not yet tested in depth)
- Voice input (microphone icon) — confirmed present (not tested)

## Hypothesized Branches
- ~~Ask a free-text plant question~~ (confirmed)
- ~~Inspect source or citation details~~ (confirmed — SOURCES tab with count)
- Start from equipment or tag context — not observed as a separate entry point
- Observe discrepancy or review messaging when sources conflict — not tested
- Refine Search interaction — present but not fully explored
- Multi-turn conversation quality — not tested

## UI Targets
- Search page URL: `/search`
- Search input: `textarea[placeholder='Search, or ask anything...']`
- Follow-up input: `textarea[placeholder='Ask a follow-up...']`
- AI Answer tab: `text=AI ANSWER`
- Sources tab: `text=SOURCES`
- AI Thoughts section: `text=AI Thoughts`
- New Session button: `button:has-text('NEW SESSION')`
- Refine Search: `text=Refine Search`
- View All sessions: `text=View All`
- Session history entries: sidebar links under "Search"

## Success Signals
- AI Answer tab appears with structured, cited response
- Sources tab shows source count > 0
- Session appears in sidebar with descriptive title
- Follow-up input becomes available after first answer

## Failure Signals
- Answer appears without actionable citation context
- Source drill-down is broken or hidden
- Conflicting references are silently masked
- "Thinking..." never resolves

## Evidence Captured
- Screenshot: `screenshots/deep/02_after_hsef_selected.png` — Search landing with "Ask me anything about HSEF"
- Screenshot: `screenshots/deep/05_search_results.png` — AI thinking/processing state
- Screenshot: `screenshots/final/01_search_ai_answer_loaded.png` — AI Thoughts and Document Search visible
- Screenshot: `screenshots/final/03_previous_session.png` — Full AI answer with citations [1][2][3], SOURCES tab, interaction buttons
- Screenshot: `screenshots/final/08_view_all_sessions.png` — All Sessions history page

## Cross-Environment Issues (From Slack #product, 2026-03-17)
Environment: `copilot.startraven.com` (Block Imaging), account: `ben.rolff@blockimaging.com`

### Answer Generation Failures
- "Failed to load Answer" error observed — complete workflow failure on certain queries.
- Sources missing in multiple queries — AI answers returned without citations.
- Both violations are critical because they break the core value proposition (cited knowledge retrieval).

### Answer Formatting Bugs
- Raw commands or markup leaking into AI response text.
- Formatting does not match expected clean output style.
- Comparison screenshots available in Slack thread (expected vs actual).

### Feedback Mechanism Broken
- "Failed to record your feedback" error when clicking thumbs up/down.
- The only lightweight review mechanism available in the app is non-functional on this environment.

### Stabilization Context
- Sriyansh announced on Mar 17: "We'll stop any new features in P&ID / chatbot (datasheet, SOP) for next 1 week and focus on stabilizing backend pipelines and infra."
- This suggests these issues are known and backend instability is the root cause.

## Risks / Unknowns
- Citation drill-down (clicking [1], [2] etc.) not yet tested
- Refine Search feature behavior unknown
- Voice input functionality not tested
- Discrepancy handling between conflicting sources not observed
- Answer quality varies with domain data availability
- Processing time can be significant (>15 seconds observed)
- **NEW**: Answer generation can completely fail on some queries (copilot.startraven.com)
- **NEW**: Source citations can be entirely absent (copilot.startraven.com)
- **NEW**: Answer formatting can break with raw markup leaking through (copilot.startraven.com)
- **NEW**: Feedback recording may be unreliable across environments

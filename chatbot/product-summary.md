# Raven Product Summary

## Core Product Positioning

Raven is positioned as an AI copilot for process plants. It combines plant documents and system context into a connected knowledge layer, then turns that knowledge into reviewable workflow outputs.

**Confirmed**: Raven AI is a domain-scoped industrial knowledge management platform built for Indorama (IFZ plant). Its core value is AI-powered search that delivers cited, traceable answers from uploaded plant documents.

## Platform Details (Confirmed 2026-03-21)

| Attribute | Value |
|-----------|-------|
| Product Name | Raven AI |
| Client | Indorama (IFZ plant) |
| URL | https://ifz.startraven.com |
| Tech Stack | React SPA + Material-UI (MUI) |
| Auth Method | Employee ID + password (two-step) |
| Architecture | Domain-scoped (8 plant domains) |
| Total Files | 1,854 documents |
| Total Users | 264 |
| File Categories | 8 (SOP, Datasheet, Checklists, etc.) |

## High-Value Workflows — Status

| Workflow | Brochure Claim | Observed Status |
|----------|---------------|-----------------|
| **Plant Knowledge Hub** | Answer plant questions with cited, reviewable context | **Active** — "Search" AI Agent with citations, sources, AI Thoughts |
| **Isolation Planning** | Mark up interactive P&IDs, identify boundaries, generate checklists | **Partial** — P&ID viewer exists, no data for HSEF domain |
| **Incident Investigation** | Capture events, generate investigation outputs | **Not found** — no dedicated section in navigation |
| **Review / Approval** | Cross-cutting workflow for reviewing generated outputs | **Inline only** — thumbs up/down, share, bookmark on AI answers |

## Confirmed Application Sections

| Section | Purpose | Key Feature |
|---------|---------|-------------|
| Search | AI-powered Q&A over plant documents | Cited answers, AI Thoughts transparency, session history |
| P&ID | P&ID diagram viewer | Multi-tab viewing, equipment tag search |
| Data Explorer | Document management | Upload, filter, sort, browse files |
| Account Settings | User profile | Name, Employee ID, Unit, Departments |
| Workplace Dashboard | Admin analytics | Usage metrics, feedback stats, file/user counts |
| Saved Answers | Bookmarked AI answers | Empty state observed |
| Answer Feedback | Feedback management | Two tabs (document feedback, Raven feedback) |

## Product Behaviors Worth Testing Early

- ~~Outputs should stay tied to source documents, pages, and passages.~~ **Confirmed** — citations link to sources.
- When documents disagree, the discrepancy should be visible instead of silently hidden. **Untested**.
- Interactive P&ID actions should lead to concrete downstream artifacts. **Blocked** — no P&ID data in HSEF.
- Generated content should remain reviewable and editable before approval. **Partial** — AI answers are reviewable but no edit/approval workflow.
- Approval workflows should preserve traceability from initial draft to final sign-off. **Not found** — no approval workflow observed.

## Key Artifacts

| Artifact | Location |
|----------|----------|
| User Onboarding Guide | `chatbot/user-onboarding-guide.md` |
| Navigation Map | `chatbot/discovery/navigation-map.md` |
| App Map | `chatbot/discovery/app-map.md` |
| Plant Knowledge Hub Workflow | `chatbot/workflows/plant-knowledge-hub.md` |
| Memory Files | `chatbot/memory/` |
| Screenshots | `chatbot/screenshots/` |

## Suggested Next-Pass Priorities

1. Test P&ID with a domain that has P&ID files (e.g., Ammonia Train-1)
2. Test citation drill-down (click [1], [2], [3] in AI answers)
3. Test Refine Search feature
4. Test bookmark → Saved Answers flow
5. Test feedback submission and its appearance in Feedback page
6. Test with different user accounts to map role-based access

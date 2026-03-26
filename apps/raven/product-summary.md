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
| Near-Miss Design System | `apps/raven/design-system/near-miss-components.md` |
| Raven UI MUI v6 Catalog | `apps/raven/design-system/raven-ui/src/catalog/muiV6Catalog.ts` |
| Figma Source | [Near-Miss Incident Reporting Tool](https://www.figma.com/design/cKJAKEFahN53w0PJ5d88pr) |
| Analytics & Insights PRD | `apps/raven/prd/analytics-insights-prd.md` |
| Near Miss Figma Prototype | [Prototype (v3 - NMMS Style)](https://www.figma.com/design/blkJa1xqLb5naWlxB8vcrW) |
| Session Logs | `apps/raven/session-logs/` |

## Suggested Next-Pass Priorities

1. Test P&ID with a domain that has P&ID files (e.g., Ammonia Train-1)
2. Test citation drill-down (click [1], [2], [3] in AI answers)
3. Test Refine Search feature
4. Test bookmark → Saved Answers flow
5. Test feedback submission and its appearance in Feedback page
6. Test with different user accounts to map role-based access

---

## Analytics & Insights Platform (Near miss Module)

### Core Product Positioning

Near miss is a **multi-industry prescriptive safety intelligence platform** that transforms incident, near-miss, and hazard data into actionable analytics, proactive risk insights, and compliance tracking. Deployable across **Chemical, Oil & Gas, Manufacturing, Fertilizer, Pharmaceutical, Food Processing, Mining, Power Generation, and Construction** sectors.

### Platform Details

| Attribute | Value |
|-----------|-------|
| Product Name | Near miss |
| Product Type | Safety Analytics & Intelligence Platform |
| Data Source | Multi-industry incident databases (CSB, OSHA, MSHA, internal) |
| Target Industries | Chemical, Oil & Gas, Manufacturing, Fertilizer, Pharma, Food, Mining, Power, Construction |
| Target Users | Safety Directors, Plant Managers, Engineers, Compliance Officers, Corporate EHS |
| Tech Stack (Planned) | React 18+, TypeScript, Recharts + D3.js, Mapbox GL, FastAPI, PostgreSQL |
| Design System | Inter font, Navy/Blue/Red/Green palette, 12px border-radius cards |

### Version 1.0 Scope

#### In Scope
- Analytics Dashboard (3-layer architecture: descriptive, diagnostic, prescriptive)
- Insights Page with 6 prescriptive intelligence blocks
- Recommendation Tracker Module
- Near-Miss Reporting Module (basic)
- Search & Filter Engine
- Role-Based Access Control (RBAC)
- Export functionality (PDF / CSV)
- Alert & Notification System

#### Out of Scope (v1.0)
- Mobile app
- Real-time incident ingestion
- Predictive modeling training pipeline
- Integration with external EHS platforms

### Information Architecture

```
Near Miss Platform
├── Analytics Dashboard (8 chart sections)
├── Insights Page (6 intelligence blocks)
├── Recommendation Tracker (3 views)
├── Incident Search & Explorer (3 sections)
├── Near-Miss Reporting (3 features)
└── Admin & Settings (3 sections)
```

### Design Decisions (Confirmed 2026-03-25)

- **Color System**: Navy primary (#1A365D), Blue accent (#2B6CB0), Red for danger/fatalities, Green for success/low risk, Purple for AI features, Amber for warnings
- **Typography**: Inter font family across all weights
- **Card Design**: White cards with 12px border-radius, subtle shadow, 24px padding
- **Chart Library**: Recharts + D3 for custom visualizations (Sankey, heatmap, donut)
- **Map**: Mapbox GL for incident geo distribution
- **AI Badge**: Purple (#805AD5) for AI-powered features with BETA tag

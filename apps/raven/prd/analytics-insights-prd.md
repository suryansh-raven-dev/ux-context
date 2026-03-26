# Nearmiss — Analytics & Insights PRD

**Version:** 3.0 | **Date:** 2026-03-25 | **Status:** Draft

**Figma:** [Prototype (v3 - NMMS Style)](https://www.figma.com/design/blkJa1xqLb5naWlxB8vcrW)  
**Reference:** [NMMS Analysis Dashboard](https://www.figma.com/design/cKJAKEFahN53w0PJ5d88pr)

---

## 1. Overview

Nearmiss is a multi-industry safety intelligence platform. It converts incident, near-miss, and hazard data into prescriptive analytics and proactive risk insights.

**Scope (v1.0):** Analytics Dashboard + Insights Page with AI-Search.

**3-Layer Model:**

| Layer | Question | Feature |
|-------|----------|---------|
| Descriptive | What happened? | KPIs, trends, breakdowns |
| Diagnostic | Why did it happen? | Root cause flows, heatmaps, patterns |
| Prescriptive | What to do next? | AI risk predictor, recommendations, cross-reference search |

### Target Industries

Chemical, Oil & Gas, Manufacturing, Fertilizer, Pharma, Food Processing, Power Generation, Mining, Construction.

The platform uses a configurable data model — industry-specific terms map to common entities (e.g., "chemical" / "mineral" / "ingredient" → **Hazard Substance**).

### Target Users

| Persona | Use Case |
|---------|----------|
| Safety Director | KPI monitoring, compliance oversight, board reporting |
| Plant Safety Manager | Root cause analysis, shift risk assessment |
| Process Engineer | Hazard lookup, pre-maintenance context |
| Compliance Officer | Corrective action tracking, aging alerts |
| Operations Manager | Activity-based risk, seasonal patterns |

---

## 2. Information Architecture

```
Nearmiss Platform
├── Analytics Dashboard        ← This PRD
├── Insights Page (+ AI Search) ← This PRD
├── Recommendation Tracker
├── Near-Miss Reporting
└── Admin & Settings
```

---

## 3. Analytics Dashboard

**URL:** `/analytics` | **Context:** Single-plant, scoped by department  
**Design:** Matches NMMS reference — purple sidebar, MUI components, Source Sans 3 / Inter typography

### 3.1 Global Controls

| Control | Type | Options |
|---------|------|---------|
| Department Tabs | Pill row | All Departments, Production, Maintenance, Operations, Utilities, Warehouse, Quality/Lab, HSE, Admin |
| Date Range | Dropdown chip | Last 12 Months, YTD, Last 3 Years, Custom |
| Region | Dropdown chip | All Regions, or specific zone |
| Severity | Dropdown chip | All, Critical, High, Medium, Low, Near-Miss |
| Export | Button | PDF / CSV / Excel |

Filters are AND-combined. Active filters appear as removable chips. State persists in URL params.

### 3.2 KPI Strip (6 cards)

| KPI | Value | Trend | Drill Target |
|-----|-------|-------|-------------|
| Total Incidents | `1,847` | ▼12% | Trend chart |
| Fatalities | `142` | ▼18% | Root Cause breakdown |
| Injuries | `3,291` | ▲5% | Department donut |
| Near Misses | `8,456` | ▲34% (good) | Trend chart |
| Open Actions | `2,103` | 14% open | Compliance scorecard |
| TRIR | `2.4` | ▼0.3 | Trend chart |

Cards: white bg, 120px height, 32px bold number, trend badge pill, colored accent bar at top.

### 3.3 Charts (6 visualizations)

| Chart | Type | Position | Key Spec |
|-------|------|----------|----------|
| **Incidents by Department** | Donut | Row 1 left | 8 departments, center total, right-side legend, click-to-filter |
| **Incidents by Location** | Horizontal bar | Row 1 right | 10 plant areas, sorted descending, blue gradient bars |
| **Dept × Severity Heatmap** | Grid matrix | Row 2 left | 8 depts × 5 severity levels, sequential color scale, counts in cells |
| **Incident Trend** | Line chart | Row 2 right | 2 series (Total + Critical), rolling 12 months, dual Y-axis |
| **Activity at Time** | Horizontal bar | Row 3 left | 10 activities, opacity gradient, descending sort |
| **Equipment & Facility Tags** | Tag cloud | Row 3 right | Equipment (green chips) + Location (blue chips), weighted by frequency |

### 3.4 Root Cause Breakdown (full width)

Horizontal bar chart — 8 universal root causes, sorted descending:

1. Procedure Non-compliance
2. Equipment / Machine Failure
3. Inadequate Training
4. LOTO / Isolation Failure
5. Management of Change Gap
6. Design / Engineering Flaw
7. Human Factors / Fatigue
8. Environmental Conditions

---

## 4. Insights Page

**URL:** `/insights` | **Layout:** Single-column card stack  
**Design Philosophy:** Each insight = visualization + narrative finding + actionable recommendation.

### 4.1 AI Safety Search (Top of Page)

The AI Search sits above all insight blocks. It serves as both **Incident Explorer** and **Auto-Generated Insights Dashboard**.

**How it works:**
1. User types a natural language query
2. AI parses intent → filters database → generates custom mini-dashboard
3. Response includes: summary stats, auto-generated charts, matching incidents table, AI recommendations

**Example queries:**

| Query | AI Response |
|-------|------------|
| "Top root causes in Maintenance dept" | Root cause bar chart + filtered incident table |
| "Compare night shift vs day shift" | Side-by-side comparison + delta analysis |
| "Ammonia-related near misses" | Substance card + matching incidents + prevention actions |
| "Equipment failure trends Q1-Q4" | Trend line + top failing equipment list |
| "Risk of startup operation tonight?" | AI Risk Score with contributing factors |

**AI-Generated Dashboard contains:**
- Summary strip (matching count, types breakdown, top department)
- 2 auto-charts (trend + root cause or relevant visualization)
- Matching incidents table with View Detail / Export / Compare actions
- AI Recommendations with Create Action Items button

**Technical:** LLM intent extraction → Elasticsearch query → dynamic Recharts rendering. Target: <3s search, <5s dashboard.

### 4.2 Pre-Built Insight Blocks (6 cards)

These are always-on baseline intelligence. AI Search adds on-demand exploration on top.

#### Insight 1: Root Cause Pattern Analysis
- **Badge:** HIGH PRIORITY
- **Viz:** Sankey diagram — Equipment → Root Cause → Incident Type → Outcome
- **Finding:** "68% of high-severity incidents share procedure non-compliance + LOTO failure as upstream causes"
- **Actions:** View related incidents, create action item

#### Insight 2: Hazardous Substance Risk Index
- **Badge:** HIGH PRIORITY
- **Viz:** Horizontal scrollable ranked cards (top 7+ substances)
- **Each card:** Rank badge, name, risk score bar (0-100), incident count, industry applicability
- **Top substances:** H₂S (94), Combustible Dust (89), Ammonia (85), Chlorine (78), Natural Gas (75), Silica Dust (72), Asbestos (68)
- **Click card → expanded detail:** Incident timeline, notable incidents, top 3 prevention actions

#### Insight 3: Temporal Risk Patterns
- **Badge:** CROSS-DEPARTMENT
- **Viz:** Day-of-week × Hour-of-day heatmap (7×24 grid)
- **Finding:** Night shifts (9 PM–3 AM) show 2.1× incident rate. Shift handover windows are high-risk.
- **Recommendations:** Fatigue management, shift-handover audits, increased night supervision

#### Insight 4: Severity Escalation Predictor
- **Badge:** AI-POWERED (BETA)
- **Viz:** Two-column calculator — left: input form (industry, substance, equipment, activity, time, near-miss count) → right: risk gauge (0-100), contributing factors breakdown
- **Similar Past Incidents:** 3 cards showing matching historical incidents with match score, outcome, escalation/mitigation factors

#### Insight 5: Corrective Action Compliance
- **Badge:** ACCOUNTABILITY
- **Viz:** Sortable table — Department | Issued | Closed | Open | Rate | Avg Days | Status (traffic light)
- **Traffic lights:** Green (>90%) | Amber (60-90%) | Red (<60%)
- **Aging Alert Banner:** "14% unresolved. Avg closure: 287 days (target: 90)."

#### Insight 6: Cross-Reference Engine
- **Badge:** SMART SEARCH
- **Viz:** Search bar + quick tag chips + results (prevention actions, incident cards with relevance scores, common root causes)
- **Use case:** Engineer searches "heat exchanger rupture" → gets Honeywell Geismar, Tesoro Anacortes, Silver Eagle + top 3 prevention actions

---

## 5. Design System

### Colors (NMMS Theme)

| Role | Hex | Usage |
|------|-----|-------|
| Sidebar bg | `#FCF6FE` | Left navigation background |
| Active nav | `#E1BEE7` | Selected nav item background |
| Active text | `#4A148C` | Selected nav item text (purple darken-4) |
| Danger | `#E53E3E` | Fatalities, critical alerts |
| Warning | `#D69E2E` | Medium risk, amber status |
| Success | `#38A169` | Compliance met, positive trends |
| AI/Purple | `#805AD5` | AI-powered features |
| Text primary | `rgba(0,0,0,0.87)` | Headings, values |
| Text secondary | `rgba(0,0,0,0.6)` | Labels, descriptions |
| Border | `rgba(0,0,0,0.12)` | Card borders, dividers |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Page title | Inter | 20px | SemiBold |
| Card title | Inter | 18px | SemiBold |
| KPI number | Inter | 32px | Bold |
| Body | Inter | 14px | Regular |
| Caption / labels | Inter | 12px | Regular / Medium |
| Section header | Inter | 12px | SemiBold, 1px letter-spacing, uppercase |

### Components

| Component | Key Spec |
|-----------|----------|
| Card | White bg, 1px border `rgba(0,0,0,0.12)`, 8px radius, 20-24px padding |
| KPI card | 120px height, accent bar top, big number + trend badge |
| Badge | 3-4px padding, 4px radius, semibold 10px |
| Filter chip | 8px padding, 8px radius, green border + bg |
| Tab | 14px text, purple underline on active |
| Sidebar nav | Purple theme, scroll indicator `#E1BEE7`, 240px width |

### Chart Library

- **Charts:** Recharts (React) + D3.js for custom (Sankey, heatmap)
- **Recommended:** Nivo for heatmaps, D3-sankey for flow diagrams

---

## 6. Data Model

### Core Entities (TypeScript)

```typescript
interface Incident {
  id: string;
  title: string;
  company: string;
  facility_name: string;
  location: { city: string; state: string; lat: number; lng: number };
  incident_date: Date;
  incident_types: IncidentType[];
  chemicals_involved: Chemical[];
  equipment_involved: string[];
  activity_at_time: ActivityType;
  department: string;
  severity: "Critical" | "High" | "Medium" | "Low" | "Near-Miss";
  fatalities: number;
  injuries: number;
  root_causes: string[];
  recommendations: Recommendation[];
  severity_score: number;        // 1-10
}

interface Chemical {
  name: string;
  formula: string;
  hazard_class: string[];        // Toxic, Flammable, Corrosive, etc.
  risk_score: number;            // 0-100
  incident_count: number;
  industries: string[];          // Which industries use this substance
}

interface Recommendation {
  id: string;
  incident_id: string;
  department: string;
  text: string;
  status: "Open" | "Closed" | "In-Review";
  date_issued: Date;
  date_closed?: Date;
  days_open: number;
}

interface RiskAssessment {
  industry: string;
  substance: string;
  equipment_type: string;
  activity: string;
  time_of_day: number;
  prior_near_misses: number;
  risk_score: number;            // 0-100
  risk_level: "Low" | "Medium" | "High" | "Critical";
  contributing_factors: { factor: string; points: number }[];
  similar_incidents: { id: string; match: number; title: string }[];
}
```

### API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/v1/analytics/summary` | KPI strip data |
| GET | `/api/v1/analytics/by-department` | Department donut data |
| GET | `/api/v1/analytics/by-location` | Location bar chart data |
| GET | `/api/v1/analytics/heatmap` | Dept × Severity matrix |
| GET | `/api/v1/analytics/trend` | Time series data |
| GET | `/api/v1/analytics/by-activity` | Activity breakdown |
| GET | `/api/v1/analytics/root-causes` | Root cause bars |
| GET | `/api/v1/insights/root-cause-flow` | Sankey flow data |
| GET | `/api/v1/insights/substance-index` | Substance risk rankings |
| GET | `/api/v1/insights/temporal-patterns` | Day × Hour heatmap |
| POST | `/api/v1/insights/risk-assessment` | AI risk score |
| GET | `/api/v1/insights/compliance` | Department compliance grid |
| POST | `/api/v1/insights/ai-search` | AI-powered search + dashboard generation |
| GET | `/api/v1/recommendations/aging` | Aging recommendations |

---

## 7. RBAC

| Feature | Director | Manager | Engineer | Compliance | Viewer |
|---------|----------|---------|----------|------------|--------|
| Analytics Dashboard | Full | Full | Full | Full | Read-only |
| Insights Page | Full | Full | Full | Full | Read-only |
| AI Risk Calculator | Full | Full | Full | Limited | No |
| Export | Yes | Yes | Yes | Yes | No |
| Create Actions | Yes | Yes | No | Yes | No |
| Admin Settings | Yes | No | No | No | No |

---

## 8. Alerts

| Alert | Trigger | Channel |
|-------|---------|---------|
| New Incident | Added to database | Email + In-app |
| High Risk Pattern | AI detects pattern | Email + In-app + Push |
| Recommendation Aging | >365 days open | Weekly digest |
| Substance Alert | Facility uses flagged substance | In-app banner |
| Compliance Drop | Dept drops <60% closure | Email + In-app |
| Seasonal Risk | Approaching high-risk period | In-app banner |

---

## 9. Performance Targets

| Metric | Target |
|--------|--------|
| Page load (LCP) | < 2.5s |
| KPI strip render | < 500ms |
| Chart render | < 1s each |
| Filter response | < 800ms |
| AI search results | < 3s |
| AI dashboard generation | < 5s |
| Export (PDF) | < 10s |

---

## 10. Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18+, TypeScript, MUI v5+, Recharts + D3.js |
| State | TanStack Query + Zustand |
| Styling | Tailwind CSS or MUI styled |
| Backend | Python FastAPI |
| Database | PostgreSQL |
| Search | Elasticsearch |
| AI/ML | scikit-learn / XGBoost (risk scoring), LLM (search intent) |
| Cache | Redis |

---

## 11. Delivery Plan

| Phase | Weeks | Deliverables |
|-------|-------|-------------|
| **MVP** | 1-6 | KPI strip, department donut, trend chart, basic filters, CSV export |
| **Core Analytics** | 7-10 | Heatmap, activity bar, root cause breakdown, tag cloud, filter sync |
| **Insights** | 11-14 | Root cause Sankey, temporal heatmap, compliance scorecard, substance index |
| **AI Layer** | 15-18 | AI risk predictor, AI-Search + auto-generated dashboards, alerts, PDF export |

---

*End of PRD v3.0*

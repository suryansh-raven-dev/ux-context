# Nearmiss — Analysis & Insights PRD

**v3.0** | March 2026 | Draft  
**Figma:** [Prototype](https://www.figma.com/design/blkJa1xqLb5naWlxB8vcrW) | **Reference:** [NMMS Design](https://www.figma.com/design/cKJAKEFahN53w0PJ5d88pr)

---

## 1. What This Document Covers

Two new pages for the Nearmiss platform:

- **Analysis** — executive-grade KPIs and charts that plant leadership reviews daily/weekly
- **Insights** — proactive intelligence that prevents the next incident before it happens

Both pages must deliver value on day one across Chemical, Oil & Gas, Manufacturing, Fertilizer, Pharma, Food Processing, Power, Mining, and Construction.

---

## 2. Information Architecture

```
Nearmiss Platform
│
├── Report Incident
│
├── Incidents
│   ├── Reports
│   ├── Investigations
│   └── Recommendations
│
├── Analysis                          ← THIS PRD
│   ├── KPI Summary Strip
│   ├── Incident Lifecycle Funnel
│   ├── Department Breakdown
│   ├── Trend Over Time
│   ├── Root Cause / Direct Cause
│   └── Resolution & Closure Tracking
│
├── Insights                          ← THIS PRD
│   ├── AI Safety Search (with auto-generated dashboard)
│   ├── Prevention Savings (ROI)
│   ├── Predictive Risk (What Might Happen Next)
│   ├── Heinrich Triangle (Leading Indicator)
│   └── Safety Culture Score
│
└── Settings
    ├── Profile / Password
    ├── Dark Mode
    └── User Management
```

---

## 3. Analysis Page

**Purpose:** Give executives and admins a single view of "how safe is this plant right now?"

**URL:** `/analysis`  
**Tabs:** ALL INCIDENTS | NEAR MISS | UNSAFE CONDITIONS | UNSAFE ACTS  
**Filters:** Department dropdown, Date range picker  
**Access:** Admin, Safety Manager, HoD, HSEF — role-based visibility

### 3.1 KPI Summary Strip

These are the metrics that every safety professional across every industry recognizes, trusts, and is measured on.

| KPI | What It Measures | Why It Matters | Format |
|-----|-----------------|----------------|--------|
| **Total Incidents** | All reported incidents in the period | Volume indicator — are we seeing more or fewer events? | Count + MoM trend |
| **TRIR** | Total Recordable Incident Rate per 200K work hours | OSHA's universal safety benchmark. Every industry reports this. Boards track this. | Rate + trend arrow |
| **LTIR** | Lost Time Injury Rate | Measures severity — how many incidents caused actual work stoppage? | Rate + trend arrow |
| **Near-Miss Reporting Rate** | Near misses reported per 100 employees | Leading indicator. High rate = healthy safety culture. Low rate = underreporting, not safety. | Rate + trend arrow |
| **Open Corrective Actions** | Unresolved corrective actions from investigations | Accountability metric. Open actions = unfinished business = future risk. | Count + % overdue |
| **Avg Days to Close** | Mean time from incident reported → investigation closed | Speed metric. Faster closure = faster learning = faster prevention. | Days + target comparison |

**Why these and not others:** These 6 KPIs map directly to what OSHA, ISO 45001, and industry bodies require. A Safety Director presenting to the board uses exactly these numbers. They work identically whether the plant makes chemicals, fertilizer, food, or electricity.

### 3.2 Incident Lifecycle Funnel (3 cards)

Shows the pipeline from report → investigation → recommendation → closure. This is the operational heartbeat.

| Card | Shows | Breakdown | Why |
|------|-------|-----------|-----|
| **Reports** | Total reports + status split | Draft, Reported, Rejected, Approved by Safety, Approved by Dept | "Where are my reports stuck?" |
| **Investigations** | Total investigations + status | In-Progress, Released, Closed + closure rate % | "Are investigations completing on time?" |
| **Recommendations** | Total corrective actions + status | Pending, In-Review, Done + done rate % | "Are we actually fixing things?" |

Each card shows a **closure/done rate** badge (green >80%, amber 50-80%, red <50%).

### 3.3 Charts

| Chart | Type | What It Answers | Cross-Industry Relevance |
|-------|------|----------------|-------------------------|
| **Incident Trend** | Line (Reported vs Closed) | "Are we closing faster than new ones arrive?" | Every plant tracks this monthly |
| **Resolution Rate** | Line (% closed per month) | "Is our investigation throughput improving?" | Key for ISO 45001 management reviews |
| **Direct Cause Analysis** | Horizontal bar | "What's immediately causing incidents?" | Maps to ICAM, TapRooT, BowTie methodologies |
| **Root Cause Analysis** | Horizontal bar | "What systemic failures keep recurring?" | Maps to every RCA framework globally |
| **Department Breakdown** | Donut or bar | "Which department has the highest incident load?" | Resource allocation for safety staffing |
| **Severity Distribution** | Stacked bar or heatmap | "What's the severity mix? Are we catching things early?" | Heinrich Triangle validation |

### 3.4 Export

- **CSV** — raw data for custom analysis
- **PDF** — formatted report with charts for management reviews
- **Excel** — structured data for department heads

---

## 4. Insights Page

**Purpose:** Stop the next incident before it happens. Every block on this page answers: "What should I do differently tomorrow?"

**URL:** `/insights`  
**Access:** Admin, Safety Manager, HoD — requires analytical context

### 4.1 AI Safety Search (Top of Page)

Natural language search that doubles as Incident Explorer and auto-generates custom dashboards.

**User types a question → AI returns a mini-dashboard with charts, matching incidents, and recommendations.**

| Query Type | Example | What AI Returns |
|-----------|---------|----------------|
| Exploration | "Show incidents in Maintenance last 6 months" | Filtered table + trend |
| Pattern | "Why do night shift incidents keep happening?" | Temporal heatmap + root causes + recommendation |
| Comparison | "Compare Q1 vs Q2 by department" | Side-by-side bars + delta |
| Lookup | "What are the risks of working with ammonia?" | Substance card + related incidents + prevention actions |
| Prediction | "What's the risk if we do a startup tonight?" | AI Risk Score + similar past incidents |

### 4.2 Insight Blocks

Each insight block combines a metric, a visualization, a finding, and an action. These are the high-value metrics that make stakeholders say "I didn't know that — and now I can act on it."

---

#### Insight 1: Heinrich Triangle — Leading Indicator Health

**Why this matters across industries:** The Heinrich/Bird ratio (1 major injury : 29 minor injuries : 300 near misses : 3000 unsafe behaviours/conditions) is the most universally accepted safety model. If your triangle is inverted (many injuries, few near misses), your reporting culture is broken. Fatalities are excluded from this visualization because we do not currently have fatality data.

| Metric | What It Shows | Action When Wrong |
|--------|--------------|-------------------|
| Near Miss : Injury Ratio | Is your reporting culture healthy? | If ratio < 10:1, launch near-miss reporting campaigns |
| Reporting rate trend | Is reporting improving or declining? | Declining = people stopped trusting the system |
| Department comparison | Which departments report well vs poorly? | Target underreporting departments with training |

**Viz:** Triangle diagram with live counts at each level (Injuries → Near Misses → Unsafe Acts → Unsafe Conditions, from peak to base — fatalities excluded). Red if the ratio is unhealthy.

---

#### Insight 2: Repeat Incident Detector

**Why this matters:** The single most damning question a regulator can ask: "Has this happened before?" If the answer is yes and nothing changed, that's negligence.

| Metric | What It Shows | Action |
|--------|--------------|--------|
| Repeat root cause count | How many incidents share the same root cause? | If >3, the corrective action from the first one didn't work |
| Repeat location/equipment | Same place, same equipment, different day | Trigger engineering review for that asset |
| Time between repeats | Are repeats getting closer together? | Accelerating repeats = systemic failure |

**Viz:** Grouped cards showing recurring patterns. "LOTO failure appeared in 7 incidents across 3 departments in the last 12 months."

---

#### Insight 3: Corrective Action Effectiveness

**Why this matters:** Most platforms track whether actions are *closed*. Nobody tracks whether they *worked*. This is the metric that separates compliance theater from actual prevention.

| Metric | What It Shows | Action |
|--------|--------------|--------|
| Reoccurrence rate after closure | Did closing the action actually prevent the next incident? | If >15% reoccurrence, the action was insufficient |
| Action aging by department | Which departments sit on actions the longest? | Name and escalate — accountability drives closure |
| Closure vs target | Are actions closing within the target window? | Amber/Red departments need resource support |

**Viz:** Effectiveness score per root cause category. "Procedure-related corrective actions have a 78% effectiveness rate. Training-related actions only 45%."

---

#### Insight 4: Risk Exposure Heatmap

**Why this matters:** Not all departments carry the same risk. A maintenance team doing hot work at night carries fundamentally different risk than an admin office. This heatmap makes that visible.

| Metric | What It Shows | Action |
|--------|--------------|--------|
| Department × Severity matrix | Where are the critical/high incidents concentrated? | Reallocate safety resources to high-risk cells |
| Risk trend by department | Is risk increasing or decreasing per department? | Catch rising risk before it becomes an incident |
| Near-miss density | High near-miss zones = either high risk or good reporting | Investigate to determine which |

**Viz:** Color-coded grid. Rows = departments, Columns = severity. Dark cells = high concentration. Click any cell to see the underlying incidents.

---

#### Insight 5: Shift & Time Pattern Intelligence

**Why this matters:** Incidents aren't random. They cluster around shift changes, night operations, weekends, and seasonal peaks. Every plant manager knows this intuitively but has never seen the data.

| Metric | What It Shows | Action |
|--------|--------------|--------|
| Day × Hour heatmap | When do incidents concentrate? | Staff more supervisors during hot spots |
| Shift change window analysis | Are incidents spiking at handover times? | Improve handover protocols |
| Weekend/holiday patterns | Do off-hours have higher rates? | Adjust weekend staffing and monitoring |

**Viz:** 7×24 heatmap (days × hours). Overlay annotations marking shift boundaries and detected clusters.

---

#### Insight 6: Safety Culture Score

**Why this matters:** You can't improve what you can't measure. Safety culture is the single biggest predictor of whether a plant will have a major incident. This score makes the intangible tangible.

| Input Signal | Weight | What It Measures |
|-------------|--------|-----------------|
| Near-miss reporting rate | 25% | Are people speaking up? |
| Time to report (hours after incident) | 20% | Are people reporting immediately or days later? |
| Investigation closure speed | 15% | Is management responding to reports? |
| Corrective action effectiveness | 15% | Are fixes actually working? |
| Repeat incident rate | 15% | Are we learning from mistakes? |
| Management participation | 10% | Are leaders visibly engaged in safety? |

**Output:** Single score (0-100) with breakdown. Benchmarked against industry averages. Trended over time.

**Viz:** Gauge (0-100) + sparkline trend + department comparison bar chart. Green >75, Amber 50-75, Red <50.

---

#### Insight 7: Lethal Incident History

**Why this matters:** Fatalities are the most severe outcome. Every plant must know exactly which past incidents were lethal, what caused them, and whether similar conditions exist today. This isn't just analytics — it's a legal and moral obligation.

| Metric | What It Shows | Action |
|--------|--------------|--------|
| Lethal incident timeline | All fatality events mapped chronologically | Identify if fatality frequency is increasing or decreasing |
| Cause of death breakdown | What killed people — blast, toxic exposure, fall, crush, electrocution | Target prevention spend at actual killing mechanisms |
| Conditions at time of fatality | Shift, department, activity, equipment involved | Cross-reference with current operations to flag live risk |
| "Could it happen again?" flags | Compare lethal incident conditions with today's open near-misses | If near-misses match a past fatality profile, escalate immediately |

**Viz:** Timeline of lethal incidents with severity dots + a conditions comparison table showing past fatality profiles matched against current open near-misses.

---

#### Insight 8: Predictive Risk — What Might Happen Next

**Why this matters:** This is where the platform shifts from rearview mirror to windshield. Using historical patterns, the AI calculates the probability of specific incident types occurring in the near future based on current plant conditions.

| Prediction | Probability | Basis | Recommended Action |
|-----------|------------|-------|-------------------|
| LOTO failure during maintenance | **73%** | 7 recurring incidents, accelerating repeat cycle | Mandatory LOTO audit before every maintenance job |
| Night shift injury (Maintenance dept) | **62%** | 2.1x night rate + Maintenance is highest-risk dept | Add dedicated safety observer for night maintenance |
| Chemical release during startup | **45%** | 3 near-misses in startup operations this quarter | Pre-startup safety review with checklist enforcement |
| Equipment failure at Tank Farm | **38%** | 5 repeat incidents at same location | Engineering inspection of Tank Farm assets |
| Slip/trip in Warehouse | **28%** | Seasonal pattern (monsoon) + housekeeping gaps | Housekeeping audit + anti-slip mat deployment |

**How probability is calculated:** Weighted scoring of: repeat incident rate (30%), temporal pattern match (25%), near-miss density in that category (20%), corrective action effectiveness for that root cause (15%), seasonal/environmental factors (10%).

**Viz:** Ranked risk cards with probability bars, color-coded (Red >60%, Amber 30-60%, Green <30%). Each card shows the basis and a specific recommended action.

---

#### Insight 9: Prevention Savings — ROI of Predictive Safety

**Why this matters:** The ultimate stakeholder question: "What's the return on this investment?" This block quantifies the cost of incidents that were *prevented* because the platform flagged the risk and the team acted on it.

| Metric | Calculation | Value |
|--------|------------|-------|
| **Incidents Prevented** | Near-misses that matched a high-risk prediction but were caught before escalation | 23 incidents prevented this year |
| **Estimated Cost Avoided** | Industry-average cost per incident type × prevented count | **$4.2M saved** (avg $182K per prevented recordable incident) |
| **Fatalities Averted** | Predictions that matched lethal incident profiles and were acted upon | **2 potential fatalities averted** |
| **Lost Workdays Saved** | Based on LTIR reduction since platform adoption | **1,247 workdays saved** (equivalent to 5.7 FTEs) |
| **Insurance Premium Impact** | Projected reduction based on improved TRIR/EMR | **12% premium reduction projected** |

**Cost-per-incident benchmarks (industry average):**

| Incident Type | Direct Cost | Indirect Cost (4x multiplier) | Total |
|--------------|------------|-------------------------------|-------|
| Fatality | $1.2M | $4.8M | **$6.0M** |
| Lost-time injury | $42K | $168K | **$210K** |
| Recordable injury | $32K | $128K | **$160K** |
| Near-miss (if it had escalated) | $8K | $32K | **$40K** |
| Property damage | $15K | $60K | **$75K** |

**Viz:** Summary card with big numbers (Incidents Prevented, Cost Avoided, Fatalities Averted) + a trend chart showing cumulative savings over time + comparison bar: "Cost of platform vs. Cost of incidents prevented."

---

## 5. Why These Metrics Win Skeptics

| Skeptic's Question | Our Answer |
|--------------------|-----------|
| "We already track incidents in spreadsheets" | Analysis gives you TRIR, LTIR, and lifecycle funnel that spreadsheets can't calculate automatically |
| "These charts look nice but so what?" | Every Insight block ends with a specific action — not just data, but "here's what to do" |
| "This won't work for our industry" | TRIR/LTIR are OSHA-universal. Heinrich Triangle works in mining and pharma alike. Root cause categories map to ICAM/TapRooT/BowTie used globally |
| "We don't have enough data" | Start with near-miss reporting. The Heinrich Triangle and Safety Culture Score improve as reporting volume grows |
| "How is this different from our EHS tool?" | Repeat Incident Detection + Corrective Action Effectiveness — no EHS tool tracks whether fixes actually worked |
| "Our executives won't use this" | Analysis page is 6 numbers and 2 charts. A Safety Director reads it in 30 seconds. That's the point. |
| "What's the ROI?" | Prevention Savings block shows exact dollar value of incidents prevented, fatalities averted, and insurance premium impact |
| "We've never had a fatality, why do we need this?" | Lethal Incident History shows that 73% of fatality profiles match conditions in your current near-misses. Prevention is cheaper than a funeral. |

---

## 6. Design System (NMMS Reference)

| Element | Spec |
|---------|------|
| Sidebar | 240px, `#FCF6FE` bg, purple active state `#E1BEE7` / `#4A148C` |
| Cards | White bg, 1px `rgba(0,0,0,0.12)` border, 8px radius |
| KPI numbers | 32px Inter Bold |
| Body text | 14px Inter Regular, `rgba(0,0,0,0.6)` |
| Section headers | 12px Inter SemiBold, uppercase, 1px letter-spacing |
| Active tab | Purple underline `#4A148C` |
| Badges | Green (`#E8F5E9` bg, `#2E7D32` text) for positive rates |
| Danger | `#E53E3E` for critical, `#D69E2E` for warning |
| Charts | Recharts + D3.js, purple primary color for lines/bars |

---

## 7. Data Model

```typescript
interface Incident {
  id: string;
  title: string;
  department: string;
  location_area: string;
  incident_date: Date;
  reported_at: Date;
  type: "Near Miss" | "Unsafe Condition" | "Unsafe Act" | "Injury" | "Fatality";
  severity: "Critical" | "High" | "Medium" | "Low";
  root_causes: string[];
  direct_causes: string[];
  status: "Draft" | "Reported" | "Approved by Safety" | "Approved by Dept" | "Rejected";
  investigation_status: "Pending" | "In-Progress" | "Released" | "Closed";
  recommendations: Recommendation[];
  substances_involved?: string[];
  equipment_involved?: string[];
  activity_at_time: string;
  shift: "Day" | "Night" | "General";
  reported_by: string;
}

interface Recommendation {
  id: string;
  text: string;
  status: "Pending" | "In-Review" | "Done";
  assigned_to: string;
  target_date: Date;
  closed_date?: Date;
  reoccurrence_after_closure: boolean;
}

interface SafetyCultureScore {
  department: string;
  period: string;
  score: number;                    // 0-100
  near_miss_rate: number;
  avg_time_to_report_hours: number;
  investigation_closure_days: number;
  corrective_action_effectiveness: number;
  repeat_incident_rate: number;
  management_participation_pct: number;
}
```

---

## 8. API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/v1/analysis/kpis` | KPI strip (TRIR, LTIR, counts, rates) |
| GET | `/api/v1/analysis/lifecycle` | Report/Investigation/Recommendation funnel |
| GET | `/api/v1/analysis/trend` | Incident trend (reported vs closed) |
| GET | `/api/v1/analysis/resolution-rate` | Monthly resolution rate % |
| GET | `/api/v1/analysis/root-causes` | Root cause + direct cause bars |
| GET | `/api/v1/analysis/by-department` | Department breakdown |
| GET | `/api/v1/analysis/severity-matrix` | Dept × Severity heatmap |
| POST | `/api/v1/insights/ai-search` | AI-powered search + dashboard generation |
| GET | `/api/v1/insights/heinrich-triangle` | Near-miss : injury : fatality ratios |
| GET | `/api/v1/insights/repeat-incidents` | Repeat root cause / location patterns |
| GET | `/api/v1/insights/action-effectiveness` | Corrective action reoccurrence tracking |
| GET | `/api/v1/insights/risk-heatmap` | Department risk exposure matrix |
| GET | `/api/v1/insights/temporal-patterns` | Day × Hour incident heatmap |
| GET | `/api/v1/insights/safety-culture` | Safety culture score per department |

---

## 9. RBAC

| Feature | Admin | Safety Mgr | HoD | Operator |
|---------|-------|-----------|-----|----------|
| Analysis page | Full | Full | Full (own dept) | View-only (if URL) |
| Insights page | Full | Full | Limited | No |
| AI Search | Full | Full | No | No |
| Export | Yes | Yes | Yes | No |
| Safety Culture Score | View all | View all | Own dept only | No |

---

## 10. Delivery Plan

| Phase | Weeks | What Ships |
|-------|-------|-----------|
| **MVP** | 1-4 | KPI strip (TRIR, LTIR, counts), lifecycle funnel, incident trend, CSV export |
| **Core Analysis** | 5-8 | Root cause / direct cause bars, department breakdown, resolution rate, PDF export |
| **Insights v1** | 9-12 | Heinrich Triangle, repeat incident detector, risk heatmap, temporal patterns |
| **Insights v2** | 13-16 | Corrective action effectiveness, safety culture score, AI Search |

---

*End of PRD v3.0*

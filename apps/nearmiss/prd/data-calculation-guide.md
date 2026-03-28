# Nearmiss — How Data Is Calculated, Fetched, and Creates Value

This document explains every metric shown on the Analysis and Insights pages: where the raw data comes from, how each number is calculated, and what specific value it delivers to Admins and HoDs.

---

## Data Source: What We Already Have

Every metric on both pages is derived from **data that already exists in the Nearmiss platform**. No external data imports are needed for v1.

| Data Source | What It Contains | Already Available? |
|-------------|-----------------|-------------------|
| **Reports table** | Every incident report with: date, department, type (NM/UC/UA), severity, status, reporter, shift, location | Yes — core NMMS data |
| **Investigations table** | Investigation records: status (In-Progress/Released/Closed), dates, findings, root causes, direct causes | Yes — linked to reports |
| **Recommendations table** | Corrective actions: text, status (Pending/In-Review/Done), assignee, target date, closed date | Yes — linked to investigations |
| **Users table** | Employee count per department, roles, login activity | Yes — existing user management |
| **Timestamps** | Created_at, reported_at, approved_at, closed_at on every record | Yes — standard audit fields |

---

## ANALYSIS PAGE — Metric by Metric

### KPI 1: Total Incidents

| | Detail |
|---|---|
| **Calculation** | `COUNT(reports) WHERE status != 'Draft' AND incident_date BETWEEN [start, end]` |
| **Filters applied** | Date range, department, incident type tab |
| **Trend** | Compare current period count vs prior period of same length |
| **Value to Admin** | "Is my plant reporting more or fewer incidents?" Volume trend tells you if safety is improving or if you're just seeing fewer reports (which is worse) |
| **Value to HoD** | "How does my department compare to others?" Filtered by department shows relative load |

### KPI 2: TRIR (Total Recordable Incident Rate)

| | Detail |
|---|---|
| **Formula** | `(Recordable incidents × 200,000) / Total work hours` |
| **Recordable incidents** | Reports with severity = High or Critical, or type = Injury, or resulted in lost time, medical treatment, or restricted duty |
| **Work hours** | `employee_count × avg_hours_per_week × weeks_in_period` (from HR/payroll config or manual entry in Settings) |
| **Why 200,000** | OSHA standard — represents ~100 full-time employees working 40h/week for 50 weeks |
| **Value to Admin** | The ONE number boards and regulators ask for. If TRIR is going down, your safety program is working. If it's going up, you have a problem that needs resources. |
| **Value to HoD** | "Am I above or below the plant average?" Department-level TRIR shows which HoD needs help |

### KPI 3: LTIR (Lost Time Injury Rate)

| | Detail |
|---|---|
| **Formula** | `(Lost-time injuries × 200,000) / Total work hours` |
| **Lost-time injury** | Any incident where the worker missed their next scheduled shift |
| **Data source** | Reports where `severity = 'High'` or `severity = 'Critical'` AND investigation confirms lost time |
| **Value to Admin** | Separates serious from minor. TRIR counts everything; LTIR counts only what stopped production. Insurance premiums are directly tied to LTIR. |
| **Value to HoD** | "Are my people getting hurt badly enough to miss work?" If LTIR is flat but TRIR is rising, you're catching more minor stuff (good). If LTIR is rising, you have a severity problem. |

### KPI 4: Near-Miss Reporting Rate

| | Detail |
|---|---|
| **Formula** | `(Near-miss reports in period / employee_count) × 100` |
| **Data source** | `COUNT(reports) WHERE type = 'Near Miss'` divided by active employee count |
| **Value to Admin** | This is a LEADING indicator — it tells you about the future, not the past. High rate = people trust the system and report. Low rate = they've stopped reporting, which means you're flying blind. |
| **Value to HoD** | "Are my people using the reporting system?" If your department has 200 employees and 3 near-misses, either your department is perfectly safe (unlikely) or people aren't reporting (dangerous). |

### KPI 5: Open Corrective Actions

| | Detail |
|---|---|
| **Calculation** | `COUNT(recommendations) WHERE status != 'Done'` |
| **% Overdue** | `COUNT(recommendations WHERE status != 'Done' AND target_date < TODAY) / COUNT(recommendations WHERE status != 'Done') × 100` |
| **Value to Admin** | Every open action is an unfinished fix for a known problem. If you have 47 open actions and 14% are overdue, you have 47 known risks you haven't addressed. That's a liability. |
| **Value to HoD** | "How many of MY actions are still open?" Filtered by department — directly shows which HoD is sitting on corrective actions |

### KPI 6: Avg Days to Close

| | Detail |
|---|---|
| **Calculation** | `AVG(closed_date - reported_date)` for all investigations closed in the period |
| **Data source** | Investigation records where `status = 'Closed'` |
| **Value to Admin** | Speed = learning speed. If it takes 18 days to close an investigation, it takes 18 days before the plant learns from the incident. Target is industry-specific but typically 14-30 days. |
| **Value to HoD** | "Am I closing my investigations fast enough?" Slow closure often means the HoD is not prioritizing safety reviews |

### Lifecycle Funnel (3 Cards)

| Card | Calculation | Value |
|------|------------|-------|
| **Reports** | `GROUP BY status` from reports table | Shows where reports get stuck. If 90% are in "Reported" and only 10% reach "Approved by Dept," the approval bottleneck is visible |
| **Investigations** | `GROUP BY investigation_status` from investigations table, closure rate = `closed / total × 100` | Shows if investigations are piling up in "In-Progress" |
| **Recommendations** | `GROUP BY status` from recommendations table, done rate = `done / total × 100` | Shows if corrective actions are actually being completed |

### Charts

| Chart | Query | What Admin/HoD Learns |
|-------|-------|----------------------|
| **Incident Trend** | `GROUP BY month`, two series: `COUNT(reported_date)` and `COUNT(closed_date)` | If reported line is above closed line, you're falling behind. The gap is your backlog. |
| **Resolution Rate** | `(closed_in_month / total_in_month) × 100` per month | Is the team's throughput improving or declining? |
| **Direct Cause** | `GROUP BY direct_cause, COUNT(*)` from investigation findings | "What's IMMEDIATELY causing incidents?" — e.g., "PPE not worn" or "equipment not guarded" |
| **Root Cause** | `GROUP BY root_cause, COUNT(*)` from investigation findings | "What SYSTEMIC failure allows these incidents?" — e.g., "inadequate training" or "poor design" |

---

## INSIGHTS PAGE — Metric by Metric

### AI Safety Search

| | Detail |
|---|---|
| **How it works** | User types natural language query → LLM extracts intent (department, time range, type, substance, equipment) → Elasticsearch query → results rendered as auto-generated charts + table + recommendations |
| **Data source** | Same reports/investigations/recommendations tables, queried with extracted filters |
| **Value to Admin** | "Show me all ammonia leaks during turnaround" returns 12 matching incidents, their root causes, and AI-generated prevention recommendations in 3 seconds. No spreadsheet digging. |
| **Value to HoD** | "What happened in my department last quarter?" gets an instant custom dashboard without waiting for safety team to build a report |

### Prevention Savings (ROI)

| Metric | Calculation | Data Source |
|--------|------------|-------------|
| **Incidents Prevented** | `COUNT(near_misses WHERE similarity_to_past_incident > 70% AND corrective_action_was_taken = true)` | Near-miss reports that matched a historical incident pattern and were caught before escalation |
| **Cost Avoided** | `incidents_prevented × avg_cost_per_incident_type` | Industry benchmarks: Recordable = $160K, Lost-time = $210K, Fatality = $6M (direct + indirect using 4x multiplier from NSC) |
| **Workdays Saved** | `(LTIR_before - LTIR_after) × work_hours / 200000 × avg_days_per_lost_time_case` | Compares LTIR before and after platform adoption |
| **Insurance Impact** | `projected_EMR_improvement × current_premium` | Experience Modification Rate improves as TRIR/LTIR decrease |
| **Value to Admin** | The CFO question: "What does this platform save us?" Answer: "$4.2M in prevented incidents vs $120K platform cost = 35x ROI." This is how you renew the contract. |
| **Value to HoD** | "My department prevented 8 incidents this year" — concrete evidence that safety efforts are working |

### Similar Past Incidents

| | Detail |
|---|---|
| **Clustering algorithm** | Group incidents by: same root cause (30% weight) + same department (20%) + same equipment (20%) + same activity (15%) + same time pattern (15%). Similarity score = weighted match percentage. |
| **Data source** | All fields from reports + investigations: root_cause, department, equipment_involved, activity_at_time, shift, incident_date |
| **Cluster KPIs** | `COUNT(incidents) per cluster`, `MAX(similarity_score)`, `AVG(cluster_size)`, trend = time between incidents in cluster (accelerating/stable/declining) |
| **Value to Admin** | "7 LOTO failures in 12 months across 3 departments" — this is not random, it's systemic. The corrective action from the first incident didn't work. Time for a different approach. |
| **Value to HoD** | "My department has 3 incidents in the LOTO cluster" — shows the HoD that their department is part of a plant-wide pattern, not an isolated problem |

### Heinrich Triangle

| | Detail |
|---|---|
| **Calculation** | Stack counts by type: Injuries (top) → Near Misses → Unsafe Acts → Unsafe Conditions (base) |
| **Ratio** | `near_miss_count / injury_count` — healthy ratio is >10:1, ideal is >30:1 |
| **Department comparison** | Calculate ratio per department to find which departments underreport |
| **Data source** | `GROUP BY type, COUNT(*)` from reports table |
| **Value to Admin** | If ratio is 3:1 (3 near misses per injury), people aren't reporting near-misses. That means you don't know about 90% of the hazards in your plant. Launch a reporting campaign. |
| **Value to HoD** | "My department ratio is 24:1 (healthy)" vs "Utilities is only 6:1" — the HoD with a bad ratio isn't running a safer department, they're running a department where people don't report |

### Safety Culture Score

| Signal | Calculation | Weight |
|--------|------------|--------|
| **Near-miss reporting rate** | `(near_miss_count / employee_count) × 100`, scored 0-100 based on percentile vs industry benchmark | 25% |
| **Time to report** | `AVG(reported_at - incident_date) in hours`, scored inversely (faster = higher score) | 20% |
| **Investigation closure speed** | `AVG(closed_date - reported_date) in days`, scored against target (e.g., 14 days = 100, 30 days = 60, >60 days = 20) | 15% |
| **Corrective action effectiveness** | `1 - (reoccurrence_count / closed_action_count)`, where reoccurrence = same root cause appears again within 6 months of action closure | 15% |
| **Repeat incident rate** | `1 - (repeat_cluster_count / total_incidents)`, lower repeats = higher score | 15% |
| **Management participation** | `COUNT(admin_reviews + hod_approvals in period) / expected_reviews × 100` | 10% |
| **Composite** | `SUM(signal_score × weight)` → 0-100 scale | 100% |
| **Value to Admin** | "72/100 Amber" tells you in one number whether your plant's safety culture is improving. It's the answer to "are our safety investments working?" without digging through 20 charts. |
| **Value to HoD** | "My department scored 58 (Amber)" — the HoD sees their department compared to others and knows exactly which 2-3 signals are pulling their score down |

---

## How Data Flows (Technical)

```
User reports incident (mobile/web)
        ↓
    Reports Table
        ↓
Safety Manager reviews → Investigations Table
        ↓
Investigation finds root cause → Recommendations Table
        ↓
    ┌──────────────────────────────────────┐
    │  NIGHTLY BATCH (or real-time)        │
    │                                      │
    │  1. Aggregate KPIs (TRIR, LTIR)      │
    │  2. Cluster similar incidents        │
    │  3. Calculate Heinrich ratios        │
    │  4. Score safety culture             │
    │  5. Match prevention savings         │
    │  6. Index for AI search              │
    └──────────────────────────────────────┘
        ↓
    Analysis Page (reads aggregated data)
    Insights Page (reads computed insights)
```

### API Response Times

| Metric | Computation | Expected Latency |
|--------|------------|-----------------|
| KPI strip | Simple COUNT/AVG queries | <500ms |
| Lifecycle funnel | GROUP BY status | <500ms |
| Charts (trend, causes) | GROUP BY month/cause with date filter | <800ms |
| Heinrich Triangle | GROUP BY type, COUNT | <500ms |
| Similar Incidents | Pre-computed clusters, read from cache | <300ms |
| Safety Culture Score | Pre-computed nightly, read from cache | <200ms |
| Prevention Savings | Pre-computed nightly, read from cache | <200ms |
| AI Search | LLM intent parse + Elasticsearch + chart generation | <3-5s |

### What Needs Configuration (One-Time Setup)

| Setting | Who Sets It | Why |
|---------|------------|-----|
| Employee count per department | Admin (Settings) | Needed for TRIR, LTIR, near-miss rate calculations |
| Work hours per week | Admin (Settings) | Needed for TRIR/LTIR denominator |
| Industry benchmarks | Pre-configured per industry | For Safety Culture Score benchmarking |
| Cost-per-incident multipliers | Admin (optional override) | For Prevention Savings calculation (defaults provided) |
| Investigation closure target (days) | Admin (Settings) | For "Avg Days to Close" target comparison |

---

## Value Summary: Why Admin and HoD Care

### For the Admin (Plant Safety Director)

| Need | Which Metric Answers It |
|------|------------------------|
| "How safe is my plant right now?" | TRIR + LTIR (2 numbers, instant answer) |
| "Are we improving or declining?" | Incident Trend chart (visual, monthly) |
| "Where are the bottlenecks?" | Lifecycle Funnel (shows where reports/investigations pile up) |
| "What keeps causing incidents?" | Root Cause + Direct Cause bars |
| "Is my team actually fixing things?" | Open Corrective Actions + Avg Days to Close |
| "What's the ROI of this platform?" | Prevention Savings ($4.2M saved, 35x return) |
| "What should I worry about next?" | Similar Past Incidents (systemic patterns) |
| "Is our safety culture healthy?" | Safety Culture Score (one number: 72/100) |

### For the HoD (Department Head)

| Need | Which Metric Answers It |
|------|------------------------|
| "How does my department compare?" | All KPIs filtered by department |
| "Are my people reporting incidents?" | Near-Miss Reporting Rate (per department) |
| "Are my corrective actions on track?" | Open Actions filtered by department + overdue % |
| "What's my department's biggest risk?" | Similar Incidents cluster filtered by department |
| "What should I tell my team tomorrow?" | Safety Culture Score focus areas ("stop repeat incidents, speed up reporting") |

### The One-Sentence Pitch

**Analysis** tells you what happened. **Insights** tells you what to do about it.

---

*End of Data Calculation Guide*

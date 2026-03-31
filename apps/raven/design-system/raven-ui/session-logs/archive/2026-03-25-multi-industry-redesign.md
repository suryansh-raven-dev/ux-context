# Session Log: Multi-Industry Redesign

**Date:** 2026-03-25  
**Scope:** Redesign Analytics + Insights pages for multi-industry deployment

## What Changed

### Strategic Pivot
Near Miss evolved from CSB-only chemical safety platform to a **multi-industry** safety intelligence platform targeting 9 sectors: Chemical, Oil & Gas, Manufacturing, Fertilizer, Pharma, Food Processing, Mining, Power Generation, and Construction.

### PRD Updates
- Updated version to 2.0 (Multi-Industry)
- Added Target Industries table with 9 sectors and regulatory context
- Added Corporate EHS Lead persona for multi-site oversight
- Updated executive summary for multi-industry positioning

### Figma Prototype — New Pages Created
File: https://www.figma.com/design/blkJa1xqLb5naWlxB8vcrW

**v2 - Analytics Dashboard (Multi-Industry)**
- Dark navy (#181B2C) nav bar with green (#34A874) accent color
- Industry selector pill in nav bar ("All Industries")
- 10 industry tabs: All Industries, Chemical, Oil & Gas, Manufacturing, Fertilizer, Pharma, Food Processing, Mining, Power, Construction
- Generic filters: Last 12 Months, All Facilities, All Regions, All Severity
- 6 KPI cards with industry-agnostic metrics (TRIR instead of CSB-specific)
- Incidents by Industry donut chart (7 industry segments)
- Incident Type Breakdown bar chart (10 universal types including Near Miss)
- Industry x Severity Heatmap (8 industries x 5 severity levels)
- Incident Trend Over Time (monthly line chart)
- Activity at Time of Incident (10 universal activities)
- Equipment & Facility Tags cloud (24 tags spanning all industries)
- Root Cause / Injury Cause Breakdown (8 universal root causes)

**v2 - Insights Page (Multi-Industry)**
- Subtitle: "Applicable to Chemical, Oil & Gas, Manufacturing, Fertilizer, and more"
- Navigation pills renamed for industry breadth
- **Insight 1**: Root Cause Pattern Analysis — multi-industry Sankey with equipment like Conveyor/Belt, Crusher/Mill
- **Insight 2**: Hazardous Substance Risk Index (not just "Chemical") — includes Combustible Dust, Silica Dust, Asbestos alongside chemicals; each card shows which industries it applies to
- **Insight 3**: Temporal Risk Patterns — cross-industry heatmap with finding spanning all sectors
- **Insight 4**: Severity Escalation Predictor — Industry field added as first input; applicable to any sector
- **Insight 5**: Corrective Action Compliance — table shows facilities across different industries (Chemical, Oil & Gas, Mfg, Fertilizer, Mining, Food) with facility-level tracking
- **Insight 6**: Cross-Industry Search Engine — search bar contextualizes results across all sectors; cross-industry learning callout

### Design System Changes
- Primary accent: Green (#34A874) replacing blue — more universal safety feel
- Dark nav: #181B2C replacing #1A365D — more modern, industry-neutral
- "ALL INDUSTRIES" badge added alongside priority badges
- "CROSS-INDUSTRY" and "MULTI-INDUSTRY" badges on insight cards

## Key Decisions
1. Equipment taxonomy expanded: Added Conveyor Belt, Crusher/Mill, Furnace/Kiln, Storage Silo, Wellhead, Packaging Line, Granulator, Dryer Unit
2. "Chemical Hazard Risk Index" renamed to "Hazardous Substance Risk Index" — includes dusts, minerals, fibers
3. Root causes are universal: Procedure Non-compliance, Equipment Degradation, LOTO, MoC, Training Gap, Human Factors, Design Flaw, Environmental
4. TRIR (Total Recordable Incident Rate) added as industry-standard KPI
5. Compliance table shows facility-level data across different industries, not organization-level

## Original Pages Preserved
v1 pages renamed with "(CSB)" suffix — available for CSB-specific deployments

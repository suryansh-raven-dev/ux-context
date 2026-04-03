# Session: Heinrich Triangle — Remove Fatalities, Add Unsafe Acts

**Date**: 2026-03-27
**Topic**: Removing fatalities (no data) and adding Unsafe Acts tier to Heinrich Triangle

## What Was Done

### Pass 1: Remove Fatalities

1. **Removed fatalities from Figma prototype** — "v3 - Insights (NMMS Style)" page, Heinrich Triangle section (node `74:37`):
   - Deleted the fatalities rectangle (node `78:9`) and "Fatalities: 3" text label (node `78:10`)
   - Repositioned remaining tiers to fill the space evenly

### Pass 2: Add Unsafe Acts Tier

2. **Added "Unsafe Acts: 1,847" tier** in the Figma triangle between Injuries and Unsafe Conditions:
   - Created new amber rectangle (node `107:2`) and text label (node `107:3`)
   - Repositioned all 4 tiers for even spacing in the pyramid:
     - Injuries: 352 (orange, top, w=100)
     - Unsafe Acts: 1,847 (amber, new, w=170)
     - Unsafe Conditions: 3,891 (green-amber, w=240)
     - Near Misses: 8,456 (green, bottom, w=310)
   - Updated ratio text to "1 : 5 : 11 : 24 (Healthy = 1 : 5 : 10 : 60)"
   - Updated description text to reference the 1:5:10:60 ratio

3. **Updated PRD** (`apps/nearmiss/prd/analysis-insights-prd.md`):
   - Changed Heinrich/Bird ratio to "1 injury : 5 unsafe acts : 10 unsafe conditions : 60 near misses"
   - Fatalities remain excluded (no data available)
   - Updated Viz description to list all 4 tiers

### Pass 3: Update Benchmark to Heinrich Reference

3. **Updated healthy ratio benchmark** to match Heinrich's Theory of Accident (1 : 29 : 300 : 3000):
   - Updated ratio text from "(Healthy = 1 : 5 : 10 : 60)" to "(Healthy = 1 : 29 : 300 : 3000)"
   - Updated description text to reference "The 1:29:300:3000 ratio"
   - Updated PRD to match: "1 major injury : 29 minor injuries : 300 near misses : 3000 unsafe behaviours/conditions"
   - Source: EuroGulf Heinrich's Theory of Accident reference image

### Pass 4: Fix Tier Order + Ask AI Data

4. **Reordered tiers to match Heinrich reference** (peak to base = most severe to most frequent):
   - Before: Injuries → Unsafe Acts → Unsafe Conditions → Near Misses
   - After: Injuries → Near Misses → Unsafe Acts → Unsafe Conditions
   - Swapped labels and colors to match reference pyramid: orange (Injuries), green (Near Misses), amber (Unsafe Acts), pink (Unsafe Conditions)
   - Counts reassigned to maintain increasing order: 352 → 1,847 → 3,891 → 8,456

5. **Expanded Ask AI widget** to reveal full chart data:
   - Charts already contained axis labels, data values, legends, and root cause breakdowns — they were clipped by frame height
   - Expanded chart container by 35px to show all data
   - Chart 1: NH₃ Leak Near-Misses by Month (Train-1) — bar chart with "During Turnaround" vs "Normal Operations" legend, y-axis (1–4), x-axis months, data values on bars
   - Chart 2: Root Causes in Turnaround Leak Events — horizontal bars with labels (Valve Isolation Gap: 5, Flange Gasket Failure: 3, Procedure Skip: 2, Corrosion: 1, Contractor Error: 1), total: 12 incidents

## What Changed

| Element | Original | Final State |
|---------|----------|-------------|
| Triangle tier order (top→bottom) | Fatalities → Injuries → UC → NM | Injuries → Near Misses → Unsafe Acts → Unsafe Conditions |
| Current ratio | 1 : 117 : 1297 : 2819 | 1 : 5 : 11 : 24 |
| Healthy ratio | 1 : 10 : 30 : 600 | 1 : 29 : 300 : 3000 |
| Description | "The 1:10:30:600 ratio" | "The 1:29:300:3000 ratio" |
| Ask AI charts | Data clipped / hidden | Full axis labels, values, legends visible |

## Figma File

- **File**: Nearmiss — Analytics & Insights Prototype (`blkJa1xqLb5naWlxB8vcrW`)
- **Page**: v3 - Insights (NMMS Style) (`57:3`)
- **Node**: Heinrich Triangle frame (`74:37`)
- **Node**: AI Safety Search frame (`74:26`)

## Next Steps

- If fatality data becomes available in the future, a top tier can be re-added to make a 5-level Heinrich Triangle.
- Verify the counts (Near Misses: 1,847; Unsafe Acts: 3,891; Unsafe Conditions: 8,456) with actual data once available — currently placeholders.
- The current ratio (1:5:11:24) shows significant underreporting vs the healthy benchmark (1:29:300:3000).

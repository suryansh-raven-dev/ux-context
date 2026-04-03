import { useState } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import './CauseAnalysisChart.css';

export type CauseAnalysisRow = {
  category: string;
  value: number;
};

export type CauseAnalysisChartProps = {
  /** Bar data — each row is one horizontal bar */
  data: CauseAnalysisRow[];
  /** Bar color (default: #4A148C / purple darken-4) */
  barColor?: string;
  /** Maximum axis value (auto-calculated if omitted) */
  maxValue?: number;
  /** Number of axis ticks (default: 6) */
  tickCount?: number;
};

/**
 * **CauseAnalysisChart** — Horizontal bar chart for Direct Cause / Root Cause analysis.
 *
 * ### MUI v6 components used
 * - `Tooltip` — Hover tooltip showing "{category}: {value}"
 * - `Typography` — Category labels and axis ticks
 *
 * ### Design spec (from Figma)
 * - Category labels: left-aligned, 12px caption text
 * - Bars: solid color with 4px border-radius, hover highlight
 * - Axis: dashed vertical grid lines, caption tick labels
 * - Tooltip: dark background (#212121), white text, with pointer triangle
 *
 * @see https://v6.mui.com/material-ui/react-tooltip/
 */
export function CauseAnalysisChart({
  data,
  barColor = '#4A148C',
  maxValue,
  tickCount = 6,
}: CauseAnalysisChartProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const max = maxValue ?? Math.max(...data.map((d) => d.value), 1);
  const rawStep = max / (tickCount - 1);
  const step = Math.ceil(rawStep / 5) * 5;
  const axisMax = step * (tickCount - 1);
  const ticks = Array.from({ length: tickCount }, (_, i) => i * step);

  return (
    <Box className="cause-analysis-chart">
      {/* Chart body */}
      <Box className="cause-analysis-chart__body">
        {/* Category labels */}
        <Box className="cause-analysis-chart__labels">
          {data.map((row) => (
            <Typography
              key={row.category}
              variant="caption"
              color="text.secondary"
              className="cause-analysis-chart__label"
              title={row.category}
            >
              {row.category}
            </Typography>
          ))}
        </Box>

        {/* Bar area */}
        <Box className="cause-analysis-chart__bars-container">
          {/* Grid lines */}
          <Box className="cause-analysis-chart__grid">
            {ticks.map((t) => (
              <Box
                key={t}
                className="cause-analysis-chart__grid-line"
                sx={{ left: `${(t / axisMax) * 100}%` }}
              />
            ))}
          </Box>

          {/* Bars */}
          {data.map((row, idx) => (
            <Tooltip
              key={row.category}
              title={`${row.category}  ·  value: ${row.value}`}
              placement="right"
              arrow
              open={hoveredIdx === idx}
              slotProps={{
                tooltip: {
                  sx: {
                    backgroundColor: '#212121',
                    fontSize: 13,
                    fontWeight: 500,
                    borderRadius: '8px',
                    px: 1.5,
                    py: 0.75,
                  },
                },
                arrow: { sx: { color: '#212121' } },
              }}
            >
              <Box
                className="cause-analysis-chart__bar"
                sx={{
                  width: `${(row.value / axisMax) * 100}%`,
                  backgroundColor: barColor,
                  opacity: hoveredIdx !== null && hoveredIdx !== idx ? 0.5 : 1,
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
            </Tooltip>
          ))}
        </Box>
      </Box>

      {/* X-axis ticks */}
      <Box className="cause-analysis-chart__axis">
        <Box className="cause-analysis-chart__axis-labels">
          {ticks.map((t) => (
            <Typography
              key={t}
              variant="caption"
              color="text.secondary"
              sx={{
                position: 'absolute',
                left: `${(t / axisMax) * 100}%`,
                transform: 'translateX(-50%)',
              }}
            >
              {t}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

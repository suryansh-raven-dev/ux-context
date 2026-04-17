import { useState } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const rootSx = { width: '100%', fontFamily: '"Source Sans 3", sans-serif' };
const bodySx = { display: 'flex', gap: 1 };
const labelsSx = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1.25,
  minWidth: 200,
  alignItems: 'flex-end',
  pt: '2px',
};
const labelSx = {
  lineHeight: '22px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: 200,
};
const barsContainerSx = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 1.25,
  position: 'relative',
};
const gridSx = { position: 'absolute', inset: 0, pointerEvents: 'none' };
const gridLineSx = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  borderLeft: '1px dashed',
  borderColor: 'action.disabledBackground',
};
const barSx = {
  height: 22,
  borderRadius: '3px',
  minWidth: 4,
  position: 'relative',
  zIndex: 1,
  cursor: 'pointer',
  transition: 'opacity 0.2s ease, width 0.3s ease',
};
const axisSx = { pl: '208px', mt: 1 };
const axisLabelsSx = { position: 'relative', height: 20 };

export type CauseAnalysisRow = {
  category: string;
  value: number;
};

export type CauseAnalysisChartProps = {
  /** Bar data — each row is one horizontal bar */
  data: CauseAnalysisRow[];
  /** Bar color (default: theme primary.main) */
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
  barColor,
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
    <Box sx={rootSx}>
      {/* Chart body */}
      <Box sx={bodySx}>
        {/* Category labels */}
        <Box sx={labelsSx}>
          {data.map((row) => (
            <Typography
              key={row.category}
              variant="caption"
              color="text.secondary"
              sx={labelSx}
              title={row.category}
            >
              {row.category}
            </Typography>
          ))}
        </Box>

        {/* Bar area */}
        <Box sx={barsContainerSx}>
          {/* Grid lines */}
          <Box sx={gridSx}>
            {ticks.map((t) => (
              <Box
                key={t}
                sx={{ ...gridLineSx, left: `${(t / axisMax) * 100}%` }}
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
                    backgroundColor: 'grey.900',
                    fontSize: 13,
                    fontWeight: 500,
                    borderRadius: '8px',
                    px: 1.5,
                    py: 0.75,
                  },
                },
                arrow: { sx: { color: 'grey.900' } },
              }}
            >
              <Box
                sx={{
                  ...barSx,
                  width: `${(row.value / axisMax) * 100}%`,
                  backgroundColor: barColor ?? 'primary.main',
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
      <Box sx={axisSx}>
        <Box sx={axisLabelsSx}>
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

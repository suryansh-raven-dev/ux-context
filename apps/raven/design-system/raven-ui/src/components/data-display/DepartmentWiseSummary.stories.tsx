import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import type { Meta, StoryObj } from '@storybook/react';

import { TabNavigation } from '../navigation/TabNavigation';

export default {
  title: 'Layout',
} satisfies Meta;

// ─── Data ────────────────────────────────────────────────────────────────────

// Status color tokens (dot color from status_color_token_reference.html):
//   Pending Safety Approval → #EF6C00 (Orange 800)
//   Pending Dept Approval   → #FFC107 (Amber 500)
//   Approved by Dept        → #0097A7 (Cyan 800)
//   Rejected                → #EF5350 (Red 400)

const REPORTS_LEGEND = [
  { label: 'Pending Safety Manager Approval', color: '#EF6C00' },
  { label: 'Pending Department Approval',     color: '#FFC107' },
  { label: 'Approved by Department',          color: '#0097A7' },
  { label: 'Rejected',                        color: '#EF5350' },
];

const REPORTS_DATA = [
  { dept: 'PP',             segments: [45, 5, 70, 10] },
  { dept: 'PE',             segments: [20, 8, 25, 7]  },
  { dept: 'Logistics',      segments: [7,  3, 5,  0]  },
  { dept: 'Ammonia 1',      segments: [5,  0, 0,  0]  },
  { dept: 'HSEF',           segments: [4,  0, 0,  0]  },
  { dept: 'Adminstration',  segments: [0,  1, 0,  0]  },
];

// Investigations: In-Progress=#F4511E (Deep Orange), Released=#1976D2 (Blue), Closed=#455A64 (Blue Grey)
const INVESTIGATIONS_LEGEND = [
  { label: 'In-Progress', color: '#F4511E' },
  { label: 'Released',    color: '#1976D2' },
  { label: 'Closed',      color: '#455A64' },
];

const INVESTIGATIONS_DATA = [
  { dept: 'PP',        segments: [53, 0,  18] },
  { dept: 'PE',        segments: [14, 6,  6]  },
  { dept: 'Logistics', segments: [4,  0,  2]  },
];

// Recommendations: Pending=#FFB300 (Amber), In-Review=#7B1FA2 (Purple), Done=#2E7D32 (Green)
const RECOMMENDATIONS_LEGEND = [
  { label: 'Pending',   color: '#FFB300' },
  { label: 'In-Review', color: '#7B1FA2' },
  { label: 'Done',      color: '#2E7D32' },
];

const RECOMMENDATIONS_DATA = [
  { dept: 'PP',        segments: [0, 0, 15] },
  { dept: 'PE',        segments: [2, 0, 10] },
  { dept: 'Logistics', segments: [0, 0, 3]  },
];

const TABS = [
  { label: 'Reports',         subtitle: 'Incidents count by department and status' },
  { label: 'Investigations',  subtitle: 'Investigations count by department and status' },
  { label: 'Recommendations', subtitle: 'Recommendations count by department and status' },
];

const ALL_DATA = [
  { rows: REPORTS_DATA,         legend: REPORTS_LEGEND },
  { rows: INVESTIGATIONS_DATA,  legend: INVESTIGATIONS_LEGEND },
  { rows: RECOMMENDATIONS_DATA, legend: RECOMMENDATIONS_LEGEND },
];

// ─── Bar Chart ───────────────────────────────────────────────────────────────

type BarRow = { dept: string; segments: number[] };
type LegendItem = { label: string; color: string };

function HorizontalBarChart({ rows, legend }: { rows: BarRow[]; legend: LegendItem[] }) {
  const allValues = rows.map(r => r.segments.reduce((a, b) => a + b, 0));
  const maxTotal = Math.max(...allValues, 1);

  // Nice axis ticks
  const tickCount = 6;
  const rawStep = maxTotal / (tickCount - 1);
  const step = Math.ceil(rawStep / 10) * 10;
  const axisMax = step * (tickCount - 1);
  const ticks = Array.from({ length: tickCount }, (_, i) => i * step);

  return (
    <Box sx={{ width: '100%', fontFamily: "'Source Sans 3', sans-serif" }}>
      {/* Chart body */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {/* Dept labels */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '18px', pt: '2px', minWidth: 90, alignItems: 'flex-end' }}>
          {rows.map(r => (
            <Typography key={r.dept} variant="body2" fontWeight={600} sx={{ lineHeight: '22px', whiteSpace: 'nowrap', color: 'text.primary' }}>
              {r.dept}
            </Typography>
          ))}
        </Box>

        {/* Bars + grid */}
        <Box sx={{ flex: 1, position: 'relative' }}>
          {/* Vertical grid lines */}
          <Box sx={{ position: 'absolute', inset: 0, display: 'flex', pointerEvents: 'none' }}>
            {ticks.map((t) => (
              <Box
                key={t}
                sx={{
                  position: 'absolute',
                  left: `${(t / axisMax) * 100}%`,
                  top: 0,
                  bottom: 0,
                  borderLeft: '1px dashed #e0e0e0',
                }}
              />
            ))}
          </Box>

          {/* Bars */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
            {rows.map(r => {
              const total = r.segments.reduce((a, b) => a + b, 0);
              return (
                <Box key={r.dept} sx={{ display: 'flex', height: 22, borderRadius: '3px', overflow: 'hidden', width: `${(total / axisMax) * 100}%`, minWidth: total > 0 ? 4 : 0 }}>
                  {r.segments.map((val, si) =>
                    val > 0 ? (
                      <Box
                        key={si}
                        sx={{
                          flex: val,
                          backgroundColor: legend[si]?.color,
                          transition: 'flex 0.3s ease',
                        }}
                      />
                    ) : null
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* X-axis ticks */}
      <Box sx={{ display: 'flex', ml: '98px', mt: '8px' }}>
        <Box sx={{ flex: 1, position: 'relative', height: 20 }}>
          {ticks.map((t) => (
            <Typography
              key={t}
              variant="caption"
              sx={{
                position: 'absolute',
                left: `${(t / axisMax) * 100}%`,
                transform: 'translateX(-50%)',
                color: 'text.secondary',
                fontSize: 12,
              }}
            >
              {t}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Legend */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', mt: 2, justifyContent: 'center' }}>
        {legend.map(item => (
          <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: item.color, flexShrink: 0 }} />
            <Typography variant="caption" color="text.secondary">{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ─── Prototype Component ──────────────────────────────────────────────────────

function DepartmentWiseSummaryPrototype() {
  const [activeTab, setActiveTab] = useState(0);
  const { rows, legend } = ALL_DATA[activeTab];

  return (
    <Box sx={{ backgroundColor: 'var(--raven-bg-page)', minHeight: '100vh', p: 3 }}>
      <Card
        elevation={0}
        sx={{
          borderRadius: '20px',
          border: '1px solid #F3E5F5',
          boxShadow: '0px 2px 8px 3px rgba(63,81,181,0.04)',
          overflow: 'visible',
          backgroundColor: '#fff',
        }}
      >
        {/* Card header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            gap: 2,
            px: 3,
            py: 2,
            borderBottom: '1px solid #F3E5F5',
          }}
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ color: 'text.primary', whiteSpace: 'nowrap' }}
            >
              Department Wise Summary
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
              {TABS[activeTab].subtitle}
            </Typography>
          </Box>

          {/* Segmented Tabs — shadow removed for this prototype */}
          <Box sx={{
            flexShrink: 0,
            '& .raven-tab-nav--segmented': { boxShadow: 'none' },
          }}>
            <TabNavigation
              appearance="segmented"
              tabs={TABS.map(t => ({ label: t.label }))}
              activeIndex={activeTab}
              onChange={setActiveTab}
              ariaLabel="Summary view selector"
              variant="standard"
            />
          </Box>
        </Box>

        {/* Chart area */}
        <Box sx={{ p: 3 }}>
          <HorizontalBarChart rows={rows} legend={legend} />
        </Box>
      </Card>
    </Box>
  );
}

// ─── Story ───────────────────────────────────────────────────────────────────

export const Playground: StoryObj = {
  name: 'Playground',
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
  render: () => <DepartmentWiseSummaryPrototype />,
};

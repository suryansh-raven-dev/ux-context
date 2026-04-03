import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { AnalyticsChartCard } from './AnalyticsChartCard';

export default {
  title: 'Components/Card/Analytics Chart Card',
  component: AnalyticsChartCard,
  tags: ['autodocs'],
} satisfies Meta<typeof AnalyticsChartCard>;

type Story = StoryObj<typeof AnalyticsChartCard>;

/* ─── Reusable chart placeholder ─────────────────────────────────────────── */

function ChartPlaceholder({
  label,
  color = '#4A148C',
  height = 200,
}: {
  label: string;
  color?: string;
  height?: number;
}) {
  return (
    <Box
      sx={{
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        background: `linear-gradient(135deg, ${color}08, ${color}15)`,
        border: `1px dashed ${color}30`,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}

/* ─── Trend line mock ────────────────────────────────────────────────────── */

function TrendLineMock() {
  const points = [
    { x: 0, reported: 38, closed: 5 },
    { x: 1, reported: 35, closed: 8 },
    { x: 2, reported: 22, closed: 12 },
    { x: 3, reported: 18, closed: 18 },
    { x: 4, reported: 14, closed: 20 },
    { x: 5, reported: 8, closed: 15 },
    { x: 6, reported: 6, closed: 10 },
  ];
  const maxY = 40;
  const w = 480;
  const h = 180;

  const toPath = (key: 'reported' | 'closed') =>
    points
      .map((p, i) => {
        const px = (p.x / 6) * w;
        const py = h - (p[key] / maxY) * h;
        return `${i === 0 ? 'M' : 'L'}${px},${py}`;
      })
      .join(' ');

  return (
    <Box>
      <svg viewBox={`0 0 ${w} ${h + 30}`} width="100%" height={h + 30}>
        {/* Grid lines */}
        {[0, 10, 20, 30, 40].map((v) => {
          const y = h - (v / maxY) * h;
          return (
            <g key={v}>
              <line x1={0} y1={y} x2={w} y2={y} stroke="#e0e0e0" strokeDasharray="4 4" />
              <text x={-4} y={y + 4} fontSize="11" fill="#9e9e9e" textAnchor="end">
                {v}
              </text>
            </g>
          );
        })}
        {/* Lines */}
        <path d={toPath('reported')} fill="none" stroke="#4A148C" strokeWidth={2.5} />
        <path d={toPath('closed')} fill="none" stroke="#66BB6A" strokeWidth={2.5} />
        {/* X-axis labels */}
        {['Jan 2026', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((label, i) => (
          <text
            key={label}
            x={(i / 6) * w}
            y={h + 20}
            fontSize="11"
            fill="#9e9e9e"
            textAnchor="middle"
          >
            {label}
          </text>
        ))}
      </svg>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#4A148C' }} />
          <Typography variant="caption" color="text.secondary">Reported</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#66BB6A' }} />
          <Typography variant="caption" color="text.secondary">Closed</Typography>
        </Box>
      </Box>
    </Box>
  );
}

/* ─── Grouped bar mock ───────────────────────────────────────────────────── */

function GroupedBarMock() {
  const months = ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026'];
  const data = [
    { nearMiss: 35, unsafeCond: 28, unsafeActs: 8 },
    { nearMiss: 22, unsafeCond: 18, unsafeActs: 5 },
    { nearMiss: 15, unsafeCond: 12, unsafeActs: 3 },
    { nearMiss: 4, unsafeCond: 2, unsafeActs: 0 },
  ];
  const colors = { nearMiss: '#4A148C', unsafeCond: '#FF9800', unsafeActs: '#EF5350' };
  const maxVal = 40;
  const barW = 20;
  const groupGap = 80;

  return (
    <Box>
      <svg viewBox="0 0 480 200" width="100%" height={200}>
        {data.map((d, gi) => {
          const groupX = 40 + gi * (groupGap + 40);
          const bars = [
            { val: d.nearMiss, col: colors.nearMiss },
            { val: d.unsafeCond, col: colors.unsafeCond },
            { val: d.unsafeActs, col: colors.unsafeActs },
          ];
          return (
            <g key={gi}>
              {bars.map((b, bi) => {
                const h = (b.val / maxVal) * 160;
                return (
                  <rect
                    key={bi}
                    x={groupX + bi * (barW + 4)}
                    y={170 - h}
                    width={barW}
                    height={h}
                    fill={b.col}
                    rx={3}
                  />
                );
              })}
              <text
                x={groupX + 32}
                y={190}
                fontSize="11"
                fill="#9e9e9e"
                textAnchor="middle"
              >
                {months[gi]}
              </text>
            </g>
          );
        })}
      </svg>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 1 }}>
        {[
          { label: 'Near Miss', color: colors.nearMiss },
          { label: 'Unsafe Conditions', color: colors.unsafeCond },
          { label: 'Unsafe Acts', color: colors.unsafeActs },
        ].map((item) => (
          <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: item.color }} />
            <Typography variant="caption" color="text.secondary">{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/* ─── Stories ────────────────────────────────────────────────────────────────── */

const IncidentTrend: Story = {
  args: {
    title: 'Incident Trend',
    subtitle: 'Reported vs. Closed',
    height: 372,
  },
  render: (args) => (
    <AnalyticsChartCard {...args}>
      <TrendLineMock />
    </AnalyticsChartCard>
  ),
};

const ResolutionRate: Story = {
  args: {
    title: 'Resolution Rate',
    subtitle: 'Monthly resolution rate (%)',
    height: 372,
  },
  render: (args) => (
    <AnalyticsChartCard {...args}>
      <ChartPlaceholder label="Resolution Rate Line Chart — integrate with Recharts" color="#7B1FA2" />
    </AnalyticsChartCard>
  ),
};

const IncidentTypeComparison: Story = {
  args: {
    title: 'Incident Type Comparison',
    subtitle: 'Monthly breakdown by incident type',
    height: 372,
  },
  render: (args) => (
    <AnalyticsChartCard {...args}>
      <GroupedBarMock />
    </AnalyticsChartCard>
  ),
};

const SideBySide: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Box sx={{ flex: 1 }}>
        <AnalyticsChartCard title="Incident Trend" subtitle="Reported vs. Closed" height={372}>
          <TrendLineMock />
        </AnalyticsChartCard>
      </Box>
      <Box sx={{ flex: 1 }}>
        <AnalyticsChartCard title="Resolution Rate" subtitle="Monthly resolution rate (%)" height={372}>
          <ChartPlaceholder label="Resolution Rate Chart" color="#7B1FA2" height={220} />
        </AnalyticsChartCard>
      </Box>
    </Box>
  ),
};

/* ─── Composite page ─────────────────────────────────────────────────────────── */

function renderStory(story: { render?: (...args: any[]) => any; args?: any }) {
  if (story.render) return story.render(story.args ?? {}, {} as any);
  return null;
}

export const AnalyticsChartCardPage: Story = {
  tags: ['!dev'],
  name: 'Analytics Chart Card',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage
      title="Analytics Chart Card"
      description={`
Reusable container card for analytics charts on the Analysis Dashboard.
Provides a consistent header (title + subtitle) and content area for
embedding any charting library (Recharts, Chart.js, or SVG).

### MUI v6 components used

| Component | Usage |
|---|---|
| \`Card\` | Outer container — elevation=0, \`border: 1px solid #F3E5F5\`, borderRadius \`20px\` |
| \`Typography\` | h6 for title, caption for subtitle |

### Design spec (from Figma)

- **Height**: 372px (for charts in the Incident Analysis section)
- **Header**: 65px min-height, bottom border \`#F3E5F5\`
- **Content area**: 24px padding, white background
- **Shadow**: \`0px 2px 8px rgba(63,81,181,0.04)\` on the parent section container

### Charts in the Analysis Dashboard

| Chart | Type | Section |
|---|---|---|
| Incident Trend | Dual line (Reported vs. Closed) | Incident Analysis |
| Resolution Rate | Single line (%) | Incident Analysis |
| Incident Type Comparison | Grouped bar (Near Miss, Unsafe Conditions, Unsafe Acts) | Incident Analysis |
| Direct Cause Analysis | Horizontal bar with tooltip | Monthly Trends |
| Root Cause Analysis | Horizontal bar with tooltip | Monthly Trends |

### Figma reference
\`Near Miss Reporting Tool / Analysis Dashboard → Incident Analysis Container\`
      `}
      maxWidth={1200}
    >
      <StorybookSection title="Incident Trend (dual line chart)">{renderStory(IncidentTrend)}</StorybookSection>
      <StorybookSection title="Incident Type Comparison (grouped bar chart)">{renderStory(IncidentTypeComparison)}</StorybookSection>
      <StorybookSection title="Side-by-side layout (as in Figma)">{renderStory(SideBySide)}</StorybookSection>
      <StorybookSection title="Resolution Rate (placeholder)">{renderStory(ResolutionRate)}</StorybookSection>
    </StorybookPage>
  ),
};

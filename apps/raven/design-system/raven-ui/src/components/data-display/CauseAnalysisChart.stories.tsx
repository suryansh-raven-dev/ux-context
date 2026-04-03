import Box from '@mui/material/Box';

import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { AnalyticsChartCard } from './AnalyticsChartCard';
import { CauseAnalysisChart } from './CauseAnalysisChart';

export default {
  title: 'Components/Data Display/Cause Analysis Chart',
  component: CauseAnalysisChart,
  tags: ['autodocs'],
} satisfies Meta<typeof CauseAnalysisChart>;

type Story = StoryObj<typeof CauseAnalysisChart>;

/* ─── Sample data matching Figma: Monthly Trends section ─────────────────── */

const DIRECT_CAUSE_DATA = [
  { category: 'Inadequate PPE', value: 22 },
  { category: 'Inadequate Guards', value: 20 },
  { category: 'Personal Protective Equipment Not Used', value: 17 },
  { category: 'Operation Of Equipment Without Authority', value: 14 },
  { category: 'Work Or Motion At Improper/Unsafe Speed', value: 10 },
  { category: 'Others', value: 15 },
];

const ROOT_CAUSE_DATA = [
  { category: 'Personnel Training', value: 8 },
  { category: 'Procedures & Practices', value: 18 },
  { category: 'Hazard Identification & Risk Assessment', value: 16 },
  { category: 'Poor Design Of Plant And Equipment', value: 20 },
  { category: 'Inadequate Supervision', value: 12 },
  { category: 'Others', value: 22 },
];

/* ─── Stories ────────────────────────────────────────────────────────────────── */

const DirectCause: Story = {
  args: {
    data: DIRECT_CAUSE_DATA,
    barColor: '#4A148C',
  },
};

const RootCause: Story = {
  args: {
    data: ROOT_CAUSE_DATA,
    barColor: '#7B1FA2',
  },
};

const WithChartCard: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Box sx={{ flex: 1 }}>
        <AnalyticsChartCard title="Direct Cause Analysis" subtitle="Frequency by Direct Cause category">
          <CauseAnalysisChart data={DIRECT_CAUSE_DATA} barColor="#4A148C" />
        </AnalyticsChartCard>
      </Box>
      <Box sx={{ flex: 1 }}>
        <AnalyticsChartCard title="Root Cause Analysis" subtitle="Frequency by Root Cause category">
          <CauseAnalysisChart data={ROOT_CAUSE_DATA} barColor="#7B1FA2" />
        </AnalyticsChartCard>
      </Box>
    </Box>
  ),
};

const CustomColors: Story = {
  args: {
    data: [
      { category: 'Slip/Trip', value: 30 },
      { category: 'Falling Object', value: 22 },
      { category: 'Chemical Exposure', value: 15 },
      { category: 'Electrical', value: 8 },
    ],
    barColor: '#E65100',
  },
};

/* ─── Composite page ─────────────────────────────────────────────────────────── */

function renderStory(story: { render?: (...args: any[]) => any; args?: any }) {
  if (story.render) return story.render({}, {} as any);
  if (story.args) return <CauseAnalysisChart {...story.args} />;
  return null;
}

export const CauseAnalysisChartPage: Story = {
  tags: ['!dev'],
  name: 'Cause Analysis Chart',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage
      title="Cause Analysis Chart"
      description={`
Horizontal bar chart for analyzing incident causes.
Used in the Monthly Trends section of the Analysis Dashboard for
both Direct Cause and Root Cause analysis views.

### MUI v6 components used

| Component | Usage |
|---|---|
| \`Tooltip\` | Dark tooltip (#212121) on bar hover showing category and value |
| \`Typography\` | Caption for category labels and axis tick labels |

### Design spec (from Figma)

| Property | Value |
|---|---|
| Category labels | Right-aligned, max-width 200px, caption (12px) |
| Bar height | 22px, 3px border-radius |
| Bar color | \`#4A148C\` (purple/darken-4) default |
| Grid lines | Dashed vertical, \`#E0E0E0\` |
| Tooltip | \`#212121\` bg, white text, arrow pointer, 8px border-radius |
| Hover | Non-hovered bars dim to 50% opacity |

### Integration pattern
Wrap in \`AnalyticsChartCard\` for header + border treatment:
\`\`\`tsx
<AnalyticsChartCard title="Direct Cause Analysis" subtitle="Frequency by Direct Cause category">
  <CauseAnalysisChart data={data} barColor="#4A148C" />
</AnalyticsChartCard>
\`\`\`

### Figma reference
\`Near Miss Reporting Tool / Analysis Dashboard → Trends Container → Monthly Trends Data\`
      `}
      maxWidth={1200}
    >
      <StorybookSection title="Direct Cause Analysis">{renderStory(DirectCause)}</StorybookSection>
      <StorybookSection title="Root Cause Analysis">{renderStory(RootCause)}</StorybookSection>
      <StorybookSection title="Inside AnalyticsChartCard (side-by-side as in Figma)">{renderStory(WithChartCard)}</StorybookSection>
      <StorybookSection title="Custom bar color">{renderStory(CustomColors)}</StorybookSection>
    </StorybookPage>
  ),
};

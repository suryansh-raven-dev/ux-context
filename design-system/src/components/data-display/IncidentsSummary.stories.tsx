import AssignmentRounded from '@mui/icons-material/AssignmentRounded';
import ManageSearchRounded from '@mui/icons-material/ManageSearchRounded';
import RecommendRounded from '@mui/icons-material/RecommendRounded';

import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { IncidentsSummary } from './IncidentsSummary';

export default {
  title: 'Components/Card/Incidents Summary',
  component: IncidentsSummary,
  tags: ['autodocs'],
} satisfies Meta<typeof IncidentsSummary>;

type Story = StoryObj<typeof IncidentsSummary>;

/* ─── Sample data matching Figma: Analysis Dashboard ─────────────────────── */

const OVERVIEW_STATS = [
  { value: 340, label: 'Total Incidents' },
  [
    { value: 177, label: 'Total Investigation In-Progress' },
    { value: 22,  label: 'Total Investigation Released' },
  ],
  { value: 70,  label: 'Total Closed' },
];

const DETAIL_CARDS = [
  {
    icon: <AssignmentRounded sx={{ fontSize: 20, color: '#0277BD' }} />,
    iconBg: '#E1F5FE',
    title: 'Total Reports',
    count: 340,
    breakdown: [
      { label: 'Draft',                  value: 16 },
      { label: 'Reported',               value: 324 },
      { label: 'Rejected',               value: 24 },
      { label: 'Approved by Safety',     value: 30 },
      { label: 'Approved by Department', value: 269 },
    ],
    rate: { label: '89% Closure Rate', value: '89%', positive: true },
  },
  {
    icon: <ManageSearchRounded sx={{ fontSize: 20, color: '#E65100' }} />,
    iconBg: '#FFF3E0',
    title: 'Total Investigations',
    count: 324,
    breakdown: [
      { label: 'In-Progress', value: 16 },
      { label: 'Released',    value: 24 },
      { label: 'Closed',      value: 324 },
    ],
    rate: { label: '73% Done Rate', value: '73%', positive: true },
    overdue: { count: 2, label: 'Overdue' },
  },
  {
    icon: <RecommendRounded sx={{ fontSize: 20, color: '#2E7D32' }} />,
    iconBg: '#E8F5E9',
    title: 'Total Recommendations',
    count: 59,
    breakdown: [
      { label: 'Pending',   value: 14 },
      { label: 'In-Review', value: 2 },
      { label: 'Done',      value: 43 },
    ],
    rate: { label: '73% Done Rate', value: '73%', positive: true },
    overdue: { count: 2, label: 'Overdue' },
  },
];

/* ─── Stories ────────────────────────────────────────────────────────────────── */

const Default: Story = {
  args: {
    sectionTitle: 'INCIDENTS SUMMARY',
    approvalRate: { label: '21% Approval Rate', tooltipText: 'Percentage of reports approved across all departments' },
    overviewStats: OVERVIEW_STATS,
    detailCards: DETAIL_CARDS,
  },
};

const WithoutApprovalRate: Story = {
  args: {
    ...Default.args,
    approvalRate: undefined,
  },
};

const MinimalStats: Story = {
  args: {
    sectionTitle: 'SAFETY OVERVIEW',
    overviewStats: [
      { value: 12, label: 'Total Incidents' },
      { value: 5, label: 'Open Investigations' },
    ],
    detailCards: [
      {
        icon: <AssignmentRounded sx={{ fontSize: 20, color: '#0277BD' }} />,
        iconBg: '#E1F5FE',
        title: 'Reports',
        count: 12,
        breakdown: [
          { label: 'Open', value: 7 },
          { label: 'Closed', value: 5 },
        ],
        rate: { label: '42% Closure', value: '42%', positive: false },
      },
    ],
  },
};

/* ─── Composite page ─────────────────────────────────────────────────────────── */

function renderStory(story: { args?: any }) {
  return story.args ? <IncidentsSummary {...story.args} /> : null;
}

export const IncidentsSummaryPage: Story = {
  tags: ['!dev'],
  name: 'Incidents Summary',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage
      title="Incidents Summary"
      description={`
Dashboard metrics overview section from the Analysis page.
Shows top-level stats (big numbers) and three detail cards with breakdowns,
closure/done rates, and overdue warnings.

### MUI v6 components used

| Component | Variant / Usage |
|---|---|
| \`Card\` | Outer container (elevation=0, rounded-32px) and detail cards (rounded-20px) |
| \`CardActionArea\` | Wraps detail card content when \`onClick\` is provided |
| \`Chip\` | Approval rate badge (green), closure rate, and overdue warnings (amber) |
| \`Divider\` | Vertical separators between overview stat blocks |
| \`Typography\` | h4 for stat numbers, subtitle2 for labels, body2 for breakdowns |
| \`IconButton\` | Chevron-right action on each detail card |
| \`Tooltip\` | Info icon on the approval rate chip |

### Design tokens (from Figma)

| Token | Value | Usage |
|---|---|---|
| \`purple/lighten-5\` | \`#F3E5F5\` | Card borders, dividers |
| \`green/lighten-5\` | \`#E8F5E9\` | Positive rate chip background |
| \`orange/lighten-5\` | \`#FFF3E0\` | Overdue chip background |
| \`h4 / 34px SemiBold\` | Source Sans 3 | Stat values |
| \`caption / 12px\` | Source Sans 3 | Stat labels |
| \`subtitle2 / 14px SemiBold\` | Source Sans 3 | Section title, card titles |

### Figma reference
\`Near Miss Reporting Tool / Analysis Dashboard → Content Container → Metric Card Rows\`
      `}
      maxWidth={1200}
    >
      <StorybookSection title="Default — Full Dashboard Summary">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="Without Approval Rate Badge">{renderStory(WithoutApprovalRate)}</StorybookSection>
      <StorybookSection title="Minimal (fewer stats and cards)">{renderStory(MinimalStats)}</StorybookSection>
    </StorybookPage>
  ),
};

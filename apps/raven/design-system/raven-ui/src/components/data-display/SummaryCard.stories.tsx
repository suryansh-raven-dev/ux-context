import AssessmentIcon from '@mui/icons-material/AssessmentRounded';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { SummaryCard } from './SummaryCard';

export default {
  title: 'Data Display/Summary Card',
  component: SummaryCard,
} satisfies Meta<typeof SummaryCard>;

type Story = StoryObj<typeof SummaryCard>;

export const Default: Story = {
  args: {
    icon: <AssessmentIcon />,
    title: 'Near-miss overview',
    stats: [
      { value: 42, label: 'Open', color: '#0288D1' },
      { value: 18, label: 'Closed', color: '#2E7D32' },
    ],
    closureRate: { value: '76%', positive: true },
    departments: { count: 5, top: 'Operations' },
    trend: { value: '+12% vs last month', positive: true },
  },
};

export const Clickable: Story = {
  args: {
    ...Default.args,
    onClick: () => {},
  },
};

export const NegativeTrend: Story = {
  args: {
    ...Default.args,
    closureRate: { value: '54%', positive: false },
    trend: { value: '-3% vs last month', positive: false },
  },
};

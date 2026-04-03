import AssessmentIcon from '@mui/icons-material/AssessmentRounded';

import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { SummaryCard } from './SummaryCard';

export default {
  title: 'Components/Card/Summary Card',
  component: SummaryCard,
} satisfies Meta<typeof SummaryCard>;

type Story = StoryObj<typeof SummaryCard>;

const Default: Story = {
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

const Clickable: Story = {
  args: {
    ...Default.args,
    onClick: () => {},
  },
};

const NegativeTrend: Story = {
  args: {
    ...Default.args,
    closureRate: { value: '54%', positive: false },
    trend: { value: '-3% vs last month', positive: false },
  },
};

function renderStory(story: { render?: (...args: any[]) => any; args?: any }) {
  if (story.render) {
    return story.render({}, {});
  }
  if (story.args) {
    return <SummaryCard {...story.args} />;
  }
  return null;
}

export const SummaryCardPage: Story = {
  tags: ['!dev'],
  name: 'Summary Card',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="Clickable">{renderStory(Clickable)}</StorybookSection>
      <StorybookSection title="Negative Trend">{renderStory(NegativeTrend)}</StorybookSection>
    </StorybookPage>
  ),
};

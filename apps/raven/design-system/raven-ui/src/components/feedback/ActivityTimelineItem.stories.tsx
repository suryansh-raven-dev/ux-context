import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { ActivityTimelineItem } from './ActivityTimelineItem';

const sampleUser = {
  initials: 'JD',
  name: 'Jordan Doe',
  role: 'Safety Lead',
  avatarColor: '#CE93D8',
};

export default {
  title: 'Components/Feedback',
  component: ActivityTimelineItem,
} satisfies Meta<typeof ActivityTimelineItem>;

type Story = StoryObj<typeof ActivityTimelineItem>;

const Basic: Story = {
  args: {
    user: sampleUser,
    timestamp: 'Mar 26, 2026 · 2:14 PM',
    actionLabel: 'Changed status from Open to Under review',
    showConnector: true,
  },
};

const WithExpandableDetails: Story = {
  args: {
    user: sampleUser,
    timestamp: 'Mar 26, 2026 · 2:14 PM',
    actionLabel: 'Added investigation notes',
    showConnector: true,
    expandedContent: (
      <Typography variant="body2" color="text.secondary">
        Root cause hypothesis updated; awaiting maintenance sign-off.
      </Typography>
    ),
  },
};

const WithoutConnector: Story = {
  args: {
    user: {
      ...sampleUser,
      initials: 'AK',
      name: 'Alex Kim',
    },
    timestamp: 'Mar 25, 2026 · 9:00 AM',
    actionLabel: 'Incident created',
    showConnector: false,
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <ActivityTimelineItem {...story.args} />;
  }
  return null;
}

export const ActivityTimelinePage: Story = {
  name: 'Activity Timeline',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Basic">{renderStory(Basic)}</StorybookSection>
      <StorybookSection title="With Expandable Details">{renderStory(WithExpandableDetails)}</StorybookSection>
      <StorybookSection title="Without Connector">{renderStory(WithoutConnector)}</StorybookSection>
    </StorybookPage>
  ),
};

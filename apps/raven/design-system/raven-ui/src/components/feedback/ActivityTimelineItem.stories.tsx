import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';

import { ActivityTimelineItem } from './ActivityTimelineItem';

const sampleUser = {
  initials: 'JD',
  name: 'Jordan Doe',
  role: 'Safety Lead',
  avatarColor: '#CE93D8',
};

export default {
  title: 'Feedback/Activity Timeline',
  component: ActivityTimelineItem,
} satisfies Meta<typeof ActivityTimelineItem>;

type Story = StoryObj<typeof ActivityTimelineItem>;

export const Basic: Story = {
  args: {
    user: sampleUser,
    timestamp: 'Mar 26, 2026 · 2:14 PM',
    actionLabel: 'Changed status from Open to Under review',
    showConnector: true,
  },
};

export const WithExpandableDetails: Story = {
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

export const WithoutConnector: Story = {
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

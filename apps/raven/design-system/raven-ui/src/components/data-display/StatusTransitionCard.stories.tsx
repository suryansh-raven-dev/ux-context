import type { Meta, StoryObj } from '@storybook/react';

import { StatusTransitionCard } from './StatusTransitionCard';

export default {
  title: 'Data display/StatusTransitionCard',
  component: StatusTransitionCard,
} satisfies Meta<typeof StatusTransitionCard>;

type Story = StoryObj<typeof StatusTransitionCard>;

export const Default: Story = {
  args: {
    fromStatus: 'Pending',
    toStatus: 'In Progress',
  },
};

export const LongLabels: Story = {
  args: {
    fromStatus: 'Awaiting site verification',
    toStatus: 'Verified — action plan assigned',
  },
};

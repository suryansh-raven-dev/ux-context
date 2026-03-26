import type { Meta, StoryObj } from '@storybook/react';

import { DiffCard } from './DiffCard';

export default {
  title: 'Data display/DiffCard',
  component: DiffCard,
} satisfies Meta<typeof DiffCard>;

type Story = StoryObj<typeof DiffCard>;

export const Updates: Story = {
  args: {
    type: 'updates',
    changes: [
      { field: 'Severity', oldValue: 'Low', newValue: 'Medium' },
      { field: 'Owner', oldValue: 'Team A', newValue: 'Team B' },
    ],
  },
};

export const Added: Story = {
  args: {
    type: 'added',
    changes: [{ field: 'Tag', newValue: 'Confined space' }],
  },
};

export const Removed: Story = {
  args: {
    type: 'removed',
    changes: [{ field: 'Legacy ID', oldValue: 'NM-0092' }],
  },
};

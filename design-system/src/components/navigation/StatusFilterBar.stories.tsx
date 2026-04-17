import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { StatusFilterBar } from './StatusFilterBar';

export default {
  title: 'Components/Navigation/Tabs',
  component: StatusFilterBar,
  parameters: {
    docs: {
      description: {
        component:
          'Status Filter Bar is a count-aware variant of the Tabs pattern. It binds the same segmented-pill visual to filter-with-counts semantics (All (48) / Open (12) / Closed (29)). Prefer this when the user is narrowing a list by lifecycle status.',
      },
    },
  },
} satisfies Meta<typeof StatusFilterBar>;

type Story = StoryObj<typeof StatusFilterBar>;

export const StatusFilter: Story = {
  name: 'Variant: Status Filter Bar',
  render: function StatusFilterBarStory() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <StatusFilterBar
        filters={[
          { label: 'All', count: 48 },
          { label: 'Open', count: 12 },
          { label: 'In review', count: 7 },
          { label: 'Closed', count: 29 },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    );
  },
};

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { StatusFilterBar } from './StatusFilterBar';

export default {
  title: 'Navigation/Status Filter Bar',
  component: StatusFilterBar,
} satisfies Meta<typeof StatusFilterBar>;

type Story = StoryObj<typeof StatusFilterBar>;

export const Default: Story = {
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

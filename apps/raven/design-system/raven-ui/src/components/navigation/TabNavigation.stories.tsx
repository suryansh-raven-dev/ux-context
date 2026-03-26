import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TabNavigation } from './TabNavigation';

export default {
  title: 'Navigation/TabNavigation',
  component: TabNavigation,
} satisfies Meta<typeof TabNavigation>;

type Story = StoryObj<typeof TabNavigation>;

export const Default: Story = {
  render: function TabNavigationStory() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <TabNavigation
        tabs={[
          { label: 'Open', count: 12 },
          { label: 'Review' },
          { label: 'Closed', count: 3 },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    );
  },
};

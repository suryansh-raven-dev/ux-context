import type { Meta, StoryObj } from '@storybook/react';

import { SideNavigation } from './SideNavigation';

export default {
  title: 'Layout/Side Navigation',
  component: SideNavigation,
} satisfies Meta<typeof SideNavigation>;

type Story = StoryObj<typeof SideNavigation>;

export const Default: Story = {
  args: {
    activePath: '/reports',
    onNavigate: (path: string) => {
      // eslint-disable-next-line no-console
      console.log('navigate', path);
    },
  },
};

export const AnalysisActive: Story = {
  args: {
    activePath: '/analysis',
    onNavigate: (path: string) => {
      // eslint-disable-next-line no-console
      console.log('navigate', path);
    },
  },
};

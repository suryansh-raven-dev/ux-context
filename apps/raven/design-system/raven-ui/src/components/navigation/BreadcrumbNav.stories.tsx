import type { Meta, StoryObj } from '@storybook/react-vite';

import { BreadcrumbNav } from './BreadcrumbNav';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: BreadcrumbNav,
} satisfies Meta<typeof BreadcrumbNav>;

type Story = StoryObj<typeof BreadcrumbNav>;

export const InProgress: Story = {
  args: {
    parentLabel: 'Near-miss reports',
    currentId: 'NM-20418',
    status: 'In Progress',
    onBack: () => {},
  },
};

export const OtherStatus: Story = {
  args: {
    parentLabel: 'Incidents',
    currentId: 'INC-991',
    status: 'Closed',
    onBack: () => {},
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { BreadcrumbNav } from './BreadcrumbNav';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: BreadcrumbNav,
  tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbNav>;

type Story = StoryObj<typeof BreadcrumbNav>;

export const InProgress: Story = {
  tags: ['!dev'],
  args: {
    parentLabel: 'Near-miss reports',
    currentId: 'NM-20418',
    status: 'In Progress',
    onBack: () => {},
  },
};

export const OtherStatus: Story = {
  tags: ['!dev'],
  args: {
    parentLabel: 'Incidents',
    currentId: 'INC-991',
    status: 'Closed',
    onBack: () => {},
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '@mui/material/Button';

import { PageHeader } from './PageHeader';

export default {
  title: 'Layout/Page Header',
  component: PageHeader,
} satisfies Meta<typeof PageHeader>;

type Story = StoryObj<typeof PageHeader>;

export const SimpleTitle: Story = {
  args: {
    title: 'Incidents',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Investigation details',
    subtitle: 'Case #1042 · Opened Mar 12, 2026',
  },
};

export const WithBackButton: Story = {
  args: {
    title: 'Edit report',
    subtitle: 'Autosaved',
    onBack: () => {
      // eslint-disable-next-line no-console
      console.log('back');
    },
  },
};

export const WithActions: Story = {
  args: {
    title: 'Reports',
    subtitle: 'Last 30 days',
    actions: (
      <>
        <Button variant="outlined" size="small">
          Export
        </Button>
        <Button variant="contained" size="small">
          New report
        </Button>
      </>
    ),
  },
};

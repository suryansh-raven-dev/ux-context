import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import InboxRounded from '@mui/icons-material/InboxRounded';
import SearchOffRounded from '@mui/icons-material/SearchOffRounded';
import AddRounded from '@mui/icons-material/AddRounded';

import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/Feedback/EmptyState',
  component: EmptyState,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    icon: <InboxRounded />,
    title: 'No incidents yet',
    description: 'When someone reports a near-miss, it will appear here.',
    action: (
      <Button variant="contained" startIcon={<AddRounded />}>
        Report incident
      </Button>
    ),
  },
};

export const NoResults: Story = {
  args: {
    icon: <SearchOffRounded />,
    title: 'No matches for your filters',
    description: 'Try clearing filters or broadening your search.',
  },
};

export const Compact: Story = {
  args: {
    icon: <InboxRounded />,
    title: 'Nothing here',
    compact: true,
  },
};

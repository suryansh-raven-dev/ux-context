import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { LifecycleIndicator } from './LifecycleIndicator';

const meta: Meta<typeof LifecycleIndicator> = {
  title: 'Components/Workflow/LifecycleIndicator',
  component: LifecycleIndicator,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof LifecycleIndicator>;

const steps = [
  { id: 'reported', label: 'Reported' },
  { id: 'review', label: 'In Review' },
  { id: 'actions', label: 'Actions Assigned' },
  { id: 'closed', label: 'Closed' },
];

export const InReview: Story = {
  args: { steps, currentId: 'review', ariaLabel: 'Incident lifecycle' },
};

export const AllPhases: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="subtitle2">Just reported</Typography>
      <LifecycleIndicator steps={steps} currentId="reported" />
      <Typography variant="subtitle2">In review</Typography>
      <LifecycleIndicator steps={steps} currentId="review" />
      <Typography variant="subtitle2">Actions assigned</Typography>
      <LifecycleIndicator steps={steps} currentId="actions" />
      <Typography variant="subtitle2">Closed</Typography>
      <LifecycleIndicator steps={steps} currentId="closed" />
    </Stack>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '@mui/material/Button';
import { RavenAlert } from './RavenAlert';

const meta: Meta<typeof RavenAlert> = {
  title: 'Components/Feedback/Alert',
  component: RavenAlert,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenAlert>;

export const Success: Story = {
  args: {
    severity: 'success',
    children: 'Incident report submitted successfully.',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    children: 'Failed to save incident — please try again.',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    children: 'This incident has not been reviewed in over 30 days.',
  },
};

export const Info: Story = {
  args: {
    severity: 'info',
    children: 'A new analysis workflow is available for this report.',
  },
};

export const WithTitle: Story = {
  args: {
    severity: 'info',
    title: 'Review Required',
    children: 'Please review the updated risk assessment before closing this incident.',
  },
};

export const WithAction: Story = {
  args: {
    severity: 'warning',
    title: 'Pending Approval',
    children: 'This corrective action is waiting for manager sign-off.',
    action: <Button color="inherit" size="small">Approve</Button>,
  },
};

export const Outlined: Story = {
  args: {
    severity: 'success',
    variant: 'outlined',
    children: 'All corrective actions have been completed.',
  },
};

export const Filled: Story = {
  args: {
    severity: 'error',
    variant: 'filled',
    children: 'Critical safety threshold exceeded — immediate action required.',
  },
};

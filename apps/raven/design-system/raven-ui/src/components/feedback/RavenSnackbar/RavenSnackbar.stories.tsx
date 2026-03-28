import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '@mui/material/Button';
import { RavenSnackbar } from './RavenSnackbar';

const meta: Meta<typeof RavenSnackbar> = {
  title: 'Components/Feedback/Snackbar',
  component: RavenSnackbar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenSnackbar>;

export const Success: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" color="success" onClick={() => setOpen(true)}>Show Success</Button>
        <RavenSnackbar open={open} onClose={() => setOpen(false)} severity="success" message="Incident saved successfully." />
      </>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>Show Error</Button>
        <RavenSnackbar open={open} onClose={() => setOpen(false)} severity="error" message="Failed to submit report — check your connection." />
      </>
    );
  },
};

export const Warning: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" color="warning" onClick={() => setOpen(true)}>Show Warning</Button>
        <RavenSnackbar open={open} onClose={() => setOpen(false)} severity="warning" message="This incident is overdue for review." />
      </>
    );
  },
};

export const Info: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Show Info</Button>
        <RavenSnackbar open={open} onClose={() => setOpen(false)} severity="info" message="New analysis results are available." />
      </>
    );
  },
};

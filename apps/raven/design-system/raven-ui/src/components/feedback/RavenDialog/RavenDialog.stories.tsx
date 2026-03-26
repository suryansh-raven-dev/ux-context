import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { RavenDialog } from './RavenDialog';

const meta: Meta<typeof RavenDialog> = {
  title: 'Feedback/RavenDialog',
  component: RavenDialog,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenDialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open Dialog</Button>
        <RavenDialog open={open} onClose={() => setOpen(false)} title="Confirm Action">
          <Typography>Are you sure you want to proceed with this action?</Typography>
        </RavenDialog>
      </>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open Dialog</Button>
        <RavenDialog
          open={open}
          onClose={() => setOpen(false)}
          title="Delete Incident"
          actions={
            <>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" color="error" onClick={() => setOpen(false)}>Delete</Button>
            </>
          }
        >
          <Typography>This action cannot be undone. All associated data will be permanently removed.</Typography>
        </RavenDialog>
      </>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open Form Dialog</Button>
        <RavenDialog
          open={open}
          onClose={() => setOpen(false)}
          title="Add Corrective Action"
          actions={
            <>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setOpen(false)}>Save</Button>
            </>
          }
        >
          <TextField label="Action Title" fullWidth margin="dense" />
          <TextField label="Description" fullWidth margin="dense" multiline rows={3} />
          <TextField label="Assigned To" fullWidth margin="dense" />
        </RavenDialog>
      </>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open Full-Width Dialog</Button>
        <RavenDialog open={open} onClose={() => setOpen(false)} title="Incident Details" fullWidth maxWidth="md">
          <Typography>
            This dialog stretches to the full available width. Use it when displaying detailed content
            such as tables, timelines, or multi-column layouts that benefit from extra horizontal space.
          </Typography>
        </RavenDialog>
      </>
    );
  },
};

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenSnackbar } from './RavenSnackbar';
import type { RavenSnackbarProps } from './RavenSnackbar';

const meta: Meta<typeof RavenSnackbar> = {
  title: 'Components/Feedback',
  component: RavenSnackbar,
};
export default meta;
type Story = StoryObj<typeof RavenSnackbar>;

const Success: Story = {
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

const Error: Story = {
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

const Warning: Story = {
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

const Info: Story = {
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

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenSnackbar {...(story.args as RavenSnackbarProps)} />;
  }
  return null;
}

export const Snackbar: Story = {
  name: 'Snackbar',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="Success">{renderStory(Success)}</StorybookSection>
      <StorybookSection title="Error">{renderStory(Error)}</StorybookSection>
      <StorybookSection title="Warning">{renderStory(Warning)}</StorybookSection>
      <StorybookSection title="Info">{renderStory(Info)}</StorybookSection>
    </StorybookPage>
  ),
};

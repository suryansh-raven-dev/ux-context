import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { ActivityDrawer } from './ActivityDrawer';

export default {
  title: 'Components/Feedback',
  component: ActivityDrawer,
} satisfies Meta<typeof ActivityDrawer>;

type Story = StoryObj<typeof ActivityDrawer>;

function DrawerDemo({ width }: { width?: number }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open activity drawer
      </Button>
      <ActivityDrawer open={open} onClose={() => setOpen(false)} width={width}>
        <Typography variant="body2">
          Near-miss logged and assigned to the safety team for review.
        </Typography>
      </ActivityDrawer>
    </>
  );
}

export const ActivityDrawerPage: Story = {
  name: 'Activity Drawer',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Default">
        <DrawerDemo />
      </StorybookSection>
      <StorybookSection title="Custom Width">
        <DrawerDemo width={520} />
      </StorybookSection>
    </StorybookPage>
  ),
};

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ActivityDrawer } from './ActivityDrawer';

export default {
  title: 'Feedback/Activity Drawer',
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

export const Default: Story = {
  render: () => <DrawerDemo />,
};

export const CustomWidth: Story = {
  render: () => <DrawerDemo width={520} />,
};

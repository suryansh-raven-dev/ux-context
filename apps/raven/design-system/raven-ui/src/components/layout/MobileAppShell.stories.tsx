import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNoneRounded';

import { MobileAppShell } from './MobileAppShell';

export default {
  title: 'Layout/Mobile App Shell',
  component: MobileAppShell,
} satisfies Meta<typeof MobileAppShell>;

type Story = StoryObj<typeof MobileAppShell>;

export const Default: Story = {
  args: {
    title: 'Near miss',
    children: (
      <div>
        <p style={{ marginTop: 0 }}>Scrollable page content goes here.</p>
        <p>Background and max width follow the mobile shell spec.</p>
      </div>
    ),
  },
};

export const WithHeaderActions: Story = {
  args: {
    title: 'Alerts',
    headerActions: (
      <IconButton aria-label="Notifications" color="inherit" size="small">
        <NotificationsNoneIcon />
      </IconButton>
    ),
    children: <p>Content with header actions on the right.</p>,
  },
};

import MailIcon from '@mui/icons-material/MailRounded';
import Avatar from '@mui/material/Avatar';

import type { Meta, StoryObj } from '@storybook/react';

import { RavenBadge } from './RavenBadge';

export default {
  title: 'Components/Data Display/Badge',
  component: RavenBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof RavenBadge>;

type Story = StoryObj<typeof RavenBadge>;

export const WithContent: Story = {
  args: {
    badgeContent: 4,
    children: <MailIcon color="action" />,
  },
};

export const Dot: Story = {
  args: {
    variant: 'dot',
    children: <MailIcon color="action" />,
  },
};

export const MaxValue: Story = {
  args: {
    badgeContent: 150,
    max: 99,
    children: <MailIcon color="action" />,
  },
};

export const Invisible: Story = {
  args: {
    badgeContent: 0,
    invisible: true,
    children: <MailIcon color="action" />,
  },
};

export const WithAvatar: Story = {
  args: {
    badgeContent: 3,
    overlap: 'circular',
    children: <Avatar sx={{ bgcolor: '#4A148C' }}>JD</Avatar>,
  },
};

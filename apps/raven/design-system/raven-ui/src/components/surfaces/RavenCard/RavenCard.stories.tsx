import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';

import type { Meta, StoryObj } from '@storybook/react';

import { RavenCard } from './RavenCard';

const meta: Meta<typeof RavenCard> = {
  title: 'Surfaces/RavenCard',
  component: RavenCard,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenCard>;

export const Default: Story = {
  args: {
    children: <Typography>This is a basic card with default elevation and brand shadow.</Typography>,
  },
};

export const WithHeader: Story = {
  args: {
    title: 'Incident Report',
    subheader: 'March 15, 2026',
    children: <Typography>Details about the near-miss incident are displayed here.</Typography>,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Review Required',
    children: <Typography>This card contains actionable content that needs user review.</Typography>,
    actions: (
      <>
        <Button size="small">Cancel</Button>
        <Button size="small" variant="contained">Approve</Button>
      </>
    ),
  },
};

export const Flat: Story = {
  args: {
    elevated: false,
    title: 'Flat Card',
    children: <Typography>A flat card with a border instead of shadow.</Typography>,
  },
};

export const WithAvatar: Story = {
  args: {
    title: 'Jane Doe',
    subheader: 'Safety Inspector',
    avatar: <Avatar sx={{ bgcolor: '#4A148C' }}>JD</Avatar>,
    action: (
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    ),
    children: <Typography>Card with an avatar, subtitle, and action button in the header.</Typography>,
  },
};

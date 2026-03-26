import React from 'react';

import Typography from '@mui/material/Typography';

import type { Meta, StoryObj } from '@storybook/react';

import { RavenLink } from './RavenLink';

const meta: Meta<typeof RavenLink> = {
  title: 'Navigation/RavenLink',
  component: RavenLink,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenLink>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

export const Underline: Story = {
  args: {
    href: '#',
    underline: 'always',
    children: 'Always Underlined',
  },
};

export const NoUnderline: Story = {
  args: {
    href: '#',
    underline: 'none',
    children: 'No Underline',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Open External Site',
  },
};

export const InText: Story = {
  render: () => (
    <Typography>
      Read the full <RavenLink href="#">incident report</RavenLink> before
      submitting your review.
    </Typography>
  ),
};

import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import type { Meta, StoryObj } from '@storybook/react';

import { RavenDivider } from './RavenDivider';

const meta: Meta<typeof RavenDivider> = {
  title: 'Components/Data Display/Divider',
  component: RavenDivider,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenDivider>;

export const Default: Story = {
  render: () => (
    <div>
      <Typography>Content above</Typography>
      <RavenDivider />
      <Typography>Content below</Typography>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Box display="flex" alignItems="center" gap={2} height={40}>
      <Typography>Left</Typography>
      <RavenDivider orientation="vertical" flexItem />
      <Typography>Right</Typography>
    </Box>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div>
      <Typography>Section A</Typography>
      <RavenDivider label="OR" />
      <Typography>Section B</Typography>
    </div>
  ),
};

export const Inset: Story = {
  render: () => (
    <div>
      <Typography>Full-width content above</Typography>
      <RavenDivider variant="inset" />
      <Typography>Full-width content below</Typography>
    </div>
  ),
};

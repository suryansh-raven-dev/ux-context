import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import type { Meta, StoryObj } from '@storybook/react';

import { RavenTooltip } from './RavenTooltip';

export default {
  title: 'Components/Data Display/Tooltip',
  component: RavenTooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof RavenTooltip>;

type Story = StoryObj<typeof RavenTooltip>;

export const Default: Story = {
  args: {
    title: 'This is a tooltip',
    children: <Button variant="outlined">Hover me</Button>,
  },
};

export const Top: Story = {
  args: {
    title: 'Top placement',
    placement: 'top',
    children: <Button variant="outlined">Top</Button>,
  },
};

export const Right: Story = {
  args: {
    title: 'Right placement',
    placement: 'right',
    children: <Button variant="outlined">Right</Button>,
  },
};

export const Bottom: Story = {
  args: {
    title: 'Bottom placement',
    placement: 'bottom',
    children: <Button variant="outlined">Bottom</Button>,
  },
};

export const Left: Story = {
  args: {
    title: 'Left placement',
    placement: 'left',
    children: <Button variant="outlined">Left</Button>,
  },
};

export const WithRichContent: Story = {
  args: {
    title: (
      <React.Fragment>
        <Typography variant="subtitle2" color="inherit" gutterBottom>
          Incident details
        </Typography>
        <Typography variant="body2" color="inherit">
          This near-miss was reported on Jan 15, 2025. Click to view the full
          timeline and corrective actions.
        </Typography>
      </React.Fragment>
    ),
    children: <Button variant="outlined">Rich tooltip</Button>,
  },
};

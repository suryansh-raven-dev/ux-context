import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import type { Meta, StoryObj } from '@storybook/react';
import type { TooltipProps } from '@mui/material/Tooltip';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenTooltip } from './RavenTooltip';

export default {
  title: 'Components/Data Display/Tooltip',
  component: RavenTooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof RavenTooltip>;

type Story = StoryObj<typeof RavenTooltip>;

const Default: Story = {
  args: {
    title: 'This is a tooltip',
    children: <Button variant="outlined">Hover me</Button>,
  },
};

const Top: Story = {
  args: {
    title: 'Top placement',
    placement: 'top',
    children: <Button variant="outlined">Top</Button>,
  },
};

const Right: Story = {
  args: {
    title: 'Right placement',
    placement: 'right',
    children: <Button variant="outlined">Right</Button>,
  },
};

const Bottom: Story = {
  args: {
    title: 'Bottom placement',
    placement: 'bottom',
    children: <Button variant="outlined">Bottom</Button>,
  },
};

const Left: Story = {
  args: {
    title: 'Left placement',
    placement: 'left',
    children: <Button variant="outlined">Left</Button>,
  },
};

const WithRichContent: Story = {
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

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenTooltip {...(story.args as TooltipProps)} />;
  }
  return null;
}

export const Tooltip: Story = {
  name: 'Tooltip',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="Top">{renderStory(Top)}</StorybookSection>
      <StorybookSection title="Right">{renderStory(Right)}</StorybookSection>
      <StorybookSection title="Bottom">{renderStory(Bottom)}</StorybookSection>
      <StorybookSection title="Left">{renderStory(Left)}</StorybookSection>
      <StorybookSection title="With Rich Content">{renderStory(WithRichContent)}</StorybookSection>
    </StorybookPage>
  ),
};

import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import type { Meta, StoryObj } from '@storybook/react';

import { muiV6Catalog } from '../../../catalog/muiV6Catalog';
import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { ComponentReference } from '../../catalog/ComponentReference';
import { RavenDivider } from './RavenDivider';

const item = muiV6Catalog.find((c) => c.name === 'Divider')!;

const meta: Meta<typeof RavenDivider> = {
  title: 'Components',
  component: RavenDivider,
};
export default meta;
type Story = StoryObj<typeof RavenDivider>;

const Default: Story = {
  render: () => (
    <div>
      <Typography>Content above</Typography>
      <RavenDivider />
      <Typography>Content below</Typography>
    </div>
  ),
};

const Vertical: Story = {
  render: () => (
    <Box display="flex" alignItems="center" gap={2} height={40}>
      <Typography>Left</Typography>
      <RavenDivider orientation="vertical" flexItem />
      <Typography>Right</Typography>
    </Box>
  ),
};

const WithLabel: Story = {
  render: () => (
    <div>
      <Typography>Section A</Typography>
      <RavenDivider label="OR" />
      <Typography>Section B</Typography>
    </div>
  ),
};

const Inset: Story = {
  render: () => (
    <div>
      <Typography>Full-width content above</Typography>
      <RavenDivider variant="inset" />
      <Typography>Full-width content below</Typography>
    </div>
  ),
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenDivider {...story.args} />;
  }
  return null;
}

export const Divider: Story = {
  name: 'Divider',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="Vertical">{renderStory(Vertical)}</StorybookSection>
      <StorybookSection title="With Label">{renderStory(WithLabel)}</StorybookSection>
      <StorybookSection title="Inset">{renderStory(Inset)}</StorybookSection>
      <StorybookSection
        title="MUI Alignment"
        description="Cross-checked with the MUI v6 Divider docs for variants, flex usage, inline content, and screen-reader guidance."
      >
        <ComponentReference item={item} embedded />
      </StorybookSection>
    </StorybookPage>
  ),
};

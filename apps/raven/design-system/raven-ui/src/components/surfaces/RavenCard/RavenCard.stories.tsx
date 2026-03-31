import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVertRounded';
import Typography from '@mui/material/Typography';

import type { Meta, StoryObj } from '@storybook/react';

import { muiV6Catalog } from '../../../catalog/muiV6Catalog';
import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { ComponentReference } from '../../catalog/ComponentReference';
import { RavenCard } from './RavenCard';
import type { RavenCardProps } from './RavenCard';

const item = muiV6Catalog.find((c) => c.name === 'Card')!;

const meta: Meta<typeof RavenCard> = {
  title: 'Components',
  component: RavenCard,
};
export default meta;
type Story = StoryObj<typeof RavenCard>;

const Default: Story = {
  args: {
    children: <Typography>This is a basic card with default elevation and brand shadow.</Typography>,
  },
};

const WithHeader: Story = {
  args: {
    title: 'Incident Report',
    subheader: 'March 15, 2026',
    children: <Typography>Details about the near-miss incident are displayed here.</Typography>,
  },
};

const WithActions: Story = {
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

const Flat: Story = {
  args: {
    elevated: false,
    title: 'Flat Card',
    children: <Typography>A flat card with a border instead of shadow.</Typography>,
  },
};

const WithAvatar: Story = {
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

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenCard {...(story.args as RavenCardProps)} />;
  }
  return null;
}

export const Card: Story = {
  name: 'Card',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="With Header">{renderStory(WithHeader)}</StorybookSection>
      <StorybookSection title="With Actions">{renderStory(WithActions)}</StorybookSection>
      <StorybookSection title="Flat">{renderStory(Flat)}</StorybookSection>
      <StorybookSection title="With Avatar">{renderStory(WithAvatar)}</StorybookSection>
      <StorybookSection
        title="MUI Alignment"
        description="Cross-checked with the MUI v6 Card docs for composition, action areas, outlined usage, and media guidance."
      >
        <ComponentReference item={item} embedded />
      </StorybookSection>
    </StorybookPage>
  ),
};

import React from 'react';

import Typography from '@mui/material/Typography';

import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenLink } from './RavenLink';

const meta: Meta<typeof RavenLink> = {
  title: 'Components/Navigation/Link',
  component: RavenLink,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenLink>;

const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

const Underline: Story = {
  args: {
    href: '#',
    underline: 'always',
    children: 'Always Underlined',
  },
};

const NoUnderline: Story = {
  args: {
    href: '#',
    underline: 'none',
    children: 'No Underline',
  },
};

const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Open External Site',
  },
};

const InText: Story = {
  render: () => (
    <Typography>
      Read the full <RavenLink href="#">incident report</RavenLink> before
      submitting your review.
    </Typography>
  ),
};

function renderStory(story: { render?: (...args: any[]) => any; args?: any }) {
  if (story.render) {
    return story.render({}, {});
  }
  if (story.args) {
    return <RavenLink {...story.args} />;
  }
  return null;
}

export const Link: Story = {
  tags: ['!dev'],
  name: 'Link',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="Underline">{renderStory(Underline)}</StorybookSection>
      <StorybookSection title="No Underline">{renderStory(NoUnderline)}</StorybookSection>
      <StorybookSection title="External Link">{renderStory(ExternalLink)}</StorybookSection>
      <StorybookSection title="In Text">{renderStory(InText)}</StorybookSection>
    </StorybookPage>
  ),
};

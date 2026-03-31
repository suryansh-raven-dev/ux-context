import MailIcon from '@mui/icons-material/MailRounded';
import Avatar from '@mui/material/Avatar';

import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenBadge } from './RavenBadge';

export default {
  title: 'Components/Data Display/Badge',
  component: RavenBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof RavenBadge>;

type Story = StoryObj<typeof RavenBadge>;

const WithContent: Story = {
  args: {
    badgeContent: 4,
    children: <MailIcon color="action" />,
  },
};

const Dot: Story = {
  args: {
    variant: 'dot',
    children: <MailIcon color="action" />,
  },
};

const MaxValue: Story = {
  args: {
    badgeContent: 150,
    max: 99,
    children: <MailIcon color="action" />,
  },
};

const Invisible: Story = {
  args: {
    badgeContent: 0,
    invisible: true,
    children: <MailIcon color="action" />,
  },
};

const WithAvatar: Story = {
  args: {
    badgeContent: 3,
    overlap: 'circular',
    children: <Avatar sx={{ bgcolor: '#4A148C' }}>JD</Avatar>,
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenBadge {...story.args} />;
  }
  return null;
}

export const Badge: Story = {
  name: 'Badge',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="With Content">{renderStory(WithContent)}</StorybookSection>
      <StorybookSection title="Dot">{renderStory(Dot)}</StorybookSection>
      <StorybookSection title="Max Value">{renderStory(MaxValue)}</StorybookSection>
      <StorybookSection title="Invisible">{renderStory(Invisible)}</StorybookSection>
      <StorybookSection title="With Avatar">{renderStory(WithAvatar)}</StorybookSection>
    </StorybookPage>
  ),
};

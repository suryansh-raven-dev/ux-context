import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenAvatar } from './RavenAvatar';

export default {
  title: 'Components/Data Display/Avatar',
  component: RavenAvatar,
  tags: ['autodocs'],
} satisfies Meta<typeof RavenAvatar>;

type Story = StoryObj<typeof RavenAvatar>;

const Default: Story = {
  args: {
    children: 'JD',
  },
};

const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=raven',
    alt: 'User avatar',
  },
};

const Small: Story = {
  args: {
    children: 'JD',
    size: 'small',
  },
};

const Large: Story = {
  args: {
    children: 'JD',
    size: 'large',
  },
};

const Gradient: Story = {
  args: {
    children: 'JD',
    gradient: true,
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenAvatar {...story.args} />;
  }
  return null;
}

export const Avatar: Story = {
  name: 'Avatar',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="With Image">{renderStory(WithImage)}</StorybookSection>
      <StorybookSection title="Small">{renderStory(Small)}</StorybookSection>
      <StorybookSection title="Large">{renderStory(Large)}</StorybookSection>
      <StorybookSection title="Gradient">{renderStory(Gradient)}</StorybookSection>
    </StorybookPage>
  ),
};

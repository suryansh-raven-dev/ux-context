import type { Meta, StoryObj } from '@storybook/react-vite';

import { RavenAvatar } from './RavenAvatar';

export default {
  title: 'Components/Data Display/Avatar',
  component: RavenAvatar,
  tags: ['autodocs'],
} satisfies Meta<typeof RavenAvatar>;

type Story = StoryObj<typeof RavenAvatar>;

export const Default: Story = {
  args: {
    children: 'JD',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=raven',
    alt: 'User avatar',
  },
};

export const Small: Story = {
  args: {
    children: 'JD',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'JD',
    size: 'large',
  },
};

export const Gradient: Story = {
  args: {
    children: 'JD',
    gradient: true,
  },
};

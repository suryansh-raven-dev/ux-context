import type { Meta, StoryObj } from '@storybook/react';
import { RavenCircularProgress } from './RavenCircularProgress';

const meta: Meta<typeof RavenCircularProgress> = {
  title: 'Feedback/RavenCircularProgress',
  component: RavenCircularProgress,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenCircularProgress>;

export const Indeterminate: Story = {
  args: {},
};

export const Determinate: Story = {
  args: {
    variant: 'determinate',
    value: 75,
  },
};

export const WithLabel: Story = {
  args: {
    variant: 'determinate',
    value: 63,
    showLabel: true,
  },
};

export const Small: Story = {
  args: {
    size: 24,
  },
};

export const Large: Story = {
  args: {
    variant: 'determinate',
    value: 88,
    size: 56,
    showLabel: true,
  },
};

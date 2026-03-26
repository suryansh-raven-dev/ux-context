import type { Meta, StoryObj } from '@storybook/react';
import { RavenLinearProgress } from './RavenLinearProgress';

const meta: Meta<typeof RavenLinearProgress> = {
  title: 'Feedback/RavenLinearProgress',
  component: RavenLinearProgress,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenLinearProgress>;

export const Determinate: Story = {
  args: {
    variant: 'determinate',
    value: 50,
  },
};

export const Indeterminate: Story = {
  args: {
    variant: 'indeterminate',
  },
};

export const WithLabel: Story = {
  args: {
    variant: 'determinate',
    value: 72,
    showLabel: true,
  },
};

export const Buffer: Story = {
  args: {
    variant: 'buffer',
    value: 40,
    valueBuffer: 60,
  },
};

export const FullProgress: Story = {
  args: {
    variant: 'determinate',
    value: 100,
    showLabel: true,
  },
};

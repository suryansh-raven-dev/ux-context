import type { Meta, StoryObj } from '@storybook/react';
import { RavenSwitch } from './RavenSwitch';

const meta: Meta<typeof RavenSwitch> = {
  title: 'Inputs/RavenSwitch',
  component: RavenSwitch,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenSwitch>;

export const Off: Story = {
  args: {
    label: 'Enable notifications',
    checked: false,
  },
};

export const On: Story = {
  args: {
    label: 'Enable notifications',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Feature unavailable',
    checked: false,
    disabled: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { RavenCheckbox } from './RavenCheckbox';

const meta: Meta<typeof RavenCheckbox> = {
  title: 'Inputs/RavenCheckbox',
  component: RavenCheckbox,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenCheckbox>;

export const Unchecked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all items',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Unavailable option',
    checked: false,
    disabled: true,
  },
};

export const GroupExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <RavenCheckbox label="Email notifications" checked />
      <RavenCheckbox label="SMS notifications" checked={false} />
      <RavenCheckbox label="Push notifications" checked />
    </div>
  ),
};

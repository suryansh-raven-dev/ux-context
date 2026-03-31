import type { Meta, StoryObj } from '@storybook/react';

import { StatusStepper } from './StatusStepper';

export default {
  title: 'Components/Data Display/Stepper',
  component: StatusStepper,
} satisfies Meta<typeof StatusStepper>;

type Story = StoryObj<typeof StatusStepper>;

export const Default: Story = {
  args: {
    steps: [
      { label: 'Submitted', completed: true },
      { label: 'Under review', completed: true, active: false },
      { label: 'Action required', active: true },
      { label: 'Closed' },
    ],
  },
};

export const AllComplete: Story = {
  args: {
    steps: [
      { label: 'Draft', completed: true },
      { label: 'Submitted', completed: true },
      { label: 'Closed', completed: true },
    ],
  },
};

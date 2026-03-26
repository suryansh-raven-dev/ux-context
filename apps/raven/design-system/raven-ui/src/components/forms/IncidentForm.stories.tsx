import type { Meta, StoryObj } from '@storybook/react';

import { IncidentForm } from './IncidentForm';

export default {
  title: 'Forms/IncidentForm',
  component: IncidentForm,
} satisfies Meta<typeof IncidentForm>;

type Story = StoryObj<typeof IncidentForm>;

export const Default: Story = {
  render: () => <IncidentForm />,
};

import type { Meta, StoryObj } from '@storybook/react-vite';

import { IncidentForm } from './IncidentForm';

export default {
  title: 'Forms/Incident Form',
  component: IncidentForm,
} satisfies Meta<typeof IncidentForm>;

type Story = StoryObj<typeof IncidentForm>;

export const Default: Story = {
  render: () => <IncidentForm />,
};

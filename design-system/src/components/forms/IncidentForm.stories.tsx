import type { Meta, StoryObj } from '@storybook/react';

import { IncidentForm } from './IncidentForm';

export default {
  title: 'Forms/Incident Form',
  component: IncidentForm,
  parameters: {
    layout: 'fullscreen',
    /** Match Figma file canvas (#F5F5F7) — Storybook backgrounds toolbar */
    backgrounds: { default: 'figma' },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#f5f5f7',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IncidentForm>;

type Story = StoryObj<typeof IncidentForm>;

export const IncidentFormPage: Story = {
  name: 'Incident Form',
  render: () => <IncidentForm />,
};

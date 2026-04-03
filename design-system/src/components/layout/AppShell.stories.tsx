import type { Meta, StoryObj } from '@storybook/react';

import { AppShell } from './AppShell';

export default {
  title: 'Components/Layout/App Shell',
  component: AppShell,
} satisfies Meta<typeof AppShell>;

type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  args: {
    sidebar: (
      <div style={{ padding: 16 }}>
        <strong>Sidebar</strong>
        <p style={{ margin: '8px 0 0', fontSize: 14 }}>Placeholder navigation</p>
      </div>
    ),
    children: (
      <div style={{ padding: 24 }}>
        <h2 style={{ marginTop: 0 }}>Page content</h2>
        <p>Main area inside the bordered container.</p>
      </div>
    ),
  },
};

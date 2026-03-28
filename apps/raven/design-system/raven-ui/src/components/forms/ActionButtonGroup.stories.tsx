import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ActionButtonGroup } from './ActionButtonGroup';

export default {
  title: 'Forms/Action Button Group',
  component: ActionButtonGroup,
} satisfies Meta<typeof ActionButtonGroup>;

type Story = StoryObj<typeof ActionButtonGroup>;

export const Default: Story = {
  render: function ActionButtonGroupStory() {
    const [log, setLog] = useState<string[]>([]);
    return (
      <div>
        <ActionButtonGroup
          onSaveDraft={() => setLog((l) => [...l, 'draft'])}
          onClearAll={() => setLog((l) => [...l, 'clear'])}
          onSubmit={() => setLog((l) => [...l, 'submit'])}
        />
        <p style={{ marginTop: 16 }}>Last actions: {log.join(', ') || '—'}</p>
      </div>
    );
  },
};

export const SubmitDisabled: Story = {
  args: {
    onSaveDraft: () => {},
    onClearAll: () => {},
    onSubmit: () => {},
    submitDisabled: true,
  },
};

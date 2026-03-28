import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ExportButton } from './ExportButton';

export default {
  title: 'Actions/Export Button',
  component: ExportButton,
} satisfies Meta<typeof ExportButton>;

type Story = StoryObj<typeof ExportButton>;

export const Default: Story = {
  render: function ExportButtonStory() {
    const [last, setLast] = useState<string | null>(null);
    return (
      <div>
        <ExportButton onExport={(format) => setLast(format)} />
        <p style={{ marginTop: 16 }}>Last export: {last ?? '—'}</p>
      </div>
    );
  },
};

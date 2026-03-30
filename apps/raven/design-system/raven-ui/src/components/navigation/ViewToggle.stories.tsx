import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ViewList from '@mui/icons-material/ViewListRounded';
import ViewModule from '@mui/icons-material/ViewModuleRounded';

import { ViewToggle } from './ViewToggle';

export default {
  title: 'Navigation/View Toggle',
  component: ViewToggle,
} satisfies Meta<typeof ViewToggle>;

type Story = StoryObj<typeof ViewToggle>;

export const Default: Story = {
  render: function ViewToggleStory() {
    const [value, setValue] = useState('list');
    return (
      <ViewToggle
        options={[
          { label: 'List', value: 'list', icon: <ViewList fontSize="small" /> },
          { label: 'Grid', value: 'grid', icon: <ViewModule fontSize="small" /> },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const TextOnly: Story = {
  render: function ViewToggleTextStory() {
    const [value, setValue] = useState('a');
    return (
      <ViewToggle
        options={[
          { label: 'Summary', value: 'a' },
          { label: 'Details', value: 'b' },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

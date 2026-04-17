import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ViewList from '@mui/icons-material/ViewListRounded';
import ViewModule from '@mui/icons-material/ViewModuleRounded';

import { ViewToggle } from './ViewToggle';

export default {
  title: 'Components/Navigation/Tabs',
  component: ViewToggle,
  parameters: {
    docs: {
      description: {
        component:
          'View Toggle is a 2–4 option variant of the Tabs pattern tuned for switching the rendering of the same content (List / Grid, Chart / Table, Summary / Details). Same segmented-pill visual as the base Tabs.',
      },
    },
  },
} satisfies Meta<typeof ViewToggle>;

type Story = StoryObj<typeof ViewToggle>;

export const ViewToggleIconLabels: Story = {
  name: 'Variant: View Toggle (icon + label)',
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

export const ViewToggleTextOnly: Story = {
  name: 'Variant: View Toggle (text only)',
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

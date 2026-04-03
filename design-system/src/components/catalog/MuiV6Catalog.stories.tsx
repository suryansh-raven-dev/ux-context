import type { Meta, StoryObj } from '@storybook/react';

import { muiV6Categories } from '../../catalog/muiV6Catalog';
import { MuiV6Catalog } from './MuiV6Catalog';

const meta: Meta<typeof MuiV6Catalog> = {
  title: 'Components/All Components',
  component: MuiV6Catalog,
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: ['All', ...muiV6Categories],
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Canonical Material UI v6 catalog aligned to the Raven Near Miss design system. Uses exact MUI component names, links to official docs, and maps each entry to Raven wrappers, theme support, or design guidance.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MuiV6Catalog>;

export const AllComponents: Story = {
  name: 'All Components',
  args: {
    category: 'All',
  },
};

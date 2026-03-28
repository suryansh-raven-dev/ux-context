import type { Meta, StoryObj } from '@storybook/react-vite';

import { MuiV6Catalog } from './MuiV6Catalog';

const meta: Meta<typeof MuiV6Catalog> = {
  title: 'Components/All Components',
  component: MuiV6Catalog,
  tags: ['autodocs'],
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
  args: {
    category: 'All',
  },
};

export const Inputs: Story = {
  args: {
    category: 'Inputs',
  },
};

export const DataDisplay: Story = {
  args: {
    category: 'Data display',
  },
};

export const Feedback: Story = {
  args: {
    category: 'Feedback',
  },
};

export const Surface: Story = {
  args: {
    category: 'Surface',
  },
};

export const Navigation: Story = {
  args: {
    category: 'Navigation',
  },
};

export const Layout: Story = {
  args: {
    category: 'Layout',
  },
};

export const Lab: Story = {
  args: {
    category: 'Lab',
  },
};

export const Utils: Story = {
  args: {
    category: 'Utils',
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';

import { OrgSwitchDropdown } from './OrgSwitchDropdown';

export default {
  title: 'Navigation/Org Switch Dropdown',
  component: OrgSwitchDropdown,
} satisfies Meta<typeof OrgSwitchDropdown>;

type Story = StoryObj<typeof OrgSwitchDropdown>;

export const Default: Story = {
  args: {
    initials: 'AC',
    name: 'Acme Chemicals — River Plant',
    role: 'Site admin',
  },
};

export const CustomGradient: Story = {
  args: {
    initials: 'SL',
    name: 'Near Miss Demo Org',
    role: 'Viewer',
    gradientColors: ['#0cdacc', '#311b92'],
  },
};

export const LongName: Story = {
  args: {
    initials: 'RG',
    name: 'Regional Operations — North America — Division 7',
  },
};

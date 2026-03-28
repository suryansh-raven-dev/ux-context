import InboxIcon from '@mui/icons-material/InboxRounded';
import ReportIcon from '@mui/icons-material/ReportRounded';
import StarIcon from '@mui/icons-material/StarRounded';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { RavenList } from './RavenList';

export default {
  title: 'Components/Data Display/List',
  component: RavenList,
  tags: ['autodocs'],
} satisfies Meta<typeof RavenList>;

type Story = StoryObj<typeof RavenList>;

const basicItems = [
  { id: '1', primary: 'Near-miss report #1042' },
  { id: '2', primary: 'Safety inspection checklist' },
  { id: '3', primary: 'Corrective action plan' },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { id: '1', primary: 'Inbox', icon: <InboxIcon /> },
      { id: '2', primary: 'Starred', icon: <StarIcon /> },
      { id: '3', primary: 'Reports', icon: <ReportIcon /> },
    ],
  },
};

export const WithSecondaryText: Story = {
  args: {
    items: [
      { id: '1', primary: 'Near-miss #1042', secondary: 'Reported by John Doe — Jan 15' },
      { id: '2', primary: 'Near-miss #1043', secondary: 'Reported by Jane Smith — Jan 16' },
      { id: '3', primary: 'Near-miss #1044', secondary: 'Reported by Alex Lee — Jan 17' },
    ],
  },
};

export const Dense: Story = {
  args: {
    items: basicItems,
    dense: true,
  },
};

export const WithSelectedItem: Story = {
  args: {
    items: [
      { id: '1', primary: 'Dashboard' },
      { id: '2', primary: 'Incidents', selected: true },
      { id: '3', primary: 'Settings' },
    ],
  },
};

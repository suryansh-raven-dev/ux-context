import InboxIcon from '@mui/icons-material/InboxRounded';
import ReportIcon from '@mui/icons-material/ReportRounded';
import StarIcon from '@mui/icons-material/StarRounded';

import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenList } from './RavenList';
import type { RavenListProps } from './RavenList';

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

const Default: Story = {
  args: {
    items: basicItems,
  },
};

const WithIcons: Story = {
  args: {
    items: [
      { id: '1', primary: 'Inbox', icon: <InboxIcon /> },
      { id: '2', primary: 'Starred', icon: <StarIcon /> },
      { id: '3', primary: 'Reports', icon: <ReportIcon /> },
    ],
  },
};

const WithSecondaryText: Story = {
  args: {
    items: [
      { id: '1', primary: 'Near-miss #1042', secondary: 'Reported by John Doe — Jan 15' },
      { id: '2', primary: 'Near-miss #1043', secondary: 'Reported by Jane Smith — Jan 16' },
      { id: '3', primary: 'Near-miss #1044', secondary: 'Reported by Alex Lee — Jan 17' },
    ],
  },
};

const Dense: Story = {
  args: {
    items: basicItems,
    dense: true,
  },
};

const WithSelectedItem: Story = {
  args: {
    items: [
      { id: '1', primary: 'Dashboard' },
      { id: '2', primary: 'Incidents', selected: true },
      { id: '3', primary: 'Settings' },
    ],
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenList {...(story.args as RavenListProps)} />;
  }
  return null;
}

export const List: Story = {
  name: 'List',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="With Icons">{renderStory(WithIcons)}</StorybookSection>
      <StorybookSection title="With Secondary Text">{renderStory(WithSecondaryText)}</StorybookSection>
      <StorybookSection title="Dense">{renderStory(Dense)}</StorybookSection>
      <StorybookSection title="With Selected Item">{renderStory(WithSelectedItem)}</StorybookSection>
    </StorybookPage>
  ),
};

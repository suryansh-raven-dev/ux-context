import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { StatusTransitionCard } from './StatusTransitionCard';

export default {
  title: 'Components/Card/Status Transition Card',
  component: StatusTransitionCard,
} satisfies Meta<typeof StatusTransitionCard>;

type Story = StoryObj<typeof StatusTransitionCard>;

const Default: Story = {
  args: {
    fromStatus: 'Pending',
    toStatus: 'In Progress',
  },
};

const LongLabels: Story = {
  args: {
    fromStatus: 'Awaiting site verification',
    toStatus: 'Verified — action plan assigned',
  },
};

function renderStory(story: { render?: (...args: any[]) => any; args?: any }) {
  if (story.render) {
    return story.render({}, {});
  }
  if (story.args) {
    return <StatusTransitionCard {...story.args} />;
  }
  return null;
}

export const StatusTransitionCardPage: Story = {
  name: 'Status Transition Card',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="Long Labels">{renderStory(LongLabels)}</StorybookSection>
    </StorybookPage>
  ),
};

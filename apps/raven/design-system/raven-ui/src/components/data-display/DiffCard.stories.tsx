import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { DiffCard } from './DiffCard';

export default {
  title: 'Data Display/Diff Card',
  component: DiffCard,
} satisfies Meta<typeof DiffCard>;

type Story = StoryObj<typeof DiffCard>;

const Updates: Story = {
  args: {
    type: 'updates',
    changes: [
      { field: 'Severity', oldValue: 'Low', newValue: 'Medium' },
      { field: 'Owner', oldValue: 'Team A', newValue: 'Team B' },
    ],
  },
};

const Added: Story = {
  args: {
    type: 'added',
    changes: [{ field: 'Tag', newValue: 'Confined space' }],
  },
};

const Removed: Story = {
  args: {
    type: 'removed',
    changes: [{ field: 'Legacy ID', oldValue: 'NM-0092' }],
  },
};

function renderStory(story: { render?: (...args: any[]) => any; args?: any }) {
  if (story.render) {
    return story.render({}, {});
  }
  if (story.args) {
    return <DiffCard {...story.args} />;
  }
  return null;
}

export const DiffCardPage: Story = {
  name: 'Diff Card',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Updates">{renderStory(Updates)}</StorybookSection>
      <StorybookSection title="Added">{renderStory(Added)}</StorybookSection>
      <StorybookSection title="Removed">{renderStory(Removed)}</StorybookSection>
    </StorybookPage>
  ),
};

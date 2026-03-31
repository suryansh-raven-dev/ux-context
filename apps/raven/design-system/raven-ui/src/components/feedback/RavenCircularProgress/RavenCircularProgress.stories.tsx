import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenCircularProgress } from './RavenCircularProgress';

const meta: Meta<typeof RavenCircularProgress> = {
  title: 'Components/Feedback',
  component: RavenCircularProgress,
};
export default meta;
type Story = StoryObj<typeof RavenCircularProgress>;

const Indeterminate: Story = {
  args: {},
};

const Determinate: Story = {
  args: {
    variant: 'determinate',
    value: 75,
  },
};

const WithLabel: Story = {
  args: {
    variant: 'determinate',
    value: 63,
    showLabel: true,
  },
};

const Small: Story = {
  args: {
    size: 24,
  },
};

const Large: Story = {
  args: {
    variant: 'determinate',
    value: 88,
    size: 56,
    showLabel: true,
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenCircularProgress {...story.args} />;
  }
  return null;
}

export const CircularProgress: Story = {
  name: 'Circular Progress',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="Indeterminate">{renderStory(Indeterminate)}</StorybookSection>
      <StorybookSection title="Determinate">{renderStory(Determinate)}</StorybookSection>
      <StorybookSection title="With Label">{renderStory(WithLabel)}</StorybookSection>
      <StorybookSection title="Small">{renderStory(Small)}</StorybookSection>
      <StorybookSection title="Large">{renderStory(Large)}</StorybookSection>
    </StorybookPage>
  ),
};

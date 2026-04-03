import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenLinearProgress } from './RavenLinearProgress';

const meta: Meta<typeof RavenLinearProgress> = {
  title: 'Components/Feedback',
  component: RavenLinearProgress,
};
export default meta;
type Story = StoryObj<typeof RavenLinearProgress>;

const Determinate: Story = {
  args: {
    variant: 'determinate',
    value: 50,
  },
};

const Indeterminate: Story = {
  args: {
    variant: 'indeterminate',
  },
};

const WithLabel: Story = {
  args: {
    variant: 'determinate',
    value: 72,
    showLabel: true,
  },
};

const Buffer: Story = {
  args: {
    variant: 'buffer',
    value: 40,
    valueBuffer: 60,
  },
};

const FullProgress: Story = {
  args: {
    variant: 'determinate',
    value: 100,
    showLabel: true,
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenLinearProgress {...story.args} />;
  }
  return null;
}

export const LinearProgress: Story = {
  name: 'Linear Progress',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Determinate">{renderStory(Determinate)}</StorybookSection>
      <StorybookSection title="Indeterminate">{renderStory(Indeterminate)}</StorybookSection>
      <StorybookSection title="With Label">{renderStory(WithLabel)}</StorybookSection>
      <StorybookSection title="Buffer">{renderStory(Buffer)}</StorybookSection>
      <StorybookSection title="Full Progress">{renderStory(FullProgress)}</StorybookSection>
    </StorybookPage>
  ),
};

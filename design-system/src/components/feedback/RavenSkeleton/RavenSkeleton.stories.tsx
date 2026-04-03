import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenSkeleton } from './RavenSkeleton';

const meta: Meta<typeof RavenSkeleton> = {
  title: 'Components/Feedback',
  component: RavenSkeleton,
};
export default meta;
type Story = StoryObj<typeof RavenSkeleton>;

const Text: Story = {
  args: {
    variant: 'text',
    width: 210,
  },
};

const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 210,
    height: 118,
  },
};

const Circular: Story = {
  args: {
    variant: 'circular',
    width: 48,
    height: 48,
  },
};

const Card: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <RavenSkeleton variant="rectangular" width="100%" height={140} />
      <Box sx={{ pt: 1 }}>
        <RavenSkeleton variant="text" width="80%" />
        <RavenSkeleton variant="text" width="60%" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
        <RavenSkeleton variant="circular" width={32} height={32} />
        <RavenSkeleton variant="text" width={100} />
      </Box>
    </Box>
  ),
};

const TableRow: Story = {
  render: () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1, width: '100%' }}>
      <RavenSkeleton variant="circular" width={40} height={40} />
      <Box sx={{ flex: 1 }}>
        <RavenSkeleton variant="text" width="40%" />
        <RavenSkeleton variant="text" width="70%" />
      </Box>
      <RavenSkeleton variant="rectangular" width={80} height={32} sx={{ borderRadius: '50px' }} />
    </Box>
  ),
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenSkeleton {...story.args} />;
  }
  return null;
}

export const Skeleton: Story = {
  name: 'Skeleton',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Text">{renderStory(Text)}</StorybookSection>
      <StorybookSection title="Rectangular">{renderStory(Rectangular)}</StorybookSection>
      <StorybookSection title="Circular">{renderStory(Circular)}</StorybookSection>
      <StorybookSection title="Card">{renderStory(Card)}</StorybookSection>
      <StorybookSection title="Table Row">{renderStory(TableRow)}</StorybookSection>
    </StorybookPage>
  ),
};

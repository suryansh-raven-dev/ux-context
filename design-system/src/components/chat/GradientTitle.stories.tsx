import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { GradientTitle } from './GradientTitle';

export default {
  title: 'Chat/Gradient Title',
  component: GradientTitle,
} satisfies Meta<typeof GradientTitle>;

type Story = StoryObj<typeof GradientTitle>;

export const GradientTitlePage: Story = {
  name: 'Gradient Title',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="Default">
        <GradientTitle>Near-miss assistant</GradientTitle>
      </StorybookSection>
      <StorybookSection title="Long title">
        <Stack spacing={2} sx={{ maxWidth: 560 }}>
          <GradientTitle>Safety insights for your team</GradientTitle>
        </Stack>
      </StorybookSection>
    </StorybookPage>
  ),
};

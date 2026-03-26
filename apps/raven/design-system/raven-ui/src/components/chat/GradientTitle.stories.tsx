import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';

import { GradientTitle } from './GradientTitle';

export default {
  title: 'Chat/GradientTitle',
  component: GradientTitle,
} satisfies Meta<typeof GradientTitle>;

type Story = StoryObj<typeof GradientTitle>;

export const Default: Story = {
  args: {
    children: 'Near-miss assistant',
  },
};

export const LongTitle: Story = {
  render: () => (
    <Stack spacing={2} sx={{ p: 2, maxWidth: 560 }}>
      <GradientTitle>Safety insights for your team</GradientTitle>
    </Stack>
  ),
};

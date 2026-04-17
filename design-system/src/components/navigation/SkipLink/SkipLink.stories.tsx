import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { SkipLink } from './SkipLink';

const meta: Meta<typeof SkipLink> = {
  title: 'Components/Navigation/SkipLink',
  component: SkipLink,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Accessibility primitive. First focusable element in every shell. Hidden off-screen until focused (Tab) — then slides into view and lets keyboard users jump past navigation.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  render: () => (
    <Box sx={{ position: 'relative', minHeight: 240, p: 3 }}>
      <SkipLink />
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Press <strong>Tab</strong> to reveal the Skip Link in the top-left.
      </Typography>
      <Box
        component="nav"
        aria-label="Primary"
        sx={{ p: 2, mb: 2, bgcolor: 'action.hover', borderRadius: 1 }}
      >
        [ Navigation items would live here ]
      </Box>
      <Box component="main" id="main" sx={{ p: 2, border: '1px dashed', borderColor: 'divider' }}>
        <Typography variant="h6">Main content</Typography>
        <Typography variant="body2">Skip-link target.</Typography>
      </Box>
    </Box>
  ),
};

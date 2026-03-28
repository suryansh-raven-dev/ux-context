import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '@mui/material/Box';
import { RavenSkeleton } from './RavenSkeleton';

const meta: Meta<typeof RavenSkeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: RavenSkeleton,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenSkeleton>;

export const Text: Story = {
  args: {
    variant: 'text',
    width: 210,
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 210,
    height: 118,
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 48,
    height: 48,
  },
};

export const Card: Story = {
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

export const TableRow: Story = {
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

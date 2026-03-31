import { lazy, Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LazyIconGallery = lazy(async () => {
  const module = await import('./IconGallery');
  return { default: module.IconGallery };
});

function IconGalleryLoader() {
  return (
    <Suspense
      fallback={
        <Box sx={{ p: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Loading icon catalog
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The icon reference is lazy-loaded so Storybook does not pay the startup cost until this page is opened.
          </Typography>
        </Box>
      }
    >
      <LazyIconGallery />
    </Suspense>
  );
}

const meta: Meta = {
  title: 'Components/Icons',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Complete icon reference for the Raven Design System. The catalog is lazy-loaded and category-gated so Storybook startup stays responsive.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const AllIcons: Story = {
  name: 'All Icons',
  render: () => <IconGalleryLoader />,
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconGallery } from './IconGallery';

const meta: Meta<typeof IconGallery> = {
  title: 'Components/Icons',
  component: IconGallery,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Complete icon reference for the Raven Design System. Uses Material Icons — Rounded theme as the standard. Click any icon to copy its import statement.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconGallery>;

export const AllIcons: Story = {
  name: 'All Icons',
};

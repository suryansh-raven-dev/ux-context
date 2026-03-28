import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorPalette } from './ColorPalette';

const meta: Meta<typeof ColorPalette> = {
  title: 'Components/Colors',
  component: ColorPalette,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Complete color reference for the Raven Design System including brand tokens, semantic colors, backgrounds, borders, gradients, and the full MUI v6 Material Design color palette.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ColorPalette>;

export const AllColors: Story = {
  name: 'All Colors',
};

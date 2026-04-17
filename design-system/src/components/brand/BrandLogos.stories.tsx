import type { Meta, StoryObj } from '@storybook/react';
import { BrandLogos } from './BrandLogos';

const meta: Meta<typeof BrandLogos> = {
  title: 'Brand',
  component: BrandLogos,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'All official brand logos for Raven and Indorama. Each logo is shown on its recommended background with a download button. Click "Download" to save the PNG file.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BrandLogos>;

export const AllLogos: Story = {
  name: 'All Logos',
};

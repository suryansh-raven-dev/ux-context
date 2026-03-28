import type { Meta, StoryObj } from '@storybook/react-vite';

import { RavenButton } from './RavenButton';
import { ButtonsDocumentation } from './ButtonDocsPage';

export default {
  title: 'Components/Inputs/Buttons',
  /** Stable Storybook URL segment: …?path=/story/components-inputs-buttons--buttons */
  id: 'components-inputs-buttons',
  component: RavenButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Raven-styled Button and IconButton wrapping MUI v6. Uses the Near-Miss purple palette, ' +
          'pill radius (50px), Source Sans 3 typography, and uppercase labels. ' +
          'This page mirrors the Material UI Button documentation structure—' +
          'see https://v6.mui.com/material-ui/react-button/ — with Raven-specific guidance and CTA patterns.',
      },
    },
  },
} satisfies Meta<typeof RavenButton>;

type Story = StoryObj<typeof RavenButton>;

/** Single scrollable page: all variants, sizes, icons, loading, and Raven CTAs (see table of contents on the Docs tab). */
export const Buttons: Story = {
  name: 'Buttons',
  render: () => <ButtonsDocumentation />,
};

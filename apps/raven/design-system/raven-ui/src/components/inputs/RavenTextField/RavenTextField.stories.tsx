import type { Meta, StoryObj } from '@storybook/react-vite';

import { RavenTextField } from './RavenTextField';
import { TextFieldDocumentation } from './TextFieldDocsPage';

export default {
  title: 'Components/Inputs/Text Field',
  id: 'components-inputs-text-field',
  component: RavenTextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Raven-styled Text Field wrapping MUI v6 TextField. Uses the Near-Miss purple palette, ' +
          'Source Sans 3 typography, and brand-consistent border radius. ' +
          'This page mirrors the Material UI TextField documentation—' +
          'see https://v6.mui.com/material-ui/react-text-field/ — with Raven-specific patterns.',
      },
    },
  },
} satisfies Meta<typeof RavenTextField>;

type Story = StoryObj<typeof RavenTextField>;

export const TextField: Story = {
  name: 'Text Field',
  render: () => <TextFieldDocumentation />,
};

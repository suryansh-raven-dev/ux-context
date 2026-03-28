import type { Meta, StoryObj } from '@storybook/react-vite';

import { RavenCheckbox } from './RavenCheckbox';
import { CheckboxDocumentation } from './CheckboxDocsPage';

export default {
  title: 'Components/Inputs/Checkbox',
  id: 'components-inputs-checkbox',
  component: RavenCheckbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Raven-styled Checkbox wrapping MUI v6. Uses the Near-Miss purple palette, ' +
          'Source Sans 3 typography, and brand hover states. ' +
          'This page mirrors the Material UI Checkbox documentation—' +
          'see https://v6.mui.com/material-ui/react-checkbox/ — with Raven-specific patterns.',
      },
    },
  },
} satisfies Meta<typeof RavenCheckbox>;

type Story = StoryObj<typeof RavenCheckbox>;

export const Checkbox: Story = {
  name: 'Checkbox',
  render: () => <CheckboxDocumentation />,
};

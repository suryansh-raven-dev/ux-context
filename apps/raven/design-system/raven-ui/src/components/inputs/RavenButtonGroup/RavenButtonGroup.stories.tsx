import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RavenButtonGroup } from './RavenButtonGroup';
import { ButtonGroupDocumentation } from './ButtonGroupDocsPage';

const meta: Meta<typeof RavenButtonGroup> = {
  title: 'Components/Inputs/Button Group',
  id: 'components-inputs-button-group',
  component: RavenButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The visual style of every button in the group.',
      table: {
        type: { summary: '"contained" | "outlined" | "text"' },
        defaultValue: { summary: '"outlined"' },
      },
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      description: 'Controls the size of all buttons in the group.',
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      description: 'Palette color applied to the group.',
      table: {
        type: { summary: '"primary" | "secondary" | "success" | "error" | "warning" | "info"' },
        defaultValue: { summary: '"primary"' },
      },
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    orientation: {
      description: 'Stack buttons horizontally or vertically.',
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    disabled: {
      description: 'If `true`, all buttons in the group are disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    fullWidth: {
      description: 'If `true`, the group takes the full width of its container.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    disableElevation: {
      description: 'If `true`, no box-shadow is applied to contained buttons.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    disableRipple: {
      description: 'If `true`, the ripple effect on click is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    buttons: {
      description: 'Array of button config objects rendered inside the group.',
      table: {
        type: { summary: 'Array<{ label: string; onClick?: () => void; disabled?: boolean }>' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Raven-styled ButtonGroup component wrapping MUI v6 ButtonGroup with Near-Miss purple palette and brand tokens.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof RavenButtonGroup>;

export const ButtonGroup: Story = {
  name: 'Button Group',
  render: () => <ButtonGroupDocumentation />,
  parameters: { layout: 'fullscreen' },
};

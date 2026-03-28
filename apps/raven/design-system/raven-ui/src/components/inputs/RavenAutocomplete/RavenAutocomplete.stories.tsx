import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RavenAutocomplete } from './RavenAutocomplete';
import { AutocompleteDocumentation } from './AutocompleteDocsPage';
import './RavenAutocomplete.css';

const meta: Meta<typeof RavenAutocomplete> = {
  title: 'Components/Inputs/Autocomplete',
  id: 'components-inputs-autocomplete',
  component: RavenAutocomplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A text input enhanced by a panel of suggested options, built on MUI v6 Autocomplete with full Raven styling.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof RavenAutocomplete>;

export const Autocomplete: Story = {
  render: () => <AutocompleteDocumentation />,
  parameters: { layout: 'fullscreen' },
};

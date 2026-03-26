import type { Meta, StoryObj } from '@storybook/react';
import { RavenAutocomplete } from './RavenAutocomplete';

const meta: Meta<typeof RavenAutocomplete> = {
  title: 'Inputs/RavenAutocomplete',
  component: RavenAutocomplete,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenAutocomplete>;

const categories = [
  'Equipment Failure',
  'Human Error',
  'Process Deviation',
  'Environmental',
  'Near Miss',
  'Safety Observation',
  'Chemical Spill',
  'Slip / Trip / Fall',
];

export const Default: Story = {
  args: {
    options: categories,
    placeholder: 'Search categories…',
  },
};

export const WithLabel: Story = {
  args: {
    options: categories,
    label: 'Incident Category',
    placeholder: 'Start typing…',
  },
};

export const Multiple: Story = {
  args: {
    options: categories,
    label: 'Tags',
    placeholder: 'Select tags…',
    multiple: true,
  },
};

export const Disabled: Story = {
  args: {
    options: categories,
    label: 'Category',
    value: 'Near Miss',
    disabled: true,
  },
};

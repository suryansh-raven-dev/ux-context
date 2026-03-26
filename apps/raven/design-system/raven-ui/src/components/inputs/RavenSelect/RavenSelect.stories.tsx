import type { Meta, StoryObj } from '@storybook/react';
import { RavenSelect } from './RavenSelect';

const meta: Meta<typeof RavenSelect> = {
  title: 'Inputs/RavenSelect',
  component: RavenSelect,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenSelect>;

const basicOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

export const Default: Story = {
  args: {
    options: basicOptions,
    defaultValue: 'medium',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Priority',
    options: basicOptions,
    defaultValue: 'medium',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Severity',
    helperText: 'Select the severity level.',
    options: basicOptions,
    defaultValue: 'low',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Priority',
    options: basicOptions,
    defaultValue: 'high',
    disabled: true,
  },
};

export const WithManyOptions: Story = {
  args: {
    label: 'Department',
    options: [
      { value: 'eng', label: 'Engineering' },
      { value: 'design', label: 'Design' },
      { value: 'product', label: 'Product' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'sales', label: 'Sales' },
      { value: 'hr', label: 'Human Resources' },
      { value: 'finance', label: 'Finance' },
      { value: 'legal', label: 'Legal' },
      { value: 'ops', label: 'Operations' },
      { value: 'support', label: 'Support' },
    ],
    defaultValue: 'eng',
  },
};

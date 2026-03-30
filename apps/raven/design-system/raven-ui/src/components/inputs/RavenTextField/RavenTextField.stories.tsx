import type { Meta, StoryObj } from '@storybook/react';
import { RavenTextField } from './RavenTextField';

const meta: Meta<typeof RavenTextField> = {
  title: 'Components/Inputs/Text Field',
  component: RavenTextField,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenTextField>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text…',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Jane Doe',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    helperText: 'We will never share your email.',
    placeholder: 'jane@example.com',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    error: true,
    helperText: 'Please enter a valid email address.',
    value: 'not-an-email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'Cannot edit',
    disabled: true,
  },
};

export const Multiline: Story = {
  args: {
    label: 'Description',
    multiline: true,
    rows: 4,
    placeholder: 'Enter a detailed description…',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

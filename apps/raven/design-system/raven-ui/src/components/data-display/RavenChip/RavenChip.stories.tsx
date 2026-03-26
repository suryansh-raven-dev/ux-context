import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import type { Meta, StoryObj } from '@storybook/react';

import { RavenChip } from './RavenChip';

export default {
  title: 'Data display/RavenChip',
  component: RavenChip,
  tags: ['autodocs'],
} satisfies Meta<typeof RavenChip>;

type Story = StoryObj<typeof RavenChip>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
};

export const Success: Story = {
  args: {
    label: 'Resolved',
    colorVariant: 'success',
  },
};

export const Error: Story = {
  args: {
    label: 'Critical',
    colorVariant: 'error',
  },
};

export const Warning: Story = {
  args: {
    label: 'Pending review',
    colorVariant: 'warning',
  },
};

export const Info: Story = {
  args: {
    label: 'In progress',
    colorVariant: 'info',
  },
};

export const Primary: Story = {
  args: {
    label: 'Near miss',
    colorVariant: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined chip',
    colorVariant: 'primary',
    chipVariant: 'outlined',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Verified',
    colorVariant: 'success',
    icon: <CheckCircleIcon />,
  },
};

export const Deletable: Story = {
  args: {
    label: 'Removable',
    colorVariant: 'primary',
    onDelete: () => {},
  },
};

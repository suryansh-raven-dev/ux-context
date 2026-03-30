import React from 'react';

import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopyRounded';
import DeleteIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/EditRounded';

import type { Meta, StoryObj } from '@storybook/react';

import { RavenMenu } from './RavenMenu';

const meta: Meta<typeof RavenMenu> = {
  title: 'Components/Navigation/Menu',
  component: RavenMenu,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenMenu>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outlined">Open Menu</Button>,
    options: [
      { id: 'edit', label: 'Edit' },
      { id: 'duplicate', label: 'Duplicate' },
      { id: 'delete', label: 'Delete' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    trigger: <Button variant="outlined">Actions</Button>,
    options: [
      { id: 'edit', label: 'Edit', icon: <EditIcon fontSize="small" /> },
      { id: 'copy', label: 'Duplicate', icon: <ContentCopyIcon fontSize="small" /> },
      { id: 'delete', label: 'Delete', icon: <DeleteIcon fontSize="small" /> },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    trigger: <Button variant="outlined">Options</Button>,
    options: [
      { id: 'edit', label: 'Edit' },
      { id: 'archive', label: 'Archive', disabled: true },
      { id: 'delete', label: 'Delete' },
    ],
  },
};

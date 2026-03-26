import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { RavenPagination } from './RavenPagination';

const meta: Meta<typeof RavenPagination> = {
  title: 'Navigation/RavenPagination',
  component: RavenPagination,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenPagination>;

export const Default: Story = {
  args: {
    count: 10,
  },
};

export const WithBoundary: Story = {
  args: {
    count: 20,
    boundaryCount: 2,
    siblingCount: 1,
  },
};

export const Rounded: Story = {
  args: {
    count: 10,
    shape: 'rounded',
  },
};

export const Small: Story = {
  args: {
    count: 10,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    count: 10,
    size: 'large',
  },
};

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <RavenPagination
        count={10}
        page={page}
        onChange={(_, value) => setPage(value)}
      />
    );
  },
};

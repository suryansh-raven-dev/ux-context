import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenPagination } from './RavenPagination';

const meta: Meta<typeof RavenPagination> = {
  title: 'Components/Navigation/Pagination',
  component: RavenPagination,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenPagination>;

const Default: Story = {
  args: {
    count: 10,
  },
};

const WithBoundary: Story = {
  args: {
    count: 20,
    boundaryCount: 2,
    siblingCount: 1,
  },
};

const Rounded: Story = {
  args: {
    count: 10,
    shape: 'rounded',
  },
};

const Small: Story = {
  args: {
    count: 10,
    size: 'small',
  },
};

const Large: Story = {
  args: {
    count: 10,
    size: 'large',
  },
};

const Controlled: Story = {
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

function renderStory(story: { render?: (...args: any[]) => any; args?: any }) {
  if (story.render) {
    return story.render({}, {});
  }
  if (story.args) {
    return <RavenPagination {...story.args} />;
  }
  return null;
}

export const Pagination: Story = {
  tags: ['!dev'],
  name: 'Pagination',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="With Boundary">{renderStory(WithBoundary)}</StorybookSection>
      <StorybookSection title="Rounded">{renderStory(Rounded)}</StorybookSection>
      <StorybookSection title="Small">{renderStory(Small)}</StorybookSection>
      <StorybookSection title="Large">{renderStory(Large)}</StorybookSection>
      <StorybookSection title="Controlled">{renderStory(Controlled)}</StorybookSection>
    </StorybookPage>
  ),
};

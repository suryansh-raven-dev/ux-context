import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { PageHeader } from './PageHeader';
import type { PageHeaderProps } from './PageHeader';

export default {
  title: 'Layout/Page Header',
  component: PageHeader,
} satisfies Meta<typeof PageHeader>;

type Story = StoryObj<typeof PageHeader>;

const SimpleTitle: Story = {
  args: {
    title: 'Incidents',
  },
};

const WithSubtitle: Story = {
  args: {
    title: 'Investigation details',
    subtitle: 'Case #1042 · Opened Mar 12, 2026',
  },
};

const WithBackButton: Story = {
  args: {
    title: 'Edit report',
    subtitle: 'Autosaved',
    onBack: () => {
      // eslint-disable-next-line no-console
      console.log('back');
    },
  },
};

const WithActions: Story = {
  args: {
    title: 'Reports',
    subtitle: 'Last 30 days',
    actions: (
      <>
        <Button variant="outlined" size="small">
          Export
        </Button>
        <Button variant="contained" size="small">
          New report
        </Button>
      </>
    ),
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <PageHeader {...(story.args as PageHeaderProps)} />;
  }
  return null;
}

export const PageHeaderPage: Story = {
  name: 'Page Header',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={960}>
      <StorybookSection title="Simple Title">{renderStory(SimpleTitle)}</StorybookSection>
      <StorybookSection title="With Subtitle">{renderStory(WithSubtitle)}</StorybookSection>
      <StorybookSection title="With Back Button">{renderStory(WithBackButton)}</StorybookSection>
      <StorybookSection title="With Actions">{renderStory(WithActions)}</StorybookSection>
    </StorybookPage>
  ),
};

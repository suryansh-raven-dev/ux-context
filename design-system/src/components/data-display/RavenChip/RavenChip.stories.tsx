import CheckCircleIcon from '@mui/icons-material/CheckCircleRounded';

import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenChip } from './RavenChip';

export default {
  title: 'Components/Data Display/Chip',
  component: RavenChip,
  tags: ['autodocs'],
} satisfies Meta<typeof RavenChip>;

type Story = StoryObj<typeof RavenChip>;

const Default: Story = {
  args: {
    label: 'Default',
  },
};

const Success: Story = {
  args: {
    label: 'Resolved',
    colorVariant: 'success',
  },
};

const Error: Story = {
  args: {
    label: 'Critical',
    colorVariant: 'error',
  },
};

const Warning: Story = {
  args: {
    label: 'Pending review',
    colorVariant: 'warning',
  },
};

const Info: Story = {
  args: {
    label: 'In progress',
    colorVariant: 'info',
  },
};

const Primary: Story = {
  args: {
    label: 'Near miss',
    colorVariant: 'primary',
  },
};

const Outlined: Story = {
  args: {
    label: 'Outlined chip',
    colorVariant: 'primary',
    chipVariant: 'outlined',
  },
};

const WithIcon: Story = {
  args: {
    label: 'Verified',
    colorVariant: 'success',
    icon: <CheckCircleIcon />,
  },
};

const Deletable: Story = {
  args: {
    label: 'Removable',
    colorVariant: 'primary',
    onDelete: () => {},
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenChip {...story.args} />;
  }
  return null;
}

export const Chip: Story = {
  tags: ['!dev'],
  name: 'Chip',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="Success">{renderStory(Success)}</StorybookSection>
      <StorybookSection title="Error">{renderStory(Error)}</StorybookSection>
      <StorybookSection title="Warning">{renderStory(Warning)}</StorybookSection>
      <StorybookSection title="Info">{renderStory(Info)}</StorybookSection>
      <StorybookSection title="Primary">{renderStory(Primary)}</StorybookSection>
      <StorybookSection title="Outlined">{renderStory(Outlined)}</StorybookSection>
      <StorybookSection title="With Icon">{renderStory(WithIcon)}</StorybookSection>
      <StorybookSection title="Deletable">{renderStory(Deletable)}</StorybookSection>
    </StorybookPage>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenAlert } from './RavenAlert';

const meta: Meta<typeof RavenAlert> = {
  title: 'Components/Feedback',
  component: RavenAlert,
};
export default meta;
type Story = StoryObj<typeof RavenAlert>;

const Success: Story = {
  args: {
    severity: 'success',
    children: 'Incident report submitted successfully.',
  },
};

const Error: Story = {
  args: {
    severity: 'error',
    children: 'Failed to save incident — please try again.',
  },
};

const Warning: Story = {
  args: {
    severity: 'warning',
    children: 'This incident has not been reviewed in over 30 days.',
  },
};

const Info: Story = {
  args: {
    severity: 'info',
    children: 'A new analysis workflow is available for this report.',
  },
};

const WithTitle: Story = {
  args: {
    severity: 'info',
    title: 'Review Required',
    children: 'Please review the updated risk assessment before closing this incident.',
  },
};

const WithAction: Story = {
  args: {
    severity: 'warning',
    title: 'Pending Approval',
    children: 'This corrective action is waiting for manager sign-off.',
    action: <Button color="inherit" size="small">Approve</Button>,
  },
};

const Outlined: Story = {
  args: {
    severity: 'success',
    variant: 'outlined',
    children: 'All corrective actions have been completed.',
  },
};

const Filled: Story = {
  args: {
    severity: 'error',
    variant: 'filled',
    children: 'Critical safety threshold exceeded — immediate action required.',
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenAlert {...story.args} />;
  }
  return null;
}

export const Alert: Story = {
  name: 'Alert',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Success">{renderStory(Success)}</StorybookSection>
      <StorybookSection title="Error">{renderStory(Error)}</StorybookSection>
      <StorybookSection title="Warning">{renderStory(Warning)}</StorybookSection>
      <StorybookSection title="Info">{renderStory(Info)}</StorybookSection>
      <StorybookSection title="With Title">{renderStory(WithTitle)}</StorybookSection>
      <StorybookSection title="With Action">{renderStory(WithAction)}</StorybookSection>
      <StorybookSection title="Outlined">{renderStory(Outlined)}</StorybookSection>
      <StorybookSection title="Filled">{renderStory(Filled)}</StorybookSection>
    </StorybookPage>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenTextField } from './RavenTextField';

const meta: Meta<typeof RavenTextField> = {
  title: 'Components/Inputs/Text Field',
  component: RavenTextField,
  tags: ['autodocs'],
  args: {
    fullWidth: true,
  },
};
export default meta;
type Story = StoryObj<typeof RavenTextField>;

const Default: Story = {
  args: {
    placeholder: 'Enter text…',
  },
};

const WithLabel: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Jane Doe',
  },
};

const WithHelperText: Story = {
  args: {
    label: 'Email',
    helperText: 'We will never share your email.',
    placeholder: 'jane@example.com',
  },
};

const WithError: Story = {
  args: {
    label: 'Email',
    error: true,
    helperText: 'Please enter a valid email address.',
    value: 'not-an-email',
  },
};

const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'Cannot edit',
    disabled: true,
  },
};

const Multiline: Story = {
  args: {
    label: 'Description',
    multiline: true,
    rows: 4,
    placeholder: 'Enter a detailed description…',
  },
};

const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

function renderStory(story: { render?: (...args: any[]) => any; args?: any }) {
  if (story.render) {
    return story.render({}, {});
  }
  if (story.args) {
    return <RavenTextField fullWidth {...story.args} />;
  }
  return null;
}

export const TextField: Story = {
  name: 'Text Field',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={360}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="With Label">{renderStory(WithLabel)}</StorybookSection>
      <StorybookSection title="With Helper Text">{renderStory(WithHelperText)}</StorybookSection>
      <StorybookSection title="With Error">{renderStory(WithError)}</StorybookSection>
      <StorybookSection title="Disabled">{renderStory(Disabled)}</StorybookSection>
      <StorybookSection title="Multiline">{renderStory(Multiline)}</StorybookSection>
      <StorybookSection title="Password">{renderStory(Password)}</StorybookSection>
    </StorybookPage>
  ),
};

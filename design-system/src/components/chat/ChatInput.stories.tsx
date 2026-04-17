import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { ChatInput } from './ChatInput';
import type { ChatInputProps } from './ChatInput';

export default {
  title: 'Components/Chat/Chat Input',
  component: ChatInput,
} satisfies Meta<typeof ChatInput>;

type Story = StoryObj<typeof ChatInput>;

function ChatInputStateful(args: { placeholder?: string; multiline?: boolean }) {
  const [value, setValue] = useState('');
  return (
    <Box sx={{ maxWidth: 480, p: 2 }}>
      <ChatInput
        value={value}
        onChange={setValue}
        onSend={() => {
          // eslint-disable-next-line no-console
          console.log('send', value);
        }}
        placeholder={args.placeholder}
        multiline={args.multiline}
      />
    </Box>
  );
}

const SingleLine: Story = {
  render: () => <ChatInputStateful />,
};

const Multiline: Story = {
  render: () => <ChatInputStateful multiline />,
};

const CustomPlaceholder: Story = {
  render: () => <ChatInputStateful placeholder="Ask about near-miss reports…" />,
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <ChatInput {...(story.args as ChatInputProps)} />;
  }
  return null;
}

export const ChatInputPage: Story = {
  name: 'Chat Input',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={540}>
      <StorybookSection title="Single Line">{renderStory(SingleLine)}</StorybookSection>
      <StorybookSection title="Multiline">{renderStory(Multiline)}</StorybookSection>
      <StorybookSection title="Custom Placeholder">{renderStory(CustomPlaceholder)}</StorybookSection>
    </StorybookPage>
  ),
};

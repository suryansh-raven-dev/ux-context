import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { ChatBubble } from './ChatBubble';
import { ChatInput } from './ChatInput';
import { GradientTitle } from './GradientTitle';

export default {
  title: 'Components/Chat',
} satisfies Meta;

type Story = StoryObj;

function ChatInputStateful({ placeholder, multiline }: { placeholder?: string; multiline?: boolean }) {
  const [value, setValue] = useState('');
  return (
    <Box sx={{ maxWidth: 480 }}>
      <ChatInput
        value={value}
        onChange={setValue}
        onSend={() => console.log('send', value)}
        placeholder={placeholder}
        multiline={multiline}
      />
    </Box>
  );
}

export const ChatPage: Story = {
  name: 'Chat',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="Gradient Title — Default">
        <GradientTitle>Near-miss assistant</GradientTitle>
      </StorybookSection>
      <StorybookSection title="Gradient Title — Long">
        <Stack spacing={2} sx={{ maxWidth: 560 }}>
          <GradientTitle>Safety insights for your team</GradientTitle>
        </Stack>
      </StorybookSection>

      <StorybookSection title="Chat Bubble — User and AI">
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <ChatBubble variant="user" timestamp="10:42 AM">
            I noticed a forklift crossing without honking near Bay 3.
          </ChatBubble>
          <ChatBubble variant="ai" timestamp="10:42 AM">
            Thanks — that sounds like a near-miss. Would you classify severity as low, medium, or high?
          </ChatBubble>
        </Stack>
      </StorybookSection>
      <StorybookSection title="Chat Bubble — User only">
        <Stack sx={{ maxWidth: 400 }}>
          <ChatBubble variant="user" timestamp="9:15 AM">
            Short confirmation.
          </ChatBubble>
        </Stack>
      </StorybookSection>
      <StorybookSection title="Chat Bubble — AI only">
        <Stack sx={{ maxWidth: 400 }}>
          <ChatBubble variant="ai" timestamp="9:15 AM">
            Here is a longer assistant reply that wraps within the bubble layout for the story.
          </ChatBubble>
        </Stack>
      </StorybookSection>

      <StorybookSection title="Chat Input — Single line">
        <ChatInputStateful />
      </StorybookSection>
      <StorybookSection title="Chat Input — Multiline">
        <ChatInputStateful multiline />
      </StorybookSection>
      <StorybookSection title="Chat Input — Custom placeholder">
        <ChatInputStateful placeholder="Ask about near-miss reports…" />
      </StorybookSection>
    </StorybookPage>
  ),
};

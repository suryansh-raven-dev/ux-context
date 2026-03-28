import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';

import { ChatBubble } from './ChatBubble';

export default {
  title: 'Chat/Chat Bubble',
  component: ChatBubble,
} satisfies Meta<typeof ChatBubble>;

type Story = StoryObj<typeof ChatBubble>;

export const UserAndAi: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 400, p: 2 }}>
      <ChatBubble variant="user" timestamp="10:42 AM">
        I noticed a forklift crossing without honking near Bay 3.
      </ChatBubble>
      <ChatBubble variant="ai" timestamp="10:42 AM">
        Thanks — that sounds like a near-miss. Would you classify severity as low, medium, or high?
      </ChatBubble>
    </Stack>
  ),
};

export const UserOnly: Story = {
  args: {
    variant: 'user',
    timestamp: '9:15 AM',
    children: 'Short confirmation.',
  },
};

export const AiOnly: Story = {
  args: {
    variant: 'ai',
    timestamp: '9:15 AM',
    children: 'Here is a longer assistant reply that wraps within the bubble layout for the story.',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { ChatBubble } from './ChatBubble';
import type { ChatBubbleProps } from './ChatBubble';

export default {
  title: 'Chat/Chat Bubble',
  component: ChatBubble,
} satisfies Meta<typeof ChatBubble>;

type Story = StoryObj<typeof ChatBubble>;

const UserAndAi: Story = {
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

const UserOnly: Story = {
  args: {
    variant: 'user',
    timestamp: '9:15 AM',
    children: 'Short confirmation.',
  },
};

const AiOnly: Story = {
  args: {
    variant: 'ai',
    timestamp: '9:15 AM',
    children: 'Here is a longer assistant reply that wraps within the bubble layout for the story.',
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <ChatBubble {...(story.args as ChatBubbleProps)} />;
  }
  return null;
}

export const ChatBubblePage: Story = {
  name: 'Chat Bubble',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={520}>
      <StorybookSection title="User and AI">{renderStory(UserAndAi)}</StorybookSection>
      <StorybookSection title="User Only">{renderStory(UserOnly)}</StorybookSection>
      <StorybookSection title="AI Only">{renderStory(AiOnly)}</StorybookSection>
    </StorybookPage>
  ),
};

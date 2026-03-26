import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

import { ChatInput } from './ChatInput';

export default {
  title: 'Chat/ChatInput',
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

export const SingleLine: Story = {
  render: () => <ChatInputStateful />,
};

export const Multiline: Story = {
  render: () => <ChatInputStateful multiline />,
};

export const CustomPlaceholder: Story = {
  render: () => <ChatInputStateful placeholder="Ask about near-miss reports…" />,
};

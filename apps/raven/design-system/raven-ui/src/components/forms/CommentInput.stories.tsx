import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { CommentInput } from './CommentInput';

export default {
  title: 'Forms/Comment Input',
  component: CommentInput,
} satisfies Meta<typeof CommentInput>;

type Story = StoryObj<typeof CommentInput>;

export const Default: Story = {
  render: function CommentInputStory() {
    const [value, setValue] = useState('');
    return (
      <CommentInput
        value={value}
        onChange={setValue}
        onSubmit={() => {}}
      />
    );
  },
};

export const WithText: Story = {
  render: function CommentInputWithTextStory() {
    const [value, setValue] = useState('Followed lockout/tagout and notified supervisor.');
    return <CommentInput value={value} onChange={setValue} onSubmit={() => {}} />;
  },
};

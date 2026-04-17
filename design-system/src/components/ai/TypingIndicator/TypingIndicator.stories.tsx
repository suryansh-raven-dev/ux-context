import type { Meta, StoryObj } from '@storybook/react';
import { TypingIndicator } from './TypingIndicator';

const meta: Meta<typeof TypingIndicator> = {
  title: 'Components/AI/TypingIndicator',
  component: TypingIndicator,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof TypingIndicator>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { label: 'Raven is thinking' },
};

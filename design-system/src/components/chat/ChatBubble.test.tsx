import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { ChatBubble } from './ChatBubble';

describe('ChatBubble', () => {
  it('renders content and timestamp for user variant', () => {
    render(
      <ThemeProvider theme={ravenNearMissTheme}>
        <ChatBubble variant="user" timestamp="10:00 AM">
          Hello
        </ChatBubble>
      </ThemeProvider>
    );

    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('10:00 AM')).toBeInTheDocument();
    expect(screen.getByRole('log', { name: 'User message' })).toBeInTheDocument();
    expect(screen.getByRole('log', { name: 'User message' })).toHaveClass('raven-chat-bubble--user');
  });

  it('uses assistant label for ai variant', () => {
    render(
      <ThemeProvider theme={ravenNearMissTheme}>
        <ChatBubble variant="ai" timestamp="10:01 AM">
          Reply
        </ChatBubble>
      </ThemeProvider>
    );

    expect(screen.getByRole('log', { name: 'Assistant message' })).toBeInTheDocument();
    expect(screen.getByRole('log', { name: 'Assistant message' })).toHaveClass('raven-chat-bubble--ai');
  });
});

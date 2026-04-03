import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './ChatBubble.css';

export type ChatBubbleProps = {
  variant: 'user' | 'ai';
  children: ReactNode;
  timestamp: string;
};

export function ChatBubble({ variant, children, timestamp }: ChatBubbleProps) {
  const ariaLabel = variant === 'user' ? 'User message' : 'Assistant message';

  return (
    <Box
      role="log"
      aria-label={ariaLabel}
      className={`raven-chat-bubble raven-chat-bubble--${variant}`}
    >
      <Typography variant="body1" component="div" className="raven-chat-bubble__content">
        {children}
      </Typography>
      <Typography variant="caption" color="text.secondary" component="div" className="raven-chat-bubble__timestamp">
        {timestamp}
      </Typography>
    </Box>
  );
}

import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

export type ChatBubbleProps = {
  variant: 'user' | 'ai';
  children: ReactNode;
  timestamp: string;
};

const rootSx = {
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  p: '12px 16px',
  boxSizing: 'border-box',
  width: 'fit-content',
};

const userSx = {
  ...rootSx,
  ml: 'auto',
  maxWidth: 300,
  borderRadius: '20px 20px 2px 20px',
  backgroundColor: (theme: { palette: { primary: { main: string } } }) =>
    alpha(theme.palette.primary.main, 0.12),
  border: '1px solid',
  borderColor: (theme: { palette: { primary: { main: string } } }) =>
    alpha(theme.palette.primary.main, 0.24),
  color: 'text.primary',
};

const aiSx = {
  ...rootSx,
  mr: 'auto',
  borderRadius: '20px 20px 20px 2px',
  backgroundColor: 'action.hover',
  border: '1px solid',
  borderColor: 'divider',
  color: 'text.primary',
};

const contentSx = { wordBreak: 'break-word', color: 'text.primary' };

const timestampSx = { mt: 0.5, alignSelf: 'flex-end', textAlign: 'right', width: '100%' };

export function ChatBubble({ variant, children, timestamp }: ChatBubbleProps) {
  const ariaLabel = variant === 'user' ? 'User message' : 'Assistant message';

  return (
    <Box
      role="log"
      aria-label={ariaLabel}
      className={`raven-chat-bubble raven-chat-bubble--${variant}`}
      sx={variant === 'user' ? userSx : aiSx}
    >
      <Typography variant="body1" component="div" className="raven-chat-bubble__content" sx={contentSx}>
        {children}
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        component="div"
        className="raven-chat-bubble__timestamp"
        sx={timestampSx}
      >
        {timestamp}
      </Typography>
    </Box>
  );
}

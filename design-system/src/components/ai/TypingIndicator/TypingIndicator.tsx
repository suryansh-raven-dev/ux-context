import Box from '@mui/material/Box';
import { keyframes } from '@mui/system';

const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
  40% { transform: translateY(-4px); opacity: 1; }
`;

export type TypingIndicatorProps = {
  label?: string;
};

export function TypingIndicator({ label = 'Assistant is typing' }: TypingIndicatorProps) {
  return (
    <Box
      role="status"
      aria-live="polite"
      aria-label={label}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        px: 1.5,
        py: 1,
        borderRadius: '20px 20px 20px 2px',
        bgcolor: 'action.hover',
        border: '1px solid',
        borderColor: 'divider',
        '@media (prefers-reduced-motion: reduce)': {
          '& > span': { animation: 'none', opacity: 0.6 },
        },
      }}
    >
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          component="span"
          aria-hidden
          sx={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            bgcolor: 'text.secondary',
            animation: `${bounce} 1.2s infinite ease-in-out`,
            animationDelay: `${i * 0.16}s`,
          }}
        />
      ))}
    </Box>
  );
}

import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  compact?: boolean;
};

export function EmptyState({ icon, title, description, action, compact = false }: EmptyStateProps) {
  return (
    <Stack
      role="status"
      aria-live="polite"
      alignItems="center"
      justifyContent="center"
      spacing={compact ? 1 : 2}
      sx={{
        textAlign: 'center',
        py: compact ? 3 : 6,
        px: 3,
        color: 'text.secondary',
      }}
    >
      {icon != null && (
        <Box
          aria-hidden
          sx={{
            color: 'text.disabled',
            fontSize: compact ? 32 : 48,
            display: 'flex',
            '& svg': { fontSize: 'inherit' },
          }}
        >
          {icon}
        </Box>
      )}
      <Typography variant={compact ? 'subtitle1' : 'h6'} sx={{ fontWeight: 600, color: 'text.primary' }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" sx={{ maxWidth: 420 }}>
          {description}
        </Typography>
      )}
      {action && <Box sx={{ pt: 1 }}>{action}</Box>}
    </Stack>
  );
}

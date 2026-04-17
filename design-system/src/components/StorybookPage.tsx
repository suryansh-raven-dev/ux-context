import type { ReactNode } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type StorybookPageProps = {
  children: ReactNode;
  maxWidth?: number | string;
  backgroundColor?: string;
};

type StorybookSectionProps = {
  title: string;
  description?: ReactNode;
  children: ReactNode;
};

export function StorybookPage({
  children,
  maxWidth = 760,
  backgroundColor,
}: StorybookPageProps) {
  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: backgroundColor ?? 'background.dark',
      }}
    >
      <Stack spacing={2.5} sx={{ maxWidth }}>
        {children}
      </Stack>
    </Box>
  );
}

export function StorybookSection({ title, description, children }: StorybookSectionProps) {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '12px',
        backgroundColor: 'background.default',
        p: 2.5,
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main', mb: description ? 0.75 : 1.5 }}>
        {title}
      </Typography>
      {description ? (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          {description}
        </Typography>
      ) : null}
      {children}
    </Box>
  );
}

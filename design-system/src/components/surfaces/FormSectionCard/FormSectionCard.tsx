import type { ReactElement, ReactNode } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export type FormSectionCardProps = {
  icon: ReactElement;
  title: string;
  children: ReactNode;
};

const rootSx = {
  backgroundColor: 'background.default',
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0px 2px 8px 3px rgba(63, 81, 181, 0.04)',
};

const headerSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  height: 52,
  px: 2.5,
  backgroundColor: 'background.default',
  borderBottom: '1px solid',
  borderColor: 'divider',
};

const iconSx = {
  display: 'flex',
  alignItems: 'center',
  color: 'primary.main',
  '& .MuiSvgIcon-root': { fontSize: 24 },
};

const titleSx = {
  fontWeight: 600,
  color: 'primary.main',
};

const contentSx = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  p: 3,
};

export function FormSectionCard({ icon, title, children }: FormSectionCardProps) {
  return (
    <Box className="raven-form-section-card" sx={rootSx}>
      <Box className="raven-form-section-card__header" sx={headerSx}>
        <Box component="span" className="raven-form-section-card__icon" sx={iconSx}>{icon}</Box>
        <Typography variant="body1" className="raven-form-section-card__title" sx={titleSx}>
          {title}
        </Typography>
      </Box>
      <Box className="raven-form-section-card__content" sx={contentSx}>
        {children}
      </Box>
    </Box>
  );
}

import type { ReactNode } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import './PageHeader.css';

export type PageHeaderProps = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  actions?: ReactNode;
};

/**
 * Sticky page header with optional back control and trailing actions.
 */
export function PageHeader({ title, subtitle, onBack, actions }: PageHeaderProps) {
  return (
    <Box component="header" role="banner" className="raven-page-header">
      <Box className="raven-page-header__title-group">
        {onBack ? (
          <IconButton
            edge="start"
            size="small"
            aria-label="Go back"
            onClick={onBack}
            className="raven-page-header__back"
          >
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
        ) : null}
        <Box>
          <Typography variant="h6" component="h1" className="raven-page-header__title">
            {title}
          </Typography>
          {subtitle ? (
            <Typography variant="body2" color="text.secondary" className="raven-page-header__subtitle">
              {subtitle}
            </Typography>
          ) : null}
        </Box>
      </Box>
      {actions ? <Box className="raven-page-header__actions">{actions}</Box> : null}
    </Box>
  );
}

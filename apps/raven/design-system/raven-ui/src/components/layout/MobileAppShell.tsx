import type { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import './MobileAppShell.css';

export type MobileAppShellProps = {
  title: string;
  headerActions?: ReactNode;
  children: ReactNode;
};

/**
 * Narrow, mobile-first shell with blurred sticky header and main landmark.
 */
export function MobileAppShell({ title, headerActions, children }: MobileAppShellProps) {
  return (
    <Box className="raven-mobile-shell">
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        className="raven-mobile-shell__header"
        component="div"
      >
        <Toolbar disableGutters className="raven-mobile-shell__toolbar">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open menu"
            size="medium"
            className="raven-mobile-shell__menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="h1"
            className="raven-mobile-shell__title"
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
          {headerActions ? (
            <Box className="raven-mobile-shell__header-actions">{headerActions}</Box>
          ) : null}
        </Toolbar>
      </AppBar>
      <Box component="main" role="main" className="raven-mobile-shell__content">
        {children}
      </Box>
    </Box>
  );
}

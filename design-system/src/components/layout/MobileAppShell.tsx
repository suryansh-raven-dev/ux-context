import type { ReactNode } from 'react';

import MenuIcon from '@mui/icons-material/MenuRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

export type MobileAppShellProps = {
  title: string;
  headerActions?: ReactNode;
  children: ReactNode;
};

const shellSx = {
  maxWidth: 402,
  mx: 'auto',
  minHeight: '100vh',
  backgroundColor: 'background.dark',
};

const headerSx = {
  backgroundColor: (theme: { palette: { background: { dark: string } } }) =>
    alpha(theme.palette.background.dark, 0.72),
  backdropFilter: 'blur(15px)',
  WebkitBackdropFilter: 'blur(15px)',
  borderBottom: '1px solid',
  borderColor: 'divider',
};

const toolbarSx = { px: 1, minHeight: 56, gap: 0.5 };

const menuSx = { color: 'text.primary', minWidth: 44, minHeight: 44 };

const titleSx = {
  m: 0,
  fontSize: '1.25rem',
  fontWeight: 600,
  lineHeight: '32px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flex: 1,
};

const headerActionsSx = { display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 };

const contentSx = { p: 2 };

/**
 * Narrow, mobile-first shell with blurred sticky header and main landmark.
 */
export function MobileAppShell({ title, headerActions, children }: MobileAppShellProps) {
  return (
    <Box sx={shellSx}>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        component="div"
        sx={headerSx}
      >
        <Toolbar disableGutters sx={toolbarSx}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open menu"
            size="medium"
            sx={menuSx}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h1" sx={titleSx}>
            {title}
          </Typography>
          {headerActions ? (
            <Box sx={headerActionsSx}>{headerActions}</Box>
          ) : null}
        </Toolbar>
      </AppBar>
      <Box component="main" role="main" sx={contentSx}>
        {children}
      </Box>
    </Box>
  );
}

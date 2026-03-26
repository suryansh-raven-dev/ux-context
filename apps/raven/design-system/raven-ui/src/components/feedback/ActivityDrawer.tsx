import { useId, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import HistoryIcon from '@mui/icons-material/History';

import './ActivityDrawer.css';

const ACTIVITY_DRAWER_PAPER_SHADOW =
  '0px 9px 46px rgba(0,0,0,0.12), 0px 24px 38px rgba(0,0,0,0.14), 0px 11px 15px rgba(0,0,0,0.2)';

export type ActivityDrawerProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: number;
};

/**
 * Right-anchored drawer for incident activity history. Focus management is handled by MUI Drawer.
 */
export function ActivityDrawer({ open, onClose, children, width = 440 }: ActivityDrawerProps) {
  const titleId = useId();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      className="raven-activity-drawer"
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: width },
          maxWidth: '100%',
          height: '100%',
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          boxShadow: ACTIVITY_DRAWER_PAPER_SHADOW,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
      }}
    >
      <Box className="raven-activity-drawer__header" component="div">
        <HistoryIcon fontSize="small" sx={{ color: 'text.secondary' }} aria-hidden />
        <Typography variant="h6" component="h2" id={titleId} sx={{ flex: 1 }}>
          Incident Activity
        </Typography>
        <IconButton
          edge="end"
          size="small"
          onClick={onClose}
          aria-label="Close activity drawer"
        >
          <CloseIcon fontSize="small" aria-hidden />
        </IconButton>
      </Box>
      <Box
        className="raven-activity-drawer__content"
        role="complementary"
        aria-labelledby={titleId}
      >
        {children}
      </Box>
    </Drawer>
  );
}

import { useEffect, useState } from 'react';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { gradients } from '../../tokens/tokens';

/* ─── Constants ─────────────────────────────────────────────────────────────── */

const ANALYSIS_PATH = '/analysis';
const INCIDENT_CHILDREN = [
  { path: '/reports', label: 'Reports', icon: <AssignmentRoundedIcon fontSize="small" /> },
  { path: '/investigations', label: 'Investigations', icon: <ManageSearchRoundedIcon fontSize="small" /> },
  { path: '/recommendations', label: 'Recommendations', icon: <RecommendRoundedIcon fontSize="small" /> },
  { path: ANALYSIS_PATH, label: 'Analysis', icon: <AnalyticsRoundedIcon fontSize="small" /> },
] as const;

const INCIDENT_PATHS = INCIDENT_CHILDREN.map((c) => c.path);

/* ─── Styles ────────────────────────────────────────────────────────────────── */

const drawerSx = {
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    position: 'sticky',
    top: 0,
    width: 240,
    boxSizing: 'border-box',
    borderRight: 'none',
    backgroundColor: 'background.dark',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
  },
} as const;

const innerSx = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
  p: '4px 12px',
  gap: 0.5,
};

const logoSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  p: '4px 4px 8px',
};

const listSx = { flex: 1, pt: 1 };

const itemSx = {
  borderRadius: 1,
  p: 1,
  minHeight: 40,
  gap: 1,
};

const iconSx = { minWidth: 0 };

const expandIconSx = (open: boolean) => ({
  transition: 'transform 200ms ease',
  color: 'text.secondary',
  transform: open ? 'rotate(180deg)' : 'none',
});

const expandedSx = { display: 'flex', gap: 1, pl: '15px' };

const scrollIndicatorSx = {
  width: 2,
  minWidth: 2,
  borderRadius: 1,
  backgroundColor: 'purple.200',
  alignSelf: 'stretch',
};

const subListSx = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 0.5,
  pb: 1,
};

const subItemSx = (active: boolean) => ({
  borderRadius: 1,
  px: 1,
  py: 0.5,
  gap: 1,
  ...(active && {
    backgroundColor: 'navItemBg',
    '& .MuiListItemIcon-root': { color: 'primary.main' },
    '& .MuiTypography-root': { color: 'primary.main', fontWeight: 600 },
  }),
});

const bottomItemsSx = { display: 'flex', flexDirection: 'column', gap: 0.5, mt: 'auto' };

const orgSwitchSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  p: 0.75,
  borderRadius: 1.5,
  backgroundColor: 'action.hover',
};

const orgAvatarSx = {
  width: 32,
  height: 32,
  fontSize: '0.875rem',
  background: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? gradients.orgAvatarBrand : gradients.orgAvatarNeutral,
  borderRadius: '4px',
};

const brandingSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
  p: '8px 4px',
};

/* ─── Types ─────────────────────────────────────────────────────────────────── */

export type SideNavigationProps = {
  activePath: string;
  onNavigate: (path: string) => void;
};

/* ─── Component ─────────────────────────────────────────────────────────────── */

export function SideNavigation({ activePath, onNavigate }: SideNavigationProps) {
  const [incidentsOpen, setIncidentsOpen] = useState(
    () => INCIDENT_PATHS.includes(activePath),
  );

  useEffect(() => {
    if (INCIDENT_PATHS.includes(activePath)) setIncidentsOpen(true);
  }, [activePath]);

  return (
    <Drawer
      variant="permanent"
      sx={drawerSx}
      slotProps={{
        paper: {
          component: 'nav',
          'aria-label': 'Primary',
        },
      }}
    >
      <Box sx={innerSx}>
        {/* ── Logo row ─────────────────────────────────── */}
        <Box sx={logoSx}>
          <IconButton edge="start" aria-label="Toggle menu" sx={{ minWidth: 44, minHeight: 44 }}>
            <MenuRoundedIcon />
          </IconButton>
          <Typography component="span" variant="subtitle2" fontWeight={600} sx={{ fontStyle: 'italic', color: 'primary.main' }}>
            ACME
          </Typography>
        </Box>

        {/* ── Main nav list ─────────────────────────────── */}
        <List component="div" disablePadding sx={listSx}>
          {/* Report Incident */}
          <ListItemButton sx={itemSx} onClick={() => onNavigate('/report-incident')}>
            <ListItemIcon sx={iconSx}>
              <AddCircleRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary="Report Incident" primaryTypographyProps={{ variant: 'body2' }} />
          </ListItemButton>

          {/* Incidents group */}
          <ListItemButton
            sx={itemSx}
            onClick={() => setIncidentsOpen((o) => !o)}
            aria-expanded={incidentsOpen}
          >
            <ListItemIcon sx={iconSx}>
              <WarningAmberRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary="Incidents" primaryTypographyProps={{ variant: 'body2' }} />
            <ExpandMoreRoundedIcon fontSize="small" sx={expandIconSx(incidentsOpen)} />
          </ListItemButton>

          <Collapse in={incidentsOpen} timeout="auto" unmountOnExit>
            <Box sx={expandedSx}>
              <Box sx={scrollIndicatorSx} />

              <List component="div" disablePadding sx={subListSx}>
                {INCIDENT_CHILDREN.map((child) => {
                  const active = activePath === child.path;
                  return (
                    <ListItemButton
                      key={child.path}
                      sx={subItemSx(active)}
                      onClick={() => onNavigate(child.path)}
                      aria-current={active ? 'page' : undefined}
                    >
                      <ListItemIcon sx={iconSx}>
                        {child.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={child.label}
                        primaryTypographyProps={{
                          variant: 'body2',
                          fontWeight: active ? 600 : 400,
                        }}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </Box>
          </Collapse>
        </List>

        {/* ── Bottom nav items ──────────────────────────── */}
        <Box sx={bottomItemsSx}>
          <ListItemButton sx={itemSx} onClick={() => onNavigate('/help')}>
            <ListItemIcon sx={iconSx}>
              <HelpOutlineRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary="Help & Support" primaryTypographyProps={{ variant: 'body2' }} />
          </ListItemButton>

          <ListItemButton sx={itemSx} onClick={() => onNavigate('/settings')}>
            <ListItemIcon sx={iconSx}>
              <SettingsRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary="Settings" primaryTypographyProps={{ variant: 'body2' }} />
          </ListItemButton>
        </Box>

        {/* ── Org switch ────────────────────────────────── */}
        <Divider sx={{ borderColor: 'purple.100', mx: 1 }} />

        <Box sx={orgSwitchSx}>
          <Avatar sx={orgAvatarSx}>KR</Avatar>
          <Typography variant="body2" color="text.secondary" sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Kailash Raj
          </Typography>
          <ExpandMoreRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
        </Box>

        <Divider sx={{ borderColor: 'purple.100', mx: 1 }} />

        {/* ── Raven branding ────────────────────────────── */}
        <Box sx={brandingSx}>
          <Typography variant="caption" color="text.secondary">by</Typography>
          <Typography variant="caption" fontWeight={700} sx={{ color: 'primary.main' }}>raven</Typography>
        </Box>
      </Box>
    </Drawer>
  );
}

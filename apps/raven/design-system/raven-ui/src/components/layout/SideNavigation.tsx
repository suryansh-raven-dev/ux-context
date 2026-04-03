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

import './SideNavigation.css';

/* ─── Constants ─────────────────────────────────────────────────────────────── */

const ANALYSIS_PATH = '/analysis';
const INCIDENT_CHILDREN = [
  { path: '/reports', label: 'Reports', icon: <AssignmentRoundedIcon fontSize="small" /> },
  { path: '/investigations', label: 'Investigations', icon: <ManageSearchRoundedIcon fontSize="small" /> },
  { path: '/recommendations', label: 'Recommendations', icon: <RecommendRoundedIcon fontSize="small" /> },
  { path: ANALYSIS_PATH, label: 'Analysis', icon: <AnalyticsRoundedIcon fontSize="small" /> },
] as const;

const INCIDENT_PATHS = INCIDENT_CHILDREN.map((c) => c.path);

const DRAWER_SX = {
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': { position: 'relative' },
} as const;

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
      className="raven-side-nav"
      sx={DRAWER_SX}
      slotProps={{
        paper: {
          className: 'raven-side-nav__paper',
          component: 'nav',
          'aria-label': 'Primary',
        },
      }}
    >
      <Box className="raven-side-nav__inner">
        {/* ── Logo row ─────────────────────────────────── */}
        <Box className="raven-side-nav__logo">
          <IconButton size="small" edge="start" aria-label="Toggle menu">
            <MenuRoundedIcon fontSize="small" />
          </IconButton>
          <Typography component="span" variant="subtitle2" fontWeight={600} sx={{ fontStyle: 'italic', color: '#4A148C' }}>
            ACME
          </Typography>
        </Box>

        {/* ── Main nav list ─────────────────────────────── */}
        <List component="div" disablePadding className="raven-side-nav__list">
          {/* Report Incident */}
          <ListItemButton
            className="raven-side-nav__item"
            onClick={() => onNavigate('/report-incident')}
          >
            <ListItemIcon className="raven-side-nav__item-icon">
              <AddCircleRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary="Report Incident" primaryTypographyProps={{ variant: 'body2' }} />
          </ListItemButton>

          {/* Incidents group */}
          <ListItemButton
            className="raven-side-nav__item"
            onClick={() => setIncidentsOpen((o) => !o)}
            aria-expanded={incidentsOpen}
          >
            <ListItemIcon className="raven-side-nav__item-icon">
              <WarningAmberRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary="Incidents" primaryTypographyProps={{ variant: 'body2' }} />
            <ExpandMoreRoundedIcon
              fontSize="small"
              className={`raven-side-nav__expand-icon ${incidentsOpen ? 'raven-side-nav__expand-icon--open' : ''}`}
            />
          </ListItemButton>

          <Collapse in={incidentsOpen} timeout="auto" unmountOnExit>
            <Box className="raven-side-nav__expanded">
              {/* Purple scroll indicator */}
              <Box className="raven-side-nav__scroll-indicator" />

              <List component="div" disablePadding className="raven-side-nav__sub-list">
                {INCIDENT_CHILDREN.map((child) => {
                  const active = activePath === child.path;
                  return (
                    <ListItemButton
                      key={child.path}
                      className={`raven-side-nav__sub-item ${active ? 'raven-side-nav__sub-item--active' : ''}`}
                      onClick={() => onNavigate(child.path)}
                      aria-current={active ? 'page' : undefined}
                    >
                      <ListItemIcon className="raven-side-nav__item-icon">
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
        <Box className="raven-side-nav__bottom-items">
          <ListItemButton className="raven-side-nav__item" onClick={() => onNavigate('/help')}>
            <ListItemIcon className="raven-side-nav__item-icon">
              <HelpOutlineRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary="Help & Support" primaryTypographyProps={{ variant: 'body2' }} />
          </ListItemButton>

          <ListItemButton className="raven-side-nav__item" onClick={() => onNavigate('/settings')}>
            <ListItemIcon className="raven-side-nav__item-icon">
              <SettingsRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary="Settings" primaryTypographyProps={{ variant: 'body2' }} />
          </ListItemButton>
        </Box>

        {/* ── Org switch ────────────────────────────────── */}
        <Divider sx={{ borderColor: '#E1BEE7', mx: 1 }} />

        <Box className="raven-side-nav__org-switch">
          <Avatar className="raven-side-nav__org-avatar">KR</Avatar>
          <Typography variant="body2" color="text.secondary" sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Kailash Raj
          </Typography>
          <ExpandMoreRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
        </Box>

        <Divider sx={{ borderColor: '#E1BEE7', mx: 1 }} />

        {/* ── Raven branding ────────────────────────────── */}
        <Box className="raven-side-nav__branding">
          <Typography variant="caption" color="text.secondary">by</Typography>
          <Typography variant="caption" fontWeight={700} sx={{ color: '#4A148C' }}>raven</Typography>
        </Box>
      </Box>
    </Drawer>
  );
}

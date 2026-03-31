import { useEffect, useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircleRounded';
import ExpandLessIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreRounded';
import MenuIcon from '@mui/icons-material/MenuRounded';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import './SideNavigation.css';

const INCIDENT_PATHS = ['/reports', '/investigations', '/recommendations'] as const;
const REPORT_INCIDENT_PATH = '/report-incident';
const DRAWER_SX = {
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    position: 'relative',
  },
} as const;
const NAV_LIST_SX = { flex: 1, px: 1 } as const;

export type SideNavigationProps = {
  activePath: string;
  onNavigate: (path: string) => void;
};

function isIncidentsSectionActive(path: string) {
  return INCIDENT_PATHS.some((p) => path === p);
}

/**
 * Permanent drawer navigation with expandable Incidents group and CTA.
 */
export function SideNavigation({ activePath, onNavigate }: SideNavigationProps) {
  const [incidentsOpen, setIncidentsOpen] = useState(() => isIncidentsSectionActive(activePath));

  useEffect(() => {
    if (isIncidentsSectionActive(activePath)) {
      setIncidentsOpen(true);
    }
  }, [activePath]);

  const toggleIncidents = () => {
    setIncidentsOpen((open) => !open);
  };

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
        <Box className="raven-side-nav__logo">
          <IconButton
            size="small"
            edge="start"
            aria-label="Open navigation menu"
            className="raven-side-nav__menu-button"
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Typography component="span" variant="subtitle1" fontWeight={600}>
            Org Logo
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="raven-side-nav__cta"
          startIcon={<AddCircleIcon />}
          onClick={() => onNavigate(REPORT_INCIDENT_PATH)}
        >
          Report Incident
        </Button>

        <List component="div" disablePadding sx={NAV_LIST_SX}>
          <ListItemButton
            className="raven-side-nav__item"
            onClick={toggleIncidents}
            aria-expanded={incidentsOpen}
            aria-controls="raven-side-nav-incidents-sublist"
            id="raven-side-nav-incidents-trigger"
          >
            <ListItemText primary="Incidents" />
            {incidentsOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
          </ListItemButton>

          <Collapse in={incidentsOpen} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              id="raven-side-nav-incidents-sublist"
              aria-labelledby="raven-side-nav-incidents-trigger"
            >
              <ListItemButton
                className={
                  activePath === '/reports'
                    ? 'raven-side-nav__item raven-side-nav__item--active'
                    : 'raven-side-nav__item'
                }
                onClick={() => onNavigate('/reports')}
                aria-current={activePath === '/reports' ? 'page' : undefined}
              >
                <ListItemText primary="Reports" />
              </ListItemButton>
              <ListItemButton
                className={
                  activePath === '/investigations'
                    ? 'raven-side-nav__item raven-side-nav__item--active'
                    : 'raven-side-nav__item'
                }
                onClick={() => onNavigate('/investigations')}
                aria-current={activePath === '/investigations' ? 'page' : undefined}
              >
                <ListItemText primary="Investigations" />
              </ListItemButton>
              <ListItemButton
                className={
                  activePath === '/recommendations'
                    ? 'raven-side-nav__item raven-side-nav__item--active'
                    : 'raven-side-nav__item'
                }
                onClick={() => onNavigate('/recommendations')}
                aria-current={activePath === '/recommendations' ? 'page' : undefined}
              >
                <ListItemText primary="Recommendations" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            className={
              activePath === '/analysis'
                ? 'raven-side-nav__item raven-side-nav__item--active'
                : 'raven-side-nav__item'
            }
            onClick={() => onNavigate('/analysis')}
            aria-current={activePath === '/analysis' ? 'page' : undefined}
          >
            <ListItemText primary="Analysis" />
          </ListItemButton>
        </List>

        <Box className="raven-side-nav__footer">
          <Typography variant="caption" color="text.secondary" component="p">
            Powered by Raven
          </Typography>
          <Avatar className="raven-side-nav__footer-avatar" alt="Raven">
            R
          </Avatar>
        </Box>
      </Box>
    </Drawer>
  );
}

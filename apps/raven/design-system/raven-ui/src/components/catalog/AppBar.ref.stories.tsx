import React from 'react';

import MenuIcon from '@mui/icons-material/MenuRounded';
import NotificationsIcon from '@mui/icons-material/NotificationsRounded';
import SearchIcon from '@mui/icons-material/SearchRounded';
import MuiAppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import type { Meta, StoryObj } from '@storybook/react';

import { muiV6Catalog } from '../../catalog/muiV6Catalog';
import { StorybookPage, StorybookSection } from '../StorybookPage';
import { ComponentReference } from './ComponentReference';

const item = muiV6Catalog.find((c) => c.name === 'App Bar')!;

const meta: Meta = {
  title: 'Components',
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj;

export const AppBar: Story = {
  name: 'App Bar',
  render: () => (
    <StorybookPage maxWidth={900}>
      <StorybookSection
        title="Basic App Bar"
        description="Validated against the MUI v6 docs: App bars are used for screen titles, branding, navigation, and high-priority actions."
      >
        <Box sx={{ border: '1px solid #F3E5F5', borderRadius: 3, overflow: 'hidden' }}>
          <MuiAppBar position="static" color="transparent" elevation={0}>
            <Toolbar sx={{ gap: 1 }}>
              <IconButton edge="start" color="inherit" aria-label="open navigation">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                Operations Dashboard
              </Typography>
              <IconButton color="inherit" aria-label="search">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="notifications">
                <Badge badgeContent={3} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </MuiAppBar>
        </Box>
      </StorybookSection>

      <StorybookSection
        title="Dense Toolbar"
        description="MUI documents dense and scroll-reactive app bars as common variants. Raven keeps the surface light and border-led for dashboard layouts."
      >
        <Box sx={{ border: '1px solid #F3E5F5', borderRadius: 3, overflow: 'hidden' }}>
          <MuiAppBar position="static" color="transparent" elevation={0}>
            <Toolbar variant="dense" sx={{ gap: 1 }}>
              <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                Incident Queue
              </Typography>
              <Typography variant="body2" color="text.secondary">
                18 open items
              </Typography>
            </Toolbar>
          </MuiAppBar>
        </Box>
      </StorybookSection>

      <StorybookSection
        title="MUI Alignment"
        description="Cross-checked with the MUI v6 App Bar page and API references."
      >
        <ComponentReference item={item} embedded />
      </StorybookSection>
    </StorybookPage>
  ),
};

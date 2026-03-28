import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/AddRounded';
import EditIcon from '@mui/icons-material/EditRounded';
import NavigationIcon from '@mui/icons-material/NavigationRounded';
import FavoriteIcon from '@mui/icons-material/FavoriteRounded';
import ReportProblemIcon from '@mui/icons-material/ReportProblemRounded';
import WarningAmberIcon from '@mui/icons-material/WarningAmberRounded';
import AssignmentIcon from '@mui/icons-material/AssignmentRounded';
import NoteAddIcon from '@mui/icons-material/NoteAddRounded';

import { RavenFab } from './RavenFab';

export default {
  title: 'Components/Inputs/Floating Action Button',
  component: RavenFab,
  parameters: {
    docs: {
      description: {
        component:
          'Raven-styled Floating Action Button (FAB) wrapping MUI v6 Fab. Uses the Near-Miss ' +
          'deep purple background (#4A148C) with white icons, MUI v6 elevation shadows, and ' +
          'hover/focus/active state transitions. Supports circular, extended, and mini sizes. ' +
          'Ideal for primary actions like creating incidents or reporting near-misses.',
      },
    },
  },
} satisfies Meta<typeof RavenFab>;

type Story = StoryObj<typeof RavenFab>;

/* ─── Basic ─────────────────────────────────────────────── */

export const Basic: Story = {
  name: 'Basic',
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="disabled">
        <FavoriteIcon />
      </Fab>
    </Stack>
  ),
};

/* ─── Sizes ─────────────────────────────────────────────── */

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Circular Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Fab size="small" color="primary" aria-label="small">
            <AddIcon />
          </Fab>
          <Fab size="medium" color="primary" aria-label="medium">
            <AddIcon />
          </Fab>
          <Fab size="large" color="primary" aria-label="large">
            <AddIcon />
          </Fab>
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Extended Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Fab variant="extended" size="small" color="primary">
            <AddIcon sx={{ mr: 1 }} />
            Small
          </Fab>
          <Fab variant="extended" size="medium" color="primary">
            <AddIcon sx={{ mr: 1 }} />
            Medium
          </Fab>
          <Fab variant="extended" size="large" color="primary">
            <AddIcon sx={{ mr: 1 }} />
            Large
          </Fab>
        </Stack>
      </Box>
    </Stack>
  ),
};

/* ─── Colors ────────────────────────────────────────────── */

export const Colors: Story = {
  name: 'Colors',
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Semantic Colors
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Fab color="primary" aria-label="primary">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="secondary">
            <EditIcon />
          </Fab>
          <Fab color="success" aria-label="success">
            <AddIcon />
          </Fab>
          <Fab color="error" aria-label="error">
            <ReportProblemIcon />
          </Fab>
          <Fab color="warning" aria-label="warning">
            <WarningAmberIcon />
          </Fab>
          <Fab color="info" aria-label="info">
            <AddIcon />
          </Fab>
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Default (inherit)
        </Typography>
        <Fab aria-label="default">
          <AddIcon />
        </Fab>
      </Box>
    </Stack>
  ),
};

/* ─── Extended Variants ─────────────────────────────────── */

export const ExtendedVariants: Story = {
  name: 'Extended Variants',
  render: () => (
    <Stack spacing={2}>
      <Fab variant="extended" color="primary">
        <NoteAddIcon sx={{ mr: 1 }} />
        New Incident
      </Fab>
      <Fab variant="extended" color="error">
        <ReportProblemIcon sx={{ mr: 1 }} />
        Report Near-Miss
      </Fab>
      <Fab variant="extended" color="success">
        <AssignmentIcon sx={{ mr: 1 }} />
        Create Observation
      </Fab>
    </Stack>
  ),
};

/* ─── Disabled ──────────────────────────────────────────── */

export const DisabledState: Story = {
  name: 'Disabled',
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Fab disabled color="primary" aria-label="disabled-circular">
        <AddIcon />
      </Fab>
      <Fab disabled variant="extended" color="primary">
        <AddIcon sx={{ mr: 1 }} />
        Disabled
      </Fab>
    </Stack>
  ),
};

/* ─── Elevation States ──────────────────────────────────── */

export const ElevationStates: Story = {
  name: 'Elevation States',
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Hover, press, and focus the FABs to see Raven elevation transitions.
        Default: shadows[6], Hover: shadows[12], Active: shadows[12], Disabled: none.
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center">
        <Box sx={{ textAlign: 'center' }}>
          <Fab color="primary" aria-label="interactive">
            <AddIcon />
          </Fab>
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Interactive
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Fab disabled aria-label="no-elevation">
            <AddIcon />
          </Fab>
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Disabled (no shadow)
          </Typography>
        </Box>
      </Stack>
    </Stack>
  ),
};

/* ─── Raven Product Patterns ────────────────────────────── */

export const RavenProductPatterns: Story = {
  name: 'Raven Product Patterns',
  render: () => (
    <Box sx={{ position: 'relative', height: 300, width: '100%', border: '1px dashed #E0E0E0', borderRadius: 2 }}>
      <Typography variant="body2" sx={{ p: 2 }} color="text.secondary">
        Fixed-position FAB pattern — bottom-right corner for primary creation actions
      </Typography>
      <Fab
        color="primary"
        variant="extended"
        sx={{ position: 'absolute', bottom: 24, right: 24 }}
      >
        <NoteAddIcon sx={{ mr: 1 }} />
        New Incident
      </Fab>
      <Fab
        color="error"
        size="medium"
        sx={{ position: 'absolute', bottom: 24, right: 220 }}
        aria-label="report"
      >
        <ReportProblemIcon />
      </Fab>
    </Box>
  ),
};

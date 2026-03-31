import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MuiFab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/AddRounded';
import EditIcon from '@mui/icons-material/EditRounded';
import NavigationIcon from '@mui/icons-material/NavigationRounded';
import FavoriteIcon from '@mui/icons-material/FavoriteRounded';
import ReportProblemIcon from '@mui/icons-material/ReportProblemRounded';
import WarningAmberIcon from '@mui/icons-material/WarningAmberRounded';
import AssignmentIcon from '@mui/icons-material/AssignmentRounded';
import NoteAddIcon from '@mui/icons-material/NoteAddRounded';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
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

const Basic: Story = {
  name: 'Basic',
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MuiFab color="primary" aria-label="add">
        <AddIcon />
      </MuiFab>
      <MuiFab color="secondary" aria-label="edit">
        <EditIcon />
      </MuiFab>
      <MuiFab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </MuiFab>
      <MuiFab disabled aria-label="disabled">
        <FavoriteIcon />
      </MuiFab>
    </Stack>
  ),
};

/* ─── Sizes ─────────────────────────────────────────────── */

const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Circular Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <MuiFab size="small" color="primary" aria-label="small">
            <AddIcon />
          </MuiFab>
          <MuiFab size="medium" color="primary" aria-label="medium">
            <AddIcon />
          </MuiFab>
          <MuiFab size="large" color="primary" aria-label="large">
            <AddIcon />
          </MuiFab>
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Extended Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <MuiFab variant="extended" size="small" color="primary">
            <AddIcon sx={{ mr: 1 }} />
            Small
          </MuiFab>
          <MuiFab variant="extended" size="medium" color="primary">
            <AddIcon sx={{ mr: 1 }} />
            Medium
          </MuiFab>
          <MuiFab variant="extended" size="large" color="primary">
            <AddIcon sx={{ mr: 1 }} />
            Large
          </MuiFab>
        </Stack>
      </Box>
    </Stack>
  ),
};

/* ─── Colors ────────────────────────────────────────────── */

const Colors: Story = {
  name: 'Colors',
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Semantic Colors
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <MuiFab color="primary" aria-label="primary">
            <AddIcon />
          </MuiFab>
          <MuiFab color="secondary" aria-label="secondary">
            <EditIcon />
          </MuiFab>
          <MuiFab color="success" aria-label="success">
            <AddIcon />
          </MuiFab>
          <MuiFab color="error" aria-label="error">
            <ReportProblemIcon />
          </MuiFab>
          <MuiFab color="warning" aria-label="warning">
            <WarningAmberIcon />
          </MuiFab>
          <MuiFab color="info" aria-label="info">
            <AddIcon />
          </MuiFab>
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Default (inherit)
        </Typography>
        <MuiFab aria-label="default">
          <AddIcon />
        </MuiFab>
      </Box>
    </Stack>
  ),
};

/* ─── Extended Variants ─────────────────────────────────── */

const ExtendedVariants: Story = {
  name: 'Extended Variants',
  render: () => (
    <Stack spacing={2}>
      <MuiFab variant="extended" color="primary">
        <NoteAddIcon sx={{ mr: 1 }} />
        New Incident
      </MuiFab>
      <MuiFab variant="extended" color="error">
        <ReportProblemIcon sx={{ mr: 1 }} />
        Report Near-Miss
      </MuiFab>
      <MuiFab variant="extended" color="success">
        <AssignmentIcon sx={{ mr: 1 }} />
        Create Observation
      </MuiFab>
    </Stack>
  ),
};

/* ─── Disabled ──────────────────────────────────────────── */

const DisabledState: Story = {
  name: 'Disabled',
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MuiFab disabled color="primary" aria-label="disabled-circular">
        <AddIcon />
      </MuiFab>
      <MuiFab disabled variant="extended" color="primary">
        <AddIcon sx={{ mr: 1 }} />
        Disabled
      </MuiFab>
    </Stack>
  ),
};

/* ─── Elevation States ──────────────────────────────────── */

const ElevationStates: Story = {
  name: 'Elevation States',
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Hover, press, and focus the FABs to see Raven elevation transitions.
        Default: shadows[6], Hover: shadows[12], Active: shadows[12], Disabled: none.
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center">
        <Box sx={{ textAlign: 'center' }}>
          <MuiFab color="primary" aria-label="interactive">
            <AddIcon />
          </MuiFab>
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Interactive
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <MuiFab disabled aria-label="no-elevation">
            <AddIcon />
          </MuiFab>
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Disabled (no shadow)
          </Typography>
        </Box>
      </Stack>
    </Stack>
  ),
};

/* ─── Raven Product Patterns ────────────────────────────── */

const RavenProductPatterns: Story = {
  name: 'Raven Product Patterns',
  render: () => (
    <Box sx={{ position: 'relative', height: 300, width: '100%', border: '1px dashed #E0E0E0', borderRadius: 2 }}>
      <Typography variant="body2" sx={{ p: 2 }} color="text.secondary">
        Fixed-position FAB pattern — bottom-right corner for primary creation actions
      </Typography>
      <MuiFab
        color="primary"
        variant="extended"
        sx={{ position: 'absolute', bottom: 24, right: 24 }}
      >
        <NoteAddIcon sx={{ mr: 1 }} />
        New Incident
      </MuiFab>
      <MuiFab
        color="error"
        size="medium"
        sx={{ position: 'absolute', bottom: 24, right: 220 }}
        aria-label="report"
      >
        <ReportProblemIcon />
      </MuiFab>
    </Box>
  ),
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenFab {...story.args} />;
  }
  return null;
}

export const FabPage: Story = {
  name: 'Floating Action Button',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={960}>
      <StorybookSection title="Basic">{renderStory(Basic)}</StorybookSection>
      <StorybookSection title="Sizes">{renderStory(Sizes)}</StorybookSection>
      <StorybookSection title="Colors">{renderStory(Colors)}</StorybookSection>
      <StorybookSection title="Extended Variants">{renderStory(ExtendedVariants)}</StorybookSection>
      <StorybookSection title="Disabled">{renderStory(DisabledState)}</StorybookSection>
      <StorybookSection title="Elevation States">{renderStory(ElevationStates)}</StorybookSection>
      <StorybookSection title="Raven Product Patterns">{renderStory(RavenProductPatterns)}</StorybookSection>
    </StorybookPage>
  ),
};

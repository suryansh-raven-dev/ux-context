import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBoldRounded';
import FormatItalicIcon from '@mui/icons-material/FormatItalicRounded';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlinedRounded';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeftRounded';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenterRounded';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRightRounded';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustifyRounded';
import ViewListIcon from '@mui/icons-material/ViewListRounded';
import ViewModuleIcon from '@mui/icons-material/ViewModuleRounded';
import ViewQuiltIcon from '@mui/icons-material/ViewQuiltRounded';
import LaptopIcon from '@mui/icons-material/LaptopRounded';
import TvIcon from '@mui/icons-material/TvRounded';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroidRounded';

import { RavenToggleButton, RavenToggleButtonGroup } from './RavenToggleButton';

export default {
  title: 'Components/Inputs/Toggle Button',
  component: RavenToggleButton,
  parameters: {
    docs: {
      description: {
        component:
          'Raven-styled ToggleButton / ToggleButtonGroup wrapping MUI v6. Uses pill radius ' +
          '(50px), Source Sans 3 typography, and no forced text transform. Supports exclusive ' +
          '(single-select) and multiple selection, three sizes, vertical orientation, and ' +
          'enforced value selection. Perfect for view toggles, filter states, and toolbar actions.',
      },
    },
  },
} satisfies Meta<typeof RavenToggleButton>;

type Story = StoryObj<typeof RavenToggleButton>;

/* ─── Exclusive Selection ───────────────────────────────── */

export const ExclusiveSelection: Story = {
  name: 'Exclusive Selection',
  render: () => {
    const [alignment, setAlignment] = useState<string | null>('left');
    return (
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Text alignment (single select)
        </Typography>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={(_, val) => setAlignment(val)}
        >
          <ToggleButton value="left"><FormatAlignLeftIcon /></ToggleButton>
          <ToggleButton value="center"><FormatAlignCenterIcon /></ToggleButton>
          <ToggleButton value="right"><FormatAlignRightIcon /></ToggleButton>
          <ToggleButton value="justify"><FormatAlignJustifyIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>
    );
  },
};

/* ─── Multiple Selection ────────────────────────────────── */

export const MultipleSelection: Story = {
  name: 'Multiple Selection',
  render: () => {
    const [formats, setFormats] = useState<string[]>(['bold', 'italic']);
    return (
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Text formatting (multi-select)
        </Typography>
        <ToggleButtonGroup
          value={formats}
          onChange={(_, val) => setFormats(val)}
        >
          <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
          <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>
          <ToggleButton value="underlined"><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>
    );
  },
};

/* ─── Sizes ─────────────────────────────────────────────── */

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <Stack spacing={3}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <Box key={size}>
          <Typography variant="subtitle2" gutterBottom>
            {size}
          </Typography>
          <ToggleButtonGroup value="list" exclusive size={size}>
            <ToggleButton value="list"><ViewListIcon /></ToggleButton>
            <ToggleButton value="module"><ViewModuleIcon /></ToggleButton>
            <ToggleButton value="quilt"><ViewQuiltIcon /></ToggleButton>
          </ToggleButtonGroup>
        </Box>
      ))}
    </Stack>
  ),
};

/* ─── Colors ────────────────────────────────────────────── */

export const Colors: Story = {
  name: 'Colors',
  render: () => (
    <Stack spacing={3}>
      {(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'standard'] as const).map(
        (color) => (
          <Box key={color}>
            <Typography variant="subtitle2" gutterBottom>
              {color}
            </Typography>
            <ToggleButtonGroup value="one" exclusive color={color}>
              <ToggleButton value="one">One</ToggleButton>
              <ToggleButton value="two">Two</ToggleButton>
              <ToggleButton value="three">Three</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        ),
      )}
    </Stack>
  ),
};

/* ─── Vertical ──────────────────────────────────────────── */

export const VerticalToggle: Story = {
  name: 'Vertical',
  render: () => {
    const [view, setView] = useState('list');
    return (
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Vertical orientation
        </Typography>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(_, val) => val && setView(val)}
          orientation="vertical"
        >
          <ToggleButton value="list"><ViewListIcon /></ToggleButton>
          <ToggleButton value="module"><ViewModuleIcon /></ToggleButton>
          <ToggleButton value="quilt"><ViewQuiltIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>
    );
  },
};

/* ─── With Text Labels ──────────────────────────────────── */

export const TextLabels: Story = {
  name: 'With Text Labels',
  render: () => {
    const [device, setDevice] = useState('laptop');
    return (
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Device selection with text labels
        </Typography>
        <ToggleButtonGroup
          value={device}
          exclusive
          onChange={(_, val) => val && setDevice(val)}
        >
          <ToggleButton value="laptop">
            <LaptopIcon sx={{ mr: 0.5 }} /> Laptop
          </ToggleButton>
          <ToggleButton value="tv">
            <TvIcon sx={{ mr: 0.5 }} /> TV
          </ToggleButton>
          <ToggleButton value="phone">
            <PhoneAndroidIcon sx={{ mr: 0.5 }} /> Phone
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    );
  },
};

/* ─── Disabled ──────────────────────────────────────────── */

export const DisabledState: Story = {
  name: 'Disabled',
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Entire group disabled
        </Typography>
        <ToggleButtonGroup value="left" exclusive disabled>
          <ToggleButton value="left"><FormatAlignLeftIcon /></ToggleButton>
          <ToggleButton value="center"><FormatAlignCenterIcon /></ToggleButton>
          <ToggleButton value="right"><FormatAlignRightIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Single button disabled
        </Typography>
        <ToggleButtonGroup value="left" exclusive>
          <ToggleButton value="left"><FormatAlignLeftIcon /></ToggleButton>
          <ToggleButton value="center" disabled><FormatAlignCenterIcon /></ToggleButton>
          <ToggleButton value="right"><FormatAlignRightIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Stack>
  ),
};

/* ─── Raven Product Patterns ────────────────────────────── */

export const RavenProductPatterns: Story = {
  name: 'Raven Product Patterns',
  render: () => {
    const [view, setView] = useState('list');
    const [status, setStatus] = useState<string[]>(['open', 'review']);
    return (
      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Incident View Toggle
          </Typography>
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={(_, val) => val && setView(val)}
            size="small"
          >
            <ToggleButton value="list">List</ToggleButton>
            <ToggleButton value="grid">Grid</ToggleButton>
            <ToggleButton value="timeline">Timeline</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Status Filter (multi-select)
          </Typography>
          <ToggleButtonGroup
            value={status}
            onChange={(_, val) => setStatus(val)}
            size="small"
            color="primary"
          >
            <ToggleButton value="open">Open</ToggleButton>
            <ToggleButton value="review">In Review</ToggleButton>
            <ToggleButton value="approved">Approved</ToggleButton>
            <ToggleButton value="closed">Closed</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>
    );
  },
};

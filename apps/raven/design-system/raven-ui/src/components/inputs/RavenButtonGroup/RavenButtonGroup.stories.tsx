import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownRounded';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import { RavenButtonGroup } from './RavenButtonGroup';

export default {
  title: 'Components/Inputs/Button Group',
  component: RavenButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Raven-styled ButtonGroup component wrapping MUI v6 ButtonGroup. Uses the ' +
          'Near-Miss purple palette, pill radius (50px), and Raven border tokens. ' +
          'Groups related buttons together with consistent spacing and connected borders. ' +
          'Supports all three MUI variants (contained, outlined, text), three sizes, ' +
          'vertical orientation, and split-button patterns.',
      },
    },
  },
} satisfies Meta<typeof RavenButtonGroup>;

type Story = StoryObj<typeof RavenButtonGroup>;

/* ─── Basic Variants ────────────────────────────────────── */

export const BasicVariants: Story = {
  name: 'Basic Variants',
  render: () => (
    <Stack spacing={3} alignItems="center">
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Contained
        </Typography>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Outlined
        </Typography>
        <ButtonGroup variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Text
        </Typography>
        <ButtonGroup variant="text">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  ),
};

/* ─── Sizes ─────────────────────────────────────────────── */

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <Stack spacing={3} alignItems="center">
      {(['small', 'medium', 'large'] as const).map((size) => (
        <Box key={size}>
          <Typography variant="subtitle2" gutterBottom>
            {size}
          </Typography>
          <ButtonGroup variant="contained" size={size}>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
      ))}
    </Stack>
  ),
};

/* ─── Vertical Group ────────────────────────────────────── */

export const VerticalGroup: Story = {
  name: 'Vertical Group',
  render: () => (
    <Stack direction="row" spacing={4}>
      {(['contained', 'outlined', 'text'] as const).map((variant) => (
        <Box key={variant}>
          <Typography variant="subtitle2" gutterBottom>
            {variant}
          </Typography>
          <ButtonGroup orientation="vertical" variant={variant}>
            <Button>Create</Button>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </Box>
      ))}
    </Stack>
  ),
};

/* ─── Colors ────────────────────────────────────────────── */

export const Colors: Story = {
  name: 'Colors',
  render: () => (
    <Stack spacing={2} alignItems="center">
      {(['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const).map(
        (color) => (
          <Box key={color}>
            <Typography variant="subtitle2" gutterBottom>
              {color}
            </Typography>
            <ButtonGroup variant="contained" color={color}>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Box>
        ),
      )}
    </Stack>
  ),
};

/* ─── Disabled ──────────────────────────────────────────── */

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <Stack spacing={3} alignItems="center">
      <ButtonGroup variant="contained" disabled>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" disabled>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  ),
};

/* ─── Split Button ──────────────────────────────────────── */

const splitOptions = ['Create incident', 'Create near-miss', 'Create observation'];

function SplitButtonDemo() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (_: React.MouseEvent, index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  return (
    <>
      <ButtonGroup variant="contained" ref={anchorRef}>
        <Button>{splitOptions[selectedIndex]}</Button>
        <Button size="small" onClick={() => setOpen((prev) => !prev)}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList>
                  {splitOptions.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(e) => handleMenuItemClick(e, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export const SplitButton: Story = {
  name: 'Split Button',
  render: () => (
    <Box sx={{ minHeight: 200 }}>
      <Typography variant="subtitle2" gutterBottom>
        Split button with dropdown actions
      </Typography>
      <SplitButtonDemo />
    </Box>
  ),
};

/* ─── Raven Product Patterns ────────────────────────────── */

export const RavenProductPatterns: Story = {
  name: 'Raven Product Patterns',
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Incident Status Actions
        </Typography>
        <ButtonGroup variant="contained">
          <Button>Draft</Button>
          <Button>In Review</Button>
          <Button>Approved</Button>
          <Button>Closed</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          View Toggle (outlined)
        </Typography>
        <ButtonGroup variant="outlined" size="small">
          <Button>List</Button>
          <Button>Grid</Button>
          <Button>Timeline</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Export Options
        </Typography>
        <ButtonGroup variant="outlined">
          <Button>PDF</Button>
          <Button>CSV</Button>
          <Button>Excel</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  ),
};

import React, { useState, useRef, type ReactNode } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownRounded';

/* ── Helpers ──────────────────────────────────────────────── */
const body = { secondary: { color: 'text.secondary', maxWidth: '72ch' as const } };

function Demo({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ p: 3, borderRadius: 1, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', mb: 2 }}>
      {children}
    </Box>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <Box
      component="pre"
      sx={{ p: 2, borderRadius: 1, bgcolor: 'action.hover', fontSize: '0.8125rem', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', overflow: 'auto', mb: 2, maxWidth: '100%' }}
    >
      {children}
    </Box>
  );
}

/* ── Split Button ─────────────────────────────────────────── */
const splitOptions = ['Create incident', 'Create near-miss', 'Create observation'];

function SplitButtonDemo() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const anchorRef = useRef<HTMLDivElement>(null);

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
          <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList>
                  {splitOptions.map((option, index) => (
                    <MenuItem key={option} selected={index === selectedIndex} onClick={(e) => handleMenuItemClick(e, index)}>
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

/* ── Main page ────────────────────────────────────────────── */
export function ButtonGroupDocumentation() {
  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', py: 2, px: { xs: 1, sm: 2 } }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>Button Group</Typography>
      <Typography variant="body1" sx={{ ...body.secondary, mb: 2 }}>
        The <strong>ButtonGroup</strong> component groups related buttons together with consistent spacing
        and connected borders. In Raven it inherits the Near-Miss purple palette, pill radius, and brand
        border tokens. Supports all three MUI variants (contained, outlined, text), three sizes, vertical
        orientation, colors, disabled state, and split-button patterns.
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 4 }}>
        See the{' '}
        <a href="https://v6.mui.com/material-ui/react-button-group/" target="_blank" rel="noreferrer">MUI Button Group</a> docs.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* ── Basic variants ────────────────────────────────── */}
      <Typography id="basic-variants" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Basic variants</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        The button group supports three variants: <code>contained</code>, <code>outlined</code>, and <code>text</code>.
      </Typography>
      <Demo>
        <Stack spacing={3} alignItems="center">
          {(['contained', 'outlined', 'text'] as const).map((variant) => (
            <Box key={variant}>
              <Typography variant="subtitle2" gutterBottom>{variant}</Typography>
              <ButtonGroup variant={variant}>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Box>
          ))}
        </Stack>
      </Demo>
      <CodeBlock>{`<ButtonGroup variant="contained">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      {/* ── Sizes ─────────────────────────────────────────── */}
      <Typography id="sizes" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Sizes</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use the <code>size</code> prop to control button density: <code>small</code>, <code>medium</code>, or <code>large</code>.
      </Typography>
      <Demo>
        <Stack spacing={3} alignItems="center">
          {(['small', 'medium', 'large'] as const).map((size) => (
            <Box key={size}>
              <Typography variant="subtitle2" gutterBottom>{size}</Typography>
              <ButtonGroup variant="contained" size={size}>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Box>
          ))}
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Vertical group ────────────────────────────────── */}
      <Typography id="vertical-group" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Vertical group</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Set <code>orientation="vertical"</code> for a stacked layout.
      </Typography>
      <Demo>
        <Stack direction="row" spacing={4}>
          {(['contained', 'outlined', 'text'] as const).map((variant) => (
            <Box key={variant}>
              <Typography variant="subtitle2" gutterBottom>{variant}</Typography>
              <ButtonGroup orientation="vertical" variant={variant}>
                <Button>Create</Button>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </ButtonGroup>
            </Box>
          ))}
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Colors ────────────────────────────────────────── */}
      <Typography id="colors" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Colors</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Pass the <code>color</code> prop to style the group with any palette color.
      </Typography>
      <Demo>
        <Stack spacing={2} alignItems="center">
          {(['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const).map((color) => (
            <Box key={color}>
              <Typography variant="subtitle2" gutterBottom>{color}</Typography>
              <ButtonGroup variant="contained" color={color}>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Box>
          ))}
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Disabled ──────────────────────────────────────── */}
      <Typography id="disabled" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Disabled</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Apply <code>disabled</code> to the group to disable all buttons at once.
      </Typography>
      <Demo>
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
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Split button ──────────────────────────────────── */}
      <Typography id="split-button" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Split button</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        A split button combines a primary action with a dropdown of secondary actions.
        Click the arrow to reveal additional options.
      </Typography>
      <Demo>
        <Box sx={{ minHeight: 200 }}>
          <SplitButtonDemo />
        </Box>
      </Demo>
      <CodeBlock>{`const splitOptions = ['Create incident', 'Create near-miss', 'Create observation'];

<ButtonGroup variant="contained" ref={anchorRef}>
  <Button>{splitOptions[selectedIndex]}</Button>
  <Button size="small" onClick={() => setOpen(!open)}>
    <ArrowDropDownIcon />
  </Button>
</ButtonGroup>`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      {/* ── Raven product patterns ────────────────────────── */}
      <Typography id="raven-patterns" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Raven product patterns</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Common button-group layouts used across the Raven Near-Miss platform.
      </Typography>
      <Demo>
        <Stack spacing={4}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>Incident Status Actions</Typography>
            <ButtonGroup variant="contained">
              <Button>Draft</Button>
              <Button>In Review</Button>
              <Button>Approved</Button>
              <Button>Closed</Button>
            </ButtonGroup>
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>View Toggle (outlined)</Typography>
            <ButtonGroup variant="outlined" size="small">
              <Button>List</Button>
              <Button>Grid</Button>
              <Button>Timeline</Button>
            </ButtonGroup>
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>Export Options</Typography>
            <ButtonGroup variant="outlined">
              <Button>PDF</Button>
              <Button>CSV</Button>
              <Button>Excel</Button>
            </ButtonGroup>
          </Box>
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Accessibility ─────────────────────────────────── */}
      <Typography id="accessibility" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Accessibility</Typography>
      <Typography variant="body2" sx={body.secondary}>
        The <code>ButtonGroup</code> renders with <code>role="group"</code> by default.
        Add an <code>aria-label</code> to provide an accessible name for the group.
        For split buttons, ensure the dropdown trigger has <code>aria-haspopup="true"</code> and
        the menu uses <code>role="menu"</code> with proper <code>aria-expanded</code> state.
      </Typography>
    </Box>
  );
}

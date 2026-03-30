import React, { useState, useRef } from 'react';
import type { Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownRounded';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import CircularProgress from '@mui/material/CircularProgress';

export default {
  title: 'Components/Inputs/Button Group',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

function Section({
  title,
  description,
  code,
  children,
}: {
  title: string;
  description: string;
  code?: string;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 680, lineHeight: 1.6 }}>
        {description}
      </Typography>
      <Box
        sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          bgcolor: '#fafafa',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
      {code && (
        <Box
          component="pre"
          sx={{
            mt: 1.5,
            p: 2,
            bgcolor: '#263238',
            color: '#EEFFFF',
            borderRadius: 1.5,
            fontSize: 13,
            fontFamily: "'SF Mono', 'Fira Code', monospace",
            overflow: 'auto',
            lineHeight: 1.5,
          }}
        >
          {code}
        </Box>
      )}
    </Box>
  );
}

const splitOptions = ['Create incident', 'Create near-miss', 'Create observation'];

function SplitButtonDemo() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const anchorRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ButtonGroup variant="contained" ref={anchorRef}>
        <Button>{splitOptions[selectedIndex]}</Button>
        <Button size="small" onClick={() => setOpen((prev) => !prev)}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal sx={{ zIndex: 1 }}>
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList>
                  {splitOptions.map((option, index) => (
                    <MenuItem key={option} selected={index === selectedIndex} onClick={() => { setSelectedIndex(index); setOpen(false); }}>
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

export const ButtonGroupPage = {
  name: 'Button Group',
  render: () => (
    <Box sx={{ maxWidth: 900, p: 4, fontFamily: "'Source Sans 3', sans-serif" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        Button Group
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 680, lineHeight: 1.7 }}>
        The ButtonGroup component can be used to group related buttons. Raven applies the brand purple palette, rounded corners, and consistent spacing from the design system.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* Basic button group */}
      <Section
        title="Basic button group"
        description="The buttons can be grouped by wrapping them with the ButtonGroup component. They need to be immediate children."
        code={`<ButtonGroup variant="contained" aria-label="Basic button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>`}
      >
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Section>

      {/* Button variants */}
      <Section
        title="Button variants"
        description="All the standard button variants are supported."
        code={`<ButtonGroup variant="outlined" aria-label="Outlined button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup variant="text" aria-label="Text button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>`}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <ButtonGroup variant="outlined" aria-label="Outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="Text button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
      </Section>

      {/* Sizes and colors */}
      <Section
        title="Sizes and colors"
        description="The size and color props can be used to control the appearance of the button group."
        code={`<ButtonGroup size="small" aria-label="Small button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup color="secondary" aria-label="Secondary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup size="large" aria-label="Large button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>`}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-start' }}>
          <ButtonGroup size="small" variant="outlined" aria-label="Small button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup color="secondary" variant="contained" aria-label="Secondary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup size="large" variant="outlined" aria-label="Large button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
      </Section>

      {/* Color variants */}
      <Section
        title="Color variants"
        description="All theme palette colors are supported for consistent brand and semantic styling."
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-start' }}>
          {(['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const).map((color) => (
            <Box key={color} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="caption" sx={{ width: 72, textTransform: 'capitalize', color: 'text.secondary' }}>
                {color}
              </Typography>
              <ButtonGroup variant="contained" color={color}>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Box>
          ))}
        </Box>
      </Section>

      {/* Vertical group */}
      <Section
        title="Vertical group"
        description="The button group can be displayed vertically using the orientation prop."
        code={`<ButtonGroup orientation="vertical" variant="contained">
  <Button>Create</Button>
  <Button>Edit</Button>
  <Button>Delete</Button>
</ButtonGroup>`}
      >
        {(['contained', 'outlined', 'text'] as const).map((variant) => (
          <Box key={variant} sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              {variant}
            </Typography>
            <ButtonGroup orientation="vertical" variant={variant}>
              <Button>Create</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </ButtonGroup>
          </Box>
        ))}
      </Section>

      {/* Split button */}
      <Section
        title="Split button"
        description="ButtonGroup can also be used to create a split button. The dropdown can change the button action or be used to immediately trigger a related action."
        code={`const options = ['Create incident', 'Create near-miss', 'Create observation'];

<ButtonGroup variant="contained" ref={anchorRef}>
  <Button>{options[selectedIndex]}</Button>
  <Button size="small" onClick={handleToggle}>
    <ArrowDropDownIcon />
  </Button>
</ButtonGroup>
<Popper open={open} anchorEl={anchorRef.current} transition>
  ...menu items...
</Popper>`}
      >
        <SplitButtonDemo />
      </Section>

      {/* Disabled elevation */}
      <Section
        title="Disabled elevation"
        description="You can remove the elevation with the disableElevation prop."
        code={`<ButtonGroup disableElevation variant="contained">
  <Button>One</Button>
  <Button>Two</Button>
</ButtonGroup>`}
      >
        <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation button group">
          <Button>One</Button>
          <Button>Two</Button>
        </ButtonGroup>
      </Section>

      {/* Disabled state */}
      <Section
        title="Disabled"
        description="All buttons in a group can be disabled at once using the disabled prop on ButtonGroup."
        code={`<ButtonGroup variant="contained" disabled>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>`}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-start' }}>
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
        </Box>
      </Section>

      {/* Loading */}
      <Section
        title="Loading"
        description="Use the loading prop on individual buttons to set them in a loading state and disable interactions."
        code={`<ButtonGroup variant="outlined">
  <Button>Submit</Button>
  <Button>Fetch data</Button>
  <Button disabled startIcon={<CircularProgress size={16} />}>
    Saving...
  </Button>
</ButtonGroup>`}
      >
        <ButtonGroup variant="outlined" aria-label="Loading button group">
          <Button>Submit</Button>
          <Button>Fetch data</Button>
          <Button disabled startIcon={<CircularProgress size={16} />}>
            Saving...
          </Button>
        </ButtonGroup>
      </Section>

      <Divider sx={{ my: 4 }} />

      {/* Raven Product Patterns */}
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
        Raven product patterns
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 680, lineHeight: 1.6 }}>
        Common ButtonGroup patterns used across the Near Miss Incident Reporting application.
      </Typography>

      <Section
        title="Incident status actions"
        description="Grouped status transition buttons for incident workflow stages."
      >
        <ButtonGroup variant="contained">
          <Button>Draft</Button>
          <Button>In Review</Button>
          <Button>Approved</Button>
          <Button>Closed</Button>
        </ButtonGroup>
      </Section>

      <Section
        title="View toggle"
        description="Outlined button group used to switch between different content views."
      >
        <ButtonGroup variant="outlined" size="small">
          <Button>List</Button>
          <Button>Grid</Button>
          <Button>Timeline</Button>
        </ButtonGroup>
      </Section>

      <Section
        title="Export options"
        description="Grouped export format selection for report generation."
      >
        <ButtonGroup variant="outlined">
          <Button>PDF</Button>
          <Button>CSV</Button>
          <Button>Excel</Button>
        </ButtonGroup>
      </Section>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        API
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
        See the MUI documentation for a complete reference to all props and classes available for{' '}
        <Typography
          component="a"
          variant="body2"
          href="https://v6.mui.com/material-ui/api/button/"
          target="_blank"
          rel="noopener"
          sx={{ color: 'secondary.main', fontWeight: 600 }}
        >
          {'<Button />'}
        </Typography>
        {' '}and{' '}
        <Typography
          component="a"
          variant="body2"
          href="https://v6.mui.com/material-ui/api/button-group/"
          target="_blank"
          rel="noopener"
          sx={{ color: 'secondary.main', fontWeight: 600 }}
        >
          {'<ButtonGroup />'}
        </Typography>
        .
      </Typography>
    </Box>
  ),
};

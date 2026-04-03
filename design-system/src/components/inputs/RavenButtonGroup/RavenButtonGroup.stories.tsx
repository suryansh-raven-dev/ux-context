import React, { useId, useRef, useState } from 'react';
import type { Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownRounded';
import SaveIcon from '@mui/icons-material/SaveRounded';

import {
  RavenButtonGroup,
  type RavenButtonGroupButton,
} from './RavenButtonGroup';
import { RavenButton } from '../RavenButton/RavenButton';

export default {
  title: 'Components/Inputs/Button Group',
  component: RavenButtonGroup,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RavenButtonGroup>;

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
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2, maxWidth: 680, lineHeight: 1.6 }}
      >
        {description}
      </Typography>
      <Box
        sx={{
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

const baseButtons: RavenButtonGroupButton[] = [
  { label: 'One' },
  { label: 'Two' },
  { label: 'Three' },
];

const splitOptions = [
  'Create incident',
  'Create near-miss',
  'Create observation',
];

function SplitButtonDemo() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const anchorRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const toggleId = useId();

  return (
    <>
      <RavenButtonGroup
        ref={anchorRef}
        variant="contained"
        aria-label="Create item split button"
      >
        <RavenButton>{splitOptions[selectedIndex]}</RavenButton>
        <RavenButton
          id={toggleId}
          size="small"
          aria-controls={open ? menuId : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="menu"
          aria-label="Select create action"
          onClick={() => setOpen((prev) => !prev)}
        >
          <ArrowDropDownIcon />
        </RavenButton>
      </RavenButtonGroup>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        sx={{ zIndex: 1 }}
      >
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
                <MenuList
                  id={menuId}
                  autoFocusItem={open}
                  aria-labelledby={toggleId}
                >
                  {splitOptions.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={() => {
                        setSelectedIndex(index);
                        setOpen(false);
                      }}
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

export const ButtonGroupPage = {
  name: 'Button Group',
  render: () => (
    <Box sx={{ maxWidth: 900, p: 4, fontFamily: "'Source Sans 3', sans-serif" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        Button Group
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, maxWidth: 700, lineHeight: 1.7 }}
      >
        Raven wraps MUI v6 Button Group with Source Sans 3 typography and a
        deliberate `8px` separation between grouped buttons. This keeps related
        actions visually connected without the fully flush segmented treatment of
        stock MUI.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Section
        title="Raven wrapper basics"
        description="Use the Raven wrapper for the common case: pass a buttons array and the group-level MUI props you want to share."
        code={`<RavenButtonGroup
  variant="contained"
  aria-label="Basic button group"
  buttons={[
    { label: 'One' },
    { label: 'Two' },
    { label: 'Three' },
  ]}
/>`}
      >
        <RavenButtonGroup
          variant="contained"
          aria-label="Basic button group"
          buttons={baseButtons}
        />
      </Section>

      <Section
        title="Button variants"
        description="All the standard MUI button-group variants are supported and inherit the Raven spacing treatment."
        code={`<RavenButtonGroup variant="outlined" buttons={buttons} />
<RavenButtonGroup variant="text" buttons={buttons} />`}
      >
        <Stack spacing={2} alignItems="flex-start">
          <RavenButtonGroup
            variant="outlined"
            aria-label="Outlined button group"
            buttons={baseButtons}
          />
          <RavenButtonGroup
            variant="text"
            aria-label="Text button group"
            buttons={baseButtons}
          />
        </Stack>
      </Section>

      <Section
        title="Sizes and colors"
        description="The size and color props control the appearance of the entire group, matching the MUI Button Group API."
        code={`<RavenButtonGroup size="small" variant="outlined" buttons={buttons} />
<RavenButtonGroup color="secondary" variant="contained" buttons={buttons} />
<RavenButtonGroup size="large" variant="outlined" buttons={buttons} />`}
      >
        <Stack spacing={2} alignItems="flex-start">
          <RavenButtonGroup
            size="small"
            variant="outlined"
            aria-label="Small button group"
            buttons={baseButtons}
          />
          <RavenButtonGroup
            color="secondary"
            variant="contained"
            aria-label="Secondary button group"
            buttons={baseButtons}
          />
          <RavenButtonGroup
            size="large"
            variant="outlined"
            aria-label="Large button group"
            buttons={baseButtons}
          />
        </Stack>
      </Section>

      <Section
        title="Color variants"
        description="All theme palette colors are supported for semantic emphasis."
      >
        <Stack spacing={2} alignItems="flex-start">
          {(
            ['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const
          ).map((color) => (
            <Box
              key={color}
              sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
            >
              <Typography
                variant="caption"
                sx={{
                  width: 72,
                  textTransform: 'capitalize',
                  color: 'text.secondary',
                }}
              >
                {color}
              </Typography>
              <RavenButtonGroup
                variant="contained"
                color={color}
                aria-label={`${color} button group`}
                buttons={baseButtons}
              />
            </Box>
          ))}
        </Stack>
      </Section>

      <Section
        title="Vertical group"
        description="The orientation prop still works with Raven's 8px spacing, so vertical groups remain easy to scan."
        code={`<RavenButtonGroup
  orientation="vertical"
  variant="contained"
  buttons={[
    { label: 'Create' },
    { label: 'Edit' },
    { label: 'Delete' },
  ]}
/>`}
      >
        {(['contained', 'outlined', 'text'] as const).map((variant) => (
          <Box key={variant} sx={{ textAlign: 'center' }}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: 'block', mb: 1 }}
            >
              {variant}
            </Typography>
            <RavenButtonGroup
              orientation="vertical"
              variant={variant}
              aria-label={`${variant} vertical button group`}
              buttons={[
                { label: 'Create' },
                { label: 'Edit' },
                { label: 'Delete' },
              ]}
            />
          </Box>
        ))}
      </Section>

      <Section
        title="Split button"
        description="Use children instead of the buttons array when you need a compound control. This example adds the missing menu accessibility details from the standard MUI pattern."
        code={`<RavenButtonGroup ref={anchorRef} variant="contained">
  <RavenButton>{options[selectedIndex]}</RavenButton>
  <RavenButton
    id={toggleId}
    size="small"
    aria-haspopup="menu"
    aria-expanded={open ? 'true' : undefined}
    aria-controls={open ? menuId : undefined}
  >
    <ArrowDropDownIcon />
  </RavenButton>
</RavenButtonGroup>`}
      >
        <SplitButtonDemo />
      </Section>

      <Section
        title="Disabled elevation"
        description="You can remove elevation from contained groups with disableElevation."
        code={`<RavenButtonGroup
  disableElevation
  variant="contained"
  aria-label="Disabled elevation button group"
  buttons={[
    { label: 'One' },
    { label: 'Two' },
  ]}
/>`}
      >
        <RavenButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation button group"
          buttons={[{ label: 'One' }, { label: 'Two' }]}
        />
      </Section>

      <Section
        title="Disabled"
        description="Disable the whole group with the group-level prop, or disable individual buttons via the buttons array."
        code={`<RavenButtonGroup variant="contained" disabled buttons={buttons} />
<RavenButtonGroup
  variant="outlined"
  buttons={[
    { label: 'One' },
    { label: 'Two', disabled: true },
    { label: 'Three' },
  ]}
/>`}
      >
        <Stack spacing={2} alignItems="flex-start">
          <RavenButtonGroup
            variant="contained"
            disabled
            aria-label="Disabled contained group"
            buttons={baseButtons}
          />
          <RavenButtonGroup
            variant="outlined"
            aria-label="Partially disabled button group"
            buttons={[
              { label: 'One' },
              { label: 'Two', disabled: true },
              { label: 'Three' },
            ]}
          />
        </Stack>
      </Section>

      <Section
        title="Loading"
        description="Use the actual Button loading prop on individual Raven buttons, matching the MUI v6 Button Group guidance more closely than a manual disabled-spinner workaround."
        code={`<RavenButtonGroup
  variant="outlined"
  aria-label="Loading button group"
  buttons={[
    { label: 'Submit' },
    { label: 'Fetch data' },
    {
      label: 'Save',
      loading: true,
      loadingPosition: 'start',
      startIcon: <SaveIcon />,
    },
  ]}
/>`}
      >
        <RavenButtonGroup
          variant="outlined"
          aria-label="Loading button group"
          buttons={[
            { label: 'Submit' },
            { label: 'Fetch data' },
            {
              label: 'Save',
              loading: true,
              loadingPosition: 'start',
              startIcon: <SaveIcon />,
            },
          ]}
        />
      </Section>

      <Section
        title="Full width"
        description="Full-width groups are supported and keep the 8px separation while stretching the whole control to the container width."
        code={`<Box sx={{ width: 360 }}>
  <RavenButtonGroup
    fullWidth
    variant="outlined"
    buttons={[
      { label: 'Draft' },
      { label: 'Review' },
      { label: 'Approve' },
    ]}
  />
</Box>`}
      >
        <Box sx={{ width: 360 }}>
          <RavenButtonGroup
            fullWidth
            variant="outlined"
            aria-label="Full width button group"
            buttons={[
              { label: 'Draft' },
              { label: 'Review' },
              { label: 'Approve' },
            ]}
          />
        </Box>
      </Section>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
        Raven product patterns
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2, maxWidth: 680, lineHeight: 1.6 }}
      >
        Common Raven patterns that benefit from grouped actions with breathable
        spacing rather than fully fused segmented controls.
      </Typography>

      <Section
        title="Incident status actions"
        description="Grouped status transition actions for incident workflow stages."
      >
        <RavenButtonGroup
          variant="contained"
          aria-label="Incident status actions"
          buttons={[
            { label: 'Draft' },
            { label: 'In Review' },
            { label: 'Approved' },
            { label: 'Closed' },
          ]}
        />
      </Section>

      <Section
        title="View toggle"
        description="Outlined button group used to switch between different content views."
      >
        <RavenButtonGroup
          variant="outlined"
          size="small"
          aria-label="View toggle"
          buttons={[
            { label: 'List' },
            { label: 'Grid' },
            { label: 'Timeline' },
          ]}
        />
      </Section>

      <Section
        title="Export options"
        description="Grouped export format selection for report generation."
      >
        <RavenButtonGroup
          variant="outlined"
          aria-label="Export options"
          buttons={[
            { label: 'PDF' },
            { label: 'CSV' },
            { label: 'Excel' },
          ]}
        />
      </Section>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        API
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
        Use the Raven `buttons` convenience API for standard grouped actions, or
        pass custom children for advanced compositions like split buttons. The
        wrapper continues to support the main MUI group props such as `variant`,
        `color`, `size`, `orientation`, `disabled`, `disableElevation`, and
        `fullWidth`. See the MUI documentation for{' '}
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

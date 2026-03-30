import { useState } from 'react';
import type { Meta } from '@storybook/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddCircleIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/DeleteRounded';
import SendIcon from '@mui/icons-material/SendRounded';
import SaveIcon from '@mui/icons-material/SaveRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUploadRounded';
import FileDownloadIcon from '@mui/icons-material/FileDownloadRounded';
import DoneIcon from '@mui/icons-material/DoneRounded';
import AlarmIcon from '@mui/icons-material/AlarmRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartRounded';
import FingerprintIcon from '@mui/icons-material/FingerprintRounded';

import { RavenButton, RavenIconButton } from './RavenButton';

export default {
  title: 'Components/Inputs/Button',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 680, lineHeight: 1.6 }}>
          {description}
        </Typography>
      )}
      <Box
        sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          bgcolor: '#fafafa',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

function LoadingDemo() {
  const [loading, setLoading] = useState(true);
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={2} alignItems="center">
        <RavenButton variant="text" onClick={() => setLoading(!loading)}>
          Toggle loading
        </RavenButton>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
        <RavenButton variant="outlined" loading={loading}>
          Submit
        </RavenButton>
        <RavenButton variant="outlined" loading={loading} loadingIndicator="Loading…">
          Fetch data
        </RavenButton>
        <RavenButton variant="outlined" loading={loading} loadingPosition="end" endIcon={<SendIcon />}>
          Send
        </RavenButton>
        <RavenButton variant="outlined" loading={loading} loadingPosition="start" startIcon={<SaveIcon />}>
          Save
        </RavenButton>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
        <RavenButton variant="contained" loading={loading}>
          Submit
        </RavenButton>
        <RavenButton variant="contained" loading={loading} loadingIndicator="Loading…">
          Fetch data
        </RavenButton>
        <RavenButton variant="contained" loading={loading} loadingPosition="end" endIcon={<SendIcon />}>
          Send
        </RavenButton>
        <RavenButton variant="contained" loading={loading} loadingPosition="start" startIcon={<SaveIcon />}>
          Save
        </RavenButton>
      </Stack>
    </Stack>
  );
}

function IconButtonLoadingDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <RavenIconButton loading={loading} onClick={() => setLoading(true)} aria-label="shopping cart" color="primary">
        <ShoppingCartIcon />
      </RavenIconButton>
      <RavenButton variant="text" size="small" onClick={() => setLoading(false)}>
        Reset
      </RavenButton>
    </Stack>
  );
}

export const ButtonPage = {
  name: 'Button',
  render: () => (
    <Box sx={{ maxWidth: 900, p: 4, fontFamily: "'Source Sans 3', sans-serif" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        Button
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 680, lineHeight: 1.7 }}>
        Raven-styled Button wrapping MUI v6 Button: Near Miss purple palette, pill radius, Source Sans 3 typography,
        and uppercase labels. Supports variants, semantic colors, sizes, icons, loading, and full width.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Section
        title="Basic variants"
        description="Text, contained, and outlined — the three standard MUI button variants."
      >
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <RavenButton variant="text">Text</RavenButton>
          <RavenButton variant="contained">Contained</RavenButton>
          <RavenButton variant="outlined">Outlined</RavenButton>
        </Stack>
      </Section>

      <Section
        title="Text buttons"
        description="Text buttons for low-emphasis actions; disabled and link styles."
      >
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <RavenButton variant="text">Primary</RavenButton>
          <RavenButton variant="text" disabled>
            Disabled
          </RavenButton>
          <RavenButton variant="text" href="#text-buttons">
            Link
          </RavenButton>
        </Stack>
      </Section>

      <Section
        title="Contained buttons"
        description="High-emphasis actions; disabled and link styles."
      >
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <RavenButton variant="contained">Contained</RavenButton>
          <RavenButton variant="contained" disabled>
            Disabled
          </RavenButton>
          <RavenButton variant="contained" href="#contained-buttons">
            Link
          </RavenButton>
        </Stack>
      </Section>

      <Section
        title="Disable elevation"
        description="Remove shadow from contained buttons with disableElevation."
      >
        <RavenButton variant="contained" disableElevation>
          Disable elevation
        </RavenButton>
      </Section>

      <Section
        title="Outlined buttons"
        description="Medium-emphasis actions; disabled and link styles."
      >
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <RavenButton variant="outlined">Primary</RavenButton>
          <RavenButton variant="outlined" disabled>
            Disabled
          </RavenButton>
          <RavenButton variant="outlined" href="#outlined-buttons">
            Link
          </RavenButton>
        </Stack>
      </Section>

      <Section title="Colors" description="Contained, outlined, and text for each semantic color.">
        <Stack spacing={3}>
          <Typography variant="subtitle2" color="text.secondary">
            Contained
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <RavenButton variant="contained" color="primary">Primary</RavenButton>
            <RavenButton variant="contained" color="secondary">Secondary</RavenButton>
            <RavenButton variant="contained" color="success">Success</RavenButton>
            <RavenButton variant="contained" color="error">Error</RavenButton>
            <RavenButton variant="contained" color="warning">Warning</RavenButton>
            <RavenButton variant="contained" color="info">Info</RavenButton>
          </Stack>

          <Typography variant="subtitle2" color="text.secondary">
            Outlined
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <RavenButton variant="outlined" color="primary">Primary</RavenButton>
            <RavenButton variant="outlined" color="secondary">Secondary</RavenButton>
            <RavenButton variant="outlined" color="success">Success</RavenButton>
            <RavenButton variant="outlined" color="error">Error</RavenButton>
            <RavenButton variant="outlined" color="warning">Warning</RavenButton>
            <RavenButton variant="outlined" color="info">Info</RavenButton>
          </Stack>

          <Typography variant="subtitle2" color="text.secondary">
            Text
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <RavenButton variant="text" color="primary">Primary</RavenButton>
            <RavenButton variant="text" color="secondary">Secondary</RavenButton>
            <RavenButton variant="text" color="success">Success</RavenButton>
            <RavenButton variant="text" color="error">Error</RavenButton>
            <RavenButton variant="text" color="warning">Warning</RavenButton>
            <RavenButton variant="text" color="info">Info</RavenButton>
          </Stack>
        </Stack>
      </Section>

      <Section title="Sizes" description="Small, medium, and large for each variant.">
        <Stack spacing={3}>
          {(['text', 'contained', 'outlined'] as const).map((variant) => (
            <Stack key={variant} direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
              <RavenButton variant={variant} size="small">Small</RavenButton>
              <RavenButton variant={variant} size="medium">Medium</RavenButton>
              <RavenButton variant={variant} size="large">Large</RavenButton>
            </Stack>
          ))}
        </Stack>
      </Section>

      <Section title="Buttons with icons" description="startIcon and endIcon for labeled actions.">
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <RavenButton variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </RavenButton>
          <RavenButton variant="contained" endIcon={<SendIcon />}>
            Send
          </RavenButton>
          <RavenButton variant="contained" startIcon={<DoneIcon />} color="secondary">
            Submit
          </RavenButton>
          <RavenButton variant="text" startIcon={<FileDownloadIcon />} color="secondary">
            Export
          </RavenButton>
        </Stack>
      </Section>

      <Section title="Icon buttons" description="Compact icon-only actions with RavenIconButton.">
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
          <RavenIconButton aria-label="delete">
            <DeleteIcon />
          </RavenIconButton>
          <RavenIconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
          </RavenIconButton>
          <RavenIconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
          </RavenIconButton>
          <RavenIconButton color="primary" aria-label="add to shopping cart">
            <ShoppingCartIcon />
          </RavenIconButton>
        </Stack>
      </Section>

      <Section title="Icon button sizes">
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
          <RavenIconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="inherit" />
          </RavenIconButton>
          <RavenIconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small" />
          </RavenIconButton>
          <RavenIconButton aria-label="delete" size="medium">
            <DeleteIcon />
          </RavenIconButton>
          <RavenIconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
          </RavenIconButton>
        </Stack>
      </Section>

      <Section title="Icon button colors">
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
          <RavenIconButton aria-label="fingerprint" color="primary">
            <FingerprintIcon />
          </RavenIconButton>
          <RavenIconButton aria-label="fingerprint" color="secondary">
            <FingerprintIcon />
          </RavenIconButton>
          <RavenIconButton aria-label="fingerprint" color="success">
            <FingerprintIcon />
          </RavenIconButton>
          <RavenIconButton aria-label="fingerprint" color="error">
            <FingerprintIcon />
          </RavenIconButton>
        </Stack>
      </Section>

      <Section title="Icon button loading">
        <IconButtonLoadingDemo />
      </Section>

      <Section title="Icon button with badge">
        <RavenIconButton aria-label="cart" color="primary">
          <Badge badgeContent={2} color="primary" overlap="circular">
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </RavenIconButton>
      </Section>

      <Section title="File upload" description="Use component=&quot;label&quot; with a hidden file input.">
        <RavenButton component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
          Upload files
          <input type="file" hidden multiple />
        </RavenButton>
      </Section>

      <Section title="Loading" description="loading, loadingIndicator, and loadingPosition on RavenButton.">
        <LoadingDemo />
      </Section>

      <Section title="Full width">
        <Box sx={{ width: 360 }}>
          <Stack spacing={2}>
            <RavenButton variant="contained" fullWidth>
              Full width
            </RavenButton>
            <RavenButton variant="outlined" fullWidth>
              Full width
            </RavenButton>
          </Stack>
        </Box>
      </Section>

      <Section title="Raven CTA patterns" description="Common Near Miss product patterns.">
        <Stack spacing={4}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
              Sidebar Report Incident CTA
            </Typography>
            <RavenButton variant="contained" startIcon={<AddCircleIcon />} color="primary">
              Report Incident
            </RavenButton>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
              Form action group (Save / Clear / Submit)
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="flex-start" flexWrap="wrap" useFlexGap>
              <RavenButton variant="text" color="secondary" size="large">
                Save as Draft
              </RavenButton>
              <RavenButton variant="outlined" color="error" size="large">
                Clear All
              </RavenButton>
              <RavenButton variant="contained" color="secondary" size="large" startIcon={<DoneIcon />}>
                Submit
              </RavenButton>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
              Export button (text + icon)
            </Typography>
            <RavenButton variant="text" color="secondary" startIcon={<FileDownloadIcon />}>
              Export
            </RavenButton>
          </Box>
        </Stack>
      </Section>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        API
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
        See the MUI documentation for{' '}
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
          href="https://v6.mui.com/material-ui/api/icon-button/"
          target="_blank"
          rel="noopener"
          sx={{ color: 'secondary.main', fontWeight: 600 }}
        >
          {'<IconButton />'}
        </Typography>
        .
      </Typography>
    </Box>
  ),
};

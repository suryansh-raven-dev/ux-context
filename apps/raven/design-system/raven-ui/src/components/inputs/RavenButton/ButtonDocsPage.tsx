import { useState, type ReactNode } from 'react';

import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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

const body = {
  secondary: { color: 'text.secondary', maxWidth: '72ch' as const },
};

function Demo({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        mb: 2,
      }}
    >
      {children}
    </Box>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <Box
      component="pre"
      sx={{
        p: 2,
        borderRadius: 1,
        bgcolor: 'action.hover',
        fontSize: '0.8125rem',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        overflow: 'auto',
        mb: 2,
        maxWidth: '100%',
      }}
    >
      {children}
    </Box>
  );
}

function LoadingSection() {
  const [loading, setLoading] = useState(true);
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
        <RavenButton variant="text" onClick={() => setLoading(!loading)}>
          Toggle loading
        </RavenButton>
      </Stack>

      <Typography variant="subtitle2" color="text.secondary">
        Outlined
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
        <RavenButton variant="outlined" loading={loading}>
          Submit
        </RavenButton>
        <RavenButton variant="outlined" loading={loading} loadingIndicator="Loading…">
          Fetch data
        </RavenButton>
        <RavenButton
          variant="outlined"
          loading={loading}
          loadingPosition="end"
          endIcon={<SendIcon />}
        >
          Send
        </RavenButton>
        <RavenButton
          variant="outlined"
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          Save
        </RavenButton>
      </Stack>

      <Typography variant="subtitle2" color="text.secondary">
        Contained
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
        <RavenButton variant="contained" loading={loading}>
          Submit
        </RavenButton>
        <RavenButton variant="contained" loading={loading} loadingIndicator="Loading…">
          Fetch data
        </RavenButton>
        <RavenButton
          variant="contained"
          loading={loading}
          loadingPosition="end"
          endIcon={<SendIcon />}
        >
          Send
        </RavenButton>
        <RavenButton
          variant="contained"
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          Save
        </RavenButton>
      </Stack>

      <Typography variant="body2" sx={body.secondary}>
        MUI v6.4+ exposes a <code>loading</code> prop on <code>Button</code>. Raven styles keep the
        loading indicator aligned with uppercase labels and pill-shaped buttons. Prefer{' '}
        <code>{'loading: true | false | null'}</code>
        —avoid spreading conditional props that omit{' '}
        <code>loading</code>, which can interact badly with translation layers.
      </Typography>
    </Stack>
  );
}

function IconButtonLoadingSection() {
  const [loading, setLoading] = useState(false);
  return (
    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
      <RavenIconButton
        loading={loading}
        onClick={() => setLoading(true)}
        aria-label="shopping cart"
        color="primary"
      >
        <ShoppingCartIcon />
      </RavenIconButton>
      <RavenButton variant="text" size="small" onClick={() => setLoading(false)}>
        Reset
      </RavenButton>
      <Typography variant="body2" sx={{ ...body.secondary, ml: 1 }}>
        <code>RavenIconButton</code> maps <code>loading</code> to a compact spinner while preserving
        Raven hover and focus rings.
      </Typography>
    </Stack>
  );
}

/**
 * Single-page documentation layout aligned with Material UI v6 Button docs,
 * adapted for Raven (Near-Miss theme, Source Sans 3, uppercase labels, pill radius).
 * @see https://v6.mui.com/material-ui/react-button/
 */
export function ButtonsDocumentation() {
  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', py: 2, px: { xs: 1, sm: 2 } }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
        Buttons
      </Typography>
      <Typography variant="body1" sx={{ ...body.secondary, mb: 2 }}>
        Buttons let people take actions with a single tap. In Raven, <strong>RavenButton</strong> and{' '}
        <strong>RavenIconButton</strong> wrap MUI v6 with the Near-Miss palette, pill-shaped corners
        (50px radius), Source Sans 3, and uppercase labels—while forwarding standard MUI props
        (variants, colors, sizes, loading, icons, full width, and links).
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 4 }}>
        Use them in modals, forms, cards, toolbars, and side navigation. For behavior and API
        details, also see the official{' '}
        <a href="https://v6.mui.com/material-ui/react-button/" target="_blank" rel="noreferrer">
          Material UI Button
        </a>{' '}
        documentation.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography id="basic-button" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Basic button
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        RavenButton supports three variants: <strong>text</strong> (default), <strong>contained</strong>, and{' '}
        <strong>outlined</strong>.
      </Typography>
      <Demo>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <RavenButton variant="text">Text</RavenButton>
          <RavenButton variant="contained">Contained</RavenButton>
          <RavenButton variant="outlined">Outlined</RavenButton>
        </Stack>
      </Demo>

      <Typography id="text-button" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
        Text button
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Text buttons suit lower-emphasis actions—in dialogs, cards, or secondary toolbars—where content
        should stay visually dominant.
      </Typography>
      <Demo>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <RavenButton variant="text">Primary</RavenButton>
          <RavenButton variant="text" disabled>
            Disabled
          </RavenButton>
          <RavenButton variant="text" href="#text-button">
            Link
          </RavenButton>
        </Stack>
      </Demo>

      <Typography id="contained-button" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
        Contained button
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Contained buttons are high-emphasis: filled surface, elevation, and strong contrast—ideal for
        primary actions. Remove shadow with <code>disableElevation</code> when you want a flatter look
        inside dense layouts.
      </Typography>
      <Demo>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
            <RavenButton variant="contained">Contained</RavenButton>
            <RavenButton variant="contained" disabled>
              Disabled
            </RavenButton>
            <RavenButton variant="contained" href="#contained-button">
              Link
            </RavenButton>
          </Stack>
          <RavenButton variant="contained" disableElevation>
            Disable elevation
          </RavenButton>
        </Stack>
      </Demo>

      <Typography id="outlined-button" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
        Outlined button
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Outlined buttons are medium emphasis—between text and contained. Raven keeps a crisp outline that
        pairs with purple focus rings for keyboard users.
      </Typography>
      <Demo>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <RavenButton variant="outlined">Primary</RavenButton>
          <RavenButton variant="outlined" disabled>
            Disabled
          </RavenButton>
          <RavenButton variant="outlined" href="#outlined-button">
            Link
          </RavenButton>
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      <Typography id="handling-clicks" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Handling clicks
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        All button components accept <code>onClick</code> on the root element, same as MUI.
      </Typography>
      <CodeBlock>{`<RavenButton
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</RavenButton>`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      <Typography id="color" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Color
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use the <code>color</code> prop for semantic emphasis. Raven maps these to the Near-Miss palette
        (purple primary, neutral secondaries, and accessible status colors).
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
        Contained
      </Typography>
      <Demo>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <RavenButton variant="contained" color="primary">
            Primary
          </RavenButton>
          <RavenButton variant="contained" color="secondary">
            Secondary
          </RavenButton>
          <RavenButton variant="contained" color="success">
            Success
          </RavenButton>
          <RavenButton variant="contained" color="error">
            Error
          </RavenButton>
          <RavenButton variant="contained" color="warning">
            Warning
          </RavenButton>
          <RavenButton variant="contained" color="info">
            Info
          </RavenButton>
        </Stack>
      </Demo>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, mt: 2 }}>
        Outlined
      </Typography>
      <Demo>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <RavenButton variant="outlined" color="primary">
            Primary
          </RavenButton>
          <RavenButton variant="outlined" color="secondary">
            Secondary
          </RavenButton>
          <RavenButton variant="outlined" color="success">
            Success
          </RavenButton>
          <RavenButton variant="outlined" color="error">
            Error
          </RavenButton>
          <RavenButton variant="outlined" color="warning">
            Warning
          </RavenButton>
          <RavenButton variant="outlined" color="info">
            Info
          </RavenButton>
        </Stack>
      </Demo>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, mt: 2 }}>
        Text
      </Typography>
      <Demo>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <RavenButton variant="text" color="primary">
            Primary
          </RavenButton>
          <RavenButton variant="text" color="secondary">
            Secondary
          </RavenButton>
          <RavenButton variant="text" color="success">
            Success
          </RavenButton>
          <RavenButton variant="text" color="error">
            Error
          </RavenButton>
          <RavenButton variant="text" color="warning">
            Warning
          </RavenButton>
          <RavenButton variant="text" color="info">
            Info
          </RavenButton>
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      <Typography id="sizes" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Sizes
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use <code>{'size="small" | "medium" | "large"'}</code>. Raven adjusts padding and font weight
        (large uses semibold for stronger CTAs).
      </Typography>
      <Demo>
        <Stack spacing={2}>
          {(['text', 'contained', 'outlined'] as const).map((variant) => (
            <Stack key={variant} direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
              <RavenButton variant={variant} size="small">
                Small
              </RavenButton>
              <RavenButton variant={variant} size="medium">
                Medium
              </RavenButton>
              <RavenButton variant={variant} size="large">
                Large
              </RavenButton>
            </Stack>
          ))}
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      <Typography id="icons-label" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Buttons with icons and label
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Icons improve scanability—pair <code>startIcon</code> and <code>endIcon</code> with short, uppercase
        Raven labels.
      </Typography>
      <Demo>
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
      </Demo>

      <Divider sx={{ my: 4 }} />

      <Typography id="icon-button" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Icon button
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Icon buttons work well in app bars, tables, and compact toolbars. Always provide an accessible
        name with <code>aria-label</code>.
      </Typography>
      <Demo>
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
      </Demo>

      <Typography id="icon-button-sizes" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
        Sizes
      </Typography>
      <Demo>
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
      </Demo>

      <Typography id="icon-button-colors" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
        Colors
      </Typography>
      <Demo>
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
      </Demo>

      <Typography id="icon-button-loading" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
        Loading
      </Typography>
      <Demo>
        <IconButtonLoadingSection />
      </Demo>

      <Typography id="icon-button-badge" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
        Badge
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Combine with MUI <code>Badge</code> for counts and notifications.
      </Typography>
      <Demo>
        <RavenIconButton aria-label="cart" color="primary">
          <Badge badgeContent={2} color="primary" overlap="circular">
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </RavenIconButton>
      </Demo>

      <Divider sx={{ my: 4 }} />

      <Typography id="file-upload" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        File upload
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use <code>component=&quot;label&quot;</code> and a visually hidden file input—same pattern as MUI, styled
        with Raven contained button tokens.
      </Typography>
      <Demo>
        <RavenButton
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <input type="file" hidden multiple />
        </RavenButton>
      </Demo>

      <Divider sx={{ my: 4 }} />

      <Typography id="loading" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Loading
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use MUI&apos;s <code>loading</code> prop on <code>RavenButton</code> for spinners and preserved layout.
      </Typography>
      <Demo>
        <LoadingSection />
      </Demo>

      <Divider sx={{ my: 4 }} />

      <Typography id="full-width" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Full width
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Set <code>fullWidth</code> for stacked actions on mobile or narrow panels.
      </Typography>
      <Demo>
        <Box sx={{ maxWidth: 360 }}>
          <Stack spacing={2}>
            <RavenButton variant="contained" fullWidth>
              Full width
            </RavenButton>
            <RavenButton variant="outlined" fullWidth>
              Full width
            </RavenButton>
          </Stack>
        </Box>
      </Demo>

      <Divider sx={{ my: 4 }} />

      <Typography id="raven-cta" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Raven CTA patterns
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Product-specific combinations we use across Near-Miss flows—reporting, forms, and exports.
      </Typography>
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            Sidebar — report incident
          </Typography>
          <RavenButton variant="contained" startIcon={<AddCircleIcon />} color="primary">
            Report Incident
          </RavenButton>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            Form actions — save / clear / submit
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
            Export — text button with icon
          </Typography>
          <RavenButton variant="text" color="secondary" startIcon={<FileDownloadIcon />}>
            Export
          </RavenButton>
        </Box>
      </Stack>

      <Divider sx={{ my: 4 }} />

      <Typography id="customization" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Customization
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary }}>
        Raven styles live in <code>ravenNearMissTheme</code> and <code>RavenButton.css</code> (pill radius,
        typography, elevation). Override with <code>sx</code> or theme component overrides like any MUI
        button—see the{' '}
        <a href="https://v6.mui.com/material-ui/customization/how-to-customize/" target="_blank" rel="noreferrer">
          MUI customization
        </a>{' '}
        guide for patterns.
      </Typography>
    </Box>
  );
}

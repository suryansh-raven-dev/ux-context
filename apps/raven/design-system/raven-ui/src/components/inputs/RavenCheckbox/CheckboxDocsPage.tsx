import { useState, type ReactNode } from 'react';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteIcon from '@mui/icons-material/FavoriteRounded';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkIcon from '@mui/icons-material/BookmarkRounded';

import { RavenCheckbox } from './RavenCheckbox';

const body = {
  secondary: { color: 'text.secondary', maxWidth: '72ch' as const },
};

const ariaLabel = { inputProps: { 'aria-label': 'Checkbox demo' } };

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

function ControlledSection() {
  const [checked, setChecked] = useState(true);
  return (
    <Stack spacing={1}>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography variant="body2" sx={body.secondary}>
        Current state: <strong>{checked ? 'checked' : 'unchecked'}</strong>
      </Typography>
    </Stack>
  );
}

function IndeterminateSection() {
  const [checked, setChecked] = useState([true, false]);

  const handleParent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  return (
    <Box>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleParent}
          />
        }
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label="Child 1"
          control={
            <Checkbox
              checked={checked[0]}
              onChange={(e) => setChecked([e.target.checked, checked[1]])}
            />
          }
        />
        <FormControlLabel
          label="Child 2"
          control={
            <Checkbox
              checked={checked[1]}
              onChange={(e) => setChecked([checked[0], e.target.checked])}
            />
          }
        />
      </Box>
    </Box>
  );
}

function FormGroupSection() {
  const [state, setState] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const { email, sms, push } = state;
  const error = [email, sms, push].filter(Boolean).length === 0;

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Notification preferences</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={email} onChange={(e) => setState({ ...state, email: e.target.checked })} name="email" />
            }
            label="Email notifications"
          />
          <FormControlLabel
            control={
              <Checkbox checked={sms} onChange={(e) => setState({ ...state, sms: e.target.checked })} name="sms" />
            }
            label="SMS notifications"
          />
          <FormControlLabel
            control={
              <Checkbox checked={push} onChange={(e) => setState({ ...state, push: e.target.checked })} name="push" />
            }
            label="Push notifications"
          />
        </FormGroup>
        <FormHelperText>Choose at least one</FormHelperText>
      </FormControl>

      <FormControl required error={error} component="fieldset" variant="standard">
        <FormLabel component="legend">Pick at least one *</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={email} onChange={(e) => setState({ ...state, email: e.target.checked })} name="email" />
            }
            label="Email notifications"
          />
          <FormControlLabel
            control={
              <Checkbox checked={sms} onChange={(e) => setState({ ...state, sms: e.target.checked })} name="sms" />
            }
            label="SMS notifications"
          />
          <FormControlLabel
            control={
              <Checkbox checked={push} onChange={(e) => setState({ ...state, push: e.target.checked })} name="push" />
            }
            label="Push notifications"
          />
        </FormGroup>
        {error && <FormHelperText>You must select at least one option</FormHelperText>}
      </FormControl>
    </Stack>
  );
}

export function CheckboxDocumentation() {
  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', py: 2, px: { xs: 1, sm: 2 } }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
        Checkbox
      </Typography>
      <Typography variant="body1" sx={{ ...body.secondary, mb: 2 }}>
        Checkboxes let users select one or more items from a set. In Raven, <strong>RavenCheckbox</strong> wraps
        MUI v6 with the Near-Miss purple palette, Source Sans 3 typography, and brand hover states. Use checkboxes
        in multi-select filters, notification preferences, and incident form toggles.
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 4 }}>
        If you have a single option, prefer an on/off switch instead. For the full API reference, see the{' '}
        <a href="https://v6.mui.com/material-ui/react-checkbox/" target="_blank" rel="noreferrer">
          Material UI Checkbox
        </a>{' '}
        documentation.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* ─── Basic checkboxes ─────────────────────────────── */}
      <Typography id="basic-checkboxes" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Basic checkboxes
      </Typography>
      <Demo>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox {...ariaLabel} defaultChecked />
          <Checkbox {...ariaLabel} />
          <Checkbox {...ariaLabel} disabled />
          <Checkbox {...ariaLabel} disabled checked />
        </Stack>
      </Demo>
      <CodeBlock>{`<Checkbox defaultChecked />
<Checkbox />
<Checkbox disabled />
<Checkbox disabled checked />`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      {/* ─── Label ────────────────────────────────────────── */}
      <Typography id="label" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Label
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use <code>RavenCheckbox</code> (which wraps <code>FormControlLabel</code>) or <code>FormControlLabel</code> directly
        for labelled checkboxes.
      </Typography>
      <Demo>
        <FormGroup>
          <RavenCheckbox label="Label" checked />
          <RavenCheckbox label="Required" />
          <RavenCheckbox label="Disabled" disabled />
        </FormGroup>
      </Demo>
      <CodeBlock>{`<RavenCheckbox label="Label" checked />
<RavenCheckbox label="Required" />
<RavenCheckbox label="Disabled" disabled />`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      {/* ─── Size ─────────────────────────────────────────── */}
      <Typography id="size" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Size
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use the <code>size</code> prop or customize the SVG icon font size.
      </Typography>
      <Demo>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox {...ariaLabel} defaultChecked size="small" />
          <Checkbox {...ariaLabel} defaultChecked />
          <Checkbox
            {...ariaLabel}
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Color ────────────────────────────────────────── */}
      <Typography id="color" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Color
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Raven defaults to purple (<code>primary</code>). Pass <code>color</code> for
        semantic alternatives.
      </Typography>
      <Demo>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox {...ariaLabel} defaultChecked color="primary" />
          <Checkbox {...ariaLabel} defaultChecked color="secondary" />
          <Checkbox {...ariaLabel} defaultChecked color="success" />
          <Checkbox {...ariaLabel} defaultChecked color="error" />
          <Checkbox {...ariaLabel} defaultChecked color="warning" />
          <Checkbox {...ariaLabel} defaultChecked color="info" />
          <Checkbox {...ariaLabel} defaultChecked color="default" />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Icon ─────────────────────────────────────────── */}
      <Typography id="icon" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Icon
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Swap the default check icon with custom SVGs via <code>icon</code> and <code>checkedIcon</code>.
      </Typography>
      <Demo>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox
            {...ariaLabel}
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon />}
          />
          <Checkbox
            {...ariaLabel}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Controlled ───────────────────────────────────── */}
      <Typography id="controlled" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Controlled
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Manage the checkbox state externally with <code>checked</code> and <code>onChange</code>.
      </Typography>
      <Demo>
        <ControlledSection />
      </Demo>
      <CodeBlock>{`const [checked, setChecked] = useState(true);

<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  inputProps={{ 'aria-label': 'controlled' }}
/>`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      {/* ─── Indeterminate ────────────────────────────────── */}
      <Typography id="indeterminate" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Indeterminate
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        A checkbox has two form states (checked / unchecked) but can render a <strong>third visual
        state</strong>—indeterminate—useful for "select all" patterns in Raven tables and filter panels.
      </Typography>
      <Demo>
        <IndeterminateSection />
      </Demo>
      <Typography variant="body2" sx={{ ...body.secondary, mt: 1 }}>
        When <code>indeterminate</code> is set, the <code>checked</code> value only affects
        form submission—it has no accessibility or UX implications.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* ─── FormGroup ────────────────────────────────────── */}
      <Typography id="formgroup" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        FormGroup
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        <code>FormGroup</code> clusters related checkboxes with shared labels, error states,
        and helper text—ideal for Raven notification preferences and incident form sections.
      </Typography>
      <Demo>
        <FormGroupSection />
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Label placement ──────────────────────────────── */}
      <Typography id="label-placement" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Label placement
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Control where the label appears relative to the checkbox with <code>labelPlacement</code>.
      </Typography>
      <Demo>
        <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap" useFlexGap>
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Checkbox />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox defaultChecked />}
            label="End"
            labelPlacement="end"
          />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Raven patterns ───────────────────────────────── */}
      <Typography id="raven-patterns" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Raven product patterns
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Common checkbox layouts used across Near-Miss product flows.
      </Typography>

      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
        Notification preferences
      </Typography>
      <Demo>
        <Stack spacing={0.5}>
          <RavenCheckbox label="Email notifications" checked />
          <RavenCheckbox label="SMS notifications" />
          <RavenCheckbox label="Push notifications" checked />
        </Stack>
      </Demo>

      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, mt: 2 }}>
        Incident form — acknowledgement
      </Typography>
      <Demo>
        <RavenCheckbox label="I confirm this report is accurate to the best of my knowledge" />
      </Demo>

      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, mt: 2 }}>
        Filter panel — multi-select
      </Typography>
      <Demo>
        <FormGroup row>
          <RavenCheckbox label="Open" checked />
          <RavenCheckbox label="In Progress" checked />
          <RavenCheckbox label="Resolved" />
          <RavenCheckbox label="Closed" />
        </FormGroup>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Accessibility ────────────────────────────────── */}
      <Typography id="accessibility" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Accessibility
      </Typography>
      <Typography variant="body2" sx={body.secondary}>
        All checkboxes must have labels. Use <code>RavenCheckbox</code> (which renders{' '}
        <code>FormControlLabel</code>) or apply <code>aria-label</code> via <code>inputProps</code> when
        a visible label isn&apos;t practical. See{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/" target="_blank" rel="noreferrer">
          WAI-ARIA Checkbox Pattern
        </a>
        .
      </Typography>
      <CodeBlock>{`<Checkbox
  inputProps={{ 'aria-label': 'Checkbox A' }}
/>`}</CodeBlock>
    </Box>
  );
}

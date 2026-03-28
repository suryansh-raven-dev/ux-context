import { useState, type ReactNode } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import AccountCircleIcon from '@mui/icons-material/AccountCircleRounded';
import SearchIcon from '@mui/icons-material/SearchRounded';
import VisibilityIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffRounded';

import { RavenTextField } from './RavenTextField';

const body = {
  secondary: { color: 'text.secondary', maxWidth: '72ch' as const },
};

function Demo({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        p: 3,
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
  const [value, setValue] = useState('Raven');
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <RavenTextField
        label="Controlled"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <RavenTextField
        label="Uncontrolled"
        defaultValue="Near-Miss"
      />
    </Stack>
  );
}

function PasswordField() {
  const [show, setShow] = useState(false);
  return (
    <RavenTextField
      label="Password"
      type={show ? 'text' : 'password'}
      defaultValue="raven-secret"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={show ? 'hide password' : 'show password'}
                onClick={() => setShow(!show)}
                edge="end"
                size="small"
              >
                {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

const currencies = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'GBP', label: '£' },
  { value: 'JPY', label: '¥' },
];

export function TextFieldDocumentation() {
  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', py: 2, px: { xs: 1, sm: 2 } }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
        Text Field
      </Typography>
      <Typography variant="body1" sx={{ ...body.secondary, mb: 2 }}>
        Text fields let users enter and edit text. In Raven, <strong>RavenTextField</strong> wraps
        MUI v6 <code>TextField</code> with the Near-Miss theme—Source Sans 3 typography, purple
        focus rings, and brand-consistent border radius. They appear in incident forms, search bars,
        filters, and dialogs throughout the product.
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 4 }}>
        For the full API reference, see the{' '}
        <a href="https://v6.mui.com/material-ui/react-text-field/" target="_blank" rel="noreferrer">
          Material UI Text Field
        </a>{' '}
        documentation.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* ─── Basic TextField ──────────────────────────────── */}
      <Typography id="basic-textfield" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Basic TextField
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        <code>RavenTextField</code> supports the same three variants as MUI: <strong>outlined</strong> (default
        in Raven), <strong>filled</strong>, and <strong>standard</strong>. Raven defaults to outlined for
        consistency across all forms.
      </Typography>
      <Demo>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RavenTextField label="Outlined" variant="outlined" />
          <RavenTextField label="Filled" variant="filled" />
          <RavenTextField label="Standard" variant="standard" />
        </Stack>
      </Demo>
      <CodeBlock>{`<RavenTextField label="Outlined" variant="outlined" />
<RavenTextField label="Filled" variant="filled" />
<RavenTextField label="Standard" variant="standard" />`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      {/* ─── Form props ───────────────────────────────────── */}
      <Typography id="form-props" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Form props
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Standard form attributes are supported: <code>required</code>, <code>disabled</code>,{' '}
        <code>type</code>, <code>helperText</code>, and more.
      </Typography>
      <Demo>
        <Stack spacing={2} sx={{ maxWidth: 480 }}>
          <RavenTextField label="Required" required defaultValue="Hello Raven" />
          <RavenTextField label="Disabled" disabled defaultValue="Cannot edit" />
          <RavenTextField label="Password" type="password" autoComplete="current-password" />
          <RavenTextField
            label="Read Only"
            defaultValue="Read-only value"
            slotProps={{ input: { readOnly: true } }}
          />
          <RavenTextField label="Number" type="number" defaultValue="42" />
          <RavenTextField label="Search" type="search" />
          <RavenTextField
            label="Helper text"
            defaultValue="Default value"
            helperText="Some important text"
          />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Validation ───────────────────────────────────── */}
      <Typography id="validation" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Validation
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use <code>error</code> to toggle the error state and <code>helperText</code> for feedback.
      </Typography>
      <Demo>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RavenTextField label="Error" error defaultValue="Incorrect entry" />
          <RavenTextField
            label="Error"
            error
            defaultValue="Incorrect entry"
            helperText="Please enter a valid value."
          />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Multiline ────────────────────────────────────── */}
      <Typography id="multiline" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Multiline
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        The <code>multiline</code> prop transforms the field into a textarea. Use <code>rows</code> for
        a fixed height, or <code>minRows</code> / <code>maxRows</code> for auto-growing.
      </Typography>
      <Demo>
        <Stack spacing={2} sx={{ maxWidth: 480 }}>
          <RavenTextField label="Multiline" multiline maxRows={4} />
          <RavenTextField
            label="Multiline Placeholder"
            placeholder="Enter a detailed description…"
            multiline
          />
          <RavenTextField
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default value for a fixed-height textarea"
          />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Select ───────────────────────────────────────── */}
      <Typography id="select" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Select
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        The <code>select</code> prop turns the text field into a dropdown. Use <code>MenuItem</code> children
        for options.
      </Typography>
      <Demo>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RavenTextField
            select
            label="Currency"
            defaultValue="EUR"
            helperText="Please select your currency"
            sx={{ minWidth: 200 }}
          >
            {currencies.map((c) => (
              <MenuItem key={c.value} value={c.value}>
                {c.label}
              </MenuItem>
            ))}
          </RavenTextField>
          <RavenTextField
            select
            label="Currency"
            defaultValue="USD"
            slotProps={{ select: { native: true } }}
            helperText="Native select"
            sx={{ minWidth: 200 }}
          >
            {currencies.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </RavenTextField>
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Icons / Input Adornments ─────────────────────── */}
      <Typography id="icons" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Icons
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use <code>InputAdornment</code> with <code>slotProps.input</code> to add icons, prefixes, or
        actions to the field.
      </Typography>

      <Typography id="input-adornments" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
        Input Adornments
      </Typography>
      <Demo>
        <Stack spacing={2} sx={{ maxWidth: 480 }}>
          <RavenTextField
            label="With start icon"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <RavenTextField
            label="Search"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <RavenTextField
            label="Weight"
            defaultValue="80"
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              },
            }}
          />
          <PasswordField />
          <RavenTextField
            label="Amount"
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              },
            }}
          />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Sizes ────────────────────────────────────────── */}
      <Typography id="sizes" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Sizes
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use <code>size=&quot;small&quot;</code> for denser layouts like filter bars and table headers.
      </Typography>
      <Demo>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RavenTextField label="Small" size="small" defaultValue="Small" />
          <RavenTextField label="Normal" defaultValue="Normal" />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Full width ───────────────────────────────────── */}
      <Typography id="full-width" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Full width
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Set <code>fullWidth</code> so the field stretches to its container—common in Raven
        mobile layouts and stacked form sections.
      </Typography>
      <Demo>
        <RavenTextField label="Full Width" fullWidth />
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Controlled vs Uncontrolled ───────────────────── */}
      <Typography id="controlled" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Controlled vs. Uncontrolled
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        A <strong>controlled</strong> field is driven by <code>value</code> + <code>onChange</code>;
        an <strong>uncontrolled</strong> field manages its own state via <code>defaultValue</code>.
      </Typography>
      <Demo>
        <ControlledSection />
      </Demo>
      <CodeBlock>{`const [value, setValue] = useState('Raven');

<RavenTextField
  label="Controlled"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
<RavenTextField
  label="Uncontrolled"
  defaultValue="Near-Miss"
/>`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      {/* ─── Color ────────────────────────────────────────── */}
      <Typography id="color" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Color
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        The <code>color</code> prop changes the highlight color when focused. Raven defaults to
        purple (<code>primary</code>).
      </Typography>
      <Demo>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RavenTextField label="Primary" color="primary" focused />
          <RavenTextField label="Secondary" color="secondary" focused />
          <RavenTextField label="Success" color="success" focused />
          <RavenTextField label="Warning" color="warning" focused />
          <RavenTextField label="Error" color="error" focused />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Margin ───────────────────────────────────────── */}
      <Typography id="margin" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Margin
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        The <code>margin</code> prop controls vertical spacing: <code>none</code> (default),{' '}
        <code>dense</code>, or <code>normal</code>.
      </Typography>
      <Demo>
        <Box>
          <Box sx={{ height: 2, bgcolor: 'error.main', mb: 0 }} />
          <TextField label={'margin="none"'} margin="none" />
          <Box sx={{ height: 2, bgcolor: 'error.main' }} />
          <TextField label={'margin="dense"'} margin="dense" />
          <Box sx={{ height: 2, bgcolor: 'error.main' }} />
          <TextField label={'margin="normal"'} margin="normal" />
          <Box sx={{ height: 2, bgcolor: 'error.main' }} />
        </Box>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Raven product patterns ───────────────────────── */}
      <Typography id="raven-patterns" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Raven product patterns
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Common text field layouts used across Near-Miss product flows.
      </Typography>

      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
        Incident report — description field
      </Typography>
      <Demo>
        <RavenTextField
          label="Incident Description"
          placeholder="Describe what happened, where, and when…"
          multiline
          rows={4}
          fullWidth
          required
        />
      </Demo>

      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, mt: 2 }}>
        Search bar with icon
      </Typography>
      <Demo>
        <RavenTextField
          placeholder="Search incidents…"
          size="small"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
        />
      </Demo>

      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, mt: 2 }}>
        Inline form row — name + email
      </Typography>
      <Demo>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RavenTextField label="Reporter Name" required fullWidth />
          <RavenTextField label="Email" type="email" required fullWidth helperText="We'll use this for follow-up" />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ─── Accessibility ────────────────────────────────── */}
      <Typography id="accessibility" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Accessibility
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        The input must be linked to its label and helper text. <code>RavenTextField</code> handles
        this automatically when you provide a unique <code>id</code>. If composing lower-level
        components, wire up <code>htmlFor</code> and <code>aria-describedby</code> manually.
      </Typography>
      <CodeBlock>{`<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">
    We'll never share your email.
  </FormHelperText>
</FormControl>`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      {/* ─── Customization ────────────────────────────────── */}
      <Typography id="customization" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Customization
      </Typography>
      <Typography variant="body2" sx={body.secondary}>
        Raven styles live in <code>ravenNearMissTheme</code> and <code>RavenTextField.css</code> (border
        radius, Source Sans 3, purple focus rings). Override with <code>sx</code> or theme component
        overrides—see the{' '}
        <a href="https://v6.mui.com/material-ui/customization/how-to-customize/" target="_blank" rel="noreferrer">
          MUI customization
        </a>{' '}
        guide for patterns.
      </Typography>
    </Box>
  );
}

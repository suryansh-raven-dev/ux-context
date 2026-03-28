import React, { useState, useEffect, type ReactNode } from 'react';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { RavenAutocomplete, createFilterOptions } from './RavenAutocomplete';

/* ── Shared helpers ───────────────────────────────────────── */
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

/* ── Data ─────────────────────────────────────────────────── */
const incidentCategories = [
  'Equipment Failure', 'Human Error', 'Process Deviation', 'Environmental Hazard',
  'Near Miss', 'Safety Observation', 'Chemical Spill', 'Slip / Trip / Fall',
  'Electrical Hazard', 'Fire / Explosion Risk', 'Confined Space', 'Falling Object',
  'Ergonomic Issue', 'Vehicle / Transport', 'PPE Non-Compliance',
];

const locations = [
  { label: 'Plant A — Reactor Unit', id: 'plant-a-reactor' },
  { label: 'Plant A — Storage Area', id: 'plant-a-storage' },
  { label: 'Plant B — Packaging Line', id: 'plant-b-packaging' },
  { label: 'Plant B — Warehouse', id: 'plant-b-warehouse' },
  { label: 'Plant C — Lab', id: 'plant-c-lab' },
  { label: 'Plant C — Loading Dock', id: 'plant-c-loading' },
  { label: 'Office — Ground Floor', id: 'office-ground' },
  { label: 'Office — First Floor', id: 'office-first' },
  { label: 'Yard — Parking Lot', id: 'yard-parking' },
  { label: 'Yard — Main Gate', id: 'yard-gate' },
];

interface Investigator { name: string; department: string; fixed?: boolean; }
const investigators: Investigator[] = [
  { name: 'Rajesh Kumar', department: 'EHS' },
  { name: 'Sarah Chen', department: 'Operations' },
  { name: 'David Smith', department: 'Maintenance' },
  { name: 'Priya Sharma', department: 'Quality' },
  { name: 'Ahmed Hassan', department: 'EHS' },
  { name: 'Maria Garcia', department: 'HR' },
  { name: 'James Wilson', department: 'Engineering' },
  { name: 'Li Wei', department: 'Production' },
];

const severityLevels = [
  { label: 'Critical', group: 'High Priority' },
  { label: 'Major', group: 'High Priority' },
  { label: 'Moderate', group: 'Medium Priority' },
  { label: 'Minor', group: 'Low Priority' },
  { label: 'Negligible', group: 'Low Priority' },
];

const timeSlots = [
  '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
];

interface Country { code: string; label: string; phone: string; }
const countries: Country[] = [
  { code: 'IN', label: 'India', phone: '91' }, { code: 'TH', label: 'Thailand', phone: '66' },
  { code: 'ID', label: 'Indonesia', phone: '62' }, { code: 'US', label: 'United States', phone: '1' },
  { code: 'DE', label: 'Germany', phone: '49' }, { code: 'FR', label: 'France', phone: '33' },
  { code: 'GB', label: 'United Kingdom', phone: '44' }, { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'IT', label: 'Italy', phone: '39' }, { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'BR', label: 'Brazil', phone: '55' }, { code: 'JP', label: 'Japan', phone: '81' },
  { code: 'AU', label: 'Australia', phone: '61' }, { code: 'CN', label: 'China', phone: '86' },
];

function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode.toUpperCase().replace(/./g, (c) => String.fromCodePoint(c.charCodeAt(0) + 127397))
    : isoCode;
}

/* ── Interactive sub-sections ─────────────────────────────── */
function ControlledSection() {
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  return (
    <Stack spacing={1}>
      <Typography variant="body2" sx={body.secondary}>
        value: <strong>{value !== null ? `'${value}'` : 'null'}</strong> &nbsp;|&nbsp; inputValue: <strong>'{inputValue}'</strong>
      </Typography>
      <RavenAutocomplete
        options={incidentCategories}
        label="Controlled Category"
        value={value}
        onChange={(_e, v) => setValue(v)}
        inputValue={inputValue}
        onInputChange={(_e, v) => setInputValue(v)}
      />
    </Stack>
  );
}

function AsyncSection() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    const t = setTimeout(() => { setOptions(incidentCategories); setLoading(false); }, 1500);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => { if (!open) setOptions([]); }, [open]);

  return (
    <RavenAutocomplete
      options={options as string[]}
      label="Incident Category"
      placeholder="Click to load…"
      loading={loading}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    />
  );
}

function CreatableSection() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Stack spacing={1}>
      <Typography variant="body2" sx={body.secondary}>
        Type a new category that doesn't exist in the list to see the "Add" option.
      </Typography>
      <RavenAutocomplete
        options={incidentCategories}
        label="Category"
        placeholder="Select or create…"
        freeSolo
        creatable
        creatableLabel="Add"
        value={value}
        onChange={(_e, v) => setValue(v)}
      />
      {value && <Typography variant="body2">Selected: <strong>{value}</strong></Typography>}
    </Stack>
  );
}

function FixedOptionsSection() {
  const fixed: Investigator[] = [{ name: 'Rajesh Kumar', department: 'EHS', fixed: true }];
  const [value, setValue] = useState<Investigator[]>([...fixed, investigators[1]]);
  return (
    <Stack spacing={1}>
      <Typography variant="body2" sx={body.secondary}>
        "Rajesh Kumar" is a fixed tag that cannot be removed.
      </Typography>
      <RavenAutocomplete
        multiple
        options={investigators}
        label="Investigation Team"
        value={value}
        onChange={(_e, nv: Investigator[]) => setValue([...fixed, ...nv.filter((v) => !v.fixed)])}
        getOptionLabel={(o: Investigator) => o.name}
        isOptionEqualToValue={(a: Investigator, b: Investigator) => a.name === b.name}
        renderTags={(tv, gtp) =>
          tv.map((o: Investigator, i: number) => {
            const { key, ...tp } = gtp({ index: i });
            return <Chip key={key} label={o.name} {...tp} disabled={o.fixed} />;
          })
        }
      />
    </Stack>
  );
}

function PlaygroundSection() {
  const [flags, setFlags] = useState({
    disableCloseOnSelect: false, clearOnEscape: false, disableClearable: false,
    openOnFocus: false, autoHighlight: false, autoSelect: false,
    disablePortal: false, disabled: false, readOnly: false,
  });
  const toggle = (k: keyof typeof flags) => setFlags((f) => ({ ...f, [k]: !f[k] }));
  return (
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {(Object.keys(flags) as (keyof typeof flags)[]).map((k) => (
          <Chip key={k} label={k} onClick={() => toggle(k)} color={flags[k] ? 'primary' : 'default'} variant={flags[k] ? 'filled' : 'outlined'} size="small" />
        ))}
      </Box>
      <RavenAutocomplete options={incidentCategories} label="Incident Category" {...flags} />
    </Stack>
  );
}

/* ── Main page ────────────────────────────────────────────── */
export function AutocompleteDocumentation() {
  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', py: 2, px: { xs: 1, sm: 2 } }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>Autocomplete</Typography>
      <Typography variant="body1" sx={{ ...body.secondary, mb: 2 }}>
        A text input enhanced by a panel of suggested options. In Raven, <strong>RavenAutocomplete</strong> wraps
        MUI v6 with the Near-Miss purple palette, Source Sans 3 typography, rounded icons, and brand-consistent
        styling. Use it for incident category selectors, location pickers, search inputs, and multi-tag filters.
      </Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 4 }}>
        Two primary use cases: <strong>Combo box</strong> (value from a predefined set) and{' '}
        <strong>Free solo</strong> (any value with suggestions). See the{' '}
        <a href="https://v6.mui.com/material-ui/react-autocomplete/" target="_blank" rel="noreferrer">MUI Autocomplete</a> docs.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* ── Combo box ─────────────────────────────────────── */}
      <Typography id="combo-box" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Combo box</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        The value must be chosen from a predefined set. This is the default behaviour.
      </Typography>
      <Demo>
        <RavenAutocomplete options={incidentCategories} label="Incident Category" placeholder="Select a category…" />
      </Demo>

      <Typography id="options-structure" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>Options structure</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Options can be strings or objects. For objects, provide <code>getOptionLabel</code> and{' '}
        <code>isOptionEqualToValue</code>.
      </Typography>
      <Demo>
        <RavenAutocomplete
          options={locations}
          label="Location"
          placeholder="Search locations…"
          getOptionLabel={(o: (typeof locations)[0]) => o.label}
          isOptionEqualToValue={(a: (typeof locations)[0], b: (typeof locations)[0]) => a.id === b.id}
        />
      </Demo>

      <Typography id="country-select" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>Country select</Typography>
      <Demo>
        <RavenAutocomplete
          options={countries}
          label="Plant Country"
          placeholder="Choose a country"
          getOptionLabel={(o: Country) => o.label}
          isOptionEqualToValue={(a: Country, b: Country) => a.code === b.code}
          autoHighlight
          renderOption={(props, option: Country) => {
            const { key, ...rest } = props;
            return (
              <li key={key} {...rest}>
                <span style={{ marginRight: 8 }}>{countryToFlag(option.code)}</span>
                {option.label} <span style={{ color: '#999', marginLeft: 4 }}>+{option.phone}</span>
              </li>
            );
          }}
        />
      </Demo>

      <Typography id="controlled-states" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>Controlled states</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Two independent states: <code>value</code>/<code>onChange</code> (selected value) and{' '}
        <code>inputValue</code>/<code>onInputChange</code> (textbox text).
      </Typography>
      <Demo><ControlledSection /></Demo>

      <Typography id="playground" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>Playground</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Toggle props interactively to see how they affect behaviour.
      </Typography>
      <Demo><PlaygroundSection /></Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Free solo ─────────────────────────────────────── */}
      <Typography id="free-solo" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Free solo</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Set <code>freeSolo</code> so the textbox accepts any value—ideal for search inputs.
      </Typography>

      <Typography id="search-input" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>Search input</Typography>
      <Demo>
        <RavenAutocomplete options={incidentCategories} label="Search Incidents" placeholder="Type to search…" freeSolo />
      </Demo>

      <Typography id="creatable" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>Creatable</Typography>
      <Demo><CreatableSection /></Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Grouped ───────────────────────────────────────── */}
      <Typography id="grouped" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Grouped</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use <code>groupBy</code> to cluster options. Sort by the same dimension to avoid duplicate headers.
      </Typography>
      <Demo>
        <RavenAutocomplete
          options={severityLevels.sort((a, b) => -b.group.localeCompare(a.group))}
          label="Severity Level"
          placeholder="Select severity…"
          getOptionLabel={(o: (typeof severityLevels)[0]) => o.label}
          groupBy={(o: (typeof severityLevels)[0]) => o.group}
        />
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Disabled options ──────────────────────────────── */}
      <Typography id="disabled-options" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Disabled options</Typography>
      <Demo>
        <RavenAutocomplete
          options={timeSlots}
          label="Incident Time"
          getOptionDisabled={(o: string) => o === '06:00 AM' || o === '12:00 PM'}
        />
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Asynchronous ──────────────────────────────────── */}
      <Typography id="asynchronous" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Asynchronous requests</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Load options on open—a spinner shows while the request is pending.
      </Typography>
      <Demo><AsyncSection /></Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Multiple values ───────────────────────────────── */}
      <Typography id="multiple-values" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Multiple values</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Allow selecting more than one value—selected items appear as Raven-styled chips.
      </Typography>
      <Demo>
        <RavenAutocomplete options={incidentCategories} label="Tags" placeholder="Select tags…" multiple />
      </Demo>

      <Typography id="fixed-options" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>Fixed options</Typography>
      <Demo><FixedOptionsSection /></Demo>

      <Typography id="checkboxes" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>Checkboxes</Typography>
      <Demo>
        <RavenAutocomplete options={incidentCategories} label="Root Causes" placeholder="Select root causes…" multiple checkboxSelection />
      </Demo>

      <Typography id="limit-tags" variant="h6" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>Limit tags</Typography>
      <Demo>
        <RavenAutocomplete
          multiple
          limitTags={2}
          options={incidentCategories}
          label="Categories"
          placeholder="Favorites"
          value={[incidentCategories[0], incidentCategories[1], incidentCategories[4]]}
          onChange={() => {}}
        />
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Sizes ─────────────────────────────────────────── */}
      <Typography id="sizes" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Sizes</Typography>
      <Demo>
        <Stack spacing={2}>
          <RavenAutocomplete options={incidentCategories} label="Small" size="small" />
          <RavenAutocomplete options={incidentCategories} label="Medium (default)" size="medium" />
          <RavenAutocomplete multiple options={incidentCategories} label="Small — Multiple" size="small" value={[incidentCategories[0], incidentCategories[4]]} onChange={() => {}} />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Disabled & Read Only ──────────────────────────── */}
      <Typography id="disabled-read-only" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Disabled &amp; Read Only</Typography>
      <Demo>
        <Stack spacing={2}>
          <RavenAutocomplete options={incidentCategories} label="Disabled" value="Near Miss" disabled />
          <RavenAutocomplete options={incidentCategories} label="Read Only" value="Near Miss" readOnly />
          <RavenAutocomplete multiple options={incidentCategories} label="Disabled — Multiple" value={['Near Miss', 'Human Error']} onChange={() => {}} disabled />
        </Stack>
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Validation ────────────────────────────────────── */}
      <Typography id="validation" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Validation</Typography>
      <Demo>
        <RavenAutocomplete options={incidentCategories} label="Incident Category" placeholder="Required field" error helperText="Category is required" />
      </Demo>

      <Divider sx={{ my: 4 }} />

      {/* ── Custom filter ─────────────────────────────────── */}
      <Typography id="custom-filter" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Custom filter</Typography>
      <Typography variant="body2" sx={{ ...body.secondary, mb: 2 }}>
        Use <code>createFilterOptions</code> to customise matching. Below, options must <em>start</em> with the typed text.
      </Typography>
      <Demo>
        <RavenAutocomplete
          options={incidentCategories}
          label="Category (starts with)"
          filterOptions={createFilterOptions({ matchFrom: 'start', stringify: (o: string) => o })}
        />
      </Demo>
      <CodeBlock>{`import { createFilterOptions } from './RavenAutocomplete';

const filter = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option,
});

<RavenAutocomplete filterOptions={filter} />`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      {/* ── Accessibility ─────────────────────────────────── */}
      <Typography id="accessibility" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>Accessibility</Typography>
      <Typography variant="body2" sx={body.secondary}>
        <code>RavenAutocomplete</code> implements the{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/" target="_blank" rel="noreferrer">WAI-ARIA Combobox</a> pattern.
        Always provide a <code>label</code> for the textbox. The component handles <code>aria-expanded</code>,{' '}
        <code>aria-owns</code>, <code>aria-activedescendant</code>, and list roles automatically.
      </Typography>
    </Box>
  );
}

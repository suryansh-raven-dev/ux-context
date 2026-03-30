import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { RavenAutocomplete, createFilterOptions } from './RavenAutocomplete';
import './RavenAutocomplete.css';

/* ----------------------------------------------------------------
   DATA
   ---------------------------------------------------------------- */
const incidentCategories = [
  'Equipment Failure',
  'Human Error',
  'Process Deviation',
  'Environmental Hazard',
  'Near Miss',
  'Safety Observation',
  'Chemical Spill',
  'Slip / Trip / Fall',
  'Electrical Hazard',
  'Fire / Explosion Risk',
  'Confined Space',
  'Falling Object',
  'Ergonomic Issue',
  'Vehicle / Transport',
  'PPE Non-Compliance',
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

interface Investigator {
  name: string;
  department: string;
  fixed?: boolean;
}
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
  '06:00 AM',
  '07:00 AM',
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
];

interface Country {
  code: string;
  label: string;
  phone: string;
}
const countries: Country[] = [
  { code: 'IN', label: 'India', phone: '91' },
  { code: 'TH', label: 'Thailand', phone: '66' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'US', label: 'United States', phone: '1' },
  { code: 'DE', label: 'Germany', phone: '49' },
  { code: 'FR', label: 'France', phone: '33' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'IT', label: 'Italy', phone: '39' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'PL', label: 'Poland', phone: '48' },
  { code: 'PT', label: 'Portugal', phone: '351' },
  { code: 'NG', label: 'Nigeria', phone: '234' },
  { code: 'EG', label: 'Egypt', phone: '20' },
  { code: 'CI', label: "Côte d'Ivoire", phone: '225' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'MX', label: 'Mexico', phone: '52' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'JP', label: 'Japan', phone: '81' },
  { code: 'AU', label: 'Australia', phone: '61' },
];

function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397),
        )
    : isoCode;
}

const AUTOCOMPLETE_SNIPPETS = {
  comboBox: `<RavenAutocomplete
  options={incidentCategories}
  label="Incident Category"
  placeholder="Select a category..."
/>`,
  objectOptions: `<RavenAutocomplete
  options={locations}
  label="Location"
  getOptionLabel={(option) => option.label}
  isOptionEqualToValue={(a, b) => a.id === b.id}
/>`,
  countrySelect: `<RavenAutocomplete
  options={countries}
  label="Plant Country"
  getOptionLabel={(option) => option.label}
  autoHighlight
  renderOption={(props, option) => (
    <li {...props}>{countryToFlag(option.code)} {option.label}</li>
  )}
/>`,
  controlledStates: `const [value, setValue] = useState<string | null>(null);
const [inputValue, setInputValue] = useState('');

<RavenAutocomplete
  options={incidentCategories}
  value={value}
  onChange={(_e, v) => setValue(v)}
  inputValue={inputValue}
  onInputChange={(_e, v) => setInputValue(v)}
/>`,
  freeSolo: `<RavenAutocomplete
  options={incidentCategories}
  label="Search Incidents"
  freeSolo
/>`,
  creatable: `<RavenAutocomplete
  options={incidentCategories}
  label="Category"
  freeSolo
  creatable
  creatableLabel="Add"
/>`,
  groupedOptions: `<RavenAutocomplete
  options={severityLevels}
  getOptionLabel={(o) => o.label}
  groupBy={(o) => o.group}
/>`,
  disabledOptions: `<RavenAutocomplete
  options={timeSlots}
  getOptionDisabled={(option) =>
    option === '06:00 AM' || option === '12:00 PM'
  }
/>`,
  asyncLoading: `<RavenAutocomplete
  options={options}
  loading={loading}
  open={open}
  onOpen={() => setOpen(true)}
  onClose={() => setOpen(false)}
/>`,
  multipleValues: `<RavenAutocomplete
  options={incidentCategories}
  label="Tags"
  multiple
/>`,
  fixedOptions: `<RavenAutocomplete
  multiple
  options={investigators}
  value={value}
  onChange={(_e, newValue) => {
    setValue([...fixedInvestigators, ...newValue.filter((v) => !v.fixed)]);
  }}
  renderTags={(tagValue, getTagProps) =>
    tagValue.map((option, index) => (
      <Chip {...getTagProps({ index })} label={option.name} disabled={option.fixed} />
    ))
  }
/>`,
  withCheckboxes: `<RavenAutocomplete
  options={incidentCategories}
  label="Root Causes"
  multiple
  checkboxSelection
/>`,
  limitTags: `<RavenAutocomplete
  multiple
  limitTags={2}
  options={incidentCategories}
  value={[incidentCategories[0], incidentCategories[1], incidentCategories[4]]}
/>`,
  sizes: `<RavenAutocomplete size="small" ... />
<RavenAutocomplete size="medium" ... />
<RavenAutocomplete multiple size="small" ... />
<RavenAutocomplete multiple size="medium" ... />`,
  disabledReadOnly: `<RavenAutocomplete disabled ... />
<RavenAutocomplete readOnly ... />
<RavenAutocomplete multiple disabled ... />
<RavenAutocomplete multiple readOnly ... />`,
  errorState: `<RavenAutocomplete
  options={incidentCategories}
  label="Incident Category"
  error
  helperText="Category is required"
/>`,
  customFilter: `const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option,
});

<RavenAutocomplete
  options={incidentCategories}
  filterOptions={filterOptions}
/>`,
  playground: `<RavenAutocomplete
  options={incidentCategories}
  disableCloseOnSelect={disableCloseOnSelect}
  clearOnEscape={clearOnEscape}
  disableClearable={disableClearable}
  openOnFocus={openOnFocus}
  autoHighlight={autoHighlight}
  autoSelect={autoSelect}
  disablePortal={disablePortal}
  disabled={disabled}
  readOnly={readOnly}
/>`,
} as const;

function SectionCodeSnippet({ code }: { code: string }) {
  return (
    <Box sx={{ mt: 1.5, border: '1px solid #E0E0E0', borderRadius: '8px' }}>
      <Box
        component="details"
        sx={{
          '& > summary': {
            cursor: 'pointer',
            listStyle: 'none',
            px: 1.5,
            py: 1,
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#1976D2',
            userSelect: 'none',
          },
          '& > summary::-webkit-details-marker': {
            display: 'none',
          },
        }}
      >
        <Box component="summary">Show code</Box>
        <Box
          component="pre"
          sx={{
            m: 0,
            p: 1.5,
            overflowX: 'auto',
            backgroundColor: '#0F172A',
            color: '#E5E7EB',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            fontFamily: '"SF Mono", "Fira Code", "Consolas", monospace',
            fontSize: '0.75rem',
            lineHeight: 1.5,
            whiteSpace: 'pre',
          }}
        >
          {code}
        </Box>
      </Box>
    </Box>
  );
}

/* ----------------------------------------------------------------
   META
   ---------------------------------------------------------------- */
const meta: Meta<typeof RavenAutocomplete> = {
  title: 'Components/Inputs/Autocomplete',
  component: RavenAutocomplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A normal text input enhanced by a panel of suggested options, built on MUI v6 Autocomplete with full Raven styling.

**Two primary use cases:**
1. **Combo box** — value must be chosen from a predefined set (e.g., incident category, location)
2. **Free solo** — textbox may contain any arbitrary value but suggests options (e.g., search input)

Supports: multiple selection, grouped options, async loading, checkboxes, creatable mode, disabled options, country select, custom rendering, and all MUI v6 features.

[MUI v6 Autocomplete Documentation](https://v6.mui.com/material-ui/react-autocomplete/)
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof RavenAutocomplete>;

/* ----------------------------------------------------------------
   1. COMBO BOX — Basic
   ---------------------------------------------------------------- */
const ComboBox: Story = {
  name: 'Combo Box',
  args: {
    options: incidentCategories,
    label: 'Incident Category',
    placeholder: 'Select a category…',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The value must be chosen from a predefined set of allowed values. This is the default Autocomplete behavior.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   2. COMBO BOX — With Object Options
   ---------------------------------------------------------------- */
const ObjectOptions: Story = {
  name: 'Object Options',
  args: {
    options: locations,
    label: 'Location',
    placeholder: 'Search locations…',
    getOptionLabel: (option: any) => option.label ?? '',
    isOptionEqualToValue: (option: any, value: any) => option.id === value.id,
  },
  parameters: {
    docs: {
      description: {
        story:
          'When options are objects, provide `getOptionLabel` and `isOptionEqualToValue` to ensure correct display and selection.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   3. COUNTRY SELECT
   ---------------------------------------------------------------- */
const CountrySelect: Story = {
  name: 'Country Select',
  render: () => (
    <div className="raven-autocomplete-demo">
      <RavenAutocomplete
        options={countries}
        label="Plant Country"
        placeholder="Choose a country"
        getOptionLabel={(option: Country) => option.label}
        isOptionEqualToValue={(a: Country, b: Country) => a.code === b.code}
        autoHighlight
        renderOption={(props, option: Country) => {
          const { key, ...rest } = props;
          return (
            <li key={key} {...rest}>
              <span className="raven-autocomplete__country-flag">
                {countryToFlag(option.code)}
              </span>
              <span className="raven-autocomplete__country-label">
                {option.label}
              </span>
              <span className="raven-autocomplete__country-code">
                +{option.phone}
              </span>
            </li>
          );
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Choose from a list of countries with flag emoji and phone code. Uses custom `renderOption` for rich display. Relevant for selecting plant locations across Indorama Ventures global operations.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   4. CONTROLLED STATES
   ---------------------------------------------------------------- */
const ControlledStates: Story = {
  name: 'Controlled States',
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');

    return (
      <div className="raven-autocomplete-demo">
        <div className="raven-autocomplete-demo__state-display">
          <div>value: {value !== null ? `'${value}'` : 'null'}</div>
          <div>inputValue: '{inputValue}'</div>
        </div>
        <RavenAutocomplete
          options={incidentCategories}
          label="Controlled Category"
          value={value}
          onChange={(_event, newValue) => setValue(newValue)}
          inputValue={inputValue}
          onInputChange={(_event, newInputValue) =>
            setInputValue(newInputValue)
          }
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `The component has two independently controlled states:
1. **value** — the selected value (controlled with \`value\`/\`onChange\`)
2. **inputValue** — the text in the textbox (controlled with \`inputValue\`/\`onInputChange\`)

Both states are isolated and should be controlled independently.`,
      },
    },
  },
};

/* ----------------------------------------------------------------
   5. FREE SOLO — Search Input
   ---------------------------------------------------------------- */
const FreeSolo: Story = {
  name: 'Free Solo — Search Input',
  args: {
    options: incidentCategories,
    label: 'Search Incidents',
    placeholder: 'Type to search…',
    freeSolo: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Set `freeSolo` to true so the textbox can contain any arbitrary value. Useful for search inputs where suggestions are provided but any text is valid.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   6. FREE SOLO — Creatable
   ---------------------------------------------------------------- */
const Creatable: Story = {
  name: 'Free Solo — Creatable',
  render: () => {
    const [value, setValue] = useState<string | null>(null);

    return (
      <div className="raven-autocomplete-demo">
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Type a new category that doesn't exist in the list to see the "Add"
          option.
        </Typography>
        <RavenAutocomplete
          options={incidentCategories}
          label="Category"
          placeholder="Select or create…"
          freeSolo
          creatable
          creatableLabel="Add"
          value={value}
          onChange={(_e, newVal) => setValue(newVal)}
        />
        {value && (
          <div className="raven-autocomplete-demo__state-display">
            Selected: {value}
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Combines `freeSolo` with `creatable` to allow adding new values. When the user types something not in the list, an "Add" option appears. Uses `selectOnFocus`, `clearOnBlur`, and `handleHomeEndKeys` for a combo-box-like experience.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   7. GROUPED
   ---------------------------------------------------------------- */
const Grouped: Story = {
  name: 'Grouped Options',
  render: () => (
    <div className="raven-autocomplete-demo">
      <RavenAutocomplete
        options={severityLevels.sort(
          (a, b) => -b.group.localeCompare(a.group),
        )}
        label="Severity Level"
        placeholder="Select severity…"
        getOptionLabel={(option: (typeof severityLevels)[0]) => option.label}
        groupBy={(option: (typeof severityLevels)[0]) => option.group}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Group options with the `groupBy` prop. Options should be sorted by the same dimension they are grouped by to avoid duplicate headers. Group headers use Raven purple with uppercase styling.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   8. DISABLED OPTIONS
   ---------------------------------------------------------------- */
const DisabledOptions: Story = {
  name: 'Disabled Options',
  render: () => (
    <div className="raven-autocomplete-demo">
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Some time slots are unavailable (disabled).
      </Typography>
      <RavenAutocomplete
        options={timeSlots}
        label="Incident Time"
        getOptionDisabled={(option: string) =>
          option === '06:00 AM' || option === '12:00 PM'
        }
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `getOptionDisabled` to conditionally disable specific options. Disabled options appear faded and cannot be selected.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   9. ASYNCHRONOUS — Loading
   ---------------------------------------------------------------- */
const AsyncLoading: Story = {
  name: 'Asynchronous — Load on Open',
  render: () => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (!open) return;
      setLoading(true);
      const timer = setTimeout(() => {
        setOptions(incidentCategories);
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, [open]);

    useEffect(() => {
      if (!open) setOptions([]);
    }, [open]);

    return (
      <div className="raven-autocomplete-demo">
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Options load asynchronously when the dropdown opens. A spinner is
          shown while loading.
        </Typography>
        <RavenAutocomplete
          options={options as string[]}
          label="Incident Category"
          placeholder="Click to load…"
          loading={loading}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Load options on open — waits for user interaction before fetching. Displays a loading spinner while the request is pending. Use the `loading` prop to control the loading state.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   10. MULTIPLE VALUES — Tags
   ---------------------------------------------------------------- */
const MultipleValues: Story = {
  name: 'Multiple Values',
  args: {
    options: incidentCategories,
    label: 'Tags',
    placeholder: 'Select tags…',
    multiple: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Allow the user to select more than one value. Selected values appear as Raven-styled chips (tags) with purple background and pill border radius.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   11. MULTIPLE — Fixed Options
   ---------------------------------------------------------------- */
const FixedOptions: Story = {
  name: 'Fixed Options (Locked Tags)',
  render: () => {
    const fixedInvestigators: Investigator[] = [
      { name: 'Rajesh Kumar', department: 'EHS', fixed: true },
    ];
    const [value, setValue] = useState<Investigator[]>([
      ...fixedInvestigators,
      investigators[1],
    ]);

    return (
      <div className="raven-autocomplete-demo">
        <Typography variant="body2" color="textSecondary" gutterBottom>
          "Rajesh Kumar" is a fixed tag that cannot be removed.
        </Typography>
        <RavenAutocomplete
          multiple
          options={investigators}
          label="Investigation Team"
          value={value}
          onChange={(_event, newValue: Investigator[]) => {
            setValue([
              ...fixedInvestigators,
              ...newValue.filter((v) => !v.fixed),
            ]);
          }}
          getOptionLabel={(option: Investigator) => option.name}
          isOptionEqualToValue={(a: Investigator, b: Investigator) =>
            a.name === b.name
          }
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option: Investigator, index: number) => {
              const { key, ...tagProps } = getTagProps({ index });
              return (
                <Chip
                  key={key}
                  label={option.name}
                  {...tagProps}
                  disabled={option.fixed}
                />
              );
            })
          }
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Lock certain tags so they cannot be removed. Use `renderTags` with a disabled Chip for fixed items. Useful for mandatory investigation team leads.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   12. MULTIPLE — Checkboxes
   ---------------------------------------------------------------- */
const WithCheckboxes: Story = {
  name: 'Multiple — Checkboxes',
  args: {
    options: incidentCategories,
    label: 'Root Causes',
    placeholder: 'Select root causes…',
    multiple: true,
    checkboxSelection: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `checkboxSelection` to render a checkbox before each option. Automatically sets `disableCloseOnSelect` so the dropdown stays open while selecting multiple items.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   13. MULTIPLE — Limit Tags
   ---------------------------------------------------------------- */
const LimitTags: Story = {
  name: 'Multiple — Limit Tags',
  render: () => (
    <div className="raven-autocomplete-demo">
      <RavenAutocomplete
        multiple
        limitTags={2}
        options={incidentCategories}
        label="Categories"
        placeholder="Favorites"
        value={[
          incidentCategories[0],
          incidentCategories[1],
          incidentCategories[4],
        ]}
        onChange={() => {}}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `limitTags` to limit the number of displayed chips when not focused. A "+N" indicator shows how many additional items are selected.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   14. SIZES
   ---------------------------------------------------------------- */
const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="raven-autocomplete-demo">
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Small
        </span>
        <RavenAutocomplete
          options={incidentCategories}
          label="Category"
          size="small"
        />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Medium (default)
        </span>
        <RavenAutocomplete
          options={incidentCategories}
          label="Category"
          size="medium"
        />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Small — Multiple
        </span>
        <RavenAutocomplete
          multiple
          options={incidentCategories}
          label="Tags"
          size="small"
          value={[incidentCategories[0], incidentCategories[4]]}
          onChange={() => {}}
        />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Medium — Multiple
        </span>
        <RavenAutocomplete
          multiple
          options={incidentCategories}
          label="Tags"
          size="medium"
          value={[incidentCategories[0], incidentCategories[4]]}
          onChange={() => {}}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the `size` prop to control input density. `"small"` gives a more compact input, useful for dense forms or filters.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   15. DISABLED & READ-ONLY
   ---------------------------------------------------------------- */
const DisabledAndReadOnly: Story = {
  name: 'Disabled & Read Only',
  render: () => (
    <div className="raven-autocomplete-demo">
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Disabled
        </span>
        <RavenAutocomplete
          options={incidentCategories}
          label="Category"
          value="Near Miss"
          disabled
        />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Read Only
        </span>
        <RavenAutocomplete
          options={incidentCategories}
          label="Category"
          value="Near Miss"
          readOnly
        />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Disabled — Multiple
        </span>
        <RavenAutocomplete
          multiple
          options={incidentCategories}
          label="Tags"
          value={['Near Miss', 'Human Error']}
          onChange={() => {}}
          disabled
        />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Read Only — Multiple
        </span>
        <RavenAutocomplete
          multiple
          options={incidentCategories}
          label="Tags"
          value={['Near Miss', 'Human Error']}
          onChange={() => {}}
          readOnly
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Disabled state shows a grey background with muted text. Read-only state shows a dashed border to distinguish from disabled. Both prevent user interaction.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   16. ERROR STATE
   ---------------------------------------------------------------- */
const ErrorState: Story = {
  name: 'Error State',
  render: () => (
    <div className="raven-autocomplete-demo">
      <RavenAutocomplete
        options={incidentCategories}
        label="Incident Category"
        placeholder="Required field"
        error
        helperText="Category is required"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Pass `error` and `helperText` to show validation errors. The border and label turn red (Raven error token).',
      },
    },
  },
};

/* ----------------------------------------------------------------
   17. CUSTOM FILTER
   ---------------------------------------------------------------- */
const CustomFilter: Story = {
  name: 'Custom Filter — Match From Start',
  render: () => {
    const filterOpts = createFilterOptions({
      matchFrom: 'start',
      stringify: (option: string) => option,
    });

    return (
      <div className="raven-autocomplete-demo">
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Options must start with the typed text. Try typing "S" vs "E".
        </Typography>
        <RavenAutocomplete
          options={incidentCategories}
          label="Category (starts with)"
          filterOptions={filterOpts}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Use \`createFilterOptions\` to customize filter behavior:
- \`matchFrom: 'start'\` — options must start with the query
- \`matchFrom: 'any'\` (default) — options can contain the query anywhere
- \`ignoreCase\`, \`ignoreAccents\`, \`limit\`, \`trim\` for fine-tuning`,
      },
    },
  },
};

/* ----------------------------------------------------------------
   18. PLAYGROUND — Combo Box Options
   ---------------------------------------------------------------- */
const Playground: Story = {
  name: 'Playground',
  render: () => {
    const [disableCloseOnSelect, setDCOS] = useState(false);
    const [clearOnEscape, setCOE] = useState(false);
    const [disableClearable, setDC] = useState(false);
    const [openOnFocus, setOOF] = useState(false);
    const [autoHighlight, setAH] = useState(false);
    const [autoSelect, setAS] = useState(false);
    const [disablePortal, setDP] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setRO] = useState(false);

    const toggles = [
      { label: 'disableCloseOnSelect', value: disableCloseOnSelect, set: setDCOS },
      { label: 'clearOnEscape', value: clearOnEscape, set: setCOE },
      { label: 'disableClearable', value: disableClearable, set: setDC },
      { label: 'openOnFocus', value: openOnFocus, set: setOOF },
      { label: 'autoHighlight', value: autoHighlight, set: setAH },
      { label: 'autoSelect', value: autoSelect, set: setAS },
      { label: 'disablePortal', value: disablePortal, set: setDP },
      { label: 'disabled', value: disabled, set: setDisabled },
      { label: 'readOnly', value: readOnly, set: setRO },
    ];

    return (
      <div className="raven-autocomplete-demo">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {toggles.map((t) => (
            <Chip
              key={t.label}
              label={t.label}
              onClick={() => t.set(!t.value)}
              color={t.value ? 'primary' : 'default'}
              variant={t.value ? 'filled' : 'outlined'}
              size="small"
            />
          ))}
        </Box>
        <RavenAutocomplete
          options={incidentCategories}
          label="Incident Category"
          disableCloseOnSelect={disableCloseOnSelect}
          clearOnEscape={clearOnEscape}
          disableClearable={disableClearable}
          openOnFocus={openOnFocus}
          autoHighlight={autoHighlight}
          autoSelect={autoSelect}
          disablePortal={disablePortal}
          disabled={disabled}
          readOnly={readOnly}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toggle various Autocomplete props interactively. Click the chips to enable/disable each feature and see how it affects the component behavior.',
      },
    },
  },
};

/* ----------------------------------------------------------------
   19. ALL VARIANTS GALLERY
   ---------------------------------------------------------------- */
const AllVariantsGalleryPage = () => {
  const groupedSeverityLevels = [...severityLevels].sort(
    (a, b) => -b.group.localeCompare(a.group),
  );

  const [controlledValue, setControlledValue] = useState<string | null>(null);
  const [controlledInputValue, setControlledInputValue] = useState('');

  const [creatableValue, setCreatableValue] = useState<string | null>(null);

  const fixedInvestigators: Investigator[] = [
    { name: 'Rajesh Kumar', department: 'EHS', fixed: true },
  ];
  const [fixedValue, setFixedValue] = useState<Investigator[]>([
    ...fixedInvestigators,
    investigators[1],
  ]);

  const [asyncOpen, setAsyncOpen] = useState(false);
  const [asyncOptions, setAsyncOptions] = useState<readonly string[]>([]);
  const [asyncLoading, setAsyncLoading] = useState(false);

  useEffect(() => {
    if (!asyncOpen) return;
    setAsyncLoading(true);
    const timer = setTimeout(() => {
      setAsyncOptions(incidentCategories);
      setAsyncLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [asyncOpen]);

  useEffect(() => {
    if (!asyncOpen) setAsyncOptions([]);
  }, [asyncOpen]);

  const customFilter = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: string) => option,
  });

  const [disableCloseOnSelect, setDCOS] = useState(false);
  const [clearOnEscape, setCOE] = useState(false);
  const [disableClearable, setDC] = useState(false);
  const [openOnFocus, setOOF] = useState(false);
  const [autoHighlight, setAH] = useState(false);
  const [autoSelect, setAS] = useState(false);
  const [disablePortal, setDP] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setRO] = useState(false);

  const toggles = [
    {
      label: 'disableCloseOnSelect',
      value: disableCloseOnSelect,
      set: setDCOS,
    },
    { label: 'clearOnEscape', value: clearOnEscape, set: setCOE },
    { label: 'disableClearable', value: disableClearable, set: setDC },
    { label: 'openOnFocus', value: openOnFocus, set: setOOF },
    { label: 'autoHighlight', value: autoHighlight, set: setAH },
    { label: 'autoSelect', value: autoSelect, set: setAS },
    { label: 'disablePortal', value: disablePortal, set: setDP },
    { label: 'disabled', value: disabled, set: setDisabled },
    { label: 'readOnly', value: readOnly, set: setRO },
  ];

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Stack spacing={4} sx={{ maxWidth: 560 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#4A148C' }}>
          Autocomplete - Unified Story View
        </Typography>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">Combo Box</span>
          <RavenAutocomplete
            options={incidentCategories}
            label="Incident Category"
            placeholder="Select a category..."
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.comboBox} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Object Options
          </span>
          <RavenAutocomplete
            options={locations}
            label="Location"
            placeholder="Search locations..."
            getOptionLabel={(option: any) => option.label ?? ''}
            isOptionEqualToValue={(option: any, value: any) =>
              option.id === value.id
            }
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.objectOptions} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Country Select
          </span>
          <RavenAutocomplete
            options={countries}
            label="Plant Country"
            placeholder="Choose a country"
            getOptionLabel={(option: Country) => option.label}
            isOptionEqualToValue={(a: Country, b: Country) => a.code === b.code}
            autoHighlight
            renderOption={(props, option: Country) => {
              const { key, ...rest } = props;
              return (
                <li key={key} {...rest}>
                  <span className="raven-autocomplete__country-flag">
                    {countryToFlag(option.code)}
                  </span>
                  <span className="raven-autocomplete__country-label">
                    {option.label}
                  </span>
                  <span className="raven-autocomplete__country-code">
                    +{option.phone}
                  </span>
                </li>
              );
            }}
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.countrySelect} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Controlled States
          </span>
          <div className="raven-autocomplete-demo__state-display">
            <div>
              value: {controlledValue !== null ? `'${controlledValue}'` : 'null'}
            </div>
            <div>inputValue: '{controlledInputValue}'</div>
          </div>
          <RavenAutocomplete
            options={incidentCategories}
            label="Controlled Category"
            value={controlledValue}
            onChange={(_event, newValue) => setControlledValue(newValue)}
            inputValue={controlledInputValue}
            onInputChange={(_event, newInputValue) =>
              setControlledInputValue(newInputValue)
            }
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.controlledStates} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Free Solo - Search Input
          </span>
          <RavenAutocomplete
            options={incidentCategories}
            label="Search Incidents"
            placeholder="Type to search..."
            freeSolo
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.freeSolo} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Free Solo - Creatable
          </span>
          <Typography variant="body2" color="textSecondary">
            Type a new category that is not in the list.
          </Typography>
          <RavenAutocomplete
            options={incidentCategories}
            label="Category"
            placeholder="Select or create..."
            freeSolo
            creatable
            creatableLabel="Add"
            value={creatableValue}
            onChange={(_e, newVal) => setCreatableValue(newVal)}
          />
          {creatableValue && (
            <div className="raven-autocomplete-demo__state-display">
              Selected: {creatableValue}
            </div>
          )}
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.creatable} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Grouped Options
          </span>
          <RavenAutocomplete
            options={groupedSeverityLevels}
            label="Severity Level"
            placeholder="Select severity..."
            getOptionLabel={(option: (typeof severityLevels)[0]) => option.label}
            groupBy={(option: (typeof severityLevels)[0]) => option.group}
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.groupedOptions} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Disabled Options
          </span>
          <RavenAutocomplete
            options={timeSlots}
            label="Incident Time"
            getOptionDisabled={(option: string) =>
              option === '06:00 AM' || option === '12:00 PM'
            }
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.disabledOptions} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Asynchronous - Load on Open
          </span>
          <RavenAutocomplete
            options={asyncOptions as string[]}
            label="Incident Category"
            placeholder="Click to load..."
            loading={asyncLoading}
            open={asyncOpen}
            onOpen={() => setAsyncOpen(true)}
            onClose={() => setAsyncOpen(false)}
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.asyncLoading} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Multiple Values
          </span>
          <RavenAutocomplete
            options={incidentCategories}
            label="Tags"
            placeholder="Select tags..."
            multiple
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.multipleValues} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Fixed Options (Locked Tags)
          </span>
          <RavenAutocomplete
            multiple
            options={investigators}
            label="Investigation Team"
            value={fixedValue}
            onChange={(_event, newValue: Investigator[]) => {
              setFixedValue([
                ...fixedInvestigators,
                ...newValue.filter((v) => !v.fixed),
              ]);
            }}
            getOptionLabel={(option: Investigator) => option.name}
            isOptionEqualToValue={(a: Investigator, b: Investigator) =>
              a.name === b.name
            }
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option: Investigator, index: number) => {
                const { key, ...tagProps } = getTagProps({ index });
                return (
                  <Chip
                    key={key}
                    label={option.name}
                    {...tagProps}
                    disabled={option.fixed}
                  />
                );
              })
            }
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.fixedOptions} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Multiple - Checkboxes
          </span>
          <RavenAutocomplete
            options={incidentCategories}
            label="Root Causes"
            placeholder="Select root causes..."
            multiple
            checkboxSelection
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.withCheckboxes} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Multiple - Limit Tags
          </span>
          <RavenAutocomplete
            multiple
            limitTags={2}
            options={incidentCategories}
            label="Categories"
            placeholder="Favorites"
            value={[
              incidentCategories[0],
              incidentCategories[1],
              incidentCategories[4],
            ]}
            onChange={() => {}}
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.limitTags} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">Sizes</span>
          <RavenAutocomplete
            options={incidentCategories}
            label="Category (Small)"
            size="small"
          />
          <RavenAutocomplete
            options={incidentCategories}
            label="Category (Medium)"
            size="medium"
          />
          <RavenAutocomplete
            multiple
            options={incidentCategories}
            label="Tags (Small)"
            size="small"
            value={[incidentCategories[0], incidentCategories[4]]}
            onChange={() => {}}
          />
          <RavenAutocomplete
            multiple
            options={incidentCategories}
            label="Tags (Medium)"
            size="medium"
            value={[incidentCategories[0], incidentCategories[4]]}
            onChange={() => {}}
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.sizes} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Disabled and Read Only
          </span>
          <RavenAutocomplete
            options={incidentCategories}
            label="Disabled"
            value="Near Miss"
            disabled
          />
          <RavenAutocomplete
            options={incidentCategories}
            label="Read Only"
            value="Near Miss"
            readOnly
          />
          <RavenAutocomplete
            multiple
            options={incidentCategories}
            label="Disabled - Multiple"
            value={['Near Miss', 'Human Error']}
            onChange={() => {}}
            disabled
          />
          <RavenAutocomplete
            multiple
            options={incidentCategories}
            label="Read Only - Multiple"
            value={['Near Miss', 'Human Error']}
            onChange={() => {}}
            readOnly
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.disabledReadOnly} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Error State
          </span>
          <RavenAutocomplete
            options={incidentCategories}
            label="Incident Category"
            placeholder="Required field"
            error
            helperText="Category is required"
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.errorState} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Custom Filter - Match From Start
          </span>
          <RavenAutocomplete
            options={incidentCategories}
            label="Category (starts with)"
            filterOptions={customFilter}
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.customFilter} />
        </div>

        <div className="raven-autocomplete-demo__section">
          <span className="raven-autocomplete-demo__section-title">
            Playground
          </span>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {toggles.map((t) => (
              <Chip
                key={t.label}
                label={t.label}
                onClick={() => t.set(!t.value)}
                color={t.value ? 'primary' : 'default'}
                variant={t.value ? 'filled' : 'outlined'}
                size="small"
              />
            ))}
          </Box>
          <RavenAutocomplete
            options={incidentCategories}
            label="Incident Category"
            disableCloseOnSelect={disableCloseOnSelect}
            clearOnEscape={clearOnEscape}
            disableClearable={disableClearable}
            openOnFocus={openOnFocus}
            autoHighlight={autoHighlight}
            autoSelect={autoSelect}
            disablePortal={disablePortal}
            disabled={disabled}
            readOnly={readOnly}
          />
          <SectionCodeSnippet code={AUTOCOMPLETE_SNIPPETS.playground} />
        </div>
      </Stack>
    </Box>
  );
};

export const Autocomplete: Story = {
  name: 'Autocomplete',
  render: () => <AllVariantsGalleryPage />,
  parameters: {
    docs: {
      description: {
        story:
          'A single vertically scrollable page that combines every current Autocomplete sub-story so you can review all variants without switching tabs.',
      },
    },
  },
};

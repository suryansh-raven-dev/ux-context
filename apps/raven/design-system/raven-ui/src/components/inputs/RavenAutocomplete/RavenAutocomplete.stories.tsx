import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { AutocompleteDocumentation } from './AutocompleteDocsPage';
import { RavenAutocomplete } from './RavenAutocomplete';

const largeOptionSet = Array.from({ length: 2500 }, (_, index) =>
  `Incident option ${String(index + 1).padStart(4, '0')}`,
);

const comparisonOptionSet = largeOptionSet.slice(0, 250);

const meta: Meta<typeof RavenAutocomplete> = {
  title: 'Components/Inputs/Autocomplete',
  component: RavenAutocomplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'RavenAutocomplete wraps MUI v6 Autocomplete with Raven styling. Use the documentation page for behavior guidance and the stress story for repeatable performance checks.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RavenAutocomplete>;

export const Documentation: Story = {
  name: 'Autocomplete',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => <AutocompleteDocumentation />,
};

export const LargeOptionSetStress: Story = {
  name: 'Large Option Set Stress',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Stress surface for large option sets. Compare the default listbox path with the virtualized path before shipping dense search selectors.',
      },
    },
  },
  render: () => (
    <Box sx={{ maxWidth: 960, p: 3 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            Large option set benchmark
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The first field uses a smaller flat option set as a default-behavior baseline. The second enables the virtualized listbox path for a 2,500-option dataset.
          </Typography>
        </Box>

        <Divider />

        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Default listbox baseline
            </Typography>
            <RavenAutocomplete
              options={comparisonOptionSet}
              label="Baseline option set"
              placeholder="Open and type to profile filtering"
              disablePortal
            />
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Virtualized large-data path
            </Typography>
            <RavenAutocomplete
              options={largeOptionSet}
              label="Virtualized option set"
              placeholder="Open and type to profile virtualization"
              disablePortal
              virtualized
              listboxHeight={320}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  ),
};

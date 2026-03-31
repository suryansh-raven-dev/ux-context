import React from 'react';

import Box from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { Meta, StoryObj } from '@storybook/react';

import { muiV6Catalog } from '../../catalog/muiV6Catalog';
import { StorybookPage, StorybookSection } from '../StorybookPage';
import { ComponentReference } from './ComponentReference';

const item = muiV6Catalog.find((c) => c.name === 'Paper')!;

const meta: Meta = {
  title: 'Components',
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj;

const paperLabelSx = {
  textAlign: 'center',
  fontWeight: 700,
  color: 'text.secondary',
} as const;

export const Paper: Story = {
  name: 'Paper',
  render: () => (
    <StorybookPage maxWidth={900}>
      <StorybookSection
        title="Elevation Scale"
        description="MUI Paper uses the theme elevation scale from 0 to 24 to express depth. Raven keeps those surfaces softer than default Material."
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          {[0, 1, 3, 8].map((elevation) => (
            <MuiPaper
              key={elevation}
              elevation={elevation}
              sx={{ px: 3, py: 4, flex: 1, borderRadius: 2, minHeight: 112 }}
            >
              <Typography sx={paperLabelSx}>elevation={elevation}</Typography>
            </MuiPaper>
          ))}
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="Variants"
        description='The MUI docs call out `variant="outlined"` as the flat alternative when you want structure without shadow.'
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <MuiPaper sx={{ px: 3, py: 4, flex: 1, borderRadius: 2 }}>
            <Typography sx={paperLabelSx}>Default variant</Typography>
          </MuiPaper>
          <MuiPaper variant="outlined" sx={{ px: 3, py: 4, flex: 1, borderRadius: 2 }}>
            <Typography sx={paperLabelSx}>Outlined variant</Typography>
          </MuiPaper>
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="Corners"
        description="Paper is rounded by default. The `square` prop removes that radius when the surrounding layout uses harder edges."
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <MuiPaper sx={{ px: 3, py: 4, flex: 1, borderRadius: 2 }}>
            <Typography sx={paperLabelSx}>Rounded corners</Typography>
          </MuiPaper>
          <MuiPaper square variant="outlined" sx={{ px: 3, py: 4, flex: 1 }}>
            <Typography sx={paperLabelSx}>Square corners</Typography>
          </MuiPaper>
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="MUI Alignment"
        description="Cross-checked with the MUI v6 Paper docs and API."
      >
        <ComponentReference item={item} embedded />
      </StorybookSection>
    </StorybookPage>
  ),
};

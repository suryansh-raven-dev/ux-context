import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MuiSlider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDownRounded';
import VolumeUp from '@mui/icons-material/VolumeUpRounded';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenSlider } from './RavenSlider';

export default {
  title: 'Components/Inputs/Slider',
  component: RavenSlider,
  parameters: {
    docs: {
      description: {
        component:
          'Raven-styled Slider component wrapping MUI v6 Slider. Uses the Near-Miss ' +
          'deep purple (#4A148C) track color, 20px thumb, and 4px rail/track height. ' +
          'Supports continuous, discrete, range, vertical, marks, custom value labels, ' +
          'and all standard MUI sizes and colors.',
      },
    },
  },
} satisfies Meta<typeof RavenSlider>;

type Story = StoryObj<typeof RavenSlider>;

/* ─── Continuous ────────────────────────────────────────── */

const ContinuousSlider: Story = {
  name: 'Continuous',
  render: () => {
    const [value, setValue] = useState(40);
    return (
      <Box sx={{ width: 300 }}>
        <Typography variant="subtitle2" gutterBottom>
          Continuous
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <VolumeDown />
          <MuiSlider
            value={value}
            onChange={(_, v) => setValue(v as number)}
            aria-label="Volume"
          />
          <VolumeUp />
        </Stack>
      </Box>
    );
  },
};

/* ─── Sizes ─────────────────────────────────────────────── */

const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <Box sx={{ width: 300 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Small
          </Typography>
          <MuiSlider defaultValue={30} size="small" />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Medium (default)
          </Typography>
          <MuiSlider defaultValue={50} />
        </Box>
      </Stack>
    </Box>
  ),
};

/* ─── Discrete ──────────────────────────────────────────── */

const DiscreteSlider: Story = {
  name: 'Discrete (with steps)',
  render: () => (
    <Box sx={{ width: 300 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Step = 10
          </Typography>
          <MuiSlider
            defaultValue={30}
            step={10}
            marks
            min={0}
            max={100}
            valueLabelDisplay="auto"
          />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Step = 25
          </Typography>
          <MuiSlider
            defaultValue={50}
            step={25}
            marks
            min={0}
            max={100}
            valueLabelDisplay="on"
          />
        </Box>
      </Stack>
    </Box>
  ),
};

/* ─── Custom Marks ──────────────────────────────────────── */

const severityMarks = [
  { value: 0, label: 'None' },
  { value: 25, label: 'Low' },
  { value: 50, label: 'Medium' },
  { value: 75, label: 'High' },
  { value: 100, label: 'Critical' },
];

const CustomMarks: Story = {
  name: 'Custom Marks',
  render: () => (
    <Box sx={{ width: 350, px: 2 }}>
      <Typography variant="subtitle2" gutterBottom>
        Severity scale with custom labels
      </Typography>
      <MuiSlider
        defaultValue={50}
        step={null}
        marks={severityMarks}
        valueLabelDisplay="auto"
      />
    </Box>
  ),
};

/* ─── Range Slider ──────────────────────────────────────── */

const RangeSlider: Story = {
  name: 'Range',
  render: () => {
    const [value, setValue] = useState<number[]>([20, 60]);
    return (
      <Box sx={{ width: 300 }}>
        <Typography variant="subtitle2" gutterBottom>
          Range selection
        </Typography>
        <MuiSlider
          value={value}
          onChange={(_, v) => setValue(v as number[])}
          valueLabelDisplay="auto"
        />
        <Typography variant="body2" color="text.secondary">
          Selected: {value[0]} – {value[1]}
        </Typography>
      </Box>
    );
  },
};

/* ─── Colors ────────────────────────────────────────────── */

const Colors: Story = {
  name: 'Colors',
  render: () => (
    <Box sx={{ width: 300 }}>
      <Stack spacing={3}>
        {(['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const).map(
          (color) => (
            <Box key={color}>
              <Typography variant="subtitle2" gutterBottom>
                {color}
              </Typography>
              <MuiSlider defaultValue={50} color={color} />
            </Box>
          ),
        )}
      </Stack>
    </Box>
  ),
};

/* ─── Vertical ──────────────────────────────────────────── */

const VerticalSlider: Story = {
  name: 'Vertical',
  render: () => (
    <Stack direction="row" spacing={4} sx={{ height: 200 }}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Continuous
        </Typography>
        <MuiSlider orientation="vertical" defaultValue={40} />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Discrete
        </Typography>
        <MuiSlider
          orientation="vertical"
          defaultValue={30}
          step={10}
          marks
          min={0}
          max={100}
          valueLabelDisplay="auto"
        />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Range
        </Typography>
        <MuiSlider
          orientation="vertical"
          defaultValue={[20, 70]}
          valueLabelDisplay="auto"
        />
      </Box>
    </Stack>
  ),
};

/* ─── Disabled ──────────────────────────────────────────── */

const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <Box sx={{ width: 300 }}>
      <MuiSlider defaultValue={40} disabled />
    </Box>
  ),
};

/* ─── Raven Product Patterns ────────────────────────────── */

const likelihoodMarks = [
  { value: 1, label: 'Rare' },
  { value: 2, label: 'Unlikely' },
  { value: 3, label: 'Possible' },
  { value: 4, label: 'Likely' },
  { value: 5, label: 'Almost Certain' },
];

const RavenProductPatterns: Story = {
  name: 'Raven Product Patterns',
  render: () => (
    <Stack spacing={5} sx={{ maxWidth: 400, px: 2 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Risk Likelihood
        </Typography>
        <MuiSlider
          defaultValue={3}
          step={1}
          marks={likelihoodMarks}
          min={1}
          max={5}
          valueLabelDisplay="auto"
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Consequence Range
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Min–Max potential impact
        </Typography>
        <MuiSlider
          defaultValue={[2, 4]}
          step={1}
          marks={likelihoodMarks}
          min={1}
          max={5}
          valueLabelDisplay="auto"
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Completion Progress
        </Typography>
        <MuiSlider
          defaultValue={65}
          valueLabelDisplay="on"
          valueLabelFormat={(v) => `${v}%`}
        />
      </Box>
    </Stack>
  ),
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenSlider {...story.args} />;
  }
  return null;
}

export const SliderPage: Story = {
  name: 'Slider',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={860}>
      <StorybookSection title="Continuous">{renderStory(ContinuousSlider)}</StorybookSection>
      <StorybookSection title="Sizes">{renderStory(Sizes)}</StorybookSection>
      <StorybookSection title="Discrete">{renderStory(DiscreteSlider)}</StorybookSection>
      <StorybookSection title="Custom Marks">{renderStory(CustomMarks)}</StorybookSection>
      <StorybookSection title="Range">{renderStory(RangeSlider)}</StorybookSection>
      <StorybookSection title="Colors">{renderStory(Colors)}</StorybookSection>
      <StorybookSection title="Vertical">{renderStory(VerticalSlider)}</StorybookSection>
      <StorybookSection title="Disabled">{renderStory(Disabled)}</StorybookSection>
      <StorybookSection title="Raven Product Patterns">{renderStory(RavenProductPatterns)}</StorybookSection>
    </StorybookPage>
  ),
};

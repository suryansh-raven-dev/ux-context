import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RavenCheckbox } from './RavenCheckbox';
import type { RavenCheckboxProps } from './RavenCheckbox';

const meta: Meta<typeof RavenCheckbox> = {
  title: 'Components/Inputs/Checkbox',
  component: RavenCheckbox,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenCheckbox>;

const Unchecked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
  },
};

const Checked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
  },
};

const Indeterminate: Story = {
  args: {
    label: 'Select all items',
    indeterminate: true,
  },
};

const Disabled: Story = {
  args: {
    label: 'Unavailable option',
    checked: false,
    disabled: true,
  },
};

const GroupExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <RavenCheckbox label="Email notifications" checked />
      <RavenCheckbox label="SMS notifications" checked={false} />
      <RavenCheckbox label="Push notifications" checked />
    </div>
  ),
};

function renderStory(story: Story) {
  if (story.render) return story.render({} as never, {} as never);
  if (story.args) return <RavenCheckbox {...(story.args as RavenCheckboxProps)} />;
  return null;
}

const sectionCardSx = {
  border: '1px solid #E0E0E0',
  borderRadius: '12px',
  backgroundColor: '#FFFFFF',
  p: 2.5,
} as const;

function FigmaCheckboxPreview() {
  const [poorWorkPlanning, setPoorWorkPlanning] = useState(true);
  const [procedures, setProcedures] = useState(true);

  return (
    <Stack spacing={2}>
      <RavenCheckbox
        className="raven-checkbox--figma"
        label="Poor work planning"
        checked={poorWorkPlanning}
        onChange={(_, checked) => setPoorWorkPlanning(checked)}
      />
      <RavenCheckbox
        className="raven-checkbox--figma"
        label="Procedures & Practices"
        checked={procedures}
        onChange={(_, checked) => setProcedures(checked)}
      />
      <RavenCheckbox
        className="raven-checkbox--figma"
        label="Work Permit System"
        checked={false}
        disabled
      />
    </Stack>
  );
}

export const Checkbox: Story = {
  name: 'Checkbox',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Box
      sx={{
        p: 3,
        backgroundColor: '#FCF6FE',
      }}
    >
      <Stack spacing={2.5} sx={{ maxWidth: 760 }}>
        <FigmaCheckboxPreview />

        <Box sx={sectionCardSx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#4A148C', mb: 1.5 }}>
            Unchecked
          </Typography>
          {renderStory(Unchecked)}
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#4A148C', mb: 1.5 }}>
            Checked
          </Typography>
          {renderStory(Checked)}
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#4A148C', mb: 1.5 }}>
            Indeterminate
          </Typography>
          {renderStory(Indeterminate)}
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#4A148C', mb: 1.5 }}>
            Disabled
          </Typography>
          {renderStory(Disabled)}
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#4A148C', mb: 1.5 }}>
            Group Example
          </Typography>
          {renderStory(GroupExample)}
        </Box>
      </Stack>
    </Box>
  ),
};

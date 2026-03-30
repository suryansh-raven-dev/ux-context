import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RavenSelect } from './RavenSelect';

const meta: Meta<typeof RavenSelect> = {
  title: 'Components/Inputs/Select',
  component: RavenSelect,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenSelect>;

const basicOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

const Default: Story = {
  args: {
    options: basicOptions,
    defaultValue: 'medium',
  },
};

const WithLabel: Story = {
  args: {
    label: 'Priority',
    options: basicOptions,
    defaultValue: 'medium',
  },
};

const WithHelperText: Story = {
  args: {
    label: 'Severity',
    helperText: 'Select the severity level.',
    options: basicOptions,
    defaultValue: 'low',
  },
};

const Disabled: Story = {
  args: {
    label: 'Priority',
    options: basicOptions,
    defaultValue: 'high',
    disabled: true,
  },
};

const WithManyOptions: Story = {
  args: {
    label: 'Department',
    options: [
      { value: 'eng', label: 'Engineering' },
      { value: 'design', label: 'Design' },
      { value: 'product', label: 'Product' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'sales', label: 'Sales' },
      { value: 'hr', label: 'Human Resources' },
      { value: 'finance', label: 'Finance' },
      { value: 'legal', label: 'Legal' },
      { value: 'ops', label: 'Operations' },
      { value: 'support', label: 'Support' },
    ],
    defaultValue: 'eng',
  },
};

function renderStory(story: Story) {
  if (story.render) return story.render({} as never, {} as never);
  if (story.args) return <RavenSelect {...story.args} />;
  return null;
}

const sectionCardSx = {
  border: '1px solid #E0E0E0',
  borderRadius: '12px',
  backgroundColor: '#FFFFFF',
  p: 2.5,
} as const;

export const Select: Story = {
  name: 'Select',
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
        <Box sx={sectionCardSx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#4A148C', mb: 1.5 }}>
            Default
          </Typography>
          {renderStory(Default)}
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#4A148C', mb: 1.5 }}>
            With Label
          </Typography>
          {renderStory(WithLabel)}
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#4A148C', mb: 1.5 }}>
            With Helper Text
          </Typography>
          {renderStory(WithHelperText)}
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#4A148C', mb: 1.5 }}>
            Disabled
          </Typography>
          {renderStory(Disabled)}
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#4A148C', mb: 1.5 }}>
            With Many Options
          </Typography>
          {renderStory(WithManyOptions)}
        </Box>
      </Stack>
    </Box>
  ),
};

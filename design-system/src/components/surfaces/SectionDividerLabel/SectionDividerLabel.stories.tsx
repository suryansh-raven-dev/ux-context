import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { SectionDividerLabel } from './SectionDividerLabel';

const meta = {
  title: 'Components/Surfaces/SectionDividerLabel',
  component: SectionDividerLabel,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof SectionDividerLabel>;

export default meta;
type Story = StoryObj<typeof SectionDividerLabel>;

export const Default: Story = { args: { label: 'Department' } };

export const Examples: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 600 }}>
      <SectionDividerLabel label="Department" />
      <SectionDividerLabel label="Incident Details" />
      <SectionDividerLabel label="Reporting As" />
      <SectionDividerLabel label="Location Information" />
    </Box>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import DescriptionRounded from '@mui/icons-material/DescriptionRounded';
import ReportProblemRounded from '@mui/icons-material/ReportProblemRounded';
import PeopleRounded from '@mui/icons-material/PeopleRounded';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormSectionCard } from './FormSectionCard';
import { SectionDividerLabel } from '../SectionDividerLabel/SectionDividerLabel';

const meta = {
  title: 'Surfaces/FormSectionCard',
  component: FormSectionCard,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof FormSectionCard>;

export default meta;
type Story = StoryObj<typeof FormSectionCard>;

export const ReportInformation: Story = {
  render: () => (
    <Box sx={{ maxWidth: 688 }}>
      <FormSectionCard icon={<DescriptionRounded />} title="Report Information">
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField label="Incident ID" value="ID-CJO190HJ" disabled fullWidth />
          <TextField label="Date & Time" value="15/03/2026, 02:30 PM" fullWidth />
        </Box>
        <SectionDividerLabel label="Department" />
        <TextField label="Department" value="Mechanical" fullWidth />
        <TextField label="Exact Location" value="Conveyor Belt Section - Zone B" fullWidth />
      </FormSectionCard>
    </Box>
  ),
};

export const IncidentDetails: Story = {
  render: () => (
    <Box sx={{ maxWidth: 688 }}>
      <FormSectionCard icon={<ReportProblemRounded />} title="Incident Details">
        <TextField
          label="Short Description"
          multiline
          minRows={3}
          fullWidth
          value="At approximately 2:30 PM, an incident occurred involving a potential electrical hazard near the conveyor system in Assembly Line 5."
        />
        <TextField
          label="Immediate Action Taken"
          multiline
          minRows={3}
          fullWidth
          value="The technician immediately deactivated the conveyor system and isolated the power supply."
        />
      </FormSectionCard>
    </Box>
  ),
};

export const ReportingAs: Story = {
  render: () => (
    <Box sx={{ maxWidth: 688 }}>
      <FormSectionCard icon={<PeopleRounded />} title="Reporting as">
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ flex: 1, bgcolor: '#F3E5F5', borderRadius: 2, p: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{ fontFamily: 'Source Sans 3', fontSize: 16 }}>Self</span>
          </Box>
          <Box sx={{ flex: 1, bgcolor: '#FAFAFA', borderRadius: 2, p: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{ fontFamily: 'Source Sans 3', fontSize: 16 }}>Someone else</span>
          </Box>
        </Box>
        <TextField label="Reported on" value="15/03/2026, 03:10 PM" sx={{ maxWidth: 308 }} />
      </FormSectionCard>
    </Box>
  ),
};

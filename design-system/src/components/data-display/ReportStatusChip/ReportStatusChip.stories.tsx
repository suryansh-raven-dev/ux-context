import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReportStatusChip } from './ReportStatusChip';

const meta = {
  title: 'Data Display/ReportStatusChip',
  component: ReportStatusChip,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ReportStatusChip>;

export default meta;
type Story = StoryObj<typeof ReportStatusChip>;

export const InProgress: Story = { args: { status: 'In-progress' } };
export const Closed: Story = { args: { status: 'Closed' } };
export const Pending: Story = { args: { status: 'Pending' } };
export const Released: Story = { args: { status: 'Released' } };
export const Approved: Story = { args: { status: 'Approved' } };
export const Rejected: Story = { args: { status: 'Rejected' } };

export const AllStatuses: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>All status variants</Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <ReportStatusChip status="In-progress" />
        <ReportStatusChip status="Closed" />
        <ReportStatusChip status="Pending" />
        <ReportStatusChip status="Released" />
        <ReportStatusChip status="Approved" />
        <ReportStatusChip status="Rejected" />
      </Box>
      <Typography variant="caption" color="text.secondary">
        Custom label override
      </Typography>
      <ReportStatusChip status="in-progress" label="Under Review" />
    </Box>
  ),
};

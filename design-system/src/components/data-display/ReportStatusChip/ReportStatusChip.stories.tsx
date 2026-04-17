import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { ReportStatusChip as ReportStatusChipComponent } from './ReportStatusChip';

const meta: Meta<typeof ReportStatusChipComponent> = {
  title: 'Data Display',
  component: ReportStatusChipComponent,
};
export default meta;

type Story = StoryObj<typeof ReportStatusChipComponent>;

export const ReportStatusChip: Story = {
  name: 'ReportStatusChip',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage maxWidth={760}>

      <StorybookSection
        title="All statuses"
        description="Pill-shaped status chip with colored dot + label. Used in DataTable status columns — prefer this over plain text or StatusCell."
      >
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <ReportStatusChipComponent status="In-progress" />
          <ReportStatusChipComponent status="Closed" />
          <ReportStatusChipComponent status="Pending" />
          <ReportStatusChipComponent status="Released" />
          <ReportStatusChipComponent status="Approved" />
          <ReportStatusChipComponent status="Rejected" />
        </Box>
      </StorybookSection>

      <StorybookSection
        title="In Progress"
        description="Blue dot — work is underway."
      >
        <ReportStatusChipComponent status="In-progress" />
      </StorybookSection>

      <StorybookSection
        title="Closed"
        description="Green dot — record has been resolved and archived."
      >
        <ReportStatusChipComponent status="Closed" />
      </StorybookSection>

      <StorybookSection
        title="Pending"
        description="Amber dot — awaiting an action from another party."
      >
        <ReportStatusChipComponent status="Pending" />
      </StorybookSection>

      <StorybookSection
        title="Released"
        description="Green dot — record has moved out of draft into a shared state."
      >
        <ReportStatusChipComponent status="Released" />
      </StorybookSection>

      <StorybookSection
        title="Approved"
        description="Green dot — review succeeded and the record is cleared."
      >
        <ReportStatusChipComponent status="Approved" />
      </StorybookSection>

      <StorybookSection
        title="Rejected"
        description="Red dot — review failed, the record is blocked."
      >
        <ReportStatusChipComponent status="Rejected" />
      </StorybookSection>

      <StorybookSection
        title="Custom label"
        description="Override the default label text while keeping the status color via the label prop."
      >
        <ReportStatusChipComponent status="in-progress" label="Under Review" />
      </StorybookSection>

    </StorybookPage>
  ),
};

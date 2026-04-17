import type { Meta, StoryObj } from '@storybook/react';
import OpenInNewRounded from '@mui/icons-material/OpenInNewRounded';
import EditRounded from '@mui/icons-material/EditRounded';
import Box from '@mui/material/Box';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RowActionButton as RowActionButtonComponent } from './RowActionButton';

const meta: Meta<typeof RowActionButtonComponent> = {
  title: 'Inputs',
  component: RowActionButtonComponent,
};
export default meta;

type Story = StoryObj<typeof RowActionButtonComponent>;

export const RowActionButton: Story = {
  tags: ['!dev'],
  name: 'RowActionButton',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage maxWidth={760}>

      <StorybookSection
        title="Default"
        description="Chevron-right variant used in the last column of DataTable rows to navigate into a record."
      >
        <RowActionButtonComponent onClick={() => console.log('clicked')} />
      </StorybookSection>

      <StorybookSection
        title="Custom Icon"
        description="Override the chevron via the icon prop for cases like opening in a new tab or launching an editor."
      >
        <RowActionButtonComponent icon={<OpenInNewRounded />} ariaLabel="Open in new tab" />
      </StorybookSection>

      <StorybookSection
        title="Variants"
        description="Use consistent sizing across row actions — the button exposes an 8px radius and 32px hit target regardless of icon."
      >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <RowActionButtonComponent ariaLabel="View details" />
          <RowActionButtonComponent icon={<EditRounded />} ariaLabel="Edit" />
          <RowActionButtonComponent icon={<OpenInNewRounded />} ariaLabel="Open" />
        </Box>
      </StorybookSection>

    </StorybookPage>
  ),
};

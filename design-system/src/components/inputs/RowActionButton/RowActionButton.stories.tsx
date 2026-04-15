import type { Meta, StoryObj } from '@storybook/react';
import OpenInNewRounded from '@mui/icons-material/OpenInNewRounded';
import EditRounded from '@mui/icons-material/EditRounded';
import Box from '@mui/material/Box';
import { RowActionButton } from './RowActionButton';

const meta = {
  title: 'Inputs/RowActionButton',
  component: RowActionButton,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof RowActionButton>;

export default meta;
type Story = StoryObj<typeof RowActionButton>;

export const Default: Story = {
  args: { onClick: () => console.log('clicked') },
};

export const CustomIcon: Story = {
  args: { icon: <OpenInNewRounded />, ariaLabel: 'Open in new tab' },
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <RowActionButton ariaLabel="View details" />
      <RowActionButton icon={<EditRounded />} ariaLabel="Edit" />
      <RowActionButton icon={<OpenInNewRounded />} ariaLabel="Open" />
    </Box>
  ),
};

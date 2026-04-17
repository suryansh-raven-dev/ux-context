import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { CategoryDot } from './CategoryDot';
import { categoryColors } from '../../../tokens/tokens';

const meta: Meta<typeof CategoryDot> = {
  title: 'Components/Data Display/CategoryDot',
  component: CategoryDot,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'System-level primitive for plant / section identity. Binds to `color.category.*` only (§7.2). MUST NOT be used to convey status — use `ReportStatusChip` for that.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof CategoryDot>;

export const AllCategories: Story = {
  render: () => (
    <Stack spacing={2}>
      {(Object.keys(categoryColors) as Array<keyof typeof categoryColors>).map((key) => (
        <Stack key={key} direction="row" spacing={1.5} alignItems="center">
          <CategoryDot category={key} size="md" label={`Category ${key}`} />
          <Typography variant="body2">{key}</Typography>
        </Stack>
      ))}
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <CategoryDot category="hsef" size="sm" label="HSEF small" />
      <CategoryDot category="hsef" size="md" label="HSEF medium" />
      <CategoryDot category="hsef" size="lg" label="HSEF large" />
    </Stack>
  ),
};

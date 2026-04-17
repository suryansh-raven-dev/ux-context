import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import FilterListRounded from '@mui/icons-material/FilterListRounded';

import { FilterBar, type FilterChip } from './FilterBar';

const meta: Meta<typeof FilterBar> = {
  title: 'Components/Workflow/FilterBar',
  component: FilterBar,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof FilterBar>;

const initial: FilterChip[] = [
  { id: 'status', label: 'Status', value: 'In progress' },
  { id: 'plant', label: 'Plant', value: 'Ammonia Train 1' },
  { id: 'severity', label: 'Severity', value: 'High' },
];

export const Default: Story = {
  render: () => {
    const [filters, setFilters] = useState(initial);
    return (
      <FilterBar
        filters={filters}
        onRemove={(id) => setFilters((s) => s.filter((f) => f.id !== id))}
        onClearAll={() => setFilters([])}
        trigger={
          <Button size="small" startIcon={<FilterListRounded />} sx={{ textTransform: 'none' }}>
            Add filter
          </Button>
        }
      />
    );
  },
};

export const Empty: Story = {
  args: { filters: [] },
};

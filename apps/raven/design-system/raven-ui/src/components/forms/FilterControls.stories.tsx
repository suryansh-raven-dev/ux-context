import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FilterControls } from './FilterControls';

export default {
  title: 'Forms/Filter Controls',
  component: FilterControls,
} satisfies Meta<typeof FilterControls>;

type Story = StoryObj<typeof FilterControls>;

const departments = ['Operations', 'Maintenance', 'Safety', 'Engineering'];

export const Default: Story = {
  render: function FilterControlsStory() {
    const [dept, setDept] = useState('Operations');
    const [range] = useState('Jan 1 – Jan 31, 2026');
    return (
      <FilterControls
        departments={departments}
        selectedDepartment={dept}
        onDepartmentChange={setDept}
        dateRange={range}
        onDateRangeClick={() => {}}
      />
    );
  },
};

export const WithSearch: Story = {
  render: function FilterControlsWithSearchStory() {
    const [dept, setDept] = useState('Safety');
    const [query, setQuery] = useState('');
    const [range] = useState('Last 7 days');
    return (
      <FilterControls
        departments={departments}
        selectedDepartment={dept}
        onDepartmentChange={setDept}
        dateRange={range}
        onDateRangeClick={() => {}}
        showSearch
        searchQuery={query}
        onSearchChange={setQuery}
      />
    );
  },
};

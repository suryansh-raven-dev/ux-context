import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { FilterControls } from './FilterControls';

export default {
  title: 'Forms/Filter Controls',
  component: FilterControls,
} satisfies Meta<typeof FilterControls>;

type Story = StoryObj<typeof FilterControls>;

const departments = ['Operations', 'Maintenance', 'Safety', 'Engineering'];

function DefaultExample() {
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
}

function WithSearchExample() {
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
}

export const FilterControlsPage: Story = {
  name: 'Filter Controls',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage maxWidth={960}>
      <StorybookSection title="Default">
        <DefaultExample />
      </StorybookSection>
      <StorybookSection title="With search">
        <WithSearchExample />
      </StorybookSection>
    </StorybookPage>
  ),
};

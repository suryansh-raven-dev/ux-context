import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { FilterControls } from './FilterControls';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

const departments = ['Ops', 'Safety'];

describe('FilterControls', () => {
  it('renders department select and date range', () => {
    renderWithTheme(
      <FilterControls
        departments={departments}
        selectedDepartment="Ops"
        onDepartmentChange={() => {}}
        dateRange="Q1 2026"
        onDateRangeClick={() => {}}
      />
    );

    expect(screen.getByRole('combobox', { name: /department/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /date range/i })).toHaveValue('Q1 2026');
  });

  it('renders search inside a search landmark when showSearch is true', () => {
    renderWithTheme(
      <FilterControls
        departments={departments}
        selectedDepartment="Ops"
        onDepartmentChange={() => {}}
        dateRange="—"
        onDateRangeClick={() => {}}
        showSearch
        searchQuery=""
        onSearchChange={() => {}}
      />
    );

    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /search incidents/i })).toBeInTheDocument();
  });

  it('calls onDepartmentChange when department changes', async () => {
    const user = userEvent.setup();
    const onDepartmentChange = vi.fn();

    renderWithTheme(
      <FilterControls
        departments={departments}
        selectedDepartment="Ops"
        onDepartmentChange={onDepartmentChange}
        dateRange="—"
        onDateRangeClick={() => {}}
      />
    );

    await user.click(screen.getByRole('combobox', { name: /department/i }));
    await user.click(screen.getByRole('option', { name: 'Safety' }));

    expect(onDepartmentChange).toHaveBeenCalledWith('Safety');
  });

  it('calls onDateRangeClick when date field is activated', async () => {
    const user = userEvent.setup();
    const onDateRangeClick = vi.fn();

    renderWithTheme(
      <FilterControls
        departments={departments}
        selectedDepartment="Ops"
        onDepartmentChange={() => {}}
        dateRange="Jan"
        onDateRangeClick={onDateRangeClick}
      />
    );

    await user.click(screen.getByRole('textbox', { name: /date range/i }));
    expect(onDateRangeClick).toHaveBeenCalled();
  });

  it('calls onSearchChange when typing in search', async () => {
    const user = userEvent.setup();
    const onSearchChange = vi.fn();

    renderWithTheme(
      <FilterControls
        departments={departments}
        selectedDepartment="Ops"
        onDepartmentChange={() => {}}
        dateRange="—"
        onDateRangeClick={() => {}}
        showSearch
        searchQuery=""
        onSearchChange={onSearchChange}
      />
    );

    await user.type(screen.getByRole('textbox', { name: /search incidents/i }), 'near miss');
    expect(onSearchChange).toHaveBeenCalled();
  });
});

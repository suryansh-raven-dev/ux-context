import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';
import { DataTable, StatusCell } from './DataTable';

type Row = { id: string; name: string };

function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={ravenNearMissTheme}>{ui}</ThemeProvider>);
}

const rows: Row[] = [
  { id: 'a', name: 'First' },
  { id: 'b', name: 'Second' },
];

describe('DataTable', () => {
  it('uses row key for React keys, not array index', () => {
    const { container } = renderWithTheme(
      <DataTable<Row>
        columns={[{ key: 'name', label: 'Name' }]}
        rows={rows}
        rowKey="id"
        page={0}
        rowsPerPage={10}
        total={2}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />
    );

    const trs = container.querySelectorAll('tbody tr');
    expect(trs).toHaveLength(2);
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });

  it('invokes onRowClick when a row is clicked', async () => {
    const user = userEvent.setup();
    const onRowClick = vi.fn();
    renderWithTheme(
      <DataTable<Row>
        columns={[{ key: 'name', label: 'Name' }]}
        rows={rows}
        rowKey="id"
        onRowClick={onRowClick}
        page={0}
        rowsPerPage={10}
        total={2}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />
    );

    await user.click(screen.getByText('First'));
    expect(onRowClick).toHaveBeenCalledWith(rows[0]);
  });

  it('fires onPageChange with the new page', async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();
    renderWithTheme(
      <DataTable<Row>
        columns={[{ key: 'name', label: 'Name' }]}
        rows={rows}
        rowKey="id"
        page={0}
        rowsPerPage={1}
        total={5}
        onPageChange={onPageChange}
        onRowsPerPageChange={() => {}}
      />
    );

    const next = screen.getByRole('button', { name: /next/i });
    await user.click(next);
    expect(onPageChange).toHaveBeenCalledWith(1);
  });
});

describe('StatusCell', () => {
  it('renders status text', () => {
    renderWithTheme(<StatusCell status="Closed" />);
    expect(screen.getByText('Closed')).toBeInTheDocument();
  });
});

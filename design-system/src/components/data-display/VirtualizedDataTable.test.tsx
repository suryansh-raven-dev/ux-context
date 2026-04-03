import type { ReactElement } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';
import { VirtualizedDataTable } from './VirtualizedDataTable';

type Row = {
  id: string;
  name: string;
};

const rows: Row[] = Array.from({ length: 120 }, (_, index) => ({
  id: `row-${index + 1}`,
  name: `Item ${index + 1}`,
}));

function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={ravenNearMissTheme}>{ui}</ThemeProvider>);
}

describe('VirtualizedDataTable', () => {
  it('renders the header and first visible rows', () => {
    renderWithTheme(
      <VirtualizedDataTable<Row>
        columns={[{ key: 'name', label: 'Name' }]}
        rows={rows}
        rowKey="id"
        height={180}
      />,
    );

    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('invokes onRowClick for a visible virtualized row', async () => {
    const user = userEvent.setup();
    const onRowClick = vi.fn();

    renderWithTheme(
      <VirtualizedDataTable<Row>
        columns={[{ key: 'name', label: 'Name' }]}
        rows={rows}
        rowKey="id"
        height={180}
        onRowClick={onRowClick}
      />,
    );

    await user.click(screen.getByText('Item 1'));
    expect(onRowClick).toHaveBeenCalledWith(rows[0]);
  });
});

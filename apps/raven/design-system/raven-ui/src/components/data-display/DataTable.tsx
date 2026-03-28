import type { ReactNode } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRightRounded';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import './DataTable.css';

export type DataTableColumn<T extends object> = {
  key: keyof T;
  label: string;
  width?: number | string;
  render?: (value: T[keyof T], row: T) => ReactNode;
};

export type DataTableProps<T extends object> = {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey: keyof T;
  onRowClick?: (row: T) => void;
  page: number;
  rowsPerPage: number;
  total: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rpp: number) => void;
};

const STATUS_DOT: Record<string, string> = {
  closed: '#2E7D32',
  'in progress': '#0288D1',
  pending: '#F57C00',
  na: '#9E9E9E',
};

function normalizeStatus(status: string) {
  return status.trim().toLowerCase();
}

/**
 * Status badge with colored dot for common workflow states.
 */
export function StatusCell({ status }: { status: string }) {
  const key = normalizeStatus(status);
  const dotColor = STATUS_DOT[key] ?? '#9E9E9E';

  return (
    <span className="raven-data-table__status" title={status}>
      <span
        className="raven-data-table__status-dot"
        style={{ backgroundColor: dotColor }}
        aria-hidden
      />
      <Typography component="span" variant="body2" color="text.primary">
        {status}
      </Typography>
    </span>
  );
}

/**
 * Paginated data table with optional row navigation affordance.
 */
export function DataTable<T extends object>({
  columns,
  rows,
  rowKey,
  onRowClick,
  page,
  rowsPerPage,
  total,
  onPageChange,
  onRowsPerPageChange,
}: DataTableProps<T>) {
  const showAction = Boolean(onRowClick);

  return (
    <Paper elevation={0} className="raven-data-table">
      <div className="raven-data-table__scroll">
        <TableContainer>
          <Table size="small" aria-label="Data table">
            <TableHead>
              <TableRow>
                {columns.map((col) => (
                  <TableCell
                    key={String(col.key)}
                    className="raven-data-table__header-cell"
                    sx={col.width != null ? { width: col.width } : undefined}
                    component="th"
                    scope="col"
                  >
                    {col.label}
                  </TableCell>
                ))}
                {showAction ? (
                  <TableCell
                    className="raven-data-table__header-cell raven-data-table__action-cell"
                    component="th"
                    scope="col"
                  >
                    <span className="visually-hidden">Row actions</span>
                  </TableCell>
                ) : null}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                const rk = row[rowKey];
                const rowId = String(rk);

                return (
                  <TableRow
                    key={rowId}
                    hover
                    className={onRowClick ? 'raven-data-table__row--clickable' : undefined}
                    onClick={onRowClick ? () => onRowClick(row) : undefined}
                    sx={onRowClick ? { cursor: 'pointer' } : undefined}
                  >
                    {columns.map((col) => {
                      const raw = row[col.key];
                      const cellContent = col.render ? col.render(raw, row) : String(raw ?? '');
                      return (
                        <TableCell key={`${rowId}-${String(col.key)}`}>{cellContent}</TableCell>
                      );
                    })}
                    {showAction ? (
                      <TableCell className="raven-data-table__action-cell" padding="checkbox">
                        <IconButton
                          size="small"
                          aria-label={`View row ${rowId}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onRowClick?.(row);
                          }}
                          tabIndex={-1}
                        >
                          <ChevronRightIcon fontSize="small" aria-hidden />
                        </IconButton>
                      </TableCell>
                    ) : null}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <TablePagination
        component="div"
        count={total}
        page={page}
        onPageChange={(_e, newPage) => onPageChange(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        rowsPerPageOptions={[5, 10, 25, 50]}
      />
    </Paper>
  );
}

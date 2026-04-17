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

import { statusColors } from '../../tokens/tokens';

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
  /** Column keys whose cell text should render bold (fontWeight 600). */
  boldColumns?: (keyof T)[];
};

const COLUMN_WIDTH_SX = (width?: number | string) =>
  width != null ? { width } : undefined;

const CLICKABLE_ROW_SX = { cursor: 'pointer' } as const;

const STATUS_DOT: Record<string, string> = {
  closed: statusColors.closed.dot,
  'in progress': statusColors['in-progress'].dot,
  'in-progress': statusColors['in-progress'].dot,
  pending: statusColors.pending.dot,
  released: statusColors.released.dot,
  approved: statusColors.approved.dot,
  rejected: statusColors.rejected.dot,
};

const NA_DOT_COLOR = 'rgba(0, 0, 0, 0.38)';

function normalizeStatus(status: string) {
  return status.trim().toLowerCase();
}

/**
 * Status badge with colored dot for common workflow states.
 * NOTE: Prefer `ReportStatusChip` for status columns — this cell is retained
 * for legacy tables; a colored dot used for status can conflict with the
 * category-binding rule when placed next to category cells.
 */
export function StatusCell({ status }: { status: string }) {
  const key = normalizeStatus(status);
  const dotColor = STATUS_DOT[key] ?? NA_DOT_COLOR;

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
  boldColumns,
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
                    sx={COLUMN_WIDTH_SX(col.width)}
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
                    sx={onRowClick ? CLICKABLE_ROW_SX : undefined}
                  >
                    {columns.map((col) => {
                      const raw = row[col.key];
                      const cellContent = col.render ? col.render(raw, row) : String(raw ?? '');
                      const isBold = boldColumns?.includes(col.key);
                      return (
                        <TableCell
                          key={`${rowId}-${String(col.key)}`}
                          sx={isBold ? { fontWeight: 600 } : undefined}
                        >
                          {cellContent}
                        </TableCell>
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

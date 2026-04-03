import type { CSSProperties, ReactNode } from 'react';
import { useMemo } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRightRounded';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { List } from 'react-window';

import type { DataTableColumn } from './DataTable';

import './DataTable.css';

const DEFAULT_HEIGHT = 420;
const DEFAULT_ROW_HEIGHT = 52;
const DEFAULT_OVERSCAN = 6;
const ACTION_COLUMN_WIDTH = '48px';

export type VirtualizedDataTableProps<T extends object> = {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey: keyof T;
  onRowClick?: (row: T) => void;
  height?: number;
  rowHeight?: number;
  overscanCount?: number;
  emptyState?: ReactNode;
};

type VirtualizedRowRendererProps<T extends object> = {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey: keyof T;
  onRowClick?: (row: T) => void;
  showAction: boolean;
  gridTemplateColumns: string;
};

function getColumnTrack(width?: number | string) {
  if (width == null) return 'minmax(0, 1fr)';
  return typeof width === 'number' ? `${width}px` : width;
}

function getCellContent<T extends object>(
  column: DataTableColumn<T>,
  row: T,
) {
  const rawValue = row[column.key];
  return column.render ? column.render(rawValue, row) : String(rawValue ?? '');
}

function VirtualizedRow<T extends object>({
  index,
  style,
  columns,
  rows,
  rowKey,
  onRowClick,
  showAction,
  gridTemplateColumns,
}: {
  index: number;
  style: CSSProperties;
} & VirtualizedRowRendererProps<T>) {
  const row = rows[index];
  const rowId = String(row[rowKey]);
  const clickable = Boolean(onRowClick);

  return (
    <div
      style={style}
      className="raven-data-table__virtual-row-wrapper"
      role="presentation"
    >
      <div
        role="row"
        className={
          clickable
            ? 'raven-data-table__virtual-row raven-data-table__virtual-row--clickable'
            : 'raven-data-table__virtual-row'
        }
        style={{ gridTemplateColumns }}
        onClick={clickable ? () => onRowClick?.(row) : undefined}
      >
        {columns.map((column) => (
          <div
            key={`${rowId}-${String(column.key)}`}
            role="cell"
            className="raven-data-table__virtual-cell"
          >
            {getCellContent(column, row)}
          </div>
        ))}
        {showAction ? (
          <div
            role="cell"
            className="raven-data-table__virtual-cell raven-data-table__action-cell"
          >
            <IconButton
              size="small"
              aria-label={`View row ${rowId}`}
              onClick={(event) => {
                event.stopPropagation();
                onRowClick?.(row);
              }}
              tabIndex={-1}
            >
              <ChevronRightIcon fontSize="small" aria-hidden />
            </IconButton>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Virtualized alternative for high-row-count datasets.
 * Keep `DataTable` for small/paginated datasets and use this when row count grows.
 */
export function VirtualizedDataTable<T extends object>({
  columns,
  rows,
  rowKey,
  onRowClick,
  height = DEFAULT_HEIGHT,
  rowHeight = DEFAULT_ROW_HEIGHT,
  overscanCount = DEFAULT_OVERSCAN,
  emptyState,
}: VirtualizedDataTableProps<T>) {
  const showAction = Boolean(onRowClick);
  const gridTemplateColumns = useMemo(() => {
    const tracks = columns.map((column) => getColumnTrack(column.width));
    if (showAction) {
      tracks.push(ACTION_COLUMN_WIDTH);
    }
    return tracks.join(' ');
  }, [columns, showAction]);

  const rowProps = useMemo<VirtualizedRowRendererProps<T>>(
    () => ({
      columns,
      rows,
      rowKey,
      onRowClick,
      showAction,
      gridTemplateColumns,
    }),
    [columns, gridTemplateColumns, onRowClick, rowKey, rows, showAction],
  );

  if (rows.length === 0) {
    return (
      <Paper elevation={0} className="raven-data-table raven-data-table--virtualized">
        <div
          className="raven-data-table__virtual-empty"
          style={{ minHeight: height }}
        >
          {emptyState ?? (
            <Typography variant="body2" color="text.secondary">
              No rows available.
            </Typography>
          )}
        </div>
      </Paper>
    );
  }

  return (
    <Paper elevation={0} className="raven-data-table raven-data-table--virtualized">
      <div className="raven-data-table__scroll" role="table" aria-label="Virtualized data table">
        <div
          role="rowgroup"
          className="raven-data-table__virtual-header"
          style={{ gridTemplateColumns }}
        >
          {columns.map((column) => (
            <div
              key={String(column.key)}
              role="columnheader"
              className="raven-data-table__header-cell raven-data-table__virtual-header-cell"
            >
              {column.label}
            </div>
          ))}
          {showAction ? (
            <div
              role="columnheader"
              className="raven-data-table__header-cell raven-data-table__virtual-header-cell raven-data-table__action-cell"
            >
              <span className="visually-hidden">Row actions</span>
            </div>
          ) : null}
        </div>
        <div role="rowgroup">
          <List
            className="raven-data-table__virtual-list"
            rowComponent={VirtualizedRow as never}
            rowCount={rows.length}
            rowHeight={rowHeight}
            rowProps={rowProps}
            overscanCount={overscanCount}
            style={{ height, width: '100%' }}
            defaultHeight={height}
          />
        </div>
      </div>
    </Paper>
  );
}

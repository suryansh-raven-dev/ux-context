import type { Meta, StoryObj } from '@storybook/react';

import { DataTable, StatusCell } from './DataTable';

type Row = {
  id: string;
  name: string;
  status: string;
  owner: string;
};

const sampleRows: Row[] = [
  { id: '1', name: 'Near-miss A', status: 'In Progress', owner: 'Alex' },
  { id: '2', name: 'Near-miss B', status: 'Closed', owner: 'Jordan' },
  { id: '3', name: 'Near-miss C', status: 'Pending', owner: 'Sam' },
  { id: '4', name: 'Near-miss D', status: 'NA', owner: 'Taylor' },
];

export default {
  title: 'Data display/DataTable',
  component: DataTable<Row>,
} satisfies Meta<typeof DataTable<Row>>;

type Story = StoryObj<typeof DataTable<Row>>;

export const Default: Story = {
  args: {
    columns: [
      { key: 'name', label: 'Name', width: '32%' },
      {
        key: 'status',
        label: 'Status',
        width: '28%',
        render: (_v, row) => <StatusCell status={row.status} />,
      },
      { key: 'owner', label: 'Owner' },
    ],
    rows: sampleRows,
    rowKey: 'id',
    page: 0,
    rowsPerPage: 10,
    total: sampleRows.length,
    onPageChange: () => {},
    onRowsPerPageChange: () => {},
  },
};

export const WithRowClick: Story = {
  args: {
    ...Default.args,
    onRowClick: () => {},
  },
};

export const Paginated: Story = {
  args: {
    ...Default.args,
    rows: Array.from({ length: 12 }, (_, i) => ({
      id: `row-${i}`,
      name: `Item ${i + 1}`,
      status: i % 2 === 0 ? 'Closed' : 'Pending',
      owner: 'Owner',
    })),
    total: 12,
    rowsPerPage: 5,
    page: 1,
  },
};

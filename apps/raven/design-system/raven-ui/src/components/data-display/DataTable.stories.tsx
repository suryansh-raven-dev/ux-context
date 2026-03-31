import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { DataTable, StatusCell } from './DataTable';
import type { DataTableColumn } from './DataTable';
import { VirtualizedDataTable } from './VirtualizedDataTable';

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

const columns: DataTableColumn<Row>[] = [
  { key: 'name', label: 'Name', width: '32%' },
  {
    key: 'status',
    label: 'Status',
    width: '28%',
    render: (_v: Row['status'], row: Row) => <StatusCell status={row.status} />,
  },
  { key: 'owner', label: 'Owner' },
];

const stressRows: Row[] = Array.from({ length: 2500 }, (_, index) => ({
  id: `row-${index + 1}`,
  name: `Near-miss ${String(index + 1).padStart(4, '0')}`,
  status:
    index % 3 === 0 ? 'In Progress' : index % 3 === 1 ? 'Closed' : 'Pending',
  owner: `Owner ${((index % 18) + 1).toString().padStart(2, '0')}`,
}));

export default {
  title: 'Components/Data Display/Table',
  component: DataTable<Row>,
} satisfies Meta<typeof DataTable<Row>>;

type Story = StoryObj<typeof DataTable<Row>>;

export const Default: Story = {
  args: {
    columns,
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

export const PerformanceStress: Story = {
  name: 'Performance Stress',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Repeatable stress surface for profiling table interactions. Use the simple table for paginated datasets and the virtualized variant for high-row-count review pages.',
      },
    },
  },
  render: () => (
    <Box sx={{ p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Simple table baseline
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 720 }}>
            Keeps the existing MUI table path for paginated datasets. This is the baseline to compare when profiling hover and click cost.
          </Typography>
          <DataTable<Row>
            columns={columns}
            rows={stressRows.slice(0, 50)}
            rowKey="id"
            page={0}
            rowsPerPage={50}
            total={stressRows.length}
            onPageChange={() => {}}
            onRowsPerPageChange={() => {}}
            onRowClick={() => {}}
          />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Virtualized large-data path
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 720 }}>
            Renders 2,500 rows while keeping DOM work bounded. Use this story when profiling scroll and selection behavior on high-volume data.
          </Typography>
          <VirtualizedDataTable<Row>
            columns={columns}
            rows={stressRows}
            rowKey="id"
            onRowClick={() => {}}
            height={420}
          />
        </Box>
      </Stack>
    </Box>
  ),
};

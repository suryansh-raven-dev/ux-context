import Box from '@mui/material/Box';

import { statusColors } from '../../../tokens/tokens';

type StatusStyle = { bg: string; text: string; label: string };

const STATUS_CONFIG: Record<string, StatusStyle> = {
  'in-progress': { bg: statusColors['in-progress'].surface, text: statusColors['in-progress'].content, label: 'In-progress' },
  'in progress': { bg: statusColors['in-progress'].surface, text: statusColors['in-progress'].content, label: 'In-progress' },
  closed: { bg: statusColors.closed.surface, text: statusColors.closed.content, label: 'Closed' },
  pending: { bg: statusColors.pending.surface, text: statusColors.pending.content, label: 'Pending' },
  released: { bg: statusColors.released.surface, text: statusColors.released.content, label: 'Released' },
  approved: { bg: statusColors.approved.surface, text: statusColors.approved.content, label: 'Approved' },
  rejected: { bg: statusColors.rejected.surface, text: statusColors.rejected.content, label: 'Rejected' },
};

export type ReportStatusChipProps = {
  status: string;
  label?: string;
};

export function ReportStatusChip({ status, label }: ReportStatusChipProps) {
  const key = status.trim().toLowerCase();
  const config = STATUS_CONFIG[key];
  const bg = config?.bg ?? 'action.hover';
  const textColor = config?.text ?? 'text.secondary';
  const displayLabel = label ?? config?.label ?? status;

  return (
    <Box
      component="span"
      title={displayLabel}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 24,
        px: 0.5,
        borderRadius: '50px',
        backgroundColor: bg,
      }}
    >
      <Box
        component="span"
        sx={{
          // CLAUDE.md: status chip labels use Roboto (documented exception to Source Sans 3).
          fontFamily: '"Roboto", sans-serif',
          fontSize: '13px',
          fontWeight: 400,
          letterSpacing: '0.16px',
          lineHeight: '18px',
          px: 0.75,
          whiteSpace: 'nowrap',
          color: textColor,
        }}
      >
        {displayLabel}
      </Box>
    </Box>
  );
}

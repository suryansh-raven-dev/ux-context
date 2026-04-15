import FiberManualRecordRounded from '@mui/icons-material/FiberManualRecordRounded';

import './ReportStatusChip.css';

const STATUS_CONFIG: Record<string, { bg: string; text: string; dot: string; label: string }> = {
  'in-progress': { bg: '#E3F2FD', text: '#0D47A1', dot: '#0288D1', label: 'In-progress' },
  'in progress': { bg: '#E3F2FD', text: '#0D47A1', dot: '#0288D1', label: 'In-progress' },
  closed: { bg: '#E8F5E9', text: '#33691E', dot: '#4CAF50', label: 'Closed' },
  pending: { bg: '#FFF8E1', text: '#FF6F00', dot: '#F57C00', label: 'Pending' },
  released: { bg: '#E8F5E9', text: '#1B5E20', dot: '#2E7D32', label: 'Released' },
  approved: { bg: '#E8F5E9', text: '#1B5E20', dot: '#2E7D32', label: 'Approved' },
  rejected: { bg: '#FFEBEE', text: '#B71C1C', dot: '#F44336', label: 'Rejected' },
};

const FALLBACK = { bg: '#F5F5F5', text: 'rgba(0,0,0,0.6)', dot: '#9E9E9E' };

export type ReportStatusChipProps = {
  status: string;
  label?: string;
};

export function ReportStatusChip({ status, label }: ReportStatusChipProps) {
  const key = status.trim().toLowerCase();
  const config = STATUS_CONFIG[key];
  const bg = config?.bg ?? FALLBACK.bg;
  const textColor = config?.text ?? FALLBACK.text;
  const dotColor = config?.dot ?? FALLBACK.dot;
  const displayLabel = label ?? config?.label ?? status;

  return (
    <span
      className="raven-report-status-chip"
      style={{ backgroundColor: bg }}
      title={displayLabel}
    >
      <FiberManualRecordRounded
        className="raven-report-status-chip__dot"
        style={{ color: dotColor }}
      />
      <span
        className="raven-report-status-chip__label"
        style={{ color: textColor }}
      >
        {displayLabel}
      </span>
    </span>
  );
}

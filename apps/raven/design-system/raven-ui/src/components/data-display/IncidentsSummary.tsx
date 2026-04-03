import type { ReactNode } from 'react';

import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberRounded from '@mui/icons-material/WarningAmberRounded';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import './IncidentsSummary.css';

/* ─── Types ──────────────────────────────────────────────────────────────────── */

export type OverviewStat = {
  value: number;
  label: string;
};

export type BreakdownItem = {
  label: string;
  value: number;
};

export type RateInfo = {
  label: string;
  value: string;
  positive: boolean;
};

export type OverdueInfo = {
  count: number;
  label?: string;
};

export type DetailCard = {
  icon: ReactNode;
  iconBg?: string;
  title: string;
  count: number;
  breakdown: BreakdownItem[];
  rate?: RateInfo;
  overdue?: OverdueInfo;
  onClick?: () => void;
};

export type IncidentsSummaryProps = {
  /** Section title, e.g. "INCIDENTS SUMMARY" */
  sectionTitle?: string;
  /** Badge chip next to the title, e.g. "21% Approval Rate" */
  approvalRate?: { label: string; tooltipText?: string };
  /** Top-level big stat numbers */
  overviewStats: OverviewStat[];
  /** Detail cards row (Total Reports, Total Investigations, Total Recommendations) */
  detailCards: DetailCard[];
};

/* ─── Sub-components ─────────────────────────────────────────────────────────── */

function StatBlock({ value, label }: OverviewStat) {
  return (
    <Box className="incidents-summary__stat-block">
      <Typography
        variant="h4"
        fontWeight={600}
        sx={{ lineHeight: '40px', letterSpacing: '0.25px', color: 'text.primary' }}
      >
        {value}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}

function DetailCardComponent({
  icon,
  iconBg = '#E1F5FE',
  title,
  count,
  breakdown,
  rate,
  overdue,
  onClick,
}: DetailCard) {
  const header = (
    <Box className="incidents-summary__detail-header">
      <Box className="incidents-summary__detail-title-row">
        <Box
          className="incidents-summary__detail-icon"
          sx={{ backgroundColor: iconBg }}
        >
          {icon}
        </Box>
        <Typography variant="subtitle2" fontWeight={600} color="text.secondary">
          {title}
        </Typography>
      </Box>
      <Box className="incidents-summary__detail-count-row">
        <Typography variant="h4" fontWeight={600} color="text.primary" sx={{ lineHeight: '40px' }}>
          {count}
        </Typography>
        <IconButton size="small" aria-label={`View ${title} details`}>
          <ChevronRightRounded fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );

  const body = (
    <>
      <Box className="incidents-summary__breakdown" role="list">
        {breakdown.map((item) => (
          <Box key={item.label} className="incidents-summary__breakdown-item" role="listitem">
            <Typography variant="body2" color="text.secondary">
              {item.label}
            </Typography>
            <Typography variant="body2" fontWeight={600} color="text.primary">
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>

      {(rate || overdue) && (
        <Box className="incidents-summary__detail-footer">
          {rate && (
            <Chip
              size="small"
              icon={<InfoOutlinedIcon sx={{ fontSize: 16 }} />}
              label={rate.label}
              sx={{
                backgroundColor: rate.positive ? '#E8F5E9' : '#FBE9E7',
                color: rate.positive ? '#1B5E20' : '#BF360C',
                fontWeight: 500,
                fontSize: 13,
                '& .MuiChip-icon': { color: rate.positive ? '#2E7D32' : '#D84315' },
              }}
            />
          )}
          {overdue && (
            <Chip
              size="small"
              icon={<WarningAmberRounded sx={{ fontSize: 16 }} />}
              label={`${overdue.count} ${overdue.label ?? 'Overdue'}`}
              sx={{
                backgroundColor: '#FFF3E0',
                color: '#E65100',
                fontWeight: 500,
                fontSize: 13,
                '& .MuiChip-icon': { color: '#EF6C00' },
              }}
            />
          )}
        </Box>
      )}
    </>
  );

  const cardContent = (
    <>
      {header}
      {body}
    </>
  );

  return (
    <Card
      elevation={0}
      className="incidents-summary__detail-card"
      sx={{ borderRadius: '20px', border: '1px solid #F3E5F5' }}
    >
      {onClick ? (
        <CardActionArea onClick={onClick} sx={{ p: 3 }}>
          {cardContent}
        </CardActionArea>
      ) : (
        <Box sx={{ p: 3 }}>{cardContent}</Box>
      )}
    </Card>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────────── */

/**
 * **IncidentsSummary** — Dashboard section showing top-level metrics and
 * three detail cards (Reports, Investigations, Recommendations).
 *
 * ### MUI v6 components used
 * - `Card` + `CardActionArea` — clickable detail cards
 * - `Chip` — closure rate badges and overdue warnings
 * - `Divider` — vertical separator between overview stats
 * - `Typography` — h4 stat numbers, subtitle2 labels, body2 breakdowns
 * - `IconButton` — chevron-right action on detail cards
 * - `Tooltip` — info icon on approval rate chip
 *
 * @see https://v6.mui.com/material-ui/react-card/
 * @see https://v6.mui.com/material-ui/react-chip/
 */
export function IncidentsSummary({
  sectionTitle = 'INCIDENTS SUMMARY',
  approvalRate,
  overviewStats,
  detailCards,
}: IncidentsSummaryProps) {
  return (
    <Card
      elevation={0}
      className="incidents-summary"
      sx={{
        borderRadius: '32px',
        border: '1px solid #F3E5F5',
        boxShadow: '0px 2px 8px 3px rgba(63,81,181,0.04)',
        p: 2,
      }}
    >
      {/* Section header */}
      <Box className="incidents-summary__header">
        <Typography
          variant="subtitle2"
          fontWeight={600}
          sx={{ textTransform: 'uppercase', letterSpacing: '0.17px', color: 'text.primary' }}
        >
          {sectionTitle}
        </Typography>
        {approvalRate && (
          <Chip
            size="small"
            label={approvalRate.label}
            icon={
              approvalRate.tooltipText ? (
                <Tooltip title={approvalRate.tooltipText}>
                  <InfoOutlinedIcon sx={{ fontSize: 16 }} />
                </Tooltip>
              ) : undefined
            }
            sx={{
              backgroundColor: '#E8F5E9',
              color: '#1B5E20',
              fontWeight: 500,
              fontSize: 13,
              '& .MuiChip-icon': { color: '#2E7D32' },
            }}
          />
        )}
      </Box>

      {/* Overview stat row */}
      <Box className="incidents-summary__stat-row">
        {overviewStats.map((stat, idx) => (
          <Box key={stat.label} className="incidents-summary__stat-cell">
            {idx > 0 && (
              <Divider orientation="vertical" flexItem sx={{ mx: 0 }} />
            )}
            <StatBlock {...stat} />
          </Box>
        ))}
      </Box>

      {/* Detail cards */}
      <Box className="incidents-summary__detail-row">
        {detailCards.map((card) => (
          <DetailCardComponent key={card.title} {...card} />
        ))}
      </Box>
    </Card>
  );
}

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

import { statusColors } from '../../tokens/tokens';

const rootSx = { backgroundColor: 'background.default' };

const headerSx = { display: 'flex', alignItems: 'center', gap: 2, p: 1 };

const statRowSx = { display: 'flex', gap: 3, alignItems: 'center', py: 2 };

const statCellSx = {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  gap: 2,
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 2,
  p: 2,
};

const statBlockSx = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' };

const detailRowSx = { display: 'flex', gap: 3, mt: 2 };

const detailCardSx = {
  flex: 1,
  background: (theme: { palette: { background: { default: string; dark: string } } }) =>
    `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.dark})`,
  borderRadius: '20px',
  border: '1px solid',
  borderColor: 'divider',
};

const detailHeaderSx = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  mb: 2,
};

const detailTitleRowSx = { display: 'flex', alignItems: 'center', gap: 1.5 };

const detailIconSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 36,
  height: 36,
  borderRadius: '6px',
  flexShrink: 0,
};

const detailCountRowSx = { display: 'flex', alignItems: 'center', gap: 0.5 };

const breakdownSx = { display: 'flex', flexDirection: 'column', gap: 0.5 };

const breakdownItemSx = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const detailFooterSx = { display: 'flex', alignItems: 'center', gap: 1, mt: 1.5 };

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

/**
 * A stat group is either a single stat or multiple stats shown together
 * in one bordered container, separated by vertical dividers.
 * e.g. `[340]` is standalone, `[177, 22]` is a grouped pair.
 */
export type StatGroup = OverviewStat | OverviewStat[];

export type IncidentsSummaryProps = {
  /** Section title, e.g. "INCIDENTS SUMMARY" */
  sectionTitle?: string;
  /** Badge chip next to the title, e.g. "21% Approval Rate" */
  approvalRate?: { label: string; tooltipText?: string };
  /** Top-level big stat numbers — each entry is a single stat or grouped stats */
  overviewStats: StatGroup[];
  /** Detail cards row (Total Reports, Total Investigations, Total Recommendations) */
  detailCards: DetailCard[];
};

/* ─── Sub-components ─────────────────────────────────────────────────────────── */

function StatBlock({ value, label }: OverviewStat) {
  return (
    <Box sx={statBlockSx}>
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
  iconBg = statusColors['in-progress'].surface,
  title,
  count,
  breakdown,
  rate,
  overdue,
  onClick,
}: DetailCard) {
  const header = (
    <Box sx={detailHeaderSx}>
      <Box sx={detailTitleRowSx}>
        <Box sx={{ ...detailIconSx, backgroundColor: iconBg }}>
          {icon}
        </Box>
        <Typography variant="subtitle2" fontWeight={600} color="text.secondary">
          {title}
        </Typography>
      </Box>
      <Box sx={detailCountRowSx}>
        <Typography variant="h4" fontWeight={600} color="text.primary" sx={{ lineHeight: '40px' }}>
          {count}
        </Typography>
        <IconButton aria-label={`View ${title} details`} sx={{ minWidth: 44, minHeight: 44 }}>
          <ChevronRightRounded />
        </IconButton>
      </Box>
    </Box>
  );

  const body = (
    <>
      <Box sx={breakdownSx} role="list">
        {breakdown.map((item) => (
          <Box key={item.label} sx={breakdownItemSx} role="listitem">
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
        <Box sx={detailFooterSx}>
          {rate && (
            <Chip
              size="small"
              icon={<InfoOutlinedIcon sx={{ fontSize: 16 }} />}
              label={rate.label}
              sx={{
                backgroundColor: rate.positive ? statusColors.released.surface : statusColors.rejected.surface,
                color: rate.positive ? statusColors.released.content : statusColors.rejected.content,
                fontWeight: 500,
                fontSize: 13,
                '& .MuiChip-icon': {
                  color: rate.positive ? statusColors.released.dot : statusColors.rejected.dot,
                },
              }}
            />
          )}
          {overdue && (
            <Chip
              size="small"
              icon={<WarningAmberRounded sx={{ fontSize: 16 }} />}
              label={`${overdue.count} ${overdue.label ?? 'Overdue'}`}
              sx={{
                backgroundColor: statusColors.pending.surface,
                color: statusColors.pending.content,
                fontWeight: 500,
                fontSize: 13,
                '& .MuiChip-icon': { color: statusColors.pending.dot },
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
    <Card elevation={0} sx={detailCardSx}>
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
      sx={{
        ...rootSx,
        borderRadius: '32px',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0px 2px 8px 3px rgba(63,81,181,0.04)',
        p: 2,
      }}
    >
      {/* Section header */}
      <Box sx={headerSx}>
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
              backgroundColor: statusColors.released.surface,
              color: statusColors.released.content,
              fontWeight: 500,
              fontSize: 13,
              '& .MuiChip-icon': { color: statusColors.released.dot },
            }}
          />
        )}
      </Box>

      {/* Overview stat row */}
      <Box sx={statRowSx}>
        {overviewStats.map((group, gIdx) => {
          const stats = Array.isArray(group) ? group : [group];
          return (
            <Box key={gIdx} sx={statCellSx}>
              {stats.map((stat, sIdx) => (
                <Box key={stat.label} sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                  {sIdx > 0 && (
                    <Divider orientation="vertical" flexItem />
                  )}
                  <StatBlock {...stat} />
                </Box>
              ))}
            </Box>
          );
        })}
      </Box>

      {/* Detail cards */}
      <Box sx={detailRowSx}>
        {detailCards.map((card) => (
          <DetailCardComponent key={card.title} {...card} />
        ))}
      </Box>
    </Card>
  );
}

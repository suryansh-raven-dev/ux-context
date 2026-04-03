import type { ReactNode } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRightRounded';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import './SummaryCard.css';

export type SummaryCardProps = {
  icon: ReactNode;
  title: string;
  stats: { value: number; label: string; color?: string }[];
  closureRate: { value: string; positive: boolean };
  departments: { count: number; top: string };
  trend: { value: string; positive: boolean };
  onClick?: () => void;
};

/**
 * Dashboard-style summary with stats, closure rate, and department/trend footer.
 */
export function SummaryCard({
  icon,
  title,
  stats,
  closureRate,
  departments,
  trend,
  onClick,
}: SummaryCardProps) {
  const content = (
    <>
      <div className="raven-summary-card__header">
        <div className="raven-summary-card__header-main">
          <span className="raven-summary-card__icon" aria-hidden>
            {icon}
          </span>
          <Typography
            component="h2"
            variant="subtitle2"
            fontWeight={600}
            className="raven-summary-card__title"
            color="text.primary"
          >
            {title}
          </Typography>
        </div>
        {onClick ? (
          <IconButton
            size="small"
            aria-label={`Open ${title}`}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            <ChevronRightIcon fontSize="small" aria-hidden />
          </IconButton>
        ) : (
          <Box
            component="span"
            aria-hidden
            sx={{ display: 'inline-flex', alignItems: 'center', color: 'action.disabled' }}
          >
            <ChevronRightIcon fontSize="small" />
          </Box>
        )}
      </div>

      <div className="raven-summary-card__stats" role="list">
        {stats.map((s) => (
          <div key={s.label} className="raven-summary-card__stat" role="listitem">
            <div className="raven-summary-card__stat-row">
              <span
                className="raven-summary-card__stat-dot"
                style={{ backgroundColor: s.color ?? 'rgba(0,0,0,0.38)' }}
                aria-hidden
              />
              <Typography variant="h4" component="span" color="text.primary">
                {s.value}
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary" component="span">
              {s.label}
            </Typography>
          </div>
        ))}
      </div>

      <div className="raven-summary-card__closure">
        <Typography variant="body2" component="span" color="text.secondary">
          Closure rate:{' '}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          fontWeight={600}
          color={closureRate.positive ? 'success.dark' : 'error.dark'}
        >
          {closureRate.value}
        </Typography>
      </div>

      <div className="raven-summary-card__footer">
        <Typography variant="body2" color="text.secondary" component="p">
          Across {departments.count} departments — top:{' '}
          <Typography component="span" variant="body2" color="text.primary" fontWeight={600}>
            {departments.top}
          </Typography>
        </Typography>
        <Typography
          variant="body2"
          component="span"
          fontWeight={600}
          color={trend.positive ? 'success.dark' : 'error.dark'}
        >
          {trend.value}
        </Typography>
      </div>
    </>
  );

  return (
    <Card elevation={0} className="raven-summary-card" sx={{ borderRadius: '8px' }}>
      {onClick ? (
        <CardActionArea
          onClick={onClick}
          sx={{ alignItems: 'stretch', flexDirection: 'column', width: '100%' }}
        >
          <Box component="div" width="100%">
            {content}
          </Box>
        </CardActionArea>
      ) : (
        <Box>{content}</Box>
      )}
    </Card>
  );
}

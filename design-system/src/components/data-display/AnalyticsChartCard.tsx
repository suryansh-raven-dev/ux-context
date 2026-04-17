import type { ReactNode } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import './AnalyticsChartCard.css';

export type AnalyticsChartCardProps = {
  /** Card title, e.g. "Incident Trend" */
  title: string;
  /** Subtitle below the title, e.g. "Reported vs. Closed" */
  subtitle?: string;
  /** Chart content (Recharts, image placeholder, or any ReactNode) */
  children: ReactNode;
  /** Fixed card height (default: 372px, matching Figma) */
  height?: number;
  /** Optional action element in the header (e.g. a date range selector) */
  headerAction?: ReactNode;
};

/**
 * **AnalyticsChartCard** — Container card for embedding analytics charts.
 * Used across the Analysis Dashboard for Incident Trend, Resolution Rate,
 * Incident Type Comparison, Direct/Root Cause Analysis.
 *
 * ### MUI v6 components used
 * - `Card` — elevation=0, outlined with purple/lighten-5 border, rounded-20px
 * - `Typography` — h6 for title, caption for subtitle
 *
 * ### Design spec (from Figma)
 * - Border: `1px solid #F3E5F5` (purple/lighten-5)
 * - Border-radius: `20px`
 * - Header: 65px height, bottom border divider
 * - Chart area: `padding: 24px`, white background
 *
 * @see https://v6.mui.com/material-ui/react-card/
 */
export function AnalyticsChartCard({
  title,
  subtitle,
  children,
  height,
  headerAction,
}: AnalyticsChartCardProps) {
  return (
    <Card
      elevation={0}
      className="analytics-chart-card"
      sx={{
        borderRadius: '20px',
        border: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
        height: height ?? 'auto',
      }}
    >
      <Box className="analytics-chart-card__header">
        <Box>
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ lineHeight: '32px', color: 'text.primary' }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="caption" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
        {headerAction && (
          <Box className="analytics-chart-card__header-action">
            {headerAction}
          </Box>
        )}
      </Box>
      <Box className="analytics-chart-card__body">
        {children}
      </Box>
    </Card>
  );
}

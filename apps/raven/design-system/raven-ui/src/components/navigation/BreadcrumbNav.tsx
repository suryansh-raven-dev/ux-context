import ChevronLeft from '@mui/icons-material/ChevronLeftRounded';
import ChevronRight from '@mui/icons-material/ChevronRightRounded';
import { Box, Chip, IconButton, Stack, Typography } from '@mui/material';

import './BreadcrumbNav.css';

export type BreadcrumbNavProps = {
  parentLabel: string;
  currentId: string;
  status: string;
  onBack: () => void;
};

const IN_PROGRESS = 'In Progress';

function isInProgressStatus(status: string) {
  return status.trim().toLowerCase() === IN_PROGRESS.toLowerCase();
}

/**
 * Compact breadcrumb with back affordance and status chip.
 */
export function BreadcrumbNav({ parentLabel, currentId, status, onBack }: BreadcrumbNavProps) {
  const inProgress = isInProgressStatus(status);

  return (
    <Box
      component="nav"
      className="raven-breadcrumb"
      aria-label="Breadcrumb"
    >
      <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap" useFlexGap>
        <IconButton
          type="button"
          size="small"
          aria-label={`Back to ${parentLabel}`}
          onClick={onBack}
          className="raven-breadcrumb__back"
        >
          <ChevronLeft fontSize="small" aria-hidden />
        </IconButton>

        <Typography variant="body2" color="text.secondary" component="span">
          {parentLabel}
        </Typography>

        <ChevronRight
          className="raven-breadcrumb__separator"
          fontSize="small"
          aria-hidden
        />

        <Typography variant="body1" fontWeight={600} component="span">
          {currentId}
        </Typography>

        <Chip
          size="small"
          className={
            inProgress
              ? 'raven-breadcrumb__status raven-breadcrumb__status--progress'
              : 'raven-breadcrumb__status raven-breadcrumb__status--neutral'
          }
          label={
            <Stack direction="row" alignItems="center" spacing={0.75} component="span">
              <Box
                component="span"
                className={
                  inProgress
                    ? 'raven-breadcrumb__status-dot raven-breadcrumb__status-dot--blue'
                    : 'raven-breadcrumb__status-dot raven-breadcrumb__status-dot--grey'
                }
                aria-hidden
              />
              <span>{status}</span>
            </Stack>
          }
        />
      </Stack>
    </Box>
  );
}

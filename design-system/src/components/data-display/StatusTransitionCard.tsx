import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import './StatusTransitionCard.css';

export type StatusTransitionCardProps = {
  fromStatus: string;
  toStatus: string;
};

/**
 * Inline summary of a status change with outlined chips.
 */
export function StatusTransitionCard({ fromStatus, toStatus }: StatusTransitionCardProps) {
  return (
    <Box
      className="raven-status-transition"
      component="div"
      role="status"
      aria-live="polite"
      aria-label={`Status updated from ${fromStatus} to ${toStatus}`}
    >
      <Typography variant="body2" component="p" className="raven-status-transition__label">
        Status updated from
      </Typography>
      <Chip label={fromStatus} size="small" variant="outlined" />
      <Typography variant="body2" component="span" color="text.primary">
        to
      </Typography>
      <Chip label={toStatus} size="small" variant="outlined" />
    </Box>
  );
}

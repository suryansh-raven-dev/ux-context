import AddIcon from '@mui/icons-material/AddRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardRounded';
import EditIcon from '@mui/icons-material/EditRounded';
import RemoveIcon from '@mui/icons-material/RemoveRounded';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './DiffCard.css';

export type DiffCardProps = {
  type: 'updates' | 'added' | 'removed';
  changes: { field: string; oldValue?: string; newValue?: string }[];
};

const CONFIG = {
  updates: {
    label: 'Updates',
    className: 'raven-diff-card--updates',
    labelClass: 'raven-diff-card__label-row--updates',
    Icon: EditIcon,
  },
  added: {
    label: 'Added',
    className: 'raven-diff-card--added',
    labelClass: 'raven-diff-card__label-row--added',
    Icon: AddIcon,
  },
  removed: {
    label: 'Removed',
    className: 'raven-diff-card--removed',
    labelClass: 'raven-diff-card__label-row--removed',
    Icon: RemoveIcon,
  },
} as const;

/**
 * Highlights field-level changes for audit or review UIs.
 */
export function DiffCard({ type, changes }: DiffCardProps) {
  const cfg = CONFIG[type];
  const Icon = cfg.Icon;

  return (
    <Box
      className={`raven-diff-card ${cfg.className}`}
      component="section"
      aria-label={`${cfg.label} changes`}
    >
      <div className={`raven-diff-card__label-row ${cfg.labelClass}`}>
        <Icon fontSize="small" aria-hidden />
        <Typography variant="overline" component="h2" sx={{ lineHeight: 1.2 }}>
          {cfg.label}
        </Typography>
      </div>

      {changes.map((ch) => (
        <div key={ch.field} className="raven-diff-card__field">
          <Typography variant="caption" color="text.secondary" className="raven-diff-card__field-name">
            {ch.field}
          </Typography>
          <div className="raven-diff-card__values">
            {type === 'removed' && ch.oldValue != null ? (
              <Typography variant="body2" component="span" className="raven-diff-card__old-value">
                {ch.oldValue}
              </Typography>
            ) : null}
            {type === 'added' && ch.newValue != null ? (
              <Typography variant="body2" component="span" color="text.primary">
                {ch.newValue}
              </Typography>
            ) : null}
            {type === 'updates' && ch.oldValue != null && ch.newValue != null ? (
              <>
                <Typography variant="body2" component="span" className="raven-diff-card__old-value">
                  {ch.oldValue}
                </Typography>
                <ArrowForwardIcon className="raven-diff-card__arrow" fontSize="small" aria-hidden />
                <Typography variant="body2" component="span" color="text.primary">
                  {ch.newValue}
                </Typography>
              </>
            ) : null}
            {type === 'updates' && (ch.oldValue == null || ch.newValue == null) ? (
              <Typography variant="body2" color="text.secondary">
                {ch.newValue ?? ch.oldValue ?? '—'}
              </Typography>
            ) : null}
          </div>
        </div>
      ))}
    </Box>
  );
}

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckRounded from '@mui/icons-material/CheckRounded';

export type LifecycleStep = {
  id: string;
  label: string;
};

export type LifecycleIndicatorProps = {
  steps: LifecycleStep[];
  /** id of the currently-active step. Prior steps render as complete. */
  currentId: string;
  /** Optional label announced to screen readers, e.g. "Incident lifecycle". */
  ariaLabel?: string;
};

type Phase = 'complete' | 'current' | 'upcoming';

export function LifecycleIndicator({ steps, currentId, ariaLabel = 'Lifecycle' }: LifecycleIndicatorProps) {
  const activeIdx = steps.findIndex((s) => s.id === currentId);
  return (
    <Box
      role="group"
      aria-label={ariaLabel}
      sx={{ display: 'flex', alignItems: 'center', gap: 0, width: '100%' }}
    >
      {steps.map((step, idx) => {
        const phase: Phase =
          idx < activeIdx ? 'complete' : idx === activeIdx ? 'current' : 'upcoming';
        return (
          <Box key={step.id} sx={{ display: 'flex', alignItems: 'center', flex: idx === steps.length - 1 ? '0 0 auto' : 1 }}>
            <PillSegment phase={phase} label={step.label} isCurrent={phase === 'current'} />
            {idx < steps.length - 1 && (
              <Box
                aria-hidden
                sx={{
                  flex: 1,
                  height: 2,
                  mx: 0.5,
                  bgcolor: phase === 'complete' ? 'success.main' : 'divider',
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}

function PillSegment({ phase, label, isCurrent }: { phase: Phase; label: string; isCurrent: boolean }) {
  const styles = {
    complete: { bg: 'success.main', fg: 'success.contrastText', border: 'success.main' },
    current: { bg: 'primary.main', fg: 'primary.contrastText', border: 'primary.main' },
    upcoming: { bg: 'background.paper', fg: 'text.secondary', border: 'divider' },
  }[phase];

  return (
    <Box
      aria-current={isCurrent ? 'step' : undefined}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        px: 1.5,
        py: 0.5,
        borderRadius: '50px',
        bgcolor: styles.bg,
        color: styles.fg,
        border: '1px solid',
        borderColor: styles.border,
        minHeight: 28,
      }}
    >
      {phase === 'complete' && <CheckRounded fontSize="small" aria-hidden />}
      <Typography variant="caption" sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>
        {label}
      </Typography>
    </Box>
  );
}

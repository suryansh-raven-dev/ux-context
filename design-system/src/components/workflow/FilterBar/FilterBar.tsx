import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CloseRounded from '@mui/icons-material/CloseRounded';
import type { ReactNode } from 'react';

export type FilterChip = {
  id: string;
  label: string;
  /** Value shown after the label, e.g. "Status: Open". */
  value?: string;
};

export type FilterBarProps = {
  /** Active filter chips. Each is removable via onRemove. */
  filters: FilterChip[];
  onRemove?: (id: string) => void;
  onClearAll?: () => void;
  /** Slot for filter trigger buttons (e.g. dropdowns that open filter menus). */
  trigger?: ReactNode;
  /** Slot for saved-view selector on the right. */
  savedViews?: ReactNode;
};

export function FilterBar({ filters, onRemove, onClearAll, trigger, savedViews }: FilterBarProps) {
  return (
    <Box
      role="region"
      aria-label="Filters"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 1,
        p: 1,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      {trigger}
      {filters.length > 0 && (
        <Stack direction="row" spacing={0.75} alignItems="center" sx={{ flexWrap: 'wrap', rowGap: 0.75 }}>
          {filters.map((f) => (
            <Chip
              key={f.id}
              size="small"
              label={
                f.value ? (
                  <Box component="span">
                    <Box component="span" sx={{ color: 'text.secondary', mr: 0.5 }}>
                      {f.label}:
                    </Box>
                    <Box component="span" sx={{ fontWeight: 600 }}>
                      {f.value}
                    </Box>
                  </Box>
                ) : (
                  f.label
                )
              }
              onDelete={onRemove ? () => onRemove(f.id) : undefined}
              deleteIcon={<CloseRounded />}
              sx={{ borderRadius: '50px' }}
            />
          ))}
        </Stack>
      )}
      {filters.length === 0 && !trigger && (
        <Typography variant="body2" color="text.secondary" sx={{ px: 1 }}>
          No filters applied.
        </Typography>
      )}
      <Box sx={{ flex: 1 }} />
      {filters.length > 0 && onClearAll && (
        <Button size="small" onClick={onClearAll} sx={{ textTransform: 'none' }}>
          Clear all
        </Button>
      )}
      {savedViews}
    </Box>
  );
}

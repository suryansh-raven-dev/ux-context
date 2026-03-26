import { useCallback, type KeyboardEvent } from 'react';

import { Box, Typography } from '@mui/material';

import './StatusFilterBar.css';

export type StatusFilterBarProps = {
  filters: { label: string; count: number }[];
  activeIndex: number;
  onChange: (index: number) => void;
};

/**
 * Pill-style status filters with radiogroup semantics.
 */
export function StatusFilterBar({ filters, activeIndex, onChange }: StatusFilterBarProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        const next = Math.min(index + 1, filters.length - 1);
        onChange(next);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        const prev = Math.max(index - 1, 0);
        onChange(prev);
      } else if (event.key === 'Home') {
        event.preventDefault();
        onChange(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        onChange(filters.length - 1);
      }
    },
    [filters.length, onChange]
  );

  return (
    <Box
      className="raven-status-filter"
      role="radiogroup"
      aria-label="Filter by status"
    >
      {filters.map((filter, index) => {
        const isActive = activeIndex === index;
        const chipClass = [
          'raven-status-filter__chip',
          isActive ? 'raven-status-filter__chip--active' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={`${filter.label}-${index}`}
            type="button"
            role="radio"
            aria-checked={isActive}
            tabIndex={isActive ? 0 : -1}
            className={chipClass}
            onClick={() => onChange(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <Typography
              component="span"
              variant="body2"
              className="raven-status-filter__chip-label"
              sx={{ color: 'inherit' }}
            >
              {filter.label}{' '}
              <span className="raven-status-filter__chip-count">({filter.count})</span>
            </Typography>
          </button>
        );
      })}
    </Box>
  );
}

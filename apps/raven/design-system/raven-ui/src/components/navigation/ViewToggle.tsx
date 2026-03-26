import { useCallback, type KeyboardEvent, type ReactNode } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import './ViewToggle.css';

export type ViewToggleProps = {
  options: { label: string; icon?: ReactNode; value: string }[];
  value: string;
  onChange: (value: string) => void;
};

/**
 * Segmented control for switching list/card (or similar) views.
 */
export function ViewToggle({ options, value, onChange }: ViewToggleProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        const next = Math.min(index + 1, options.length - 1);
        onChange(options[next].value);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        const prev = Math.max(index - 1, 0);
        onChange(options[prev].value);
      } else if (event.key === 'Home') {
        event.preventDefault();
        onChange(options[0].value);
      } else if (event.key === 'End') {
        event.preventDefault();
        onChange(options[options.length - 1].value);
      }
    },
    [onChange, options]
  );

  if (options.length === 0) {
    return null;
  }

  return (
    <Box className="raven-view-toggle" role="radiogroup" aria-label="View mode">
      {options.map((option, index) => {
        const isActive = value === option.value;
        const optionClass = [
          'raven-view-toggle__option',
          isActive ? 'raven-view-toggle__option--active' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            tabIndex={isActive ? 0 : -1}
            className={optionClass}
            onClick={() => onChange(option.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <Stack direction="row" alignItems="center" spacing={0.75} component="span">
              {option.icon ? (
                <span className="raven-view-toggle__icon" aria-hidden>
                  {option.icon}
                </span>
              ) : null}
              <Typography
                component="span"
                variant="body2"
                className="raven-view-toggle__label"
                sx={{ color: 'inherit' }}
              >
                {option.label}
              </Typography>
            </Stack>
          </button>
        );
      })}
    </Box>
  );
}

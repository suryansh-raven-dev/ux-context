import React from 'react';

import Chip, { ChipProps } from '@mui/material/Chip';

import './RavenChip.css';

export type RavenChipVariant =
  | 'default'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'primary';

export interface RavenChipProps extends Omit<ChipProps, 'variant'> {
  colorVariant?: RavenChipVariant;
  chipVariant?: 'filled' | 'outlined';
}

// Raven Chip usage rule (§7.5 in CLAUDE.md):
//  - `colorVariant="default"` → text-only grey chip. MUST NOT carry icon / avatar / onDelete.
//  - Any leading icon, leading dot, trailing close, or info indicator → use a semantic
//    `colorVariant` (success/error/warning/info/primary) or `ReportStatusChip` for lifecycle states.
function warnIfMisused(
  colorVariant: RavenChipVariant,
  icon: unknown,
  avatar: unknown,
  onDelete: unknown,
) {
  if (process.env.NODE_ENV === 'production' || colorVariant !== 'default') return;
  if (icon || avatar || onDelete) {
    const slots = [icon && 'icon', avatar && 'avatar', onDelete && 'onDelete'].filter(Boolean).join(', ');

    console.warn(
      `[RavenChip] The grey default chip MUST be text-only. Detected: ${slots}. ` +
        'Switch to a semantic colorVariant (success/error/warning/info/primary) or use ReportStatusChip.',
    );
  }
}

export const RavenChip: React.FC<RavenChipProps> = ({
  colorVariant = 'default',
  chipVariant = 'filled',
  className,
  icon,
  avatar,
  onDelete,
  ...props
}) => {
  warnIfMisused(colorVariant, icon, avatar, onDelete);
  return (
    <Chip
      className={`raven-chip raven-chip--${colorVariant} ${className || ''}`.trim()}
      variant={chipVariant}
      icon={icon}
      avatar={avatar}
      onDelete={onDelete}
      {...props}
    />
  );
};

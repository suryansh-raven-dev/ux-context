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

export const RavenChip: React.FC<RavenChipProps> = ({
  colorVariant = 'default',
  chipVariant = 'filled',
  className,
  ...props
}) => (
  <Chip
    className={`raven-chip raven-chip--${colorVariant} ${className || ''}`.trim()}
    variant={chipVariant}
    {...props}
  />
);

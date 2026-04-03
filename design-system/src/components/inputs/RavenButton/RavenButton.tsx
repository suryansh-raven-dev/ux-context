import React, { forwardRef } from 'react';

import Button, { type ButtonProps } from '@mui/material/Button';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

import './RavenButton.css';

export type RavenButtonVariant = 'text' | 'contained' | 'outlined';
export type RavenButtonSize = 'small' | 'medium' | 'large';
export type RavenButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'inherit';

export interface RavenButtonProps
  extends Omit<ButtonProps, 'variant' | 'size' | 'color'> {
  variant?: RavenButtonVariant;
  size?: RavenButtonSize;
  color?: RavenButtonColor;
}

/**
 * Raven-styled wrapper around MUI v6 Button.
 *
 * Applies the Near-Miss design tokens: pill radius (50px), Source Sans 3
 * typography, purple primary palette, and uppercase labels by default.
 * All standard MUI Button props (loading, startIcon, endIcon, fullWidth,
 * disableElevation, href, component) are forwarded unchanged.
 */
export const RavenButton = forwardRef<HTMLButtonElement, RavenButtonProps>(
  function RavenButton({ className, ...props }, ref) {
    const classes = ['raven-button', className].filter(Boolean).join(' ');
    return <Button ref={ref} className={classes} {...props} />;
  },
);

export type RavenIconButtonSize = 'small' | 'medium' | 'large';
export type RavenIconButtonColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'inherit';

export interface RavenIconButtonProps
  extends Omit<IconButtonProps, 'size' | 'color'> {
  size?: RavenIconButtonSize;
  color?: RavenIconButtonColor;
  loading?: boolean;
}

/**
 * Raven-styled wrapper around MUI v6 IconButton.
 *
 * Provides Raven defaults (purple primary, brand hover tint) and adds a
 * `loading` convenience prop that replaces the icon with a CircularProgress.
 */
export const RavenIconButton = forwardRef<
  HTMLButtonElement,
  RavenIconButtonProps
>(function RavenIconButton(
  { className, loading = false, disabled, children, ...props },
  ref,
) {
  const classes = ['raven-icon-button', className].filter(Boolean).join(' ');

  return (
    <IconButton
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <CircularProgress size={20} color="inherit" aria-label="Loading" />
      ) : (
        children
      )}
    </IconButton>
  );
});

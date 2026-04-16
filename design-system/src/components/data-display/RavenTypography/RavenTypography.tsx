import { forwardRef } from 'react';

import Typography, { type TypographyProps } from '@mui/material/Typography';

import './RavenTypography.css';

export type RavenTypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body1Bold'
  | 'body2'
  | 'button'
  | 'caption'
  | 'caption2'
  | 'overline'
  | 'label'
  | 'tableHeader'
  | 'inherit';

export type RavenTypographyColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'textPrimary'
  | 'textSecondary'
  | 'textDisabled';

export type RavenTypographyAlign =
  | 'center'
  | 'inherit'
  | 'justify'
  | 'left'
  | 'right';

export interface RavenTypographyProps
  extends Omit<TypographyProps, 'variant' | 'color' | 'align'> {
  variant?: RavenTypographyVariant;
  color?: RavenTypographyColor | string;
  align?: RavenTypographyAlign;
}

/**
 * Raven-styled wrapper around MUI v6 Typography.
 *
 * Applies the Near-Miss design tokens: Source Sans 3 font family, custom
 * Raven type scale (body1Bold, tableHeader), and purple brand palette.
 * Supports all standard MUI Typography props (variant, color, align,
 * gutterBottom, noWrap, paragraph, component, sx) forwarded unchanged.
 *
 * The variant-to-element mapping matches MUI defaults, with custom
 * variants (body1Bold → span, tableHeader → span) added for
 * Near-Miss product-specific use cases.
 */
export const RavenTypography = forwardRef<HTMLElement, RavenTypographyProps>(
  function RavenTypography({ className, variant = 'body1', ...props }, ref) {
    const classes = ['raven-typography', className].filter(Boolean).join(' ');

    return (
      <Typography
        ref={ref}
        className={classes}
        variant={variant}
        {...props}
      />
    );
  },
);

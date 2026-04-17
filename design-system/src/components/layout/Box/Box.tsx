import { forwardRef } from 'react';
import type { ElementType, ReactNode } from 'react';

import MuiBox from '@mui/material/Box';
import type { BoxProps as MuiBoxProps } from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

export type BoxVariant =
  | 'surface'
  | 'card'
  | 'form-card'
  | 'dialog'
  | 'page';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type FlexJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface BoxProps extends Omit<MuiBoxProps, 'component'> {
  /** Surface preset that applies Raven radii, padding, background, and border. */
  variant?: BoxVariant;
  /** Render as a different semantic HTML element (section, nav, header, ul, etc.). */
  component?: ElementType;
  /** Shortcut — turns the box into a flex container. */
  direction?: FlexDirection;
  /** Shortcut — flex align-items, mapped to MUI tokens (start → flex-start). */
  align?: FlexAlign;
  /** Shortcut — flex justify-content, mapped to MUI tokens. */
  justify?: FlexJustify;
  /** Shortcut for sx gap (theme spacing scale, e.g. 2 = 16px). */
  gap?: number | string;
  /** Shortcut for sx padding on the theme spacing scale. */
  padding?: number | string;
  /** Remove the preset's default padding. */
  disablePadding?: boolean;
  children?: ReactNode;
}

const alignMap: Record<FlexAlign, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

const justifyMap: Record<FlexJustify, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly',
};

function variantStyles(
  variant: BoxVariant,
  disablePadding: boolean,
): SxProps<Theme> {
  switch (variant) {
    case 'card':
      return {
        backgroundColor: 'background.default',
        borderRadius: '24px',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.04), 0px 1px 3px rgba(16, 24, 40, 0.06)',
        p: disablePadding ? 0 : 3,
      };
    case 'form-card':
      return {
        backgroundColor: 'background.default',
        borderRadius: '20px',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.04)',
        p: disablePadding ? 0 : 3,
      };
    case 'dialog':
      return {
        backgroundColor: 'background.default',
        borderRadius: '16px',
        boxShadow: '0px 12px 32px rgba(16, 24, 40, 0.12)',
        p: disablePadding ? 0 : 3,
      };
    case 'page':
      return {
        backgroundColor: (theme) =>
          (theme.palette.background as { dark?: string }).dark ?? theme.palette.background.default,
        minHeight: '100%',
        p: disablePadding ? 0 : { xs: 2, md: 3 },
      };
    case 'surface':
    default:
      return disablePadding ? {} : {};
  }
}

/**
 * Box — the generic layout primitive for Raven apps.
 *
 * Thin wrapper over MUI Box that applies Raven surface tokens (radius, padding,
 * background, border) via a `variant` prop, plus flex shortcuts (`direction`,
 * `gap`, `align`, `justify`). Falls back to plain MUI Box when `variant="surface"`.
 */
export const Box = forwardRef<HTMLElement, BoxProps>(function Box(
  {
    variant = 'surface',
    component,
    direction,
    align,
    justify,
    gap,
    padding,
    disablePadding = false,
    sx,
    children,
    ...rest
  },
  ref,
) {
  const flexSx: SxProps<Theme> | undefined =
    direction || align || justify || gap !== undefined
      ? {
          display: 'flex',
          ...(direction ? { flexDirection: direction } : {}),
          ...(align ? { alignItems: alignMap[align] } : {}),
          ...(justify ? { justifyContent: justifyMap[justify] } : {}),
          ...(gap !== undefined ? { gap } : {}),
        }
      : undefined;

  const overrideSx: SxProps<Theme> | undefined =
    padding !== undefined ? { p: padding } : undefined;

  const merged: SxProps<Theme>[] = [
    variantStyles(variant, disablePadding),
    ...(flexSx ? [flexSx] : []),
    ...(overrideSx ? [overrideSx] : []),
    ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
  ];

  return (
    <MuiBox ref={ref} component={component as MuiBoxProps['component']} sx={merged} {...rest}>
      {children}
    </MuiBox>
  );
});

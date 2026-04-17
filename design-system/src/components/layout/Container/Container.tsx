import { forwardRef } from 'react';
import type { ElementType, ReactNode } from 'react';

import MuiContainer from '@mui/material/Container';
import type { ContainerProps as MuiContainerProps } from '@mui/material/Container';

export type ContainerMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

export interface ContainerProps extends Omit<MuiContainerProps, 'component' | 'maxWidth'> {
  /** Breakpoint cap for the inner rail. `false` removes the cap. Default: 'md'. */
  maxWidth?: ContainerMaxWidth;
  /** Snap to the current breakpoint min-width instead of the next one up. */
  fixed?: boolean;
  /** Remove responsive horizontal padding (16/24px). */
  disableGutters?: boolean;
  /** Render as a different semantic element (main, section, article). */
  component?: ElementType;
  children?: ReactNode;
}

/**
 * Container — centered content rail with responsive gutters.
 *
 * Thin wrapper over MUI Container that standardizes Raven page widths. Use for
 * any page that should not stretch edge-to-edge inside the AppShell — settings
 * flows, form wizards, marketing pages, analytics dashboards.
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { maxWidth = 'md', fixed = false, disableGutters = false, component, sx, children, ...rest },
  ref,
) {
  return (
    <MuiContainer
      ref={ref}
      maxWidth={maxWidth}
      fixed={fixed}
      disableGutters={disableGutters}
      component={component as MuiContainerProps['component']}
      sx={sx}
      {...rest}
    >
      {children}
    </MuiContainer>
  );
});

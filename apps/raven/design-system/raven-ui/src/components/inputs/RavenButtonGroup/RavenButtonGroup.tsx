import React, { forwardRef } from 'react';
import ButtonGroup, { type ButtonGroupProps } from '@mui/material/ButtonGroup';
import { type ButtonProps } from '@mui/material/Button';

import { RavenButton, type RavenButtonProps } from '../RavenButton/RavenButton';
import './RavenButtonGroup.css';

export interface RavenButtonGroupButton
  extends Omit<RavenButtonProps, 'children'> {
  key?: React.Key;
  label: React.ReactNode;
}

export interface RavenButtonGroupProps extends Omit<ButtonGroupProps, 'children'> {
  buttons?: RavenButtonGroupButton[];
  children?: React.ReactNode;
}

export const RavenButtonGroup = forwardRef<HTMLDivElement, RavenButtonGroupProps>(
  function RavenButtonGroup(
    { buttons, children, className, style, ...rest },
    ref,
  ) {
    const classes = ['raven-button-group', className].filter(Boolean).join(' ');

    return (
      <ButtonGroup
        ref={ref}
        className={classes}
        style={
          {
            '--raven-button-group-gap': '8px',
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      >
        {children ??
          buttons?.map(({ key, label, ...buttonProps }, index) => (
            <RavenButton
              key={key ?? `raven-button-group-${index}`}
              {...buttonProps}
            >
              {label}
            </RavenButton>
          ))}
      </ButtonGroup>
    );
  },
);

export { ButtonGroup, RavenButton as Button };
export type { ButtonGroupProps, ButtonProps };

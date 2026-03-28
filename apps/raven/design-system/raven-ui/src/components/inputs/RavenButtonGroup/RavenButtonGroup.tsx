import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup';

export interface RavenButtonGroupProps extends Omit<ButtonGroupProps, 'children'> {
  buttons: Array<{ label: string; onClick?: () => void; disabled?: boolean }>;
}

export const RavenButtonGroup: React.FC<RavenButtonGroupProps> = ({
  buttons,
  ...rest
}) => (
  <ButtonGroup {...rest}>
    {buttons.map((btn, i) => (
      <Button key={i} onClick={btn.onClick} disabled={btn.disabled}>
        {btn.label}
      </Button>
    ))}
  </ButtonGroup>
);

export { ButtonGroup, Button };
export type { ButtonGroupProps, ButtonProps };

import React from 'react';
import ToggleButton, { ToggleButtonProps } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';

export interface RavenToggleButtonProps extends ToggleButtonProps {}
export interface RavenToggleButtonGroupProps extends ToggleButtonGroupProps {}

export const RavenToggleButton: React.FC<RavenToggleButtonProps> = (props) => (
  <ToggleButton {...props} />
);

export const RavenToggleButtonGroup: React.FC<RavenToggleButtonGroupProps> = (
  props,
) => <ToggleButtonGroup {...props} />;

export { ToggleButton, ToggleButtonGroup };
export type { ToggleButtonProps, ToggleButtonGroupProps };

import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import './RavenSwitch.css';

export interface RavenSwitchProps {
  label: string;
  checked?: boolean;
  onChange?: SwitchProps['onChange'];
  disabled?: boolean;
}

export const RavenSwitch: React.FC<RavenSwitchProps> = ({
  label,
  checked,
  onChange,
  disabled,
}) => (
  <FormControlLabel
    className="raven-switch"
    control={
      <Switch checked={checked} onChange={onChange} disabled={disabled} />
    }
    label={label}
  />
);

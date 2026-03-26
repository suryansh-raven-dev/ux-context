import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import './RavenCheckbox.css';

export interface RavenCheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: CheckboxProps['onChange'];
  disabled?: boolean;
  indeterminate?: boolean;
}

export const RavenCheckbox: React.FC<RavenCheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
}) => (
  <FormControlLabel
    className="raven-checkbox"
    control={
      <Checkbox
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        indeterminate={indeterminate}
      />
    }
    label={label}
  />
);

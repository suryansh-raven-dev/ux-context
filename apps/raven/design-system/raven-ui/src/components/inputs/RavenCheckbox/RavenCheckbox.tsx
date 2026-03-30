import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import './RavenCheckbox.css';

export interface RavenCheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: CheckboxProps['onChange'];
  disabled?: boolean;
  indeterminate?: boolean;
  className?: string;
}

export const RavenCheckbox: React.FC<RavenCheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
  className,
}) => (
  <FormControlLabel
    className={[
      'raven-checkbox',
      checked ? 'raven-checkbox--checked' : 'raven-checkbox--unchecked',
      disabled ? 'raven-checkbox--disabled' : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')}
    control={
      <Checkbox
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        indeterminate={indeterminate}
        icon={<CheckBoxOutlineBlankRoundedIcon />}
        checkedIcon={<CheckBoxRoundedIcon />}
        indeterminateIcon={<IndeterminateCheckBoxRoundedIcon />}
      />
    }
    label={label}
  />
);

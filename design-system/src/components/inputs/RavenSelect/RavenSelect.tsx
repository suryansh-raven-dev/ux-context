import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './RavenSelect.css';

export interface RavenSelectOption {
  value: string;
  label: string;
}

export interface RavenSelectProps extends Omit<TextFieldProps, 'select'> {
  options: RavenSelectOption[];
}

export const RavenSelect: React.FC<RavenSelectProps> = ({ options, ...props }) => (
  <TextField
    select
    className={`raven-select ${props.className || ''}`}
    {...props}
  >
    {options.map((opt) => (
      <MenuItem key={opt.value} value={opt.value}>
        {opt.label}
      </MenuItem>
    ))}
  </TextField>
);

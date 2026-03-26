import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import './RavenRadioGroup.css';

export interface RavenRadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RavenRadioGroupProps {
  label?: string;
  options: RavenRadioOption[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  row?: boolean;
}

export const RavenRadioGroup: React.FC<RavenRadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  row,
}) => (
  <FormControl className="raven-radio-group">
    {label && <FormLabel>{label}</FormLabel>}
    <RadioGroup value={value} onChange={onChange} row={row}>
      {options.map((opt) => (
        <FormControlLabel
          key={opt.value}
          value={opt.value}
          control={<Radio />}
          label={opt.label}
          disabled={opt.disabled}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

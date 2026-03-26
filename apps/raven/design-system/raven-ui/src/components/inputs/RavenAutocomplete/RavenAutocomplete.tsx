import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './RavenAutocomplete.css';

export interface RavenAutocompleteProps<T = string> {
  options: T[];
  label?: string;
  placeholder?: string;
  value?: T | null;
  onChange?: (event: React.SyntheticEvent, value: T | null) => void;
  getOptionLabel?: (option: T) => string;
  disabled?: boolean;
  multiple?: boolean;
}

export function RavenAutocomplete<T = string>({
  options,
  label,
  placeholder,
  value,
  onChange,
  getOptionLabel,
  disabled,
  multiple,
}: RavenAutocompleteProps<T>) {
  return (
    <Autocomplete
      className="raven-autocomplete"
      options={options}
      value={value as any}
      onChange={onChange as any}
      getOptionLabel={getOptionLabel as any}
      disabled={disabled}
      multiple={multiple as any}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
}

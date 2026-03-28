import type { KeyboardEvent } from 'react';

import Search from '@mui/icons-material/SearchRounded';
import Event from '@mui/icons-material/EventRounded';
import { Box, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';

import './FilterControls.css';

export type FilterControlsProps = {
  departments: string[];
  selectedDepartment: string;
  onDepartmentChange: (dept: string) => void;
  dateRange: string;
  onDateRangeClick: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
};

/**
 * Filter row: optional search, department select, and date range trigger.
 */
export function FilterControls({
  departments,
  selectedDepartment,
  onDepartmentChange,
  dateRange,
  onDateRangeClick,
  searchQuery = '',
  onSearchChange,
  showSearch = false,
}: FilterControlsProps) {
  const handleDepartmentChange = (event: SelectChangeEvent<string>) => {
    onDepartmentChange(event.target.value);
  };

  const searchField = showSearch ? (
    <Box
      className="raven-filter-controls__search"
      role="search"
      aria-label="Filter by search"
    >
      <TextField
        fullWidth
        id="raven-filter-search"
        label="Search"
        placeholder="Search incidents…"
        value={searchQuery}
        onChange={(e) => onSearchChange?.(e.target.value)}
        size="small"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search fontSize="small" sx={{ color: 'text.secondary' }} aria-hidden />
            </InputAdornment>
          ),
          inputProps: {
            'aria-label': 'Search incidents',
          },
        }}
      />
    </Box>
  ) : null;

  return (
    <Box className="raven-filter-controls">
      {searchField}
      <FormControl size="small" className="raven-filter-controls__department" variant="outlined">
        <InputLabel id="raven-filter-department-label">Department</InputLabel>
        <Select<string>
          labelId="raven-filter-department-label"
          id="raven-filter-department"
          label="Department"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
        >
          {departments.map((dept) => (
            <MenuItem key={dept} value={dept}>
              {dept}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className="raven-filter-controls__date"
        id="raven-filter-date-range"
        label="Date range"
        value={dateRange}
        size="small"
        variant="outlined"
        fullWidth
        slotProps={{
          htmlInput: {
            readOnly: true,
            'aria-label': 'Date range, press to open calendar',
            onClick: onDateRangeClick,
            onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onDateRangeClick();
              }
            },
          },
        }}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <Event fontSize="small" sx={{ color: 'text.secondary' }} aria-hidden />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

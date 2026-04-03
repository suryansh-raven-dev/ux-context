import React from 'react';
import Autocomplete, {
  AutocompleteProps,
  createFilterOptions,
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
  AutocompleteRenderGroupParams,
  AutocompleteRenderGetTagProps,
} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxIcon from '@mui/icons-material/CheckBoxRounded';

import { VirtualizedAutocompleteListbox } from './VirtualizedAutocompleteListbox';

import './RavenAutocomplete.css';

export { createFilterOptions };

export type RavenAutocompleteSize = 'small' | 'medium';

export interface RavenAutocompleteProps<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> {
  options: T[];
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  value?: Multiple extends true ? T[] : T | null;
  inputValue?: string;
  onChange?: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['onChange'];
  onInputChange?: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['onInputChange'];
  getOptionLabel?: (option: T) => string;
  getOptionDisabled?: (option: T) => boolean;
  isOptionEqualToValue?: (option: T, value: T) => boolean;
  groupBy?: (option: T) => string;
  filterOptions?: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['filterOptions'];
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement> & { key: string },
    option: T,
    state: AutocompleteRenderOptionState,
  ) => React.ReactNode;
  renderGroup?: (params: AutocompleteRenderGroupParams) => React.ReactNode;
  renderTags?: (
    value: T[],
    getTagProps: AutocompleteRenderGetTagProps,
  ) => React.ReactNode;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  loadingText?: React.ReactNode;
  noOptionsText?: React.ReactNode;
  multiple?: Multiple;
  freeSolo?: FreeSolo;
  disableClearable?: DisableClearable;
  disableCloseOnSelect?: boolean;
  disablePortal?: boolean;
  clearOnBlur?: boolean;
  clearOnEscape?: boolean;
  selectOnFocus?: boolean;
  handleHomeEndKeys?: boolean;
  autoComplete?: boolean;
  autoHighlight?: boolean;
  autoSelect?: boolean;
  includeInputInList?: boolean;
  openOnFocus?: boolean;
  blurOnSelect?: boolean | 'touch' | 'mouse';
  limitTags?: number;
  size?: RavenAutocompleteSize;
  fullWidth?: boolean;
  checkboxSelection?: boolean;
  creatable?: boolean;
  creatableLabel?: string;
  id?: string;
  className?: string;
  sx?: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['sx'];
  open?: boolean;
  onOpen?: (event: React.SyntheticEvent) => void;
  onClose?: (event: React.SyntheticEvent, reason: string) => void;
  ListboxComponent?: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['ListboxComponent'];
  ListboxProps?: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['ListboxProps'];
  virtualized?: boolean;
  virtualizationThreshold?: number;
  listboxHeight?: number;
  listboxRowHeight?: number;
  overscanCount?: number;
}

const checkboxIcon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export function RavenAutocomplete<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>({
  options,
  label,
  placeholder,
  helperText,
  error,
  value,
  inputValue,
  onChange,
  onInputChange,
  getOptionLabel,
  getOptionDisabled,
  isOptionEqualToValue,
  groupBy,
  filterOptions,
  renderOption: renderOptionProp,
  renderGroup: renderGroupProp,
  renderTags,
  renderInput: renderInputProp,
  disabled,
  readOnly,
  loading,
  loadingText = 'Loading…',
  noOptionsText = 'No options',
  multiple,
  freeSolo,
  disableClearable,
  disableCloseOnSelect,
  disablePortal,
  clearOnBlur,
  clearOnEscape,
  selectOnFocus,
  handleHomeEndKeys,
  autoComplete,
  autoHighlight,
  autoSelect,
  includeInputInList,
  openOnFocus,
  blurOnSelect,
  limitTags,
  size = 'medium',
  fullWidth = true,
  checkboxSelection,
  creatable,
  creatableLabel = 'Add',
  id,
  className,
  sx,
  open,
  onOpen,
  onClose,
  ListboxComponent,
  ListboxProps,
  virtualized = false,
  virtualizationThreshold = 100,
  listboxHeight = 320,
  listboxRowHeight = 40,
  overscanCount = 6,
}: RavenAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  const sizeClass = size === 'small' ? 'raven-autocomplete--small' : '';
  const rootClassName = ['raven-autocomplete', sizeClass, className]
    .filter(Boolean)
    .join(' ');

  const defaultRenderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      {...params}
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      error={error}
      slotProps={{
        input: {
          ...params.InputProps,
          endAdornment: (
            <>
              {loading ? <CircularProgress color="inherit" size={20} /> : null}
              {params.InputProps.endAdornment}
            </>
          ),
        },
      }}
    />
  );

  const defaultRenderOptionWithCheckbox = checkboxSelection
    ? (
        props: React.HTMLAttributes<HTMLLIElement> & { key: string },
        option: T,
        { selected }: AutocompleteRenderOptionState,
      ) => {
        const { key, ...rest } = props;
        return (
          <li key={key} {...rest}>
            <Checkbox
              icon={checkboxIcon}
              checkedIcon={checkedIcon}
              checked={selected}
              className="raven-autocomplete__checkbox"
            />
            {getOptionLabel ? getOptionLabel(option) : String(option)}
          </li>
        );
      }
    : undefined;

  const defaultRenderGroup = (params: AutocompleteRenderGroupParams) => (
    <li key={params.key}>
      <Typography className="raven-autocomplete__group-header">
        {params.group}
      </Typography>
      <ul className="raven-autocomplete__group-items">{params.children}</ul>
    </li>
  );

  let resolvedFilterOptions = filterOptions;
  if (creatable && !filterOptions) {
    const filter = createFilterOptions<T>();
    resolvedFilterOptions = ((opts: T[], state: any) => {
      const filtered = filter(opts, state);
      const { inputValue: iv } = state;
      const isExisting = opts.some((option) =>
        iv === (getOptionLabel ? getOptionLabel(option) : String(option)),
      );
      if (iv !== '' && !isExisting) {
        filtered.push(`${creatableLabel} "${iv}"` as unknown as T);
      }
      return filtered;
    }) as any;
  }

  const shouldVirtualize =
    virtualized &&
    options.length >= virtualizationThreshold &&
    !groupBy &&
    !renderGroupProp;

  const resolvedListboxComponent = shouldVirtualize
    ? VirtualizedAutocompleteListbox
    : ListboxComponent;

  const resolvedListboxProps = shouldVirtualize
    ? {
        ...(ListboxProps ?? {}),
        itemSize: listboxRowHeight,
        listboxHeight,
        overscanCount,
      }
    : ListboxProps;

  return (
    <Autocomplete
      id={id}
      className={rootClassName}
      options={options}
      value={value as any}
      inputValue={inputValue}
      onChange={onChange as any}
      onInputChange={onInputChange as any}
      getOptionLabel={getOptionLabel as any}
      getOptionDisabled={getOptionDisabled as any}
      isOptionEqualToValue={isOptionEqualToValue as any}
      groupBy={groupBy as any}
      filterOptions={resolvedFilterOptions as any}
      renderOption={renderOptionProp ?? defaultRenderOptionWithCheckbox as any}
      renderGroup={renderGroupProp ?? (groupBy ? defaultRenderGroup : undefined)}
      renderTags={renderTags as any}
      renderInput={renderInputProp ?? defaultRenderInput}
      disabled={disabled}
      readOnly={readOnly}
      loading={loading}
      loadingText={loadingText}
      noOptionsText={noOptionsText}
      multiple={multiple as any}
      freeSolo={freeSolo as any}
      disableClearable={disableClearable as any}
      disableCloseOnSelect={disableCloseOnSelect ?? (checkboxSelection ? true : undefined)}
      disablePortal={disablePortal}
      clearOnBlur={clearOnBlur ?? (creatable ? true : undefined)}
      clearOnEscape={clearOnEscape}
      selectOnFocus={selectOnFocus ?? (creatable ? true : undefined)}
      handleHomeEndKeys={handleHomeEndKeys ?? (creatable ? true : undefined)}
      autoComplete={autoComplete}
      autoHighlight={autoHighlight}
      autoSelect={autoSelect}
      includeInputInList={includeInputInList}
      openOnFocus={openOnFocus}
      blurOnSelect={blurOnSelect}
      limitTags={limitTags}
      size={size}
      fullWidth={fullWidth}
      sx={sx}
      open={open}
      onOpen={onOpen}
      onClose={onClose as any}
      ListboxComponent={resolvedListboxComponent}
      ListboxProps={resolvedListboxProps as any}
    />
  );
}

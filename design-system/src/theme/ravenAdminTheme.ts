import React from 'react';
import { createTheme, type ThemeOptions, type Components, type Theme } from '@mui/material/styles';
import RadioButtonUncheckedRounded from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import KeyboardArrowLeftRounded from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
// ArrowUpwardRounded / ArrowDownwardRounded are DataGrid sort icons — applied
// by consuming apps that depend on @mui/x-data-grid (not part of core MUI).

// ---------------------------------------------------------------------------
// TypeScript module augmentations
// ---------------------------------------------------------------------------
declare module '@mui/material/styles' {
  interface TypeBackground {
    dark: string;
    light: string;
    form: string;
  }
  interface PaletteColor {
    lightBg: string;
  }
  interface SimplePaletteColorOptions {
    lightBg?: string;
  }
  interface TypeText {
    tertiary: string;
  }
  interface Palette {
    navItemBg: string;
    accent: string;
    purplePurple: string;
    purple: {
      900: string; 800: string; 300: string; 200: string; 100: string;
    };
    gradients: {
      light: string;
      accentGradient: string;
      paper: string;
    };
  }
  interface PaletteOptions {
    navItemBg?: string;
    accent?: string;
    purplePurple?: string;
    purple?: {
      900?: string; 800?: string; 300?: string; 200?: string; 100?: string;
    };
    gradients?: {
      light?: string;
      accentGradient?: string;
      paper?: string;
    };
  }
  interface TypographyVariants {
    body1Bold: React.CSSProperties;
    tableHeader: React.CSSProperties;
    caption2: React.CSSProperties;
    label: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body1Bold?: React.CSSProperties;
    tableHeader?: React.CSSProperties;
    caption2?: React.CSSProperties;
    label?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body1Bold: true;
    tableHeader: true;
    caption2: true;
    label: true;
  }
}

// ---------------------------------------------------------------------------
// Shared typography (mode-agnostic)
// ---------------------------------------------------------------------------
const sharedTypography: ThemeOptions['typography'] = {
  fontFamily: '"Source Sans 3", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: { fontSize: '88px', fontWeight: 700, letterSpacing: '1px', lineHeight: '88px' },
  h2: { fontSize: '60px', fontWeight: 700, letterSpacing: '1px', lineHeight: '60px' },
  h3: { fontSize: '48px', fontWeight: 700, letterSpacing: '0px', lineHeight: '48px' },
  h4: { fontSize: '34px', fontWeight: 600, letterSpacing: '0px', lineHeight: '51px' },
  h5: { fontSize: '24px', fontWeight: 500, letterSpacing: '0.15px', lineHeight: '32px' },
  h6: { fontSize: '20px', fontWeight: 500, letterSpacing: '0.15px', lineHeight: '32px' },
  subtitle1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, letterSpacing: '0.15px' },
  subtitle2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '22px', letterSpacing: '0.1px' },
  body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, letterSpacing: '0.15px' },
  body1Bold: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.75, letterSpacing: '0.15px' },
  body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '20px', letterSpacing: '0.25px' },
  button: { fontSize: '0.875rem', fontWeight: 500, lineHeight: '24px', letterSpacing: '0.4px', textTransform: 'uppercase' as const },
  caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1, letterSpacing: '0.4px' },
  caption2: { fontSize: '10px', fontWeight: 400, letterSpacing: '0.4px' },
  overline: { fontSize: '0.75rem', fontWeight: 500, lineHeight: '32px', letterSpacing: '2px', textTransform: 'uppercase' as const },
  label: { fontSize: '13px', fontWeight: 400, letterSpacing: '0.16px', lineHeight: '18px' },
  tableHeader: {
    fontFamily: '"Source Sans 3", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '0.17px',
  },
};

// ---------------------------------------------------------------------------
// Shared component overrides (uses callback form for theme-aware colors)
// ---------------------------------------------------------------------------
const sharedComponents: Components<Theme> = {
  MuiButtonBase: {
    styleOverrides: {
      root: {
        '&:focus, &:focus-visible': {
          outline: 'none !important',
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: false,
    },
    styleOverrides: {
      root: { borderRadius: 50, textTransform: 'uppercase' as const },
      contained: ({ theme }) => ({
        boxShadow: theme.shadows[2],
        '&:hover': { boxShadow: theme.shadows[4] },
        '&:active': { boxShadow: theme.shadows[8] },
        '&.Mui-focusVisible': { boxShadow: theme.shadows[6] },
        '&.Mui-disabled': { boxShadow: theme.shadows[0] },
      }),
      text: { boxShadow: 'none' },
      outlined: { boxShadow: 'none' },
    },
  },
  MuiButtonGroup: {
    styleOverrides: {
      root: { borderRadius: 50 },
      grouped: ({ theme }) => ({
        borderRadius: 50,
        borderColor: theme.palette.divider,
      }),
    },
  },
  MuiChip: {
    styleOverrides: {
      root: { borderRadius: 50 },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 24 },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: { borderTopLeftRadius: 12, borderBottomLeftRadius: 12 },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        fontFamily: '"Source Sans 3", sans-serif',
        fontSize: '15px',
        fontWeight: 600,
        letterSpacing: '0.46px',
        textTransform: 'uppercase' as const,
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: { height: 4, borderTopLeftRadius: 50, borderTopRightRadius: 50 },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        fontFamily: '"Source Sans 3", sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        letterSpacing: '0.17px',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: { borderRadius: 8 },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        fontSize: '1rem',
        lineHeight: '1.4375em',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        paddingLeft: 8,
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main,
        },
      }),
      notchedOutline: {
        '& legend': { fontFamily: '"Source Sans 3", sans-serif' },
        '& legend > span': { fontFamily: '"Source Sans 3", sans-serif' },
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      IconComponent: ExpandMoreRounded,
    },
    styleOverrides: {
      root: { borderRadius: 8 },
    },
  },
  MuiNativeSelect: {
    defaultProps: {
      IconComponent: ExpandMoreRounded,
    },
  },
  MuiCheckbox: {
    defaultProps: {
      icon: React.createElement(RadioButtonUncheckedRounded),
      checkedIcon: React.createElement(CheckCircleRounded),
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-checked': { color: theme.palette.primary.main },
      }),
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-checked': { color: theme.palette.primary.main },
      }),
    },
  },
  MuiSwitch: {
    styleOverrides: {
      switchBase: ({ theme }) => ({
        '&.Mui-checked': {
          color: theme.palette.primary.main,
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.purple[300],
          },
        },
      }),
    },
  },
  MuiSlider: {
    styleOverrides: {
      root: ({ theme }) => ({ color: theme.palette.primary.main }),
      thumb: { width: 20, height: 20 },
      rail: { height: 4 },
      track: { height: 4 },
    },
  },
  MuiRating: {
    styleOverrides: {
      iconFilled: ({ theme }) => ({ color: theme.palette.primary.main }),
      iconHover: ({ theme }) => ({ color: theme.palette.purple[800] }),
    },
  },
  MuiAutocomplete: {
    defaultProps: {
      fullWidth: true,
      size: 'medium' as const,
      noOptionsText: 'No options',
      loadingText: 'Loading\u2026',
    },
    styleOverrides: {
      root: { fontFamily: '"Source Sans 3", sans-serif' },
      paper: ({ theme }) => ({
        borderRadius: 8,
        boxShadow: '0px 2px 16px rgba(74, 20, 140, 0.12)',
        border: `1px solid ${theme.palette.divider}`,
        marginTop: 4,
      }),
      listbox: ({ theme }) => ({
        padding: '6px 0',
        maxHeight: 300,
        '& .MuiAutocomplete-option': {
          fontFamily: '"Source Sans 3", sans-serif',
          fontSize: '0.9375rem',
          padding: '8px 16px',
          minHeight: 40,
          borderRadius: 0,
          margin: 0,
          '&:hover, &[data-focus="true"]': {
            backgroundColor: theme.palette.purple[100],
          },
          '&[aria-selected="true"]': {
            backgroundColor: theme.palette.purple[100],
            color: theme.palette.primary.main,
            fontWeight: 500,
            '&:hover, &[data-focus="true"]': {
              backgroundColor: theme.palette.purple[200],
            },
          },
          '&[aria-disabled="true"]': { opacity: 0.5 },
        },
      }),
      groupLabel: ({ theme }) => ({
        fontFamily: '"Source Sans 3", sans-serif',
        fontWeight: 600,
        fontSize: '0.8125rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.08em',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default,
      }),
      tag: ({ theme }) => ({
        fontFamily: '"Source Sans 3", sans-serif',
        backgroundColor: theme.palette.purple[100],
        color: theme.palette.primary.main,
        borderRadius: 50,
        border: `1px solid ${theme.palette.purple[200]}`,
        fontWeight: 500,
        '&:hover': { backgroundColor: theme.palette.purple[200] },
      }),
      clearIndicator: ({ theme }) => ({
        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.purple[100],
        },
      }),
      popupIndicator: ({ theme }) => ({
        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.purple[100],
        },
      }),
      loading: { fontFamily: '"Source Sans 3", sans-serif', color: 'rgba(0, 0, 0, 0.6)' },
      noOptions: { fontFamily: '"Source Sans 3", sans-serif', color: 'rgba(0, 0, 0, 0.6)' },
    },
  },
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
        subtitle1: 'h6', subtitle2: 'h6',
        body1: 'p', body1Bold: 'span', body2: 'p',
        inherit: 'p', tableHeader: 'span',
        caption2: 'span', label: 'span',
      },
    },
    styleOverrides: {
      root: { fontFamily: '"Source Sans 3", "Roboto", "Helvetica", "Arial", sans-serif' },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: { fontFamily: '"Source Sans 3", sans-serif', fontSize: '1rem', fontWeight: 600 },
    },
  },
  MuiBadge: {
    styleOverrides: {
      badge: { fontFamily: '"Source Sans 3", sans-serif', fontSize: '12px', fontWeight: 600 },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.87)',
        fontFamily: '"Source Sans 3", sans-serif',
        fontSize: '12px',
        borderRadius: 4,
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: { borderRadius: 8 },
      standardSuccess: { backgroundColor: '#E8F5E9' },
      standardError: { backgroundColor: '#FFEBEE' },
      standardWarning: { backgroundColor: '#FFF8E1' },
      standardInfo: { backgroundColor: '#E1F5FE' },
    },
  },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: 'rgba(74, 20, 140, 0.14)',
        backdropFilter: 'blur(2px)',
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: { borderRadius: 16 },
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: { borderRadius: 8 },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 4,
        height: 6,
        backgroundColor: theme.palette.purple[100],
      }),
      bar: { borderRadius: 4 },
    },
  },
  MuiCircularProgress: {
    styleOverrides: {
      root: ({ theme }) => ({ color: theme.palette.primary.main }),
    },
  },
  MuiSkeleton: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.purple[100],
        borderRadius: 8,
      }),
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 50,
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': { backgroundColor: theme.palette.purple[800] },
        },
      }),
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: '16px !important' as string,
        boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.06), 0px 8px 10px 1px rgba(0,0,0,0.042), 0px 3px 14px 2px rgba(0,0,0,0.036)',
      },
    },
  },
  MuiPopover: {
    styleOverrides: {
      paper: {
        borderRadius: '16px !important' as string,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: '"Source Sans 3", sans-serif',
        fontSize: '14px',
        borderRadius: 8,
        '&:hover': { backgroundColor: theme.palette.purple[100] },
      }),
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: 'none',
        '&:before': { display: 'none' },
        '&:first-of-type': { borderRadius: 8 },
        '&:last-of-type': { borderRadius: 8 },
      }),
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: { fontFamily: '"Source Sans 3", sans-serif', fontWeight: 600 },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: ({ theme }) => ({ borderColor: theme.palette.divider }),
    },
  },
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.primary.main,
        fontFamily: '"Source Sans 3", sans-serif',
      }),
    },
  },
  MuiList: {
    styleOverrides: {
      root: { padding: 8 },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        '&:hover': { backgroundColor: theme.palette.purple[100] },
      }),
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.secondary,
        minWidth: 40,
      }),
    },
  },
  MuiListItemText: {
    styleOverrides: {
      primary: { fontFamily: '"Source Sans 3", sans-serif' },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: { fontFamily: '"Source Sans 3", sans-serif' },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: { fontFamily: '"Source Sans 3", sans-serif' },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: { borderRadius: 8 },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
    },
  },
  MuiBottomNavigation: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        borderRadius: 24,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: '0px 2px 8px rgba(63, 81, 181, 0.04)',
      }),
    },
  },
  MuiBottomNavigationAction: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: '"Source Sans 3", sans-serif',
        color: theme.palette.text.secondary,
        '&.Mui-selected': { color: theme.palette.primary.main },
      }),
      label: { fontSize: '12px', fontWeight: 600 },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({ color: theme.palette.text.secondary }),
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        borderRadius: 50,
        textTransform: 'none' as const,
        fontFamily: '"Source Sans 3", sans-serif',
        fontSize: '15px',
        fontWeight: 600,
        letterSpacing: '0.46px',
      },
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: { borderRadius: 50 },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: { fontFamily: '"Source Sans 3", sans-serif' },
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-active': { color: theme.palette.primary.main },
        '&.Mui-completed': { color: theme.palette.primary.main },
      }),
    },
  },
  MuiBreadcrumbs: {
    styleOverrides: {
      root: { fontFamily: '"Source Sans 3", sans-serif', fontSize: '14px' },
    },
  },
  MuiFab: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        boxShadow: theme.shadows[6],
        '&:hover': { backgroundColor: theme.palette.purple[800], boxShadow: theme.shadows[12] },
        '&:active': { boxShadow: theme.shadows[12] },
        '&.Mui-focusVisible': { boxShadow: theme.shadows[12] },
        '&.Mui-disabled': { boxShadow: 'none' },
      }),
    },
  },
  MuiSpeedDial: {
    styleOverrides: {
      fab: ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }),
    },
  },
  MuiSpeedDialAction: {
    styleOverrides: {
      fab: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
      }),
      staticTooltipLabel: { fontFamily: '"Source Sans 3", sans-serif' },
    },
  },
  MuiTablePagination: {
    defaultProps: {
      slotProps: {
        actions: {
          previousButtonIcon: { component: KeyboardArrowLeftRounded },
          nextButtonIcon: { component: KeyboardArrowRightRounded },
        },
      },
    },
  },
  // Note: MuiDataGrid overrides (columnSortedAscendingIcon: ArrowUpwardRounded,
  // columnSortedDescendingIcon: ArrowDownwardRounded) must be applied by the
  // consuming app since @mui/x-data-grid is not a dependency of the design system.
};

// ---------------------------------------------------------------------------
// Shared shadows
// ---------------------------------------------------------------------------
const sharedShadows: ThemeOptions['shadows'] = [
  'none',
  '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
  '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
  '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
  '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
  '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
  '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
  '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
  '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
  '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
  '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
  '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
  '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
  '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
  '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
  '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
  '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
  '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
  '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
];

// ---------------------------------------------------------------------------
// Light palette
// ---------------------------------------------------------------------------
const lightPalette: ThemeOptions['palette'] = {
  mode: 'light',
  primary: {
    main: '#4A148C',
    light: '#C5CAE9',
    dark: '#303F9F',
    lightBg: '#E8EAF6',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#536DFE',
    light: '#E1BEE7',
  },
  success: { main: '#2E7D32', dark: '#1B5E20', light: '#E8F5E9' },
  error: { main: '#F44336', dark: '#B71C1C', light: '#FFEBEE' },
  warning: { main: '#FF9800', dark: '#FF6F00', light: '#FFF8E1' },
  info: { main: '#0288D1', dark: '#01579B', light: '#E1F5FE' },
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
    dark: '#FCF6FE',
    light: '#F5F5F5',
    form: '#FDFAFE',
  },
  text: {
    primary: 'rgba(0,0,0,0.87)',
    secondary: 'rgba(0,0,0,0.6)',
    disabled: 'rgba(0,0,0,0.42)',
    tertiary: 'rgba(0,0,0,0.7)',
  },
  divider: '#F3E5F5',
  navItemBg: '#E1BEE7',
  accent: '#4A148C',
  purplePurple: '#9C27B0',
  purple: {
    900: '#4A148C',
    800: '#6A1B9A',
    300: '#CE93D8',
    200: '#E1BEE7',
    100: '#F3E5F5',
  },
  gradients: {
    light: 'linear-gradient(292deg, #732668 0.1%, #402673 50.05%, #2F2673 100%)',
    accentGradient: 'linear-gradient(311deg, #BF40AE 0%, #6B40BF 50%, #4E40BF 100%)',
    paper: 'linear-gradient(280deg, #E3DFFC 0.82%, #FEFEFF 50.21%, #FCF2FD 99.6%)',
  },
};

// ---------------------------------------------------------------------------
// Dark palette
// ---------------------------------------------------------------------------
const darkPalette: ThemeOptions['palette'] = {
  mode: 'dark',
  primary: {
    main: '#23E0D2',
    light: '#C5CAE9',
    dark: '#159890',
    lightBg: '#13252A',
    contrastText: '#0B1215',
  },
  secondary: {
    main: '#536DFE',
    light: '#E1BEE7',
  },
  success: { main: '#2ED58A', dark: '#1B5E20', light: '#E8F5E9' },
  error: { main: '#FF6E6E', dark: '#B71C1C', light: '#FFEBEE' },
  warning: { main: '#F5B947', dark: '#FF6F00', light: '#FFF8E1' },
  info: { main: '#42C6FF', dark: '#01579B', light: '#E1F5FE' },
  background: {
    default: '#0B1215',
    paper: '#122229',
    dark: '#0E171B',
    light: '#101C21',
    form: '#122229',
  },
  text: {
    primary: '#E8FBFB',
    secondary: '#B6D7D9',
    disabled: 'rgba(232,251,251,0.42)',
    tertiary: 'rgba(232,251,251,0.7)',
  },
  divider: '#17343A',
  navItemBg: '#179890',
  accent: '#E8FBFB',
  purplePurple: '#9C27B0',
  purple: {
    900: '#4A148C',
    800: '#6A1B9A',
    300: '#CE93D8',
    200: '#E1BEE7',
    100: '#F3E5F5',
  },
  gradients: {
    light: 'linear-gradient(292deg, #732668 0.1%, #402673 50.05%, #2F2673 100%)',
    accentGradient: 'linear-gradient(311deg, #BF40AE 0%, #6B40BF 50%, #4E40BF 100%)',
    paper: 'linear-gradient(280deg, #E3DFFC 0.82%, #FEFEFF 50.21%, #FCF2FD 99.6%)',
  },
};

// ---------------------------------------------------------------------------
// Theme creation
// ---------------------------------------------------------------------------
export const ravenAdminLightTheme = createTheme({
  palette: lightPalette,
  typography: sharedTypography,
  shape: { borderRadius: 8 },
  shadows: sharedShadows,
  components: sharedComponents,
});

export const ravenAdminDarkTheme = createTheme({
  palette: darkPalette,
  typography: sharedTypography,
  shape: { borderRadius: 8 },
  shadows: sharedShadows,
  components: sharedComponents,
});

/** Default admin theme (light mode). */
export const ravenAdminTheme = ravenAdminLightTheme;

import React from 'react';
import { createTheme } from '@mui/material/styles';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

declare module '@mui/material/styles' {
  interface TypeBackground {
    form: string;
  }
  interface Palette {
    purple: {
      900: string; 800: string; 300: string; 200: string; 100: string;
    };
  }
  interface PaletteOptions {
    purple?: {
      900?: string; 800?: string; 300?: string; 200?: string; 100?: string;
    };
  }
  interface TypographyVariants {
    body1Bold: React.CSSProperties;
    tableHeader: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body1Bold?: React.CSSProperties;
    tableHeader?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body1Bold: true;
    tableHeader: true;
  }
}

export const ravenNearMissTheme = createTheme({
  palette: {
    primary: {
      main: '#4A148C',
      light: '#CE93D8',
      dark: '#311B92',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#4A148C',
      light: '#E1BEE7',
    },
    success: { main: '#4CAF50', dark: '#1B5E20', light: '#E8F5E9' },
    error: { main: '#D32F2F', dark: '#B71C1C', light: '#FFEBEE', contrastText: '#FFFFFF' },
    warning: { main: '#E65100', dark: '#BF360C', light: '#FFF8E1', contrastText: '#FFFFFF' },
    info: { main: '#0288D1', dark: '#01579B', light: '#E1F5FE' },
    background: {
      default: '#FCF6FE',
      paper: '#FFFFFF',
      form: '#FDFAFE',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.42)',
    },
    divider: '#E0E0E0',
    purple: {
      900: '#4A148C',
      800: '#6A1B9A',
      300: '#CE93D8',
      200: '#E1BEE7',
      100: '#F3E5F5',
    },
  },

  typography: {
    fontFamily: '"Source Sans 3", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '6rem', fontWeight: 300, lineHeight: 1.167, letterSpacing: '-1.5px' },
    h2: { fontSize: '3.75rem', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.5px' },
    h3: { fontSize: '3rem', fontWeight: 400, lineHeight: 1.167, letterSpacing: '0' },
    h4: { fontSize: '2.125rem', fontWeight: 600, lineHeight: '40px', letterSpacing: '0.25px' },
    h5: { fontSize: '1.5rem', fontWeight: 600, lineHeight: '32px', letterSpacing: '0' },
    h6: { fontSize: '1.25rem', fontWeight: 600, lineHeight: '32px', letterSpacing: '0.15px' },
    subtitle1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, letterSpacing: '0.15px' },
    subtitle2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '22px', letterSpacing: '0.1px' },
    body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, letterSpacing: '0.15px' },
    body1Bold: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.75, letterSpacing: '0.15px' },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '20px', letterSpacing: '0.25px' },
    button: { fontSize: '0.875rem', fontWeight: 500, lineHeight: '24px', letterSpacing: '0.4px', textTransform: 'uppercase' as const },
    caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1, letterSpacing: '0.4px' },
    overline: { fontSize: '0.75rem', fontWeight: 600, lineHeight: '32px', letterSpacing: '2px', textTransform: 'uppercase' as const },
    tableHeader: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '0.17px',
    },
  },

  shape: { borderRadius: 8 },

  shadows: [
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
  ],

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: false,
      },
      styleOverrides: {
        root: { borderRadius: 50, textTransform: 'uppercase' as const },
        contained: ({ theme }) => ({
          boxShadow: theme.shadows[2],
          '&:hover': {
            boxShadow: theme.shadows[4],
          },
          '&:active': {
            boxShadow: theme.shadows[8],
          },
          '&.Mui-focusVisible': {
            boxShadow: theme.shadows[6],
          },
          '&.Mui-disabled': {
            boxShadow: theme.shadows[0],
          },
        }),
        text: { boxShadow: 'none' },
        outlined: { boxShadow: 'none' },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: { borderRadius: 50 },
        grouped: {
          borderRadius: 50,
          borderColor: '#F3E5F5',
        },
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4A148C',
          },
        },
        notchedOutline: {
          '& legend': {
            fontFamily: '"Source Sans 3", sans-serif',
            fontWeight: 500,
            fontSize: 'calc(13px * 0.75)',
          },
          '& legend > span': {
            fontFamily: '"Source Sans 3", sans-serif',
            fontWeight: 500,
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ArrowDropDownRoundedIcon,
      },
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiNativeSelect: {
      defaultProps: {
        IconComponent: ArrowDropDownRoundedIcon,
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': { color: '#4A148C' },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-checked': { color: '#4A148C' },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': {
            color: '#4A148C',
            '& + .MuiSwitch-track': {
              backgroundColor: '#CE93D8',
            },
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: { color: '#4A148C' },
        thumb: { width: 20, height: 20 },
        rail: { height: 4 },
        track: { height: 4 },
      },
    },
    MuiRating: {
      styleOverrides: {
        iconFilled: { color: '#4A148C' },
        iconHover: { color: '#6A1B9A' },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
        size: 'medium' as const,
        noOptionsText: 'No options',
        loadingText: 'Loading…',
        popupIcon: React.createElement(ArrowDropDownRoundedIcon),
      },
      styleOverrides: {
        root: {
          fontFamily: '"Source Sans 3", sans-serif',
        },
        paper: {
          borderRadius: 8,
          boxShadow: '0px 2px 16px rgba(74, 20, 140, 0.12)',
          border: '1px solid #E0E0E0',
          marginTop: 4,
        },
        listbox: {
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
              backgroundColor: '#F3E5F5',
            },
            '&[aria-selected="true"]': {
              backgroundColor: '#F3E5F5',
              color: '#4A148C',
              fontWeight: 500,
              '&:hover, &[data-focus="true"]': {
                backgroundColor: '#E1BEE7',
              },
            },
            '&[aria-disabled="true"]': {
              opacity: 0.5,
            },
          },
        },
        groupLabel: {
          fontFamily: '"Source Sans 3", sans-serif',
          fontWeight: 600,
          fontSize: '0.8125rem',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.08em',
          color: '#4A148C',
          backgroundColor: '#FFFFFF',
        },
        tag: {
          fontFamily: '"Source Sans 3", sans-serif',
          backgroundColor: '#F3E5F5',
          color: '#4A148C',
          borderRadius: 50,
          border: '1px solid #E1BEE7',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: '#E1BEE7',
          },
        },
        clearIndicator: {
          color: 'rgba(0, 0, 0, 0.6)',
          '&:hover': {
            color: '#4A148C',
            backgroundColor: '#F3E5F5',
          },
        },
        popupIndicator: {
          color: 'rgba(0, 0, 0, 0.6)',
          '&:hover': {
            color: '#4A148C',
            backgroundColor: '#F3E5F5',
          },
        },
        loading: {
          fontFamily: '"Source Sans 3", sans-serif',
          color: 'rgba(0, 0, 0, 0.6)',
        },
        noOptions: {
          fontFamily: '"Source Sans 3", sans-serif',
          color: 'rgba(0, 0, 0, 0.6)',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h6',
          subtitle2: 'h6',
          body1: 'p',
          body1Bold: 'span',
          body2: 'p',
          inherit: 'p',
          tableHeader: 'span',
        },
      },
      styleOverrides: {
        root: {
          fontFamily: '"Source Sans 3", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontFamily: '"Source Sans 3", sans-serif',
          fontSize: '1rem',
          fontWeight: 600,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontFamily: '"Source Sans 3", sans-serif',
          fontSize: '12px',
          fontWeight: 600,
        },
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
        paper: { borderRadius: 24 },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 6,
          backgroundColor: '#F3E5F5',
        },
        bar: { borderRadius: 4 },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: { color: '#4A148C' },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: '#F3E5F5',
          borderRadius: 8,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {},
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          '&.Mui-selected': {
            backgroundColor: '#4A148C',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#6A1B9A',
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.06), 0px 8px 10px 1px rgba(0,0,0,0.042), 0px 3px 14px 2px rgba(0,0,0,0.036)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: '"Source Sans 3", sans-serif',
          fontSize: '14px',
          borderRadius: 8,
          '&:hover': { backgroundColor: '#F3E5F5' },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: '1px solid #E0E0E0',
          boxShadow: 'none',
          '&:before': { display: 'none' },
          '&:first-of-type': { borderRadius: 8 },
          '&:last-of-type': { borderRadius: 8 },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontFamily: '"Source Sans 3", sans-serif',
          fontWeight: 600,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: '#E0E0E0' },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#4A148C',
          fontFamily: '"Source Sans 3", sans-serif',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: { padding: 8 },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:hover': { backgroundColor: '#F3E5F5' },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'rgba(0,0,0,0.6)',
          minWidth: 40,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: '"Source Sans 3", sans-serif',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: '"Source Sans 3", sans-serif',
          fontSize: '13px',
          fontWeight: 500,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: '"Source Sans 3", sans-serif',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: 'rgba(0,0,0,0.87)',
          boxShadow: 'none',
          borderBottom: '1px solid #F3E5F5',
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: 24,
          border: '1px solid #F3E5F5',
          boxShadow: '0px 2px 8px rgba(63, 81, 181, 0.04)',
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          fontFamily: '"Source Sans 3", sans-serif',
          color: 'rgba(0,0,0,0.6)',
          '&.Mui-selected': {
            color: '#4A148C',
          },
        },
        label: {
          fontSize: '12px',
          fontWeight: 600,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { color: 'rgba(0,0,0,0.6)' },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none' as const,
          fontFamily: '"Source Sans 3", sans-serif',
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
        label: {
          fontFamily: '"Source Sans 3", sans-serif',
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-active': { color: '#4A148C' },
          '&.Mui-completed': { color: '#4A148C' },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontFamily: '"Source Sans 3", sans-serif',
          fontSize: '14px',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: '#4A148C',
          color: '#FFFFFF',
          boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
          '&:hover': {
            backgroundColor: '#6A1B9A',
            boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
          },
          '&:active': {
            boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
          },
          '&.Mui-focusVisible': {
            boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
          },
          '&.Mui-disabled': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiSpeedDial: {
      styleOverrides: {
        fab: {
          backgroundColor: '#4A148C',
          color: '#FFFFFF',
        },
      },
    },
    MuiSpeedDialAction: {
      styleOverrides: {
        fab: {
          backgroundColor: '#FFFFFF',
          color: '#4A148C',
        },
        staticTooltipLabel: {
          fontFamily: '"Source Sans 3", sans-serif',
        },
      },
    },
  },
});

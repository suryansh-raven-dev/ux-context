import { createTheme } from '@mui/material/styles';

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
    error: { main: '#F44336', dark: '#B71C1C', light: '#FFEBEE' },
    warning: { main: '#FF9800', dark: '#FF6F00', light: '#FFF8E1' },
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
    h4: { fontSize: '2.125rem', fontWeight: 600, lineHeight: '40px', letterSpacing: '0.25px' },
    h5: { fontSize: '1.5rem', fontWeight: 600, lineHeight: '32px', letterSpacing: '0' },
    h6: { fontSize: '1.25rem', fontWeight: 600, lineHeight: '32px', letterSpacing: '0.15px' },
    body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, letterSpacing: '0.15px' },
    body1Bold: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.75, letterSpacing: '0.15px' },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '20px', letterSpacing: '0.25px' },
    subtitle2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '22px', letterSpacing: '0.1px' },
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

  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 50, textTransform: 'uppercase' as const },
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
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: { borderRadius: 8 },
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
      styleOverrides: {
        paper: { borderRadius: 8 },
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
          '&:hover': { backgroundColor: '#6A1B9A' },
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

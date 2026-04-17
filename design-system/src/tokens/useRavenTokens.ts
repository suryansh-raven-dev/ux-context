import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

import { ravenTokensStatic } from './tokens';
import type { RavenTokensStatic } from './tokens';

/**
 * Mode-dependent token groups (brand / semantic / surface / content / border)
 * resolved from the active MUI theme. The rest comes from `ravenTokensStatic`.
 *
 * This is the canonical 3.3 shape. Existing components read `theme.palette.*`
 * directly today — new code SHOULD read from these namespaces instead.
 */
export interface RavenModeTokens {
  color: {
    brand: {
      primary: string;
      onPrimary: string;
      accent: string;
      subtle: string;
    };
    semantic: {
      success: string;
      warning: string;
      danger: string;
      info: string;
    };
    surface: {
      background: string; // page canvas
      raised: string;     // cards
      sunken: string;     // table headers, nested panels
      overlay: string;    // dialogs, menus
    };
    content: {
      primary: string;
      secondary: string;
      tertiary: string;
      disabled: string;
      inverse: string;
    };
    border: {
      default: string;
      subtle: string;
      strong: string;
      focus: string;
    };
  };
}

export type RavenTokens = RavenTokensStatic & RavenModeTokens;

/**
 * Resolve the full token surface from an MUI theme. Prefer `useRavenTokens()`
 * inside components; this helper exists for non-React consumers (e.g. tests,
 * storybook blocks that already hold a theme reference).
 */
export function resolveRavenTokens(theme: Theme): RavenTokens {
  const p = theme.palette;
  return {
    ...ravenTokensStatic,
    color: {
      ...ravenTokensStatic.color,
      brand: {
        primary: p.primary.main,
        onPrimary: p.primary.contrastText,
        accent: p.accent,
        subtle: p.purple[100],
      },
      semantic: {
        success: p.success.main,
        warning: p.warning.main,
        danger: p.error.main,
        info: p.info.main,
      },
      surface: {
        background: p.background.dark,
        raised: p.background.default,
        sunken: p.background.light,
        overlay: p.background.paper,
      },
      content: {
        primary: p.text.primary,
        secondary: p.text.secondary,
        tertiary: p.text.tertiary,
        disabled: p.text.disabled,
        inverse: p.primary.contrastText,
      },
      border: {
        default: p.divider,
        subtle: p.divider,
        strong: p.purple[200],
        focus: p.primary.main,
      },
    },
  };
}

/**
 * Canonical token hook. Returns 3.3-shaped tokens derived from the current theme.
 *
 * Usage:
 * ```
 * const tokens = useRavenTokens();
 * <Box sx={{ backgroundColor: tokens.color.surface.raised, borderRadius: tokens.radius.lg }} />
 * ```
 */
export function useRavenTokens(): RavenTokens {
  const theme = useTheme();
  return useMemo(() => resolveRavenTokens(theme), [theme]);
}

/**
 * Raven design tokens — 3.3 canonical surface.
 *
 * Consumers MUST read colors, fonts, spacing, radius, shadow, and motion values
 * from this module rather than hardcoding hex / px / font strings in product code
 * (3.1). The mode-dependent families (brand / semantic / surface / content /
 * border) live on the MUI theme palette today — use `useRavenTokens(theme)` from
 * `./useRavenTokens` to resolve them together with the static families below.
 *
 * This module is additive: existing components that read from `theme.palette.*`
 * continue to work. New code should prefer these canonical names.
 */

// ---------------------------------------------------------------------------
// Category colors (plant / domain) — 7.2
// Owned by raven-ui. Keyed by plant-section identifier. MUST match across products.
// ---------------------------------------------------------------------------
export const categoryColors = {
  hsef: '#9C27B0',
  ammoniaTrain1: '#F5B947',
  ammoniaTrain2: '#23E0D2',
  urea: '#536DFE',
  utilities: '#4A148C',
} as const;

export type CategoryKey = keyof typeof categoryColors;

// ---------------------------------------------------------------------------
// Status colors (NMMS lifecycle) — 7.3
// MUST NOT be used for non-status meaning anywhere in any product.
// ---------------------------------------------------------------------------
export const statusColors = {
  'in-progress': { dot: '#0288D1', surface: '#E3F2FD', content: '#0D47A1' },
  closed: { dot: '#4CAF50', surface: '#E8F5E9', content: '#33691E' },
  pending: { dot: '#F57C00', surface: '#FFF8E1', content: '#FF6F00' },
  released: { dot: '#2E7D32', surface: '#E8F5E9', content: '#1B5E20' },
  approved: { dot: '#2E7D32', surface: '#E8F5E9', content: '#1B5E20' },
  rejected: { dot: '#F44336', surface: '#FFEBEE', content: '#B71C1C' },
} as const;

export type StatusKey = keyof typeof statusColors;

// ---------------------------------------------------------------------------
// Engineering colors (P&ID) — 7.4
// MUST NOT be confused with status or category colors.
// ---------------------------------------------------------------------------
export const engineeringColors = {
  equipment: '#1976D2',
  line: '#388E3C',
  instrument: '#E65100',
} as const;

// ---------------------------------------------------------------------------
// Typography — 3.3
// ---------------------------------------------------------------------------
export const fontFamily = {
  sans: '"Source Sans 3", "Roboto", "Helvetica", "Arial", sans-serif',
  mono: '"JetBrains Mono", "Menlo", "Consolas", monospace',
} as const;

export const fontSize = {
  xs: '0.75rem',    // 12px — caption
  sm: '0.875rem',   // 14px — body2
  md: '1rem',       // 16px — body1
  lg: '1.25rem',    // 20px — h6
  xl: '1.5rem',     // 24px — h5 (page titles)
  '2xl': '2.125rem',// 34px — h4
  display: '3rem',  // 48px — h3
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

// ---------------------------------------------------------------------------
// Spacing — 3.3, 8px base scale
// ---------------------------------------------------------------------------
export const space = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 32,
  8: 40,
  9: 48,
  10: 64,
  11: 80,
  12: 96,
} as const;

// ---------------------------------------------------------------------------
// Radius — 3.3
// ---------------------------------------------------------------------------
export const radius = {
  none: 0,
  sm: 4,    // badges, input fields (sm rows)
  md: 8,    // inputs, menu items, row action buttons
  lg: 16,   // dialogs, menus, popovers
  xl: 20,   // form-section cards
  '2xl': 24,// main content card
  pill: 50,
  circle: '50%',
} as const;

// ---------------------------------------------------------------------------
// Shadow — 3.3 (5 elevations)
// ---------------------------------------------------------------------------
export const shadow = {
  1: '0px 1px 2px rgba(0,0,0,0.06), 0px 1px 1px rgba(0,0,0,0.04)',
  2: '0px 2px 4px rgba(0,0,0,0.08), 0px 1px 2px rgba(0,0,0,0.05)',
  3: '0px 4px 8px rgba(0,0,0,0.10), 0px 2px 4px rgba(0,0,0,0.06)',
  4: '0px 8px 16px rgba(0,0,0,0.12), 0px 4px 8px rgba(0,0,0,0.06)',
  5: '0px 16px 32px rgba(0,0,0,0.14), 0px 8px 16px rgba(0,0,0,0.08)',
  // Brand-tinted shadow used under popovers anchored to purple chrome.
  brand: '0px 2px 16px rgba(74, 20, 140, 0.12)',
  // Chat input glow — referenced in CLAUDE.md.
  chatGlow: '0px 0px 8px 4px rgba(167, 64, 179, 0.08)',
} as const;

// ---------------------------------------------------------------------------
// Gradients — brand chrome
// ---------------------------------------------------------------------------
export const gradients = {
  /** Primary/cyan org-avatar gradient (Raven-branded contexts). */
  orgAvatarBrand: 'linear-gradient(to bottom, #0CDACC, #311B92)',
  /** Neutral greyscale avatar gradient (default / non-tenant contexts). */
  orgAvatarNeutral: 'linear-gradient(to bottom, #737373, #1A1A1A)',
  /** Accent multi-stop used for heros and chrome highlights. */
  accent: 'linear-gradient(-14deg, rgb(191, 64, 174) 0%, rgb(107, 64, 191) 50%, rgb(78, 64, 191) 100%)',
} as const;

// ---------------------------------------------------------------------------
// Motion — 3.3
// ---------------------------------------------------------------------------
export const duration = {
  instant: 0,
  fast: 120,
  base: 200,
  slow: 320,
} as const;

export const ease = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  entrance: 'cubic-bezier(0, 0, 0, 1)',
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
  emphasized: 'cubic-bezier(0.2, 0, 0, 1.2)',
} as const;

// ---------------------------------------------------------------------------
// Z-index — no arbitrary layering. Names mirror MUI so sx-prop `zIndex: 'tooltip'`
// works across the stack.
// ---------------------------------------------------------------------------
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  popover: 1400,
  toast: 1500,
  tooltip: 1600,
} as const;

// ---------------------------------------------------------------------------
// Breakpoints — px values; aligned with MUI defaults so responsive arrays in
// sx props resolve without extra configuration.
// ---------------------------------------------------------------------------
export const breakpoint = {
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
  '2xl': 1920,
} as const;

// ---------------------------------------------------------------------------
// Density — 3.3. Consumed by data-display primitives (Table, List, Card).
// ---------------------------------------------------------------------------
export const density = {
  comfortable: { rowHeight: 52, cellPaddingY: 12, cellPaddingX: 16 },
  compact: { rowHeight: 36, cellPaddingY: 6, cellPaddingX: 12 },
} as const;

export type DensityKey = keyof typeof density;

// ---------------------------------------------------------------------------
// Opacity — named decimals. Prefer these to ad-hoc values in sx.
// ---------------------------------------------------------------------------
export const opacity = {
  disabled: 0.38,
  hover: 0.08,
  selected: 0.12,
  focus: 0.16,
  scrim: 0.5,
} as const;

// ---------------------------------------------------------------------------
// Focus ring — 15.3. Color is a palette ref resolved by consumers.
// ---------------------------------------------------------------------------
export const focusRing = {
  color: 'primary.main',
  width: 2,
  offset: 2,
  style: 'solid',
} as const;

// ---------------------------------------------------------------------------
// Static root — the families that don't depend on light/dark mode.
// Mode-dependent families (brand, semantic, surface, content, border) resolve
// through `useRavenTokens(theme)` in ./useRavenTokens.
// ---------------------------------------------------------------------------
export const ravenTokensStatic = {
  color: {
    category: categoryColors,
    status: statusColors,
    engineering: engineeringColors,
  },
  font: {
    family: fontFamily,
    size: fontSize,
    weight: fontWeight,
  },
  space,
  radius,
  shadow,
  duration,
  ease,
  zIndex,
  breakpoint,
  density,
  opacity,
  focusRing,
} as const;

export type RavenTokensStatic = typeof ravenTokensStatic;

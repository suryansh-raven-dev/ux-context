import { forwardRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

export type TenantLogoSize = 'sm' | 'md' | 'lg';

export interface TenantLogoProps {
  /** Tenant display name. Used for alt text, fallback initials, and aria-label. */
  tenantName: string;
  /** URL to the tenant's logo asset (SVG preferred). */
  src?: string;
  /** Inline SVG node — use when the asset is bundled or needs to inherit currentColor. */
  svg?: ReactNode;
  /** Preset height: sm=24, md=32, lg=40 (px). Default: 'md'. */
  size?: TenantLogoSize;
  /** Maximum width of the rendered logo (px). Defaults to 3x the height. */
  maxWidth?: number;
  /**
   * Chrome this logo sits on. Affects the fallback surface color and makes it easier
   * to reason about contrast in PRs. Does not pick the asset — pass the right `src`.
   */
  onBackground?: 'light' | 'dark' | 'brand';
  /** Treat this surface as a primary-chrome slot (applies the 6.4 safe zone). Default: true. */
  primaryChrome?: boolean;
  /** Override the accessible name. Defaults to `${tenantName} logo`. */
  ariaLabel?: string;
  /** Extra style overrides for the outer wrapper. */
  style?: CSSProperties;
  className?: string;
}

const HEIGHT_BY_SIZE: Record<TenantLogoSize, number> = {
  sm: 24,
  md: 32,
  lg: 40,
};

// 6.4 safe zone — padding around the mark so it never touches adjacent chrome.
// Expressed as a fraction of the logo height (design intent: ~25% of mark height).
const SAFE_ZONE_RATIO = 0.25;

function initialsFor(tenantName: string): string {
  const words = tenantName.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/**
 * TenantLogo — renders a tenant's brand mark in primary chrome.
 *
 * Per guidelines 6: the top-left mark in every product's primary chrome MUST be the
 * tenant's logo when a tenant context is active. Per 6.4: tenant logos MUST be
 * delivered as tenant-supplied SVG with a documented safe zone, and raven-ui MUST
 * provide this component to handle sizing, fallback, and accessibility.
 *
 * Priority of rendering: `svg` → `src` → initials fallback.
 */
export const TenantLogo = forwardRef<HTMLSpanElement, TenantLogoProps>(function TenantLogo(
  {
    tenantName,
    src,
    svg,
    size = 'md',
    maxWidth,
    onBackground = 'light',
    primaryChrome = true,
    ariaLabel,
    style,
    className,
  },
  ref,
) {
  const height = HEIGHT_BY_SIZE[size];
  const resolvedMaxWidth = maxWidth ?? height * 3;
  const safeZone = primaryChrome ? Math.round(height * SAFE_ZONE_RATIO) : 0;
  const accessibleName = ariaLabel ?? `${tenantName} logo`;

  const fallbackBg = (theme: { palette: { primary: { main: string }; common: { white: string } } }) =>
    onBackground === 'dark' ? alpha(theme.palette.common.white, 0.12)
    : onBackground === 'brand' ? alpha(theme.palette.common.white, 0.18)
    : alpha(theme.palette.primary.main, 0.08);
  const fallbackFg =
    onBackground === 'dark' ? 'common.white'
    : onBackground === 'brand' ? 'common.white'
    : 'primary.main';

  const content = (() => {
    if (svg) {
      return (
        <Box
          aria-hidden
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height,
            maxWidth: resolvedMaxWidth,
            '& > svg, & > img': {
              height: '100%',
              width: 'auto',
              maxWidth: '100%',
              display: 'block',
            },
          }}
        >
          {svg}
        </Box>
      );
    }
    if (src) {
      return (
        <Box
          component="img"
          src={src}
          alt=""
          aria-hidden
          sx={{
            height,
            width: 'auto',
            maxWidth: resolvedMaxWidth,
            display: 'block',
            objectFit: 'contain',
          }}
        />
      );
    }
    return (
      <Box
        aria-hidden
        sx={{
          height,
          minWidth: height,
          px: 1,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
          backgroundColor: fallbackBg,
          color: fallbackFg,
          fontFamily: '"Source Sans 3", sans-serif',
          fontWeight: 700,
          fontSize: size === 'sm' ? 11 : size === 'md' ? 13 : 15,
          letterSpacing: '0.04em',
        }}
      >
        {initialsFor(tenantName)}
      </Box>
    );
  })();

  return (
    <Box
      ref={ref}
      component="span"
      role="img"
      aria-label={accessibleName}
      className={className}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: `${safeZone}px`,
        ...style,
      }}
    >
      {content}
    </Box>
  );
});

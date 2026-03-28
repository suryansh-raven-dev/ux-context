# Session: RavenButton Design System Integration

**Date**: 2026-03-27
**Topic**: Extracting MUI v6 Button details and creating Raven-styled Button component

## What Was Done

1. **Extracted full MUI v6 Button page details** from https://v6.mui.com/material-ui/react-button/ and https://v6.mui.com/material-ui/api/button/:
   - Three variants (text, contained, outlined)
   - Seven color options (primary, secondary, success, error, warning, info, inherit)
   - Three sizes (small, medium, large)
   - Icon support (startIcon, endIcon)
   - IconButton component (sizes, colors, loading, badge)
   - File upload pattern (component="label")
   - Loading state (v6.4.0+) with loadingPosition and loadingIndicator
   - Full props reference (13+ props)
   - CSS classes reference (40+ classes)
   - Accessibility and limitations

2. **Created RavenButton component** at `raven-ui/src/components/inputs/RavenButton/`:
   - `RavenButton.tsx` — Typed wrapper around MUI Button with Raven class application
   - `RavenIconButton` — Wrapper around MUI IconButton with loading convenience prop
   - `RavenButton.css` — Source Sans 3 font, pill radius, size padding, purple hover states, brand border colors
   - `RavenButton.stories.tsx` — 15 stories covering all MUI Button features plus Raven CTA patterns
   - `RavenButton.test.tsx` — 14 unit tests for both RavenButton and RavenIconButton

3. **Updated `near-miss-components.md`** with Section 2.16 containing 15 sub-sections:
   - Design tokens applied, basic variants, colors, sizes, icons, IconButton, file upload, loading states, full width, complete props reference, CSS classes reference, accessibility notes, Raven usage patterns from Figma, theme overrides, and limitations

4. **Updated catalog** (`muiV6Catalog.ts` and Section 7.1 table):
   - Changed Button support level from `themed` to `available`
   - Updated Raven equivalent from `MuiButton under ravenNearMissTheme` to `RavenButton / RavenIconButton`

## Key Design Decisions

- Raven buttons use **pill radius (50px)** universally, matching the Figma design
- **Source Sans 3** font family is enforced via CSS
- All variants use **uppercase** labels (`textTransform: uppercase`)
- Contained primary/secondary hover uses `#6A1B9A` (purple.800)
- Outlined primary/secondary buttons get `#CE93D8` border (purple.300) with `#F3E5F5` hover
- Text buttons get `#F3E5F5` hover background
- RavenIconButton includes a `loading` convenience prop that replaces the icon with CircularProgress
- All Raven CTA patterns from Figma are documented with exact Figma node references

## Files Created

- `apps/raven/design-system/raven-ui/src/components/inputs/RavenButton/RavenButton.tsx`
- `apps/raven/design-system/raven-ui/src/components/inputs/RavenButton/RavenButton.css`
- `apps/raven/design-system/raven-ui/src/components/inputs/RavenButton/RavenButton.stories.tsx`
- `apps/raven/design-system/raven-ui/src/components/inputs/RavenButton/RavenButton.test.tsx`

## Files Modified

- `apps/raven/design-system/near-miss-components.md` — Added Section 2.16 (RavenButton), updated Section 7.1 catalog table
- `apps/raven/design-system/raven-ui/src/catalog/muiV6Catalog.ts` — Updated Button entry

## Next Steps

- Run Storybook to visually verify all 15 stories render correctly
- Run unit tests to confirm all 14 tests pass
- Consider creating a RavenButtonGroup wrapper if the pattern becomes common
- Review accessibility with screen reader testing

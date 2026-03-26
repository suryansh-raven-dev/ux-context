# Session Log: MUI v6 Catalog Alignment

**Date**: 2026-03-26
**Application**: Raven / Near Miss
**Focus**: Align the Raven design library to the full Material UI v6 component catalog with exact naming, links, and Raven-specific implementation guidance.

## User-Provided Truth

- The Raven design system should follow the official MUI v6 component names exactly.
- The design library should include all components from the MUI v6 catalog, their links, and guideline details.
- Raven styling should be applied where possible through existing wrappers or the shared Raven theme.

## What Was Done

1. Reconciled the official [MUI v6 all-components catalog](https://v6.mui.com/material-ui/all-components/) against the current `raven-ui` component inventory.
2. Added a reusable catalog data source at `apps/raven/design-system/raven-ui/src/catalog/muiV6Catalog.ts` with:
   - exact MUI component names
   - official MUI doc URLs
   - guideline tags (`MD1`, `MD2`, `No guidelines`, `Utility`)
   - Raven support level (`available`, `themed`, `guidance`)
   - Raven-equivalent component or implementation mapping
   - Raven-specific usage notes
3. Added a new Storybook surface at `apps/raven/design-system/raven-ui/src/components/catalog/MuiV6Catalog.stories.tsx` and `MuiV6Catalog.tsx` so the canonical catalog is visible inside the Raven library.
4. Updated `ravenNearMissTheme.ts` with additional styling support for catalog entries that previously had no Raven-specific treatment:
   - `MuiButtonGroup`
   - `MuiRating`
   - `MuiBackdrop`
   - `MuiAppBar`
   - `MuiBottomNavigation`
   - `MuiBottomNavigationAction`
   - `MuiSpeedDial`
   - `MuiSpeedDialAction`
5. Updated `apps/raven/design-system/near-miss-components.md` with a new canonical MUI appendix so markdown docs match the Storybook catalog.
6. Updated `apps/raven/design-system/raven-ui/README.md` and `apps/raven/product-summary.md` to reference the new MUI catalog alignment work.
7. Verified the package compiled successfully with:
   - `npm run build`
   - `npm run build-storybook`

## Observed Behavior

- The existing Raven theme already covered many MUI primitives through overrides, making a full-catalog alignment feasible without rebuilding every MUI component as a new wrapper.
- Dedicated Raven wrappers already existed for many catalog entries such as `Autocomplete`, `Checkbox`, `Select`, `Text Field`, `Avatar`, `Chip`, `Alert`, `Dialog`, `Snackbar`, `Accordion`, `Link`, `Menu`, and `Pagination`.
- Several MUI entries remain guidance-first rather than wrapper-first, especially utilities, lab components, and low-level layout primitives.

## Outcome

- Raven now has a canonical MUI v6 catalog layer in Storybook and markdown docs.
- The design system uses exact MUI names while still pointing developers to Raven wrappers or Raven-themed primitives.
- Designers and frontend developers can now browse MUI names, links, guidance tags, and Raven mappings in one place.
- `raven-ui` production build and static Storybook build both completed successfully after the changes.

## Open Questions

- Whether every guidance-first entry should become a dedicated Raven wrapper in a future pass.
- Whether the library should introduce additional package dependencies such as `@mui/lab` for live Masonry/Timeline coverage, or continue documenting them without wrapper components.

## Suggested Next Steps

1. Add dedicated wrapper components only for the highest-value guidance-first items that Raven teams actually use, such as `Button`, `Button Group`, `Bottom Navigation`, `App Bar`, and `Popover`.
2. Add visual preview stories for any guidance-first items that need stronger designer handoff than link-and-note documentation.

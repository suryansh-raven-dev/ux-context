# Session Log: MUI Performance Hardening

**Date**: 2026-03-31
**Application**: Raven / Design System
**Focus**: Harden MUI performance using evidence from the current MUI v6 codebase instead of applying older v4/JSS guidance wholesale

## User-Provided Truth

- Review the linked DEV article about Material UI drawbacks.
- Analyze Raven’s current MUI design-system usage.
- Implement the agreed performance-hardening plan across Storybook/docs and runtime component surfaces.

## What Was Done

1. Added repeatable stress surfaces for the highest-risk MUI patterns:
   - `src/components/data-display/DataTable.stories.tsx`
   - `src/components/inputs/RavenTransferList/RavenTransferList.stories.tsx`
   - `src/components/inputs/RavenAutocomplete/RavenAutocomplete.stories.tsx`
2. Added a dedicated large-data component path:
   - `src/components/data-display/VirtualizedDataTable.tsx`
   - `src/components/data-display/VirtualizedDataTable.test.tsx`
3. Added virtualization support to list-heavy input components:
   - `src/components/inputs/RavenTransferList/RavenTransferList.tsx`
   - `src/components/inputs/RavenAutocomplete/RavenAutocomplete.tsx`
   - `src/components/inputs/RavenAutocomplete/VirtualizedAutocompleteListbox.tsx`
4. Reduced Storybook/docs startup and render cost:
   - lazy-loaded `src/components/foundations/IconGallery.stories.tsx`
   - category-gated and search-limited `src/components/foundations/IconGallery.tsx`
   - replaced the previous giant Autocomplete all-in-one story with a lighter docs page plus a dedicated stress story
5. Applied runtime import/style hygiene:
   - converted remaining runtime `@mui/material` barrel imports to path imports in `src/main.tsx` and the touched runtime components
   - hoisted repeated static `sx` objects in the touched runtime components
6. Updated persistent docs:
   - `README.md`
   - this session log

## Observed Behavior

- Raven is on MUI v6 with a shared `createTheme()` export, so the article’s JSS-specific performance failure mode is not the main risk in this codebase.
- The most credible Raven hotspots were:
  - icon catalog startup/render cost
  - non-virtualized row/item rendering in table-like surfaces
  - large option sets in autocomplete
  - leftover runtime barrel imports and repeated inline style objects
- Storybook now builds with the icon catalog split into:
  - a tiny story entry chunk: `storybook-static/assets/IconGallery.stories-weR_hRJS.js` at about `4.43 kB`
  - a lazy icon-catalog chunk: `storybook-static/assets/IconGallery-BbZdKXtv.js` at about `215.81 kB`
- The new virtualization dependency is emitted as:
  - `storybook-static/assets/react-window-Du4T0vo-.js` at about `7.98 kB`

## Verification

- `npm test`
  - passed: `31` test files, `118` tests
- `npm run build-storybook`
  - passed
- `npm run build`
  - passed after tightening story typing in:
    - `src/components/chat/ChatBubble.stories.tsx`
    - `src/components/chat/ChatInput.stories.tsx`
    - `src/components/data-display/RavenList/RavenList.stories.tsx`
    - `src/components/data-display/RavenTooltip/RavenTooltip.stories.tsx`
    - `src/components/feedback/RavenSnackbar/RavenSnackbar.stories.tsx`
    - `src/components/inputs/RavenCheckbox/RavenCheckbox.stories.tsx`
    - `src/components/inputs/RavenRadioGroup/RavenRadioGroup.stories.tsx`
    - `src/components/inputs/RavenSelect/RavenSelect.stories.tsx`
    - `src/components/layout/PageHeader.stories.tsx`
    - `src/components/surfaces/RavenCard/RavenCard.stories.tsx`
    - `src/components/navigation/TabNavigation.tsx`
    - `src/components/navigation/TabNavigation.stories.tsx`

## Outcome

- Raven now has an explicit large-data path rather than forcing every dataset through non-virtualized MUI `Table` and `List` primitives.
- Storybook startup is better isolated from the icon catalog, and the icon page itself no longer renders every category by default.
- The design system now documents when to use the simple MUI wrappers versus the virtualized path for larger datasets.

## Next Steps

- If further Storybook startup reductions are needed, repeat the lazy-load approach on any remaining large catalog/demo pages.

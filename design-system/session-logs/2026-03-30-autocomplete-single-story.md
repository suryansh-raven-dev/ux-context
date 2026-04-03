# Session Log: Autocomplete Single Story Consolidation

**Date**: 2026-03-30
**Application**: Raven / Design System
**Focus**: Remove Autocomplete sub-tabs and keep one vertically scrollable story

## User-Provided Truth

- Autocomplete still showed many sub-tabs in Storybook.

## What Was Done

1. Inspected `src/components/inputs/RavenAutocomplete/RavenAutocomplete.stories.tsx`.
2. Found 19 named story exports, which caused the sidebar sub-tabs.
3. Converted all variant stories to internal constants.
4. Kept one exported story only:
   - `export const Autocomplete`
5. Reused the existing unified page (`AllVariantsGalleryPage`) as the single story render target.

## Observed Behavior

- Storybook index now contains only:
  - `components-inputs-autocomplete--docs`
  - `components-inputs-autocomplete--autocomplete`

## Outcome

- Autocomplete sub-tabs are removed.
- Only docs plus one consolidated, vertically scrollable Autocomplete story remains.

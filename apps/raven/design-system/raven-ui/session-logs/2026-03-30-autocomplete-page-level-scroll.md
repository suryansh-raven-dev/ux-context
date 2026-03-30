# Session Log: Autocomplete Page-Level Scroll

**Date**: 2026-03-30
**Application**: Raven / Design System
**Focus**: Remove inner vertical scroll from Autocomplete unified story

## User-Provided Truth

- The Autocomplete unified story had a section-level vertical scrollbar.
- Scrolling should happen at page level instead.

## What Was Done

1. Updated `src/components/inputs/RavenAutocomplete/RavenAutocomplete.stories.tsx`.
2. In the `AllVariantsGalleryPage` wrapper `Box`, removed:
   - `maxHeight: '85vh'`
   - `overflowY: 'auto'`
3. Kept spacing/padding intact (`p: 3`) so layout remains unchanged besides scrolling behavior.

## Observed Behavior

- No lint errors after the change.
- Storybook remains responsive.

## Outcome

- Nested scrollbar removed for the Autocomplete section.
- Scroll behavior now follows page-level scrolling.

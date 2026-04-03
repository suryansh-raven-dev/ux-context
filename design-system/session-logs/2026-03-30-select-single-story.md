# Session Log: Select Single Story Consolidation

**Date**: 2026-03-30
**Application**: Raven / Design System
**Focus**: Merge Select sub-tabs into one vertically scrollable page

## User-Provided Truth

- Select still showed sub-tabs (`Default`, `With Label`, `With Helper Text`, `Disabled`, `With Many Options`).
- Needed all of them merged into a single page.

## What Was Done

1. Updated `src/components/inputs/RavenSelect/RavenSelect.stories.tsx`.
2. Converted prior sub-story exports to internal constants:
   - `Default`
   - `WithLabel`
   - `WithHelperText`
   - `Disabled`
   - `WithManyOptions`
3. Added one exported story:
   - `Select`
4. Rendered all prior variants as stacked section cards in one page.

## Observed Behavior

- Storybook entries for Select are now:
  - `Docs`
  - `Select`
- No lint errors after refactor.

## Outcome

- Select sub-tabs are removed.
- One vertically scrollable Select story page now includes all former variants.

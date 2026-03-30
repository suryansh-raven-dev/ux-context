# Session Log: Storybook Code Snippets Default

**Date**: 2026-03-30
**Application**: Raven / Design System
**Focus**: Show code snippets like MUI docs in Raven Storybook

## User-Provided Truth

- Code snippets similar to MUI docs were missing in the Raven design system Storybook.

## What Was Done

1. Updated global Storybook preview settings in `.storybook/preview.tsx`.
2. Added docs configuration to show source snippets by default:
   - `docs.canvas.sourceState = 'shown'`
   - `docs.source.type = 'code'`
3. Restarted Storybook on port `6006`.

## Observed Behavior

- Storybook starts successfully after config changes.
- Global docs behavior is now configured to surface code snippets without requiring manual expand actions.

## Outcome

- Raven Storybook is now configured to display code snippets in a MUI-like docs flow by default.

## Next Steps

1. If needed, add per-story custom `parameters.docs.source.code` for cleaner snippet formatting on complex stories.

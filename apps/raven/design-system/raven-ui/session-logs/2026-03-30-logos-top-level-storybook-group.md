# Session Log: Logos Top-Level Storybook Group

**Date**: 2026-03-30
**Application**: Raven / Design System
**Focus**: Remove the extra `Brand` folder from the Storybook sidebar so `Logos` appears at the top level

## User-Provided Truth

- The `Brand` folder is not required in Storybook navigation.
- `Logos` alone is the desired sidebar grouping.

## What Was Done

1. Updated the Storybook story metadata in `src/components/brand/BrandLogos.stories.tsx`.
2. Changed the story title from `Brand/Logos` to `Logos`.
3. Renamed the story label from `All Brand Logos` to `All Logos`.

## Observed Behavior

- Storybook will now group this page directly under `Logos`.
- The extra `Brand` parent section is removed from the sidebar for this story.

## Outcome

- The Storybook navigation is flatter and matches the requested information architecture.

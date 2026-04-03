# Session Log: Autocomplete Inline Code Snippets

**Date**: 2026-03-30
**Application**: Raven / Design System
**Focus**: Add MUI-style code snippets to consolidated Autocomplete page

## User-Provided Truth

- Code snippets were missing on the Autocomplete page, unlike MUI documentation examples.

## What Was Done

1. Updated `src/components/inputs/RavenAutocomplete/RavenAutocomplete.stories.tsx`.
2. Added a reusable inline snippet component:
   - `SectionCodeSnippet`
   - renders a collapsible "Show code" block under each variant section.
3. Added curated code samples for each Autocomplete section via `AUTOCOMPLETE_SNIPPETS`.
4. Attached snippet blocks to each section in the single unified Autocomplete story page.

## Observed Behavior

- The consolidated Autocomplete page now includes a code snippet block per section.
- Snippets are shown inline in-page (collapsible) to mirror MUI-style preview + source flow.
- Lint checks pass for the updated story file.

## Outcome

- Users can see relevant implementation code without switching tabs or relying only on Storybook's single global source panel for the full-page story.

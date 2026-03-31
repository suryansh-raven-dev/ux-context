# Session Log: Accordion Header Height Consistency

**Date**: 2026-03-31
**Application**: Raven / Design System
**Focus**: Keep the accordion summary header the same height when expanded and collapsed

## User-Provided Truth

- The accordion header grew taller in the expanded state.
- The expanded header height needed to match the closed header height.

## What Was Done

1. Updated `src/components/surfaces/RavenAccordion/RavenAccordion.tsx`.
2. Added explicit `AccordionSummary` sizing rules:
   - fixed root `minHeight` at `48px`
   - fixed expanded root `minHeight` at `48px`
3. Used `slotProps.content.sx` to keep the summary content margin at `12px 0` in both collapsed and expanded states.
4. Added `src/components/surfaces/RavenAccordion/RavenAccordion.test.tsx` to verify the summary keeps the same height spacing after expansion.

## Observed Behavior

- The accordion summary no longer jumps to MUI's larger expanded header height.
- Expanded and collapsed headers now keep the same vertical size.

## Verification

- `ReadLints` returned no diagnostics for the touched accordion files.
- `npm run test -- src/components/surfaces/RavenAccordion/RavenAccordion.test.tsx` passed.

## Outcome

- Accordion headers now remain visually stable between collapsed and expanded states.
- A focused regression test now covers the sizing behavior.

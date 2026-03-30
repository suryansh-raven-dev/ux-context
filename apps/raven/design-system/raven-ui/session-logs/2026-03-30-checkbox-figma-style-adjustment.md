# Session Log: Checkbox Figma Style Adjustment

**Date**: 2026-03-30
**Application**: Raven / Design System
**Focus**: Keep MUI default checkbox sizing while preserving Figma-like background treatment

## User-Provided Truth

- Requested not to scale text.
- Wanted only background color treatment and icon style on top of MUI default checkbox.

## What Was Done

1. Updated `src/components/inputs/RavenCheckbox/RavenCheckbox.css`.
2. Removed over-customized Figma variant rules that changed default sizing:
   - removed custom label typography sizing/weight overrides
   - removed custom checkbox icon size overrides
   - removed custom spacing/margin overrides for icon-label layout
3. Kept requested enhancements:
   - card-like row background with rounded corners for showcase rows
   - checked-row background tint
   - rounded MUI checkbox icon style from component-level icon configuration

## Observed Behavior

- MUI default typography and control sizing are preserved.
- Checkbox preview still has Figma-like row backgrounds and rounded icon treatment.
- No lint errors after changes.

## Outcome

- Checkbox styling now follows the requested scope: background + icon style only, without text scaling.

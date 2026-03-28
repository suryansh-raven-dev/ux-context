# Session: Storybook Sidebar Restructure to Match MUI v6 Docs

**Date**: 2026-03-27
**Scope**: Raven Design System — Storybook navigation reorganization

## What Was Done

Restructured the entire Storybook sidebar navigation to match the MUI v6 documentation layout exactly.

### Changes Made

1. **Renamed all 53 story file titles** to follow MUI v6 naming conventions:
   - Dropped "Raven" prefix from MUI-equivalent component names (e.g., `RavenButton` → `Button`)
   - Added `Components/` prefix for MUI-equivalent components
   - Added `Raven/` prefix for product-specific components
   - Used human-readable names with spaces (e.g., `RadioGroup` → `Radio Group`)

2. **Organized into MUI v6 category structure**:
   - `Components/Inputs/` — Autocomplete, Button, Checkbox, Radio Group, Select, Switch, Text Field
   - `Components/Data Display/` — Avatar, Badge, Chip, Divider, List, Table, Tooltip, Typography
   - `Components/Feedback/` — Alert, Dialog, Circular Progress, Linear Progress, Skeleton, Snackbar
   - `Components/Surfaces/` — Accordion, Card
   - `Components/Navigation/` — Breadcrumbs, Link, Menu, Pagination, Stepper, Tabs
   - `Components/All Components` — MUI v6 catalog

3. **Raven-specific components** placed under `Raven/` root:
   - `Raven/Layout/` — App Shell, Mobile App Shell, Page Header, Side Navigation
   - `Raven/Navigation/` — Org Switch Dropdown, Status Filter Bar, View Toggle
   - `Raven/Data Display/` — Diff Card, Summary Card, Status Transition Card
   - `Raven/Feedback/` — Activity Drawer, Activity Timeline, Recommendation Panel
   - `Raven/Forms/` — Action Button Group, Comment Input, Filter Controls, Incident Form
   - `Raven/Chat/` — Chat Bubble, Chat Input, Gradient Title
   - `Raven/Actions/` — Export Button
   - `Raven/Brand/` — Logos

4. **Preserved categories**:
   - `Foundations/Colors` — design tokens

5. **Configured sidebar ordering** in `.storybook/preview.tsx` using Storybook's `storySort.order` to enforce MUI v6 ordering within each category.

### Notable Decisions

- `RavenDivider` moved from `Surfaces/` to `Components/Data Display/Divider` (matching MUI v6 placement)
- `StatusStepper` moved to `Components/Navigation/Stepper` (matching MUI v6 placement)
- `DataTable` renamed to `Table` under `Components/Data Display/`
- Progress components kept separate (`Circular Progress`, `Linear Progress`) rather than merged

### Files Modified

- 53 `*.stories.tsx` files — title property updated
- `.storybook/preview.tsx` — added `storySort.order` configuration

## Confirmed

- Storybook 8.6.18 starts without errors on port 6007
- All story files load with correct titles
- Sidebar ordering matches MUI v6 documentation structure

## Next Steps

- Verify sidebar visually at http://localhost:6007

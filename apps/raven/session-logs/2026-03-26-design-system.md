# Session Log: Near-Miss Design System Documentation

**Date**: 2026-03-26
**Application**: Raven (Near-Miss Incident Reporting Tool)
**Focus**: Figma analysis and MUI v6 design system documentation

## What Was Done

1. Analyzed 7 Figma screens from the Near-Miss Incident Reporting Tool (file `cKJAKEFahN53w0PJ5d88pr`):
   - Analysis Dashboard (2 variants)
   - Incident Activity Drawer (expanded + collapsed)
   - All Recommendations page
   - Investigations page
   - Report Incident form

2. Extracted comprehensive design tokens:
   - Color palette (brand purples, status colors, backgrounds, borders)
   - Typography scale (Source Sans 3, 12 type styles)
   - Spacing grid (4px base, 8/12/16/24/32)
   - Border radii (8/12/24/50/100px)
   - Shadow/elevation values

3. Documented 15 reusable MUI v6 components with TypeScript code:
   - AppShell, SideNavigation, PageHeader, TabNavigation, StatusFilterBar
   - SummaryCard, DataTable, ViewToggle, FilterControls
   - ActivityDrawer, ActivityTimelineItem, DiffCard
   - IncidentForm, ActionButtonGroup, ExportButton

4. Mapped 4 page-level layout patterns: Dashboard, List-Detail, Form, Drilldown

5. Catalogued 30+ Material Icons with MUI import names

6. Provided complete MUI v6 `createTheme()` configuration ready for copy-paste

## What Was Found

- The design system is built on Material Design with heavy customization via the purple (#4A148C) brand color
- Figma components reference MUI component documentation links (Button, Chip, Tab, TextField, Table, Divider, Icon, IconButton, Link)
- Primary font is "Source Sans 3" (not the default Roboto), requiring @fontsource setup
- The activity timeline with color-coded diff cards (Updates/Added/Removed) is a custom pattern not in standard MUI
- The page background (#FCF6FE) is a very light purple tint, giving the app a distinctive brand feel
- View toggle (Table/Chart, Chat View/Report View) uses a custom pill-shaped segmented control rather than standard MUI ToggleButtonGroup

## Key Decisions

- Mapped `purple/darken-4` (#4A148C) to both `palette.primary.main` and `palette.secondary.main` since the app uses a single-brand-color approach
- Added custom `palette.purple` with 5 shades for component-level color tokens
- Extended MUI Typography with `body1Bold` and `tableHeader` custom variants
- Extended `TypeBackground` with `form` for the report form card background

## Artifacts Created

| File | Content |
|------|---------|
| `apps/raven/design-system/near-miss-components.md` | Full design system documentation (~1000 lines) |
| `apps/raven/product-summary.md` | Updated with design system artifact reference |
| `apps/raven/session-logs/2026-03-26-design-system.md` | This session log |

## Second Pass (same session)

Analyzed 7 additional Figma screens: Chat View desktop, Reports (Operator + Safety Manager), Mobile Landing/Chat/Keyboard, Recommendation Detail.

### New components documented (Section 6):
- **ChatInput** (6.1) — pill-shaped AI input with camera, mic, send icons
- **ChatBubble** (6.2) — user (purple right) and AI (grey left) message bubbles
- **GradientTitle** (6.3) — purple-to-indigo gradient text hero title
- **StatusStepper** (6.4) — vertical workflow stepper (Pending → In Progress → In Review → Done)
- **RecommendationDetailPanel** (6.5) — collapsible right sidebar with metadata
- **BreadcrumbNav** (6.6) — parent > child with inline status chip
- **CommentInput** (6.7) — multi-line comment with attach + send
- **StatusTransitionCard** (6.8) — "from [old] to [new]" with chips
- **OrgSwitchDropdown** (6.9) — gradient avatar + user info
- **MobileAppShell** (6.10) — 402px viewport with blur header

### New patterns:
- Detail-with-Side-Panel Pattern (3.5)
- Chat-Based Reporting Pattern (3.6)
- Role-Based Sidebar Variants

### New design tokens:
- Gradients: Raven AI Accent, Org Avatar
- Typography: h5 (24px/32px)
- Shadows: chatInput, titleCard
- Colors: #FAFAFA, #DEDCEA, rgba(0,0,0,0.12)

## Third pass (2026-03-26) — raven-ui data-display

Implemented five data-display components under `apps/raven/design-system/raven-ui/src/components/data-display/` with `.tsx`, `.css`, `.stories.tsx`, and `.test.tsx` each:

- **SummaryCard** — bordered MUI Card, stats row with colored dots, closure rate / trend coloring, optional `CardActionArea` + chevron
- **DataTable** — generic paginated table with `StatusCell` helper and optional row click + chevron column
- **DiffCard** — updates / added / removed variants with field-level diff layout
- **StatusStepper** — vertical stepper with purple vs outlined dots and connector states
- **StatusTransitionCard** — “Status updated from [chip] to [chip]” with outlined small chips

Tests use Vitest + Testing Library; stories use CSF3. **Note:** `npm test` was not executed in this environment (Node/npm unavailable in the agent shell); run locally to verify.

## Fourth pass (2026-03-26) — raven-ui chat components

Implemented three chat-related components under `apps/raven/design-system/raven-ui/src/components/chat/` (12 files: `.tsx`, `.css`, `.stories.tsx`, `.test.tsx` each):

- **ChatInput** — pill container (`#FAFAFA`, purple shadow), `InputBase`, `PhotoCamera` + single-line mic/send or multiline attach + bottom mic/send, active border when text entered
- **ChatBubble** — user vs AI styling, `role="log"` + `aria-label` for sender, body1 + caption timestamp
- **GradientTitle** — h4 gradient text via `background-clip: text`, `role="heading"` + `aria-level={1}`, centered

**Note:** Run `npm test` and `npm run storybook` locally; Node/npm was unavailable in the agent shell.

## Fifth pass (2026-03-26) — raven-ui forms + actions

Implemented five components under `apps/raven/design-system/raven-ui/` (20 files: `.tsx`, `.css`, `.stories.tsx`, `.test.tsx` each):

| Area | Component | Path |
|------|-----------|------|
| Forms | FilterControls | `src/components/forms/FilterControls` |
| Forms | IncidentForm | `src/components/forms/IncidentForm` |
| Forms | ActionButtonGroup | `src/components/forms/ActionButtonGroup` |
| Forms | CommentInput | `src/components/forms/CommentInput` |
| Actions | ExportButton | `src/components/actions/ExportButton` |

Tests use Vitest + Testing Library + user-event; components wrapped in `ThemeProvider` + `ravenNearMissTheme`. **Note:** `npm test` was not executed in this environment (Node/npm unavailable in the agent shell); run locally to verify.

## Next Steps

1. Implement the P0 components (AppShell, SideNavigation, PageHeader, TabNavigation, DataTable) in the codebase
2. Set up the theme file and font imports
3. Build page compositions using documented patterns
4. Validate component implementations against Figma screenshots
5. Add Storybook stories for each component

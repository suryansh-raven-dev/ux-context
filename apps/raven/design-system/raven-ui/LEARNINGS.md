# Raven Design System — Complete Learnings Compendium

## 1. Project Overview

| Field | Detail |
|---|---|
| **Name** | Raven Near-Miss Design System (`raven-ui`) |
| **Purpose** | Component library for the Raven Near-Miss Incident Reporting Tool, built from Figma designs |
| **Figma Source** | File `cKJAKEFahN53w0PJ5d88pr` (14 screens analyzed) |
| **Version** | 0.1.0 (private) |
| **Active Development** | March 21 – March 31, 2026 (50 documented sessions) |

---

## 2. Technology Stack

| Layer | Technology | Version |
|---|---|---|
| UI Framework | React | 18.3.x |
| Language | TypeScript | 5.7.x |
| Component Library | MUI (Material UI) | v6.4.8 |
| Styling | MUI `createTheme` + plain CSS (BEM with `raven-` prefix) | — |
| Font | Source Sans 3 (via `@fontsource`) | 5.1.x |
| Bundler | Vite | 6.2.x |
| Docs | Storybook 8 (React-Vite) + a11y addon | 8.6.18 |
| Testing | Vitest + React Testing Library + jsdom | Vitest 2.1.x, RTL 16.3.x |
| Virtualization | react-window | 2.2.7 |
| Emotion | @emotion/react + @emotion/styled | 11.14.x |

---

## 3. Design Tokens

### 3.1 Color Palette

CSS custom properties defined in `src/global.css`.

#### Brand / Primary (Purple family)

| Token | Value | Usage |
|---|---|---|
| `--raven-purple-900` | `#4A148C` | Primary, CTA fills, checked states |
| `--raven-purple-800` | `#6A1B9A` | Hover states |
| `--raven-purple-300` | `#CE93D8` | Light accents, switch tracks |
| `--raven-purple-200` | `#E1BEE7` | Borders, selected backgrounds |
| `--raven-purple-100` | `#F3E5F5` | Hover backgrounds, skeleton fills, tag chips |

#### Backgrounds

| Token | Value | Usage |
|---|---|---|
| `--raven-bg-page` | `#FCF6FE` | Light purple tinted page background (distinctive brand feel) |
| `--raven-bg-paper` | `#FFFFFF` | Card and surface backgrounds |
| `--raven-bg-form` | `#FDFAFE` | Form container backgrounds |
| `--raven-bg-neutral` | `#F5F5F5` | Neutral container backgrounds |
| `--raven-bg-input` | `#FAFAFA` | Input field backgrounds |

#### Text

| Token | Value |
|---|---|
| `--raven-text-primary` | `rgba(0, 0, 0, 0.87)` |
| `--raven-text-secondary` | `rgba(0, 0, 0, 0.6)` |
| `--raven-text-disabled` | `rgba(0, 0, 0, 0.42)` |

#### Status Colors

| Status | Main | Dark | Light |
|---|---|---|---|
| Green (Success) | `#4CAF50` | `#1B5E20` | `#E8F5E9` |
| Red (Error) | `#F44336` | `#B71C1C` | `#FFEBEE` |
| Orange (Warning) | `#FF9800` | `#FF6F00` | `#FFF8E1` |
| Blue (Info) | `#0288D1` | `#01579B` | `#E1F5FE` |

#### Borders

| Token | Value |
|---|---|
| `--raven-border-default` | `#E0E0E0` |
| `--raven-border-brand` | `#F3E5F5` |
| `--raven-border-mobile-header` | `#DEDCEA` |

#### Gradients

| Token | Value |
|---|---|
| `--raven-gradient-accent` | `linear-gradient(-14deg, rgb(191,64,174) 0%, rgb(107,64,191) 50%, rgb(78,64,191) 100%)` |
| `--raven-gradient-org-avatar` | `linear-gradient(to bottom, #0CDACC, #311B92)` |

#### Shadows

| Token | Value |
|---|---|
| `--raven-shadow-brand` | `0px 2px 16px rgba(74, 20, 140, 0.12)` |
| `--raven-shadow-chat-input` | `0px 0px 8px 4px rgba(167, 64, 179, 0.08)` |
| `--raven-shadow-title-card` | `0px 2px 8px rgba(63, 81, 181, 0.04)` |
| `--raven-shadow-drawer` | `0px 9px 46px rgba(0,0,0,0.12), 0px 24px 38px rgba(0,0,0,0.14), 0px 11px 15px rgba(0,0,0,0.2)` |

### 3.2 Spacing & Radii

| Token | Value | Usage |
|---|---|---|
| `--raven-spacing` | `4px` | Base spacing unit |
| `--raven-radius-default` | `8px` | Inputs, cards, accordions |
| `--raven-radius-drawer` | `12px` | Drawer corners |
| `--raven-radius-container` | `24px` | Cards, dialogs |
| `--raven-radius-pill` | `50px` | Buttons, chips, pagination |
| `--raven-radius-toggle` | `100px` | Toggle controls |

### 3.3 Typography (17 variants in theme)

- **Font family:** `"Source Sans 3", "Roboto", "Helvetica", "Arial", sans-serif`
- Figma uses Roboto but Raven intentionally remaps to Source Sans 3.
- **Custom variants:** `body1Bold` (600 weight body1), `tableHeader` (600 weight, 14px, tight tracking).
- h1–h3 defined for completeness but not observed in actual Near-Miss Figma screens.
- Custom variants registered via MUI module augmentation (`TypographyVariants`, `TypographyPropsVariantOverrides`).

| Variant | Size | Weight | Line Height | Extras |
|---|---|---|---|---|
| h1 | 6rem | 300 | 1.167 | letterSpacing: -1.5px |
| h2 | 3.75rem | 300 | 1.2 | letterSpacing: -0.5px |
| h3 | 3rem | 400 | 1.167 | — |
| h4 | 2.125rem | 600 | 40px | letterSpacing: 0.25px |
| h5 | 1.5rem | 600 | 32px | — |
| h6 | 1.25rem | 600 | 32px | letterSpacing: 0.15px |
| subtitle1 | 1rem | 400 | 1.75 | letterSpacing: 0.15px |
| subtitle2 | 0.875rem | 400 | 22px | letterSpacing: 0.1px |
| body1 | 1rem | 400 | 1.75 | letterSpacing: 0.15px |
| body1Bold | 1rem | 600 | 1.75 | letterSpacing: 0.15px |
| body2 | 0.875rem | 400 | 20px | letterSpacing: 0.25px |
| button | 0.875rem | 500 | 24px | uppercase, letterSpacing: 0.4px |
| caption | 0.75rem | 400 | 1 | letterSpacing: 0.4px |
| overline | 0.75rem | 600 | 32px | uppercase, letterSpacing: 2px |
| tableHeader | 0.875rem | 600 | 1 | letterSpacing: 0.17px |

---

## 4. MUI Theme (`ravenNearMissTheme`)

The theme at `src/theme/ravenNearMissTheme.ts` is a comprehensive `createTheme()` configuration with **40+ component overrides**.

| Component | Override |
|---|---|
| `MuiButton` | Pill radius (50px), uppercase, elevation on contained, no elevation on text/outlined |
| `MuiButtonGroup` | Pill radius, soft purple borders (`#F3E5F5`) |
| `MuiChip` | Pill radius |
| `MuiCard` | Large radius (24px) |
| `MuiDialog` | Large radius (24px) paper |
| `MuiDrawer` | Top-left/bottom-left 12px radius |
| `MuiTab` | Source Sans 3, 15px, 600 weight, uppercase |
| `MuiTabs` | 4px indicator height with pill top corners |
| `MuiTableCell` | 600 weight, 14px header cells |
| `MuiTextField` / `MuiOutlinedInput` | 8px radius, purple focus border |
| `MuiCheckbox` / `MuiRadio` | Purple checked state (`#4A148C`) |
| `MuiSwitch` | Purple checked state, light purple track |
| `MuiSlider` | Purple accent, 20px thumb |
| `MuiRating` | Purple fill and hover |
| `MuiAutocomplete` | Full-width default, rounded paper with brand shadow, purple-tinted hover/selected, pill-shaped tags |
| `MuiAccordion` | 8px radius, outlined border, no shadow, no divider `:before` |
| `MuiAppBar` | White background, no shadow, bottom border only |
| `MuiBackdrop` | Light purple tint (`rgba(74,20,140,0.14)`) with 2px blur |
| `MuiPaginationItem` | Pill shape, purple selected state |
| `MuiMenu` / `MuiMenuItem` | 12px paper radius, purple hover backgrounds |
| `MuiAlert` | 8px radius, semantic background fills |
| `MuiLinearProgress` | 4px radius, 6px height, purple-100 track |
| `MuiCircularProgress` | Purple color |
| `MuiSkeleton` | Purple-100 tinted, 8px radius |
| `MuiSnackbarContent` | 8px radius |
| `MuiLink` | Purple color, Source Sans 3 |
| `MuiList` / `MuiListItemButton` | 8px padding, rounded hover |
| `MuiBottomNavigation` | White bg, 24px radius, purple-100 border |
| `MuiFab` | Purple fill, white icon, elevation scale |
| `MuiSpeedDial` | Purple fab, white action fabs |
| `MuiToggleButton` / `MuiToggleButtonGroup` | Pill radius, Source Sans 3 |
| `MuiStepIcon` | Purple active/completed icons |
| `MuiStepLabel` | Source Sans 3 |
| `MuiBreadcrumbs` | Source Sans 3, 14px |
| `MuiPaper` | 8px default radius |
| `MuiTooltip` | Dark bg, Source Sans 3, 12px, 4px radius |
| `MuiAvatar` | Source Sans 3, 1rem, 600 weight |
| `MuiBadge` | Source Sans 3, 12px, 600 weight |
| `MuiInputLabel` / `MuiFormHelperText` | Source Sans 3 |
| `MuiTypography` | Source Sans 3 root, custom `variantMapping` |

**Performance rule:** Keep `ravenNearMissTheme` as a shared singleton — never create themes inside render paths.

---

## 5. Complete Component Inventory

### 5.1 Layout (4 components)

| Component | Path | Props |
|---|---|---|
| `AppShell` | `components/layout/AppShell` | `sidebar`, `children` |
| `SideNavigation` | `components/layout/SideNavigation` | `activePath`, `onNavigate` |
| `PageHeader` | `components/layout/PageHeader` | `title`, `subtitle?`, `onBack?`, `actions?` |
| `MobileAppShell` | `components/layout/MobileAppShell` | `title`, `headerActions?`, `children` |

### 5.2 Navigation (8 components)

| Component | Path | Props |
|---|---|---|
| `TabNavigation` | `components/navigation/TabNavigation` | `tabs`, `activeIndex`, `onChange`, `appearance` (standard/scrollable/fullWidth/centered/vertical/segmented/rail), icon/wrapped-label support |
| `StatusFilterBar` | `components/navigation/StatusFilterBar` | `filters`, `activeIndex`, `onChange` |
| `ViewToggle` | `components/navigation/ViewToggle` | `options`, `value`, `onChange` |
| `BreadcrumbNav` | `components/navigation/BreadcrumbNav` | `parentLabel`, `currentId`, `status`, `onBack` |
| `OrgSwitchDropdown` | `components/navigation/OrgSwitchDropdown` | `initials`, `name`, `role?`, `gradientColors?` |
| `RavenPagination` | `components/navigation/RavenPagination` | Pill-shaped pagination with purple selected state |
| `RavenMenu` | `components/navigation/RavenMenu` | Compact rounded context menu |
| `RavenLink` | `components/navigation/RavenLink` | Purple-accented navigation link |

### 5.3 Data Display (12 components)

| Component | Path | Props |
|---|---|---|
| `SummaryCard` | `components/data-display/SummaryCard` | `icon`, `title`, `stats`, `closureRate`, `departments`, `trend`, `onClick?` |
| `DataTable` | `components/data-display/DataTable` | `columns`, `rows`, `rowKey`, `onRowClick?`, pagination props |
| `VirtualizedDataTable` | `components/data-display/VirtualizedDataTable` | `columns`, `rows`, `rowKey`, `height?`, `rowHeight?`, `overscanCount?`, `onRowClick?` |
| `DiffCard` | `components/data-display/DiffCard` | `type` (updates/added/removed), `changes` |
| `StatusStepper` | `components/data-display/StatusStepper` | `steps` (label, completed?, active?) |
| `StatusTransitionCard` | `components/data-display/StatusTransitionCard` | `fromStatus`, `toStatus` |
| `RavenAvatar` | `components/data-display/RavenAvatar` | Initials-based avatar with semantic colors |
| `RavenBadge` | `components/data-display/RavenBadge` | Compact notification badge |
| `RavenChip` | `components/data-display/RavenChip` | Pill chips for status, filters, metadata |
| `RavenTooltip` | `components/data-display/RavenTooltip` | Dark, compact tooltip |
| `RavenList` | `components/data-display/RavenList` | Padded list with rounded hover states |
| `RavenTypography` | `components/data-display/RavenTypography` | Full 17-variant type system with Raven colors |

### 5.4 Feedback (9 components)

| Component | Path | Props |
|---|---|---|
| `ActivityDrawer` | `components/feedback/ActivityDrawer` | `open`, `onClose`, `children`, `width?` |
| `ActivityTimelineItem` | `components/feedback/ActivityTimelineItem` | `user`, `timestamp`, `actionLabel`, `expandedContent?`, `showConnector?` |
| `RecommendationPanel` | `components/feedback/RecommendationPanel` | `incidentId`, `sections` |
| `RavenAlert` | `components/feedback/RavenAlert` | Semantic alert banners (4 severity levels) |
| `RavenDialog` | `components/feedback/RavenDialog` | Large-radius modal dialog |
| `RavenSnackbar` | `components/feedback/RavenSnackbar` | Floating notification with severity states |
| `RavenLinearProgress` | `components/feedback/RavenLinearProgress` | Purple-tinted progress bar |
| `RavenCircularProgress` | `components/feedback/RavenCircularProgress` | Purple spinner |
| `RavenSkeleton` | `components/feedback/RavenSkeleton` | Purple-tinted loading placeholders |

### 5.5 Surfaces (3 components)

| Component | Path | Props |
|---|---|---|
| `RavenAccordion` | `components/surfaces/RavenAccordion` | Outlined accordion with fixed-height 48px headers |
| `RavenCard` | `components/surfaces/RavenCard` | 24px radius content container |
| `RavenDivider` | `components/surfaces/RavenDivider` | Soft neutral separator |

### 5.6 Inputs (12 components)

| Component | Path | Props |
|---|---|---|
| `RavenButton` / `RavenIconButton` | `components/inputs/RavenButton` | Pill buttons with loading state support |
| `RavenButtonGroup` | `components/inputs/RavenButtonGroup` | Grouped pill buttons with soft purple borders |
| `RavenTextField` | `components/inputs/RavenTextField` | Outlined field, 8px corners, purple focus |
| `RavenSelect` | `components/inputs/RavenSelect` | Outlined select with compact menu |
| `RavenCheckbox` | `components/inputs/RavenCheckbox` | Purple checked state with MUI rounded icons |
| `RavenRadioGroup` | `components/inputs/RavenRadioGroup` | Vertical radio group with purple checked state |
| `RavenSwitch` | `components/inputs/RavenSwitch` | Binary toggle with purple accent |
| `RavenAutocomplete` | `components/inputs/RavenAutocomplete` | Full-featured autocomplete with virtualized path |
| `RavenTransferList` | `components/inputs/RavenTransferList` | Dual-list transfer with built-in virtualization |
| `RavenSlider` | themed | Purple-accented range slider |
| `RavenRating` | themed | Purple-filled rating stars |
| `RavenFab` | themed | Floating action button |

### 5.7 Forms (4 components)

| Component | Path | Props |
|---|---|---|
| `FilterControls` | `components/forms/FilterControls` | `departments`, `selectedDepartment`, `dateRange`, `searchQuery?`, etc. |
| `IncidentForm` | `components/forms/IncidentForm` | Self-contained incident reporting form (Figma-aligned) |
| `ActionButtonGroup` | `components/forms/ActionButtonGroup` | `onSaveDraft`, `onClearAll`, `onSubmit`, `submitDisabled?` |
| `CommentInput` | `components/forms/CommentInput` | `value`, `onChange`, `onSubmit` |

### 5.8 Chat (3 components)

| Component | Path | Props |
|---|---|---|
| `ChatInput` | `components/chat/ChatInput` | `value`, `onChange`, `onSend`, `placeholder?`, `multiline?` |
| `ChatBubble` | `components/chat/ChatBubble` | `variant` (user/ai), `children`, `timestamp` |
| `GradientTitle` | `components/chat/GradientTitle` | `children` (extends TypographyProps) |

### 5.9 Actions (1 component)

| Component | Path | Props |
|---|---|---|
| `ExportButton` | `components/actions/ExportButton` | `onExport` (pdf/csv/xlsx) |

### 5.10 Brand & Catalog (2 components)

| Component | Path |
|---|---|
| `BrandLogos` | `components/brand/BrandLogos` |
| `MuiV6Catalog` | `components/catalog/MuiV6Catalog` |

**Total: ~55+ components** with typed props, exports, and Storybook coverage.

---

## 6. MUI v6 Catalog Coverage (43 components mapped)

The catalog at `src/catalog/muiV6Catalog.ts` maps every MUI v6 component to one of three support levels.

### Available (Raven wrapper exists)

Autocomplete, Button, Checkbox, Radio Group, Select, Switch, Text Field, Avatar, Badge, Chip, Divider, List, Table, Tooltip, Typography, Alert, Dialog, Progress, Skeleton, Snackbar, Accordion, Card, Breadcrumbs, Drawer, Link, Menu, Pagination, Stepper, Tabs, CSS Baseline

### Themed (use MUI primitive with `ravenNearMissTheme`)

Button Group, FAB, Rating, Slider, Toggle Button, Backdrop, App Bar, Bottom Navigation, Paper, Speed Dial, Modal, Popover

### Guidance only (documented but not wrapped)

Transfer List, Icons, Material Icons, Box, Container, Grid, Grid v2, Stack, Image List, Masonry, Timeline, Click-Away Listener, No SSR, Popper, Portal, Textarea Autosize, Transitions, useMediaQuery

Each catalog entry includes: name, category, MUI docs URL, guideline tag, Raven support level, Raven equivalent name, and usage notes. Rich entries also include: summary, import paths, composition notes, key points, accessibility guidance, and API links.

---

## 7. Storybook Architecture

### 7.1 Configuration

| Setting | Value |
|---|---|
| Framework | `@storybook/react-vite` |
| Stories glob | `../src/**/*.stories.@(ts\|tsx)` |
| Addons | essentials, a11y |
| Preview wrapper | `ThemeProvider` with `ravenNearMissTheme` + `CssBaseline` |
| Code snippets | Shown by default (`docs.canvas.sourceState = 'shown'`) |
| Port | 6006 |

### 7.2 Sidebar Organization

```
Components/
  Inputs/
    Autocomplete, Button, Button Group, Checkbox, FAB,
    Radio Group, Rating, Select, Slider, Switch,
    Text Field, Toggle Button, Transfer List
  Data Display/
    Avatar, Badge, Chip, Divider, Icons, List, Table,
    Tooltip, Typography, Stepper, Diff Card,
    Status Transition Card, Summary Card
  Feedback/
    Activity Drawer, Activity Timeline, Alert,
    Circular Progress, Dialog, Linear Progress,
    Recommendation Panel, Skeleton, Snackbar
  Surfaces/
    Accordion, App Bar, Card, Paper
  Navigation/
    Breadcrumbs, Drawer, Link, Menu, Pagination,
    Speed Dial, Tabs
  Layout/
    Box, Container, Grid, Grid v2, Image List, Stack
Raven/
  Layout, Navigation, Forms, Chat, Actions
Logos
Catalog/MUI v6
```

### 7.3 Story Patterns

- **Single scrollable page pattern:** Most components use one exported story rendering all variants in a vertical scroll page (no sub-tabs).
- **Shared `StorybookPage.tsx`:** Layout helper for consistent page structure.
- **Code snippets:** Shown by default in docs, with collapsible `SectionCodeSnippet` for inline examples.
- **`autodocs` disabled** on custom pages to prevent unwanted extra Docs entries.

---

## 8. Performance Guardrails

### Rules

1. **Theme singleton:** Never create themes inside render paths — use `ravenNearMissTheme` as shared singleton.
2. **Path imports:** Use `@mui/material/Button` not `@mui/material` barrel imports to reduce dev-time module cost.
3. **`sx` prop discipline:** Reserve for one-off adjustments; reused patterns should use CSS classes or hoisted style constants.
4. **Virtualization paths:**
   - `DataTable` for small/paginated datasets; `VirtualizedDataTable` for large row counts (react-window).
   - `RavenTransferList` auto-switches to virtualized mode at high item counts; can be forced with `virtualized` prop.
   - `RavenAutocomplete` exposes `virtualized` path via `VirtualizedAutocompleteListbox` for large flat option sets.
5. **Icon catalog:** Lazy-loaded in Storybook and category-gated so docs shell doesn't eagerly render all icons (4.43kB entry + 215.81kB lazy chunk).
6. **react-window footprint:** Only 7.98kB added.

### Performance Stress Surfaces (in Storybook)

- `Components/Data Display/Table > Performance Stress`
- `Components/Inputs/Transfer List > Transfer List`
- `Components/Inputs/Autocomplete > Large Option Set Stress`
- `Components/Icons > All Icons`

---

## 9. Testing

| Metric | Value |
|---|---|
| Total unit tests | 118 |
| Framework | Vitest + React Testing Library + jsdom |
| Test setup | `src/test-setup.ts` |

### Key test areas

| Component | Tests |
|---|---|
| RavenButton | 14 tests |
| RavenTypography | 23 tests |
| TabNavigation | Icon usage, aria labels, segmented appearance, rail appearance |
| VirtualizedDataTable | Virtualization behavior |
| RavenAccordion | Header height stability (regression test) |
| RavenButtonGroup | Component behavior |
| RavenCheckbox | States and styling |
| RavenTextField | Behavior tests |
| ravenNearMissTheme | Theme structure validation |

Test files are co-located with components as `*.test.tsx` and `*.behavior.test.tsx`.

---

## 10. Figma Alignment Learnings

### Segmented Tabs (6 iterations)

Went through spec alignment → cropping fix → recheck → visual tuning → font size fix → usability resize. Final balance: Figma fidelity without oversized mockup appearance.

| Property | Value |
|---|---|
| Container background | `#F5F5F5` |
| Container border | `#F3E5F5` |
| Container padding | 4px |
| Pill height | 40px |
| Selected fill | `#E1BEE7` |
| Selected border | `#CE93D8` |
| Font | Source Sans 3, 15px, 600 weight |

### Checkbox (5 sessions)

- MUI rounded icons (`CheckBoxRounded`, `CheckBoxOutlineBlankRounded`, `IndeterminateCheckBoxRounded`)
- Dedicated `raven-checkbox--figma` CSS class for card-like rows
- 8px row radius (not 28px)
- Top-left content alignment
- Unified icon color to `var(--raven-text-primary)`
- Keep MUI default sizing — don't over-customize text scales

### Accordion

- Fixed-height 48px headers in both expanded/collapsed states
- Explicit `minHeight` + margin overrides solve the MUI default height jump
- Regression test added for sizing behavior

### Vertical Tabs Rail

- Figma-inspired near-miss navigation rail with icon-first layout
- 40px row height, 14px labels, purple-tinted selected state
- Interactive expand/collapse with chevron rotation
- Analysis at root level, not nested under Incidents
- Rail styling reusable through shared `TabNavigation` API

### IncidentForm

- Figma-aligned version vs old layout issue traced to Cursor git worktrees
- Storybook compiles from whichever `cwd` the terminal uses

### Input Notch Fix

CSS override in `global.css` forces `legend` font to `Source Sans 3` at `calc(13px * 0.75)` so the notch width matches the shrunk label exactly. MUI's default legend uses larger font metrics creating a visible gap.

---

## 11. Storybook Debugging & Infrastructure Learnings

| Issue | Root Cause | Fix |
|---|---|---|
| Storybook not loading | Missing `.storybook/main.ts` | Restored config files, aligned all packages to 8.6.18 |
| `index.json` indexing errors | Complex TypeScript assertions in story files tripped Storybook's acorn parser | Simplified internal `renderStory()` helpers |
| Stale port 6006 | Previous Storybook processes holding the port | Kill stale processes before restart |
| Wrong component version | Cursor git worktrees had old files | Sync files to all 4 worktrees |
| `@mui/icons-material` warning | Storybook package metadata quirk | Non-blocking; ignored |
| Unwanted Docs sub-tabs | `autodocs` meta tag generating extra entries | Removed `autodocs` from custom pages |

---

## 12. Git & GitHub Workflow

| Item | Detail |
|---|---|
| Repository | GitHub `design-system` repo (recommended rename to `raven-design-system`) |
| Local path | `/Users/suryanshsrivastava/Raven Cursor/design-system/` |
| GitHub tracked path | `apps/raven/design-system/raven-ui/` |
| Push script | `push-to-design-system-repo.sh` — clones repo, syncs local content via rsync, shows diff, commits and pushes. Supports `--dry-run`. |
| Pull script | `pull-from-design-system-repo.sh` — clones repo, syncs to local via rsync `--delete`. Supports `--dry-run`. |

No git config or remotes changed in workspace by either script.

---

## 13. Accessibility (WCAG AA)

- Storybook a11y addon enabled for automated checks.
- Tab navigation supports `ariaLabel`, per-item `ariaLabel` for icon-only tabs, `selectionFollowsFocus` behavior.
- Accordion: `id` and `aria-controls` on summary, heading level via `slotProps.heading.component`.
- Divider: `aria-hidden="true"` for decorative use, `role="presentation"` when wrapping content.
- Checkbox/Radio: Explicit labels and helper text.
- All color combinations designed for WCAG AA contrast ratios.

---

## 14. Chronological Development Timeline

| Date | Phase | Key Milestones |
|---|---|---|
| **Mar 21** | Exploration | First live exploration of Raven AI at ifz.startraven.com; 65 screenshots, 30+ selectors, application map |
| **Mar 23** | Documentation | Onboarding help guide with 15 annotated screenshots, auth flow mapping |
| **Mar 25** | Product Design | Multi-industry pivot (9 sectors), PRD v2.0, two Figma prototypes (Analytics + Insights) |
| **Mar 26** | Foundation | Design system created: 14 Figma screens analyzed, 25+ components, MUI v6 catalog alignment, theme, tokens |
| **Mar 27** | Components | RavenButton (15 stories, 14 tests), RavenTypography (14 stories, 23 tests), Storybook sidebar restructure |
| **Mar 28** | Infrastructure | IncidentForm worktree synchronization |
| **Mar 30** | Polish | 25 sessions: massive consolidation pass (24+ components to single-page stories), checkbox/autocomplete/select/typography Figma alignment, segmented tabs (4 iterations), code snippets, icon alignment, GitHub sync workflows, Storybook recovery |
| **Mar 31** | Hardening | 14 sessions: performance hardening (virtualization, lazy loading, path imports), surface/feedback/navigation page flattening, MUI details fill, accordion/button-group fixes, vertical rail implementation, tabs MUI alignment |

---

## 15. Session Log Details (50 sessions)

### Mar 21 — Initial Application Exploration

- First live exploration of Raven AI at `ifz.startraven.com`
- Ran 6 progressive Playwright scripts for automated exploration
- Discovered 8 main sections: Search (AI Knowledge Hub), P&ID Viewer, Data Explorer, Settings, Workplace Dashboard, Account, Saved Answers, Feedback
- Two-step login (Employee ID + Password), mandatory domain selection modal post-login
- Known issues: `/settings` URL renders blank, Help & Support redirects to Search, MUI backdrop intercepts clicks
- Flaky areas: AI answer generation >15s, backdrop click interception, domain modal re-appearance
- **Output:** 65 screenshots, 30+ stable selectors, full application map

### Mar 23 — Onboarding Help Documentation

- Created comprehensive user onboarding guide (`chatbot/user-onboarding-guide.md`)
- Navigated complete login flows (Employee ID, email with non-company/company domains)
- Email domain validation rejects non-company emails; unregistered company emails trigger self-registration
- Admin portal: 286 users, ADD USER / EXPORT CSV / IMPORT USERS capabilities
- Multiple annotation fix rounds (discovered 260px offset issue)
- **Output:** 10-section guide, 20+ raw screenshots, 15 annotated versions

### Mar 25 — Multi-Industry Redesign

- Updated PRD to version 2.0 targeting 9 industry sectors
- Created two new Figma pages: v2 Analytics Dashboard and v2 Insights Page
- Added industry selector pill, 10 industry tabs, generic filters, TRIR KPI
- Changed accent color from blue to green (#34A874), dark nav to #181B2C
- Equipment taxonomy expanded (Conveyor Belt, Crusher/Mill, Furnace/Kiln)
- Original CSB pages preserved with "(CSB)" suffix

### Mar 25 — PRD and Prototype Creation

- Full PRD: executive summary, information architecture, 8 chart specs, 6 intelligence blocks, design system, data model, 17 API endpoints, RBAC matrix, 4-phase delivery plan
- Figma prototype: Analytics Dashboard (6 KPIs, map, donut, heatmap, trend, bar charts, tag cloud) + Insights Page (6 intelligence cards)
- Inter font chosen for modern SaaS consistency
- Navy (#1A365D) as primary brand color for this prototype

### Mar 26 — Design System Documentation

- Analyzed 14+ Figma screens across 5 passes
- Extracted design tokens: colors, typography (Source Sans 3, 12 styles), spacing (4px grid), radii, shadows
- Documented 25+ reusable MUI v6 components with TypeScript code
- Created complete `createTheme()` configuration
- Activity timeline with color-coded diff cards identified as custom (not standard MUI)

### Mar 26 — MUI v6 Catalog Alignment

- Created `muiV6Catalog.ts` with exact MUI names, doc URLs, guideline tags, support levels
- Added MUI v6 Catalog Storybook surface
- Extended theme with ButtonGroup, Rating, Backdrop, AppBar, BottomNavigation, SpeedDial overrides

### Mar 26 — Storybook Debug

- Fixed Storybook not loading at `http://localhost:6007`
- Root cause: stale/conflicting processes and cached runtime state
- Temporary instrumentation caused instability; static imports are correct

### Mar 27 — RavenButton Design System

- Created `RavenButton.tsx`, `RavenIconButton`, `RavenButton.css`
- 15 Storybook stories covering all MUI Button features plus Raven CTA patterns
- 14 unit tests
- Pill radius (50px), uppercase, contained hover uses purple.800

### Mar 27 — RavenTypography Design System

- Created `RavenTypography.tsx`, `.css`, 14 stories, 23 unit tests
- Updated theme with missing variants (h1-h3, subtitle1), `variantMapping`
- 17 total typography variants

### Mar 27 — Storybook Sidebar Restructure

- Renamed all 53 story files to MUI v6 naming conventions
- Organized into MUI v6 category structure
- Configured sidebar ordering in `.storybook/preview.tsx`

### Mar 28 — Incident Form Storybook Worktrees

- Copied Figma-aligned IncidentForm into all 4 Cursor git worktrees
- Root cause: Storybook compiles from whichever `cwd` the terminal uses

### Mar 30 — Autocomplete (3 sessions)

- **Inline Code Snippets:** Added `SectionCodeSnippet` component with collapsible code blocks
- **Page-Level Scroll:** Removed `maxHeight: '85vh'` constraint causing nested scrollbar
- **Single Story:** Converted 19 named exports to one exported story

### Mar 30 — Checkbox (5 sessions)

- **Figma Style Alignment:** MUI rounded icons, dedicated `raven-checkbox--figma` CSS class
- **Figma Radius:** Changed row radius from 28px to 8px matching Figma spec
- **Figma Style Adjustment:** Removed over-customized sizing, kept background treatment only
- **Icon Color Unification:** Changed checked icons from purple to `var(--raven-text-primary)`
- **Single Story:** Merged 5 sub-stories into one page
- **Figma Preview Interaction:** Replaced static preview with interactive state-driven preview

### Mar 30 — Segmented Tabs (3 sessions)

- **Figma Spec Alignment:** Updated container bg/border/shadow/padding, pill height, typography, selected colors
- **Cropping Fix:** Removed explicit 48px height, replaced border with box-shadow ring
- **Figma Recheck:** Set explicit Figma-matching heights, replaced gap approach with icon margin overrides

### Mar 30 — Storybook Infrastructure (4 sessions)

- **Consolidation Pass:** Converted 24 story files to single exported stories, normalized titles
- **Follow-Up Consolidation:** Merged Toggle Button into Tabs, consolidated remaining sub-tabs
- **Indexing Fix:** Simplified TypeScript assertions tripping Storybook's acorn parser
- **Startup Recovery:** Restored missing `.storybook/main.ts`, aligned packages to 8.6.18

### Mar 30 — Other Sessions

- **Select Single Story:** Merged 5 sub-stories to one page
- **Typography Single Scroll Page:** Merged all subsections into one page (15 sections)
- **Code Snippets Default:** Enabled `docs.canvas.sourceState = 'shown'` globally
- **Input Rounded Icons:** Applied MUI Rounded icon variants to Autocomplete and Rating
- **Logos Top-Level:** Changed `Brand/Logos` to `Logos` for flatter sidebar
- **Remove Duplicate Icons:** Deleted duplicate `Icons.ref.stories.tsx`

### Mar 30 — GitHub (3 sessions)

- **Push Workflow:** Created `push-to-design-system-repo.sh` with rsync, diff, commit, push
- **Pull Workflow:** Created `pull-from-design-system-repo.sh` with rsync --delete
- **README Update:** Rewrote GitHub README to describe Raven Design System

### Mar 31 — Surfaces (3 sessions)

- **Parent Pages:** Flattened 5 surface stories into shared group, removed `autodocs`
- **Direct Click Flattening:** Changed exports from `Overview` to component names for flat sidebar
- **MUI Details Fill:** Expanded catalog with rich metadata (summary, imports, composition, accessibility, API links)

### Mar 31 — Feedback (2 sessions)

- **Parent Pages:** Flattened 7 feedback stories into shared group
- **Section Merge:** Merged product-specific and MUI-style feedback into unified 10-component group

### Mar 31 — Tabs (3 sessions)

- **MUI Alignment:** Expanded TabNavigation to support icons, icon positions, wrapped labels, scrollable/fullWidth/centered/vertical/segmented variants
- **MUI Details Fill:** Added icon-only tabs, navigation tabs with `href`, `selectionFollowsFocus`, accessibility notes
- **Vertical Tabs Figma Rail:** Added `rail` appearance variant with interactive expand/collapse

### Mar 31 — Other Sessions

- **Accordion Header Height:** Fixed 48px header in both states, regression test added
- **Button Group Wrapper Removal:** Removed extra card-style demo background
- **Segmented Tabs Font Size Fix:** Enforced 15px with `!important` for specificity
- **Segmented Tabs Usability Resize:** Reduced scale after Figma-tuned version was too large
- **Segmented Tabs Figma Visual Tuning:** Increased proportions for Figma fidelity
- **MUI Performance Hardening:** Added virtualization (VirtualizedDataTable, TransferList, Autocomplete), lazy-loaded icons, converted barrel to path imports. 118 tests pass.

---

## 16. Known Design Decisions & Conventions

1. **BEM naming:** All custom CSS uses `raven-` prefix (e.g., `raven-checkbox--figma`).
2. **No `sx` for repeated patterns:** Use CSS classes or hoisted style constants.
3. **Rounded icons:** MUI Rounded icon variants preferred throughout (e.g., `AddRounded`, `CheckBoxRounded`).
4. **Purple as brand anchor:** `#4A148C` is the single brand color driving all interactive states.
5. **Source Sans 3 everywhere:** Enforced on every MUI component that renders text (30+ `fontFamily` overrides).
6. **Pill shapes for actions:** Buttons, chips, toggles, pagination all use radius 50px.
7. **Light purple page background:** `#FCF6FE` gives distinctive brand feel vs standard white.
8. **Outlined inputs:** Default to outlined variant with 8px radius, not filled.
9. **Uppercase labels:** Button and tab text use uppercase transforms.
10. **Single-page Storybook pattern:** Each component gets one scrollable page, not multiple sub-tabs.

---

## 17. Files & Directory Structure

```
design-system/
├── .storybook/
│   ├── main.ts                 # Stories glob, addons: essentials + a11y
│   └── preview.tsx              # ThemeProvider + CssBaseline wrapper, code snippets config
├── src/
│   ├── global.css               # Design tokens as CSS custom properties
│   ├── index.ts                 # Barrel exports for all components + theme
│   ├── main.tsx                 # Vite app entry
│   ├── test-setup.ts            # Vitest setup
│   ├── theme/
│   │   ├── ravenNearMissTheme.ts       # 40+ component overrides
│   │   └── ravenNearMissTheme.test.ts
│   ├── catalog/
│   │   └── muiV6Catalog.ts      # 43 MUI components mapped
│   ├── components/
│   │   ├── StorybookPage.tsx     # Shared layout helper
│   │   ├── layout/               # AppShell, SideNavigation, PageHeader, MobileAppShell
│   │   ├── navigation/           # TabNavigation, StatusFilterBar, ViewToggle, BreadcrumbNav,
│   │   │                         # OrgSwitchDropdown, RavenPagination, RavenMenu, RavenLink
│   │   ├── data-display/         # DataTable, VirtualizedDataTable, SummaryCard, DiffCard,
│   │   │                         # StatusStepper, StatusTransitionCard, RavenAvatar, RavenBadge,
│   │   │                         # RavenChip, RavenTooltip, RavenList, RavenTypography
│   │   ├── feedback/             # ActivityDrawer, ActivityTimelineItem, RecommendationPanel,
│   │   │                         # RavenAlert, RavenDialog, RavenSnackbar, RavenLinearProgress,
│   │   │                         # RavenCircularProgress, RavenSkeleton
│   │   ├── surfaces/             # RavenAccordion, RavenCard, RavenDivider
│   │   ├── inputs/               # RavenButton, RavenButtonGroup, RavenTextField, RavenSelect,
│   │   │                         # RavenCheckbox, RavenRadioGroup, RavenSwitch, RavenAutocomplete,
│   │   │                         # RavenTransferList, RavenSlider, RavenRating, RavenFab
│   │   ├── forms/                # FilterControls, IncidentForm, ActionButtonGroup, CommentInput
│   │   ├── chat/                 # ChatInput, ChatBubble, GradientTitle
│   │   ├── actions/              # ExportButton
│   │   ├── brand/                # BrandLogos
│   │   ├── foundations/          # IconGallery (lazy loaded)
│   │   └── catalog/              # MuiV6Catalog, ComponentReference, ref stories
│   └── ...
├── session-logs/                 # 50 session logs (Mar 21–31)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── index.html
```

---

## 18. Open Items & Future Work

1. **Transfer List** is marked guidance-only — no Raven wrapper yet (though `RavenTransferList` exists with virtualization).
2. **Lab components** (Masonry, Timeline) are documented as guidance-first.
3. **Dark mode** not yet implemented (theme supports `enableColorOnDark` guidance).
4. **Multi-industry color variants** (green `#34A874` accent, dark nav `#181B2C`) designed but not yet in the theme.
5. **GitHub repository** could be renamed from `design-system` to `raven-design-system`.
6. **No formal CI/CD** pipeline for the design system yet.
7. **No npm publishing** configuration (marked `private: true`).

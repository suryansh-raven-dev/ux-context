# Raven Near-Miss Design System

Component library for the Raven Near-Miss Incident Reporting Tool, built from Figma designs.

## Stack

- React 18 + TypeScript 5
- MUI v6 + plain CSS (BEM naming with `raven-` prefix)
- Storybook 8 (interactive component docs + a11y addon)
- Vitest + React Testing Library (69 unit tests)
- WCAG AA accessible

## Getting Started

```bash
npm install
npm run storybook    # Interactive component browser at http://localhost:6006
npm run dev          # Vite dev server
npm run test         # Run unit tests (69 tests across 26 files)
npm run test:watch   # Watch mode
```

## Design Tokens

- **CSS custom properties**: `src/global.css` (colors, gradients, shadows, spacing, radii)
- **MUI theme**: `src/theme/ravenNearMissTheme.ts` (palette, typography, component overrides)

## Component Catalog

This library now has two catalog layers:

- **Raven workflow components**: Near Miss-specific building blocks such as `AppShell`, `IncidentForm`, `ActivityDrawer`, and `StatusStepper`
- **Canonical MUI v6 catalog alignment**: Exact Material UI component names, official docs links, guideline tags, and Raven support status available in Storybook under `Catalog/MUI v6`

### Canonical MUI v6 alignment

- Official reference: [MUI v6 all components](https://v6.mui.com/material-ui/all-components/)
- Raven Storybook catalog: `src/components/catalog/MuiV6Catalog.stories.tsx`
- Catalog data source: `src/catalog/muiV6Catalog.ts`
- Catalog surface export: `MuiV6Catalog`

Support levels used in the catalog:

- **Raven component available**: a dedicated Raven wrapper or domain-aligned component already exists
- **Raven theme support**: use the MUI primitive directly with `ravenNearMissTheme`
- **Guidance only**: documented for naming, links, and implementation guidance, but not wrapped yet

### Raven workflow components

### Layout
| Component | Path | Props |
|-----------|------|-------|
| AppShell | `components/layout/AppShell` | `sidebar`, `children` |
| SideNavigation | `components/layout/SideNavigation` | `activePath`, `onNavigate` |
| PageHeader | `components/layout/PageHeader` | `title`, `subtitle?`, `onBack?`, `actions?` |
| MobileAppShell | `components/layout/MobileAppShell` | `title`, `headerActions?`, `children` |

### Navigation
| Component | Path | Props |
|-----------|------|-------|
| TabNavigation | `components/navigation/TabNavigation` | `tabs`, `activeIndex`, `onChange` |
| StatusFilterBar | `components/navigation/StatusFilterBar` | `filters`, `activeIndex`, `onChange` |
| ViewToggle | `components/navigation/ViewToggle` | `options`, `value`, `onChange` |
| BreadcrumbNav | `components/navigation/BreadcrumbNav` | `parentLabel`, `currentId`, `status`, `onBack` |
| OrgSwitchDropdown | `components/navigation/OrgSwitchDropdown` | `initials`, `name`, `role?`, `gradientColors?` |

### Data Display
| Component | Path | Props |
|-----------|------|-------|
| SummaryCard | `components/data-display/SummaryCard` | `icon`, `title`, `stats`, `closureRate`, `departments`, `trend`, `onClick?` |
| DataTable | `components/data-display/DataTable` | `columns`, `rows`, `rowKey`, `onRowClick?`, pagination props |
| DiffCard | `components/data-display/DiffCard` | `type` (updates/added/removed), `changes` |
| StatusStepper | `components/data-display/StatusStepper` | `steps` (label, completed?, active?) |
| StatusTransitionCard | `components/data-display/StatusTransitionCard` | `fromStatus`, `toStatus` |

### Feedback
| Component | Path | Props |
|-----------|------|-------|
| ActivityDrawer | `components/feedback/ActivityDrawer` | `open`, `onClose`, `children`, `width?` |
| ActivityTimelineItem | `components/feedback/ActivityTimelineItem` | `user`, `timestamp`, `actionLabel`, `expandedContent?`, `showConnector?` |
| RecommendationPanel | `components/feedback/RecommendationPanel` | `incidentId`, `sections` |

### Forms
| Component | Path | Props |
|-----------|------|-------|
| FilterControls | `components/forms/FilterControls` | `departments`, `selectedDepartment`, `dateRange`, `searchQuery?`, etc. |
| IncidentForm | `components/forms/IncidentForm` | Self-contained demo form |
| ActionButtonGroup | `components/forms/ActionButtonGroup` | `onSaveDraft`, `onClearAll`, `onSubmit`, `submitDisabled?` |
| CommentInput | `components/forms/CommentInput` | `value`, `onChange`, `onSubmit` |

### Chat
| Component | Path | Props |
|-----------|------|-------|
| ChatInput | `components/chat/ChatInput` | `value`, `onChange`, `onSend`, `placeholder?`, `multiline?` |
| ChatBubble | `components/chat/ChatBubble` | `variant` (user/ai), `children`, `timestamp` |
| GradientTitle | `components/chat/GradientTitle` | `children` (extends TypographyProps) |

### Actions
| Component | Path | Props |
|-----------|------|-------|
| ExportButton | `components/actions/ExportButton` | `onExport` (pdf/csv/xlsx) |

## Usage

```tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ravenNearMissTheme, AppShell, SideNavigation, PageHeader } from './index';
import './global.css';

function App() {
  return (
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      <AppShell sidebar={<SideNavigation activePath="/reports" onNavigate={console.log} />}>
        <PageHeader title="Reports" />
        {/* page content */}
      </AppShell>
    </ThemeProvider>
  );
}
```

## Source

- Design specs: Figma file `cKJAKEFahN53w0PJ5d88pr` (14 screens analyzed)
- Full documentation: `../near-miss-components.md`
- Canonical MUI catalog reference: [Material UI components](https://v6.mui.com/material-ui/all-components/)

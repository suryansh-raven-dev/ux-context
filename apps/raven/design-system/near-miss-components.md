# Raven Near-Miss Incident Reporting Tool — Design System

> **Source**: Figma file `cKJAKEFahN53w0PJ5d88pr` ("Near-Miss Incident Reporting Tool")
> **Target Stack**: React 18+, TypeScript, MUI v6, Source Sans 3 font
> **Last Updated**: 2026-03-26

---

## Figma Screens Covered

| # | Screen Name | Node ID | Purpose |
|---|------------|---------|---------|
| 1 | Analysis Dashboard (Near Miss) | `2103:11610` | Summary cards, trend charts, cause analysis |
| 2 | Analysis Dashboard (Full Layout) | `2202:12231` | Complete page with sidebar, filters, export |
| 3 | Incident Activity Drawer (Expanded) | `1861:8925` | Timeline with diff cards (Updates/Added/Removed) |
| 4 | Incident Activity Drawer (Collapsed) | `1858:8721` | Collapsed timeline with action summaries |
| 5 | All Recommendations | `2078:10989` | Table/Chart toggle, recommendation register |
| 6 | Investigations | `1726:8079` | Status filters, search, data table |
| 7 | Report Incident | `1698:7954` | Multi-section form with Chat/Report view toggle |
| 8 | Report Incident - Chat View | `1698:7790` | AI conversational input with background graphic |
| 9 | Reports Page (Operator) | `1328:34223` | Reports list with Operator role sidebar |
| 10 | Reports Page (Safety Manager) | `1328:33616` | Reports list with Safety Manager role |
| 11 | Mobile Landing Page | `1033:8443` | Mobile 402px, gradient title, camera/mic input |
| 12 | Mobile Chat Conversation | `1033:8721` | Chat bubbles (user + AI structured response) |
| 13 | Mobile Landing + Keyboard | `1033:8582` | Active input state with send icon + keyboard |
| 14 | Recommendation Detail | `1097:9799` | Three-column layout, stepper, comments, submit |

---

## Section 1: Design Tokens

### 1.1 Color Palette

#### Brand / Primary

| Token Name | Hex | Figma Style | MUI v6 Mapping |
|-----------|-----|------------|----------------|
| `purple.900` | `#4A148C` | `purple/darken-4` | `palette.primary.main` |
| `purple.300` | `#CE93D8` | `purple/lighten-3` | `palette.primary.light` |
| `purple.200` | `#E1BEE7` | `purple/lighten-4` | Custom: active chip bg, container |
| `purple.100` | `#F3E5F5` | `purple/lighten-5` | Custom: borders, card borders, hover states |

#### Backgrounds

| Token Name | Hex | Usage | MUI v6 Mapping |
|-----------|-----|-------|----------------|
| `bg.page` | `#FCF6FE` | Page-level background | `palette.background.default` |
| `bg.paper` | `#FFFFFF` | Cards, drawers, table rows | `palette.background.paper` |
| `bg.formCard` | `#FDFAFE` | Report form card background | Custom `palette.background.form` |
| `bg.neutral` | `#F5F5F5` | Toggle inactive bg, grey containers | `palette.grey[100]` |

#### Text

| Token Name | Value | Figma Style | MUI v6 Mapping |
|-----------|-------|------------|----------------|
| `text.primary` | `rgba(0,0,0,0.87)` | `black/Text Primary` | `palette.text.primary` |
| `text.secondary` | `rgba(0,0,0,0.6)` | `black/Text Secondary`, `shades/Text Secondary` | `palette.text.secondary` |
| `text.disabled` | `rgba(0,0,0,0.42)` | `black/0.42` | `palette.text.disabled` |

#### Status / Semantic Colors

| Category | Main | Dark | Light (50) | Usage |
|----------|------|------|-----------|-------|
| **Green** | `#4CAF50` | `#1B5E20` | `#E8F5E9` | Closed status, success, "Added" diff cards |
| **Red** | `#F44336` | `#B71C1C` | `#FFEBEE` | Danger, negative trends, "Removed" diff cards |
| **Orange** | `#FF9800` | `#FF6F00` | -- | Warning indicators, closure rate negative |
| **Amber** | -- | -- | `#FFF8E1` | "Updates" diff card background |
| **Light Blue** | `#0288D1` | -- | `#E1F5FE` | Info indicators, investigation icon |
| **Teal** | `#009688` | -- | -- | Avatar colors |
| **Light Green** | `#689F38` | `#33691E` | `#F1F8E9` | "Added" label text color, diff bg |
| **Indigo** | `#303F9F` | -- | -- | Secondary accent |

MUI v6 mapping for status colors:

```typescript
palette: {
  success: { main: '#4CAF50', dark: '#1B5E20', light: '#E8F5E9' },
  error:   { main: '#F44336', dark: '#B71C1C', light: '#FFEBEE' },
  warning: { main: '#FF9800', dark: '#FF6F00', light: '#FFF8E1' },
  info:    { main: '#0288D1', light: '#E1F5FE' },
}
```

#### Borders

| Token | Value | Usage |
|-------|-------|-------|
| `border.default` | `#E0E0E0` | Table borders, dividers |
| `border.brand` | `#F3E5F5` | Card borders, container borders, section borders |
| `border.diffAdded` | `#DCEDC8` | Added diff card border (lightGreen/lighten-4) |
| `border.diffRemoved` | `#FFCDD2` | Removed diff card border (red/lighten-4) |
| `border.diffUpdated` | `#FFECB3` | Updates diff card border (amber/lighten-4) |

### 1.2 Typography

**Primary font**: `"Source Sans 3"` — used across all product typography.
**Fallback font**: `"Roboto"` — appears in some table headers and button labels.

#### Type Scale

| Figma Style | Size | Weight | Line Height | Letter Spacing | MUI v6 Variant |
|------------|------|--------|-------------|----------------|----------------|
| `Product Typography/h4` | 34px | 600 (SemiBold) | 40px | 0.25px | `typography.h4` |
| `Product Typography/h6` | 20px | 600 (SemiBold) | 32px | 0.15px | `typography.h6` |
| `Product Typography/body-1` | 16px | 400 (Regular) | 1.75 (28px) | 0.15px | `typography.body1` |
| `Product Typography/body-1-bold` | 16px | 600 (SemiBold) | 1.75 (28px) | 0.15px | Custom: `typography.body1Bold` |
| `Product Typography/body-2` | 14px | 400 (Regular) | 20px | 0.25px | `typography.body2` |
| `Product Typography/subtitle-2` | 14px | 400 (Regular) | 22px | 0.1px | `typography.subtitle2` |
| `Product Typography/button-large` | 15px | 600 (SemiBold) | 100% | 0.46px | Tab labels, large buttons |
| `Product Typography/button-medium` | 14px | 500 (Medium) | 24px | 0.4px | `typography.button` |
| `Product Typography/caption` | 12px | 400 (Regular) | 100% | 0.4px | `typography.caption` |
| `Product Typography/overline` | 12px | 600 (SemiBold) | 32px | 2px (uppercase) | `typography.overline` |
| `Product Typography/Label-Text` | 13px | 500 (Medium) | 18px | 0.16px | Input label text |
| `Product Typography/tabel header` | 14px | 600 (SemiBold) | 100% | 0.17px | Custom: `typography.tableHeader` |

MUI v6 typography config:

```typescript
typography: {
  fontFamily: '"Source Sans 3", "Roboto", "Helvetica", "Arial", sans-serif',
  h4: { fontSize: '2.125rem', fontWeight: 600, lineHeight: '40px', letterSpacing: '0.25px' },
  h6: { fontSize: '1.25rem', fontWeight: 600, lineHeight: '32px', letterSpacing: '0.15px' },
  body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, letterSpacing: '0.15px' },
  body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '20px', letterSpacing: '0.25px' },
  subtitle2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '22px', letterSpacing: '0.1px' },
  button: { fontSize: '0.875rem', fontWeight: 500, lineHeight: '24px', letterSpacing: '0.4px', textTransform: 'uppercase' },
  caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1, letterSpacing: '0.4px' },
  overline: { fontSize: '0.75rem', fontWeight: 600, lineHeight: '32px', letterSpacing: '2px', textTransform: 'uppercase' },
}
```

### 1.3 Spacing

The design uses a **4px base unit**. Common spacing values observed across all screens:

| Token | Value | Usage |
|-------|-------|-------|
| `spacing(1)` | 4px | Tight gaps (icon-to-text in chips) |
| `spacing(2)` | 8px | Standard gap between inline items, avatar-to-text |
| `spacing(3)` | 12px | Card inner padding (small), chip padding |
| `spacing(4)` | 16px | Section padding, drawer padding, nav item padding |
| `spacing(6)` | 24px | Section gaps, card content padding, form section gaps |
| `spacing(8)` | 32px | Major section separators |

### 1.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `shape.borderRadius` | 8px | Input fields, diff cards, action cards |
| `radius.drawer` | 12px | Drawer left corners (rounded-tl, rounded-bl) |
| `radius.container` | 24px | Main content container, section cards |
| `radius.pill` | 50px | Chips, pill buttons, filter chips, icon buttons |
| `radius.toggle` | 100px | View toggle container (Table/Chart) |

### 1.5 Shadows / Elevation

| Token | CSS Value | Usage |
|-------|-----------|-------|
| `elevation/2` | `0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px rgba(0,0,0,0.14), 0px 1px 5px rgba(0,0,0,0.12)` | Summary cards, table containers |
| `elevation/drawer` | `0px 9px 46px rgba(0,0,0,0.12), 0px 24px 38px rgba(0,0,0,0.14), 0px 11px 15px rgba(0,0,0,0.2)` | Activity Drawer |
| `elevation/toggle` | `0px 2px 16px rgba(74,20,140,0.12)` | View toggle container (brand-tinted shadow) |

---

## Section 2: MUI v6 Component Mapping

### 2.1 AppShell

**Figma source**: All 7 screens share the same `240px` sidebar + content area layout.
**Observed in**: Nodes `2103:11610`, `2202:12231`, `2078:10989`, `1726:8079`, `1698:7954`

**Structure**: Fixed 240px sidebar on the left. Content area fills remaining width (1200px at 1440px viewport) with 8px padding on right/top/bottom. Content is wrapped in a rounded 24px container with `#F3E5F5` border.

**MUI v6 implementation**:

```tsx
import { Box } from '@mui/material';

interface AppShellProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export function AppShell({ sidebar, children }: AppShellProps) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ width: 240, flexShrink: 0 }}>
        {sidebar}
      </Box>
      <Box sx={{ flex: 1, p: 1, pr: 1 }}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: '24px',
            border: '1px solid',
            borderColor: 'purple.100',       // #F3E5F5
            overflow: 'hidden',
            height: '100%',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
```

---

### 2.2 SideNavigation

**Figma source**: `2202:12232` (Side-navigation frame, 240x900)
**Observed in**: All full-page screens

**Structure**:
- Top: Hamburger icon + Org Logo (ACME branding)
- "Report Incident" CTA button with `add_circle` icon (purple background, white text)
- Expandable "Incidents" menu group with `warning` icon and chevron
  - Sub-items: Reports, Investigations, Recommendations
- "Analysis" nav item with `analytics` icon
- Active state: purple filled pill background (`#4A148C` bg, white text), 50px border-radius
- Bottom: "Powered by Raven" logo + user avatar/name dropdown

**MUI v6 implementation**:

```tsx
import {
  Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Collapse, Avatar, Typography, Box, Button,
} from '@mui/material';
import {
  AddCircle, Warning, Assignment, ManageSearch,
  Recommend, Analytics, ExpandMore, ExpandLess,
} from '@mui/icons-material';

const navItems = [
  { label: 'Reports', icon: <Assignment />, path: '/reports' },
  { label: 'Investigations', icon: <ManageSearch />, path: '/investigations' },
  { label: 'Recommendations', icon: <Recommend />, path: '/recommendations' },
];

interface SideNavigationProps {
  activePath: string;
  onNavigate: (path: string) => void;
}

export function SideNavigation({ activePath, onNavigate }: SideNavigationProps) {
  const [incidentsOpen, setIncidentsOpen] = useState(true);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        '& .MuiDrawer-paper': {
          width: 240,
          bgcolor: 'background.default',
          borderRight: 'none',
          px: 1.5,
        },
      }}
    >
      {/* Org Logo */}
      <Box sx={{ px: 1, py: 2 }}>
        <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'error.dark' }}>
          ACME
        </Typography>
      </Box>

      {/* Report Incident CTA */}
      <Button
        startIcon={<AddCircle />}
        onClick={() => onNavigate('/report')}
        sx={{
          bgcolor: activePath === '/report' ? 'primary.main' : 'transparent',
          color: activePath === '/report' ? 'white' : 'text.primary',
          borderRadius: '50px',
          justifyContent: 'flex-start',
          px: 2,
          mb: 1,
          '&:hover': { bgcolor: 'primary.main', color: 'white' },
        }}
      >
        Report Incident
      </Button>

      {/* Incidents group */}
      <List disablePadding>
        <ListItemButton onClick={() => setIncidentsOpen(!incidentsOpen)}>
          <ListItemIcon sx={{ minWidth: 40 }}><Warning /></ListItemIcon>
          <ListItemText primary="Incidents" />
          {incidentsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={incidentsOpen}>
          <List disablePadding sx={{ pl: 3 }}>
            {navItems.map((item) => (
              <ListItemButton
                key={item.path}
                selected={activePath === item.path}
                onClick={() => onNavigate(item.path)}
                sx={{
                  borderRadius: '50px',
                  mb: 0.5,
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    '& .MuiListItemIcon-root': { color: 'white' },
                    '&:hover': { bgcolor: 'primary.main' },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} primaryTypographyProps={{ variant: 'subtitle2' }} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        {/* Analysis */}
        <ListItemButton
          selected={activePath === '/analysis'}
          onClick={() => onNavigate('/analysis')}
          sx={{
            borderRadius: '50px',
            '&.Mui-selected': {
              bgcolor: 'primary.main',
              color: 'white',
              '& .MuiListItemIcon-root': { color: 'white' },
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}><Analytics /></ListItemIcon>
          <ListItemText primary="Analysis" />
        </ListItemButton>
      </List>

      {/* Bottom section: Powered by + User */}
      <Box sx={{ mt: 'auto', pb: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Powered by Raven
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: 12 }}>KR</Avatar>
          <Typography variant="body2">Kailash Raj</Typography>
          <ExpandMore fontSize="small" />
        </Box>
      </Box>
    </Drawer>
  );
}
```

---

### 2.3 PageHeader

**Figma source**: Header Content frames across all pages
**Observed in**: `2103:11730`, `2078:11109`, `1726:8082`, `1698:7957`

**Variants**:
- **Simple**: Title only ("Analysis", "Report Incident")
- **With back navigation**: Back arrow + title + subtitle ("All Recommendations" / "Feb-Mar 2026 - Consolidated")
- **With actions**: Export button, "Start New Incident" button on right

**MUI v6 implementation**:

```tsx
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  actions?: React.ReactNode;
}

export function PageHeader({ title, subtitle, onBack, actions }: PageHeaderProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 2,
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'purple.100',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {onBack && (
          <IconButton onClick={onBack} size="small">
            <ArrowBackIos fontSize="small" />
          </IconButton>
        )}
        <Box>
          <Typography variant="h6">{title}</Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary">{subtitle}</Typography>
          )}
        </Box>
      </Box>
      {actions && <Box sx={{ display: 'flex', gap: 1 }}>{actions}</Box>}
    </Box>
  );
}
```

---

### 2.4 TabNavigation

**Figma source**: `<Tabs>` / `<Tab>` instances
**Observed in**: `2103:11743` (Analysis: All Incidents / Near Miss / Unsafe Conditions / Unsafe Acts), `1726:8090` (Investigations: Near Miss / UC/UA), `2078:11109` (Recommendations: All / Open / Closed)

**Design specifics**:
- Font: Source Sans 3, 15px SemiBold, uppercase, 0.46px letter-spacing
- Active tab text color: `#4A148C` (purple/darken-4)
- Inactive tab text color: `rgba(0,0,0,0.6)`
- Active indicator: 4px height, `#4A148C` background, rounded top corners (50px radius on top-left/top-right)

**MUI v6 implementation**:

```tsx
import { Tabs, Tab } from '@mui/material';

interface TabItem {
  label: string;
  count?: number;
}

interface TabNavigationProps {
  tabs: TabItem[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export function TabNavigation({ tabs, activeIndex, onChange }: TabNavigationProps) {
  return (
    <Tabs
      value={activeIndex}
      onChange={(_, val) => onChange(val)}
      sx={{
        '& .MuiTabs-indicator': {
          height: 4,
          bgcolor: 'primary.main',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
        '& .MuiTab-root': {
          fontFamily: '"Source Sans 3", sans-serif',
          fontSize: '15px',
          fontWeight: 600,
          letterSpacing: '0.46px',
          textTransform: 'uppercase',
          color: 'text.secondary',
          '&.Mui-selected': { color: 'primary.main' },
        },
      }}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.label}
          label={tab.count !== undefined ? `${tab.label} (${tab.count})` : tab.label}
        />
      ))}
    </Tabs>
  );
}
```

---

### 2.5 StatusFilterBar

**Figma source**: Status filter pills on Investigations page
**Observed in**: `1726:8079` — "In Progress (2)", "Released (0)", "Closed (1)", "All (3)"

**Design specifics**:
- Inactive: MUI Chip, variant="outlined", size="small", color="default"
- Active: Chip with `#E1BEE7` background, `#CE93D8` border, `#4A148C` text — pill shape (100px radius)
- Container: `#F5F5F5` background, `#F3E5F5` border, rounded 50px, brand-tinted shadow

**MUI v6 implementation**:

```tsx
import { Box, Chip } from '@mui/material';

interface StatusFilter {
  label: string;
  count: number;
}

interface StatusFilterBarProps {
  filters: StatusFilter[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export function StatusFilterBar({ filters, activeIndex, onChange }: StatusFilterBarProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 0.5,
        bgcolor: 'grey.100',
        border: '1px solid',
        borderColor: 'purple.100',
        borderRadius: '50px',
        p: 0.5,
        boxShadow: '0px 2px 16px rgba(74,20,140,0.12)',
      }}
    >
      {filters.map((filter, idx) => (
        <Chip
          key={filter.label}
          label={`${filter.label} (${filter.count})`}
          onClick={() => onChange(idx)}
          variant={idx === activeIndex ? 'filled' : 'outlined'}
          sx={{
            borderRadius: '100px',
            fontWeight: 600,
            fontSize: '16px',
            height: 40,
            px: 1.5,
            ...(idx === activeIndex
              ? {
                  bgcolor: 'purple.200',       // #E1BEE7
                  borderColor: 'purple.300',    // #CE93D8
                  color: 'primary.main',        // #4A148C
                  '& .MuiChip-label': { fontWeight: 600 },
                }
              : {
                  bgcolor: 'grey.100',
                  borderColor: 'transparent',
                  color: 'text.secondary',
                }),
          }}
        />
      ))}
    </Box>
  );
}
```

---

### 2.6 SummaryCard

**Figma source**: Report Summary section on Analysis Dashboard
**Observed in**: `2103:11610` — INCIDENTS, INVESTIGATIONS, RECOMMENDATIONS cards

**Structure**:
- Section header: "REPORT SUMMARY" (overline style, uppercase)
- Three cards side by side, each containing:
  - Icon (colored circle bg) + Title (uppercase, SemiBold) + chevron_right
  - Two stat columns: number + label (e.g., "47 Reported", "5 Closed")
  - Status dots: green for positive, red for negative
  - Closure/resolution rate (e.g., "10% Closure Rate") in green or red
  - Department count + top department info
  - Month-over-month comparison (e.g., "-83% vs Feb") in red/green

**MUI v6 implementation**:

```tsx
import { Box, Card, Typography, IconButton } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  stats: { value: number; label: string; color?: string }[];
  closureRate: { value: string; positive: boolean };
  departments: { count: number; top: string };
  trend: { value: string; positive: boolean };
  onClick?: () => void;
}

export function SummaryCard({
  icon, title, stats, closureRate, departments, trend, onClick,
}: SummaryCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        flex: 1,
        p: 2,
        border: '1px solid',
        borderColor: 'purple.100',
        borderRadius: '8px',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {icon}
          <Typography variant="subtitle2" sx={{ fontWeight: 600, letterSpacing: '0.1px', textTransform: 'uppercase' }}>
            {title}
          </Typography>
        </Box>
        <IconButton size="small" onClick={onClick}><ChevronRight /></IconButton>
      </Box>

      {/* Stats row */}
      <Box sx={{ display: 'flex', gap: 3, mb: 1 }}>
        {stats.map((stat) => (
          <Box key={stat.label}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>{stat.value}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: stat.color || 'success.main' }} />
              <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
            </Box>
          </Box>
        ))}
        <Typography
          variant="body2"
          sx={{ color: closureRate.positive ? 'success.main' : 'error.main', alignSelf: 'center' }}
        >
          {closureRate.value}
        </Typography>
      </Box>

      {/* Footer */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography variant="caption" color="text.secondary">
            {departments.count} Depts · Top: {departments.top}
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{ color: trend.positive ? 'success.dark' : 'error.main', fontWeight: 500 }}
        >
          {trend.value}
        </Typography>
      </Box>
    </Card>
  );
}
```

---

### 2.7 DataTable

**Figma source**: Table instances on Recommendations and Investigations pages
**Observed in**: `2078:10989` (Recommendation Register), `1726:8079` (Investigations)

**Design specifics**:
- Header: SemiBold 14px, letter-spacing 0.17px, uppercase-ish labels, `#F3E5F5` bottom border
- Rows: body2 (14px Regular), no zebra striping, hover state, purple.100 border between rows
- Status column: text with colored dot indicator (green for Closed, blue for In-progress, grey for NA/Pending)
- Action column: `chevron_right` icon as row-level navigation
- Pagination: "Rows per page: 10", page info "1-3 of 3", chevron_left/chevron_right for prev/next

**MUI v6 implementation**:

```tsx
import {
  Table, TableHead, TableBody, TableRow, TableCell,
  TableContainer, TablePagination, IconButton, Box, Typography,
} from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

interface Column<T> {
  key: keyof T;
  label: string;
  width?: number | string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface DataTableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  rows: T[];
  rowKey: keyof T;
  onRowClick?: (row: T) => void;
  page: number;
  rowsPerPage: number;
  total: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rpp: number) => void;
}

export function DataTable<T extends Record<string, unknown>>({
  columns, rows, rowKey, onRowClick, page, rowsPerPage, total, onPageChange, onRowsPerPageChange,
}: DataTableProps<T>) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={String(col.key)}
                sx={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '0.17px',
                  color: 'text.primary',
                  borderBottom: '2px solid',
                  borderColor: 'purple.100',
                  width: col.width,
                }}
              >
                {col.label}
              </TableCell>
            ))}
            {onRowClick && <TableCell sx={{ width: 48, borderBottom: '2px solid', borderColor: 'purple.100' }} />}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={String(row[rowKey])}
              hover
              onClick={() => onRowClick?.(row)}
              sx={{ cursor: onRowClick ? 'pointer' : 'default' }}
            >
              {columns.map((col) => (
                <TableCell key={String(col.key)} sx={{ borderColor: 'purple.100' }}>
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                </TableCell>
              ))}
              {onRowClick && (
                <TableCell sx={{ borderColor: 'purple.100' }}>
                  <IconButton size="small"><ChevronRight /></IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={total}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(_, p) => onPageChange(p)}
        onRowsPerPageChange={(e) => onRowsPerPageChange(parseInt(e.target.value, 10))}
      />
    </TableContainer>
  );
}
```

**Status cell renderer** (reusable pattern):

```tsx
function StatusCell({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    'Closed': '#4CAF50',
    'Completed': '#4CAF50',
    'In-progress': '#0288D1',
    'In Progress': '#0288D1',
    'Pending': '#FF9800',
    'NA': '#9E9E9E',
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: colorMap[status] || '#9E9E9E' }} />
      <Typography variant="body2">{status}</Typography>
    </Box>
  );
}
```

---

### 2.8 ViewToggle

**Figma source**: Table/Chart segmented control
**Observed in**: `2078:10989` (Recommendations), `1698:7954` (Chat View / Report View)

**Design specifics**:
- Container: `#F5F5F5` bg, 1px `#F3E5F5` border, 50px border-radius, brand shadow
- Active segment: `#E1BEE7` bg, `#CE93D8` border, `#4A148C` text, with icon
- Inactive segment: transparent bg, `rgba(0,0,0,0.6)` text
- Height: 48px, pill-shaped segments (100px radius)

**MUI v6 implementation**:

```tsx
import { Box, ButtonBase, Typography } from '@mui/material';

interface ViewToggleOption {
  label: string;
  icon?: React.ReactNode;
  value: string;
}

interface ViewToggleProps {
  options: ViewToggleOption[];
  value: string;
  onChange: (value: string) => void;
}

export function ViewToggle({ options, value, onChange }: ViewToggleProps) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        bgcolor: 'grey.100',
        border: '1px solid',
        borderColor: 'purple.100',
        borderRadius: '50px',
        p: 0.5,
        boxShadow: '0px 2px 16px rgba(74,20,140,0.12)',
      }}
    >
      {options.map((opt) => (
        <ButtonBase
          key={opt.value}
          onClick={() => onChange(opt.value)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            px: 1.5,
            py: 0.5,
            borderRadius: '100px',
            height: 40,
            ...(value === opt.value
              ? {
                  bgcolor: 'purple.200',
                  border: '1px solid',
                  borderColor: 'purple.300',
                }
              : {
                  bgcolor: 'transparent',
                  border: '1px solid transparent',
                }),
          }}
        >
          {opt.icon}
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              color: value === opt.value ? 'primary.main' : 'text.secondary',
            }}
          >
            {opt.label}
          </Typography>
        </ButtonBase>
      ))}
    </Box>
  );
}
```

---

### 2.9 FilterControls

**Figma source**: Department dropdown + Date range picker
**Observed in**: `2103:11610` (Analysis), `2078:10989` (Recommendations), `1726:8079` (Investigations)

**Design specifics**:
- Department: MUI TextField variant="outlined", size="small", with `expand_more` end adornment, label "All Departments"
- Date range: MUI TextField variant="outlined", size="small", with `event` (calendar) end icon, value "Feb-Mar 2026"
- Search: MUI TextField, placeholder "Search by ID, summary, or reporter"

**MUI v6 implementation**:

```tsx
import { Box, TextField, MenuItem, InputAdornment } from '@mui/material';
import { Event, Search } from '@mui/icons-material';

interface FilterControlsProps {
  departments: string[];
  selectedDepartment: string;
  onDepartmentChange: (dept: string) => void;
  dateRange: string;
  onDateRangeClick: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
}

export function FilterControls({
  departments, selectedDepartment, onDepartmentChange,
  dateRange, onDateRangeClick,
  searchQuery = '', onSearchChange, showSearch = false,
}: FilterControlsProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {showSearch && (
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search by ID, summary, or reporter"
          value={searchQuery}
          onChange={(e) => onSearchChange?.(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"><Search /></InputAdornment>
            ),
          }}
          sx={{ minWidth: 320 }}
        />
      )}

      <TextField
        select
        size="small"
        variant="outlined"
        label="All Departments"
        value={selectedDepartment}
        onChange={(e) => onDepartmentChange(e.target.value)}
        sx={{ minWidth: 180 }}
      >
        <MenuItem value="all">All Departments</MenuItem>
        {departments.map((d) => (
          <MenuItem key={d} value={d}>{d}</MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        variant="outlined"
        value={dateRange}
        onClick={onDateRangeClick}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end"><Event /></InputAdornment>
          ),
        }}
        sx={{ minWidth: 160 }}
      />
    </Box>
  );
}
```

---

### 2.10 ActivityDrawer

**Figma source**: `1861:8925` (expanded), `1858:8721` (collapsed)
**Component name in Figma**: "Incident Activity Drawer Expanded", "Incident Activity Drawer"

**Design specifics**:
- Right-side panel, full height
- Background: white
- Border radius: 12px on top-left and bottom-left corners only
- Shadow: elevation 24 (heavy shadow — `0px 9px 46px`, `0px 24px 38px`, `0px 11px 15px`)
- Header: `history` icon + "Incident Activity" title (h6) + close button
- Content: vertical timeline of `ActivityTimelineItem` components

**MUI v6 implementation**:

```tsx
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import { History, Close } from '@mui/icons-material';

interface ActivityDrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: number;
}

export function ActivityDrawer({ open, onClose, children, width = 440 }: ActivityDrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width,
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          boxShadow: '0px 9px 46px rgba(0,0,0,0.12), 0px 24px 38px rgba(0,0,0,0.14), 0px 11px 15px rgba(0,0,0,0.2)',
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, pt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <History />
          <Typography variant="h6">Incident Activity</Typography>
        </Box>
        <IconButton onClick={onClose} size="small"><Close /></IconButton>
      </Box>

      {/* Timeline content */}
      <Box sx={{ px: 2, py: 2, overflow: 'auto', flex: 1 }}>
        {children}
      </Box>
    </Drawer>
  );
}
```

---

### 2.11 ActivityTimelineItem

**Figma source**: "RecommendationDetail" frames inside drawer
**Observed in**: `1861:8935`, `1861:8949`, `1861:8963`, `1858:8731`

**Design specifics**:
- Left column: Colored avatar circle (24px, initials, various bg colors) + vertical dashed connector line
- Right column: User name + role in parentheses (body2) + timestamp (caption, text.secondary)
- Action card: White bg, 1px `#F3E5F5` border, 8px border-radius, contains action summary text (body1-bold) + expand/collapse chevron
- Vertical connector: 2px dashed line between avatars (`#E1BEE7` color)

**Avatar color palette** (from Figma observations):
- Pink: `#EC4899`
- Teal: `#009688`
- Blue Grey: `#37474F`

**MUI v6 implementation**:

```tsx
import { Box, Avatar, Typography, IconButton, Collapse } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

interface TimelineUser {
  initials: string;
  name: string;
  role: string;
  avatarColor: string;
}

interface ActivityTimelineItemProps {
  user: TimelineUser;
  timestamp: string;
  actionLabel: string;
  expandedContent?: React.ReactNode;
  showConnector?: boolean;
}

export function ActivityTimelineItem({
  user, timestamp, actionLabel, expandedContent, showConnector = true,
}: ActivityTimelineItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box sx={{ display: 'flex', gap: 1, position: 'relative' }}>
      {/* Left: avatar + connector */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 24 }}>
        <Avatar sx={{ width: 24, height: 24, fontSize: 12, bgcolor: user.avatarColor }}>
          {user.initials}
        </Avatar>
        {showConnector && (
          <Box sx={{ flex: 1, width: 2, borderLeft: '2px dashed', borderColor: 'purple.200', mt: 0.5 }} />
        )}
      </Box>

      {/* Right: content */}
      <Box sx={{ flex: 1, pb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography variant="body2">{user.name}</Typography>
          <Typography variant="caption" color="text.secondary">({user.role})</Typography>
        </Box>
        <Typography variant="caption" color="text.secondary">{timestamp}</Typography>

        {/* Action card */}
        <Box
          sx={{
            mt: 1,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'purple.100',
            borderRadius: '8px',
            px: 1.5,
            py: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 600 }}>{actionLabel}</Typography>
          {expandedContent && (
            <IconButton size="small" onClick={() => setExpanded(!expanded)}>
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          )}
        </Box>

        {expandedContent && (
          <Collapse in={expanded}>
            <Box sx={{ mt: 1 }}>{expandedContent}</Box>
          </Collapse>
        )}
      </Box>
    </Box>
  );
}
```

---

### 2.12 DiffCard

**Figma source**: Expandable sections inside "Approved incident as Near Miss" card
**Observed in**: `1861:8925` (expanded drawer) — "UPDATES", "ADDED", "REMOVED" sections

**Design specifics**:
Three visual variants based on change type:

| Type | Background | Border | Label Color | Icon |
|------|-----------|--------|------------|------|
| **Updates** | `#FFF8E1` (amber/lighten-5) | `#FFECB3` | `#FF6F00` (amber/darken-4) | `edit` |
| **Added** | `#F1F8E9` (lightGreen/lighten-5) | `#DCEDC8` | `#33691E` (lightGreen/darken-4) | `add` |
| **Removed** | `#FFEBEE` (red/lighten-5) | `#FFCDD2` | `#B71C1C` (red/darken-4) | `remove` |

Each section contains field-level changes:
- Field label: caption (12px, text.secondary)
- Old value: body2, strikethrough
- Arrow icon between old and new
- New value: body2

**MUI v6 implementation**:

```tsx
import { Box, Typography } from '@mui/material';
import { Edit, Add, Remove, ArrowForward } from '@mui/icons-material';

type DiffType = 'updates' | 'added' | 'removed';

interface FieldChange {
  field: string;
  oldValue?: string;
  newValue?: string;
}

interface DiffCardProps {
  type: DiffType;
  changes: FieldChange[];
}

const diffConfig: Record<DiffType, { bg: string; border: string; labelColor: string; icon: React.ReactNode; label: string }> = {
  updates: { bg: '#FFF8E1', border: '#FFECB3', labelColor: '#FF6F00', icon: <Edit sx={{ fontSize: 18 }} />, label: 'UPDATES' },
  added:   { bg: '#F1F8E9', border: '#DCEDC8', labelColor: '#33691E', icon: <Add sx={{ fontSize: 18 }} />,  label: 'ADDED' },
  removed: { bg: '#FFEBEE', border: '#FFCDD2', labelColor: '#B71C1C', icon: <Remove sx={{ fontSize: 18 }} />, label: 'REMOVED' },
};

export function DiffCard({ type, changes }: DiffCardProps) {
  const config = diffConfig[type];

  return (
    <Box sx={{ bgcolor: config.bg, border: `1px solid ${config.border}`, borderRadius: '8px', p: 1.5 }}>
      {/* Section label */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1.5 }}>
        <Box sx={{ color: config.labelColor }}>{config.icon}</Box>
        <Typography
          variant="overline"
          sx={{ color: config.labelColor, fontWeight: 600, letterSpacing: '2px', lineHeight: '32px' }}
        >
          {config.label}
        </Typography>
      </Box>

      {/* Field changes */}
      {changes.map((change, idx) => (
        <Box key={idx} sx={{ mb: idx < changes.length - 1 ? 1.5 : 0 }}>
          {idx > 0 && <Box sx={{ borderTop: `1px solid ${config.border}`, my: 1.5 }} />}
          <Typography variant="caption" color="text.secondary">{change.field}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.25 }}>
            {change.oldValue && (
              <>
                <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
                  {change.oldValue}
                </Typography>
                {change.newValue && <ArrowForward sx={{ fontSize: 18, color: 'text.secondary' }} />}
              </>
            )}
            {change.newValue && <Typography variant="body2">{change.newValue}</Typography>}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
```

Usage example:

```tsx
<DiffCard
  type="updates"
  changes={[
    { field: 'Status', oldValue: 'Reported', newValue: 'Approved by Safety' },
    { field: 'Classification', oldValue: 'Pending', newValue: 'Workplace Safety Near Miss' },
  ]}
/>
<DiffCard
  type="added"
  changes={[{ field: 'Exact Location', newValue: 'Around vessel D-510 top manhole area' }]}
/>
<DiffCard
  type="removed"
  changes={[{ field: 'Equipment Tag', oldValue: 'TAG-TEMP-001A' }]}
/>
```

---

### 2.13 IncidentForm

**Figma source**: `1698:7954` — Report Incident page
**Component name in Figma**: "Near Miss Reporting Tool / Report New Incident"

**Sections**:

1. **Report Information** — icon: `description`, purple text header
   - Incident ID: `TextField` disabled (auto-generated)
   - Date & Time: `TextField` with `event` icon
   - Department: overline label + `Select` dropdown
   - Exact Location: `TextField`

2. **Incident Details** — icon: `mark_chat_read`, purple text header
   - Short Description: `TextField` multiline
   - Immediate Action Taken: `TextField` multiline (bulleted list content)

3. **Reporting As** — icon: `engineering`, purple text header
   - Self / Someone else: `RadioGroup` with purple highlight on selected
   - Reported on: `TextField` with `event` icon (datetime)

**Design specifics**:
- Section card: elevation 2, 24px border-radius, white bg, `#E0E0E0` border
- Section title: `#4A148C` text, SemiBold 16px, with colored icon
- All text fields: variant="outlined", size="medium"
- Radio buttons: `#4A148C` when selected, `#E8F5E9` background on selected option row
- Form container background: `#FDFAFE`

**MUI v6 implementation**:

```tsx
import {
  Box, Card, TextField, Typography, Select, MenuItem,
  FormControl, InputLabel, Radio, RadioGroup,
  FormControlLabel, InputAdornment,
} from '@mui/material';
import { Description, MarkChatRead, Engineering, Event } from '@mui/icons-material';

interface FormSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FormSection({ icon, title, children }: FormSectionProps) {
  return (
    <Card elevation={2} sx={{ borderRadius: '24px', border: '1px solid', borderColor: 'divider', p: 3, mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <Box sx={{ color: 'primary.main' }}>{icon}</Box>
        <Typography variant="body1" sx={{ fontWeight: 600, color: 'primary.main' }}>{title}</Typography>
      </Box>
      {children}
    </Card>
  );
}

export function IncidentForm() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 2 }}>
      <FormSection icon={<Description />} title="Report Information">
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField label="Incident ID" variant="outlined" disabled fullWidth />
          <TextField
            label="Date & Time"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end"><Event /></InputAdornment>,
            }}
          />
        </Box>
        <Typography variant="overline" sx={{ color: 'primary.main', mb: 1, display: 'block' }}>
          Department
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Department</InputLabel>
          <Select label="Department" variant="outlined">{/* options */}</Select>
        </FormControl>
        <TextField label="Exact Location" variant="outlined" fullWidth />
      </FormSection>

      <FormSection icon={<MarkChatRead />} title="Incident Details">
        <TextField label="Short Description" variant="outlined" multiline rows={4} fullWidth sx={{ mb: 2 }} />
        <TextField label="Immediate Action Taken" variant="outlined" multiline rows={5} fullWidth />
      </FormSection>

      <FormSection icon={<Engineering />} title="Reporting as">
        <RadioGroup row defaultValue="self">
          <FormControlLabel
            value="self"
            control={<Radio sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
            label="Self"
            sx={{
              flex: 1,
              bgcolor: 'success.light',    // #E8F5E9 when selected
              borderRadius: '8px',
              px: 2,
              py: 1,
              mr: 1,
            }}
          />
          <FormControlLabel
            value="someone_else"
            control={<Radio sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
            label="Someone else"
            sx={{ flex: 1, px: 2, py: 1 }}
          />
        </RadioGroup>
        <TextField
          label="Reported on"
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          InputProps={{
            endAdornment: <InputAdornment position="end"><Event /></InputAdornment>,
          }}
        />
      </FormSection>
    </Box>
  );
}
```

---

### 2.14 ActionButtonGroup

**Figma source**: Footer buttons on Report Incident page
**Observed in**: `1698:7954`

**Three buttons**:
1. "SAVE AS DRAFT" — `variant="text"`, `color="secondary"` (purple text)
2. "CLEAR ALL" — `variant="outlined"`, `color="error"` (red border/text)
3. "SUBMIT" — `variant="contained"`, `color="secondary"` (purple bg, white text), with `done` (checkmark) start icon

**MUI v6 implementation**:

```tsx
import { Box, Button } from '@mui/material';
import { Done } from '@mui/icons-material';

interface ActionButtonGroupProps {
  onSaveDraft: () => void;
  onClearAll: () => void;
  onSubmit: () => void;
  submitDisabled?: boolean;
}

export function ActionButtonGroup({ onSaveDraft, onClearAll, onSubmit, submitDisabled }: ActionButtonGroupProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, py: 3 }}>
      <Button variant="text" color="secondary" size="large" onClick={onSaveDraft}>
        Save as Draft
      </Button>
      <Button variant="outlined" color="error" size="large" onClick={onClearAll}>
        Clear All
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<Done />}
        onClick={onSubmit}
        disabled={submitDisabled}
      >
        Submit
      </Button>
    </Box>
  );
}
```

---

### 2.15 ExportButton

**Figma source**: Export CTA in page headers
**Observed in**: `2103:11610`, `2078:10989`

**Design specifics**:
- MUI Button, variant="text", color="secondary" (#4A148C text)
- Start icon: `file_download`
- End icon: `expand_more` (indicates dropdown menu)
- Font: Medium 14px, uppercase, 0.4px letter-spacing

**MUI v6 implementation**:

```tsx
import { Button, Menu, MenuItem } from '@mui/material';
import { FileDownload, ExpandMore } from '@mui/icons-material';

interface ExportButtonProps {
  onExport: (format: 'pdf' | 'csv' | 'xlsx') => void;
}

export function ExportButton({ onExport }: ExportButtonProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <Button
        variant="text"
        color="secondary"
        startIcon={<FileDownload />}
        endIcon={<ExpandMore />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ textTransform: 'uppercase', fontWeight: 500, letterSpacing: '0.4px' }}
      >
        Export
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => { onExport('pdf'); setAnchorEl(null); }}>Export as PDF</MenuItem>
        <MenuItem onClick={() => { onExport('csv'); setAnchorEl(null); }}>Export as CSV</MenuItem>
        <MenuItem onClick={() => { onExport('xlsx'); setAnchorEl(null); }}>Export as XLSX</MenuItem>
      </Menu>
    </>
  );
}
```

---

## Section 3: Page-Level Patterns

### 3.1 Dashboard Pattern

**Used by**: Analysis Dashboard (`2103:11610`, `2202:12231`)

```
+------------------------------------------------------+
| PageHeader ("Analysis")         [ExportButton]        |
+------------------------------------------------------+
| TabNavigation (All | Near Miss | Unsafe Cond | Acts)  |
|                                  [FilterControls]     |
+------------------------------------------------------+
| REPORT SUMMARY (overline)                             |
| +-- SummaryCard --+ +-- SummaryCard --+ +-- Card --+ |
| |  INCIDENTS      | | INVESTIGATIONS | |  RECOM.  | |
| +--+---------+----+ +--+---------+----+ +--+-------+ |
+------------------------------------------------------+
| INCIDENT ANALYSIS (overline)                          |
| +-- Chart Card --+  +-- Chart Card -----------+      |
| | Incident Trend |  | Resolution Rate          |     |
| +---+--------+---+  +---+--+--+--+--+---+-----+     |
+------------------------------------------------------+
| MONTHLY TRENDS (overline)                             |
| +-- Chart Card --+  +-- Chart Card -----------+      |
| | Direct Cause   |  | Root Cause Analysis      |     |
| +---+--------+---+  +---+--+--+--+--+---+-----+     |
+------------------------------------------------------+
```

**Key composition**: `AppShell` > `SideNavigation` + Content > `PageHeader` + `TabNavigation` + `FilterControls` + vertical stack of `SummaryCard` rows and chart sections.

### 3.2 List-Detail Pattern

**Used by**: Investigations (`1726:8079`) + Activity Drawer (`1861:8925`, `1858:8721`)

```
+-------------------------------+--------------------+
| PageHeader                    |                    |
+-------------------------------+  ActivityDrawer    |
| TabNavigation                 |  +-Timeline----+   |
+-------------------------------+  | Item 1      |   |
| StatusFilterBar               |  | Item 2      |   |
+-------------------------------+  |   DiffCard  |   |
| FilterControls (Search)       |  | Item 3      |   |
+-------------------------------+  +-------------+   |
| DataTable                     |                    |
| | ID | Date | Summary | ... | |                    |
| | ...rows...             |> | |                    |
+-------------------------------+--------------------+
```

**Interaction flow**: User clicks a table row (chevron_right) to open the `ActivityDrawer` on the right side. The drawer shows the timeline of actions taken on that incident (submissions, approvals, investigation reports). Each timeline item can be expanded to show `DiffCard` components.

### 3.3 Form Pattern

**Used by**: Report Incident (`1698:7954`)

```
+------------------------------------------------------+
| PageHeader ("Report Incident") [Start New Incident]   |
+------------------------------------------------------+
| ViewToggle (Chat View | Report View)                  |
+------------------------------------------------------+
| FormSection: Report Information                       |
|   [Incident ID]  [Date & Time]                       |
|   DEPARTMENT (overline)                               |
|   [Department dropdown]                               |
|   [Exact Location]                                   |
+------------------------------------------------------+
| FormSection: Incident Details                         |
|   [Short Description - multiline]                    |
|   [Immediate Action Taken - multiline]               |
+------------------------------------------------------+
| FormSection: Reporting As                             |
|   (o) Self    ( ) Someone else                       |
|   [Reported on]                                      |
+------------------------------------------------------+
| ActionButtonGroup                                     |
|   SAVE AS DRAFT  |  CLEAR ALL  |  ✓ SUBMIT          |
+------------------------------------------------------+
```

**Key behavior**: The `ViewToggle` switches between "Chat View" (conversational AI-guided entry) and "Report View" (traditional form). Both share the same data model.

### 3.4 Drilldown Pattern

**Used by**: Analysis > Recommendations (`2078:10989`)

```
Tab (Near Miss) → SummaryCard (Recommendations: 87 Open, 20 Closed)
  → Click chevron → All Recommendations page
    → TabNavigation (All | Open | Closed) + resolution badge
    → ViewToggle (Table | Chart)
    → DataTable (sortable, filterable, paginated)
      → Row click → Individual recommendation detail
```

**Navigation breadcrumb**: The "All Recommendations" page shows a back arrow + subtitle ("Feb-Mar 2026 - Consolidated") indicating it was reached via drilldown from the Analysis dashboard.

---

## Section 4: Icon Inventory

All icons used in the Figma designs map to `@mui/icons-material`. Import using PascalCase.

| Figma Icon Name | MUI Import | Usage Context |
|----------------|------------|---------------|
| `add_circle` | `AddCircle` | "Report Incident" nav CTA |
| `warning` | `Warning` | Incidents nav icon, alert indicators |
| `assignment` | `Assignment` | Reports nav icon |
| `manage_search` | `ManageSearch` | Investigations nav icon |
| `recommend` | `Recommend` | Recommendations nav icon |
| `analytics` | `Analytics` | Analysis nav icon, chart indicators |
| `expand_more` | `ExpandMore` | Dropdowns, collapse toggles, export menu |
| `expand_less` | `ExpandLess` | Collapse state |
| `file_download` | `FileDownload` | Export button icon |
| `filter_list` | `FilterList` | Filter button icon |
| `chevron_right` | `ChevronRight` | Table row action, navigation |
| `chevron_left` | `ChevronLeft` | Pagination prev, back nav |
| `event` | `Event` | Date picker icon |
| `edit` | `Edit` | "Updates" diff section icon |
| `arrow_forward` | `ArrowForward` | Diff arrows (old → new) |
| `arrow_back_ios` | `ArrowBackIos` | Back navigation |
| `add` | `Add` | "Added" diff section icon |
| `remove` | `Remove` | "Removed" diff section icon |
| `close` | `Close` | Drawer close button |
| `groups` | `Groups` | Department/team indicators |
| `workspace_premium` | `WorkspacePremium` | Recommendations icon (ribbon) |
| `pie_chart` | `PieChart` | Chart view icon |
| `engineering` | `Engineering` | "Reporting As" section icon |
| `radio_button_checked` | `RadioButtonChecked` | Selected radio state |
| `radio_button_unchecked` | `RadioButtonUnchecked` | Unselected radio state |
| `done` | `Done` | Submit button checkmark |
| `mark_chat_read` | `MarkChatRead` | "Incident Details" section icon |
| `description` | `Description` | "Report Information" section icon, document |
| `add_location_alt` | `AddLocationAlt` | Location-related fields |
| `troubleshoot` | `Troubleshoot` | Investigation/analysis icon |
| `history` | `History` | Activity drawer header icon |
| `menu` | `Menu` | Hamburger menu |

**Batch import pattern**:

```tsx
import {
  AddCircle, Warning, Assignment, ManageSearch, Recommend, Analytics,
  ExpandMore, ExpandLess, FileDownload, FilterList, ChevronRight, ChevronLeft,
  Event, Edit, ArrowForward, ArrowBackIos, Add, Remove, Close,
  Groups, WorkspacePremium, PieChart, Engineering,
  RadioButtonChecked, RadioButtonUnchecked, Done,
  MarkChatRead, Description, AddLocationAlt, Troubleshoot, History, Menu,
} from '@mui/icons-material';
```

---

## Section 5: Developer Quick-Start

### 5.1 Complete MUI v6 Theme Configuration

```typescript
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    form: string;
  }
  interface Palette {
    purple: {
      900: string; 800: string; 300: string; 200: string; 100: string;
    };
  }
  interface PaletteOptions {
    purple?: {
      900?: string; 800?: string; 300?: string; 200?: string; 100?: string;
    };
  }
  interface TypographyVariants {
    body1Bold: React.CSSProperties;
    tableHeader: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body1Bold?: React.CSSProperties;
    tableHeader?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body1Bold: true;
    tableHeader: true;
  }
}

export const ravenNearMissTheme = createTheme({
  palette: {
    primary: {
      main: '#4A148C',
      light: '#CE93D8',
      dark: '#311B92',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#4A148C',
      light: '#E1BEE7',
    },
    success: { main: '#4CAF50', dark: '#1B5E20', light: '#E8F5E9' },
    error:   { main: '#F44336', dark: '#B71C1C', light: '#FFEBEE' },
    warning: { main: '#FF9800', dark: '#FF6F00', light: '#FFF8E1' },
    info:    { main: '#0288D1', dark: '#01579B', light: '#E1F5FE' },
    background: {
      default: '#FCF6FE',
      paper: '#FFFFFF',
      form: '#FDFAFE',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.42)',
    },
    divider: '#E0E0E0',
    purple: {
      900: '#4A148C',
      800: '#6A1B9A',
      300: '#CE93D8',
      200: '#E1BEE7',
      100: '#F3E5F5',
    },
  },

  typography: {
    fontFamily: '"Source Sans 3", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontSize: '2.125rem',
      fontWeight: 600,
      lineHeight: '40px',
      letterSpacing: '0.25px',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: '32px',
      letterSpacing: '0.15px',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: '0.15px',
    },
    body1Bold: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.75,
      letterSpacing: '0.15px',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.25px',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '22px',
      letterSpacing: '0.1px',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0.4px',
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: '0.4px',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: '32px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    tableHeader: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '0.17px',
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'uppercase',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: '"Source Sans 3", sans-serif',
          fontSize: '15px',
          fontWeight: 600,
          letterSpacing: '0.46px',
          textTransform: 'uppercase',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 4,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: '"Source Sans 3", sans-serif',
          fontWeight: 600,
          fontSize: '14px',
          letterSpacing: '0.17px',
        },
      },
    },
  },
});
```

### 5.2 Required Dependencies

```json
{
  "@mui/material": "^6.x",
  "@mui/icons-material": "^6.x",
  "@emotion/react": "^11.x",
  "@emotion/styled": "^11.x",
  "@fontsource/source-sans-3": "^5.x"
}
```

Font setup in your entry file:

```tsx
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/500.css';
import '@fontsource/source-sans-3/600.css';
```

### 5.3 Component Implementation Checklist

| Priority | Component | MUI Base | Props Interface | Status |
|----------|-----------|----------|----------------|--------|
| P0 | AppShell | Box | `sidebar`, `children` | -- |
| P0 | SideNavigation | Drawer, List | `activePath`, `onNavigate` | -- |
| P0 | PageHeader | Box, Typography | `title`, `subtitle?`, `onBack?`, `actions?` | -- |
| P0 | TabNavigation | Tabs, Tab | `tabs`, `activeIndex`, `onChange` | -- |
| P0 | DataTable | Table, TablePagination | `columns`, `rows`, `rowKey`, `onRowClick?`, pagination props | -- |
| P1 | SummaryCard | Card | `icon`, `title`, `stats`, `closureRate`, `trend` | -- |
| P1 | FilterControls | TextField, Select | `departments`, `dateRange`, `searchQuery?` | -- |
| P1 | StatusFilterBar | Box, Chip | `filters`, `activeIndex`, `onChange` | -- |
| P1 | ViewToggle | Box, ButtonBase | `options`, `value`, `onChange` | -- |
| P1 | ActivityDrawer | Drawer | `open`, `onClose`, `children` | -- |
| P1 | ActivityTimelineItem | Box, Avatar, Collapse | `user`, `timestamp`, `actionLabel`, `expandedContent?` | -- |
| P2 | DiffCard | Box | `type`, `changes` | -- |
| P2 | IncidentForm | Card, TextField, Radio | Form-specific props | -- |
| P2 | ActionButtonGroup | Box, Button | `onSaveDraft`, `onClearAll`, `onSubmit` | -- |
| P2 | ExportButton | Button, Menu | `onExport` | -- |

### 5.4 File Structure Recommendation

```
src/
├── theme/
│   └── ravenNearMissTheme.ts         # Theme from Section 5.1
├── components/
│   ├── layout/
│   │   ├── AppShell.tsx              # 2.1
│   │   ├── SideNavigation.tsx        # 2.2
│   │   └── PageHeader.tsx            # 2.3
│   ├── navigation/
│   │   ├── TabNavigation.tsx         # 2.4
│   │   ├── StatusFilterBar.tsx       # 2.5
│   │   └── ViewToggle.tsx            # 2.8
│   ├── data-display/
│   │   ├── SummaryCard.tsx           # 2.6
│   │   ├── DataTable.tsx             # 2.7
│   │   └── DiffCard.tsx              # 2.12
│   ├── feedback/
│   │   ├── ActivityDrawer.tsx        # 2.10
│   │   └── ActivityTimelineItem.tsx  # 2.11
│   ├── forms/
│   │   ├── IncidentForm.tsx          # 2.13
│   │   ├── FilterControls.tsx        # 2.9
│   │   └── ActionButtonGroup.tsx     # 2.14
│   └── actions/
│       └── ExportButton.tsx          # 2.15
└── pages/
    ├── AnalysisDashboard.tsx         # Pattern 3.1
    ├── InvestigationsList.tsx        # Pattern 3.2
    ├── RecommendationsList.tsx       # Pattern 3.4
    └── ReportIncident.tsx            # Pattern 3.3
```

### 5.5 Updated File Structure (with new components)

```
src/
├── theme/
│   └── ravenNearMissTheme.ts
├── components/
│   ├── layout/
│   │   ├── AppShell.tsx              # 2.1
│   │   ├── SideNavigation.tsx        # 2.2
│   │   ├── PageHeader.tsx            # 2.3
│   │   └── MobileAppShell.tsx        # 6.10
│   ├── navigation/
│   │   ├── TabNavigation.tsx         # 2.4
│   │   ├── StatusFilterBar.tsx       # 2.5
│   │   ├── ViewToggle.tsx            # 2.8
│   │   ├── BreadcrumbNav.tsx         # 6.6
│   │   └── OrgSwitchDropdown.tsx     # 6.9
│   ├── data-display/
│   │   ├── SummaryCard.tsx           # 2.6
│   │   ├── DataTable.tsx             # 2.7
│   │   ├── DiffCard.tsx              # 2.12
│   │   ├── StatusStepper.tsx         # 6.4
│   │   └── StatusTransitionCard.tsx  # 6.8
│   ├── feedback/
│   │   ├── ActivityDrawer.tsx        # 2.10
│   │   ├── ActivityTimelineItem.tsx  # 2.11
│   │   └── RecommendationPanel.tsx   # 6.5
│   ├── forms/
│   │   ├── IncidentForm.tsx          # 2.13
│   │   ├── FilterControls.tsx        # 2.9
│   │   ├── ActionButtonGroup.tsx     # 2.14
│   │   └── CommentInput.tsx          # 6.7
│   ├── chat/
│   │   ├── ChatInput.tsx             # 6.1
│   │   ├── ChatBubble.tsx            # 6.2
│   │   └── GradientTitle.tsx         # 6.3
│   └── actions/
│       └── ExportButton.tsx          # 2.15
└── pages/
    ├── AnalysisDashboard.tsx
    ├── InvestigationsList.tsx
    ├── RecommendationsList.tsx
    ├── RecommendationDetail.tsx      # Pattern 3.5
    ├── ReportIncident.tsx
    └── ReportIncidentChat.tsx        # Pattern 3.6
```

### 5.6 Figma-to-MUI Quick Reference

| Figma Pattern | MUI v6 Component | Key sx Props |
|---------------|-------------------|-------------|
| Purple filled pill nav item | `ListItemButton` | `bgcolor: 'primary.main'`, `borderRadius: '50px'` |
| Rounded content container | `Box` | `borderRadius: '24px'`, `border: '1px solid'`, `borderColor: 'purple.100'` |
| Tab indicator | `Tabs` indicator | `height: 4`, `borderTopLeftRadius: 50` |
| Brand-tinted shadow | `Box` | `boxShadow: '0px 2px 16px rgba(74,20,140,0.12)'` |
| Strikethrough old value | `Typography` | `textDecoration: 'line-through'` |
| Status dot + label | `Box` + `Typography` | `width: 8`, `height: 8`, `borderRadius: '50%'` |
| Section overline | `Typography variant="overline"` | `color: 'primary.main'` |
| Drawer rounded left | `Drawer paper` | `borderTopLeftRadius: 12`, `borderBottomLeftRadius: 12` |

---

## Section 6: Additional Components (from Chat, Mobile, and Detail screens)

> Added 2026-03-26 from Figma nodes: `1698:7790`, `1328:34223`, `1328:33616`, `1033:8443`, `1033:8721`, `1033:8582`, `1097:9799`

### Additional Screens Analyzed

| # | Screen Name | Node ID | Purpose |
|---|------------|---------|---------|
| 8 | Report Incident - Chat View (Desktop) | `1698:7790` | AI conversational input with background graphic |
| 9 | Reports Page (Operator view) | `1328:34223` | Reports list with Operator role sidebar |
| 10 | Reports Page (Safety Manager) | `1328:33616` | Reports list with Safety Manager role |
| 11 | Mobile Landing Page | `1033:8443` | Mobile 402px viewport, gradient title, camera/mic input |
| 12 | Mobile Chat Conversation | `1033:8721` | Mobile chat bubbles (user + AI structured response) |
| 13 | Mobile Landing with Keyboard | `1033:8582` | Mobile input active state with send icon |
| 14 | Recommendation Detail | `1097:9799` | Three-column layout with breadcrumb, stepper, comments |

### 6.0 Additional Design Tokens

#### New Colors

| Token | Value | Usage | MUI v6 Mapping |
|-------|-------|-------|----------------|
| `bg.inputField` | `#FAFAFA` | Chat input field background | `palette.grey[50]` |
| `border.headerMobile` | `#DEDCEA` | Mobile header bottom border | Custom |
| `border.aiResponse` | `rgba(0,0,0,0.12)` | AI chat bubble border | `palette.divider` |
| `bg.aiResponse` | `rgba(0,0,0,0.04)` | AI chat bubble background | `palette.action.hover` |

#### New Gradients

| Token | Value | Usage |
|-------|-------|-------|
| `gradient.ravenAccent` | `linear-gradient(-14deg, rgb(191,64,174) 0%, rgb(107,64,191) 50%, rgb(78,64,191) 100%)` | Gradient text on landing/hero titles |
| `gradient.orgAvatar` | `linear-gradient(to bottom, #0CDACC, #311B92)` | Org switch avatar background |

#### New Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow.chatInput` | `0px 0px 8px 4px rgba(167,64,179,0.08)` | Chat input field glow |
| `shadow.titleCard` | `0px 2px 8px rgba(63,81,181,0.04)` | Title/hero container subtle shadow |

#### New Typography

| Figma Style | Size | Weight | Line Height | Letter Spacing | MUI v6 Variant |
|------------|------|--------|-------------|----------------|----------------|
| `Product Typography/h5` | 24px | 600 (SemiBold) | 32px | 0 | `typography.h5` |

### 6.1 ChatInput

**Figma source**: `1033:8555` (mobile), `1698:7821` (desktop)
**Observed in**: `1033:8443`, `1033:8582`, `1033:8721`, `1698:7790`

**Design specifics**:
- Pill-shaped input (50px border-radius)
- Background: `#FAFAFA`
- Border: 1px `#E1BEE7` (relaxed) or 1px `rgba(0,0,0,0.87)` (active/focused)
- Height: 56px (mobile), 136px (desktop multiline)
- Left icon: `photo_camera` (camera)
- Right icon: `mic` (microphone) or `send` (when text is entered)
- Placeholder: "Message" or "Please tell us what happened..."
- Shadow on focus: `0px 0px 8px 4px rgba(167,64,179,0.08)`
- Desktop variant has attachment icon (`attach_file`) on bottom-left and mic on bottom-right

```tsx
import { Box, InputBase, IconButton } from '@mui/material';
import { PhotoCamera, Mic, Send, AttachFile } from '@mui/icons-material';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder?: string;
  multiline?: boolean;
}

export function ChatInput({ value, onChange, onSend, placeholder = 'Message', multiline = false }: ChatInputProps) {
  const hasText = value.trim().length > 0;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: multiline ? 'column' : 'row',
        alignItems: multiline ? 'stretch' : 'center',
        bgcolor: '#FAFAFA',
        border: '1px solid',
        borderColor: hasText ? 'text.primary' : 'purple.200',
        borderRadius: multiline ? '20px' : '50px',
        px: 1.5,
        py: multiline ? 1.5 : 0,
        height: multiline ? 136 : 56,
        boxShadow: '0px 0px 8px 4px rgba(167,64,179,0.08)',
        '&:focus-within': { borderColor: 'text.primary' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, gap: 1 }}>
        <IconButton size="small"><PhotoCamera sx={{ color: 'text.disabled' }} /></IconButton>
        <InputBase
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          multiline={multiline}
          sx={{ flex: 1, fontSize: '16px', fontFamily: '"Source Sans 3", sans-serif' }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: multiline ? 'space-between' : 'flex-end', alignItems: 'center' }}>
        {multiline && <IconButton size="small"><AttachFile sx={{ color: 'text.disabled' }} /></IconButton>}
        <IconButton size="small" onClick={hasText ? onSend : undefined}>
          {hasText ? <Send sx={{ color: 'primary.main' }} /> : <Mic sx={{ color: 'text.disabled' }} />}
        </IconButton>
      </Box>
    </Box>
  );
}
```

---

### 6.2 ChatBubble

**Figma source**: `1033:8738` (user), `1033:8743` (AI)
**Observed in**: `1033:8721`

**Two variants**:

| Variant | Background | Border | Alignment | Border Radius |
|---------|-----------|--------|-----------|---------------|
| **User** | `#F3E5F5` | `#E1BEE7` | Right-aligned | 20px TL, 20px TR, 20px BL, 2px BR |
| **AI** | `rgba(0,0,0,0.04)` | `rgba(0,0,0,0.12)` | Left-aligned | 20px TL, 20px TR, 2px BL, 20px BR |

Both include a caption-style timestamp ("10:30 AM") right-aligned at the bottom.
AI responses support structured content (bold labels, bulleted lists with emoji prefixes, italic follow-up questions).

```tsx
import { Box, Typography } from '@mui/material';

interface ChatBubbleProps {
  variant: 'user' | 'ai';
  children: React.ReactNode;
  timestamp: string;
}

export function ChatBubble({ variant, children, timestamp }: ChatBubbleProps) {
  const isUser = variant === 'user';

  return (
    <Box sx={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', px: 2.5, py: 1 }}>
      <Box
        sx={{
          maxWidth: 300,
          px: 1.5,
          py: 1,
          bgcolor: isUser ? 'purple.100' : 'action.hover',
          border: '1px solid',
          borderColor: isUser ? 'purple.200' : 'divider',
          borderRadius: isUser
            ? '20px 20px 2px 20px'
            : '20px 20px 20px 2px',
        }}
      >
        <Typography variant="body1" component="div">{children}</Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'right', mt: 0.5 }}>
          {timestamp}
        </Typography>
      </Box>
    </Box>
  );
}
```

---

### 6.3 GradientTitle

**Figma source**: `1033:8549`, `1033:8688`
**Observed in**: `1033:8443`, `1033:8582` (mobile landing pages)

**Design specifics**:
- Font: Source Sans 3, h4 (34px SemiBold, 40px line-height, 0.25px letter-spacing)
- Gradient: purple-to-indigo (`rgb(191,64,174)` → `rgb(107,64,191)` → `rgb(78,64,191)`) at -14 degrees
- Applied via `background-clip: text` with `color: transparent`

```tsx
import { Typography, TypographyProps } from '@mui/material';

export function GradientTitle({ children, ...props }: TypographyProps) {
  return (
    <Typography
      variant="h4"
      {...props}
      sx={{
        textAlign: 'center',
        background: 'linear-gradient(-14deg, rgb(191,64,174) 0%, rgb(107,64,191) 50%, rgb(78,64,191) 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        ...props.sx,
      }}
    >
      {children}
    </Typography>
  );
}
```

---

### 6.4 StatusStepper

**Figma source**: Right panel in Recommendation Detail
**Observed in**: `1097:9799` — Pending → In Progress → In Review → Done

**Design specifics**:
- Vertical stepper with 4 states
- Active step: filled purple dot (8px), bold text
- Completed steps: filled dot with line connector
- Upcoming steps: grey outlined dot, muted text
- Connector line between steps

```tsx
import { Box, Typography } from '@mui/material';

interface StatusStep {
  label: string;
  completed?: boolean;
  active?: boolean;
}

interface StatusStepperProps {
  steps: StatusStep[];
}

export function StatusStepper({ steps }: StatusStepperProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {steps.map((step, idx) => (
        <Box key={step.label} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 16 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                mt: 0.75,
                bgcolor: step.active ? 'primary.main' : step.completed ? 'primary.main' : 'grey.400',
                border: step.active || step.completed ? 'none' : '1px solid',
                borderColor: 'grey.400',
              }}
            />
            {idx < steps.length - 1 && (
              <Box sx={{ width: 1, flex: 1, minHeight: 16, bgcolor: step.completed ? 'primary.main' : 'grey.300' }} />
            )}
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: step.active ? 600 : 400,
              color: step.active ? 'text.primary' : 'text.secondary',
              pb: 1,
            }}
          >
            {step.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
```

---

### 6.5 RecommendationDetailPanel

**Figma source**: Right-side panel in `1097:9799`
**Purpose**: Fixed right sidebar showing incident metadata, collapsible sections

**Sections** (each with icon + title + collapse chevron):
1. **Report** — `description` icon, collapsible
2. **Investigation** — `manage_search` icon, collapsible
3. **Recommendation Details** — `info` icon, expanded by default
   - Status: `StatusStepper` (Pending → In Progress → In Review → Done)
   - Recommendation ID, Plant, Assigned by (avatar + name), Assignee (avatar + name)
   - Assigned at, Target Date with "27 days remaining" chip (green)

```tsx
import { Box, Typography, IconButton, Collapse, Avatar, Chip } from '@mui/material';
import { Description, ManageSearch, Info, ExpandMore, ExpandLess } from '@mui/icons-material';

interface DetailSection {
  icon: React.ReactNode;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

function CollapsibleSection({ icon, title, defaultOpen = false, children }: DetailSection) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', py: 1.5 }}>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', px: 1 }}
        onClick={() => setOpen(!open)}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {icon}
          <Typography variant="body1" sx={{ fontWeight: 600 }}>{title}</Typography>
        </Box>
        <IconButton size="small">{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
      </Box>
      <Collapse in={open}>
        <Box sx={{ px: 1, pt: 1.5 }}>{children}</Box>
      </Collapse>
    </Box>
  );
}
```

---

### 6.6 BreadcrumbNavigation

**Figma source**: Header in `1097:9799`
**Pattern**: `< Recommendation > CA-111 ● In Progress`

```tsx
import { Box, Typography, Chip, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface BreadcrumbNavProps {
  parentLabel: string;
  currentId: string;
  status: string;
  onBack: () => void;
}

export function BreadcrumbNav({ parentLabel, currentId, status, onBack }: BreadcrumbNavProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <IconButton size="small" onClick={onBack}><ChevronLeft /></IconButton>
      <Typography variant="body2" color="text.secondary">{parentLabel}</Typography>
      <ChevronRight fontSize="small" sx={{ color: 'text.disabled' }} />
      <Typography variant="body1" sx={{ fontWeight: 600 }}>{currentId}</Typography>
      <Chip
        label={status}
        size="small"
        sx={{
          bgcolor: status === 'In Progress' ? 'info.light' : 'grey.100',
          color: status === 'In Progress' ? 'info.dark' : 'text.secondary',
          fontWeight: 500,
        }}
        icon={<Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'info.main', ml: 1 }} />}
      />
    </Box>
  );
}
```

---

### 6.7 CommentInput

**Figma source**: "Add Comment" section in `1097:9799`
**Purpose**: Multi-line text area for adding activity updates, with attachment and send icons

```tsx
import { Box, InputBase, IconButton, Typography } from '@mui/material';
import { AttachFile, ArrowUpward } from '@mui/icons-material';

interface CommentInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export function CommentInput({ value, onChange, onSubmit }: CommentInputProps) {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 1.5, fontSize: '16px' }}>Add Comment</Typography>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '8px',
          p: 1.5,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <InputBase
          multiline
          rows={2}
          placeholder="Describe the action taken, progress made, or any issues encountered..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          sx={{ flex: 1, fontSize: '14px' }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton size="small"><AttachFile sx={{ color: 'text.disabled' }} /></IconButton>
          <IconButton
            size="small"
            onClick={onSubmit}
            sx={{ bgcolor: value.trim() ? 'primary.main' : 'grey.200', color: value.trim() ? 'white' : 'text.disabled', borderRadius: '50%' }}
          >
            <ArrowUpward fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
```

---

### 6.8 StatusTransitionCard

**Figma source**: Activity entry in `1097:9799`
**Pattern**: "Status updated from [Assigned] to [In Progress]" with chip-styled values

```tsx
import { Box, Typography, Chip } from '@mui/material';

interface StatusTransitionCardProps {
  fromStatus: string;
  toStatus: string;
}

export function StatusTransitionCard({ fromStatus, toStatus }: StatusTransitionCardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '8px',
        px: 1.5,
        py: 1,
      }}
    >
      <Typography variant="body2" color="text.secondary">Status updated from</Typography>
      <Chip label={fromStatus} size="small" variant="outlined" />
      <Typography variant="body2" color="text.secondary">to</Typography>
      <Chip label={toStatus} size="small" variant="outlined" />
    </Box>
  );
}
```

---

### 6.9 OrgSwitchDropdown

**Figma source**: Bottom of sidebar in `1698:7947`, `1097:9808`
**Purpose**: User identity + org context display with gradient avatar

**Variants observed**:
- Simple: Dark gradient avatar (grey to black) + name + chevron (from `1698:7947`)
- Detailed: Teal-to-purple gradient avatar + name + role + chevron (from `1097:9808`)

```tsx
import { Box, Typography, Avatar } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface OrgSwitchProps {
  initials: string;
  name: string;
  role?: string;
  gradientColors?: [string, string];
}

export function OrgSwitchDropdown({ initials, name, role, gradientColors = ['#737373', '#1a1a1a'] }: OrgSwitchProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        bgcolor: 'action.hover',
        borderRadius: '12px',
        p: 0.75,
        cursor: 'pointer',
      }}
    >
      <Avatar
        sx={{
          width: 32,
          height: 32,
          fontSize: 14,
          background: `linear-gradient(to bottom, ${gradientColors[0]}, ${gradientColors[1]})`,
          borderRadius: '4px',
        }}
      >
        {initials}
      </Avatar>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="subtitle2" noWrap>{name}</Typography>
        {role && <Typography variant="caption" color="text.secondary" noWrap>{role}</Typography>}
      </Box>
      <ExpandMore fontSize="small" sx={{ color: 'text.secondary' }} />
    </Box>
  );
}
```

---

### 6.10 MobileAppShell

**Figma source**: `1033:8443`, `1033:8721`, `1033:8582`
**Purpose**: 402px mobile viewport layout

**Structure**:
- Header: hamburger menu + title, optional action icons (add_circle_outline, receipt_long), `backdrop-filter: blur(15px)`, sticky
- Content: flexible center area
- Bottom: iOS-style home indicator bar

```tsx
import { Box, Typography, IconButton, AppBar, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';

interface MobileAppShellProps {
  title: string;
  headerActions?: React.ReactNode;
  children: React.ReactNode;
}

export function MobileAppShell({ title, headerActions, children }: MobileAppShellProps) {
  return (
    <Box sx={{ width: '100%', maxWidth: 402, mx: 'auto', bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'transparent',
          backdropFilter: 'blur(15px)',
          borderBottom: '1px solid',
          borderColor: '#DEDCEA',
        }}
      >
        <Toolbar sx={{ minHeight: 56 }}>
          <IconButton edge="start"><Menu /></IconButton>
          <Typography variant="h6" sx={{ flex: 1 }}>{title}</Typography>
          {headerActions}
        </Toolbar>
      </AppBar>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>
    </Box>
  );
}
```

---

### Additional Icons (from new screens)

| Figma Icon Name | MUI Import | Usage Context |
|----------------|------------|---------------|
| `photo_camera` | `PhotoCamera` | Chat input camera icon |
| `mic` | `Mic` | Chat input microphone icon |
| `attach_file` | `AttachFile` | Chat/comment attachment icon |
| `send` | `Send` | Chat send button (active state) |
| `arrow_upward` | `ArrowUpward` | Comment submit button |
| `add_circle_outline` | `AddCircleOutline` | Mobile header action (new incident) |
| `receipt_long` | `ReceiptLong` | Mobile header action (view report) |
| `info` | `Info` | Recommendation details section icon |

Updated batch import:

```tsx
import {
  // Original icons...
  AddCircle, Warning, Assignment, ManageSearch, Recommend, Analytics,
  ExpandMore, ExpandLess, FileDownload, FilterList, ChevronRight, ChevronLeft,
  Event, Edit, ArrowForward, ArrowBackIos, Add, Remove, Close,
  Groups, WorkspacePremium, PieChart, Engineering,
  RadioButtonChecked, RadioButtonUnchecked, Done,
  MarkChatRead, Description, AddLocationAlt, Troubleshoot, History, Menu,
  // New icons from chat/mobile/detail screens...
  PhotoCamera, Mic, AttachFile, Send, ArrowUpward,
  AddCircleOutline, ReceiptLong, Info,
} from '@mui/icons-material';
```

---

### Additional Page Patterns

#### 3.5 Detail-with-Side-Panel Pattern (Recommendation Detail)

**Used by**: `1097:9799`

```
+------+----------------------------------------------+-------------------+
| Side | Main Content                                  | Detail Panel      |
| Nav  | BreadcrumbNav (< Recommendation > CA-111)     | Incident ID       |
|      | Title: "Set a cleaning schedule for chemicals" |                   |
|      | Description text                              | ┌─ Report ────── ▼|
|      | Assignee + Target Date + remaining chip        | └────────────────┘|
|      |                                               | ┌─ Investigation ▼|
|      | Updates & Activity                            | └────────────────┘|
|      |   ActivityTimelineItem (Ravi Gupta)           | ┌─ Rec Details ──▲|
|      |     StatusTransitionCard                      | │ StatusStepper   |
|      |   ActivityTimelineItem (you)                  | │ Rec ID, Plant   |
|      |     StatusTransitionCard                      | │ Assigned by     |
|      |                                               | │ Target Date     |
|      | CommentInput                                  | └────────────────┘|
|      |                                               |                   |
|      | [SUBMIT FOR REVIEW →]                         |                   |
+------+----------------------------------------------+-------------------+
```

**Key**: Three-column layout. Main content scrolls independently. Right panel is sticky with collapsible accordion sections.

#### 3.6 Chat-Based Reporting Pattern (Mobile/Desktop)

**Used by**: `1033:8443`, `1033:8582`, `1033:8721`, `1698:7790`

```
+------------------------------------------+
| MobileAppShell / AppShell                |
| Header (hamburger + title + actions)     |
+------------------------------------------+
| GradientTitle                            |
| "Report a Near Miss or Safety Concern"   |
| Subtitle text                            |
|                                          |
| ChatBubble (user) — right-aligned        |
| ChatBubble (AI)   — left-aligned         |
|   structured response with emoji bullets |
|                                          |
| ChatInput (camera + message + mic/send)  |
+------------------------------------------+
```

**Dual-view**: Desktop uses `ViewToggle` to switch between Chat View and Report View (form). Mobile is chat-only with the same ChatInput component.

#### Role-Based Sidebar Variants

The sidebar navigation shows context about the logged-in user:

| Element | Operator View (`1328:34223`) | Safety Manager View (`1328:33616`) |
|---------|------------------------------|-------------------------------------|
| Org Avatar | Gradient (grey→black) | Gradient (teal→purple) |
| User Name | Asaimani Chandrash... | MK |
| Role Label | Operator | Safety Manager |
| Active Nav Item | Reports (filled bg) | Reports (filled bg) |

---

## Section 7: Canonical MUI v6 Catalog Alignment

This appendix aligns the Raven Near Miss design system to the official [Material UI v6 component catalog](https://v6.mui.com/material-ui/all-components/) and keeps the **exact MUI names** intact for designers and frontend developers.

### Raven integration rule

- Use the **exact MUI component name** in design-system documentation, Storybook cataloging, and implementation planning.
- Prefer an existing Raven wrapper when one already exists.
- Otherwise use the underlying MUI component directly with `ravenNearMissTheme` and Raven CSS tokens.
- When no dedicated wrapper exists yet, document the component as **guidance-first** so naming and behavior stay aligned with MUI.

### Catalog support levels

| Support level | Meaning |
|---|---|
| `Raven component available` | A Raven wrapper or domain-aligned equivalent already exists in `raven-ui`. |
| `Raven theme support` | Use the MUI primitive directly under `ravenNearMissTheme`. |
| `Guidance only` | Official MUI naming/link/guidance is documented, but a Raven wrapper is not yet added. |

### 7.1 Inputs

| MUI Name | Guideline | Docs | Raven Mapping | Support |
|---|---|---|---|---|
| Autocomplete | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-autocomplete/) | `RavenAutocomplete` | Raven component available |
| Button | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-button/) | `MuiButton` under `ravenNearMissTheme` | Raven theme support |
| Button Group | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-button-group/) | `MuiButtonGroup` under `ravenNearMissTheme` | Raven theme support |
| Checkbox | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-checkbox/) | `RavenCheckbox` | Raven component available |
| Floating Action Button | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-floating-action-button/) | `MuiFab` under `ravenNearMissTheme` | Raven theme support |
| Radio Group | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-radio-button/) | `RavenRadioGroup` | Raven component available |
| Rating | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-rating/) | `MuiRating` under `ravenNearMissTheme` | Raven theme support |
| Select | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-select/) | `RavenSelect` | Raven component available |
| Slider | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-slider/) | `MuiSlider` under `ravenNearMissTheme` | Raven theme support |
| Switch | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-switch/) | `RavenSwitch` | Raven component available |
| Text Field | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-text-field/) | `RavenTextField` | Raven component available |
| Transfer List | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-transfer-list/) | Composite pattern from lists + buttons | Guidance only |
| Toggle Button | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-toggle-button/) | `MuiToggleButton` / `ViewToggle` | Raven theme support |

### 7.2 Data display

| MUI Name | Guideline | Docs | Raven Mapping | Support |
|---|---|---|---|---|
| Avatar | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-avatar/) | `RavenAvatar` | Raven component available |
| Badge | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-badge/) | `RavenBadge` | Raven component available |
| Chip | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-chip/) | `RavenChip` | Raven component available |
| Divider | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-divider/) | `RavenDivider` | Raven component available |
| Icons | MD2 | [MUI docs](https://v6.mui.com/material-ui/icons/) | `@mui/icons-material` usage guidance | Guidance only |
| Material Icons | MD2 | [MUI docs](https://v6.mui.com/material-ui/material-icons/) | `@mui/icons-material` import catalog | Guidance only |
| List | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-list/) | `RavenList` | Raven component available |
| Table | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-table/) | `DataTable` | Raven component available |
| Tooltip | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-tooltip/) | `RavenTooltip` | Raven component available |
| Typography | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-typography/) | `MuiTypography` + Raven custom variants | Raven theme support |

### 7.3 Feedback

| MUI Name | Guideline | Docs | Raven Mapping | Support |
|---|---|---|---|---|
| Alert | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-alert/) | `RavenAlert` | Raven component available |
| Backdrop | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-backdrop/) | `MuiBackdrop` under `ravenNearMissTheme` | Raven theme support |
| Dialog | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-dialog/) | `RavenDialog` | Raven component available |
| Progress | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-progress/) | `RavenLinearProgress` / `RavenCircularProgress` | Raven component available |
| Skeleton | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-skeleton/) | `RavenSkeleton` | Raven component available |
| Snackbar | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-snackbar/) | `RavenSnackbar` | Raven component available |

### 7.4 Surface

| MUI Name | Guideline | Docs | Raven Mapping | Support |
|---|---|---|---|---|
| Accordion | MD1 | [MUI docs](https://v6.mui.com/material-ui/react-accordion/) | `RavenAccordion` | Raven component available |
| App Bar | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-app-bar/) | `MuiAppBar` / `MobileAppShell` header treatment | Raven theme support |
| Card | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-card/) | `RavenCard` | Raven component available |
| Paper | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-paper/) | `MuiPaper` under `ravenNearMissTheme` | Raven theme support |

### 7.5 Navigation

| MUI Name | Guideline | Docs | Raven Mapping | Support |
|---|---|---|---|---|
| Bottom Navigation | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-bottom-navigation/) | `MuiBottomNavigation` under `ravenNearMissTheme` | Raven theme support |
| Breadcrumbs | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-breadcrumbs/) | `BreadcrumbNav` / `MuiBreadcrumbs` | Raven component available |
| Drawer | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-drawer/) | `ActivityDrawer` / `MuiDrawer` | Raven component available |
| Link | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-link/) | `RavenLink` | Raven component available |
| Menu | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-menu/) | `RavenMenu` | Raven component available |
| Pagination | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-pagination/) | `RavenPagination` | Raven component available |
| Speed Dial | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-speed-dial/) | `MuiSpeedDial` under `ravenNearMissTheme` | Raven theme support |
| Stepper | MD1 | [MUI docs](https://v6.mui.com/material-ui/react-stepper/) | `StatusStepper` / `MuiStepper` | Raven component available |
| Tabs | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-tabs/) | `TabNavigation` / `MuiTabs` | Raven component available |

### 7.6 Layout

| MUI Name | Guideline | Docs | Raven Mapping | Support |
|---|---|---|---|---|
| Box | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-box/) | `MUI Box` in Raven layout patterns | Guidance only |
| Container | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-container/) | `MUI Container` with Raven spacing tokens | Guidance only |
| Grid | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-grid/) | `MUI Grid` with Raven spacing tokens | Guidance only |
| Grid v2 | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-grid2/) | `MUI Grid v2` with Raven spacing tokens | Guidance only |
| Stack | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-stack/) | `MUI Stack` with Raven spacing tokens | Guidance only |
| Image List | MD2 | [MUI docs](https://v6.mui.com/material-ui/react-image-list/) | `MUI Image List` with Raven surfaces | Guidance only |

### 7.7 Lab

| MUI Name | Guideline | Docs | Raven Mapping | Support |
|---|---|---|---|---|
| Masonry | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-masonry/) | `MUI Lab Masonry` | Guidance only |
| Timeline | No guidelines | [MUI docs](https://v6.mui.com/material-ui/react-timeline/) | `MUI Lab Timeline` / `ActivityTimelineItem` | Guidance only |

### 7.8 Utils

| MUI Name | Guideline | Docs | Raven Mapping | Support |
|---|---|---|---|---|
| Click-Away Listener | Utility | [MUI docs](https://v6.mui.com/material-ui/react-click-away-listener/) | `MUI ClickAwayListener` | Guidance only |
| CSS Baseline | Utility | [MUI docs](https://v6.mui.com/material-ui/react-css-baseline/) | `CssBaseline` in app + Storybook preview | Raven component available |
| Modal | Utility | [MUI docs](https://v6.mui.com/material-ui/react-modal/) | `MuiModal` with Raven overlay guidance | Raven theme support |
| No SSR | Utility | [MUI docs](https://v6.mui.com/material-ui/react-no-ssr/) | `MUI NoSsr` | Guidance only |
| Popover | Utility | [MUI docs](https://v6.mui.com/material-ui/react-popover/) | `MuiPopover` with Raven paper styling | Raven theme support |
| Popper | Utility | [MUI docs](https://v6.mui.com/material-ui/react-popper/) | `MUI Popper` | Guidance only |
| Portal | Utility | [MUI docs](https://v6.mui.com/material-ui/react-portal/) | `MUI Portal` | Guidance only |
| Textarea Autosize | Utility | [MUI docs](https://v6.mui.com/material-ui/react-textarea-autosize/) | `TextareaAutosize` / `CommentInput` | Guidance only |
| Transitions | Utility | [MUI docs](https://v6.mui.com/material-ui/transitions) | `MUI transition helpers` | Guidance only |
| useMediaQuery | Utility | [MUI docs](https://v6.mui.com/material-ui/react-use-media-query/) | `MUI useMediaQuery` hook | Guidance only |

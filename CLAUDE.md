# Raven Design System — Component Usage Rules

## Theme Selection

- **Admin dashboard pages**: Use `ravenAdminTheme` (or `ravenAdminLightTheme` / `ravenAdminDarkTheme`)
- **Near-miss app pages**: Use `ravenNearMissTheme` (legacy, do not modify)
- Always wrap the app root in `<ThemeProvider theme={...}><CssBaseline />...</ThemeProvider>`

## Typography

- Font: `Source Sans 3` everywhere except table headers (Roboto) and status chip labels (Roboto)
- Page titles: `h5` with `fontWeight: 600` (NOT h1-h4, those are reserved for hero/display text)
- Section headers inside cards: `body1` with `fontWeight: 600`, color `primary.main` (#4A148C)
- Sidebar menu labels: `overline` with `fontWeight: 600`
- Overline section labels (e.g. "DEPARTMENT"): use `SectionDividerLabel` component, color `#9C27B0`
- Labels and descriptions: `body2`, `caption`
- New variants: `caption2` (10px) for very small text, `label` (13px/400) for form labels

## Icons

- ALL icons must use the `*Rounded` MUI variant (e.g. `EditRounded`, never `Edit` or `EditOutlined`)
- No exceptions to the rounded-icon rule

## Colors

- Primary actions and active states: `primary.main` (#4A148C light / #23E0D2 dark)
- Active sidebar item background: `navItemBg` (#E1BEE7 light / #179890 dark)
- All borders and dividers: `divider` token (#F3E5F5 light / #17343A dark)
- Page background: `background.dark` (#FCF6FE light / #0E171B dark)
- Content card background: `background.default` (#FFFFFF light / #0B1215 dark)
- DataGrid column header background: `background.light` (#F5F5F5 light / #101C21 dark)
- Accent color: `accent` token
- Section overline text: `purplePurple` (#9C27B0) — NOT primary.main

## Border Radius

- Main content card: `24px`
- Dialogs: `16px`
- Menus and Popovers: `16px !important`
- Form section cards: `20px`
- Buttons: `50px` (pill shape)
- Input fields: `8px`
- Sidebar nav items (expanded): `4px` (borderRadius: 1)
- Sidebar nav items (collapsed): `8px` (borderRadius: 2)
- Row action buttons: `8px`
- Role/status badges: `4px`
- Avatar: `9.33px` (or borderRadius: 4px for org avatar)

## Component Usage

### Data Tables
- Use `DataTable` for paginated tables, `VirtualizedDataTable` for large datasets
- Use `boldColumns` prop to make ID-type columns visually prominent (fontWeight 600)
- Use `ReportStatusChip` for status columns — NOT plain text or `StatusCell`
- Use `RowActionButton` in the last column for row navigation — NOT a plain IconButton
- Hide pagination when rows <= 25 via `hideFooter` on DataGrid consumers
- Table borders use `#F3E5F5`, NOT `#E0E0E0`

### Status Indicators
- `ReportStatusChip` for table status columns (pill shape, colored dot + label)
- `RavenChip` for tags, labels, filters (general-purpose pill chip)
- Status color mapping: In-progress=blue, Closed=green, Pending=amber, Released=green, Rejected=red

### Form Layouts
- Group related fields inside `FormSectionCard` with an icon + title header
- Use `SectionDividerLabel` to separate logical field groups within a card
- Form cards use 20px radius and subtle shadow, NOT the default 24px `RavenCard`
- Footer action patterns: text button (Save Draft) | outlined error button (Clear All) | contained primary button (Submit)

### Navigation
- `StatusFilterBar` for count-based status filters (In Progress (2), Closed (1), All (3))
- `ViewToggle` for icon+text view switchers (Chat View / Report View)
- `TabNavigation` for standard page-level tabs
- `UserProfileMenu` for the user avatar popover — includes Profile, Change Password, Dark Mode toggle, Manage Users (external link), Help & Support, Sign Out (red)
- Sign Out always uses `error` color (#D32F2F)

### Sidebar (SideNavigation)
- Active item: `navItemBg` background + `primary.main` text + fontWeight 600
- Expandable groups show a purple scroll indicator bar (#E1BEE7) alongside sub-items
- Bottom section: org avatar + user name + expand chevron, separated by divider
- Branding footer: "by raven" at the very bottom

### Dialogs
- Use `RavenDialog` wrapper — 16px border radius (admin theme)
- Destructive actions: `color="error"` + `variant="contained"`
- Confirmation dialogs: typed text input with `autoFocus`

### Chat Input
- Use `ChatInput` with `multiline` prop for the incident reporting chat view
- Icons: `AttachFileRounded` (attachment) + `MicRounded` (voice) — NOT camera icon
- Purple glow shadow: `0px 0px 8px 4px rgba(167, 64, 179, 0.08)`

## Storybook Conventions

- Theme switcher is in the toolbar (paintbrush icon): Admin Light, Admin Dark, Near-Miss
- All stories should render correctly in all 3 themes
- Use `parameters: { layout: 'centered' }` for small components, `'padded'` for medium, `'fullscreen'` for page layouts

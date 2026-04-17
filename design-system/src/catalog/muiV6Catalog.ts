export type MuiV6Category =
  | 'Inputs'
  | 'Data display'
  | 'Feedback'
  | 'Surface'
  | 'Navigation'
  | 'Layout'
  | 'Lab'
  | 'Utils';

export type MuiGuideline = 'MD1' | 'MD2' | 'No guidelines' | 'Utility';
export type RavenSupportLevel = 'available' | 'themed' | 'guidance';

export interface MuiComponentLink {
  label: string;
  url: string;
}

export interface MuiV6CatalogItem {
  category: MuiV6Category;
  name: string;
  guideline: MuiGuideline;
  docsUrl: string;
  ravenSupport: RavenSupportLevel;
  ravenEquivalent: string;
  notes: string;
  summary?: string;
  importPath?: string[];
  composition?: string[];
  keyPoints?: string[];
  accessibility?: string[];
  ravenGuidance?: string[];
  ravenUsage?: string;
  crossPlatform?: string[];
  apiLinks?: MuiComponentLink[];
}

export const MUI_V6_CATALOG_URL = 'https://v6.mui.com/material-ui/all-components/';

export const muiV6Catalog: MuiV6CatalogItem[] = [
  {
    category: 'Inputs',
    name: 'Autocomplete',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-autocomplete/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenAutocomplete',
    notes: 'Use Raven spacing, rounded outlined fields, and Source Sans 3 for searchable selection patterns.',
  },
  {
    category: 'Inputs',
    name: 'Button',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-button/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenButton / RavenIconButton',
    notes: 'Pill-radius buttons with purple palette, Source Sans 3 typography, uppercase labels, and loading state support. Includes RavenIconButton wrapper with loading convenience prop.',
  },
  {
    category: 'Inputs',
    name: 'Button Group',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-button-group/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiButtonGroup under ravenNearMissTheme',
    notes: 'Useful for compact action clusters where Raven keeps shared rounded corners and soft purple borders.',
  },
  {
    category: 'Inputs',
    name: 'Checkbox',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-checkbox/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenCheckbox',
    notes: 'Selected states should remain purple-led with explicit labels and helper text for accessibility.',
  },
  {
    category: 'Inputs',
    name: 'Floating Action Button',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-floating-action-button/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiFab under ravenNearMissTheme',
    notes: 'Reserved for high-priority quick actions with Raven purple fill and high-contrast white icons.',
  },
  {
    category: 'Inputs',
    name: 'Radio Group',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-radio-button/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenRadioGroup',
    notes: 'Keep options vertically readable with Source Sans 3 and purple checked states.',
  },
  {
    category: 'Inputs',
    name: 'Rating',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-rating/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiRating under ravenNearMissTheme guidance',
    notes: 'When used, favor restrained semantic feedback states rather than decorative scoring.',
  },
  {
    category: 'Inputs',
    name: 'Select',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-select/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenSelect',
    notes: 'Use the Raven outlined field treatment with compact menu surfaces and clear labels.',
  },
  {
    category: 'Inputs',
    name: 'Slider',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-slider/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiSlider under ravenNearMissTheme',
    notes: 'Tracks should keep the Raven purple accent and larger thumb target for touch comfort.',
  },
  {
    category: 'Inputs',
    name: 'Switch',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-switch/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenSwitch',
    notes: 'Use for binary settings only, with purple selected states and descriptive labels.',
  },
  {
    category: 'Inputs',
    name: 'Text Field',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-text-field/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenTextField',
    notes: 'Outlined fields, 8px corners, purple focus states, and Source Sans 3 are the Raven defaults.',
  },
  {
    category: 'Inputs',
    name: 'Transfer List',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-transfer-list/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'Composite pattern, not yet wrapped',
    notes: 'Treat as a documented composite built from lists, buttons, and selection controls when needed.',
  },
  {
    category: 'Inputs',
    name: 'Toggle Button',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-toggle-button/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiToggleButton / ViewToggle',
    notes: 'Raven prefers pill toggles with subtle purple surfaces for segmented state switching.',
  },

  {
    category: 'Data display',
    name: 'Avatar',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-avatar/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenAvatar',
    notes: 'Use initials, semantic color fills, and the Source Sans 3 type scale for identity markers.',
  },
  {
    category: 'Data display',
    name: 'Badge',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-badge/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenBadge',
    notes: 'Badges should stay compact, high contrast, and secondary to the primary surface content.',
  },
  {
    category: 'Data display',
    name: 'Chip',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-chip/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenChip',
    notes: 'Use pill chips for status, filters, and metadata with semantic fills or outlined brand states.',
  },
  {
    category: 'Data display',
    name: 'Divider',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-divider/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenDivider',
    notes: 'Prefer soft neutral separators to preserve the light Raven surfaces.',
    summary: 'The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy.',
    importPath: ["import Divider from '@mui/material/Divider';"],
    keyPoints: [
      'Supports fullWidth, inset, and middle variants for different spacing relationships.',
      'Use orientation="vertical" for side-by-side layouts, and add flexItem when the divider lives inside a flex container.',
      'Dividers can wrap text or chips, with textAlign controlling the alignment of inline content.',
      'When separating list rows, render the divider as an li with the component prop so the markup stays valid.',
    ],
    accessibility: [
      'A plain Divider is announced as a separator by assistive technology.',
      'Set aria-hidden="true" when the divider is purely decorative.',
      'When wrapping text or chips, prefer component="div" with role="presentation" so the wrapped content remains the primary semantic target.',
    ],
    apiLinks: [{ label: 'Divider API', url: 'https://v6.mui.com/material-ui/api/divider/' }],
  },
  {
    category: 'Data display',
    name: 'Icons',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/icons/',
    ravenSupport: 'guidance',
    ravenEquivalent: '@mui/icons-material usage guidance',
    notes: 'Use standard Material icons with Raven color tokens and avoid mixing icon families within a workflow.',
  },
  {
    category: 'Data display',
    name: 'Material Icons',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/material-icons/',
    ravenSupport: 'guidance',
    ravenEquivalent: '@mui/icons-material import catalog',
    notes: 'Keep icon choices semantically consistent and aligned with the existing Raven icon inventory.',
  },
  {
    category: 'Data display',
    name: 'List',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-list/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenList',
    notes: 'Use padded list rows with rounded hover states and readable icon-to-text spacing.',
  },
  {
    category: 'Data display',
    name: 'Table',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-table/',
    ravenSupport: 'available',
    ravenEquivalent: 'DataTable',
    notes: 'Raven tables use quiet borders, strong header typography, and status-aware cells for review workflows.',
  },
  {
    category: 'Data display',
    name: 'Tooltip',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-tooltip/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenTooltip',
    notes: 'Tooltips should remain brief, accessible, and visually subordinate to the parent control.',
  },
  {
    category: 'Data display',
    name: 'Typography',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-typography/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenTypography',
    notes: 'Source Sans 3 font, full MUI type scale (h1–h6, subtitle1/2, body1/2, button, caption, overline) plus custom body1Bold and tableHeader variants. Raven purple brand colors and WCAG-compliant heading hierarchy.',
  },

  {
    category: 'Feedback',
    name: 'Alert',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-alert/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenAlert',
    notes: 'Use semantic fills with strong contrast and concise action-oriented copy.',
  },
  {
    category: 'Feedback',
    name: 'Backdrop',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-backdrop/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiBackdrop under ravenNearMissTheme',
    notes: 'Backdrop overlays should feel light and unobtrusive while preserving focus on the active surface.',
    summary:
      'Dimming scrim shown behind overlays (Modal, Drawer) and on top of long-running blocking work (export, bulk save, initial auth). Use to signal "the rest of the app is inactive right now" — never as a generic loading indicator on inline content.',
    importPath: [`import Backdrop from '@mui/material/Backdrop';`],
    composition: [
      'With `CircularProgress` or Raven `Spinner` for app-blocking operations (export render, P&ID initial parse).',
      'With `Fade` transition (250ms) — instant appearance feels abrupt and draws too much attention.',
      'As the built-in scrim layer under `Modal` / `Drawer` — you rarely render Backdrop directly in those cases.',
    ],
    keyPoints: [
      '`open` prop is controlled — keep it tied to the same state that blocks user input upstream.',
      '`invisible` keeps the click trap but removes the dim layer — useful for nested overlays that already sit on a scrim.',
      'Default z-index sits below Modal — wrap in a `Portal` and raise z-index when layering over `z.drawer`.',
    ],
    accessibility: [
      'Backdrop MUST have an accompanying `aria-busy="true"` on a labeled region — the scrim alone is invisible to screen readers.',
      'Trap focus inside the active overlay/content below the backdrop; do not let Tab escape to the dimmed UI.',
      'Provide a visible cancel affordance for long-running backdrops (> 3s) — never leave users stuck.',
    ],
    crossPlatform: [
      'Google Material 3 — "Scrim" at `surface-container-highest` with 32% opacity over dark, 60% over light.',
      'Microsoft Fluent — `Overlay` with `fadeInOverlay` transition; blocks pointer events by default.',
      'Apple HIG — "Backdrop" under modal sheets with `.ultraThinMaterial`; web analog is `rgba(0,0,0,0.6)` or `backdrop-filter: blur(8px)`.',
    ],
    ravenGuidance: [
      'Scrim color: `rgba(14, 23, 27, 0.6)` in admin light, `rgba(0, 0, 0, 0.72)` in dark — matches `color.surface.overlay`.',
      'Never use Backdrop for skeleton or shimmer loading — those belong inline in the affected region.',
      'For app-blocking work > 1s, pair with a centered card that names what is happening ("Exporting drawing…") and shows progress where known.',
    ],
    ravenUsage: `import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

<Backdrop
  open={isExporting}
  sx={{
    zIndex: (t) => t.zIndex.modal + 1,
    color: '#fff',
    backgroundColor: 'rgba(14, 23, 27, 0.6)',
    backdropFilter: 'blur(2px)',
  }}
  aria-busy="true"
  aria-live="polite"
>
  <Stack spacing={2} alignItems="center">
    <CircularProgress color="inherit" />
    <Typography variant="body1" sx={{ fontWeight: 600 }}>
      Exporting drawing…
    </Typography>
    <Typography variant="body2" sx={{ opacity: 0.8 }}>
      This usually takes 5–10 seconds.
    </Typography>
  </Stack>
</Backdrop>`,
  },
  {
    category: 'Feedback',
    name: 'Dialog',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-dialog/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenDialog',
    notes: 'Dialogs use large-radius paper, focused action hierarchy, and clear escape paths.',
  },
  {
    category: 'Feedback',
    name: 'Progress',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-progress/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenLinearProgress / RavenCircularProgress',
    notes: 'Progress indicators should favor purple accents with quiet track surfaces.',
  },
  {
    category: 'Feedback',
    name: 'Skeleton',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-skeleton/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenSkeleton',
    notes: 'Use soft purple-tinted placeholders to preserve the Raven surface rhythm during loading.',
  },
  {
    category: 'Feedback',
    name: 'Snackbar',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-snackbar/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenSnackbar',
    notes: 'Snackbars should feel like floating notifications, not buttons, with clear severity states.',
  },

  {
    category: 'Surface',
    name: 'Accordion',
    guideline: 'MD1',
    docsUrl: 'https://v6.mui.com/material-ui/react-accordion/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenAccordion',
    notes: 'Use compact outlined accordions for supporting detail rather than primary workflow steps.',
    summary: 'The Accordion component lets users show and hide sections of related content on a page.',
    importPath: [
      "import Accordion from '@mui/material/Accordion';",
      "import AccordionSummary from '@mui/material/AccordionSummary';",
      "import AccordionDetails from '@mui/material/AccordionDetails';",
    ],
    composition: [
      'Accordion: wrapper for the grouped section.',
      'Accordion Summary: interactive header that expands or collapses content.',
      'Accordion Details: content region for the expanded state.',
      'Accordion Actions: optional footer container for action buttons.',
    ],
    keyPoints: [
      'Use the expandIcon prop on AccordionSummary to swap the disclosure icon while keeping the built-in rotation animation.',
      'defaultExpanded covers the common uncontrolled case, while expanded supports fully controlled accordions.',
      'Use slots.transition and slotProps.transition to customize the expansion transition or unmount heavy content on exit.',
      'Adjust slotProps.heading.component when the default h3 heading does not fit the page heading hierarchy.',
    ],
    accessibility: [
      'Set id and aria-controls on AccordionSummary so the generated region and button relationship stays explicit.',
      'Keep heading levels consistent by updating slotProps.heading.component when the accordion sits deeper in the document outline.',
      'Follow the WAI-ARIA accordion pattern for keyboard and announcement behavior.',
    ],
    apiLinks: [
      { label: 'Accordion API', url: 'https://v6.mui.com/material-ui/api/accordion/' },
      { label: 'Accordion Summary API', url: 'https://v6.mui.com/material-ui/api/accordion-summary/' },
      { label: 'Accordion Details API', url: 'https://v6.mui.com/material-ui/api/accordion-details/' },
      { label: 'Accordion Actions API', url: 'https://v6.mui.com/material-ui/api/accordion-actions/' },
    ],
  },
  {
    category: 'Surface',
    name: 'App Bar',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-app-bar/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiAppBar / MobileAppShell header treatment',
    notes: 'Raven app bars should remain light, border-led, and secondary to the page content container.',
    summary: 'The App Bar displays information and actions relating to the current screen and is commonly used for branding, titles, navigation, and contextual actions.',
    importPath: [
      "import AppBar from '@mui/material/AppBar';",
      "import Toolbar from '@mui/material/Toolbar';",
    ],
    composition: [
      'AppBar: positioned surface container for top or bottom navigation treatments.',
      'Toolbar: spacing and height wrapper for title, navigation, search, and action controls.',
    ],
    keyPoints: [
      'Use AppBar for screen-level branding, titles, menus, and search entry points.',
      'Prefer position="sticky" when possible; fixed app bars need an offset element or theme.mixins.toolbar so page content is not hidden behind the bar.',
      'useScrollTrigger supports hide-on-scroll and elevate-on-scroll patterns when the header should respond to reading behavior.',
      'In dark mode, enableColorOnDark restores color-driven styling when the default dark treatment is too muted.',
    ],
    apiLinks: [
      { label: 'App Bar API', url: 'https://v6.mui.com/material-ui/api/app-bar/' },
      { label: 'Toolbar API', url: 'https://v6.mui.com/material-ui/api/toolbar/' },
      { label: 'useScrollTrigger API', url: 'https://v6.mui.com/material-ui/react-app-bar/#scrolling' },
    ],
  },
  {
    category: 'Surface',
    name: 'Card',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-card/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenCard',
    notes: 'Cards use generous radius, soft borders, and content-first spacing to echo Figma surfaces.',
    summary: 'Cards contain content and actions about a single subject and can combine headers, media, primary actions, and supporting controls.',
    importPath: [
      "import Card from '@mui/material/Card';",
      "import CardHeader from '@mui/material/CardHeader';",
      "import CardContent from '@mui/material/CardContent';",
      "import CardMedia from '@mui/material/CardMedia';",
      "import CardActions from '@mui/material/CardActions';",
      "import CardActionArea from '@mui/material/CardActionArea';",
    ],
    composition: [
      'Card: surface container for a single topic.',
      'CardHeader: optional title, subheader, avatar, and action slot in the header region.',
      'CardContent: body copy and primary information with consistent padding.',
      'CardMedia: image, video, or other media — use component="img" for semantic HTML.',
      'CardActions: footer container for supplemental buttons, kept outside CardActionArea.',
      'CardActionArea: wraps the interactive region when the whole card is a single clickable target.',
    ],
    keyPoints: [
      'Set variant="outlined" when the design calls for a flatter container instead of elevated depth.',
      'Wrap the primary interactive region in CardActionArea when the whole card should behave like a link or expandable target.',
      'Keep supplemental footer buttons outside the CardActionArea to avoid overlapping hit targets.',
      'Use component="img" on CardMedia when a semantic img element is more appropriate than a CSS background-image container.',
      'RavenCard exposes a media prop (image URL), mediaHeight, actionArea, and onClick for common patterns without composing sub-components manually.',
      'Use the variant prop ("elevation" | "outlined") instead of the deprecated elevated boolean.',
    ],
    accessibility: [
      'CardActionArea renders a <button> by default — add a meaningful aria-label when the card title is not descriptive enough.',
      'Avoid nesting interactive elements (links, buttons) inside a CardActionArea; place them in CardActions instead.',
      'CardMedia with component="img" requires a non-empty alt attribute for screen readers.',
      'Use the component prop to render CardActionArea as an <a> tag when the card navigates to another page.',
    ],
    apiLinks: [
      { label: 'Card API', url: 'https://v6.mui.com/material-ui/api/card/' },
      { label: 'Card Header API', url: 'https://v6.mui.com/material-ui/api/card-header/' },
      { label: 'Card Content API', url: 'https://v6.mui.com/material-ui/api/card-content/' },
      { label: 'Card Actions API', url: 'https://v6.mui.com/material-ui/api/card-actions/' },
      { label: 'Card Action Area API', url: 'https://v6.mui.com/material-ui/api/card-action-area/' },
      { label: 'Card Media API', url: 'https://v6.mui.com/material-ui/api/card-media/' },
    ],
  },
  {
    category: 'Surface',
    name: 'Paper',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-paper/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiPaper under ravenNearMissTheme',
    notes: 'Paper surfaces should inherit Raven corner radius and remain visually lighter than default Material.',
    summary: 'The Paper component is a container for displaying content on an elevated surface and uses the theme elevation scale to express depth.',
    importPath: ["import Paper from '@mui/material/Paper';"],
    keyPoints: [
      'Use elevation values from 0 to 24 to communicate hierarchy through theme shadows.',
      'In dark mode, higher elevation also lightens the background with a translucent overlay.',
      'Set variant="outlined" to render a flat bordered paper without shadow.',
      'Paper uses rounded corners by default; add square to remove the radius when the layout needs hard edges.',
    ],
    apiLinks: [{ label: 'Paper API', url: 'https://v6.mui.com/material-ui/api/paper/' }],
  },

  {
    category: 'Navigation',
    name: 'Bottom Navigation',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-bottom-navigation/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiBottomNavigation under ravenNearMissTheme',
    notes: 'Use only on constrained mobile layouts and keep the active state clearly brand-led.',
    summary:
      'Three-to-five tab strip pinned to the bottom of the viewport for top-level destinations on mobile shells. In Raven, this is a NearMiss-only primitive — admin/NMMS/P&ID desktop shells use `WideSidebar` or `RailSidebar` instead.',
    importPath: [
      `import BottomNavigation from '@mui/material/BottomNavigation';`,
      `import BottomNavigationAction from '@mui/material/BottomNavigationAction';`,
    ],
    composition: [
      'BottomNavigation → BottomNavigationAction × 3–5, each with an icon + label.',
      'Wrap in `Paper` with `elevation={3}` + `sx={{ position: "fixed", bottom: 0 }}` so it floats above content.',
      'Pair with `useMediaQuery(theme.breakpoints.down("sm"))` to show only on compact viewports.',
    ],
    keyPoints: [
      'Use between 3 and 5 destinations — fewer collapses to a single button, more overflows on narrow phones.',
      'Always show labels on the active item; icon-only can be ambiguous for first-time users.',
      '`showLabels` prop forces labels on all states — Raven defaults to `showLabels` because safety operators wear gloves.',
    ],
    accessibility: [
      'Each action MUST have a visible text label OR `aria-label` — icon-only is non-compliant for motor-impaired users.',
      'Minimum 48x48 CSS px touch target per action (MD guideline; Raven enforces 44x44 per WCAG 2.1).',
      'Announce route changes with `aria-current="page"` on the active action.',
    ],
    crossPlatform: [
      'Google Material 3 — "Navigation bar" at surface-container with 80px height; 3–5 destinations.',
      'Microsoft Fluent — "TabList" horizontal at bottom is the mobile pattern; `appearance="subtle"`.',
      'Apple HIG — "Tab bar" with SF Symbols; the web equivalent here.',
    ],
    ravenGuidance: [
      'Height: 64px; icons 24px; label `caption` (12px/16px Source Sans 3 600).',
      'Active color: `primary.main` (#4A148C admin / #23E0D2 dark); inactive: `text.secondary`.',
      'Use ONLY in NearMiss mobile flow — never in admin dashboard, which always has a sidebar.',
    ],
    ravenUsage: `import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

function MobileShellBottomNav() {
  const [value, setValue] = useState(0);
  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 0,
        borderTop: '1px solid #F3E5F5',
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, v) => setValue(v)}
        sx={{ height: 64 }}
      >
        <BottomNavigationAction label="Home"    icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label="Reports" icon={<ListAltRoundedIcon />} />
        <BottomNavigationAction label="Tasks"   icon={<AssignmentRoundedIcon />} />
        <BottomNavigationAction label="Me"      icon={<PersonRoundedIcon />} />
      </BottomNavigation>
    </Paper>
  );
}`,
  },
  {
    category: 'Navigation',
    name: 'Breadcrumbs',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-breadcrumbs/',
    ravenSupport: 'available',
    ravenEquivalent: 'BreadcrumbNav / MuiBreadcrumbs',
    notes: 'Breadcrumbs should stay terse and may include status metadata where context improves navigation.',
    summary:
      'Location-trail navigation showing the hierarchy from the app root to the current view. Raven uses breadcrumbs for deep incident detail pages, nested equipment in P&ID, and configuration sub-pages — never on top-level destinations that already live in the sidebar.',
    importPath: [
      `import Breadcrumbs from '@mui/material/Breadcrumbs';`,
      `import Link from '@mui/material/Link';`,
      `import Typography from '@mui/material/Typography';`,
    ],
    composition: [
      'Breadcrumbs → Link … Link → Typography (current page, not a link).',
      'Use `maxItems` + `itemsBeforeCollapse` + `itemsAfterCollapse` to collapse the middle on long trails.',
      'Embed inside `PageHeader` above the title, not inside the main content scroll area.',
    ],
    keyPoints: [
      'Each intermediate segment is a real, clickable link (`href`) — never a disabled Typography.',
      'The terminal (current) segment is a `Typography` with `color="text.primary"` and `aria-current="page"`.',
      'Default separator is "/"; Raven uses `ChevronRightRoundedIcon` in admin/NMMS and "›" in NearMiss.',
    ],
    accessibility: [
      'Wrap with `<nav aria-label="Breadcrumb">` — MUI Breadcrumbs does this automatically but verify in DOM.',
      'Terminal segment MUST carry `aria-current="page"` so screen readers announce "current page".',
      'Collapsed items expose a "Show path" button — ensure it is keyboard-reachable and announces the expanded items.',
    ],
    crossPlatform: [
      'Google Material — "Breadcrumb" pattern in Top app bar variant; terse labels, chevron separators.',
      'Microsoft Fluent — `Breadcrumb` + `BreadcrumbItem` + `BreadcrumbDivider`; same collapse behavior at 4+ items.',
      'Nielsen Norman — recommends breadcrumbs for hierarchies 3+ levels deep; keep labels ≤ 3 words.',
    ],
    ravenGuidance: [
      'Typography: `body2` (14px/20px) Source Sans 3; separator `text.tertiary`.',
      'Max visible: 4 segments — collapse the middle to `…` with an expand control.',
      'Labels mirror the URL slug: Title Case, no trailing chrome like "page" or "view".',
    ],
    ravenUsage: `import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

<Breadcrumbs
  aria-label="Breadcrumb"
  separator={<ChevronRightRoundedIcon fontSize="small" sx={{ color: 'text.tertiary' }} />}
  maxItems={4}
  itemsBeforeCollapse={1}
  itemsAfterCollapse={2}
  sx={{ mb: 1 }}
>
  <Link underline="hover" color="text.secondary" href="/reports">
    Reports
  </Link>
  <Link underline="hover" color="text.secondary" href="/reports/near-miss">
    Near-Miss
  </Link>
  <Link underline="hover" color="text.secondary" href="/reports/near-miss/2026-Q1">
    2026 Q1
  </Link>
  <Typography color="text.primary" aria-current="page" sx={{ fontWeight: 600 }}>
    NM-10284
  </Typography>
</Breadcrumbs>`,
  },
  {
    category: 'Navigation',
    name: 'Drawer',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-drawer/',
    ravenSupport: 'available',
    ravenEquivalent: 'ActivityDrawer / MuiDrawer',
    notes: 'Raven drawers favor soft left corners, light surfaces, and timeline-style supporting content.',
    summary:
      'Side panel that slides in from an edge of the viewport. Raven uses drawers for secondary context that is transient — activity timelines, detail previews, filter panels, mobile navigation — not for primary structural navigation (that is `WideSidebar` / `RailSidebar`).',
    importPath: [
      `import Drawer from '@mui/material/Drawer';`,
    ],
    composition: [
      'Drawer (anchor="right") + ActivityDrawer body: header → tabs → timeline → action bar.',
      'Drawer (anchor="left", variant="temporary") + NavigationMenu for mobile nav — pair with `useMediaQuery(theme.breakpoints.down("md"))`.',
      'Drawer (anchor="bottom", variant="temporary") as a sheet on compact mobile viewports.',
    ],
    keyPoints: [
      '`variant="temporary"` (default) shows a backdrop and closes on outside click; `variant="persistent"` stays open and pushes content; `variant="permanent"` is always visible (use sidebar primitives instead).',
      'Set `PaperProps={{ sx: { width: 480 } }}` to size — widths default to `auto` which rarely matches design.',
      '`keepMounted` helps SEO for navigation content but costs memory — default unmount is correct for activity/detail drawers.',
    ],
    accessibility: [
      'Temporary drawer traps focus (MUI default); ensure there is a visible Close button reachable by Tab from the first focusable item.',
      'Set `aria-labelledby` on the Drawer root pointing to the drawer title.',
      'Return focus to the trigger on close (MUI default unless `disableRestoreFocus`).',
    ],
    crossPlatform: [
      'Google Material 3 — "Navigation drawer" (modal) and "Side sheet" (persistent); side sheet is the `activity drawer` analog.',
      'Microsoft Fluent — `Drawer` with `position="end"` + `size="medium" | "large"`; identical contract.',
      'Apple HIG — "Sheet" presentation styles; `.formSheet` maps to Raven right drawer, `.pageSheet` to bottom sheet.',
    ],
    ravenGuidance: [
      'Paper radii: 16px on the leading edge (top-left + bottom-left for right drawer); 0 on the edge that meets the viewport.',
      'Width: 480px admin default; 360px compact; 100vw on mobile (sheet mode).',
      'Header: sticky, `background.default` surface, bottom border `divider`, 56px tall, close IconButton on the trailing side.',
    ],
    ravenUsage: `import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

<Drawer
  anchor="right"
  open={open}
  onClose={onClose}
  aria-labelledby="activity-drawer-title"
  PaperProps={{
    sx: {
      width: 480,
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
      bgcolor: 'background.default',
    },
  }}
>
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{
      px: 2.5,
      height: 56,
      position: 'sticky',
      top: 0,
      bgcolor: 'background.default',
      borderBottom: '1px solid',
      borderColor: 'divider',
      zIndex: 1,
    }}
  >
    <Typography id="activity-drawer-title" variant="h6" sx={{ fontWeight: 600 }}>
      Incident activity
    </Typography>
    <IconButton aria-label="Close" onClick={onClose}>
      <CloseRoundedIcon />
    </IconButton>
  </Stack>

  <Box sx={{ p: 2.5 }}>
    <ActivityTimeline events={events} />
  </Box>
</Drawer>`,
  },
  {
    category: 'Navigation',
    name: 'Link',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-link/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenLink',
    notes: 'Links should keep brand color emphasis without overpowering the surrounding reading flow.',
  },
  {
    category: 'Navigation',
    name: 'Menu',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-menu/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenMenu',
    notes: 'Menus should use compact rounded surfaces, subtle shadows, and icon-aware spacing.',
  },
  {
    category: 'Navigation',
    name: 'Pagination',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-pagination/',
    ravenSupport: 'available',
    ravenEquivalent: 'RavenPagination',
    notes: 'Keep pagination light, pill-shaped, and strongly visible in the selected state.',
  },
  {
    category: 'Navigation',
    name: 'Speed Dial',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-speed-dial/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiSpeedDial under ravenNearMissTheme',
    notes: 'Use sparingly for dense quick-action workflows where a floating action cluster is justified.',
  },
  {
    category: 'Navigation',
    name: 'Stepper',
    guideline: 'MD1',
    docsUrl: 'https://v6.mui.com/material-ui/react-stepper/',
    ravenSupport: 'available',
    ravenEquivalent: 'StatusStepper / MuiStepper',
    notes: 'Raven step flows emphasize status transitions and review progression over generic checkout patterns.',
  },
  {
    category: 'Navigation',
    name: 'Tabs',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-tabs/',
    ravenSupport: 'available',
    ravenEquivalent: 'TabNavigation / MuiTabs',
    notes: 'Supports Raven navigation tabs plus wrapped labels, full-width and centered layouts, scrollable tab sets, icon-only and icon-label tabs, icon positioning, link-style nav tabs, selection-follows-focus behavior, vertical orientation, and a segmented pill-style variant for high-emphasis view switching.',
  },

  {
    category: 'Layout',
    name: 'Box',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-box/',
    ravenSupport: 'available',
    ravenEquivalent: 'Box (wraps MUI Box with Raven surface presets)',
    notes:
      'Box is the generic layout primitive that underpins AppShell, FormSectionCard, dialogs, and most page compositions. The Raven Box layers theme tokens (radius, padding, surface color, divider) on top of MUI Box so product code does not hand-roll sx for standard surfaces.',
    summary:
      'MUI Box is a generic one-line styling shortcut (`sx` prop + `component` override). It renders a <div> by default and accepts any HTML element via `component`. Raven Box adds opinionated surface variants so Raven pages stay consistent with the admin theme tokens.',
    importPath: [
      "import { Box } from 'raven-design-system';",
      "// or the raw MUI primitive when no Raven surface is needed:",
      "import MuiBox from '@mui/material/Box';",
    ],
    composition: [
      'Pass-through of every MUI Box prop: `sx`, `component`, `ref`, and all HTML attributes.',
      'variant="surface" — plain container, no styling (MUI Box parity).',
      'variant="card" — page content card: 24px radius, #FFFFFF surface, subtle elevation, 24px padding.',
      'variant="form-card" — form section card: 20px radius, 24px padding, soft divider border.',
      'variant="dialog" — 16px radius dialog surface, used by RavenDialog internals.',
      'variant="page" — full-height page background (#FCF6FE / #0E171B) with responsive padding.',
      'direction, gap, align, justify — flex shortcuts that compile into `display:flex` + sx.',
    ],
    keyPoints: [
      'Prefer Stack for uniform spacing between children; use Box when you need arbitrary sx or a non-flex container.',
      'Always set spacing via the theme scale (sx={{ p: 2, gap: 1.5 }}) — never raw pixel values — so dark mode and responsive tokens apply.',
      'Use the `component` prop to render semantic HTML (section, header, nav, ul, li) without losing the sx API.',
      'For repeated card-like surfaces, reach for RavenCard or Box variant="card" instead of restyling a bare Box every time.',
      'Box forwards refs to the underlying MUI Box element, so forwardRef-based libraries (react-hook-form, DnD, focus trap) work unchanged.',
    ],
    accessibility: [
      'Box has no implicit role; set `component` to a landmark element (main, nav, aside, section) when the region is navigable.',
      'When using Box as a clickable surface, add `role="button"`, `tabIndex={0}`, and keyboard handlers — prefer a real <button> or CardActionArea.',
      'Do not rely on color alone to convey state on a Box surface; pair with an icon or text label.',
      'Respect prefers-reduced-motion when animating Box via sx transitions.',
    ],
    apiLinks: [
      { label: 'Box API', url: 'https://v6.mui.com/material-ui/api/box/' },
      { label: 'sx prop', url: 'https://v6.mui.com/system/getting-started/the-sx-prop/' },
    ],
  },
  {
    category: 'Layout',
    name: 'Container',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-container/',
    ravenSupport: 'available',
    ravenEquivalent: 'Container (wraps MUI Container with Raven max-widths)',
    notes:
      'Container centers a content rail horizontally and caps its max-width at a breakpoint. Use it for marketing pages, settings flows, or any single-column layout that should never stretch edge-to-edge inside the AppShell content region.',
    summary:
      'MUI Container is the simplest way to center content with responsive horizontal padding. It accepts `maxWidth` (xs/sm/md/lg/xl/false) and `fixed`, and renders a <div> by default. The Raven Container applies Raven breakpoints and standardizes page-level padding.',
    importPath: [
      "import { Container } from 'raven-design-system';",
      "// or the raw MUI primitive:",
      "import MuiContainer from '@mui/material/Container';",
    ],
    composition: [
      'Pass-through of every MUI Container prop: `maxWidth`, `fixed`, `disableGutters`, `component`, `sx`.',
      'maxWidth="sm" (600) — narrow reading column, auth screens, single-form pages.',
      'maxWidth="md" (900, default) — standard settings / form pages inside AppShell.',
      'maxWidth="lg" (1200) — dashboards that need a centered rail but more horizontal room.',
      'maxWidth="xl" (1536) — analytics pages with wide tables.',
      'fixed — snaps to the current breakpoint min-width instead of the next one up.',
      'disableGutters — removes the responsive horizontal padding (16/24px).',
    ],
    keyPoints: [
      'Prefer Container over a hand-rolled `mx:"auto"` + `maxWidth` Box for any page-level content rail — keeps widths consistent across pages.',
      'Do not wrap an already-constrained region (RavenCard, FormSectionCard) in a Container; let the outer page set the width once.',
      'Container gutters are responsive — xs adds 16px, sm+ adds 24px horizontal padding. Use disableGutters only when a parent already pads.',
      'Combine with Stack inside for vertical rhythm; Container controls width, Stack controls spacing between children.',
      'Set `component="main"` when the container is the primary landmark on the page.',
    ],
    accessibility: [
      'Container has no implicit role. Use the `component` prop to set a landmark (main, section, article) where appropriate.',
      'Do not hide content outside the container from assistive tech — the surrounding background stays part of the document flow.',
      'Respect minimum 320px viewport width; gutters ensure content never touches the viewport edge.',
    ],
    apiLinks: [
      { label: 'Container API', url: 'https://v6.mui.com/material-ui/api/container/' },
      { label: 'Breakpoints', url: 'https://v6.mui.com/material-ui/customization/breakpoints/' },
    ],
  },
  {
    category: 'Layout',
    name: 'Grid',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-grid/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI Grid under Raven spacing rules',
    notes: 'Prefer 4px-based spacing and consistent card gutters when using classic grid layouts.',
  },
  {
    category: 'Layout',
    name: 'Grid v2',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-grid2/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI Grid v2 under Raven spacing rules',
    notes: 'Use Grid v2 for newer layouts that benefit from simplified API and token-driven spacing.',
  },
  {
    category: 'Layout',
    name: 'Stack',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-stack/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI Stack with Raven spacing tokens',
    notes: 'Stack is preferred for vertical or inline layout rhythm inside Raven cards and forms.',
  },
  {
    category: 'Layout',
    name: 'Image List',
    guideline: 'MD2',
    docsUrl: 'https://v6.mui.com/material-ui/react-image-list/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI Image List with Raven surfaces',
    notes: 'Use for media-centric layouts only; it is not a primary Near Miss workflow primitive.',
  },

  {
    category: 'Lab',
    name: 'Masonry',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-masonry/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI Lab Masonry',
    notes: 'Documented for future use; install MUI Lab before adding live Raven wrappers.',
  },
  {
    category: 'Lab',
    name: 'Timeline',
    guideline: 'No guidelines',
    docsUrl: 'https://v6.mui.com/material-ui/react-timeline/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI Lab Timeline / ActivityTimelineItem',
    notes: 'Near Miss already uses custom activity timeline patterns, so the lab primitive is guidance-first.',
  },

  {
    category: 'Utils',
    name: 'Click-Away Listener',
    guideline: 'Utility',
    docsUrl: 'https://v6.mui.com/material-ui/react-click-away-listener/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI ClickAwayListener',
    notes: 'Use to close menus, popovers, and layered controls without breaking keyboard accessibility.',
    summary:
      'Wraps a single child and fires a callback when a pointer event occurs outside its subtree. The light-dismiss primitive behind Raven popovers, column-filter panels, and inline overlays that are not formal dialogs.',
    importPath: [`import ClickAwayListener from '@mui/material/ClickAwayListener';`],
    composition: [
      'Typical stack: Popper → Grow → Paper → ClickAwayListener → menu body.',
      'Pair with RavenDialog only if the overlay is a confirmation — otherwise prefer this lighter primitive.',
      'Use inside UserProfileMenu, column-chooser, and FilterControls dropdowns.',
    ],
    keyPoints: [
      'Listens to `mousedown` + `touchstart` by default; switch to `onClick` via `mouseEvent="onClick"` if you need to honor drag-selection.',
      'The child MUST accept a ref — wrap custom components in `React.forwardRef` or use an MUI Paper/Box.',
      'Clicks on portaled children (Popover, Menu) fire the event — pass `disableReactTree` or anchor the listener inside the portal.',
    ],
    accessibility: [
      'Click-away is a pointer-only dismissal — ALWAYS pair with Escape-to-close and blur-on-tab-out.',
      'Never use as the sole mechanism to return focus; restore focus to the trigger on close.',
      'Announce the dismiss with `aria-expanded=false` on the trigger.',
    ],
    crossPlatform: [
      'Google Material — "Menu dismissal" pattern: pointer outside + Escape, never pointer-only.',
      'Microsoft Fluent — "Light dismiss" on Callout/Menu behaves identically; documented under Flyout surfaces.',
      'Apple HIG parallel: "tap outside to dismiss" paired with a close affordance for assistive tech.',
    ],
    ravenGuidance: [
      'Use `divider` (#F3E5F5) for the surface border and `16px` radius on the wrapping Paper — matches Raven popover chrome.',
      'Do not nest ClickAwayListener inside a Dialog — the Dialog already handles outside-click and doubles-up the callback.',
      'Storybook stories MUST render the trigger AND the overlay to verify click-away in isolation.',
    ],
    ravenUsage: `import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';

<Popper open={open} anchorEl={anchorEl} placement="bottom-start" transition>
  {({ TransitionProps }) => (
    <Grow {...TransitionProps}>
      <Paper sx={{ mt: 1, borderRadius: '16px', border: '1px solid #F3E5F5' }}>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList autoFocusItem onKeyDown={handleKey}>
            {items.map((it) => <MenuItem key={it.id}>{it.label}</MenuItem>)}
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Grow>
  )}
</Popper>`,
  },
  {
    category: 'Utils',
    name: 'CSS Baseline',
    guideline: 'Utility',
    docsUrl: 'https://v6.mui.com/material-ui/react-css-baseline/',
    ravenSupport: 'available',
    ravenEquivalent: 'CssBaseline in app and Storybook preview',
    notes: 'CssBaseline is required to keep Raven typography and surface behavior consistent across stories.',
    summary:
      'Normalizes cross-browser defaults and applies theme-level `background`, `color`, and Source Sans 3 typography to `html`/`body`. Required once at the app root — Raven themes assume it is present.',
    importPath: [`import CssBaseline from '@mui/material/CssBaseline';`],
    composition: [
      'Mount ONCE inside `<ThemeProvider>` at the app root (index / _app / main.tsx).',
      'Storybook already installs it via the preview decorator — do not re-mount in individual stories.',
      'For scoped-theme regions use `ScopedCssBaseline` instead of wrapping the subtree twice.',
    ],
    keyPoints: [
      'Applies `box-sizing: border-box` globally, removes default `body` margin, sets theme `background.default` and `text.primary`.',
      'Enables `@media (prefers-color-scheme)` when `ThemeProvider` is driven by `useMediaQuery` or `InitColorSchemeScript`.',
      'Sets `Source Sans 3` as the default typography family — everything downstream inherits from `body1`.',
    ],
    accessibility: [
      'Preserves user-agent focus rings — do NOT override `*:focus` here; use Raven `ring.focus.*` tokens per primitive.',
      'Honors `prefers-reduced-motion` through MUI `theme.transitions.create`.',
      'Keeps font sizing in `rem` so user text-size preferences scale correctly.',
    ],
    crossPlatform: [
      'Google Material — equivalent to "Material You" baseline CSS that sets surface/background tokens at the root.',
      'Microsoft Fluent — `FluentProvider` applies body-level font, color, and background tokens identically.',
      'Tailwind Preflight serves the same purpose in non-MUI stacks.',
    ],
    ravenGuidance: [
      'Wrap with `ravenAdminTheme` for admin pages and `ravenNearMissTheme` for near-miss flows — never mix.',
      'When embedding Raven inside a host app, use `ScopedCssBaseline` so host typography is untouched.',
      'Never set `body { font-family }` in product CSS — let CssBaseline own it.',
    ],
    ravenUsage: `import { ThemeProvider, CssBaseline } from '@mui/material';
import { ravenAdminTheme } from '@raven/design-system';

export function App() {
  return (
    <ThemeProvider theme={ravenAdminTheme}>
      <CssBaseline />
      <AppShell>
        <Routes />
      </AppShell>
    </ThemeProvider>
  );
}`,
  },
  {
    category: 'Utils',
    name: 'Modal',
    guideline: 'Utility',
    docsUrl: 'https://v6.mui.com/material-ui/react-modal/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiModal with Raven overlay guidance',
    notes: 'Use when dialog semantics are not appropriate but layered focus management is still required.',
    summary:
      'Low-level overlay primitive: renders any child in a portal with a backdrop, traps focus, locks body scroll, and restores focus on close. Prefer `RavenDialog` for confirmations — reach for Modal only when you need custom layered UI (image lightbox, onboarding overlay, P&ID export flow).',
    importPath: [`import Modal from '@mui/material/Modal';`],
    composition: [
      'Modal + Fade + Paper (16px radius) = custom confirmation / lightbox.',
      'Modal + Slide + Paper = custom drawer when `RavenDrawer` is too opinionated.',
      'Always put exactly ONE focusable Paper child inside — Modal targets the first tabbable element.',
    ],
    keyPoints: [
      'Renders via `Portal`; backdrop click and Escape both invoke `onClose` unless disabled via `disableEscapeKeyDown` / `disableBackdropClick` (removed in v5+, use `onClose` reason).',
      'Body gets `overflow: hidden` while open — scroll position is preserved and restored.',
      'Use `keepMounted` sparingly (SEO, measurement) — default unmount is the correct a11y story.',
    ],
    accessibility: [
      'ALWAYS set `aria-labelledby` and `aria-describedby` on the Paper — Modal itself is `role="presentation"`.',
      'Focus is trapped inside the Modal root — ensure there is at least one focusable element.',
      'Return focus to the trigger on close (MUI does this automatically unless `disableRestoreFocus`).',
    ],
    crossPlatform: [
      'Google Material — "Modal dialog" rules apply: prefer action-oriented titles, two buttons max, elevation 24.',
      'Microsoft Fluent — `Dialog` + `DialogSurface` use the same focus-trap + backdrop contract.',
      'WAI-ARIA APG "Dialog (Modal)" pattern — MUI Modal implements this end-to-end.',
    ],
    ravenGuidance: [
      'Paper inside Modal must use `borderRadius: 16px` (matches RavenDialog); shadow tier 4 (`shadow.4`).',
      'Backdrop color: `rgba(14, 23, 27, 0.6)` in admin light, `rgba(0, 0, 0, 0.72)` in dark — matches `color.surface.overlay`.',
      'Do not stack more than one Modal — use `Drawer` or a second step inside the same surface.',
    ],
    ravenUsage: `import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

<Modal
  open={open}
  onClose={onClose}
  closeAfterTransition
  aria-labelledby="export-title"
  aria-describedby="export-body"
>
  <Fade in={open}>
    <Paper
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 480,
        p: 3,
        borderRadius: '16px',
        boxShadow: 24,
      }}
    >
      <Typography id="export-title" variant="h5" sx={{ fontWeight: 600 }}>
        Export P&ID drawing
      </Typography>
      <Typography id="export-body" variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Choose a format and destination.
      </Typography>
      {/* actions … */}
    </Paper>
  </Fade>
</Modal>`,
  },
  {
    category: 'Utils',
    name: 'No SSR',
    guideline: 'Utility',
    docsUrl: 'https://v6.mui.com/material-ui/react-no-ssr/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI NoSsr',
    notes: 'Documented for integration scenarios; not typically needed in the core Raven Storybook flows.',
    summary:
      'Defers rendering of its children until after client hydration. Use only when the child reads `window`, `document`, `matchMedia`, or depends on measured layout and would otherwise break SSR or cause hydration mismatches.',
    importPath: [`import NoSsr from '@mui/material/NoSsr';`],
    composition: [
      'Wrap canvas/chart widgets, third-party embeds (Mapbox, Monaco), and any `useLayoutEffect`-measured UI.',
      'Combine with `<Skeleton />` in the `fallback` prop to preserve layout and avoid CLS.',
      'Use `defer` to push past the first paint so critical content ships earlier.',
    ],
    keyPoints: [
      'Does NOT disable SSR globally — only for the wrapped subtree.',
      '`fallback` renders on the server and for the first client render; children render only after mount.',
      'Cheaper than `dynamic(() => import(…), { ssr: false })` when the component is already bundled.',
    ],
    accessibility: [
      'Ensure the `fallback` has the same bounding box and role as the real content to keep screen-reader focus stable.',
      'Do NOT use for primary navigation or landmark regions — those MUST SSR for crawlers and assistive tech.',
      'Pair with `aria-busy="true"` on the wrapper while the fallback is showing.',
    ],
    crossPlatform: [
      'Google Material — "progressive hydration" pattern; same goal, different primitive (React.lazy + Suspense).',
      'Microsoft Fluent — `Suspense` boundary + `SkeletonShimmer` recommended for non-SSR-safe islands.',
      'Next.js `dynamic({ ssr: false })` is the meta-framework-level equivalent.',
    ],
    ravenGuidance: [
      'In Raven, only P&ID canvas widgets and the near-miss live map need this primitive — elsewhere SSR is fine.',
      'Always supply a Skeleton fallback sized to the eventual layout — never a `null` fallback.',
      'Do not nest NoSsr inside NoSsr — the outer guard is sufficient.',
    ],
    ravenUsage: `import NoSsr from '@mui/material/NoSsr';
import Skeleton from '@mui/material/Skeleton';
import { IncidentMap } from '@raven/design-system';

<NoSsr fallback={<Skeleton variant="rectangular" height={320} sx={{ borderRadius: 2 }} />}>
  <IncidentMap points={points} />
</NoSsr>`,
  },
  {
    category: 'Utils',
    name: 'Popover',
    guideline: 'Utility',
    docsUrl: 'https://v6.mui.com/material-ui/react-popover/',
    ravenSupport: 'themed',
    ravenEquivalent: 'MuiPopover with Raven paper styling',
    notes: 'Use for anchored contextual content that needs stronger structure than a tooltip.',
    summary:
      'Anchored overlay with a backdrop, transform origin, and focus management. Raven uses it for `UserProfileMenu`, column chooser, share sheet, and any floating card that needs a formal container but is not a full dialog.',
    importPath: [`import Popover from '@mui/material/Popover';`],
    composition: [
      'Popover = Modal + Popper + Paper — you get focus trap, anchor positioning, and a theme-aware surface in one primitive.',
      'Anchor with `anchorEl` + `anchorOrigin` + `transformOrigin` for predictable placement.',
      'Compose `UserProfileMenu`, `ColumnChooser`, and `ShareSheet` inside a Popover — not a raw Popper.',
    ],
    keyPoints: [
      'Closes on backdrop click, Escape, anchor unmount, or scroll container reflow.',
      'Use `slotProps.paper.sx` to theme the surface without wrapping a second Paper.',
      'Position origins: use matching `{vertical, horizontal}` pairs (`bottom-right` anchor + `top-right` transform) to keep the corner anchored.',
    ],
    accessibility: [
      'Set `role="dialog"` + `aria-labelledby` when the popover contains interactive content; leave as default `presentation` for read-only cards.',
      'First focusable child receives focus automatically — ensure one exists.',
      'Return focus to the trigger on close (MUI default unless `disableRestoreFocus`).',
    ],
    crossPlatform: [
      'Google Material — "Menu (exposed)" and "Rich tooltip" both use this contract at elevation 8.',
      'Microsoft Fluent — `Popover` with `positioning.target` is the 1:1 analog.',
      'Apple HIG "Popover" — same anchor+tail model, with a required dismiss affordance on touch.',
    ],
    ravenGuidance: [
      'Paper MUST use `borderRadius: 16px !important` and shadow tier 3 (`shadow.3`) to match Raven overlay chrome.',
      'Keep width ≤ 320px unless the popover is acting as a column chooser (up to 480px).',
      'Never put form submission buttons inside — use RavenDialog for anything that mutates state irreversibly.',
    ],
    ravenUsage: `import Popover from '@mui/material/Popover';
import { UserProfileMenu } from '@raven/design-system';

<Popover
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={() => setAnchorEl(null)}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  slotProps={{
    paper: {
      sx: {
        mt: 1,
        borderRadius: '16px !important',
        boxShadow: 3,
        minWidth: 240,
      },
    },
  }}
>
  <UserProfileMenu onSignOut={handleSignOut} />
</Popover>`,
  },
  {
    category: 'Utils',
    name: 'Popper',
    guideline: 'Utility',
    docsUrl: 'https://v6.mui.com/material-ui/react-popper/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI Popper',
    notes: 'Use for low-level positioning needs where Popover or Menu is too opinionated.',
    summary:
      'Headless positioning primitive (backed by Floating UI / Popper.js). No backdrop, no focus trap, no surface — you compose those yourself. Use when Popover or Menu is too heavy: autocomplete dropdowns, inline column filters, keyboard hints, date-picker surface.',
    importPath: [`import Popper from '@mui/material/Popper';`],
    composition: [
      'Popper → Grow → Paper → ClickAwayListener → MenuList / custom content.',
      'Use `modifiers` to add `offset`, `flip`, and `preventOverflow` behavior.',
      'Add `popperOptions.strategy="fixed"` when the anchor is inside a scroll container.',
    ],
    keyPoints: [
      'Does NOT render a backdrop — clicks pass through to the page.',
      'Does NOT trap focus — you must manage `autoFocusItem` on MenuList and return focus yourself.',
      '`placement` accepts 12 variants (top-start … bottom-end). Combine with `modifiers` for arrow/offset support.',
    ],
    accessibility: [
      'Pair ALWAYS with `ClickAwayListener` + keyboard Escape handler — Popper alone has no dismissal.',
      'Manage focus explicitly: `MenuList autoFocusItem` on open, restore to trigger on close.',
      'Set `aria-expanded` + `aria-controls` + `aria-haspopup` on the anchor button.',
    ],
    crossPlatform: [
      'Google Material — "Dropdown" and "Tooltip" both use a headless positioning engine with the same placement vocabulary.',
      'Microsoft Fluent — `usePopper` hook / `Positioning` primitive is the direct peer.',
      'Radix UI `Popover.Root` with `Portal` + `Content` makes the same trade-offs.',
    ],
    ravenGuidance: [
      'Reach for Popper only when you need arrow/tail support or a custom surface — otherwise use Popover.',
      'Always add `modifiers: [{ name: "offset", options: { offset: [0, 8] }}]` so content clears the trigger.',
      'Do not use for confirmations — interactive side-effects belong in RavenDialog.',
    ],
    ravenUsage: `import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';

<Popper
  open={open}
  anchorEl={anchorEl}
  placement="bottom-start"
  transition
  modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
>
  {({ TransitionProps }) => (
    <Grow {...TransitionProps}>
      <Paper sx={{ borderRadius: '16px', boxShadow: 3, minWidth: 240 }}>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList autoFocusItem={open} onKeyDown={handleKeyDown}>
            {options.map((o) => (
              <MenuItem key={o.id} onClick={() => select(o)}>{o.label}</MenuItem>
            ))}
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Grow>
  )}
</Popper>`,
  },
  {
    category: 'Utils',
    name: 'Portal',
    guideline: 'Utility',
    docsUrl: 'https://v6.mui.com/material-ui/react-portal/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI Portal',
    notes: 'Documented as an infrastructure primitive for overlays and detached rendering targets.',
    summary:
      'Renders children into a DOM node outside the normal React parent hierarchy — the foundation under Modal, Popover, Tooltip, and Snackbar. Most product code should never reach for Portal directly; use it only for dedicated overlay outlets (toast root, canvas chrome, iframe bridges).',
    importPath: [`import Portal from '@mui/material/Portal';`],
    composition: [
      'Use with `container` prop to target a specific outlet node (e.g. `#raven-toast-root`).',
      'Combine with theme/context providers inside the portaled tree — providers do NOT cross portal boundaries for CSS variables in some setups.',
      'Wrap Snackbar stacks, canvas overlays, or iframe-bridged UI with Portal to escape clip/overflow ancestors.',
    ],
    keyPoints: [
      'Default container is `document.body` — set `container` when you need deterministic layout order.',
      'Use `disablePortal` on child primitives (Popover, Tooltip) if you specifically need DOM proximity instead.',
      'Events still bubble up through the React tree — they do NOT bubble through the portal DOM boundary.',
    ],
    accessibility: [
      'Portaled content is OUTSIDE the anchor in DOM order — set `aria-owns` / `aria-controls` on the anchor to preserve the semantic relationship.',
      'Screen readers follow reading order by DOM position, not React tree — keep portaled overlays near the anchor via `container={anchor}` when possible.',
      'Manage focus deliberately — Portal does NOT trap focus (Modal does).',
    ],
    crossPlatform: [
      'Google Material — spec allows "overlay layer" which UI toolkits implement via portal-like primitives.',
      'Microsoft Fluent — `PortalProvider` + `Portal` use the same model; Fluent defaults to `document.body`.',
      'Radix UI `Portal` and React `createPortal` expose the same underlying DOM capability.',
    ],
    ravenGuidance: [
      'Raven apps MUST include a `#raven-toast-root` node in `AppShell` — Snackbar and Banner portal into it.',
      'Avoid `disablePortal` inside scroll containers — MUI positioning maths assume document-level placement.',
      'Keep tooltips/popovers portaled — `overflow: hidden` surfaces otherwise clip them.',
    ],
    ravenUsage: `import Portal from '@mui/material/Portal';
import { RavenToast } from '@raven/design-system';

// In AppShell:
<main>
  <Routes />
  <div id="raven-toast-root" aria-live="polite" aria-atomic="true" />
</main>

// Elsewhere — publish a toast:
const container = typeof document !== 'undefined'
  ? document.getElementById('raven-toast-root')
  : null;

<Portal container={container}>
  <RavenToast severity="success">Report submitted</RavenToast>
</Portal>`,
  },
  {
    category: 'Utils',
    name: 'Textarea Autosize',
    guideline: 'Utility',
    docsUrl: 'https://v6.mui.com/material-ui/react-textarea-autosize/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'TextareaAutosize / CommentInput',
    notes: 'Best for comment and note capture where multiline growth is more important than form chrome.',
    summary:
      'Unstyled `<textarea>` that grows to fit its content between `minRows` and `maxRows`. Reach for it when you need textarea behavior without the MUI TextField chrome — inline comments, Raven ChatInput multiline mode, quick-note capture.',
    importPath: [`import TextareaAutosize from '@mui/material/TextareaAutosize';`],
    composition: [
      'Use inside `RavenCommentInput` and the multiline variant of `ChatInput`.',
      'Pair with an explicit `<label>` or `aria-label`, and an `aria-describedby` helper row.',
      'Prefer `TextField multiline minRows` if you want full MUI chrome (outline, label, error).',
    ],
    keyPoints: [
      'Pass `minRows` and `maxRows` as integers; the component measures line-height from computed styles.',
      'No default padding or border — style explicitly; values you do not set will inherit from the user agent.',
      'Re-measures on resize and content change via `ResizeObserver` — SSR-safe.',
    ],
    accessibility: [
      'ALWAYS supply `aria-label` or an associated `<label htmlFor>` — there is no default label chrome.',
      'Announce character counters via `aria-describedby` and update politely.',
      'Errors MUST be conveyed via color + text + `aria-invalid="true"` — not color alone.',
    ],
    crossPlatform: [
      'Google Material — "Text field — multiline" with character counter; same a11y requirements.',
      'Microsoft Fluent — `Textarea` with `resize="auto"` is the direct peer.',
      'Apple HIG "Text View" scrolls by default; auto-grow is a web-specific affordance.',
    ],
    ravenGuidance: [
      'Padding: 12px vertical, 16px horizontal to match Raven input rhythm.',
      'Border: 1px solid `divider` (#F3E5F5); focus border: 1px solid `primary.main` (#4A148C) + 2px purple focus ring.',
      'Font: Source Sans 3, 15px / 22px — matches `body1` in the admin theme.',
    ],
    ravenUsage: `import TextareaAutosize from '@mui/material/TextareaAutosize';

<TextareaAutosize
  minRows={3}
  maxRows={8}
  aria-label="Incident notes"
  placeholder="Add context that will help the reviewer…"
  style={{
    width: '100%',
    padding: '12px 16px',
    borderRadius: 8,
    border: '1px solid #F3E5F5',
    fontFamily: '"Source Sans 3", sans-serif',
    fontSize: 15,
    lineHeight: 1.45,
    outline: 'none',
    resize: 'none',
  }}
/>`,
  },
  {
    category: 'Utils',
    name: 'Transitions',
    guideline: 'Utility',
    docsUrl: 'https://v6.mui.com/material-ui/transitions',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI transition helpers',
    notes: 'Use motion sparingly and keep it subordinate to clarity in operational workflows.',
    summary:
      'MUI bundles five motion primitives — `Fade`, `Grow`, `Slide`, `Zoom`, `Collapse` — for choreographing overlay entry/exit and in-flow expansion. Raven uses them sparingly: safety operators work with urgency, so motion must never delay clarity.',
    importPath: [`import { Fade, Grow, Slide, Zoom, Collapse } from '@mui/material';`],
    composition: [
      'Overlay entry: Modal → Fade (150–250ms) → Paper.',
      'Menu/popover: Popper → Grow (200ms, `transform-origin` derived from placement).',
      'Drawer/sheet: Drawer → Slide from edge (250ms).',
      'In-flow disclosure: Accordion → Collapse (`theme.transitions.duration.standard`).',
    ],
    keyPoints: [
      'Pull durations and easings from `theme.transitions` — do not hard-code ms values.',
      'Each transition accepts `timeout`, `easing`, and an `in` prop controlled by the parent.',
      'Wrap children with `React.forwardRef`; transitions clone props onto the ref target.',
    ],
    accessibility: [
      'Respect `prefers-reduced-motion`: set `timeout={0}` or render without transition wrapper.',
      'Do NOT delay semantically meaningful content behind motion — announcements fire on mount, not on transition end.',
      'Keep entry under 300ms and exit under 200ms — longer transitions make ops tools feel sluggish.',
    ],
    crossPlatform: [
      'Google Material 3 — "Emphasized" 500ms for hero; "Standard" 250ms for utility; ease `cubic-bezier(0.2, 0, 0, 1)`.',
      'Microsoft Fluent — "Decelerate-Max" 300ms for surface enters; "Linear-Accelerate" 150ms for exits.',
      'Apple HIG — spring animations with mass/tension params; web fallback = 250ms ease-out.',
    ],
    ravenGuidance: [
      'Raven tokens: `duration.fast=150ms`, `duration.base=250ms`, `duration.slow=400ms`; `ease.standard=cubic-bezier(0.4, 0, 0.2, 1)`.',
      'Prefer `Fade` over `Zoom` — scale animations compete with content readability in dense tables.',
      'Always gate with `useReducedMotion` in AI streaming UI — token-by-token text already carries motion.',
    ],
    ravenUsage: `import { Fade, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = useTheme();
const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

<Fade
  in={open}
  timeout={reduceMotion ? 0 : theme.transitions.duration.standard}
  easing={theme.transitions.easing.easeOut}
>
  <Paper sx={{ borderRadius: '16px', p: 3 }}>
    {content}
  </Paper>
</Fade>`,
  },
  {
    category: 'Utils',
    name: 'useMediaQuery',
    guideline: 'Utility',
    docsUrl: 'https://v6.mui.com/material-ui/react-use-media-query/',
    ravenSupport: 'guidance',
    ravenEquivalent: 'MUI useMediaQuery hook',
    notes: 'Use for responsive behavioral shifts, especially when adapting desktop layouts to mobile shells.',
    summary:
      'React hook that subscribes to a CSS media query and returns a boolean. Drives responsive behavior that cannot be expressed with CSS alone — wide sidebar vs. rail, sheet vs. dialog, desktop chart vs. mobile list.',
    importPath: [`import useMediaQuery from '@mui/material/useMediaQuery';`],
    composition: [
      'Use alongside `theme.breakpoints.*` helpers so queries stay token-aligned: `theme.breakpoints.up("md")`.',
      'Combine with `ravenAdminTheme` breakpoints — sm=600, md=900, lg=1200, xl=1536.',
      'Inside hooks that run on every render, pass `noSsr: true` only if you own server rendering and accept the hydration cost.',
    ],
    keyPoints: [
      'Returns `false` on the server by default; first client render re-evaluates and may cause a flicker.',
      'Accepts a string, a function of theme, or an array; stable references avoid unnecessary re-subscribes.',
      'Cheap: wraps `window.matchMedia` and a single event listener per query.',
    ],
    accessibility: [
      'Honor `prefers-reduced-motion`, `prefers-color-scheme`, and `prefers-contrast` via this hook — do NOT ship hard-coded animations.',
      'Preserve focus across layout shifts: when switching shells, restore focus to an equivalent element.',
      'Announce major layout changes (e.g. sidebar collapsed) via `aria-live` if the change is user-triggered.',
    ],
    crossPlatform: [
      'Google Material — window-size classes (Compact, Medium, Expanded, Large, ExtraLarge) mapped to media queries.',
      'Microsoft Fluent — `useMediaQuery` hook + `tokens.breakpoints` namespace.',
      'Tailwind — `@media (min-width: …)` utilities; React-side equivalent is this hook.',
    ],
    ravenGuidance: [
      'Shell selection: `useMediaQuery(theme.breakpoints.down("md"))` picks `RailSidebar` over `WideSidebar`.',
      'Dialog-vs-sheet: on `down("sm")`, render `Drawer anchor="bottom"` instead of a centered Modal.',
      'Never mix Tailwind responsive utilities with MUI breakpoints in the same component — pick one source of truth.',
    ],
    ravenUsage: `import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { WideSidebar, RailSidebar } from '@raven/design-system';

export function Shell({ children }) {
  const theme = useTheme();
  const isCompact = useMediaQuery(theme.breakpoints.down('md'));
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <AppShell
      sidebar={isCompact ? <RailSidebar /> : <WideSidebar />}
      transitionMs={reduceMotion ? 0 : 250}
    >
      {children}
    </AppShell>
  );
}`,
  },
];

export const muiV6Categories: MuiV6Category[] = [
  'Inputs',
  'Data display',
  'Feedback',
  'Surface',
  'Navigation',
  'Layout',
  'Lab',
  'Utils',
];

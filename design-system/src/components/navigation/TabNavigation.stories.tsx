import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircleRounded';
import AnalyticsIcon from '@mui/icons-material/AnalyticsRounded';
import AssignmentIcon from '@mui/icons-material/AssignmentRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreRounded';
import PhoneIcon from '@mui/icons-material/PhoneRounded';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissedRounded';
import FavoriteIcon from '@mui/icons-material/FavoriteRounded';
import ManageSearchIcon from '@mui/icons-material/ManageSearchRounded';
import PersonPinIcon from '@mui/icons-material/PersonPinRounded';
import RecommendIcon from '@mui/icons-material/RecommendRounded';
import TableChartIcon from '@mui/icons-material/TableChartRounded';
import PieChartIcon from '@mui/icons-material/PieChartRounded';
import WarningIcon from '@mui/icons-material/WarningRounded';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { TabNavigation } from './TabNavigation';
import { StatusFilterBar } from './StatusFilterBar';
import { ViewToggle } from './ViewToggle';
import ViewList from '@mui/icons-material/ViewListRounded';
import ViewModule from '@mui/icons-material/ViewModuleRounded';

const meta = {
  title: 'Components/Navigation/Tabs',
  component: TabNavigation,
  parameters: {
    docs: {
      description: {
        component:
          'Raven tabs build on MUI Tabs and now cover the core patterns from the MUI tabs guidance: basic navigation, disabled tabs, wrapped labels, full-width and centered layouts, scrollable tabs, icon-only and icon-label tabs, icon positioning, navigation tabs, selection-follows-focus behavior, a Figma-inspired vertical rail variant, and a Raven segmented pill variant for high-emphasis view switching.',
      },
    },
  },
} satisfies Meta<typeof TabNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

function ExampleTabPanel({
  activeIndex,
  index,
  idPrefix,
  children,
}: {
  activeIndex: number;
  index: number;
  idPrefix: string;
  children: React.ReactNode;
}) {
  const selected = activeIndex === index;

  return (
    <Box
      role="tabpanel"
      hidden={!selected}
      id={`${idPrefix}-panel-${index}`}
      aria-labelledby={`${idPrefix}-tab-${index}`}
      sx={{
        display: selected ? 'block' : 'none',
        pt: 2,
      }}
    >
      {selected ? children : null}
    </Box>
  );
}

function BasicTabsExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = 'basic-tabs';

  return (
    <Box>
      <TabNavigation
        idPrefix={idPrefix}
        ariaLabel="Basic Raven tabs"
        tabs={[
          { label: 'Open', count: 12 },
          { label: 'Review', disabled: true },
          { label: 'Closed', count: 3 },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
      <ExampleTabPanel activeIndex={activeIndex} index={0} idPrefix={idPrefix}>
        <Typography variant="body2" color="text.secondary">
          Open incidents stay visible here with count support and clear inactive state contrast.
        </Typography>
      </ExampleTabPanel>
      <ExampleTabPanel activeIndex={activeIndex} index={2} idPrefix={idPrefix}>
        <Typography variant="body2" color="text.secondary">
          Closed incidents can be reached from the same hierarchy level without leaving the workflow.
        </Typography>
      </ExampleTabPanel>
    </Box>
  );
}

function WrappedTabsExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = 'wrapped-tabs';

  return (
    <Box sx={{ maxWidth: 560 }}>
      <TabNavigation
        idPrefix={idPrefix}
        ariaLabel="Wrapped label tabs"
        variant="standard"
        tabs={[
          { label: 'New arrivals in the longest text of nonfiction', wrapped: true },
          { label: 'Operations' },
          { label: 'Safety' },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    </Box>
  );
}

function FullWidthTabsExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = 'fullwidth-tabs';

  return (
    <Box sx={{ maxWidth: 520 }}>
      <TabNavigation
        idPrefix={idPrefix}
        ariaLabel="Full width tabs"
        variant="fullWidth"
        tabs={[
          { label: 'Summary' },
          { label: 'Analysis' },
          { label: 'Actions' },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    </Box>
  );
}

function CenteredTabsExample() {
  const [activeIndex, setActiveIndex] = useState(1);
  const idPrefix = 'centered-tabs';

  return (
    <TabNavigation
      idPrefix={idPrefix}
      ariaLabel="Centered tabs"
      variant="standard"
      centered
      tabs={[
        { label: 'Overview' },
        { label: 'Reports' },
        { label: 'Insights' },
      ]}
      activeIndex={activeIndex}
      onChange={setActiveIndex}
    />
  );
}

function ScrollableTabsExample() {
  const [activeIndex, setActiveIndex] = useState(2);
  const idPrefix = 'scrollable-tabs';

  return (
    <Box sx={{ maxWidth: 620 }}>
      <TabNavigation
        idPrefix={idPrefix}
        ariaLabel="Scrollable tabs"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        tabs={[
          { label: 'Item One' },
          { label: 'Item Two' },
          { label: 'Item Three' },
          { label: 'Item Four' },
          { label: 'Item Five' },
          { label: 'Item Six' },
          { label: 'Item Seven' },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    </Box>
  );
}

function IconTabsExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = 'icon-tabs';

  return (
    <Box sx={{ maxWidth: 560 }}>
      <TabNavigation
        idPrefix={idPrefix}
        ariaLabel="Icon tabs"
        variant="standard"
        tabs={[
          { label: 'Recents', icon: <PhoneIcon /> },
          { label: 'Favorites', icon: <FavoriteIcon /> },
          { label: 'Nearby', icon: <PersonPinIcon /> },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    </Box>
  );
}

function IconOnlyTabsExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = 'icon-only-tabs';

  return (
    <Box sx={{ maxWidth: 240 }}>
      <TabNavigation
        idPrefix={idPrefix}
        ariaLabel="Icon-only tabs"
        variant="standard"
        tabs={[
          { label: '', ariaLabel: 'Phone', icon: <PhoneIcon /> },
          { label: '', ariaLabel: 'Favorites', icon: <FavoriteIcon /> },
          { label: '', ariaLabel: 'Nearby', icon: <PersonPinIcon /> },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    </Box>
  );
}

function IconPositionTabsExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = 'icon-position-tabs';

  return (
    <Box sx={{ maxWidth: 780 }}>
      <TabNavigation
        idPrefix={idPrefix}
        ariaLabel="Icon position tabs"
        variant="standard"
        tabs={[
          { label: 'Top', icon: <PhoneIcon />, iconPosition: 'top' },
          { label: 'Start', icon: <PhoneMissedIcon />, iconPosition: 'start' },
          { label: 'End', icon: <FavoriteIcon />, iconPosition: 'end' },
          { label: 'Bottom', icon: <PersonPinIcon />, iconPosition: 'bottom' },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    </Box>
  );
}

function NavigationTabsExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = 'navigation-tabs';

  return (
    <Box sx={{ maxWidth: 520 }}>
      <TabNavigation
        idPrefix={idPrefix}
        ariaLabel="Navigation tabs"
        role="navigation"
        variant="standard"
        tabs={[
          { label: 'Drafts', href: '#drafts' },
          { label: 'Trash', href: '#trash' },
          { label: 'Spam', href: '#spam' },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
      <Typography variant="body2" color="text.secondary" sx={{ pt: 2 }}>
        Use `href` or a routed `component` when tabs represent page-level navigation instead of
        in-place panel switching.
      </Typography>
    </Box>
  );
}

function SelectionFollowsFocusExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = 'selection-follows-focus-tabs';

  return (
    <Box sx={{ maxWidth: 560 }}>
      <TabNavigation
        idPrefix={idPrefix}
        ariaLabel="Selection follows focus tabs"
        variant="standard"
        selectionFollowsFocus
        tabs={[
          { label: 'Overview' },
          { label: 'Reports' },
          { label: 'Actions' },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
      <ExampleTabPanel activeIndex={activeIndex} index={activeIndex} idPrefix={idPrefix}>
        <Typography variant="body2" color="text.secondary">
          With `selectionFollowsFocus`, arrow-key focus changes also update selection, which matches
          the optional keyboard behavior described in the MUI guidance.
        </Typography>
      </ExampleTabPanel>
    </Box>
  );
}

function RailNavigationRow({
  icon,
  label,
  trailingIcon,
  selected = false,
  compact = false,
  nested = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  trailingIcon?: React.ReactNode;
  selected?: boolean;
  compact?: boolean;
  nested?: boolean;
  onClick?: () => void;
}) {
  const isInteractive = Boolean(onClick);

  return (
    <Box
      component={isInteractive ? 'button' : 'div'}
      type={isInteractive ? 'button' : undefined}
      onClick={onClick}
      sx={{
        all: isInteractive ? 'unset' : undefined,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        width: '100%',
        minHeight: compact ? 38 : 40,
        px: compact || trailingIcon || selected ? '4px' : '8px',
        borderRadius: compact ? '8px' : trailingIcon ? '4px' : '8px',
        backgroundColor: selected ? '#e1bee7' : 'transparent',
        color: selected ? '#4a148c' : 'rgba(0, 0, 0, 0.6)',
        cursor: isInteractive ? 'pointer' : 'default',
        textAlign: 'left',
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'inherit',
          flexShrink: 0,
          p: compact || trailingIcon || selected ? '4px' : 0,
          borderRadius: '4px',
          '& .MuiSvgIcon-root': {
            fontSize: 24,
          },
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="body2"
        sx={{
          flex: 1,
          fontFamily: '"Source Sans 3", "Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: 14,
          fontWeight: selected ? 600 : 400,
          lineHeight: '22px',
          letterSpacing: selected ? '0.17px' : '0.1px',
          color: 'inherit',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          py: nested ? '4px' : 0,
        }}
      >
        {label}
      </Typography>
      {trailingIcon ? (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4a148c',
            px: '8px',
            pt: '8px',
            pb: '16px',
            mb: '-8px',
            '& .MuiSvgIcon-root': {
              fontSize: 16,
            },
          }}
        >
          {trailingIcon}
        </Box>
      ) : null}
    </Box>
  );
}

function VerticalTabsExample() {
  const [activeItem, setActiveItem] = useState<
    'report-incident' | 'reports' | 'investigations' | 'recommendations' | 'analysis'
  >('analysis');
  const [incidentsOpen, setIncidentsOpen] = useState(true);
  const activeLabel =
    activeItem === 'report-incident'
      ? 'Report Incident'
      : activeItem === 'reports'
        ? 'Reports'
        : activeItem === 'investigations'
          ? 'Investigations'
          : activeItem === 'recommendations'
            ? 'Recommendations'
            : 'Analysis';

  const handleIncidentsToggle = () => {
    setIncidentsOpen((open) => {
      const nextOpen = !open;

      if (!nextOpen && ['reports', 'investigations', 'recommendations'].includes(activeItem)) {
        setActiveItem('analysis');
      }

      return nextOpen;
    });
  };

  return (
    <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
      <Box
        sx={{
          width: 216,
          py: '8px',
          backgroundColor: '#faf7fb',
        }}
      >
        <Stack spacing="4px">
          <RailNavigationRow
            icon={<AddCircleIcon />}
            label="Report Incident"
            selected={activeItem === 'report-incident'}
            onClick={() => setActiveItem('report-incident')}
          />
          <RailNavigationRow
            icon={<WarningIcon />}
            label="Incidents"
            trailingIcon={
              <ExpandMoreIcon
                sx={{
                  transform: incidentsOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                  transition: 'transform 150ms ease',
                }}
              />
            }
            onClick={handleIncidentsToggle}
          />
          {incidentsOpen ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'stretch',
                gap: '8px',
                pl: '15px',
              }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  width: '1px',
                  minHeight: '116px',
                  borderRadius: '4px',
                  backgroundColor: '#e1bee7',
                }}
              />
              <Box sx={{ flex: 1, minWidth: 0, pb: '8px' }}>
                <Stack spacing="4px">
                  <RailNavigationRow
                    icon={<AssignmentIcon />}
                    label="Reports"
                    compact
                    nested
                    selected={activeItem === 'reports'}
                    onClick={() => setActiveItem('reports')}
                  />
                  <RailNavigationRow
                    icon={<ManageSearchIcon />}
                    label="Investigations"
                    compact
                    nested
                    selected={activeItem === 'investigations'}
                    onClick={() => setActiveItem('investigations')}
                  />
                  <RailNavigationRow
                    icon={<RecommendIcon />}
                    label="Recommendations"
                    compact
                    nested
                    selected={activeItem === 'recommendations'}
                    onClick={() => setActiveItem('recommendations')}
                  />
                </Stack>
              </Box>
            </Box>
          ) : null}
          <RailNavigationRow
            icon={<AnalyticsIcon />}
            label="Analysis"
            selected={activeItem === 'analysis'}
            onClick={() => setActiveItem('analysis')}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          maxWidth: 360,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Selected rail item: <Box component="span" sx={{ color: '#4a148c', fontWeight: 600 }}>{activeLabel}</Box>
        </Typography>
      </Box>
    </Stack>
  );
}

function StatusFilterBarExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <StatusFilterBar
      filters={[
        { label: 'All', count: 48 },
        { label: 'Open', count: 12 },
        { label: 'In review', count: 7 },
        { label: 'Closed', count: 29 },
      ]}
      activeIndex={activeIndex}
      onChange={setActiveIndex}
    />
  );
}

function ViewToggleIconExample() {
  const [value, setValue] = useState('list');
  return (
    <ViewToggle
      options={[
        { label: 'List', value: 'list', icon: <ViewList fontSize="small" /> },
        { label: 'Grid', value: 'grid', icon: <ViewModule fontSize="small" /> },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}

function ViewToggleTextExample() {
  const [value, setValue] = useState('a');
  return (
    <ViewToggle
      options={[
        { label: 'Summary', value: 'a' },
        { label: 'Details', value: 'b' },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}

function SegmentedTabsExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = 'segmented-tabs';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 1,
      }}
    >
      <TabNavigation
        idPrefix={idPrefix}
        ariaLabel="Segmented tabs"
        variant="standard"
        appearance="segmented"
        showDivider={false}
        tabs={[
          { label: 'Table', icon: <TableChartIcon />, iconPosition: 'start' },
          { label: 'Chart', icon: <PieChartIcon />, iconPosition: 'start' },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    </Box>
  );
}

export const TabsPage: Story = {
  name: 'Tabs',
  args: {
    tabs: [{ label: 'Sample' }],
    activeIndex: 0,
    onChange: () => {},
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={1320}>
      <StorybookSection
        title="Vertical Tabs"
        description="Vertical orientation can also use an icon-first rail appearance for side navigation patterns drawn from the Near Miss Figma."
      >
        <VerticalTabsExample />
      </StorybookSection>
      <StorybookSection
        title="Raven Segmented Tabs"
        description="High-emphasis pill tabs tuned to match the Figma-style proportions for icon, label weight, spacing, border, and elevation."
      >
        <SegmentedTabsExample />
      </StorybookSection>
      <StorybookSection
        title="Status Filter Bar"
        description="Count-aware variant of the Tabs pattern. Same segmented-pill visual bound to filter-with-counts semantics (All (48) / Open (12) / Closed (29))."
      >
        <StatusFilterBarExample />
      </StorybookSection>
      <StorybookSection
        title="View Toggle (icon + label)"
        description="2–4 option variant of the Tabs pattern for switching the rendering of the same content (List / Grid, Chart / Table, Summary / Details)."
      >
        <ViewToggleIconExample />
      </StorybookSection>
      <StorybookSection
        title="View Toggle (text only)"
        description="Text-only View Toggle when icons aren't needed — Summary / Details style switchers."
      >
        <ViewToggleTextExample />
      </StorybookSection>
      <StorybookSection
        title="Basic Tabs"
        description="Primary Raven tab navigation for related content at the same hierarchy level, with disabled tabs and count labels."
      >
        <BasicTabsExample />
      </StorybookSection>
      <StorybookSection
        title="Wrapped Labels"
        description="Long labels can wrap when the tab text would otherwise overflow."
      >
        <WrappedTabsExample />
      </StorybookSection>
      <StorybookSection
        title="Full Width Tabs"
        description="Use full-width tabs in narrower layouts when equal distribution improves scanability."
      >
        <FullWidthTabsExample />
      </StorybookSection>
      <StorybookSection
        title="Centered Tabs"
        description="Centered tabs are useful for short tab sets in wider layouts."
      >
        <CenteredTabsExample />
      </StorybookSection>
      <StorybookSection
        title="Scrollable Tabs"
        description="Scrollable tabs support larger tab collections and optional mobile-visible scroll buttons."
      >
        <ScrollableTabsExample />
      </StorybookSection>
      <StorybookSection
        title="Icon Tabs"
        description="Tabs can include icons with labels to support quick recognition of destinations."
      >
        <IconTabsExample />
      </StorybookSection>
      <StorybookSection
        title="Icon-Only Tabs"
        description="Icon-only tabs should provide per-tab accessible names so assistive technologies still expose meaningful labels."
      >
        <IconOnlyTabsExample />
      </StorybookSection>
      <StorybookSection
        title="Icon Positions"
        description="The wrapper now supports the same icon placement options exposed by MUI Tabs."
      >
        <IconPositionTabsExample />
      </StorybookSection>
      <StorybookSection
        title="Navigation Tabs"
        description="When tabs act as page navigation, use links or routed components and set the tablist role to navigation."
      >
        <NavigationTabsExample />
      </StorybookSection>
      <StorybookSection
        title="Selection Follows Focus"
        description="MUI Tabs default to manual activation. Raven also exposes the optional automatic selection behavior for arrow-key navigation."
      >
        <SelectionFollowsFocusExample />
      </StorybookSection>
      <StorybookSection
        title="Accessibility Notes"
        description={
          <Stack spacing={0.75}>
            <Typography variant="body2" color="text.secondary" component="div">
              Label each tablist with `aria-label` or `aria-labelledby`.
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              Connect each tab to its panel using matching `id`, `aria-controls`, and
              `aria-labelledby` values.
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              Use item-level `ariaLabel` values for icon-only tabs so they retain accessible names.
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              Raven keeps the branded purple selected state by default instead of exposing MUI
              `textColor` and `indicatorColor` variants as separate page examples.
            </Typography>
          </Stack>
        }
      >
        <Typography variant="body2" color="text.secondary">
          Keyboard behavior follows the MUI defaults from the core Tabs API, with
          `selectionFollowsFocus` available when faster arrow-key selection is preferred.
        </Typography>
      </StorybookSection>
    </StorybookPage>
  ),
};

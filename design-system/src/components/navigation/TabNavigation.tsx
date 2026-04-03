import type { ComponentType, SyntheticEvent } from 'react';
import { useId } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import type { TabProps } from '@mui/material/Tab';
import type { TabsProps } from '@mui/material/Tabs';

import './TabNavigation.css';

export type TabNavigationAppearance = 'underline' | 'segmented' | 'rail';

export type TabNavigationItem = {
  label: string;
  ariaLabel?: string;
  count?: number;
  disabled?: boolean;
  icon?: TabProps['icon'];
  iconPosition?: TabProps['iconPosition'];
  wrapped?: boolean;
  href?: string;
  component?: ComponentType<any> | string;
};

export type TabNavigationProps = {
  tabs: TabNavigationItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  ariaLabel?: string;
  variant?: TabsProps['variant'];
  scrollButtons?: TabsProps['scrollButtons'];
  allowScrollButtonsMobile?: boolean;
  centered?: boolean;
  orientation?: TabsProps['orientation'];
  selectionFollowsFocus?: boolean;
  role?: string;
  appearance?: TabNavigationAppearance;
  showDivider?: boolean;
  idPrefix?: string;
};

function formatTabLabel(label: string, count?: number) {
  if (count === undefined) return label;
  return label ? `${label} (${count})` : `(${count})`;
}

/**
 * Primary tab strip for section navigation (MUI Tabs + Raven visual tokens).
 */
export function TabNavigation({
  tabs,
  activeIndex,
  onChange,
  ariaLabel = 'Navigation tabs',
  variant = 'scrollable',
  scrollButtons = 'auto',
  allowScrollButtonsMobile = false,
  centered = false,
  orientation = 'horizontal',
  selectionFollowsFocus = false,
  role,
  appearance = 'underline',
  showDivider = appearance === 'underline' && orientation === 'horizontal',
  idPrefix,
}: TabNavigationProps) {
  const generatedId = useId();
  const prefix = idPrefix ?? `raven-tab-nav-${generatedId.replace(/:/g, '')}`;
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    onChange(newValue);
  };

  return (
    <Box
      className={[
        'raven-tab-nav',
        `raven-tab-nav--${appearance}`,
        `raven-tab-nav--${orientation}`,
        showDivider ? 'raven-tab-nav--divider' : '',
      ].filter(Boolean).join(' ')}
    >
      <Tabs
        value={activeIndex}
        onChange={handleChange}
        textColor="inherit"
        variant={variant}
        scrollButtons={variant === 'scrollable' ? scrollButtons : undefined}
        allowScrollButtonsMobile={allowScrollButtonsMobile}
        aria-label={ariaLabel}
        centered={centered}
        orientation={orientation}
        selectionFollowsFocus={selectionFollowsFocus}
        role={role}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={`${tab.ariaLabel ?? tab.label}-${index}`}
            value={index}
            id={`${prefix}-tab-${index}`}
            aria-controls={`${prefix}-panel-${index}`}
            aria-label={tab.ariaLabel}
            label={formatTabLabel(tab.label, tab.count)}
            disabled={tab.disabled}
            icon={tab.icon}
            iconPosition={tab.iconPosition}
            wrapped={tab.wrapped}
            {...(tab.href ? { href: tab.href } : {})}
            {...(tab.component ? { component: tab.component } : {})}
          />
        ))}
      </Tabs>
    </Box>
  );
}

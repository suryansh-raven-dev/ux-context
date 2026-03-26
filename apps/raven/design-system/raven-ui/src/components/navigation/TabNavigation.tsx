import type { SyntheticEvent } from 'react';

import { Box, Tab, Tabs } from '@mui/material';

import './TabNavigation.css';

export type TabNavigationProps = {
  tabs: { label: string; count?: number }[];
  activeIndex: number;
  onChange: (index: number) => void;
};

function formatTabLabel(label: string, count?: number) {
  if (count === undefined) return label;
  return `${label} (${count})`;
}

/**
 * Primary tab strip for section navigation (MUI Tabs + Raven visual tokens).
 */
export function TabNavigation({ tabs, activeIndex, onChange }: TabNavigationProps) {
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    onChange(newValue);
  };

  return (
    <Box className="raven-tab-nav">
      <Tabs
        value={activeIndex}
        onChange={handleChange}
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Navigation tabs"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={`${tab.label}-${index}`}
            id={`raven-tab-nav-tab-${index}`}
            aria-controls={`raven-tab-nav-panel-${index}`}
            label={formatTabLabel(tab.label, tab.count)}
          />
        ))}
      </Tabs>
    </Box>
  );
}

import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import './RavenList.css';

export interface RavenListItem {
  id: string;
  primary: string;
  secondary?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}

export interface RavenListProps {
  items: RavenListItem[];
  dense?: boolean;
}

export const RavenList: React.FC<RavenListProps> = ({ items, dense }) => (
  <List className="raven-list" dense={dense}>
    {items.map((item) => (
      <ListItem key={item.id} disablePadding>
        <ListItemButton
          onClick={item.onClick}
          selected={item.selected}
          className="raven-list__item-button"
        >
          {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

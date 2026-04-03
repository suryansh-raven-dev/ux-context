import React, { useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import './RavenMenu.css';

export interface RavenMenuOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface RavenMenuProps {
  options: RavenMenuOption[];
  trigger: React.ReactElement;
  anchorOrigin?: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' };
}

export const RavenMenu: React.FC<RavenMenuProps> = ({ options, trigger, anchorOrigin }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      {React.cloneElement(trigger, { onClick: handleClick, 'aria-haspopup': 'true' })}
      <Menu
        className="raven-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
      >
        {options.map((opt) => (
          <MenuItem
            key={opt.id}
            disabled={opt.disabled}
            onClick={() => { opt.onClick?.(); handleClose(); }}
            className="raven-menu__item"
          >
            {opt.icon && <ListItemIcon>{opt.icon}</ListItemIcon>}
            <ListItemText>{opt.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

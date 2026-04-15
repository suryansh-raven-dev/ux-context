import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineRounded from '@mui/icons-material/PersonOutlineRounded';
import LockRounded from '@mui/icons-material/LockRounded';
import DarkModeRounded from '@mui/icons-material/DarkModeRounded';
import PeopleRounded from '@mui/icons-material/PeopleRounded';
import HelpOutlineRounded from '@mui/icons-material/HelpOutlineRounded';
import LogoutRounded from '@mui/icons-material/LogoutRounded';
import OpenInNewRounded from '@mui/icons-material/OpenInNewRounded';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';

import './UserProfileMenu.css';

export type UserProfileMenuProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onProfile?: () => void;
  onChangePassword?: () => void;
  onToggleDarkMode?: () => void;
  onManageUsers?: () => void;
  onHelpSupport?: () => void;
  onSignOut?: () => void;
  showManageUsers?: boolean;
  darkModeLabel?: string;
};

export function UserProfileMenu({
  anchorEl,
  open,
  onClose,
  onProfile,
  onChangePassword,
  onToggleDarkMode,
  onManageUsers,
  onHelpSupport,
  onSignOut,
  showManageUsers = true,
  darkModeLabel = 'Switch to Dark Mode',
}: UserProfileMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      className="raven-user-profile-menu"
      slotProps={{
        paper: {
          className: 'raven-user-profile-menu__paper',
        },
      }}
    >
      {onProfile && (
        <MenuItem onClick={() => { onProfile(); onClose(); }}>
          <ListItemIcon><PersonOutlineRounded /></ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
      )}
      {onChangePassword && (
        <MenuItem onClick={() => { onChangePassword(); onClose(); }}>
          <ListItemIcon><LockRounded /></ListItemIcon>
          <ListItemText>Change Password</ListItemText>
        </MenuItem>
      )}
      {onToggleDarkMode && (
        <MenuItem onClick={() => { onToggleDarkMode(); onClose(); }}>
          <ListItemIcon><DarkModeRounded /></ListItemIcon>
          <ListItemText>{darkModeLabel}</ListItemText>
        </MenuItem>
      )}
      {showManageUsers && onManageUsers && (
        <MenuItem onClick={() => { onManageUsers(); onClose(); }}>
          <ListItemIcon><PeopleRounded /></ListItemIcon>
          <ListItemText>Manage Users</ListItemText>
          <OpenInNewRounded className="raven-user-profile-menu__trailing-icon" />
        </MenuItem>
      )}
      <Divider sx={{ mx: 2 }} />
      {onHelpSupport && (
        <MenuItem onClick={() => { onHelpSupport(); onClose(); }}>
          <ListItemIcon><HelpOutlineRounded /></ListItemIcon>
          <ListItemText>Help &amp; Support</ListItemText>
          <ChevronRightRounded className="raven-user-profile-menu__trailing-icon" />
        </MenuItem>
      )}
      {onSignOut && (
        <MenuItem
          onClick={() => { onSignOut(); onClose(); }}
          className="raven-user-profile-menu__sign-out"
        >
          <ListItemIcon className="raven-user-profile-menu__sign-out-icon">
            <LogoutRounded />
          </ListItemIcon>
          <ListItemText>Sign Out</ListItemText>
        </MenuItem>
      )}
    </Menu>
  );
}

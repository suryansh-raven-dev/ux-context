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

const paperSx = {
  borderRadius: '12px',
  minWidth: 218,
};

const trailingIconSx = {
  fontSize: 20,
  color: 'text.secondary',
  ml: 1,
};

const signOutIconSx = {
  color: 'error.main',
  '& .MuiSvgIcon-root': { color: 'error.main' },
};

const signOutTextSx = {
  '& .MuiListItemText-primary': { color: 'error.main' },
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
      slotProps={{ paper: { sx: paperSx } }}
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
          <OpenInNewRounded sx={trailingIconSx} />
        </MenuItem>
      )}
      <Divider sx={{ mx: 2 }} />
      {onHelpSupport && (
        <MenuItem onClick={() => { onHelpSupport(); onClose(); }}>
          <ListItemIcon><HelpOutlineRounded /></ListItemIcon>
          <ListItemText>Help &amp; Support</ListItemText>
          <ChevronRightRounded sx={trailingIconSx} />
        </MenuItem>
      )}
      {onSignOut && (
        <MenuItem onClick={() => { onSignOut(); onClose(); }} sx={signOutTextSx}>
          <ListItemIcon sx={signOutIconSx}>
            <LogoutRounded />
          </ListItemIcon>
          <ListItemText>Sign Out</ListItemText>
        </MenuItem>
      )}
    </Menu>
  );
}

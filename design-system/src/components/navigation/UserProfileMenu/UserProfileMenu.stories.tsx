import { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { UserProfileMenu } from './UserProfileMenu';

const meta = {
  title: 'Navigation/UserProfileMenu',
  component: UserProfileMenu,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof UserProfileMenu>;

export default meta;
type Story = StoryObj<typeof UserProfileMenu>;

export const Default: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    return (
      <>
        <Button
          variant="outlined"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          Open Profile Menu
        </Button>
        <UserProfileMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          onProfile={() => console.log('Profile')}
          onChangePassword={() => console.log('Change Password')}
          onToggleDarkMode={() => console.log('Toggle Dark Mode')}
          onManageUsers={() => console.log('Manage Users')}
          onHelpSupport={() => console.log('Help & Support')}
          onSignOut={() => console.log('Sign Out')}
        />
      </>
    );
  },
};

export const WithAvatarTrigger: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            bgcolor: 'rgba(0,0,0,0.04)',
            borderRadius: 3,
            p: '6px',
            cursor: 'pointer',
          }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <Avatar sx={{ width: 32, height: 32, fontSize: 16, bgcolor: 'grey.800', borderRadius: '4px' }}>
            KR
          </Avatar>
          <Typography variant="body2" color="text.secondary">Kailash Raj</Typography>
        </Box>
        <UserProfileMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          onProfile={() => console.log('Profile')}
          onChangePassword={() => console.log('Change Password')}
          onToggleDarkMode={() => console.log('Toggle Dark Mode')}
          onManageUsers={() => console.log('Manage Users')}
          onHelpSupport={() => console.log('Help & Support')}
          onSignOut={() => console.log('Sign Out')}
        />
      </Box>
    );
  },
};

export const NonAdmin: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    return (
      <>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Non-Admin Menu
        </Button>
        <UserProfileMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          onProfile={() => console.log('Profile')}
          onChangePassword={() => console.log('Change Password')}
          onToggleDarkMode={() => console.log('Toggle Dark Mode')}
          showManageUsers={false}
          onHelpSupport={() => console.log('Help & Support')}
          onSignOut={() => console.log('Sign Out')}
        />
      </>
    );
  },
};

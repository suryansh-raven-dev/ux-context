import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { UserProfileMenu } from './UserProfileMenu';

const meta = {
  title: 'Navigation/UserProfileMenu',
  component: UserProfileMenu,
} satisfies Meta<typeof UserProfileMenu>;

export default meta;
type Story = StoryObj<typeof UserProfileMenu>;

function DefaultTrigger() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  return (
    <>
      <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
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
}

function AvatarTrigger() {
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
        <Typography variant="body2" color="text.secondary">
          Kailash Raj
        </Typography>
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
}

function NonAdminTrigger() {
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
}

export const UserProfileMenuPage: Story = {
  name: 'UserProfileMenu',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="Default (button trigger)">
        <DefaultTrigger />
      </StorybookSection>
      <StorybookSection title="With avatar trigger">
        <AvatarTrigger />
      </StorybookSection>
      <StorybookSection title="Non-admin (no Manage Users)">
        <NonAdminTrigger />
      </StorybookSection>
    </StorybookPage>
  ),
};

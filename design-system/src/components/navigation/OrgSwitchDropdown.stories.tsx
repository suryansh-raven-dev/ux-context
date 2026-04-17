import type { Meta, StoryObj } from '@storybook/react';

import Stack from '@mui/material/Stack';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { OrgSwitchDropdown } from './OrgSwitchDropdown';

const meta: Meta<typeof OrgSwitchDropdown> = {
  title: 'Navigation/Org Switch Dropdown',
  component: OrgSwitchDropdown,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof OrgSwitchDropdown>;

export const OrgSwitchDropdownPage: Story = {
  name: 'Org Switch Dropdown',
  render: () => (
    <StorybookPage maxWidth={520}>
      <StorybookSection
        title="Default"
        description="Trigger surface with initials avatar, org name, role, and expand affordance."
      >
        <OrgSwitchDropdown
          initials="AC"
          name="Acme Chemicals — River Plant"
          role="Site admin"
        />
      </StorybookSection>

      <StorybookSection
        title="Custom gradient"
        description="Pass gradientColors to theme the initials avatar for a specific tenant."
      >
        <OrgSwitchDropdown
          initials="SL"
          name="Near Miss Demo Org"
          role="Viewer"
          gradientColors={['#0cdacc', '#311b92']}
        />
      </StorybookSection>

      <StorybookSection
        title="Long name"
        description="Org names truncate with ellipsis; role is optional."
      >
        <Stack spacing={1.5}>
          <OrgSwitchDropdown
            initials="RG"
            name="Regional Operations — North America — Division 7"
          />
        </Stack>
      </StorybookSection>
    </StorybookPage>
  ),
};

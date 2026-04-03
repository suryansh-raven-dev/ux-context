import type { Meta, StoryObj } from '@storybook/react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbRounded';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyRounded';
import Typography from '@mui/material/Typography';

import { StorybookPage, StorybookSection } from '../StorybookPage';
import { RecommendationPanel } from './RecommendationPanel';

export default {
  title: 'Components/Feedback',
  component: RecommendationPanel,
} satisfies Meta<typeof RecommendationPanel>;

type Story = StoryObj<typeof RecommendationPanel>;

export const RecommendationPanelPage: Story = {
  name: 'Recommendation Panel',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    incidentId: 'NM-2026-0142',
    sections: [
      {
        icon: <LightbulbOutlinedIcon fontSize="small" />,
        title: 'Immediate actions',
        defaultOpen: true,
        children: (
          <Typography variant="body2" color="text.secondary">
            Isolate the affected line and verify lockout/tagout before resuming work.
          </Typography>
        ),
      },
      {
        icon: <PolicyOutlinedIcon fontSize="small" />,
        title: 'Policy references',
        defaultOpen: false,
        children: (
          <Typography variant="body2" color="text.secondary">
            See site procedure SMP-12 for near-miss escalation and documentation.
          </Typography>
        ),
      },
    ],
  },
  render: (args) => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Default">
        <RecommendationPanel {...args} />
      </StorybookSection>
    </StorybookPage>
  ),
};

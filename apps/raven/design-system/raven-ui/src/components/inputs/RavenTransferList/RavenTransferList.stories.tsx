import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenTransferList } from './RavenTransferList';

export default {
  title: 'Components/Inputs/Transfer List',
  component: RavenTransferList,
  parameters: {
    docs: {
      description: {
        component:
          'Raven-styled Transfer List pattern built with MUI v6 List, Checkbox, Button, ' +
          'and Paper. Uses Raven purple checked states, pill-radius action buttons, and ' +
          'Source Sans 3 typography. Lets users move items between two panels. ' +
          'Ideal for assigning reviewers, selecting investigation teams, or managing permissions.',
      },
    },
  },
} satisfies Meta<typeof RavenTransferList>;

type Story = StoryObj<typeof RavenTransferList>;

/* ─── Basic ─────────────────────────────────────────────── */

const Basic: Story = {
  name: 'Basic',
  args: {
    leftItems: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    rightItems: ['Item 5', 'Item 6', 'Item 7', 'Item 8'],
    leftTitle: 'Choices',
    rightTitle: 'Chosen',
  },
};

/* ─── Reviewer Assignment ───────────────────────────────── */

const ReviewerAssignment: Story = {
  name: 'Reviewer Assignment',
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Assign Investigation Reviewers
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Move team members from the available pool to the assigned reviewers list.
      </Typography>
      <RavenTransferList
        leftTitle="Available"
        rightTitle="Assigned"
        leftItems={[
          'Alice Johnson',
          'Bob Smith',
          'Carol Williams',
          'David Brown',
          'Eve Davis',
          'Frank Miller',
        ]}
        rightItems={['Grace Wilson', 'Henry Moore']}
      />
    </Box>
  ),
};

/* ─── Permission Groups ─────────────────────────────────── */

const PermissionGroups: Story = {
  name: 'Permission Groups',
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Role Permissions
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Configure which permissions are granted to this role.
      </Typography>
      <RavenTransferList
        leftTitle="Available Permissions"
        rightTitle="Granted"
        leftItems={[
          'View incidents',
          'Create incidents',
          'Edit incidents',
          'Delete incidents',
          'Approve actions',
          'Manage users',
          'Export reports',
          'Configure workflows',
        ]}
        rightItems={['View dashboard', 'Submit near-miss']}
      />
    </Box>
  ),
};

/* ─── Investigation Categories ──────────────────────────── */

const InvestigationCategories: Story = {
  name: 'Investigation Categories',
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select Investigation Categories
      </Typography>
      <RavenTransferList
        leftTitle="All Categories"
        rightTitle="Selected"
        leftItems={[
          'Equipment Failure',
          'Human Error',
          'Process Gap',
          'Environmental',
          'Communication',
          'Training',
          'Maintenance',
          'Design Flaw',
        ]}
        rightItems={['Safety Protocol', 'Procedural']}
      />
    </Box>
  ),
};

/* ─── Empty States ──────────────────────────────────────── */

const EmptyStates: Story = {
  name: 'Empty States',
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          All items on left (nothing selected yet)
        </Typography>
        <RavenTransferList
          leftTitle="Available"
          rightTitle="Selected"
          leftItems={['Alpha', 'Bravo', 'Charlie', 'Delta']}
          rightItems={[]}
        />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          All items on right (fully assigned)
        </Typography>
        <RavenTransferList
          leftTitle="Available"
          rightTitle="Selected"
          leftItems={[]}
          rightItems={['Alpha', 'Bravo', 'Charlie', 'Delta']}
        />
      </Box>
    </Stack>
  ),
};

const LargeDatasetStress: Story = {
  name: 'Large Dataset Stress',
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Large Team Assignment
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Stress surface for large transfer lists. Each panel contains hundreds of items and switches to the virtualized path to keep scrolling responsive.
      </Typography>
      <RavenTransferList
        leftTitle="Available responders"
        rightTitle="Assigned responders"
        leftItems={Array.from({ length: 400 }, (_, index) => `Responder ${String(index + 1).padStart(3, '0')}`)}
        rightItems={Array.from({ length: 180 }, (_, index) => `Assigned ${String(index + 1).padStart(3, '0')}`)}
        virtualized
        listHeight={320}
      />
    </Box>
  ),
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenTransferList {...story.args} />;
  }
  return null;
}

export const TransferList: Story = {
  name: 'Transfer List',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={960}>
      <StorybookSection title="Basic">{renderStory(Basic)}</StorybookSection>
      <StorybookSection title="Reviewer Assignment">{renderStory(ReviewerAssignment)}</StorybookSection>
      <StorybookSection title="Permission Groups">{renderStory(PermissionGroups)}</StorybookSection>
      <StorybookSection title="Investigation Categories">{renderStory(InvestigationCategories)}</StorybookSection>
      <StorybookSection title="Empty States">{renderStory(EmptyStates)}</StorybookSection>
      <StorybookSection title="Large Dataset Stress">{renderStory(LargeDatasetStress)}</StorybookSection>
    </StorybookPage>
  ),
};

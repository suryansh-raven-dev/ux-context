import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AssessmentIcon from '@mui/icons-material/AssessmentRounded';
import FavoriteIcon from '@mui/icons-material/FavoriteRounded';
import MoreVertIcon from '@mui/icons-material/MoreVertRounded';
import ShareIcon from '@mui/icons-material/ShareRounded';
import Typography from '@mui/material/Typography';

import type { Meta, StoryObj } from '@storybook/react';

import { muiV6Catalog } from '../../../catalog/muiV6Catalog';
import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { ComponentReference } from '../../catalog/ComponentReference';
import { SummaryCard } from '../../data-display/SummaryCard';
import { RavenCard } from './RavenCard';
import type { RavenCardProps } from './RavenCard';

const item = muiV6Catalog.find((c) => c.name === 'Card')!;

const meta: Meta<typeof RavenCard> = {
  title: 'Components',
  component: RavenCard,
};
export default meta;
type Story = StoryObj<typeof RavenCard>;

// ─── Internal story definitions (not exported → no sidebar subtabs) ───────────

const Default: Story = {
  args: {
    children: <Typography>This is a basic card with default elevation and brand shadow.</Typography>,
  },
};

const WithHeader: Story = {
  args: {
    title: 'Incident Report',
    subheader: 'March 15, 2026',
    children: <Typography>Details about the near-miss incident are displayed here.</Typography>,
  },
};

const WithActions: Story = {
  args: {
    title: 'Review Required',
    children: <Typography>This card contains actionable content that needs user review.</Typography>,
    actions: (
      <>
        <Button size="small">Cancel</Button>
        <Button size="small" variant="contained">Approve</Button>
      </>
    ),
  },
};

const Outlined: Story = {
  args: {
    variant: 'outlined',
    title: 'Outlined Card',
    children: (
      <Typography>
        Uses <code>variant="outlined"</code> — MUI's native outlined variant with a border and no shadow.
        Prefer this over the deprecated <code>elevated=&#123;false&#125;</code> prop.
      </Typography>
    ),
  },
};

const WithAvatar: Story = {
  args: {
    title: 'Jane Doe',
    subheader: 'Safety Inspector',
    avatar: <Avatar sx={{ bgcolor: '#4A148C' }}>JD</Avatar>,
    action: (
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    ),
    children: <Typography>Card with an avatar, subtitle, and action button in the header.</Typography>,
  },
};

const WithMedia: Story = {
  args: {
    media: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    mediaAlt: 'Mountain landscape at sunset',
    mediaHeight: 180,
    title: 'Mountain Trail Safety',
    subheader: 'Risk Assessment',
    children: (
      <Typography variant="body2" color="text.secondary">
        High altitude exposure above 3,000m introduces hypothermia and AMS risks. Ensure
        all team members carry emergency descent protocols.
      </Typography>
    ),
    actions: (
      <>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </>
    ),
  },
};

const ActionArea: Story = {
  args: {
    actionArea: true,
    media: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80',
    mediaAlt: 'Safety inspection site',
    mediaHeight: 160,
    title: 'Site Inspection Report',
    subheader: 'Click to view full report',
    children: (
      <Typography variant="body2" color="text.secondary">
        The entire card is wrapped in a <code>CardActionArea</code>, making it fully
        keyboard-navigable and clickable as a single interactive target.
      </Typography>
    ),
    onClick: () => alert('Card clicked — navigate to report'),
  },
};

const ActionAreaWithFooter: Story = {
  args: {
    actionArea: true,
    title: 'Combined Pattern',
    subheader: 'ActionArea + footer actions',
    children: (
      <Typography variant="body2" color="text.secondary">
        Keep supplemental buttons <em>outside</em> the <code>CardActionArea</code> in the
        footer to avoid overlapping hit targets — per MUI guidance.
      </Typography>
    ),
    actions: (
      <>
        <Button size="small">Learn More</Button>
        <Button size="small" variant="contained">Open</Button>
      </>
    ),
    onClick: () => alert('Card body clicked'),
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenCard {...(story.args as RavenCardProps)} />;
  }
  return null;
}

// ─── Single exported story (no sidebar subtabs) ───────────────────────────────

export const Card: Story = {
  tags: ['!dev'],
  name: 'Card',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>

      <StorybookSection title="Default">
        {renderStory(Default)}
      </StorybookSection>

      <StorybookSection title="With Header">
        {renderStory(WithHeader)}
      </StorybookSection>

      <StorybookSection title="With Actions">
        {renderStory(WithActions)}
      </StorybookSection>

      <StorybookSection
        title="Outlined"
        description='Use variant="outlined" for a flat, bordered card with no shadow. This is the MUI-native way to express a non-elevated surface.'
      >
        {renderStory(Outlined)}
      </StorybookSection>

      <StorybookSection title="With Avatar">
        {renderStory(WithAvatar)}
      </StorybookSection>

      <StorybookSection
        title="With Media (CardMedia)"
        description="Use the media prop to render a CardMedia image above the header. Pair with mediaHeight to control the image crop area."
      >
        {renderStory(WithMedia)}
      </StorybookSection>

      <StorybookSection
        title="Action Area (CardActionArea)"
        description="Set actionArea={true} to wrap the card body in a CardActionArea, making the entire surface a single interactive/keyboard-focusable target."
      >
        {renderStory(ActionArea)}
      </StorybookSection>

      <StorybookSection
        title="Action Area + Footer Actions"
        description="Per MUI guidance: keep supplemental buttons outside the CardActionArea in the footer to prevent overlapping hit targets."
      >
        {renderStory(ActionAreaWithFooter)}
      </StorybookSection>

      <StorybookSection
        title="Summary Card"
        description="Dashboard-style card with stats, closure rate, and trend footer. Use for KPI surfaces on overview pages."
      >
        <SummaryCard
          icon={<AssessmentIcon />}
          title="Near-miss overview"
          stats={[
            { value: 42, label: 'Open', color: '#0288D1' },
            { value: 18, label: 'Closed', color: '#2E7D32' },
          ]}
          closureRate={{ value: '76%', positive: true }}
          departments={{ count: 5, top: 'Operations' }}
          trend={{ value: '+12% vs last month', positive: true }}
        />
      </StorybookSection>

      <StorybookSection
        title="Summary Card — Clickable"
        description="Pass an onClick handler to make the card interactive. The chevron becomes an active IconButton and the surface wraps in a CardActionArea."
      >
        <SummaryCard
          icon={<AssessmentIcon />}
          title="Near-miss overview"
          stats={[
            { value: 42, label: 'Open', color: '#0288D1' },
            { value: 18, label: 'Closed', color: '#2E7D32' },
          ]}
          closureRate={{ value: '76%', positive: true }}
          departments={{ count: 5, top: 'Operations' }}
          trend={{ value: '+12% vs last month', positive: true }}
          onClick={() => {}}
        />
      </StorybookSection>

      <StorybookSection
        title="Summary Card — Negative Trend"
        description="Closure rate and trend values switch to error color when positive=false."
      >
        <SummaryCard
          icon={<AssessmentIcon />}
          title="Near-miss overview"
          stats={[
            { value: 42, label: 'Open', color: '#0288D1' },
            { value: 18, label: 'Closed', color: '#2E7D32' },
          ]}
          closureRate={{ value: '54%', positive: false }}
          departments={{ count: 5, top: 'Operations' }}
          trend={{ value: '-3% vs last month', positive: false }}
        />
      </StorybookSection>

      <StorybookSection
        title="MUI Alignment"
        description="Cross-checked with the MUI v6 Card docs for composition, action areas, outlined usage, and media guidance."
      >
        <ComponentReference item={item} embedded />
      </StorybookSection>

    </StorybookPage>
  ),
};

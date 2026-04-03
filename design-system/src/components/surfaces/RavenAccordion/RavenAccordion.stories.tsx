import React from 'react';

import Typography from '@mui/material/Typography';

import type { Meta, StoryObj } from '@storybook/react';

import { muiV6Catalog } from '../../../catalog/muiV6Catalog';
import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { ComponentReference } from '../../catalog/ComponentReference';
import { RavenAccordion } from './RavenAccordion';

const item = muiV6Catalog.find((c) => c.name === 'Accordion')!;

const meta: Meta<typeof RavenAccordion> = {
  title: 'Components',
  component: RavenAccordion,
};
export default meta;
type Story = StoryObj<typeof RavenAccordion>;

const sampleItems = [
  {
    id: 'section-1',
    title: 'Incident Details',
    content: <Typography>Information about the incident, including date, location, and personnel involved.</Typography>,
  },
  {
    id: 'section-2',
    title: 'Root Cause Analysis',
    content: <Typography>Analysis of the root cause, contributing factors, and failure modes.</Typography>,
  },
  {
    id: 'section-3',
    title: 'Corrective Actions',
    content: <Typography>Recommended corrective actions and implementation timeline.</Typography>,
  },
];

const Default: Story = {
  args: {
    items: sampleItems,
  },
};

const Exclusive: Story = {
  args: {
    items: sampleItems,
    exclusive: true,
  },
};

const WithDefaultExpanded: Story = {
  args: {
    items: sampleItems.map((item, index) =>
      index === 1 ? { ...item, defaultExpanded: true } : item
    ),
  },
};

function renderStory(story: { render?: (...args: any[]) => any; args?: any }) {
  if (story.render) {
    return story.render({}, {});
  }
  if (story.args) {
    return <RavenAccordion {...story.args} />;
  }
  return null;
}

export const Accordion: Story = {
  name: 'Accordion',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="Exclusive">{renderStory(Exclusive)}</StorybookSection>
      <StorybookSection title="With Default Expanded">{renderStory(WithDefaultExpanded)}</StorybookSection>
      <StorybookSection
        title="MUI Alignment"
        description="Cross-checked with the MUI v6 Accordion docs, including composition, controlled state, transition slots, and accessibility guidance."
      >
        <ComponentReference item={item} embedded />
      </StorybookSection>
    </StorybookPage>
  ),
};

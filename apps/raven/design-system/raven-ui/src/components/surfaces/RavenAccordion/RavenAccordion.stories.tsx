import React from 'react';

import Typography from '@mui/material/Typography';

import type { Meta, StoryObj } from '@storybook/react';

import { RavenAccordion } from './RavenAccordion';

const meta: Meta<typeof RavenAccordion> = {
  title: 'Surfaces/RavenAccordion',
  component: RavenAccordion,
  tags: ['autodocs'],
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

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const Exclusive: Story = {
  args: {
    items: sampleItems,
    exclusive: true,
  },
};

export const WithDefaultExpanded: Story = {
  args: {
    items: sampleItems.map((item, index) =>
      index === 1 ? { ...item, defaultExpanded: true } : item
    ),
  },
};

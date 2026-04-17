import type { Meta, StoryObj } from '@storybook/react';
import { CitationStrip } from './CitationStrip';

const meta: Meta<typeof CitationStrip> = {
  title: 'Components/AI/CitationStrip',
  component: CitationStrip,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof CitationStrip>;

export const Default: Story = {
  args: {
    items: [
      { id: 'a', title: 'HSEF-SOP-021.pdf', context: 'Operators must isolate the affected train within 60 seconds.' },
      { id: 'b', title: 'NMMS-IR-2041.pdf', context: 'Root cause: relief valve undersized for duty cycle.' },
      { id: 'c', title: 'Ammonia-Safety-Bulletin-03.pdf' },
    ],
  },
};

export const Dedupes: Story = {
  args: {
    heading: 'Sources (duplicates collapsed)',
    items: [
      { id: 'a', title: 'SOP-021.pdf' },
      { id: 'a', title: 'SOP-021.pdf' },
      { id: 'b', title: 'IR-2041.pdf' },
    ],
  },
};

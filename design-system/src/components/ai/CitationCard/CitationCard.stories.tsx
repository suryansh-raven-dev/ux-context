import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { CitationCard } from './CitationCard';

const meta: Meta<typeof CitationCard> = {
  title: 'Components/AI/CitationCard',
  component: CitationCard,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof CitationCard>;

export const Default: Story = {
  args: {
    title: 'HSEF-SOP-021 – Gas leak response.pdf',
    context: 'Operators must isolate the affected train within 60 seconds of alarm activation…',
    index: 1,
  },
};

export const Stack3: Story = {
  render: () => (
    <Stack spacing={1} sx={{ maxWidth: 520 }}>
      <CitationCard index={1} title="NMMS-Incident-IR-2041.pdf" context="Root cause analysis concluded pressure relief valve was undersized for the duty cycle." onSelect={() => undefined} />
      <CitationCard index={2} title="P&ID-Urea-Train-Rev12.dwg" context="Line 401-B connects to relief header H-12 via a 3/4 inch tie-in." onSelect={() => undefined} />
      <CitationCard index={3} title="Ammonia-Safety-Bulletin-03.pdf" onSelect={() => undefined} />
    </Stack>
  ),
};

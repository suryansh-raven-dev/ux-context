import type { Meta, StoryObj } from '@storybook/react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { muiV6Catalog } from '../../../catalog/muiV6Catalog';
import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { ComponentReference } from '../../catalog/ComponentReference';
import { Container as RavenContainer } from './Container';

const item = muiV6Catalog.find((c) => c.name === 'Container')!;

const meta: Meta<typeof RavenContainer> = {
  title: 'Components/Layout',
  component: RavenContainer,
};
export default meta;

type Story = StoryObj<typeof RavenContainer>;

function SurfaceBlock({ label }: { label: string }) {
  return (
    <Box
      sx={{
        backgroundColor: '#F3E5F5',
        border: '1px dashed #CE93D8',
        borderRadius: '12px',
        py: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 600, color: '#4A148C' }}>
        {label}
      </Typography>
    </Box>
  );
}

export const Container: Story = {
  name: 'Container',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage maxWidth="100%">

      <StorybookSection
        title="When to use Container"
        description="Container caps and centers a content rail. Reach for it on any page that should not stretch edge-to-edge inside the AppShell — settings flows, form wizards, marketing pages, and dashboards with a preferred reading width."
      >
        <RavenContainer maxWidth="md">
          <SurfaceBlock label={'Container maxWidth="md" (900px)'} />
        </RavenContainer>
      </StorybookSection>

      <StorybookSection
        title={'maxWidth="sm" (600px)'}
        description="Narrow reading column. Use for auth pages, single-form flows, and long-form text."
      >
        <RavenContainer maxWidth="sm">
          <SurfaceBlock label="Narrow rail — 600px" />
        </RavenContainer>
      </StorybookSection>

      <StorybookSection
        title={'maxWidth="md" (900px, default)'}
        description="Standard settings and form pages inside AppShell."
      >
        <RavenContainer maxWidth="md">
          <SurfaceBlock label="Default rail — 900px" />
        </RavenContainer>
      </StorybookSection>

      <StorybookSection
        title={'maxWidth="lg" (1200px)'}
        description="Dashboards and data-rich pages that need a centered rail with more horizontal room."
      >
        <RavenContainer maxWidth="lg">
          <SurfaceBlock label="Wide rail — 1200px" />
        </RavenContainer>
      </StorybookSection>

      <StorybookSection
        title={'maxWidth="xl" (1536px)'}
        description="Analytics pages with wide tables or multi-column layouts."
      >
        <RavenContainer maxWidth="xl">
          <SurfaceBlock label="Extra-wide rail — 1536px" />
        </RavenContainer>
      </StorybookSection>

      <StorybookSection
        title={'maxWidth={false}'}
        description="Disables the cap — useful when Container is only there to apply responsive gutters."
      >
        <RavenContainer maxWidth={false}>
          <SurfaceBlock label="No cap — full width with gutters" />
        </RavenContainer>
      </StorybookSection>

      <StorybookSection
        title="disableGutters"
        description="Removes the 16/24px responsive horizontal padding. Use only when a parent already pads the content."
      >
        <RavenContainer maxWidth="md" disableGutters>
          <SurfaceBlock label="No gutters — content hugs the cap" />
        </RavenContainer>
      </StorybookSection>

      <StorybookSection
        title="Composed with Stack"
        description="Container sets the width; Stack sets the rhythm. Keep them separate for predictable layouts."
      >
        <RavenContainer maxWidth="sm">
          <Stack spacing={2}>
            <SurfaceBlock label="Section A" />
            <SurfaceBlock label="Section B" />
            <SurfaceBlock label="Section C" />
          </Stack>
        </RavenContainer>
      </StorybookSection>

      <StorybookSection
        title="Semantic element via component prop"
        description={'Set component="main" when the container is the primary page landmark.'}
      >
        <RavenContainer maxWidth="md" component="main" aria-label="Primary content">
          <SurfaceBlock label="Rendered as <main>" />
        </RavenContainer>
      </StorybookSection>

      <StorybookSection
        title="MUI Alignment"
        description="Cross-checked with MUI v6 Container docs: maxWidth breakpoints, fixed, disableGutters, and component override."
      >
        <ComponentReference item={item} embedded />
      </StorybookSection>

    </StorybookPage>
  ),
};

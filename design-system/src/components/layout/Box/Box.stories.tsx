import type { Meta, StoryObj } from '@storybook/react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AssessmentRounded from '@mui/icons-material/AssessmentRounded';

import { muiV6Catalog } from '../../../catalog/muiV6Catalog';
import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { ComponentReference } from '../../catalog/ComponentReference';
import { Box as RavenBox } from './Box';

const item = muiV6Catalog.find((c) => c.name === 'Box')!;

const meta: Meta<typeof RavenBox> = {
  title: 'Components/Layout',
  component: RavenBox,
};
export default meta;

type Story = StoryObj<typeof RavenBox>;

export const Box: Story = {
  name: 'Box',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage maxWidth={820}>

      <StorybookSection
        title="When to use Box"
        description={
          'Box is the generic layout primitive — a styled <div> with MUI\u2019s sx prop. Reach for it when you need a single container with spacing, alignment, or a surface that doesn\u2019t match a dedicated component like RavenCard or FormSectionCard. For repeating rhythm between children, prefer Stack instead.'
        }
      >
        <RavenBox direction="row" gap={1.5} align="center">
          <AssessmentRounded sx={{ color: '#4A148C' }} />
          <Typography variant="body2" color="text.secondary">
            Box is a thin wrapper over MUI Box with surface presets and flex shortcuts.
          </Typography>
        </RavenBox>
      </StorybookSection>

      <StorybookSection
        title={'variant="surface" (default)'}
        description="No styling — equivalent to a plain MUI Box. Use when you just need a sx-enabled container."
      >
        <RavenBox sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
          <Typography variant="body2">Plain surface with custom sx.</Typography>
        </RavenBox>
      </StorybookSection>

      <StorybookSection
        title={'variant="card"'}
        description="Page content card — 24px radius, white surface, subtle elevation. Matches the main content card on admin pages."
      >
        <RavenBox variant="card">
          <Typography variant="body1" sx={{ fontWeight: 600, color: 'primary.main', mb: 1 }}>
            Incident summary
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A standard content card surface driven by theme tokens.
          </Typography>
        </RavenBox>
      </StorybookSection>

      <StorybookSection
        title={'variant="form-card"'}
        description="Form section card — 20px radius, bordered, tighter shadow. Use inside multi-section forms."
      >
        <RavenBox variant="form-card" direction="column" gap={1}>
          <Typography variant="body1" sx={{ fontWeight: 600, color: 'primary.main' }}>
            Reporter details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Group related form fields inside a form-card.
          </Typography>
        </RavenBox>
      </StorybookSection>

      <StorybookSection
        title={'variant="dialog"'}
        description="16px radius surface with a pronounced shadow — used by RavenDialog."
      >
        <RavenBox variant="dialog">
          <Typography variant="body1" sx={{ fontWeight: 600 }}>Delete report?</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            This action cannot be undone.
          </Typography>
          <RavenBox direction="row" gap={1} justify="end" sx={{ mt: 2 }}>
            <Button>Cancel</Button>
            <Button variant="contained" color="error">Delete</Button>
          </RavenBox>
        </RavenBox>
      </StorybookSection>

      <StorybookSection
        title={'variant="page"'}
        description="Full-bleed page background with responsive padding. Use as the outermost wrapper for AppShell content."
      >
        <RavenBox variant="page" sx={{ borderRadius: '12px' }}>
          <RavenBox variant="card">
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Page variant paints the background; nested cards sit on top.
            </Typography>
          </RavenBox>
        </RavenBox>
      </StorybookSection>

      <StorybookSection
        title="Flex shortcuts"
        description="direction / gap / align / justify compile to display:flex + sx so you don\u2019t repeat Stack boilerplate for one-off rows."
      >
        <RavenBox variant="card" direction="row" gap={2} align="center" justify="space-between">
          <Typography variant="body2">Left content</Typography>
          <Button variant="contained">Action</Button>
        </RavenBox>
      </StorybookSection>

      <StorybookSection
        title="Semantic element via component prop"
        description="Render as any HTML element (section, nav, header, ul) without losing the sx API."
      >
        <RavenBox component="section" variant="card" aria-labelledby="example-section-heading">
          <Typography id="example-section-heading" variant="body1" sx={{ fontWeight: 600, color: 'primary.main' }}>
            Semantic <code>&lt;section&gt;</code> wrapper
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Landmarks improve screen-reader navigation.
          </Typography>
        </RavenBox>
      </StorybookSection>

      <StorybookSection
        title="MUI Alignment"
        description="Cross-checked with MUI v6 Box docs: sx prop, component override, flex shortcuts, and surface tokens."
      >
        <ComponentReference item={item} embedded />
      </StorybookSection>

    </StorybookPage>
  ),
};

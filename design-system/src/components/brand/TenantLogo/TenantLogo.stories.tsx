import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { TenantLogo as TenantLogoComponent } from './TenantLogo';
import { BrandLogos } from '../BrandLogos';

const meta: Meta<typeof TenantLogoComponent> = {
  title: 'Brand',
  component: TenantLogoComponent,
};
export default meta;

type Story = StoryObj<typeof TenantLogoComponent>;

function ChromeRow({ bg, border, children }: { bg: string; border?: string; children: React.ReactNode }) {
  return (
    <Box
      sx={{
        backgroundColor: bg,
        border: border ?? '1px solid #F3E5F5',
        borderRadius: '12px',
        px: 2,
        py: 1.5,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
}

export const Brand: Story = {
  name: 'Brand',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage maxWidth={960}>

      <StorybookSection
        title="Brand logos"
        description="All official brand logos for Raven and Indorama. Each logo is shown on its recommended background with a download button."
      >
        <BrandLogos />
      </StorybookSection>

      <StorybookSection
        title="When to use TenantLogo"
        description="Per guidelines 6: the top-left mark in every product's primary chrome MUST be the tenant's logo when a tenant context is active. Raven attribution is a footer mark, not a chrome mark. Use TenantLogo wherever a tenant identity anchors a surface — sidebar header, login screen, or any chrome that represents 'whose instance is this'."
      >
        <Stack spacing={1.5}>
          <ChromeRow bg="#FFFFFF">
            <TenantLogoComponent tenantName="ACME" src="/logos/acme-logo-color.png" />
            <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
              ACME tenant — light chrome
            </Typography>
          </ChromeRow>
          <ChromeRow bg="#FFFFFF">
            <TenantLogoComponent tenantName="Indorama" src="/logos/indorama-logo-color.png" />
            <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
              Indorama tenant — light chrome
            </Typography>
          </ChromeRow>
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="Sizes"
        description="size='sm' (24px), 'md' (32px, default), 'lg' (40px). Height is the source of truth; width is capped at 3× height unless maxWidth is set."
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Stack spacing={0.5} alignItems="center">
            <TenantLogoComponent tenantName="ACME" src="/logos/acme-logo-color.png" size="sm" />
            <Typography variant="caption">sm · 24px</Typography>
          </Stack>
          <Stack spacing={0.5} alignItems="center">
            <TenantLogoComponent tenantName="ACME" src="/logos/acme-logo-color.png" size="md" />
            <Typography variant="caption">md · 32px</Typography>
          </Stack>
          <Stack spacing={0.5} alignItems="center">
            <TenantLogoComponent tenantName="ACME" src="/logos/acme-logo-color.png" size="lg" />
            <Typography variant="caption">lg · 40px</Typography>
          </Stack>
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="Background variants"
        description="onBackground tells TenantLogo which chrome it sits on so fallback and safe-zone contrast are correct. It does NOT swap the asset — pass the right src for light/dark/brand yourself."
      >
        <Stack spacing={1.5}>
          <ChromeRow bg="#FFFFFF">
            <TenantLogoComponent tenantName="Indorama" src="/logos/indorama-logo-color.png" onBackground="light" />
            <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>onBackground=&quot;light&quot;</Typography>
          </ChromeRow>
          <ChromeRow bg="#0B1215" border="1px solid #17343A">
            <TenantLogoComponent tenantName="Indorama" src="/logos/indorama-logo-white.png" onBackground="dark" />
            <Typography variant="body2" sx={{ color: '#B6D7D9' }}>onBackground=&quot;dark&quot;</Typography>
          </ChromeRow>
          <ChromeRow
            bg="linear-gradient(292deg, #732668 0.1%, #402673 50.05%, #2F2673 100%)"
            border="1px solid transparent"
          >
            <TenantLogoComponent tenantName="Indorama" src="/logos/indorama-logo-white.png" onBackground="brand" />
            <Typography variant="body2" sx={{ color: '#FFFFFF' }}>onBackground=&quot;brand&quot;</Typography>
          </ChromeRow>
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="Inline SVG"
        description="Pass an inline SVG node via the svg prop when the asset should inherit currentColor or ships bundled inside the app."
      >
        <ChromeRow bg="#FFFFFF">
          <TenantLogoComponent
            tenantName="Contoso"
            svg={
              <svg viewBox="0 0 120 32" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="0" y="4" width="24" height="24" rx="4" fill="#4A148C" />
                <text x="32" y="22" fontFamily="Source Sans 3, sans-serif" fontSize="18" fontWeight="700" fill="#4A148C">
                  CONTOSO
                </text>
              </svg>
            }
          />
          <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
            Inline SVG — scales with the size prop.
          </Typography>
        </ChromeRow>
      </StorybookSection>

      <StorybookSection
        title="Fallback (no asset)"
        description="When neither src nor svg is provided, TenantLogo renders tenant initials in a small rounded surface so the chrome never collapses. Use this during onboarding before the tenant uploads their mark."
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <TenantLogoComponent tenantName="ACME Industries" size="sm" />
          <TenantLogoComponent tenantName="ACME Industries" size="md" />
          <TenantLogoComponent tenantName="ACME Industries" size="lg" />
          <TenantLogoComponent tenantName="Indorama" size="md" />
          <TenantLogoComponent tenantName="Raven" size="md" />
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="Safe zone (6.4)"
        description="TenantLogo bakes in ~25% of the mark's height as padding on every side so the logo never touches adjacent chrome. Disable it via primaryChrome={false} when embedding inside a card that already pads."
      >
        <Stack spacing={1.5}>
          <ChromeRow bg="#FFFFFF">
            <TenantLogoComponent tenantName="ACME" src="/logos/acme-logo-color.png" />
            <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>primaryChrome (default)</Typography>
          </ChromeRow>
          <ChromeRow bg="#FFFFFF">
            <TenantLogoComponent tenantName="ACME" src="/logos/acme-logo-color.png" primaryChrome={false} />
            <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>primaryChrome=&#123;false&#125;</Typography>
          </ChromeRow>
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="Accessibility"
        description="The outer element is role='img' with aria-label='{tenantName} logo'. The inner asset is aria-hidden so screen readers announce the tenant name exactly once. Override the label via ariaLabel when a richer announcement is needed (e.g. 'ACME — staging tenant')."
      >
        <ChromeRow bg="#FFFFFF">
          <TenantLogoComponent
            tenantName="ACME"
            src="/logos/acme-logo-color.png"
            ariaLabel="ACME — staging tenant"
          />
          <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
            Screen reader: &quot;ACME — staging tenant, image&quot;
          </Typography>
        </ChromeRow>
      </StorybookSection>

    </StorybookPage>
  ),
};

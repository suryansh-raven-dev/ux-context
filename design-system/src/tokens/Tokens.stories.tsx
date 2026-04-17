import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { StorybookPage, StorybookSection } from '../components/StorybookPage';
import {
  ravenTokensStatic,
  categoryColors,
  statusColors,
  engineeringColors,
  radius,
  shadow,
  fontSize,
  fontWeight,
  space,
  duration,
  ease,
} from './tokens';
import { useRavenTokens } from './useRavenTokens';

const meta: Meta = {
  title: 'Design Tokens',
};
export default meta;

type Story = StoryObj;

function Swatch({ name, value, text = '#fff' }: { name: string; value: string; text?: string }) {
  return (
    <Box
      sx={{
        backgroundColor: value,
        color: text,
        borderRadius: '8px',
        border: '1px solid rgba(0,0,0,0.08)',
        p: 1.5,
        minWidth: 140,
        fontFamily: '"Source Sans 3", sans-serif',
      }}
    >
      <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>{name}</Typography>
      <Typography variant="caption" sx={{ display: 'block', opacity: 0.85 }}>{value}</Typography>
    </Box>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', py: 0.5 }}>
      <Typography variant="caption" sx={{ minWidth: 140, fontFamily: 'monospace', color: 'rgba(0,0,0,0.7)' }}>
        {label}
      </Typography>
      <Box sx={{ flex: 1 }}>{children}</Box>
    </Box>
  );
}

function ModeTokens() {
  const tokens = useRavenTokens();
  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: 'block' }}>color.brand</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Swatch name="brand.primary" value={tokens.color.brand.primary} text={tokens.color.brand.onPrimary} />
          <Swatch name="brand.accent" value={tokens.color.brand.accent} text="#fff" />
          <Swatch name="brand.subtle" value={tokens.color.brand.subtle} text="#4A148C" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: 'block' }}>color.semantic</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Swatch name="success" value={tokens.color.semantic.success} />
          <Swatch name="warning" value={tokens.color.semantic.warning} text="#000" />
          <Swatch name="danger" value={tokens.color.semantic.danger} />
          <Swatch name="info" value={tokens.color.semantic.info} />
        </Stack>
      </Box>
      <Box>
        <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: 'block' }}>color.surface</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Swatch name="background" value={tokens.color.surface.background} text={tokens.color.content.primary} />
          <Swatch name="raised" value={tokens.color.surface.raised} text={tokens.color.content.primary} />
          <Swatch name="sunken" value={tokens.color.surface.sunken} text={tokens.color.content.primary} />
          <Swatch name="overlay" value={tokens.color.surface.overlay} text={tokens.color.content.primary} />
        </Stack>
      </Box>
      <Box>
        <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: 'block' }}>color.content</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Swatch name="primary" value={tokens.color.content.primary} />
          <Swatch name="secondary" value={tokens.color.content.secondary} />
          <Swatch name="tertiary" value={tokens.color.content.tertiary} />
          <Swatch name="disabled" value={tokens.color.content.disabled} />
          <Swatch name="inverse" value={tokens.color.content.inverse} text="#000" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: 'block' }}>color.border</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Swatch name="default" value={tokens.color.border.default} text="#000" />
          <Swatch name="subtle" value={tokens.color.border.subtle} text="#000" />
          <Swatch name="strong" value={tokens.color.border.strong} text="#000" />
          <Swatch name="focus" value={tokens.color.border.focus} />
        </Stack>
      </Box>
    </Stack>
  );
}

export const Tokens: Story = {
  name: 'Design Tokens',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <StorybookPage maxWidth={820}>

      <StorybookSection
        title="Why tokens"
        description="Per guidelines 3.1 and 3.3, products MUST read colors, spacing, typography, radius, shadow, and motion from raven-ui tokens. Hex codes and arbitrary px in product code are PR-blockers. Import from `raven-design-system` and read by name — never hardcode."
      >
        <Box
          sx={{
            fontFamily: 'monospace',
            fontSize: '13px',
            backgroundColor: '#F3E5F5',
            color: '#4A148C',
            p: 2,
            borderRadius: '8px',
          }}
        >
          {`import { useRavenTokens, radius, shadow } from 'raven-design-system';`}
          <br />
          {`const tokens = useRavenTokens();`}
          <br />
          {`<Box sx={{ backgroundColor: tokens.color.surface.raised, borderRadius: radius.lg }} />`}
        </Box>
      </StorybookSection>

      <StorybookSection
        title="Mode-dependent color tokens"
        description="Resolved from the active theme via useRavenTokens(). Switch themes in the toolbar to see dark-mode values."
      >
        <ModeTokens />
      </StorybookSection>

      <StorybookSection
        title="color.category (7.2)"
        description="Plant / domain colors. Owned by raven-ui, keyed by plant-section identifier. MUST match across Copilot, NMMS, and P&ID."
      >
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {Object.entries(categoryColors).map(([k, v]) => (
            <Swatch key={k} name={`category.${k}`} value={v} />
          ))}
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="color.status (7.3)"
        description="NMMS incident lifecycle. MUST NOT be used for non-status meaning. Each status exposes dot / surface / content for chips."
      >
        <Stack spacing={0.75}>
          {Object.entries(statusColors).map(([k, v]) => (
            <Row key={k} label={`status.${k}`}>
              <Stack direction="row" spacing={0.75}>
                <Swatch name="dot" value={v.dot} />
                <Swatch name="surface" value={v.surface} text={v.content} />
                <Swatch name="content" value={v.content} />
              </Stack>
            </Row>
          ))}
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="color.engineering (7.4)"
        description="P&ID drawing semantics. Scoped to the canvas and its browse panel. MUST NOT collide with category or status colors inside a single surface."
      >
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {Object.entries(engineeringColors).map(([k, v]) => (
            <Swatch key={k} name={`engineering.${k}`} value={v} />
          ))}
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="font.size · font.weight"
        description="Scale exposed by the design system. Use these instead of raw rem / px in product code."
      >
        <Stack spacing={0.5}>
          {Object.entries(fontSize).map(([k, v]) => (
            <Row key={k} label={`font.size.${k}`}>
              <Typography sx={{ fontSize: v }}>{`Aa — font.size.${k} (${v})`}</Typography>
            </Row>
          ))}
          <Box sx={{ mt: 1 }} />
          {Object.entries(fontWeight).map(([k, v]) => (
            <Row key={k} label={`font.weight.${k}`}>
              <Typography sx={{ fontWeight: v }}>{`Aa — font.weight.${k} (${v})`}</Typography>
            </Row>
          ))}
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="space"
        description="8px base scale. Use these instead of arbitrary margin/padding values."
      >
        <Stack spacing={0.5}>
          {Object.entries(space).map(([k, v]) => (
            <Row key={k} label={`space.${k}`}>
              <Box sx={{ height: 8, backgroundColor: '#4A148C', width: `${v}px`, borderRadius: '2px' }} />
              <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)', ml: 1 }}>{v}px</Typography>
            </Row>
          ))}
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="radius"
        description="Admin chrome uses these tokens. Main content card = 2xl (24), dialogs = lg (16), form-section cards = xl (20), inputs = md (8), buttons = pill (50)."
      >
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          {Object.entries(radius).map(([k, v]) => (
            <Box
              key={k}
              sx={{
                width: 80,
                height: 80,
                backgroundColor: '#F3E5F5',
                border: '1px solid #CE93D8',
                borderRadius: typeof v === 'number' ? `${v}px` : v,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'monospace',
                fontSize: 12,
                color: '#4A148C',
              }}
            >
              {`radius.${k}`}
            </Box>
          ))}
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="shadow"
        description="Five-step elevation scale plus two named shadows (brand and chatGlow) for surfaces that anchor to purple chrome."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {Object.entries(shadow).map(([k, v]) => (
            <Box
              key={k}
              sx={{
                width: 140,
                height: 90,
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: v,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'monospace',
                fontSize: 12,
                color: '#4A148C',
              }}
            >
              {`shadow.${k}`}
            </Box>
          ))}
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="duration · ease"
        description="Motion tokens. Use these for any transition, keyframe, or animation to stay consistent with Raven's feel."
      >
        <Stack spacing={0.5}>
          {Object.entries(duration).map(([k, v]) => (
            <Row key={k} label={`duration.${k}`}>
              <Typography variant="caption">{`${v}ms`}</Typography>
            </Row>
          ))}
          <Box sx={{ mt: 1 }} />
          {Object.entries(ease).map(([k, v]) => (
            <Row key={k} label={`ease.${k}`}>
              <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>{v}</Typography>
            </Row>
          ))}
        </Stack>
      </StorybookSection>

      <StorybookSection
        title="Canonical shape (3.3)"
        description="The full token tree exposed by raven-design-system. Mode-dependent groups live on useRavenTokens(); the rest are static exports you can import directly."
      >
        <Box
          sx={{
            fontFamily: 'monospace',
            fontSize: '12px',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#0E171B',
            color: '#E8FBFB',
            p: 2,
            borderRadius: '8px',
            lineHeight: 1.5,
          }}
        >
{`color.brand.*        — useRavenTokens()
color.semantic.*     — useRavenTokens()
color.surface.*      — useRavenTokens()
color.content.*      — useRavenTokens()
color.border.*       — useRavenTokens()
color.category.*     — ${Object.keys(ravenTokensStatic.color.category).length} keys (static)
color.status.*       — ${Object.keys(ravenTokensStatic.color.status).length} keys (static)
color.engineering.*  — ${Object.keys(ravenTokensStatic.color.engineering).length} keys (static)
font.family.*        — sans, mono
font.size.*          — xs … display
font.weight.*        — regular, medium, semibold, bold
space.1..12          — 4 … 96 px
radius.*             — none, sm, md, lg, xl, 2xl, pill, circle
shadow.1..5, brand, chatGlow
duration.*           — instant, fast, base, slow
ease.*               — standard, entrance, exit, emphasized`}
        </Box>
      </StorybookSection>

    </StorybookPage>
  ),
};

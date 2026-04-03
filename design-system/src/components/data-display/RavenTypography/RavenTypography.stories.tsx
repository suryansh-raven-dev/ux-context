import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { RavenTypography } from './RavenTypography';
import type { RavenTypographyVariant } from './RavenTypography';

export default {
  title: 'Components/Typography',
  component: RavenTypography,
  parameters: {
    docs: {
      description: {
        component:
          'Raven-styled Typography component wrapping MUI v6 Typography. Uses the Near-Miss ' +
          'Source Sans 3 font family, Raven type scale, and brand purple palette. ' +
          'Supports all standard MUI variants (h1\u2013h6, subtitle1/2, body1/2, button, ' +
          'caption, overline) plus custom Raven variants (body1Bold, tableHeader). ' +
          'All MUI Typography props (color, align, gutterBottom, noWrap, paragraph, ' +
          'component, sx, variantMapping) are forwarded unchanged.',
      },
    },
  },
} satisfies Meta<typeof RavenTypography>;

type Story = StoryObj<typeof RavenTypography>;

interface TypographySpec {
  variant: RavenTypographyVariant;
  label: string;
  size: string;
  sizePx: string;
  weight: number;
  weightName: string;
  lineHeight: string;
  leadingPx: string;
  letterSpacing: string;
  textTransform: string;
  element: string;
  figmaStyle: string;
  sample: string;
}

const TYPE_SCALE: TypographySpec[] = [
  {
    variant: 'h1', label: 'h1', size: '6rem', sizePx: '96px', weight: 300,
    weightName: 'Light', lineHeight: '1.167', leadingPx: '112px',
    letterSpacing: '-1.5px', textTransform: 'none', element: '<h1>',
    figmaStyle: '\u2014', sample: 'Heading 1',
  },
  {
    variant: 'h2', label: 'h2', size: '3.75rem', sizePx: '60px', weight: 300,
    weightName: 'Light', lineHeight: '1.2', leadingPx: '72px',
    letterSpacing: '-0.5px', textTransform: 'none', element: '<h2>',
    figmaStyle: '\u2014', sample: 'Heading 2',
  },
  {
    variant: 'h3', label: 'h3', size: '3rem', sizePx: '48px', weight: 400,
    weightName: 'Regular', lineHeight: '1.167', leadingPx: '56px',
    letterSpacing: '0', textTransform: 'none', element: '<h3>',
    figmaStyle: '\u2014', sample: 'Heading 3',
  },
  {
    variant: 'h4', label: 'h4', size: '2.125rem', sizePx: '34px', weight: 600,
    weightName: 'SemiBold', lineHeight: '40px', leadingPx: '40px',
    letterSpacing: '0.25px', textTransform: 'none', element: '<h4>',
    figmaStyle: 'Product Typography/h4', sample: 'Heading 4',
  },
  {
    variant: 'h5', label: 'h5', size: '1.5rem', sizePx: '24px', weight: 600,
    weightName: 'SemiBold', lineHeight: '32px', leadingPx: '32px',
    letterSpacing: '0', textTransform: 'none', element: '<h5>',
    figmaStyle: '\u2014', sample: 'Heading 5',
  },
  {
    variant: 'h6', label: 'h6', size: '1.25rem', sizePx: '20px', weight: 600,
    weightName: 'SemiBold', lineHeight: '32px', leadingPx: '32px',
    letterSpacing: '0.15px', textTransform: 'none', element: '<h6>',
    figmaStyle: 'Product Typography/h6', sample: 'Heading 6',
  },
  {
    variant: 'subtitle1', label: 'subtitle1', size: '1rem', sizePx: '16px',
    weight: 400, weightName: 'Regular', lineHeight: '1.75', leadingPx: '28px',
    letterSpacing: '0.15px', textTransform: 'none', element: '<h6>',
    figmaStyle: '\u2014', sample: 'Subtitle 1',
  },
  {
    variant: 'subtitle2', label: 'subtitle2', size: '0.875rem', sizePx: '14px',
    weight: 400, weightName: 'Regular', lineHeight: '22px', leadingPx: '22px',
    letterSpacing: '0.1px', textTransform: 'none', element: '<h6>',
    figmaStyle: 'Product Typography/subtitle-2', sample: 'Subtitle 2',
  },
  {
    variant: 'body1', label: 'body1', size: '1rem', sizePx: '16px', weight: 400,
    weightName: 'Regular', lineHeight: '1.75', leadingPx: '28px',
    letterSpacing: '0.15px', textTransform: 'none', element: '<p>',
    figmaStyle: 'Product Typography/body-1', sample: 'Body 1 — default variant',
  },
  {
    variant: 'body1Bold', label: 'body1Bold \u2605', size: '1rem', sizePx: '16px',
    weight: 600, weightName: 'SemiBold', lineHeight: '1.75', leadingPx: '28px',
    letterSpacing: '0.15px', textTransform: 'none', element: '<span>',
    figmaStyle: 'Product Typography/body-1-bold', sample: 'Body 1 Bold (custom)',
  },
  {
    variant: 'body2', label: 'body2', size: '0.875rem', sizePx: '14px',
    weight: 400, weightName: 'Regular', lineHeight: '20px', leadingPx: '20px',
    letterSpacing: '0.25px', textTransform: 'none', element: '<p>',
    figmaStyle: 'Product Typography/body-2', sample: 'Body 2',
  },
  {
    variant: 'button', label: 'button', size: '0.875rem', sizePx: '14px',
    weight: 500, weightName: 'Medium', lineHeight: '24px', leadingPx: '24px',
    letterSpacing: '0.4px', textTransform: 'UPPERCASE', element: '<span>',
    figmaStyle: 'Product Typography/button-medium', sample: 'Button Text',
  },
  {
    variant: 'caption', label: 'caption', size: '0.75rem', sizePx: '12px',
    weight: 400, weightName: 'Regular', lineHeight: '1 (100%)', leadingPx: '12px',
    letterSpacing: '0.4px', textTransform: 'none', element: '<span>',
    figmaStyle: 'Product Typography/caption', sample: 'Caption text',
  },
  {
    variant: 'overline', label: 'overline', size: '0.75rem', sizePx: '12px',
    weight: 600, weightName: 'SemiBold', lineHeight: '32px', leadingPx: '32px',
    letterSpacing: '2px', textTransform: 'UPPERCASE', element: '<span>',
    figmaStyle: 'Product Typography/overline', sample: 'Overline Text',
  },
  {
    variant: 'tableHeader', label: 'tableHeader \u2605', size: '0.875rem',
    sizePx: '14px', weight: 600, weightName: 'SemiBold', lineHeight: '1 (100%)',
    leadingPx: '14px', letterSpacing: '0.17px', textTransform: 'none',
    element: '<span>', figmaStyle: 'Product Typography/tabel header',
    sample: 'Table Header (custom)',
  },
];

const specRowStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px',
  alignItems: 'start',
  padding: '24px 0',
  borderBottom: '1px solid #E0E0E0',
} as const;

const specLabelStyle = {
  fontFamily: '"Source Sans 3", sans-serif',
  fontSize: '11px',
  fontWeight: 600,
  color: 'rgba(0,0,0,0.5)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  lineHeight: 1,
} as const;

const specValueStyle = {
  fontFamily: '"Source Sans 3", sans-serif',
  fontSize: '13px',
  fontWeight: 500,
  color: 'rgba(0,0,0,0.87)',
  lineHeight: '18px',
} as const;

function SpecDetail({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ minWidth: 0 }}>
      <Box sx={specLabelStyle}>{label}</Box>
      <Box sx={{ ...specValueStyle, mt: '4px' }}>{value}</Box>
    </Box>
  );
}

/* ─── Full Type Scale with Specifications ────────────────── */

const thCell = {
  fontFamily: '"Source Sans 3", sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  color: '#4A148C',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  padding: '10px 12px',
  textAlign: 'left' as const,
  borderBottom: '2px solid #CE93D8',
  whiteSpace: 'nowrap' as const,
} as const;

const tdCell = {
  fontFamily: '"Source Sans 3", sans-serif',
  fontSize: '13px',
  fontWeight: 400,
  color: 'rgba(0,0,0,0.87)',
  padding: '10px 12px',
  borderBottom: '1px solid #F3E5F5',
  whiteSpace: 'nowrap' as const,
} as const;

const tdCellMono = {
  ...tdCell,
  fontFamily: '"SF Mono", "Fira Code", "Consolas", monospace',
  fontSize: '12px',
  color: 'rgba(0,0,0,0.7)',
} as const;

const TypeScale: Story = {
  name: 'Type Scale',
  render: () => (
    <Box sx={{ maxWidth: 1100 }}>
      {/* ── Type Scale ──────────────────────────────── */}
      <RavenTypography variant="h5" gutterBottom>
        Raven Typography Scale
      </RavenTypography>
      <RavenTypography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
        Font family: Source Sans 3 &middot; Fallback: Roboto, Helvetica, Arial, sans-serif
        &middot; {'\u2605'} = Custom Raven variant
      </RavenTypography>

      {TYPE_SCALE.map((spec) => (
        <Box key={spec.variant} sx={specRowStyle}>
          <Box>
            <RavenTypography variant={spec.variant} display="block">
              {spec.sample}
            </RavenTypography>
          </Box>

          <Box>
            <Box sx={{
              display: 'inline-block',
              backgroundColor: '#F3E5F5',
              borderRadius: '4px',
              px: 1,
              py: 0.25,
              mb: 1.5,
            }}>
              <Box sx={{ fontFamily: '"Source Sans 3", sans-serif', fontSize: '12px', fontWeight: 600, color: '#4A148C' }}>
                {spec.label}
              </Box>
            </Box>

            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px 16px',
            }}>
              <SpecDetail label="Font Size" value={`${spec.sizePx} (${spec.size})`} />
              <SpecDetail label="Weight" value={`${spec.weight} (${spec.weightName})`} />
              <SpecDetail label="Line Height (Leading)" value={spec.lineHeight} />
              <SpecDetail label="Leading (px)" value={spec.leadingPx} />
              <SpecDetail label="Letter Spacing (Kerning)" value={spec.letterSpacing} />
              <SpecDetail label="Text Transform" value={spec.textTransform} />
              <SpecDetail label="HTML Element" value={spec.element} />
              <SpecDetail label="Figma Style" value={spec.figmaStyle} />
            </Box>
          </Box>
        </Box>
      ))}

      {/* ── Specifications Table ────────────────────── */}
      <Divider sx={{ my: 6 }} />

      <RavenTypography variant="h5" gutterBottom>
        Typography Specifications Reference
      </RavenTypography>
      <RavenTypography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
        Complete token reference for every Raven typography variant. All values sourced from Figma
        design file and ravenNearMissTheme.
      </RavenTypography>

      <Box sx={{ overflow: 'auto' }}>
        <Box
          component="table"
          sx={{
            width: '100%',
            borderCollapse: 'collapse',
            border: '1px solid #E0E0E0',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Box component="thead" sx={{ backgroundColor: '#FDFAFE' }}>
            <Box component="tr">
              <Box component="th" sx={thCell}>Variant</Box>
              <Box component="th" sx={thCell}>Size (rem)</Box>
              <Box component="th" sx={thCell}>Size (px)</Box>
              <Box component="th" sx={thCell}>Weight</Box>
              <Box component="th" sx={thCell}>Line Height</Box>
              <Box component="th" sx={thCell}>Leading (px)</Box>
              <Box component="th" sx={thCell}>Kerning</Box>
              <Box component="th" sx={thCell}>Transform</Box>
              <Box component="th" sx={thCell}>Element</Box>
            </Box>
          </Box>
          <Box component="tbody">
            {TYPE_SCALE.map((spec, i) => (
              <Box
                component="tr"
                key={spec.variant}
                sx={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FDFAFE' }}
              >
                <Box component="td" sx={{ ...tdCell, fontWeight: 600, color: '#4A148C' }}>
                  {spec.label}
                </Box>
                <Box component="td" sx={tdCellMono}>{spec.size}</Box>
                <Box component="td" sx={tdCellMono}>{spec.sizePx}</Box>
                <Box component="td" sx={tdCell}>{spec.weight} ({spec.weightName})</Box>
                <Box component="td" sx={tdCellMono}>{spec.lineHeight}</Box>
                <Box component="td" sx={tdCellMono}>{spec.leadingPx}</Box>
                <Box component="td" sx={tdCellMono}>{spec.letterSpacing}</Box>
                <Box component="td" sx={tdCell}>{spec.textTransform}</Box>
                <Box component="td" sx={tdCellMono}>{spec.element}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Glossary ────────────────────────────────── */}
      <Box sx={{ mt: 4 }}>
        <RavenTypography variant="h6" gutterBottom>
          Glossary
        </RavenTypography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          backgroundColor: '#FDFAFE',
          border: '1px solid #F3E5F5',
          borderRadius: '8px',
          p: 3,
        }}>
          <Box>
            <Box sx={specLabelStyle}>Font Size</Box>
            <Box sx={{ ...specValueStyle, mt: '4px' }}>
              The size of the type in rem (relative to root 16px) and absolute pixels.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Weight</Box>
            <Box sx={{ ...specValueStyle, mt: '4px' }}>
              CSS font-weight. 300 = Light, 400 = Regular, 500 = Medium, 600 = SemiBold.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Line Height (Leading)</Box>
            <Box sx={{ ...specValueStyle, mt: '4px' }}>
              Vertical distance between baselines. Unitless values are multipliers of font size; px values are absolute.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Leading (px)</Box>
            <Box sx={{ ...specValueStyle, mt: '4px' }}>
              Computed line height in pixels. For unitless values: fontSize &times; multiplier.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Letter Spacing (Kerning)</Box>
            <Box sx={{ ...specValueStyle, mt: '4px' }}>
              Extra space added between characters. Negative values tighten; positive values loosen.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Text Transform</Box>
            <Box sx={{ ...specValueStyle, mt: '4px' }}>
              CSS text-transform. &quot;UPPERCASE&quot; forces all-caps; &quot;none&quot; preserves original case.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>HTML Element</Box>
            <Box sx={{ ...specValueStyle, mt: '4px' }}>
              Default semantic element rendered via variantMapping. Override with the component prop.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Figma Style</Box>
            <Box sx={{ ...specValueStyle, mt: '4px' }}>
              Corresponding Figma text style name from the Near-Miss design file. &quot;&mdash;&quot; means no direct Figma match.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

/* ─── Headings ───────────────────────────────────────────── */

const Headings: Story = {
  name: 'Headings',
  render: () => (
    <Stack spacing={2}>
      <RavenTypography variant="h1">h1. Heading</RavenTypography>
      <Divider />
      <RavenTypography variant="h2">h2. Heading</RavenTypography>
      <Divider />
      <RavenTypography variant="h3">h3. Heading</RavenTypography>
      <Divider />
      <RavenTypography variant="h4">h4. Heading</RavenTypography>
      <Divider />
      <RavenTypography variant="h5">h5. Heading</RavenTypography>
      <Divider />
      <RavenTypography variant="h6">h6. Heading</RavenTypography>
    </Stack>
  ),
};

/* ─── Body Variants ──────────────────────────────────────── */

const BodyVariants: Story = {
  name: 'Body Variants',
  render: () => (
    <Stack spacing={3}>
      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          body1 (default)
        </RavenTypography>
        <RavenTypography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          body1Bold (custom)
        </RavenTypography>
        <RavenTypography variant="body1Bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus.
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          body2
        </RavenTypography>
        <RavenTypography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </RavenTypography>
      </Box>
    </Stack>
  ),
};

/* ─── Subtitle Variants ──────────────────────────────────── */

const SubtitleVariants: Story = {
  name: 'Subtitle Variants',
  render: () => (
    <Stack spacing={2}>
      <RavenTypography variant="subtitle1">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </RavenTypography>
      <RavenTypography variant="subtitle2">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </RavenTypography>
    </Stack>
  ),
};

/* ─── Custom Raven Variants ──────────────────────────────── */

const CustomRavenVariants: Story = {
  name: 'Custom Raven Variants',
  render: () => (
    <Stack spacing={3}>
      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          body1Bold — used for emphasized chat messages and section labels
        </RavenTypography>
        <RavenTypography variant="body1Bold">
          What happened? Please include time &amp; date.
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          tableHeader — used for data table column headers
        </RavenTypography>
        <Stack direction="row" spacing={4}>
          <RavenTypography variant="tableHeader">Incident ID</RavenTypography>
          <RavenTypography variant="tableHeader">Description</RavenTypography>
          <RavenTypography variant="tableHeader">Status</RavenTypography>
          <RavenTypography variant="tableHeader">Assigned To</RavenTypography>
        </Stack>
      </Box>
    </Stack>
  ),
};

/* ─── Utility Variants ───────────────────────────────────── */

const UtilityVariants: Story = {
  name: 'Utility Variants',
  render: () => (
    <Stack spacing={2}>
      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          button
        </RavenTypography>
        <RavenTypography variant="button" display="block">
          Submit Report
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          caption
        </RavenTypography>
        <RavenTypography variant="caption" display="block">
          Last updated: 2 minutes ago
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          overline
        </RavenTypography>
        <RavenTypography variant="overline" display="block">
          Equipment Details
        </RavenTypography>
      </Box>
    </Stack>
  ),
};

/* ─── Colors ─────────────────────────────────────────────── */

const Colors: Story = {
  name: 'Colors',
  render: () => (
    <Stack spacing={1}>
      <RavenTypography color="primary">primary — Brand purple</RavenTypography>
      <RavenTypography color="secondary">secondary — Deep purple</RavenTypography>
      <RavenTypography color="textPrimary">
        textPrimary — rgba(0,0,0,0.87)
      </RavenTypography>
      <RavenTypography color="textSecondary">
        textSecondary — rgba(0,0,0,0.6)
      </RavenTypography>
      <RavenTypography color="textDisabled">
        textDisabled — rgba(0,0,0,0.42)
      </RavenTypography>
      <RavenTypography color="success">success — Green</RavenTypography>
      <RavenTypography color="error">error — Red</RavenTypography>
      <RavenTypography color="warning">warning — Orange</RavenTypography>
      <RavenTypography color="info">info — Blue</RavenTypography>
    </Stack>
  ),
};

/* ─── Alignment ──────────────────────────────────────────── */

const Alignment: Story = {
  name: 'Alignment',
  render: () => (
    <Stack spacing={2}>
      <RavenTypography align="left">Left aligned text</RavenTypography>
      <RavenTypography align="center">Center aligned text</RavenTypography>
      <RavenTypography align="right">Right aligned text</RavenTypography>
      <RavenTypography align="justify">
        Justified text. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </RavenTypography>
    </Stack>
  ),
};

/* ─── Gutter Bottom ──────────────────────────────────────── */

const GutterBottom: Story = {
  name: 'Gutter Bottom',
  render: () => (
    <Box sx={{ border: '1px dashed #E0E0E0', p: 2 }}>
      <RavenTypography variant="h5" gutterBottom>
        With gutterBottom
      </RavenTypography>
      <RavenTypography variant="body1">
        This paragraph follows a heading with gutterBottom enabled, adding
        a small bottom margin for visual separation.
      </RavenTypography>
    </Box>
  ),
};

/* ─── No Wrap (Truncation) ───────────────────────────────── */

const NoWrap: Story = {
  name: 'No Wrap (Truncation)',
  render: () => (
    <Box sx={{ width: 300, border: '1px dashed #E0E0E0', p: 2 }}>
      <RavenTypography noWrap>
        This is a very long text that will be truncated with an ellipsis when it
        overflows the container width of 300 pixels.
      </RavenTypography>
    </Box>
  ),
};

/* ─── Paragraph ──────────────────────────────────────────── */

const Paragraph: Story = {
  name: 'Paragraph',
  render: () => (
    <Box>
      <RavenTypography paragraph>
        First paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur unde suscipit.
      </RavenTypography>
      <RavenTypography paragraph>
        Second paragraph. Quam beatae rerum inventore consectetur, neque
        doloribus, cupiditate numquam dignissimos laborum.
      </RavenTypography>
      <RavenTypography>
        Third block without paragraph spacing.
      </RavenTypography>
    </Box>
  ),
};

/* ─── Semantic Element Override ───────────────────────────── */

const SemanticElement: Story = {
  name: 'Semantic Element Override',
  render: () => (
    <Stack spacing={2}>
      <RavenTypography variant="h1" component="h2">
        h1 variant rendered as h2 element
      </RavenTypography>
      <RavenTypography variant="h6" component="span">
        h6 variant rendered as span element
      </RavenTypography>
      <RavenTypography variant="body1" component="div">
        body1 variant rendered as div element
      </RavenTypography>
    </Stack>
  ),
};

/* ─── Theme Keys Demo ────────────────────────────────────── */

const ThemeKeys: Story = {
  name: 'Theme Keys',
  render: () => (
    <Box
      sx={(theme) => ({
        ...theme.typography.button,
        backgroundColor: '#F3E5F5',
        padding: theme.spacing(2),
        borderRadius: 2,
        color: '#4A148C',
      })}
    >
      {"This div's text uses the button typography theme key."}
    </Box>
  ),
};

/* ─── Raven Product Patterns ─────────────────────────────── */

const RavenProductPatterns: Story = {
  name: 'Raven Product Patterns',
  render: () => (
    <Stack spacing={4}>
      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Section Header (overline)
        </RavenTypography>
        <RavenTypography variant="overline" color="primary" display="block">
          Report Information
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Page Title (h4)
        </RavenTypography>
        <RavenTypography variant="h4">
          Analysis Dashboard
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Card Title (h6)
        </RavenTypography>
        <RavenTypography variant="h6">
          Near-Miss Incident Summary
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Chat Message (body1 + body1Bold)
        </RavenTypography>
        <RavenTypography variant="body1Bold" gutterBottom>
          Hi Ramesh!
        </RavenTypography>
        <RavenTypography variant="body1">
          I'll help you report the near-miss incident quickly and easily.
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Form Label + Helper (caption)
        </RavenTypography>
        <RavenTypography variant="body2" gutterBottom>
          Date of Incident
        </RavenTypography>
        <RavenTypography variant="caption" color="textSecondary">
          Select when the near-miss event occurred
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Table Headers (tableHeader)
        </RavenTypography>
        <Stack direction="row" spacing={6} sx={{ borderBottom: '1px solid #E0E0E0', pb: 1 }}>
          <RavenTypography variant="tableHeader">ID</RavenTypography>
          <RavenTypography variant="tableHeader">Description</RavenTypography>
          <RavenTypography variant="tableHeader">Severity</RavenTypography>
          <RavenTypography variant="tableHeader">Status</RavenTypography>
        </Stack>
        <Stack direction="row" spacing={6} sx={{ pt: 1 }}>
          <RavenTypography variant="body2">NM-001</RavenTypography>
          <RavenTypography variant="body2">Forklift near-miss</RavenTypography>
          <RavenTypography variant="body2">High</RavenTypography>
          <RavenTypography variant="body2" color="success">Closed</RavenTypography>
        </Stack>
      </Box>
    </Stack>
  ),
};

/* ─── Accessibility: Heading Hierarchy ────────────────────── */

const HeadingHierarchy: Story = {
  name: 'Accessibility: Heading Hierarchy',
  render: () => (
    <Stack spacing={2}>
      <RavenTypography variant="overline" color="textSecondary">
        Proper heading hierarchy for accessibility (WCAG)
      </RavenTypography>
      <RavenTypography variant="h4" component="h1">
        Page Title (h4 style as h1 element)
      </RavenTypography>
      <RavenTypography variant="h5" component="h2">
        Section Title (h5 style as h2 element)
      </RavenTypography>
      <RavenTypography variant="h6" component="h3">
        Subsection Title (h6 style as h3 element)
      </RavenTypography>
      <RavenTypography variant="body1">
        Content paragraph following the heading hierarchy.
      </RavenTypography>
    </Stack>
  ),
};

function renderSection(story: Story) {
  if (!story.render) return null;
  return story.render({} as never, {} as never);
}

const sectionTitleSx = {
  fontFamily: '"Source Sans 3", sans-serif',
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#4A148C',
  lineHeight: 1.4,
} as const;

const sectionCardSx = {
  border: '1px solid #E0E0E0',
  borderRadius: '12px',
  backgroundColor: '#FFFFFF',
  p: 3,
} as const;

export const Typography: Story = {
  name: 'Typography',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Box
      sx={{
        height: '100vh',
        overflowY: 'auto',
        p: 3,
        backgroundColor: '#FCF6FE',
      }}
    >
      <Stack spacing={3}>
        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Type Scale</Box>
          <Box sx={{ mt: 2 }}>{renderSection(TypeScale)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Headings</Box>
          <Box sx={{ mt: 2 }}>{renderSection(Headings)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Body Variants</Box>
          <Box sx={{ mt: 2 }}>{renderSection(BodyVariants)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Subtitle Variants</Box>
          <Box sx={{ mt: 2 }}>{renderSection(SubtitleVariants)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Custom Raven Variants</Box>
          <Box sx={{ mt: 2 }}>{renderSection(CustomRavenVariants)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Utility Variants</Box>
          <Box sx={{ mt: 2 }}>{renderSection(UtilityVariants)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Colors</Box>
          <Box sx={{ mt: 2 }}>{renderSection(Colors)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Alignment</Box>
          <Box sx={{ mt: 2 }}>{renderSection(Alignment)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Gutter Bottom</Box>
          <Box sx={{ mt: 2 }}>{renderSection(GutterBottom)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>No Wrap (Truncation)</Box>
          <Box sx={{ mt: 2 }}>{renderSection(NoWrap)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Paragraph</Box>
          <Box sx={{ mt: 2 }}>{renderSection(Paragraph)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Semantic Element Override</Box>
          <Box sx={{ mt: 2 }}>{renderSection(SemanticElement)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Theme Keys</Box>
          <Box sx={{ mt: 2 }}>{renderSection(ThemeKeys)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Raven Product Patterns</Box>
          <Box sx={{ mt: 2 }}>{renderSection(RavenProductPatterns)}</Box>
        </Box>

        <Box sx={sectionCardSx}>
          <Box sx={sectionTitleSx}>Accessibility: Heading Hierarchy</Box>
          <Box sx={{ mt: 2 }}>{renderSection(HeadingHierarchy)}</Box>
        </Box>
      </Stack>
    </Box>
  ),
};

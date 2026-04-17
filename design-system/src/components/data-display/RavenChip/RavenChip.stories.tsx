import CheckCircleIcon from '@mui/icons-material/CheckCircleRounded';
import InfoRounded from '@mui/icons-material/InfoRounded';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenChip } from './RavenChip';
import { ReportStatusChip } from '../ReportStatusChip/ReportStatusChip';

export default {
  title: 'Components/Data Display/Chip',
  component: RavenChip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Raven Chip has two mutually-exclusive usage modes:\n\n' +
          '1. **Text-only grey chip** (`colorVariant="default"`, no icon / avatar / onDelete). Use for identifiers, format numbers, reference codes, and other passive text tags.\n\n' +
          '2. **Rich chip** (semantic `colorVariant` — success / error / warning / info / primary — with optional leading icon, trailing close, info indicator, or coloured leading dot). Use whenever the chip carries meaning beyond the text, or affords an action (dismiss, more-info).\n\n' +
          'If a grey chip needs an icon or close affordance — switch variants. The default grey chip MUST remain text-only. For lifecycle status (In-progress / Closed / Approved etc.) use `ReportStatusChip`.',
      },
    },
  },
} satisfies Meta<typeof RavenChip>;

type Story = StoryObj<typeof RavenChip>;

const Default: Story = {
  args: {
    label: 'Default',
  },
};

const Success: Story = {
  args: {
    label: 'Resolved',
    colorVariant: 'success',
  },
};

const Error: Story = {
  args: {
    label: 'Critical',
    colorVariant: 'error',
  },
};

const Warning: Story = {
  args: {
    label: 'Pending review',
    colorVariant: 'warning',
  },
};

const Info: Story = {
  args: {
    label: 'In progress',
    colorVariant: 'info',
  },
};

const Primary: Story = {
  args: {
    label: 'Near miss',
    colorVariant: 'primary',
  },
};

const Outlined: Story = {
  args: {
    label: 'Outlined chip',
    colorVariant: 'primary',
    chipVariant: 'outlined',
  },
};

const WithIcon: Story = {
  args: {
    label: 'Verified',
    colorVariant: 'success',
    icon: <CheckCircleIcon />,
  },
};

const Deletable: Story = {
  args: {
    label: 'Removable',
    colorVariant: 'primary',
    onDelete: () => {},
  },
};

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenChip {...story.args} />;
  }
  return null;
}

export const Chip: Story = {
  tags: ['!dev'],
  name: 'Chip',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={720}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="Success">{renderStory(Success)}</StorybookSection>
      <StorybookSection title="Error">{renderStory(Error)}</StorybookSection>
      <StorybookSection title="Warning">{renderStory(Warning)}</StorybookSection>
      <StorybookSection title="Info">{renderStory(Info)}</StorybookSection>
      <StorybookSection title="Primary">{renderStory(Primary)}</StorybookSection>
      <StorybookSection title="Outlined">{renderStory(Outlined)}</StorybookSection>
      <StorybookSection title="With Icon">{renderStory(WithIcon)}</StorybookSection>
      <StorybookSection title="Deletable">{renderStory(Deletable)}</StorybookSection>
    </StorybookPage>
  ),
};

/* ─── Usage Rule (§7.5) ─────────────────────────────────────────
 * Encodes the text-only vs. rich chip decision from Figma nodes
 * 1328-34470 (grey text chip) and 1328-34344 (status/rich chip).
 */

function RuleBlock({
  verdict,
  caption,
  children,
}: {
  verdict: 'do' | 'dont';
  caption: string;
  children: React.ReactNode;
}) {
  const isDo = verdict === 'do';
  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        borderRadius: 2,
        border: '2px solid',
        borderColor: isDo ? 'success.main' : 'error.main',
        bgcolor: isDo ? 'success.light' : 'error.light',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      <Typography
        variant="overline"
        sx={{ fontWeight: 700, color: isDo ? 'success.dark' : 'error.dark', letterSpacing: 0.6 }}
      >
        {isDo ? 'Do' : "Don't"}
      </Typography>
      <Box>{children}</Box>
      <Typography variant="caption" color="text.secondary">
        {caption}
      </Typography>
    </Box>
  );
}

export const UsageRule: Story = {
  name: 'Usage Rule: Text-only vs Rich',
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'The grey rounded chip (`RavenChip colorVariant="default"`) is for text only — identifiers, format numbers, reference codes. The moment the chip needs a leading icon, a coloured leading dot, a trailing close, or an info affordance, switch to a semantic `colorVariant` (or `ReportStatusChip` for lifecycle status). This decision mirrors the Figma spec: node `1328-34470` (grey text) vs. node `1328-34344` (status with dot).',
      },
    },
  },
  render: () => (
    <StorybookPage maxWidth={960}>
      <StorybookSection title="Text only → grey default chip">
        <Stack direction="row" spacing={2}>
          <RuleBlock
            verdict="do"
            caption='Passive identifier, no icons. Use `<RavenChip label="Format No. IEPL-HSEF/S-4.313A" />`.'
          >
            <RavenChip label="Format No. IEPL-HSEF/S-4.313A" />
          </RuleBlock>
          <RuleBlock
            verdict="dont"
            caption="Don't bolt an icon or close onto the grey default chip — switch variant instead."
          >
            <RavenChip
              label="Format No. IEPL-HSEF/S-4.313A"
              icon={<InfoRounded />}
              onDelete={() => undefined}
            />
          </RuleBlock>
        </Stack>
      </StorybookSection>

      <StorybookSection title="Needs icon / info / close → rich chip">
        <Stack direction="row" spacing={2}>
          <RuleBlock
            verdict="do"
            caption="Meaningful leading icon + dismiss → semantic colorVariant (here: primary)."
          >
            <RavenChip
              label="Verified by Safety"
              colorVariant="primary"
              icon={<CheckCircleIcon />}
              onDelete={() => undefined}
            />
          </RuleBlock>
          <RuleBlock
            verdict="do"
            caption="Lifecycle status with leading dot → ReportStatusChip."
          >
            <ReportStatusChip status="approved" label="Accepted by Safety" />
          </RuleBlock>
        </Stack>
      </StorybookSection>

      <StorybookSection title="Quick reference">
        <Box component="table" sx={{ borderCollapse: 'collapse', width: '100%', fontSize: 14 }}>
          <Box component="thead">
            <Box component="tr" sx={{ textAlign: 'left', bgcolor: 'action.hover' }}>
              <Box component="th" sx={{ p: 1.5, border: '1px solid', borderColor: 'divider' }}>
                If the chip needs…
              </Box>
              <Box component="th" sx={{ p: 1.5, border: '1px solid', borderColor: 'divider' }}>
                Use
              </Box>
            </Box>
          </Box>
          <Box component="tbody">
            {[
              ['only text (e.g. format numbers, codes)', '`RavenChip` with `colorVariant="default"` and no icon/onDelete/avatar'],
              ['leading icon (status glyph, type marker)', '`RavenChip` with a semantic `colorVariant` + `icon`'],
              ['trailing close (dismiss / remove filter)', '`RavenChip` with a semantic `colorVariant` + `onDelete`'],
              ['leading coloured dot for lifecycle state', '`ReportStatusChip`'],
              ['info / help adornment', '`RavenChip` with `colorVariant="info"` + `icon`'],
            ].map(([need, use]) => (
              <Box component="tr" key={need}>
                <Box component="td" sx={{ p: 1.5, border: '1px solid', borderColor: 'divider' }}>
                  {need}
                </Box>
                <Box component="td" sx={{ p: 1.5, border: '1px solid', borderColor: 'divider' }}>
                  {use}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </StorybookSection>
    </StorybookPage>
  ),
};

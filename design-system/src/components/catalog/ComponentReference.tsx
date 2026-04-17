import React from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { MuiV6CatalogItem } from '../../catalog/muiV6Catalog';

const supportLabels: Record<string, { label: string; color: string; bg: string }> = {
  available: { label: 'Raven component available', color: '#1B5E20', bg: '#E8F5E9' },
  themed: { label: 'Raven theme support', color: '#E65100', bg: '#FFF3E0' },
  guidance: { label: 'Guidance only', color: '#4A148C', bg: '#F3E5F5' },
};

function ReferenceList({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
      {items.map((entry) => (
        <Box component="li" key={entry} sx={{ mb: 0.75 }}>
          <Typography variant="body2" color="text.secondary">
            {entry}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export function ComponentReference({
  item,
  embedded = false,
}: {
  item: MuiV6CatalogItem;
  embedded?: boolean;
}) {
  const support = supportLabels[item.ravenSupport];

  return (
    <Box
      sx={{
        fontFamily: '"Source Sans 3", sans-serif',
        p: embedded ? 0 : 4,
        maxWidth: embedded ? 'none' : 720,
      }}
    >
      <Typography variant={embedded ? 'h5' : 'h3'} sx={{ m: 0, fontWeight: 700 }}>
        {item.name}
      </Typography>

      {item.summary ? (
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5 }}>
          {item.summary}
        </Typography>
      ) : null}

      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1.5 }}>
        <Chip
          label={item.guideline}
          size="small"
          sx={{ backgroundColor: '#E8EAF6', color: '#1A237E', fontWeight: 700 }}
        />
        <Chip
          label={support.label}
          size="small"
          sx={{ backgroundColor: support.bg, color: support.color, fontWeight: 700 }}
        />
      </Stack>

      <Box
        component="table"
        sx={{
          mt: 3,
          borderCollapse: 'collapse',
          width: '100%',
          fontSize: 14,
        }}
      >
        <Box component="tbody">
          <Box component="tr">
            <Box
              component="td"
              sx={{ py: 1, px: 1.5, fontWeight: 700, color: 'text.secondary', width: 160 }}
            >
              Raven mapping
            </Box>
            <Box component="td" sx={{ py: 1, px: 1.5 }}>
              {item.ravenEquivalent}
            </Box>
          </Box>
          <Box component="tr" sx={{ backgroundColor: '#FAFAFA' }}>
            <Box component="td" sx={{ py: 1, px: 1.5, fontWeight: 700, color: 'text.secondary' }}>
              Category
            </Box>
            <Box component="td" sx={{ py: 1, px: 1.5 }}>
              {item.category}
            </Box>
          </Box>
          <Box component="tr">
            <Box component="td" sx={{ py: 1, px: 1.5, fontWeight: 700, color: 'text.secondary' }}>
              Notes
            </Box>
            <Box component="td" sx={{ py: 1, px: 1.5 }}>
              {item.notes}
            </Box>
          </Box>
        </Box>
      </Box>

      {item.importPath?.length ? (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#4A148C', mb: 1 }}>
            Import
          </Typography>
          <Box
            component="pre"
            sx={{
              m: 0,
              p: 2,
              borderRadius: 2,
              backgroundColor: '#F7F7FB',
              border: '1px solid #E7E8F3',
              overflowX: 'auto',
              fontSize: 13,
              lineHeight: 1.6,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            }}
          >
            {item.importPath.join('\n')}
          </Box>
        </Box>
      ) : null}

      {item.composition?.length ? (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#4A148C', mb: 1 }}>
            Composition
          </Typography>
          <ReferenceList items={item.composition} />
        </Box>
      ) : null}

      {item.keyPoints?.length ? (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#4A148C', mb: 1 }}>
            MUI Guidance
          </Typography>
          <ReferenceList items={item.keyPoints} />
        </Box>
      ) : null}

      {item.accessibility?.length ? (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#4A148C', mb: 1 }}>
            Accessibility
          </Typography>
          <ReferenceList items={item.accessibility} />
        </Box>
      ) : null}

      {item.crossPlatform?.length ? (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#4A148C', mb: 1 }}>
            Cross-platform parity (Google Material · Microsoft Fluent)
          </Typography>
          <ReferenceList items={item.crossPlatform} />
        </Box>
      ) : null}

      {item.ravenGuidance?.length ? (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#4A148C', mb: 1 }}>
            Raven guidance
          </Typography>
          <ReferenceList items={item.ravenGuidance} />
        </Box>
      ) : null}

      {item.ravenUsage ? (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#4A148C', mb: 1 }}>
            Raven usage
          </Typography>
          <Box
            component="pre"
            sx={{
              m: 0,
              p: 2,
              borderRadius: 2,
              backgroundColor: '#0E171B',
              color: '#E1BEE7',
              overflowX: 'auto',
              fontSize: 13,
              lineHeight: 1.65,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            }}
          >
            {item.ravenUsage}
          </Box>
        </Box>
      ) : null}

      <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
        <Link
          href={item.docsUrl}
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            px: 2,
            py: 1,
            borderRadius: 2,
            backgroundColor: '#1976D2',
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          MUI Docs ↗
        </Link>
        {item.apiLinks?.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            underline="none"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 2,
              py: 1,
              borderRadius: 2,
              border: '1px solid #D1C4E9',
              color: '#4A148C',
              fontSize: 14,
              fontWeight: 700,
              backgroundColor: '#FFF',
            }}
          >
            {link.label} ↗
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

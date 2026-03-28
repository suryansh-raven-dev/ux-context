import React from 'react';
import type { MuiV6CatalogItem } from '../../catalog/muiV6Catalog';

const supportLabels: Record<string, { label: string; color: string; bg: string }> = {
  available: { label: 'Raven component available', color: '#1B5E20', bg: '#E8F5E9' },
  themed: { label: 'Raven theme support', color: '#E65100', bg: '#FFF3E0' },
  guidance: { label: 'Guidance only', color: '#4A148C', bg: '#F3E5F5' },
};

export function ComponentReference({ item }: { item: MuiV6CatalogItem }) {
  const support = supportLabels[item.ravenSupport];

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", padding: 32, maxWidth: 720 }}>
      <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>{item.name}</h1>

      <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 600,
            background: '#E8EAF6',
            color: '#1A237E',
          }}
        >
          {item.guideline}
        </span>
        <span
          style={{
            display: 'inline-block',
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 600,
            background: support.bg,
            color: support.color,
          }}
        >
          {support.label}
        </span>
      </div>

      <table
        style={{
          marginTop: 24,
          borderCollapse: 'collapse',
          width: '100%',
          fontSize: 14,
        }}
      >
        <tbody>
          <tr>
            <td style={{ padding: '8px 12px', fontWeight: 600, color: '#666', width: 160 }}>
              Raven mapping
            </td>
            <td style={{ padding: '8px 12px' }}>{item.ravenEquivalent}</td>
          </tr>
          <tr style={{ background: '#FAFAFA' }}>
            <td style={{ padding: '8px 12px', fontWeight: 600, color: '#666' }}>Category</td>
            <td style={{ padding: '8px 12px' }}>{item.category}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 12px', fontWeight: 600, color: '#666' }}>Notes</td>
            <td style={{ padding: '8px 12px' }}>{item.notes}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: 24, display: 'flex', gap: 16 }}>
        <a
          href={item.docsUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 16px',
            borderRadius: 8,
            background: '#1976D2',
            color: '#fff',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          MUI Docs ↗
        </a>
      </div>
    </div>
  );
}

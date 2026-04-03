import React from 'react';

import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import {
  MUI_V6_CATALOG_URL,
  muiV6Catalog,
  muiV6Categories,
  MuiV6Category,
  MuiV6CatalogItem,
} from '../../catalog/muiV6Catalog';

import './MuiV6Catalog.css';

export interface MuiV6CatalogProps {
  category?: MuiV6Category | 'All';
}

const supportCopy: Record<MuiV6CatalogItem['ravenSupport'], string> = {
  available: 'Raven component available',
  themed: 'Raven theme support',
  guidance: 'Guidance only',
};

export const MuiV6Catalog: React.FC<MuiV6CatalogProps> = ({ category = 'All' }) => {
  const visibleCategories = category === 'All' ? muiV6Categories : [category];

  const summary = muiV6Catalog.reduce(
    (acc, item) => {
      acc.total += 1;
      acc[item.ravenSupport] += 1;
      return acc;
    },
    {
      total: 0,
      available: 0,
      themed: 0,
      guidance: 0,
    }
  );

  return (
    <div className="mui-v6-catalog">
      <div className="mui-v6-catalog__hero">
        <div className="mui-v6-catalog__eyebrow">Raven Design System</div>
        <Typography variant="h4" className="mui-v6-catalog__title">
          Canonical MUI v6 Component Catalog
        </Typography>
        <Typography variant="body1" className="mui-v6-catalog__description">
          Exact component names, official MUI references, and Raven-specific implementation notes for the Near Miss
          design library. This page keeps the MUI v6 naming model intact while mapping each item to Raven wrappers,
          theme support, or documented usage guidance.
        </Typography>
        <div className="mui-v6-catalog__actions">
          <Link href={MUI_V6_CATALOG_URL} target="_blank" rel="noreferrer">
            Open official MUI v6 catalog
          </Link>
        </div>
      </div>

      <div className="mui-v6-catalog__summary">
        <div className="mui-v6-catalog__summary-card">
          <span className="mui-v6-catalog__summary-value">{summary.total}</span>
          <span className="mui-v6-catalog__summary-label">MUI catalog entries tracked</span>
        </div>
        <div className="mui-v6-catalog__summary-card">
          <span className="mui-v6-catalog__summary-value">{summary.available}</span>
          <span className="mui-v6-catalog__summary-label">Available as Raven components</span>
        </div>
        <div className="mui-v6-catalog__summary-card">
          <span className="mui-v6-catalog__summary-value">{summary.themed}</span>
          <span className="mui-v6-catalog__summary-label">Covered by Raven theming</span>
        </div>
        <div className="mui-v6-catalog__summary-card">
          <span className="mui-v6-catalog__summary-value">{summary.guidance}</span>
          <span className="mui-v6-catalog__summary-label">Guidance-first entries</span>
        </div>
      </div>

      {visibleCategories.map((section) => {
        const items = muiV6Catalog.filter((item) => item.category === section);
        return (
          <section key={section} className="mui-v6-catalog__section">
            <div className="mui-v6-catalog__section-header">
              <Typography variant="h6">{section}</Typography>
              <Typography variant="body2" className="mui-v6-catalog__section-meta">
                {items.length} component{items.length === 1 ? '' : 's'}
              </Typography>
            </div>

            <div className="mui-v6-catalog__grid">
              {items.map((item) => (
                <article key={`${item.category}-${item.name}`} className="mui-v6-catalog__card">
                  <div className="mui-v6-catalog__card-top">
                    <Typography variant="h6" className="mui-v6-catalog__card-title">
                      {item.name}
                    </Typography>
                    <div className="mui-v6-catalog__chips">
                      <Chip
                        label={item.guideline}
                        size="small"
                        className={`mui-v6-catalog__chip mui-v6-catalog__chip--guideline`}
                      />
                      <Chip
                        label={supportCopy[item.ravenSupport]}
                        size="small"
                        className={`mui-v6-catalog__chip mui-v6-catalog__chip--${item.ravenSupport}`}
                      />
                    </div>
                  </div>

                  <div className="mui-v6-catalog__meta">
                    <span className="mui-v6-catalog__meta-label">Raven mapping</span>
                    <Typography variant="body2">{item.ravenEquivalent}</Typography>
                  </div>

                  <Typography variant="body2" className="mui-v6-catalog__notes">
                    {item.notes}
                  </Typography>

                  <div className="mui-v6-catalog__footer">
                    <Link href={item.docsUrl} target="_blank" rel="noreferrer">
                      MUI docs
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

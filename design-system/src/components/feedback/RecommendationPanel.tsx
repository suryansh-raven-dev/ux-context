import { useId, useState, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreRounded';

import './RecommendationPanel.css';

export type RecommendationSection = {
  icon: ReactNode;
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

export type RecommendationPanelProps = {
  incidentId: string;
  sections: RecommendationSection[];
};

/**
 * Fixed recommendations panel with collapsible guidance sections for an incident.
 */
export function RecommendationPanel({ incidentId, sections }: RecommendationPanelProps) {
  const baseId = useId();
  const [open, setOpen] = useState(() => sections.map((s) => s.defaultOpen ?? false));

  return (
    <Box className="raven-rec-panel" component="aside" aria-label="Recommendations">
      <Box className="raven-rec-panel__header">
        <Typography variant="subtitle2" component="h2" id={`${baseId}-panel-title`}>
          Incident ID: {incidentId}
        </Typography>
      </Box>
      <Box
        className="raven-rec-panel__sections"
        role="presentation"
        aria-labelledby={`${baseId}-panel-title`}
      >
        {sections.map((section, index) => {
          const sectionOpen = open[index] ?? false;
          const headerId = `${baseId}-section-${index}-header`;
          const regionId = `${baseId}-section-${index}-region`;

          return (
            <Box key={`${section.title}-${index}`} className="raven-rec-panel__section">
              <Box
                component="button"
                type="button"
                id={headerId}
                className="raven-rec-panel__section-header"
                aria-expanded={sectionOpen}
                aria-controls={regionId}
                onClick={() =>
                  setOpen((prev) => {
                    const next = [...prev];
                    next[index] = !next[index];
                    return next;
                  })
                }
              >
                <Box className="raven-rec-panel__section-header-main" aria-hidden>
                  {section.icon}
                </Box>
                <Typography variant="body2" component="span" sx={{ flex: 1, textAlign: 'left' }}>
                  {section.title}
                </Typography>
                <ExpandMoreIcon
                  fontSize="small"
                  aria-hidden
                  sx={{
                    flexShrink: 0,
                    transform: sectionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: (theme) => theme.transitions.create('transform'),
                    color: 'text.secondary',
                  }}
                />
              </Box>
              <Collapse in={sectionOpen}>
                <Box
                  id={regionId}
                  role="region"
                  aria-labelledby={headerId}
                  className="raven-rec-panel__section-body"
                >
                  {section.children}
                </Box>
              </Collapse>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import './RavenAccordion.css';

export interface RavenAccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  defaultExpanded?: boolean;
}

export interface RavenAccordionProps {
  items: RavenAccordionItem[];
  exclusive?: boolean;
}

export const RavenAccordion: React.FC<RavenAccordionProps> = ({ items, exclusive }) => {
  const [expanded, setExpanded] = React.useState<string | false>(
    items.find((i) => i.defaultExpanded)?.id || false
  );

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    if (exclusive) {
      setExpanded(isExpanded ? panel : false);
    }
  };

  return (
    <div className="raven-accordion">
      {items.map((item) => (
        <Accordion
          key={item.id}
          expanded={exclusive ? expanded === item.id : undefined}
          defaultExpanded={!exclusive ? item.defaultExpanded : undefined}
          onChange={exclusive ? handleChange(item.id) : undefined}
          className="raven-accordion__item"
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body1" fontWeight={600}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

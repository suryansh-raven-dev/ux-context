import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreRounded';
import Typography from '@mui/material/Typography';

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

const rootSx = {
  fontFamily: '"Source Sans 3", sans-serif',
};

const itemSx = {
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: '8px',
  mb: 1,
  boxShadow: 'none',
  '&::before': { display: 'none' },
  '&.Mui-expanded': { mb: 1 },
  '& .MuiAccordionSummary-root': {
    fontFamily: '"Source Sans 3", sans-serif',
    '&:hover': { backgroundColor: 'purple.100' },
  },
  '& .MuiAccordionSummary-expandIconWrapper': { color: 'primary.main' },
  '& .MuiAccordionDetails-root': {
    fontFamily: '"Source Sans 3", sans-serif',
    borderTop: '1px solid',
    borderColor: 'divider',
  },
};

const summarySx = {
  minHeight: 48,
  '&.Mui-expanded': { minHeight: 48 },
};

const summaryContentSx = {
  margin: '12px 0',
  '&.Mui-expanded': { margin: '12px 0' },
};

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
    <Box sx={rootSx}>
      {items.map((item) => (
        <Accordion
          key={item.id}
          expanded={exclusive ? expanded === item.id : undefined}
          defaultExpanded={!exclusive ? item.defaultExpanded : undefined}
          onChange={exclusive ? handleChange(item.id) : undefined}
          sx={itemSx}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            slotProps={{ content: { sx: summaryContentSx } }}
            sx={summarySx}
          >
            <Typography variant="body1" fontWeight={600}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

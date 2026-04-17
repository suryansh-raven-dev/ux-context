import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CitationCard } from '../CitationCard/CitationCard';

export type CitationStripItem = {
  id: string;
  title: string;
  context?: string;
};

export type CitationStripProps = {
  items: CitationStripItem[];
  heading?: string;
  onSelect?: (id: string) => void;
};

export function CitationStrip({ items, heading = 'Sources', onSelect }: CitationStripProps) {
  const deduped = Array.from(new Map(items.map((i) => [i.id, i])).values());
  if (deduped.length === 0) return null;
  return (
    <Box sx={{ mt: 1.5 }}>
      <Typography
        variant="caption"
        sx={{ display: 'block', color: 'text.secondary', fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase', mb: 1 }}
      >
        {heading}
      </Typography>
      <Stack spacing={1}>
        {deduped.map((item, idx) => (
          <CitationCard
            key={item.id}
            index={idx + 1}
            title={item.title}
            context={item.context}
            onSelect={onSelect ? () => onSelect(item.id) : undefined}
          />
        ))}
      </Stack>
    </Box>
  );
}

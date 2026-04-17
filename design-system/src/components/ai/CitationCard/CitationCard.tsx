import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import DescriptionRounded from '@mui/icons-material/DescriptionRounded';
import type { ReactNode } from 'react';

export type CitationCardProps = {
  /** Short source title (file name, doc name, page title). */
  title: string;
  /** Optional snippet of matched context. Truncated to 2 lines. */
  context?: string;
  /** Optional source-type icon. Defaults to a document glyph. */
  icon?: ReactNode;
  /** Optional ordinal shown as [1], [2], etc. */
  index?: number;
  /** Called when the card is activated (click or Enter/Space). */
  onSelect?: () => void;
};

export function CitationCard({ title, context, icon, index, onSelect }: CitationCardProps) {
  const content = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1,
        p: 1.25,
        width: '100%',
        textAlign: 'left',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        transition: 'border-color 150ms, box-shadow 150ms',
        '&:hover': { borderColor: 'primary.main' },
      }}
    >
      <Box sx={{ color: 'text.secondary', mt: '2px', display: 'flex' }} aria-hidden>
        {icon ?? <DescriptionRounded fontSize="small" />}
      </Box>
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, color: 'text.primary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {index != null && (
            <Box component="span" sx={{ color: 'primary.main', mr: 0.5 }}>
              [{index}]
            </Box>
          )}
          {title}
        </Typography>
        {context && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {context}
          </Typography>
        )}
      </Box>
    </Box>
  );

  if (!onSelect) return content;
  return (
    <ButtonBase
      onClick={onSelect}
      aria-label={`Open citation ${title}`}
      sx={{ width: '100%', borderRadius: 2, display: 'block', '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: 2 } }}
    >
      {content}
    </ButtonBase>
  );
}

import Box from '@mui/material/Box';
import { categoryColors, type CategoryKey } from '../../../tokens/tokens';

export type CategoryDotSize = 'sm' | 'md' | 'lg';

export type CategoryDotProps = {
  /** Plant/section identifier. MUST resolve from token registry — no arbitrary color overrides. */
  category: CategoryKey;
  size?: CategoryDotSize;
  /** Accessible label. Required when the dot is not accompanied by a text label. */
  label?: string;
};

const SIZE: Record<CategoryDotSize, number> = { sm: 8, md: 10, lg: 12 };

export function CategoryDot({ category, size = 'md', label }: CategoryDotProps) {
  const color = categoryColors[category];
  const dim = SIZE[size];
  return (
    <Box
      role="img"
      aria-label={label ?? `Category ${category}`}
      sx={{
        display: 'inline-block',
        width: dim,
        height: dim,
        borderRadius: '50%',
        bgcolor: color,
        flexShrink: 0,
      }}
    />
  );
}

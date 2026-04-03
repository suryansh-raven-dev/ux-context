import Typography, { type TypographyProps } from '@mui/material/Typography';

import './GradientTitle.css';

export type GradientTitleProps = TypographyProps;

/**
 * Centered h4 title with purple gradient fill (background-clip: text).
 */
export function GradientTitle({ className, ...rest }: GradientTitleProps) {
  return (
    <Typography
      variant="h4"
      component="div"
      role="heading"
      aria-level={1}
      align="center"
      className={['raven-gradient-title', className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
}

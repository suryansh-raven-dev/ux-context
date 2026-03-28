import React from 'react';
import Rating, { RatingProps } from '@mui/material/Rating';

export interface RavenRatingProps extends RatingProps {}

export const RavenRating: React.FC<RavenRatingProps> = (props) => (
  <Rating {...props} />
);

export { Rating };
export type { RatingProps };

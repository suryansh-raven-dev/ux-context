import React from 'react';
import Skeleton, { SkeletonProps } from '@mui/material/Skeleton';
import './RavenSkeleton.css';

export const RavenSkeleton: React.FC<SkeletonProps> = ({ className, ...props }) => (
  <Skeleton className={`raven-skeleton ${className || ''}`} {...props} />
);

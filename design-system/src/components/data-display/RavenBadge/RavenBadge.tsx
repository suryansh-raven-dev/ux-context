import React from 'react';

import Badge, { BadgeProps } from '@mui/material/Badge';

import './RavenBadge.css';

export const RavenBadge: React.FC<BadgeProps> = ({ className, ...props }) => (
  <Badge className={`raven-badge ${className || ''}`.trim()} {...props} />
);

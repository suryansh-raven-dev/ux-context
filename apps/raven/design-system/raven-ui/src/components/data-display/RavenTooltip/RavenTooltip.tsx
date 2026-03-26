import React from 'react';

import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

import './RavenTooltip.css';

export const RavenTooltip: React.FC<TooltipProps> = ({
  className,
  ...props
}) => (
  <Tooltip
    classes={{ tooltip: `raven-tooltip ${className || ''}`.trim() }}
    {...props}
  />
);

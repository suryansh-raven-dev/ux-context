import React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './RavenLinearProgress.css';

export interface RavenLinearProgressProps extends LinearProgressProps {
  showLabel?: boolean;
}

export const RavenLinearProgress: React.FC<RavenLinearProgressProps> = ({ showLabel, value, ...props }) => (
  <Box className="raven-linear-progress">
    <LinearProgress value={value} {...props} />
    {showLabel && value !== undefined && (
      <Typography variant="caption" className="raven-linear-progress__label">{`${Math.round(value)}%`}</Typography>
    )}
  </Box>
);

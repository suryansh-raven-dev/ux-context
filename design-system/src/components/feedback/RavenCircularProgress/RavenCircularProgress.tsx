import React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './RavenCircularProgress.css';

export interface RavenCircularProgressProps extends CircularProgressProps {
  showLabel?: boolean;
}

export const RavenCircularProgress: React.FC<RavenCircularProgressProps> = ({ showLabel, value, ...props }) => (
  <Box className="raven-circular-progress">
    <CircularProgress value={value} {...props} />
    {showLabel && value !== undefined && (
      <Typography variant="caption" className="raven-circular-progress__label">{`${Math.round(value)}%`}</Typography>
    )}
  </Box>
);

import React from 'react';

import Divider, { DividerProps } from '@mui/material/Divider';

import './RavenDivider.css';

export interface RavenDividerProps extends DividerProps {
  label?: string;
}

export const RavenDivider: React.FC<RavenDividerProps> = ({ label, className, ...props }) => (
  <Divider className={`raven-divider ${className || ''}`.trim()} {...props}>
    {label}
  </Divider>
);

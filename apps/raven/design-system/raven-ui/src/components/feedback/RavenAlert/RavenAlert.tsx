import React from 'react';
import Alert, { AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './RavenAlert.css';

export interface RavenAlertProps extends AlertProps {
  title?: string;
}

export const RavenAlert: React.FC<RavenAlertProps> = ({ title, children, className, ...props }) => (
  <Alert className={`raven-alert ${className || ''}`} {...props}>
    {title && <AlertTitle>{title}</AlertTitle>}
    {children}
  </Alert>
);

import React from 'react';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './RavenSnackbar.css';

export interface RavenSnackbarProps extends Omit<SnackbarProps, 'children'> {
  severity?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  onClose?: () => void;
}

export const RavenSnackbar: React.FC<RavenSnackbarProps> = ({ severity = 'info', message, onClose, ...props }) => (
  <Snackbar className="raven-snackbar" autoHideDuration={6000} onClose={onClose} {...props}>
    <Alert severity={severity} onClose={onClose} className="raven-snackbar__alert">
      {message}
    </Alert>
  </Snackbar>
);

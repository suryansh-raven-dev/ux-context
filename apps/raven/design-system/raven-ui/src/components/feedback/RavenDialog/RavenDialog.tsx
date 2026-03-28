import React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/CloseRounded';
import './RavenDialog.css';

export interface RavenDialogProps extends Omit<DialogProps, 'title'> {
  title?: string;
  actions?: React.ReactNode;
  onClose?: () => void;
}

export const RavenDialog: React.FC<RavenDialogProps> = ({ title, actions, onClose, children, className, ...props }) => (
  <Dialog className={`raven-dialog ${className || ''}`} onClose={onClose} {...props}>
    {title && (
      <DialogTitle className="raven-dialog__title">
        {title}
        {onClose && (
          <IconButton aria-label="close" onClick={onClose} className="raven-dialog__close">
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
    )}
    <DialogContent className="raven-dialog__content">{children}</DialogContent>
    {actions && <DialogActions className="raven-dialog__actions">{actions}</DialogActions>}
  </Dialog>
);

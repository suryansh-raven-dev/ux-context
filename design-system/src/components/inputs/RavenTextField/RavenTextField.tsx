import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import './RavenTextField.css';

export const RavenTextField: React.FC<TextFieldProps> = (props) => (
  <TextField
    className={`raven-text-field ${props.className || ''}`}
    {...props}
  />
);

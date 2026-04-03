import React from 'react';

import Link, { LinkProps } from '@mui/material/Link';

import './RavenLink.css';

export const RavenLink: React.FC<LinkProps> = ({ className, ...props }) => (
  <Link className={`raven-link ${className || ''}`.trim()} {...props} />
);

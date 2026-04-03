import React from 'react';

import Pagination, { PaginationProps } from '@mui/material/Pagination';

import './RavenPagination.css';

export const RavenPagination: React.FC<PaginationProps> = ({ className, ...props }) => (
  <Pagination className={`raven-pagination ${className || ''}`.trim()} {...props} />
);

import React from 'react';
import { muiV6Catalog } from '../../catalog/muiV6Catalog';
import { ComponentReference } from './ComponentReference';

const item = muiV6Catalog.find((c) => c.name === 'Breadcrumbs')!;

export default {
  title: 'Components/Navigation/Breadcrumbs',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const Reference = {
  tags: ['!dev'],
  name: 'Overview',
  render: () => <ComponentReference item={item} />,
};

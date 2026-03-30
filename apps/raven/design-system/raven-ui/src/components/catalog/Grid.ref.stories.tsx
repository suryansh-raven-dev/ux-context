import React from 'react';
import { muiV6Catalog } from '../../catalog/muiV6Catalog';
import { ComponentReference } from './ComponentReference';

const item = muiV6Catalog.find((c) => c.name === 'Grid')!;

export default {
  title: 'Components/Layout',
  parameters: { layout: 'centered' },
};

export const Grid = {
  render: () => <ComponentReference item={item} />,
};

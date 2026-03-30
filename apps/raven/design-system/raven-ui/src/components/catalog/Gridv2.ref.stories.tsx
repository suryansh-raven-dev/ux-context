import React from 'react';
import { muiV6Catalog } from '../../catalog/muiV6Catalog';
import { ComponentReference } from './ComponentReference';

const item = muiV6Catalog.find((c) => c.name === 'Grid v2')!;

export default {
  title: 'Components/Layout',
  parameters: { layout: 'centered' },
};

export const GridV2 = {
  render: () => <ComponentReference item={item} />,
};

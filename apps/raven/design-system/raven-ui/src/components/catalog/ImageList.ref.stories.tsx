import React from 'react';
import { muiV6Catalog } from '../../catalog/muiV6Catalog';
import { ComponentReference } from './ComponentReference';

const item = muiV6Catalog.find((c) => c.name === 'Image List')!;

export default {
  title: 'Components/Layout/Image List',
  parameters: { layout: 'centered' },
};

export const Docs = {
  name: 'Overview',
  render: () => <ComponentReference item={item} />,
};

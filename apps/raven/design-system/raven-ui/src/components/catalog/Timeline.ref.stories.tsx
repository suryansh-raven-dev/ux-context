import React from 'react';
import { muiV6Catalog } from '../../catalog/muiV6Catalog';
import { ComponentReference } from './ComponentReference';

const item = muiV6Catalog.find((c) => c.name === 'Timeline')!;

export default {
  title: 'Components/Lab/Timeline',
  parameters: { layout: 'centered' },
};

export const Docs = {
  name: 'Overview',
  render: () => <ComponentReference item={item} />,
};

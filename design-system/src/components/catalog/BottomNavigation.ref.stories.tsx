import React from 'react';
import { muiV6Catalog } from '../../catalog/muiV6Catalog';
import { ComponentReference } from './ComponentReference';

const item = muiV6Catalog.find((c) => c.name === 'Bottom Navigation')!;

export default {
  title: 'Components/Navigation/Bottom Navigation',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const Docs = {
  tags: ['!dev'],
  name: 'Overview',
  render: () => <ComponentReference item={item} />,
};

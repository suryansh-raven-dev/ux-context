import React from 'react';
import { muiV6Catalog } from '../../catalog/muiV6Catalog';
import { ComponentReference } from './ComponentReference';

const item = muiV6Catalog.find((c) => c.name === 'Popover')!;

export default {
  title: 'Components/Utils/Popover',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const Docs = {
  tags: ['!dev'],
  name: 'Overview',
  render: () => <ComponentReference item={item} />,
};

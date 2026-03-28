import React from 'react';
import { muiV6Catalog } from '../../catalog/muiV6Catalog';
import { ComponentReference } from './ComponentReference';

const item = muiV6Catalog.find((c) => c.name === 'Textarea Autosize')!;

export default {
  title: 'Components/Utils/Textarea Autosize',
  parameters: { layout: 'centered' },
};

export const Docs = {
  name: 'Overview',
  render: () => <ComponentReference item={item} />,
};

import React from 'react';
import { muiV6Catalog } from '../../catalog/muiV6Catalog';
import { ComponentReference } from './ComponentReference';

const item = muiV6Catalog.find((c) => c.name === 'Backdrop')!;

export default {
  title: 'Components/Feedback',
  parameters: { layout: 'centered' },
};

export const Backdrop = {
  name: 'Backdrop',
  render: () => <ComponentReference item={item} />,
};

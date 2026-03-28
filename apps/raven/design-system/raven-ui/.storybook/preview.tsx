import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ravenNearMissTheme } from '../src/theme/ravenNearMissTheme';
import '../src/global.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={ravenNearMissTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: {},
    docs: {
      toc: {
        headingSelector: 'h2, h3',
        title: 'Contents',
      },
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          'Components',
          [
            'All Components',
            'Inputs',
            [
              'Autocomplete',
              'Buttons',
              'Checkbox',
              'Radio Group',
              'Select',
              'Switch',
              'Text Field',
            ],
            'Data Display',
            [
              'Avatar',
              'Badge',
              'Chip',
              'Divider',
              'List',
              'Table',
              'Tooltip',
              'Typography',
            ],
            'Feedback',
            [
              'Alert',
              'Dialog',
              'Circular Progress',
              'Linear Progress',
              'Skeleton',
              'Snackbar',
            ],
            'Surfaces',
            ['Accordion', 'Card'],
            'Navigation',
            [
              'Breadcrumbs',
              'Link',
              'Menu',
              'Pagination',
              'Stepper',
              'Tabs',
            ],
          ],
          'Layout',
          'Navigation',
          'Data Display',
          'Feedback',
          'Forms',
          'Chat',
          'Actions',
          'Brand',
        ],
      },
    },
  },
};

export default preview;

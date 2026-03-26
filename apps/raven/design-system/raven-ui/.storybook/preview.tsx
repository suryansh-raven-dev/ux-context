import React from 'react';
import type { Preview } from '@storybook/react';
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
  },
};

export default preview;

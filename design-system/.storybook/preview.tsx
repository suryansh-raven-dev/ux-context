import type { Preview } from '@storybook/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '../src/global.css';
import { ravenNearMissTheme } from '../src/theme/ravenNearMissTheme';

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
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      source: {
        type: 'code',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {},
  },
};

export default preview;

import type { Preview } from '@storybook/react';
import { CssBaseline, ThemeProvider, type Theme } from '@mui/material';
import '../src/global.css';
import { ravenNearMissTheme } from '../src/theme/ravenNearMissTheme';
import { ravenAdminLightTheme, ravenAdminDarkTheme } from '../src/theme/ravenAdminTheme';

const THEME_MAP: Record<string, Theme> = {
  'near-miss': ravenNearMissTheme,
  'admin-light': ravenAdminLightTheme,
  'admin-dark': ravenAdminDarkTheme,
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Raven theme variant',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'admin-light', title: 'Admin Light' },
          { value: 'admin-dark', title: 'Admin Dark' },
          { value: 'near-miss', title: 'Near-Miss (legacy)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'admin-light',
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = THEME_MAP[context.globals.theme] || ravenAdminLightTheme;
      const isDark = context.globals.theme === 'admin-dark';
      return (
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          <div style={{ backgroundColor: isDark ? '#0E171B' : undefined, minHeight: '100vh' }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
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

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ravenNearMissTheme } from './theme/ravenNearMissTheme';
import './global.css';

function App() {
  return (
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      <div style={{ padding: 32 }}>
        <h1>Raven Design System</h1>
        <p>Run <code>npm run storybook</code> to view the component library.</p>
      </div>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

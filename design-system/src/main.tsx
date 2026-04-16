import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { ravenAdminTheme } from './theme/ravenAdminTheme';
import './global.css';

function App() {
  return (
    <ThemeProvider theme={ravenAdminTheme}>
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

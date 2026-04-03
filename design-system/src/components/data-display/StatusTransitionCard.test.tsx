import type { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';
import { StatusTransitionCard } from './StatusTransitionCard';

function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={ravenNearMissTheme}>{ui}</ThemeProvider>);
}

describe('StatusTransitionCard', () => {
  it('renders from and to chips', () => {
    renderWithTheme(<StatusTransitionCard fromStatus="Open" toStatus="Closed" />);

    expect(screen.getByText('Open')).toBeInTheDocument();
    expect(screen.getByText('Closed')).toBeInTheDocument();
    expect(screen.getByRole('status', { name: /status updated from open to closed/i })).toBeInTheDocument();
  });
});

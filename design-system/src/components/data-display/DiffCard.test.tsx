import type { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';
import { DiffCard } from './DiffCard';

function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={ravenNearMissTheme}>{ui}</ThemeProvider>);
}

describe('DiffCard', () => {
  it('renders updates with old and new values', () => {
    renderWithTheme(
      <DiffCard
        type="updates"
        changes={[{ field: 'Status', oldValue: 'Open', newValue: 'Closed' }]}
      />
    );

    expect(screen.getByRole('region', { name: /updates changes/i })).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Open')).toBeInTheDocument();
    expect(screen.getByText('Closed')).toBeInTheDocument();
  });

  it('renders added changes', () => {
    renderWithTheme(<DiffCard type="added" changes={[{ field: 'Note', newValue: 'Hello' }]} />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('renders removed changes with strikethrough styling', () => {
    renderWithTheme(
      <DiffCard type="removed" changes={[{ field: 'ID', oldValue: 'X-1' }]} />
    );

    const oldEl = screen.getByText('X-1');
    expect(oldEl).toHaveClass('raven-diff-card__old-value');
  });
});

import type { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { OrgSwitchDropdown } from './OrgSwitchDropdown';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

describe('OrgSwitchDropdown', () => {
  it('renders initials, name, and optional role', () => {
    renderWithTheme(
      <OrgSwitchDropdown initials="AB" name="Alpha Beta" role="Admin" />
    );

    expect(screen.getByText('AB')).toBeInTheDocument();
    expect(screen.getByText('Alpha Beta')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  it('exposes button semantics and aria-haspopup', () => {
    renderWithTheme(<OrgSwitchDropdown initials="X" name="Org Name" />);

    const btn = screen.getByRole('button', { name: /organization: org name/i });
    expect(btn).toHaveAttribute('aria-haspopup', 'true');
  });
});

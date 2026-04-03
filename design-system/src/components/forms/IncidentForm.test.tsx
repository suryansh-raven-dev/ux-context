import type { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { IncidentForm } from './IncidentForm';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

describe('IncidentForm', () => {
  it('renders three section headings', () => {
    renderWithTheme(<IncidentForm />);

    expect(screen.getByRole('heading', { name: /report information/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /incident details/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /reporting as/i })).toBeInTheDocument();
  });

  it('exposes labeled fields for accessibility', () => {
    renderWithTheme(<IncidentForm />);

    expect(screen.getByLabelText(/incident id/i)).toBeDisabled();
    expect(screen.getByLabelText(/date & time/i)).toBeInTheDocument();
    expect(screen.getByText(/department/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/exact location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/short description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/immediate action taken/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/reported on/i)).toBeInTheDocument();
  });

  it('updates reporting option selection', async () => {
    const user = userEvent.setup();
    renderWithTheme(<IncidentForm />);

    await user.click(screen.getByRole('radio', { name: /someone else/i }));
    expect(screen.getByRole('radio', { name: /someone else/i })).toBeChecked();
  });
});

import type { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';
import { StatusStepper } from './StatusStepper';

function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={ravenNearMissTheme}>{ui}</ThemeProvider>);
}

describe('StatusStepper', () => {
  it('renders all step labels', () => {
    renderWithTheme(
      <StatusStepper
        steps={[
          { label: 'One', completed: true },
          { label: 'Two', active: true },
        ]}
      />
    );

    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
  });
});

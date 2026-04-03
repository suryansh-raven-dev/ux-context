import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { ExportButton } from './ExportButton';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

describe('ExportButton', () => {
  it('opens the menu and calls onExport with the selected format', async () => {
    const user = userEvent.setup();
    const onExport = vi.fn();

    renderWithTheme(<ExportButton onExport={onExport} />);

    const button = screen.getByRole('button', { name: /export/i });
    expect(button).toHaveAttribute('aria-haspopup', 'true');
    expect(button).toHaveAttribute('aria-expanded', 'false');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');

    await user.click(screen.getByRole('menuitem', { name: 'CSV' }));
    expect(onExport).toHaveBeenCalledWith('csv');
  });

  it('calls onExport with pdf', async () => {
    const user = userEvent.setup();
    const onExport = vi.fn();

    renderWithTheme(<ExportButton onExport={onExport} />);

    await user.click(screen.getByRole('button', { name: /export/i }));
    await user.click(screen.getByRole('menuitem', { name: 'PDF' }));

    expect(onExport).toHaveBeenCalledWith('pdf');
  });
});

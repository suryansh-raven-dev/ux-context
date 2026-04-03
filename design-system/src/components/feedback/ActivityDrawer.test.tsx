import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';
import { ActivityDrawer } from './ActivityDrawer';

function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={ravenNearMissTheme}>{ui}</ThemeProvider>);
}

describe('ActivityDrawer', () => {
  it('renders the title and complementary region with children', () => {
    renderWithTheme(
      <ActivityDrawer open onClose={() => {}}>
        <p>Activity line one</p>
      </ActivityDrawer>
    );

    expect(screen.getByRole('heading', { name: 'Incident Activity' })).toBeInTheDocument();
    expect(screen.getByRole('complementary')).toHaveTextContent('Activity line one');
  });

  it('invokes onClose when the close control is activated', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    renderWithTheme(
      <ActivityDrawer open onClose={onClose}>
        <span>Content</span>
      </ActivityDrawer>
    );

    await user.click(screen.getByRole('button', { name: 'Close activity drawer' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

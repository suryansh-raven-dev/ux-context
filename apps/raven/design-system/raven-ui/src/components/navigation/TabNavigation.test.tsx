import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { TabNavigation } from './TabNavigation';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

describe('TabNavigation', () => {
  it('renders tab labels and optional counts', () => {
    renderWithTheme(
      <TabNavigation
        tabs={[
          { label: 'Open', count: 5 },
          { label: 'Done' },
        ]}
        activeIndex={0}
        onChange={() => {}}
      />
    );

    expect(screen.getByRole('tab', { name: /open \(5\)/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /^done$/i })).toBeInTheDocument();
  });

  it('calls onChange with the selected index', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(
      <TabNavigation
        tabs={[{ label: 'A' }, { label: 'B' }]}
        activeIndex={0}
        onChange={onChange}
      />
    );

    await user.click(screen.getByRole('tab', { name: /^b$/i }));

    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('exposes a tab list with an accessible name', () => {
    renderWithTheme(
      <TabNavigation tabs={[{ label: 'One' }]} activeIndex={0} onChange={() => {}} />
    );

    expect(screen.getByRole('tablist', { name: /navigation tabs/i })).toBeInTheDocument();
  });
});

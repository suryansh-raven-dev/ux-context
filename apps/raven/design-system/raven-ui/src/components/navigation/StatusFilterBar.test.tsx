import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { StatusFilterBar } from './StatusFilterBar';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

describe('StatusFilterBar', () => {
  it('renders filters as a radiogroup', () => {
    renderWithTheme(
      <StatusFilterBar
        filters={[
          { label: 'All', count: 10 },
          { label: 'Open', count: 2 },
        ]}
        activeIndex={0}
        onChange={() => {}}
      />
    );

    expect(screen.getByRole('radiogroup', { name: /filter by status/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /all \(10\)/i })).toHaveAttribute(
      'aria-checked',
      'true'
    );
    expect(screen.getByRole('radio', { name: /open \(2\)/i })).toHaveAttribute(
      'aria-checked',
      'false'
    );
  });

  it('calls onChange when a filter is activated', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(
      <StatusFilterBar
        filters={[
          { label: 'All', count: 10 },
          { label: 'Open', count: 2 },
        ]}
        activeIndex={0}
        onChange={onChange}
      />
    );

    await user.click(screen.getByRole('radio', { name: /open \(2\)/i }));

    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('moves selection with arrow keys', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(
      <StatusFilterBar
        filters={[
          { label: 'A', count: 1 },
          { label: 'B', count: 2 },
        ]}
        activeIndex={0}
        onChange={onChange}
      />
    );

    const first = screen.getByRole('radio', { name: /a \(1\)/i });
    first.focus();
    await user.keyboard('{ArrowRight}');

    expect(onChange).toHaveBeenCalledWith(1);
  });
});

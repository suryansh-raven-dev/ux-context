import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { ViewToggle } from './ViewToggle';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

describe('ViewToggle', () => {
  it('renders options as a radiogroup', () => {
    renderWithTheme(
      <ViewToggle
        options={[
          { label: 'List', value: 'list' },
          { label: 'Grid', value: 'grid' },
        ]}
        value="list"
        onChange={() => {}}
      />
    );

    expect(screen.getByRole('radiogroup', { name: /view mode/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /list/i })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: /grid/i })).toHaveAttribute('aria-checked', 'false');
  });

  it('calls onChange with the option value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(
      <ViewToggle
        options={[
          { label: 'List', value: 'list' },
          { label: 'Grid', value: 'grid' },
        ]}
        value="list"
        onChange={onChange}
      />
    );

    await user.click(screen.getByRole('radio', { name: /grid/i }));

    expect(onChange).toHaveBeenCalledWith('grid');
  });

  it('returns null when there are no options', () => {
    renderWithTheme(<ViewToggle options={[]} value="" onChange={() => {}} />);

    expect(screen.queryByRole('radiogroup')).not.toBeInTheDocument();
  });
});

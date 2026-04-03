import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { ActionButtonGroup } from './ActionButtonGroup';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

describe('ActionButtonGroup', () => {
  it('invokes callbacks for each action', async () => {
    const user = userEvent.setup();
    const onSaveDraft = vi.fn();
    const onClearAll = vi.fn();
    const onSubmit = vi.fn();

    renderWithTheme(
      <ActionButtonGroup
        onSaveDraft={onSaveDraft}
        onClearAll={onClearAll}
        onSubmit={onSubmit}
      />
    );

    await user.click(screen.getByRole('button', { name: /save as draft/i }));
    await user.click(screen.getByRole('button', { name: /clear all/i }));
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(onSaveDraft).toHaveBeenCalledTimes(1);
    expect(onClearAll).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('disables submit when submitDisabled is true', () => {
    renderWithTheme(
      <ActionButtonGroup onSaveDraft={() => {}} onClearAll={() => {}} onSubmit={() => {}} submitDisabled />
    );

    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
  });
});

import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { CommentInput } from './CommentInput';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

describe('CommentInput', () => {
  it('calls onChange when the user types', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(<CommentInput value="" onChange={onChange} onSubmit={() => {}} />);

    await user.type(screen.getByPlaceholderText(/describe the action/i), 'hello');
    expect(onChange).toHaveBeenCalled();
  });

  it('calls onSubmit when submit is activated with non-empty text', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    renderWithTheme(<CommentInput value="Note" onChange={() => {}} onSubmit={onSubmit} />);

    await user.click(screen.getByRole('button', { name: /submit comment/i }));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('disables submit when empty', () => {
    const onSubmit = vi.fn();

    renderWithTheme(<CommentInput value="   " onChange={() => {}} onSubmit={onSubmit} />);

    const submitBtn = screen.getByRole('button', { name: /submit comment/i });
    expect(submitBtn).toBeDisabled();
  });

  it('exposes an attach control with an accessible name', () => {
    renderWithTheme(<CommentInput value="" onChange={() => {}} onSubmit={() => {}} />);

    expect(screen.getByRole('button', { name: /attach file/i })).toBeInTheDocument();
  });
});

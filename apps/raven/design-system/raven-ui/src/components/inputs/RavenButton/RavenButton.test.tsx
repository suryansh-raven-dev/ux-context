import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteRounded';

import { ravenNearMissTheme } from '../../../theme/ravenNearMissTheme';

import { RavenButton, RavenIconButton } from './RavenButton';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
  );
}

describe('RavenButton', () => {
  it('renders with the correct text', () => {
    renderWithTheme(<RavenButton>Click me</RavenButton>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies the raven-button CSS class', () => {
    renderWithTheme(<RavenButton>Styled</RavenButton>);
    expect(screen.getByRole('button')).toHaveClass('raven-button');
  });

  it('merges custom className with raven-button', () => {
    renderWithTheme(<RavenButton className="custom">Test</RavenButton>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('raven-button');
    expect(btn).toHaveClass('custom');
  });

  it('fires onClick handler', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    renderWithTheme(<RavenButton onClick={onClick}>Press</RavenButton>);

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('does not fire onClick when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    renderWithTheme(
      <RavenButton disabled onClick={onClick}>
        Disabled
      </RavenButton>,
    );

    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders contained variant', () => {
    renderWithTheme(<RavenButton variant="contained">Go</RavenButton>);
    expect(screen.getByRole('button')).toHaveClass('MuiButton-contained');
  });

  it('renders outlined variant', () => {
    renderWithTheme(<RavenButton variant="outlined">Go</RavenButton>);
    expect(screen.getByRole('button')).toHaveClass('MuiButton-outlined');
  });

  it('renders text variant by default', () => {
    renderWithTheme(<RavenButton>Go</RavenButton>);
    expect(screen.getByRole('button')).toHaveClass('MuiButton-text');
  });

  it('renders as a link when href is provided', () => {
    renderWithTheme(<RavenButton href="/reports">Navigate</RavenButton>);
    expect(screen.getByRole('link', { name: /navigate/i })).toHaveAttribute(
      'href',
      '/reports',
    );
  });

  it('renders with a startIcon', () => {
    renderWithTheme(
      <RavenButton startIcon={<DeleteIcon data-testid="icon" />}>
        Delete
      </RavenButton>,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { rerender } = renderWithTheme(
      <RavenButton size="small">Small</RavenButton>,
    );
    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeSmall');

    rerender(
      <ThemeProvider theme={ravenNearMissTheme}>
        <CssBaseline />
        <RavenButton size="large">Large</RavenButton>
      </ThemeProvider>,
    );
    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeLarge');
  });
});

describe('RavenIconButton', () => {
  it('renders with icon content', () => {
    renderWithTheme(
      <RavenIconButton aria-label="delete">
        <DeleteIcon />
      </RavenIconButton>,
    );
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  it('applies raven-icon-button class', () => {
    renderWithTheme(
      <RavenIconButton aria-label="delete">
        <DeleteIcon />
      </RavenIconButton>,
    );
    expect(screen.getByRole('button')).toHaveClass('raven-icon-button');
  });

  it('shows spinner when loading', () => {
    renderWithTheme(
      <RavenIconButton aria-label="delete" loading>
        <DeleteIcon />
      </RavenIconButton>,
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('is disabled when loading', () => {
    renderWithTheme(
      <RavenIconButton aria-label="delete" loading>
        <DeleteIcon />
      </RavenIconButton>,
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('fires onClick when not loading', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    renderWithTheme(
      <RavenIconButton aria-label="delete" onClick={onClick}>
        <DeleteIcon />
      </RavenIconButton>,
    );

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });
});

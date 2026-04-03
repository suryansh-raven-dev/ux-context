import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { BreadcrumbNav } from './BreadcrumbNav';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

describe('BreadcrumbNav', () => {
  it('renders navigation with breadcrumb landmark', () => {
    renderWithTheme(
      <BreadcrumbNav
        parentLabel="Reports"
        currentId="NM-1"
        status="Draft"
        onBack={() => {}}
      />
    );

    expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument();
    expect(screen.getByText('NM-1')).toBeInTheDocument();
    expect(screen.getByText('Draft')).toBeInTheDocument();
  });

  it('calls onBack when the back control is activated', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();

    renderWithTheme(
      <BreadcrumbNav
        parentLabel="Reports"
        currentId="NM-1"
        status="Draft"
        onBack={onBack}
      />
    );

    await user.click(screen.getByRole('button', { name: /back to reports/i }));

    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('applies progress styling for In Progress status', () => {
    const { container } = renderWithTheme(
      <BreadcrumbNav
        parentLabel="Reports"
        currentId="NM-1"
        status="In Progress"
        onBack={() => {}}
      />
    );

    expect(container.querySelector('.raven-breadcrumb__status--progress')).toBeTruthy();
  });
});

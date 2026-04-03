import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MobileAppShell } from './MobileAppShell';

describe('MobileAppShell', () => {
  it('renders the title and children', () => {
    render(
      <MobileAppShell title="Dashboard">
        <p>Child content</p>
      </MobileAppShell>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Dashboard' })).toBeInTheDocument();
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('uses a main landmark for the content region', () => {
    render(
      <MobileAppShell title="Home">
        <span>Inside main</span>
      </MobileAppShell>
    );

    const main = screen.getByRole('main');
    expect(main).toHaveClass('raven-mobile-shell__content');
    expect(main).toContainElement(screen.getByText('Inside main'));
  });

  it('renders optional header actions', () => {
    render(
      <MobileAppShell
        title="Inbox"
        headerActions={
          <button type="button" data-testid="header-extra">
            Sync
          </button>
        }
      >
        <span>Body</span>
      </MobileAppShell>
    );

    expect(screen.getByTestId('header-extra')).toBeInTheDocument();
  });
});

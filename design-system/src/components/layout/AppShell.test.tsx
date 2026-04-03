import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { AppShell } from './AppShell';

describe('AppShell', () => {
  it('renders children in the main region', () => {
    render(
      <AppShell sidebar={<div>Nav</div>}>
        <p>Hello from main</p>
      </AppShell>
    );

    expect(screen.getByText('Hello from main')).toBeInTheDocument();
    expect(screen.getByRole('main')).toContainElement(screen.getByText('Hello from main'));
  });

  it('exposes navigation and main landmarks', () => {
    render(
      <AppShell sidebar={<span>Side</span>}>
        <span>Body</span>
      </AppShell>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});

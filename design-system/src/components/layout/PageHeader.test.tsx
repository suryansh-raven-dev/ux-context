import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
  it('renders the title', () => {
    render(<PageHeader title="Safety overview" />);

    expect(screen.getByRole('heading', { level: 1, name: 'Safety overview' })).toBeInTheDocument();
  });

  it('invokes onBack when the back button is used', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();

    render(<PageHeader title="Details" onBack={onBack} />);

    await user.click(screen.getByRole('button', { name: 'Go back' }));
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('renders actions in the actions slot', () => {
    render(
      <PageHeader
        title="List"
        actions={
          <button type="button" data-testid="extra-action">
            Filter
          </button>
        }
      />
    );

    expect(screen.getByTestId('extra-action')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toContainElement(screen.getByTestId('extra-action'));
  });
});

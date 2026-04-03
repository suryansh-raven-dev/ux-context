import type { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';
import { ActivityTimelineItem } from './ActivityTimelineItem';

function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={ravenNearMissTheme}>{ui}</ThemeProvider>);
}

const baseUser = {
  initials: 'AB',
  name: 'Alex Brown',
  role: 'Reviewer',
  avatarColor: '#E1BEE7',
};

describe('ActivityTimelineItem', () => {
  it('renders user line, timestamp, and action label', () => {
    renderWithTheme(
      <ActivityTimelineItem
        user={baseUser}
        timestamp="Today"
        actionLabel="Submitted report"
      />
    );

    expect(screen.getByText(/Alex Brown/)).toBeInTheDocument();
    expect(screen.getByText('(Reviewer)')).toBeInTheDocument();
    expect(screen.getByText('Today')).toBeInTheDocument();
    expect(screen.getByText('Submitted report')).toBeInTheDocument();
    expect(screen.getByLabelText('Alex Brown, Reviewer')).toBeInTheDocument();
  });

  it('toggles expanded content and updates aria-expanded', async () => {
    const user = userEvent.setup();

    renderWithTheme(
      <ActivityTimelineItem
        user={baseUser}
        timestamp="Today"
        actionLabel="Updated notes"
        expandedContent={<span>Extra detail</span>}
      />
    );

    const toggle = screen.getByRole('button', { name: 'Expand details' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(screen.getByText('Extra detail')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Collapse details' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });
});

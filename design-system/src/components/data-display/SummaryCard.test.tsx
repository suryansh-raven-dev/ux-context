import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';

import AssessmentIcon from '@mui/icons-material/AssessmentRounded';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';
import { SummaryCard } from './SummaryCard';

function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={ravenNearMissTheme}>{ui}</ThemeProvider>);
}

const baseProps = {
  icon: <AssessmentIcon titleAccess="" />,
  title: 'Test summary',
  stats: [
    { value: 10, label: 'Alpha', color: '#000' },
    { value: 20, label: 'Beta', color: '#111' },
  ],
  closureRate: { value: '80%', positive: true },
  departments: { count: 3, top: 'Safety' },
  trend: { value: '+5%', positive: true },
};

describe('SummaryCard', () => {
  it('renders title, stats, closure rate, and footer', () => {
    renderWithTheme(<SummaryCard {...baseProps} />);

    expect(screen.getByRole('heading', { name: 'Test summary' })).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getByText(/Closure rate:/)).toBeInTheDocument();
    expect(screen.getByText('80%')).toBeInTheDocument();
    expect(screen.getByText(/Across 3 departments/)).toBeInTheDocument();
    expect(screen.getByText('Safety')).toBeInTheDocument();
    expect(screen.getByText('+5%')).toBeInTheDocument();
  });

  it('calls onClick when card action area is activated', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    renderWithTheme(<SummaryCard {...baseProps} onClick={onClick} />);

    await user.click(screen.getByRole('button', { name: /open test summary/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

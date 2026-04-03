import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SideNavigation } from './SideNavigation';

describe('SideNavigation', () => {
  it('renders primary nav items', () => {
    render(<SideNavigation activePath="/reports" onNavigate={() => {}} />);

    expect(screen.getByText('Org Logo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /report incident/i })).toBeInTheDocument();
    expect(screen.getByText('Incidents')).toBeInTheDocument();
    expect(screen.getByText('Reports')).toBeInTheDocument();
    expect(screen.getByText('Investigations')).toBeInTheDocument();
    expect(screen.getByText('Recommendations')).toBeInTheDocument();
    expect(screen.getByText('Analysis')).toBeInTheDocument();
    expect(screen.getByText(/powered by raven/i)).toBeInTheDocument();
  });

  it('calls onNavigate with the target path', async () => {
    const user = userEvent.setup();
    const onNavigate = vi.fn();

    render(<SideNavigation activePath="/reports" onNavigate={onNavigate} />);

    await user.click(screen.getByText('Analysis'));
    expect(onNavigate).toHaveBeenCalledWith('/analysis');

    await user.click(screen.getByRole('button', { name: /report incident/i }));
    expect(onNavigate).toHaveBeenCalledWith('/report-incident');
  });

  it('sets aria-current on the active route and aria-expanded on the incidents group', () => {
    render(<SideNavigation activePath="/analysis" onNavigate={() => {}} />);

    const analysis = screen.getByText('Analysis').closest('[role="button"]') as HTMLElement;
    expect(analysis).toHaveAttribute('aria-current', 'page');

    const incidentsTrigger = screen.getByText('Incidents').closest('[role="button"]') as HTMLElement;
    expect(incidentsTrigger).toHaveAttribute('aria-expanded');
  });
});

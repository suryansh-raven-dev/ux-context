import type { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';
import { RecommendationPanel } from './RecommendationPanel';

function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={ravenNearMissTheme}>{ui}</ThemeProvider>);
}

describe('RecommendationPanel', () => {
  it('shows the incident id and section titles', () => {
    renderWithTheme(
      <RecommendationPanel
        incidentId="NM-1"
        sections={[
          { icon: <span data-testid="icon-a" />, title: 'Section A', children: <p>Alpha</p> },
          { icon: <span data-testid="icon-b" />, title: 'Section B', children: <p>Beta</p> },
        ]}
      />
    );

    expect(screen.getByText('Incident ID: NM-1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Section A' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Section B' })).toBeInTheDocument();
  });

  it('links section headers to regions with aria-controls and toggles aria-expanded', async () => {
    const user = userEvent.setup();

    renderWithTheme(
      <RecommendationPanel
        incidentId="NM-2"
        sections={[
          {
            icon: <span aria-hidden />,
            title: 'First',
            defaultOpen: false,
            children: <p>First body</p>,
          },
        ]}
      />
    );

    const header = screen.getByRole('button', { name: 'First' });
    expect(header).toHaveAttribute('aria-expanded', 'false');
    const controls = header.getAttribute('aria-controls');
    expect(controls).toBeTruthy();

    await user.click(header);
    expect(header).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById(controls!)).toHaveTextContent('First body');
  });
});

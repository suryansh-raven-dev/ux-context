import type { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../../theme/ravenNearMissTheme';
import { RavenAccordion } from './RavenAccordion';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
  );
}

describe('RavenAccordion', () => {
  it('keeps the same summary height spacing when expanded', async () => {
    const user = userEvent.setup();

    renderWithTheme(
      <RavenAccordion
        exclusive
        items={[
          {
            id: 'incident-details',
            title: 'Incident Details',
            content: <p>Incident body</p>,
          },
        ]}
      />,
    );

    const summary = screen.getByRole('button', { name: /incident details/i });
    const content = summary.querySelector('.MuiAccordionSummary-content');

    expect(summary).toHaveStyle('min-height: 48px');
    expect(content).toHaveStyle('margin: 12px 0');

    await user.click(summary);

    expect(summary).toHaveAttribute('aria-expanded', 'true');
    expect(summary).toHaveStyle('min-height: 48px');
    expect(content).toHaveStyle('margin: 12px 0');
  });
});

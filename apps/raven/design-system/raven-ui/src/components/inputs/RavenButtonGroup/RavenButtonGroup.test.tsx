import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';
import SaveIcon from '@mui/icons-material/SaveRounded';

import { ravenNearMissTheme } from '../../../theme/ravenNearMissTheme';
import { RavenButton } from '../RavenButton/RavenButton';
import { RavenButtonGroup } from './RavenButtonGroup';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
  );
}

describe('RavenButtonGroup', () => {
  it('renders buttons from the buttons prop and forwards clicks', async () => {
    const user = userEvent.setup();
    const onSecondClick = vi.fn();

    renderWithTheme(
      <RavenButtonGroup
        aria-label="Status actions"
        buttons={[
          { label: 'Draft' },
          { label: 'Review', onClick: onSecondClick },
          { label: 'Closed' },
        ]}
      />,
    );

    await user.click(screen.getByRole('button', { name: /review/i }));
    expect(onSecondClick).toHaveBeenCalledOnce();
  });

  it('applies the Raven class and default spacing token to the group root', () => {
    renderWithTheme(
      <RavenButtonGroup
        aria-label="Spacing group"
        buttons={[{ label: 'One' }, { label: 'Two' }]}
      />,
    );

    const group = screen.getByRole('group', { name: /spacing group/i });
    expect(group).toHaveClass('raven-button-group');
    expect(group).toHaveStyle('--raven-button-group-gap: 8px');
  });

  it('supports richer button props such as loading on individual items', () => {
    renderWithTheme(
      <RavenButtonGroup
        aria-label="Loading group"
        buttons={[
          { label: 'Submit' },
          {
            label: 'Save',
            loading: true,
            loadingPosition: 'start',
            startIcon: <SaveIcon />,
          },
        ]}
      />,
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save/i })).toBeDisabled();
  });

  it('renders custom children for advanced compositions', () => {
    renderWithTheme(
      <RavenButtonGroup
        aria-label="Advanced group"
        buttons={[{ label: 'Mapped button' }]}
      >
        <RavenButton>Primary action</RavenButton>
        <RavenButton>More</RavenButton>
      </RavenButtonGroup>,
    );

    expect(
      screen.getByRole('button', { name: /primary action/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^more$/i })).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /mapped button/i }),
    ).not.toBeInTheDocument();
  });
});

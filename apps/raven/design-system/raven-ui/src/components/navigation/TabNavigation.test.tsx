import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, CssBaseline } from '@mui/material';
import PhoneIcon from '@mui/icons-material/PhoneRounded';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { TabNavigation } from './TabNavigation';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

describe('TabNavigation', () => {
  it('renders tab labels and optional counts', () => {
    renderWithTheme(
      <TabNavigation
        tabs={[
          { label: 'Open', count: 5 },
          { label: 'Done' },
        ]}
        activeIndex={0}
        onChange={() => {}}
      />
    );

    expect(screen.getByRole('tab', { name: /open \(5\)/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /^done$/i })).toBeInTheDocument();
  });

  it('calls onChange with the selected index', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(
      <TabNavigation
        tabs={[{ label: 'A' }, { label: 'B' }]}
        activeIndex={0}
        onChange={onChange}
      />
    );

    await user.click(screen.getByRole('tab', { name: /^b$/i }));

    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('renders disabled tabs without allowing interaction', () => {
    const onChange = vi.fn();

    renderWithTheme(
      <TabNavigation
        tabs={[{ label: 'Open' }, { label: 'Review', disabled: true }, { label: 'Closed' }]}
        activeIndex={2}
        onChange={onChange}
      />
    );

    const disabledTab = screen.getByRole('tab', { name: /^review$/i });
    expect(disabledTab).toBeDisabled();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('exposes a tab list with an accessible name', () => {
    renderWithTheme(
      <TabNavigation tabs={[{ label: 'One' }]} activeIndex={0} onChange={() => {}} />
    );

    expect(screen.getByRole('tablist', { name: /navigation tabs/i })).toBeInTheDocument();
  });

  it('supports icons and custom aria labels', () => {
    renderWithTheme(
      <TabNavigation
        ariaLabel="Icon tabs"
        tabs={[
          { label: 'Recents', icon: <PhoneIcon /> },
          { label: 'Favorites' },
        ]}
        activeIndex={0}
        onChange={() => {}}
      />,
    );

    expect(screen.getByRole('tablist', { name: /icon tabs/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /recents/i })).toBeInTheDocument();
  });

  it('supports icon-only tabs with item-level aria labels', () => {
    renderWithTheme(
      <TabNavigation
        ariaLabel="Icon only tabs"
        tabs={[
          { label: '', ariaLabel: 'Phone', icon: <PhoneIcon /> },
          { label: '', ariaLabel: 'Favorites', icon: <PhoneIcon /> },
        ]}
        activeIndex={0}
        onChange={() => {}}
      />,
    );

    expect(screen.getByRole('tab', { name: /^phone$/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /^favorites$/i })).toBeInTheDocument();
  });

  it('applies the segmented appearance class when requested', () => {
    renderWithTheme(
      <TabNavigation
        appearance="segmented"
        showDivider={false}
        tabs={[{ label: 'Table' }, { label: 'Chart' }]}
        activeIndex={0}
        onChange={() => {}}
      />,
    );

    expect(screen.getByRole('tablist').closest('.raven-tab-nav')).toHaveClass('raven-tab-nav--segmented');
  });

  it('applies the rail appearance class when requested', () => {
    renderWithTheme(
      <TabNavigation
        appearance="rail"
        orientation="vertical"
        showDivider={false}
        tabs={[{ label: 'Reports' }, { label: 'Analysis' }]}
        activeIndex={1}
        onChange={() => {}}
      />,
    );

    expect(screen.getByRole('tablist').closest('.raven-tab-nav')).toHaveClass('raven-tab-nav--rail');
  });
});

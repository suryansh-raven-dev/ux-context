import type { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import { ravenNearMissTheme } from '../../../theme/ravenNearMissTheme';
import { RavenTextField } from './RavenTextField';

function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={ravenNearMissTheme}>{ui}</ThemeProvider>);
}

function getSingleInputLabel(container: HTMLElement) {
  const label = container.querySelector('label.MuiInputLabel-root');
  if (!label) {
    throw new Error('Input label not found');
  }
  return label;
}

async function assertLabelTransitionBehavior(ui: ReactElement) {
  const user = userEvent.setup();
  const { container } = renderWithTheme(ui);

  const input = screen.getByRole('textbox', { name: 'Full Name' });
  const label = getSingleInputLabel(container);

  expect(label).toHaveAttribute('data-shrink', 'false');

  await user.click(input);
  expect(label).toHaveAttribute('data-shrink', 'true');

  await user.type(input, 'Jane Doe');
  expect((input as HTMLInputElement).value).toBe('Jane Doe');

  await user.clear(input);
  expect((input as HTMLInputElement).value).toBe('');
  expect(label).toHaveAttribute('data-shrink', 'true');

  await user.tab();
  expect(label).toHaveAttribute('data-shrink', 'false');
}

describe('RavenTextField label transition parity', () => {
  it('matches expected MUI label shrink behavior when clearing text', async () => {
    await assertLabelTransitionBehavior(
      <RavenTextField label="Full Name" placeholder="Jane Doe" />,
    );
  });

  it('matches raw MUI TextField baseline for the same interaction', async () => {
    await assertLabelTransitionBehavior(
      <TextField label="Full Name" placeholder="Jane Doe" />,
    );
  });
});

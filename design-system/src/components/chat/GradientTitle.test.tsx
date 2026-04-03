import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { GradientTitle } from './GradientTitle';

describe('GradientTitle', () => {
  it('renders children as a level-1 heading with gradient class', () => {
    render(
      <ThemeProvider theme={ravenNearMissTheme}>
        <GradientTitle>Near-miss chat</GradientTitle>
      </ThemeProvider>
    );

    const heading = screen.getByRole('heading', { level: 1, name: 'Near-miss chat' });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('raven-gradient-title');
  });
});

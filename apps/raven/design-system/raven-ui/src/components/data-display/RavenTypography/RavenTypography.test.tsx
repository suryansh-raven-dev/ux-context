import type { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ravenNearMissTheme } from '../../../theme/ravenNearMissTheme';

import { RavenTypography } from './RavenTypography';

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={ravenNearMissTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
  );
}

describe('RavenTypography', () => {
  it('renders with the correct text', () => {
    renderWithTheme(<RavenTypography>Hello Raven</RavenTypography>);
    expect(screen.getByText('Hello Raven')).toBeInTheDocument();
  });

  it('applies the raven-typography CSS class', () => {
    renderWithTheme(<RavenTypography>Styled</RavenTypography>);
    expect(screen.getByText('Styled')).toHaveClass('raven-typography');
  });

  it('merges custom className with raven-typography', () => {
    renderWithTheme(
      <RavenTypography className="custom">Test</RavenTypography>,
    );
    const el = screen.getByText('Test');
    expect(el).toHaveClass('raven-typography');
    expect(el).toHaveClass('custom');
  });

  it('renders body1 variant by default', () => {
    renderWithTheme(<RavenTypography>Default</RavenTypography>);
    expect(screen.getByText('Default')).toHaveClass('MuiTypography-body1');
  });

  it('renders h1 variant', () => {
    renderWithTheme(
      <RavenTypography variant="h1">Heading 1</RavenTypography>,
    );
    const el = screen.getByText('Heading 1');
    expect(el).toHaveClass('MuiTypography-h1');
    expect(el.tagName).toBe('H1');
  });

  it('renders h2 variant', () => {
    renderWithTheme(
      <RavenTypography variant="h2">Heading 2</RavenTypography>,
    );
    const el = screen.getByText('Heading 2');
    expect(el).toHaveClass('MuiTypography-h2');
    expect(el.tagName).toBe('H2');
  });

  it('renders h3 variant', () => {
    renderWithTheme(
      <RavenTypography variant="h3">Heading 3</RavenTypography>,
    );
    const el = screen.getByText('Heading 3');
    expect(el).toHaveClass('MuiTypography-h3');
    expect(el.tagName).toBe('H3');
  });

  it('renders h4 variant', () => {
    renderWithTheme(
      <RavenTypography variant="h4">Heading 4</RavenTypography>,
    );
    const el = screen.getByText('Heading 4');
    expect(el).toHaveClass('MuiTypography-h4');
    expect(el.tagName).toBe('H4');
  });

  it('renders h5 variant', () => {
    renderWithTheme(
      <RavenTypography variant="h5">Heading 5</RavenTypography>,
    );
    const el = screen.getByText('Heading 5');
    expect(el).toHaveClass('MuiTypography-h5');
    expect(el.tagName).toBe('H5');
  });

  it('renders h6 variant', () => {
    renderWithTheme(
      <RavenTypography variant="h6">Heading 6</RavenTypography>,
    );
    const el = screen.getByText('Heading 6');
    expect(el).toHaveClass('MuiTypography-h6');
    expect(el.tagName).toBe('H6');
  });

  it('renders subtitle1 variant', () => {
    renderWithTheme(
      <RavenTypography variant="subtitle1">Subtitle 1</RavenTypography>,
    );
    expect(screen.getByText('Subtitle 1')).toHaveClass(
      'MuiTypography-subtitle1',
    );
  });

  it('renders subtitle2 variant', () => {
    renderWithTheme(
      <RavenTypography variant="subtitle2">Subtitle 2</RavenTypography>,
    );
    expect(screen.getByText('Subtitle 2')).toHaveClass(
      'MuiTypography-subtitle2',
    );
  });

  it('renders body2 variant', () => {
    renderWithTheme(
      <RavenTypography variant="body2">Body 2</RavenTypography>,
    );
    expect(screen.getByText('Body 2')).toHaveClass('MuiTypography-body2');
  });

  it('renders button variant', () => {
    renderWithTheme(
      <RavenTypography variant="button">Button</RavenTypography>,
    );
    expect(screen.getByText('Button')).toHaveClass('MuiTypography-button');
  });

  it('renders caption variant', () => {
    renderWithTheme(
      <RavenTypography variant="caption">Caption</RavenTypography>,
    );
    expect(screen.getByText('Caption')).toHaveClass('MuiTypography-caption');
  });

  it('renders overline variant', () => {
    renderWithTheme(
      <RavenTypography variant="overline">Overline</RavenTypography>,
    );
    expect(screen.getByText('Overline')).toHaveClass('MuiTypography-overline');
  });

  it('renders body1Bold custom variant', () => {
    renderWithTheme(
      <RavenTypography variant="body1Bold">Bold Body</RavenTypography>,
    );
    expect(screen.getByText('Bold Body')).toHaveClass(
      'MuiTypography-body1Bold',
    );
  });

  it('renders tableHeader custom variant', () => {
    renderWithTheme(
      <RavenTypography variant="tableHeader">Column</RavenTypography>,
    );
    expect(screen.getByText('Column')).toHaveClass(
      'MuiTypography-tableHeader',
    );
  });

  it('renders with gutterBottom', () => {
    renderWithTheme(
      <RavenTypography gutterBottom>Gutter</RavenTypography>,
    );
    expect(screen.getByText('Gutter')).toHaveClass(
      'MuiTypography-gutterBottom',
    );
  });

  it('renders with noWrap', () => {
    renderWithTheme(
      <RavenTypography noWrap>No Wrap Content</RavenTypography>,
    );
    expect(screen.getByText('No Wrap Content')).toHaveClass(
      'MuiTypography-noWrap',
    );
  });

  it('renders paragraph with bottom margin class', () => {
    renderWithTheme(
      <RavenTypography paragraph>Paragraph</RavenTypography>,
    );
    expect(screen.getByText('Paragraph')).toHaveClass(
      'MuiTypography-paragraph',
    );
  });

  it('renders with align center', () => {
    renderWithTheme(
      <RavenTypography align="center">Centered</RavenTypography>,
    );
    expect(screen.getByText('Centered')).toHaveClass(
      'MuiTypography-alignCenter',
    );
  });

  it('overrides the semantic element via component prop', () => {
    renderWithTheme(
      <RavenTypography variant="h1" component="h2">
        Overridden
      </RavenTypography>,
    );
    const el = screen.getByText('Overridden');
    expect(el.tagName).toBe('H2');
    expect(el).toHaveClass('MuiTypography-h1');
  });

  it('applies sx prop styles', () => {
    renderWithTheme(
      <RavenTypography sx={{ mt: 2 }}>SX Test</RavenTypography>,
    );
    expect(screen.getByText('SX Test')).toBeInTheDocument();
  });
});

import { describe, it, expect } from 'vitest';
import { ravenNearMissTheme } from './ravenNearMissTheme';

describe('ravenNearMissTheme', () => {
  it('has correct primary color', () => {
    expect(ravenNearMissTheme.palette.primary.main).toBe('#4A148C');
  });

  it('uses Source Sans 3 font family', () => {
    expect(ravenNearMissTheme.typography.fontFamily).toContain('Source Sans 3');
  });

  it('has custom purple palette', () => {
    expect(ravenNearMissTheme.palette.purple[900]).toBe('#4A148C');
    expect(ravenNearMissTheme.palette.purple[100]).toBe('#F3E5F5');
  });
});

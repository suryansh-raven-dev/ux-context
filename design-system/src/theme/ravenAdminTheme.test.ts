import { describe, it, expect } from 'vitest';
import { ravenAdminLightTheme, ravenAdminDarkTheme, ravenAdminTheme } from './ravenAdminTheme';

describe('ravenAdminTheme (default export)', () => {
  it('is the light theme', () => {
    expect(ravenAdminTheme).toBe(ravenAdminLightTheme);
  });
});

describe('ravenAdminLightTheme', () => {
  const p = ravenAdminLightTheme.palette;

  describe('primary palette', () => {
    it('has correct primary.main', () => {
      expect(p.primary.main).toBe('#4A148C');
    });
    it('has correct primary.light', () => {
      expect(p.primary.light).toBe('#C5CAE9');
    });
    it('has correct primary.dark', () => {
      expect(p.primary.dark).toBe('#303F9F');
    });
    it('has correct primary.lightBg', () => {
      expect(p.primary.lightBg).toBe('#E8EAF6');
    });
  });

  describe('secondary palette', () => {
    it('has correct secondary.main', () => {
      expect(p.secondary.main).toBe('#536DFE');
    });
  });

  describe('background palette', () => {
    it('has correct background.default (content cards)', () => {
      expect(p.background.default).toBe('#FFFFFF');
    });
    it('has correct background.dark (page bg)', () => {
      expect(p.background.dark).toBe('#FCF6FE');
    });
    it('has correct background.light (DataGrid headers)', () => {
      expect(p.background.light).toBe('#F5F5F5');
    });
  });

  describe('custom tokens', () => {
    it('has correct divider', () => {
      expect(p.divider).toBe('#F3E5F5');
    });
    it('has correct success.main', () => {
      expect(p.success.main).toBe('#2E7D32');
    });
    it('has correct navItemBg', () => {
      expect(p.navItemBg).toBe('#E1BEE7');
    });
    it('has correct accent', () => {
      expect(p.accent).toBe('#4A148C');
    });
    it('has correct purplePurple', () => {
      expect(p.purplePurple).toBe('#9C27B0');
    });
    it('has correct text.tertiary', () => {
      expect(p.text.tertiary).toBe('rgba(0,0,0,0.7)');
    });
  });

  describe('gradients', () => {
    it('has light gradient', () => {
      expect(p.gradients.light).toContain('linear-gradient');
    });
    it('has accentGradient', () => {
      expect(p.gradients.accentGradient).toContain('linear-gradient');
    });
    it('has paper gradient', () => {
      expect(p.gradients.paper).toContain('linear-gradient');
    });
  });

  describe('purple scale', () => {
    it('has correct purple.900', () => {
      expect(p.purple[900]).toBe('#4A148C');
    });
    it('has correct purple.100', () => {
      expect(p.purple[100]).toBe('#F3E5F5');
    });
  });
});

describe('ravenAdminDarkTheme', () => {
  const p = ravenAdminDarkTheme.palette;

  it('has mode dark', () => {
    expect(p.mode).toBe('dark');
  });

  describe('primary palette', () => {
    it('has correct primary.main (teal)', () => {
      expect(p.primary.main).toBe('#23E0D2');
    });
    it('has correct primary.dark', () => {
      expect(p.primary.dark).toBe('#159890');
    });
    it('has correct primary.lightBg', () => {
      expect(p.primary.lightBg).toBe('#13252A');
    });
  });

  describe('background palette', () => {
    it('has correct background.default', () => {
      expect(p.background.default).toBe('#0B1215');
    });
    it('has correct background.dark', () => {
      expect(p.background.dark).toBe('#0E171B');
    });
    it('has correct background.light', () => {
      expect(p.background.light).toBe('#101C21');
    });
    it('has correct background.paper', () => {
      expect(p.background.paper).toBe('#122229');
    });
  });

  describe('text palette', () => {
    it('has correct text.primary', () => {
      expect(p.text.primary).toBe('#E8FBFB');
    });
    it('has correct text.secondary', () => {
      expect(p.text.secondary).toBe('#B6D7D9');
    });
  });

  describe('custom tokens', () => {
    it('has correct navItemBg', () => {
      expect(p.navItemBg).toBe('#179890');
    });
    it('has correct divider', () => {
      expect(p.divider).toBe('#17343A');
    });
    it('has correct accent', () => {
      expect(p.accent).toBe('#E8FBFB');
    });
  });

  describe('status colors', () => {
    it('has correct info.main', () => {
      expect(p.info.main).toBe('#42C6FF');
    });
    it('has correct success.main', () => {
      expect(p.success.main).toBe('#2ED58A');
    });
    it('has correct warning.main', () => {
      expect(p.warning.main).toBe('#F5B947');
    });
    it('has correct error.main', () => {
      expect(p.error.main).toBe('#FF6E6E');
    });
  });
});

describe('typography', () => {
  const t = ravenAdminLightTheme.typography;

  it('uses Source Sans 3', () => {
    expect(t.fontFamily).toContain('Source Sans 3');
  });

  it('has correct h1', () => {
    expect(t.h1).toMatchObject({ fontSize: '88px', fontWeight: 700, lineHeight: '88px' });
  });
  it('has correct h2', () => {
    expect(t.h2).toMatchObject({ fontSize: '60px', fontWeight: 700, lineHeight: '60px' });
  });
  it('has correct h3', () => {
    expect(t.h3).toMatchObject({ fontSize: '48px', fontWeight: 700, lineHeight: '48px' });
  });
  it('has correct h4', () => {
    expect(t.h4).toMatchObject({ fontSize: '34px', fontWeight: 600, lineHeight: '51px' });
  });
  it('has correct h5', () => {
    expect(t.h5).toMatchObject({ fontSize: '24px', fontWeight: 500, lineHeight: '32px' });
  });
  it('has correct h6', () => {
    expect(t.h6).toMatchObject({ fontSize: '20px', fontWeight: 500, lineHeight: '32px' });
  });
  it('has correct overline weight', () => {
    expect(t.overline).toMatchObject({ fontWeight: 500 });
  });
  it('has caption2 variant', () => {
    expect(t.caption2).toMatchObject({ fontSize: '10px', letterSpacing: '0.4px' });
  });
  it('has label variant', () => {
    expect(t.label).toMatchObject({ fontSize: '13px', fontWeight: 400, lineHeight: '18px' });
  });
});

describe('component overrides', () => {
  const c = ravenAdminLightTheme.components;

  it('has MuiButtonBase focus override', () => {
    expect(c?.MuiButtonBase).toBeDefined();
  });

  it('has MuiDialog borderRadius 16', () => {
    const paper = (c?.MuiDialog?.styleOverrides as Record<string, unknown>)?.paper;
    expect(paper).toMatchObject({ borderRadius: 16 });
  });

  it('has MuiMenu borderRadius 16px !important', () => {
    const paper = (c?.MuiMenu?.styleOverrides as Record<string, unknown>)?.paper;
    expect(paper).toMatchObject({ borderRadius: '16px !important' });
  });

  it('has MuiPopover override', () => {
    expect(c?.MuiPopover).toBeDefined();
    const paper = (c?.MuiPopover?.styleOverrides as Record<string, unknown>)?.paper;
    expect(paper).toMatchObject({ borderRadius: '16px !important' });
  });

  it('has MuiTablePagination override', () => {
    expect(c?.MuiTablePagination).toBeDefined();
  });

  it('has MuiCheckbox custom icons', () => {
    expect(c?.MuiCheckbox?.defaultProps).toBeDefined();
  });

  it('has MuiSelect IconComponent', () => {
    expect(c?.MuiSelect?.defaultProps).toBeDefined();
  });

  it('has MuiNativeSelect IconComponent', () => {
    expect(c?.MuiNativeSelect?.defaultProps).toBeDefined();
  });
});

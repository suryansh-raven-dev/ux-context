import React, { useState } from 'react';
import './ColorPalette.css';

function contrastText(hex: string): string {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? '#000' : '#fff';
}

interface SwatchProps {
  name: string;
  hex: string;
  token?: string;
}

function Swatch({ name, hex, token }: SwatchProps) {
  const fg = contrastText(hex);
  const bgContrast =
    fg === '#fff' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.08)';

  return (
    <div className="raven-color-palette__swatch">
      <div
        className="raven-color-palette__swatch-color"
        style={{ backgroundColor: hex }}
      >
        <span
          className="raven-color-palette__swatch-contrast"
          style={{ color: fg, backgroundColor: bgContrast }}
        >
          {fg === '#fff' ? 'White text' : 'Black text'}
        </span>
      </div>
      <div className="raven-color-palette__swatch-info">
        <p className="raven-color-palette__swatch-name">{name}</p>
        <p className="raven-color-palette__swatch-hex">{hex}</p>
        {token && <p className="raven-color-palette__swatch-token">{token}</p>}
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  description?: string;
  badge?: string;
  badgeType?: 'raven' | 'mui';
  children: React.ReactNode;
}

function Section({ title, description, badge, badgeType, children }: SectionProps) {
  return (
    <div className="raven-color-palette__section">
      <h3 className="raven-color-palette__section-title">
        {title}
        {badge && (
          <span
            className={`raven-color-palette__section-badge raven-color-palette__section-badge--${badgeType}`}
          >
            {badge}
          </span>
        )}
      </h3>
      {description && (
        <p className="raven-color-palette__section-desc">{description}</p>
      )}
      {children}
    </div>
  );
}

const PLAYGROUND_TOKENS = [
  { label: 'Purple 900', value: '#4A148C' },
  { label: 'Purple 800', value: '#6A1B9A' },
  { label: 'Purple 300', value: '#CE93D8' },
  { label: 'Green Main', value: '#4CAF50' },
  { label: 'Red Main', value: '#F44336' },
  { label: 'Orange Main', value: '#FF9800' },
  { label: 'Blue Main', value: '#0288D1' },
];

function ColorPlayground() {
  const [selected, setSelected] = useState(PLAYGROUND_TOKENS[0]);

  return (
    <div className="raven-color-palette__playground">
      <div className="raven-color-palette__playground-picker">
        {PLAYGROUND_TOKENS.map((t) => (
          <button
            key={t.label}
            className={`raven-color-palette__playground-chip${t.label === selected.label ? ' raven-color-palette__playground-chip--active' : ''}`}
            style={{ backgroundColor: t.value, color: contrastText(t.value) }}
            onClick={() => setSelected(t)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="raven-color-palette__playground-preview">
        <div className="raven-color-palette__playground-card" style={{ borderColor: selected.value }}>
          <div className="raven-color-palette__playground-header" style={{ backgroundColor: selected.value, color: contrastText(selected.value) }}>
            Incident Report #2847
          </div>
          <div className="raven-color-palette__playground-body">
            <p style={{ color: selected.value, fontWeight: 600 }}>Near-miss: Chemical Spill in Lab 4</p>
            <p className="raven-color-palette__playground-meta">Filed by Jane Doe &middot; 2 hours ago</p>
            <button
              className="raven-color-palette__playground-btn"
              style={{ backgroundColor: selected.value, color: contrastText(selected.value) }}
            >
              View Details
            </button>
          </div>
        </div>
        <div className="raven-color-palette__playground-info">
          <span className="raven-color-palette__playground-label">{selected.label}</span>
          <code>{selected.value}</code>
        </div>
      </div>
    </div>
  );
}

function contrastRatio(fg: string, bg: string): number {
  function luminance(hex: string) {
    const c = hex.replace('#', '');
    const rs = parseInt(c.substring(0, 2), 16) / 255;
    const gs = parseInt(c.substring(2, 4), 16) / 255;
    const bs = parseInt(c.substring(4, 6), 16) / 255;
    const r = rs <= 0.03928 ? rs / 12.92 : ((rs + 0.055) / 1.055) ** 2.4;
    const g = gs <= 0.03928 ? gs / 12.92 : ((gs + 0.055) / 1.055) ** 2.4;
    const b = bs <= 0.03928 ? bs / 12.92 : ((bs + 0.055) / 1.055) ** 2.4;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  const fgHex = fg.startsWith('rgba') ? (fg.includes('0.87') ? '#222222' : '#666666') : fg;
  const l1 = luminance(fgHex);
  const l2 = luminance(bg);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return Math.round(((lighter + 0.05) / (darker + 0.05)) * 10) / 10;
}

function ContrastRow({ fg, bg, label }: { fg: string; bg: string; label: string }) {
  const ratio = contrastRatio(fg, bg);
  const passes = ratio >= 4.5;
  return (
    <tr>
      <td>{label}</td>
      <td><code>{fg}</code></td>
      <td><code>{bg}</code></td>
      <td><strong>{ratio}:1</strong></td>
      <td className={passes ? 'raven-color-palette__pass' : 'raven-color-palette__fail'}>{passes ? 'Pass' : 'Fail'}</td>
      <td>
        <span className="raven-color-palette__contrast-preview" style={{ color: fg, backgroundColor: bg }}>
          Aa
        </span>
      </td>
    </tr>
  );
}

export function ColorPalette() {
  return (
    <div className="raven-color-palette">
      <h1 className="raven-color-palette__title">Color Palette</h1>
      <p className="raven-color-palette__subtitle">
        Complete color reference for the Raven Design System. Includes Raven
        brand tokens and the full MUI v6 Material palette for consistent UI
        development.
      </p>

      {/* ── Picking colors ──────────────────────────────── */}
      <h2 id="picking-colors" className="raven-color-palette__h2">Picking colors</h2>
      <p className="raven-color-palette__body">
        Color communicates meaning — brand identity, interaction state, and visual hierarchy.
        The Raven Design System uses a curated set of purple brand tokens alongside
        the full Material Design 2014 palette, giving you access to tested, accessible color values
        out of the box.
      </p>

      <h3 id="official-color-tool" className="raven-color-palette__h3">Official color tool</h3>
      <p className="raven-color-palette__body">
        The{' '}
        <a href="https://m2.material.io/design/color/the-color-system.html" target="_blank" rel="noopener noreferrer" className="raven-color-palette__link">
          Material Design color system
        </a>{' '}
        provides guidelines on applying color to UI in a meaningful and consistent way.
        Use the{' '}
        <a href="https://m2.material.io/resources/color/" target="_blank" rel="noopener noreferrer" className="raven-color-palette__link">
          Material Color Tool
        </a>{' '}
        to create, share, and apply color palettes to your UI as well as preview on real-world
        interfaces.
      </p>

      <h3 id="playground" className="raven-color-palette__h3">Playground</h3>
      <p className="raven-color-palette__body">
        Try the interactive Raven color preview below. Select any brand or semantic
        token to see how it renders on common UI patterns.
      </p>
      <ColorPlayground />

      <h3 id="tools-by-the-community" className="raven-color-palette__h3">Tools by the community</h3>
      <ul className="raven-color-palette__tool-list">
        <li>
          <a href="https://colorhunt.co/" target="_blank" rel="noopener noreferrer" className="raven-color-palette__link">colorhunt.co</a>{' '}
          — Curated color palette inspiration
        </li>
        <li>
          <a href="https://coolors.co/" target="_blank" rel="noopener noreferrer" className="raven-color-palette__link">coolors.co</a>{' '}
          — Fast color scheme generator
        </li>
        <li>
          <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" className="raven-color-palette__link">WebAIM Contrast Checker</a>{' '}
          — Verify WCAG AA / AAA contrast ratios
        </li>
        <li>
          <a href="https://paletton.com/" target="_blank" rel="noopener noreferrer" className="raven-color-palette__link">paletton.com</a>{' '}
          — Advanced palette designer with live preview
        </li>
      </ul>

      <hr className="raven-color-palette__divider" />

      {/* ── Raven Design Tokens ─────────────────────────── */}
      <h2 id="raven-design-tokens" className="raven-color-palette__h2">Raven Design Tokens</h2>
      <p className="raven-color-palette__body">
        Brand-specific tokens extracted from the Raven Figma file. Use these CSS custom properties
        for all brand, semantic, background, and border colors.
      </p>

      <Section title="Brand / Primary" description="Core purple palette used for primary actions, navigation, and brand identity." badge="Raven" badgeType="raven">
        <div className="raven-color-palette__grid">
          <Swatch name="Purple 900" hex="#4A148C" token="--raven-purple-900" />
          <Swatch name="Purple 800" hex="#6A1B9A" token="--raven-purple-800" />
          <Swatch name="Purple 300" hex="#CE93D8" token="--raven-purple-300" />
          <Swatch name="Purple 200" hex="#E1BEE7" token="--raven-purple-200" />
          <Swatch name="Purple 100" hex="#F3E5F5" token="--raven-purple-100" />
        </div>
      </Section>

      <Section title="Backgrounds" description="Surface colors for pages, papers, forms, and inputs." badge="Raven" badgeType="raven">
        <div className="raven-color-palette__grid">
          <Swatch name="Page" hex="#FCF6FE" token="--raven-bg-page" />
          <Swatch name="Paper" hex="#FFFFFF" token="--raven-bg-paper" />
          <Swatch name="Form" hex="#FDFAFE" token="--raven-bg-form" />
          <Swatch name="Neutral" hex="#F5F5F5" token="--raven-bg-neutral" />
          <Swatch name="Input" hex="#FAFAFA" token="--raven-bg-input" />
        </div>
      </Section>

      <Section title="Status / Semantic" description="Contextual colors for success, error, warning, and information states." badge="Raven" badgeType="raven">
        <div className="raven-color-palette__grid">
          <Swatch name="Green Main" hex="#4CAF50" token="--raven-green-main" />
          <Swatch name="Green Dark" hex="#1B5E20" token="--raven-green-dark" />
          <Swatch name="Green Light" hex="#E8F5E9" token="--raven-green-light" />
          <Swatch name="Red Main" hex="#F44336" token="--raven-red-main" />
          <Swatch name="Red Dark" hex="#B71C1C" token="--raven-red-dark" />
          <Swatch name="Red Light" hex="#FFEBEE" token="--raven-red-light" />
          <Swatch name="Orange Main" hex="#FF9800" token="--raven-orange-main" />
          <Swatch name="Orange Dark" hex="#FF6F00" token="--raven-orange-dark" />
          <Swatch name="Amber Light" hex="#FFF8E1" token="--raven-amber-light" />
          <Swatch name="Blue Main" hex="#0288D1" token="--raven-blue-main" />
          <Swatch name="Blue Light" hex="#E1F5FE" token="--raven-blue-light" />
          <Swatch name="LightGreen Dark" hex="#33691E" token="--raven-lightgreen-dark" />
          <Swatch name="LightGreen Light" hex="#F1F8E9" token="--raven-lightgreen-light" />
        </div>
      </Section>

      <Section title="Borders" description="Border colors for dividers, cards, and form elements." badge="Raven" badgeType="raven">
        <div className="raven-color-palette__grid">
          <Swatch name="Default" hex="#E0E0E0" token="--raven-border-default" />
          <Swatch name="Brand" hex="#F3E5F5" token="--raven-border-brand" />
          <Swatch name="Mobile Header" hex="#DEDCEA" token="--raven-border-mobile-header" />
        </div>
      </Section>

      <Section title="Gradients" description="Brand gradients for accents and decorative elements." badge="Raven" badgeType="raven">
        <div className="raven-color-palette__gradient-strip" style={{ background: 'linear-gradient(-14deg, rgb(191, 64, 174) 0%, rgb(107, 64, 191) 50%, rgb(78, 64, 191) 100%)' }} />
        <p className="raven-color-palette__gradient-label">--raven-gradient-accent</p>
        <div className="raven-color-palette__gradient-strip" style={{ background: 'linear-gradient(to bottom, #0CDACC, #311B92)' }} />
        <p className="raven-color-palette__gradient-label">--raven-gradient-org-avatar</p>
      </Section>

      <hr className="raven-color-palette__divider" />

      {/* ── 2014 Material Design color palettes ────────── */}
      <h2 id="2014-material-design-color-palettes" className="raven-color-palette__h2">2014 Material Design color palettes</h2>
      <p className="raven-color-palette__body">
        The full set of colors from the{' '}
        <a href="https://m2.material.io/design/color/the-color-system.html" target="_blank" rel="noopener noreferrer" className="raven-color-palette__link">
          Material Design 2014 color system
        </a>.
        These palettes are available via MUI&apos;s color imports
        (e.g. <code>import {'{ purple }'} from &apos;@mui/material/colors&apos;</code>).
      </p>

      <h3 id="important-terms" className="raven-color-palette__h3">Important Terms</h3>
      <div className="raven-color-palette__terms">
        <div className="raven-color-palette__term">
          <strong>Hue</strong>
          <span>A color family from the palette (e.g. Red, Purple, Blue). Each hue has a range of shades from 50 to 900.</span>
        </div>
        <div className="raven-color-palette__term">
          <strong>Shade</strong>
          <span>A specific value within a hue. Shade 50 is the lightest and 900 is the darkest. The 500 shade is the default (main) value.</span>
        </div>
        <div className="raven-color-palette__term">
          <strong>Accent</strong>
          <span>Accent shades (A100 – A700) are vibrant alternate values available for some hues. Use them sparingly for emphasis.</span>
        </div>
      </div>

      <h3 id="color-palette" className="raven-color-palette__h3">Color palette</h3>

      <Section title="Red" description="Use for errors, destructive actions, and critical alerts." badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#FFEBEE" /><Swatch name="100" hex="#FFCDD2" /><Swatch name="200" hex="#EF9A9A" /><Swatch name="300" hex="#E57373" /><Swatch name="400" hex="#EF5350" /><Swatch name="500" hex="#F44336" /><Swatch name="600" hex="#E53935" /><Swatch name="700" hex="#D32F2F" /><Swatch name="800" hex="#C62828" /><Swatch name="900" hex="#B71C1C" /><Swatch name="A100" hex="#FF8A80" /><Swatch name="A200" hex="#FF5252" /><Swatch name="A400" hex="#FF1744" /><Swatch name="A700" hex="#D50000" />
        </div>
      </Section>

      <Section title="Pink" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#FCE4EC" /><Swatch name="100" hex="#F8BBD0" /><Swatch name="200" hex="#F48FB1" /><Swatch name="300" hex="#F06292" /><Swatch name="400" hex="#EC407A" /><Swatch name="500" hex="#E91E63" /><Swatch name="600" hex="#D81B60" /><Swatch name="700" hex="#C2185B" /><Swatch name="800" hex="#AD1457" /><Swatch name="900" hex="#880E4F" /><Swatch name="A100" hex="#FF80AB" /><Swatch name="A200" hex="#FF4081" /><Swatch name="A400" hex="#F50057" /><Swatch name="A700" hex="#C51162" />
        </div>
      </Section>

      <Section title="Purple" description="Raven's brand hue — the primary palette is sourced from these shades." badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#F3E5F5" /><Swatch name="100" hex="#E1BEE7" /><Swatch name="200" hex="#CE93D8" /><Swatch name="300" hex="#BA68C8" /><Swatch name="400" hex="#AB47BC" /><Swatch name="500" hex="#9C27B0" /><Swatch name="600" hex="#8E24AA" /><Swatch name="700" hex="#7B1FA2" /><Swatch name="800" hex="#6A1B9A" /><Swatch name="900" hex="#4A148C" /><Swatch name="A100" hex="#EA80FC" /><Swatch name="A200" hex="#E040FB" /><Swatch name="A400" hex="#D500F9" /><Swatch name="A700" hex="#AA00FF" />
        </div>
      </Section>

      <Section title="Deep Purple" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#EDE7F6" /><Swatch name="100" hex="#D1C4E9" /><Swatch name="200" hex="#B39DDB" /><Swatch name="300" hex="#9575CD" /><Swatch name="400" hex="#7E57C2" /><Swatch name="500" hex="#673AB7" /><Swatch name="600" hex="#5E35B1" /><Swatch name="700" hex="#512DA8" /><Swatch name="800" hex="#4527A0" /><Swatch name="900" hex="#311B92" /><Swatch name="A100" hex="#B388FF" /><Swatch name="A200" hex="#7C4DFF" /><Swatch name="A400" hex="#651FFF" /><Swatch name="A700" hex="#6200EA" />
        </div>
      </Section>

      <Section title="Indigo" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#E8EAF6" /><Swatch name="100" hex="#C5CAE9" /><Swatch name="200" hex="#9FA8DA" /><Swatch name="300" hex="#7986CB" /><Swatch name="400" hex="#5C6BC0" /><Swatch name="500" hex="#3F51B5" /><Swatch name="600" hex="#3949AB" /><Swatch name="700" hex="#303F9F" /><Swatch name="800" hex="#283593" /><Swatch name="900" hex="#1A237E" /><Swatch name="A100" hex="#8C9EFF" /><Swatch name="A200" hex="#536DFE" /><Swatch name="A400" hex="#3D5AFE" /><Swatch name="A700" hex="#304FFE" />
        </div>
      </Section>

      <Section title="Blue" description="Used for informational states and links." badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#E3F2FD" /><Swatch name="100" hex="#BBDEFB" /><Swatch name="200" hex="#90CAF9" /><Swatch name="300" hex="#64B5F6" /><Swatch name="400" hex="#42A5F5" /><Swatch name="500" hex="#2196F3" /><Swatch name="600" hex="#1E88E5" /><Swatch name="700" hex="#1976D2" /><Swatch name="800" hex="#1565C0" /><Swatch name="900" hex="#0D47A1" /><Swatch name="A100" hex="#82B1FF" /><Swatch name="A200" hex="#448AFF" /><Swatch name="A400" hex="#2979FF" /><Swatch name="A700" hex="#2962FF" />
        </div>
      </Section>

      <Section title="Light Blue" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#E1F5FE" /><Swatch name="100" hex="#B3E5FC" /><Swatch name="200" hex="#81D4FA" /><Swatch name="300" hex="#4FC3F7" /><Swatch name="400" hex="#29B6F6" /><Swatch name="500" hex="#03A9F4" /><Swatch name="600" hex="#039BE5" /><Swatch name="700" hex="#0288D1" /><Swatch name="800" hex="#0277BD" /><Swatch name="900" hex="#01579B" /><Swatch name="A100" hex="#80D8FF" /><Swatch name="A200" hex="#40C4FF" /><Swatch name="A400" hex="#00B0FF" /><Swatch name="A700" hex="#0091EA" />
        </div>
      </Section>

      <Section title="Cyan" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#E0F7FA" /><Swatch name="100" hex="#B2EBF2" /><Swatch name="200" hex="#80DEEA" /><Swatch name="300" hex="#4DD0E1" /><Swatch name="400" hex="#26C6DA" /><Swatch name="500" hex="#00BCD4" /><Swatch name="600" hex="#00ACC1" /><Swatch name="700" hex="#0097A7" /><Swatch name="800" hex="#00838F" /><Swatch name="900" hex="#006064" /><Swatch name="A100" hex="#84FFFF" /><Swatch name="A200" hex="#18FFFF" /><Swatch name="A400" hex="#00E5FF" /><Swatch name="A700" hex="#00B8D4" />
        </div>
      </Section>

      <Section title="Teal" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#E0F2F1" /><Swatch name="100" hex="#B2DFDB" /><Swatch name="200" hex="#80CBC4" /><Swatch name="300" hex="#4DB6AC" /><Swatch name="400" hex="#26A69A" /><Swatch name="500" hex="#009688" /><Swatch name="600" hex="#00897B" /><Swatch name="700" hex="#00796B" /><Swatch name="800" hex="#00695C" /><Swatch name="900" hex="#004D40" /><Swatch name="A100" hex="#A7FFEB" /><Swatch name="A200" hex="#64FFDA" /><Swatch name="A400" hex="#1DE9B6" /><Swatch name="A700" hex="#00BFA5" />
        </div>
      </Section>

      <Section title="Green" description="Used for success states, approvals, and positive indicators." badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#E8F5E9" /><Swatch name="100" hex="#C8E6C9" /><Swatch name="200" hex="#A5D6A7" /><Swatch name="300" hex="#81C784" /><Swatch name="400" hex="#66BB6A" /><Swatch name="500" hex="#4CAF50" /><Swatch name="600" hex="#43A047" /><Swatch name="700" hex="#388E3C" /><Swatch name="800" hex="#2E7D32" /><Swatch name="900" hex="#1B5E20" /><Swatch name="A100" hex="#B9F6CA" /><Swatch name="A200" hex="#69F0AE" /><Swatch name="A400" hex="#00E676" /><Swatch name="A700" hex="#00C853" />
        </div>
      </Section>

      <Section title="Light Green" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#F1F8E9" /><Swatch name="100" hex="#DCEDC8" /><Swatch name="200" hex="#C5E1A5" /><Swatch name="300" hex="#AED581" /><Swatch name="400" hex="#9CCC65" /><Swatch name="500" hex="#8BC34A" /><Swatch name="600" hex="#7CB342" /><Swatch name="700" hex="#689F38" /><Swatch name="800" hex="#558B2F" /><Swatch name="900" hex="#33691E" /><Swatch name="A100" hex="#CCFF90" /><Swatch name="A200" hex="#B2FF59" /><Swatch name="A400" hex="#76FF03" /><Swatch name="A700" hex="#64DD17" />
        </div>
      </Section>

      <Section title="Lime" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#F9FBE7" /><Swatch name="100" hex="#F0F4C3" /><Swatch name="200" hex="#E6EE9C" /><Swatch name="300" hex="#DCE775" /><Swatch name="400" hex="#D4E157" /><Swatch name="500" hex="#CDDC39" /><Swatch name="600" hex="#C0CA33" /><Swatch name="700" hex="#AFB42B" /><Swatch name="800" hex="#9E9D24" /><Swatch name="900" hex="#827717" /><Swatch name="A100" hex="#F4FF81" /><Swatch name="A200" hex="#EEFF41" /><Swatch name="A400" hex="#C6FF00" /><Swatch name="A700" hex="#AEEA00" />
        </div>
      </Section>

      <Section title="Yellow" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#FFFDE7" /><Swatch name="100" hex="#FFF9C4" /><Swatch name="200" hex="#FFF59D" /><Swatch name="300" hex="#FFF176" /><Swatch name="400" hex="#FFEE58" /><Swatch name="500" hex="#FFEB3B" /><Swatch name="600" hex="#FDD835" /><Swatch name="700" hex="#FBC02D" /><Swatch name="800" hex="#F9A825" /><Swatch name="900" hex="#F57F17" /><Swatch name="A100" hex="#FFFF8D" /><Swatch name="A200" hex="#FFFF00" /><Swatch name="A400" hex="#FFEA00" /><Swatch name="A700" hex="#FFD600" />
        </div>
      </Section>

      <Section title="Amber" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#FFF8E1" /><Swatch name="100" hex="#FFECB3" /><Swatch name="200" hex="#FFE082" /><Swatch name="300" hex="#FFD54F" /><Swatch name="400" hex="#FFCA28" /><Swatch name="500" hex="#FFC107" /><Swatch name="600" hex="#FFB300" /><Swatch name="700" hex="#FFA000" /><Swatch name="800" hex="#FF8F00" /><Swatch name="900" hex="#FF6F00" /><Swatch name="A100" hex="#FFE57F" /><Swatch name="A200" hex="#FFD740" /><Swatch name="A400" hex="#FFC400" /><Swatch name="A700" hex="#FFAB00" />
        </div>
      </Section>

      <Section title="Orange" description="Used for warning states and attention indicators." badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#FFF3E0" /><Swatch name="100" hex="#FFE0B2" /><Swatch name="200" hex="#FFCC80" /><Swatch name="300" hex="#FFB74D" /><Swatch name="400" hex="#FFA726" /><Swatch name="500" hex="#FF9800" /><Swatch name="600" hex="#FB8C00" /><Swatch name="700" hex="#F57C00" /><Swatch name="800" hex="#EF6C00" /><Swatch name="900" hex="#E65100" /><Swatch name="A100" hex="#FFD180" /><Swatch name="A200" hex="#FFAB40" /><Swatch name="A400" hex="#FF9100" /><Swatch name="A700" hex="#FF6D00" />
        </div>
      </Section>

      <Section title="Deep Orange" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#FBE9E7" /><Swatch name="100" hex="#FFCCBC" /><Swatch name="200" hex="#FFAB91" /><Swatch name="300" hex="#FF8A65" /><Swatch name="400" hex="#FF7043" /><Swatch name="500" hex="#FF5722" /><Swatch name="600" hex="#F4511E" /><Swatch name="700" hex="#E64A19" /><Swatch name="800" hex="#D84315" /><Swatch name="900" hex="#BF360C" /><Swatch name="A100" hex="#FF9E80" /><Swatch name="A200" hex="#FF6E40" /><Swatch name="A400" hex="#FF3D00" /><Swatch name="A700" hex="#DD2C00" />
        </div>
      </Section>

      <Section title="Brown" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#EFEBE9" /><Swatch name="100" hex="#D7CCC8" /><Swatch name="200" hex="#BCAAA4" /><Swatch name="300" hex="#A1887F" /><Swatch name="400" hex="#8D6E63" /><Swatch name="500" hex="#795548" /><Swatch name="600" hex="#6D4C41" /><Swatch name="700" hex="#5D4037" /><Swatch name="800" hex="#4E342E" /><Swatch name="900" hex="#3E2723" />
        </div>
      </Section>

      <Section title="Grey" description="Used for text, borders, backgrounds, and disabled states." badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#FAFAFA" /><Swatch name="100" hex="#F5F5F5" /><Swatch name="200" hex="#EEEEEE" /><Swatch name="300" hex="#E0E0E0" /><Swatch name="400" hex="#BDBDBD" /><Swatch name="500" hex="#9E9E9E" /><Swatch name="600" hex="#757575" /><Swatch name="700" hex="#616161" /><Swatch name="800" hex="#424242" /><Swatch name="900" hex="#212121" />
        </div>
      </Section>

      <Section title="Blue Grey" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="50" hex="#ECEFF1" /><Swatch name="100" hex="#CFD8DC" /><Swatch name="200" hex="#B0BEC5" /><Swatch name="300" hex="#90A4AE" /><Swatch name="400" hex="#78909C" /><Swatch name="500" hex="#607D8B" /><Swatch name="600" hex="#546E7A" /><Swatch name="700" hex="#455A64" /><Swatch name="800" hex="#37474F" /><Swatch name="900" hex="#263238" />
        </div>
      </Section>

      <Section title="Common" badge="MUI" badgeType="mui">
        <div className="raven-color-palette__grid">
          <Swatch name="Black" hex="#000000" />
          <Swatch name="White" hex="#FFFFFF" />
        </div>
      </Section>

      <hr className="raven-color-palette__divider" />

      {/* ── Examples ────────────────────────────────────── */}
      <h2 id="examples" className="raven-color-palette__h2">Examples</h2>
      <p className="raven-color-palette__body">
        Use Raven CSS custom properties for brand-consistent color application. For the MUI palette,
        import colors from <code>@mui/material/colors</code>.
      </p>

      <div className="raven-color-palette__code-grid">
        <div className="raven-color-palette__code-block">
          <h4 className="raven-color-palette__code-title">CSS custom properties</h4>
          <pre className="raven-color-palette__pre"><code>{`.my-card {
  background: var(--raven-bg-paper);
  border: 1px solid var(--raven-border-default);
  color: var(--raven-text-primary);
}
.my-card:hover {
  border-color: var(--raven-purple-800);
}`}</code></pre>
        </div>

        <div className="raven-color-palette__code-block">
          <h4 className="raven-color-palette__code-title">MUI theme palette</h4>
          <pre className="raven-color-palette__pre"><code>{`import { useTheme } from '@mui/material/styles';

function StatusBadge({ severity }) {
  const theme = useTheme();
  const bg = severity === 'error'
    ? theme.palette.error.light
    : theme.palette.success.light;
  return <Chip sx={{ bgcolor: bg }} />;
}`}</code></pre>
        </div>

        <div className="raven-color-palette__code-block">
          <h4 className="raven-color-palette__code-title">MUI color imports</h4>
          <pre className="raven-color-palette__pre"><code>{`import { purple, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: { main: purple[900] },
    background: { default: grey[50] },
  },
});`}</code></pre>
        </div>

        <div className="raven-color-palette__code-block">
          <h4 className="raven-color-palette__code-title">sx prop</h4>
          <pre className="raven-color-palette__pre"><code>{`<Box
  sx={{
    bgcolor: 'var(--raven-bg-page)',
    color: 'var(--raven-purple-900)',
    borderLeft: '4px solid',
    borderColor: 'primary.main',
    p: 2,
  }}
>
  Near-miss report filed
</Box>`}</code></pre>
        </div>
      </div>

      <hr className="raven-color-palette__divider" />

      {/* ── Accessibility ───────────────────────────────── */}
      <h2 id="accessibility" className="raven-color-palette__h2">Accessibility</h2>
      <p className="raven-color-palette__body">
        Color contrast is critical for readability and WCAG compliance. The Raven Design System
        is built to meet <strong>WCAG 2.1 AA</strong> standards.
      </p>

      <div className="raven-color-palette__a11y-grid">
        <div className="raven-color-palette__a11y-card">
          <div className="raven-color-palette__a11y-ratio">4.5 : 1</div>
          <div className="raven-color-palette__a11y-label">AA — Normal text</div>
          <p className="raven-color-palette__a11y-desc">
            Minimum contrast ratio for body text and form labels (below 18pt regular / 14pt bold).
          </p>
        </div>
        <div className="raven-color-palette__a11y-card">
          <div className="raven-color-palette__a11y-ratio">3 : 1</div>
          <div className="raven-color-palette__a11y-label">AA — Large text</div>
          <p className="raven-color-palette__a11y-desc">
            Minimum contrast for large text (18pt regular or 14pt bold and above) and UI components.
          </p>
        </div>
        <div className="raven-color-palette__a11y-card">
          <div className="raven-color-palette__a11y-ratio">7 : 1</div>
          <div className="raven-color-palette__a11y-label">AAA — Enhanced</div>
          <p className="raven-color-palette__a11y-desc">
            Enhanced contrast for maximum readability. Recommended for critical text like error messages.
          </p>
        </div>
      </div>

      <h3 id="raven-contrast-checks" className="raven-color-palette__h3">Raven contrast checks</h3>
      <div className="raven-color-palette__contrast-table">
        <table>
          <thead>
            <tr>
              <th>Combination</th>
              <th>Foreground</th>
              <th>Background</th>
              <th>Ratio</th>
              <th>AA</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            <ContrastRow fg="#4A148C" bg="#FFFFFF" label="Purple 900 on White" />
            <ContrastRow fg="#FFFFFF" bg="#4A148C" label="White on Purple 900" />
            <ContrastRow fg="#4A148C" bg="#FCF6FE" label="Purple 900 on Page bg" />
            <ContrastRow fg="#4A148C" bg="#F3E5F5" label="Purple 900 on Purple 100" />
            <ContrastRow fg="#B71C1C" bg="#FFFFFF" label="Red Dark on White" />
            <ContrastRow fg="#1B5E20" bg="#FFFFFF" label="Green Dark on White" />
            <ContrastRow fg="rgba(0,0,0,0.87)" bg="#FFFFFF" label="Text Primary on White" />
            <ContrastRow fg="rgba(0,0,0,0.6)" bg="#FFFFFF" label="Text Secondary on White" />
          </tbody>
        </table>
      </div>

      <div className="raven-color-palette__a11y-tips">
        <h4>Tips</h4>
        <ul>
          <li>Never rely on color alone to convey information — use icons, text labels, or patterns alongside.</li>
          <li>Test with a contrast checker before introducing new color combinations.</li>
          <li>Each swatch above shows a contrast preview (white or black text) to indicate the recommended text color.</li>
          <li>The Raven purple brand color (#4A148C) passes AA against white with a ratio of 10.9:1.</li>
        </ul>
      </div>
    </div>
  );
}

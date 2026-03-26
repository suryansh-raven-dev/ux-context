import React from 'react';
import './BrandLogos.css';

interface LogoAsset {
  name: string;
  variant: string;
  filename: string;
  src: string;
  background: 'light' | 'dark' | 'purple';
}

const RAVEN_LOGOS: LogoAsset[] = [
  {
    name: 'Raven',
    variant: 'Color — for light backgrounds',
    filename: 'raven-logo-color.png',
    src: '/logos/raven-logo-color.png',
    background: 'light',
  },
  {
    name: 'Raven',
    variant: 'White — for dark backgrounds',
    filename: 'raven-logo-white.png',
    src: '/logos/raven-logo-white.png',
    background: 'dark',
  },
  {
    name: 'Raven',
    variant: 'White — on brand gradient',
    filename: 'raven-logo-white.png',
    src: '/logos/raven-logo-white.png',
    background: 'purple',
  },
];

const INDORAMA_LOGOS: LogoAsset[] = [
  {
    name: 'Indorama',
    variant: 'Color — for light backgrounds',
    filename: 'indorama-logo-color.png',
    src: '/logos/indorama-logo-color.png',
    background: 'light',
  },
  {
    name: 'Indorama',
    variant: 'White — for dark backgrounds',
    filename: 'indorama-logo-white.png',
    src: '/logos/indorama-logo-white.png',
    background: 'dark',
  },
  {
    name: 'Indorama',
    variant: 'White — on brand gradient',
    filename: 'indorama-logo-white.png',
    src: '/logos/indorama-logo-white.png',
    background: 'purple',
  },
];

function downloadLogo(src: string, filename: string) {
  const link = document.createElement('a');
  link.href = src;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function LogoCard({ logo }: { logo: LogoAsset }) {
  return (
    <div className="raven-brand-logos__card">
      <div className={`raven-brand-logos__preview raven-brand-logos__preview--${logo.background}`}>
        <img src={logo.src} alt={`${logo.name} logo — ${logo.variant}`} />
      </div>
      <div className="raven-brand-logos__info">
        <div className="raven-brand-logos__label">
          <p className="raven-brand-logos__name">{logo.name}</p>
          <p className="raven-brand-logos__variant">{logo.variant}</p>
        </div>
        <button
          className="raven-brand-logos__download-btn"
          onClick={() => downloadLogo(logo.src, logo.filename)}
          aria-label={`Download ${logo.name} ${logo.variant}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          Download
        </button>
      </div>
    </div>
  );
}

export const BrandLogos: React.FC = () => {
  return (
    <div className="raven-brand-logos">
      <div className="raven-brand-logos__section">
        <h2 className="raven-brand-logos__section-title">Raven Logos</h2>
        <p className="raven-brand-logos__section-desc">
          The primary Raven product logo. Use the color version on light backgrounds and the white version on dark or gradient backgrounds.
        </p>
        <div className="raven-brand-logos__grid">
          {RAVEN_LOGOS.map((logo, i) => (
            <LogoCard key={`raven-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      <div className="raven-brand-logos__section">
        <h2 className="raven-brand-logos__section-title">Indorama Logos</h2>
        <p className="raven-brand-logos__section-desc">
          The Indorama corporate logo. Use the color version on light backgrounds and the white version on dark or gradient backgrounds.
        </p>
        <div className="raven-brand-logos__grid">
          {INDORAMA_LOGOS.map((logo, i) => (
            <LogoCard key={`indorama-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      <div className="raven-brand-logos__usage-section">
        <h3 className="raven-brand-logos__usage-title">Logo Usage Guidelines</h3>
        <ul className="raven-brand-logos__usage-list">
          <li className="raven-brand-logos__usage-item">
            <span className="raven-brand-logos__usage-icon raven-brand-logos__usage-icon--do">&#10003;</span>
            Maintain original aspect ratio when resizing
          </li>
          <li className="raven-brand-logos__usage-item">
            <span className="raven-brand-logos__usage-icon raven-brand-logos__usage-icon--do">&#10003;</span>
            Use color logos on white or light neutral backgrounds
          </li>
          <li className="raven-brand-logos__usage-item">
            <span className="raven-brand-logos__usage-icon raven-brand-logos__usage-icon--do">&#10003;</span>
            Use white logos on dark or brand-colored backgrounds
          </li>
          <li className="raven-brand-logos__usage-item">
            <span className="raven-brand-logos__usage-icon raven-brand-logos__usage-icon--do">&#10003;</span>
            Provide at least 16px clear space around the logo
          </li>
          <li className="raven-brand-logos__usage-item">
            <span className="raven-brand-logos__usage-icon raven-brand-logos__usage-icon--dont">&#10007;</span>
            Do not stretch, skew, or rotate the logo
          </li>
          <li className="raven-brand-logos__usage-item">
            <span className="raven-brand-logos__usage-icon raven-brand-logos__usage-icon--dont">&#10007;</span>
            Do not change the logo colors or add effects
          </li>
          <li className="raven-brand-logos__usage-item">
            <span className="raven-brand-logos__usage-icon raven-brand-logos__usage-icon--dont">&#10007;</span>
            Do not place color logo on busy or low-contrast backgrounds
          </li>
          <li className="raven-brand-logos__usage-item">
            <span className="raven-brand-logos__usage-icon raven-brand-logos__usage-icon--dont">&#10007;</span>
            Do not use the logo below 80px width for readability
          </li>
        </ul>
      </div>
    </div>
  );
};

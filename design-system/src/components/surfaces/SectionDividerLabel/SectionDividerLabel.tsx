import './SectionDividerLabel.css';

export type SectionDividerLabelProps = {
  label: string;
};

export function SectionDividerLabel({ label }: SectionDividerLabelProps) {
  return (
    <div className="raven-section-divider-label">
      <span className="raven-section-divider-label__text">{label}</span>
      <span className="raven-section-divider-label__line" role="presentation" />
    </div>
  );
}

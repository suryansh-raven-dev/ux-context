import type { ReactElement, ReactNode } from 'react';
import Typography from '@mui/material/Typography';

import './FormSectionCard.css';

export type FormSectionCardProps = {
  icon: ReactElement;
  title: string;
  children: ReactNode;
};

export function FormSectionCard({ icon, title, children }: FormSectionCardProps) {
  return (
    <div className="raven-form-section-card">
      <div className="raven-form-section-card__header">
        <span className="raven-form-section-card__icon">{icon}</span>
        <Typography
          variant="body1"
          className="raven-form-section-card__title"
        >
          {title}
        </Typography>
      </div>
      <div className="raven-form-section-card__content">
        {children}
      </div>
    </div>
  );
}

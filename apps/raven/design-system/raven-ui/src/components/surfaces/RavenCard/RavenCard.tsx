import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import './RavenCard.css';

export interface RavenCardProps {
  title?: string;
  subheader?: string;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
}

export const RavenCard: React.FC<RavenCardProps> = ({
  title, subheader, avatar, action, actions, children, className, elevated = true,
}) => (
  <Card
    className={`raven-card ${elevated ? '' : 'raven-card--flat'} ${className || ''}`.trim()}
    elevation={elevated ? 2 : 0}
  >
    {(title || avatar || action) && (
      <CardHeader
        title={title}
        subheader={subheader}
        avatar={avatar}
        action={action}
        className="raven-card__header"
      />
    )}
    <CardContent className="raven-card__content">{children}</CardContent>
    {actions && <CardActions className="raven-card__actions">{actions}</CardActions>}
  </Card>
);

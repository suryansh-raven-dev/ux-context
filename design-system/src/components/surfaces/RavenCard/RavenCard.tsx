import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';

import './RavenCard.css';

export interface RavenCardProps {
  /** Card title displayed in the header region */
  title?: string;
  /** Secondary text below the title */
  subheader?: string;
  /** Avatar element placed in the header */
  avatar?: React.ReactNode;
  /** Action element (e.g. IconButton) placed in the header */
  action?: React.ReactNode;
  /** Action buttons rendered at the card footer */
  actions?: React.ReactNode;
  /** Main card body content */
  children: React.ReactNode;
  className?: string;
  /** @deprecated Use variant="outlined" instead */
  elevated?: boolean;
  /** Controls card appearance: 'elevation' (default, with shadow) or 'outlined' (border, no shadow) */
  variant?: 'elevation' | 'outlined';
  /** Image URL rendered via CardMedia */
  media?: string;
  /** Alt text for the media image */
  mediaAlt?: string;
  /** Height in pixels for the media area. Defaults to 200. */
  mediaHeight?: number;
  /** Wraps card content in a CardActionArea, making the whole card interactive/clickable */
  actionArea?: boolean;
  /** Click handler used when actionArea is true */
  onClick?: () => void;
}

export const RavenCard: React.FC<RavenCardProps> = ({
  title, subheader, avatar, action, actions, children, className,
  elevated = true, variant, media, mediaAlt = '', mediaHeight = 200,
  actionArea = false, onClick,
}) => {
  const resolvedVariant = variant ?? (elevated ? 'elevation' : 'outlined');

  const innerContent = (
    <>
      {media && (
        <CardMedia
          component="img"
          height={mediaHeight}
          image={media}
          alt={mediaAlt}
          className="raven-card__media"
        />
      )}
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
    </>
  );

  return (
    <Card
      className={`raven-card ${resolvedVariant === 'outlined' ? 'raven-card--flat' : ''} ${className || ''}`.trim()}
      variant={resolvedVariant}
      elevation={resolvedVariant === 'outlined' ? 0 : 2}
    >
      {actionArea ? (
        <CardActionArea className="raven-card__action-area" onClick={onClick}>
          {innerContent}
        </CardActionArea>
      ) : innerContent}
      {actions && <CardActions className="raven-card__actions">{actions}</CardActions>}
    </Card>
  );
};

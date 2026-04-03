import React from 'react';

import Avatar, { AvatarProps } from '@mui/material/Avatar';

import './RavenAvatar.css';

export interface RavenAvatarProps extends AvatarProps {
  size?: 'small' | 'medium' | 'large';
  gradient?: boolean;
}

export const RavenAvatar: React.FC<RavenAvatarProps> = ({
  size = 'medium',
  gradient,
  className,
  ...props
}) => {
  const sizeClass = `raven-avatar--${size}`;
  const gradientClass = gradient ? 'raven-avatar--gradient' : '';

  return (
    <Avatar
      className={`raven-avatar ${sizeClass} ${gradientClass} ${className || ''}`.trim()}
      {...props}
    />
  );
};

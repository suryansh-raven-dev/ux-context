import { useId, useState, type ReactNode } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './ActivityTimelineItem.css';

export type ActivityTimelineUser = {
  initials: string;
  name: string;
  role: string;
  avatarColor: string;
};

export type ActivityTimelineItemProps = {
  user: ActivityTimelineUser;
  timestamp: string;
  actionLabel: string;
  expandedContent?: ReactNode;
  showConnector?: boolean;
};

/**
 * Single row in an incident activity timeline with optional expandable detail.
 */
export function ActivityTimelineItem({
  user,
  timestamp,
  actionLabel,
  expandedContent,
  showConnector = false,
}: ActivityTimelineItemProps) {
  const [expanded, setExpanded] = useState(false);
  const expandable = Boolean(expandedContent);
  const contentId = useId();

  return (
    <Box className="raven-timeline-item">
      <Box className="raven-timeline-item__track">
        <Avatar
          className="raven-timeline-item__avatar"
          sx={{
            width: 24,
            height: 24,
            fontSize: '0.625rem',
            bgcolor: user.avatarColor,
            color: 'rgba(0,0,0,0.87)',
          }}
          aria-label={`${user.name}, ${user.role}`}
        >
          {user.initials}
        </Avatar>
        {showConnector ? <Box className="raven-timeline-item__connector" /> : null}
      </Box>
      <Box className="raven-timeline-item__body">
        <Typography variant="body2" component="div" color="text.primary">
          {user.name}{' '}
          <Typography component="span" variant="body2" color="text.secondary">
            ({user.role})
          </Typography>
        </Typography>
        <Typography variant="caption" component="p" color="text.secondary" sx={{ mt: 0.25 }}>
          {timestamp}
        </Typography>
        <Box className="raven-timeline-item__card">
          <Box className="raven-timeline-item__card-row">
            <Typography variant="body2" component="span" sx={{ flex: 1 }}>
              {actionLabel}
            </Typography>
            {expandable ? (
              <IconButton
                size="small"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-controls={contentId}
                aria-label={expanded ? 'Collapse details' : 'Expand details'}
              >
                <ExpandMoreIcon
                  fontSize="small"
                  aria-hidden
                  sx={{
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: (theme) => theme.transitions.create('transform'),
                  }}
                />
              </IconButton>
            ) : null}
          </Box>
          {expandable ? (
            <Collapse in={expanded}>
              <Box id={contentId} className="raven-timeline-item__expanded" role="region">
                {expandedContent}
              </Box>
            </Collapse>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}

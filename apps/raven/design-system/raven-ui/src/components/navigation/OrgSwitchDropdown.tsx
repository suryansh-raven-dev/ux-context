import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Stack, Typography } from '@mui/material';

import './OrgSwitchDropdown.css';

const DEFAULT_GRADIENT: [string, string] = ['#757575', '#212121'];

export type OrgSwitchDropdownProps = {
  initials: string;
  name: string;
  role?: string;
  gradientColors?: [string, string];
};

/**
 * Organization switcher control (trigger surface; menu wiring is app-level).
 */
export function OrgSwitchDropdown({
  initials,
  name,
  role: roleLabel,
  gradientColors = DEFAULT_GRADIENT,
}: OrgSwitchDropdownProps) {
  const gradient = `linear-gradient(to bottom, ${gradientColors[0]}, ${gradientColors[1]})`;

  return (
    <button
      type="button"
      className="raven-org-switch"
      aria-haspopup="true"
      aria-label={`Organization: ${name}`}
    >
      <Stack direction="row" alignItems="center" spacing={1} sx={{ width: '100%', minWidth: 0 }}>
        <Box
          className="raven-org-switch__avatar"
          aria-hidden
          style={{ background: gradient }}
        >
          {initials}
        </Box>
        <Box className="raven-org-switch__info">
          <Typography variant="subtitle2" noWrap component="span" title={name}>
            {name}
          </Typography>
          {roleLabel ? (
            <Typography variant="caption" color="text.secondary" noWrap component="span">
              {roleLabel}
            </Typography>
          ) : null}
        </Box>
        <ExpandMore className="raven-org-switch__chevron" fontSize="small" aria-hidden />
      </Stack>
    </button>
  );
}

import { useState } from 'react';

import CheckRounded from '@mui/icons-material/CheckRounded';
import Description from '@mui/icons-material/DescriptionRounded';
import Event from '@mui/icons-material/EventRounded';
import PersonRounded from '@mui/icons-material/PersonRounded';
import PlaceRounded from '@mui/icons-material/PlaceRounded';
import {
  Box,
  Card,
  FormControl,
  InputAdornment,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';

import { RavenButton } from '../inputs/RavenButton/RavenButton';

import './IncidentForm.css';

type ReportingAs = 'self' | 'other';

const DEPARTMENTS = ['Operations', 'Maintenance', 'Safety', 'Engineering'];

const SECTION_ICON_COLOR = '#4A148C';

/** Figma: selected = light purple chip (#F3E5F5), unselected = white + neutral border */
const radioLabelSx = (active: boolean) => ({
  m: 0,
  mr: 2,
  px: 2,
  py: 1.25,
  minWidth: 120,
  borderRadius: '8px',
  border: '1px solid',
  borderColor: active ? '#E1BEE7' : '#E5E7EB',
  bgcolor: active ? '#F3E5F5' : '#FFFFFF',
  transition: 'background-color 0.15s ease, border-color 0.15s ease',
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
  },
});

/**
 * Figma card elevation: soft neutral lift (y-offset + large blur), not harsh/double-dark.
 * Matches typical Figma “card” layer: hairline border + diffuse shadow (no blue tint on shadow).
 */
const incidentSectionCardSx = {
  p: 0,
  borderRadius: '12px',
  bgcolor: '#ffffff',
  border: '1px solid rgba(0, 0, 0, 0.06)',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 28px rgba(0, 0, 0, 0.06)',
  overflow: 'hidden',
  backgroundImage: 'none',
} as const;

/**
 * Near-miss incident report form — layout matches Figma (cards, footer actions).
 */
export function IncidentForm() {
  const [incidentId] = useState('NM-2026-0142');
  const [dateTime, setDateTime] = useState('2026-03-15T09:30');
  const [department, setDepartment] = useState('Operations');
  const [location, setLocation] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [immediateAction, setImmediateAction] = useState('');
  const [reportingAs, setReportingAs] = useState<ReportingAs>('self');
  const [reportedOn, setReportedOn] = useState('2026-03-15');

  const handleDepartmentChange = (event: SelectChangeEvent<string>) => {
    setDepartment(event.target.value);
  };

  return (
    <Box className="raven-incident-form-shell" data-raven-incident-form="figma-v1">
      <Box component="form" className="raven-incident-form" noValidate autoComplete="off">
      <Card className="raven-incident-form__section" elevation={0} sx={{ ...incidentSectionCardSx, mb: 2.5 }}>
        <Box className="raven-incident-form__section-header">
          <Stack direction="row" alignItems="center" spacing={1} className="raven-incident-form__section-title">
            <Description sx={{ color: SECTION_ICON_COLOR }} aria-hidden />
            <Typography component="h2" id="section-report-information">
              Report Information
            </Typography>
          </Stack>
        </Box>
        <Box className="raven-incident-form__section-body">
          <Stack spacing={2}>
            <TextField
              id="incident-id"
              name="incidentId"
              label="Incident ID"
              value={incidentId}
              disabled
              size="small"
              variant="outlined"
              fullWidth
              InputProps={{ readOnly: true }}
            />
            <TextField
              id="incident-datetime"
              name="dateTime"
              label="Date & Time"
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              size="small"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Event sx={{ color: 'text.secondary' }} fontSize="small" aria-hidden />
                  </InputAdornment>
                ),
              }}
            />
            <Box>
              <Typography
                variant="overline"
                component="p"
                className="raven-incident-form__department-overline"
                id="incident-department-field-label"
              >
                Department
              </Typography>
              <FormControl fullWidth size="small" variant="outlined">
                <Select<string>
                  id="incident-department"
                  name="department"
                  value={department}
                  onChange={handleDepartmentChange}
                  aria-labelledby="incident-department-field-label"
                >
                  {DEPARTMENTS.map((dept) => (
                    <MenuItem key={dept} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <TextField
              id="exact-location"
              name="exactLocation"
              label="Exact Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              size="small"
              variant="outlined"
              fullWidth
            />
          </Stack>
        </Box>
      </Card>

      <Card className="raven-incident-form__section" elevation={0} sx={{ ...incidentSectionCardSx, mb: 2.5 }}>
        <Box className="raven-incident-form__section-header">
          <Stack direction="row" alignItems="center" spacing={1} className="raven-incident-form__section-title">
            <PlaceRounded sx={{ color: SECTION_ICON_COLOR }} aria-hidden />
            <Typography component="h2" id="section-incident-details">
              Incident Details
            </Typography>
          </Stack>
        </Box>
        <Box className="raven-incident-form__section-body">
          <Stack spacing={2}>
            <TextField
              id="short-description"
              name="shortDescription"
              label="Short Description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              multiline
              minRows={4}
              size="small"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="immediate-action"
              name="immediateAction"
              label="Immediate Action Taken"
              value={immediateAction}
              onChange={(e) => setImmediateAction(e.target.value)}
              multiline
              minRows={5}
              size="small"
              variant="outlined"
              fullWidth
            />
          </Stack>
        </Box>
      </Card>

      <Card className="raven-incident-form__section" elevation={0} sx={{ ...incidentSectionCardSx, mb: 2.5 }}>
        <Box className="raven-incident-form__section-header">
          <Stack direction="row" alignItems="center" spacing={1} className="raven-incident-form__section-title">
            <PersonRounded sx={{ color: SECTION_ICON_COLOR }} aria-hidden />
            <Typography component="h2" id="section-reporting-as">
              Reporting as
            </Typography>
          </Stack>
        </Box>
        <Box className="raven-incident-form__section-body">
          <Stack spacing={2}>
            <RadioGroup
              row
              aria-labelledby="section-reporting-as"
              name="reportingAs"
              value={reportingAs}
              onChange={(e) => setReportingAs(e.target.value as ReportingAs)}
            >
              <FormControlLabel
                value="self"
                control={<Radio size="small" sx={{ color: SECTION_ICON_COLOR, '&.Mui-checked': { color: SECTION_ICON_COLOR } }} />}
                label="Self"
                sx={radioLabelSx(reportingAs === 'self')}
              />
              <FormControlLabel
                value="other"
                control={<Radio size="small" sx={{ color: SECTION_ICON_COLOR, '&.Mui-checked': { color: SECTION_ICON_COLOR } }} />}
                label="Someone else"
                sx={{ ...radioLabelSx(reportingAs === 'other'), mr: 0 }}
              />
            </RadioGroup>
            <TextField
              id="reported-on"
              name="reportedOn"
              label="Reported on"
              type="date"
              value={reportedOn}
              onChange={(e) => setReportedOn(e.target.value)}
              size="small"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
        </Box>
      </Card>

      <Box className="raven-incident-form__footer">
        <RavenButton type="button" variant="text" color="secondary" size="large">
          Save as draft
        </RavenButton>
        <Stack direction="row" spacing={2} className="raven-incident-form__footer-actions">
          <RavenButton type="button" variant="outlined" color="secondary" size="large">
            Clear all
          </RavenButton>
          <RavenButton type="submit" variant="contained" color="secondary" size="large" startIcon={<CheckRounded />}>
            Submit
          </RavenButton>
        </Stack>
      </Box>
      </Box>
    </Box>
  );
}

import { useState } from 'react';

import CheckRounded from '@mui/icons-material/CheckRounded';
import Description from '@mui/icons-material/DescriptionRounded';
import Event from '@mui/icons-material/EventRounded';
import PersonRounded from '@mui/icons-material/PersonRounded';
import PlaceRounded from '@mui/icons-material/PlaceRounded';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { SelectChangeEvent } from '@mui/material/Select';

import { RavenButton } from '../inputs/RavenButton/RavenButton';

type ReportingAs = 'self' | 'other';

const DEPARTMENTS = ['Operations', 'Maintenance', 'Safety', 'Engineering'];

const shellSx = {
  boxSizing: 'border-box',
  minHeight: '100vh',
  width: '100%',
  backgroundColor: 'background.dark',
  px: { xs: 2, sm: 3 },
  pt: { xs: 3, sm: 4 },
  pb: { xs: 5, sm: 6 },
};

const formSx = {
  boxSizing: 'border-box',
  maxWidth: 720,
  mx: 'auto',
  background: 'transparent',
};

const outlinedInputFieldSx = {
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'divider',
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'text.secondary',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: 1,
    borderColor: 'primary.main',
  },
  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: 'divider',
  },
  '& .MuiInputLabel-root': { color: 'text.secondary' },
  '& .MuiInputLabel-root.Mui-focused': { color: 'primary.main' },
  '& .MuiInputLabel-root.Mui-disabled': { color: 'text.disabled' },
  '& .MuiOutlinedInput-input': { color: 'text.primary' },
};

const sectionCardSx = {
  p: 0,
  borderRadius: '12px',
  mb: 2.5,
  bgcolor: 'background.default',
  border: '1px solid',
  borderColor: 'divider',
  boxShadow: 1,
  overflow: 'hidden',
  backgroundImage: 'none',
} as const;

const sectionHeaderSx = {
  px: 3,
  pt: '22px',
  pb: 2,
  borderBottom: '1px solid',
  borderColor: 'divider',
};

const sectionTitleTypographySx = {
  m: 0,
  fontWeight: 600,
  fontSize: '1.125rem',
  lineHeight: 1.4,
  color: 'primary.main',
  letterSpacing: '0.01em',
  fontFamily: '"Source Sans 3", "Roboto", "Helvetica", "Arial", sans-serif',
};

const sectionIconSx = { color: 'primary.main', fontSize: 22 } as const;

const sectionBodySx = { px: 3, pt: 3, pb: '28px' };

const departmentOverlineSx = {
  mb: 0.75,
  color: 'primary.main',
  fontWeight: 600,
  letterSpacing: '0.12em',
  fontSize: '0.6875rem',
  lineHeight: 1.5,
  textTransform: 'uppercase',
  fontFamily: '"Source Sans 3", "Roboto", "Helvetica", "Arial", sans-serif',
};

const footerSx = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
  mt: 1.5,
  pt: 2,
  maxWidth: 720,
  mx: 'auto',
};

const radioLabelSx = (active: boolean) => ({
  m: 0,
  mr: 2,
  px: 2,
  py: 1.25,
  minWidth: 120,
  borderRadius: 1,
  border: '1px solid',
  borderColor: active ? 'purple.200' : 'divider',
  bgcolor: active ? 'purple.50' : 'background.default',
  transition: 'background-color 0.15s ease, border-color 0.15s ease',
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'text.primary',
  },
});

const radioControlSx = {
  color: 'primary.main',
  '&.Mui-checked': { color: 'primary.main' },
} as const;

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
    <Box data-raven-incident-form="figma-v1" sx={shellSx}>
      <Box component="form" noValidate autoComplete="off" sx={formSx}>
        <Card elevation={0} sx={sectionCardSx}>
          <Box sx={sectionHeaderSx}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ m: 0 }}>
              <Description sx={sectionIconSx} aria-hidden />
              <Typography component="h2" id="section-report-information" sx={sectionTitleTypographySx}>
                Report Information
              </Typography>
            </Stack>
          </Box>
          <Box sx={sectionBodySx}>
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
                sx={outlinedInputFieldSx}
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
                sx={outlinedInputFieldSx}
              />
              <Box>
                <Typography
                  variant="overline"
                  component="p"
                  id="incident-department-field-label"
                  sx={departmentOverlineSx}
                >
                  Department
                </Typography>
                <FormControl fullWidth size="small" variant="outlined" sx={outlinedInputFieldSx}>
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
                sx={outlinedInputFieldSx}
              />
            </Stack>
          </Box>
        </Card>

        <Card elevation={0} sx={sectionCardSx}>
          <Box sx={sectionHeaderSx}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ m: 0 }}>
              <PlaceRounded sx={sectionIconSx} aria-hidden />
              <Typography component="h2" id="section-incident-details" sx={sectionTitleTypographySx}>
                Incident Details
              </Typography>
            </Stack>
          </Box>
          <Box sx={sectionBodySx}>
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
                sx={outlinedInputFieldSx}
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
                sx={outlinedInputFieldSx}
              />
            </Stack>
          </Box>
        </Card>

        <Card elevation={0} sx={sectionCardSx}>
          <Box sx={sectionHeaderSx}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ m: 0 }}>
              <PersonRounded sx={sectionIconSx} aria-hidden />
              <Typography component="h2" id="section-reporting-as" sx={sectionTitleTypographySx}>
                Reporting as
              </Typography>
            </Stack>
          </Box>
          <Box sx={sectionBodySx}>
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
                  control={<Radio size="small" sx={radioControlSx} />}
                  label="Self"
                  sx={radioLabelSx(reportingAs === 'self')}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio size="small" sx={radioControlSx} />}
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
                sx={outlinedInputFieldSx}
              />
            </Stack>
          </Box>
        </Card>

        <Box sx={footerSx}>
          <RavenButton type="button" variant="text" color="secondary" size="large">
            Save as draft
          </RavenButton>
          <Stack direction="row" spacing={2} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1.5 }}>
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

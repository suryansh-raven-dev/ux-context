import { useState } from 'react';

import Description from '@mui/icons-material/Description';
import Engineering from '@mui/icons-material/Engineering';
import Event from '@mui/icons-material/Event';
import MarkChatRead from '@mui/icons-material/MarkChatRead';
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

import './IncidentForm.css';

type ReportingAs = 'self' | 'other';

const DEPARTMENTS = ['Operations', 'Maintenance', 'Safety', 'Engineering'];

/**
 * Self-contained near-miss incident report form (demo layout).
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
    <Box component="form" className="raven-incident-form" noValidate autoComplete="off">
      <Card
        className="raven-incident-form__section"
        elevation={2}
        sx={{
          borderRadius: '24px',
          border: '1px solid #E0E0E0',
          p: 3,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          className="raven-incident-form__section-title"
        >
          <Description sx={{ color: '#4A148C' }} fontSize="small" aria-hidden />
          <Typography component="h2" variant="h6" id="section-report-information">
            Report Information
          </Typography>
        </Stack>
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
      </Card>

      <Card
        className="raven-incident-form__section"
        elevation={2}
        sx={{
          borderRadius: '24px',
          border: '1px solid #E0E0E0',
          p: 3,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          className="raven-incident-form__section-title"
        >
          <MarkChatRead color="primary" fontSize="small" aria-hidden />
          <Typography component="h2" variant="h6" id="section-incident-details">
            Incident Details
          </Typography>
        </Stack>
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
      </Card>

      <Card
        className="raven-incident-form__section"
        elevation={2}
        sx={{
          borderRadius: '24px',
          border: '1px solid #E0E0E0',
          p: 3,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          className="raven-incident-form__section-title"
        >
          <Engineering color="primary" fontSize="small" aria-hidden />
          <Typography component="h2" variant="h6" id="section-reporting-as">
            Reporting As
          </Typography>
        </Stack>
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
              control={<Radio size="small" />}
              label="Self"
              sx={{
                m: 0,
                mr: 2,
                px: 1,
                py: 0.5,
                borderRadius: 1,
                bgcolor: reportingAs === 'self' ? '#E8F5E9' : 'transparent',
              }}
            />
            <FormControlLabel
              value="other"
              control={<Radio size="small" />}
              label="Someone else"
              sx={{
                m: 0,
                px: 1,
                py: 0.5,
                borderRadius: 1,
                bgcolor: reportingAs === 'other' ? '#E8F5E9' : 'transparent',
              }}
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
      </Card>
    </Box>
  );
}

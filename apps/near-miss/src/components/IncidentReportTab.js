import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import DescriptionIcon from "@mui/icons-material/Description";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WarningIcon from "@mui/icons-material/Warning";
import PersonIcon from "@mui/icons-material/Person";
import Section from "./Section";

// Common styles for disabled TextFields
const disabledTextFieldSx = {
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "rgba(0, 0, 0, 0.7)",
    fontSize: "1rem",
    whiteSpace: "normal",
  },
  "& .MuiInputLabel-root.Mui-disabled": {
    color: (theme) => alpha(theme.palette.text.primary, 0.7),
  },
};

function IncidentReportTab({ reportData }) {
  // Report ID Section
  const renderReportHeaderSection = () => (
    <Section title="Report Information" icon={<DescriptionIcon />}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Report ID"
            value={reportData.report_metadata.report_id}
            disabled
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Date & Time"
            value={`${reportData.report_metadata.date} ${reportData.report_metadata.time}`}
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
            disabled
          />
        </Grid>
      </Grid>
    </Section>
  );

  // Where Section
  const renderWhereSection = () => (
    <Section title="Location Information" icon={<LocationOnIcon />}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Plant/Department"
            value={reportData.location_info.plant_department}
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Exact Location"
            value={reportData.location_info.exact_location}
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
            Equipment Details
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Equipment Tag No."
            value={reportData.location_info.equipment.tag_no}
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Equipment Description"
            value={reportData.location_info.equipment.description}
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
      </Grid>
    </Section>
  );

  // What Happened Section
  const renderWhatHappenedSection = () => (
    <Section title="What Happened?" icon={<WarningIcon color="warning" />}>
      <TextField
        value={reportData.incident_details.short_description}
        disabled
        fullWidth
        multiline
        sx={disabledTextFieldSx}
      />
    </Section>
  );

  // Immediate Action Section
  const renderImmediateActionSection = () => (
    <Section title="Immediate Action Taken">
      <TextField
        value={reportData.incident_details.immediate_action}
        disabled
        fullWidth
        multiline
        variant="outlined"
        sx={disabledTextFieldSx}
      />
    </Section>
  );

  // Reporter Information Section
  const renderReporterInfoSection = () => (
    <Section title="Reporter Information" icon={<PersonIcon />}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Name"
            value={reportData.reporter_info.name}
            disabled
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="ID"
            value={reportData.reporter_info.id_no}
            disabled
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Department"
            value={reportData.reporter_info.department}
            disabled
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Reported On"
            value={`${reportData.reporter_info.report_date} ${reportData.reporter_info.report_time}`}
            disabled
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
      </Grid>
    </Section>
  );

  const isValidated = reportData.safety_validation?.status?.accepted;

  // Safety Validation Section
  const renderValidationSection = () => (
    <Section title="Safety Validation">
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Classification
      </Typography>
      <FormGroup row>
        {[
          { key: "workplace_safety_near_miss", label: "Workplace Safety Near Miss" },
          { key: "process_safety_near_miss", label: "Process Safety Near Miss" },
          { key: "unsafe_condition", label: "Unsafe Condition" },
          { key: "unsafe_act", label: "Unsafe Act" },
          { key: "other", label: "Other" },
        ].map((item) => (
          <FormControlLabel
            key={item.key}
            control={
              <Checkbox
                checked={reportData.safety_validation?.classification?.[item.key] || false}
                disabled
                sx={{
                  "&.Mui-disabled": {
                    color: (theme) =>
                      reportData.safety_validation?.classification?.[item.key]
                        ? theme.palette.primary.main
                        : theme.palette.action.disabled,
                  },
                }}
              />
            }
            label={item.label}
          />
        ))}
      </FormGroup>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Select
            select
            label="Status"
            value={reportData.safety_validation?.status || ""}
            fullWidth
            variant="outlined"
            disabled
            sx={disabledTextFieldSx}
          >
            <MenuItem value="Accepted">Accepted</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Validator Name"
            value={reportData.safety_validation?.validator_name || ""}
            fullWidth
            variant="outlined"
            disabled
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Validation Date"
            value={reportData.safety_validation?.validation_date || ""}
            fullWidth
            variant="outlined"
            disabled
            sx={disabledTextFieldSx}
          />
        </Grid>
      </Grid>
    </Section>
  );

  return (
    <Box>
      {renderReportHeaderSection()}
      {renderWhereSection()}
      {renderWhatHappenedSection()}
      {renderImmediateActionSection()}
      {renderReporterInfoSection()}
      {renderValidationSection()}
    </Box>
  );
}

export default IncidentReportTab;

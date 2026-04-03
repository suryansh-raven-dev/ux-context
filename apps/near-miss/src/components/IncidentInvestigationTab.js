import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  CircularProgress,
  Paper,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Fab,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import DescriptionIcon from "@mui/icons-material/Description";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import GroupIcon from "@mui/icons-material/Group";
import Section from "./Section";
import ReasoningModal from "./ReasoningModal";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StepSection from "./StepSection";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

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

// Common text field style without disabled state
const textFieldSx = {
  "& .MuiInputBase-input": {
    fontSize: "1rem",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent",
  },
};

// For multiline text fields
const multilineTextFieldSx = {
  ...textFieldSx,
  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent",
  },
  "& .MuiInputBase-inputMultiline": {},
  "& .MuiOutlinedInput-multiline": {
    padding: "14px", // Consistent padding
  },
};

function IncidentInvestigationTab({ reportData, investigationData, isInvestigationRunning }) {
  const [investigation, setInvestigation] = useState(investigationData);
  const [loading, setLoading] = useState({});
  const [errors, setErrors] = useState({});
  const [reasoningModal, setReasoningModal] = useState({
    open: false,
    step: null,
    reasoning: "",
  });

  // Add ref for each step section
  const stepRefs = {
    1: React.useRef(null),
    2: React.useRef(null),
    3: React.useRef(null),
    4: React.useRef(null),
    5: React.useRef(null),
    6: React.useRef(null),
    7: React.useRef(null),
  };

  useEffect(() => {
    setInvestigation(investigationData);
  }, [investigationData]);

  // Helper function to get data from the correct step
  const getStepData = (stepNumber, field) => {
    if (!investigation?.[`step_${stepNumber}`]) return null;
    return investigation[`step_${stepNumber}`][field];
  };

  // Handler for location changes
  const handleLocationChange = (field, value) => {
    setInvestigation((prev) => {
      const newState = { ...prev };
      if (!newState.step_2) {
        newState.step_2 = { location_info: {} };
      }
      if (!newState.step_2.location_info) {
        newState.step_2.location_info = {};
      }

      // Handle nested fields (e.g., equipment.tag_no)
      if (field.includes(".")) {
        const [parent, child] = field.split(".");
        if (!newState.step_2.location_info[parent]) {
          newState.step_2.location_info[parent] = {};
        }
        newState.step_2.location_info[parent][child] = value;
      } else {
        // Fix: Map the field names correctly
        const fieldMapping = {
          plant_department: "department",
          exact_location: "exact_location",
        };
        newState.step_2.location_info[fieldMapping[field] || field] = value;
      }

      return newState;
    });
  };

  // Handler for incident classification
  const handleClassificationChange = (key, checked) => {
    setInvestigation((prev) => ({
      ...prev,
      step_1: {
        ...prev.step_1,
        incident_classification: {
          ...prev.step_1?.incident_classification,
          [key]: checked,
        },
      },
    }));
  };

  // Handler for direct causes and root cause analysis checkboxes
  const handleCheckboxChange = (step, section, category, key, checked) => {
    setInvestigation((prev) => ({
      ...prev,
      [`step_${step}`]: {
        ...prev[`step_${step}`],
        [section]: {
          ...prev[`step_${step}`]?.[section],
          ...(category.includes(".")
            ? {
                // Handle Direct Causes structure (with nested categories)
                [category.split(".")[0]]: {
                  ...prev[`step_${step}`]?.[section]?.[category.split(".")[0]],
                  [category.split(".")[1]]: {
                    ...prev[`step_${step}`]?.[section]?.[category.split(".")[0]]?.[
                      category.split(".")[1]
                    ],
                    options: {
                      ...prev[`step_${step}`]?.[section]?.[category.split(".")[0]]?.[
                        category.split(".")[1]
                      ]?.options,
                      [key]: checked,
                    },
                  },
                },
              }
            : {
                // Handle RCA structure
                [category]: {
                  ...prev[`step_${step}`]?.[section]?.[category],
                  options: {
                    ...prev[`step_${step}`]?.[section]?.[category]?.options,
                    [key]: checked,
                  },
                },
              }),
        },
      },
    }));
  };

  // Handler for barrier analysis
  const handleBarrierChange = (type, value) => {
    const barriers = value.split("\n").filter((barrier) => barrier.trim());
    setInvestigation((prev) => ({
      ...prev,
      step_5: {
        ...prev.step_5,
        barrier_analysis: {
          ...prev.step_5?.barrier_analysis,
          [type]: barriers,
        },
      },
    }));
  };

  // Handler for corrective actions
  const handleCorrectiveActionChange = (actionId, field, value) => {
    setInvestigation((prev) => ({
      ...prev,
      step_6: {
        ...prev.step_6,
        corrective_actions: {
          ...prev.step_6?.corrective_actions,
          actions: prev.step_6?.corrective_actions?.actions.map((action) => {
            if (action.action_id === actionId) {
              return { ...action, [field]: value };
            }
            return action;
          }),
        },
      },
    }));
  };

  // Add handler for reasoning icon click
  const handleReasoningClick = (step) => {
    const reasoning = investigation?.[`step_${step}`]?.reasoning || "";
    console.log("Opening modal with:", { step, reasoning });
    setReasoningModal({
      open: true,
      step,
      reasoning,
    });
  };

  // Update getCurrentStep to get the next step
  const getCurrentStep = () => {
    // Find the latest step that has data
    for (let i = 7; i >= 1; i--) {
      if (investigation?.[`step_${i}`]) {
        // Return the next step (unless we're at step 7)
        return i === 7 ? 7 : i + 1;
      }
    }
    return 1;
  };

  // Location Information Section
  const renderLocationSection = () => {
    const locationInfo = getStepData(2, "location_info");
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Plant/Department"
            value={locationInfo?.department || ""}
            onChange={(e) => handleLocationChange("plant_department", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Exact Location"
            value={locationInfo?.exact_location || ""}
            onChange={(e) => handleLocationChange("exact_location", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Equipment Tag No."
            value={locationInfo?.equipment?.tag_no || ""}
            onChange={(e) => handleLocationChange("equipment.tag_no", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Equipment Description"
            value={locationInfo?.equipment?.description || ""}
            onChange={(e) => handleLocationChange("equipment.description", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
      </Grid>
    );
  };

  // Investigation Metadata Section
  const renderInvestigationMetadataSection = () => {
    const metadata = getStepData(1, "investigation_metadata");

    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Investigation ID"
            value={metadata?.investigation_id ?? ""}
            fullWidth
            variant="outlined"
            disabled
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Report ID"
            value={reportData.report_metadata.report_id || ""}
            fullWidth
            variant="outlined"
            disabled
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Date & Time"
            value={`${metadata?.date || ""} at ${metadata?.time || ""}`}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
      </Grid>
    );
  };

  // Incident Classification Section
  const renderIncidentClassificationSection = () => {
    const classification = getStepData(1, "incident_classification");
    return (
      <FormGroup row sx={{ gap: 2 }}>
        {Object.entries(classification ?? {}).map(([key, value]) => (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                checked={value ?? false}
                onChange={(e) => handleClassificationChange(key, e.target.checked)}
                sx={{
                  color: (theme) => alpha(theme.palette.text.primary, 0.7),
                }}
              />
            }
            label={key
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
            sx={{
              "& .MuiFormControlLabel-label": {
                color: (theme) => alpha(theme.palette.text.primary, 0.7),
              },
            }}
          />
        ))}
      </FormGroup>
    );
  };

  // Direct Causes Section
  const renderDirectCausesSection = () => {
    const directCauses = getStepData(3, "direct_causes");

    const renderCheckboxGroup = (section, category, options = {}) => (
      <FormGroup
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 1,
        }}
      >
        {Object.entries(options).map(([key, value]) => (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                checked={value ?? false}
                onChange={(e) =>
                  handleCheckboxChange(
                    3,
                    "direct_causes",
                    `${section}.${category}`,
                    key,
                    e.target.checked
                  )
                }
                sx={{
                  color: (theme) => alpha(theme.palette.text.primary, 0.7),
                }}
              />
            }
            label={key
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
            sx={{
              "& .MuiFormControlLabel-label": {
                color: (theme) => alpha(theme.palette.text.primary, 0.7),
              },
              margin: 0,
            }}
          />
        ))}
      </FormGroup>
    );

    return (
      <Grid container spacing={3}>
        {/* Unsafe Acts */}
        <Grid item xs={12}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: (theme) => alpha(theme.palette.text.primary, 0.9),
              mb: 2,
            }}
          >
            Unsafe Acts
          </Typography>
          <Grid container spacing={3}>
            {/* Behavioral */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  mb: 1.5,
                }}
              >
                Behavioral
              </Typography>
              <Box sx={{ mb: 2 }}>
                {renderCheckboxGroup(
                  "unsafe_acts",
                  "behavioral",
                  directCauses?.unsafe_acts?.behavioral?.options
                )}
              </Box>
            </Grid>

            {/* Organizational */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  mb: 1.5,
                }}
              >
                Organizational
              </Typography>
              <Box sx={{ mb: 2 }}>
                {renderCheckboxGroup(
                  "unsafe_acts",
                  "organizational",
                  directCauses?.unsafe_acts?.organizational?.options
                )}
              </Box>
            </Grid>

            {/* Procedural */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  mb: 1.5,
                }}
              >
                Procedural
              </Typography>
              <Box sx={{ mb: 2 }}>
                {renderCheckboxGroup(
                  "unsafe_acts",
                  "procedural",
                  directCauses?.unsafe_acts?.procedural?.options
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Unsafe Conditions */}
        <Grid item xs={12}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: (theme) => alpha(theme.palette.text.primary, 0.9),
              mb: 2,
            }}
          >
            Unsafe Conditions
          </Typography>
          <Grid container spacing={3}>
            {/* Equipment Related */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  mb: 1.5,
                }}
              >
                Equipment Related
              </Typography>
              <Box sx={{ mb: 2 }}>
                {renderCheckboxGroup(
                  "unsafe_conditions",
                  "equipment_related",
                  directCauses?.unsafe_conditions?.equipment_related?.options
                )}
              </Box>
            </Grid>

            {/* Workplace Related */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  mb: 1.5,
                }}
              >
                Workplace Related
              </Typography>
              <Box sx={{ mb: 2 }}>
                {renderCheckboxGroup(
                  "unsafe_conditions",
                  "workplace_related",
                  directCauses?.unsafe_conditions?.workplace_related?.options
                )}
              </Box>
            </Grid>

            {/* Environmental Related */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  mb: 1.5,
                }}
              >
                Environmental Related
              </Typography>
              <Box sx={{ mb: 2 }}>
                {renderCheckboxGroup(
                  "unsafe_conditions",
                  "environmental_related",
                  directCauses?.unsafe_conditions?.environmental_related?.options
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  // Root Cause Analysis Section
  const renderRootCauseAnalysisSection = () => {
    const rootCause = getStepData(4, "root_cause_analysis") || {};

    return (
      <Grid container spacing={3}>
        {/* System Factors */}
        <Grid item xs={12}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: (theme) => alpha(theme.palette.text.primary, 0.9),
              mb: 2,
            }}
          >
            System Factors
          </Typography>
          <FormGroup
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
              gap: 1,
            }}
          >
            {Object.entries(rootCause?.system_factors?.options || {}).map(([key, value]) => (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    checked={value ?? false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        4,
                        "root_cause_analysis",
                        "system_factors",
                        key,
                        e.target.checked
                      )
                    }
                    sx={{
                      color: (theme) => alpha(theme.palette.text.primary, 0.7),
                    }}
                  />
                }
                label={key
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: (theme) => alpha(theme.palette.text.primary, 0.7),
                  },
                  margin: 0,
                }}
              />
            ))}
          </FormGroup>
        </Grid>

        {/* Physical Factors */}
        <Grid item xs={12}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: (theme) => alpha(theme.palette.text.primary, 0.9),
              mb: 2,
            }}
          >
            Physical Factors
          </Typography>
          <FormGroup
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
              gap: 1,
            }}
          >
            {Object.entries(rootCause?.physical_factors?.options || {}).map(([key, value]) => (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    checked={value ?? false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        4,
                        "root_cause_analysis",
                        "physical_factors",
                        key,
                        e.target.checked
                      )
                    }
                    sx={{
                      color: (theme) => alpha(theme.palette.text.primary, 0.7),
                    }}
                  />
                }
                label={key
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: (theme) => alpha(theme.palette.text.primary, 0.7),
                  },
                  margin: 0,
                }}
              />
            ))}
          </FormGroup>
        </Grid>

        {/* Human Factors */}
        <Grid item xs={12}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: (theme) => alpha(theme.palette.text.primary, 0.9),
              mb: 2,
            }}
          >
            Human Factors
          </Typography>
          <FormGroup
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
              gap: 1,
            }}
          >
            {Object.entries(rootCause?.human_factors?.options || {}).map(([key, value]) => (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    checked={value ?? false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        4,
                        "root_cause_analysis",
                        "human_factors",
                        key,
                        e.target.checked
                      )
                    }
                    sx={{
                      color: (theme) => alpha(theme.palette.text.primary, 0.7),
                    }}
                  />
                }
                label={key
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: (theme) => alpha(theme.palette.text.primary, 0.7),
                  },
                  margin: 0,
                }}
              />
            ))}
          </FormGroup>
        </Grid>
      </Grid>
    );
  };

  // Barrier Analysis Section
  const renderBarrierAnalysisSection = () => {
    const barrier = getStepData(5, "barrier_analysis") || {};
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <ErrorIcon color="error" fontSize="small" />
              Failed Barriers
            </Typography>
            <TextField
              label="Failed Barriers"
              value={barrier?.failed?.join("\n") || ""}
              fullWidth
              multiline
              minRows={2}
              variant="outlined"
              onChange={(e) => handleBarrierChange("failed", e.target.value)}
              sx={multilineTextFieldSx}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <CheckCircleIcon color="success" fontSize="small" />
              Successful Barriers
            </Typography>
            <TextField
              value={barrier?.successful?.join("\n") || ""}
              fullWidth
              multiline
              minRows={2}
              variant="outlined"
              onChange={(e) => handleBarrierChange("successful", e.target.value)}
              sx={multilineTextFieldSx}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <WarningIcon color="warning" fontSize="small" />
              Missing Barriers
            </Typography>
            <TextField
              value={barrier?.missing?.join("\n") || ""}
              fullWidth
              multiline
              minRows={2}
              variant="outlined"
              onChange={(e) => handleBarrierChange("missing", e.target.value)}
              sx={multilineTextFieldSx}
            />
          </Box>
        </Grid>
      </Grid>
    );
  };

  // Conclusions Section
  const renderConclusionsSection = () => {
    const conclusions = getStepData(7, "conclusions") || {};

    const handleConclusionChange = (field, value) => {
      setInvestigation((prev) => ({
        ...prev,
        step_7: {
          ...prev.step_7,
          conclusions: {
            ...prev.step_7?.conclusions,
            [field]: value,
          },
        },
      }));
    };

    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Incident Cause"
            value={conclusions?.incident_cause || ""}
            onChange={(e) => handleConclusionChange("incident_cause", e.target.value)}
            fullWidth
            multiline
            variant="outlined"
            sx={multilineTextFieldSx}
            error={!!errors.conclusions}
            helperText={errors.conclusions}
            InputProps={{
              endAdornment: loading.conclusions && <CircularProgress size={20} />,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Prevention Possibility"
            value={conclusions?.prevention_possibility || ""}
            onChange={(e) => handleConclusionChange("prevention_possibility", e.target.value)}
            fullWidth
            multiline
            variant="outlined"
            sx={multilineTextFieldSx}
          />
        </Grid>
      </Grid>
    );
  };

  // Corrective Actions Section
  const renderCorrectiveActionsSection = () => {
    const correctiveActions = getStepData(6, "corrective_actions");
    const actions = correctiveActions?.actions || [];

    // Define type options with their colors
    const typeOptions = [
      { value: "immediate", label: "Immediate", color: "warning" },
      { value: "short-term", label: "Short-term", color: "info" },
      { value: "long-term", label: "Long-term", color: "success" },
      { value: "system change", label: "System Change", color: "secondary" },
    ];

    return (
      <Grid container spacing={3}>
        {actions.map((action) => (
          <Grid item xs={12} key={action.action_id}>
            <Paper
              elevation={0}
              variant="outlined"
              sx={{
                p: 2,
                backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.7),
              }}
            >
              <Grid container spacing={2}>
                {/* Header row with ID and Status */}
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      // justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, mr: 2 }}>
                      {action.action_id}
                    </Typography>
                    <Chip
                      label={action.status}
                      size="small"
                      sx={{
                        backgroundColor: (theme) =>
                          action.status.toLowerCase() === "open"
                            ? alpha(theme.palette.warning.main, 0.1)
                            : alpha(theme.palette.success.main, 0.1),
                        color: (theme) =>
                          action.status.toLowerCase() === "open"
                            ? theme.palette.warning.main
                            : theme.palette.success.main,
                      }}
                    />
                  </Box>
                </Grid>

                {/* Recommendation with dynamic height */}
                <Grid item xs={12}>
                  <TextField
                    label="Recommendation"
                    value={action.recommendation || ""}
                    onChange={(e) =>
                      handleCorrectiveActionChange(
                        action.action_id,
                        "recommendation",
                        e.target.value
                      )
                    }
                    fullWidth
                    multiline
                    minRows={2}
                    variant="outlined"
                    sx={multilineTextFieldSx}
                  />
                </Grid>

                {/* Footer row with Responsibility, Type and Target Date */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Responsibility"
                    value={action.responsibility || ""}
                    onChange={(e) =>
                      handleCorrectiveActionChange(
                        action.action_id,
                        "responsibility",
                        e.target.value
                      )
                    }
                    fullWidth
                    variant="outlined"
                    sx={textFieldSx}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <InputLabel>Type</InputLabel>
                    <Select
                      value={action.type.toLowerCase() || ""}
                      label="Type"
                      onChange={(e) =>
                        handleCorrectiveActionChange(action.action_id, "type", e.target.value)
                      }
                    >
                      {typeOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          <Chip
                            label={option.label}
                            size="small"
                            color={option.color}
                            sx={{
                              backgroundColor: (theme) =>
                                alpha(theme.palette[option.color].main, 0.1),
                              color: (theme) => theme.palette[option.color].main,
                              ".MuiChip-label": {
                                px: 1,
                              },
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Target Date"
                    value={action.target_date || ""}
                    fullWidth
                    variant="outlined"
                    disabled
                    sx={disabledTextFieldSx}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  };

  // Investigation Team Section
  const renderInvestigationTeamSection = () => {
    const investigationTeam = getStepData(7, "investigation_team") || [];

    const handleTeamMemberChange = (index, field, value) => {
      setInvestigation((prev) => ({
        ...prev,
        step_7: {
          ...prev.step_7,
          investigation_team: prev.step_7?.investigation_team.map((member, i) => {
            if (i === index) {
              return { ...member, [field]: value };
            }
            return member;
          }),
        },
      }));
    };

    return (
      <Grid container spacing={2}>
        {investigationTeam.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <TextField
              label="Name"
              value={member?.name || ""}
              onChange={(e) => handleTeamMemberChange(index, "name", e.target.value)}
              fullWidth
              variant="outlined"
              sx={textFieldSx}
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  // Investigation Approval Section
  const renderInvestigationApprovalSection = () => {
    const approval = getStepData(7, "approval") || {};

    const handleApprovalChange = (field, value) => {
      setInvestigation((prev) => ({
        ...prev,
        step_7: {
          ...prev.step_7,
          approval: {
            ...prev.step_7?.approval,
            [field]: value,
          },
        },
      }));
    };

    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Reviewer Name"
            value={approval?.reviewed_by || ""}
            onChange={(e) => handleApprovalChange("reviewed_by", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
            error={!!errors.approval}
            helperText={errors.approval}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="ID"
            value={approval?.reviewer_id || ""}
            onChange={(e) => handleApprovalChange("reviewer_id", e.target.value)}
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Designation"
            value={approval?.designation || ""}
            onChange={(e) => handleApprovalChange("designation", e.target.value)}
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Approval Date"
            value={approval?.date || ""}
            onChange={(e) => handleApprovalChange("date", e.target.value)}
            fullWidth
            variant="outlined"
            sx={disabledTextFieldSx}
          />
        </Grid>
        {approval?.comments && (
          <Grid item xs={12}>
            <TextField
              label="Comments"
              value={approval?.comments}
              onChange={(e) => handleApprovalChange("comments", e.target.value)}
              fullWidth
              multiline
              variant="outlined"
              sx={multilineTextFieldSx}
            />
          </Grid>
        )}
      </Grid>
    );
  };

  // Update the StepTitle rendering
  const renderStepTitle = (step, title) => {
    // Check if there's reasoning data for this step
    const hasReasoning = investigation?.[`step_${step}`]?.reasoning;

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          mb: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
              color: (theme) => theme.palette.primary.main,
              borderRadius: "50%",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
            }}
          >
            {step}
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontSize: "1.25rem",
              fontWeight: 500,
              color: (theme) => alpha(theme.palette.text.primary, 0.75),
            }}
          >
            {title}
          </Typography>
        </Box>
        {hasReasoning && (
          <PsychologyIcon
            onClick={() => handleReasoningClick(step)}
            sx={{
              color: (theme) => alpha(theme.palette.text.secondary, 0.65),
              cursor: "pointer",
              "&:hover": {
                color: (theme) => alpha(theme.palette.text.secondary, 0.8),
              },
            }}
          />
        )}
      </Box>
    );
  };

  const currentStep = getCurrentStep();

  return (
    <Box>
      {/* Update each StepSection to include current step info */}
      <StepSection
        ref={stepRefs[1]}
        title={renderStepTitle(1, "Investigation Information and Classification")}
        step={1}
        isCurrentStep={currentStep === 1}
        isInvestigationRunning={isInvestigationRunning}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {renderInvestigationMetadataSection()}
          </Grid>
          <Grid item xs={12}>
            {renderIncidentClassificationSection()}
          </Grid>
        </Grid>
      </StepSection>

      <StepSection
        ref={stepRefs[2]}
        title={renderStepTitle(2, "Location Information")}
        step={2}
        isCurrentStep={currentStep === 2}
        isInvestigationRunning={isInvestigationRunning}
      >
        {renderLocationSection()}
      </StepSection>

      <StepSection
        ref={stepRefs[3]}
        title={renderStepTitle(3, "Direct Causes Analysis")}
        step={3}
        isCurrentStep={currentStep === 3}
        isInvestigationRunning={isInvestigationRunning}
      >
        {renderDirectCausesSection()}
      </StepSection>

      <StepSection
        ref={stepRefs[4]}
        title={renderStepTitle(4, "Root Cause Analysis")}
        step={4}
        isCurrentStep={currentStep === 4}
        isInvestigationRunning={isInvestigationRunning}
      >
        {renderRootCauseAnalysisSection()}
      </StepSection>

      <StepSection
        ref={stepRefs[5]}
        title={renderStepTitle(5, "Barrier Analysis")}
        step={5}
        isCurrentStep={currentStep === 5}
        isInvestigationRunning={isInvestigationRunning}
      >
        {renderBarrierAnalysisSection()}
      </StepSection>

      <StepSection
        ref={stepRefs[6]}
        title={renderStepTitle(6, "Corrective Actions")}
        step={6}
        isCurrentStep={currentStep === 6}
        isInvestigationRunning={isInvestigationRunning}
      >
        {renderCorrectiveActionsSection()}
      </StepSection>

      <StepSection
        ref={stepRefs[7]}
        title={renderStepTitle(7, "Conclusions and Approval")}
        step={7}
        isCurrentStep={currentStep === 7}
        isInvestigationRunning={isInvestigationRunning}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {renderConclusionsSection()}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Investigation Team
            </Typography>
            {renderInvestigationTeamSection()}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Approval
            </Typography>
            {renderInvestigationApprovalSection()}
          </Grid>
        </Grid>
      </StepSection>

      {/* Add ReasoningModal */}
      <ReasoningModal
        open={reasoningModal.open}
        onClose={() => setReasoningModal({ ...reasoningModal, open: false })}
        step={reasoningModal.step}
        reasoning={reasoningModal.reasoning}
      />
      {console.log("Modal state:", reasoningModal)}
    </Box>
  );
}

export default IncidentInvestigationTab;

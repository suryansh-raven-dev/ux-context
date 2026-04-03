import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Breadcrumbs,
  Link,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  ListItemText,
  Chip,
  CircularProgress,
} from "@mui/material";
import QueryTab from "./QueryTab";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import VerifiedIcon from "@mui/icons-material/Verified";
import { alpha } from "@mui/material/styles";
import ChatMessages from "./ChatMessages";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import GroupIcon from "@mui/icons-material/Group";
import FormConfig from "../config/form_config.json";
import {
  getAIAnalysis,
  getChatHistory,
  executeAgent,
  getFormState,
  getAgentStatus,
} from "../api/mockApi";
import Section from "./Section";
import investigation_report_config from "../config/investigation_report_config.json";
import IncidentReportTab from "./IncidentReportTab";
import IncidentInvestigationTab from "./IncidentInvestigationTab";

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

// Helper TabPanel component for our two-tab layout.
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`detail-tabpanel-${index}`}
      aria-labelledby={`detail-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

// Convert snake_case to Title Case for labels
const toTitleCase = (str) =>
  str
    .replace(/_/g, " ")
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

// This helper renders a single field based on its config type.
function renderField(fieldKey, fieldConfig, fieldValue) {
  // Case 1: Primitive types (string, date, time)
  if (typeof fieldConfig === "string") {
    // A simple heuristic: if the key name includes "description" or "action" use multiline.
    const multiline = fieldKey.includes("description") || fieldKey.includes("action");
    return (
      <Grid item xs={12} key={fieldKey}>
        <TextField
          label={toTitleCase(fieldKey)}
          value={fieldValue || ""}
          disabled
          fullWidth
          variant="outlined"
          sx={disabledTextFieldSx}
          multiline={multiline}
        />
      </Grid>
    );
  }
  // Case 2: When the field config has an "options" property.
  if (typeof fieldConfig === "object" && fieldConfig.options) {
    // If the options are provided as an array, use a dropdown.
    if (Array.isArray(fieldConfig.options)) {
      return (
        <Grid item xs={12} key={fieldKey}>
          <FormControl fullWidth variant="outlined" size="small" disabled>
            <InputLabel>{toTitleCase(fieldKey)}</InputLabel>
            <Select value={fieldValue || ""} label={toTitleCase(fieldKey)}>
              {fieldConfig.options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      );
    }
    // If the options is an object, then render a set of checkboxes.
    if (typeof fieldConfig.options === "object") {
      return (
        <Grid item xs={12} key={fieldKey}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {toTitleCase(fieldKey)}
          </Typography>
          <FormGroup row>
            {Object.entries(fieldConfig.options).map(([optKey, optType]) => (
              <FormControlLabel
                key={optKey}
                control={
                  <Checkbox
                    checked={fieldValue ? fieldValue[optKey] : false}
                    disabled
                    sx={{
                      color: (theme) =>
                        fieldValue && fieldValue[optKey]
                          ? theme.palette.primary.main
                          : alpha(theme.palette.text.primary, 0.3),
                    }}
                  />
                }
                label={toTitleCase(optKey)}
              />
            ))}
          </FormGroup>
        </Grid>
      );
    }
  }
  // Case 3: Nested object (with no "options") – render its subfields recursively.
  if (typeof fieldConfig === "object") {
    return (
      <Grid item xs={12} key={fieldKey}>
        <Box sx={{ border: "1px solid #ccc", borderRadius: 1, p: 2, mt: 1 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            {toTitleCase(fieldKey)}
          </Typography>
          <Grid container spacing={2}>
            {renderConfigFields(fieldConfig, fieldValue || {})}
          </Grid>
        </Box>
      </Grid>
    );
  }
  return null;
}

// Renders all fields inside a configuration object.
function renderConfigFields(config, data) {
  return Object.entries(config).map(([key, conf]) => renderField(key, conf, data[key]));
}

// Optional helper: get an icon based on a section's key.
function getIconForSection(sectionKey) {
  switch (sectionKey) {
    case "report_metadata":
      return <DescriptionIcon />;
    case "location_info":
      return <LocationOnIcon />;
    case "incident_details":
      return <WarningIcon color="warning" />;
    case "reporter_info":
      return <PersonIcon />;
    case "safety_validation":
      return <VerifiedIcon />;
    default:
      return null;
  }
}

// Render a whole dynamic section
function renderDynamicSection(sectionKey, sectionConfig, sectionData) {
  return (
    <Section key={sectionKey} title={toTitleCase(sectionKey)} icon={getIconForSection(sectionKey)}>
      <Grid container spacing={2}>
        {renderConfigFields(sectionConfig, sectionData || {})}
      </Grid>
    </Section>
  );
}

function IncidentDetail({ selectedIncident, selectedInvestigation, onBack }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isInvestigationRunning, setIsInvestigationRunning] = useState(false);
  const [currentInvestigation, setCurrentInvestigation] = useState(selectedInvestigation);
  const [agentId, setAgentId] = useState(null);
  const [agentStep, setAgentStep] = useState(0);

  // Get the report data from either new or old structure
  const reportData = selectedIncident;

  // Get investigation data from either new or old structure
  const investigationData = selectedInvestigation;

  // Helper function to check if investigation is complete
  const isInvestigationComplete = (investigation) => {
    return investigation?.approval?.reviewed_by;
  };

  useEffect(() => {
    async function loadChatHistory() {
      try {
        setIsLoading(true);
        const history = await getChatHistory(reportData.report_metadata.report_id);

        if (history.length === 0) {
          // Get initial analysis if no history exists
          const response = await getAIAnalysis(reportData.report_metadata.report_id);
          setMessages([
            {
              role: "assistant",
              content:
                response.ai_analysis ||
                "Hello! I can help you understand this near-miss report better. What would you like to know?",
              created_at: Date.now(),
            },
          ]);
        } else {
          setMessages(history);
        }
      } catch (error) {
        console.error("Error loading chat history:", error);
        setMessages([
          {
            role: "assistant",
            content:
              "Hello! I can help you understand this near-miss report better. What would you like to know?",
            created_at: Date.now(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }

    loadChatHistory();
  }, [reportData.report_metadata.report_id]);

  // Update polling logic to use agent status
  useEffect(() => {
    let pollInterval;

    const pollInvestigation = async () => {
      try {
        // First check agent status
        if (agentId) {
          const agentStatus = await getAgentStatus(agentId);
          setAgentStep(agentStatus.steps || 0);

          if (agentStatus.status === "completed") {
            setIsInvestigationRunning(false);
            clearInterval(pollInterval);
            // Get final investigation data
            const formData = await getFormState(selectedIncident.formId);
            const investigation = formData.state?.near_miss_investigation;
            if (investigation) {
              setCurrentInvestigation(investigation);
            }
            setAgentId(null);
            setAgentStep(0);
            return;
          }
        }

        // Get current investigation state
        const formData = await getFormState(selectedIncident.formId);
        const investigation = formData.state?.near_miss_investigation;
        if (investigation) {
          setCurrentInvestigation(investigation);
        }
      } catch (error) {
        console.error("Error polling investigation:", error);
        setIsInvestigationRunning(false);
        setAgentId(null);
        setAgentStep(0);
        clearInterval(pollInterval);
      }
    };

    // Start polling when investigation is running
    if (isInvestigationRunning) {
      pollInterval = setInterval(pollInvestigation, 5000); // Poll every 5 seconds
    }

    return () => {
      if (pollInterval) {
        clearInterval(pollInterval);
      }
    };
  }, [isInvestigationRunning, selectedIncident.formId, agentId]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Update run investigation handler
  const handleRunInvestigation = async () => {
    try {
      setIsInvestigationRunning(true);
      const response = await executeAgent({
        form_id: selectedIncident.formId,
        category: "near_miss_investigation",
      });

      if (!response.agent_id) {
        throw new Error("Failed to start investigation");
      }

      setAgentId(response.agent_id);
    } catch (error) {
      console.error("Failed to start investigation:", error);
      setIsInvestigationRunning(false);
      setAgentId(null);
      setAgentStep(0);
    }
  };

  // -------------------- COMPOSE FINAL RENDERING --------------------

  const handleSendMessage = async () => {
    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      content: question,
      created_at: Date.now(),
    };

    // Add user message immediately
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setIsTyping(true);

    try {
      const response = await getAIAnalysis(reportData.report_metadata.report_id, question);

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.ai_analysis,
          created_at: Date.now(),
        },
      ]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I had trouble processing your question. Please try again.",
          created_at: Date.now(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Update ChatMessages component to handle loading state
  const renderChatMessages = () => {
    if (isLoading && messages.length === 0) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <CircularProgress />
        </Box>
      );
    }

    return <ChatMessages messages={messages} isTyping={isTyping} />;
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          mb: 3,
          "& .MuiBreadcrumbs-ol": {
            alignItems: "center",
          },
        }}
      >
        <Link
          component="button"
          variant="body1"
          onClick={onBack}
          sx={{
            textDecoration: "none",
            color: (theme) => theme.palette.primary.main,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Incidents
        </Link>
        <Typography color="text.primary">{reportData.report_metadata.report_id}</Typography>
      </Breadcrumbs>

      <Grid container spacing={2}>
        {/* Left side: Incident & Investigation tabs */}
        <Grid item xs={12} md={8}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              aria-label="Incident Detail Tabs"
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                flex: 1,
                "& .MuiTabs-flexContainer": {
                  justifyContent: "flex-start",
                },
                minHeight: "48px",
              }}
              TabIndicatorProps={{
                sx: {
                  height: 3,
                },
              }}
            >
              <Tab
                label="Incident"
                id="detail-tab-0"
                aria-controls="detail-tabpanel-0"
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  minHeight: "48px",
                  px: 3,
                }}
              />
              <Tab
                label="Investigation"
                id="detail-tab-1"
                aria-controls="detail-tabpanel-1"
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  minHeight: "48px",
                  px: 3,
                }}
              />
            </Tabs>
            {/* Show Run Investigation button until agent completes */}
            {tabIndex === 1 && (isInvestigationRunning || !currentInvestigation) && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleRunInvestigation}
                disabled={isInvestigationRunning}
                sx={{ ml: 2 }}
              >
                {isInvestigationRunning ? (
                  <>
                    <CircularProgress size={20} sx={{ mr: 1 }} />
                    Executing Agent
                  </>
                ) : (
                  "Run Investigation"
                )}
              </Button>
            )}
          </Box>
          <TabPanel value={tabIndex} index={0}>
            <IncidentReportTab reportData={reportData} />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <IncidentInvestigationTab
              reportData={reportData}
              investigationData={currentInvestigation}
              isInvestigationRunning={isInvestigationRunning}
            />
          </TabPanel>
        </Grid>
        {/* Right side: Chat Assistant panel */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            position: "fixed",
            right: 0,
            top: 64,
            bottom: 0,
            width: "33.33%",
            padding: 2,
            transition: "all 0.3s ease",
            transform: isMinimized ? "translateY(calc(100% - 90px))" : "none",
            overflowY: "hidden",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              maxHeight: "calc(100vh - 80px)",
            }}
          >
            <CardContent
              sx={{
                p: 2,
                pb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: (theme) => alpha(theme.palette.action.hover, 0.1),
                },
              }}
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: (theme) => alpha(theme.palette.text.primary, 0.7),
                    fontWeight: 500,
                  }}
                >
                  Near Miss Assistant
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: (theme) => alpha(theme.palette.text.primary, 0.5),
                  }}
                >
                  #{reportData.report_metadata.report_id}
                </Typography>
              </Box>
              {isMinimized ? (
                <KeyboardArrowUpIcon
                  sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.5) }}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.5) }}
                />
              )}
            </CardContent>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  overflowY: "auto",
                  minHeight: 0,
                }}
              >
                {renderChatMessages()}
              </Box>
              <Box
                sx={{
                  p: 2,
                  borderTop: "1px solid",
                  borderColor: "divider",
                  backgroundColor: (theme) => alpha(theme.palette.background.default, 0.9),
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Ask a question about this near miss"
                    variant="outlined"
                    size="small"
                    disabled={isLoading}
                    sx={{
                      "& .MuiInputBase-root": {
                        fontSize: "0.875rem",
                      },
                    }}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !isLoading) {
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSendMessage}
                    disabled={isLoading}
                    sx={{
                      minWidth: "auto",
                      px: 2,
                      height: "40px",
                    }}
                  >
                    {isLoading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <SendIcon fontSize="small" />
                    )}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default IncidentDetail;

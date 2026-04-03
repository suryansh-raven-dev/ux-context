import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Paper,
  Collapse,
  Tabs,
  Tab,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import RefreshIcon from "@mui/icons-material/Refresh";
import SaveIcon from "@mui/icons-material/Save";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ChatMessages from "./ChatMessages";
import {
  createFormAssistant,
  getFormState,
  submitFormResponse,
  getConversationMessages,
  updateFormState,
} from "../api/mockApi";
import { v4 as uuidv4 } from "uuid";
import Section from "./Section";
import DescriptionIcon from "@mui/icons-material/Description";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WarningIcon from "@mui/icons-material/Warning";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 400,
  marginRight: theme.spacing(3),
  padding: theme.spacing(1, 0),
  "&.Mui-selected": {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    height: "3px",
  },
}));

// Common styles for text fields (borrowed from IncidentDetail.js)
const textFieldSx = {
  "& .MuiInputBase-input": {
    fontSize: "1rem",
    whiteSpace: "normal",
  },
};

function CreateReportTab() {
  const [formState, setFormState] = useState(null);
  const [formId, setFormId] = useState(null);
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [initialDescription, setInitialDescription] = useState("");
  const [isInitialSubmitted, setIsInitialSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const [isCompleted, setIsCompleted] = useState(false);
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);

  // Add new state to track manual changes
  const [hasManualChanges, setHasManualChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const loadConversationMessages = async (convId) => {
    try {
      const apiMessages = await getConversationMessages(convId);
      setMessages((prevMessages) => {
        if (JSON.stringify(prevMessages) !== JSON.stringify(apiMessages)) {
          // Reverse the messages array to show newest messages last
          return [...apiMessages].reverse();
        }
        return prevMessages;
      });
    } catch (error) {
      console.error("Error loading conversation messages:", error);
    }
  };

  useEffect(() => {
    // Load saved state from localStorage on component mount
    const savedState = localStorage.getItem("reportState");
    if (savedState) {
      console.log("Loading saved state:", savedState);
      const {
        formId: savedFormId,
        messages: savedMessages,
        formState: savedFormState,
        conversationId: savedConversationId,
      } = JSON.parse(savedState);

      // Set all the state in a specific order
      setFormId(savedFormId);
      setMessages(savedMessages || []);
      setFormState(savedFormState);
      setConversationId(savedConversationId);
      setIsInitialSubmitted(true); // This should trigger the main form view

      // Load fresh messages from the API if we have a conversation ID
      if (savedConversationId) {
        loadConversationMessages(savedConversationId);
      }

      // Also load fresh form state if we have a form ID
      if (savedFormId) {
        getFormState(savedFormId)
          .then((response) => {
            if (response && response.state) {
              setFormState(response.state.near_miss_report);
              setConversationId(response.conversation_id);
            }
          })
          .catch((error) => {
            console.error("Error fetching form state:", error);
          });
      }
    }
  }, []);

  // Add a debug useEffect to track state changes
  useEffect(() => {
    console.log("Current state:", {
      formId,
      messages,
      formState,
      isInitialSubmitted,
      conversationId,
    });
  }, [formId, messages, formState, isInitialSubmitted, conversationId]);

  useEffect(() => {
    // Save state to localStorage whenever it changes
    if (formId && isInitialSubmitted) {
      localStorage.setItem(
        "reportState",
        JSON.stringify({
          formId,
          messages,
          formState,
          conversationId,
        })
      );
    }
  }, [formId, messages, formState, isInitialSubmitted, conversationId]);

  const initializeForm = async () => {
    try {
      setIsLoading(true);
      // First create a new form and get the form_id
      const response = await createFormAssistant();
      setFormId(response.id);
      setConversationId(response.conversation_id);
      console.log(
        "Created form with ID:",
        response.id,
        "and conversation ID:",
        response.conversation_id
      );

      // Then fetch the initial form state
      const formResponse = await getFormState(response.id);
      console.log("Form assistant response:", formResponse);

      if (formResponse && formResponse.state) {
        setFormState(formResponse.state.near_miss_report);
        return response.id;
      } else {
        console.error("Invalid response structure:", formResponse);
        setFormState({});
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Error initializing form:", error);
      setFormState({});
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleInitialSubmit = async () => {
    if (!initialDescription.trim()) return;
    setIsLoading(true);

    try {
      // First initialize the form assistant
      const initializedFormId = await initializeForm();
      console.log("Form initialized with ID:", initializedFormId);

      // Then submit the initial description
      const questionId = uuidv4();
      const initialUserMessage = {
        role: "user",
        content: initialDescription,
        created_at: new Date().toISOString(),
      };
      // Add new message at the end
      setMessages([initialUserMessage]);

      setIsInitialSubmitted(true);
      setIsTyping(true);

      console.log("Submitting initial description:", {
        formId: initializedFormId,
        description: initialDescription,
        questionId,
      });

      const response = await submitFormResponse(initializedFormId, initialDescription, questionId);

      if (response.form_state) {
        setFormState(response.form_state.near_miss_report);
      }

      if (response.ai_response && response.ai_response.content) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: response.ai_response.content,
            created_at: new Date().toISOString(),
          },
        ]);
      }
    } catch (error) {
      console.error("Error in initial submission:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, an error occurred during initialization.",
          created_at: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!userInput.trim()) return;

    const questionId = uuidv4();
    const userMessage = {
      role: "user",
      content: userInput,
      created_at: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setIsTyping(true);

    try {
      const response = await submitFormResponse(formId, userInput, questionId);

      if (response.form_state) {
        console.log("Form state:", response.form_state);
        setFormState(response.form_state.near_miss_report);
        setHasManualChanges(false); // Reset manual changes when receiving new state from AI
      }

      if (response.completed) {
        setIsCompleted(true);
        setShowCompletionDialog(true);
      }

      if (response.ai_response && response.ai_response.content) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: response.ai_response.content,
            created_at: new Date().toISOString(),
          },
        ]);
      }
    } catch (error) {
      console.error("Error submitting response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
          created_at: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleStartOver = () => {
    setFormId(null);
    setConversationId(null);
    setMessages([]);
    setFormState(null);
    setUserInput("");
    setInitialDescription("");
    setIsInitialSubmitted(false);
    setActiveTab(0);
    localStorage.removeItem("reportState");
  };

  // Borrowed from IncidentDetail.js
  const renderReportHeaderSection = () => (
    <Section title="Report Information" icon={<DescriptionIcon />}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Report ID"
            value={formState?.report_metadata?.report_id || ""}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            variant="outlined"
            sx={{
              ...textFieldSx,
              "& .MuiInputBase-input.Mui-readOnly": {
                backgroundColor: (theme) => theme.palette.action.hover,
                cursor: "default",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Date"
            value={formState?.report_metadata?.date || ""}
            onChange={(e) => handleFieldChange("report_metadata.date", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Time"
            value={formState?.report_metadata?.time || ""}
            onChange={(e) => handleFieldChange("report_metadata.time", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
      </Grid>
    </Section>
  );

  const renderWhereSection = () => (
    <Section title="Location Information" icon={<LocationOnIcon />}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Plant Department"
            value={formState?.location_info?.plant_department || ""}
            onChange={(e) => handleFieldChange("location_info.plant_department", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Exact Location"
            value={formState?.location_info?.exact_location || ""}
            onChange={(e) => handleFieldChange("location_info.exact_location", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Equipment Details
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Equipment Tag No."
            value={formState?.location_info?.equipment?.tag_no || ""}
            onChange={(e) => handleFieldChange("location_info.equipment.tag_no", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Equipment Description"
            value={formState?.location_info?.equipment?.description || ""}
            onChange={(e) =>
              handleFieldChange("location_info.equipment.description", e.target.value)
            }
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
      </Grid>
    </Section>
  );

  const renderWhatHappenedSection = () => (
    <Section title="What Happened?" icon={<WarningIcon color="warning" />}>
      <TextField
        value={formState?.incident_details?.short_description || ""}
        onChange={(e) => handleFieldChange("incident_details.short_description", e.target.value)}
        fullWidth
        multiline
        rows={3}
        variant="outlined"
        sx={textFieldSx}
      />
    </Section>
  );

  const renderImmediateActionSection = () => (
    <Section title="Immediate Action Taken">
      <TextField
        value={formState?.incident_details?.immediate_action || ""}
        onChange={(e) => handleFieldChange("incident_details.immediate_action", e.target.value)}
        fullWidth
        multiline
        rows={3}
        variant="outlined"
        sx={textFieldSx}
      />
    </Section>
  );

  const renderReporterInfoSection = () => (
    <Section title="Reporter Information" icon={<PersonIcon />}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Name"
            value={formState?.reporter_info?.name || ""}
            onChange={(e) => handleFieldChange("reporter_info.name", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="ID"
            value={formState?.reporter_info?.id_no || ""}
            onChange={(e) => handleFieldChange("reporter_info.id_no", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Department"
            value={formState?.reporter_info?.department || ""}
            onChange={(e) => handleFieldChange("reporter_info.department", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Report Date"
            value={formState?.reporter_info?.report_date || ""}
            onChange={(e) => handleFieldChange("reporter_info.report_date", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Report Time"
            value={formState?.reporter_info?.report_time || ""}
            onChange={(e) => handleFieldChange("reporter_info.report_time", e.target.value)}
            fullWidth
            variant="outlined"
            sx={textFieldSx}
            type="time"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
    </Section>
  );

  const renderValidationSection = () => (
    <Section title="Safety Validation">
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Classification
      </Typography>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={
                formState?.safety_validation?.classification?.workplace_safety_near_miss || false
              }
              onChange={(e) =>
                handleFieldChange(
                  "safety_validation.classification.workplace_safety_near_miss",
                  e.target.checked
                )
              }
            />
          }
          label="Workplace Safety Near Miss"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={
                formState?.safety_validation?.classification?.process_safety_near_miss || false
              }
              onChange={(e) =>
                handleFieldChange(
                  "safety_validation.classification.process_safety_near_miss",
                  e.target.checked
                )
              }
            />
          }
          label="Process Safety Near Miss"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formState?.safety_validation?.classification?.unsafe_condition || false}
              onChange={(e) =>
                handleFieldChange(
                  "safety_validation.classification.unsafe_condition",
                  e.target.checked
                )
              }
            />
          }
          label="Unsafe Condition"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formState?.safety_validation?.classification?.unsafe_act || false}
              onChange={(e) =>
                handleFieldChange("safety_validation.classification.unsafe_act", e.target.checked)
              }
            />
          }
          label="Unsafe Act"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formState?.safety_validation?.classification?.other || false}
              onChange={(e) =>
                handleFieldChange("safety_validation.classification.other", e.target.checked)
              }
            />
          }
          label="Other"
        />
      </FormGroup>
    </Section>
  );

  const renderFormFields = () =>
    console.log("Rendering form fields with state:", formState) || (
      <Box>
        {renderReportHeaderSection()}
        {renderWhereSection()}
        {renderWhatHappenedSection()}
        {renderImmediateActionSection()}
        {renderReporterInfoSection()}
        {renderValidationSection()}
      </Box>
    );

  const handleFieldChange = (path, value) => {
    setHasManualChanges(true); // Set to true when user makes manual changes
    setFormState((prevState) => {
      const newState = { ...prevState };
      const pathArray = path.split(".");
      let current = newState;

      for (let i = 0; i < pathArray.length - 1; i++) {
        if (!current[pathArray[i]]) {
          current[pathArray[i]] = {};
        }
        current = current[pathArray[i]];
      }

      current[pathArray[pathArray.length - 1]] = value;
      return newState;
    });
  };

  const handleTabChange = (event, newValue) => {
    console.log("Switching to tab:", newValue);
    setActiveTab(newValue);
  };

  const handleCompletionDone = () => {
    setShowCompletionDialog(false);
    setActiveTab(1); // Switch to Report tab
  };

  // Add save handler
  const handleSave = async () => {
    try {
      setIsSaving(true);
      await updateFormState(formId, formState);
      setHasManualChanges(false);
    } catch (error) {
      console.error("Error saving form:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsSaving(false);
    }
  };

  // Update the chat input box section to show completion message
  const renderChatInput = () => {
    if (isCompleted) {
      return (
        <Box
          sx={{
            borderTop: "1px solid #e8e8e8",
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: (theme) => alpha(theme.palette.success.light, 0.1),
          }}
        >
          <CheckCircleIcon color="success" sx={{ mr: 1 }} />
          <Typography variant="body1" color="success.main">
            Chat completed! You can review the form now.
          </Typography>
        </Box>
      );
    }

    return (
      <Box
        sx={{
          borderTop: "1px solid #e8e8e8",
          p: 2,
          display: "flex",
          gap: 1,
          alignItems: "flex-end",
        }}
      >
        <TextField
          fullWidth
          placeholder="Type your response..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey && !e.metaKey && !e.ctrlKey && !isLoading) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          disabled={isLoading || isCompleted}
          size="small"
          multiline
          minRows={1}
          maxRows={4}
          sx={{
            "& .MuiInputBase-root": {
              padding: "8px 12px",
              backgroundColor: "#fff",
            },
            "& .MuiInputBase-input": {
              color: "black",
              WebkitTextFillColor: "black",
              opacity: 1,
              lineHeight: 1.5,
              "&::selection": {
                backgroundColor: (theme) => theme.palette.primary.main + "40",
              },
            },
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#fff",
              "& textarea": {
                cursor: "text !important",
                caretColor: "black !important",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e0e0e0",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#bdbdbd",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: (theme) => theme.palette.primary.main,
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={isLoading || !userInput.trim() || isCompleted}
          sx={{ height: 40 }}
        >
          <SendIcon />
        </Button>
      </Box>
    );
  };

  if (!isInitialSubmitted) {
    console.log("Showing initial description form");
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Typography variant="h4" gutterBottom mt={8} mb={2} textAlign="center">
          Describe in detail what happened <br />
        </Typography>
        <Typography variant="subtitle1" gutterBottom mb={6} textAlign="center">
          Mention about where did it happen, when and what actions did you take
        </Typography>
        <TextField
          multiline
          minRows={5}
          maxRows={20}
          fullWidth
          variant="outlined"
          placeholder="Enter incident description..."
          value={initialDescription}
          onChange={(e) => setInitialDescription(e.target.value)}
          sx={{ maxWidth: 600 }}
        />
        <Button
          variant="contained"
          onClick={handleInitialSubmit}
          sx={{
            mt: 4,
            px: 6,
            py: 1,
            opacity: isLoading || !initialDescription.trim() ? 0.6 : 1,
            transition: "opacity 0.2s",
          }}
          disabled={isLoading || !initialDescription.trim()}
        >
          Submit
        </Button>
      </Box>
    );
  }

  console.log("Showing main form view");
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <StyledTabs value={activeTab} onChange={handleTabChange} sx={{ flex: 1 }}>
          <StyledTab label="AI" />
          <StyledTab label="Report" />
        </StyledTabs>
        <Box sx={{ position: "relative", mr: 1 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            disabled={!hasManualChanges || isSaving}
            sx={{
              minWidth: "auto",
              width: 40,
              height: 40,
              borderRadius: "50%",
              p: 0,
              "&:hover .tooltip": {
                opacity: 1,
                visibility: "visible",
              },
            }}
          >
            {isSaving ? <CircularProgress size={24} /> : <SaveIcon />}
            <Box
              className="tooltip"
              sx={{
                position: "absolute",
                bottom: -28,
                left: "50%",
                transform: "translateX(-50%)",
                bgcolor: "rgba(0,0,0,0.8)",
                color: "white",
                p: "4px 8px",
                borderRadius: 1,
                fontSize: "0.75rem",
                opacity: 0,
                visibility: "hidden",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </Box>
          </Button>
        </Box>
        {isCompleted ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartOver}
            startIcon={<CheckCircleIcon />}
          >
            Done
          </Button>
        ) : (
          <Box sx={{ position: "relative" }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleStartOver}
              sx={{
                minWidth: "auto",
                width: 40,
                height: 40,
                borderRadius: "50%",
                p: 0,
                "&:hover .tooltip": {
                  opacity: 1,
                  visibility: "visible",
                },
              }}
            >
              <RestartAltIcon />
              <Box
                className="tooltip"
                sx={{
                  position: "absolute",
                  bottom: -28,
                  left: "50%",
                  transform: "translateX(-50%)",
                  bgcolor: "rgba(0,0,0,0.8)",
                  color: "white",
                  p: "4px 8px",
                  borderRadius: 1,
                  fontSize: "0.75rem",
                  opacity: 0,
                  visibility: "hidden",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                Start Over
              </Box>
            </Button>
          </Box>
        )}
      </Box>

      {/* Add debug info */}
      <Box sx={{ display: "none" }}>
        Debug: Tab {activeTab}, Initial Submitted: {String(isInitialSubmitted)}
      </Box>

      {activeTab === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flex: 1,
            position: "relative",
            overflow: "hidden",
            height: 620,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              border: "1px solid #ccc",
              borderRadius: 1,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                p: 2,
              }}
            >
              <ChatMessages messages={messages} isTyping={isTyping} />
            </Box>
            {renderChatInput()}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              // border: "1px solid #ccc",
              // borderRadius: 1,
              // p: 2,
              overflowY: "auto",
            }}
          >
            {isLoading ? <CircularProgress /> : renderFormFields()}
          </Box>
        </Box>
      )}

      {/* Update completion dialog */}
      <Dialog
        open={showCompletionDialog}
        onClose={() => setShowCompletionDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CheckCircleIcon color="success" />
          Form Completed
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Great! I have gathered all the necessary information for the incident report. Would you
            like to review the form now?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCompletionDialog(false)}>Close</Button>
          <Button
            variant="contained"
            onClick={handleCompletionDone}
            startIcon={<DescriptionIcon />}
          >
            Review Form
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default CreateReportTab;

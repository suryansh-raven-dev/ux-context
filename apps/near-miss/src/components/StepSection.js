import React from "react";
import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import { alpha } from "@mui/material/styles";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Tooltip from "@mui/material/Tooltip";

const StepSection = React.forwardRef(
  ({ children, title, step, isCurrentStep, isInvestigationRunning }, ref) => {
    // Update getTitleText to get the actual section title
    const getTitleText = () => {
      try {
        // The title text is directly in children[1]
        return title.props.children[1].props.children;
      } catch (e) {
        // If we can't get the title, return empty string to prevent showing "Current Section"
        return "";
      }
    };

    return (
      <Box ref={ref} sx={{ mb: 3, position: "relative" }}>
        <Paper
          elevation={0}
          variant="outlined"
          sx={{
            p: 3,
            backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.7),
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              mb: 4,
            }}
          >
            {title.props.children[0]}
            {title.props.children[1]}
            {isInvestigationRunning && isCurrentStep ? (
              <Tooltip title={`Agent executing: ${getTitleText()}`}>
                <Box
                  sx={{
                    position: "relative",
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress
                    size={32}
                    sx={{
                      position: "absolute",
                      color: (theme) => theme.palette.primary.main,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PsychologyIcon
                      sx={{
                        fontSize: 20,
                        color: (theme) => alpha(theme.palette.text.secondary, 0.65),
                      }}
                    />
                  </Box>
                </Box>
              </Tooltip>
            ) : (
              title.props.children[2]
            )}
          </Box>
          {children}
        </Paper>
      </Box>
    );
  }
);

export default StepSection;

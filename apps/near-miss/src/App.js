import React, { useState } from "react";
import { Box, Tabs, Tab, AppBar } from "@mui/material";
import ReportsTab from "./components/IncidentTab";
import DashboardTab from "./components/DashboardTab";
import AnalysisTab from "./components/AnalysisTab";
import CreateReportTab from "./components/CreateReportTab";

// Helper TabPanel component
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1976d2", // Primary blue color
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="Navigation tabs"
          sx={{
            "& .MuiTab-root": {
              color: "rgba(255, 255, 255, 0.7)",
              "&.Mui-selected": {
                color: "#fff",
              },
              minHeight: "64px",
            },
          }}
          TabIndicatorProps={{
            sx: {
              backgroundColor: "#fff",
              height: 3,
            },
          }}
        >
          <Tab
            label="REPORTS"
            id="nav-tab-0"
            aria-controls="nav-tabpanel-0"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "1rem",
              px: 4,
            }}
          />
          <Tab
            label="DASHBOARD"
            id="nav-tab-1"
            aria-controls="nav-tabpanel-1"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "1rem",
              px: 4,
            }}
          />
          <Tab
            label="ANALYSIS"
            id="nav-tab-2"
            aria-controls="nav-tabpanel-2"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "1rem",
              px: 4,
            }}
          />
          <Tab
            label="CREATE REPORT"
            id="nav-tab-3"
            aria-controls="nav-tabpanel-3"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "1rem",
              px: 4,
            }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={tabIndex} index={0}>
        <ReportsTab />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <DashboardTab />
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <AnalysisTab />
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
        <CreateReportTab />
      </TabPanel>
    </Box>
  );
}

export default App;

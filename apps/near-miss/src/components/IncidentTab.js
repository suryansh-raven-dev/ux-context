import React, { useState, useEffect } from "react";
import { Typography, Button, Box, Tabs, Tab } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// Import all available dataset files from data folder:
import ds2 from "../data/near_miss_dataset_20250206_164302.json";
import ds3 from "../data/near_miss_dataset_20250206_165633.json";
import ds4 from "../data/near_miss_dataset_20250206_171517.json";
import ds5 from "../data/near_miss_dataset_20250206_172116.json";
import IncidentDetail from "./IncidentDetail";
import { getLatestIncidents } from "../api/mockApi";

// Merge all JSON datasets.
const allDatasets = [ds2, ds3, ds4, ds5];
const allReports = [];
const allInvestigations = [];
allDatasets.forEach((ds) => {
  if (ds.reports) {
    allReports.push(...ds.reports);
  }
  if (ds.investigations) {
    allInvestigations.push(...ds.investigations);
  }
});

function IncidentTab() {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [selectedInvestigation, setSelectedInvestigation] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [latestIncidents, setLatestIncidents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchLatestIncidents();
  }, []);

  const fetchLatestIncidents = async () => {
    setIsLoading(true);
    try {
      const data = await getLatestIncidents();
      setLatestIncidents(data);
    } catch (error) {
      console.error("Failed to fetch latest incidents:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Prepare rows for the latest incidents
  const latestRows = latestIncidents
    .filter((form) => form && form.state) // Filter out any null or invalid forms
    .map((form, index) => {
      const state = form.state || {};
      // Handle both new and old state structure
      const reportState = state.near_miss_report || state;
      const reportMetadata = reportState.report_metadata || {};
      const locationInfo = reportState.location_info || {};
      const incidentDetails = reportState.incident_details || {};
      const safetyValidation = reportState.safety_validation || {};

      return {
        id: `latest-${index}`,
        formId: form.id,
        reportId: reportMetadata.report_id || "N/A",
        date: reportMetadata.date || "N/A",
        time: reportMetadata.time || "N/A",
        department: locationInfo.plant_department || "N/A",
        summary: incidentDetails.short_description
          ? incidentDetails.short_description.substring(0, 50) + "..."
          : "N/A",
        status: safetyValidation.status || "Pending",
        investigationPresent: state.near_miss_investigation ? "Yes" : "No", // Check new structure for investigation
        reportObj: state, // Store the report state
        isLatest: true,
      };
    });

  // Prepare rows for the data grid using key summary fields.
  const rows = allReports.map((report, index) => ({
    id: index,
    reportId: report.report_metadata.report_id,
    date: report.report_metadata.date,
    time: report.report_metadata.time,
    department: report.location_info.plant_department,
    summary: report.incident_details.short_description.substring(0, 50) + "...",
    // Determine status from safety_validation metadata.
    status:
      report.safety_validation &&
      report.safety_validation.status &&
      report.safety_validation.status.accepted
        ? "Validated"
        : "Not Validated",
    // Check if a matching investigation exists.
    investigationPresent: allInvestigations.find(
      (inv) =>
        inv.investigation_metadata &&
        inv.investigation_metadata.report_id === report.report_metadata.report_id
    )
      ? "Yes"
      : "No",
    reportObj: report, // store the full object for later use
    isLatest: false,
  }));

  const columns = [
    { field: "reportId", headerName: "Report ID", width: 150 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "time", headerName: "Time", width: 100 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "summary", headerName: "Summary", flex: 1 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "investigationPresent", headerName: "Investigation", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Button variant="contained" onClick={() => handleRowClick(params.row)}>
          View
        </Button>
      ),
    },
  ];

  const handleRowClick = (row) => {
    const report = row.reportObj;
    if (row.isLatest) {
      setSelectedIncident({
        ...report.near_miss_report,
        formId: row.formId,
      });
      setSelectedInvestigation(report.near_miss_investigation || null);
    } else {
      setSelectedIncident({
        ...report,
        formId: row.formId,
      });
      const inv = allInvestigations.find(
        (inv) =>
          inv.investigation_metadata &&
          inv.investigation_metadata.report_id === report.report_metadata.report_id
      );
      setSelectedInvestigation(inv || null);
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // If an incident is selected, show the detail view.
  if (selectedIncident) {
    return (
      <IncidentDetail
        selectedIncident={selectedIncident}
        selectedInvestigation={selectedInvestigation}
        onBack={() => {
          setSelectedIncident(null);
          setSelectedInvestigation(null);
        }}
      />
    );
  }

  return (
    <div style={{ height: "calc(100vh - 100px)", width: "100%" }}>
      <Typography variant="h4" gutterBottom mt={3}>
        Incident Reports
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2, mt: 4 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Latest Incidents" />
          <Tab label="Previous Incidents" />
        </Tabs>
      </Box>

      {activeTab === 0 ? (
        <DataGrid
          rows={latestRows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          loading={isLoading}
        />
      ) : (
        <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10, 25, 50]} />
      )}
    </div>
  );
}

export default IncidentTab;

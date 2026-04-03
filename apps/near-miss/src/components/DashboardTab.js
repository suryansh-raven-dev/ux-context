import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, Grid, Box } from "@mui/material";
import { getDashboardData } from "../api/mockApi";

function DashboardTab() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    getDashboardData().then((data) => {
      setDashboardData(data);
    });
  }, []);

  if (!dashboardData) {
    return <Typography>Loading dashboard data...</Typography>;
  }

  // Destructure some example KPIs from the API data:
  const { totalReports, topCategories, highRiskAreas } = dashboardData;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Grid container spacing={2}>
        {/* KPI: Total Near-Misses This Year */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Total Near-Misses (YTD)</Typography>
              <Typography variant="h4">{totalReports}</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* KPI: Top Near-Miss Category */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Top Category</Typography>
              <Typography variant="h4">{topCategories[0]}</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* KPI: High-Risk Area */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">High-Risk Area</Typography>
              <Typography variant="h4">{highRiskAreas[0]}</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* More KPI cards can be added here */}
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Monthly Near-Miss Trend
      </Typography>
      {/* Placeholder for trend graph/chart */}
      <Card variant="outlined" sx={{ mt: 2 }}>
        <CardContent>
          <Box
            sx={{
              height: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed #ccc",
            }}
          >
            <Typography variant="body1">[Trend Graph Placeholder]</Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardTab;

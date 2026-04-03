import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

function Section({ title, icon, children, rightContent }) {
  return (
    <Paper elevation={0} sx={{ mt: 3, mb: 2, p: 2, border: "1px solid #e0e0e0" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {icon && (
            <Box sx={{ mr: 1, color: (theme) => alpha(theme.palette.text.primary, 0.7) }}>
              {icon}
            </Box>
          )}
          <Typography
            variant="h6"
            sx={{
              color: (theme) => alpha(theme.palette.text.primary, 0.7),
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
        </Box>
        {rightContent}
      </Box>
      {children}
    </Paper>
  );
}

export default Section;

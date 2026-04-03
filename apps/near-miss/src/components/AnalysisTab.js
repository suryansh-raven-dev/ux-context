import React, { useState } from "react";
import { TextField, Button, Typography, Box, Card, CardContent, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getAnswerFromGemini } from "../api/mockApi";

function AnalysisTab() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter" || e.type === "click") {
      setLoading(true);
      const answer = await getAnswerFromGemini(query);
      setResult(answer);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: "800px", margin: "0 auto", pt: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Safety Analysis Assistant
      </Typography>

      {/* Search box with icon */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 4,
          backgroundColor: "#f8f9fa",
          borderRadius: "24px",
          padding: "6px 16px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <TextField
          placeholder="Ask a safety-related question..."
          value={query}
          onChange={handleQueryChange}
          onKeyPress={handleSearch}
          fullWidth
          variant="standard"
          InputProps={{
            disableUnderline: true,
            style: { fontSize: "16px" },
          }}
        />
        <IconButton onClick={handleSearch} disabled={loading}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Loading and Results */}
      {loading && (
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography>Analyzing your question...</Typography>
        </Box>
      )}

      {result && (
        <Card
          variant="outlined"
          sx={{
            mt: 2,
            borderRadius: 2,
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, color: "#1a73e8" }}>
              Analysis Result:
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
              {result}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default AnalysisTab;

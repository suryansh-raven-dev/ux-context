import React, { useState } from "react";
import { TextField, Button, Typography, Box, Card, CardContent } from "@mui/material";
import { getAnswerFromQuery } from "../api/mockApi";

function QueryTab() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleAsk = async () => {
    setLoading(true);
    const answer = await getAnswerFromQuery(query);
    setResult(answer);
    setLoading(false);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Ask a Safety Question
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="Enter your question"
          variant="outlined"
          value={query}
          onChange={handleQueryChange}
          fullWidth
        />
        <Button variant="contained" onClick={handleAsk} disabled={loading}>
          Ask
        </Button>
      </Box>
      {loading && <Typography>Loading answer...</Typography>}
      {result && (
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">Answer:</Typography>
            <Typography variant="body1">{result}</Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default QueryTab;

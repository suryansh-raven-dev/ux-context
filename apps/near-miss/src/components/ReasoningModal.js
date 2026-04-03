import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function ReasoningModal({ open, onClose, step, reasoning }) {
  if (!reasoning) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>AI Assistant's Reasoning - Step {step}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ whiteSpace: "pre-wrap" }}>{reasoning}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ReasoningModal;

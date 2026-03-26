import Done from '@mui/icons-material/Done';
import { Box, Button } from '@mui/material';

import './ActionButtonGroup.css';

export type ActionButtonGroupProps = {
  onSaveDraft: () => void;
  onClearAll: () => void;
  onSubmit: () => void;
  submitDisabled?: boolean;
};

/**
 * Primary form actions: draft, clear, and submit.
 */
export function ActionButtonGroup({
  onSaveDraft,
  onClearAll,
  onSubmit,
  submitDisabled = false,
}: ActionButtonGroupProps) {
  return (
    <Box className="raven-action-buttons" role="group" aria-label="Form actions">
      <Button type="button" variant="text" color="secondary" onClick={onSaveDraft}>
        Save as draft
      </Button>
      <Button type="button" variant="outlined" color="error" onClick={onClearAll}>
        Clear all
      </Button>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        startIcon={<Done aria-hidden />}
        onClick={onSubmit}
        disabled={submitDisabled}
      >
        Submit
      </Button>
    </Box>
  );
}

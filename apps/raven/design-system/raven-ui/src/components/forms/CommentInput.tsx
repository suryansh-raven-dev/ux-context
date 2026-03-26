import ArrowUpward from '@mui/icons-material/ArrowUpward';
import AttachFile from '@mui/icons-material/AttachFile';
import { Box, IconButton, InputBase, Typography } from '@mui/material';

import './CommentInput.css';

export type CommentInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

/**
 * Comment composer with attachment affordance and submit control.
 */
export function CommentInput({ value, onChange, onSubmit }: CommentInputProps) {
  const hasText = value.trim().length > 0;

  const handleSubmit = () => {
    if (!hasText) return;
    onSubmit();
  };

  return (
    <Box className="raven-comment-input">
      <Typography
        component="h3"
        variant="h6"
        className="raven-comment-input__title"
        id="raven-comment-input-title"
      >
        Add Comment
      </Typography>
      <Box className="raven-comment-input__box">
        <InputBase
          className="raven-comment-input__field"
          multiline
          minRows={2}
          placeholder="Describe the action taken, progress made, or any issues encountered..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-labelledby="raven-comment-input-title"
          fullWidth
        />
        <Box className="raven-comment-input__actions">
          <IconButton
            type="button"
            size="small"
            aria-label="Attach file"
            color="primary"
          >
            <AttachFile fontSize="small" />
          </IconButton>
          <IconButton
            type="button"
            size="small"
            onClick={handleSubmit}
            disabled={!hasText}
            aria-label="Submit comment"
            sx={{
              bgcolor: hasText ? 'primary.main' : 'action.disabledBackground',
              color: hasText ? 'primary.contrastText' : 'action.disabled',
              '&:hover': {
                bgcolor: hasText ? 'primary.dark' : 'action.disabledBackground',
              },
              '&.Mui-disabled': {
                bgcolor: 'action.disabledBackground',
                color: 'action.disabled',
              },
            }}
          >
            <ArrowUpward fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

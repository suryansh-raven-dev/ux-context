import { useCallback, type ChangeEvent } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

import './ChatInput.css';

export type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder?: string;
  multiline?: boolean;
};

export function ChatInput({
  value,
  onChange,
  onSend,
  placeholder = 'Message',
  multiline = false,
}: ChatInputProps) {
  const hasText = value.trim().length > 0;

  const rootClass = ['raven-chat-input', multiline && 'raven-chat-input--multiline', hasText && 'raven-chat-input--active']
    .filter(Boolean)
    .join(' ');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const inputAriaLabel = placeholder;

  const sendButtonClass = hasText ? 'raven-chat-input__send--active' : undefined;

  if (multiline) {
    return (
      <Box className={rootClass}>
        <Box className="raven-chat-input__top">
          <IconButton type="button" aria-label="Add photo" size="small" className="raven-chat-input__icon-btn">
            <PhotoCameraIcon fontSize="small" />
          </IconButton>
          <InputBase
            className="raven-chat-input__field"
            placeholder={placeholder}
            multiline
            minRows={3}
            fullWidth
            value={value}
            onChange={handleChange}
            inputProps={{
              'aria-label': inputAriaLabel,
            }}
          />
        </Box>
        <Box className="raven-chat-input__icons raven-chat-input__icons--multiline">
          <IconButton type="button" aria-label="Attach file" size="small">
            <AttachFileIcon fontSize="small" />
          </IconButton>
          <IconButton
            type="button"
            className={sendButtonClass}
            aria-label={hasText ? 'Send message' : 'Voice message'}
            onClick={hasText ? onSend : undefined}
          >
            {hasText ? <SendIcon fontSize="small" color="primary" /> : <MicIcon fontSize="small" />}
          </IconButton>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={rootClass}>
      <IconButton type="button" aria-label="Add photo" size="small" className="raven-chat-input__icon-btn">
        <PhotoCameraIcon fontSize="small" />
      </IconButton>
      <InputBase
        className="raven-chat-input__field"
        placeholder={placeholder}
        fullWidth
        value={value}
        onChange={handleChange}
        inputProps={{
          'aria-label': inputAriaLabel,
        }}
      />
      <Box className="raven-chat-input__icons">
        <IconButton
          type="button"
          className={sendButtonClass}
          aria-label={hasText ? 'Send message' : 'Voice message'}
          onClick={hasText ? onSend : undefined}
        >
          {hasText ? <SendIcon fontSize="small" color="primary" /> : <MicIcon fontSize="small" />}
        </IconButton>
      </Box>
    </Box>
  );
}

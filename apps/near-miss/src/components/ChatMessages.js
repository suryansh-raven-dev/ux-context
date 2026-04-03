import React, { useRef, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { alpha } from "@mui/material/styles";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import { keyframes } from "@mui/system";

const blink = keyframes`
  0% { opacity: .2; }
  20% { opacity: 1; }
  100% { opacity: .2; }
`;

const TypingIndicator = () => (
  <Box
    sx={{
      display: "flex",
      gap: 0.5,
      padding: "0.5rem",
      width: "fit-content",
    }}
  >
    {[0, 1, 2].map((i) => (
      <Box
        key={i}
        sx={{
          width: "6px",
          height: "6px",
          backgroundColor: "grey.400",
          borderRadius: "50%",
          animation: `${blink} 1.4s linear infinite`,
          animationDelay: `${i * 0.2}s`,
        }}
      />
    ))}
  </Box>
);

function ChatMessages({ messages = [], isTyping = false }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom when messages change or when typing starts/stops
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <Box sx={{ p: 2 }}>
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: message.role === "user" ? "row-reverse" : "row",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              maxWidth: "70%",
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: (theme) =>
                  message.role === "user"
                    ? alpha(theme.palette.primary.main, 0.1)
                    : alpha(theme.palette.grey[100], 1),
              }}
            >
              {message.role === "user" ? (
                <PersonIcon color="primary" />
              ) : (
                <SmartToyIcon color="secondary" />
              )}
            </Box>
            <Paper
              elevation={0}
              sx={{
                p: 1.5,
                backgroundColor: (theme) =>
                  message.role === "user"
                    ? alpha(theme.palette.primary.main, 0.1)
                    : alpha(theme.palette.grey[100], 1),
                borderRadius: (theme) =>
                  message.role === "user" ? "12px 12px 0 12px" : "12px 12px 12px 0",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "pre-wrap",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                }}
              >
                {message.content}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 0.5,
                  color: "text.secondary",
                }}
              >
                {new Date(message.created_at).toLocaleTimeString()}
              </Typography>
            </Paper>
          </Box>
        </Box>
      ))}
      {isTyping && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              maxWidth: "70%",
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: (theme) => alpha(theme.palette.grey[100], 1),
              }}
            >
              <SmartToyIcon color="secondary" />
            </Box>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: (theme) => alpha(theme.palette.grey[100], 1),
                borderRadius: "12px 12px 12px 0",
              }}
            >
              <TypingIndicator />
            </Paper>
          </Box>
        </Box>
      )}
      {/* Add invisible div for scrolling */}
      <div ref={messagesEndRef} />
    </Box>
  );
}

export default ChatMessages;

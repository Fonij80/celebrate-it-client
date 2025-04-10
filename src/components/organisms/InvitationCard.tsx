import React, { useState, useEffect } from "react";
import { Box, IconButton, Slide, Paper, Typography } from "@mui/material";
import { LockOpen } from "@mui/icons-material";

export const InvitationCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const flipTimer = setTimeout(() => setIsFlipped(true), 1000);
    return () => clearTimeout(flipTimer);
  }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // Centers the box
        perspective: "1000px",
        width: 1000, // Increased width
        height: 700, // Increased height
      }}
    >
      {/* Envelope Container */}
      <Box
        sx={{
          position: "static",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 1s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Envelope Back */}
        <Paper
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            bgcolor: "#d32f2f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="white">
            Open Your Invitation
          </Typography>
        </Paper>

        {/* Envelope Front */}
        <Paper
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            bgcolor: "#b71c1c",
            transform: "rotateY(180deg)",
            padding: 2,
          }}
        >
          {/* Centered Lock Icon */}
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "gold",
            }}
            onClick={() => setIsOpen(true)}
          >
            <LockOpen fontSize="large" />
          </IconButton>

          {/* Diagonal Lines */}
          {/* <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "80%",
              height: "80%",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "2px solid white",
                borderStyle: "solid none none solid",
                transform: "rotate(45deg)",
                transformOrigin: "top left",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "2px solid white",
                borderStyle: "none solid solid none",
                transform: "rotate(-45deg)",
                transformOrigin: "top left",
              }}
            />
          </Box> */}
        </Paper>
      </Box>

      {/* Invitation Content */}
      <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
        <Paper
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            bgcolor: "background.paper",
            p: 4,
            boxShadow: 24,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Wedding Celebration
          </Typography>
          <Typography variant="body1">Join us on April 15, 2026</Typography>
          {/* Add more invitation details */}
        </Paper>
      </Slide>
    </Box>
  );
};

export default InvitationCard;

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Slider,
} from "@mui/material";
import { motion } from "framer-motion";

interface CustomizationProps {
  template: any;
  onCustomize: (customization: any) => void;
}

export const Customization = ({
  template,
  onCustomize,
}: CustomizationProps) => {
  const [customization, setCustomization] = useState({
    message: "",
    color: "#FF6B6B",
    animation: "fade",
    music: "",
  });

  const handleChange = (field: string, value: any) => {
    const updatedCustomization = {
      ...customization,
      [field]: value,
    };
    setCustomization(updatedCustomization);
    onCustomize(updatedCustomization);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom align="center">
        Customize Your Celebration
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TextField
            label="Your Message"
            multiline
            rows={4}
            fullWidth
            value={customization.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom>Color Theme</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"].map((color) => (
              <motion.div
                key={color}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: color,
                    borderRadius: "50%",
                    cursor: "pointer",
                    border:
                      customization.color === color ? "2px solid #000" : "none",
                  }}
                  onClick={() => handleChange("color", color)}
                />
              </motion.div>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom>Animation Style</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {["fade", "slide", "zoom", "bounce"].map((animation) => (
              <Button
                key={animation}
                variant={
                  customization.animation === animation
                    ? "contained"
                    : "outlined"
                }
                onClick={() => handleChange("animation", animation)}
              >
                {animation}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>Background Music</Typography>
          <TextField
            fullWidth
            placeholder="Enter YouTube URL or select from our library"
            value={customization.music}
            onChange={(e) => handleChange("music", e.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customization;

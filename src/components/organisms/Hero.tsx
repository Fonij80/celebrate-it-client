import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Celebrate It
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, color: "text.secondary" }}>
          Create beautiful celebrations and share them with the world
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/celebrate")}
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            Start Celebrating
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/templates")}
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            Browse Templates
          </Button>
        </Box>
      </motion.div>
    </>
  );
};

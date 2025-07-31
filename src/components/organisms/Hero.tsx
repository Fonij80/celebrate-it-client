import {
  Container,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        zIndex: 2,
        pb: { xs: 12, md: 20 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          component="h1"
          variant={isMobile ? "h3" : "h2"}
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
            color: "text.primary",
          }}
        >
          {t("home.heroTitle")}
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            mb: 6,
            maxWidth: "800px",
            mx: "auto",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            color: "text.primary",
          }}
        >
          {t("home.heroSubtitle")}
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 4 }}
          justifyContent="space-between"
          sx={{
            mb: 8,
            width: { xs: "100%", sm: "80%", md: "60%" },
            mx: "auto",
          }}
        >
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => navigate("/get-started")}
            sx={{
              px: 6,
              py: 2,
              fontSize: "1.2rem",
              backgroundColor: "primary.main",
              color: "text.primary",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            {t("home.getStarted")}
          </Button>
          {/* <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={() => navigate("/templates")}
            sx={{
              px: 6,
              py: 2,
              fontSize: "1.2rem",
              borderColor: "primary.main",
              color: "text.primary",
              "&:hover": {
                borderColor: "primary.dark",
              },
            }}
          >
            {t("home.seeTemplates")}
          </Button> */}
        </Stack>
      </motion.div>
    </Container>
  );
};

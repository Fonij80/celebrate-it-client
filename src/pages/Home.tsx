import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const advantages = [
    {
      id: 1,
      title: t("home.advantages.environment"),
      icon: "🌱",
      description: t("home.advantages.environmentDesc"),
    },
    {
      id: 2,
      title: t("home.advantages.easy"),
      icon: "✨",
      description: t("home.advantages.easyDesc"),
    },
    {
      id: 3,
      title: t("home.advantages.fast"),
      icon: "⚡",
      description: t("home.advantages.fastDesc"),
    },
    {
      id: 4,
      title: t("home.advantages.diverse"),
      icon: "🎨",
      description: t("home.advantages.diverseDesc"),
    },
    {
      id: 5,
      title: t("home.advantages.customizable"),
      icon: "🎯",
      description: t("home.advantages.customizableDesc"),
    },
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #A8D5BA 0%, #FFB5C2 100%)",
      }}
    >
      {/* Hero Content */}
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
            paragraph
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
            spacing={2}
            justifyContent="center"
            sx={{ mb: 8 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/login")}
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
            <Button
              variant="outlined"
              size="large"
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
            </Button>
          </Stack>
        </motion.div>
      </Container>

      {/* Animated Advantages Section */}
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: 0,
          right: 0,
          overflow: "hidden",
          py: 4,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              width: "max-content",
            }}
          >
            {[...advantages, ...advantages].map((advantage, index) => (
              <motion.div
                key={`${advantage.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    minWidth: 280,
                    height: 200,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h2" sx={{ mb: 2 }}>
                      {advantage.icon}
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {advantage.title}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      {advantage.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Box>

      {/* Contact Us Section */}
      <Box
        id="contact"
        sx={{
          py: 8,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              component="h2"
              align="center"
              gutterBottom
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              {t("contact.title")}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ mb: 6, color: "text.secondary" }}
            >
              {t("contact.subtitle")}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/contact")}
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
                {t("contact.form.send")}
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

import { useTranslation } from "react-i18next";
import { Box, Typography, Card, CardContent, Stack } from "@mui/material";
import { motion } from "framer-motion";

export const Advantages = () => {
  const { t } = useTranslation();

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
        position: "absolute",
        bottom: "15%",
        left: 0,
        right: 0,
        overflow: "hidden",
        py: 4,
        // backdropFilter: "blur(10px)",
      }}
    >
      <motion.div
        animate={{
          x: ["0%", "-50%"], // Animates from 0 to -50% of container width
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          width: "200%", // Double width for seamless looping
          display: "flex",
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
                  backgroundColor: "transparent",
                  // backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(8px)",
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
                  <Typography variant="h2" sx={{ mb: 2, fontSize: "4rem" }}>
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
  );
};

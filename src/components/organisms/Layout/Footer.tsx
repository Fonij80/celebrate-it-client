import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        backgroundColor: "transparent",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.primary" align="center">
          © {currentYear} {t("footer.copyright")}
        </Typography>
      </Container>
    </Box>
  );
};

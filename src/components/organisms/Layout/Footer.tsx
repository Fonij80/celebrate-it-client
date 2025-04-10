import { Box, Container, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              {t("footer.terms")}
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              {t("footer.contact")}
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body2" color="text.secondary" align="center">
              {t("footer.copyright", { year: currentYear })}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

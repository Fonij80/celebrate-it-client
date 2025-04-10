import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Container,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "../../atoms";
import { SocialLinks } from "../../molecules";
import i18n from "../../../i18n";

export const Navbar = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        paddingTop: { xs: 2, md: 1 },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            width: "100%",
            margin: "0 auto",
            padding: 2,
            flexDirection: { xs: "row", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "transparent",
          }}
        >
          {isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleGetStarted}>
                  {t("navbar.start_btn")}
                </MenuItem>
                <MenuItem onClick={() => navigate("/contact")}>
                  {t("contact.title")}
                </MenuItem>
                <MenuItem onClick={handleLanguageClick}>
                  {t("navbar.language")}
                </MenuItem>
                <MenuItem>
                  <Stack direction="row" spacing={2}>
                    <SocialLinks />
                  </Stack>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Logo />
            </Box>
          )}

          {isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Logo />
            </Box>
          ) : (
            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handleGetStarted}
                sx={{ textTransform: "none" }}
              >
                {t("navbar.start_btn")}
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => navigate("/contact")}
                sx={{ textTransform: "none" }}
              >
                {t("contact.title")}
              </Button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="language"
                onClick={handleLanguageClick}
              >
                <LanguageIcon />
              </IconButton>
              <Stack direction="row" spacing={1}>
                <SocialLinks />
              </Stack>
            </Stack>
          )}

          <Menu
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleLanguageChange("en")}>
              English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("es")}>
              Español
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

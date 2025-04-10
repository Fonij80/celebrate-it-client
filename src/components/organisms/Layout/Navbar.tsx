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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "../../atoms";
import i18n from "../../../i18n";

export const Navbar = () => {
  const { t } = useTranslation();

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
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          {/* <BrandIcon /> */}

          {/* Social Links (Only on Desktop) */}
          <Box
            sx={{
              display: { xs: "flex", md: "flex" }, // Only show on desktop
              gap: 1,
              justifyContent: "center",
              flexWrap: "wrap",
              mt: { xs: 2, md: 4 },
              mb: { xs: 0, md: 0 },
            }}
          >
            {/* <SocialLinksGroup /> */}
          </Box>
        </Toolbar>
      </Container>

      {/* Horizontal Line */}
      <Box
        sx={{
          width: "70%",
          height: "1px",
          backgroundColor: "text.disabled",
          mx: "auto",
        }}
      />
    </AppBar>
  );
};

export default Navbar;

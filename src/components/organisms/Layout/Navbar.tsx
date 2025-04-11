import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { HashLink } from "react-router-hash-link"; // Import HashLink
import { useTranslation } from "react-i18next";
import { Logo } from "../../atoms";
import { SocialLinks } from "../../molecules";
import i18n from "../../../i18n";

export const Navbar = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderDesktopView = () => (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Logo />
      </Box>
      <Stack direction="row" spacing={2} alignItems="center">
        <SocialLinks iconColor="inherit" size="small" />
        <HashLink
          smooth
          to="/#contact"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="text" color="inherit" sx={{ textTransform: "none" }}>
            {t("contact.title")}
          </Button>
        </HashLink>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
        >
          {t("navbar.start_btn")}
        </Button>
      </Stack>
    </>
  );

  const renderMobileView = () => (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Logo />
      </Box>
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
          <MenuItem>
            <HashLink
              smooth
              to="/#contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {t("contact.title")}
            </HashLink>
          </MenuItem>
          <MenuItem>
            <SocialLinks iconColor="inherit" size="small" />
          </MenuItem>
        </Menu>
      </Box>
    </>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        pt: { xs: 2, md: 4 },
        pl: { xs: 2, md: 20 },
        pr: { xs: 2, md: 20 },
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          margin: "0 auto",
          flexDirection: { xs: "row", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}
      >
        {isMobile ? renderMobileView() : renderDesktopView()}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

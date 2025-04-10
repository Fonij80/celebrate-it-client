import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

export const LanguageChangeMenu = () => {
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setLanguageAnchorEl(null);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  return (
    <Menu
      anchorEl={languageAnchorEl}
      open={Boolean(languageAnchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={() => handleLanguageChange("en")}>English</MenuItem>
      <MenuItem onClick={() => handleLanguageChange("es")}>Español</MenuItem>
    </Menu>
  );
};

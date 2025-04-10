import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useTranslation } from "react-i18next";

export const SocialLinks = () => {
  const { t } = useTranslation();

  return (
    <>
      <IconButton
        color="inherit"
        href="https://instagram.com"
        target="_blank"
        size="small"
        title={t("navbar.social.instagram")}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://twitter.com"
        target="_blank"
        size="small"
        title={t("navbar.social.twitter")}
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://telegram.org"
        target="_blank"
        size="small"
        title={t("navbar.social.telegram")}
      >
        <TelegramIcon />
      </IconButton>
    </>
  );
};

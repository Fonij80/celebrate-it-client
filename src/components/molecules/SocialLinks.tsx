import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { SocialLinkButton } from "../atoms";
import { IconButtonProps } from "@mui/material";

interface SocialLinksProps {
  iconColor: IconButtonProps["color"];
  size: IconButtonProps["size"];
}

export const SocialLinks = ({ iconColor, size }: SocialLinksProps) => {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
      <SocialLinkButton
        icon={<InstagramIcon />}
        href="https://instagram.com"
        iconColor={iconColor}
        size={size}
      />
      <SocialLinkButton
        icon={<TwitterIcon />}
        href="https://twitter.com"
        iconColor={iconColor}
        size={size}
      />
      <SocialLinkButton
        icon={<TelegramIcon />}
        href="https://telegram.org"
        iconColor={iconColor}
        size={size}
      />
    </Box>
  );
};

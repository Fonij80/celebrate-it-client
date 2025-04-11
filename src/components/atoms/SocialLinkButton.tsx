import { IconButton, IconButtonProps } from "@mui/material";

interface SocialLinkButtonProps {
  icon: React.ReactNode;
  href: string;
  iconColor: IconButtonProps["color"];
  size: IconButtonProps["size"];
}

export const SocialLinkButton = ({
  icon,
  href,
  iconColor,
  size,
}: SocialLinkButtonProps) => {
  return (
    <IconButton
      color={iconColor}
      component="a"
      href={href}
      target="_blank"
      size={size}
    >
      {icon}
    </IconButton>
  );
};

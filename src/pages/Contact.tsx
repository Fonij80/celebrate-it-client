import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{ mb: 2, fontWeight: "bold" }}
          >
            {t("contact.title")}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 6, color: "text.secondary" }}
          >
            {t("contact.subtitle")}
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <TextField
                  fullWidth
                  label={t("contact.form.name")}
                  variant="outlined"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  label={t("contact.form.email")}
                  variant="outlined"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  label={t("contact.form.subject")}
                  variant="outlined"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  label={t("contact.form.message")}
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  {t("contact.form.send")}
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  {t("contact.info.social")}
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <IconButton
                    color="primary"
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    component="a"
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    component="a"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    <TelegramIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;

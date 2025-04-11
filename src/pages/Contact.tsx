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
import { SocialLinks } from "../components/molecules";
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
    console.log(formData);
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center everything horizontally
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
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

          {/* Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center", // Center form elements horizontally
              textAlign: "center", // Center text inside elements
            }}
          >
            {/* TextFields with RTL placeholder */}
            <TextField
              fullWidth
              label={t("contact.form.name")}
              variant="outlined"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              inputProps={{ style: { textAlign: "right" } }} // Placeholder RTL
              InputLabelProps={{ style: { direction: "rtl" } }} // Label RTL
            />
            <TextField
              fullWidth
              label={t("contact.form.email")}
              variant="outlined"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              inputProps={{ style: { textAlign: "right" } }} // Placeholder RTL
              InputLabelProps={{ style: { direction: "rtl" } }} // Label RTL
            />
            <TextField
              fullWidth
              label={t("contact.form.subject")}
              variant="outlined"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              inputProps={{ style: { textAlign: "right" } }} // Placeholder RTL
              InputLabelProps={{ style: { direction: "rtl" } }} // Label RTL
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
              inputProps={{ style: { textAlign: "right" } }} // Placeholder RTL
              InputLabelProps={{ style: { direction: "rtl" } }} // Label RTL
            />

            {/* Send Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              {t("contact.form.send")}
            </Button>

            <SocialLinks iconColor="primary" size="large" />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;

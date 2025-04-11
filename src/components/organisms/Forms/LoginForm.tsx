import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

export const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleGoogleLogin = () => {
    // Implement Google authentication
    console.log("Google login clicked");
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/invite");
    // Implement email authentication
    console.log("Email login submitted");
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ mb: 4, fontWeight: "bold" }}
      >
        {t("login.welcome")}
      </Typography>
      <Box component="form" onSubmit={handleEmailLogin}>
        <TextField
          fullWidth
          label={t("login.email")}
          type="email"
          margin="normal"
          //   required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label={t("login.password")}
          type="password"
          margin="normal"
          //   required
          sx={{ mb: 3 }}
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            py: 1.5,
            mb: 2,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          {t("login.signIn")}
        </Button>
      </Box>
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="text.secondary">
          {t("login.or")}
        </Typography>
      </Divider>

      <Button
        fullWidth
        variant="outlined"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
        sx={{
          mb: 3,
          py: 1.5,
          borderColor: "text.primary",
          color: "text.primary",
          "&:hover": {
            borderColor: "primary.main",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        {t("login.continueWithGoogle")}
      </Button>

      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 2, color: "text.secondary" }}
      >
        {t("login.noAccount")}{" "}
        <Button
          variant="text"
          onClick={() => navigate("/signup")}
          sx={{
            p: 0,
            textTransform: "none",
            color: "primary.main",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          {t("login.signUp")}
        </Button>
      </Typography>
    </>
  );
};

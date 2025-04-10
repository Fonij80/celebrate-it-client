import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
} from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { required, email } from "../../hooks/useForm";
import { useNotification } from "../../components/organisms/Notifications/NotificationProvider";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { addNotification } = useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const { formState, handleChange, handleBlur, validateForm } = useForm({
    email: {
      value: "",
      rules: [required(), email()],
    },
    password: {
      value: "",
      rules: [required()],
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);
      await login(formState.email.value, formState.password.value);
      const from =
        (location.state as { from?: { pathname: string } })?.from?.pathname ||
        "/";
      navigate(from);
    } catch (error) {
      addNotification({
        type: "error",
        message: "Invalid email or password",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formState.email.value}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            error={!!formState.email.error}
            helperText={formState.email.error}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formState.password.value}
            onChange={(e) => handleChange("password", e.target.value)}
            onBlur={() => handleBlur("password")}
            error={!!formState.password.error}
            helperText={formState.password.error}
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate("/register")}
            >
              Don't have an account? Register
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

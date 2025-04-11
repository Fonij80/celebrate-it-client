import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { LoginForm } from "../../components/organisms";

export const Login = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #A8D5BA 0%, #FFB5C2 100%)",
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              backdropFilter: "blur(10px)",
              borderRadius: 2,
              p: 4,
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            }}
          >
            <LoginForm />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Login;

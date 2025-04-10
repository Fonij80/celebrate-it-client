import { Box, Container, Typography, Button, TextField, Divider, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleGoogleLogin = () => {
    // Implement Google authentication
    console.log('Google login clicked');
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement email authentication
    console.log('Email login submitted');
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #A8D5BA 0%, #FFB5C2 100%)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              p: 4,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              align="center"
              gutterBottom
              sx={{ mb: 4, fontWeight: 'bold' }}
            >
              {t('login.welcome')}
            </Typography>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleLogin}
              sx={{
                mb: 3,
                py: 1.5,
                borderColor: 'text.primary',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {t('login.continueWithGoogle')}
            </Button>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                {t('login.or')}
              </Typography>
            </Divider>

            <Box component="form" onSubmit={handleEmailLogin}>
              <TextField
                fullWidth
                label={t('login.email')}
                type="email"
                margin="normal"
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label={t('login.password')}
                type="password"
                margin="normal"
                required
                sx={{ mb: 3 }}
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  py: 1.5,
                  mb: 2,
                  backgroundColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                {t('login.signIn')}
              </Button>
            </Box>

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: 'text.secondary' }}
            >
              {t('login.noAccount')}{' '}
              <Button
                variant="text"
                onClick={() => navigate('/signup')}
                sx={{
                  p: 0,
                  textTransform: 'none',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {t('login.signUp')}
              </Button>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Login; 
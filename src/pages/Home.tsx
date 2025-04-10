import { Box, Container, Typography, Button, useTheme, useMediaQuery, Grid, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const advantages = [
    {
      id: 1,
      title: t('home.advantages.environment'),
      icon: '🌱',
      description: t('home.advantages.environmentDesc'),
    },
    {
      id: 2,
      title: t('home.advantages.easy'),
      icon: '✨',
      description: t('home.advantages.easyDesc'),
    },
    {
      id: 3,
      title: t('home.advantages.fast'),
      icon: '⚡',
      description: t('home.advantages.fastDesc'),
    },
    {
      id: 4,
      title: t('home.advantages.diverse'),
      icon: '🎨',
      description: t('home.advantages.diverseDesc'),
    },
    {
      id: 5,
      title: t('home.advantages.customizable'),
      icon: '🎯',
      description: t('home.advantages.customizableDesc'),
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #A8D5BA 0%, #FFB5C2 100%)',
          color: 'text.primary',
          position: 'relative',
          overflow: 'hidden',
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
              component="h1"
              variant={isMobile ? 'h3' : 'h2'}
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' }
              }}
            >
              {t('home.heroTitle')}
            </Typography>
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              paragraph
              sx={{
                mb: 4,
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
              }}
            >
              {t('home.heroSubtitle')}
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/celebrate')}
              sx={{
                mt: 4,
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                backgroundColor: 'primary.main',
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              {t('home.createInvitation')}
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Advantages Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Why Choose Us?
          </Typography>
          <Grid container spacing={4}>
            {advantages.map((advantage, index) => (
              <Grid item xs={12} sm={6} md={4} key={advantage.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                      <Typography variant="h2" sx={{ mb: 2 }}>
                        {advantage.icon}
                      </Typography>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {advantage.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {advantage.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #FFB5C2 0%, #A8D5BA 100%)',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              component="h2"
              align="center"
              gutterBottom
              sx={{ mb: 2 }}
            >
              {t('home.ctaTitle')}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              paragraph
              sx={{ mb: 4 }}
            >
              {t('home.ctaSubtitle')}
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/celebrate')}
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  backgroundColor: 'primary.main',
                  color: 'text.primary',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                {t('home.getStarted')}
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

import { useState } from 'react';
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Avatar,
    CircularProgress,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bio: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: Implement actual profile update logic
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        setIsLoading(false);
        navigate('/');
    };

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    marginTop: 4,
                    marginBottom: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Avatar
                        sx={{ width: 100, height: 100, mb: 2 }}
                        alt="Profile Picture"
                        src="/path-to-profile-picture.jpg"
                    />
                    <Typography component="h1" variant="h5">
                        {t('profile.title')}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label={t('profile.name')}
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={t('profile.email')}
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label={t('profile.phone')}
                            name="phone"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="bio"
                            label={t('profile.bio')}
                            name="bio"
                            multiline
                            rows={4}
                            value={formData.bio}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress size={24} /> : t('profile.save')}
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default Profile; 
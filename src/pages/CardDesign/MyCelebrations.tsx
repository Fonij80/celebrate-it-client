import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Share as ShareIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Celebration {
    id: string;
    title: string;
    type: string;
    recipients: string[];
    date: string;
    preview: string;
}

export const MyCelebrations = () => {
    const navigate = useNavigate();
    const [celebrations, setCelebrations] = useState<Celebration[]>([
        {
            id: '1',
            title: 'John\'s Birthday',
            type: 'birthday',
            recipients: ['john@example.com', 'sarah@example.com'],
            date: '2024-04-15',
            preview: '🎂🎈🎁',
        },
        {
            id: '2',
            title: 'Anniversary Celebration',
            type: 'anniversary',
            recipients: ['couple@example.com'],
            date: '2024-05-20',
            preview: '💕💑💝',
        },
    ]);

    const handleEdit = (id: string) => {
        navigate(`/celebrate/${id}`);
    };

    const handleDelete = (id: string) => {
        setCelebrations(celebrations.filter(celebration => celebration.id !== id));
    };

    const handleShare = (celebration: Celebration) => {
        // TODO: Implement sharing functionality
        console.log('Sharing celebration:', celebration);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    My Celebrations
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    View and manage your saved celebrations
                </Typography>
            </Box>
            <Grid container spacing={3}>
                {celebrations.map((celebration) => (
                    <Grid item xs={12} sm={6} md={4} key={celebration.id}>
                        <Card>
                            <CardContent>
                                <Box sx={{ textAlign: 'center', mb: 2 }}>
                                    <Typography variant="h2" sx={{ fontSize: '3rem' }}>
                                        {celebration.preview}
                                    </Typography>
                                </Box>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {celebration.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    Type: {celebration.type}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    Date: {new Date(celebration.date).toLocaleDateString()}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Recipients: {celebration.recipients.join(', ')}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    startIcon={<EditIcon />}
                                    onClick={() => handleEdit(celebration.id)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    size="small"
                                    startIcon={<ShareIcon />}
                                    onClick={() => handleShare(celebration)}
                                >
                                    Share
                                </Button>
                                <Button
                                    size="small"
                                    startIcon={<DeleteIcon />}
                                    color="error"
                                    onClick={() => handleDelete(celebration.id)}
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
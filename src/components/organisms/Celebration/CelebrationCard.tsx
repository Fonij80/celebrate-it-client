import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface CelebrationCardProps {
    title: string;
    description: string;
    icon: string;
    onClick: () => void;
}

const CelebrationCard = ({ title, description, icon, onClick }: CelebrationCardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <Card
                sx={{
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                        boxShadow: 6,
                    },
                }}
                onClick={onClick}
            >
                <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Typography variant="h2">{icon}</Typography>
                    </Box>
                    <Typography variant="h6" component="h2" gutterBottom align="center">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default CelebrationCard; 
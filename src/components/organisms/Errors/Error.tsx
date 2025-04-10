import { Box, Typography, Button } from '@mui/material';
import { Error as ErrorIcon } from '@mui/icons-material';

interface ErrorProps {
    message: string;
    onRetry?: () => void;
}

export const Error = ({ message, onRetry }: ErrorProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '200px',
                gap: 2,
                textAlign: 'center',
            }}
        >
            <ErrorIcon color="error" sx={{ fontSize: 48 }} />
            <Typography variant="h6" color="error">
                {message}
            </Typography>
            {onRetry && (
                <Button variant="contained" color="primary" onClick={onRetry}>
                    Try Again
                </Button>
            )}
        </Box>
    );
}; 
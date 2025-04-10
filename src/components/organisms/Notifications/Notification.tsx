import { Snackbar, Alert, AlertProps } from '@mui/material';

interface Notification {
    id: string;
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
    duration?: number;
}

interface NotificationProps {
    notification: Notification;
    onClose: () => void;
}

const getSeverity = (type: Notification['type']): AlertProps['severity'] => {
    switch (type) {
        case 'success':
            return 'success';
        case 'error':
            return 'error';
        case 'warning':
            return 'warning';
        case 'info':
        default:
            return 'info';
    }
};

export const Notification = ({ notification, onClose }: NotificationProps) => {
    const { message, type } = notification;

    return (
        <Snackbar
            open={true}
            autoHideDuration={notification.duration || 5000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert
                onClose={onClose}
                severity={getSeverity(type)}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}; 
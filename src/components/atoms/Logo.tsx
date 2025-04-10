import { Box } from '@mui/material';
import logo from '../../assets/react.svg';

export const Logo = () => {
    return (
        <Box
            component="img"
            sx={{
                height: 40,
                width: 'auto',
                maxHeight: { xs: 30, md: 40 },
                maxWidth: { xs: 120, md: 160 },
            }}
            alt="Logo"
            src={logo}
        />
    );
}; 
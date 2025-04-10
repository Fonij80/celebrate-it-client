import { createTheme } from '@mui/material/styles';

const pastelColors = {
  primary: {
    main: '#A8D5BA', // Soft green
    light: '#C8E6C9',
    dark: '#81C784',
  },
  secondary: {
    main: '#FFB5C2', // Soft pink
    light: '#FFCDD2',
    dark: '#E57373',
  },
  background: {
    default: '#F5F5F5',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#2C3E50',
    secondary: '#546E7A',
  },
};

const darkPastelColors = {
  primary: {
    main: '#81C784', // Darker green
    light: '#A8D5BA',
    dark: '#4CAF50',
  },
  secondary: {
    main: '#E57373', // Darker pink
    light: '#FFB5C2',
    dark: '#D32F2F',
  },
  background: {
    default: '#121212',
    paper: '#1E1E1E',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B0BEC5',
  },
};

export const theme = createTheme({
  palette: {
    mode: 'light',
    ...pastelColors,
  },
  typography: {
    fontFamily: [
      'Vazirmatn',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...darkPastelColors,
  },
  typography: {
    fontFamily: [
      'Vazirmatn',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});
import { createTheme } from '@mui/material/styles';

// Definiere die Farben für den Light Mode
const lightTheme = {
  palette: {
    mode: 'light' as 'light',  // Explizit den Typ angeben
    background: {
      default: '#ffffff',
      paper: '#f1f1f1',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
    warning: {
      main: '#47c98c', // Gelb für aktive Buttons
    },
    primary: {
      main: '#a1e36f',
    }
  },
};

// Definiere die Farben für den Dark Mode
const darkTheme = {
  palette: {
    mode: 'dark' as 'dark',  // Explizit den Typ angeben
    background: {
      default: '#1c1c1a',
      paper: '#333333',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
    warning: {
      main: '#3f6323', // Gelb für aktive Buttons
    },
    primary: {
      main: '#a1e36f',
    }
  },
};

// Kombiniere die Themes basierend auf dem Modus
const theme = (mode: 'light' | 'dark') => 
  createTheme(mode === 'light' ? lightTheme : darkTheme);

export default theme;

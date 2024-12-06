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
      main: '#FBC02D', // Gelb für aktive Buttons
    },
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
      main: '#FFEB3B', // Gelb für aktive Buttons
    },
  },
};

// Kombiniere die Themes basierend auf dem Modus
const theme = (mode: 'light' | 'dark') => 
  createTheme(mode === 'light' ? lightTheme : darkTheme);

export default theme;

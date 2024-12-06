export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx,vue}',
  ],
  darkMode: 'class', // Dark Mode über Klasse aktivieren
  theme: {
    extend: {
      colors: {
        // Schwarz und Weiß Farben
        'light-background': '#ffffff',  // Heller Hintergrund (weiß)
        'dark-background': '#1c1c1a',   // Dunkler Hintergrund (schwarz)
        'light-text': '#000000',        // Schwarzer Text (heller Modus)
        'dark-text': '#ffffff',         // Weißer Text (dunkler Modus)

        // Header Text Farben
        'light-headerText': '#000000',  // Schwarzer Header-Text (heller Modus)
        'dark-headerText': '#ffffff',   // Weißer Header-Text (dunkler Modus)

        // Akzentfarben (beispielhaft mit Blau und Grün)
        'blue-light': '#ADD8E6',         // Helles Blau
        'blue-dark': '#0D47A1',          // Dunkles Blau
        'green-light': '#8BC34A',        // Helles Grün
        'green-dark': '#388E3C',         // Dunkles Grün
        'yellow-light': '#FFEB3B',       // Helles Gelb
        'yellow-dark': '#FBC02D',        // Dunkles Gelb

        // Sekundäre Farben
        'light-secondary': '#f1f1f1',    // Sehr helles Grau (für Sekundärfarben im hellen Modus)
        'dark-secondary': '#333333',     // Dunkles Grau (für Sekundärfarben im dunklen Modus)

        // Icon Farben
        'light-icon': '#000000',         // Schwarze Icons im hellen Modus
        'dark-icon': '#ffffff',          // Weiße Icons im dunklen Modus
      },
      
    },
  },
  plugins: [],
};

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Exportiere die Konfiguration mit dem defineConfig-Hilfswerkzeug
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 , // Optional, wenn du einen spezifischen Port brauchst
  },
  base: process.env.NODE_ENV === 'production' ? '/my-app/' : '/',
  build: {
    minify: 'esbuild', // Schnellere Minifizierung mit esbuild
    cssCodeSplit: true, // Teilt CSS für eine bessere Ladeperformance
    sourcemap: false, // Deaktiviert Sourcemaps im Produktionsbuild
    chunkSizeWarningLimit: 500, // Gibt eine Warnung aus, wenn die Chunks zu groß sind
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // Setzt Umgebungsvariablen
  },
});

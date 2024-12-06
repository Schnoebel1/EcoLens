import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Exportiere die Konfiguration mit dem defineConfig-Hilfswerkzeug
export default defineConfig({
  plugins: [react()],
});

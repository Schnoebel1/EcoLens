import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme'; // Das erstellte Theme importieren
import Header from './components/Header';
import CapturePhoto from './components/CapturePhoto';
import FooterWithButtons from './components/FooterWithButtons';
import FooterWithInfo from './components/FooterWithInfo';
import Home from './components/Home';
import Analytics from './components/Analytics';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark Mode aus dem localStorage laden, falls vorhanden
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  // Dark Mode auf der Webseite speichern
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Toggle-Funktion für den Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme(isDarkMode ? 'dark' : 'light')}>
      <CssBaseline /> {/* Fügt globales Reset hinzu */}
      <Router>
        <div className="App">
          {/* Header mit Dark Mode Toggle */}
          <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

          <main style={{ padding: '16px', minHeight: 'calc(100vh - 112px)' }}>
            {/* Routen definieren */}
            <Routes>
            <Route path="/home" element={<Home />} />

              <Route path="/image-analysis" element={<CapturePhoto />} />
              <Route path="/home" element={<Home />} />
              <Route path="/analytics" element={<Analytics />} />

              {/* Fallback-Route für alle anderen URLs */}
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </main>

          {/* Footer-Komponenten <FooterWithInfo />*/}
          <FooterWithInfo />
          <FooterWithButtons />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

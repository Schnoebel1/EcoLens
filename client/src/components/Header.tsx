import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, useTheme } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  const theme = useTheme();
  const activeColor = theme.palette.warning.main; // Use activeColor from the theme


  return (
    <>
      <AppBar
        position="fixed"
        elevation={0} // iOS-typisch flach, kein Schatten
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300, // Ensure it stays above other content
          backgroundColor: isDarkMode ? '#1C1C1E' : '#F8F8F8', // iOS Dark/Light Mode Farben
          borderBottom: `1px solid ${isDarkMode ? '#3A3A3C' : '#E5E5EA'}`, // iOS-typische Trennlinie
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', paddingX: 2 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="src/assets/logo.png"
              alt="EcoLens Logo"
              style={{ height: '32px', marginRight: '8px' }} // iOS-typische kleine Logogröße
            />
          </Box>

          {/* Title (zentriert im iOS-Stil) */}
          <Typography
            variant="h6"
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: "'SF Pro Display', 'Roboto', sans-serif",
              fontWeight: 600,
              color: isDarkMode ? '#FFFFFF' : activeColor, // iOS Farben
            }}
          >
            EcoLens
          </Typography>

          {/* Dark Mode Toggle */}
          <IconButton onClick={toggleDarkMode} color="inherit">
            {isDarkMode ? (
              <LightMode sx={{ color: '#FFD60A', fontSize: 24 }} /> // iOS Sun Yellow
            ) : (
              <DarkMode sx={{ color: '#1C1C1E', fontSize: 24 }} /> // iOS Moon Dark
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content Offset */}
      <Box sx={{ paddingTop: '56px' }}> {/* Add padding to offset the fixed header */}
        {/* Your main content goes here */}
      </Box>
    </>
  );
};

export default Header;

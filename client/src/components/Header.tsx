import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

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
        position="fixed" // Keep the header fixed at the top
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300, // Ensure it stays above other content
          backgroundColor: isDarkMode ? '#333' : '#ffffff', // Background color based on theme
          boxShadow: 'none', // Remove the shadow from the header
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
          {/* Title */}
          <Typography
            variant="h4" // Increase font size for "EcoLens"
            noWrap
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              color: activeColor, // Apply activeColor to EcoLens text
            }}
          >
            EcoLens
          </Typography>

          {/* Dark Mode Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {isDarkMode ? (
                <Brightness7 sx={{ color: theme.palette.text.primary }} />
              ) : (
                <Brightness4 sx={{ color: theme.palette.text.primary }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Box sx={{ paddingTop: '64px' }}> {/* Add padding to offset the fixed header */}
        {/* Your main content goes here */}
      </Box>
    </>
  );
};

export default Header;

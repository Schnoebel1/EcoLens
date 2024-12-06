import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Menu, MenuItem, useTheme } from '@mui/material';
import { Brightness4, Brightness7, AccountCircle, Settings, Menu as MenuIcon } from '@mui/icons-material';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Zugriff auf das aktuelle Theme
  const theme = useTheme();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar 
        position="fixed" // Fixiert den Header immer oben
        sx={{
          top: 0, // Stellt sicher, dass er oben bleibt
          left: 0,
          right: 0,
          zIndex: 1300, // Höherer Z-Index, um über anderen Inhalten zu liegen
          backgroundColor: isDarkMode ? '#333' : '#ffffff', // Dark Mode: Dunkel, Light Mode: Weiß
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
          {/* Title */}
          <Typography 
            variant="h6" 
            noWrap 
            sx={{ 
              flexGrow: 1, 
              textAlign: 'center',
              color: theme.palette.text.primary, // Dynamische Textfarbe basierend auf dem Theme
            }}
          >
            Calisthenics Skilltree
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

            {/* Desktop Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <IconButton color="inherit">
                <AccountCircle sx={{ color: theme.palette.text.primary }} />
              </IconButton>
              <IconButton color="inherit">
                <Settings sx={{ color: theme.palette.text.primary }} />
              </IconButton>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleMenuOpen}
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <MenuIcon sx={{ color: theme.palette.text.primary }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Dropdown */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <AccountCircle sx={{ mr: 1, color: theme.palette.text.primary }} />
          <Typography sx={{ color: theme.palette.text.primary }}>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Settings sx={{ mr: 1, color: theme.palette.text.primary }} />
          <Typography sx={{ color: theme.palette.text.primary }}>Settings</Typography>
        </MenuItem>
      </Menu>

      {/* Main Content Area */}
      <Box sx={{ paddingTop: '64px' }}>  {/* Hier paddingTop entsprechend der Höhe des Headers */}
        {/* Dein Content kommt hier rein */}
      </Box>
    </>
  );
};

export default Header;

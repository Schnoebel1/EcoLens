import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import { Home, Analytics, CenterFocusWeakOutlined } from '@mui/icons-material';

const FooterWithButtons: React.FC = () => {
  const location = useLocation(); // Get the current path
  const theme = useTheme();

  const activeColor = theme.palette.primary.main; // Active color
  const textColor = theme.palette.text.primary; // Text for unselected
  const iconColor = theme.palette.text.secondary; // Icon for unselected
   

  // Shared styles for buttons
  const sharedStyles = (isActive: boolean) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: isActive ? iconColor : textColor,
    transform: isActive ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.2s, color 0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    userSelect: 'none', // Prevent text selection
  });

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: theme.palette.background.paper,
        py: 1.5,
        borderTop: `1px solid ${theme.palette.divider}`,
        zIndex: 10,
        userSelect: 'none', // Prevent selection for the entire footer
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {/* Home Button */}
        <NavLink to="/home" style={{ textDecoration: 'none' }}>
          <Box sx={sharedStyles(location.pathname === '/home')}>
            <Home
              sx={{
                fontSize: 30,
                color: location.pathname === '/home' ? activeColor : iconColor,
              }}
            />
            <Typography variant="caption" sx={{ mt: 0.5 }}>
              Home
            </Typography>
          </Box>
        </NavLink>

        {/* Center Icon */}
        <NavLink to="/image-analysis" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              ...sharedStyles(location.pathname === '/image-analysis'),
              marginTop: '-15px', // Center icon is slightly lifted
              position: 'relative',
              transform: 'scale(1.2)', // Make it permanently larger
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.warning.main, // Circle matches the footer background
                borderRadius: '50%',
                padding: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Subtle shadow for the circle
              }}
            >
              <CenterFocusWeakOutlined
                sx={{
                  fontSize: 40,
                  color: location.pathname === '/image-analysis' ? activeColor : iconColor,
                }}
              />
            </Box>
            <Typography variant="caption" sx={{ mt: 0.5 }}>
              Image Analysis
            </Typography>
          </Box>
        </NavLink>

        {/* Analytics Button */}
        <NavLink to="/analytics" style={{ textDecoration: 'none' }}>
          <Box sx={sharedStyles(location.pathname === '/analytics')}>
            <Analytics
              sx={{
                fontSize: 30,
                color: location.pathname === '/analytics' ? activeColor : iconColor,
              }}
            />
            <Typography variant="caption" sx={{ mt: 0.5 }}>
              Analytics
            </Typography>
          </Box>
        </NavLink>
      </Box>
    </Box>
  );
};

export default FooterWithButtons;

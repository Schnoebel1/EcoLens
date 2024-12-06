import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import { Home, Analytics, CenterFocusWeakOutlined } from '@mui/icons-material'; // MUI Icons

const FooterWithButtons: React.FC = () => {
  const location = useLocation(); // Get the current path
  const theme = useTheme(); // Get the theme

  const activeColor = theme.palette.primary.main; // Active color for selected icon
  const textColor = theme.palette.text.primary; // Text color based on theme
  const iconColor = theme.palette.text.secondary; // Icon color for unselected state

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: theme.palette.background.paper,
        py: 1.5, // Reduced vertical padding for a more compact design
        borderTop: `1px solid ${theme.palette.divider}`,
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around', // Space items evenly with Home in the center
          alignItems: 'center',
        }}
      >
        {/* Left - Home Button */}
        <NavLink
          to="/skill-tree"
          style={{
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: location.pathname === '/skill-tree' ? activeColor : textColor,
              transform: location.pathname === '/skill-tree' ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.2s, color 0.2s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Home
              sx={{
                fontSize: 30, // Slightly larger font for better visibility
                color: location.pathname === '/image-analysis' ? activeColor : iconColor,
              }}
            />
            <Typography
              variant="caption"
              sx={{
                fontWeight: location.pathname === '/image-analysis' ? 600 : 400,
                color: location.pathname === '/image-analysis' ? activeColor : textColor,
                mt: 0.5, // Reduced margin for a more compact look
              }}
            >
              Home
            </Typography>
          </Box>
        </NavLink>

        {/* Center - Home Icon (with Pop-out effect and rounding) */}
        <NavLink
          to="/image-analysis"
          style={{
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: location.pathname === '/image-analysis' ? activeColor : textColor,
              transform: location.pathname === '/image-analysis' ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.2s, color 0.2s',
              position: 'relative', // Relative positioning to lift it higher
              marginTop: '-10px', // Lift the icon higher than the rest
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: location.pathname === '/image-analysis' ? activeColor : 'transparent',
                borderRadius: '50%',
                padding: '10px',
                boxShadow: location.pathname === '/image-analysis' ? '0px 4px 12px rgba(0, 0, 0, 0.2)' : 'none', // Shadow effect to make it pop
              }}
            >
              <CenterFocusWeakOutlined
                sx={{
                  fontSize: 40, // Larger font size to make it stand out
                  color: location.pathname === '/image-analysis' ? '#fff' : iconColor,
                }}
              />
            </Box>
            <Typography
              variant="caption"
              sx={{
                fontWeight: location.pathname === '/image-analysis' ? 600 : 400,
                color: location.pathname === '/image-analysis' ? activeColor : textColor,
                mt: 0.5,
              }}
            >
              Image Analysis
            </Typography>
          </Box>
        </NavLink>

        {/* Right - Analytics Button */}
        <NavLink
          to="/analytics"
          style={{
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: location.pathname === '/analytics' ? activeColor : textColor,
              transform: location.pathname === '/analytics' ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.2s, color 0.2s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Analytics
              sx={{
                fontSize: 30, // Slightly larger icon for better visibility
                color: location.pathname === '/analytics' ? activeColor : iconColor,
              }}
            />
            <Typography
              variant="caption"
              sx={{
                fontWeight: location.pathname === '/analytics' ? 600 : 400,
                color: location.pathname === '/analytics' ? activeColor : textColor,
                mt: 0.5,
              }}
            >
              Analytics
            </Typography>
          </Box>
        </NavLink>
      </Box>
    </Box>
  );
};

export default FooterWithButtons;

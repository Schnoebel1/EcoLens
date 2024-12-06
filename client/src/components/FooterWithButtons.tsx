import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const FooterWithButtons: React.FC = () => {
  const location = useLocation(); // Aktuellen Pfad abrufen
  const theme = useTheme(); // Theme abrufen

  const activeColor = theme.palette.warning.main;
  const textColor = theme.palette.text.primary;
  const iconColor = theme.palette.text.primary;
  const bgColor = theme.palette.background.paper;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: bgColor,
        py: 2,
        borderTop: `1px solid ${theme.palette.divider}`,
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        {/* Hubansicht Button */}
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
            <HubIcon sx={{ fontSize: 25, color: location.pathname === '/skill-tree' ? activeColor : iconColor }} />
            <Typography variant="body2">Skill Tree</Typography>
          </Box>
        </NavLink>

        {/* Listenansicht Button */}
        <NavLink
          to="/exercises"
          style={{
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: location.pathname === '/exercises' ? activeColor : textColor,
              transform: location.pathname === '/exercises' ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.2s, color 0.2s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <FormatListBulletedIcon
              sx={{ fontSize: 25, color: location.pathname === '/exercises' ? activeColor : iconColor }}
            />
            <Typography variant="body2">Exercises</Typography>
          </Box>
        </NavLink>
      </Box>
    </Box>
  );
};

export default FooterWithButtons;

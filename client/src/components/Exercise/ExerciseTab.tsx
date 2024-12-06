import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';

const SimplePage: React.FC = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Eco Lens
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: theme.spacing(4) }}>
        A sustainable way to capture your world.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          textTransform: 'none',
          padding: theme.spacing(1.5, 4),
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default SimplePage;

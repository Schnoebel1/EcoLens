import React from 'react';
import { Box, Typography, Button, useTheme, Stack, Divider } from '@mui/material';
import { EnergySavingsLeaf, CameraAltOutlined, InsightsOutlined, ArrowForwardIos } from '@mui/icons-material';

const Home: React.FC = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(1.5), // Reducing overall padding
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: 'center',
          marginTop: theme.spacing(2), // Reduced marginTop for compactness
        }}
      >
        <EnergySavingsLeaf sx={{ fontSize: 60, color: theme.palette.primary.main }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: theme.spacing(1),  }}> {/* Reduced marginTop */}
          Welcome to Eco Lens
        </Typography>
        <Typography variant="body2" sx={{ marginTop: theme.spacing(0.5), color: theme.palette.text.secondary, marginBottom: theme.spacing(6) }}>
          Transform the way you interact with your surroundings through sustainability and AI-powered insights.
        </Typography>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.spacing(1.5), // Reduced borderRadius for tighter look
          boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.1)`,
          padding: theme.spacing(2), // Reduced padding
          textAlign: 'center',
          marginBottom: theme.spacing(6), // Reduced marginBottom
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(1) }}> {/* Reduced marginBottom */}
          Features
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={1.5} // Reduced spacing between icons
          sx={{ marginBottom: theme.spacing(1) }} // Reduced marginBottom
        >
          <Box sx={{ textAlign: 'center' }}>
            <CameraAltOutlined sx={{ fontSize: 40, color: theme.palette.primary.main }} />
            <Typography variant="caption" sx={{ marginTop: theme.spacing(2) }}> {/* Reduced marginTop */}
              Capture Waste
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <InsightsOutlined sx={{ fontSize: 40, color: theme.palette.primary.main }} />
            <Typography variant="caption" sx={{ marginTop: theme.spacing(0.5) }}>
              AI Insights
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <EnergySavingsLeaf sx={{ fontSize: 40, color: theme.palette.primary.main }} />
            <Typography variant="caption" sx={{ marginTop: theme.spacing(0.5) }}>
              Eco-Friendly
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ marginY: theme.spacing(1) }} /> {/* Reduced vertical margin */}
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          Explore how Eco Lens empowers you to track your waste, recycle, gain meaningful insights, and contribute to a greener
          planet.
        </Typography>
      </Box>

      {/* Call-to-Action Section */}
      <Box
        sx={{
          width: '100%',
          padding: theme.spacing(2), // Reduced padding
          textAlign: 'center',
          marginBottom: theme.spacing(3)
        }}
      >
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            borderRadius: theme.spacing(1.5), // Reduced borderRadius for a tighter button
            textTransform: 'none',
            padding: theme.spacing(1), // Reduced padding
            fontSize: '15px', // Slightly smaller font size
            fontWeight: 'bold',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          Get Started
          <ArrowForwardIos sx={{ fontSize: 16, marginLeft: theme.spacing(1) }} />
        </Button>
      </Box >

      {/* Footer Section */}
      <Box
        sx={{
          textAlign: 'center',
          paddingBottom: theme.spacing(1), // Reduced paddingBottom
        }}
      >
        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
          Made with ❤️ for a sustainable future.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
